import { _decorator, Component, director, Node, Prefab, ResolutionPolicy, SpriteFrame, Texture2D, view } from 'cc';
import { SceneBase } from './SceneBase';
const { ccclass, property } = _decorator;

@ccclass('LoadingScene')
export class LoadingScene extends SceneBase {
    protected onLoad(): void {
        super.onLoad()
    }
}

