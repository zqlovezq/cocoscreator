import { _decorator, EventTouch, instantiate, Label, Node, Prefab, Sprite } from "cc";
import { ViewScreen } from "../../../framework/base/ViewScreen";
import { FincaFightData } from "./FincaFightData";
import { FincaFightControl } from "./FincaFightControl";
import { EventMgr } from "../../mgr/EventMgr";
import { proto } from "client_protocol";
import { FincaFightItem } from "./FincaFightItem";
import { ButtonLock, GameUtil } from "../../utils/GameUtil";
import { UIMgr } from "../../mgr/UIMgr";
import { ViewName } from "../../define/ViewDefine";
import { SimpleRoleInfo } from "../friends/SimpleRoleInfo";
import { PlayerHeadItem } from "../common/PlayerHeadItem";
import { LangMgr } from "../../mgr/LangMgr";
import { ItemPoolMgr } from "../item/ItemPoolMgr";
import { HeroData } from "../hero/HeroData";
import { tab } from "../../../Table/table_gen";
import { Net } from "../../net/Net";

const { ccclass, property } = _decorator;


/** PVP */
@ccclass('FincaFightView')
export class FincaFightView extends ViewScreen {
    @property(Label)
    lbl_free_times: Label = null;
    @property(Node)
    node_list_content: Node = null;
    @property(Prefab)
    pfb_list_item: Prefab = null;
    @property([Node])
    rank_nodes: Node[] = [];
    @property(Node)
    node_reward: Node = null;
    @property(Label)
    lbl_my_ranking: Label = null;
    @property(Label)
    lbl_my_ranking_score: Label = null;
    @property(Node)
    node_no_rank_txt: Node = null;
    private reward_type: number = 0;
    private top_player_list: proto.ISimpleRank[] = [];
    private newSocre:number = 0;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetFincaBattleOpponentsRsp, this.on_s2c_GetFincaBattleOpponentsRsp, this);
        EventMgr.onMsg(proto.Ptl.GetFincaBattleFightRecordsRsp, this.on_s2c_GetFincaBattleFightRecordsRsp, this);
        EventMgr.onMsg(proto.Ptl.GetSimpleRankRsp, this.on_s2c_GetSimpleRankRsp, this);
        EventMgr.onMsg(proto.Ptl.FincaBattleFightRsp, this.on_s2c_FincaBattleFightRsp, this);
        EventMgr.onMsg(proto.Ptl.GetFincaBattleInfoRsp, this.on_s2c_GetFincaBattleInfoRsp, this);
    }
    on_s2c_GetFincaBattleInfoRsp(msg: proto.Msg_GetFincaBattleInfoRsp){
        this.setView();
        this.newSocre = msg.score;
    }
    on_s2c_FincaBattleFightRsp(msg: proto.Msg_FincaBattleFightRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 刷新界面
        this.newSocre = msg.newScore;
        this.setAsyncView();
        if (FincaFightControl.isSweepPvp) {
            if (msg.rewards.length > 0) {
                UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            }
        }
        FincaFightControl.isSweepPvp = false;
    }
    setView(){
        FincaFightData.ins.setFincaFightTeamTab();
        FincaFightData.ins.checkAllBooks();
        this.checkTeamInfo();
        this.setAsyncView();
    }
    onShow(): void {
        let finca_msg = new proto.Msg_GetFincaBattleInfoReq();
        Net.Send(proto.Ptl.GetFincaBattleInfoReq, finca_msg);
    }
    // 判断队伍信息
    checkTeamInfo() {
        let heroChange = false;
        for (let i = 0; i < FincaFightData.ins.heroIds.length; i++) {
            const heroInfo = HeroData.ins.getById(FincaFightData.ins.heroIds[i]);
            if (!heroInfo && FincaFightData.ins.heroIds[i] !== 0) {
                FincaFightData.ins.heroIds[i] = 0;
                heroChange = true;
            }
        }
        if (heroChange) {
            // 重新保存阵容
            FincaFightControl.ins.reqSetFincaBattleHeroIds(FincaFightData.ins.heroIds);
        }
        if (!FincaFightData.ins.heroIds[0]) {
            this.onClickChangeHero();
        }
    }
    protected onDestroy(): void {
        super.onDestroy
    }
    unRegister(): void {
        super.unRegister();
    }
    // 设置动态信息
    setAsyncView() {
        // 当前免费次数
        this.lbl_free_times.string = String(FincaFightData.ins.freeTimes);
        // 获取对手信息设置list列表
        FincaFightControl.ins.reqGetFincaBattleOpponents();
        // 获取排行榜信息
        FincaFightControl.ins.reqGetRank();
    }
    // 获取庄园战对手
    on_s2c_GetFincaBattleOpponentsRsp(msg: proto.Msg_GetFincaBattleOpponentsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.refreshOpponentsList(msg.opponents)
    }
    refreshOpponentsList(list: proto.IFincaBattleRole[]) {
        this.node_list_content.destroyAllChildren();
        for (let i = 0; i < list.length; i++) {
            const roleInfo: proto.IFincaBattleRole = list[i];
            const item = instantiate(this.pfb_list_item);
            item.parent = this.node_list_content;
            const itemTs = item.getComponent(FincaFightItem);
            itemTs.setData(roleInfo);
        }
    }
    // 点击战报按钮显示战斗界面
    @ButtonLock(1, () => { })
    onClickReport() {
        FincaFightControl.ins.reqGetFincaBattleFightRecords();
    }
    // 获取战报信息
    on_s2c_GetFincaBattleFightRecordsRsp(msg: proto.Msg_GetFincaBattleFightRecordsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.FincaFightLogPop, data: msg.fightRecords })
    }
    // 调整阵型
    onClickChangeHero() {
        UIMgr.ins.show({ viewName: ViewName.FincaFightStageView })
    }
    on_s2c_GetSimpleRankRsp(msg: proto.Msg_GetRankRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.top_player_list = msg.rankList;
        FincaFightData.ins.FincaRanking = msg.ranking + 1;
        FincaFightData.ins.FincaRankingSimple = msg.selfSimple;
        const rankStr = msg.ranking > -1 ? msg.ranking + 1 : LangMgr.getLab("ui_rank_1")
        this.lbl_my_ranking.string = LangMgr.getCombineString("ui_fincafight_4", [rankStr])
        if(this.newSocre){
            this.lbl_my_ranking_score.string = LangMgr.getCombineString("ui_fincafight_5", [this.newSocre]);
        }else{
            this.lbl_my_ranking_score.string = LangMgr.getCombineString("ui_fincafight_5", [msg.selfSimple ? msg.selfSimple.score : 0]);
        }
        this.node_no_rank_txt.active = msg.ranking === -1;
        this.setTopRank();
        // 当前奖励
        this.switchView(null, "1");
    }
    setTopRank() {
        for (let i = 0; i < this.rank_nodes.length; i++) {
            const data = this.top_player_list[i];
            this.setRankItem(this.rank_nodes[i], data);
        }
    }
    setRankItem(node: Node, data: proto.ISimpleRank) {
        const nameTxt = node.getChildByName("name_txt").getComponent(Label);
        const infoTxt = node.getChildByName("info_txt").getComponent(Label);
        const nobodyTxt = node.getChildByName("nobody_txt");
        const palyerHerdItem = node.getChildByName("PlayerHeadItem").getComponent(PlayerHeadItem);

        if (data) {
            nameTxt.node.active = true;
            infoTxt.node.active = true;
            nobodyTxt.active = false;
            palyerHerdItem.node.active = true;

            infoTxt.string = LangMgr.getCombineString("ui_fincafight_13", [data.score]);

            const roleId = data.simple.id;
            if (roleId.indexOf("r_") > -1) {
                // 当前是机器人 SimpleRoleInfo
                const robotId = Number(roleId.slice(-1));
                const tabInfo = tab.getData().RobotTableById.getValue(robotId);
                palyerHerdItem.setCloseCallBack(() => { })
                const lbl_lv = palyerHerdItem.node.getChildByName("lv_node").getChildByName("lv_txt").getComponent(Label);
                const sp_head = palyerHerdItem.node.getChildByName("head_node").getChildByName("head_img").getComponent(Sprite);
                lbl_lv.string = String(tabInfo.PlayerLevel);
                let itemHeadTab = tab.getData().ItemTableById.getValue(tabInfo.Image);
                sp_head.setTexture(itemHeadTab.Icon);
                nameTxt.string = LangMgr.getLab(tabInfo.Name);
            } else {
                const playerInfo = new SimpleRoleInfo();
                playerInfo.merge(data.simple);
                nameTxt.string = data.simple.name;
                palyerHerdItem.initHeadInfo({ roleInfo: playerInfo });
                palyerHerdItem.setCloseCallBack(() => {
                    UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { "roleId": roleId } })
                })
            }

        } else {
            nameTxt.node.active = false;
            infoTxt.node.active = false;
            nobodyTxt.active = true;
            palyerHerdItem.node.active = false;
        }
    }
    // 展示奖励弹窗
    showRewardPop() {
        UIMgr.ins.show({ viewName: ViewName.FincaFightRankRewardPop })
    }
    // 切换奖励信息
    switchView(e: EventTouch, type: string) {
        if (e && Number(type) === this.reward_type) {
            return
        }
        this.reward_type = Number(type);
        this.showRewardInfo();
    }
    // 显示
    showRewardInfo() {
        const rewards = FincaFightData.ins.getRewards(this.reward_type, true).selfReward;
        this.node_reward.destroyAllChildren();
        for (let key in rewards) {
            ItemPoolMgr.ins.createRewadItem(rewards[key], this.node_reward);
        }
    }
}