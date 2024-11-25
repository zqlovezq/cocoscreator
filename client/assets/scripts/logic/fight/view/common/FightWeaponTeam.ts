import { _decorator, Component, Node, Prefab } from "cc";
import { PlayerControl } from "../../base/obj/role/role/PlayerControl";
import { FightWeaponTeamItem } from "./FightWeaponTeamItem";
import { RogueControl } from "../rogue/RogueControl";
import { FincaFightData } from "../../../model/fincaFight/FincaFightData";
import { tab } from "../../../../Table/table_gen";

const { ccclass, property } = _decorator;

@ccclass('FightWeaponTeam')
export class FightWeaponTeam extends Component {
    @property(Node)
    team_layout: Node = null

    items: FightWeaponTeamItem[] = [];

    books: number[] = [];
    protected onLoad(): void {
        for (let index = 0; index < this.team_layout.children.length; index++) {
            const v = this.team_layout.children[index];
            this.items.push(v.getComponent(FightWeaponTeamItem));
        }
    }

    refresh(isTouch = false) {
        let list = RogueControl.ins.getSelectWeapon()

        for (let index = 0; index < this.items.length; index++) {
            let head = this.items[index];
            let role = list[index];
            head.setData(role, isTouch)
        }
    }

    setBooks(books: number[], prestigeLevel: number) {
        this.books = books
        let _fincaFightTeamTab: tab.FincaFightTeam = FincaFightData.ins.getTeamTab(prestigeLevel || 1)
        for (let index = 0; index < this.items.length; index++) {
            let head = this.items[index];
            let bookId = this.books[index];
            head.setBookId((_fincaFightTeamTab.UnlockWeapon > index ? bookId || 0 : -1))
        }
    }

    activeBookIndex(index: number) {
        this.items[index] && this.items[index].activeBook()
    }


    setRogueIds(rogues: number[]) {
        for (let index = 0; index < this.items.length; index++) {
            let head = this.items[index];
            let rogueId = rogues[index]
            let rogueTab = tab.getData().RogueTableById.getValue(rogueId)
            head.setBookId(rogueTab ? rogueTab.BookId : 0)
            head.btn.enabled = true
            head.cdBar.progress = 0
        }
    }
}