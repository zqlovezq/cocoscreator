/*
 * @Descripttion: 联盟信息Bar预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import { setAllianceBadge } from "./AllianceCommonInterface";
import AllianceDataCacheManager from "./AllianceDataCacheManager";
import AllianceDetailPopLayer from "./AllianceDetailPopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceInfoBarPfb extends InfiniteCell {

    @property(cc.Sprite)
    spr_alliance_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Label)
    lbl_members_count: cc.Label = null;

    private _alliance_uuid: string;
    private _alliance_icon_idx: number = kZeroNumber;

    onLoad () {
        //this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    }

    public UpdateContent(idx){
        this.initData(idx);
    }
    
    /**
     
     * Description: 初始化联盟信息数据
     * @param idx   联盟简要信息索引
     */
    public initData(idx: number){
        let allianceInfo = AllianceDataCacheManager.getInstance().getAllianceInfo(idx);
        if(!allianceInfo){
            return;
        }

        this._alliance_uuid     = allianceInfo.allianceID;
        this._alliance_icon_idx = allianceInfo.icon;
        this.showAllianceInfo(allianceInfo.name, allianceInfo.numberOfMember, allianceInfo.score);
    }

    /* 显示联盟信息
     * @param name     联盟名称
     * @param members  联盟成员数
     */
    private showAllianceInfo(name: string, members: number, score: number){
        this.setAllianceIcon();
        this.setAllianceName(name);
        this.setMembers(members);
        this.setSeasonScore(score);
    }

    /* 设置联盟图标
     */
    private setAllianceIcon(){
        setAllianceBadge(this.spr_alliance_icon, this._alliance_icon_idx);
    }

    /* 设置联盟名称
     * @param name  名称
     */
    private setAllianceName(name: string){
        this.lbl_alliance_name.string = name;
    }

    /* 设置赛季积分
     * @param score 
     */
    private setSeasonScore(score: number){
        this.lbl_season_score.string = `${score}`;
    }

    /* 设置联盟成员数
     * @param ownCnt    已拥有的成员数
     */
    private setMembers(ownCnt: number){
        let maxCapacityCount = tab.Data.GetKeyValue_ConfigTable().AllianceMaxMemberCount;
        this.lbl_members_count.string = `${ownCnt}/${maxCapacityCount}`;
    }

    public onClickAllianceDetail(/*event: cc.Event.EventTouch*/){
        showPopLayerV2("prefab/AllianceDetailPopLayer", AllianceDetailPopLayer).then(detailLayer =>{
            detailLayer.initData(this._alliance_uuid);
        });
    }
}
