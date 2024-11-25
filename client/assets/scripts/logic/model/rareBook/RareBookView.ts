import { _decorator, Component, instantiate, Node, Prefab, ScrollView, sp, Toggle, UI, Vec2 } from 'cc';
import { ViewBase } from '../../../framework/base/ViewBase';
import { RareBookHandBookNode } from './RareBookHandBookNode';
import { RareBookInfo } from './RareBookInfo';
import { tab } from '../../../Table/table_gen';
import { RareBookData } from './RareBookData';
import { RareBookItem } from './RareBookItem';
import { RareBookGroupItem } from './RareBookGroupItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RareBookEquipNode } from './RareBookEquipNode';
import { proto } from 'client_protocol';
import { EventMgr } from '../../mgr/EventMgr';
import { RareBookGacha } from './RareBookGacha';
import { Func } from '../../utils/Func';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { SettingRedManager } from '../role/SettingRedManager';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookView
 * zhudingchao
 * Wed May 22 2024 10:20:35 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookView.ts
 *
 */

@ccclass('RareBookView')
export class RareBookView extends ViewBase {
    @property(RareBookHandBookNode)
    handbookNode: RareBookHandBookNode = null;
    @property(Node)
    drawbookNode: Node = null;
    @property(Node)
    groupNode: Node = null;
    @property(RareBookEquipNode)
    equipNode: RareBookEquipNode = null;
    @property(Prefab)
    rareItemPrefab: Prefab = null;
    @property(Node)
    groupContentNode:Node = null;
    @property(Prefab)
    rareGroupItemPrefab: Prefab = null;
    @property(RareBookGacha)
    gachaBookNode: RareBookGacha = null;
    @property(Node)
    toggleNode: Node = null;
    @property(ScrollView)
    groupScrollview:ScrollView = null;

    private currTag: number = 1;
    private groupItems: Array<RareBookGroupItem>;


    register(): void {
        EventMgr.onMsg(proto.Ptl.CombineBookFragmentRsp, this.on_s2c_CombineBookFragmentRsp, this);
        EventMgr.onMsg(proto.Ptl.UpgradeBookLevelRsp, this.on_s2c_UpgradeBookLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.UpgradeBookStarRsp, this.on_s2c_UpgradeBookStarRsp, this);
        EventMgr.onMsg(proto.Ptl.UpdateBookSeriesData, this.on_s2c_Msg_UpdateBookSeriesData, this);
        EventMgr.onMsg(proto.Ptl.TakeBookRsp, this.on_s2c_Msg_TakeBookRsp, this);
        EventMgr.onMsg(proto.Ptl.DropBookRsp, this.on_s2c_Msg_DropBookRsp, this);
        EventMgr.onMsg(proto.Ptl.UpdateBookPowerScore, this.on_s2c_Msg_UpdateBookPowerScore, this);
    }
    onShow(): void {
        if (this.openData) {
            this.currTag = this.openData;
        }
        this.setShowState();
        this.initView();
    }
    // start() {
    //     this.setShowState();
    //     this.initView();
    // }
    onClickToggle(event, tag) {
        tag = Number(tag);
        if (this.currTag != tag) {
            this.currTag = tag;
            this.setShowState();
            this.initView();
        }
    }
    setShowState() {
        this.handbookNode.node.active = this.currTag == 1;
        this.drawbookNode.active = this.currTag == 2;
        this.groupNode.active = this.currTag == 3;
        this.equipNode.node.active = this.currTag == 4;
        this.toggleNode.getChildByName("Toggle" + this.currTag).getComponent(Toggle).isChecked = true;
    }
    initView() {
        this.unscheduleAllCallbacks()
        if (this.currTag == 1) {
            this.initHandBook();
        } else if (this.currTag == 3) {
            this.initGroupView();
        } else if (this.currTag == 4) {
            this.initEquipView();
        } else if (this.currTag === 2) {
            this.initBookGachaView();
        }
    }
    initBookGachaView() {
        this.gachaBookNode.initView();
    }
    initHandBook() {
        this.handbookNode.initView(this.rareItemPrefab);

    }
    initGroupView() {
        if (!this.groupItems) {
            this.groupItems = [];
            let groupMap: Map<number, Array<tab.BookSeriesTable>> = new Map();
            let groupTabs = tab.getData().BookSeriesTable;
            for (let key in groupTabs) {
                let id = groupTabs[key].GroupId;
                let list = groupMap.get(id);
                if (!list) {
                    list = [];
                    groupMap.set(id, list);
                }
                list.push(groupTabs[key]);
            }
            groupMap.forEach((value) => {
                let item = instantiate(this.rareGroupItemPrefab);
                item.parent = this.groupContentNode;
                let com = item.getComponent(RareBookGroupItem);
                com.initData(value);
                this.groupItems.push(com);
            })
            // let tabs = tab.getData().BookSeriesTable;
            // for (let key in tabs) {

            // }
        } else {
            for (let key in this.groupItems) {
                this.groupItems[key].updateView();
            }
        }
        //红点效果
        if(this.groupNode.active){
            let redKey=RareBookData.ins.bookCollectRedPointId;
            if(redKey!=""){
                let groupId=Number(redKey.split("_")[0])
               for(let key in this.groupItems){
                   if(this.groupItems[key].groupId==groupId){
                       let pos=this.groupItems[key].node.position;
                       this.groupItems[key].redPoint.active=true;
                       this.scheduleOnce(()=>{
                           this.groupScrollview.scrollToOffset(new Vec2(0, -pos.y+100), 0.1);
                           this.scheduleOnce(()=>{
                               this.groupItems[key].playAnim();
                               Func.setItem("RareBook_CollectRed_" + redKey,1);
                                RareBookData.ins.updateBookCollectRedPoint();
                                RedMgr.refreshEvent(RedDotType.Book_collect);
                           },0.5)
                       })
                       break;
                   }
               }
           }
         }
      
           
        //  }
        // let pos=this.groupItems[4].node.position;
        // this.groupItems[4].redPoint.active=true;
        // this.scheduleOnce(()=>{
        //     this.groupScrollview.scrollToOffset(new Vec2(0, -pos.y-270), 0.1);
        //     this.scheduleOnce(()=>{
        //         this.groupItems[4].playAnim();
        //         // Func.setItem("RareBook_CollectRed_" + redKey,1);
        //         // RareBookData.ins.updateBookCollectRedPoint();
        //         // RedMgr.refreshEvent(RedDotType.Book_collect);
        //     },0.5)
        // })
     
    }
    initEquipView() {
        this.equipNode.initView(this.rareItemPrefab);
    }

