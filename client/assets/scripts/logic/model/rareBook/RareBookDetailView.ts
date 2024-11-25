import { _decorator, Button, Color, Component, error, instantiate, Label, log, Node, Prefab, RichText, Toggle } from 'cc';
import { ViewBase } from '../../../framework/base/ViewBase';
import { RareBookItem } from './RareBookItem';
import { HeroItem } from '../item/HeroItem';
import { RareBookInfo } from './RareBookInfo';
import { tab } from '../../../Table/table_gen';
import { RareBookData } from './RareBookData';
import { LangMgr } from '../../mgr/LangMgr';
import { RareBookAttributeItem } from './RareBookAttributeItem';
import { CommonItem } from '../item/CommonItem';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { RareBookSmallItem } from './RareBookSmallItem';
import { ConsumeResourceItem } from '../common/ConsumeResourceItem';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { ItemInfo } from '../item/ItemInfo';
import { ItemData } from '../item/ItemData';
import { HeroStar } from '../hero/HeroStar';
import { ViewName } from '../../define/ViewDefine';
import { WeaponItem } from '../common/WeaponItem';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { RareBookControl } from './RareBookControl';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookDetailView
 * zhudingchao
 * Thu May 23 2024 15:50:18 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookDetailView.ts
 *
 */

@ccclass('RareBookDetailView')
export class RareBookDetailView extends ViewBase {
    @property(RareBookItem)
    bookItem: RareBookItem = null;
    // @property(Node)
    // grouppopBtnNode: Node = null;
    @property(Label)
    vocationLab: Label = null;
    @property(Node)
    attributeNode: Node = null;
    @property(Node)
    arrowNode: Node = null;
    @property([WeaponItem])
    comItems: Array<WeaponItem> = [];
    @property(RichText)
    describeRichtext: RichText = null;
    @property(Node)
    detailNode: Node = null;
    @property(Node)
    studyNode: Node = null;
    @property(Node)
    comprehendNode: Node = null;
    @property(Prefab)
    attrItemPrefab: Prefab = null;
    @property(Node)
    gotoBtnNode: Node = null;
    @property(RareBookSmallItem)
    bookSmallItem: RareBookSmallItem = null;
    @property(RareBookSmallItem)
    bookSmallItem2: RareBookSmallItem = null;
    @property(RichText)
    describeRichtext2: RichText = null;
    @property(Label)
    describeRichtext3: Label = null;
    @property(Node)
    studyLevelUpNode: Node = null;
    @property(Node)
    studyMaxLevelNode: Node = null;
    @property(Node)
    studyLimitLevelNode: Node = null;
    @property(Node)
    stuffLayout: Node = null;
    @property(Node)
    stuffLayout2: Node = null;
    @property(ConsumeResourceItem)
    consumeResourceItem: ConsumeResourceItem = null;
    @property(HeroStar)
    nowStar: HeroStar = null;
    @property(HeroStar)
    nextStar: HeroStar = null;
    @property(Node)
    nowStarNode: Node = null;
    @property(Node)
    nextStarNode: Node = null;
    @property(Node)
    starArrowNode: Node = null;
    @property(Node)
    comprehendLevelUpNode: Node = null;
    @property(Node)
    comprehendMaxLevelNode: Node = null;
    @property(Label)
    comprehendNeedLab: Label = null;
    @property(Label)
    comprehendHaveLab: Label = null;
    @property(Node)
    activateBtnNode: Node = null;
    @property(Toggle)
    toggle: Toggle = null;
    @property(HeroStar)
    starItem: HeroStar = null;
    @property([Node])
    redPoints: Node[] = [];
    private bookInfos: Array<RareBookInfo>;
    private currIndex: number = 0;
    private currBookInfo: RareBookInfo;
    private currTag: number = 1;
    private attrItems: Array<RareBookAttributeItem> = [];

    private studyComItems: Array<CommonItem>;
    private comprehendItems: Array<CommonItem>;
    private nextLevelTable: tab.BookLevelTable;
    private nextStarTable: tab.BookStarTable;
    // private isGrouppop:boolean=false;  //是否是融汇
    register(): void {
        EventMgr.onMsg(proto.Ptl.CombineBookFragmentRsp, this.on_s2c_CombineBookFragmentRsp, this);
        EventMgr.onMsg(proto.Ptl.UpgradeBookLevelRsp, this.on_s2c_UpgradeBookLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.UpgradeBookStarRsp, this.on_s2c_UpgradeBookStarRsp, this);
        EventMgr.onLocal(LocalEvent.JumpLayerSuceess, this.onJumpLayerSuceess, this);
    }

