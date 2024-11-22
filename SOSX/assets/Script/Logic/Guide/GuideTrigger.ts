import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import { GuideStep } from "./GuideConfig";
import GuideController from "./GuideController";

declare let require: any;
const { ccclass, property } = cc._decorator;
const ErrCondNotSatisfied: Error = new Error("guide condition not satisfied")

@ccclass
export default class GuideTrigger extends cc.Component {
    private _guideRunning: boolean = false;
    protected guideTrunkData: tab.GuideTable[];
    protected guideBranchData: tab.GuideTable[];

    setGuideRunning(bRunning) {
        this._guideRunning = bRunning;
    }

    onLoad() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.SceneLoaded, (name: string) => {
            if (name == 'MainScene') {
                this.checkGuide()
            }
        }, this)
        Net.listenLoaclMessage(LOCAL_MESSAGE.CheckGuide, () => {
            /* 20230310 wzq 去掉新手引导 */
            this.checkGuide()
        }, this)
    }

    removeListens() {
        Net.unlistenTarget(this)
    }

    checkGuide() {
        if (GuideController.Instance.isGuiding()) {
            return;
        }

        cc.log('checkGuide...')

        if (this.guideTrunkData === undefined) {
            let allGuideData = tab.Data.GuideTable.slice()
            allGuideData.sort((data1: tab.GuideTable, data2: tab.GuideTable) => data1.GuidID - data2.GuidID)

            this.guideTrunkData = []
            this.guideBranchData = []
            for (let data of allGuideData) {
                if (data.Type == tab.GuideType.GuideType_Trunk) {
                    this.guideTrunkData.push(data)
                } else {
                    this.guideBranchData.push(data)
                }
            }
        }

        //检查主线引导
        Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, false)
        this.runGuide(this.guideTrunkData, true, result => {
            if (result) {
                //检查支线引导
                this.runGuide(this.guideBranchData, false, () => {
                    Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true)
                });
            } else {
                Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true)
            }
        })
    }

    runGuide(guideArray: tab.GuideTable[], stopOnFailed: boolean, endCallback?: Function) {
        let bGuideOver = Role.Instance.RoleData.guideTrunk >= GuideStep.GuideTrunkDone;
        if (this._guideRunning || bGuideOver) {
            cc.log('GuideTrigger is running...')
            if (bGuideOver && endCallback) endCallback()
            return;
        }
        this.setGuideRunning(true);

        async.eachSeries(guideArray, (guideData, next) => {
            cc.log("guide checking :%s", guideData.ScriptName);
            try {
                let { task } = require(guideData.ScriptName);

                if (this.checkPass(task, guideData)) {
                    //已经引导过了，或task.skip()返回true
                    next();
                } else {
                    // 检测条件
                    if (this.checkCondition(task, guideData)) {
                        cc.log("guide runing :%s", guideData.GuidID);
                        if (!this.checkGuideScene(guideData)) {
                            next(new Error("guide scene not satisfied"));
                            return;
                        }
                        if (guideData.GuidID !== undefined) {
                            /* zhibo-S@20230410 for <删除打点> */
                            // Analytics.Instance.EventStart(CAEvtID.EventTracking, {
                            //     name: CAEvtName.Guide,
                            //     guide_id: `${guideData.GuidID}`,
                            // })
                            /* zhibo-E@20230410 for <删除打点> */
                        }
                        GuideController.Instance.runningGuideData = guideData;
                        GuideController.Instance.runTask(task, guideData.GuidID, error => {
                            if (GuideController.Instance.runningGuideData) {
                                if (!error) {
                                    cc.log(`guide finished :${guideData.GuidID}`);
                                    /* zhibo-S@20230410 for <删除打点> */
                                    // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, {
                                    //     name: CAEvtName.Guide,
                                    //     guide_id: `${guideData.GuidID}`,
                                    // })
                                    /* zhibo-E@20230410 for <删除打点> */
                                    if (task.finish === undefined || task.finish === true) {
                                        cc.log(`guide send to server :${guideData.GuidID}`);
                                        // Role.Instance.FinishGuide(guideData.GuidID)
                                        Role.Instance.RoleData.guideTrunk = guideData.GuidID;
                                    }
                                }
                                GuideController.Instance.runningGuideData = null;
                            }
                            if (stopOnFailed) {
                                next(error);
                            } else {
                                if (error instanceof (Error)) {
                                    cc.log(error.message)
                                } else {
                                    cc.log(error)
                                }
                                next()
                            }
                        });
                    }
                    else {
                        if (stopOnFailed) {
                            //不符合引导开启的条件,不再检查下一条
                            next(ErrCondNotSatisfied);
                        } else {
                            //检查下一条
                            next()
                        }
                    }
                }
            } catch (error) {
                //发生异常
                GuideController.Instance.runningGuideData = null;
                next(error)
            }
        }, (err: Error | string) => {
            this.setGuideRunning(false);
            if (err) {
                if (err instanceof (Error)) {
                    cc.log(err.message)
                } else {
                    cc.log(err)
                }
            }
            Net.unlistenTarget(GuideController.Instance)
            if (endCallback) {
                if (!err || err === ErrCondNotSatisfied) {
                    //正常结束
                    endCallback(true)
                } else {
                    //异常结束
                    endCallback(false)
                }
            }
        })
    }

    protected isGuidePass(guideId) {
        let guideData = tab.Data.GuideTableByGuidID.getValue(guideId);
        if (!guideData) {
            return false;
        }

        if (guideData.Type == tab.GuideType.GuideType_Trunk) {
            if (Role.Instance.RoleData.guideTrunk < guideId) {
                return false
            }
        } else {
            //支线引导
            if (Role.Instance.RoleData.guideBranch.indexOf(guideId) < 0) {
                return false
            }
        }

        return true
    }

    protected checkPass(task: any, guideData: tab.GuideTable): boolean {
        if (!!task.skip) {
            if (task.skip()) {
                //跳过
                return true;
            }
        }

        return this.isGuidePass(guideData.GuidID);
    }

    protected checkCondition(task: any, guideData: tab.GuideTable): boolean {
        for (let preGuideID of guideData.PreGuide) {
            if (!this.isGuidePass(preGuideID)) {
                //前置引导还没有完成
                return false;
            }
        }

        if (task.condition !== undefined && !task.condition()) {
            return false
        }

        return true
    }

    protected checkGuideScene(guideData) {
        if (!guideData) {
            return true;
        }

        let sceneName = guideData.Scene == tab.GuideScene.GuideScene_MainScene ? "MainScene" : "ChessFightScene";
        return cc.director.getScene().name === sceneName;
    }
}
