/*
 * @Date: 2024-09-18 14:50:45
 * @LastEditors: wzq
 * @pragram:公会boss
 * @LastEditTime: 2024-11-05 10:09:21
 */

import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { tab } from '../../../Table/table_gen';
import { AssociationControl } from './AssociationControl';
import { EventMgr } from '../../mgr/EventMgr';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { TopWarPlayRankHeadiItem } from '../jianghu/topWar/TopWarPlayRankHeadiItem';
import { AssociationData } from './AssociationData';
import { createAnimation, GameUtil, getTimeUntilNextDay, setTextTime } from '../../utils/GameUtil';
import { RoleData } from '../role/RoleData';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { TopWarBossSkillItem } from '../jianghu/topWar/topWarBossSkillItem';
import { LangMgr } from '../../mgr/LangMgr';
import { CommonTipsPop, CommonTipsPopCloseType } from '../common/CommonTipsPop';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('AssociationBossView')
export class AssociationBossView extends ViewPop {
    @property([Node])
    rankHerads: Array<Node> = [];
    @property(TopWarPlayRankHeadiItem)
    myHerdItem: TopWarPlayRankHeadiItem = null;
    @property(Label)
    totalDamageLab: Label = null;
    @property(Label)
    lastChallengeNum: Label = null;
    @property(Node)
    sweepBtnNode: Node = null;
    @property(Prefab)
    skillPrefab: Prefab = null;
    @property(Node)
    skillLayout: Node = null;
    @property(Label)
    timerLab: Label = null;
    @property(Node)
    node_player: Node = null;
    @property(Node)
    node_not_rank_self:Node = null;
    private rankMsg: proto.ISimpleRank[];
    private endTimer: number;
    onShow(): void {
        AssociationControl.ins.reqGetGuildBossRank();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetGuildBossRankRsp, this.on_s2c_GetGuildBossRankRsp, this);
        EventMgr.onMsg(proto.Ptl.GuildBossDataPush, this.on_s2c_GuildBossDataPush, this);
    }
    on_s2c_GuildBossDataPush(msg: proto.Msg_GuildBossDataPush) {
        AssociationData.ins.refreshSelfRoleRankScore(msg.maxScore);
        this.initMyRank();
    }
    unRegister(): void {
        super.unRegister();
    }
    on_s2c_GetGuildBossRankRsp(msg: proto.Msg_GetGuildBossRankRsp) {

        this.initSkills();
        this.initMyRank();
        this.initEndTimer();
        this.setGuildHerosSpine();
        this.rankMsg = msg.roleRank;
        for (let key in this.rankHerads) {
            this.rankHerads[key].getChildByName("notRank_node").active = true;
            this.rankHerads[key].getChildByName("PlayRankHeadiItem").active = false;;
            this.rankHerads[key].getChildByName("playname_txt").active = false;
        }
        let top_player_list = [];
        for (let i = 0; i < this.rankMsg.length; i++) {
            if (i < 3) {
                top_player_list.push(this.rankMsg[i])
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
                headItem.initView({ roleInfo: info });
                headItem.setRankLab(Number(key) + 1);
                let nameLab = node.getChildByName("playname_txt").getComponent(Label);
                nameLab.node.active = true;
                nameLab.string = top_player_list[key].simple.name;
            }
        }
    }
    initMyRank() {
        // error("头像功能没有做")
        const selfSimple = AssociationData.ins.getSelfRoleRankInfo()
        // const ranking = AssociationData.ins.getSelfRoleRankCount();
        const _ranking = AssociationData.ins.getRoleRankSelfRanking();
        this.myHerdItem.setRankLab(_ranking);
        this.myHerdItem.initView({ headFrame: RoleData.ins.avatarInfo.headFrame, headIcon: RoleData.ins.avatarInfo.headIcon })

        this.myHerdItem.myNode.active = true;
        if(selfSimple){
            this.totalDamageLab.string = GameUtil.convertNumber(selfSimple.score);
        }
        this.node_not_rank_self.active = _ranking===-1
        let freeCount = tab.getData().GetKeyValue_ConfigTable().GuildBossDailyCount;
        let num = AssociationData.ins.GuildBossMsg.challengeCount;
        let buyNum = tab.getData().GetKeyValue_ConfigTable().GuildBossDailyBuyCount;
        if (num < freeCount) {
            this.lastChallengeNum.string = "" + buyNum;
        } else {
            this.lastChallengeNum.string = "" + (freeCount + buyNum - num);
        }
        this.sweepBtnNode.active = AssociationData.ins.GuildBossMsg.maxScore > 0 && AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildBoss);


        // let herodInfo=RoleData.ins.
    }
    initSkills() {
        let skillIds = tab.getData().GetKeyValue_ConfigTable().GuildBossShowSkillIds;
        for (let key in skillIds) {
            let item = instantiate(this.skillPrefab);
            item.parent = this.skillLayout;
            item.getComponent(TopWarBossSkillItem).initSkillId(skillIds[key]);
        }
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
    onClickChallenge() {
        const isOpen = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildBoss);
        if(isOpen){
            let callBack = () => {
                let msg = new proto.Msg_StartStageReq();
                msg.stageId = AssociationData.ins.GuildBossMsg.stageId;
                Net.Send(proto.Ptl.StartStageReq, msg)
            }
            this.buyChallenge(callBack);
        }else{
            AssociationData.ins.showFunctionTips(tab.GuildOFName.GuildOFName_GuildBoss);
        }
    }
    private buyChallenge(callBack: Function) {
        let freeCount = tab.getData().GetKeyValue_ConfigTable().GuildBossDailyCount;
        let num = AssociationData.ins.GuildBossMsg.challengeCount;
        if (num < freeCount) {
            callBack();
        } else {
            let buyNum = tab.getData().GetKeyValue_ConfigTable().GuildBossDailyBuyCount;
            let totalNum = buyNum + freeCount;
            if (num < totalNum) {

                let isPrivilege = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildBoss)
                //弹窗购买框
                let tips = "";
                let spend = 0;
                if (isPrivilege) {
                    //tips="特权购买免费次数提示\n今日剩余购买次数"+(totalNum-num);
                    tips = LangMgr.getCombineString("Tips_worldboss_2", [totalNum - num]);
                } else {
                    let buySpends = tab.getData().GetKeyValue_ConfigTable().GuildBossDailyBuyCostDiamonds;
                    let currBuyNum = buyNum - (totalNum - num);
                    if (buySpends.length - 1 >= currBuyNum) {
                        // if(currBuyNum<0){
                        //     spend=buySpends[0];
                        // }else{
                        spend = buySpends[currBuyNum];
                        //}

                    } else {
                        spend = buySpends[buySpends.length - 1];
                    }
                    //tips="是否花费"+spend+"钻石购买一次挑战次数 \n今日剩余购买次数"+(totalNum-num);
                    tips = LangMgr.getCombineString("Tips_worldboss_1", [spend, totalNum - num]);
                }
                CommonTipsPop.create(tips, (closeType: CommonTipsPopCloseType) => {
                    if (closeType == CommonTipsPopCloseType.confirm) {
                        // console.log("ok")
                        if (isPrivilege) {
                            callBack();
                        } else {
                            if (spend <= RoleData.ins.diamond) {
                                callBack();
                            } else {
                                //ShowTips("钻石不足")
                                ShowTips(LangMgr.getLab("ui_worldboss_6"))
                            }
                        }

                    } else {
                        console.log("cancel")
                    }
                })
            } else {
                //ShowTips("今日挑战次数已用完")
                ShowTips(LangMgr.getLab("ui_worldboss_8"))
            }
        }
    }
    onClickSweep() {
        if (AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildBoss)) {
            this.buyChallenge(() => {
                AssociationControl.ins.reqQuickSweepBoss();
            });
        } else {
            AssociationData.ins.showFunctionTips(tab.GuildOFName.GuildOFName_GuildBoss)
        }

    }
    // 获取公会中战斗力最强的英雄id
    setGuildHerosSpine(){
        const membersArr = AssociationData.ins.getGuildMemberArr();
        for(let i=1;i<=15;i++){
            const player = this.node_player.getChildByName("player"+i);
            if(membersArr[i-1]){
                const lbl = player.getChildByName("name_txt").getComponent(Label);
                lbl.string = membersArr[i-1].name;
                player.active = true;
                if(membersArr[i-1].highestHeroItemId){
                    const heroTab = tab.getData().HeroTableById.getValue(membersArr[i-1].highestHeroItemId);
                    createAnimation(player, heroTab.Idle)
                }
            }else{
                player.active = false;
            }
        }
    }
    showAllRank(){
        UIMgr.ins.show({ viewName: ViewName.AssociationRankPop })
    }
    showAwards(e: EventTouch, type: string){
        UIMgr.ins.show({ viewName: ViewName.AssociationRankRewardPop ,data:type})
    }
}


