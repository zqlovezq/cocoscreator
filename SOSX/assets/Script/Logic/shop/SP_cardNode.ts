
import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import StarAndValueTip from "../Common/StarAndValueTip";
import { CreateSpineFromPool, destroyChessSpineStar, getBoxIDAndCfg, LoadResAsync, setChessEffect, setChessSpineStar, setGray, ShowTips } from "../Utils/GameUtils";

const kSpecialGoldNumber = 500;

const { ccclass, property } = cc._decorator;

@ccclass
export default class SP_cardNode extends cc.Component {

    @property(cc.Sprite)
    itembg: cc.Sprite = null

    @property(cc.Label)
    beishu_lock: cc.Label = null

    @property(cc.Node)
    price_jinbi_or_zuanshi: cc.Node = null

    @property(cc.Sprite)
    price_icon_qb: cc.Sprite = null

    @property(cc.Label)
    price_num: cc.Label = null

    @property(cc.Label)
    yilingqu: cc.Label = null

    @property(cc.Label)
    freetxt: cc.Label = null

    @property(cc.Node)
    cardnode: cc.Node = null

    @property(cc.ProgressBar)
    prog_bar_exp: cc.ProgressBar = null;

    @property(cc.Node)
    progressnode: cc.Node = null

    @property(cc.Sprite)
    spr_bar_full: cc.Sprite = null;

    @property(cc.Label)
    lbl_exp: cc.Label = null;

    @property(cc.Sprite)
    spr_up_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null

    @property(cc.Sprite)
    spr_portrait: cc.Sprite = null;

    @property(cc.Sprite)
    spr_card_bg: cc.Sprite = null;

    @property(cc.Label)
    canget_cardnumber: cc.Label = null;

    @property(cc.Label)
    cardNameLable: cc.Label = null

    @property(cc.Label)
    cardQualityLable: cc.Label = null

    @property(cc.Node)
    itemNode: cc.Node = null

    @property(cc.Node)
    lockbg: cc.Node = null

    @property(cc.Label)
    nameLable: cc.Label = null

    @property(cc.Label)
    itemcount: cc.Label = null

    @property(cc.Sprite)
    itemforbuy: cc.Sprite = null

    @property(cc.Layout)
    yuannode: cc.Layout = null

    @property(cc.Label)
    yuannumber: cc.Label = null

    @property(cc.Node)
    buyNode: cc.Node = null

    @property(cc.Sprite)
    itemitembg: cc.Sprite = null

    @property(cc.Sprite)
    newcardFlag: cc.Sprite = null;

    @property(cc.Sprite)
    spr_first_double: cc.Sprite = null;
    @property(cc.Sprite)
    spr_other: cc.Sprite = null;

    @property(cc.Label)
    lbl_multi: cc.Label = null

    @property(cc.Label)
    lbl_double: cc.Label = null

    @property(cc.Sprite)
    spr_reddot: cc.Sprite = null

    @property(cc.Sprite)
    chess_bg: cc.Sprite = null;
    @property(sp.Skeleton)
    effect_spine: sp.Skeleton = null;
    @property(cc.Sprite)
    effect_frame: cc.Sprite = null;
    @property(cc.Sprite)
    card_bg: cc.Sprite = null;


    private static_id: number = 0;      //静态id
    private index: number = 0;
    public lefttimes: number = 0;
    private islocked: boolean = false;
    public clickcallback: Function = null;
    private _bGoldNode: boolean = false; // 是否是金币节点
    private _goldMumber: number = 0; // 金币的额度
    private _itemcount: number = 0;
    private _price: number = kZeroNumber;

