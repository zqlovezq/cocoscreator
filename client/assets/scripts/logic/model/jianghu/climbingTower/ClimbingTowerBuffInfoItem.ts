import { _decorator, Component, Label, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
 * ClimbingTowerBuffInfoItem
 * zhudingchao
 * Thu Jul 11 2024 17:08:40 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerBuffInfoItem.ts
 *
 */

@ccclass('ClimbingTowerBuffInfoItem')
export class ClimbingTowerBuffInfoItem extends Component {
   @property(Sprite)
   buffIcon:Sprite=null;
   @property(Label)
   buffInfoLab:Label=null;
}