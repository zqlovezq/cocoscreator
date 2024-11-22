/*
 * @Descripttion: 没有加入联盟时的联盟界面
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { k255, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { ShowTips } from "../Utils/GameUtils";
import { checkStringIsValid, sortAlliance } from "./AllianceCommonInterface";
import AllianceDataCacheManager from "./AllianceDataCacheManager";
import AllianceInfoBarPfb from "./AllianceInfoBarPfb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NoneAlliancePagePfb extends cc.Component {

    @property(cc.EditBox)
    edit_alliance_name: cc.EditBox = null;

    @property(cc.Button)
    btn_search: cc.Button = null;

    @property(cc.Button)
    btn_refresh: cc.Button = null;

    @property(cc.Button)
    btn_clear: cc.Button = null;

    @property(cc.Node)
    list_view: cc.Node = null;

    @property(cc.Label)
    lbl_recommend_tips: cc.Label = null;

    @property(cc.Label)
    lbl_search_ret_tip: cc.Label = null;
    
    @property(cc.Label)
    lbl_none_search_info_tip: cc.Label = null;

    @property(cc.Node)
    node_loading: cc.Node = null;

    @property(cc.Label)
    lbl_loading: cc.Label = null;
    
    @property(cc.Prefab)
    pfb_alliance_info_bar: cc.Prefab = null;

    @property({ displayName: "联盟条的高度" })
    alliance_bar_height: number = kZeroNumber;

    private alliance_list_view: InfiniteList = null;
    private _bConstructor: boolean           = false;

    onLoad () {
        this.btn_clear.node.active                = false;
        this.lbl_search_ret_tip.node.active       = false;
        this.lbl_none_search_info_tip.node.active = false;
        this.node_loading.opacity                 = kZeroNumber;
        this.btn_search.node.on("click", this.onClickSearch,      this);
        this.btn_clear.node.on("click", this.onClickClearEditBox, this);
        this.btn_refresh.node.on("click", this.onClickRefresh,    this);
        
        this.alliance_list_view = this.list_view.getComponent(InfiniteList);
        //初始化scrollView接口
        this.alliance_list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellIdx.bind(this),
        });
        
        //监听搜索联盟事件
        Net.listenProtocol(proto.Ptl.SearchAllianceRsp, (buffer, ptl)=>{
            if(!this.node.active){
                return;
            }

            let msg = proto.Msg_SearchAllianceRsp.decode(buffer);
            cc.log("SearchAllianceRsp(监听搜索联盟事件) : msg " + JSON.stringify(msg))
            if(msg){
                cc.sys.platform == cc.sys.WECHAT_GAME && (this.list_view.active = true);
                this.setListEmptyTipVisible(msg.allianceInfo.length === kZeroNumber);
                this.refreshRecommendAllianceData(msg.allianceInfo);
                this.node_loading.opacity = kZeroNumber;
                
            }
            this.btn_clear.node.active = true;
        }, this);
        
        //监听推荐/刷新联盟消息
        Net.listenProtocol(proto.Ptl.RecommendAllianceRsp, (buffer, ptl)=>{
            if(!this.node.active){
                return;
            }

            let msg = proto.Msg_RecommendAllianceRsp.decode(buffer);
            cc.log("RecommendAllianceRsp(监听推荐/刷新联盟消息) : msg " + JSON.stringify(msg))
            if(msg){
                this.setListEmptyTipVisible(msg.allianceInfo.length === kZeroNumber);
                this.refreshRecommendAllianceData(msg.allianceInfo);
            }
        }, this);
    }

    /*  */
    onDestroy(){
        AllianceDataCacheManager.getInstance().destroyAllianceInfoList();
    }
    
    /*  */
    public initData(){
        this._bConstructor = true;
        this.setTipLabelVisible(false);
        this.requestRecommendAllianceList();
    }

    /* 销毁页面数据
     */
    public destroyPageData(){
        if(!this._bConstructor){
            return;
        }
        
        this._bConstructor             = false;
        AllianceDataCacheManager.getInstance().destroyAllianceInfoList();
        this.edit_alliance_name.string = kNoneString;
        this.btn_clear.node.active     = false;
        this.alliance_list_view.Reload(true, true);
    }

    /* 刷新推荐联盟数据
     * @param allianceList   联盟列表
     */
    private refreshRecommendAllianceData(allianceList: proto.IAllianceSimpleInfo[]){
        AllianceDataCacheManager.getInstance().setAllianceInfoList(allianceList);
        this.alliance_list_view.Reload(true);
    }

    /* 请求联盟推荐列表
     */
    private requestRecommendAllianceList(){
        let msg = new proto.Msg_RecommendAllianceReq();
        Net.Send(proto.Ptl.RecommendAllianceReq, msg);
    }
    
    /* 设置提示文本的可见性
     */
    private setTipLabelVisible(bSearchState: boolean){
        this.lbl_search_ret_tip.node.active = bSearchState;
        this.lbl_recommend_tips.node.active = !bSearchState;
        this.btn_refresh.node.active        = !bSearchState;
    }

    /* 设置列表为空时提示语句的可见性
     */
    private setListEmptyTipVisible(bVisible: boolean){
        this.lbl_none_search_info_tip.node.active = bVisible;
    }
    
    /* 点击搜索联盟事件
     */
    private onClickSearch(){
        if(!checkStringIsValid(this.edit_alliance_name.string)){
            ShowTips("StringIsEmpty");
            return;
        }
        
        let msg     = new proto.Msg_SearchAllianceReq();
        msg.content = this.edit_alliance_name.string;
        Net.Send(proto.Ptl.SearchAllianceReq, msg);
        this.setTipLabelVisible(true);
        if(cc.sys.platform == cc.sys.WECHAT_GAME){
            this.node_loading.opacity = k255;
            this.list_view.active     = false;
        }
    }

    /* 点击清空搜索输入框事件
     */
    private onClickClearEditBox(){
        this.edit_alliance_name.string = kNoneString;
        this.btn_clear.node.active     = false;
        this.setTipLabelVisible(false);
        this.requestRecommendAllianceList();
    }

    /* 点击刷新推荐联盟事件
     */
    private onClickRefresh(){
        this.requestRecommendAllianceList();
    }

    /* 获取单元格真正的下标
     * @param idx  单元格下标
     */
    private getRightCellIndex(idx: number){
        return this.getCellCount() - kOneNumber - idx;
    }
    
    /* 获取单元格数量
     */
    private getCellCount(){
        return AllianceDataCacheManager.getInstance().getAllianceInfoListLength();
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        return this.alliance_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        return "NoneAlliancePage";
    }

    /* 获取单元格真正下标
     * @param idx 单元格下标
     */
    private getCellIdx(idx: number){
        //idx = this.getRightCellIndex(idx);
        return idx;
    }
    
    /* 创建单元元素
     * @param idx 单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        let cell = cc.instantiate(this.pfb_alliance_info_bar).getComponent(AllianceInfoBarPfb);
        return cell;
    }
}
