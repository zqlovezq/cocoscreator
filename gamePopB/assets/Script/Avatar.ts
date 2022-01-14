const { ccclass, property } = cc._decorator;
@ccclass
export default class Avatar extends cc.Component {

    @property([cc.SpriteFrame])
    huang = [];
    @property([cc.SpriteFrame])
    vipKuang = [];
    @property([cc.SpriteFrame])
    level = [];
    @property(cc.Sprite)
    vipKuangSp: cc.Sprite = null;
    @property(cc.Sprite)
    huangSp: cc.Sprite = null;
    @property(cc.Sprite)
    levelSp: cc.Sprite = null;
    @property(cc.Material)
    circle: cc.Material = null;
    @property(cc.SpriteFrame)
    defaultFrame = null;
    setAvatar(sp: cc.SpriteFrame, vip: number) {
        this.vipKuangSp.spriteFrame = this.vipKuang[vip];
        this.huangSp.spriteFrame = this.huang[vip];
        this.levelSp.spriteFrame = this.level[vip];
        let icon = this.node.getChildByName("icon").getComponent(cc.Sprite);
        icon.spriteFrame = sp;
        // console.log("加载的图片的url=" + sp.getTexture().nativeUrl);
    }
    loadUrl(url: string) {
        let self = this;
        return new Promise(function (resolve, reject) {
            if(url){
                cc.assetManager.loadRemote(url, { ext: '.png' }, function (err, texture: cc.Texture2D) {
                    if (err) {
                        console.log("加载头像失败---" + url + "----", err);
                        reject("头像加载失败");
                    } else {
                        texture.packable = false;
                        let frame = new cc.SpriteFrame(texture);
                        resolve(frame);
                    }
                });
            }else{
                return resolve(self.defaultFrame)
            }
        })
    }
    // update (dt) {}
}
