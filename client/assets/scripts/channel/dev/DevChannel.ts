import { game, sys } from "cc";
import { TypeLanguage } from "../../logic/define/TypeLanguage";
import { BaseChannel } from "../BaseChannel";
import { tab } from "../../Table/table_gen";

export class DevChannel extends BaseChannel {
    channelType: tab.ChannelType = tab.ChannelType.ChannelType_None;
    basePhpUrl = "" //表里填写的

    private _isLoginSuc = false;//是否登录  
    init(): void {

    }

    login(params: any, callback: Function): void {
        this._isLoginSuc = true;
        callback({ code: 0 });
    }
    isLogin() {
        return this._isLoginSuc;
    }
    logout(params: any, callback: Function): void {
        this._isLoginSuc = false;
        callback({ code: 0 });
    }
    exit(): void {
    }
    exitApp(param: any) {
        game.end()
    }
    pay(params: any): void {
    }
    /**
     * 获得php服务器地址
     * @returns 
     */
    getBasePhpUrl(): string {
        return this.basePhpUrl;
    }
    loginServer(callback: Function) {

    }
    intoServer(params: any): void {
    }
    createRole(params: any): void {
    }
    roleLevelUp(params: any): void {
    }
    accountUpgrade(): void {
        throw new Error("Method not implemented.");
    }
    accountCenter(params: any): void {
        throw new Error("Method not implemented.");
    }

    adCompleteCb: Function
    initRewardedAd(params: any, callback: Function): void {
        this.adCompleteCb = callback
        callback({ code: 2 });
    }
    showRewardedAd(): void {
        this.adCompleteCb({ code: 0 });
        this.adCompleteCb({ code: 2 });
    }
    comment(params: any, callback: Function): void {
        callback({ code: 0 });
    }
    share(params: any, callback: Function): void {
        callback({ code: 0 });
    }
    community(): void {

    }
    
    getVersionPhpUrl() {
        return this.basePhpUrl + "version_play800.php";
    }

    getRandomNameFile(): string {
        return "radom_name_en.xml";
    }

    getSdkRechargePrice(p_data: tab.RechargeTable) {
        return p_data.PriceDollar / 100;
    }
    
    getRechargeCurrency(){
        return "ui_commondesc_73";
    }
     
    postEvent(params: any) {
        console.log("上报打点事件===" + JSON.stringify(params));
       
    }

}