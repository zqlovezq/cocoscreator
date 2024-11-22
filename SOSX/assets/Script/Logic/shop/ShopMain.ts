
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { CARDFROM, CardNodeState, checkFunctionIsOpen, checkRechargeInterfaceIsOpen, checkRewardIsEmotionOrBattleMap, isValidObj, JumpShopTypeInterface, k255, kFourNumber, kNegativeOneNumber, kOneNumber, kZeroNumber, sendAdvertPos, sendPayStartMsg, ShopItemType, WatchAdvert } from "../Common/CommonInterface";
import Role from "../Common/Role";
import StarAndValueTip from "../Common/StarAndValueTip";
import { flyDemond, flyEmotion, flyGold, getBoxIDAndCfg, getFormatString, getItemIconURL, getServerUtcTime, LoadResAsync, LoadScene, popRewardLayer_Ex, popRewardLayer_Vec_Recycle, setGray, setGrayCustom, setTextTime_3, setTimeTXT, showPopLayer, showPopLayerV2, ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import shopboxTipslayer from "./shopboxtipsLayer";
import ShopGetItem from "./ShopGetItem";
import SP_cardNode from "./SP_cardNode";

import scrollInner = require("../Common/NestableScrollView_Inner");
import GiftBagCell from "./GiftBagCell";
import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import EmotionGoodsNode from "../EmotionStore/EmotionGoodsNode";
import ManagerNewEmotionRedDot from "../EmotionStore/ManagerNewEmotionRedDot";
import boxtips from "../Common/boxtips";
import ActivityController from "../Activity/Activity/ActivityController";
import UnpackRebateSelectCardLayer, { unpackType } from "../Activity/UnpackRebate/UnpackRebateSelectCardLayer";
import specialSelectBagGift from "./specialSelectBagGift";
import CardDetail from "../Main/CardDetail";
import PassportFunc from "../passport/PassportFunc";
//import RechargeConfirmPop from "./RechargeConfirmPop";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShopMain extends cc.Component {

    @property(cc.Node)
    giftNode: cc.Node = null /* 特别惊喜 */

    @property(cc.Node)
    weekendGiftBagNode: cc.Node = null

    @property(cc.Node)
    weekendContentNode: cc.Node = null

    @property(cc.Label)
    weekendGiftBagTimeLeft: cc.Label = null

    @property(cc.Node)
    ExGiftBagNode: cc.Node = null

    @property(cc.Node)
    ExGiftBagNodeContentNode: cc.Node = null

    @property(cc.Node)
    dayGiftBagNode: cc.Node = null

    @property(cc.Node)
    dayGiftContentNode: cc.Node = null

    @property(cc.Label)
    dayGiftBagAvdRefreshTimes: cc.Label = null

    @property(cc.Label)
    dayGiftBagDemondCost: cc.Label = null

    @property(cc.Label)
    dayGiftBagTimeLeft: cc.Label = null /* 超值礼包 */

    @property(cc.Label)
    ExGiftBagTimeLeft: cc.Label = null

    @property(cc.Prefab)
    giftBagCell: cc.Prefab = null

    //精选礼包
    @property(cc.Node)
    PickedGifgBagnode: cc.Node = null

    @property(cc.Label)
    PickedGifgBagTimeLeft: cc.Label = null

    @property(cc.Node)
    PickedGifgBagCardsNodes: cc.Node = null

    @property(cc.Label)
    PickedGifgBagRefreshTimes: cc.Label = null

    // @property(cc.Node)
    // everday_tipsbtn: cc.Node = null

    // @property(cc.Node)
    // everyday_tipsnode: cc.Node = null
    @property(cc.Node)
    node_serriesDiscount:cc.Node = null;
    @property(cc.Node)
    node_everyday_select: cc.Node = null; /* 每日特价 */

    @property(cc.Label)
    timeleft: cc.Label = null

    @property(cc.Label)
    refreshadv_times: cc.Label = null

    @property(cc.Label)
    avdtimeleft: cc.Label = null

    @property(cc.Label)
    avdrefreshtxt: cc.Label = null

    // @property(cc.Label)
    // tipstxt: cc.Label = null

    @property(cc.Node)
    node_zhuanshi: cc.Node = null

    @property(cc.Node)
    node_jinbi: cc.Node = null


    @property(cc.Button)
    m_videobtn: cc.Button = null

    // @property(cc.Node)
    // boxfreebgground: cc.Node = null

    // @property([cc.Button])
    // boxvec: cc.Button[] = []

    @property([cc.Label])
    boxcosttxt: cc.Label[] = []

    @property([cc.Label])
    boxfromnametxt: cc.Label[] = []

    // @property([cc.Sprite])
    // boxiconvec: cc.Sprite[] = []

    // @property([cc.Label])
    // boxnametxt: cc.Label[] = []
    /********************2023-03-16调整商城界面，把金币，钻石买宝箱删了************/
    // @property(cc.Node)
    // normalBoxNode:cc.Node = null  

    // @property(cc.Node)
    // goldSelectCardBySelfNode:cc.Node = null
    /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/

    // @property(cc.Label)
    // boxadvfreetimes: cc.Label = null

    @property(scrollInner)
    scroll_view: scrollInner = null;

    // @property(cc.Node)
    // node_pullcard: cc.Node = null

    @property(cc.Node)
    node_reward_ret: cc.Node = null
    /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
    // @property(cc.Button)
    // btn_box_rate: cc.Button = null;
    /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
    @property(cc.Node)
    node_emotion_goods: cc.Node = null;

    @property(cc.Node)
    emotion_goods_node_1: cc.Node = null;

    @property(cc.Node)
    emotion_goods_node_2: cc.Node = null;

    @property(cc.Node)
    emotion_goods_node_3: cc.Node = null;

    @property(cc.Label)
    lbl_emotion_refresh_time: cc.Label = null;

    @property(cc.Node)
    node_emotion_help_tip: cc.Node = null;

    @property(cc.Node)
    node_gift_bag_help_tip: cc.Node = null;

    /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
    // @property(cc.Label)
    // lbl_super_box_buy_count: cc.Label = null;
    /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
    //<段位，<卡池类型，< 品质， id>>>
    static BoxCardWeightTabData: Map<number, Map<number, Map<number, Array<tab.BoxCardWeightTable>>>> = new Map<number, Map<number, Map<number, Array<tab.BoxCardWeightTable>>>>()


    m_pullcardMap: Map<string, number> = new Map<string, number>()
    m_shopData: proto.Msg_GetShopInfoRsp = null;
    m_PickGiftBagData: proto.Msg_GetPickedGiftBagInfoRsp = null
    m_curprogress: number = 0;   //当前杯数
    m_lotteryCardInfo: { daypull: 0, freepull: 0 } = null;
    static oripos: cc.Vec2 = cc.Vec2.ZERO
    static sBuyType: number = 0;   //0 普通物品  1宝箱

    private _emotion_goods_list: EmotionGoodsNode[] = []; //表情商品节点列表
    freeAvdBoxGroundId: number;
    private _unpack_count: number;
    private _select_card_list: number[];

    //特价礼包刷新倒计时 /* zhibo+@20230419 for <TODO: 每秒都刷新，太浪费了，找个时间改成60秒一刷新就行> */
    ExGiftBagCountDown(dt) {
        if (!Role.Instance.giftBagData) {
            this.unschedule(this.ExGiftBagCountDown)
            return
        }
        let weekinfo = Role.Instance.giftBagData?.dayGiftBag//Role.Instance.giftBagData.exGratiaGiftBag
        if (weekinfo) {
            let left = weekinfo?.ResetUTC - getServerUtcTime()
            if (left < 0) {
                this.getGiftBagInfo()
                this.unschedule(this.ExGiftBagCountDown)
                return
            }
            setTimeTXT(this.ExGiftBagTimeLeft, left)
        }
    }

    //周末礼包刷新倒计时 /* zhibo+@20230419 for <TODO: 每秒都刷新，太浪费了，找个时间改成60秒一刷新就行> */
    weekendGiftBagCountDown(dt) {
        if (!Role.Instance.giftBagData) {
            this.unschedule(this.weekendGiftBagCountDown)
            return
        }
        let weekinfo = Role.Instance.giftBagData.weekendGiftBag
        if (weekinfo) {
            let left = weekinfo.ResetUTC - getServerUtcTime()
            if (left < 0) {
                this.getGiftBagInfo()
                this.unschedule(this.weekendGiftBagCountDown)
                return
            }
            setTimeTXT(this.weekendGiftBagTimeLeft, left)
        }
    }

    /* "超值礼包"刷新倒计时 */ /* zhibo+@20230419 for <TODO: 每秒都刷新，太浪费了，找个时间改成60秒一刷新就行> */
    dayGiftBagCountDonw(dt) {
        if (!Role.Instance.giftBagData) {
            this.unschedule(this.dayGiftBagCountDonw)
            return
        }
        let dayinfo = Role.Instance.giftBagData.dayGiftBag
        if (dayinfo) {
            let left = dayinfo.ResetUTC - getServerUtcTime()
            if (left < 0) {
                this.getGiftBagInfo()
                this.unschedule(this.dayGiftBagCountDonw)
                return
            }
            setTimeTXT(this.dayGiftBagTimeLeft, left)
        }
    }

    //"超值礼包"广告刷新 /* zhibo+@20230419 for <TODO: 每秒都刷新，太浪费了，找个时间改成60秒一刷新就行> */
    dayGiftBagRefresh_Avd() {
        let maxtimes = tab.Data.GetKeyValue_ConfigTable().DailyGiftBagMaxRefreshTimes
        if (Role.Instance.giftBagData && Role.Instance.giftBagData.dayGiftBag.AdvRefreshTimes >= maxtimes) {
            ShowTips("LeftTimesNotEnough")
            return
        }

        WatchAdvert((error: Error) => {
            if (error === undefined) {
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChangeEveryDayGiftBag, kZeroNumber);
            }
        },
            (bFinish: boolean) => {
                if (bFinish) {
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChangeEveryDayGiftBag, kOneNumber);
                    let param = new proto.Msg_RefreshDayGiftBagReq();
                    param.bAVDRefresh = true;
                    Net.Send(proto.Ptl.RefreshDayGiftBagReq, param);
                }
            },tab.AdvertPosType.AdvertPosType_ChangeEveryDayGiftBag);
    }

    /* zhibo+@20230419 for <TODO: 每秒都刷新，太浪费了，找个时间改成60秒一刷新就行> */
    PickedGiftBagCountDonw(dt) {
        if (!this.m_PickGiftBagData) {
            this.unschedule(this.PickedGiftBagCountDonw)
            return
        }

        let left = this.m_PickGiftBagData.ResetUTC - getServerUtcTime()
        if (left < 0) {
            this.getPickedGiftBagInfo()
            this.unschedule(this.PickedGiftBagCountDonw)
            return
        }
        setTimeTXT(this.PickedGifgBagTimeLeft, left)
    }

    //每日礼包钻石刷新
    dayGiftBagRefresh_Demond() {
        let param = new proto.Msg_RefreshDayGiftBagReq()
        param.bAVDRefresh = false
        Net.Send(proto.Ptl.RefreshDayGiftBagReq, param)
    }

    /* 超值礼包 */
    dayGiftBagRefresh() {
        let data = Role.Instance.giftBagData
        this.dayGiftBagNode.active = false

        if (data && data.dayGiftBag && data.dayGiftBag.GiftBags) {
            let dayinfo = data.dayGiftBag

            this.dayGiftBagNode.active = dayinfo.GiftBags.length > 0

            for (let i = 0; i < dayinfo.GiftBags.length; i++) {
                let gift = dayinfo.GiftBags[i]
                let cell = this.dayGiftContentNode.children[i]
                if (!cell) {
                    this.giftBagCell && (cell = cc.instantiate(this.giftBagCell));
                    cell && this.dayGiftContentNode.addChild(cell)
                }

                if (cell) {
                    let com = cell.getComponent(GiftBagCell)
                    if (com) {
                        com.setView(gift, proto.GiftBagType.DayGift)
                    }
                }
            }

            if (dayinfo.ResetUTC > getServerUtcTime()) {
                this.dayGiftBagCountDonw(0)
                this.unschedule(this.dayGiftBagCountDonw)
                this.schedule(this.dayGiftBagCountDonw, 1)
            }
        }

        let maxtimes = tab.Data.GetKeyValue_ConfigTable().DailyGiftBagMaxRefreshTimes
        if (data) {
            this.dayGiftBagAvdRefreshTimes.string = `${maxtimes - data.dayGiftBag.AdvRefreshTimes}/${maxtimes}`
            let sp = this.dayGiftBagAvdRefreshTimes.node.parent.getComponent(cc.Sprite)
            if (sp) {
                setGray(sp, data.dayGiftBag.AdvRefreshTimes >= maxtimes)
            }
        }
        this.dayGiftBagDemondCost.string = tab.Data.GetKeyValue_ConfigTable().DailyGiftBagDiamondRefreshCost.toString()
    }

    //设置礼包
    setGiftBag() {
        let bopen = checkRechargeInterfaceIsOpen() && checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GiftBag)
        if (!bopen) {
            this.giftNode.active = false
            return
        }
        let data = Role.Instance.giftBagData
        if (!data) return;

        //每日礼包
        this.dayGiftBagRefresh()
        //周末礼包暂时隐藏
        this.weekendGiftBagNode.active = false
        // for(let child of this.weekendContentNode.children) {
        //     child.active = false
        // }
        // if(data.weekendGiftBag && data.weekendGiftBag.GiftBags) {
        //     let weekinfo = data.weekendGiftBag
        //     this.weekendGiftBagNode.active = weekinfo.GiftBags.length > 0 && weekinfo.GiftBags[0].BuyedTimes < weekinfo.GiftBags[0].MaxBuyTimes
        //     for(let i= 0; i < weekinfo.GiftBags.length; i++) {
        //         let  gift = weekinfo.GiftBags[i]
        //         let cell = this.weekendContentNode.children[i]
        //         if(!cell) {
        //             cell = cc.instantiate(this.giftBagCell)
        //             this.weekendContentNode.addChild(cell)
        //         }
        //         if(cell) {
        //             cell.active = true
        //             cell.getComponent(GiftBagCell).setView(gift,  proto.GiftBagType.WeekendGift)
        //         }
        //     }
        //     if(weekinfo.ResetUTC > getServerUtcTime()) {
        //         this.weekendGiftBagCountDown(0)
        //         this.unschedule(this.weekendGiftBagCountDown)
        //         this.schedule(this.weekendGiftBagCountDown.bind(this), 1)
        //     }
        // }
        //特惠礼包
        this.ExGiftBagNode.active = false
        for (let child of this.ExGiftBagNodeContentNode.children) {
            child.active = false
        }
        if (data.exGratiaGiftBag && data.exGratiaGiftBag.GiftBags) {
            let exinfo = data.exGratiaGiftBag
            let bmax: boolean = true
            for (let i = 0; i < exinfo.GiftBags.length; i++) {
                bmax = bmax && exinfo.GiftBags[i].BuyedTimes >= exinfo.GiftBags[i].MaxBuyTimes
                let gift = exinfo.GiftBags[i]
                let cell = this.ExGiftBagNodeContentNode.children[i]
                if (!cell) {
                    cell = cc.instantiate(this.giftBagCell)
                    this.ExGiftBagNodeContentNode.addChild(cell)
                }
                if (cell) {
                    cell.active = true
                    let com = cell.getComponent(GiftBagCell)
                    if (com) {
                        com.setView(gift, proto.GiftBagType.ExGift)
                    }
                }
            }
            this.ExGiftBagNode.active = exinfo.GiftBags.length > 0 && bmax == false
            let utcTime = getServerUtcTime();
            //if (exinfo.EndTime > getServerUtcTime()) {
            if (data.dayGiftBag.ResetUTC > utcTime) {
                this.ExGiftBagCountDown(0)
                this.unschedule(this.ExGiftBagCountDown)
                this.schedule(this.ExGiftBagCountDown, 1)
            }
        }
        this.giftNode.active = (this.dayGiftBagNode.active || this.weekendGiftBagNode.active || this.ExGiftBagNode.active);
    }

    videoPickedRefreshClick(btn) {
        let curtime = this.m_PickGiftBagData.AdvRefreshTimes
        let max = tab.Data.GetKeyValue_ConfigTable().PickedGiftBagMaxRefreshTimes

        //广告剩余次数不足
        if (curtime >= max) {
            ShowTips("LeftTimesNotEnough")
            return;
        }

        WatchAdvert((error: Error) => {
            if (error === undefined) {
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_PickedGiftBagAdFresh, kZeroNumber);
            }
        },
            (bFinish: boolean) => {
                if (bFinish) {
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_PickedGiftBagAdFresh, kOneNumber);
                    let param = new proto.Msg_RefreshPickedGiftBagReq();
                    Net.Send(proto.Ptl.RefreshPickedGiftBagReq, param);
                }
            },tab.AdvertPosType.AdvertPosType_PickedGiftBagAdFresh);
    }

    videoPickedExploreClick() {
        ShowTipsOfCustomString("每隔24小时会刷新商品")
    }

    /*  */
    setPickGiftBagView() {
        this.PickedGifgBagnode.active = false
        if (!this.m_PickGiftBagData) {
            return
        }

        this.PickedGifgBagnode.active = checkRechargeInterfaceIsOpen() && checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_PickedGiftBag)
        if (this.PickedGifgBagnode.active === false) {
            return
        }

        let gifts = this.m_PickGiftBagData.GiftBags
        let cards = this.PickedGifgBagCardsNodes.getComponentsInChildren(specialSelectBagGift)
        if (cards && gifts) {
            for (let i = 0; i < cards.length; i++) {
                if (i < gifts.length) {
                    cards[i].initCard(gifts[i])
                } else {
                    cards[i].node.active = false
                }
            }
        }

        let curtime = this.m_PickGiftBagData.AdvRefreshTimes
        let max = tab.Data.GetKeyValue_ConfigTable().PickedGiftBagMaxRefreshTimes

        this.PickedGifgBagRefreshTimes.string = `${max - curtime}/${max}`
        let sp = this.PickedGifgBagRefreshTimes.node.parent.getComponent(cc.Sprite)
        if (sp) {
            setGray(sp, curtime >= max)
        }

        this.unschedule(this.PickedGiftBagCountDonw)
        if (this.m_PickGiftBagData.ResetUTC - getServerUtcTime() > 0) {
            this.PickedGiftBagCountDonw(0)
            this.schedule(this.PickedGiftBagCountDonw, 1)
        }
    }

    //每日精选
    setEveryDaySelctView() {
        let speciallist = this.m_shopData.specialList;
        if (!speciallist){
            return
        }

        this.m_curprogress = Role.Instance.RoleHistoryMaxRankLv
        let unlocknumbes: number[] = tab.Data.GetKeyValue_ConfigTable().ShopSpecialUnlockRankScore
        let spvec: SP_cardNode[] = this.node_everyday_select.getComponentsInChildren(SP_cardNode);
        if (spvec) {
            let mnum: number = 0
            for (let i = 0; i < spvec.length && i < speciallist.length; i++) {
                mnum = i;
                let cardTabData: tab.CardTable = tab.Data.CardTableByID.getValue(speciallist[i].goods.rewardId);
                if (null == cardTabData) {
                    spvec[i].setLeftTimesSimple(speciallist[i].leftBuyTimes)
                    spvec[i].initItem(i, speciallist[i].goods, speciallist[i].cost, this.m_curprogress < unlocknumbes[i], unlocknumbes[i], -1, async (index, lefttimes, clicknode: cc.Node) => {

                        if (lefttimes <= 0) {
                            ShowTips("AleadyGet")
                            return;
                        }

                        if (speciallist[i].goods.rewardType == tab.RewardType.RewardType_BoxGroupType || speciallist[i].goods.rewardType == tab.RewardType.RewardType_BoxType) {
                            if (i == 0) {
                                ShopMain.sBuyType = 1
                                let param = new proto.Msg_BuyShopGoodsReq()
                                param.index = index
                                param.buyType = proto.ShopGoodsType.Special
                                Net.Send(proto.Ptl.BuyShopGoodsReq, param)
                                return
                            }

                            let groupid = speciallist[i].goods.rewardId
                            showPopLayer("prefab/shopboxTipslayer").then((node) => {
                                let com: shopboxTipslayer = node.getComponent(shopboxTipslayer)
                                if (com) {
                                    com.setViewbyGroupID(groupid, speciallist[i].cost, 1)
                                    com.setcallback(() => {
                                        ShopMain.sBuyType = 1
                                        let param = new proto.Msg_BuyShopGoodsReq()
                                        param.index = index
                                        param.buyType = proto.ShopGoodsType.Special
                                        Net.Send(proto.Ptl.BuyShopGoodsReq, param)
                                    })
                                }
                            })
                        } else {
                            ShopMain.sBuyType = 0
                            ShopMain.oripos = clicknode.convertToWorldSpaceAR(cc.Vec2.ZERO)
                            let param = new proto.Msg_BuyShopGoodsReq()
                            param.index = index
                            param.buyType = proto.ShopGoodsType.Special
                            Net.Send(proto.Ptl.BuyShopGoodsReq, param)
                        }
                    }, i == 0)
                    spvec[i].setLeftTimes(speciallist[i].leftBuyTimes)
                    continue;
                }
                spvec[i].initCard(i, speciallist[i].goods, speciallist[i].cost, speciallist[i].leftBuyTimes, this.m_curprogress < unlocknumbes[i], unlocknumbes[i], async (index, lefttimes) => {
                    if (lefttimes <= 0) {
                        ShowTips("AleadyGet")
                        return;
                    }
                    let list = speciallist[i];
                    showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
                        let cardInfo = Role.Instance.RoleItemAtrr.getItemByStaticID(list.goods.rewardId);
                        let state = isValidObj(cardInfo)?CardNodeState.CARD_NODE_STATE_OWN:CardNodeState.CARD_NODE_STATE_UNOWN
                        nodeDetail.setCardData(list.goods.rewardId, state,{
                            from:CARDFROM.SHOP,
                            count:list.goods.rewardCount,
                            cost:list.cost.itemCount,
                            index:index
                        });
                    });
                    // let node = await showPopLayer("prefab/ShopGetLayer")
                    // if (node) {
                    //     let buylayer: ShopGetItem = node.getComponent(ShopGetItem)
                    //     if (buylayer) {
                    //         buylayer.setShopView(speciallist[i].goods, <proto.ItemSimpleInfo>(speciallist[i].cost), index, index == 0 ? 2 : 2, proto.ShopGoodsType.Special)
                    //     }
                    // }
                },i==0)
            }
            for (let i = mnum + 1; i < spvec.length; i++) {
                spvec[i].unlockView(unlocknumbes[i])
            }
        }

        //每日刷新倒计时
        this.unschedule(this.cardCountDown)
        this.schedule(this.cardCountDown, 1)

        //广告刷新倒计时
        let leftt = this.m_shopData.specialNextFreeRefreshTime - getServerUtcTime();
        if (leftt > 0 && this.m_shopData.specialFreeRefreshLeftTimes > 0) {
            this.unschedule(this.cardAvdCountDown)
            this.schedule(this.cardAvdCountDown, 1)
            this.avdtimeleft.node.active = true;
            this.avdrefreshtxt.node.active = false
            this.refreshadv_times.node.active = false
        } else {
            this.avdtimeleft.node.active = false
            this.refreshadv_times.node.active = true
            this.avdrefreshtxt.node.active = true
        }
        this.refreshadv_times.string = `${this.m_shopData.specialFreeRefreshLeftTimes}/${tab.Data.GetKeyValue_ConfigTable().ShopSpecialRefreshCount}`
        let sp = this.refreshadv_times.node.parent.getComponent(cc.Sprite)
        if (sp) {
            setGray(sp, this.m_shopData.specialFreeRefreshLeftTimes <= 0)
        }
        //刷新tips
        let formatstr = String(tab.Data.TipsTableByKey.getValue("ShopRefreshTimesTips").Value)
        // this.tipstxt.string = getFormatString(formatstr, this.m_shopData.specialSixRefreshTimes, tab.Data.GetKeyValue_ConfigTable().ShopSpecial6PosRefreshCount)
    }

    /*  */
    videoBtnRefreshClick(btn) {
        // ShowTips("FunctionClosedTip")
        // return

        //如果是在倒计时
        if (getServerUtcTime() < this.m_shopData.specialNextFreeRefreshTime && this.m_shopData.specialFreeRefreshLeftTimes > 0) {
            ShowTips("InCD")
            return;
        }
        //广告剩余次数不足
        if (this.m_shopData.specialFreeRefreshLeftTimes <= 0) {
            ShowTips("LeftTimesNotEnough")
            return;
        }

        WatchAdvert((error: Error) => {
            if (error === undefined) {
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_RefreshEveryDaySpecialOfferShop, kZeroNumber);
            }
        },
            (bFinish: boolean) => {
                if (bFinish) {
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_RefreshEveryDaySpecialOfferShop, kOneNumber);
                    let param = new proto.Msg_FreeRefreshSpecialGoodsReq();
                    Net.Send(proto.Ptl.FreeRefreshSpecialGoodsReq, param);
                }
            },tab.AdvertPosType.AdvertPosType_RefreshEveryDaySpecialOfferShop);
    }

    //钻石购买
    setDemondView() {
        let spvec: SP_cardNode[] = this.node_zhuanshi.getComponentsInChildren(SP_cardNode);
        if (spvec) {
            let cashList = this.m_shopData.cashList
            if (!cashList) return

            for (let i = 0; i < spvec.length && i < cashList.length; i++) {
                spvec[i].setDiamondIsFirstRecharge(cashList[i].bFirstRecharge,cashList[i].cashAdd,cashList[i].cashFirstAdd);
                spvec[i].setDiamondPrice(cashList[i].cash);
                spvec[i].initItem(i, cashList[i].goods, null, false, 0, cashList[i].cash,
                    async (index, leftTimes, clicknode: cc.Node, price, itemCount, bFirstRecharge, itemName) => {
                        ShopMain.oripos = clicknode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                        ShopMain.sBuyType = 0;

                        //上报打点数据
                        //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.RechargeDiamond); /* zhibo-@20230410 for <删除打点> */
                        sendPayStartMsg(cashList[i].rechargeID);
                    })
            }
        }
    }

    //金币购买
    setGoldView() {
        let spvec: SP_cardNode[] = this.node_jinbi.getComponentsInChildren(SP_cardNode)
        if (spvec) {
            let commonList = this.m_shopData.commonList
            if (!commonList) return

            for (let i = 0; i < spvec.length && i < commonList.length; i++) {
                spvec[i].initItem(i, commonList[i].goods, commonList[i].cost, false, 0, 0, async (index, lefttimes, clicknode: cc.Node) => {
                    ShopMain.oripos = clicknode.convertToWorldSpaceAR(cc.Vec2.ZERO)

                    // showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
                    //     // nodeDetail.setCardData(item.rewardId, CardNodeState.CARD_NODE_STATE_UNOWN, 1);
                    // });
                    let node = await showPopLayer("prefab/ShopGetLayer")
                    if (node) {
                        let buylayer: ShopGetItem = node.getComponent(ShopGetItem)
                        if (buylayer) {
                            buylayer.setShopView(commonList[index].goods, <proto.ItemSimpleInfo>(commonList[index].cost), index, 1, proto.ShopGoodsType.Gold);
                            //上报打点数据
                            //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.RechargeGold); /* zhibo-@20230410 for <删除打点> */
                        }
                    }
                });
                spvec[i].setGoldNode(); // 设置当前节点为金币节点
            }
        }
        // 如果是金币节点并且是500的数额，就播放特效
        this.scheduleOnce(() => {
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlaySpecialGoldNodeEffect, null);
        }, 0.3);
    }

    //抽奖宝箱
    setLotteryBoxes() {
        for (let i = 0; i < this.boxcosttxt.length && i < this.boxfromnametxt.length; i++) {
            let cfg = tab.Data.PullCardTableByPullType.getValue(i + 1)
            if (cfg) {
                this.boxcosttxt[i].string = cfg.CostDiamond.toString()
            }
            let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value
            this.boxfromnametxt[i].string = str + Role.Instance.RoleGrade.toString()
        }

        // for (let j = 0; j < this.boxiconvec.length; j++) {
        //     let cfg = tab.Data.PullCardTableByPullType.getValue(j)
        //     if (cfg) {
        //         if (j == 0) {
        //             this.freeAvdBoxGroundId = cfg.BoxGroupID
        //         }
        //         let info: { boxId: number, boxCfg: tab.BoxTable } = getBoxIDAndCfg(cfg.BoxGroupID)
        //         if (info.boxCfg) {
        //             this.boxiconvec[j].setTexture(info.boxCfg.ItemBigIcon)
        //             this.boxnametxt[j].string = info.boxCfg.BoxName
        //         }
        //     }
        // }
    }

    /* 设置超级神奇宝箱购买的次数 */
    /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
    // private setSuperBoxBuyCount(count: number, pulltype:proto.PullCardType){
    //     this.lbl_super_box_buy_count.string = `${count}`;
    //     if(pulltype == proto.PullCardType.Honour && count == tab.Data.GetKeyValue_ConfigTable().UnpackRebateCount)
    //     {
    //         let param = new proto.Msg_LimitActivityReq
    //         Net.Send(proto.Ptl.LimitActivityReq, param)
    //     }
    // }
    /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
    cardCountDown(dt) {
        let leftt = this.m_shopData.specialNextRefreshTime - getServerUtcTime();
        if (leftt <= -1) {
            this.timeleft.node.parent.active = false
            this.reqShopInfo();
            this.unschedule(this.cardCountDown);
            return;
        }
        this.timeleft.node.parent.active = true

        if (leftt >= 0) {
            setTimeTXT(this.timeleft, leftt);            
            setTimeTXT(this.lbl_emotion_refresh_time, leftt); //表情商品倒计时
        }
    }

    /*  */
    cardAvdCountDown(dt) {
        let leftt = this.m_shopData.specialNextFreeRefreshTime - getServerUtcTime();
        if (leftt <= -1) {
            this.avdtimeleft.node.active = false
            this.avdrefreshtxt.node.active = true
            this.refreshadv_times.node.active = true
            this.unschedule(this.cardAvdCountDown)
            return;
        }
        if (leftt >= 0) {
            setTextTime_3(this.avdtimeleft, leftt);
        }
    }

    //请求每日精选信息
    reqEveryDayInfo() {
        let msg = new proto.Msg_FreeRefreshSpecialGoodsReq;
        Net.Send(proto.Ptl.FreeRefreshSpecialGoodsReq, msg)
    }

    //请求商店信息
    reqShopInfo() {
        let msg = new proto.Msg_GetShopInfoReq;
        Net.Send(proto.Ptl.GetShopInfoReq, msg)
    }

    /*  */
    onEvilPass() {
        showPopLayer("prefab/EvilPass")
    }

    /*  */
    onBoxClick(index: number, bdetail: boolean = false) {
        if (index == 0) { //看广告的免费宝箱
            if (bdetail === false) {
                if (this.m_lotteryCardInfo.freepull >= tab.Data.GetKeyValue_ConfigTable().FreePullCardCount) {
                    ShowTips("LeftTimesNotEnough")
                    return
                }

                WatchAdvert((error: Error) => {
                    if (error === undefined) {
                        sendAdvertPos(tab.AdvertPosType.AdvertPosType_DevilBox, kZeroNumber);
                    }
                },
                    (bFinish: boolean) => {
                        if (bFinish) {
                            sendAdvertPos(tab.AdvertPosType.AdvertPosType_DevilBox, kOneNumber);
                            this.sendPullCardMsg(index);
                        }
                    },tab.AdvertPosType.AdvertPosType_DevilBox);
                return;
            }
        }

        let times = this.m_pullcardMap[String(index)]
        //展示一个界面
        showPopLayer("prefab/shopboxTipslayer").then((node) => {
            let com: shopboxTipslayer = node.getComponent(shopboxTipslayer)
            if (com) {
                com.setView(index, times)
                com.setcallback(() => {
                    if (index == 0) {
                        if (times >= tab.Data.GetKeyValue_ConfigTable().FreePullCardCount) {
                            ShowTips("LeftTimesNotEnough")
                            return
                        }
                        WatchAdvert((error: Error) => {
                            if (error === undefined) {
                                sendAdvertPos(tab.AdvertPosType.AdvertPosType_DevilBox, kZeroNumber);
                            }
                        },
                            (bFinish: boolean) => {
                                if (bFinish) {
                                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_DevilBox, kOneNumber);
                                    this.sendPullCardMsg(index);
                                }
                            },tab.AdvertPosType.AdvertPosType_DevilBox);
                    } else {
                        let total = tab.Data.GetKeyValue_ConfigTable().PullCardDailyMaxCount
                        if (total - times <= 0) {
                            ShowTips("PulllCardTimeNotEnough")
                            return
                        }
                        this.sendPullCardMsg(index);
                    }
                })
            }
        });
        //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.RechargeBox); //上报打点事件 /* zhibo-@20230410 for <删除打点> */
    }

    /*  */
    private sendPullCardMsg(idx: number) {
        let msg = new proto.Msg_PullCardReq();
        msg.pullCardType = idx;
        Net.Send(proto.Ptl.PullCardReq, msg);
    }

    /*  */
    start() {
        //通行证相关
        /********************************商城界面不显示通行证2023-03-16 jianbing *****************/
        // this.evilpassnode.active = checkRechargeInterfaceIsOpen() && Role.Instance.isDemonPass == false;
        // this.evilpassFirstBuynode.active = Role.Instance.IsFirstPayEvilPss == false
        // this.evilpassnode.active = false
        /********************************商城界面不显示通行证2023-03-16 jianbing *****************/
        //this.refreshMapEmoj()
    }

    /*  */
    everyDayHelpBtn() {
        // this.everyday_tipsnode.active = true

        // let pos = this.everday_tipsbtn.convertToWorldSpaceAR(new cc.Vec2(-120, 55))
        // this.everyday_tipsnode.removeFromParent(false)

        // cc.director.getScene().addChild(this.everyday_tipsnode)
        // this.everyday_tipsnode.setPosition(cc.director.getScene().convertToNodeSpaceAR(pos))
    }

    /*  */
    onTouchBegan() {
        // this.everyday_tipsnode.active = false;
        this.node_emotion_help_tip.opacity = kZeroNumber;
        this.node_gift_bag_help_tip.opacity = kZeroNumber;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips)
    }

    /*  */
    onLoad() {
        /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
        // this.goldSelectCardBySelfNode.active = false
        /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
        this.node_emotion_goods.active = false;
        this.initEmotionGoodsNodeList();

        this.node_reward_ret.active = false
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true)

        // this.boxfreebgground.on(cc.Node.EventType.TOUCH_END, () => {
        //     boxtips.showTips(this.freeAvdBoxGroundId, this.boxfreebgground)
        // }, this)

        this.m_videobtn.node.on("click", this.videoBtnRefreshClick, this)
        let _this = this
        // for (let i = 0; i < this.boxvec.length; i++) {
        //     this.boxvec[i].node.on("click", (btn) => {
        //         _this.onBoxClick(i)
        //     }, this)
        // }

        /********************************商城界面不显示通行证2023-03-16 jianbing *****************/
        // Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_OnBuyEvilPass, (param: any)=>{
        //     this.evilpassnode.active = Role.Instance.isDemonPass == false
        //     this.evilpassFirstBuynode.active = false
        // }, this);
        /********************************商城界面不显示通行证2023-03-16 jianbing *****************/

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewSeasonJustBeginning, (param: any) => {
            // this.refreshMapEmoj()
        }, this)

        //商店信息
        Net.listenProtocol(proto.Ptl.GetShopInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_GetShopInfoRsp.decode(buffer);
            cc.log("ShopMain.ts : GetShopInfoRsp(获取商店信息) msg: "+JSON.stringify(msg))
            if (msg != null) {
                this.m_shopData = msg;
                Role.Instance.shopData = msg;
                this.setEveryDaySelctView(); /* 每日精选 */
                this.setDemondView();        /* 钻石购买 */
                this.setGoldView();          /* 金币购买 */
                this.refreshEmotionGoods();  /* 表情商品 */
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
                // this.setSuperBoxBuyCount(this.m_shopData.leftBuySuperBoxCount, 0);
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
            }
        }, this)

        //精选礼包
        Net.listenProtocol(proto.Ptl.GetPickedGiftBagInfoRsp, (buffer, ptl) => {
            let msg = proto.Msg_GetPickedGiftBagInfoRsp.decode(buffer);
            cc.log("ShopMain.ts : GetPickedGiftBagInfoRsp msg: "+JSON.stringify(msg))
            if (msg != null) {
                this.m_PickGiftBagData = msg
                this.setPickGiftBagView()
            }
        }, this)

        //精选礼包看广告刷新
        Net.listenProtocol(proto.Ptl.RefreshPickedGiftBagRsp, (buffer, ptl) => {
            let msg = proto.Msg_RefreshPickedGiftBagRsp.decode(buffer);
            cc.log("RefreshPickedGiftBagRsp (刷新精选礼包) msg: "+JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == proto.Msg_RefreshPickedGiftBagRsp.ErrorCode.Succeed) {
                    this.m_PickGiftBagData.AdvRefreshTimes = msg.AdvRefreshTimes
                    this.m_PickGiftBagData.GiftBags = msg.GiftBags
                    this.m_PickGiftBagData.ResetUTC = msg.ResetUTC

                    this.setPickGiftBagView()
                } else {
                    ShowTipsOfCustomString("次数不足")
                }
            }
        }, this)

        /* 看广告刷新每日精选 */
        Net.listenProtocol(proto.Ptl.FreeRefreshSpecialGoodsRsp, (buffer, ptl) => {
            let msg = proto.Msg_FreeRefreshSpecialGoodsRsp.decode(buffer);
            cc.log("FreeRefreshSpecialGoodsRsp (看广告刷新每日精选) msg: "+JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == proto.CommonErrorCode.Succeed) {

                    this.m_shopData.specialFreeRefreshLeftTimes = msg.leftTimes;
                    this.m_shopData.specialNextFreeRefreshTime = msg.nextRefreshTime;
                    this.m_shopData.specialList = msg.specialList;
                    this.m_shopData.specialSixRefreshTimes = msg.specialSixRefreshTimes;
                    this.setEveryDaySelctView();
                } else {
                    ShowTipsOfCustomString("刷新错误")
                }
            }
        }, this)

        /* 购买精选礼包 */
        Net.listenProtocol(proto.Ptl.BuyPickedGiftBagRsp, (buffer, ptl) => {
            let msg = proto.Msg_BuyPickedGiftBagRsp.decode(buffer)
            cc.log("BuyPickedGiftBagRsp (购买精选礼包) msg: " + JSON.stringify(msg));
            if (msg) {
                if (msg.result == proto.Msg_BuyPickedGiftBagRsp.ErrorCode.Succeed) {
                    for (let i = 0; i < this.m_PickGiftBagData.GiftBags.length; i++) {
                        let ele = this.m_PickGiftBagData.GiftBags[i]
                        if (ele.GiftID == msg.giftBagID) {
                            ele.BuyedTimes++
                        }
                    }
                }
            }
        }, this)

        //购买商店物品
        Net.listenProtocol(proto.Ptl.BuyShopGoodsRsp, (buffer, ptl) => {
            let msg = proto.Msg_BuyShopGoodsRsp.decode(buffer)
            cc.log("BuyShopGoodsRsp (购买商店商品) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if (msg.result == 0) {
                    ShowTips("BuySuccess")
                    if (msg.buyType === proto.ShopGoodsType.Gold) {
                        //上报打点数据
                        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.RechargeGold); /* zhibo-@20230410 for <删除打点> */
                    }
                    /* 如果是普通物品 */
                    // if(ShopMain.sBuyType == 0) {
                    //     if(msg.goods[0].rewardId  == 1) {
                    //         flyGold(ShopMain.oripos)
                    //         this.playRewardRetValue(msg.goods[0].rewardCount, 20032)
                    //     } else if(msg.goods[0].rewardId == 2) {
                    //         flyDemond(ShopMain.oripos)
                    //         this.playRewardRetValue(msg.goods[0].rewardCount, 20033)
                    //     }
                    // } else if(ShopMain.sBuyType == 1)
                    // {
                    popRewardLayer_Ex(msg.goods)
                    // }

                    if (msg.buyType == Number(proto.ShopGoodsType.Special)) {

                        this.m_shopData.specialList[msg.index].leftBuyTimes--;
                        let comvecs: SP_cardNode[] = this.node_everyday_select.getComponentsInChildren(SP_cardNode)
                        if (msg.index < comvecs.length) {
                            comvecs[msg.index].setLeftTimes(this.m_shopData.specialList[msg.index].leftBuyTimes)
                        }

                        for (let i = 0; i < comvecs.length; i++) {
                            comvecs[i].refreshProgress()
                        }
                    } else if (proto.ShopGoodsType.Diamond === msg.buyType) { // 购买后将首充设为false，即后续不再是首充了
                        this.m_shopData.cashList[msg.index].bFirstRecharge = false;
                        let nodeStallList: SP_cardNode[] = this.node_zhuanshi.getComponentsInChildren(SP_cardNode);
                        if (msg.index < nodeStallList.length) {
                            nodeStallList[msg.index].setDiamondIsFirstRecharge(false,this.m_shopData.cashList[msg.index].cashAdd,0);
                        }
                    }
                }
            }
        }, this)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateItemData, (param: any) => {
            let comvecs: SP_cardNode[] = this.node_everyday_select.getComponentsInChildren(SP_cardNode)
            for (let i = 0; i < comvecs.length; i++) {
                comvecs[i].refreshProgress()
            }
        }, this);


        //抽卡获得宝箱
        Net.listenProtocol(proto.Ptl.PullCardRsp, (buffer, ptl) => {
            let msg = proto.Msg_PullCardRsp.decode(buffer);
            cc.log("PullCardRsp(抽卡获得宝箱) msg: " + JSON.stringify(msg));
            if (msg.cards.length > 0 && msg.result == proto.Msg_PullCardRsp.ErrorCode.Succeed) {
                popRewardLayer_Ex(msg.cards)
                this.m_pullcardMap[String(msg.pullCardType)] = msg.pullCount;
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
                // this.setSuperBoxBuyCount(msg.leftBuySuperBoxCount, msg.pullCardType);
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
                this.checkLimitActivityInfo(msg.leftBuySuperBoxCount);
                //上报打点数据
                //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.RechargeBox); /* zhibo-@20230410 for <删除打点> */
            } else if (msg.result == proto.Msg_PullCardRsp.ErrorCode.NoPullCount) {
                ShowTips("PulllCardTimeNotEnough")
            }

            this.getLotteryInfo()
        }, this);

        //抽卡信息
        Net.listenProtocol(proto.Ptl.PullCardInfoRsp, function (buffer, ptl) {
            let msg = proto.Msg_PullCardInfoRsp.decode(buffer)
            cc.log("PullCardInfoRsp (抽卡) msg: " + JSON.stringify(msg));
            if (msg != null) {
                this.m_lotteryCardInfo = { daypull: msg.dayPullCount, freepull: msg.freePullCount }
                let totaltimes = tab.Data.GetKeyValue_ConfigTable().FreePullCardCount
                // if (this.boxadvfreetimes) {
                //     this.boxadvfreetimes.string = `${totaltimes - msg.freePullCount}/${totaltimes}`
                // }
                // if (this.boxvec[0]) {
                //     let child: cc.Node = this.boxvec[0].node.getChildByName("Background")
                //     if (child) {
                //         setGray(child.getComponent(cc.Sprite), totaltimes <= msg.freePullCount)
                //     }
                // }
                this.m_pullcardMap = msg.pullTypeCount
                //把第0个看广告的免费的宝箱的次数加进去
                this.m_pullcardMap['0'] = msg.freePullCount
            }
        }, this)

        /* 滚动到"每日特价" */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollDailyGiftNode, (param) => {
            // this.scheduleOnce(()=>{
            this.scrollToDailyGiftPos()
            //}, 0.3)
        }, this)

        /* 滚动到"" */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollGiftOrEvilNode, (param) => {
            // this.scheduleOnce(()=>{
            this.scrollToRightPos()
            //}, 0.3)
        }, this)

        /* 获取礼包信息 */
        Net.listenProtocol(proto.Ptl.GetGiftBagRsp, function (buffer, ptl) {
            let msg = proto.Msg_GetGiftBagRsp.decode(buffer)
            cc.log("GetGiftBagRsp (获取礼包信息) msg: " + JSON.stringify(msg));
            if (msg != null) {
                Role.Instance.giftBagData = msg
                this.setGiftBag()
            }
        }, this)

        /* 每日礼包刷新 */
        Net.listenProtocol(proto.Ptl.RefreshDayGiftBagRsp, function (buffer, ptl) {
            let msg = proto.Msg_RefreshDayGiftBagRsp.decode(buffer)
            cc.log("RefreshDayGiftBagRsp (每日礼包刷新) msg: " + JSON.stringify(msg));
            if (msg != null) {
                switch (msg.result) {
                    case proto.Msg_RefreshDayGiftBagRsp.ErrorCode.Succeed:
                        Role.Instance.giftBagData.dayGiftBag = msg.dayGiftBag
                        this.dayGiftBagRefresh()
                        break;
                    case proto.Msg_RefreshDayGiftBagRsp.ErrorCode.DiamondNotEnough:
                        ShowTips("DiamondNotEnough")
                        break;
                    case proto.Msg_RefreshDayGiftBagRsp.ErrorCode.AdvNotEnough:
                        ShowTips("LeftTimesNotEnough")
                        break;
                    case proto.Msg_RefreshDayGiftBagRsp.ErrorCode.GiftNotExist:
                        ShowTips("GiftBagIDError")
                        break;
                    default:
                        break;
                }
            }
        }, this)

        //礼包购买
        Net.listenProtocol(proto.Ptl.BuyGiftDayRsp, function (buffer, ptl) {
            let msg = proto.Msg_BuyGiftDayRsp.decode(buffer)
            cc.log("BuyGiftDayRsp (购买礼包) msg: " + JSON.stringify(msg));
            if (msg != null) {
                switch (msg.result) {
                    case proto.Msg_BuyGiftDayRsp.ErrorCode.Succeed:
                        popRewardLayer_Vec_Recycle(msg.awards)
                        this.getGiftBagInfo()
                        break;
                    case proto.Msg_BuyGiftDayRsp.ErrorCode.GiftNotExist:
                    case proto.Msg_BuyGiftDayRsp.ErrorCode.GiftTimePassed:
                        ShowTips("GiftBagIDError")
                        break;
                    case proto.Msg_BuyGiftDayRsp.ErrorCode.GiftBuyTimesNotEnough:
                        ShowTips("LeftTimesNotEnough")
                        break;
                    default:
                        break;
                }
            }
        }, this)

        /* 特惠礼包开启推送 */
        Net.listenProtocol(proto.Ptl.PushNewExGiftBag, function (buffer, ptl) {
            let msg = proto.Msg_PushNewExGiftBag.decode(buffer)
            cc.log("PushNewExGiftBag (特惠礼包开启推送) msg: " + JSON.stringify(msg));
            if (msg != null) {
                this.getGiftBagInfo()
            }
        }, this)

        //断线重连后重新请求下商店的相关信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param) => {
            this.getShopInfo()
            this.getGiftBagInfo()
            this.getPickedGiftBagInfo()
            // this.getLotteryInfo();
        }, this);

        /* 监听跳转到商店消息 */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollAssignPos, (param: any) => {
            if (typeof (param as JumpShopTypeInterface) !== "undefined") {
                // let evilPassNodeH = this.evilpassnode.active ? this.evilpassnode.getContentSize().height : kZeroNumber;
                let serriesDiscount = this.node_serriesDiscount.active?this.node_serriesDiscount.getContentSize().height : kZeroNumber;
                let giftNodeH = this.giftNode.active ? this.giftNode.getContentSize().height : kZeroNumber;
                let pickedGiftBagNode = this.PickedGifgBagnode.active?this.PickedGifgBagnode.getContentSize().height : kZeroNumber;
                let emotionGoodsNodeH = this.node_emotion_goods.active ? this.node_emotion_goods.getContentSize().height : kZeroNumber;
                let y = this.node_everyday_select.getContentSize().height +
                    // this.node_pullcard.getContentSize().height +
                    serriesDiscount +
                    giftNodeH +
                    pickedGiftBagNode+
                    emotionGoodsNodeH + 40;
                if (param.shopItem == ShopItemType.ShopItemType_GoldCoin) {
                    this.scroll_view.scrollToBottom(1.0);
                }

                switch (param.shopItem) {
                    case ShopItemType.ShopItemType_GoldCoin:
                        this.scroll_view.scrollToBottom(1.0);
                        break;

                    case ShopItemType.ShopItemType_Diamond:
                        this.scroll_view.scrollToTop(0.0);
                        this.scheduleOnce(() => {
                            this.scroll_view.scrollToOffset(cc.v2(0, y), 1.0);
                        }, 0.1);
                        break;

                    case ShopItemType.ShopItemType_PullCard:
                        this.scroll_view.scrollToTop(0.0);
                        this.scheduleOnce(() => {
                            this.scroll_view.scrollToOffset(cc.v2(0,
                                this.node_everyday_select.getContentSize().height +
                                serriesDiscount +
                                giftNodeH), 1.0);
                        }, 0.1);
                        break;
                }
                if (param.bPlayEffect) {
                    /*
                    this.scheduleOnce(()=>{
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlaySpecialGoldNodeEffect, null);
                    }, 0.3);
                    */
                }
            }
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param) => {
            // this.getLotteryInfo()
            this.getGiftBagInfo()
            this.getPickedGiftBagInfo()
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_HistoryMaxlvChange, (param) => {
            this.setEveryDaySelctView()
        }, this);

        /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
        // this.btn_box_rate.node.on("click", ()=>{
        //     showPopLayerV2("prefab/BoxRatePopLayer", BoxRatePopLayer).then(layer =>{
        //         layer.initData();
        //     });
        // }, this)
        /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/

        //监听购买表情消息
        Net.listenProtocol(proto.Ptl.BuyEmotionRsp, function (buffer, ptl) {
            let msg = proto.Msg_BuyEmotionRsp.decode(buffer)
            cc.log("ShopMain.ts : BuyEmotionRsp(购买表情) msg: " + JSON.stringify(msg));
            if (msg && proto.Msg_BuyEmotionRsp.ErrorCode.Succeed === msg.result) {
                this.m_shopData.emotionList[msg.goodsIdx].bBought = true;
                this._emotion_goods_list[msg.goodsIdx].changeBuyState(true);
                // flyEmotion(ShopMain.oripos, msg.emotionID);
                checkRewardIsEmotionOrBattleMap(msg.emotionID, tab.RewardType.RewardType_Emotion);
                popRewardLayer_Ex([{rewardId:msg.emotionID,rewardCount:1,rewardType: tab.RewardType.RewardType_Emotion}])
                return;
            }
            proto.Msg_BuyEmotionRsp.ErrorCode.AlreadyHoldEmotion === msg.result && ShowTips("AlreadyHoldEmotion");
            proto.Msg_BuyEmotionRsp.ErrorCode.NonEmotion === msg.result && ShowTips("NonEmotion");
        }, this);

        //监听是否开启播放表情定时器消息
        /* zhibo-S@20230410 for <去掉表情自动播放的功能> */
        // Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetPlayEmotionTimer, (param: any) => {
        //     let bStart = (param as boolean);
        //     this.playEmotionGoods(bStart);
        // }, this);
        /* zhibo-E@20230410 for <去掉表情自动播放的功能> */

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_DataReached, (param: any) => {
            //更新自选宝箱的显示
            let activityInfo = ActivityController.getInstance().getActivityDataByID(tab.LimitActivityID.LimitActivityID_UnpackRebate)
            if (isValidObj(activityInfo)) {
                // this._unpack_count = activityInfo.unpackRebateInfo.unpackRebateCount
                // this._select_card_list = activityInfo.unpackRebateInfo.goldCardIDList
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
                // this.goldSelectCardBySelfNode.active = this._unpack_count > 0
                // this.normalBoxNode.active = !(this.goldSelectCardBySelfNode.active)
                // Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetShopReddotVisible, {bshow:this.goldSelectCardBySelfNode.active, name:"select"})
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
            } else {
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetShopReddotVisible, { bshow: false, name: "select" })
            }
        }, this)

        /*  */
        Net.listenProtocol(proto.Ptl.ReceiveUnpackRebateCardRsp, buffer => {
            let msg = proto.Msg_ReceiveUnpackRebateCardRsp.decode(buffer);
            cc.log("ReceiveUnpackRebateCardRsp (开箱返利领取奖励) msg: " + JSON.stringify(msg));
            if (msg && proto.Msg_ReceiveUnpackRebateCardRsp.ErrorCode.Succeed === msg.result) {
                this._unpack_count--
                ActivityController.getInstance().changeUnpackRebateData(this._unpack_count);
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
                // this.goldSelectCardBySelfNode.active = this._unpack_count > 0
                // this.normalBoxNode.active = !(this.goldSelectCardBySelfNode.active)
                // Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetShopReddotVisible, {bshow:this.goldSelectCardBySelfNode.active, name:"select"})
                /********************2023-03-16调整上商城界面，把金币，钻石买宝箱删了************/
            } else {
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetShopReddotVisible, { bshow: false, name: "select" })
            }
        }, this);

        this.node_zhuanshi.active = checkRechargeInterfaceIsOpen();
        this.setLotteryBoxes();
        this.getShopInfo();
        this.getGiftBagInfo()
        this.getPickedGiftBagInfo()
        // this.getLotteryInfo();
    }

    /*  */
    // async refreshMapEmoj() {
    //     PassportFunc.sortOutData()
    //     let emojID = 0
    //     let mapID = 0
    //     for (let idx = 0; idx < PassportFunc.bossBoxCfgData.length; idx++) {
    //         const data = PassportFunc.bossBoxCfgData[idx];
    //         if (data.PassItemType == tab.RewardType.RewardType_Emotion) {
    //             emojID = data.PassItemId
    //         } else if (data.PassItemType == tab.RewardType.RewardType_BattleMap) {
    //             mapID = data.PassItemId
    //         }
    //     }

    //     this.emojNode.active = emojID > 0
    //     if (emojID > 0) {
    //         let iconinfo = getItemIconURL(emojID, tab.RewardType.RewardType_Emotion)

    //         this.emojIcon.setTexture(iconinfo.icon)
    //     }

    //     this.mapNode.active = mapID > 0
    //     if (mapID > 0) {
    //         let iconinfo = getItemIconURL(mapID, tab.RewardType.RewardType_BattleMap)

    //         this.mapIcon.setTexture(iconinfo.icon)
    //     }
    // }

    /*  */
    private getLotteryInfo() {
        let param = new proto.Msg_PullCardInfoReq();
        Net.Send(proto.Ptl.PullCardInfoReq, param);
    }

    /*  */
    private getGiftBagInfo() {
        let param = new proto.Msg_GetGiftBagReq()
        Net.Send(proto.Ptl.GetGiftBagReq, param)
    }

    /*  */
    private getPickedGiftBagInfo() {
        let param = new proto.Msg_GetPickedGiftBagInfoReq()
        Net.Send(proto.Ptl.GetPickedGiftBagInfoReq, param)
    }

    /*  */
    private getShopInfo() {
        let msg = new proto.Msg_GetShopInfoReq;
        Net.Send(proto.Ptl.GetShopInfoReq, msg)
    }

    /*  */
    private playRewardRetValue(rewardValue: number, spineid: number) {
        this.node_reward_ret.active = true
        let pos = this.node.convertToNodeSpaceAR(ShopMain.oripos)
        this.node_reward_ret.setPosition(pos)

        let comp = this.node_reward_ret.getComponent(StarAndValueTip);
        if (comp) {
            comp.playWaveLabelTip(rewardValue, spineid);
        }
    }

    //滚动到"每日礼包"
    scrollToDailyGiftPos() {
        //this.scroll_view.scrollToTop(0.0);
        let scrocall = (targetnode) => {
            let wpos = targetnode.convertToWorldSpaceAR(cc.Vec2.ZERO)
            let contentwpos = this.scroll_view.content.convertToWorldSpaceAR(cc.Vec2.ZERO)
            let newPos = new cc.Vec2(0, Math.abs(wpos.y - contentwpos.y) - 46)
            this.scroll_view.scrollToOffset(newPos, 1)
        }
        // let scrollview: cc.ScrollView = new cc.ScrollView()
        
        if (this.node_everyday_select.active) {
            scrocall(this.node_everyday_select)
            return
        }
    }
    

    //滚动到合适的位置  1 特惠礼包  2 周末礼包  3通行证
    scrollToRightPos() {
        this.scroll_view.scrollToTop(0.0);
        let scrocall = (targetnode) => {
            let wpos = targetnode.convertToWorldSpaceAR(cc.Vec2.ZERO)
            let contentwpos = this.scroll_view.content.convertToWorldSpaceAR(cc.Vec2.ZERO)
            this.scroll_view.scrollToOffset(new cc.Vec2(0, Math.abs(wpos.y - contentwpos.y) - 46), 1)
        }
        //let scrollview: cc.ScrollView = new cc.ScrollView()
        //礼包
        if (this.giftNode.active) {
            if (this.ExGiftBagNode.active) {
                scrocall(this.ExGiftBagNode)
                return
            }

            if (this.weekendGiftBagNode.active) {
                scrocall(this.weekendGiftBagNode)
                return
            }

            if (this.dayGiftBagNode.active) {
                scrocall(this.dayGiftBagNode)
                return
            }
        }

        // if (this.evilpassnode.active) { //通行证
        //     scrocall(this.evilpassnode)
        // }
    }

    /* 将scrollView滚到底部【要滚到金币部分，目前看UI金币部分在最底端】 */
    public assignScrollPos() {
        //scrollToBottom 
        this.scroll_view.scrollToBottom(0);
    }

    /* 初始化商品信息节点列表 */
    private initEmotionGoodsNodeList() {
        this._emotion_goods_list.push(this.emotion_goods_node_1.getComponent(EmotionGoodsNode));
        this._emotion_goods_list.push(this.emotion_goods_node_2.getComponent(EmotionGoodsNode));
        this._emotion_goods_list.push(this.emotion_goods_node_3.getComponent(EmotionGoodsNode));
        this.emotion_goods_node_1.active = false;
        this.emotion_goods_node_2.active = false;
        this.emotion_goods_node_3.active = false;
    }

    /* 刷新表情商品信息 */
    private refreshEmotionGoods() {
        let bShowEmotionGoodsNode = false;
        let emotionGoodsNodeListLen = this._emotion_goods_list.length;
        let emotionList = this.m_shopData.emotionList;
        if (emotionList && emotionList.length > kZeroNumber) {
            for (let idx = kZeroNumber; idx < emotionGoodsNodeListLen; idx++) {
                if (idx < emotionGoodsNodeListLen) {
                    this._emotion_goods_list[idx].node.active = true;
                    if (emotionList[idx] && emotionList[idx].emotionID) {
                        this._emotion_goods_list[idx].initData(emotionList[idx].emotionID, emotionList[idx].bBought, idx);
                        !bShowEmotionGoodsNode && (bShowEmotionGoodsNode = !emotionList[idx].bBought);
                    }
                }
            }
        }
        this.node_emotion_goods.active = bShowEmotionGoodsNode;
    }

    /*  */
    public onClickEmotionHelpTip() {
        this.node_emotion_help_tip.opacity = k255;
        this.node_emotion_help_tip.zIndex = 999
    }

    /*  */
    public onClickGiftBagHelpTip() {
        this.node_gift_bag_help_tip.opacity = k255;
        this.node_gift_bag_help_tip.zIndex = 999

    }

    /* 播放表情商品动画 */
    private playEmotionGoods(bStart: boolean) {
        if (!this.node_emotion_goods.active) {
            return;
        }
        if (bStart) {
            this.schedule(this.startPlayEmotionTimer, kFourNumber);
            return;
        }
        this.unschedule(this.startPlayEmotionTimer);
    }

    /* 播放表情动画定时器 */
    private startPlayEmotionTimer() {
        let index = Math.floor(Math.random() * this.m_shopData.emotionList.length);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlayEmotionGoods, index);
    }

    /* 检测限时活动信息 */
    private checkLimitActivityInfo(count: number) {
        if (count == tab.Data.GetKeyValue_ConfigTable().UnpackRebateCount) {
            let param = new proto.Msg_LimitActivityReq();
            Net.Send(proto.Ptl.LimitActivityReq, param);
        }
    }

    //自选金卡宝箱的点击事件
    private onClickGoldCardSelectBySelf() {
        let self = this;
        showPopLayerV2("prefab/UnpackRebateSelectCardLayer", UnpackRebateSelectCardLayer, false).then(layer => {
            layer.initData(self._select_card_list);
        });
    }

}
