import { _decorator, Button, Component, EventTouch, Label, Node, Sprite } from 'cc';
import { ViewScreen } from '../../../../framework/base/ViewScreen';
import { ClimbingTowerTowerItem } from './ClimbingTowerTowerItem';
import { ClimbingTowerBuffInfoItem } from './ClimbingTowerBuffInfoItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { GameplayControl } from '../GameplayControl';
import { tab } from '../../../../Table/table_gen';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { RoleData } from '../../role/RoleData';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { Net } from '../../../net/Net';
import { GameUtil } from '../../../utils/GameUtil';
import { Func } from '../../../utils/Func';
const { ccclass, property } = _decorator;

/**
 * 
 * ClimbingTowerMainView
 * zhudingchao
 * Thu Jul 11 2024 14:26:32 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerMainView.ts
 *
 */

@ccclass('ClimbingTowerMainView')
export class ClimbingTowerMainView extends ViewScreen {
    @property(Label)
    nameLab: Label = null;
    @property(Label)
    layersLab: Label = null;
    @property([Node])
    recommendNode: Node[] = [];
    @property(Node)
    rewardNode: Node = null;
    @property(Node)
    saoDangBtnNode: Node = null;
    @property(Node)
    tioazhanBtnNode: Node = null;
    @property(Node)
    jingyingBtnNode: Node = null;
    @property(Label)
    stageRewardLab1: Label = null;
    @property(Label)
    stageRewardLab2: Label = null;
    @property([ClimbingTowerTowerItem])
    climbingTowerTowerItem: ClimbingTowerTowerItem[] = [];
    @property([ClimbingTowerBuffInfoItem])
    buffInfoItems: ClimbingTowerBuffInfoItem[] = [];

