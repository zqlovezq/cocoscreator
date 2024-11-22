import Func from "./Func";

const { ccclass, property } = cc._decorator;

declare let window: Window & {
    wx: any;
};

@ccclass
export default class WechatGameUIAdapter extends cc.Component {
    @property
    OffsetY: number = 0;

    onLoad() {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            let menuInfo = window.wx.getMenuButtonBoundingClientRect();
            let systemInfo = window.wx.getSystemInfoSync();
            if (!menuInfo || !systemInfo) {
                return;
            }
            if (!Func.isDesignSize()) {
                return
            }

            let paddingTop = this.node.parent.height * (menuInfo.top / systemInfo.screenHeight);

            let widget = this.node.getComponent(cc.Widget);
            if (!widget) {
                widget = this.node.addComponent(cc.Widget)
            }
            widget.top = paddingTop + this.OffsetY;
            if (widget.top < 0) {
                widget.top = 0;
            }
            widget.isAbsoluteTop = true;
            widget.isAlignTop = true;
            widget.updateAlignment();

            console.log(`screenHeight:${systemInfo.screenHeight},windowHeight:${systemInfo.windowHeight} ,menuTop:${menuInfo.top} ,menuHeight:${menuInfo.height}`)
            console.log(`safearea: top=${systemInfo.safeArea.top}, height=${systemInfo.safeArea.height}`);
            console.log(`paddingTop:${paddingTop}, OffsetY:${this.OffsetY}`)
        }
    }
}