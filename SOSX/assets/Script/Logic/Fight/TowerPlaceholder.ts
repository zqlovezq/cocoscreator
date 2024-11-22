import { tab } from "../../Table/table_gen";
import Tower from "./Tower";

export default class TowerPlaceholder extends Tower  {
    public static create(cardId:number, level:number) {
        let node = new cc.Node;
        let instace = node.addComponent(TowerPlaceholder);
        instace.init(cardId, level);
        return instace;
    }

    public init(cardId:number, level:number) {
        this.cardId = cardId;
        this.level = level
        this.cardTable = tab.Data.CardTableByID.getValue(cardId);
    }
}