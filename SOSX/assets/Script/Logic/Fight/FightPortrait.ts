import { tab } from "../../Table/table_gen";
import { LoadResAsync } from "../Utils/GameUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FightPortrait extends cc.Component {

    @property(cc.Sprite)
    spPortrait: cc.Sprite = null;

    @property(cc.Node)
    rootNode: cc.Node = null;

    @property(cc.Sprite)
    spBg: cc.Sprite = null;

    public cardId: number = 0;
    protected index: number = 0

    onLoad() {
        // this.node.on(cc.Node.EventType.TOUCH_END, ()=>{
        //     if(this.pbCountdown && this.pbCountdown.node.active && this.pbCountdown.progress > 0) {
        //         //还在cd中
        //         return;
        //     }
        //     if(this.callback != null) {
        //         this.callback(this.cardId, this.index)
        //     }
        // }, this)
    }

    async setCardData(cardId: number, index: number,isMine = true) {
        this.cardId = cardId;
        this.index = index;
        let data = tab.Data.ItemTableByID.getValue(cardId)
        let icon = data.Icon
        if (data) {
            let sf = await LoadResAsync(icon, cc.SpriteFrame)
            if (sf) {
                this.spPortrait.spriteFrame = sf;
            }

            if (this.spBg) {
                // let qualityTab = tab.Data.QualityTableByQuality.getValue(data.Quality);
                // if (qualityTab) {
                //     let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame)
                //     if (sf) {
                //         this.spBg.spriteFrame = sf;
                //     }
                // }
                let url = isMine?data.ChessBgBlue:data.ChessBgRed;
                let sf = await LoadResAsync(url, cc.SpriteFrame);
                if (sf) {
                    this.spBg.spriteFrame = sf;
                }
            }
        }
    }

    get ID() {
        return this.cardId;
    }
    get Index() {
        return this.index;
    }
}
