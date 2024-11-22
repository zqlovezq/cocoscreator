/*
 * @Descripttion: 
 */

import { tab } from "../../Table/table_gen";
//import PullCardResult from "../PullCard/PullCardResult";
import { CreateSpine, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { isValidObj, kOneNumber, kTwoNumber, kZeroNumber } from "./CommonInterface";
import RichTextOneByOne from "./NewRichText";
import NewRichtxx from "./NewRichText";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GetNewCard extends PopLayer {

    @property(cc.Label)
    heroname: cc.Label = null;

    @property(RichTextOneByOne)
    desc:RichTextOneByOne = null

    @property(cc.Label)
    usefultype: cc.Label = null

    @property(cc.Node)
    spinelight: cc.Node = null

    @property(cc.Node)
    spinehero: cc.Node = null

    private _callback: Function = null;

    public static showIDSVec:number[] = []

    public static showVec(cardids:number[]){
        if(cardids.length <= 0) {
            return
        }
        
        GetNewCard.showIDSVec = []
        GetNewCard.showIDSVec = cardids

        GetNewCard.showOneByOne()
    }

    public static async showOneByOne(){
        if(GetNewCard.showIDSVec.length <= 0){
            return
        }

        let cardID = GetNewCard.showIDSVec.shift()
        let getNewCard = await showPopLayerV2("prefab/GetNewCard", GetNewCard)
        getNewCard.setView(cardID)
        getNewCard.setCloseCallBack(function(){
            GetNewCard.showOneByOne()
        })
    }
    
    setView(heroid:number){
        let cardcfg:tab.CardTable = tab.Data.CardTableByID.getValue(heroid)
        if(cardcfg == undefined){
            return
        }

        let thistemp = this
        CreateSpine(cardcfg.PortraitSpineID).then((sk:sp.Skeleton)=>{
            if(sk)
            {
                thistemp.spinehero.addChild(sk.node)
                sk.setAnimation(0, "idle", true)
                sk.node.color = cc.Color.BLACK
                thistemp.scheduleOnce(()=>{ sk.node.color = cc.Color.WHITE}, 0.5)               
            }
        })

        //先播闪光
        let lightspine:sp.Skeleton = this.spinelight.getComponent(sp.Skeleton)
        if(lightspine){
            lightspine.setAnimation(0, "idle1", false)
            lightspine.setCompleteListener(()=>{
                lightspine.setAnimation(0, "idle1_2", true)
                lightspine.setCompleteListener(null)
            })
        }

        this.scheduleOnce(()=>{this.desc.startPlay(cardcfg.Describe)}, 1.2)
        this.usefultype.string = cardcfg.AttrTypeDes
        this.heroname.string = cardcfg.Name;
        this.setCardQuality(heroid);
    }

    private setCardQuality(heroId: number){
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(heroId);
        if(isValidObj(itemTab)){
            let qualityTab: tab.QualityTable = tab.Data.QualityTableByQuality.getValue(itemTab.Quality);
            if(isValidObj(qualityTab)){
                this.setLabelColor(this.usefultype, qualityTab.ColorRGB);
                this.setLabelColor(this.heroname, qualityTab.ColorRGB);
            }
        }
    }

    private setLabelColor(lblNode: cc.Label, paramColors:number[]){
        lblNode.node.color = cc.color(paramColors[kZeroNumber], paramColors[kOneNumber], paramColors[kTwoNumber]);
    }

    start () {}

    /* 绑定回调事件
     * @param cb 回调事件
     */
    public setClickCallback(cb: Function){
        this._callback = cb;
    }

    private onClickHide(){
        if(this._callback){
            this._callback();
        }
        
        this.setVisible(false);
    }
}
