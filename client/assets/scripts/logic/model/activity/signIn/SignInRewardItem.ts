import { _decorator, Component, Label, Node } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ItemInfo } from '../../item/ItemInfo';

const { ccclass, property } = _decorator;

/**
 * 
 * SignInRewardItem
 * zhudingchao
 * Thu Jun 20 2024 17:43:05 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/signIn/SignInRewardItem.ts
 *
 */

@ccclass('SignInRewardItem')
export class SignInRewardItem extends Component {
    @property(Node)
    rewardbgNode: Node = null;
    @property(Node)
    ordinarybgNode: Node = null;
    @property(Label)
    dayLab:Label=null;
    @property(Node)
    lockNode:Node=null;
    @property(Node)
    claimNode:Node=null;
    @property(Node)
    rewardNode:Node=null;
    @property(Node)
    signedNode:Node=null;
    private table:tab.DailyRewardItemTable;
    private touchCallBack:Function;
    private state:number;
    
    
    initView(table:tab.DailyRewardItemTable,state:number,touchCallBack:Function){
        if(this.dayLab){
            this.dayLab.string=LangMgr.getCombineString("ui_commondesc_72",[table.Index]);
        }
        this.table=table;
        let item=new ItemInfo();
        item.initItemData(table.ItemId,table.ItemCount);
        let comNode=ItemPoolMgr.ins.createRewadItem(item,this.rewardNode);
        this.updateState(state);
        this.touchCallBack=touchCallBack;
        this.updateState(state);
       
    }
    updateState(state:number){
        this.state=state;
        this.rewardbgNode.active=state==2;
        this.signedNode.active=state==2;
        this.ordinarybgNode.active=state==0||state==1;
        this.lockNode.active=state==0;
        this.claimNode.active=state==1;
     
    }
    onClickItem(){
        if(this.touchCallBack&&this.state==1){
            this.touchCallBack(this.table.Index)
        }

    }
  

}