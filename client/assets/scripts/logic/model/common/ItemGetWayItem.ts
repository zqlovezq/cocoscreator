import { _decorator, Component, Label, Node } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
const { ccclass, property } = _decorator;

@ccclass('ItemGetWayItem')
export class ItemGetWayItem extends Component {
    @property(Label)
    lbl_way: Label = null;
    private openTab:tab.OpenFunctionTable = null;
    initData(opName: tab.OpenFunctionName) {
        this.openTab = tab.getData().OpenFunctionTableByName.getValue(opName);
        const str = LangMgr.getLab(tab.OpenFunctionName[opName]);
        this.lbl_way.string = str;
    }
    onClickGotoBtn() {
        if (this.openTab.JumpUI) {
            UIMgr.ins.hideView("ItemGetWayPop");
            UIMgr.ins.jumpLayer(this.openTab.JumpUI,0,null,this.openTab.Name,this.openTab.JumpParam);
        }
    }
}


