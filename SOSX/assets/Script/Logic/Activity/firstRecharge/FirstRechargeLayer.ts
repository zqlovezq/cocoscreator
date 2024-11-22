import { proto } from "../../../Protocol/client_protocol";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { sendPayStartMsg } from "../../Common/CommonInterface";
import CommonItem from "../../Common/CommonItem";
import { ItemState } from "../../Common/SeasonRankCommonFunc";
import { popRewardLayer_Ex, showItemTips } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FirstRechargeLayer extends PopLayer {
    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;
    @property(cc.Button)
    close_btn: cc.Button = null;
    @property(cc.Button)
    buy_btn: cc.Button = null;
    @property(cc.Node)
    got_btn: cc.Node = null;
    @property(cc.Node)
    rewardLayout: cc.Node = null;
    @property(cc.Sprite)
    chargeHeroIcon: cc.Sprite = null;
    @property(cc.Label)
    priceLabel: cc.Label = null;
    @property(cc.Label)
    rateLabel: cc.Label = null;
    @property(cc.Node)
    desNode: cc.Node = null;

    @property(cc.Toggle)
    toggle_team_1: cc.Toggle = null;
    @property(cc.Toggle)
    toggle_team_2: cc.Toggle = null;
    @property(cc.Toggle)
    toggle_team_3: cc.Toggle = null;
    private curRechargeInfo: tab.FirstRechargeTable = null;
    private gotGiftInfo: proto.IBoughtTimes[] = [];
    private grade: number = 0;
    onLoad() {
        this.close_btn.node.on("click", () => { this.setVisible(false); }, this);
        // 6元 18元 30元礼包
        this.buy_btn.node.on("click", this.buyGift, this);
        Net.listenProtocol(proto.Ptl.BuyFirstRechargeGiftPush, function (buffer, ptl) {
            let msg = proto.Msg_BuyFirstRechargeGiftPush.decode(buffer)
            // console.log("cocos~~~购买首冲礼包数据==", JSON.stringify(msg));
            if (msg) {
                popRewardLayer_Ex(msg.rewards);
                this.setLayerInfo(msg.boughtTimes);

                let _msg = new proto.Msg_GetFirstRechargeGiftReq();
                Net.Send(proto.Ptl.GetFirstRechargeGiftReq, _msg);
            }
        }, this)
    }
    // 手动切换toggle
    resetToggle(index) {
        this.toggle_team_1.isChecked = (0 === index);
        this.toggle_team_2.isChecked = (1 === index);
        this.toggle_team_3.isChecked = (2 === index);
    }
    setLayerInfo(data: proto.IBoughtTimes[]) {
        // console.log("cocos~~~~首冲数据----", JSON.stringify(data));
        this.gotGiftInfo = data;
        let idx = this.getIdx();
        this.showLayer(null, String(idx));
        this.resetToggle(idx);
    }
    getIdx(){
        let giftListInfo = tab.Data.FirstRechargeTable;
        for(let i=0;i<giftListInfo.length;i++){
            let id = giftListInfo[i].GiftID;
            let limit = giftListInfo[i].LimitedTime;
            let hasId = false;
            for(let j=0;j<this.gotGiftInfo.length;j++){
                if(id===this.gotGiftInfo[j].id){
                    hasId = true;
                    if(limit>this.gotGiftInfo[j].times){
                        return i;
                    }
                }
            }
            if(!hasId){
                return i;
            }
        }
        return 2;
    }
    showLayer(event: Event, customEventData: string) {
        // 根据不同的档位显示不同的界面
        // console.log("cocos~~~~~custom----", customEventData);
        let grade = Number(customEventData);
        let state = ItemState.NONE;
        let giftListInfo = tab.Data.FirstRechargeTable;
        // console.log("cocos~~~首冲礼包数据---", giftListInfo);
        let info: tab.FirstRechargeTable = giftListInfo[grade];
        this.curRechargeInfo = info;

        this.chargeHeroIcon.setTexture(info.HeadShow)
        this.priceLabel.string = info.PriceShow;
        this.rateLabel.string = info.RateShow;

        this.buy_btn.node.active = true;
        this.got_btn.active = false;

        for (let i = 0; i < this.gotGiftInfo.length; i++) {
            if (this.curRechargeInfo.GiftID === this.gotGiftInfo[i].id && this.gotGiftInfo[i].times >= this.curRechargeInfo.LimitedTime) {
                state = ItemState.ALREADY_RECEIVE;
                this.buy_btn.node.active = false;
                this.got_btn.active = true;
            }
        }

        for (let i = 0; i < this.desNode.children.length; i++) {
            this.desNode.children[i].active = grade === i;
        }

        if (this.rewardLayout.children.length > 0) {
            for (let i = 0; i < this.rewardLayout.children.length; i++) {
                this.rewardLayout.children[i].active = false;
            }
        }
        for (let i = 0; i < info.RewardTypeSet.length; i++) {
            let type = info.RewardTypeSet[i];
            let id = info.RewardIDSet[i];
            let count = info.RewardNumSet[i];
            let item = null;
            let itemData = null;
            if (this.rewardLayout.children[i]) {
                item = this.rewardLayout.children[i];
                item.active = true;
            } else {
                item = cc.instantiate(this.rewardItem);
                this.rewardLayout.addChild(item);
            }
            if (type === tab.RewardType.RewardType_ItemType) {
                itemData = tab.Data.ItemTableByID.getValue(id);

            } else if (type === tab.RewardType.RewardType_BoxType) {
                itemData = tab.Data.BoxTableByBoxID.getValue(id);
            }
            let commonTs: CommonItem = item.getComponent(CommonItem);
            commonTs.initWithStaticId(id, type, count, state, false);
            let rewardinfo:proto.IRewardSimpleInfo = {};
            rewardinfo.rewardCount = count;
            rewardinfo.rewardId = id;
            rewardinfo.rewardType = type;
            commonTs.setClickCallback(()=>{
                showItemTips(rewardinfo,item);
            })
        }
    }
    private buyGift() {
        for (let i = 0; i < this.gotGiftInfo.length; i++) {
            if (this.curRechargeInfo.GiftID === this.gotGiftInfo[i].id && this.gotGiftInfo[i].times >= this.curRechargeInfo.LimitedTime) {
                console.log("已经买过了")
                return;
            }
        }
        let rechargeID = this.curRechargeInfo.RechargeID;
        sendPayStartMsg(rechargeID);
    }
}
