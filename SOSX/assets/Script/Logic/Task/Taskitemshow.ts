/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import boxtips from "../Common/boxtips";
import Role from "../Common/Role";
import { CreateSpine, flyDemond, flyGold, getBoxIDAndCfg,showItemTips, setTimeTXT, ShowTips } from "../Utils/GameUtils";
import TaskDetailLayer from "./TaskDetailLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Taskitemshow extends cc.Component {

    @property(cc.Node)
    timenode: cc.Node = null

    @property(cc.Node)
    stateaward: cc.Node = null

    @property(cc.Label)
    getawardtxt: cc.Label = null

    @property(cc.Sprite)
    rightmark: cc.Sprite = null

    @property(cc.Label)
    timeleft: cc.Label = null;

    @property(cc.Label)
    addnumber: cc.Label = null

    @property(cc.Label)
    itemcount: cc.Label = null

    @property(cc.Sprite)
    itemicon: cc.Sprite = null

    @property(cc.Sprite)
    emptyicon: cc.Sprite = null

    @property(cc.Node)
    itemnode: cc.Node = null

    @property(cc.Node)
    spine: cc.Node = null

    @property(cc.Sprite)
    taskscoreicon: cc.Sprite = null

    @property(cc.Node)
    aleadyGetNode:cc.Node = null

    index           : string          = ""    /*  */
    awardItemId     : number          = 0     /*  */
    giftInfo        : proto.IGiftInfo = null; //info            : proto.IGiftInfo = null  /* 礼物信息 */
    taskInfo        : proto.ITaskData = null; //infoTask        : proto.ITaskData = null  /* 任务信息 */
    flyscoreFlag    : boolean         = false /*  */
    boxId           : number          = 0     /* 宝箱ID */
    boxgroundId     : number          = 0     /*  */
    clickCallback   : Function        = null  /*  */

    /*  */
    setEmpty(bempty:boolean){
        this.emptyicon.node.active = bempty
        this.itemnode.active = !bempty
        this.stateaward.active = !bempty
        this.getawardtxt.node.active = !bempty
    }

    /*  */
    setTaskView(info:proto.ITaskData){
        if(!info){
            return
        }
        this.boxgroundId = 0

        this.taskInfo = info
        this.index = info.UUId
        this.setEmpty(false)
        this.playSuccess(info.state == proto.TaskState.Reward)
      

        let itemid = 0
        let itemcnt = 0
        let boxId = 0
        let boxGroupId = 0
        let taskcfg:tab.TaskTable = tab.Data.TaskTableByTaskId .getValue(info.taskId)
        if(taskcfg){
            itemid      = taskcfg.TaskRewardType == tab.RewardType.RewardType_ItemType     ? taskcfg.TaskRewardId : 0 /* 道具 */
            boxGroupId  = taskcfg.TaskRewardType == tab.RewardType.RewardType_BoxGroupType ? taskcfg.TaskRewardId : 0 /* 宝箱组 */
            boxId       = taskcfg.TaskRewardType == tab.RewardType.RewardType_BoxType      ? taskcfg.TaskRewardId : 0 /* 宝箱 */
            itemcnt     = taskcfg.TaskRewardCount

            this.addnumber.string ="+" +  taskcfg.Score
        }

        if(itemid > 0){ /* 道具 */
            let itemcfg:tab.ItemTable = tab.Data.ItemTableByID.getValue(itemid)
            if(itemcfg){
                this.awardItemId = itemid
                this.itemicon.setTexture(itemcfg.Icon)
                this.itemicon.node.setPosition(new cc.Vec2(0,0))
                this.itemicon.node.scale = 1
            }
        } else if(boxGroupId > 0) { /* 宝箱组 */
            this.boxgroundId = boxGroupId
            let boxinfo = getBoxIDAndCfg(boxGroupId)
            if(boxinfo.boxCfg){
                this.itemicon.setTexture(boxinfo.boxCfg.ItemIcon)
                this.itemicon.node.setPosition(new cc.Vec2(3,0))
                this.itemicon.node.scale = 0.3
            }
        } else if(boxId >0) { /* 宝箱 */
            this.boxId = boxId;
            let boxinfo = tab.Data.BoxTableByBoxID.getValue(boxId)//getBoxIDAndCfg(boxId)
            if(boxinfo){
                this.itemicon.setTexture(boxinfo.ItemIcon)
                this.itemicon.node.setPosition(new cc.Vec2(0,0))
                this.itemicon.node.scale = 1
            }
        } else { /* 其它 */
            cc.error("TODO: 道具还没有处理")
        }
        
        this.itemcount.string = itemcnt > 1 ? `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${itemcnt}` : ""       
    }

    /* 没人调用啊 */
    setView(info:proto.IGiftInfo){
        if(!info){
            return
        }

        this.giftInfo = info
        this.index = info.UUId
        this.boxgroundId = 0

        this.setEmpty(false)
        this.playSuccess(info.state == proto.TaskState.Reward)

        this.rightmark.node.active = info.state == proto.TaskState.HaveReward
      
        let itemid = 0
        let itemcnt = 0
        let boxGroupId = 0
        let taskgiftcfg:tab.TaskGiftTable = tab.Data.TaskGiftTableByGiftId.getValue(info.giftId)
        if(taskgiftcfg)
        {
            itemid = taskgiftcfg.GiftRewardType == tab.RewardType.RewardType_ItemType ?  taskgiftcfg.GiftTaskRewardId : 0
            boxGroupId = taskgiftcfg.GiftRewardType == tab.RewardType.RewardType_BoxGroupType ? taskgiftcfg.GiftTaskRewardId : 0
            itemcnt = taskgiftcfg.GiftTaskRewardCount

            this.addnumber.string ="+" +  taskgiftcfg.Score
        }

        if(itemid > 0)
        {
            let itemcfg:tab.ItemTable = tab.Data.ItemTableByID.getValue(itemid)
            if(itemcfg)
            {
                this.awardItemId = itemid
                this.itemicon.setTexture(itemcfg.Icon)
                this.itemicon.node.setPosition(new cc.Vec2(0,0))
                this.itemicon.node.scale = 1
            }
        }
        else if(boxGroupId > 0)
        {
            this.boxgroundId = boxGroupId
            let boxinfo = getBoxIDAndCfg(boxGroupId)
            if(boxinfo.boxCfg)
            {
                this.itemicon.setTexture(boxinfo.boxCfg.ItemIcon)
                this.itemicon.node.setPosition(new cc.Vec2(3,0))
                this.itemicon.node.scale = 0.3
            }
        }
        
        this.itemcount.string = itemcnt > 1 ? `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${itemcnt}` : "" 
       
        this.startTimeSchedule()
    }

    /*  */
    playSuccess(bplay:boolean){
        this.stateaward.active = bplay
        this.getawardtxt.node.active = bplay
        if(bplay){
            let ainm:cc.Animation  = this.spine.getComponent(cc.Animation)
            if(ainm){
                ainm.play()
            }
        }
    }

    /*  */
    afterGetAward(){
        this.timenode.active = false
        this.stateaward.active = false
        this.emptyicon.node.active = false
        this.rightmark.node.active = true
    }

    /*  */
    setRightMark(bhide:boolean){
        this.rightmark.node.active = !bhide && this.rightmark.node.active
    }

    /*  */
    startTimeSchedule(){
        this.unschedule(this.timecountdown)
        if(this.giftInfo.state == proto.TaskState.Open && this.giftInfo.leftSec > 0){
            this.timenode.active = true
            setTimeTXT(this.timeleft, this.giftInfo.leftSec);
            this.schedule(this.timecountdown, 1)
        }
    }

    timecountdown(dt){
        if (this.giftInfo.leftSec <= 0){
            this.timenode.active = false
            this.unschedule(this.timecountdown);
            return;
        }

        this.giftInfo.leftSec--
        this.giftInfo.leftSec = this.giftInfo.leftSec < 0 ? 0 : this.giftInfo.leftSec
        
        setTimeTXT(this.timeleft, this.giftInfo.leftSec);
    }

    start () {

    }

    //截断点击的回调
    setClickCallback(callback:Function){
        this.clickCallback = callback
    }

    /*  */
    onClick(){
        cc.log("Taskitemshow.ts : onClick()")
        if(this.clickCallback){
            this.clickCallback()
            return
        }

        if(this.giftInfo && this.giftInfo.state == 1 || this.taskInfo &&  this.taskInfo.state == 1){
            let boxGroupID = Role.Instance.taskData.boxGroupId || 0
            let taskboxgroupcfg:tab.TaskBoxGroupTable = tab.Data.TaskBoxGroupTableByBoxGroupId.getValue(boxGroupID)
            if(taskboxgroupcfg &&  Role.Instance.taskData.goalBoxScore >=  taskboxgroupcfg.Score){            
                ShowTips("PleaseGetTopBoxes")
                return
            }

            if(this.giftInfo && this.giftInfo.state == 1){
                this.flyscoreFlag = true
                let param = new proto.Msg_TaskGetGiftReq()
                param.giftUUId = this.index
                Net.Send(proto.Ptl.TaskGetGiftReq, param)
            } else if(this.taskInfo && this.taskInfo.state == 1) {
                this.flyscoreFlag = true
                let param = new proto.Msg_TaskGetRewardReq()
                param.taskUUId = this.taskInfo.UUId
                Net.Send(proto.Ptl.TaskGetRewardReq, param)
            }
        } else if(this.boxgroundId > 0) {
            boxtips.showTips(this.boxgroundId, this.node) // 
            //showItemTips(this.boxgroundId, this.node)
        } else if(this.boxId) {
            boxtips.showTips(0, this.node, this.boxId)
            boxtips.clickTargetUUid = ""
        } else if(this.awardItemId >0 ) {
            let reward = new proto.RewardSimpleInfo()
            reward.rewardId = this.awardItemId
            showItemTips(reward, this.node, true);
        } else {
            
        }
    }

    /*  */
    flyScore(){
        let tasklayer = cc.director.getScene().getComponentInChildren(TaskDetailLayer)

        let endpos =  tasklayer.getScoreFlyPos()
        let starWorldPos = this.taskscoreicon.node.convertToWorldSpaceAR(new cc.Vec2(0,0))
        let endpos1 = cc.director.getScene().convertToNodeSpaceAR(endpos)
        let nodepos = cc.director.getScene().convertToNodeSpaceAR(starWorldPos)

        let spinenode = new cc.Node();
        cc.director.getScene().addChild(spinenode)
        spinenode.name = "flyScore"
        spinenode.setPosition(nodepos)

        CreateSpine(20030).then(skel=>{
            spinenode.addChild(skel.node)
            skel.setAnimation(0, "idle", false)
            
            skel.setCompleteListener(()=>{
                spinenode.destroy()
                skel.setCompleteListener(null)
            })

            let action = cc.moveTo(0.33, endpos1)            
            this.scheduleOnce(()=>{
                spinenode.runAction(action.easing(cc.easeInOut(1)))                                    
            }, 0.66)
        })
    }

    /*  */
    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this)
        this.stateaward.active = false
        this.getawardtxt.node.active = false

        /* 任务 */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskFlyScore, (Id)=>{
            if(this.taskInfo && this.taskInfo.taskId == Id ){
                this.checkCommonResourceFly()
                this.flyScore()
            }    
        }, this);
        
        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskGiftFlyScore, (Id)=>{
            if(this.giftInfo && this.index == Id){
                this.checkCommonResourceFly()
                this.flyScore()
            } 
        }, this);

        /* 领取每日礼物 */
        Net.listenProtocol(proto.Ptl.TaskGetGiftRsp, function (buffer, ptl){
           let msg = proto.Msg_TaskGetGiftRsp.decode(buffer)
           cc.log("TaskItemShow.ts : TaskGetGiftRsp(领取每日礼物) msg: " + JSON.stringify(msg));
           if (msg != null){
                if(msg.result == 0){
                    if(this.giftInfo && this.index == msg.giftUUId &&  this.giftInfo.giftId == msg.giftUUId){
                        this.giftInfo.state = 2
                        this.afterGetAward()
                    }                   
                }
           }
        }, this)
    }

    /*  */
    checkCommonResourceFly() {
        if(this.awardItemId > 0){
            let pos = this.node.convertToWorldSpaceAR(new cc.Vec2(0,0))
            this.awardItemId == proto.ConstItemID.CTI_Gold && flyGold(pos)
            this.awardItemId == proto.ConstItemID.CTI_Diamond && flyDemond(pos)
        }
    }

}
