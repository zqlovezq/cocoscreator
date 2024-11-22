/**
 * 开箱返利活动界面
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { isValidObj, kZeroNumber, ShopItemType } from "../../Common/CommonInterface";
import { showPopLayerV2, ShowTips } from "../../Utils/GameUtils";
import ActivityController from "../Activity/ActivityController";
import UnpackRebateCardTipLayer from "./UnpackRebateCardTipLayer";
import UnpackRebateSelectCardLayer from "./UnpackRebateSelectCardLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UnpackRebateActivityLayer extends cc.Component {

    @property(cc.Node)
    node_box_spine: cc.Node = null;
    
    @property(cc.Node)
    node_bg: cc.Node = null;

    @property(cc.Label)
    lbl_unpack_count: cc.Label = null;

    @property(cc.Node)
    node_can_receive_ani: cc.Node = null;
    
    @property(cc.Button)
    btn_jump_shop: cc.Button = null;

    @property(cc.Button)
    btn_tip: cc.Button = null;

    private _unpack_count: number;
    private _select_card_list: number[] = [];
    private _activity_id: number;
    private _boxSpineName: string;

    onLoad () {
        this._activity_id = tab.LimitActivityID.LimitActivityID_UnpackRebate;
        this.node_can_receive_ani.active = false;
        this.btn_jump_shop.node.on("click", this.onClickJumpShop, this);
        this.btn_tip.node.on("click", this.onClickTips, this);

        //监听选择卡牌消息
        Net.listenProtocol(proto.Ptl.ReceiveUnpackRebateCardRsp, buffer=>{
            let msg = proto.Msg_ReceiveUnpackRebateCardRsp.decode(buffer);
            cc.log("ReceiveUnpackRebateCardRsp(监听选择卡牌消息) : msg " + JSON.stringify(msg))
            if(msg && proto.Msg_ReceiveUnpackRebateCardRsp.ErrorCode.Succeed === msg.result) {
               this._unpack_count--;
               ActivityController.getInstance().changeUnpackRebateData(this._unpack_count);
               ActivityController.getInstance().refreshActivityReddotByID(tab.LimitActivityID.LimitActivityID_UnpackRebate);
               this.refreshPage();
               this.checkReceiveFlagVisible();
               Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_RefreshReddotVisible, tab.LimitActivityID.LimitActivityID_UnpackRebate); 
                return;
            }

        },this);
    }

    start () {
        let activityInfo = ActivityController.getInstance().getActivityDataByID(this._activity_id);
        if(isValidObj(activityInfo)){
            this._unpack_count     = activityInfo.unpackRebateInfo.unpackRebateCount;
            this._select_card_list = activityInfo.unpackRebateInfo.goldCardIDList;
        }

        this._boxSpineName = tab.Data.GetKeyValue_ConfigTable().UnpackRebateBoxSpineName;
        this.refreshPage();
        this.loadBoxSpine();
    }

    onDestroy(){
        this._select_card_list = [];
    }

    private refreshPage(){
        this.lbl_unpack_count.string     = `${this._unpack_count}`;
    }

    /* 加载宝箱动画 */
    private loadBoxSpine(){
        let spine: sp.Skeleton = this.node_box_spine.getComponent(sp.Skeleton);
        if(spine){
            spine.setAnimation(kZeroNumber, this._boxSpineName, false);
            this.scheduleOnce(()=>{
                this.checkReceiveFlagVisible();
            }, 0.3);
        }
    }

    /* 检测可领取标志的可见性*/
    private checkReceiveFlagVisible(){
        this.node_can_receive_ani.active = this._unpack_count > kZeroNumber;
    }

    public onClickOpenSelectPage(){
        if(this._unpack_count <= kZeroNumber){
            ShowTips("NonOpenCondition");
            return;
        }

        let self = this;
        showPopLayerV2("prefab/UnpackRebateSelectCardLayer", UnpackRebateSelectCardLayer, false).then(layer=>{
            layer.initData(self._select_card_list);
        });
    }

    private onClickJumpShop(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_CloseLayer);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, {shopItem: ShopItemType.ShopItemType_PullCard, bPlayEffect: false});
    }

    private onClickTips(){
        let self = this;
        showPopLayerV2("prefab/UnpackRebateCardTipLayer", UnpackRebateCardTipLayer, false).then(tips=>{
            tips.initData(self._select_card_list);
        });
    }
}
