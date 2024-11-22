/*
 *  合作模式卡组模块
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import PlayerCard from "../PlayerInfo/PlayerCard";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CooperationCardGroup extends cc.Component {

    @property(PlayerCard)
    node_player_card_left_1: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_left_2: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_left_3: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_left_4: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_left_5: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_left_6: PlayerCard = null; /*  */

    @property(PlayerCard)
    left_player_head: PlayerCard = null; /*  */

    @property(cc.Label)
    lbl_player_name_left: cc.Label = null; /*  */

    @property(cc.Sprite)
    spr_alliance_icon_left: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    spr_non_alliance_icon_left: cc.Sprite = null; /*  */

    @property(cc.Label)
    lbl_alliance_name_left: cc.Label = null; /*  */

    @property(PlayerCard)
    node_player_card_right_1: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_right_2: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_right_3: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_right_4: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_right_5: PlayerCard = null; /*  */

    @property(PlayerCard)
    node_player_card_right_6: PlayerCard = null; /*  */

    @property(PlayerCard)
    right_player_head: PlayerCard = null; /*  */

    @property(cc.Label)
    lbl_player_name_right: cc.Label = null; /*  */

    @property(cc.Sprite)
    spr_alliance_icon_right: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    spr_non_alliance_icon_right: cc.Sprite = null; /*  */

    @property(cc.Label)
    lbl_alliance_name_right: cc.Label = null; /*  */

    private _left_card_group_list : PlayerCard[] = []; /*  */
    private _right_card_group_list: PlayerCard[] = []; /*  */

    /*  */
    onLoad () {
        this._left_card_group_list.push(this.node_player_card_left_1);
        this._left_card_group_list.push(this.node_player_card_left_2);
        this._left_card_group_list.push(this.node_player_card_left_3);
        this._left_card_group_list.push(this.node_player_card_left_4);
        this._left_card_group_list.push(this.node_player_card_left_5);
        this._left_card_group_list.push(this.node_player_card_left_6);

        this._right_card_group_list.push(this.node_player_card_right_1);
        this._right_card_group_list.push(this.node_player_card_right_2);
        this._right_card_group_list.push(this.node_player_card_right_3);
        this._right_card_group_list.push(this.node_player_card_right_4);
        this._right_card_group_list.push(this.node_player_card_right_5);
        this._right_card_group_list.push(this.node_player_card_right_6);
    }

    /*  */
    onDestroy(){
        this._left_card_group_list  = [];
        this._right_card_group_list = [];
    }

    /*  */
    public initData(data: proto.CooperationBothRankingData){
        this.setPlayerName(this.lbl_player_name_left,  data.leftPlayerData.roleData.roleName);
        this.setPlayerName(this.lbl_player_name_right, data.rightPlayerData.roleData.roleName);

        //左边联盟
        let bHaveAlliance = isValidObj(data.leftPlayerData.roleData.allianceName);
        let allianceName = bHaveAlliance ? 
                            data.leftPlayerData.roleData.allianceName : 
                            tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        this.setPlayerName(this.lbl_alliance_name_left, allianceName);
        this.setAllianceBadgeVisible(bHaveAlliance, true);
        bHaveAlliance && this.setAllianceBadge(this.spr_alliance_icon_left, data.leftPlayerData.roleData.allianceIconIdx);

        //右边联盟
        bHaveAlliance = isValidObj(data.rightPlayerData.roleData.allianceName);
        allianceName = bHaveAlliance ? 
                        data.rightPlayerData.roleData.allianceName : 
                        tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        this.setAllianceBadgeVisible(bHaveAlliance, false);
        bHaveAlliance && this.setAllianceBadge(this.spr_alliance_icon_right, data.rightPlayerData.roleData.allianceIconIdx);

        this.setPlayerName(this.lbl_alliance_name_right, allianceName);

        this.setPlayerHead(this.left_player_head,      data.leftPlayerData.roleData.headID);
        this.setPlayerHead(this.right_player_head,     data.rightPlayerData.roleData.headID);
        
        this.setCardGroup(this._left_card_group_list,  data.leftPlayerData.cardLists);
        this.setCardGroup(this._right_card_group_list, data.rightPlayerData.cardLists);
    }
    
    /* 设置联盟徽章的可见性 */
    private setAllianceBadgeVisible(bHaveAlliance: boolean, bLeft: boolean){
        if(bLeft){
            this.spr_alliance_icon_left.node.active     = bHaveAlliance;
            this.spr_non_alliance_icon_left.node.active = !bHaveAlliance;
        } else {
            this.spr_alliance_icon_right.node.active     = bHaveAlliance;
            this.spr_non_alliance_icon_right.node.active = !bHaveAlliance;
        } 
    }

    /* 设置玩家名称
     * @param lblName    名称文本控件
     * @param name       具体名称
     */
    private setPlayerName(lblName: cc.Label, name: string){
        lblName.string = name;
    }

    /* 设置魔王信息 */
    private setPlayerHead(nodeHead: PlayerCard, headID: number){
        nodeHead.initData(headID, kOneNumber, false, true);
        nodeHead.setCanTouch(false);
    }

    /* 设置联盟徽章 */
    private setAllianceBadge(sprAlliance: cc.Sprite, iconIdx: number){
        setAllianceBadge(sprAlliance, iconIdx);
    }

    /* 设置卡组
     * @param cardGroupList  卡组卡牌节点列表
     * @param cardIDList     卡组具体信息列表
     */
     private setCardGroup(cardGroupList: PlayerCard[], cardIDList: proto.IFightCardData[]){
        let cardGroupArrLen = cardGroupList.length;
        let dataLen         = cardIDList.length;
        for(let idx = kZeroNumber; idx < cardGroupArrLen; idx++){
            if(idx < dataLen){
                cardGroupList[idx].initData(cardIDList[idx].staticId, cardIDList[idx].level, false);
            }
        }
    }
}
