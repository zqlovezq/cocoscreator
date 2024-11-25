import { _decorator, Component, director, Node, Prefab, ResolutionPolicy, SpriteFrame, Texture2D, view } from 'cc';
import { SceneBase } from './SceneBase';
import { UIMgr } from '../logic/mgr/UIMgr';
import { PlaySound } from '../logic/utils/Sound';
import { SoundUrl } from '../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('MainScene')
export class MainScene extends SceneBase {
    protected onLoad(): void {
        super.onLoad()
        this.showDefaultPfb();
        PlaySound(SoundUrl.MainBGM);
    }
}

