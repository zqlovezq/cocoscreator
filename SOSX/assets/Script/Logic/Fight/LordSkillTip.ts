import { tab } from "../../Table/table_gen";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LordSkillTip extends cc.Component {
    @property(cc.Node)
    root:cc.Node = null;

    @property(sp.Skeleton)
    spineBg:sp.Skeleton = null;

    @property(sp.Skeleton)
    spineText:sp.Skeleton = null;

    @property(cc.Node)
    attachTop:cc.Node = null;

    @property(cc.Node)
    attachBottom:cc.Node = null;

    onLoad() {
        // this.updateBgCache()
    }

    updateBgCache() {
        this.spineBg.updateAnimationCache("idle1")
        this.spineBg.updateAnimationCache("idle2")
        cc.log("updateBgCache idle1, idle2")
    }

    updateTextCache(lordSkillID:number) {
        let lordTbl = tab.Data.LordSkillTableByLordID.getValue(lordSkillID)
        if(!lordTbl) {
            return;
        }
        this.spineBg.updateAnimationCache(lordTbl.TipType[0])
        this.spineBg.updateAnimationCache(lordTbl.TipType[1])
        cc.log(`updateBgCache ${lordTbl.TipType[0]}, ${lordTbl.TipType[1]}`)
    }

    setTip(textAnims:string[], portrait:cc.SpriteFrame, isBottom:boolean, onComplete:Function) {
        let spPortrait = new cc.Node().addComponent(cc.Sprite);
        spPortrait.node.anchorY = 0;
        spPortrait.spriteFrame = portrait;

        if(isBottom) {
            this.spineBg.setAnimation(0, "idle1", false)
            this.spineText.setAnimation(0, textAnims[0], false)
            this.attachBottom.addChild(spPortrait.node);
        } else {
            this.spineBg.setAnimation(0, "idle2", false)
            this.spineText.setAnimation(0, textAnims[1], false)
            this.attachTop.addChild(spPortrait.node);
        }
        this.spineBg.setEndListener(()=>{
            this.attachBottom.destroyAllChildren()
            this.attachTop.destroyAllChildren()
            onComplete && onComplete();
        })
    }
}