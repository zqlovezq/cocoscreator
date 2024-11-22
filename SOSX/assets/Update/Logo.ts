//注意！！！
//本文件不能引用任何其他脚本！！！！

declare let window: Window & {
    wx:any;
};

const {ccclass, property} = cc._decorator;

@ccclass
export default class Logo extends cc.Component {
    @property(cc.Node)
    bgMXYZZ: cc.Node = null;

    @property(cc.Node)
    bgMLWY: cc.Node = null;

    @property(cc.Node)
    logoMXYZZ: cc.Node = null;

    @property(cc.Node)
    logoMLWY: cc.Node = null;

    @property(cc.Node)
    logoSWZZ: cc.Node = null;

    onLoad () {
        this.bgMXYZZ.active = false;
        this.logoMXYZZ.active = false;
        this.bgMLWY.active = false;
        this.logoMLWY.active = false;
        this.logoSWZZ.active = false;

        if(cc.sys.platform == cc.sys.WECHAT_GAME && window.wx && window.wx.getAccountInfoSync) {
            try {
                let accountInfo = window.wx.getAccountInfoSync();
                if(accountInfo && accountInfo.miniProgram) {
                    console.log(`wechat appId=${accountInfo.miniProgram.appId}`)
                    if(accountInfo.miniProgram.appId == "wx8a9d09983a9a777a") {
                        //萌学园战纪
                        this.bgMXYZZ.active = true;
                        // this.logoMXYZZ.active = true;
                    } else if(accountInfo.miniProgram.appId == "wx44ba47f7bde32021") {
                        //魅灵物语
                        this.bgMLWY.active = true;
                        this.logoMLWY.active = true;
                    } else {
                        //未知
                        this.bgMLWY.active = true;
                    }
                }
            } catch (error) {
                console.error(error);
                this.bgMLWY.active = true;
            }
        } else {
            this.bgMLWY.active = true;
            this.logoSWZZ.active = true;
            // this.bgMLWY.active = true;
            // this.logoMLWY.active = true;
        }
    }
}
