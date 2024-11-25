import { _decorator, Component, EventTouch, ForwardFlow, instantiate, Label, labelAssembler, log, Node, Prefab, ProgressBar, ScrollView, Sprite, UITransform, v2, Vec2 } from 'cc';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { tab } from '../../../../Table/table_gen';
import { VipLvBtnItem } from './VipLvBtnItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { VipPrivilegeItem } from './VipPrivilegeItem';
import { ItemData } from '../../item/ItemData';
import { ActivityControl } from '../ActivityControl';
import { ActivityData } from '../ActivityData';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../../../define/ViewDefine';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

/**
 * 
 * VipPrivilegeView
 * zhudingchao
 * Mon Jul 01 2024 15:20:18 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/vip/VipPrivilegeView.ts
 *
 */

@ccclass('VipPrivilegeView')
export class VipPrivilegeView extends ComponentBase {
    @property(Sprite)
    giftSpr: Sprite = null;
    @property(Label)
    giftLab: Label = null;
    @property(Label)
    tipsLab: Label = null;
    @property(Label)
    privilegetitleLab1: Label = null;
    @property(ScrollView)
    privilegeScrollView: ScrollView = null;
    @property(Label)
    privilegetitleLab2: Label = null;
    @property(Node)
    rewardNode: Node = null;
    @property(Sprite)
    priceIcon1: Sprite = null;
    @property(Sprite)
    priceIcon2: Sprite = null;
    @property(Label)
    priceLab1: Label = null;
    @property(Label)
    priceLab2: Label = null;
    @property(Node)
    buyBtnNode: Node = null;
    @property(Node)
    purchasedBtnNode: Node = null;
    @property(ScrollView)
    vipBtnScrollview: ScrollView = null;
    @property(ProgressBar)
    vipProgress: ProgressBar = null;
    @property(Label)
    progressLabel: Label = null;
    @property(UITransform)
    deleteLine:UITransform=null;
    @property(Prefab)
    vipBtnPrefab: Prefab = null;
    @property(Prefab)
    privilegePrefab: Prefab = null;

    @property(Node)
    lightNode:Node=null;
    @property(Node)
    arrowNode:Node=null;