    onJumpLayerSuceess(opName: tab.Module) {
        if (opName == tab.Module.Module_RareBookView) {
            this.onClose()
        }
    }
    onShow(): void {
        if (this.openData["bookInfos"]) {
            this.bookInfos = this.openData["bookInfos"];
        } else {
            let infos = RareBookData.ins.getBookInfos(true);
            //排序-------------
            this.bookInfos = infos;
        }
        if (this.openData["index"]) {
            this.currIndex = this.openData["index"];
        }
        if (this.openData["currInfo"]) {
            this.currBookInfo = this.openData["currInfo"];
        }
        if (!this.bookInfos) {
            error("打开view数据错误");
            return;
        }
        if (this.currBookInfo) {
            this.currIndex = this.bookInfos.indexOf(this.currBookInfo);
        }
        this.initView();


    }
    initView() {
        this.currBookInfo = this.bookInfos[this.currIndex];
        if (!this.currBookInfo.isLock && this.currTag != 1) {
            this.currTag = 1;
            this.toggle.isChecked = true;
        }
        if (this.currBookInfo.isLock && this.currBookInfo.firstLookRed) {
            this.currBookInfo.isRedPoint = false;
            EventMgr.emitLocal(LocalEvent.updateBookRedPoint);
        }
        this.initBaseView();
        let v = LangMgr.getLab(tab.HeroClass[this.currBookInfo.bookTable.Class]);
        this.vocationLab.string = LangMgr.getCombineString("ui_rarebook_1", [v]);
        this.setViewShowStage();
        this.updateRed();
        // if (this.currTag == 1) {
        //     this.initDetailView();
        // }else if(this.currTag==2){
        //     this.initStudyView();
        // }else if(this.currTag==3){
        //     this.initComprehendView();
        // }
    }
    initBaseView() {
        this.bookItem.initData(this.currBookInfo, false, null, true, true);
        // let stab = RareBookData.ins.getSerieTableByBookId(this.currBookInfo.itemId);
        // if (stab) {
        //     this.grouppopBtnNode.active = true;
        // } else {
        //     this.grouppopBtnNode.active = false;
        // }
    }
    setViewShowStage() {
        if (this.currTag == 1) {
            this.initDetailView();
        } else if (this.currTag == 2) {
            this.initStudyView();
        } else if (this.currTag == 3) {
            this.initComprehendView();
        }
    }
    initDetailView() {
        this.detailNode.active = true;
        this.studyNode.active = false;
        this.comprehendNode.active = false;

        let attrMap = this.currBookInfo.attrMap;
        let index = 0;
        this.hideArrtItem();
        attrMap.forEach((value, key) => {
            let item = this.creatorItem(index);
            item.initView(key, value);
            index++;
        });
        let advanceId = RareBookData.ins.getBookAdvanceId(this.currBookInfo.itemId);
        if (advanceId) {
            this.arrowNode.active = true;
            this.comItems[0].node.active = true;
            this.comItems[0].initBookItemId(advanceId, true, true, false, this.onTouchWeaponItem);
            this.comItems[1].node.active = true;
            this.comItems[1].initData(this.currBookInfo, true, true, false, this.onTouchWeaponItem)
        } else {
            this.comItems[0].node.active = true;
            this.comItems[0].initData(this.currBookInfo, true, true, false, this.onTouchWeaponItem);
            this.comItems[1].node.active = false;
            this.arrowNode.active = false;
        }
        this.describeRichtext.string = LangMgr.getLab(this.currBookInfo.bookStarTable.BookDescription);
        this.updateBtnState();
        this.starItem.showStar(this.currBookInfo.star);
        // this.gotoBtnNode.active = !this.currBookInfo.isLock;


    }
    initStudyView() {
        this.studyLevelUpNode.getChildByName("broke_btn").getComponent(Button).interactable = true
        this.detailNode.active = false;
        this.studyNode.active = true;
        this.comprehendNode.active = false;
        if (!this.studyComItems) {
            this.studyComItems = [];
        }
        this.bookSmallItem.initView(this.currBookInfo, true)
        this.describeRichtext2.string = LangMgr.getLab(this.currBookInfo.bookStarTable.BookDescription);
        if (!this.currBookInfo.isLevelLimit()) {
            this.studyLevelUpNode.active = true;
            this.studyMaxLevelNode.active = false;
            this.studyLimitLevelNode.active = false;
            let nextLevel = this.currBookInfo.level + 1;
            let nextLavelTable = RareBookData.ins.getBookLevelTable(this.currBookInfo.bookTable.Aptitude, this.currBookInfo.bookTable.Class, nextLevel)
            this.nextLevelTable = nextLavelTable;
            if (nextLavelTable) {
                let attrMap = this.currBookInfo.attrMap;
                let nextAttrMap = this.currBookInfo.getAttrMapByLevelRatio(nextLavelTable.Ratio);
                let index = 0;
                this.hideArrtItem();
                attrMap.forEach((value, key) => {
                    let item = this.creatorItem(index);
                    item.initView(key, value, nextAttrMap.get(key));
                    index++;
                });

                index = 0;
                for (let key in nextLavelTable.MaterialIdList) {
                    let id = nextLavelTable.MaterialIdList[key];
                    let num = nextLavelTable.MaterialCountList[key];
                    let info = new ItemInfo();
                    let currNum = ItemData.ins.getCount(id);
                    info.initItemData(id, currNum);
                    if (info.itemTable.Type == tab.ItemType.ItemType_Currency) {
                        this.consumeResourceItem.initData(id, num);
                    } else {
                        info.needNum = num;
                        if (!this.studyComItems[index]) {
                            let item = ItemPoolMgr.ins.createItem(info, this.stuffLayout, true, true,);
                            this.studyComItems.push(item.getComponent(CommonItem));
                        } else {
                            this.studyComItems[index].initData(info, true, true);
                        }

                        index++;

                    }


                }

            } else {
                let attrMap = this.currBookInfo.attrMap;
                let index = 0;
                this.hideArrtItem();
                attrMap.forEach((value, key) => {
                    let item = this.creatorItem(index);
                    item.initView(key, value, -1);
                    index++;
                });
                //满级状态
                this.studyLevelUpNode.active = false;
                this.studyMaxLevelNode.active = false;
                this.studyLimitLevelNode.active = true;
            }
        } else {
            let attrMap = this.currBookInfo.attrMap;
            let index = 0;
            this.hideArrtItem();
            attrMap.forEach((value, key) => {
                let item = this.creatorItem(index);
                item.initView(key, value, -1);
                index++;
            });
            //等级上限
            this.nextLevelTable = null;
            this.studyLevelUpNode.active = false;
            this.studyMaxLevelNode.active = true;
            this.studyLimitLevelNode.active = false;
        }

    }

