import { _decorator, Component, EventTouch, Label, Node, Toggle } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { CombineActivityMainView } from './CombineActivityMainView';
import { LangMgr } from '../../../mgr/LangMgr';
import RedComp from '../../../../Common/component/RedComp';
import RedEventComp from '../../../../Common/component/RedEventComp';
import { RedDotType } from '../../../red/RedDotType';
import { RedMgr } from '../../../mgr/RedMgr';
const { ccclass, property } = _decorator;

@ccclass('CombineToggleItem')
export class CombineToggleItem extends Component {
    @property(Label)
    lbl_name:Label = null;
    @property(Label)
    lbl_name_1:Label = null;
    @property(Toggle)
    toggle_node:Toggle = null;
    @property(Node)
    red_dot:Node = null;
    private _acitivtyId:number = 0;
    private _mainView:CombineActivityMainView = null;
    setData(activityId:number,mainView:CombineActivityMainView) {
        this._acitivtyId = activityId;
        this._mainView = mainView;
        const activityInfo = tab.getData().ActivityTableByActivityId.getValue(this._acitivtyId);
        this.lbl_name.string = LangMgr.getLab(activityInfo.WordKey);
        this.lbl_name_1.string = LangMgr.getLab(activityInfo.WordKey);
        if(this._acitivtyId===this._mainView.curActivityId){
            this.toggle_node.isChecked = true;
        }

        let com= this.red_dot.addComponent(RedComp);
        com.redNode=this.red_dot;
        let evet=new RedEventComp();

        if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_BattlePassSignIn1){
            evet.event = RedDotType.Combine_Pass;
        }else if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_ActivityHeroGrow){
            evet.event = RedDotType.Combine_Grow;
        }
        else if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_ActivityMall){
            evet.event = RedDotType.Combine_Shop;
        }else if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge){
            evet.event = RedDotType.Combine_Recharge;
        }
        evet.child = String(mainView.openData);
        com.types.push(evet);
        com.addRed();
    }
    onClickCheck(e:EventTouch,type:string){
        if(this._acitivtyId===this._mainView.curActivityId){
            return;
        }
        this._mainView.switchView(this._acitivtyId)
    }
}


