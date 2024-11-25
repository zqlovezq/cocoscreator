import { _decorator, Component, director, log, Node } from 'cc';
import { Net } from '../net/Net';
import { EventMgr } from '../mgr/EventMgr';
import { tab } from '../../Table/table_gen';
import { LocalEvent } from '../define/LocalEvent';
import { GuideController } from './GuideController';
import { guideTask } from './GuideTask';
import { RoleData } from '../model/role/RoleData';
// import { task_100 } from './tasks/task_100';
const ErrCondNotSatisfied: Error = new Error("guide condition not satisfied")
const { ccclass, property } = _decorator;

@ccclass('GuideTrigger')
export class GuideTrigger extends Component {
    private _guideRunning: boolean = false;
    protected guideTrunkData: tab.GuideTable[];
    protected guideBranchData: tab.GuideTable[];
    removeListens() {
        EventMgr.unTarget(this);
    }
    setGuideRunning(bRunning) {
        this._guideRunning = bRunning;
    }
    onLoad(): void {
        EventMgr.onLocal(LocalEvent.CheckGuide, () => {
            this.checkGuide()
        }, this)
    }
    checkGuide() {
        if (GuideController.ins.isGuiding()) {
            return;
        }
        log('checkGuide...')

        if (this.guideTrunkData === undefined) {
            let allGuideData = tab.getData().GuideTable.slice();
            allGuideData.sort((data1: tab.GuideTable, data2: tab.GuideTable) => data1.Id - data2.Id)

            this.guideTrunkData = []
            this.guideBranchData = []//支线

            for (let data of allGuideData) {
                if(data.GuideType===tab.GuideType.GuideType_Trunk){
                    this.guideTrunkData.push(data)
                }
                // else{
                //     this.guideBranchData.push(data)
                // }
            }

        }
        this.runGuide(this.guideTrunkData, true, result => {
            this.guideEndCallBack(result);
        })
    }
    runGuide(guideArray: tab.GuideTable[], stopOnFailed: boolean, endCallback?: Function) {
        /* 是否新手引导完毕 */
        let bGuideOver = RoleData.ins.IsGuideFinished();
        if (this._guideRunning || bGuideOver) {
            if (bGuideOver && endCallback) endCallback()
            return;
        }
        this.setGuideRunning(true);
        this.ergodicGuide(guideArray, stopOnFailed, endCallback)
    }
    /* 遍历运行引导 */
    ergodicGuide(guideArray: tab.GuideTable[], stopOnFailed: boolean, endCallback?: Function) {
        async.eachSeries(guideArray, (guideData, next) => {
            log("guide checking :%s", guideData.ScriptName);
            try {
                const task = guideTask[guideData.ScriptName];
                if (this.checkPass(task, guideData)) {
                    //已经引导过了，或task.skip()返回true
                    next();
                } else {
                    // 检测条件
                    if (this.checkCondition(task, guideData)) {
                        log("guide runing :%s", guideData.Id);
                        if (!this.checkGuideScene(guideData)) {
                            next(new Error("guide scene not satisfied"));
                            return;
                        }
                        if (guideData.Id !== undefined) {

                        }
                        GuideController.ins.runningGuideData = guideData;
                        GuideController.ins.runTask(task, guideData.Id, error => {
                            if (GuideController.ins.runningGuideData) {
                                if (!error) {
                                    log(`guide finished :${guideData.Id}`);
                                    if (task.finish === undefined || task.finish === true) {
                                        log(`guide send to server :${guideData.Id}`);
                                        RoleData.ins.setClientData("guideTrunk",String(guideData.Id))
                                    }
                                }
                                GuideController.ins.runningGuideData = null;
                            }
                            if (stopOnFailed) {
                                next(error);
                            } else {
                                if (error instanceof (Error)) {
                                    log(error.message)
                                } else {
                                    log(error)
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
                GuideController.ins.runningGuideData = null;
                next(error)
            }
        }, (err: Error | string) => {
            this.setGuideRunning(false);
            if (err) {
                if (err instanceof (Error)) {
                    log(err.message)
                } else {
                    log(err)
                }
            }
            EventMgr.unTarget(GuideController.ins)
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
    guideEndCallBack(result) {
        if (result) {
            //检查支线引导
            this.runGuide(this.guideBranchData, false, () => {
                // Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true)
            });
        } else {
            // Net.pushLoaclMessage(LOCAL_MESSAGE.EnablePageViewTouch, true)
        }
    }
    protected checkPass(task: any, guideData: tab.GuideTable): boolean {
        if (!!task.skip) {
            if (task.skip()) {
                //跳过
                return true;
            }
        }

        return this.isGuidePass(guideData.Id);
    }
    protected checkCondition(task: any, guideData: tab.GuideTable): boolean {
        if (task.condition !== undefined && !task.condition()) {
            return false
        }

        return true
    }
    protected isGuidePass(guideId) {
        let guideData = tab.getData().GuideTableById.getValue(guideId);
        if (!guideData) {
            return false;
        }
        if(Number(RoleData.ins.clientData.guideTrunk) < guideId){
            return false
        }
        return true

    }
    protected checkGuideScene(guideData) {
        if (!guideData) {
            return true;
        }
        return true;
        // let sceneName = guideData.Scene == tab.GuideScene.GuideScene_MainScene ? "MainScene" : "ChessFightScene";
        // return director.getScene().name === sceneName;
    }

}
