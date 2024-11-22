
import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import PopLayer from "../Utils/PopLayer";
import TalentLayer from "./Talent";
import TalentCell from "./TalentCell";
import TalentTotalCell from "./TalentTotalCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class talentTotalInfo extends PopLayer {

    @property(cc.Node)
    specail_layout: cc.Node = null;

    @property(cc.Node)
    normal_layout: cc.Node = null;


    @property(cc.Prefab)
    cell: cc.Prefab = null

    /* 设置天赋数据
     * @param bUseFormalParam  是否用形参决定天赋信息
     * @param talentPoints     玩家天赋信息
     */
    public setData(bUseFormalParam: boolean, talentPoints: proto.ITalenItem[]|Map<number, number> = null){
        !bUseFormalParam ? this.createSelfTalentTotalInfo() : this.setTotalTalentInfo(talentPoints);
    }

    /* 创建自身天赋数据 */
    private createSelfTalentTotalInfo(){
        let team: proto.IDeckData = Role.Instance.RoleData.decks[TalentLayer._teamIndex];
        if(!team){
            return
        }

        let talentItems = team.talent &&  team.talent.talentItems;
        this.setTotalTalentInfo(talentItems);
    }

    getTalentNumberByID(talentId){
        let num:number = 0
        let cfg:tab.TalentTable = tab.Data.TalentTableByID.getValue(talentId)
        if(cfg == undefined){
            return num;
        }
        num = cfg.AtkDamage || cfg.CriticalRate || cfg.AtkSpeed || cfg.CriticalDamage || cfg.LowLvAtk || cfg.HightLvAtk
        return num;
    }

    private setTotalTalentInfo(talentInfoList: proto.ITalenItem[] | Map<number, number>){
        let talentmap:Map<number, number> = new Map<number, number>()
        if(talentInfoList instanceof  Map){
            talentmap = talentInfoList
        } else {
            let talentInfosLen = talentInfoList ? talentInfoList.length : kZeroNumber;
            if(talentInfosLen > kZeroNumber){
                for(let i = 0; i < talentInfosLen; i++){
                    let floorcfg:tab.TalentTierTable = tab.Data.TalentTierTableByTier.getValue(i + 1)
                    let points = talentInfoList[i].points;
                    let pointsLen = talentInfoList[i].points ? talentInfoList[i].points.length : kZeroNumber;
                    if(floorcfg){
                        for(let j = 0; j < pointsLen; j++){
                            talentmap.set(floorcfg.Item[j], points[j] + (talentmap.get(floorcfg.Item[j]) || 0))       
                        }
                    }
                }
            }
        }
            
        let empty_1:boolean = true
        let empty_2:boolean = true

        this.normal_layout.removeAllChildren()
        this.specail_layout.removeAllChildren()

        talentmap.forEach((value, id)=>{
            let cfg = tab.Data.TalentTableByID.getValue(id)
            if(cfg && value > 0){
                if(cfg.Type == tab.TalentType.TalentType_Status){/* 状态 */
                    empty_1 = false
                    let bfind:boolean = false
                    for(let i = 0; i<this.normal_layout.childrenCount; i++){
                        let node = this.normal_layout.children[i].getComponent(TalentTotalCell)
                        if(node){
                            if(node.getAttrType().localeCompare(cfg.AttrDesc) == 0){
                                node.addValue( value * this.getTalentNumberByID(id) )
                                bfind = true
                                break
                            }
                        }
                    }

                    if(bfind == false){
                        let pre = cc.instantiate(this.cell)
                        if(pre){
                            this.normal_layout.addChild(pre)
                            pre.getComponent(TalentTotalCell).setView(id, value)
                        }
                    }
                } else if(cfg.Type == tab.TalentType.TalentType_Special) { /* 特殊 */
                    empty_2 = false
                    let pre = cc.instantiate(this.cell)
                    if(pre) {
                        this.specail_layout.addChild(pre)
                        pre.getComponent(TalentTotalCell).setView(id, value)
                    }
                }
            }
        })

        if(empty_1){
            let pre = cc.instantiate(this.cell)
            if(pre) {
                this.normal_layout.addChild(pre)
                pre.getComponent(TalentTotalCell).setView(-1, 0)
            }
        }
        
        if(empty_2){
            let pre = cc.instantiate(this.cell)
            if(pre) {
                this.specail_layout.addChild(pre)
                pre.getComponent(TalentTotalCell).setView(-1, 0)
            }
        }
    }
}
