/*
 * @Descripttion: 排行榜弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import PopLayer from "../Utils/PopLayer";
import SdkManager from "../Utils/SdkManager";
import ManagerRankingLevel from "./ManagerRankingLevel";
import RankingAllianceTemplate from "./RankingAllianceTemplate";
import RankingCooperationTemplate from "./RankingCooperationTemplate";
import RankingPvpTemplate from "./RankingPvpTemplate";
import WeChatRankingTemplate from "./WeChatRankingTemplate";

enum TopToggleType{
    PvpToggle         = 0, //对战排行
    AllianceToggle    = 1, //公会排行
    CooperationToggle = 2, //合作模式排行
}

enum BottomToggleType{
    AllServerToggle = 0, //全服排行
    WeChatToggle = 1, //微信排行
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingListPopLayer extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Node)
    node_top_toggle: cc.Node = null;

    @property(cc.Toggle)
    toggle_pvp: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_alliance: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_cooperation: cc.Toggle = null;

    @property(cc.Node)
    node_all_server_layout: cc.Node = null;
    
    @property(RankingAllianceTemplate)
    node_alliance_template: RankingAllianceTemplate = null;

    @property(RankingPvpTemplate)
    node_pvp_template: RankingPvpTemplate = null;

    @property(RankingCooperationTemplate)
    node_cooperation_template: RankingCooperationTemplate = null;

    @property(cc.Node)
    node_weChat_layout: cc.Node = null;

    @property(WeChatRankingTemplate)
    node_weChat_ranking_template: WeChatRankingTemplate = null;

    @property(WeChatRankingTemplate)
    node_weChat_cooperation_template: WeChatRankingTemplate = null;

    @property(cc.Toggle)
    toggle_all_server: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_weChat: cc.Toggle = null;

    private _top_toggle_type: TopToggleType;
    private _bottom_toggle_type: BottomToggleType;

    onLoad () {
        this.toggle_alliance.node.active = cc.sys.platform !== cc.sys.WECHAT_GAME;
        this._initNodeVisible();
        this._initClickEvent();
    }

    onDestroy(){
        ManagerRankingLevel.getInstance().destroy();
    }

    /* 初始化节点的可见性
     */
    private _initNodeVisible(){
        this.node_alliance_template.node.active    = false;
        this.node_pvp_template.node.active         = false;
        this.node_cooperation_template.node.active = false;
        this.node_weChat_layout.active             = false;
    }

    /* 初始化所有点击事件
     */
    private _initClickEvent(){
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);

        this.toggle_pvp.node.on("toggle",         this.onSelectPvp,         this);
        this.toggle_alliance.node.on("toggle",    this.onSelectAlliance,    this);
        this.toggle_cooperation.node.on("toggle", this.onSelectCooperation, this);
        this.toggle_all_server.node.on("toggle",  this.onSelectAllServer,   this);
        this.toggle_weChat.node.on("toggle",      this.onSelectWeChat,      this);
    }
    
    public initData(){
        this.toggle_pvp.isChecked         = true;
        this.toggle_alliance.isChecked    = false;
        this.toggle_cooperation.isChecked = false;
        this.node_pvp_template.node.active         = this.toggle_pvp.isChecked;
        this.node_alliance_template.node.active    = this.toggle_alliance.isChecked;
        this.node_cooperation_template.node.active = this.toggle_cooperation.isChecked;

        this.toggle_all_server.isChecked = true;
        this.toggle_weChat.isChecked     = false;

        //this._top_toggle_type    = TopToggleType.PvpToggle;
        //this._bottom_toggle_type = BottomToggleType.AllServerToggle;

        this.onSelectAllServer(this.toggle_all_server);
        //this.onSelectPvp(this.toggle_pvp);
    }

    /**
     * 对战Toggle
     */
    private onSelectPvp(node: cc.Toggle){
        if(TopToggleType.PvpToggle == this._top_toggle_type){
            return;
        }

        this._top_toggle_type = TopToggleType.PvpToggle;
        this.setTopToggleVisible();
    }

    /**
     * 联盟Toggle
     */
    private onSelectAlliance(node: cc.Toggle){
        if(TopToggleType.AllianceToggle == this._top_toggle_type){
            return;
        }

        this._top_toggle_type = TopToggleType.AllianceToggle;
        this.setTopToggleVisible();
    }

    /**
     * 合作模式Toggle
     */
    private onSelectCooperation(node: cc.Toggle){
        if(TopToggleType.CooperationToggle == this._top_toggle_type){
            return;
        }

        this._top_toggle_type = TopToggleType.CooperationToggle;
        this.setTopToggleVisible();
    }

    /**
     * 全服排行Toggle
     */
    private onSelectAllServer(node: cc.Toggle){
        if(BottomToggleType.AllServerToggle == this._bottom_toggle_type){
            return;
        }

        console.log("$$$$$$$$$$$ onSelectAllServer $$$$$$$$$$$$$");
        this._bottom_toggle_type = BottomToggleType.AllServerToggle;
        this.toggle_alliance.node.active = true;
        this.toggle_pvp.isChecked = true;
        this.setBottomToggleVisible();
        this.onSelectPvp(this.toggle_pvp);
    }

    /**
     * 微信排行Toggle
     */
    private onSelectWeChat(node: cc.Toggle){
        if(BottomToggleType.WeChatToggle == this._bottom_toggle_type){
            return;
        }

        this._bottom_toggle_type = BottomToggleType.WeChatToggle;
        this.node_alliance_template.node.active = false;
        this.toggle_alliance.node.active        = false;
        this.toggle_pvp.isChecked               = true;
        this.setBottomToggleVisible();

        this.node_weChat_ranking_template.initData("pvpRanking");
        this.onSelectPvp(this.toggle_pvp);
    }

    /*  */
    private setTopToggleVisible(){
        this.node_pvp_template.node.active         = TopToggleType.PvpToggle         == this._top_toggle_type;
        this.node_alliance_template.node.active    = (TopToggleType.AllianceToggle   == this._top_toggle_type);
        this.node_cooperation_template.node.active = TopToggleType.CooperationToggle == this._top_toggle_type;
        if(BottomToggleType.WeChatToggle == this._bottom_toggle_type){
            let rankKey = "pvpRanking";
            TopToggleType.CooperationToggle == this._top_toggle_type && (rankKey = "pveRanking");
            this.node_weChat_ranking_template.initData(rankKey);
        }
    }

    /*  */
    private setBottomToggleVisible(){
        this.node_all_server_layout.active = BottomToggleType.AllServerToggle == this._bottom_toggle_type;
        this.node_weChat_layout.active     = BottomToggleType.WeChatToggle == this._bottom_toggle_type;
    }
}
