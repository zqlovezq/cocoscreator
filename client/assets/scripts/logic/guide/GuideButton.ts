import { _decorator, CCBoolean, CCInteger, Component, Node } from 'cc';
import { GuideController } from './GuideController';
import { RoleData } from '../model/role/RoleData';
import { FightData } from '../fight/data/FightData';
const { ccclass, property } = _decorator;

@ccclass('GuideButton')
export class GuideButton extends Component {
    @property({ type: CCBoolean})
    isInFight:Boolean = true;
    @property({type:CCBoolean})
    isBuff:Boolean = false;
    onLoad(): void {
        if(this.isBuff){
            this.node.active = FightData.ins.stageId > 103 
        }else{
            if(this.isInFight){
                this.node.active = RoleData.ins.IsGuideFinished()||FightData.ins.stageId > 101 
            }else{
                this.node.active = RoleData.ins.IsGuideFinished()
            }
        }
    }
}


