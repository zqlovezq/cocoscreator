import { _decorator, Component, log, Node } from 'cc';
import { WeaponItem } from '../common/WeaponItem';
import { RareBookInfo } from '../rareBook/RareBookInfo';
import { LocalEvent } from '../../define/LocalEvent';
import { EventMgr } from '../../mgr/EventMgr';
import { FincaFightData } from './FincaFightData';
const { ccclass, property } = _decorator;

@ccclass('FincaFightStageWeaponItem')
export class FincaFightStageWeaponItem extends Component {
    @property(WeaponItem)
    item_weapon:WeaponItem = null;
    @property(Node)
    node_select_1:Node = null;
    @property(Node)
    node_select:Node = null;
    private bookInfo:RareBookInfo = null;
    initData(info:RareBookInfo){
        this.bookInfo = info;
        // info.isLock = true;
        this.node.name = String(this.bookInfo.itemId);
        this.item_weapon.initData(info, true, false, false, this.onTouchItem.bind(this));
        const inTeam = FincaFightData.ins.getBookInTeam(this.bookInfo.itemId);
        this.node_select.active = inTeam>-1;
        this.setSelectCircle(this.bookInfo.itemId === FincaFightData.ins.curSelectBook);
    }
    onTouchItem(){
        this.changeSelect();
        FincaFightData.ins.curSelectBook = this.bookInfo.itemId;
        const index = FincaFightData.ins.BookToggleIndex;
        const teamIndex = FincaFightData.ins.getBookInTeam(this.bookInfo.itemId);
        // 点击的英雄是否在队伍中
        if (teamIndex>-1) {
            FincaFightData.ins.bookIds[teamIndex] = 0;
            EventMgr.emitLocal(LocalEvent.Finca_Book_Change,teamIndex+1);
        } else {
            // 判断不在队伍中的英雄是否可以替换
            FincaFightData.ins.bookIds[index - 1] = this.bookInfo.itemId;
            EventMgr.emitLocal(LocalEvent.Finca_Book_Change,index);
        }
        console.log(FincaFightData.ins.bookIds);
    }
    protected onDestroy(): void {
        this.node.targetOff(this);
    }
    changeSelect(){
        const node = this.node.parent.getChildByName(String(FincaFightData.ins.curSelectBook));
        if(node&&node.isValid){
            const itemTs = node.getComponent(FincaFightStageWeaponItem);
            if(itemTs&&itemTs.isValid){
                itemTs.setSelectCircle(false);
            }
        }
        this.setSelectCircle(true);   
    }
    setSelectCircle(isShow:boolean){
        this.node_select_1.active = isShow
    }
}


