/*
 *  道具的提示
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { handleRichText, LoadPreNode } from "../Utils/GameUtils";
import { isValidObj, kNoneString, kTwoNumber, kZeroNumber } from "./CommonInterface";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
//export default class ItemTips extends cc.Component {
export default class ItemTips extends PopLayer {

    @property(cc.RichText)
    lbl_item_desc: cc.RichText = null; /*  */

    private _callback: Function = null; /*  */
    private _preNode: cc.Node = null; /*  */
    
    onLoad () {
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips, (param: any)=>{
            this.node.active = false;
            this._preNode    = null;
        }, this);
    }

    /* TODO: */
    public async setInfo(target:cc.Node,itemid:number, itemDesc: string, callback :Function = null){
        let comp = cc.director.getScene().getComponentInChildren(ItemTips);
        if(!comp){
            comp = await LoadPreNode("prefab/ItemTips",ItemTips);
            cc.director.getScene().addChild(comp.node);
        }
        
        if(!comp){
            return;
        }

        if(itemDesc === kNoneString || comp._preNode === target){
            comp.node.active = false;
            comp._preNode    = null;
            return;
        }

        comp.node.active    = true;
        comp.node.zIndex    = 9999;
        comp._preNode       = target;
        if(callback){
            comp.setClickCallback(callback);
        }

        let targetWorldPos = target.convertToWorldSpaceAR(new cc.Vec2(kZeroNumber, kZeroNumber));
        let targetContent  = target.getContentSize();
        let targetAnchor   = target.getAnchorPoint();
        let thisContent    = {height:26,width:180}//comp.node.getContentSize();
        let visibleSize    = cc.view.getVisibleSize();
        let posX           = targetWorldPos.x;
        let posY           = targetWorldPos.y;

        if(targetWorldPos.x + thisContent.width / kTwoNumber > visibleSize.width){
            posX -= (thisContent.width / kTwoNumber  - targetContent.width * targetAnchor.x);
        }
        else if(targetWorldPos.x - thisContent.width / kTwoNumber < kZeroNumber){
            posX += (thisContent.width / kTwoNumber - targetContent.width * targetAnchor.x);
        }       
        
        //posY = (targetContent.height * targetAnchor.y);
        comp.node.setPosition(new cc.Vec2(posX, posY));

        comp.setItemDesc(itemDesc,itemid);
    }

    /* 显示Tips */
    public static async show(target:cc.Node,itemid:number, itemDesc: string, callback :Function = null){
        let comp = cc.director.getScene().getComponentInChildren(ItemTips);
        if(!comp){
            comp = await LoadPreNode("prefab/ItemTips",ItemTips);
            cc.director.getScene().addChild(comp.node);
        }
        
        if(!comp){
            return;
        }

        if(itemDesc === kNoneString || comp._preNode === target){
            comp.node.active = false;
            comp._preNode    = null;
            return;
        }

        comp.node.active    = true;
        comp.node.zIndex    = 9999;
        comp._preNode       = target;
        if(callback){
            comp.setClickCallback(callback);
        }

        let targetWorldPos = target.convertToWorldSpaceAR(new cc.Vec2(kZeroNumber, kZeroNumber));
        let targetContent  = target.getContentSize();
        let targetAnchor   = target.getAnchorPoint();
        let thisContent    = comp.node.getContentSize();
        let visibleSize    = cc.view.getVisibleSize();
        let posX           = targetWorldPos.x;
        let posY           = targetWorldPos.y;

        if(targetWorldPos.x + thisContent.width / kTwoNumber > visibleSize.width){
            posX -= (thisContent.width / kTwoNumber  - targetContent.width * targetAnchor.x);
        } else if(targetWorldPos.x - thisContent.width / kTwoNumber < kZeroNumber){
            posX += (thisContent.width / kTwoNumber - targetContent.width * targetAnchor.x);
        }
        
        posY -= (targetContent.height * targetAnchor.y);
        comp.node.setPosition(new cc.Vec2(posX, posY));

        comp.setItemDesc(itemDesc,itemid);
    }

    public setClickCallback(cb:Function){
        this._callback = cb;
    }

    private setItemDesc(itemDesc: string,itemid:number){
        this.lbl_item_desc.string = itemDesc;
        let cardData = tab.Data.CardTableByID.getValue(itemid);
        if(isValidObj(cardData)){
            handleRichText(itemid,1,1,this.lbl_item_desc);
        }
    }

    public getVisible(){
        return
    }
}
