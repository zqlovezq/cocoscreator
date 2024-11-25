import { _decorator, Color, Component, director, DynamicAtlasManager, instantiate, Layers, Node, Prefab, ResolutionPolicy, ScrollView, Sorting, Sprite, SpriteFrame, UITransform, v3, view } from 'cc';
import { ViewPop } from '../../framework/base/ViewPop';
const { ccclass, property } = _decorator;

@ccclass('DynamicAtlas')
export class DynamicAtlas extends ViewPop {
    @property(ScrollView)
    scrollview:ScrollView = null

    register(): void {
        
    }

    onEnable(){
        this.scrollview.content.destroyAllChildren()
        this.showDebug(true)
    }

    showDebug(isshow) {
        //@ts-ignore
        let _atlases = DynamicAtlasManager.instance._atlases;
        let length = _atlases.length
        for (let index = 0; index < length; index++) {
            let touchNode = new Node()
            touchNode.addComponent(UITransform).anchorY = 1
            touchNode.layer = Layers.Enum.UI_2D
            let spr = touchNode.addComponent(Sprite)
            spr.sizeMode = Sprite.SizeMode.TRIMMED
            this.scrollview.content.addChild(touchNode);

            let sprFra = new SpriteFrame();
            sprFra.texture = _atlases[index]._texture
            spr.spriteFrame = sprFra;
            touchNode.scale = v3(0.5,0.5,0.5)
        }


    }
}

