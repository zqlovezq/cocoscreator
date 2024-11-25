import { _decorator, Component, Label, Node } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { BattlePassItem } from './BattlePassItem';
import { LangMgr } from '../../../mgr/LangMgr';
import RedComp from '../../../../Common/component/RedComp';
import RedEventComp from '../../../../Common/component/RedEventComp';
import { RedDotType } from '../../../red/RedDotType';
import { RedMgr } from '../../../mgr/RedMgr';
const { ccclass, property } = _decorator;

@ccclass('BattlePassChildToggleItem')
export class BattlePassChildToggleItem extends Component {
    @property(Label)
    lbl_name_1:Label = null;
    @property(Label)
    lbl_name_2:Label = null;
    @property(Node)
    node_red:Node = null;
    private _mainView:BattlePassItem = null;
    private _passTab:tab.BattlePassTable = null;

    initData(table:tab.BattlePassTable,view:BattlePassItem){
        this._passTab = table;
        this._mainView = view;
        const openName =LangMgr.getLab(tab.OpenFunctionName[table.OpenFunction]);
        this.lbl_name_1.string = openName;
        this.lbl_name_2.string = openName;
        this.refreshRed();
        // const redCompTs = this.node_red.addComponent(RedComp);
        // redCompTs.redNode = this.node_red;
        // const evet:RedEventComp = new RedEventComp();
        // evet.event = RedDotType.Battle_Pass;
        // evet.child = String(this._passTab.BattlePassTab);
        // evet.child1 = String(this._passTab.Id);
        // redCompTs.types.push(evet);
        // redCompTs.addRed();
        // console.log(this.node_red);
    }
    refreshRed(){
        this.node_red.active = RedMgr.ins.isRed(RedDotType.Battle_Pass,String(this._passTab.BattlePassTab),String(this._passTab.Id));
    }
    checkToggleItem(){
        this._mainView.switchView(this._passTab.Id);
    }
}


