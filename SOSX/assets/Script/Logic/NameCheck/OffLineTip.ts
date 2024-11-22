import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class OffLineTip extends PopLayer {
    @property(cc.Button)
    private btnEnter:cc.Button = null;
    @property(cc.Button)
    private btnClose:cc.Button = null;
    @property(cc.Label)
    private lbTips:cc.Label = null;
    onLoad(): void {
        this.setClickHide();
        this.btnEnter.node.on("click", this.onBtnLogin, this);
        this.btnClose.node.on("click", this.onBtnCancel, this);
    }
    onShow(obj: any): void {
        
    }
    onBtnLogin(){
        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth() + 1;
        let nowDay = now.getDay();
        let nowHours = now.getHours();
        if (nowDay === 0 || nowDay === 5 || nowDay === 6) {
            // 如果当前是20:00-21:00
            if (nowHours >= 20 && nowHours <= 21) {
                /* 进入游戏 */
            } else {
                this.lbTips.string = "当前不在游戏时间段";
            }
        } else {
            this.lbTips.string = "当前不在游戏时间段";
        }
    }
    onBtnCancel(){
        // 回到登录界面
        this.setVisible(false);
    }
}
