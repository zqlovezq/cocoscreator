/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { EXTRA_MSG, Net } from "../../Protocol/Net";
import { Enum } from "../../Protocol/protobufjs";
import { tab } from "../../Table/table_gen";
import BlackTips from "../Common/BlackTips";
import Role from "../Common/Role";
import { CreateSpine, LoadResAsync, showPopLayer, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import CardQualityCount from "./CardQualityCount";
import PullButton from "./PullButton";
import PullCardResult from "./PullCardResult";
import QualityItem from "./QualityItem";

const {ccclass, property} = cc._decorator;

export namespace pullcard {
   export interface ICardInfo{
        id: number,
        count: number,
        quality: tab.ItemQuality,
        isNew: boolean,  
    }
}

@ccclass
export default class PullCard extends cc.Component {

    @property(cc.Label)
    constCount: cc.Label = null;

    @property(cc.Sprite)
    s_constIcon: cc.Sprite = null;

    @property(cc.Button)
    pullButton: cc.Button = null;

    @property(cc.Prefab)
    cardQuality: cc.Prefab = null;

    @property(cc.Layout)
    previewQuality: cc.Layout = null;

    @property(cc.Node)
    preview: cc.Node = null;

    @property(cc.Node)
    freeOption: cc.Node = null;

    @property(cc.Node)
    normalOption: cc.Node = null;

    @property(cc.Node)
    advanceOption: cc.Node = null;

    @property(cc.Node)
    honorOption: cc.Node = null;

    protected leftFreeCount: number = 0;
    protected pullOption: proto.PullCardType;
    protected pullOptions: cc.Node[];

    updateLeftFreeCount(pullCardCnt: number){
        let freeCount = tab.Data.GetKeyValue_ConfigTable().FreePullCardCount;
        this.leftFreeCount = Math.max(0, freeCount - pullCardCnt);
    }

    onLoad () {
        this.pullOption = proto.PullCardType.Free;

        /* 抽卡信息 */
        Net.listenProtocol(proto.Ptl.PullCardInfoRsp, (buffer, ptl)=>{
            let msg = proto.Msg_PullCardInfoRsp.decode(buffer)
            cc.log("PullCardInfoRsp (抽卡信息) msg: " + JSON.stringify(msg))
            
            let rolePullCardCnt = msg.dayPullCount;
            this.updateLeftFreeCount(rolePullCardCnt);
            
            // 默认显示免费标签
            this.updatePullOption(this.pullOption);
        }, this);

        /* 抽卡获得宝箱 */
        Net.listenProtocol(proto.Ptl.PullCardRsp, (buffer, ptl)=>{
            let msg = proto.Msg_PullCardRsp.decode(buffer);
            cc.log("PullCardRsp(抽卡获得宝箱) msg: " + JSON.stringify(msg));
            let pullcardTypeTab = tab.Data.PullCardTableByPullType.getValue(<tab.PullCardType><number>msg.pullCardType);
            if(!pullcardTypeTab){
                cc.error(`pullcardtype[${msg.pullCardType}] is error`);
                return;
            }

            if(msg.cards.length > 0 && msg.result == proto.Msg_PullCardRsp.ErrorCode.Succeed) {
                let iCardInfos: pullcard.ICardInfo[] = [];
                for(let msgCard of msg.cards){
                    let iCardInfo: pullcard.ICardInfo = {id:0, count:0, quality:-1, isNew:false};
                    iCardInfo.id = msgCard.rewardId;
                    iCardInfo.count = msgCard.rewardCount;
                    if (iCardInfo.id == proto.ConstItemID.CTI_Gold
                        || iCardInfo.id == proto.ConstItemID.CTI_Diamond){
                        // 金币和钻石不显示new标记
                        iCardInfo.isNew = false     
                    } else if(!Role.Instance.RoleItemAtrr.getItemByStaticID(iCardInfo.id)) {
                        iCardInfo.isNew = true;
                    } else {

                    }
                    
                    let itemTab = tab.Data.ItemTableByID.getValue(iCardInfo.id);
                    if(itemTab){
                        iCardInfo.quality = itemTab.Quality;
                    }
                    iCardInfos.push(iCardInfo);
                }

                // 依resources目录作为根目录
                showPopLayerV2("prefab/PullCardResult", PullCardResult).then(res=>{
                    res.initData(iCardInfos);
                });
            
                this.getPullInfo();
            }
        }, this);

        this.pullOptions = [this.freeOption, this.normalOption, this.advanceOption, this.honorOption]
    }

    start () {
       this.getPullInfo();
    }

    getPullInfo(){
        let msg = new proto.Msg_PullCardInfoReq();
        Net.Send(proto.Ptl.PullCardInfoReq, msg);
    }   
 
    /* nobody called */
    pullCard(){
        let msg = new proto.Msg_PullCardReq();
        msg.pullCardType = Math.round(Math.random()*3);
        Net.Send(proto.Ptl.PullCardReq, msg);
    }

    updatePullOption(paramOption: proto.PullCardType){
        let pullCardTab: tab.PullCardTable = tab.Data.PullCardTableByPullType.getValue(<number>(paramOption));
        if(null == pullCardTab){
            throw `cannot find PullCardTable by id ${paramOption}`;
        }

        this.pullOption = paramOption;
        
        // 连抽按钮
        // 设置连抽消耗
        //this.constCount.string = `${pullCardTab.CostDiamond}`//String(pullCardTab.CostDiamond);
        for(let i = 0; i < this.pullOptions.length; i++){
            let choseFrame = this.pullOptions[i].getComponentInChildren(cc.Sprite).node;
            choseFrame.active = false;
            if(i == paramOption){
                choseFrame.active = true;
            }
        }
        
        let pullButton = this.pullButton.node.getComponent(PullButton);
        if(pullButton){
            pullButton.updateButtonInfo(this.leftFreeCount, paramOption);
        }
    }
    
    // 点击抽奖按钮 nobody called
    clickPullButton(){
        if(this.leftFreeCount <= 0 && this.pullOption == proto.PullCardType.Free){
            /*
            LoadResAsync("prefab/BlackTipsItem", cc.Prefab).then(asset=>{
                let tip : BlackTips  = cc.instantiate(asset).getComponent(BlackTips);
                tip.AddTips("免费次数已用完");
            });
            */
        }

        let msg = new proto.Msg_PullCardReq();
        msg.pullCardType = this.pullOption;
        Net.Send(proto.Ptl.PullCardReq, msg);
        cc.log("发送抽卡请求，类型", msg.pullCardType);
    }
}