    private vipLevel: number;
    private currBtnItem: VipLvBtnItem;
    private currVipLevel: number;
    private privilegeItems: Array<VipPrivilegeItem>;
    private vipBonusTabMap: Map<number, Array<tab.VipBonusTable>>;
    private maxVipLevel: number = 0;
    private isCanBuy: boolean = false;
    register(): void {
        EventMgr.onMsg(proto.Ptl.VipLevelUpPush, this.on_s2c_VipLevelUpPush, this)
        EventMgr.onMsg(proto.Ptl.ReceiveVipDailyGiftRsp, this.on_s2c_ReceiveVipDailyGiftRsp, this)
        EventMgr.onMsg(proto.Ptl.BuyVipGiftRsp, this.on_s2c_BuyVipGiftRsp, this)
        EventMgr.onLocal(LocalEvent.Item_Update, this.updateResourceNum, this);
    }
    initView() {
        this.vipLevel =ActivityData.ins.vipMsg.vipLevel;
        this.currVipLevel =  this.vipLevel;
        this.privilegeItems = [];
        this.vipBonusTabMap = new Map();
        let vipBonus = tab.getData().VipBonusTable;
        for (let key in vipBonus) {
            let list = this.vipBonusTabMap.get(vipBonus[key].VipLv);
            if (!list) {
                list = [];
                this.vipBonusTabMap.set(vipBonus[key].VipLv, list);
            }
            list.push(vipBonus[key]);
            if (vipBonus[key].VipLv > this.maxVipLevel) {
                this.maxVipLevel = vipBonus[key].VipLv;
            }
        }

        this.initVipBtn();
        this.initCurrVipView();
        this.initGiftView();
        this.initProgress();
    }
    initVipBtn() {
        this.currBtnItem = null;
        this.vipBtnScrollview.content.removeAllChildren();
        let vipTable = tab.getData().VipTableByVipLv.getValue(this.vipLevel);
        let showLevel = vipTable.ShowVipLv;
        let tables = tab.getData().VipTable;
        let len = tables.length - 1;
        for (let i = len; i >= 0; i--) {
            if (tables[i].VipLv <= showLevel) {
                let node = instantiate(this.vipBtnPrefab);
                node.parent = this.vipBtnScrollview.content;
                node.getComponent(VipLvBtnItem).initView(tables[i], this.onClickItem);
                if (tables[i].VipLv == this.currVipLevel) {
                    this.currBtnItem = node.getComponent(VipLvBtnItem);
                }
            }
        }
      
        if (this.currBtnItem) {
            this.currBtnItem.setSelectState(true);
        }
    
        this.scheduleOnce(()=>{
            this.setScrollPos();
        })
       


    }
    setScrollPos() {
        let pos = this.currBtnItem.node.getPosition();
        let w=this.vipBtnScrollview.getComponent(UITransform).contentSize.width;
         this.vipBtnScrollview.scrollToOffset(new Vec2(pos.x-w+220 , 0), 0.1);
        //  this.vipBtnScrollview.scrollTo(v2(pos.x-w-110,pos.y))
    }
    initCurrVipView() {
        let currTable = this.currBtnItem.vipTable;
        this.privilegetitleLab1.string = LangMgr.getCombineString("ui_vip_2", [currTable.VipLv]);
        this.privilegetitleLab2.string = LangMgr.getCombineString("ui_vip_3", [currTable.VipLv]);
        this.rewardNode.removeAllChildren();
        for (let key in currTable.VipRewardIds) {
            let itemInfo = new ItemInfo();
            itemInfo.initItemData(currTable.VipRewardIds[key], currTable.VipRewardNum[key]);
            ItemPoolMgr.ins.createRewadItem(itemInfo, this.rewardNode);
        }
        let item = tab.getData().ItemTableById.getValue(currTable.VipCostItemIds);
        this.priceIcon1.setTexture(item.Icon);
        this.priceIcon2.setTexture(item.Icon);
        this.priceLab1.string = currTable.VipCostItemNum + ""
        this.priceLab2.string = currTable.ShowCost + ""
        // this.scheduleOnce(()=>{
           
        // })
       
        // this.priceLab2.isUnderline = true;
        // this.priceLab2.underlineHeight = 0;
        for (let key in this.privilegeItems) {
            this.privilegeItems[key].node.active = false;
        }

        let lastBonus: Array<tab.VipBonusTable> = [];
        if (currTable.VipLv > 0) {
            lastBonus = this.vipBonusTabMap.get(currTable.VipLv - 1);
        }
        let currBonus = this.vipBonusTabMap.get(currTable.VipLv);

        for (let key in currBonus) {
            let item = this.creatorPrivilegeItem(Number(key));
            item.node.active = true;
            let bouns = currBonus[key];
            let tips = ""
            if (bouns.VipBonus == tab.VipBonus.VipBonus_OpenFunction) {
                tips = LangMgr.getLab(tab.VipBonus[bouns.VipBonus] + "_" + bouns.AddValue);
            } else if(bouns.VipBonus == tab.VipBonus.VipBonus_PatrolIdleTime){
                let value = Math.floor(bouns.AddValue / 360)/10;
                tips = LangMgr.getCombineString(tab.VipBonus[bouns.VipBonus], [value]);
            }else if (bouns.VipBonus == tab.VipBonus.VipBonus_PatrolMoneyRatio || bouns.VipBonus == tab.VipBonus.VipBonus_PatrolFoodRatio) {
                let value = Math.floor(bouns.AddValue / 100);
                tips = LangMgr.getCombineString(tab.VipBonus[bouns.VipBonus], [value]);
            } else {
                tips = LangMgr.getCombineString(tab.VipBonus[bouns.VipBonus], [bouns.AddValue]);
            }
            item.richtex.string = tips;
            if (currTable.VipLv == 0) {
                item.upNode.active = false;
                item.newNode.active = false;
            } else {

                let findTab = lastBonus.find(a => a.VipBonus == bouns.VipBonus);
                if (findTab) {
                    if (bouns.VipBonus == tab.VipBonus.VipBonus_OpenFunction) {
                        if (findTab.AddValue != bouns.AddValue) {
                            item.upNode.active = false;
                            item.newNode.active = true;
                        } else {
                            item.upNode.active = false;
                            item.newNode.active = false;
                        }
                    } else {
                        if (findTab.AddValue < bouns.AddValue) {
                            item.upNode.active = true;
                            item.newNode.active = false;
                        } else {
                            item.upNode.active = false;
                            item.newNode.active = false;
                        }
                    }

                } else {
                    item.upNode.active = false;
                    item.newNode.active = true;
                }


            }
        }
        this.scheduleOnce(()=>{
            this.deleteLine.width=this.priceLab2.getComponent(UITransform).width+5;
            this.privilegeScrollView.scrollToTop();
         
        })
        this.updateBuyState();


    }
    updateBuyState() {
        let currTable = this.currBtnItem.vipTable;
        this.isCanBuy = false;
        if (currTable.VipLv > this.vipLevel) {
            this.buyBtnNode.active = true;
            this.buyBtnNode.getComponent(Sprite).grayscale = true;
            this.purchasedBtnNode.active = false;
            this.buyBtnNode.getChildByName("reddot").active=false;
        } else {
            let isBuy = ActivityData.ins.vipMsg.boughtVipGifts.indexOf(currTable.VipLv) >= 0;
            if (isBuy) {
                this.purchasedBtnNode.active = true;
                this.buyBtnNode.active = false;
            } else {
                this.isCanBuy = true;
                this.buyBtnNode.active = true;
                this.buyBtnNode.getComponent(Sprite).grayscale = false;
                this.buyBtnNode.getChildByName("reddot").active=true;
                this.purchasedBtnNode.active = false;
            }
        }
    }
    initGiftView() {
        this.giftLab.string = LangMgr.getCombineString("ui_vip_4", [this.vipLevel])
        this.giftSpr.grayscale=ActivityData.ins.vipMsg.isDailyGiftReceived;
        this.lightNode.active=!ActivityData.ins.vipMsg.isDailyGiftReceived;
        this.arrowNode.active=!ActivityData.ins.vipMsg.isDailyGiftReceived;
    }
    initProgress() {
        let vipTable = tab.getData().VipTableByVipLv.getValue(this.vipLevel);
        let lastVipTable=tab.getData().VipTableByVipLv.getValue(this.vipLevel-1);
        let lastVipExp=lastVipTable?lastVipTable.VipExp:0;
        let VipExp=vipTable.VipExp-lastVipExp;
        if (this.vipLevel >= this.maxVipLevel) {
            //this.tipsLab.string = "已达到最大等级";
            this.tipsLab.string = LangMgr.getLab("ui_vip_7");
            
            this.progressLabel.string =VipExp + "/" + VipExp;
            this.progressLabel.node.active = false;
            this.vipProgress.progress = 1;

        } else {
            this.progressLabel.node.active = true;
            let currScore = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_VipExp);
            let score = vipTable.VipExp - currScore;
            let score2 =  currScore-lastVipExp;
            this.tipsLab.string = LangMgr.getCombineString("ui_vip_5", [score, this.vipLevel + 1]);
            this.progressLabel.string = score2 + "/" +VipExp;
            this.vipProgress.progress = score2 / VipExp;
        }

    }

    creatorPrivilegeItem(index: number) {
        if (!this.privilegeItems) {
            this.privilegeItems = [];
        }
        if (!this.privilegeItems[index]) {
            let item = instantiate(this.privilegePrefab);
            item.parent = this.privilegeScrollView.content;
            let com = item.getComponent(VipPrivilegeItem);
            this.privilegeItems.push(com);
        }
        return this.privilegeItems[index];
    }

    updateView() {
        if (ActivityData.ins.vipMsg.vipLevel != this.vipLevel) {
            this.initView();
        } else {
            this.initProgress();
        }
    }
    // onClickHelpBtn(event:EventTouch) {
    //     // log("---------------------");
    //     UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":event.target.worldPosition,"WordTableKey":"策划配置" }});
    // }
    onClickItem = (item: VipLvBtnItem) => {
        if (item != this.currBtnItem) {
            this.currBtnItem.setSelectState(false);
            item.setSelectState(true);
            this.currBtnItem = item;
            this.initCurrVipView();
        }
    }
    onClickBuyBtn() {
        if (this.isCanBuy) {
            let currTable = this.currBtnItem.vipTable;
            if (currTable) {
                let id = ItemData.ins.isItemsEnoughByList([currTable.VipCostItemIds], [currTable.VipCostItemNum])
                if (id <= 0) {
                    ActivityControl.ins.requesBuyVipGift(currTable.VipLv);
                } else {
                    let itemtab = tab.getData().ItemTableById.getValue(id);
                    //ShowTips(LangMgr.getLab(itemtab.Name) + "不足");
                    ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(itemtab.Name)]));
                }
            }

        } else {
            //ShowTips("未达到vip等级");
            ShowTips(LangMgr.getLab("Tips_vip_1"));
        }
    }
    onClickReceiveGift(){
        if(!ActivityData.ins.vipMsg.isDailyGiftReceived){
            ActivityControl.ins.requesReceiveVipDailyGift();
        }
    }
    onClickGetVipExp(){
        if(OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyShop)){
            // UIMgr.ins.show({viewName:ViewName.MallMainView,data:tab.MallTab.MallTab_Tab5});
            UIMgr.ins.hideView("WelfareActivityMainView");
            UIMgr.ins.jumpLayer(tab.Module.Module_ActivityMainView);
        }else{
            // OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_DailyShop);
            UIMgr.ins.show({ viewName: ViewName.DiamondBuyPop})
        }
       
        // ShowTips("前往获取vip积分")
    }
    // vip等级提升
    on_s2c_VipLevelUpPush(msg: proto.Msg_VipLevelUpPush) {
        this.initView();

    }

    // vip每日礼包领取返回
    on_s2c_ReceiveVipDailyGiftRsp(msg: proto.Msg_ReceiveVipDailyGiftRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.initGiftView();
            UIMgr.ins.show({viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
    // vip专属礼包购买返回
    on_s2c_BuyVipGiftRsp(msg: proto.Msg_BuyVipGiftRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateBuyState();
            UIMgr.ins.show({viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
     /**
     * 刷新资源显示数量
     */
     updateResourceNum(itemIds: Array<number>) {

        if (itemIds.indexOf(tab.CurrencyType.CurrencyType_VipExp) > -1) {
            this.initProgress();
            
            // this.numLab.string = ItemData.ins.getCount(this.itemId) + ""
            // let item = ItemData.ins.getByItemId(this.itemId);
            // if (item) {
            //     let num = item.num;
            //     this.numLab.string = num + "";
            // } else {
            //     this.numLab.string = "0";
            // }

        }

    }
}