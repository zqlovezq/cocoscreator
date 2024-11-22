/*
 * @Descripttion: 上赛季排行榜信息模块
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kOneNumber, kThreeNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { showPopLayerV2 } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingInfoOfPreSeason extends InfiniteCell {
    @property(cc.Label)
    lbl_none_history_tip: cc.Label = null;

    @property(cc.Node)
    node_first_player: cc.Node = null;

    @property(cc.Label)
    lbl_first_name: cc.Label = null;

    @property(cc.Node)
    node_second_player: cc.Node = null;

    @property(cc.Label)
    lbl_second_name: cc.Label = null;

    @property(cc.Node)
    node_third_player: cc.Node = null;

    @property(cc.Label)
    lbl_third_name: cc.Label = null;

    @property(PlayerCard)
    first_player: PlayerCard = null;

    @property(PlayerCard)
    second_player: PlayerCard = null;

    @property(PlayerCard)
    third_player: PlayerCard = null;

    @property(cc.Label)
    lbl_cur_season_lv: cc.Label = null;

    private _top_three_player_names: cc.Label[]   = [];
    private _top_three_player_nodes: cc.Node[]    = [];
    private _top_three_player_infos: PlayerCard[] = []

    onLoad () {
        this._top_three_player_nodes.push(this.node_first_player);
        this._top_three_player_nodes.push(this.node_second_player);
        this._top_three_player_nodes.push(this.node_third_player);
        
        this._top_three_player_names.push(this.lbl_first_name);
        this._top_three_player_names.push(this.lbl_second_name);
        this._top_three_player_names.push(this.lbl_third_name);

        this._top_three_player_infos.push(this.first_player);
        this._top_three_player_infos.push(this.second_player);
        this._top_three_player_infos.push(this.third_player);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshPreSeasonRank, (param: any)=>{
            let data = (param as proto.IRankingOfRoleData[]);
            if(data){
                this.initData(data);
            }
        }, this);
    }

    onDestroy(){
        this._top_three_player_names = [];
        this._top_three_player_nodes = [];
        this._top_three_player_infos = [];
    }

    public UpdateContent(data: any){}

    public initData(topRankingList: proto.IRankingOfRoleData[]){
        this.initNodeVisible();
        this.setCurrentSeasonLv();
        this.setTopThreePlayer(topRankingList);
    }

    /* 初始化节点可见性 */
    private initNodeVisible(){
        this.node_first_player.active  = false;
        this.node_second_player.active = false;
        this.node_third_player.active  = false;
    }

    /* 设置当前赛季名称 */
    private setCurrentSeasonLv(){
        let tabData: tab.RankFightTable = tab.Data.RankFightTableById.getValue(Role.Instance.seasonID);
        if(isValidObj(tabData)){
            this.lbl_cur_season_lv.string = `${tabData.Id}`;
        }
    }
    
    /* 设置前三玩家 */
    private setTopThreePlayer(topRankingList: proto.IRankingOfRoleData[]){
        let dataLen = topRankingList.length;
        this.lbl_none_history_tip.node.active = dataLen <= kZeroNumber;

        let count = kZeroNumber;
        for(let idx = kZeroNumber; ; idx++){
            if(count >= kThreeNumber || idx >= dataLen){
                break;
            }

            this.setPreTopThreeName(this._top_three_player_nodes[count], 
                                    this._top_three_player_names[count], 
                                    topRankingList[idx].roleData.roleName);
                                    
            this.setPreTopThreePlayer(  this._top_three_player_infos[count], 
                                        topRankingList[count].roleData.headID, 
                                        topRankingList[count].roleData.roleUUID);
            count++;
        }
    }

    /* 设置上一个赛季前3名玩家名称
     * @param lblTxt  文本控件
     * @param name    玩家名称
     */
     private setPreTopThreeName(nodeTop: cc.Node, lblTxt: cc.Label, name: string){
        lblTxt.string      = name;
        nodeTop.active     = true;
    }

    /* 设置上一个赛季前3名玩家头像
     * @param playerNode 
     * @param headID 
     * @param roleID 
     */
    private setPreTopThreePlayer(playerNode: PlayerCard, headID: number, roleID: string){
        playerNode.setVisibleLevel(false);
        playerNode.setCanTouch(true);
        playerNode.initData(headID, kOneNumber, false);
        playerNode.getComponent(PlayerCard).setCallback(()=>{
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
                layer.initData(roleID);
            });
        });
    }
}
