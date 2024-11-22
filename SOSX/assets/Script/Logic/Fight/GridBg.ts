
const {ccclass, property} = cc._decorator;
const Border = 3

@ccclass
export default class GridBg extends cc.Component {

    protected graphics:cc.Graphics = null
    protected sprite:cc.Sprite = null

    onLoad() {
        this.graphics = new cc.Node().addComponent(cc.Graphics)
        this.node.addChild(this.graphics.node)
        this.graphics.node.active = false

        this.sprite = this.node.getComponent(cc.Sprite)
    }

    start () {
        
    }

    showBg(show:boolean) {
        this.sprite.enabled = show;
    }

    showFrame(color:cc.Color) {
        this.graphics.clear()
        this.graphics.node.active = true

        this.graphics.lineWidth = Border
        this.graphics.strokeColor = color
        this.graphics.fillColor = color
        this.graphics.roundRect(-this.node.width/2 + Border, -this.node.height/2 + Border, this.node.width - Border * 2, this.node.height - Border * 2, 10)
        this.graphics.stroke()
    }
    hideFrame() {
        this.graphics.clear()
        this.graphics.node.active = false
    }
}
