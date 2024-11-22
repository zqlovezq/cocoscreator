/**
 *  任务
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { CaiHongData, RATaskState } from "../../sdk/rainbow/CaiHongData";
import { tab } from "../../Table/table_gen";
import boxtips from "../Common/boxtips";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { FontChangeAction, ProgressFromTo } from "../Fight/CustomActions";
import Func from "../Utils/Func";
import { getBoxIDAndCfg, getRoleGradeLvStr, getServerUtcTime, hideFlyResources, LoadPreNode, popRewardLayer_Ex, setGray, setTextWithAction, setTimeTXT, showPopLayer, showPopLayerV2, ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Taskitemshow from "./Taskitemshow";
import Tasknode from "./Tasknode";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TaskDetailLayer extends PopLayer {

    @property(cc.ScrollView)
    scrollview: cc.ScrollView = null; /*  */

    @property(cc.Layout)
    rootlayout: cc.Layout = null

    @property(cc.Node)
    boxnode: cc.Node = null; /*  */

    @property(cc.Label)
    boxnode_name: cc.Label = null; /*  */

    @property(cc.Label)
    boxnode_fromname: cc.Label = null; /*  */

    @property(cc.Sprite)
    boxnode_progressLeftIcon: cc.Sprite = null

    @property(cc.Label)
    boxnode_progresstxt: cc.Label = null; /*  */

    @property(cc.Label)
    boxnode_progresstxtotal: cc.Label = null; /*  */

    @property(cc.ProgressBar)
    boxnode_progress: cc.ProgressBar = null; /*  */

    @property(cc.Node)
    boxspinenode: cc.Node = null; /*  */

    @property(cc.Sprite)
    successbackground: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    successSaoguang: cc.Sprite = null; /*  */

    // @property(cc.Node)
    // daygiftnode: cc.Node = null

    // @property(cc.Node)
    // daygift_timenode: cc.Node = null

    // @property(cc.Label)
    // daygift_timeleft: cc.Label = null

    @property(cc.Node)
    lefttimenode: cc.Node = null; /* 刷新页面 */

    @property(cc.Node)
    timenode: cc.Node = null; /*  */

    @property(cc.Label)
    timeleftnode_timeleft: cc.Label = null; /*  */

    @property(cc.Label)
    freshbtn_cost: cc.Label = null; /*  */

    @property(cc.Node)
    ADTimeleftnode: cc.Node = null; /*  */

    @property(cc.Label)
    ADTimeleft: cc.Label = null; /*  */

    @property(cc.Button)
    ADBtn: cc.Button = null; /*  */

    @property(cc.Button)
    m_videobtn: cc.Button = null; /*  */

    @property(cc.Label)
    boxadvfreetimes: cc.Label = null; /*  */

    @property(cc.Label)
    refreshCostNumLabel: cc.Label = null; /*  */

    dis24lefttime: number = 0; /*  */
    gift_dis24lefttime: number = 0; /*  */
    timeboxactionflag: boolean = false /*  */
    m_shopData: proto.Msg_GetShopInfoRsp = null; /*  */
    dayPullCount: number = 0; /* 今天进行了几次抽卡了 */
    freePullCount: number = 0; /* 今天进行了几次免费抽卡了 */
    totaltimes: number = 0; /*  */

    //点击顶部的宝箱图标
    timeboxClick() {
        /* TODO: 数据是不对的，需要看之前免费领取的地方 */
        let box = -1;
        let pullType = tab.Data.PullCardTableByPullType.getValue(Number(proto.PullCardType.Free))
        // let roleGrade = Role.Instance.RoleGrade;
        // let rankbox: tab.RankBoxTable = tab.Data.RankBoxTableByBoxGroupID.getValue(pullType.BoxGroupID)
        // box = rankbox?.BoxLevel[roleGrade];
        // let boxGroupCfg: tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(box || 0)

        //if (boxGroupCfg) {
        // if (Role.Instance.taskData.goalBoxScore >= taskboxgroupcfg.Score) {
        //     let param = new proto.Msg_TaskGetGoalBoxReq()
        //     param.boxGroupId = Role.Instance.taskData.boxGroupId
        //     Net.Send(proto.Ptl.TaskGetGoalBoxReq, param)
        // } else {
        //boxtips.showTips(boxGroupCfg.BoxID, this.boxnode)
        boxtips.showTips(pullType?.BoxGroupID, this.boxnode)
        // }
        //}
    }

    //下次任务强制刷新
    timeleft_freshbtnclick() {
        if (Role.Instance.RoleData.diamond < tab.Data.GetKeyValue_ConfigTable().TaskRefreshCostDiamond) {
            showPopLayer("prefab/gotoshoplayer")
            return
        }
        let param = new proto.Msg_TaskRefreshReq()
        param.refreshType = proto.TaskRefreshType.TRT_Diamond
        Net.Send(proto.Ptl.TaskRefreshReq, param)
    }

    //下次任务看广告刷新
    videobtnclick() {
        // ShowTips("FunctionClosedTip")
        // return
        if (this.ADTimeleftnode.active) {
            ShowTips("InCD")
            return
        }
        //sendAdvertPos(tab.AdvertPosType.AdvertPosType_ResetEveryDayTask, kZeroNumber);
        WatchAdvert((error: Error) => {
            if (error === undefined) {
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_ResetEveryDayTask, kZeroNumber);
            }
        },
            (bFinish: boolean) => {
                if (bFinish) {
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_ResetEveryDayTask, kOneNumber);
                    let param = new proto.Msg_TaskRefreshReq();
                    param.refreshType = proto.TaskRefreshType.TRT_AD;
                    Net.Send(proto.Ptl.TaskRefreshReq, param);
                }
            }, tab.AdvertPosType.AdvertPosType_ResetEveryDayTask);
    }

    /*  */
    setTaskGroupBox() {
        let boxGroupID = Role.Instance.taskData.boxGroupId
        let boxinfo = getBoxIDAndCfg(boxGroupID)
        let spine: sp.Skeleton = this.boxspinenode.getComponent(sp.Skeleton)
        if (spine) {
            spine.setAnimation(0, boxinfo.boxCfg.BoxSpineActionName, false)
            // this.timeboxactionflag = true
        }

        this.boxnode_fromname.string = getRoleGradeLvStr()
        this.boxnode_name.string = boxinfo.boxCfg.BoxName

        let taskboxgroupcfg: tab.TaskBoxGroupTable = tab.Data.TaskBoxGroupTableByBoxGroupId.getValue(boxGroupID)
        if (taskboxgroupcfg) {
            this.boxnode_progress.progress = Role.Instance.taskData.goalBoxScore / taskboxgroupcfg.Score
        }

        this.boxnode_progresstxt.string = String(Role.Instance.taskData.goalBoxScore)
        this.boxnode_progresstxtotal.string = `/${taskboxgroupcfg.Score}`

        this.successbackground.node.active = false
        this.successSaoguang.node.active = false
        let ani: cc.Animation = this.successSaoguang.getComponent(cc.Animation)
        if (ani) {
            this.successbackground.node.active = this.boxnode_progress.progress >= 1
            this.successSaoguang.node.active = this.boxnode_progress.progress >= 1

            this.boxnode_progress.progress >= 1 ? ani.play() : ani.stop()
        }
    }

    /*  */
    groupBoxProgressAni() {
        let taskboxgroupcfg: tab.TaskBoxGroupTable = tab.Data.TaskBoxGroupTableByBoxGroupId.getValue(Role.Instance.taskData.boxGroupId)
        let oldprogress = this.boxnode_progress.progress
        let oldscore = Math.ceil(oldprogress * taskboxgroupcfg.Score)
        let newscore = Role.Instance.taskData.goalBoxScore
        let newprogress = newscore / taskboxgroupcfg.Score

        this.boxnode_progress.node.runAction(new ProgressFromTo(0.5, oldprogress, newprogress))
        this.boxnode_progresstxt.node.runAction(new FontChangeAction(oldscore, newscore, 0.5, null))
    }

    /*  */
    setTaskGift() {
        //这里保证有3个数据
        let gift = Role.Instance.taskData.dailyGifts
        let ballempty: boolean = true

        for (let i = 0; i < gift.length; i++) {
            ballempty = ballempty && (gift[i].state == proto.TaskState.HaveReward)
        }

        // this.daygift_timenode.active = ballempty

        if (ballempty) {
            this.gift_dis24lefttime = Func.timeToDayStart(1) - getServerUtcTime()

            // if (this.gift_dis24lefttime > 0) {
            //     setTimeTXT(this.daygift_timeleft, this.gift_dis24lefttime)
            //     this.schedule(this.giftCountDown, 1)
            // }
        }

        // let daygifts: Taskitemshow[] = this.daygiftnode.getComponentsInChildren(Taskitemshow)
        // for (let i = 0; i < daygifts.length; i++) {
        //     if (i < gift.length) {
        //         !ballempty && daygifts[i].setView(gift[i])
        //         ballempty && daygifts[i].setEmpty(true)
        //     } else {
        //         daygifts[i].setEmpty(true)
        //     }
        //     daygifts[i].setRightMark(ballempty)
        // }
    }

    /*  */
    async setTask() {
        let taskinfo = Role.Instance.taskData.dailyTasks
        let info: proto.ITaskData[] = []
        for (let i = 0; i < taskinfo.length; i++) {
            if (taskinfo[i].state < 2) { /* TODO: 这个2应该用个enum来搞定，而不是用2 */
                info.push(taskinfo[i])
            }
        }

        Role.Instance.taskData.dailyTasks = info
        taskinfo = info
        for (let j = 0; j < this.rootlayout.node.childrenCount; j++) {
            this.rootlayout.node.children[j].active = false
        }

        let showTasksCnt: number = 0
        let canAwardIndex: number = 0
        let cellHight: number = 0

        for (let i = 0; i < taskinfo.length; i++) {
            if (taskinfo[i].state == 2) {
                continue;
            }

            showTasksCnt++
            // cc.log("zhibo+ for test: showTasksCnt: " + showTasksCnt)
            let tnode: Tasknode = null
            if (i < this.rootlayout.node.childrenCount) {
                tnode = this.rootlayout.node.children[i].getComponent(Tasknode)
                tnode.node.active = true
            } else {
                tnode = await LoadPreNode("prefab/Tasknode", Tasknode)
                if (tnode) {
                    this.rootlayout.node.addChild(tnode.node)
                    cellHight = tnode.node.getContentSize().height
                }
            }
            tnode.setView(taskinfo[i], i)
            if (taskinfo[i].state == proto.TaskState.Reward) {
                canAwardIndex = i;
            }
        }
        //this.lefttimenode.active = showTasksCnt < 3
        console.log("显示任务数量",showTasksCnt)
        this.lefttimenode.active = showTasksCnt <= 0

        this.scheduleOnce(() => {
            this.scrollview.scrollToOffset(new cc.Vec2(210, canAwardIndex * cellHight))
        }, 0.1)



        //设置距离24点的刷新时间倒计时
        if (this.lefttimenode.active) {
            this.dis24lefttime = Func.timeToDayStart(1) - getServerUtcTime()

            let svrt = getServerUtcTime()
            let ptime = new Date()
            ptime.setTime(svrt * 1000)
            let aa = 86400 - ptime.getHours() * 3600 - ptime.getMinutes() * 60 - ptime.getSeconds()
            console.log(this.dis24lefttime,aa)

            if (this.dis24lefttime > 0) {
                setTimeTXT(this.timeleftnode_timeleft, this.dis24lefttime)
                this.unschedule(this.taskCountDown);
                this.schedule(this.taskCountDown, 1)
            }

            this.ADTimeleftnode.active = Role.Instance.taskData.adRefreshLeftSec > 0
            if (this.ADTimeleftnode.active) {
                this.ADBtn.enableAutoGrayEffect = true
                this.ADTimeleft.node.active = true
                setTimeTXT(this.ADTimeleft, Role.Instance.taskData.adRefreshLeftSec)
                this.unschedule(this.ADCountDown);
                this.schedule(this.ADCountDown, 1)
            }

            let cost = tab.Data.GetKeyValue_ConfigTable().TaskRefreshCostDiamond
            this.refreshCostNumLabel.string = cost.toString();
        }
    }

    /*  */
    ADCountDown() {
        let timeleft = Role.Instance.taskData.adRefreshLeftSec
        if (timeleft <= 0) {
            this.ADTimeleftnode.active = false
            this.ADBtn.enableAutoGrayEffect = false
            this.unschedule(this.ADCountDown);
            return;
        }
        timeleft--
        timeleft = timeleft < 0 ? 0 : timeleft
        setTimeTXT(this.ADTimeleft, timeleft);
    }

    /*  */
    taskCountDown() {
        if (this.dis24lefttime <= 0) {
            this.timenode.active = false
            //重新发送任务的请求
            let param = new proto.Msg_GetRankPackageInfoReq()
            Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
            this.unschedule(this.taskCountDown);
            return;
        }
        this.dis24lefttime--
        this.dis24lefttime = this.dis24lefttime < 0 ? 0 : this.dis24lefttime
        setTimeTXT(this.timeleftnode_timeleft, this.dis24lefttime);
    }

    /*  */
    giftCountDown() {
        if (this.gift_dis24lefttime <= 0) {
            this.timenode.active = false
            //重新发送任务的请求
            let param = new proto.Msg_GetRankPackageInfoReq()
            Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
            this.unschedule(this.taskCountDown);
            return;
        }

        this.gift_dis24lefttime--
        this.gift_dis24lefttime = this.gift_dis24lefttime < 0 ? 0 : this.gift_dis24lefttime
        // setTimeTXT(this.daygift_timeleft, this.gift_dis24lefttime);
    }

    /*  */
    getScoreFlyPos() {
        return this.boxnode_progressLeftIcon.node.convertToWorldSpaceAR(new cc.Vec2(0, 0))
    }

    /*  */
    onScrollStart() {
        cc.log(this.scrollview.getScrollOffset())
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }

    /*  */
    onScrollEnd() {
        cc.log(this.scrollview.getScrollOffset())
    }

    /*  */
    private getShopInfo() {
        let msg = new proto.Msg_GetShopInfoReq;
        Net.Send(proto.Ptl.GetShopInfoReq, msg)
    }

    /*  */
    videoBtnRefreshClick(btn) {
        // zhibo-S@20230411 for <应策划的需求，把之前刷新宝箱的功能改为直接领取宝箱>
        // // ShowTips("FunctionClosedTip")
        // // return
        // //如果是在倒计时
        // if (getServerUtcTime() < this.m_shopData.specialNextFreeRefreshTime && this.m_shopData.specialFreeRefreshLeftTimes > 0) {
        //     ShowTips("InCD")
        //     return;
        // }
        // //广告剩余次数不足
        // if (this.m_shopData.specialFreeRefreshLeftTimes <= 0) {
        //     ShowTips("LeftTimesNotEnough")
        //     return;
        // }
        // WatchAdvert((error: Error) => {
        //     if (error === undefined) {
        //         sendAdvertPos(tab.AdvertPosType.AdvertPosType_RefreshEveryDaySpecialOfferShop, kZeroNumber);
        //     }
        // },
        //     (bFinish: boolean) => {
        //         if (bFinish) {
        //             sendAdvertPos(tab.AdvertPosType.AdvertPosType_RefreshEveryDaySpecialOfferShop, kOneNumber);
        //             let param = new proto.Msg_FreeRefreshSpecialGoodsReq();
        //             Net.Send(proto.Ptl.FreeRefreshSpecialGoodsReq, param);
        //         }
        //     });
        // zhibo-E@20230411 for <应策划的需求，把之前刷新宝箱的功能改为直接领取宝箱>

        // zhibo+S@20230411 for <应策划的需求，把之前刷新宝箱的功能改为直接领取宝箱>
        /* 领取 按键 */
        // let param = new proto.Msg_TaskGetGoalBoxReq()
        // param.boxGroupId = Role.Instance.taskData.boxGroupId
        // Net.Send(proto.Ptl.TaskGetGoalBoxReq, param) /* 前端没有做检查，直接发消息，TODO: 应该做个检查 */

        if (this.totaltimes - this.freePullCount > 0) {
            WatchAdvert((error: Error) => {
                if (error === undefined) {
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_DevilBox, kZeroNumber);
                }
            },
                (bFinish: boolean) => {
                    if (bFinish) {
                        sendAdvertPos(tab.AdvertPosType.AdvertPosType_DevilBox, kOneNumber);
                        let msg = new proto.Msg_PullCardReq();
                        msg.pullCardType = proto.PullCardType.Free
                        Net.Send(proto.Ptl.PullCardReq, msg);
                    }
                }, tab.AdvertPosType.AdvertPosType_DevilBox);


        } else {
            ShowTips("NoFreePullCardCount");
        }
        // zhibo+E@20230411 for <应策划的需求，把之前刷新宝箱的功能改为直接领取宝箱>
    }

    /*  */
    onLoad() {
        this.getShopInfo();
        this.getLotteryInfo();
        this.boxnode.on(cc.Node.EventType.TOUCH_END, this.timeboxClick, this)
        this.timeboxactionflag == false
        this.m_videobtn.node.on("click", this.videoBtnRefreshClick, this)
        this.scrollview.node.on("scroll-began", this.onScrollStart, this);
        this.scrollview.node.on("scroll-ended", this.onScrollEnd, this)

        //领取宝箱奖励
        Net.listenProtocol(proto.Ptl.TaskGetGoalBoxRsp, function (buffer, ptl) {
            let msg = proto.Msg_TaskGetGoalBoxRsp.decode(buffer)
            cc.log("TaskDetailLayer.ts : TaskGetGoalBoxRsp(领取宝箱奖励) msg: " + JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == 0) {
                    Role.Instance.taskData.boxGroupId = msg.refreshBoxGroupId
                    Role.Instance.taskData.goalBoxScore = msg.goalBoxScore
                    this.setTaskGroupBox()
                    popRewardLayer_Ex(msg.rewards)
                } else {
                    ShowTips("GiftBagIDError");
                }
            }
        }, this)

        //每日礼物
        Net.listenProtocol(proto.Ptl.TaskGetGiftRsp, function (buffer, ptl) {
            let msg = proto.Msg_TaskGetGiftRsp.decode(buffer)
            cc.log("TaskDetailLayer.ts : TaskGetGiftRsp(领取每日礼物) msg: " + JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == 0) {
                    popRewardLayer_Ex(msg.rewards, () => {
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskGiftFlyScore, msg.giftUUId)
                    })

                    this.scheduleOnce(() => {
                        let param = new proto.Msg_TaskInfoReq()
                        Net.Send(proto.Ptl.TaskInfoReq, param)
                    }, 1)
                }
            }
        }, this)

        //任务领取奖励
        Net.listenProtocol(proto.Ptl.TaskGetRewardRsp, function (buffer, ptl) {
            let msg = proto.Msg_TaskGetRewardRsp.decode(buffer)
            cc.log("TaskDetailLayer.ts : TaskGetRewardRsp(领取任务奖励) msg: " + JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == 0) {
                    // if(this.infoTask.taskId == msg.taskInfo.taskId)
                    {
                        let taskcfg = tab.Data.TaskGiftTableByGiftId.getValue(msg.taskInfo.taskId)
                        if (taskcfg) {
                            Role.Instance.taskData.goalBoxScore += taskcfg.Score
                        }

                        let dailyTask = Role.Instance.taskData.dailyTasks
                        for (let i = 0; i < dailyTask.length; i++) {
                            if (dailyTask[i].taskId == msg.taskInfo.taskId) {
                                Role.Instance.taskData.dailyTasks.splice(i, 1)
                                break
                            }
                        }

                        popRewardLayer_Ex(msg.rewards, () => {
                            //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskFlyScore, msg.taskInfo.taskId); /* zhibo-@20230424 for <去掉领取任务奖励后的特效> */
                            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskNodeToHide, msg.taskInfo.taskId);
                            this.scheduleOnce(() => {
                                let param = new proto.Msg_TaskInfoReq()
                                Net.Send(proto.Ptl.TaskInfoReq, param)
                            }, 1)
                        });
                        //彩虹-领取任务奖励
                        let taskConf: tab.TaskTable = tab.Data.TaskTableByTaskId.getValue(msg.taskInfo.taskId)
                        CaiHongData.task_flow(msg.taskInfo.taskId.toString(), taskConf.Describe, RATaskState.getReward.toString())
                        /*
                        if(msg.rewards.length == 1 && tab.Data.CardTableByID.getValue(msg.rewards[0].itemId)==undefined) {
                            showPopLayerV2("prefab/GetOneItem", GetOneItem).then((value:GetOneItem)=>{
                                value.showAward(msg.rewards[0])
                                value.setCloseCallBack(()=>{
                                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskFlyScore, msg.taskInfo.taskId)
                                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskNodeToHide, msg.taskInfo.taskId)
                                })
                            })
                        } else {
                            PullCardResult.showAward(msg.rewards, ()=>{                            
                                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskFlyScore, msg.taskInfo.taskId)
                                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskNodeToHide, msg.taskInfo.taskId)
                            })
                        }
                        */
                    }
                }
            }
        }, this)

        //刷新任务
        Net.listenProtocol(proto.Ptl.TaskRefreshRsp, function (buffer, ptl) {
            let msg = proto.Msg_TaskRefreshRsp.decode(buffer)
            cc.log("TaskRefreshRsp (刷新任务) msg: " + JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == 0) {
                    Role.Instance.taskData.taskFreeRefreshTimes = msg.taskFreeRefreshTimes
                    Role.Instance.taskData.adRefreshLeftSec = msg.ADRefreshLeftSec
                    Role.Instance.taskData.ADReplaceRefreshTimes = msg.ADReplaceRefreshTimes
                    let bfind = false

                    let tasks = Role.Instance.taskData.dailyTasks
                    for (let j = 0; j < msg.taskInfo.length; j++) {
                        for (let i = 0; i < tasks.length; i++) {
                            if (msg.taskUUId == tasks[i].UUId) {
                                Role.Instance.taskData.dailyTasks[i] = msg.taskInfo[j]
                                bfind = true
                                break
                            }
                        }

                        if (!bfind) {
                            Role.Instance.taskData.dailyTasks.push(msg.taskInfo[j])
                            //彩虹-接受任务（刷新）
                            let taskConf: tab.TaskTable = tab.Data.TaskTableByTaskId.getValue(msg.taskInfo[j].taskId)
                            CaiHongData.task_flow(msg.taskInfo[j].taskId.toString(), taskConf.Describe, RATaskState.rsp.toString())

                        }
                    }
                    this.setTask() //
                }
            }
        }, this)

        /*  */
        Net.listenProtocol(proto.Ptl.TaskInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_TaskInfoRsp.decode(buffer);
            cc.log("TaskInfoRsp (获取任务信息) msg: " + JSON.stringify(msg))
            if (msg != null) {
                Role.Instance.taskData = msg
                this.setTaskGroupBox()
                this.setTaskGift()
                this.setTask()
            }
        }, this);

        //任务改变了
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowTaskTips, (param) => {
            this.setTask()
        }, this);

        /*  */
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true) /*  */

        /*  */
        this.setCloseCallBack(() => {
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskBoxGetAward, null)
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
            hideFlyResources()
        })

        //请求任务信息
        let param = new proto.Msg_TaskInfoReq()
        Net.Send(proto.Ptl.TaskInfoReq, param)

        //商店信息
        Net.listenProtocol(proto.Ptl.GetShopInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_GetShopInfoRsp.decode(buffer);
            cc.log("TaskDetailLayer.ts : GetShopInfoRsp(获取商店信息) msg: " + JSON.stringify(msg))
            if (msg != null) {
                this.m_shopData = msg;
                console.log("m_shopData=", this.m_shopData);
            }
        }, this)

        //抽卡信息
        Net.listenProtocol(proto.Ptl.PullCardInfoRsp, function (buffer, ptl) {
            let msg = proto.Msg_PullCardInfoRsp.decode(buffer)
            cc.log("TaskDetailLayer.ts : PullCardInfoRsp(抽卡) msg: " + JSON.stringify(msg));
            if (msg != null) {
                this.m_lotteryCardInfo = { daypull: msg.dayPullCount, freepull: msg.freePullCount }
                this.totaltimes = tab.Data.GetKeyValue_ConfigTable().FreePullCardCount
                if (this.boxadvfreetimes) {
                    this.boxadvfreetimes.string = `${this.totaltimes - msg.freePullCount}/${this.totaltimes}`
                }
                let child: cc.Node = this.m_videobtn.node.getChildByName("Background")
                if (child) {
                    setGray(child.getComponent(cc.Sprite), this.totaltimes <= msg.freePullCount)
                }
                this.m_pullcardMap = msg.pullTypeCount
                //把第0个看广告的免费的宝箱的次数加进去
                this.m_pullcardMap['0'] = msg.freePullCount
                this.freePullCount = msg.freePullCount;
                this.dayPullCount = msg.dayPullCount;
            }
        }, this)

        //每日精选看广告刷新
        Net.listenProtocol(proto.Ptl.FreeRefreshSpecialGoodsRsp, (buffer, ptl) => {
            let msg = proto.Msg_FreeRefreshSpecialGoodsRsp.decode(buffer);
            cc.log("TaskDetailLayer.ts : FreeRefreshSpecialGoodsRsp() msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == proto.CommonErrorCode.Succeed) {
                    this.m_shopData.specialFreeRefreshLeftTimes = msg.leftTimes;
                    this.m_shopData.specialNextFreeRefreshTime = msg.nextRefreshTime;
                    this.m_shopData.specialList = msg.specialList;
                    this.m_shopData.specialSixRefreshTimes = msg.specialSixRefreshTimes;
                    // 
                    // this.setEveryDaySelctView();
                    console.log("刷新广告")
                    this.getLotteryInfo();
                } else {
                    ShowTipsOfCustomString("刷新错误")
                }
            }
        }, this)

        //这里要注册监听一个事件
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosePopupLayer, () => {
            this.setVisible(false);
        }, this)
    }

    /*  */
    onTouchBegan(event, capturelists) {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }

    /*  */
    start() {
        // this.setTaskGroupBox()
        // this.setTaskGift()
        // this.setTask()
    }

    onFreeBoxClicked() {
        cc.log("TaskDetailLayer.ts : onFreeBoxClicked()")
        //showItemTips(this._award, this.node)
        this.timeboxClick()
    }

    /*  */
    private getLotteryInfo() {
        let param = new proto.Msg_PullCardInfoReq();
        Net.Send(proto.Ptl.PullCardInfoReq, param);
    }
}
