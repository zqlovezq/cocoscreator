import { _decorator, Component, log, Node, TangentWeightMode } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { CommonItem } from '../item/CommonItem';
import { EquipData } from './EquipData';
import { EquipInfo } from './EquipInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { ItemInfo } from '../item/ItemInfo';
import { GameUtil } from '../../utils/GameUtil';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { EquipControl } from './EquipControl';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { EquipmentItem } from '../item/EquipmentItem';
const { ccclass, property } = _decorator;

@ccclass('EquipResolvePop')
export class EquipResolvePop extends ViewPop {
    @property(Node)
    equipNode: Node = null;
    @property(Node)
    jadeNode: Node = null;


    @property(Node)
    positionNode: Node = null;
    @property(Node)
    qualityNode: Node = null;
    @property(Node)
    contentNode: Node = null;

    @property(Node)
    resolveContentNode: Node = null;

    private currEquipItem: Array<EquipmentItem>;
    private currSelectEquips: Array<EquipInfo>;
    private currResolveItems: Array<CommonItem>;

    private currPostion: number = 0;
    private currQuality: number = 0;
    private currTag: number=1;

    register(): void {
        this.currSelectEquips = [];
        this.currEquipItem = [];
        EventMgr.onMsg(proto.Ptl.DecomposeEquipRsp, this.on_s2c_DecomposeEquipRsp, this)
    }
    start(): void {
        if(this.openData&&this.openData["tag"]){
            this.currTag=this.openData["tag"];
        }
        this.initView();

    }
    private initView(){
     
        if(this.currTag==1){
            this.initEquipItem();
            this.equipNode.active=true;
            this.jadeNode.active=false;
        }else{
            this.equipNode.active=false;
            this.jadeNode.active=true;
            this.initJadeItem();
        }
    }
    initEquipItem() {
        this.clearResolveItem();
        this.removeComItem();
        this.currSelectEquips = [];
        let allEquips = EquipData.ins.getEquips();
        let currEquips: Array<EquipInfo> = [];
        for (let value of allEquips) {
            if (!value.isWear&&value.itemTable.BagType==tab.BagType.BagType_Equip) {
                if (this.currPostion == 0 || this.currPostion == value.equipTable.Type) {
                    if (this.currQuality == 0 || value.quality <= this.currQuality) {
                        currEquips.push(value);
                    }
                }
            }
        }
        currEquips.sort((a, b) => {
            return a.quality - b.quality;
        })
        for (let key in currEquips) {
            let node = ItemPoolMgr.ins.createEquipItem(currEquips[key],this.contentNode);
            let com = node.getComponent(EquipmentItem);
            com.setTouchCallBack(this.onTouchItem.bind(this));
            this.currEquipItem.push(com);

        }
    }
    initJadeItem() {
       this.clearResolveItem();
        this.removeComItem();
        this.currSelectEquips = [];
        let allEquips = EquipData.ins.getEquips();
        let currEquips: Array<EquipInfo> = [];
        for (let value of allEquips) {
            if (!value.isWear&&value.itemTable.BagType==tab.BagType.BagType_Jade&&!value.locked) {
                {
                    if (this.currQuality == 0 || value.quality == this.currQuality) {
                        currEquips.push(value);
                    }
                }
            }
        }
        currEquips.sort((a, b) => {
            return a.quality - b.quality;
        })
        for (let key in currEquips) {
            let node = ItemPoolMgr.ins.createEquipItem(currEquips[key],this.contentNode);
            let com = node.getComponent(EquipmentItem);
            com.setTouchCallBack(this.onTouchItem.bind(this));
            this.currEquipItem.push(com);

        }
    }
    onTouchItem(comItem: CommonItem) {
        let b = !comItem.isSelectState;
        comItem.setSelectState(b);
        if (b) {
            this.currSelectEquips.push(comItem.equipInfo)
        } else {
            let index = this.currSelectEquips.indexOf(comItem.equipInfo);
            if (index >= 0) {
                this.currSelectEquips.splice(index, 1);
            }
        }
        this.updateResolveItems();
    }
    onClickPosition(event, type) {
        let position = Number(type);
        if (this.currPostion != position) {
            this.currPostion = position;
            this.initEquipItem();
        }
        this.positionNode.active = false;

    }
    onClickQuality(event, type) {
        let quality = Number(type);
        if (this.currQuality != quality) {
            this.currQuality = quality;
            this.initEquipItem();
        }
        this.qualityNode.active = false;

    }
    onClickPositionBtn() {
        this.positionNode.active = !this.positionNode.active;
    }
    onClickQualityBtn() {
        this.qualityNode.active = !this.qualityNode.active;
    }
    onClickOneSelect() {
        this.currSelectEquips = [];
        for (let key in this.currEquipItem) {
            this.currEquipItem[key].setSelectState(true);
            this.currSelectEquips.push(this.currEquipItem[key].equipInfo);
        }
        this.updateResolveItems();

    }
    onClickResolve() {
        let ids = [];
        for (let key in this.currSelectEquips) {
            ids.push(this.currSelectEquips[key].id);
        }
        if(ids.length>0){
            EquipControl.ins.reqDecomposeEquips(ids);
        }
        

    }
    private removeComItem() {
        for (let key in this.currEquipItem) {
            ItemPoolMgr.ins.putEquipItem(this.currEquipItem[key].node)
        }
        this.currEquipItem = [];
    }

    updateResolveItems() {


        this.clearResolveItem();

        let rewards: Array<ItemInfo> = [];
        for (let key in this.currSelectEquips) {
            let equipInfo = this.currSelectEquips[key];
            let rews = GameUtil.convertRewardsByList(equipInfo.equipTable.Materials);
            for (let value of rews) {
                let item = rewards.find((a) => a.itemId === value.itemId);
                if (item) {
                    item.num += value.num;
                } else {
                    item = new ItemInfo();
                    item.initItemData(value.itemId, value.num);
                    rewards.push(item);
                }
            }
        }

        for (let value of rewards) {
            let node = ItemPoolMgr.ins.createItem(value,this.resolveContentNode,false,false);
            let com = node.getComponent(CommonItem);
            // com.setIsTouchItem(false);
            this.currResolveItems.push(com);
        }

    }
    private clearResolveItem() {
        for (let key in this.currResolveItems) {
            ItemPoolMgr.ins.putCommonItem(this.currResolveItems[key].node)
        }
        this.currResolveItems = [];
    }
    protected onDisable(): void {
        this.removeComItem();
        this.clearResolveItem();
    }
    /**
   * 分解装备成功
   * @param msg 
   */
    on_s2c_DecomposeEquipRsp(msg: proto.Msg_DecomposeEquipRsp) {

        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            // EquipData.ins.removeEquipByIds(msg.equipList);
            this.clearResolveItem();
            this.initEquipItem();
            log("收到分解成功消息")
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.items })
        }
        // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);
    }
    protected onDestroy(): void {
        EventMgr.unTarget(this);
    }
    public onToggle(event,type){
        if(this.currTag!=Number(type)){
            this.currTag=Number(type);
            this.initView();
        }
    }
    onJadeToggle(event, type: number) {
        if (this.currQuality != Number(type)) {
            this.currQuality = Number(type);
            this.initJadeItem();
        }
    }

}


