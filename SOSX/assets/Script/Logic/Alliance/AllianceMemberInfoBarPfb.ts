/*
 * @Descripttion: 联盟成员预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import RankScoreRewardClass, { checkIconPathIsValid} from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerAlliancePersonel from "../PlayerInfo/PlayerAlliancePersonel";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import {LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import { getAlliancePositionDes, getAllianceTimeFormat, RecordCurrentAllianceID, SaveBeforeChangePosition } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceMemberInfoBarPfb extends InfiniteCell {

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite = null;

    @property(cc.Node)
    node_player_head: cc.Node = null;

    @property(cc.Sprite)
    spr_season_badge: cc.Sprite = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    @property(cc.Label)
    lbl_support_cnt: cc.Label = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_position: cc.Label = null;

    @property(cc.Label)
    lbl_online_time: cc.Label = null;

    @property(cc.Label)
    lbl_rank_lv: cc.Label = null;

    @property(cc.Label)
    lbl_season_lv: cc.Label = null;
    
    @property(PlayerAlliancePersonel)
    node_personel_appoint: PlayerAlliancePersonel = null;
    
    private _player_uuid: string       = kNoneString;     //联盟成员uuid
    private _player_name: string       = kNoneString;    //联盟成员名称
    private _player_position: number   = kZeroNumber;   //联盟职级
    private _player_head_id: number    = kZeroNumber;  //联盟成员头像id
    private _player_rank_idx: number   = kZeroNumber; //联盟成员排行下标
    private _cur_alliance_id: string   = kNoneString; //当前联盟id

    onLoad () {
        //this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        //监听联盟任命消息
        Net.listenProtocol(proto.Ptl.AllianceSetPostRankRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceSetPostRankRsp.decode(buffer);
            cc.log("AllianceSetPostRankRsp(监听联盟任命消息) : msg " + JSON.stringify(msg))
            if(msg && msg.result === proto.Msg_AllianceSetPostRankRsp.ErrorCode.Succeed){
                if(msg.playerUUID === this._player_uuid){
                    this._player_position = msg.postRank;
                    this.setPersonelAppointVisible();
                }else{
                    //如果当前被委任人成为首领，那么原首领就要变为普通成员
                    if(tab.AlliancePositionType.AlliancePositionType_Leader === msg.postRank && 
                        tab.AlliancePositionType.AlliancePositionType_Leader === SaveBeforeChangePosition.getInstance().OldPosition){
                            this._player_position = Role.Instance.RoleData.allianceData.PostRank;
                            //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyAllMembersHideAppointNode);
                            if(this._player_uuid !== Role.Instance.RoleData.id){
                                this.node_personel_appoint.node.active = false;
                            }
                    }
                }

                this.setMemberPosition();
            }
        }, this);

        //监听通知所有成员隐藏人事任命节点消息
        /*Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyAllMembersHideAppointNode, (param:any)=>{
            if(this._player_uuid !== Role.Instance.RoleData.id){
                this.node_personel_appoint.node.active = false;
            }
        }, this);*/
    }

    public UpdateContent(data: proto.IAllianceMemberInfo){
        this._player_rank_idx = (this.dataIndex as number)
        this.setMemberRank();
        if(!data){return;}
        this.initData(data);
    }
    
    public initData(playerInfo: proto.IAllianceMemberInfo){
        this._player_uuid       = playerInfo.roleID;
        this._player_position   = playerInfo.postRank;
        this._player_head_id    = playerInfo.indexCard;
        this._player_name       = playerInfo.roleName;
        this._cur_alliance_id   = RecordCurrentAllianceID.getInstance().getCurrentAllianceID();

        //是自己联盟且是自己更新自己的名称 头像 赛季积分
        if( Role.Instance.RoleData.allianceData && 
            Role.Instance.RoleData.allianceData.allianceID === this._cur_alliance_id && 
            playerInfo.roleID === Role.Instance.RoleData.id){
            this._player_head_id = Role.Instance.RoleData.indexCard;
            playerInfo.roleName = Role.Instance.RoleData.name;
            playerInfo.rankScore = Role.Instance.RoleData.rankData.score;
        }
        
        this.spr_rank_bg.spriteFrame = null;
        this.setMemberHead();
        this.setMemberPosition();
        this.setPersonelAppointVisible();
        this.setMemberName(playerInfo.roleName);
        this.setMemberSeasonScore(playerInfo.rankScore);
        this.setMemberSeasonBadge(playerInfo.rankScore);
        this.setMemberOnlineTimes(playerInfo.lastLoginTime, playerInfo.isOnline);
        this.setMemberSupportCount(playerInfo.support);
    }

    /* 设置玩家头像
     */
    private setMemberHead(){
        this.node_player_head.getComponent(PlayerCard).initData(this._player_head_id, kOneNumber, false, true);
    }

    /* 设置玩家排行标签
     */
    private async setMemberRank(){
        this.lbl_rank_lv.string = `${this._player_rank_idx}`;
        
        //前3名特殊后面都一样
        let rankingFlagTabLen = tab.Data.RankingIconTable.length;
        let findRankingIdx    = this._player_rank_idx >= rankingFlagTabLen ? rankingFlagTabLen : this._player_rank_idx;
        let rankingTabData    = tab.Data.RankingIconTableByID.getValue(findRankingIdx);
        if(isValidObj(rankingTabData)){
            if(!checkIconPathIsValid(rankingTabData.AllianceRankingIcon)){return;}

            let sf = await LoadResAsync(rankingTabData.AllianceRankingIcon, cc.SpriteFrame);
            if(sf) {
                if( this.spr_rank_bg){
                    this.spr_rank_bg.spriteFrame = sf;
                }
            }
        }
    }

    /* 设置玩家名称
     * @param name  玩家名称
     */
    private setMemberName(name: string){
        this.lbl_player_name.string = name;
    }

    /* 设置玩家职位
     */
    private setMemberPosition(){
        this.lbl_position.string = getAlliancePositionDes(this._player_position);
    }

    /* 设置玩家上次在线时间
     * @param times   上次登录时间
     * @param bOnline 在线不
     */
    private setMemberOnlineTimes(times: number, bOnline: boolean){
        if(bOnline){
            this.lbl_online_time.string = tab.Data.GetKeyValue_ConfigTable().OnlineText;
            return;
        }
        this.lbl_online_time.string = getAllianceTimeFormat(times);
    }

    /* 设置玩家赛季积分
     * @param score   玩家赛季积分
     */
    private setMemberSeasonScore(score: number){
        this.lbl_season_score.string = `${score}`;
    }

    /* 设置玩家赛季徽章icon
     * @param score   玩家赛季积分
     */
    private async setMemberSeasonBadge(score: number){
        let rankLv           = RankScoreRewardClass.getInstance().getRankLevelToScore(score);
        let rankGradeTabData = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if(!isValidObj(rankGradeTabData)){
            if(!cc.sys.isNative){throw new Error("玩家赛季积分有问题，表中取不到数据");}
            return;
        }
        this.lbl_season_lv.string = `${rankLv}`;
        /*
        if(!checkIconPathIsValid(rankGradeTabData.MainRewardIcon)){return;}
        let sf = await LoadResAsync(rankGradeTabData.MainRewardIcon, cc.SpriteFrame);
        if(sf) {
            if( this.spr_season_badge){
                this.spr_season_badge.spriteFrame = sf;
            }
        }
        */
    }
    
    /* 设置玩家在联盟中的支援总次数
     * @param cnt  支援总次数
     */
    private setMemberSupportCount(cnt: number){
        this.lbl_support_cnt.string = `${cnt}`;
    }

    /* 设置联盟人事任命的可见性
     */
    private setPersonelAppointVisible(){
        let selfPosition       = Role.Instance.RoleData.allianceData.PostRank;
        let selfAllianceUUID   = Role.Instance.RoleData.allianceData.allianceID;
        let bPositionValid     = selfPosition < tab.AlliancePositionType.AlliancePositionType_Member && 
                                 selfPosition < this._player_position;   //自身的联盟职级是不是比对方高
        let bSame = selfAllianceUUID === this._cur_alliance_id; //是否是同一个联盟
        if(!bPositionValid || !bSame){
            this.node_personel_appoint.node.active = false;
            return;
        }

        this.node_personel_appoint.node.active = true;
        this.node_personel_appoint.initData(this._player_position, this._player_uuid, this._player_name);
    }

    /*  */
    public onClickMember(/*event: cc.Event*/){
        let self = this;
        showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
            layer.initData(self._player_uuid);
            //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CloseAllianceDetailPage);
        });
    }
}
