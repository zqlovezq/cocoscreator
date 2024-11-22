/*
 * @Descripttion: 战斗场内自我卡牌信息模块
 */

import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import { LoadResAsync } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FightSelfCardInfo extends cc.Component {

    @property(cc.Sprite)
    spr_item_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_item_icon: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Label)
    lbl_card_name: cc.Label = null;

    @property(cc.Label)
    lbl_card_lv: cc.Label = null;

    // @property(cc.Label)
    // lbl_card_quality: cc.Label = null;

    @property(cc.Label)
    lbl_attr_title: cc.Label = null;

    @property(cc.RichText)
    rich_txt_description: cc.RichText = null;

    private _card_id: number;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, ()=>{
            /*Net.pushLoaclMessage(LOCAL_MESSAGE.ClosedCardInfoDetail);
            this.node.active = false;
            this._card_id = kNegativeOneNumber;*/
            this.closedPage();
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.ClosedCardInfoDetail, (param: any)=>{
            this.closedPage();
        }, this);
    }

    start () {}

    public setData(cardID: number, cardLv: number){
        if(this._card_id == cardID){
            this.node.active = false;
            this._card_id = kNegativeOneNumber;
            return;
        }
        
        this.node.active = true;
        this._card_id = cardID;
        this.setCardInfo();
        this.setCardQuality();
        this.setCardLv(cardLv);

        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.FightSelfCardInfoPage);/* zhibo-@20230410 for <删除打点> */
        Net.pushLoaclMessage(LOCAL_MESSAGE.PopCardInfoDetail);
    }

    private setCardInfo(){
        let cardTab: tab.CardTable = tab.Data.CardTableByID.getValue(this._card_id);
        if(isValidObj(cardTab)){
            this.setCardName(cardTab.Name);
            this.setCardDesc(cardTab.Describe);
            this.setCardAttrTitle(cardTab.AttrTypeDes);
        }
    }
    
    private setCardLv(cardLv: number){
        this.lbl_card_lv.string = `${cardLv}`;
    }

    private setCardName(name: string){
        this.lbl_card_name.string = name;
    }

    private setCardDesc(desc: string){
        this.rich_txt_description.string = desc;
    }

    private setCardAttrTitle(title: string){
        this.lbl_attr_title.string = title;
    }

    private setCardQuality(){
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_id);
        if(isValidObj(itemTab)){
            let qualityTab: tab.QualityTable = tab.Data.QualityTableByQuality.getValue(itemTab.Quality);
            if(isValidObj(qualityTab)){
                //this.lbl_card_quality.string = qualityTab.QualityDescrible;
                this.setLabelColor(this.lbl_card_name, qualityTab.ColorRGB);
                this.setLabelColor(this.lbl_attr_title, qualityTab.ColorRGB);

                this.setCardBg(qualityTab.QualityBG);
                this.setCardIcon(itemTab.Icon);
                this.setCardFrame(qualityTab.QualityFrame);
            }
        }
    }

    private setLabelColor(lblNode: cc.Label, paramColors:number[]){
        lblNode.node.color = cc.color(paramColors[kZeroNumber], paramColors[kOneNumber], paramColors[kTwoNumber]);
    }

    private setCardBg(icon: string){
        this.setCardTexture(icon, this.spr_item_bg);
    }

    private setCardFrame(icon: string){
        this.setCardTexture(icon, this.spr_frame);
    }

    private setCardIcon(icon: string){
        this.setCardTexture(icon, this.spr_item_icon);
    }

    private async setCardTexture(icon: string, sprNode: cc.Sprite){
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if(sf) {
            if(sprNode){
                sprNode.spriteFrame = sf;
            }
        }
    }

    private closedPage(){
        this.node.active = false;
        this._card_id    = kNegativeOneNumber;
    }
}