    @property(Node)
    stateRewadNode:Node=null;
    @property(Node)
    node_guild:Node = null;
    private currStateId: number;
    private isMax:boolean=false;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetClimbTowerInfoRsp, this.on_s2c_GetClimbTowerInfoRsp, this);
      
     
        EventMgr.onMsg(proto.Ptl.QuickFinishClimbTowerStageRsp, this.on_s2c_QuickFinishClimbTowerStageRsp, this);
    }
    onShow(): void {
        GameplayControl.ins.requestGetClimbTowerInfo();
        const showGuild = Func.getItem("openClimbingTower");
        if(!showGuild){
            this.node_guild.active = true;
            Func.setItem("openClimbingTower","1");
        }else{
            this.node_guild.active = false;
        }
    }
    hideGuild(){
        this.node_guild.active = false;
    }
    initView() {
        let msg = GameplayViewDataMgr.ins.climbTowerInfoMsg;
        this.currStateId = msg.clearedStageIds.length == 0 ? 30101 : msg.clearedStageIds[msg.clearedStageIds.length - 1] + 1;
        let table = tab.getData().ClimbTowerTableByStageId.getValue(this.currStateId );
        let isMax:boolean=false;
        if(!table){
            this.currStateId= this.currStateId-1;
            table = tab.getData().ClimbTowerTableByStageId.getValue(this.currStateId );
            isMax=true;
            
        }
        this.isMax=isMax;
        if (table) {
            this.layersLab.string = LangMgr.getCombineString("ui_climbingtower_2", [table.Floor])
            let buffs = table.SkillShow;
            for (let key in buffs) {
                let buffTab = tab.getData().PveStageBuffTableById.getValue(buffs[key]);
                if (buffTab) {
                    this.buffInfoItems[key].buffIcon.setTexture(buffTab.ShowIcon);
                    this.buffInfoItems[key].buffInfoLab.string = LangMgr.getLab(buffTab.Show)
                }

            }
            this.rewardNode.removeAllChildren();
            let pveTable= tab.getData().PveStageTableByStageId.getValue(table.StageId);
            for (let key in pveTable.RewardItemId) {
                let itemInfo = new ItemInfo();
                itemInfo.initItemData(pveTable.RewardItemId[key], pveTable.RewardItemNum[key]);
                ItemPoolMgr.ins.createRewadItem(itemInfo, this.rewardNode);
            }
            let recFight =pveTable.RecommendFight;
            let setLastTimer = (node: Node) => {
                let total = tab.getData().GetKeyValue_ConfigTable().ClimbTowerDefeatCount;
                let last = total - msg.defeatTimes;
                node.getChildByName("num_node").getChildByName("num_label").getComponent(Label).string = last + "/" + total;
            }
            if (!table.CrushedValue) {
                //精英挑战
                this.recommendNode[0].active = false;
                this.recommendNode[1].active = false;
                this.recommendNode[2].active = true;
                this.recommendNode[2].getChildByName("cenum_txt").getComponent(Label).string = GameUtil.convertNumber(recFight) + "";
                this.jingyingBtnNode.active = true;
                this.saoDangBtnNode.active = false;
                this.tioazhanBtnNode.active = false;
                // setLastTimer(this.jingyingBtnNode);
            } else {

                let currFight = RoleData.ins.powerScore;
                let isRolling = currFight >= (recFight * table.CrushedValue / 10000);
                if (isRolling) {
                    //碾压
                    this.recommendNode[0].active = true;
                    this.recommendNode[1].active = false;
                    this.recommendNode[2].active = false;
                    this.recommendNode[0].getChildByName("cenum_txt").getComponent(Label).string = GameUtil.convertNumber(recFight) + "";
                    this.saoDangBtnNode.active = true;
                    this.jingyingBtnNode.active = false;
                    this.tioazhanBtnNode.active = false;
                    // setLastTimer(this.saoDangBtnNode);
                } else {
                    //挑战
                    this.recommendNode[0].active = false;
                    this.recommendNode[1].active = true;
                    this.recommendNode[2].active = false;
                    this.recommendNode[1].getChildByName("cenum_txt").getComponent(Label).string = GameUtil.convertNumber(recFight) + "";
                    this.tioazhanBtnNode.active = true;
                    this.jingyingBtnNode.active = false;
                    this.saoDangBtnNode.active = false;
                    // setLastTimer(this.tioazhanBtnNode);

                }

            }
            if(this.isMax){
               
                 this.jingyingBtnNode.getComponent(Sprite).grayscale=true;;
                 this.saoDangBtnNode.getComponent(Sprite).grayscale=true;;
                 this.tioazhanBtnNode.getComponent(Sprite).grayscale=true;;
                
                
            }


        } else {
            //已通关
        }
        this.initTowerItem();
        this.initStateRewad();

    }
    initTowerItem() {
        let msg = GameplayViewDataMgr.ins.climbTowerInfoMsg;
        let currStateId =this.currStateId ;
        let ids = [];
        if (msg.clearedStageIds.length == 0) {
            ids = [currStateId, currStateId + 1, currStateId + 2];
        } else {
            ids = [currStateId - 1, currStateId, currStateId + 1];
        }
        for (let key in ids) {
            let state = 2;
            if (ids[key] == currStateId) {
                state = 1;
            } else {
                if (msg.clearedStageIds.indexOf(ids[key]) >= 0) {
                    state = 0;
                }
            }
            let table = tab.getData().ClimbTowerTableByStageId.getValue(ids[key]);
            this.climbingTowerTowerItem[key].initView(state, table)
        }
    }
    initStateRewad(){
    
        let tables = tab.getData().PveClearStageTable;
        let currStateTab:tab.PveClearStageTable=null;
        for (let key in tables) {
            if (tables[key].StageType == tab.PveStageType.PveStageType_ClimbTower) {
                if(this.isMax){
                    currStateTab=tables[key];
                }else{
                    if(this.currStateId<=tables[key].StageId){
                        currStateTab=tables[key];
                        break;
                    }
                }
                   
            }
        }
      
        this.stateRewadNode.removeAllChildren();
        if(currStateTab){
            let itemInfo=new ItemInfo();
            itemInfo.initItemData(currStateTab.ClearRewardItemIds[0],currStateTab.ClearRewardItemNum[0]);
            ItemPoolMgr.ins.createRewadItem(itemInfo,this.stateRewadNode);
            let level=currStateTab.StageId-this.currStateId;
            if(level==0){
                this.stageRewardLab2.node.active=true;
                this.stageRewardLab1.node.active=false;
            }else{
                this.stageRewardLab2.node.active=false;
                this.stageRewardLab1.node.active=true;
                if(this.isMax){
                    this.stageRewardLab1.string=LangMgr.getCombineString("ui_climbingtower_1",[0]);
                }else{
                    this.stageRewardLab1.string=LangMgr.getCombineString("ui_climbingtower_1",[(level+1)*10]);
                }
              
            }
        }else{
            //满级
        }
    }
    onClickRewardBtn() {
        UIMgr.ins.show({viewName:ViewName.ClimbingTowerTowerEveryDayRewardPop});
    }
    onClickStateRewardBtn() {
        UIMgr.ins.show({viewName:ViewName.ClimbingTowerRewardPop});
    }
    /**点击挑战 */
    onClickChallenge() {
        if(!this.isMax){
            let total = tab.getData().GetKeyValue_ConfigTable().ClimbTowerDefeatCount;
            let last = total - GameplayViewDataMgr.ins.climbTowerInfoMsg.defeatTimes;
            if(last>0){
                let table = tab.getData().ClimbTowerTableByStageId.getValue(this.currStateId);
                let msg = new proto.Msg_StartStageReq();
                msg.stageId =  table.StageId;
                Net.Send(proto.Ptl.StartStageReq, msg)
            }else{
                //ShowTips("次数不足")
                ShowTips(LangMgr.getLab("Tips_timeshortage"))
            }
        }
      
      
    }
    /**点击碾压 */
    onClickRolling() {
        if(!this.isMax){
            GameplayControl.ins.requestQuickFinishClimbTowerStage(this.currStateId )
        }
       
    }
    on_s2c_GetClimbTowerInfoRsp(msg: proto.Msg_GetClimbTowerInfoRsp) {
        this.initView();
    }
    // on_s2c_ReceiveClimbTowerDailyRewardsRsp(msg: proto.Msg_ReceiveClimbTowerDailyRewardsRsp) {
    //     if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {

    //     }
    // }
   
    on_s2c_QuickFinishClimbTowerStageRsp(msg: proto.Msg_QuickFinishClimbTowerStageRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initView();
            if (msg.rewards && msg.rewards.length > 0) {
                UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            }
        }
    }
    onClickTips(event:EventTouch){
        UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"scaleX":-1,"worldPos":event.target.worldPosition,"WordTableKey":"Tips_help_ClimbingTowerMainView"}});
    }
    onClikhideView() {
        this.onClose();
        UIMgr.ins.show({ viewName: ViewName.GameplayView })
    }
}