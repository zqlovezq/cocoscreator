// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

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

    start() {

    }
    /**
     * @param iconUrl:头像的url地址
     * @param vip:弹幕的vip等级
     * @param str:弹幕
    */
    setBarrage(info: any) {
        if (!info) {
            return;
        }
        let userInfo = info.user;
        let referInfo = info.refer_user;
        let str = "";
        let avatar = this.node.getChildByName("avatar")
        let avatarJs = avatar.getComponent("Avatar");
        avatarJs.loadUrl(userInfo.avatar).then((res) => {
            avatarJs.setAvatar(res, userInfo.grade_id)
        })
        avatar.scale = 0.8;
        let layout = this.node.getChildByName("layout").getComponent(cc.Sprite);
        layout.spriteFrame = this.kuang[userInfo.grade_id];
        let text = layout.node.getChildByName("text").getComponent(cc.RichText);
        if (info.action === "steal") {
            str = `<color=#CC9CFF>${userInfo.user_name}</c>偷取了<color=#CC9CFF>${referInfo.user_name}</c>的<color=#FF80AA>${info.data}</c>红包券`
        } else if (info.action === "cash") {
            str = `${userInfo.user_name}提取了</c><color=#FF80AA>${info.data / 100}</c>元红包`
        }else if(info.action === "tip"){
            str = `<color=#FF80AA>${info.data}</c>`
        }
        text.string = str;
        this.node.x = 1000;
        this.node.getChildByName("layout").getComponent(cc.Layout).updateLayout();
        this.scheduleOnce(() => {
            // console.log("延时执行");
            for (let i = 1; i < 3; i++) {
                let star = this.node.getChildByName("star_" + i).getComponent(cc.Sprite);
                star.spriteFrame = this.star[userInfo.grade_id];
                star.node.x = layout.node.width - 150;
            }
        }, 0.1)
    }
    // update (dt) {}
}