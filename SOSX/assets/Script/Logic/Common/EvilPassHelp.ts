
import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import MainsceneBossBox from "../BossBox/MainsceneBossBox";
import PassportFunc from "../passport/PassportFunc";
import { getBoxIDAndCfg, getItemIconURL } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EvilPassHelp extends PopLayer {
    @property([cc.Node])
    quecardnode:cc.Node[] = []

    @property([cc.Label])
    quecardnode_number: cc.Label[] = []

    @property(cc.Node)
    goldndoe: cc.Node = null

    @property(cc.Label)
    goldnum: cc.Label = null

    @property(cc.Node)
    demondoe: cc.Node = null

    @property(cc.Label)
    demonum: cc.Label = null

    @property(cc.Node)
    buffnode: cc.Node = null

    @property(cc.Label)
    bufftime: cc.Label = null

    @property(cc.Node)
    emojnode: cc.Node = null


    @property(cc.Sprite)
    emojIcon:cc.Sprite = null

    @property(cc.Node)
    mapnode: cc.Node = null

    @property(cc.Sprite)
    mapIcon:cc.Sprite = null

    start () {
        //设置首领宝箱上的统计奖励(只统计  宝箱卡牌，buff , 金币)
        let goldnum = 0
        let demonum = 0

        let bufftime = 0
        let emojID = 0
        let mapID = 0
        let que2num:Map<number, number> = new Map<number, number>()  //<品质，数量>

        for(let idx = 0; idx < PassportFunc.bossBoxCfgData.length; idx++){
            const data =  PassportFunc.bossBoxCfgData[idx];
            if(data.PassItemType == tab.RewardType.RewardType_BoxGroupType){
                let info = getBoxIDAndCfg(data.PassItemId)
                let cfg = info.boxCfg
                if(cfg){
                    for(let i = 0; i<cfg.CardCount.length; i++){
                        if(cfg.CardCount[i] > 0){
                            if(cfg.CardWeight[i] >= 1000){
                                que2num.set(cfg.CardType[i], (que2num.get(cfg.CardType[i]) || 0) + cfg.CardCount[i])
                            }
                        }
                    }                    
                }
            }else if(data.PassItemType == tab.RewardType.RewardType_BagSpeedUp){
                let cfg = tab.Data.BagSpeedUpTableByID.getValue(data.PassItemId);
                if(cfg){
                    bufftime += (Math.floor(cfg.BagSpeedUpTime/3600) * data.PassItemCnt)
                }
            } else if(data.PassItemType == tab.RewardType.RewardType_ItemType && data.PassItemId == proto.ConstItemID.CTI_Gold){
                goldnum += data.PassItemCnt
            } else if(data.PassItemType == tab.RewardType.RewardType_ItemType && data.PassItemId == proto.ConstItemID.CTI_Diamond) {
                demonum += data.PassItemCnt
            } else if(data.PassItemType == tab.RewardType.RewardType_Emotion) {
                emojID = data.PassItemId
            } else if(data.PassItemType == tab.RewardType.RewardType_BattleMap){
                mapID = data.PassItemId
            }
        }

        this.buffnode.active = bufftime > 0
        this.bufftime.string = `${bufftime}小时`

        this.goldndoe.active = goldnum > 0
        this.goldnum.string = goldnum.toString()

        this.demondoe.active = demonum > 0
        this.demonum.string = demonum.toString()


        let thistemp = this
        que2num.forEach((value, key)=>{
            if(key < thistemp.quecardnode.length){
                thistemp.quecardnode[key].active = true
                thistemp.quecardnode_number[key].string = "x" +  value
            }
        })

        this.emojnode.active = emojID > 0
        if(emojID > 0){
            let iconinfo = getItemIconURL(emojID, tab.RewardType.RewardType_Emotion)
            this.emojIcon.setTexture(iconinfo.icon)
        }

        this.mapnode.active = mapID > 0
        if(mapID > 0){
            let iconinfo = getItemIconURL(mapID, tab.RewardType.RewardType_BattleMap)
            this.mapIcon.setTexture(iconinfo.icon)
        }

    }
}
