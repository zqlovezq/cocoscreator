/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getServerUtcTime, setTimeTXT, showPopLayer, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { isValidObj, sendPayStartMsg} from "./CommonInterface";
import EvilBuyConfirmPop from "./EvilBuyConfirmPop";
import Role from "./Role";

const {ccclass, property} = cc._decorator;

const EvilRechargeID = 3001;
const FirstEvilRechargeID = 3002;

@ccclass
export default class EvilPass extends PopLayer{

    @property(cc.Label)
    seasontimeleft: cc.Label = null;

    seasoncfgEndTime: number;

    @property(cc.Label)
    lbl_rmb: cc.Label = null;

    @property(cc.Node)
    firstBuyNode: cc.Node = null;

    @property(cc.Label)
    firstBuyPrice:cc.Label = null

    @property(cc.Node)
    firstBuyTips: cc.Node = null;

    //@property({displayName: "该商品充值档位ID"})
    //recharge_id: number = kZeroNumber;

    onLoad () {
        /* 购买恶魔通行证 */
        Net.listenProtocol(proto.Ptl.BuyDemonPassRsp, function (buffer, ptl){
            let msg = proto.Msg_BuyDemonPassRsp.decode(buffer)
            cc.log("BuyDemonPassRsp (购买恶魔通行证) : msg " + JSON.stringify(msg));
            if (msg != null){
                this.hide()
            }
        }, this)
    }

    buyEvilPass(){
        let rechargeId = Role.Instance.IsFirstPayEvilPss == false ? FirstEvilRechargeID : EvilRechargeID
        sendPayStartMsg(rechargeId);
        /*showPopLayerV2("prefab/EvilBuyConfirmPop", EvilBuyConfirmPop).then(layer=>{
            layer.initData(EvilRechargeID);
        });*/
    }

    onHelp(){
        showPopLayer("prefab/EvilPassHelp")
    }

    start () {
        let seasoncfg:tab.RankFightTable = tab.Data.RankFightTableById.getValue(Role.Instance.seasonID)
        if(seasoncfg){
            let seasonleft = seasoncfg.EndTime - getServerUtcTime()
            if(seasonleft > 0 ){
                this.seasoncfgEndTime = seasoncfg.EndTime
                setTimeTXT(this.seasontimeleft, seasonleft)
                this.unschedule(this.seasonTimeCountDown)
                this.schedule(this.seasonTimeCountDown, 1)
            }
        }

        this.setRMB();
    }

    seasonTimeCountDown(dt){
        let lefttime:number = this.seasoncfgEndTime - getServerUtcTime()
        if(lefttime <= -1){
            this.unschedule(this.seasonTimeCountDown)
            return
        }

        lefttime = lefttime < 0 ? 0 :lefttime
        setTimeTXT(this.seasontimeleft, lefttime)
    }

    /* 设置RMB价格
     */
    private setRMB(){
        this.firstBuyNode.active = Role.Instance.IsFirstPayEvilPss === false
        this.firstBuyTips.active = this.firstBuyNode.active

        if(Role.Instance.IsFirstPayEvilPss==false) { ///首次购买
            let tabData = tab.Data.RechargeTableByID.getValue(FirstEvilRechargeID);
            if(isValidObj(tabData)){
                this.lbl_rmb.string = `${tabData.Price}`;
                this.firstBuyPrice.string = tabData.RechargeOriPrice.toString()
            }
        } else {
            let tabData = tab.Data.RechargeTableByID.getValue(EvilRechargeID);
            if(isValidObj(tabData)){
                this.lbl_rmb.string = `${tabData.Price}`;
            }
        }


    }
}
