import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { GameUtil, handleNumerText } from '../../../utils/GameUtil';

const { ccclass, property } = _decorator;

/**
 * 
 * TopWarHurtPop
 * zhudingchao
 * Wed Jul 10 2024 10:14:56 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/topWar/TopWarHurtPop.ts
 *
 */

@ccclass('TopWarHurtPop')
export class TopWarHurtPop extends ViewPop {
    @property(Label)
    damageLab:Label=null;
    register(): void {
        
    }
    onShow(): void {
        if(this.openData&&this.openData["maxDamage"]){
            this.damageLab.string=GameUtil.convertNumber(this.openData["maxDamage"]);
            
        }
    }
}