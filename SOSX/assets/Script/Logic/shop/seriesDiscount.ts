import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkFunctionIsOpen, sendPayStartMsg } from "../Common/CommonInterface";
import { popRewardLayer_Ex, setGray } from "../Utils/GameUtils";
import SeriesDiscountItem from "./seriesDiscountItem";

const { ccclass, property } = cc._decorator;
function ButtonLock(lockTime: number = 0.1, callBackFun?: Function): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let oldFun: Function = descriptor.value;
        let isLock: boolean = false;
        descriptor.value = function (...args: any[]) {
            if (isLock) {
                callBackFun?.()
                return
            }
            isLock = true;

            setTimeout(() => {
                isLock = false
            }, lockTime * 1000);
            oldFun.apply(this, args);
        }
        return descriptor
    }
}
@ccclass
export default class SeriesDiscount extends cc.Component {
    @property(cc.Node)
    content: cc.Node = null
    @property(cc.Prefab)
    item: cc.Prefab = null;
    private layer: cc.Node = null;
    private maxLen: number = 0;
    private giftListInfo: tab.ContinuousGiftTable[] = [];
    private curIndex: number = 0;
    private giftId: number = 0;
    public onLoad(): void {
        // 发送服务器信息获取数据
        let isOpen = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_ContinuousGift)
        this.node.active = isOpen;
        if (isOpen) {
            let param = new proto.Msg_GetContinuousGiftReq()
            Net.Send(proto.Ptl.GetContinuousGiftReq, param)
        }
        Net.listenProtocol(proto.Ptl.GetContinuousGiftRsp, function (buffer, ptl) {
            let msg = proto.Msg_GetContinuousGiftRsp.decode(buffer)
            if (msg && msg.result === proto.CommonErrorCode.Succeed) {
                console.log("cocos~~~连续礼包数据==", JSON.stringify(msg));
                this.giftId = msg.boughtId;
                this.node.active = this.giftId<=4
                this.setLayer();
            }
        }, this)
        Net.listenProtocol(proto.Ptl.BuyContinuousGiftRsp, function (buffer, ptl) {
            let msg = proto.Msg_BuyContinuousGiftRsp.decode(buffer)
            if (msg && msg.result === proto.CommonErrorCode.Succeed) {
                popRewardLayer_Ex(msg.rewards);
                this.giftId = msg.boughtId;
                console.log("cocos~~~购买连续礼包数据==", JSON.stringify(msg));
                this.setLayer();
            }
        }, this)
    }
    private setLayer() {
        this.giftListInfo = tab.Data.ContinuousGiftTable;
        this.maxLen = this.giftListInfo.length;
        this.curIndex = this.giftId > this.maxLen - 1 ? this.maxLen - 1 : this.giftId;

        if (this.giftId > this.maxLen - 1) {
            this.node.active = false;
            return;
        }
        if (this.content.children.length === 0) {
            let _item = cc.instantiate(this.item);
            this.content.addChild(_item);
            this.layer = _item;
        } else {
            this.layer = this.content.children[0];
        }
        // 显示的giftId信息
        this.layer.getComponent(SeriesDiscountItem).setData(this.giftId, this.giftId);
        this.registerEvent();
        this.createDots();
    }
    private createDots() {
        let dot = this.layer.getChildByName("dot");
        let dotLayout = this.layer.getChildByName("dotLayout");
        if (dotLayout.children.length === 0) {
            for (let i = 0; i < this.maxLen; i++) {
                let _dot = cc.instantiate(dot);
                _dot.active = true;
                dotLayout.addChild(_dot);
            }
        }
        this.showDot();
    }
    private showDot() {
        let dotLayout = this.layer.getChildByName("dotLayout");
        for (let i = 0; i < dotLayout.children.length; i++) {
            let dot = dotLayout.children[i];
            let select = dot.getChildByName("select");
            select.active = i === this.curIndex;
        }
    }
    // 切到下一页
    @ButtonLock(1, () => { console.log("点击次数过快") })
    private changeNext() {
        this.curIndex++;
        this.layer.getComponent(SeriesDiscountItem).setData(this.giftId, this.curIndex);
        this.showDot();
    }
    // 显示上一页
    @ButtonLock(1, () => { console.log("点击次数过快") })
    private changeLast() {
        this.curIndex--;
        this.layer.getComponent(SeriesDiscountItem).setData(this.giftId, this.curIndex);
        this.showDot();
    }
    // 购买礼包
    private buyGift() {
        if (this.curIndex !== this.giftId) {
            return;
        }
        if (this.giftId > this.maxLen - 1) {
            return
        } else if (this.giftId === this.maxLen - 1) {
            let param = new proto.Msg_BuyContinuousGiftReq()
            Net.Send(proto.Ptl.BuyContinuousGiftReq, param)
        } else {
            let info = this.giftListInfo[this.giftId];
            let rechargeID = info.RechargeID;
            sendPayStartMsg(rechargeID);
        }
    }
    // 注册点击事件
    private registerEvent() {
        let left = this.layer.getChildByName("leftArrow").getComponent(cc.Button);
        let right = this.layer.getChildByName("rightArrow").getComponent(cc.Button);
        let buyBtn = this.layer.getChildByName("buyBtn").getComponent(cc.Button);
        left.node.on("click", this.changeLast, this);
        right.node.on("click", this.changeNext, this);
        buyBtn.node.on("click", this.buyGift, this);
    }
}
