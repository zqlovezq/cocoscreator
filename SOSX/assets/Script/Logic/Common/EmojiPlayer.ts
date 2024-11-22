/**
 *  表情播放
*/

import { tab } from "../../Table/table_gen";
import { CreateSpine, LoadResAsync } from "../Utils/GameUtils";
import Sound, { PlaySound } from "../Utils/Sound";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmojiPlayer extends cc.Component {

    @property(cc.Node)
    emoji: cc.Node = null;

    protected _audioID:number

    static async play(id:number, bPlaySound: boolean = true): Promise<EmojiPlayer> {
        let emojiData = tab.Data.EmojiTableByID.getValue(id)
        if(!emojiData) {
            return null;
        }

        let prefab:cc.Prefab = await LoadResAsync("prefab/EmojiPlayer", cc.Prefab)
        if(prefab) {
            let emojiCom = cc.instantiate(prefab).getComponent(EmojiPlayer)
            if(emojiCom) {
                emojiCom.startPlay(emojiData, bPlaySound);
                return emojiCom
            }
        }
        return null;
    }

    startPlay(emojiData:tab.EmojiTable, bPlaySound: boolean) {
        CreateSpine(emojiData.SpineID,sp.Skeleton.AnimationCacheMode.REALTIME).then(skel=>{
            if(!cc.isValid(this.node)){
                return
            }
            this.emoji.addChild(skel.node);
            skel.setAnimation(0, "idle2", false)
            skel.setCompleteListener(()=>{
                this.node.destroy()
            })

            if(!bPlaySound){
                return;
            }
            this._audioID = Sound.Instance.Play(emojiData.SoundKey, ()=>{
                if(cc.isValid(this.node)) {
                    this._audioID = undefined
                }
            });
        })
    }

    stopPlay() {
        if(this._audioID !== undefined) {
            Sound.Instance.Stop(this._audioID)
            this._audioID = undefined
        }
    }

    onDestroy() {
        this.stopPlay()
    }
}
