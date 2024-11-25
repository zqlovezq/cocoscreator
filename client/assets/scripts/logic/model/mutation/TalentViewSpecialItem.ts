import { _decorator, Component, Node, ProgressBar } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { Func } from '../../utils/Func';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('TalentViewSpecialItem')
export class TalentViewSpecialItem extends InfiniteCell {
    @property(ProgressBar)
    bar_progress:ProgressBar = null;
    UpdateContent(data: any): void {
        console.log(data);
        Func.cocosNodeZIndex(this.node, -1);
        this.bar_progress.progress = RoleData.ins.gene.bigGeneLevel?1:0
    }
}


