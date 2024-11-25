import { _decorator, Component, Node, RichText } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
 * VipPrivilegeItem
 * zhudingchao
 * Wed Jul 03 2024 09:45:09 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/vip/VipPrivilegeItem.ts
 *
 */

@ccclass('VipPrivilegeItem')
export class VipPrivilegeItem extends Component {
  @property(Node)
  upNode:Node=null;
  @property(Node)
  newNode:Node=null;
  @property(RichText)
  richtex:RichText=null;
 
}