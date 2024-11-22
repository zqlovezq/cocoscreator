/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { getQualityIconPath } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import PopLayer from "../Utils/PopLayer";
import { isValidObj, k255, kOneNumber, kTwoNumber, kZeroNumber } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GetOneItem extends PopLayer {

    @property(cc.Label)
    itemname: cc.Label = null;

    @property(cc.Sprite)
    icon: cc.Sprite = null

    @property(cc.Sprite)
    ItemsBG: cc.Sprite = null

    @property(cc.Sprite)
    ItemsFrame: cc.Sprite =null

    @property(cc.Label)
    count: cc.Label = null

    @property(cc.Node)
    spinenode: cc.Node = null

    @property(cc.Node)
    node_normal_item: cc.Node = null;

    @property(cc.Node)
    node_emotion_item: cc.Node = null;

    @property(cc.Sprite)
    spr_emotion: cc.Sprite = null;
    closecall: Function;
    nothide: boolean = false

    showAward_Ex(item:proto.IRewardSimpleInfo){
        if(!item){
            return
        }
        
        this.node.opacity = 255

        let icon: string = "";
        let name: string = "";
        if(item.rewardType == tab.RewardType.RewardType_BattleMap){
            let itemcfg: tab.BattleMapTable = tab.Data.BattleMapTableByID.getValue(item.rewardId);
            if(isValidObj(itemcfg)){
                icon = itemcfg.SmallIcon;
                name = itemcfg.Name;
                this.setEmotionNodeVisible(true);
            }
            
        } else if (item.rewardType === tab.RewardType.RewardType_Emotion){
            let itemCfg: tab.EmojiTable = tab.Data.EmojiTableByID.getValue(item.rewardId);
            if(isValidObj(itemCfg)){
                name = itemCfg.Name;
                icon = itemCfg.StaticIcon;
                this.setEmotionNodeVisible(true);
            }
        } else {
            let itemcfg: tab.ItemTable = tab.Data.ItemTableByID.getValue(item.rewardId);
            if(isValidObj(itemcfg)){
                icon = itemcfg.Icon;
                name = itemcfg.Name;
                this.setEmotionNodeVisible(false);
            }

            let qualityTab = tab.Data.QualityTableByQuality.getValue(itemcfg.Quality)
            this.itemname.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);;   
            
            this.ItemsBG.setTexture(getQualityIconPath(item.rewardId, item.rewardType, true));
            this.ItemsFrame.setTexture(getQualityIconPath(item.rewardId, item.rewardType, false));
        }
         
        this.count.string    = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${item.rewardCount}`;
        this.count.node.active = item.rewardCount > kOneNumber;
        this.itemname.string = name;
        isValidObj(icon) && this.node_normal_item.active && this.icon.setTexture(icon);
        isValidObj(this.spr_emotion) && this.node_emotion_item.active && this.spr_emotion.setTexture(icon);
        let cardcfg = tab.Data.CardTableByID.getValue(item.rewardId)
        if(cardcfg) {
            this.icon.node.scale = 0.87
        } else {
            this.icon.node.scale = 1
        }

        let ani = this.node.getComponent(cc.Animation)
        if(ani){
            ani.playAdditive("get_item_anim")
            ani.playAdditive("get_item_anim_1")
        }
    }

    private setEmotionNodeVisible(bVisible: boolean){
        this.node_emotion_item.active = bVisible;
        this.node_normal_item.active = !bVisible;
    }

    setOneCloseBack(call:Function){
        this.closecall = call
    }

    setNotHide(bhide){
        this.nothide = bhide
    }

    onclose(){
        this.node.opacity = 0

        if(this.closecall){
            this.closecall()
        }

        this.scheduleOnce(()=>{
            if(this.nothide == false) this.hide()                
        }, 0.5)
    }
}
