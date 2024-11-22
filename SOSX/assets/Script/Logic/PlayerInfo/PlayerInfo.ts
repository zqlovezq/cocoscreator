/*
 *  人物信息弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkStringIsValid, setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import AllianceDetailPopLayer from "../Alliance/AllianceDetailPopLayer";
import ChatMainPage from "../Chat/ChatMainPage";
import changeName from "../Common/changeName";
import { addFriend, isValidObj, kNoneString, kZeroNumber } from "../Common/CommonInterface";
import CopyTeamSelect from "../Common/CopyTeamSelect";
import Role from "../Common/Role";
import RankScoreRewardClass, { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import LoginData from "../Login/LoginData";
import ManagerNotice from "../Notices/ManagerNotice";
import { CreateSpine, getCurScoreStage, getServerUtcTime, LoadResAsync, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import PlayerCard from "./PlayerCard";
import PlayerInfoBountyRecord from "./PlayerInfoBountyRecord";
import PlayerInfoFightRecordModel from "./PlayerInfoFightRecordModel";
import PlayerInfoFormationModel from "./PlayerInfoFormationModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerInfo extends PopLayer {

    @property(cc.Node)
    node_base_role_info: cc.Node = null;

    @property(cc.Node)
    node_role_card: cc.Node = null;

    @property(cc.Sprite)
    spr_portrait: cc.Sprite = null;

    @property(cc.Label)
    lbl_name: cc.Label = null;

    @property(cc.Button)
    btn_change_name: cc.Button = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    //@property(cc.Label)
    //lbl_role_uuid: cc.Label = null;

    @property(cc.Button)
    btn_add_friend: cc.Button = null;

    @property(cc.Button)
    btn_private_chat: cc.Button = null;

    @property(cc.Node)
    node_season_info: cc.Node = null;

    @property(cc.Sprite)
    node_season_spine: cc.Sprite = null;

    @property(cc.Node)
    node_alliance: cc.Node = null;

    @property(cc.Sprite)
    spr_alliance_badge: cc.Sprite = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_score: cc.Label = null;

    @property(cc.Node)
    node_player_formation_model: cc.Node = null;

    @property(cc.Node)
    node_fight_record_model: cc.Node = null;

    @property(cc.Node)
    node_Bounty_record_model: cc.Node = null;

    //@property(cc.Node)
    //node_player_alliance_model: cc.Node = null;

    @property(cc.Node)
    node_have_alliance: cc.Node = null;

    @property(cc.Node)
    node_nothave_alliance: cc.Node = null;
    @property(cc.Node)
    node_bounty_record:cc.Node = null;

    private _player_id: string;
    private _player_alliance_uuid: string = kNoneString;
    private _player_alliance_position: number;
    private _player_name: string;
    private _alliance_name: string;
    private _alliance_icon_idx: number;
    private _player_head_id: number;

    /*  */
    onTouchStart() {
        let tips = cc.director.getScene().getComponentInChildren(CopyTeamSelect)
        if (tips) {
            tips.node.active = false
        }
    }

    /*  */
    onLoad() {
        this.btn_change_name.node.active = false;
        this.btn_add_friend.node.active = false;
        this.btn_private_chat.node.active = false;
        this.btn_change_name.node.on("click", this.onClickChangeName, this);
        this.btn_add_friend.node.on("click", this.onClickAddFriend, this);
        this.btn_private_chat.node.on("click", this.onClickPrivateChat, this);
        this.node_alliance.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, true)

        //监听获取玩家信息协议
        Net.listenProtocol(proto.Ptl.PlayerInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_PlayerInfoRsp.decode(buffer);
            cc.log("PlayerInfoRsp (获取玩家信息) msg: " + JSON.stringify(msg))
            if (msg) {
                this._player_id = msg.playerBaseInfo.roleId;
                this.setRoleBaseInfo(msg.playerBaseInfo);
                this.setCurrentSeasonScore(msg.seasonInfo);
                this.setPlayerFormationAndDevil(msg.pvpCardInfo.cardLists, msg.playerDevilInfo.devilCardData, msg.pvpCardInfo.talentItems);
                // let a = this._player_id;
                // let b = Role.Instance.RoleData.id;
                this.setFightRecordMsg(msg.fightRecordInfo, (this?._player_id === Role.Instance.ID)); /* 不是自己看自己排行，不显示"清除战绩"按钮 */
                this.setAllianceData(msg.allianceInfo);
            }
        }, this);
        Net.listenProtocol(proto.Ptl.GetBountyStatRsp, (buffer, ptl) => {
            let msg = proto.Msg_GetBountyStatRsp.decode(buffer);
            cc.log("GetBountyStatRsp (获取赏金赛信息) msg: " + JSON.stringify(msg));
            if(msg.result===proto.CommonErrorCode.Succeed){
                this.node_bounty_record.getComponent(PlayerInfoBountyRecord).initData(msg,this?._player_id === Role.Instance.ID);
            }
        }, this);
        //监听改名成功消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChangeNameSuccess, (param: any) => {
            let name = (param as string);
            this.setRoleName(name);
        }, this);

        //监听检测玩家是否是自己好友消息
        Net.listenProtocol(proto.Ptl.CheckPlayerIsMyFriendRsp, (buffer, ptl) => {
            let msg = proto.Msg_CheckPlayerIsMyFriendRsp.decode(buffer);
            cc.log("CheckPlayerIsMyFriendRsp (判断某人是不是自己的好友) msg: " + JSON.stringify(msg))
            if (msg) {
                if (!msg.bMyFriend) {
                    ShowTips("PleaseAddFriend");
                    return;
                }

                showPopLayerV2("prefab/ChatMainPage", ChatMainPage).then(layer => {
                    layer.initPrivateObj({
                        uuid: this._player_id,
                        name: this._player_name,
                        allianceName: this._alliance_name,
                        allianceIconIdx: this._alliance_icon_idx,
                        headID: this._player_head_id,
                        timestamp: getServerUtcTime(),
                        bOnline: true,
                        bNewMsg: false
                    });
                });
                this.setVisible(false);
            }
        }, this);


    }

    private setPlayerHead(remoteUrl: string) {
        ManagerNotice.getInstance().downloadImg(remoteUrl, this.spr_portrait);

    }

    /*  */
    start() {
       
    }

    /*  */
    public initData(roleUUID: string) {
        this._player_id = roleUUID;
        this.requestPlayerInfo();
        this.requestPlayerBountyInfo();
    }

    /* 请求玩家信息 */
    private requestPlayerInfo() {
        let msg = new proto.Msg_PlayerInfoReq()
        msg.roleId = this._player_id;
        Net.Send(proto.Ptl.PlayerInfoReq, msg);
    }
    // 请求玩家赏金赛战绩信息
    private requestPlayerBountyInfo(){
        let msg = new proto.Msg_GetBountyStatReq();
        Net.Send(proto.Ptl.GetBountyStatReq, msg);
    }
    /* 设置角色基础信息 */
    private setRoleBaseInfo(roleInfo: proto.IPlayerBaseInfo, playerId?: string) {
        this._player_head_id = roleInfo.indexCard;
        this.setRoleName(roleInfo.roleName);
        this.checkIsSelf();

        this.setPlayerHead(roleInfo.headUrl)
    }

    /* 检测是不是自己 */
    private checkIsSelf() {
        let bSelf = Role.Instance.RoleData.id === this._player_id;
        this.btn_add_friend.node.active = !bSelf;
        this.btn_change_name.node.active = bSelf;
        this.btn_private_chat.node.active = !bSelf;
    }

    /* 设置角色名称
     * @param name 玩家名称
     */
    private setRoleName(name: string) {
        this._player_name = name;
        this.lbl_name.string = name;
    }

    /* 设置角色基础信息
     * @param curScore  当前赛季积分
     */
    private setCurrentSeasonScore(seasonInfo: proto.IPlayerSeasonInfo) {
        this.lbl_season_score.string = `${seasonInfo.curScore}`;
        let data = getCurScoreStage(seasonInfo.curScore);
        this.node_season_spine.setTexture(data.RankIcon);
    }

    /* 设置当前赛季名称
     * @param curScore   玩家当前赛季积分
     */
    private setCurrentSeasonName(curScore: number) {
        let rankLv = RankScoreRewardClass.getInstance().getRankLevelToScore(curScore);
        this.setCurrentSeasonBadgeOrSpine(rankLv);

        let tabRankGradeData = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if (!isValidObj(tabRankGradeData)) {
            if (!cc.sys.isNative) { throw new Error("Current Season Level is Error!"); }
            return;
        }
    }

    /* 设置当前赛季的徽章或者spine
     * @param rankLv  玩家当前赛季段位
     */
    private setCurrentSeasonBadgeOrSpine(rankLv: number) {
        let tabRankGradeData = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if (!isValidObj(tabRankGradeData)) {
            if (!cc.sys.isNative) { throw new Error("Current Season Level is Error!"); }
            return;
        }
    }

    /* 设置联盟数据 */
    private setAllianceData(allianceInfo: proto.IPlayerAllianceInfo) {
        if (!allianceInfo || allianceInfo === undefined || !checkStringIsValid(allianceInfo.allianceUUID)) {
            this.node_have_alliance.active = false;
            this.node_nothave_alliance.active = true;
            this.setAllianceModelVisible(false);
            return;
        }

        this.setAllianceModelVisible(true);
        this.lbl_alliance_name.string = allianceInfo.allianceName;
        this.lbl_alliance_score.string = `${allianceInfo.allianceScore}`;
        this._player_alliance_uuid = allianceInfo.allianceUUID;
        this._player_alliance_position = allianceInfo.position;
        this._alliance_name = allianceInfo.allianceName;
        this._alliance_icon_idx = allianceInfo.allianceIconIdx
        this.setAllianceIcon();
    }

    /* 设置联盟模块可见性 */
    private setAllianceModelVisible(bHaveAlliance: boolean) {
        this.node_have_alliance.active = bHaveAlliance;
        this.node_nothave_alliance.active = !bHaveAlliance;
    }

    /* 设置联盟徽章 */
    private setAllianceIcon() {
        setAllianceBadge(this.spr_alliance_badge, this._alliance_icon_idx);
    }

    /* 设置玩家战斗记录信息
     * @param fightRecordInfo  玩家战斗记录信息
     */
    private setFightRecordMsg(fightRecordInfo: proto.IPlayerInfoFightRecord, bShowClearBtn: boolean) {
        this.node_fight_record_model.getComponent(PlayerInfoFightRecordModel).initData(fightRecordInfo, bShowClearBtn);
    }
    /* 设置玩家阵容信息和魔王信息
     * @param formationInfos  阵容数据列表
     * @param talentInfo      玩家阵容信息列表
     */
    private setPlayerFormationAndDevil(formationInfos: proto.IFightCardData[],
        devilInfo: proto.IFightCardData,
        talentInfos: proto.ITalenItem[]) {
        let bSelf = Role.Instance.RoleData.id === this._player_id;
        this.node_player_formation_model.getComponent(PlayerInfoFormationModel).initData(formationInfos, talentInfos, bSelf);
    }

    /* 改名 */
    private onClickChangeName() {
        showPopLayerV2("prefab/changeName", changeName).then(layer => {
            layer.requestHowManyTimesChangeName();
        });
    }

    /* 添加好友 */
    private onClickAddFriend() {
        addFriend(this._player_id, this._player_name);
    }

    /* 点击私聊 */
    private onClickPrivateChat() {
        let msg = new proto.Msg_CheckPlayerIsMyFriendReq();
        msg.playerUUID = this._player_id;
        Net.Send(proto.Ptl.CheckPlayerIsMyFriendReq, msg);
    }

    /*  */
    private onTouchEnded() {
        if (!checkStringIsValid(this._player_alliance_uuid)) {
            return;
        }
        let self = this;
        showPopLayerV2("prefab/AllianceDetailPopLayer", AllianceDetailPopLayer).then(layer => {
            layer.initData(self._player_alliance_uuid);
        });
        this.setVisible(false);
    }
}
