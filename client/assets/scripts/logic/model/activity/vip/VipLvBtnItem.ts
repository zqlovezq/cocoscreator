import { _decorator, Component, Label, Node, TERRAIN_HEIGHT_BASE } from 'cc';
import { LangMgr } from '../../../mgr/LangMgr';
import { tab } from '../../../../Table/table_gen';
import RedComp from '../../../../Common/component/RedComp';
import RedEventComp from '../../../../Common/component/RedEventComp';
import { RedDotType } from '../../../red/RedDotType';
import { RedMgr } from '../../../mgr/RedMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * VipLvBtnItem
 * zhudingchao
 * Tue Jul 02 2024 15:56:49 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/vip/VipLvBtnItem.ts
 *
 */

@ccclass('VipLvBtnItem')
export class VipLvBtnItem extends Component {
    @property(Node)
    bgNode:Node=null;
    @property(Node)
    checkNode:Node=null;
    @property(Label)
    vipLab:Label=null;
    @property(Node)
    redPoint:Node=null;
    

    private callBack:Function;
    public vipTable:tab.VipTable;
    

    initView(vipTable:tab.VipTable,callBack:Function){
        this.vipTable=vipTable;
        this.vipLab.string=LangMgr.getCombineString("ui_vip_1",[this.vipTable.VipLv]);
        this.callBack=callBack;
        this.bgNode.active=true;
        this.checkNode.active=false;
        if(!this.redPoint.getComponent(RedComp)){
            let com=this.redPoint.addComponent(RedComp);
            com.redNode = this.redPoint;
            let type1: RedEventComp = new RedEventComp();
            type1.event = RedDotType.Vip_Buy;
            type1.child=vipTable.VipLv+"";
            com.types = [type1];
            com.addRed();
            // RedMgr.refreshEvent(RedDotType.Vip_Buy);
        }
    }
    protected onEnable(): void {
        if(this.vipTable){
            tab.DropTable
            this.vipLab.string=LangMgr.getCombineString("ui_vip_1",[this.vipTable.VipLv]);
        }
       
    }
    setSelectState(b:boolean){
        this.bgNode.active=!b;
        this.checkNode.active=b;
    }
    onClickItem(){
        if(this.callBack){
            this.callBack(this);
        }
    }
  
}