import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { WeaponInfoItem } from '../common/WeaponInfoItem';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookInfoItemPop
 * zhudingchao
 * Wed May 29 2024 10:58:13 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookInfoItemPop.ts
 *
 */

@ccclass('RareBookInfoItemPop')
export class RareBookInfoItemPop extends ViewPop {
    @property(WeaponInfoItem)
    weaponItem:WeaponInfoItem=null;
    register(): void {
        
    }
    onShow(): void {
        let bookInfo=this.openData["bookInfo"];
        if(bookInfo){
            this.weaponItem.initData(bookInfo);
        }
    }
}