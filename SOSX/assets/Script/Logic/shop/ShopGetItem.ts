/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import GetNewCard from "../Common/GetNewCard";
import Role from "../Common/Role";
import { CreateSpine, LoadResAsync, setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import ShopMain from "./ShopMain";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopGetItem extends PopLayer {
    @property(cc.Node)
    cardnode: cc.Node = null

    @property(cc.ProgressBar)
    prog_bar_exp:cc.ProgressBar = null;

    @property(cc.Sprite)
    prog_guang_icon: cc.Sprite = null

    @property(cc.Sprite)
    spr_bar_full: cc.Sprite = null;

    @property(cc.Label)
    lbl_exp:cc.Label = null;

    @property(cc.Sprite)
    spr_up_arrow:cc.Sprite = null;

    @property(cc.Node)
    copynode: cc.Node = null

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null

    @property(cc.Node)
    spinenode: cc.Node = null

    @property(cc.Sprite)
    spr_card_bg: cc.Sprite = null
    
    @property(cc.Sprite)
    spr_portrait:cc.Sprite = null;
   
    @property(cc.Label)
    canget_cardnumber:cc.Label = null;

    @property(cc.Label)
    cardNameLable: cc.Label = null    

    @property(cc.Label)
    cardNameLable2: cc.Label = null    

    @property(cc.Node)
    itemNode: cc.Node = null

    @property(cc.Label)
    nameLable: cc.Label = null

    @property(cc.Label)
    itemcount: cc.Label = null

    @property(cc.Sprite)
    itemforbuy: cc.Sprite = null 

    @property(cc.Sprite)
    costIcon: cc.Sprite = null

    @property(cc.Label)
    costNum: cc.Label = null

    @property(cc.Button)
    close: cc.Button = null

    @property(cc.Button)
    OK: cc.Button = null

    @property(cc.Button)
    buybtn: cc.Button = null

    @property(cc.Node)
    aleadybuynode: cc.Node = null

    @property(cc.Node)
    spinebone1: cc.Node = null

    @property([cc.Node])
    boneNodes: cc.Node[] = []

    _index:number = 0;
    _buytype:number = -1;
    _notenough1:boolean = false
    _notenough2:boolean = false

    _buyItemId:number = 0;

    _skel:sp.Skeleton = null
    private _buyItemCount: number;
   // protected m_clickCallback:Function = null;

    onLoad(){
        //this.close.node.on("click", this.onclose, this)
        // this.OK.node.on("click", this.onOk, this)
        Net.listenProtocol(proto.Ptl.BuyShopGoodsRsp, (buffer, ptl)=>{
            let msg = proto.Msg_BuyShopGoodsRsp.decode(buffer)
            cc.log("BuyShopGoodsRsp (购买商店商品) msg: "+JSON.stringify(msg))
            if(msg != null){
                if(msg.result == 0){
                    if(msg.buyType == proto.ShopGoodsType.Special){
                        this.buybtn.node.active = false
                        this.aleadybuynode.active = true
                        this._skel.paused = false
                        setGray(this.spr_portrait, true)
                        this.canget_cardnumber.node.active = false

                        let ani:cc.Animation = this.prog_bar_exp.getComponent(cc.Animation)
                        if(ani){
                            this.prog_guang_icon.node.active = true;
                            ani.play()
                        }

                        this._skel.setCompleteListener(()=>{
                            this.canget_cardnumber.node.active = true
                            this.canget_cardnumber.string = "x0"
                            ani.stop()
                            this.prog_guang_icon.node.active = false
                            this.setProgress(this._buyItemId)
                        })

                        //如果是新获得卡牌
                        // let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(msg.goods[0].rewardId);
                        // if(cardInfo && cardInfo.count == msg.goods[0].rewardCount){
                        //     showPopLayerV2("prefab/GetNewCard", GetNewCard).then(getNewCard => {
                        //         getNewCard.setView(msg.goods[0].rewardId);
                        //     });
                        // }
                    } else {
                        this.hide()
                    }
               }
           }
       }, this)
       this._skel = this.spinenode.getComponent(sp.Skeleton)
   }

    onclose(btn){
       this.hide()
    }

    onOk(btn){
        if(this._notenough1){
            //只有购买 卡牌和 金币才能进入该界面
            ShowTips("OnlyGoldNotEnough")
            return;
        }

        if(this._notenough2){
            ShowTips("DiamondNotEnough")
            return
        }

       ShopMain.sBuyType  = 0

       let param = new proto.Msg_BuyShopGoodsReq()
       param.index = this._index
       param.buyType = this._buytype
       Net.Send(proto.Ptl.BuyShopGoodsReq, param)
    }
    
    /* buyitem RewardSimpleInfo {rewardId: 22001, rewardCount: 2} */
    /* costitem RewardSimpleInfo ItemSimpleInfo {itemId: 1, itemCount: 400} */
        /*index 1 */
        /* showtype 2 */
        /* buytype 0 */
    setShopView(buyitem:proto.IRewardSimpleInfo, costitem:proto.IItemSimpleInfo, index:number,showtype:1|2,  buytype:proto.ShopGoodsType){
        this._notenough1 = false
        this._notenough2 = false

        this.itemNode.active = (showtype==1) /* 道具 */
        this.cardnode.active = (showtype==2) /* 卡牌 */

        this._index = index;
        this._buytype = Number(buytype)
        this._buyItemId = buyitem.rewardId
        this._buyItemCount = buyitem.rewardCount

        if(costitem){
            let costcfg = tab.Data.ItemTableByID.getValue(costitem.itemId)
            if(costcfg){
                this.costIcon.setTexture(costcfg.Icon)
            } else {

            }
            
            let red = new cc.Color(247, 18, 22)
            if(costitem.itemId != 2){ 
                //let gold = Role.Instance.RoleData.gold
                Role.Instance.RoleData.gold < costitem.itemCount ? this.costNum.node.color = red : this.costNum.node.color = cc.Color.WHITE
                this._notenough1 = Role.Instance.RoleData.gold < costitem.itemCount
            } else {
                //let diamond = Role.Instance.RoleData.diamond
                Role.Instance.RoleData.diamond  < costitem.itemCount ? this.costNum.node.color = red : this.costNum.node.color = cc.Color.WHITE
                this._notenough2 = Role.Instance.RoleData.diamond < costitem.itemCount 
            }
            this.costNum.string = String(costitem.itemCount)
        }

        if(buyitem){
            if(buytype == proto.ShopGoodsType.Gold){
                this.itemcount.string = String(buyitem.rewardCount)
                let goldcfg = tab.Data.ShopGoldGoodsTableByPos.getValue(index+1)
                if(goldcfg){
                    this.itemforbuy.setTexture(goldcfg.IconUrl)
                    this.nameLable.string = goldcfg.ShowName;
                }
            } else if(buytype == proto.ShopGoodsType.Diamond){
                this.itemcount.string = String(buyitem.rewardCount)
                let cfg = tab.Data.ShopDiamondGoodsTableByPos.getValue(index+1)
                if(cfg) {
                    this.itemforbuy.setTexture(cfg.IconUrl)
                    this.nameLable.string = cfg.ShowName;
                }
            } else {
                this.setCardBgAndIcon();
                let itemcfg:tab.ItemTable = tab.Data.ItemTableByID.getValue(buyitem.rewardId)
                if(itemcfg){
                    this.cardNameLable.string = itemcfg.Name
                    this.cardNameLable2.string = itemcfg.Name
                    let qualityTab  = tab.Data.QualityTableByQuality.getValue(itemcfg.Quality);
                    if(qualityTab){          
                        this.cardNameLable.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
                        this.cardNameLable2.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);;
                    }              
                }
                this.canget_cardnumber.string = "x" + String(buyitem.rewardCount);
                this.setProgress(buyitem.rewardId);
            }
        }
    }

    /*  */
    private setProgress(buyitemid:number) {
        let itemcfg:tab.ItemTable = tab.Data.ItemTableByID.getValue(buyitemid)
        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(buyitemid);
        let cardUpLevelTab: tab.CardUpLevelTable = tab.Data.CardUpLevelTableByQuality.getValue(itemcfg.Quality);
        if (null != cardUpLevelTab) {
            let tempArr = cardUpLevelTab.Count;
            let idx = kZeroNumber;
            while ((idx = tempArr.indexOf(kZeroNumber, kOneNumber)) > kNegativeOneNumber) {
                if (idx > kNegativeOneNumber) {
                    tempArr.splice(idx, kOneNumber);
                }
            }
            let upLevelNeed = 1;
            if(1 <= tempArr.length){
                upLevelNeed = tempArr[1]
            }

            if(cardInfo!= undefined &&  cardInfo.level < tempArr.length){
                upLevelNeed =  tempArr[cardInfo.level];
            }

            if (isValidObj(cardInfo)){
                this.setUpLvProgressBar(cardInfo.count, upLevelNeed);
            } else {
                this.setUpLvProgressBar(kZeroNumber, upLevelNeed);
            }
        }
    }

    /*  */
    async setCardBgAndIcon(){
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._buyItemId);
        if (!isValidObj(cardTabData)){
            return;
        }

        let sf = await LoadResAsync(cardTabData.Icon, cc.SpriteFrame)
        if(sf) {
            if(this.spr_portrait){
                this.spr_portrait.spriteFrame = sf;
            }
        }

        let qualityTab = tab.Data.QualityTableByQuality.getValue(cardTabData.Quality);
        if(isValidObj(qualityTab)){
            let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame)
            if(sf) {
                if(this.spr_bg){
                    this.spr_bg.spriteFrame = sf;
                }
            }
            
            sf = await LoadResAsync(qualityTab.QualityBG, cc.SpriteFrame);
            if(sf){
                if(this.spr_card_bg){
                    this.spr_card_bg.spriteFrame = sf;
                }
            }
        }
        this.setSpineAttach(this._buyItemCount)
    }

    /*  */
    public setSpineAttach(count:number) {
        let attachnum = {
            attach0:[1,2,3,4,5,6,7,8,9],
            attach1:[1],
            attach2:[1,2,6],
            attach3:[1,2,3,5,6,7],
            attach4:[1,2,3,4,5,6,7,8],            
        }
        let spinename:string = "idle" + count
        if(count > 5 && count < 10){
            spinename = "idle6"
        }else if(count >= 10){
            spinename = "idle7"
        }else{

        }

        let names = "attach" + count
        let needK:number[] = attachnum[names] || attachnum.attach0
        for(let i = 0; i<needK.length; i++){
            let card = cc.instantiate(this.copynode)       
            this.boneNodes[needK[i]-1].addChild(card)            
            card.setPosition(new cc.Vec2(0,0))
        }
        
        this._skel.setAnimation(0, spinename, false)
        this._skel.paused = true 
    }

    /*  */
    private async setCardLevelBarBg(iconURL: string){
        // let sf = await LoadResAsync(iconURL, cc.SpriteFrame);
        // if(sf) {
        //     if( this.spr_card_bottom_rect){
        //         this.spr_card_bottom_rect.spriteFrame = sf;
        //     }
        // }
    }

    /*  */
    private setUpLvProgressBar(ownCount: number, needCount: number, bShow: boolean = true){
        this.lbl_exp.node.active = bShow;
        this.spr_up_arrow.node.active = bShow;
        this.prog_bar_exp.node.active = bShow;
        ownCount = ownCount > kZeroNumber ? (ownCount - kOneNumber) : ownCount; //必须减掉自身【设计缺陷】

        if(!bShow){
            this.playCardUpLvArrowAnim(false);
            return;
        }
        
        this.lbl_exp.string = `${ownCount}/${needCount}`;
        this.prog_bar_exp.progress = (ownCount / needCount > kOneNumber) ? kOneNumber : ownCount / needCount;
        let bFull = ownCount >= needCount;
        this.spr_up_arrow.node.active = ownCount >= needCount;
        this.spr_bar_full.node.active = ownCount >= needCount;
        this.playCardUpLvArrowAnim(bFull);
    }

    /*  */
    public playCardUpLvArrowAnim(bPlay: boolean){
        if(!this.spr_up_arrow.node.active){
            return;
        }
        
        let animNode = this.spr_up_arrow.getComponent(cc.Animation);
        if(animNode){
            bPlay ? animNode.play("card_arrow_uplv") : animNode.stop("card_arrow_uplv");
        }
    }
}
