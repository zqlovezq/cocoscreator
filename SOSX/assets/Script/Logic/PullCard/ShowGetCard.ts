
import { proto } from "../../Protocol/client_protocol";
import charactor_four from "../Common/charactor_four";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShowGetCard extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.ScrollView)
    scrollCards : cc.ScrollView = null;

    //@property(cc.Layout)
    //layoutCards : cc.Layout = null;
   
    @property(cc.Node)
    layoutCards : cc.Node = null;

    @property(cc.Prefab)
    card4Pre:cc.Prefab = null;

    setCardDatas(cardDatas : proto.IItemData[]) { 
        let cardUUids : string[];
        for(let i = 0; i < cardDatas.length; i++){
            cardUUids.push(cardDatas[i].id);
            if(0 == (i % 4) || i == cardDatas.length - 1){
                let card4 = cc.instantiate(this.card4Pre).getComponent(charactor_four);
                card4.initData(cardUUids, null);
                this.layoutCards.addChild(card4.node);
            }
        }
    }

}
