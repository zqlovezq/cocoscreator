/*
 * @Descripttion: 推荐阵容界面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import { IMessageResult } from "../Common/ReddotManager";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { ShowTips } from "../Utils/GameUtils";
import RecommendDeckInfoPfb from "./RecommendDeckInfoPfb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RecommendDeckLayer extends cc.Component {

    @property(cc.Node)
    list_view: cc.Node = null;

    @property(cc.Prefab)
    pfb_recommend_info_bar: cc.Prefab = null;

    @property({ displayName: "信息条的高度" })
    recommend_bar_height: number = kZeroNumber;
    
    private recommend_list_view: InfiniteList = null;
    private _bConstructor: boolean            = false;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, true)
        
        this.initTableView();

        //监听复制卡组消息
        /*
        Net.listenProtocol(proto.Ptl.CopyDeckRsp, function (buffer, ptl){
           let msg = proto.Msg_CopyDeckRsp.decode(buffer);
           if (msg){
              ShowTips("CopyTeamSuccess");
           }
        }, this);
        */

        //监听新卡牌
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshRecommendLayer, (param: any)=>{
            this.recommend_list_view.Refresh();
        }, this);
    }

    start () {}

    public destroyPage(){
        if(!this._bConstructor){return;}
        
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        this._bConstructor = false;
        this.recommend_list_view.Reload(true, true);
    }

    public initData(){
        this._bConstructor = true;
        this.recommend_list_view.Reload(true);
        this.scheduleOnce(()=>{this.recommend_list_view.scrollToTop(0.2)}, 0.3);
    }

    private initTableView(){
        this.recommend_list_view = this.list_view.getComponent(InfiniteList);
        //初始化scrollView接口
        this.recommend_list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellIdx.bind(this),
        });
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
        return tab.Data.RecommendDeckTable.length;
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        let tabData: tab.RecommendDeckTable = tab.Data.RecommendDeckTableByID.getValue(idx+kOneNumber);
        return tabData.LordID===1?612:196;
        return this.recommend_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        return "recommendCell";
    }

    /* 获取单元格真正下标
     * @param idx 单元格下标
     */
    private getCellIdx(idx: number){
        //idx = this.getRightCellIndex(idx);
        return idx + kOneNumber;
    }
    
    /* 创建单元元素
     * @param idx 单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        let cell = cc.instantiate(this.pfb_recommend_info_bar).getComponent(RecommendDeckInfoPfb);
        return cell;
    }

    /* 创建单元元素
     */
    private onTouchStart(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
    }
}
