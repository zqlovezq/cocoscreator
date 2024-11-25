import { _decorator } from "cc";
import { IClear } from "../../../framework/base/IAbs";
import { HeroInfo } from "../../model/hero/HeroInfo";

const { ccclass, property } = _decorator;

/** 战斗角色数据 */
export class FightHeroInfo {
    heroInfo: HeroInfo
    level: number = 0;
    intoIndex: number = 0
}