const { ccclass, property } = cc._decorator;
var self: any = null;
@ccclass
export default class Avatar extends cc.Component {

    @property([cc.SpriteFrame])
    huang = [];
    @property([cc.SpriteFrame])
    vipKuang = [];
    @property([cc.SpriteFrame])
    level = [];
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.Sprite)
    vipKuangSp: cc.Sprite = null;
    @property(cc.Sprite)
    huangSp: cc.Sprite = null;
    @property(cc.Sprite)
    levelSp: cc.Sprite = null;
    @property(cc.Material)
    circle: cc.Material = null;
    onLoad() {
        self = this;
    }
    start() {
    }
    setAvatar(iconUrl: string, vip: number) {
        var remoteUrl = iconUrl;
        if(iconUrl){
            cc.assetManager.loadRemote(remoteUrl, { ext: '.png' }, function (err, texture: cc.Texture2D) {
                texture.packable= false;
                let frame = new cc.SpriteFrame(texture);
                self.icon.spriteFrame = frame;
            });
        }
        self.vipKuangSp.spriteFrame = self.vipKuang[vip];
        self.huangSp.spriteFrame = self.huang[vip];
        self.levelSp.spriteFrame = self.level[vip];
    }
    // update (dt) {}
}
