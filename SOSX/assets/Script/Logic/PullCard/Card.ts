import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import { ICardInfo } from "./PullCardResult1";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Card extends cc.Component {
    @property(cc.Sprite)
    spr_portrait: cc.Sprite = null;

    @property(cc.Label)
    lbl_count: cc.Label = null;

    @property(cc.Sprite)
    spr_new: cc.Sprite = null;

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.Label)
    lbl_name: cc.Label = null;

    start () {}

    public async initWithInfo(cardInfo: ICardInfo){
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(cardInfo.id);
        if (null == cardTabData){
            return;
        }

        // 金币
        if(cardInfo.id == tab.Data.GetKeyValue_ConfigTable().JinbiItemId){
            let iconPath = tab.Data.GetKeyValue_ConfigTable().PullCardGoldIcon;
            this.spr_portrait.setTexture(iconPath);    
        }
        else{
            this.spr_portrait.setTexture(cardTabData.Icon);
        }
        
        let qualityTab = tab.Data.QualityTableByQuality.getValue(cardTabData.Quality);
        if(qualityTab){
            this.spr_bg.setTexture(qualityTab.QualityFrame);
        }

        this.lbl_count.string = "x" + cardInfo.count.toString();
        this.spr_new.node.active = cardInfo.isNew;

        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(cardInfo.id);
        if (!isValidObj(itemTab)) {
            return;
        }
        this.lbl_name.string = itemTab.Name
        this.lbl_name.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
    }
}
