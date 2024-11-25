import { _decorator, Component, EventTouch, js, Label, Node, RichText, Toggle, UITransform } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { Func } from '../../utils/Func';
const { ccclass, property } = _decorator;

/** 关闭类型 */
export enum CommonTipsPopCloseType {
    cancel = 0,
    confirm = 1,
}

/** 通用确认弹窗 */
@ccclass('CommonTipsPop')
export class CommonTipsPop extends ViewPop {
    @property(Toggle)
    toggle_today:Toggle = null;
    @property(Toggle)
    toggle_forever:Toggle = null
    protected _callFunc: Function = null;
    private _param:any = null;
    /**
     * 打开通用弹窗
     * @param tipsKey 描述文字
     * @param callFunc 回调
     * @param param 可选参数
     */
    static async create(tipsKey: string, callFunc?: Function, param?: any) {
        await UIMgr.ins.show({ viewName: "CommonTipsPop" })
        let pop = UIMgr.ins.getViewScr("CommonTipsPop") as CommonTipsPop;
        if (pop) {
            pop.setData(tipsKey, callFunc, param)
        }
    }

    @property(RichText)
    info_txt: RichText = null;

    register() {

    }

    setData(tipsKey: string, callFunc?: Function, param?: any) {
        this._callFunc = callFunc;
        console.log(tipsKey)
        tipsKey = LangMgr.getLab(tipsKey)
        if (tipsKey.indexOf("<color=") == -1){
            tipsKey = js.formatStr("<color=#0000>%s</color>",tipsKey)
        }

        this.info_txt.string = tipsKey

        if(param&&param.gacha){
            this._param = param;
            this.toggle_today.node.parent.active = true;
            this.recordDismissTime();
        }
    }

    onClickCancel() {
        let _call =  this._callFunc
        this.close()
        _call && _call(CommonTipsPopCloseType.cancel)
    }

    onClickConfirm() {
        let _call =  this._callFunc
        this.close()
        _call && _call(CommonTipsPopCloseType.confirm)

        if(this._param&&this._param.gacha){
            const currentDate = new Date();
            const dismissTime = currentDate.toDateString();
            if(this.toggle_today.isChecked){
                Func.setItem("dismissTime"+this._param.gacha,dismissTime)
            }else{
                Func.setItem("dismissTime"+this._param.gacha,"")
            }
        }
    }
    onClose(): void {
        this.onClickCancel()
    }
    // 在弹窗中用户选贼不在提示时,记录当前时间
    recordDismissTime(){
        // const currentDate = new Date();
        // const dismissTime = currentDate.toDateString();
        // if(this.toggle_today.isChecked){
        //     Func.setItem("dismissTime"+this._param.gacha,dismissTime)
        // }else{
        //     Func.setItem("dismissTime"+this._param.gacha,"")
        // }
    }

}