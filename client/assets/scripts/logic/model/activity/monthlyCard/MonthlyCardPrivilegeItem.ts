import { _decorator, Component, Node, RichText } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
 * MonthlyCardPrivilegeItem
 * zhudingchao
 * Mon Jul 01 2024 16:54:59 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/monthlyCard/MonthlyCardPrivilegeItem.ts
 *
 */

@ccclass('MonthlyCardPrivilegeItem')
export class MonthlyCardPrivilegeItem extends Component {
   @property(Node)
   bgNode:Node=null;
   @property(Node)
   vipNode:Node=null;
   @property(RichText)
   richtext1:RichText=null;
   @property(RichText)
   richtext2:RichText=null;
}