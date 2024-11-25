import { _decorator, Component, EventTouch, Node } from 'cc';
import { RecruitLimitView } from './RecruitLimitView';
import { ActivityData } from '../activity/ActivityData';
const { ccclass, property } = _decorator;

@ccclass('RecruitLimitToggleItem')
export class RecruitLimitToggleItem extends Component {
    private _actIndex:number = 0;
    private _mainView:RecruitLimitView = null;
    setData(actIndex:number,mainView:RecruitLimitView) {
        this._actIndex = actIndex;
        this._mainView = mainView;
        const actInfos = ActivityData.ins.getAllUpData();
        const curInfo = actInfos[actIndex];
        // const activityInfo = tab.getData().ActivityTableByActivityId.getValue(this._acitivtyId);
        // this.lbl_name.string = LangMgr.getLab(activityInfo.WordKey);
        // this.lbl_name_1.string = LangMgr.getLab(activityInfo.WordKey);
        // if(this._acitivtyId===this._mainView.curActivityId){
        //     this.toggle_node.isChecked = true;
        // }

        // let com= this.red_dot.addComponent(RedComp);
        // com.redNode=this.red_dot;
        // let evet=new RedEventComp();

        // if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_BattlePassSignIn1){
        //     evet.event = RedDotType.Combine_Pass;
        // }else if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_ActivityHeroGrow){
        //     evet.event = RedDotType.Combine_Grow;
        // }
        // else if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_ActivityMall){
        //     evet.event = RedDotType.Combine_Shop;
        // }
        // evet.child = String(mainView.openData);
        // com.types.push(evet);
        // com.addRed();
    }
    onClickCheck(e:EventTouch,type:string){
        if(this._actIndex===this._mainView.curIndex){
            return;
        }
        this._mainView.switchView(this._actIndex)
    }
}


