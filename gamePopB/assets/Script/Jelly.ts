// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Jelly extends cc.Component {
    private planet_direction = "up";
    private planet_r_direction = "left";
    // LIFE-CYCLE CALLBACKS:
    private move = false;
    private count = 0;
    // onLoad () {
       
    // }
    start() {
        this.node.on(cc.Node.EventType.TOUCH_END,()=>{
            this.move = true;
        },this)
    }

    update(dt) {
        if(this.move){
            this.count+=dt;
            if(this.count>20){
                this.move = false;
                this.count = 0;
            }
            if (this.planet_direction == "up") {
                if (this.node.y <= +18) {
                    this.node.y = this.node.y + 16 * dt
                } else {
                    this.planet_direction = "down"
                }
            } else if (this.planet_direction == "down") {
                if (this.node.y >= -36) {
                    this.node.y = this.node.y - 16 * dt
                } else {
                    this.planet_direction = "up"
                }
            }
    
            if (this.planet_r_direction == "right") {
                if (this.node.angle <= +4) {
                    this.node.angle = this.node.angle + 1 * dt
                } else {
                    this.planet_r_direction = "left"
                }
            } else if (this.planet_r_direction == "left") {
                if (this.node.angle >= -8) {
                    this.node.angle = this.node.angle - 1 * dt
                } else {
                    this.planet_r_direction = "right"
                }
            }
        }
    }
}
