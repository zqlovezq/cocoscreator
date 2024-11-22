
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import PassportFunc from "../passport/PassportFunc";
import { getBoxIDAndCfg } from "../Utils/GameUtils";
import MainsceneBossBox from "./MainsceneBossBox";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossboxPreviewTips extends cc.Component {

    @property(cc.Label)
    lvName: cc.Label = null;

    @property(cc.Label)
    awardName: cc.Label = null

    @property(cc.Sprite)
    icon: cc.Sprite = null

    curlevel:number = 0
   _bup:boolean = false
    bfinished:boolean = true

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.jumptoindex, this, true)
    }

    jumptoindex() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_BossboxPreviewtips, this.curlevel)
    }

    setCurLevel(arg0: number) {
        this.curlevel = arg0
    }

    //预告通行证奖励
    setView(lv:number){
        if(this.curlevel == lv && this._bup){
            return;
        }

        if(this.bfinished == false){
            return
        }

        this._bup = false

        this.bfinished = false
        this.curlevel = lv
        this.lvName.string = `等级${lv}`
  
        this.setview_ex(lv)
    }

    protected setview_ex(lv){
        let name = ""
        let icon = ""

        if(lv < PassportFunc.bossBoxCfgData.length)
        {
            let cfg =  PassportFunc.bossBoxCfgData[lv]
            let atype = -1
            let id = 0

            if(!cfg.PreviewFlag)
            {
                this.node.active = false
                return
            }

            if(cfg.PreviewFlag == 1)
            {
                atype = cfg.PassItemType
                id = cfg.PassItemId
            }
            else if(cfg.PreviewFlag == 2)
            {
                atype = cfg.ItemType
                id = cfg.ItemId
            }
            else
            {
                this.node.active = false
                return
            }

            if(atype == tab.RewardType.RewardType_BoxGroupType)
            {
                let boxinfo = getBoxIDAndCfg(id)
                if(boxinfo)
                {
                    name  = boxinfo.boxCfg.BoxName
                    icon = boxinfo.boxCfg.ItemIcon || ""
                }
            }
            else if(atype == tab.RewardType.RewardType_BagSpeedUp)
            {
                let upcfg = tab.Data.BagSpeedUpTableByID.getValue(id)
                if(upcfg)
                {
                    name  = upcfg.BagSpeedUpTimeName
                    icon = upcfg.BagSpeedUpTimeIcon || ""
                }
            }
            else if(atype == tab.RewardType.RewardType_BoxType)
            {
                let upcfg = tab.Data.BoxTableByBoxID.getValue(id)
                if(upcfg)
                {
                    name  = upcfg.BoxName
                    icon = upcfg.ItemIcon || ""
                }
            }
            else if(atype == tab.RewardType.RewardType_ItemType)
            {
                let upcfg = tab.Data.ItemTableByID.getValue(id)
                if(upcfg)
                {
                    name  = upcfg.Name
                    icon = upcfg.Icon || ""
                }
            }else if(atype == tab.RewardType.RewardType_BattleMap){
                let mapData = tab.Data.BattleMapTableByID.getValue(id);
                if(isValidObj(mapData)){
                    name = mapData.Name;
                    icon = mapData.SmallIcon;
                }
            }else if(atype == tab.RewardType.RewardType_Emotion){
                let mapData = tab.Data.EmojiTableByID.getValue(id);
                if(isValidObj(mapData)){
                    name = mapData.Name;
                    icon = mapData.StaticIcon;
                }
            }
        }

        this.awardName.string = name
        this.icon.setTexture(icon)

        let ani:cc.Animation = this.node.getComponent(cc.Animation)
        if(ani){
            this._bup = true
            ani.play("BossboxPreviewTips")
            ani.on("finished", ()=>{
                this.bfinished = true
            }, this)
        }
    }

    start () {

    }
}
