/**
 * 
 */


import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import DrawBox from "../Activity/Draw/DrawBox";
import { isValidObj, sendPayStartMsg } from "../Common/CommonInterface";
import RewardPfb from "../Common/RewardPfb";
import Role from "../Common/Role";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import SeasonFunc from "../Season/SeasonFunc";
import { popRewardLayer_Ex, ShowTips, setGray, setTimeTXT } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import PassportFunc from "./PassportFunc";

const { ccclass, property } = cc._decorator;
@ccclass
export default class PassportBuy extends PopLayer {

    @property(cc.Label)
    endTime_txt: cc.Label = null

    @property(cc.Button)
    private close_btn: cc.Button = null;

    @property(cc.Prefab)
    reward_prefab: cc.Prefab = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Label)
    lbl_price: cc.Label = null;
    

    onLoad(): void {
        this.close_btn.node.on("click", () => { this.setVisible(); }, this);
        /* 购买恶魔通行证 */
        Net.listenProtocol(proto.Ptl.BuyDemonPassRsp, function (buffer, ptl){
            let msg = proto.Msg_BuyDemonPassRsp.decode(buffer)
            cc.log("BuyDemonPassRsp (购买恶魔通行证) : msg " + JSON.stringify(msg));
            if (msg != null){
                this.hide()
            }
        }, this)

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewSeasonJustBeginning, (param) => {
            //切换进入新赛季
            this.hide()
        }, this);

        this.unschedule(this.seasonTimeCountDown)
        this.schedule(this.seasonTimeCountDown, 1)
        this.seasonTimeCountDown()
    }
     /*  */
     seasonTimeCountDown() {
        if (!Role.Instance.isSeason() || (Role.Instance.isSeason() && SeasonFunc.getSurplusTime() < -1)) {
            this.endTime_txt.string = "赛季已结束"
            this.unschedule(this.seasonTimeCountDown)
            return
        }
        setTimeTXT(this.endTime_txt, SeasonFunc.getSurplusTime())
    }
    start() {
    }
    setVisible() {
        this.node.removeFromParent();
        this.node.destroy();
    }
    onDestroy() {

    }

    /* 设置价格 */
    private setPrice(){
        let tabData = tab.Data.RechargeTableByID.getValue(tab.Data.GetKeyValue_ConfigTable().BossBoxRechargeId);
        if(isValidObj(tabData)){
            this.lbl_price.string = `${tabData.Price}`;
        }
    }

    /* 能点进来必然可以选择 */
    public initData() {
        this.setPrice()
        let list = PassportFunc.getUnlockAllReward()

        for (let index = 0; index < list.length; index++) {
            let cell = cc.instantiate(this.reward_prefab);
            this.content.addChild(cell);
            let sp: SimpleItem = cell.getComponent(SimpleItem);
            sp.setView(list[index])
            sp.setNameVisible(false)
        }
    }

    onClickBuy(){
        let RechargeID = tab.Data.GetKeyValue_ConfigTable().BossBoxRechargeId
        cc.log("RechargeID: " + RechargeID)
        sendPayStartMsg(RechargeID)
    }

}