    updateBtnState() {
        if (this.currBookInfo.isLock) {
            this.gotoBtnNode.active = false;
            this.activateBtnNode.active = false;
        } else {
            if (this.currBookInfo.isCanActivate()) {
                this.activateBtnNode.active = true;
                this.gotoBtnNode.active = false;
            } else {
                this.gotoBtnNode.active = true;
                this.activateBtnNode.active = false;
            }
        }


    }

    initComprehendView() {
        this.detailNode.active = false;
        this.studyNode.active = false;
        this.comprehendNode.active = true;
        if (!this.comprehendItems) {
            this.comprehendItems = [];
        }
        this.bookSmallItem2.initView(this.currBookInfo, true)
        if (!this.currBookInfo.isMaxStar()) {
            let nextStar = this.currBookInfo.star + 1;
            let nextStarTable = RareBookData.ins.getBoolStarTable(this.currBookInfo.itemId, nextStar)
            if (nextStarTable) {
                this.comprehendLevelUpNode.active = true;
                this.comprehendMaxLevelNode.active = false;
                this.nextStarNode.active = true;
                this.starArrowNode.active = true;
                this.nowStar.showStar(this.currBookInfo.star);
                this.nextStar.showStar(nextStar);
                let attrMap = this.currBookInfo.attrMap;
                let ratio = this.currBookInfo.bookLevelTable ? this.currBookInfo.bookLevelTable.Ratio : 0
                let nextAttrMap = this.currBookInfo.getAttrMapByLevelRatio(ratio, nextStarTable.AttrType, nextStarTable.AttrValue);
                let index = 0;
                this.hideArrtItem();
                attrMap.forEach((value, key) => {
                    let item = this.creatorItem(index);
                    item.initView(key, value, nextAttrMap.get(key));
                    index++;
                });

                for (let key in this.comprehendItems) {
                    this.comprehendItems[key].node.active = false;
                }
                index = 0;
                let totoal: number = 0;
                let isConsumeOther = this.currBookInfo.itemTable.Quality >= tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality;
                // for (let key in nextStarTable.MaterialIdList) {
                let id = this.currBookInfo.bookStarTable.MaterialIdList[index];
                let num = this.currBookInfo.bookStarTable.MaterialCountList[index];
                let info = new ItemInfo();
                let currNum = Number(ItemData.ins.getCount(id));
                info.initItemData(id, currNum);
                if (!this.comprehendItems[index]) {
                    let item = ItemPoolMgr.ins.createItem(info, this.stuffLayout2);
                    item.parent = this.stuffLayout2;
                    this.comprehendItems.push(item.getComponent(CommonItem));
                } else {
                    this.comprehendItems[index].node.active = true;
                    // this.comprehendItems[index].initData(info, true,true);
                }
                if (currNum > num) {
                    info.needNum = num;
                    info.num = num;
                } else {
                    if (isConsumeOther) {
                        info.needNum = currNum;
                        info.num = currNum;
                    } else {
                        info.needNum = num;
                        info.num = currNum;
                    }

                }
                this.comprehendItems[index].initData(info, true, true);
                this.comprehendItems[index].hideConsumeFenMu();
                totoal += currNum;

                // if(this.currBookInfo.)

                this.describeRichtext3.string = LangMgr.getLab(nextStarTable.Description);
                if (this.currBookInfo.itemTable.Quality >= tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality && totoal < num) {
                    index++;
                    let itemId = tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
                    let info = new ItemInfo();
                    let currNum2 = Number(ItemData.ins.getCount(itemId));
                    info.initItemData(itemId, currNum2);
                    if (!this.comprehendItems[index]) {
                        let item = ItemPoolMgr.ins.createItem(info, this.stuffLayout2, true);
                        item.parent = this.stuffLayout2;
                        this.comprehendItems.push(item.getComponent(CommonItem));
                    } else {
                        this.comprehendItems[index].node.active = true;

                    }
                    info.needNum = num - currNum;
                    if (info.needNum <= currNum2) {
                        info.num = info.needNum;
                    } else {
                        info.num = currNum2;
                    }
                    this.comprehendItems[index].initData(info, true, true);
                    this.comprehendItems[index].hideConsumeFenMu();
                    totoal += currNum2;
                }

                this.comprehendHaveLab.string = totoal + "";
                this.comprehendNeedLab.string = num + "";
                let cStr = ""
                if (totoal >= num) {
                    cStr = tab.getData().GetKeyValue_ConfigTable().InterfaceTxtGreen;

                } else {
                    cStr = tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
                }
                this.comprehendHaveLab.color = new Color().fromHEX(cStr);
                // index++;
                // }
            }
            this.nextStarTable = nextStarTable;
        } else {
            this.nowStar.showStar(this.currBookInfo.star);
            this.nextStarNode.active = false;
            this.starArrowNode.active = false;
            this.comprehendLevelUpNode.active = false;
            this.comprehendMaxLevelNode.active = true;
            this.describeRichtext3.string = LangMgr.getLab(this.currBookInfo.bookStarTable.Description);
            //满级状态
            this.nextStarTable = null;
            let attrMap = this.currBookInfo.attrMap;
            let index = 0;
            this.hideArrtItem();
            attrMap.forEach((value, key) => {
                let item = this.creatorItem(index);
                item.initView(key, value, -1);
                index++;
            });
        }

    }
    private hideArrtItem() {
        for (let key in this.attrItems) {
            this.attrItems[key].node.active = false;
        }
    }
    creatorItem(index: number) {
        if (!this.attrItems[index]) {
            let node = instantiate(this.attrItemPrefab);
            node.parent = this.attributeNode;
            this.attrItems.push(node.getComponent(RareBookAttributeItem));
        }
        this.attrItems[index].node.active = true;
        return this.attrItems[index];

    }


