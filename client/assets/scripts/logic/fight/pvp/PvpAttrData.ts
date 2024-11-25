import { _decorator, js, math } from "cc";
import { proto } from "client_protocol";
import { FightAttrData } from "../data/FightAttrData";


const { ccclass, property } = _decorator;

/** 战斗角色属性数据 */
export class PvpAttrData extends FightAttrData {
    setData(updateHP: proto.IFightFlowUpdateHP) {
        this.hp = updateHP.hp
        this.maxHp = updateHP.maxHp
        this.shield = updateHP.sheild
        this.maxShield = updateHP.maxShield
    }

}