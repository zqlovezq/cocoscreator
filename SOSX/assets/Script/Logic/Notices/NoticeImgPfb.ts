/*
 * @Descripttion: 公告图片模板
 */

import ManagerNotice from "./ManagerNotice";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NoticeImgPfb extends cc.Component {

    @property(cc.Sprite)
    spr_notice: cc.Sprite = null;

    start () {}

    public initData(url: string){
        ManagerNotice.getInstance().downloadImg(url, this.spr_notice);
        this.node.getComponent(cc.Layout).updateLayout();
    }
}