    onClickToggle(event, tag) {
        tag = Number(tag);
        if (this.currBookInfo.isLock) {
            if (this.currTag != tag) {
                this.currTag = tag;
                this.setViewShowStage();
            }
        } else {
            if (tag != 1) {
                this.scheduleOnce(() => {
                    this.toggle.isChecked = true;
                })
                ShowTips(LangMgr.getLab("Tips_rarebook_1"))
                //ShowTips("获得后解锁")
            }
        }



    }
    onClickLeft() {
        this.currIndex--;
        if (this.currIndex < 0) {
            this.currIndex = this.bookInfos.length - 1;
        }
        this.initView();
    }
    onClickRight() {
        this.currIndex++;
        if (this.currIndex >= this.bookInfos.length) {
            this.currIndex = 0;
        }
        this.initView();
    }
    onClickGroppop() {
        UIMgr.ins.show({ viewName: ViewName.RareBookGroupPop, data: { "itemId": this.currBookInfo.itemId } })
    }

    onClickPreView() {
        UIMgr.ins.show({ viewName: ViewName.RareBookLevelPreviewPop, data: { "bookInfo": this.currBookInfo } })
    }
    onClickGotoBtn() {
        //ShowTips("前往寻经");
        ShowTips(LangMgr.getLab("ui_rarebook_11"));
    }
    /**
     * 点击升星
     */
    onClickUpStar() {
        if (this.currBookInfo.bookStarTable && !this.currBookInfo.isMaxStar()) {
            let id = this.currBookInfo.bookStarTable.MaterialIdList[0];
            let needNum = this.currBookInfo.bookStarTable.MaterialCountList[0];
            let currNum = Number(ItemData.ins.getCount(id));
            if (this.currBookInfo.itemTable.Quality >= tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality) {
                let itemId = tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
                let currNum2 = Number(ItemData.ins.getCount(itemId));
                currNum += currNum2;

            }
            if (needNum <= currNum) {
                RareBookControl.ins.requestUpgradeBookStar(this.currBookInfo.id);
            } else {
                ShowItemNotEnoughTips(id);
            }
        }

    }
    onClickStudy() {
        if (this.nextLevelTable) {
            let itemid = ItemData.ins.isItemsEnoughByList(this.nextLevelTable.MaterialIdList, this.nextLevelTable.MaterialCountList);
            if (itemid > 0) {
                if (itemid === tab.CurrencyType.CurrencyType_Gold){
                    ShowItemNotEnoughTips(tab.CurrencyType.CurrencyType_Gold);
                    UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": tab.CurrencyType.CurrencyType_Gold } })
                }else{
                    ShowItemNotEnoughTips(itemid);
                }
                return;
            }
            this.studyLevelUpNode.getChildByName("broke_btn").getComponent(Button).interactable = false
            RareBookControl.ins.requestUpgradeBookLevel(this.currBookInfo.id);
        }

    }

