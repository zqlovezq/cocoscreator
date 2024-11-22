
import { tab } from "../../Table/table_gen";
import { LoadPreNode } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TalentTips extends cc.Component {

    @property(cc.RichText)
    dec: cc.RichText = null;

    @property(cc.Node)
    bg:cc.Node = null

    public  static clickTargetUUid:string = ""

    public static showTips(talentId:number, target:cc.Node){
        let boxtip = cc.director.getScene().getComponentInChildren(TalentTips)
        if(boxtip){
            if(TalentTips.clickTargetUUid.localeCompare(target.uuid) != 0){
                TalentTips.clickTargetUUid = target.uuid
                boxtip.node.active = true
                boxtip.node.zIndex = 99
                boxtip.setTips(talentId, target)
            } else {
                boxtip.node.active = false
                TalentTips.clickTargetUUid = ""                
            }
        } else {
            TalentTips.clickTargetUUid = target.uuid
            LoadPreNode("prefab/TalentTips", TalentTips).then((value:TalentTips)=>{
                if(value){
                    let currscene = cc.director.getScene()
                    currscene.addChild(value.node, 99)
                    value.setTips(talentId, target)
                }
            }, (error)=>{})
        }
    }

    setTipsview(talentId:number){
        let talentcfg:tab.TalentTable = tab.Data.TalentTableByID.getValue(talentId)
        if(talentcfg){
            this.dec.string = talentcfg.Tips
            this.bg.setContentSize(new cc.Size(323, this.dec.node.getContentSize().height))
        }
    }

    setTips(talentId:number, target:cc.Node, boxID:number = 0){
        this.setTipsview(talentId)
        //该预制体的锚点（0.5， 1）
        let targetworldpos = target.convertToWorldSpaceAR(new cc.Vec2(0,0))
        let targetcontent = target.getContentSize()
        let targetanchor = target.getAnchorPoint()
        let thiscontent:cc.Size = this.node.getContentSize();
        let visiblesize = cc.view.getVisibleSize()
        let posx = targetworldpos.x
        let posy = targetworldpos.y
        if(targetworldpos.x + thiscontent.width / 2 > visiblesize.width) {
            posx -= (thiscontent.width / 2  - targetcontent.width * targetanchor.x )
        } else if(targetworldpos.x - thiscontent.width / 2 < 0) {
            posx += (thiscontent.width / 2 - targetcontent.width * targetanchor.x)
        }

        if(posy < visiblesize.height / 2) {
            posy += (thiscontent.height + targetcontent.height * targetanchor.y)
        } else {
            posy -= (targetcontent.height * targetanchor.y)
        }
        this.node.setPosition(new cc.Vec2(posx, posy))
    }
}
