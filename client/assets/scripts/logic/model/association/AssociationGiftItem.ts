import { _decorator, Component, Label, Node } from 'cc';
import { proto } from 'client_protocol';
const { ccclass, property } = _decorator;

@ccclass('AssociationGiftItem')
export class AssociationGiftItem extends Component {
    @property(Label)
    lbl_name:Label = null;
    @property(Label)
    lbl_price:Label = null;
    initData(data:proto.IBargainRecord){
        this.lbl_name.string = data.roleName;
        this.lbl_price.string = String(data.bargainNum);
    }
}


