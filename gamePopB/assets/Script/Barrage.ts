// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Barrage extends cc.Component {

    @property([cc.SpriteFrame])
    kuang = [];
    @property([cc.SpriteFrame])
    star = [];
    @property(cc.Prefab)
    avatar = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    /**
     * @param iconUrl:头像的url地址
     * @param vip:弹幕的vip等级
     * @param str:弹幕
    */
    setBarrage(iconUrl: string, vip: number,str:string){
        console.log("barrage this ",this);
        let avatar = cc.instantiate(this.avatar);
        this.node.addChild(avatar);
        avatar.getComponent("Avatar").setAvatar(iconUrl,vip);
        avatar.scale = 0.8
        let layout = this.node.getChildByName("layout").getComponent(cc.Sprite);
        layout.spriteFrame = this.kuang[vip];
        let text = layout.node.getChildByName("text").getComponent(cc.Label);
        text.string = str;
        for(let i=1;i<3;i++){
            let star = this.node.getChildByName("star_"+i).getComponent(cc.Sprite);
            star.spriteFrame = this.star[vip];
            star.node.x = layout.node.width-150;
        }
        this.node.x = 1000;
        return this.node;
        // this.node.runAction(cc.moveTo(5,-1000,0));
    }
    // update (dt) {}
}
