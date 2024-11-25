import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ItemInfo } from '../item/ItemInfo';
import { RareBookData } from './RareBookData';
import { tab } from '../../../Table/table_gen';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { RareBookControl } from './RareBookControl';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../../define/ViewDefine';
import { CommonItem } from '../item/CommonItem';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookExchangePop
 * zhudingchao
 * Tue May 28 2024 10:49:45 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookExchangePop.ts
 *
 */

@ccclass('RareBookExchangePop')
export class RareBookExchangePop extends ViewPop {
    @property(Node)
    exchangeNode: Node = null;
    @property(Node)
    rewardNode: Node = null;

    private canExchangItems: Array<ItemInfo>;
    private itemNodes: Array<Node>;


    register(): void {
        EventMgr.onMsg(proto.Ptl.BookFragmentSwitchRsp, this.on_s2c_BookFragmentSwitchRsp, this);
    }
    onShow(): void {
        this.canExchangItems= RareBookData.ins.getExchangBookFragments();
    
      
        this.itemNodes = [];
        this.initView();
    }


    initView() {
        let rewards: Array<ItemInfo> = [];
        for (let key in this.canExchangItems) {
            let item = this.canExchangItems[key];
            let bookfraTab = tab.getData().BookFragmentTableById.getValue(item.itemId)
            let rwdIds = bookfraTab.MaterialIdList;
            let t=Math.floor(item.num/bookfraTab.BaseAmount);
            if(t>=1){
                for (let k in rwdIds) {
                    let num=bookfraTab.MaterialCountList[k]*t;
                    let info = rewards.find(a => a.itemId == rwdIds[k]);
                    if (info) {
                        info.num = info.num + num;
                    } else {
                        info = new ItemInfo();
                        info.initItemData(rwdIds[k], num );
                        rewards.push(info);
                    }
                }
                let itemNode = ItemPoolMgr.ins.createItem(item,this.exchangeNode);
                this.itemNodes.push(itemNode);
                itemNode.getComponent(CommonItem).setShowNum(t*bookfraTab.BaseAmount)
            }
            

        }

        for (let key in rewards) {
            let itemNode = ItemPoolMgr.ins.createItem(rewards[key],this.rewardNode);
            this.itemNodes.push(itemNode);
        }
    }
    exchangeSucc() {
      
        this.removeItem();

    }
    removeItem() {
        for (let key in this.itemNodes) {
            ItemPoolMgr.ins.putCommonItem(this.itemNodes[key]);
        }
        this.itemNodes=[];
    }
     protected onDisable(): void {
        this.removeItem();
    }
    protected onDestroy(): void {
        super.onDestroy();
        EventMgr.unTarget(this);
       
    }
    onClickConfirm() {
        if(this.itemNodes.length==0){
            //ShowTips("没有可兑换的残卷");
            ShowTips(LangMgr.getLab("Tips_rarebook_2"));
        }else{
            RareBookControl.ins.requestBookFragmentSwitch();
        }
       
    }

    on_s2c_BookFragmentSwitchRsp(msg: proto.Msg_BookFragmentSwitchRsp){
        if(msg.error.code==proto.CommonErrorCode.Succeed){
            this.exchangeSucc();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })

            // RareBookData.ins.updateBook(msg.book as proto.BookData)
        }
    }
    onClickHelp() {
        //ShowTips("通用提示界面")
    }
}