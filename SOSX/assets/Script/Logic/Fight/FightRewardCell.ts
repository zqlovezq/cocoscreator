
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import boxtips from "../Common/boxtips";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FightRewardCell extends cc.Component {
    
    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null

    @property(cc.Node)
    itemTipsNode: cc.Node = null

    @property(cc.Node)
    background: cc.Node = null

    @property(cc.Label)
    tips: cc.Label = null

    item: proto.IRewardSimpleInfo;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this)
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_FightRewardCellHideTips, (param)=>{
            this.itemTipsNode.active = false
        }, this);
    }

    onTouchBegan(event){
        if(!this.item){
            return;
        }

        switch (this.item.rewardType) {
            case tab.RewardType.RewardType_ItemType :
                let cfg = tab.Data.ItemTableByID.getValue(this.item.rewardId)
                if(cfg){
                    this.tips.string = cfg.Desc
                    this.itemTipsNode.active = true
                    this.background.setContentSize(this.tips.node.getContentSize())                    
                }
                break;
            case tab.RewardType.RewardType_BoxGroupType :
                boxtips.showTips(this.item.rewardId, this.node)
                break;
            case tab.RewardType.RewardType_BoxType :
                boxtips.showTips(null, this.node, this.item.rewardId)                
                break;
            default:  //积分
                break;
        }
    }

    setTxt(str:string){
        let n = Number(str)
        this.label.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${str}`;//str
        this.label.node.active = n > 1   
    }

    setIcon(str:string){
        this.icon.setTexture(str)
    }

    setItemInfo(data: proto.IRewardSimpleInfo) {
        this.item = data
    }

    start () {}

}
