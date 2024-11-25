import { _decorator, Component, error, instantiate, Label, Node, Prefab, ScrollView } from 'cc';
import { ViewScreen } from '../../../../framework/base/ViewScreen';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { tab } from '../../../../Table/table_gen';
import { TopWarDamageItem } from './TopWarDamageItem';
import { TopWarBossSkillItem } from './topWarBossSkillItem';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { EventMgr } from '../../../mgr/EventMgr';
import { TopWarPlayRankHeadiItem } from './TopWarPlayRankHeadiItem';
import { SimpleRoleInfo } from '../../friends/SimpleRoleInfo';
import { Role } from '../../../fight/base/obj/role/role/Role';
import { RoleData } from '../../role/RoleData';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { GameUtil, getTimeUntilNextDay, setTextTime } from '../../../utils/GameUtil';
import { GameplayControl } from '../GameplayControl';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { CommonTipsPop, CommonTipsPopCloseType } from '../../common/CommonTipsPop';
import { ItemData } from '../../item/ItemData';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * TopWarView
 * zhudingchao
 * Fri Jul 05 2024 11:05:11 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/topWar/TopWarView.ts
 *
 */

@ccclass('TopWarView')
export class TopWarView extends ViewScreen {
    @property(Label)
    timerLab: Label = null;
    @property(Node)
    skillLayout: Node = null;

    @property(ScrollView)
    damageScroll: ScrollView = null;

    @property([Node])
    rankHerads: Array<Node> = [];
    @property(TopWarPlayRankHeadiItem)
    myHerdItem: TopWarPlayRankHeadiItem = null;
    @property(Node)
    notRankNode: Node = null;
    @property(Label)
    totalDamageLab: Label = null;
    @property(Label)
    maxDamageLab: Label = null;
    @property(Node)
    sweepBtnNode:Node=null;
    @property(Label)
    lastChallengeNum:Label=null;
    @property(Prefab)
    damageItemPrefab: Prefab = null;
    @property(Prefab)
    skillPrefab: Prefab = null;

