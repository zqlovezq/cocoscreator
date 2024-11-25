import { _decorator, Component, Label, Node, ProgressBar, Sprite } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ActivityData } from '../ActivityData';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { PayControl } from '../../pay/PayControl';
import { ShowTips } from '../../../mgr/UIMgr';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * CrazyChickenPop
 * zhudingchao
 * Wed Jun 19 2024 16:38:41 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/crazyChicken/CrazyChickenPop.ts
 *
 */

@ccclass('CrazyChickenPop')
export class CrazyChickenPop extends ViewPop {
    @property(ProgressBar)
    proBar: ProgressBar = null;
    @property(Label)
    proLab:Label=null;
    @property(Label)
    leftNumLab:Label=null;
    @property(Label)
    rightNumLab:Label=null;
    @property(Label)
    priceLab:Label=null;
    @property(Sprite)
    buyBtnSpr:Sprite=null;
    private rechargeId:number=0;
    private isCanBuy:boolean=false;
    register(): void {

    }
    onShow(): void {
        this.initView();

    }
    initView(){
        let msg=ActivityData.ins.breakEggMsg;
        let table=tab.getData().BreakEggTableById.getValue(msg.id);
        this.rightNumLab.string=table.MaxScore+"";
        this.leftNumLab.string="0";
    
        if(msg.score>=table.MaxScore){
            this.proBar.progress=1;
            this.isCanBuy=true;
            this.proLab.string=table.MaxScore+"";
        }else{
            this.proBar.progress=msg.score/table.MaxScore;
            this.proLab.string=msg.score+"";
            this.isCanBuy=false;
        }
        this.buyBtnSpr.grayscale=!this.isCanBuy;
        let rechargeTable=tab.getData().RechargeTableById.getValue(table.RechargeId);
        this.priceLab.string=ChannelMgr.getSdkRechargeShowPrice(rechargeTable);//LangMgr.getCombineString("ui_commondesc_73",[rechargeTable.Price]);
        this.rechargeId=table.RechargeId;
    }
    onClickBuy(){
        if(!this.isCanBuy){
            //ShowTips("进度不足，进度满后可正常购买")
            ShowTips(LangMgr.getLab("Tips_crazychicken_1"))
            return;
        }
        if(this.rechargeId>0){
            PayControl.ins.requestPay(this.rechargeId,()=>{
                this.onClose();
            })
        }
    }
}