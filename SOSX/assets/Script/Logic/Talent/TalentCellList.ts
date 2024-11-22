
import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import TalentCell from "./TalentCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TalentCellList extends cc.Component {

    @property(cc.Node)
    threenode: cc.Node = null

    @property([cc.Node])
    threevecs: cc.Node[] = []


    @property(cc.Node)
    twonode: cc.Node = null

    @property([cc.Node])
    twovecs: cc.Node[] = []

    @property(cc.Sprite)
    bg1: cc.Sprite = null

    @property(cc.Sprite)
    bg2: cc.Sprite = null

    @property(cc.Prefab)
    talentcell: cc.Prefab = null


    @property(cc.Sprite)
    saoguangsprite: cc.Sprite = null

    setView(arg0: proto.ITalenItem, tier: tab.TalentTierTable, _bChal:boolean = false) {
        let cnt = 0
        tier.Item.forEach((value, key)=>{
            value > 0 && cnt++
        })

        this.threenode.active = cnt == 3
        this.twonode.active = cnt == 2

        if(this.threenode.active){
            for(let j=0;  j < cnt; j++)      {
                if(j < this.threevecs.length){
                    let cell =  this.threevecs[j].children[0]
                    if(!cell){
                        cell =  cc.instantiate(this.talentcell)
                        this.threevecs[j].addChild(cell)
                    }
                    cell.getComponent(TalentCell).setView(arg0.points[j] || 0, tier, j, _bChal)
                }
            }
        } else {
            for(let j=0; j < cnt; j++) {
                if(j < this.twovecs.length){
                    let cell =  this.twovecs[j].children[0]
                    if(!cell){
                        cell =  cc.instantiate(this.talentcell)
                        this.twovecs[j].addChild(cell)
                    }
                    cell.getComponent(TalentCell).setView(arg0.points[j] || 0, tier, j, _bChal)
                }   
            }
        }

        let len = tab.Data.TalentTierTable.length
        let blast:boolean = tier.Tier == tab.Data.TalentTierTable[len-1].Tier
        
        this.bg1.node.active = blast  //白色背光
        
        let beforeTierCfg:tab.TalentTierTable = tab.Data.TalentTierTableByTier.getValue(tier.Tier - 1)
        let beforePoints:number = TalentCell.getCurFloorTotalPoint(tier.Tier - 1, _bChal)
        let bopen = !beforeTierCfg || beforeTierCfg.MaxPoint == beforePoints
        this.bg2.node.active = bopen  && blast == false   //蓝色背光
        
        this.saoguangsprite.node.active = blast
        if(blast){
            let ani:cc.Animation = this.saoguangsprite.node.getComponent(cc.Animation)
            if(ani &&  ani.currentClip == null) {
                ani.play("baoxiangsaoguang2")
            }
        }   
    }
}
