/**
 *  基金
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { sendPayStartMsg } from "../../Common/CommonInterface";
import InfiniteCell from "../../InfiniteList/InfiniteCell";
import InfiniteList from "../../InfiniteList/InfiniteList";
import { popRewardLayer_Ex, popRewardLayer_Vec_Recycle } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import ActivityController from "./ActivityController";
import GrowFundCell from "./GrowFundCell";

//export const GrowFundRechargeID = 4001

const {ccclass, property} = cc._decorator;

@ccclass
export default class GrowFund extends PopLayer {

    @property(cc.Sprite)
    aleadylock:cc.Sprite = null /* "已解锁" 图片 */

    @property(cc.Sprite)
    lock:cc.Sprite = null /* 进阶旁边得锁图片 */

    @property(cc.Label)
    historyMaxScore: cc.Label = null; /* 历史最高 */

    @property(cc.Label)
    price: cc.Label = null;

    @property(cc.Node)
    buyBtn:cc.Node = null

    @property(InfiniteList)
    list:InfiniteList = null

    @property(cc.Prefab)
    m_cell_prefab:cc.Prefab = null

    @property(cc.Button)
    btn_close: cc.Button = null;

    m_cell_height: number = 0;
    data         : proto.IGFCell[] = []
    ActivityID   : number = 0

    /*  */
    buyClick(){
        let RechargeID = tab.Data.GetKeyValue_ConfigTable().LimitActivityGrowFundRechargeID
        //.getValue(tab.RechargeGoodsType.RechargeGoodsType_GrowFund) //tab.RechargeGoodsType.RechargeGoodsType_GrowFund
        cc.log("RechargeID: " + RechargeID)
        sendPayStartMsg(RechargeID)
    }

    /*  */
    onLoad () {
        this.btn_close.node.on("click", this.onClickClose, this);
        this.aleadylock.node.active = false

        this.list.Init({
            getCellNumber: this.GetCellNumber.bind(this),
            getCellSize: this.GetCellSize.bind(this),
            getCellIdentifer: this.GetCellIdentifer.bind(this),
            getCellView: this.GetCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });

        Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_GrowFundGetAwardRsp, (param)=>{
            let msg = param as proto.Msg_GrowFundGetAwardRsp
            
            popRewardLayer_Vec_Recycle(msg.Awards)  
            this.refreshView()  
        }, this)

        Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_ActivityRechargeRsp, (param)=>{
            this.refreshView()
        }, this)  

        // Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_CloseLayer, (param)=>{
        //     this.hide();
        // }, this)
        this.list.node.on("scrolling", this.onScrollMove, this);
        this.list.node.on("scroll-ended", this.onScrollEnd, this);
        this.list.node.on("scroll-began", this.onScrollStart, this);
    }
    public onScrollMove() {
       
    }

    private onScrollStart() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }

    private onScrollEnd() {
        
    }

    /* PopLayer 的虚函数 */
    hideNotifyLocalMsg(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }

    private onClickClose() {
        this.setVisible(false);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }

    start () {
        this.ActivityID = tab.LimitActivityID.LimitActivityID_GrowFund;
        this.refreshView()
    }

    refreshView() {
        let actinfo = ActivityController.getInstance().getActivityData()
        let historys:number = 0
        if(actinfo){
            let grow = actinfo.get(this.ActivityID)
            if(grow){
                this.aleadylock.node.active = grow.GrowFund.UnlockFund
                this.buyBtn.active = !(grow.GrowFund.UnlockFund)
                this.lock.node.active = this.buyBtn.active
                this.data = grow.GrowFund.Cell
                historys = grow.GrowFund.HistoryRankScore
                this.historyMaxScore.string = grow.GrowFund.HistoryRankScore.toString()
                this.price.string = "￥" + tab.Data.GetKeyValue_ConfigTable().LimitActivityGrowFundPrice.toString()  
            }
        }
  
        if(this.data.length > 0){
            this.data.sort((a,b)=>{
                return a.ID - b.ID
            })

            this.data.sort((a,b)=>{
                let l = (a.GetAwardType == 0 || a.GetAwardType == 1) ? 1 : 2
                let r = (b.GetAwardType == 0 || b.GetAwardType == 1) ? 1 : 2
                return l - r
            })

            this.list.Reload()

            let index:number = 0
            for(let i=0; i<this.data.length; i++){
                if(this.data[i].GetAwardType == proto.GFCellAwardState.NotGet){
                    let cfg = tab.Data.LimitActivityGrowFundTableByID.getValue(this.data[i].ID)
                    if(cfg && cfg.NeedRankScore <= historys){
                        index = i
                        break
                    }
                }
            }

            if(index > 0){
                this.list.ScrollToCell(index)
            } else {
                this.list.scrollToTop()
            }
        }
    }

    GetCellNumber(): number{
        return this.data.length;
    }

    GetCellSize(idx: number): number{
        if (this.m_cell_height == 0){
            this.m_cell_height = cc.instantiate(this.m_cell_prefab).height;
        }
        return this.m_cell_height;
    }

    GetCellIdentifer(idx: number): string{
        return "GrowCell"
    }

    GetCellView(idx: number): InfiniteCell{
        return cc.instantiate(this.m_cell_prefab).getComponent(GrowFundCell);
    }

    GetCellData(idx: number){
        if (idx < this.data.length){
            return this.data[idx];
        }
        return null;
    }

}
