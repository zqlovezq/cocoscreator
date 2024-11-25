
import { tab } from "../Table/table_gen";

export abstract class BaseChannel {
    public sdkLoginData: any;//sdk登录成功返回数据
    public httpLoginData: any;//http登录成功返回数据
    public iosStoreUrl: string = ""; //ios商店跳转地址
    public androidStoreUrl: string = "";//安卓商店跳转地址
    public stopServerLastTimePhp: string = "";
    public faceBookUrl: string = "";
    public discordUrl: string = "";
    public associationUrl: string = "";//社群
    public basePhpUrl: string = ""
    public loginToken: string = "111"
    public loginUid: string = ""


    abstract init(): void;
    abstract login(params: any, callback: Function): void;
    abstract isLogin(): boolean;
    abstract logout(params: any, callback: Function): void;
    abstract exit(param: any): void;//调用sdk退出接口
    abstract exitApp(param: any): void;//直接退出app
    abstract pay(params: any, callback: Function): void;
    abstract channelType: tab.ChannelType;
    abstract getBasePhpUrl(): string;
    abstract getVersionPhpUrl(): string;
    loginPhpUrl: string = "";
    abstract loginServer(callback: Function, errorCallBack: Function): void
    abstract intoServer(params: any): void;//上报进入服务器（到达游戏主界面）
    abstract createRole(params: any): void;//上报创建角色
    abstract roleLevelUp(params: any): void;//上报角色升级
    abstract accountUpgrade(): void;//账号升级
    abstract accountCenter(params: any): void;//个人中心
    abstract initRewardedAd(params: any, callback: Function): void;//初始化激励广告 0用户应该被奖励 1广告初始化完成 2广告加载完毕 3广告加载失败 4广告已经展示 5 广告被点击
    abstract showRewardedAd(): void;//展示激励广告
    abstract comment(params: any, callback: Function): void;//评论
    abstract share(params: any, callback: Function): void;//分享

    enterGameStart(): void {}
    gameInitSuccess(): void {}
    gameHotfixStart(): void {}
    gameHotfixSuccess(): void {}
    openActionWebView(url:string): void {}
    roleLogoutServer(params:string): void {}
    roleCompleteTutorial(params:string): void {}
    openCustomService(): void {}
    getShopInfo(param:string): void {}
    gameServerPage(): void {}
    abstract getSdkRechargeShowPrice(p_data: tab.RechargeTable):string

    /**
     * sdk支付接口参数，返回计费点价格，比如港澳台版本需要转成美元
     * @param p_data 
     * @returns 
     */
    abstract getSdkRechargePrice(p_data: tab.RechargeTable): number;
    /**
     * 切换语言，不需要的可以不实现
     * @param params 
     */
    changeLanguage(params: any): void {

    }

    /**
     * 返回随机名字文件名
     */
    abstract getRandomNameFile(): string;


    /**获得充值货币 */
    abstract getRechargeCurrency():string;
    abstract postEvent(params:any):void; //上报打点事件
}