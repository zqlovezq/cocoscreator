/**
 * 
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { isValidObj } from "../../Common/CommonInterface";
import RewardPfb from "../../Common/RewardPfb";
import Role from "../../Common/Role";
import Func from "../../Utils/Func";
import { getItemIconURL, popRewardLayer_Ex, setGray, ShowTips } from "../../Utils/GameUtils";

const { ccclass, property } = cc._decorator;
/**
 * 自选宝箱界面类型
 */
export enum DrawViewType {
    draw = 1,
    passport = 2
}

export class DrawBoxData {
    viewType: DrawViewType
    boxId: number

    //抽卡
    boxType?: proto.GachaOpenType
    boxState?: number
}
@ccclass
export default class DrawBox extends cc.Component {

    @property(cc.Button)
    private close_btn: cc.Button = null;

    @property(cc.Prefab)
    reward_prefab: cc.Prefab = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Button)
    confirm_btn: cc.Button = null;

    @property(cc.Button)
    queding_btn: cc.Button = null;

    @property(cc.Node)
    got_node: cc.Node = null;

    @property(cc.Node)
    box1: cc.Node = null;

    @property(cc.Node)
    optionalType_txtNode:cc.Node = null
   
    private boxType: proto.GachaOpenType = null;
    public static curSelectCardId: number = 0;
    public static curSelectCardCount: number = 0;
    private isOpen: boolean = false;
    private boxData: DrawBoxData
    onLoad(): void {
        this.close_btn.node.on("click", () => { this.setVisible(); }, this);
        this.confirm_btn.node.on("click", this.openBox, this);
        this.queding_btn.node.on("click", this.onQueding, this);

        Net.listenProtocol(proto.Ptl.GachaBoxRsp, function (buffer, ptl) {
            let msg = proto.Msg_GachaBoxRsp.decode(buffer);
            cc.log("GachaBoxRsp(抽卡) : msg " + JSON.stringify(msg))
            if (msg != null) {
                switch (msg.Result) {
                    case proto.Msg_GachaBoxRsp.ErrorCode.Succeed:
                        this.boxIsOpen();
                        /* 关闭界面 */
                        this.setVisible();
                        let param: proto.IRewardSimpleInfo = {};
                        param.rewardId = DrawBox.curSelectCardId;
                        param.rewardCount = DrawBox.curSelectCardCount
                        param.rewardType = tab.RewardType.RewardType_SelectCardBySelf
                        popRewardLayer_Ex([param], null);
                        this
                        break
                    default:
                        break
                }
            }
        }, this)
    }
    start() {
        DrawBox.curSelectCardId = 0;
        DrawBox.curSelectCardCount = 0;
    }
    setVisible() {
        this.node.removeFromParent();
        this.node.destroy();
    }
    onDestroy() {

    }
    /* 能点进来必然可以选择 */
    public initData(dd: DrawBoxData) {
        this.boxData = dd
        this.confirm_btn.node.active = false

        this.updateBoxIcon()
        if (this.boxData.viewType == DrawViewType.draw) {
            this.initDrawView()
        }else if (this.boxData.viewType == DrawViewType.passport){
            this.initPassportView()
        }
    }

    initDrawView() {
        this.boxType = this.boxData.boxType;
        this.confirm_btn.node.active = this.boxData.boxState != 0;
        this.setCardData();
       
    }

    initPassportView(){
        this.boxType = this.boxData.boxType;
        this.queding_btn.node.active = true
        this.setCardData();
    }

    updateBoxIcon(){
        let iconObj = getItemIconURL(this.boxData.boxId,tab.RewardType.RewardType_ItemType);
        if (iconObj){
            this.box1.getComponent(cc.Sprite).setTexture(iconObj.ItemBigIcon)    
        }
    }

    public static setCurSelectCard(cardid: number, count: number) {
        DrawBox.curSelectCardId = cardid;
        DrawBox.curSelectCardCount = count;
    }

    //选择确定
    onQueding(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_DrawBoxOKSelect, {cardId:DrawBox.curSelectCardId,count:DrawBox.curSelectCardCount})
        this.setVisible()
    }

    /* 打开宝箱 */
    private openBox() {
        if (this.isOpen) {
            return;
        }
        if (DrawBox.curSelectCardId) {
            let param = new proto.Msg_GachaBoxReq();
            param.Type = this.boxType;
            param.CardID = DrawBox.curSelectCardId;
            Net.Send(proto.Ptl.GachaBoxReq, param);
        } else {
            ShowTips("UnSelectCard");
        }
    }
    /* 宝箱已经打开 */
    private boxIsOpen() {
        this.isOpen = true;
        this.got_node.active = true;
    }
    /* 获取已经获得的所有卡牌数据 */
    private setCardData() {
        /* 配表获取的奖励 */
        let tabData = Func.OptionalCardTableByID(this.boxData.boxId);
        tabData.sort((a: tab.OptionalCardTable, b: tab.OptionalCardTable) => {
            if (Role.Instance.RoleItemAtrr.getItemByStaticID(a.CardID)) {
                if (Role.Instance.RoleItemAtrr.getItemByStaticID(b.CardID)) {
                    return a.CardID - b.CardID
                } else {
                    return -1;
                }
            } else {
                if (Role.Instance.RoleItemAtrr.getItemByStaticID(b.CardID)) {
                    return 1;
                } else {
                    return 0;
                }
            }
        })
        for (let cardTabData of tabData.values()) {
            //根据物品ID从玩家自身物品库中取数据
            // if(this.boxType===proto.GachaOpenType.Box1){
            //     if(cardTabData.OptionalBoxType!==tab.OptionalType.OptionalType_DrawCard25){
            //         continue;
            //     }
            // }else{
            //     if(cardTabData.OptionalBoxType!==tab.OptionalType.OptionalType_DrawCard50){
            //         continue;
            //     }
            // }
            let ownItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(cardTabData.CardID);
            //拥有该物品
            let cell = cc.instantiate(this.reward_prefab);
            this.content.addChild(cell);
            let ts: RewardPfb = cell.getComponent(RewardPfb);
            ts.setRewardInfo(cardTabData.CardID, tab.RewardType.RewardType_SelectCardBySelf, cardTabData.CardCount, true);
            if (cardTabData.OptionalBoxType == tab.OptionalType.OptionalType_Any) {
                ts.setCanClick(true);
                this.optionalType_txtNode.active = false
                continue
            } else if (cardTabData.OptionalBoxType == tab.OptionalType.OptionalType_Owned) {
                this.optionalType_txtNode.active = true
                if (isValidObj(ownItemData)) {
                    /* 可点击 */
                    ts.setCanClick(true);
                } else {
                    /* 置灰 */
                    setGray(ts.spr_reward_icon, true);
                    setGray(ts.spr_reward_bg, true);
                    setGray(ts.spr_reward_frame, true);
                    ts.setCanClick(false);
                }
            }
        }
    }
}