    onClickExchang() {
        UIMgr.ins.show({ viewName: ViewName.RareBookExchangePop })
    }

    on_s2c_CombineBookFragmentRsp(msg: proto.Msg_CombineBookFragmentRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.handbookNode.initView();
            // this.updateGropView(msg.bookId);
            let info = RareBookData.ins.getBookInfoById(msg.bookId);
            if (info && info.bookTable.Aptitude >= tab.HeroAptitude.HeroAptitude_SR) {
                this.initGroupView();
            }
        }
    }
    on_s2c_UpgradeBookLevelRsp(msg: proto.Msg_UpgradeBookLevelRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.handbookNode.updateItem(msg.book.itemId);
            this.updateGropView(msg.book.itemId);
        }
    }
    on_s2c_UpgradeBookStarRsp(msg: proto.Msg_UpgradeBookStarRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.handbookNode.updateItem(msg.book.itemId);
            this.updateGropView(msg.book.itemId);

        }
    }
    on_s2c_Msg_UpdateBookSeriesData(msg: proto.Msg_UpdateBookSeriesData) {

        this.initGroupView();
    }
    on_s2c_Msg_TakeBookRsp(msg: proto.Msg_TakeBookRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.equipNode.initView();

        }
    }
    on_s2c_Msg_DropBookRsp(msg: proto.Msg_DropBookRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.equipNode.initView();
        }
    }
    updateGropView(itemId: number) {
        if (this.groupItems && this.groupItems.length > 0) {
            let info = RareBookData.ins.getBookInfoByItemId(itemId);
            if (info.bookTable.Aptitude >= tab.HeroAptitude.HeroAptitude_SR) {
                this.initGroupView();
            }
        }


    }
    on_s2c_Msg_UpdateBookPowerScore(msg: proto.Msg_UpdateBookPowerScore) {

        this.handbookNode.updateScore();
        // RareBookData.ins.updateBook(msg.book as proto.BookData)

    }
   



    protected onDestroy(): void {
        super.onDestroy();
        EventMgr.unTarget(this);
        if (!SettingRedManager.ins.getSetting("TenBookGacha")) {
            SettingRedManager.ins.setSetting("TenBookGacha", true);
        }
    }
}