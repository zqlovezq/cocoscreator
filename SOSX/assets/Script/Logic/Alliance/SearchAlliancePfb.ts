/*
 * @Descripttion: 搜索联盟预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { ShowTips } from "../Utils/GameUtils";
import { checkStringIsValid, sortAlliance } from "./AllianceCommonInterface";
import AllianceDataCacheManager from "./AllianceDataCacheManager";
import AllianceInfoBarPfb from "./AllianceInfoBarPfb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SearchAlliancePfb extends cc.Component {

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.EditBox)
    edit_alliance_name: cc.EditBox = null;

    @property(cc.Button)
    btn_search: cc.Button = null;

    @property(cc.Button)
    btn_clear: cc.Button = null;

    @property(cc.Node)
    list_view: cc.Node = null;

    @property(cc.Prefab)
    pfb_alliance_info_bar: cc.Prefab = null;

    @property({ displayName: "联盟条的高度" })
    alliance_bar_height: number = kZeroNumber;
    
    private alliance_list_view: InfiniteList = null;
    private _bConstructor: boolean           = false;

    onLoad () {
        this.btn_clear.node.active = false;
        this.btn_search.node.on("click", this.onClickSearch,      this);
        this.btn_clear.node.on("click", this.onClickClearEditBox, this);

        this.alliance_list_view = this.list_view.getComponent(InfiniteList);
        //初始化scrollView接口
        this.alliance_list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellIdx.bind(this),
        });
        
        //监听搜索联盟协议
        Net.listenProtocol(proto.Ptl.SearchAllianceRsp, (buffer, ptl)=>{
            if(!this.node.active){
                return;
            }
            
            let msg = proto.Msg_SearchAllianceRsp.decode(buffer);
            cc.log("SearchAllianceRsp(监听搜索联盟协议) : msg " + JSON.stringify(msg))
            
            if(msg){
                this.refreshAllianceList(msg.allianceInfo);
            }
            this.btn_clear.node.active = true;
        }, this);
    }

    public initData(){
        this._bConstructor = true;
    }

    /* 销毁页面数据
     */
    public destroyPageData(){
        if(!this._bConstructor){return;}
    
        AllianceDataCacheManager.getInstance().destroyAllianceInfoList();
        this.edit_alliance_name.string = kNoneString;
        this.btn_clear.node.active     = false;
        this._bConstructor             = false;
        this.alliance_list_view.Reload(true, true);
    }

    /* 刷新推荐联盟列表
     */
    private refreshAllianceList(allianceList: proto.IAllianceSimpleInfo[]){
        AllianceDataCacheManager.getInstance().setAllianceInfoList(allianceList);
        this.alliance_list_view.Reload(true);
    }

    private onClickSearch(){
        if(!checkStringIsValid(this.edit_alliance_name.string)){
            ShowTips("StringIsEmpty");
            return;
        }

        let msg     = new proto.Msg_SearchAllianceReq();
        msg.content = this.edit_alliance_name.string;
        Net.Send(proto.Ptl.SearchAllianceReq, msg);
    }

    private onClickClearEditBox(){
        this.edit_alliance_name.string = kNoneString;
        this.btn_clear.node.active     = false;
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
        return "SearchAlliancePfb";
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