    onTouchWeaponItem(item: WeaponItem) {
        UIMgr.ins.show({ viewName: ViewName.RareBookInfoItemPop, data: { "bookInfo": item.info } });
    }
    onClickActivate() {
        RareBookControl.ins.requestCombineBookFragment(this.currBookInfo.fragmentTable.Id);
    }

    updateBookItemView() {
        this.bookItem.updateView();
    }


    on_s2c_CombineBookFragmentRsp(msg: proto.Msg_CombineBookFragmentRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            // if(this.currBookInfo.id==msg.bookId){
            this.updateBookItemView();
            this.updateBtnState();
            this.updateRed();
            // }
        }
    }
    on_s2c_UpgradeBookLevelRsp(msg: proto.Msg_UpgradeBookLevelRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // if(msg.error.code==proto.CommonErrorCode.Succeed){
        this.updateBookItemView();
        this.initStudyView();
        this.updateRed();
        // }
    }
    on_s2c_UpgradeBookStarRsp(msg: proto.Msg_UpgradeBookStarRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // if(msg.error.code==proto.CommonErrorCode.Succeed){
        this.updateBookItemView();
        this.initComprehendView();
        UIMgr.ins.show({ viewName: ViewName.StarUpPop, data: { "bookInfo": this.currBookInfo } })
        this.updateRed();
        // }
    }
    // protected onDestroy(): void {
    //     super.onDestroy();
    //     EventMgr.unTarget(this);
    // }

    updateRed() {
        // let isCanActivate=this.currBookInfo.isCanActivate();
        this.redPoints[0].active = false;
        let isCanLevel = this.currBookInfo.isLock && this.currBookInfo.isCanStudy;
        let isCanStar = this.currBookInfo.isLock && this.currBookInfo.isCanUpStar;
        this.redPoints[1].active = isCanLevel;
        this.redPoints[2].active = isCanStar;
        this.redPoints[3].active = isCanLevel;
        this.redPoints[4].active = isCanStar;
    }
    protected onDisable(): void {
        this.starItem.onDisable();
        this.nextStar.onDisable();
        this.nowStar.onDisable();
    }
}