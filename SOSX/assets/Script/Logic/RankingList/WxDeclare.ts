/*
 * @Descripttion: 
 */

import SdkManager from "../Utils/SdkManager";

// @ts-ignore
export const wx: any = window.wx || false;

export default class Wx {

    private static texture: cc.Texture2D = new cc.Texture2D();

    public static isWeChatEnv(): boolean {
        return !!wx;
    }

    // 上传微信子域排行数据,可直接在主域中使用.
    public static updateUserData(key: string, data: any, sortKey?: string): Promise<void> {
        if (!Wx.isWeChatEnv()) {
            return Promise.resolve();
        }

        if (!key || !data) {
            return;
        }

        return new Promise((resolve, reject) => {
                data.uuid = "" + Math.random();
                // 增加时间戳,用来进行排行数据过滤.
                data.timestamp = cc.sys.now();
                // 增加小游戏中心排行显示.
                if (sortKey) {
                    data.wxgame = {score: data[sortKey], update_time: data.timestamp}
                }
                
                wx.setUserCloudStorage({
                    KVDataList: [{
                        key: key,
                        value: JSON.stringify(data)
                    }],
                    success: function (args) {
                        cc.log("上传排行榜成功.", args);
                        resolve(args);
                    },
                    fail: function (args) {
                        cc.log("上传排行榜失败.", args);
                        reject(args);
                    }
                });
            });
    }

    // 删除微信子域数据.
    public static removeUserData(...keys: string[]) {
        if (!Wx.isWeChatEnv()) {
            return
        }
        wx.removeUserCloudStorage({
            keyList: keys,
            success() {
                cc.log("清除玩家数据成功.");
            },
            fail() {
                cc.log("清除玩家数据失败.", keys);
            }
        });
    }

    public static getShareContext(): any {
        if (!Wx.isWeChatEnv()) {
            return null
        }
        /*const context = wx.getOpenDataContext();
        return context;*/
        return SdkManager.getShareCanvas();
    }

    // 获取子域context.
    public static getShareCanvas(): any {
        if (!Wx.isWeChatEnv()) {
            return null;
        }
        //const context = wx.getOpenDataContext();
        //return context.canvas;
        return SdkManager.getShareCanvas();
    }

    // 清空子域绘制.
    public static clearSubContext() {
        if (!Wx.isWeChatEnv()) {
            return;
        }
        const context = wx.getOpenDataContext();
        if (context) {
            context.width = cc.winSize.width;
            context.height = cc.winSize.height;
            cc.log("屏幕尺寸:", cc.winSize);
        }
    }

    // 向子域同步指令.
    public static sendMsgToContext(what: number | string, args: any) {
        /*const context = this.getShareContext();
        if (context == null) {
            console.info("微信环境异常.无法调用context.");
            return;
        }
        context.postMessage({what, arguments: args});*/
        SdkManager.Instance.PostMsg({what, arguments: args});
    }

    // 将子域内容绘制到sprite 上.
    public static updateSubContextDrawable(subContextView: cc.Sprite, texture?: cc.Texture2D): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            subContextView.spriteFrame = Wx.getSubContextDrawable(texture);
        });
    }

    // 获取子域drawable.
    public static getSubContextDrawable(texture?: cc.Texture2D): cc.SpriteFrame {
        let canvas = this.getShareCanvas();
        if (canvas) {
            let texture2 = texture;
            if (!texture) {
                texture2 = this.texture;
            }

            texture2.initWithElement(canvas);
            texture2.handleLoadedTexture();
            return new cc.SpriteFrame(texture2);
        }
    }

    /*  */
    public static clearUserCloudStorage(keys: string[]) {
        if (Wx.isWeChatEnv()) {
            wx.removeUserCloudStorage({
                keyList: keys || [],
                success(res) {
                    console.warn("已成功清除微信托管数据", res);
                }
            });
        }
    }
}