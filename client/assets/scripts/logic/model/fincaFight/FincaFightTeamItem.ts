import { _decorator, Component, Label, Node, sp } from 'cc';
import { FincaFightTeamState } from '../../../Common/script/EnumTypeMgr';
import { createAnimation } from '../../utils/GameUtil';
import { FincaFightData } from './FincaFightData';
import { HeroData } from '../hero/HeroData';
import { HeroInfo } from '../hero/HeroInfo';
import { ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('FincaFightTeamItem')
export class FincaFightTeamItem extends Component {
    private emptyNode: Node = null;
    private lockNode: Node = null;
    private heroNode: Node = null;
    private heroSpine: Node = null;
    private heroInfo: HeroInfo = null;

    private curIndex:number = 0;
    setData(index: number) {
        this.curIndex = index;
        let heroId = FincaFightData.ins.heroIds[index];
        this.heroInfo = HeroData.ins.getById(heroId);
        this.emptyNode = this.node.getChildByName("empty_node");
        this.lockNode = this.node.getChildByName("lock_node");
        this.heroNode = this.node.getChildByName("common_node");
        this.heroSpine = this.heroNode.getChildByName("hero_spine");

        const state = FincaFightData.ins.getState(index + 1);
        this.refreshItemState(state);
        if (state === FincaFightTeamState.HERO) {
            createAnimation(this.heroSpine, this.heroInfo.heroTable.Born, this.heroInfo.heroTable.Idle);
        }
    }
    refreshItemState(state: FincaFightTeamState) {
        this.emptyNode.active = state === FincaFightTeamState.EMPTY;
        this.lockNode.active = state === FincaFightTeamState.LOCK;
        this.heroNode.active = state === FincaFightTeamState.HERO;
    }
    onClickLockBtn(){
        const level = FincaFightData.ins.getUnLockLevel(this.curIndex+1,true);
        ShowTips(LangMgr.getCombineString("Tips_finca_3",[level]))
    }
}


