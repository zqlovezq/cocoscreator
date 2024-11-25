import { _decorator, AssetManager, assetManager, CCBoolean, CCInteger, Component, Label, Sprite, SpriteFrame } from 'cc';
// @ts-ignore
import { EDITOR } from 'cc/env';
import { UIMgr } from '../../../logic/mgr/UIMgr';
import { ResMgr } from '../../../logic/mgr/ResMgr';
import { LangMgr } from '../../../logic/mgr/LangMgr';
const {
    ccclass,
    property,
    executeInEditMode,
    menu,
} = _decorator;

@ccclass('LangSprite')
@executeInEditMode(true)
export default class LangSprite extends Component {
    @property({ visible: false, type: SpriteFrame })
    _spriteFrame: SpriteFrame = null;

    @property({ visible: true, type: SpriteFrame })
    set spriteFrame(value: SpriteFrame) {
        this._spriteFrame = value;
        this.render();
    }

    get spriteFrame(): SpriteFrame {
        return this._spriteFrame;
    }

    @property({ visible: false })
    _preload: Boolean = true;

    @property({ displayName: "是否预加载", visible: true, type: CCBoolean })
    set preload(value: Boolean) {
        this._preload = value;
        this.preloadChange();
    }

    get preload(): Boolean {
        return this._preload;
    }

    @property({ displayName: "资源uuid", visible() { return !this.preload } })
    sprUUID: string = ""

    spr: Sprite | null = null;


    @property({ tooltip: "备注", displayName: "备注" })
    desc: string = ""

    onLoad() {
        this.spr = this.node.getComponent(Sprite)
        if (!EDITOR) {
            this.spriteFrame = this._spriteFrame
        } else {
            this.preload = this._preload
        }
    }

    render() {
        if (EDITOR) {
            if (this._spriteFrame == null) {
                this.spr.spriteFrame = null
                this.sprUUID = ""
                return
            }
            if (this.preload) {
                this.spr.spriteFrame = this._spriteFrame
            } else {
                this.sprUUID = this._spriteFrame.uuid
                this._spriteFrame = null
            }
        } else {
            if (this.preload) {
                this.spr.spriteFrame = this._spriteFrame
                if (this._spriteFrame) {
                    let assetInfo = ResMgr.getBundle().getAssetInfo(this._spriteFrame.uuid)
                    if (assetInfo && LangMgr.checkPath(assetInfo['path'])) {
                        this.spr.spriteFrame = null
                        this.spr.setTexture(assetInfo['path'])
                    }
                }
            } else {
                if (this.sprUUID == "") {
                    return
                }
                let assetInfo = ResMgr.getBundle().getAssetInfo(this.sprUUID)
                if (assetInfo == null) {
                    return
                }
                this.spr.setTexture(assetInfo['path'])
            }
        }
    }

    preloadChange() {
        if (this.preload) {
            this.sprUUID = ""
        } else {
            if (this._spriteFrame) {
                this.sprUUID = this._spriteFrame.uuid
            }
            this._spriteFrame = null
            this.spr.spriteFrame = null
        }
    }

}
