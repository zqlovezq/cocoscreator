/**
 *  没看到有人调用
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class TowerCompoundLv extends cc.Component {

    @property(cc.Label)
    lblLevel: cc.Label = null;

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    bgMax: cc.Node = null;

    setData(lv:number) {
        this.lblLevel.string = `${lv}`
        this.bgMax.active = (lv >= 7);
        this.bg.active = !this.bgMax.active;
    }
}
