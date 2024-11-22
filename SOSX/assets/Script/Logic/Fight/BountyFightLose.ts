import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const { ccclass, property } = cc._decorator;
const Level = ["一","二","三","四","五","六","七","八"];
@ccclass
export default class BountyFightLose extends PopLayer {

    @property(cc.Button)
    btn_confirm: cc.Button = null;
    @property(cc.Node)
    revert_node: cc.Node = null;

    @property(cc.Button)
    btn_watch_ad: cc.Button = null;

    @property(cc.Label)
    lbl_watch_ad: cc.Label = null;
    @property(cc.Layout)
    rewardLayout: cc.Layout = null;

    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;
    @property(cc.Label)
    rank_level:cc.Label = null;
    private msg_data: proto.Msg_BountyRewardPush;
    private confirmCallback: Function;
    private rewardDiamondLabel:cc.Label = null;
    onLoad() {
        this.btn_confirm.node.on("click", this.onClickConfirm, this);
        Net.listenProtocol(proto.Ptl.RetrieveBountyRewardRsp, function (buffer, ptl) {
            let msg = proto.Msg_RetrieveBountyRewardRsp.decode(buffer);
            if(msg.result===proto.CommonErrorCode.Succeed){
                // popRewardLayer_Ex(msg.rewards,this.confirmCallback);
                console.log("cocos---找回获取奖励信息",JSON.stringify(msg.rewards))
                for(let i=0;i<msg.rewards.length;i++){
                    // 表示钻石
                    let reward = msg.rewards[i];
                    if(reward.rewardId===2){
                        console.log("cocos---增加的钻石数量=",reward.rewardCount);
                        // 增加长钻石动画
                        this.schedule(this.updateLabel,0.05,reward.rewardCount-1);
                        // 刷新一下次数
                        this.lbl_watch_ad.string =(this.msg_data.remainRetrieveTimes-1) +"/"+tab.Data.GetKeyValue_ConfigTable().BountyGameRecoverCount
                    }
                }
            }
        }, this);
    }

    onClickConfirm() {
        this.unschedule(this.updateLabel);
        this.setVisible(false);
        if (this.confirmCallback) {
            this.confirmCallback(false);
        }
    }

    public async setFightEndData(data: proto.Msg_BountyRewardPush, callback: Function) {
        this.msg_data = data;
        this.confirmCallback = callback;
        this.rank_level.string = Level[this.msg_data.rank-1];
        this.initData();
    }

    private initData() {
        Role.Instance.FightType = this.msg_data.fightType;
        Role.Instance.AddCup = this.msg_data.changeCup;
        Role.Instance.RoleCup = this.msg_data.roleCup;
        this.lbl_watch_ad.string =this.msg_data.remainRetrieveTimes +"/"+tab.Data.GetKeyValue_ConfigTable().BountyGameRecoverCount


        this.rewardLayout.node.removeAllChildren()
        if(this.msg_data.rewards){
            for (let reward of this.msg_data.rewards) {
                this.setReward(reward);
            }
        }
    }
    private setReward(data: proto.IRewardSimpleInfo) {
        let simpleitem: SimpleItem = cc.instantiate(this.rewardItem).getComponent(SimpleItem)
        if (simpleitem) {
            this.rewardLayout.node.addChild(simpleitem.node);
            simpleitem.setView(data)
            simpleitem.setNameVisible(false)
            let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(data.rewardId);

            if (tab.Data.CardTableByID.getValue(data.rewardId)) {
                simpleitem.setNewFlagVisible(cardInfo == undefined || cardInfo.count <= 0)
            }
            if(data.rewardId===2){
                this.rewardDiamondLabel = simpleitem.ItemsCn;
            }
        }
    }
    private updateLabel(){
        if(this.rewardDiamondLabel){
            this.rewardDiamondLabel.string = "x"+(Number(this.rewardDiamondLabel.string.replace("x",""))+1);
        }
    }
    /* 发送恢复积分消息 */
    private findDiamond() {
        console.log("点击找回钻石")
        if(this.msg_data.remainRetrieveTimes===0){
            ShowTips("LeftTimesNotEnough");
            return;
        }
        let param = new proto.Msg_RetrieveBountyRewardReq();
        param.retrieve = true;
        Net.Send(proto.Ptl.RetrieveBountyRewardReq, param);
    }
}
