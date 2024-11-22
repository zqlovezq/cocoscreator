/**
 * 开箱返利选择要的卡牌模块
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { kNegativeOneNumber, kZeroNumber } from "../../Common/CommonInterface";
import MainMessage from "../../Common/MainMessage";
import BattleLayer from "../../Main/BattleLayer";
import { popRewardLayer_Ex, ShowTips } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import UnpackRebateCardGroup from "./UnpackRebateCardGroup";

const {ccclass, property} = cc._decorator;
const kCardGroup = 4;

//自选卡牌宝箱的类型
export enum unpackType{
    Rebate = 0,    //活动自选金卡宝箱
    BoxGoldCard = 1, //自选传说宝箱
}

@ccclass
export default class UnpackRebateSelectCardLayer extends PopLayer {

    @property(cc.Node)
    layout_content: cc.Node = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_confirmCopy: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;
    
    @property(cc.Prefab)
    pfb_card_group: cc.Prefab = null;

    private _select_card_id: number;
    ntype: number = 0;   //

    onLoad () {
        this._select_card_id = kNegativeOneNumber;
        this.btn_confirmCopy.node.active = false
        //监听通知选择卡牌消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUnpackRebateSelectCard, (param: any)=>{
            if(!this.node.active || !this.node.activeInHierarchy){
                return;
            }

            let selectCardID = (param as number);
            this._select_card_id = selectCardID;
        }, this);

        //监听选择卡牌消息
        Net.listenProtocol(proto.Ptl.ReceiveUnpackRebateCardRsp, buffer=>{
            let msg = proto.Msg_ReceiveUnpackRebateCardRsp.decode(buffer);
            cc.log("ReceiveUnpackRebateCardRsp(监听选择卡牌消息) : msg " + JSON.stringify(msg))
            if(msg && proto.Msg_ReceiveUnpackRebateCardRsp.ErrorCode.Succeed === msg.result) {
                popRewardLayer_Ex(msg.Awards, ()=>{
                    this.setVisible(false);
                });
                return;
            }

            if(proto.Msg_ReceiveUnpackRebateCardRsp.ErrorCode.ReceiveCountNotEnough === msg.result){
                ShowTips("OpenBoxCountUsedUp");
                this.hide()
            }
        },this);

        //自选宝箱
        Net.listenProtocol(proto.Ptl.SelectCardBySelfRsp, buffer=>{
            let msg = proto.Msg_SelectCardBySelfRsp.decode(buffer)
            cc.log("SelectCardBySelfRsp(自选宝箱) : msg " + JSON.stringify(msg))
            if(msg){
                if(msg.result == proto.Msg_SelectCardBySelfRsp.ErrorCode.Succeed) {
                    //MainMessage.Instance.PushSelectCardBySelfTimeLeft = msg.leftTimes
                    popRewardLayer_Ex(msg.Awards, ()=>{
                        if(msg.leftTimes <= 0){
                            this.setVisible(false)
                        } else {
                            BattleLayer.checkPushSelectCardBySelf()
                        }

                    })
                    return
                }

                if(msg.result == proto.Msg_SelectCardBySelfRsp.ErrorCode.Error){
                    ShowTips("OpenBoxCountUsedUp")
                }
            }
        },this)

        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_confirm.node.on("click", this.requestSelectCardInfo, this);
    }

    start () {

    }


    public initData(cardList: number[], ntype:unpackType = unpackType.Rebate){
        this.ntype = ntype
        this.btn_cancel.node.active = this.ntype == unpackType.Rebate
        this.btn_confirm.node.active = this.ntype == unpackType.Rebate
        this.btn_confirmCopy.node.active = this.ntype == unpackType.BoxGoldCard
        
        let tempCardIDArr = [];
        let idx = kZeroNumber;
        for(let data of cardList){
            tempCardIDArr.push(data);
            if(kCardGroup == tempCardIDArr.length){
                this.loadCardData(tempCardIDArr, idx);
                tempCardIDArr = [];
                idx++;
            }
        }
        //检测剩余部分
        tempCardIDArr.length > kZeroNumber && this.loadCardData(tempCardIDArr, idx);
    }

    /* 加载卡牌数据*/
    private loadCardData(cardIDArr: number[], index:number){
        if(cardIDArr.length > kZeroNumber){
            let cardGroup = this.layout_content.children[index]
            if(!cardGroup){
                cardGroup = cc.instantiate(this.pfb_card_group)
                this.layout_content.addChild(cardGroup);
            }
            if(cardGroup){
                cardGroup.getComponent(UnpackRebateCardGroup).initData(cardIDArr, false, this.ntype);
            }
        }
    }

    /* 请求所选择的卡牌 */
    private requestSelectCardInfo(){
        if(this._select_card_id == kNegativeOneNumber){
            ShowTips("UnSelectCard");
            return;
        }

        if(this.ntype == unpackType.Rebate){
            let param = new proto.Msg_ReceiveUnpackRebateCardReq();
            param.selectCardID = this._select_card_id;
            Net.Send(proto.Ptl.ReceiveUnpackRebateCardReq, param);
        } else if(this.ntype  == unpackType.BoxGoldCard) {
            let param = new proto.Msg_SelectCardBySelfReq;
            param.cardStaticId = this._select_card_id
            Net.Send(proto.Ptl.SelectCardBySelfReq, param)
        }
    }
}
