/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import DevilHeadPanel from "../Common/DevilHeadPanel";
import PlayerCard from "../PlayerInfo/PlayerCard";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleLogPlayerInfo extends cc.Component {

    @property(cc.Node)
    node_devil: cc.Node = null

    @property(cc.Label)
    label_playerlv: cc.Label = null

    @property(cc.Label)
    label_playername: cc.Label = null

    @property(cc.Label)
    label_unionname: cc.Label = null

    @property(cc.Sprite)
    sp_unionicon: cc.Sprite = null

    @property(cc.Label)
    label_rankscore: cc.Label = null

    @property(cc.Node)
    node_playercards: cc.Node = null

    setView(fightdata:proto.IFightData){
        if(!fightdata){
            return
        }

        this.label_playerlv.string = fightdata.roleLv.toString()
        this.label_playername.string = fightdata.name.toString()
        if(fightdata.allianceName.length > 0){
            this.label_unionname.string = fightdata.allianceName.toString()
            let cfg = tab.Data.AllianceIconTableByID.getValue(fightdata.allianceIcon)
            if(cfg){
                this.sp_unionicon.setTexture(cfg.IconPath)
            }
        }
            
        this.label_rankscore.string = fightdata.rankScore.toString()

        let evilpanle:DevilHeadPanel = this.node_devil.getComponent(DevilHeadPanel)
        if(evilpanle){
            evilpanle.showRedPoint(false)

            if(fightdata.lordData){
                if(!fightdata.talent) fightdata.talent = new proto.TalentData
                if(!fightdata.talent.talentItems) fightdata.talent.talentItems =  new Array<proto.TalenItem>()
                evilpanle.initDevilDataOfStaticID(fightdata.lordData.staticId,fightdata.lordData.level, fightdata.talent.talentItems, false)
            } else {
                evilpanle.initDevilDataOfStaticID(0,0,[],false)
            }
        }

        let cards:PlayerCard[] = this.node_playercards.getComponentsInChildren(PlayerCard)
        if(cards && cards.length > 0){
            for(let i = 0; i<fightdata.deckData.length && i < cards.length; i++){
                cards[i].initData(fightdata.deckData[i].staticId, fightdata.deckData[i].level, false)
            }
        }
    }
}
