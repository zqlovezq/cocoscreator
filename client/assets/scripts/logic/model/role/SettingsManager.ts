/*
 * @Date: 2024-07-15 09:49:54
 * @LastEditors: wzq
 * @program:设置界面开关控制管理
 * @LastEditTime: 2024-10-31 09:43:16
 */
import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { Func } from '../../utils/Func';
import { ActivityData } from '../activity/ActivityData';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('SettingsManager')
export class SettingsManager extends AbsControl {
    private static _instance: SettingsManager;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new SettingsManager();
        }
        return this._instance;
    }
    private settings:{[key:string]:boolean} = {
        bgm_flag:true,
        se_flag:true,
        shock_flag:true,
        damage_flag:true,
        isAutoCollect:false,
        isAutoSelectRogue:false,
        needCheckAssociation:false,
    };
    public static getInstance():SettingsManager{
        return SettingsManager._instance;
    }
    public setSetting(key: string, value: boolean) {
        this.settings[key] = value;
        Func.setItem(key, JSON.stringify(value))
    }
    public getSetting(key:string):boolean{
        return this.settings[key]
    }
    public loadSettings(){
        for (let key in this.settings) {
            if (key == "isAutoCollect"){
                this.setSetting("isAutoCollect",true)
            }
            // else if(key==="isAutoSelectRogue"){
            //     this.setSetting("isAutoSelectRogue",OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AutoSelectRogue))
            // }
            else{
                const value = Func.getItem(key);
                if (value !== null) {
                    this.settings[key] = JSON.parse(value);
                }
            }
        }
    }
}