    private damageItems: Array<TopWarDamageItem>;
    private rankMsg: proto.Msg_GetRankRsp;
    private endTimer: number;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetRankRsp, this.on_s2c_GetRankRsp, this);
        EventMgr.onMsg(proto.Ptl.WorldBossDataPush, this.on_s2c_WorldBossDataPush, this);
        EventMgr.onMsg(proto.Ptl.WorldBossSweepRsp, this.on_s2c_WorldBossSweepRsp, this);
    }
    requestGetRank() {
        let msg = new proto.Msg_GetHeroRankReq();
        msg.rankId = tab.RankType.RankType_WorldBoss;
        Net.Send(proto.Ptl.GetRankReq, msg);

    }
    onShow(): void {
        this.requestGetRank();
        this.initDamageReward();
        this.initSkills();
        this.initMyRank();
        this.initEndTimer();


    }
    initEndTimer() {
        this.unschedule(this.updateTimer)
        this.endTimer = getTimeUntilNextDay();
        this.timerLab.string = setTextTime(this.endTimer);
        this.schedule(this.updateTimer, 1)
    }
    updateTimer = () => {
        this.endTimer--;
        if (this.endTimer >= 0) {
            this.timerLab.string = setTextTime(this.endTimer);
        } else {
            this.unschedule(this.updateTimer)
        }
    }
    initSkills() {
        let skillIds = tab.getData().GetKeyValue_ConfigTable().WorldBossShowSkillIds;
        for (let key in skillIds) {
            let item = instantiate(this.skillPrefab);
            item.parent = this.skillLayout;
            item.getComponent(TopWarBossSkillItem).initSkillId(skillIds[key]);
        }

    }
    initDamageReward() {
        this.damageItems = [];
        let currScore = GameplayViewDataMgr.ins.worldBossMsg.maxScore;
        let tables = tab.getData().WorldBossRewardTable;
        let len = tables.length;
        for (let i: number = len - 1; i >= 0; i--) {
            let item = instantiate(this.damageItemPrefab);
            item.parent = this.damageScroll.content;
            let com = item.getComponent(TopWarDamageItem);
            let lastScore = i == 0 ? 0 : tables[i - 1].Damage;
            com.initView(tables[i], lastScore, currScore);
            this.damageItems.push(com);
        }

    }
    initMyRank() {
        // error("头像功能没有做")
        let msg = GameplayViewDataMgr.ins.worldBossMsg;
        if (msg.ranking > -1) {
            this.myHerdItem.rankLab.node.active = true;
          
            this.myHerdItem.setRankLab(msg.ranking+1);
            this.notRankNode.active = false;
        } else {
            this.myHerdItem.rankLab.node.active = false;
            this.notRankNode.active = true;
        }
        this.myHerdItem.initView({headFrame:RoleData.ins.avatarInfo.headFrame,headIcon:RoleData.ins.avatarInfo.headIcon})

        this.myHerdItem.myNode.active = true;
        this.totalDamageLab.string = GameUtil.convertNumber(msg.totalScore);
        this.maxDamageLab.string = GameUtil.convertNumber(msg.maxScore);
        let freeCount=tab.getData().GetKeyValue_ConfigTable().WorldBossDailyCount;
        let num=GameplayViewDataMgr.ins.worldBossMsg.challengeCount;
        let buyNum=tab.getData().GetKeyValue_ConfigTable().WorldBossDailyBuyCount;
        if(num<freeCount){
            this.lastChallengeNum.string=""+buyNum;
        }else{
            this.lastChallengeNum.string=""+(freeCount+buyNum-num);
        }
        this.sweepBtnNode.active=msg.totalScore>0&&OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WorldBossSweepAll);


        // let herodInfo=RoleData.ins.
    }
    updateDamageReward() {
        let currScore = GameplayViewDataMgr.ins.worldBossMsg.maxScore;
        for (let key in this.damageItems) {
            this.damageItems[key].updateView(currScore);
        }
    }
    onClickChallenge(){
       
        let callBack=()=>{
            let msg = new proto.Msg_StartStageReq();
            msg.stageId = tab.getData().GetKeyValue_ConfigTable().WorldBossStageId;
            Net.Send(proto.Ptl.StartStageReq, msg)
        }
        this.buyChallenge(callBack);
       
       
    }
    private buyChallenge(callBack:Function){
        let freeCount=tab.getData().GetKeyValue_ConfigTable().WorldBossDailyCount;
        let num=GameplayViewDataMgr.ins.worldBossMsg.challengeCount;
        if(num<freeCount){
            callBack();
        }else{
            let buyNum=tab.getData().GetKeyValue_ConfigTable().WorldBossDailyBuyCount;
            let totalNum=buyNum+freeCount;
            if(num<totalNum){

                let isPrivilege=OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WorldBossFreeBuyCount)
                //弹窗购买框
                let tips="";
                let spend=0;
                if(isPrivilege){
                    //tips="特权购买免费次数提示\n今日剩余购买次数"+(totalNum-num);
                    tips = LangMgr.getCombineString("Tips_worldboss_2", [totalNum-num]);
                }else{
                    let buySpends=tab.getData().GetKeyValue_ConfigTable().WorldBossDailyBuyCostDiamonds;
                    let currBuyNum=buyNum-(totalNum-num);
                    if(buySpends.length-1>=currBuyNum){
                        // if(currBuyNum<0){
                        //     spend=buySpends[0];
                        // }else{
                            spend=buySpends[currBuyNum];
                        //}
                       
                    }else{
                        spend=buySpends[buySpends.length-1];
                    }
                    //tips="是否花费"+spend+"钻石购买一次挑战次数 \n今日剩余购买次数"+(totalNum-num);
                   tips = LangMgr.getCombineString("Tips_worldboss_1", [spend, totalNum-num]);
                }
                CommonTipsPop.create(tips, (closeType: CommonTipsPopCloseType) => {
                    if(closeType == CommonTipsPopCloseType.confirm) {
                        // console.log("ok")
                     if(isPrivilege){
                        callBack();
                     }else{
                        if(spend<=RoleData.ins.diamond){
                            callBack();
                        }else{
                            //ShowTips("钻石不足")
                            ShowTips(LangMgr.getLab("ui_worldboss_6"))
                        }
                     }
                     
                    } else {
                        console.log("cancel")
                    }
                })
            }else{
                //ShowTips("今日挑战次数已用完")
                ShowTips(LangMgr.getLab("ui_worldboss_8"))
            }
        }
    }
    onClickSweep(){
        if(OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WorldBossSweepAll)){
            this.buyChallenge(()=>{
                GameplayControl.ins.requestWorldBossSweep();
            });
        }else{
            OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_WorldBossSweepAll)
        }
       
    }
    onClickRewardRank() {
        UIMgr.ins.show({ viewName: ViewName.TopWarRankRewardPop })
    }
    onClickRank() {
        
    }
    on_s2c_GetRankRsp(msg: proto.Msg_GetRankRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.rankMsg = msg;
        /*排行榜数据返回 */
        // this._rankId = msg.rankId;

        // this._ranking = msg.ranking;
        // this._selfSimple = msg.selfSimple;
        for (let key in this.rankHerads) {
            this.rankHerads[key].getChildByName("notRank_node").active = true;
            this.rankHerads[key].getChildByName("PlayRankHeadiItem").active = false;;
            this.rankHerads[key].getChildByName("playname_txt").active=false;
        }
        // let top_player_list = msg.rankList;
        // if (msg.rankList.length > 0) {
        //     top_player_list = msg.rankList.splice(0, 3);
        // }
        let top_player_list = [];
        for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
                top_player_list.push(msg.rankList[i])
            } 
        }
        if (top_player_list.length > 0) {
            for (let key in top_player_list) {
                let node = this.rankHerads[key];
                node.getChildByName("notRank_node").active = false;
                node.getChildByName("PlayRankHeadiItem").active = true;
                let headItem = node.getChildByName("PlayRankHeadiItem").getComponent(TopWarPlayRankHeadiItem);
                let info = new SimpleRoleInfo();
                info.merge(top_player_list[key].simple);
                headItem.initView(info);
                headItem.setRankLab(Number(key) + 1);
                let nameLab=node.getChildByName("playname_txt").getComponent(Label);
                nameLab.node.active=true;
                nameLab.string=top_player_list[key].simple.name;


            }
        }
        // this.initStaticView();
        // this.createTopItem();
    }
    on_s2c_WorldBossDataPush(msg: proto.Msg_WorldBossDataPush) {
        this.updateDamageReward();
        this.initMyRank();
        this.requestGetRank();
    }
    on_s2c_WorldBossSweepRsp(msg: proto.Msg_WorldBossSweepRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateDamageReward();
            this.initMyRank();
            this.requestGetRank();
        }
    }

    onClikhideView() {
        this.onClose();
        UIMgr.ins.show({ viewName: ViewName.GameplayView })
    }
}