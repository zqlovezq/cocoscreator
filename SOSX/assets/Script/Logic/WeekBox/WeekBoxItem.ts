import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { showItemTips } from "../Utils/GameUtils";

const { ccclass, property } = cc._decorator;
@ccclass
export default class WeekBoxItem extends cc.Component {
    @property(cc.Sprite)
    bgSpr: cc.Sprite = null;
    @property(cc.Sprite)
    boxIcon: cc.Sprite = null;
    @property(cc.Label)
    boxLbl: cc.Label = null;
    @property(cc.Node)
    selectNode: cc.Node = null;
    @property(cc.Node)
    getNode: cc.Node = null;
    @property(cc.Node)
    gotNode: cc.Node = null;
    private idx: number = -1;
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.boxIconClick, this);
    }
    public setItem(index: number) {
        this.idx = index;
        let Reward = tab.Data.AdSevenDayTable[index - 1];
        let itemData: tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(Reward.RewardID);
        this.boxIcon.setTexture(itemData.ItemIcon)

        // this.boxLbl.string = itemData.BoxName;
        this.boxLbl.string = cc.js.formatStr("第%s天",index)
        if (index == tab.Data.AdSevenDayTable.length){
            this.bgSpr.setTexture("Chess/UI/WeekBox/Ad_rewardBgS")
        }
    }
    private boxIconClick() {
        if (this.idx < 0) {
            return;
        }
        let cfg = tab.Data.AdSevenDayTableByID.getValue(this.idx);
        let reward: proto.IRewardSimpleInfo = {};
        reward.rewardCount = cfg.RewardCount;
        reward.rewardType = cfg.RewardType;
        reward.rewardId = cfg.RewardID
        showItemTips(reward, this.node, true);
    }
    public setItemState(state: number, select: boolean) {
        // 当前的item有四个状态 NONE选择状态 可领取状态 已领取状态
        this.selectNode.active = select;
        this.getNode.active = false;
        this.gotNode.active = false;
        switch (state) {
            case 0:
                break;
            case 1:
                // this.selectNode.active = true;
                break;
            case 2:
                // this.selectNode.active = true;
                this.getNode.active = true;
                //如果当前宝箱是可领取状态的情况下
                this.node.targetOff(cc.Node.EventType.TOUCH_START);
                this.node.on(cc.Node.EventType.TOUCH_START, this.getBoxIconClick, this);
                break;
            case 3:
                this.node.targetOff(cc.Node.EventType.TOUCH_START);
                this.gotNode.active = true;
                break;
            default:
                break;
        }
    }
    private getBoxIconClick() {
        console.log("领取宝箱");
        let msg = new proto.Msg_WeeklyAdBoxGetAwardReq();
        msg.DayIndex = this.idx - 1;
        Net.Send(proto.Ptl.WeeklyAdBoxGetAwardReq, msg);
    }
}
