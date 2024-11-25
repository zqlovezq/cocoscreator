import { _decorator, Component, Node, Prefab } from "cc";
import { FightRoleTeamItem } from "./FightRoleTeamItem";
import { FightRootControl } from "../../FightRootControl";
import { PlayerControl } from "../../base/obj/role/role/PlayerControl";
import { HeroFightInfo } from "../../data/HeroFightInfo";
import { ViewName } from "../../../define/ViewDefine";
import { UIMgr } from "../../../mgr/UIMgr";
import { HeroDataControl } from "../../../model/hero/herobag/HeroDataControl";

const { ccclass, property } = _decorator;

@ccclass('FightRoleTeam')
export class FightRoleTeam extends Component {
    @property(Node)
    team_layout: Node = null

    items: FightRoleTeamItem[] = [];

    protected onLoad(): void {
        for (let index = 0; index < this.team_layout.children.length; index++) {
            const v = this.team_layout.children[index];
            this.items.push(v.getComponent(FightRoleTeamItem));
        }
    }

    refresh(isTouch = false) {
        let list = PlayerControl.ins.getIntoHeros()

        for (let index = 0; index < this.items.length; index++) {
            let head = this.items[index];
            let role = list[index];
            head.setData(role, isTouch)
        }
    }
    setHeros(heros: HeroFightInfo[], isTouch = false) {
        for (let index = 0; index < this.items.length; index++) {
            let head = this.items[index];
            let role = heros[index];
            head.setData(role, isTouch)
            head.setCallback((hero: HeroFightInfo) => {
                HeroDataControl.ins.refreshBookData(hero.itemId);
                UIMgr.ins.show({ viewName: ViewName.HeroBagView, data: { viewType: 2 }, zIndex: 300 })
            })
        }
    }




}