    /*  */
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onclick, this);
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlaySpecialGoldNodeEffect, (param: any) => {
            this.playSpeicalGoldNodeEffect();
        }, this);
        this.spr_first_double.node.active = false;
        this.spr_other.node.active = false
        this.lbl_multi.node.active = false;
        this.lbl_double.node.active = false;
    }

    /*  */
    unlockView(unlocknumber: number) {
        this.price_jinbi_or_zuanshi.active = false
        let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
        let str2 = tab.Data.TipsTableByKey.getValue("Leveltxt").Value || ""
        this.beishu_lock.string = str + str2 + unlocknumber.toString()
    }

    /*  */
    setLeftTimesSimple(lefttimes: number) {
        this.lefttimes = lefttimes;
    }

    /*  */
    setLeftTimes(leftBuyTimes: number) {
        this.lefttimes = leftBuyTimes;
        if (leftBuyTimes == 0) {
            this.yilingqu.node.active = true;
            this.freetxt.node.active = false;
            this.price_jinbi_or_zuanshi.active = false;
            this.progressnode.active = false
            this.spr_reddot.node.active = false
            this.newcardFlag.node.active = false
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetShopReddotVisible, { bshow: this.freetxt.node.active, name: "spcard" })
        }
    }

    /*  */
    public initItem(index: number,
        buyitem: proto.IRewardSimpleInfo,
        costitem: proto.IItemSimpleInfo,
        islock: boolean,
        unlocknumber: number = 0,
        cash: number = 0,
        func: Function = null,
        bincardfirst: boolean = false) {
        this._bGoldNode = false;
        this._goldMumber = isValidObj(costitem) ? costitem.itemCount : 0;
        this.lockbg.active = islock
        if (islock) {
            let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
            let str2 = tab.Data.TipsTableByKey.getValue("Leveltxt").Value || ""
            this.beishu_lock.string = str + str2 + unlocknumber.toString()
        }

        this.cardnode.active = false
        this.index = index;
        this.islocked = islock

        this.clickcallback = func;

        if (islock) {
            this.itembg.node.active = false
            this.itemNode.active = false
            this.buyNode.active = false;
            return;
        }
        setGray(this.card_bg,false)
        this.buyNode.active = true
        this.itembg.node.active = true
        this.itemNode.active = true

        this.itemforbuy.node.setScale(1)
        this.itemitembg.node.active = true

        this.itemcount.node.active = true
        this.itemcount.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${buyitem.rewardCount}`;//String(buyitem.rewardCount)
        this._itemcount = buyitem.rewardCount

        if (cash > 0) {
            let cfg: tab.ShopDiamondGoodsTable = tab.Data.ShopDiamondGoodsTableByPos.getValue(index + 1)
            this.itemforbuy.setTexture(cfg.IconUrl)
            this.nameLable.string = String(cfg.ShowName)
        } else if (cash < 0) {
            let itemTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(buyitem.rewardId)
            if (itemTabData) {
                this.nameLable.string = String(itemTabData.Name)
            }

            if (buyitem.rewardType == tab.RewardType.RewardType_ItemType) {
                if (buyitem.rewardId == proto.ConstItemID.CTI_Gold) { //金币
                    this.itemforbuy.setTexture(tab.Data.GetKeyValue_ConfigTable().PullCardGoldIcon)
                } else if (buyitem.rewardId == proto.ConstItemID.CTI_Diamond) { //钻石
                    this.itemforbuy.setTexture(tab.Data.GetKeyValue_ConfigTable().PullCardDiamonIcon)
                } else {

                }
            } else if (buyitem.rewardType == tab.RewardType.RewardType_BoxGroupType) { /* 宝箱组 */
                let info = getBoxIDAndCfg(buyitem.rewardId)
                if (info.boxCfg) {
                    this.itemforbuy.setTexture(info.boxCfg.ItemBigIcon)
                    this.itemforbuy.node.setScale(0.54)
                    this.itemitembg.node.active = false
                    this.itemcount.node.active = false
                    this.nameLable.string = info.boxCfg.BoxName
                }
            }
        } else {
            let cfg: tab.ShopGoldGoodsTable = tab.Data.ShopGoldGoodsTableByPos.getValue(index + 1);
            if (!isValidObj(cfg)) {
                if (!cc.sys.isNative) {
                    cc.error("超出商品表配置范围了");
                }
                return;
            }
            this.itemforbuy.setTexture(cfg.IconUrl)
            this.nameLable.string = String(cfg.ShowName)
        }
        this.setCostInfo(costitem, false, false, cash, bincardfirst)
    }

    /* 设置钻石是否首充 */
    public setDiamondIsFirstRecharge(bFirst: boolean, cashAdd: number, cashFirstAdd: number) {
        this.spr_first_double.node.active = bFirst;
        let first_price = this.spr_first_double.node.getChildByName("first_txt").getComponent(cc.Label);
        let spr_price = this.spr_other.node.getChildByName("other_layout").getChildByName("other_txt").getComponent(cc.Label);
        if (bFirst) {
            this.spr_other.node.active = false;
            first_price.node.active = cashFirstAdd > kZeroNumber;
            first_price.string = cashFirstAdd + "";
        } else {
            this.spr_other.node.active = cashAdd > kZeroNumber;
            spr_price.string = cashAdd + "";
        }
        //this.lbl_multi.node.active        = bFirst;
        //this.lbl_double.node.active       = bFirst;
    }

    /*  */
    public setDiamondPrice(price: number) {
        this._price = price;
    }

    /*  */
    public setGoldNode() {
        this._bGoldNode = true;
    }

    /*  */
    public initCard(index: number, buyitem: proto.IRewardSimpleInfo, costitem: proto.IItemSimpleInfo, lefttimes: number, islock: boolean, unlocknumber: number, func: Function,bincardfirst: boolean = false) {
        //cc.log("SP_cardNode.ts: initCard() index: " + index + ", islock: " + islock)
        this.itembg.node.active = false
        this.itemNode.active = false
        this.lockbg.active = islock

        if (islock) {
            let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
            let str2 = tab.Data.TipsTableByKey.getValue("Leveltxt").Value || ""
            this.beishu_lock.string = str + str2 + unlocknumber.toString()
        }

        this.static_id = buyitem.rewardId
        this.index = index;
        this.lefttimes = lefttimes
        this.islocked = islock

        this.clickcallback = func;

        if (islock) {
            this.cardnode.active = false
            this.buyNode.active = false
            setGray(this.card_bg, true);
            return;
        }
        setGray(this.card_bg, false);
        this.buyNode.active = true
        this.cardnode.active = true
        this.refreshCard(buyitem.rewardCount);
        let bfind = false
        let shopindexnumbers: number[] = tab.Data.GetKeyValue_ConfigTable().ShopSpecialFreePos;
        for (let i = 0; i < shopindexnumbers.length; i++) {
            if (index + 1 == shopindexnumbers[i]) {
                bfind = true;
                break
            }
        }

        this.setCostInfo(costitem, lefttimes <= 0, bfind, 0,bincardfirst)
    }

    /*  */
    setCostInfo(costitem: proto.IItemSimpleInfo, bAleadyGet: boolean, bfree: boolean, yuan: number, bincardfirst: boolean = false) {
        this.yilingqu.node.active = bAleadyGet
        this.progressnode.active = !bAleadyGet
        this.freetxt.node.active = bfree && !bAleadyGet
        this.price_jinbi_or_zuanshi.active = false
        this.yuannode.node.active = false

        if (!bAleadyGet && costitem && costitem.itemId) {
            this.price_jinbi_or_zuanshi.active = true
            this.price_num.string = String(costitem.itemCount)
            let costdata: tab.ItemTable = tab.Data.ItemTableByID.getValue(costitem.itemId)
            if (costdata) {
                this.price_icon_qb.setTexture(costdata.Icon)
            }
        }

        if (yuan > 0) {
            this.yuannode.node.active = true
            this.yuannumber.string = String(yuan)
        }

        if (bincardfirst) {
            this.freetxt.node.active = this.lefttimes > 0;
            this.yilingqu.node.active = this.lefttimes <= 0;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetShopReddotVisible, { bshow: this.freetxt.node.active, name: "spcard" })
            this.spr_reddot.node.active = this.freetxt.node.active
        }
    }

    /*  */
    async refreshCard(itemcount: number) {
        this.spr_bar_full.node.active = false
        this.progressnode.active = true;
        this.setCardBgAndIcon();
        this.canget_cardnumber.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${itemcount}`;//"x" + String(itemcount);
        let itemcfg: tab.ItemTable = tab.Data.ItemTableByID.getValue(this.static_id)
        this.cardNameLable.string = itemcfg.Name
        let qualityTab = tab.Data.QualityTableByQuality.getValue(itemcfg.Quality);
        if (qualityTab) {
            this.cardNameLable.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);;
            this.cardQualityLable.string = qualityTab.QualityDescrible;
            this.cardQualityLable.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);;
        }
        this.refreshProgress()
    }

    /*  */
    refreshProgress() {
        if (this.static_id <= 0 || this.progressnode.active == false) {
            return
        }

        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(this.static_id);

        if (tab.Data.CardTableByID.getValue(this.static_id)) {
            this.newcardFlag.node.active = cardInfo == undefined || cardInfo.count <= 0
        }
        // let cardTabData: tab.CardTable = tab.Data.CardTableByID.getValue(this.static_id);
        let itemcfg: tab.ItemTable = tab.Data.ItemTableByID.getValue(this.static_id)
        if (itemcfg) {
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
                if (1 <= tempArr.length) {
                    upLevelNeed = tempArr[1]
                }

                if (cardInfo != undefined && cardInfo.level < tempArr.length) {
                    upLevelNeed = tempArr[cardInfo.level];
                }

                if (isValidObj(cardInfo)) {
                    this.setUpLvProgressBar(cardInfo.count, upLevelNeed);
                } else {
                    this.setUpLvProgressBar(kZeroNumber, upLevelNeed);
                }
            }
        }
    }

    /*  */
    async setCardBgAndIcon() {
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this.static_id);
        if (!isValidObj(cardTabData)) {
            return;
        }

        let sf = await LoadResAsync(cardTabData.Icon, cc.SpriteFrame)
        if (sf) {
            if (this.spr_portrait) {
                this.spr_portrait.spriteFrame = sf;
            }
        }

        let qualityTab = tab.Data.QualityTableByQuality.getValue(cardTabData.Quality);
        if (isValidObj(qualityTab)) {
            let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame)
            if (sf) {
                if (this.spr_bg) {
                    this.spr_bg.spriteFrame = sf;
                }
            }
            sf = await LoadResAsync(qualityTab.QualityBG, cc.SpriteFrame);
            if (sf) {
                if (this.spr_card_bg) {
                    this.spr_card_bg.spriteFrame = sf;
                }
            }
            sf = await LoadResAsync(qualityTab.CardQualityEffectBg, cc.SpriteFrame);
            if (sf) {
                if (this.chess_bg) {
                    this.chess_bg.spriteFrame = sf;
                }
            }
            let textureUrl = qualityTab.QualityFile;
            this.card_bg.setTexture(textureUrl);
        }
        let effectId = qualityTab.CardQualityEffectLighting;
        if (effectId) {
            setChessEffect(effectId, this.effect_spine, this.effect_frame)
            setChessSpineStar({spineId: qualityTab.CardQualityEffectStar,parentNode: this.spr_portrait.node})
        } else {
            this.effect_spine.node.active = false;
            this.effect_frame.node.active = false;
            destroyChessSpineStar(this.spr_portrait.node)
        }
    }
    /*  */
    private setUpLvProgressBar(ownCount: number, needCount: number, bShow: boolean = true) {
        ownCount = ownCount > kZeroNumber ? (ownCount - kOneNumber) : ownCount; //必须减掉自身【设计缺陷】
        this.lbl_exp.node.active = bShow;
        this.spr_up_arrow.node.active = bShow;
        // this.prog_bar_exp.node.active = bShow;
        if (!bShow) {
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
    onclick(btn) {
        if (this.islocked) {
            ShowTips("IsLocked")
            return;
        }
        if (this.clickcallback) {
            this.clickcallback(this.index, this.lefttimes,
                this.node, this._price,
                this._itemcount, this.spr_first_double.node.active,
                this.nameLable.string);
            if (this.freetxt.node.active) {
                //上报打点数据
                //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickFreeGoods); /* zhibo-@20230410 for <删除打点> */
            }
        }
    }

    public playCardUpLvArrowAnim(bPlay: boolean) {
        if (!this.spr_up_arrow.node.active) {
            return;
        }

        let animNode = this.spr_up_arrow.getComponent(cc.Animation);
        if (animNode) {
            bPlay ? animNode.play() : animNode.stop();
        }
    }

    /* 播放特殊金币节点的特效 */
    private playSpeicalGoldNodeEffect() {
        if (!this._bGoldNode || this._goldMumber != kSpecialGoldNumber) {
            return;
        }
        /*
        let animNode = this.XXXX.getComponent(cc.Animation);
        if(animNode){
            animNode.play("XXXX");
        }
        */
    }
}
