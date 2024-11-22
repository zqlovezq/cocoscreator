
const {ccclass, property} = cc._decorator;

@ccclass
export default class InfiniteBg extends cc.Component {

    @property
    speed:number = 0.05;

    protected time = 0
    protected material:cc.MaterialVariant = null;

    start () {
        this.time = 0;
        this.material = this.getComponent(cc.Sprite).getMaterial(0);
    }

    update (dt) {
        this.time += dt * this.speed;
        this.material.setProperty('time', this.time);
    }
}
