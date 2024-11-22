import { proto } from "../../Protocol/client_protocol";
import Tower from "./Tower";

export default class RangeAtkData {
    enemy:Tower;
    damage: number;
    isCritical:boolean;
    buff:proto.IEnemyBuffData;
    skillID:number;
}