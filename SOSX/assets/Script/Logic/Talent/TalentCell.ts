/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import timeboxsnode from "../Main/timeboxsnode";
import { LoadPreNode, LoadScene, setGray, ShowTips } from "../Utils/GameUtils";
import TalentLayer from "./Talent";
import TalentTips from "./TalentTips";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TalentCell extends cc.Component {
 
    @property(cc.Label)
    currentCnt: cc.Label = null;  //当前加成的点数

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Sprite)
    statusFrame: cc.Sprite = null

    @property(cc.Sprite)
    specialFrame: cc.Sprite = null

    @property(cc.Node)
    particlenode: cc.Node = null

    @property(cc.Node)
    saoguang: cc.Node = null

    @property(cc.Node)
    lightNode: cc.Node = null

    _talentId:number = 0
    _floorId:number = 0;
    _index:number = 0;
    private _bChallenge: boolean;

    //天赋描述
    onClickDes(){
        TalentTips.showTips(this._talentId, this.node)
    }

    //加减天赋点
    onClickTalent(){
        let beforeTierCfg:tab.TalentTierTable = tab.Data.TalentTierTableByTier.getValue(this._floorId - 1)
        let beforePoints:number = TalentCell.getCurFloorTotalPoint(this._floorId-1, this._bChallenge)
        if(!beforeTierCfg || beforeTierCfg.MaxPoint == beforePoints) { //如果没有上层，那当前层为第一层,默认开放  ， 或者上层已满，当前层也开放
           this.addTalentPoint()
        } else {
            ShowTips("OnlyActiveOpenTalent")   //只能激活已开放的天赋
        }
    }

    //获得当前层总的天赋点
    public static  getCurFloorTotalPoint(floorId, bchallenge:boolean = false){
        let total = 0
        if(bchallenge){
            let chalinfo = Role.Instance.challengeData
            if(chalinfo && chalinfo.challengeData.talent){
                let titems = chalinfo.challengeData.talent.talentItems || []
                let its = titems[floorId-1]
                if(its && its.points){
                    its.points.forEach((value, key)=>{
                        total += value
                    })
                }
            }
        } else {
            let team: proto.IDeckData = Role.Instance.RoleData.decks[TalentLayer._teamIndex];
            if(team){
                let talentItems = team.talent && team.talent.talentItems[floorId-1]   //所在层级的数据
                if(talentItems){
                    talentItems.points.forEach((value, key)=>{
                        total += value
                    })
                }
            }
        }
        return total       
   }

    getTalentEmlments(){
        let talentItems = null
        if(this._bChallenge){
            if(Role.Instance.challengeData){
               let test = Role.Instance.challengeData.challengeData.talent
               let talent = Role.Instance.challengeData.challengeData.talent || new proto.TalentData
               talent.talentItems =talent.talentItems || []
               talentItems = talent.talentItems
               let test1 = Role.Instance.challengeData.challengeData.talent
           }
        } else {
            let team: proto.IDeckData = Role.Instance.RoleData.decks[TalentLayer._teamIndex];
            if(team){
                team.talent = team.talent || new proto.TalentData
                team.talent.talentItems = team.talent.talentItems || []
                talentItems = team.talent.talentItems
            }
        }
        return talentItems
   }

    //增加特定天赋的点数
    public addTalentPoint(){
        let tiercfg:tab.TalentTierTable = tab.Data.TalentTierTableByTier.getValue(this._floorId)
        if(tiercfg == undefined){
            return
        }

        let curfloorIndex = this._floorId - 1
        let bLastFloor:boolean = tab.Data.TalentTierTable.length - 1 == curfloorIndex  //最后一层

        let talentItems = this.getTalentEmlments()

        let curtied1 = talentItems[curfloorIndex]  //当前层的信息
        if(curtied1 == undefined){
            curtied1 = new proto.TalenItem()
            talentItems[curfloorIndex] = curtied1
        }
        let curtied = talentItems[curfloorIndex]
        let curfloorpoints = TalentCell.getCurFloorTotalPoint(this._floorId, this._bChallenge)
        //更新下剩余点数
       // let talentItems = team.talent.talentItems
       // let total = 0
        // if(talentItems) {
        //     for(let i = 0; i < tab.Data.TalentTierTable.length; i++) {  //层
        //         if(i < talentItems.length) {
        //             talentItems[i].points.forEach((value,index)=>{
        //                 total += value
        //             })
        //         }
        //     }
        // }

        if(curfloorpoints == 0 && TalentLayer._curLeftPoint <= 0){
            ShowTips("TalentCountNotEnough")
            return
        }
        curtied.points[this._index] = curtied.points[this._index] || 0
        if(curtied.points[this._index] < tiercfg.MaxPoint  || bLastFloor){
            if(curfloorpoints == curtied.points[this._index] && TalentLayer._curLeftPoint <= 0 ){
                ShowTips("TalentCountNotEnough")
                return
            } else {
                TalentTips.clickTargetUUid = ""                
                curtied.points[this._index] = ( curtied.points[this._index] || 0) + 1   
                let ani:cc.Animation = this.lightNode.getComponent(cc.Animation)    
                if(ani){
                    this.lightNode.active = true
                    ani.play("PressLight")
                    ani.on("finished", ()=>{this.lightNode.active = false}, this)
                }
            }
        }
        
        curfloorpoints = TalentCell.getCurFloorTotalPoint(this._floorId, this._bChallenge)

        if((curfloorpoints >  tiercfg.MaxPoint && !bLastFloor) || TalentLayer._curLeftPoint <= 0 ){
            //使用其他天赋的点数  
            let curtied =  talentItems[curfloorIndex]  //当前层的信息
            for(let j = 0; j<curtied.points.length; j++){
                if(j != this._index && curtied.points[j] > 0){
                    curtied.points[j]--
                    break
                }
            }            
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TalentRefreshLeftPoint,null)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TalentRefreshCellList, this._floorId - 1)
    }

    /*  */
    setView(curpoint: number, tier: tab.TalentTierTable, index:number, bchal:boolean = false) {
        this._talentId = tier.Item[index]
        this._index = index
        this._floorId = tier.Tier   //当前层
        this._bChallenge = bchal
        curpoint = curpoint || 0

        let len = tab.Data.TalentTierTable.length
        let blast:boolean = tier.Tier == tab.Data.TalentTierTable[len-1].Tier

        if(blast){
            this.currentCnt.string = `${curpoint||0}`   //当前点数 /当前层分配的最大点数
        } else {
            this.currentCnt.string = `${curpoint||0}/${tier.MaxPoint}`   //当前点数 /当前层分配的最大点数
        }

        this.saoguang.active = false
        this.particlenode.active = false

        let talentcfg:tab.TalentTable = tab.Data.TalentTableByID.getValue(this._talentId)
        if(talentcfg){
            this.icon.setTexture(talentcfg.Icon)
            this.statusFrame.node.active = talentcfg.Type == tab.TalentType.TalentType_Status
            this.specialFrame.node.active = talentcfg.Type == tab.TalentType.TalentType_Special
            this.particlenode.active = this.specialFrame.node.active && curpoint > 0
        }

        if(this.particlenode.active){
            this.saoguang.active = true
            let ani:cc.Animation = this.saoguang.getComponent(cc.Animation)
            if(ani){
                ani.play()
            }
        }
        setGray(this.statusFrame, curpoint <= 0)
        setGray(this.specialFrame, curpoint <= 0)
    }
}
