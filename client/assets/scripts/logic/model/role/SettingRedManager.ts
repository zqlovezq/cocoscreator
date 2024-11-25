import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('SettingRedManager')
export class SettingRedManager extends AbsControl {
    private static _instance: SettingRedManager;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new SettingRedManager();
        }
        return this._instance;
    }
    private settings:{[key:string]:boolean} = {
        RedStamina:false,//打开购买体力界面
        GoldBuy:false,//打开购买金币界面
        GachaAds:false,//打开高抽界面
        TenGacha:false,//打开高抽界面
        TenBookGacha:false,//打开武器抽界面
    };
    public setSetting(key: string, value: boolean) {
        this.settings[key] = value;
        // 刷新红点
        RedMgr.refreshEvent(RedDotType[key]);
    }
    public getSetting(key:string):boolean{
        return this.settings[key]
    }
    public loadSettings(){
        for (let key in this.settings) {
            this.settings[key] = false;
        }
    }
    public resetLoadSetting(){
        for (let key in this.settings) {
            this.setSetting(key,false);
        }
    }
}


