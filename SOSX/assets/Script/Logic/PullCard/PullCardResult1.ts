/**
 *  
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { roots } from "../../Protocol/protobufjs";
import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
// import GetNewCard from "../Common/GetNewCard";
import ManagerShareType from "../Common/ManagerShareType";
import ProgressBarOfCard from "../Common/ProgressBarOfCard";
import Role from "../Common/Role";
import ShareBtnModel from "../Common/ShareBtnModel";
import GuideController from "../Guide/GuideController";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import SeasonRewardSelect from "../Season/SeasonRewardSelect";
import { copy, CreateSpine, getBoxIDAndCfg, LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import Card from "./Card";

/*  */
export class ICardInfo {
    id: number;
    count: number;
    quality: tab.ItemQuality;
    isNew: boolean;
    cardType?: number;
    transformedRewards?:any[]
}

/*  */
const { ccclass, property } = cc._decorator;

/*  */
const GROUP_CON_CRAD = 4;

/*  */
export interface ICardSkeleton {
    cardId: number,
    spineId: number,
    cardSkeletonData: sp.SkeletonData,
    qualitySkeleton: sp.Skeleton,
    qualityAnimation: string,
    qualityBg: cc.SpriteFrame,
}

/*  */
@ccclass
export default class PullCardResult1 extends PopLayer {

    @property(cc.Node)
    scrollview: cc.Node = null; /*  */

    @property(cc.Prefab)
    pre_groupCard: cc.Prefab = null; /*  */

    @property(cc.Prefab)
    pre_card: cc.Prefab = null; /*  */

    @property(cc.Node)
    spine_node: cc.Node = null; /*  */

    @property(cc.Node)
    scale_node: cc.Node = null; /*  */

    @property(cc.Node)
    quality_bg: cc.Node = null; /*  */

    @property(cc.Label)
    lab_name: cc.Label = null; /*  */

    @property(cc.Sprite)
    spr_name: cc.Sprite = null; /*  */

    @property(cc.Node)
    black_node: cc.Node = null; /*  */

    @property(cc.Node)
    unreal_image_node: cc.Node = null; /*  */

    @property(cc.Node)
    open_node: cc.Node = null; /*  */

    @property(ShareBtnModel)
    node_share_btn: ShareBtnModel = null; /*  */

    @property(cc.Button)
    btn_closed: cc.Button = null; /*  */

    @property(cc.Node)
    node_skip: cc.Node = null; /*  */
    @property(cc.Button)
    btn_close: cc.Button = null; /*  */
    public static boxSelectIndex: number = 0

    protected cards: ICardInfo[] = [];
    private texiao_skel: sp.Skeleton = null
    private cardQualitys: ICardSkeleton[] = [];
    private cardIndex: number = 0;
    private _bHaveNewGoldCard: boolean = false;
    private rewardsFinal: ICardInfo[] = []
    private copy: proto.IRewardSimpleInfo[] = []
    private canTouch: boolean = false
    public bSelectBoxType: boolean = false

    awards: proto.IRewardSimpleInfo[] = []
    static boxCfg: tab.BoxTable = null;
    static fristAward: proto.IRewardSimpleInfo = null;
    // private checkGuide:boolean = true;
    public static aleadyShowIDMap: Map<number, number> = new Map<number, number>()

    /*  */
    onLoad() {
        this.node_share_btn.initData(tab.SharedType.SharedType_PullCard);
        this.btn_close.node.on("click",()=>{this.hide()},this);
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param) => {
            this.hide()
        }, this);

        this.scheduleOnce(()=>{
            let list = this.scrollview.getComponentsInChildren(SimpleItem)
            list.forEach(e=>{
                e.checkTransformReward()
            })
        },0.6)
    }
    hide(): void {
        if (GuideController.Instance.isGuiding()) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 3);
            this.node.destroy()
        }else{
            this.node.destroy();
        }
      }
    start() {
        this.showResult();
    }

    /*  */
    onCardPreviewTouchStart(TOUCH_END: string, onCardPreviewTouchEnd: any, arg2: this) {
        if (this.canTouch === false) {
            return
        }
        this.canTouch = false
        let bover = this.setPreviewCardInfo()
        if (bover) {
            this.onClickSkipButton()
            return
        }
        let spineiidle: string = PullCardResult1.boxCfg.BoxSpineActionName
        //spineiidle = "idle1"
    }

    // 使用item信息，展示奖励
    public static showAward_EX2(currewards: proto.IRewardSimpleInfo[], callback = null, bskipEffect: boolean = false) {
        var rewards = [].concat(currewards)
        if (this.boxCfg && this.boxCfg.BoxRewardType == tab.BoxRewardType.BoxRewardType_DoubleChoose) {
            let firstAward: proto.IRewardSimpleInfo = rewards.shift()  //先取出第一个奖励的标记位
            this.fristAward = firstAward
            if (firstAward.rewardType == tab.RewardType.RewardType_BoxGroupType) {
                let info = getBoxIDAndCfg(firstAward.rewardId)
                if (info) {
                    PullCardResult1.boxCfg = info.boxCfg
                }
            } else if (firstAward.rewardType == tab.RewardType.RewardType_BoxType) {
                PullCardResult1.boxCfg = tab.Data.BoxTableByBoxID.getValue(firstAward.rewardId)
            } else if (firstAward.rewardType == tab.RewardType.RewardType_ItemType) {
                PullCardResult1.boxCfg = tab.Data.ItemTableByID.getValue(firstAward.rewardId)
                // let info = getBoxIDAndCfg(firstAward.rewardId)
                // if(info){
                //     PullCardResult1.boxCfg = info.boxCfg
                // }
            } else {
                PullCardResult1.boxCfg = null
            }

            showPopLayerV2("prefab/PullCardResult1", PullCardResult1,true,cc.macro.MAX_ZINDEX).then(res => {
                if (res) {
                    res.bSelectBoxType = true
                    res.boxSelectCardInit(rewards);
                    res.setCloseCallBack(callback)
                }
            });

            return
        } else {
            let bNewGoldCard: boolean = false;
            let iCardInfos: ICardInfo[] = [];
            PullCardResult1.aleadyShowIDMap.clear()
            for (let award of rewards) {
                let cardcfg: tab.CardTable = this.getValue(award)//tab.Data.CardTableByID.getValue(award.rewardId) /* zhiboM@20230406 for <> */
                
                if (cardcfg) {
                    let iCardInfo: ICardInfo = { id: 0, count: 0, quality: -1, isNew: false };
                    iCardInfo.id = award.rewardId
                    iCardInfo.count = award.rewardCount
                    iCardInfo.cardType = award.rewardType
                    iCardInfo.transformedRewards = award.transformedRewards
                    if (iCardInfo.id == proto.ConstItemID.CTI_Gold || iCardInfo.id == proto.ConstItemID.CTI_Diamond) {
                        // 金币和钻石不显示new标记
                        iCardInfo.isNew = false
                    }

                    let ownItem = Role.Instance.RoleItemAtrr.getItemByStaticID(iCardInfo.id);
                    let cardcfg = tab.Data.CardTableByID.getValue(iCardInfo.id)
                    let itemTab = tab.Data.ItemTableByID.getValue(iCardInfo.id);

                    if (!isValidObj(ownItem) && cardcfg) {
                        iCardInfo.isNew = true;
                        if (itemTab.Quality >= tab.ItemQuality.ItemQuality_Blue) {
                            PullCardResult1.aleadyShowIDMap.set(iCardInfo.id, 0)
                        }
                    }

                    if (itemTab) {
                        iCardInfo.quality = itemTab.Quality;
                        iCardInfo.isNew && !bNewGoldCard && (bNewGoldCard = iCardInfo.quality === tab.ItemQuality.ItemQuality_Golden);
                    }

                    if (iCardInfo.count > 0) {
                        iCardInfos.push(iCardInfo);
                    }
                } else {
                    let iCardInfo: ICardInfo = { id: award.rewardId, count: award.rewardCount, quality: -1, isNew: false };
                    if (iCardInfo.count > 0) {
                        iCardInfos.push(iCardInfo)
                    }
                }
            }

            // 依resources目录作为根目录
            showPopLayerV2("prefab/PullCardResult1", PullCardResult1,true,cc.macro.MAX_ZINDEX).then(res => {
                if (res) {
                    res.setHaveNewGoldCard(bNewGoldCard);
                    res.initData(rewards, iCardInfos, bskipEffect);
                    res.setCloseCallBack(callback)
                }
            });
        }
    }

    //二选一宝箱（约定的规则:奖励列表中的第0个位置存放是否是二选一宝箱的标识，如果是，走下面的流程)
    //并且约定要选择的卡牌排列在奖励的最后，数量是偶数
    async boxSelectCardInit(awards: proto.IRewardSimpleInfo[], index: number = 0) {
        this.rewardsFinal = []
        let spinename: string = ""
        for (let card of awards) {
            let itemcfg = tab.Data.ItemTableByID.getValue(card.rewardId)
            if (itemcfg && itemcfg.Quality == tab.ItemQuality.ItemQuality_Golden) {
                spinename = "idle2"
                break;
            }
        }

        this.scrollview.active = false
        this.texiao_skel = await CreateSpine(tab.Data.GetKeyValue_ConfigTable().PullCardBgEffectSpineId);
        this.texiao_skel.node.active = true;
        this.open_node.addChild(this.texiao_skel.node);
        this.texiao_skel.setAnimation(0, spinename, false);  // 设置抽卡动画

        let thisTmp = this;
        this.texiao_skel.setCompleteListener(() => {
            thisTmp.open_node.removeChild(thisTmp.texiao_skel.node);
            this.selectBox()
            this.texiao_skel.setCompleteListener(null);
        });

        for (let i = 0; i < PullCardResult1.fristAward.rewardCount; i++) { //count存的是开拍开始选择的位置
            let ele = awards.shift()
            let award: ICardInfo = new ICardInfo();
            if (award) {
                award.id = ele.rewardId
                award.count = ele.rewardCount
                award.isNew = false
                this.rewardsFinal.push(award)
            }
        }
        this.awards = awards
    }

    /*  */
    selectBox() {
        this.node_skip.active = false
        let awardIndex: number = 0
        this.copy = this.awards.slice(0, this.awards.length)
        let self = this

        let show = async () => {
            if (self.copy.length >= 2) {

                let left = self.copy.shift()
                let right = self.copy.shift()
                let lcard = new ICardInfo()
                let rcard = new ICardInfo()
                lcard.count = left.rewardCount
                lcard.id = left.rewardId
                let ownItem = Role.Instance.RoleItemAtrr.getItemByStaticID(left.rewardId);
                let cardcfg = tab.Data.CardTableByID.getValue(left.rewardId)
                if (!isValidObj(ownItem) && cardcfg) {
                    lcard.isNew = true;
                }
                rcard.count = right.rewardCount
                rcard.id = right.rewardId
                ownItem = Role.Instance.RoleItemAtrr.getItemByStaticID(right.rewardId);
                cardcfg = tab.Data.CardTableByID.getValue(right.rewardId)
                if (!isValidObj(ownItem) && cardcfg) {
                    rcard.isNew = true;
                }

                let selectCard = cc.director.getScene().getComponentInChildren(SeasonRewardSelect)
                if (!selectCard) {
                    selectCard = await showPopLayerV2("prefab/SeasonRewardSelect", SeasonRewardSelect)
                }
                selectCard.initData(-1, [left.rewardId, left.rewardCount], [right.rewardId, right.rewardCount]);
                selectCard.setCloseCallAfter(() => {
                    let select1 = selectCard._request_reward_idx == 0 ? lcard : rcard
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_PlayCardIncreaseAnim, select1.count);
                    selectCard.setClickClose(() => {
                        setTimeout(() => {
                            let param = new proto.Msg_BoxAwardSelectReq()
                            param.boxIndex = PullCardResult1.boxSelectIndex
                            param.awardIndex = awardIndex++;
                            param.selectIndex = selectCard._request_reward_idx
                            Net.Send(proto.Ptl.BoxAwardSelectReq, param)
                            let select = selectCard._request_reward_idx == 0 ? lcard : rcard
                            this.rewardsFinal.push(select)
                            if (this._bHaveNewGoldCard == false) {
                                let itemcfg = tab.Data.ItemTableByID.getValue(select.id)
                                if (itemcfg && itemcfg.Quality == tab.ItemQuality.ItemQuality_Golden) {
                                    this._bHaveNewGoldCard = true
                                }
                                let ownItem = Role.Instance.RoleItemAtrr.getItemByStaticID(select.id);
                                let cardcfg = tab.Data.CardTableByID.getValue(select.id)
                                this._bHaveNewGoldCard = this._bHaveNewGoldCard && !isValidObj(ownItem) && cardcfg != undefined
                            }

                            show()
                        }, 500);
                    })
                })
            }
            else {
                for (let i = 0; i < this.copy.length; i++) {
                    let award: ICardInfo = new ICardInfo();
                    award.id = this.copy[i].rewardId
                    award.count = this.copy[i].rewardCount
                    award.isNew = false
                    let ownItem = Role.Instance.RoleItemAtrr.getItemByStaticID(award.id);
                    let cardcfg = tab.Data.CardTableByID.getValue(award.id)
                    if (!isValidObj(ownItem) && cardcfg) {
                        award.isNew = true;
                    }
                    self.rewardsFinal.push(award)
                }

                self.showResult_boxselect()
                PullCardResult1.boxSelectIndex++

            }
        }

        show()
    }

    // 初始化抽卡结果的开场动画
    async init(spinename: string = "idle") {

        this.scrollview.active = false
        this.node_skip.active = false
        this.setPreviewCardInfo();

        if (PullCardResult1.boxCfg != null) {

            if (PullCardResult1.boxCfg.BoxOpenAnimType > 0) {
                this.onClickSkipButton()
                return
            }
        }

    }

    /*  */
    private setPreviewCardInfo() {
        return true
    }

    /*  */
    setSkelentonData(paramNode: cc.Node, data: sp.SkeletonData, spineId: number) {
        let spineTab = tab.Data.SpineTableByID.getValue(spineId);
        if (!spineTab) {
            cc.error(`cannot find SpineTable by id ${spineId}`);
            return;
        }

        let skel: sp.Skeleton = paramNode.getComponent(sp.Skeleton);
        if (!skel) {
            cc.error("paramNode.getComponent(sp.Skeleton) error");
            return;
        }

        skel.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE)
        skel.skeletonData = data;

        if (spineTab.DisablePreAlpha) {
            skel.premultipliedAlpha = false;
        }

        paramNode.setScale(spineTab.ScaleX, spineTab.ScaleY);
        paramNode.setPosition(spineTab.OffsetX, spineTab.OffsetY);

        skel.setAnimation(0, "idle", true);
    }

    // 获取spine的数据
    async getSpineData(spineId: number): Promise<sp.SkeletonData> {
        let spineTab = tab.Data.SpineTableByID.getValue(spineId);
        if (!spineTab) {
            cc.error(`cannot find SpineTable by id ${spineId}`);
            return null;
        }

        let data = await LoadResAsync(spineTab.Url, sp.SkeletonData);
        return data;
    }

    // 初始化所有卡牌的动画数据
    async initAnimation() {
        for (let card of this.cards) {
            let cardTab = tab.Data.CardTableByID.getValue(card.id);
            let itemcfg = tab.Data.ItemTableByID.getValue(card.id)
            if (cardTab && itemcfg) {
                let cardSkeData = await this.getSpineData(cardTab.PortraitSpineID);
                let qualitySke = await CreateSpine(tab.Data.GetKeyValue_ConfigTable().PullCardBgEffectSpineId);
                let qualityTab = tab.Data.QualityTableByQuality.getValue(itemcfg.Quality);
                let qualityBgSF = null;
                if (qualityTab) {
                    qualityBgSF = await LoadResAsync(qualityTab.PullCardBg, cc.SpriteFrame);
                }
                let card_quality_skeleton: ICardSkeleton = {
                    cardId: card.id, spineId: cardTab.PortraitSpineID,
                    cardSkeletonData: cardSkeData, qualitySkeleton: qualitySke,
                    qualityAnimation: qualityTab.PullCardBgAniName, qualityBg: qualityBgSF
                }

                this.cardQualitys.push(card_quality_skeleton);
            }
        }
    }

    /* zhibo+S @20230406 for <临时增加两个获得道具信息的函数，这两个函数不一定是最优解> */
    /* 根据奖品的ID，获得奖品的配置信息 */
    public static getValue(reward: proto.RewardSimpleInfo) {
        if (reward.rewardType == tab.RewardType.RewardType_BoxGroupType) {
            // let info = getBoxIDAndCfg(reward.rewardId)
            // if(info){
            //     PullCardResult1.boxCfg = info.boxCfg
            // }
        } else if (reward.rewardType == tab.RewardType.RewardType_BoxType) {
            return tab.Data.BoxTableByBoxID.getValue(reward.rewardId)
        } else if (reward.rewardType == tab.RewardType.RewardType_ItemType) {
            return tab.Data.ItemTableByID.getValue(reward.rewardId)
        } else if (reward.rewardType == tab.RewardType.RewardType_Emotion) {
            return tab.Data.EmojiTableByID.getValue(reward.rewardId)
        } else {
            return null
        }
    }

    /*  */
    public getCfgValue(reward: proto.RewardSimpleInfo) {
        if (reward.rewardType == tab.RewardType.RewardType_BoxGroupType) {
            // let info = getBoxIDAndCfg(reward.rewardId)
            // if(info){
            //     PullCardResult1.boxCfg = info.boxCfg
            // }
        } else if (reward.rewardType == tab.RewardType.RewardType_BoxType) {
            return tab.Data.BoxTableByBoxID.getValue(reward.rewardId)
        } else if (reward.rewardType == tab.RewardType.RewardType_ItemType) {
            return tab.Data.ItemTableByID.getValue(reward.rewardId)
        } else {
            return null
        }
    }
    /* zhibo+E @20230406 for <临时增加两个获得道具信息的函数，这两个函数不一定是最优解> */

    // 初始化所有数据
    public initData(rewards: proto.IRewardSimpleInfo[], paramCards: ICardInfo[], bSkipEffect: boolean = false) {
        paramCards.sort((paramCard1, paramCard2): number => {
            return paramCard1.quality - paramCard2.quality;
        }
        );
        rewards.sort((param1, param2): number => {
            let lc = this.getCfgValue(param1); //tab.Data.ItemTableByID.getValue(param1.rewardId)
            let rc = this.getCfgValue(param2); //tab.Data.ItemTableByID.getValue(param2.rewardId)
            return lc?.Quality - rc?.Quality;
        }
        );
        this.awards = rewards
        this.cards = paramCards;
        let spinename = "idle"  //默认播放的spine名称
        // for(let card of paramCards){
        //     let itemcfg = this.getCfgValue(card)//tab.Data.ItemTableByID.getValue(card.id)
        //     if(itemcfg && itemcfg.Quality == tab.ItemQuality.ItemQuality_Golden){
        //         spinename = "idle2"
        //         break;
        //     }
        // }

        if (!bSkipEffect) {
            this.init(spinename);
            // this.initAnimation();
        } else {
            this.onClickSkipButton();
        }

    }

    /*  */
    public setHaveNewGoldCard(bHave: boolean) {
        this._bHaveNewGoldCard = bHave;
    }

    // 展示所有抽到的物品
    private showResult() {
        this.scrollview.active = true;
        this.btn_closed.node.active = true;
        this.node_share_btn.node.active = false  //this._bHaveNewGoldCard 废弃，不在展示分享按钮

        let gongxi = cc.find("spr_gongxi", this.node);
        if (gongxi) {
            gongxi.active = true;
        }

        // 四个一组展示
        this.scrollview.removeAllChildren()
        let paramCards: ICardInfo[] = []
        for (let i = 0; i < this.cards.length; ++i) {
            paramCards.push(this.cards[i]);
            // 四个为一组，最后一组可以不满四个
            if (paramCards.length == GROUP_CON_CRAD || (i == this.cards.length - 1)) {
                let groupCard = cc.instantiate(this.pre_groupCard);
                this.scrollview.addChild(groupCard);
                groupCard.active = true;
                for (let cardInfo of paramCards) {
                    let card = cc.instantiate(this.pre_card).getComponent(SimpleItem);
                    groupCard.addChild(card.node);
                    card.node.active = true;
                    card.setView_ex(cardInfo,true);
                }
                paramCards = [];
            }
        }

        //检测下新卡的展示
        if (PullCardResult1.aleadyShowIDMap.size > 0) {
            let id: number[] = []
            PullCardResult1.aleadyShowIDMap.forEach((showflag, cardid) => {
                if (showflag == 0) id.push(cardid)
            });

            // GetNewCard.showVec(id)
        }
    }

    /*  */
    private showResult_boxselect() {
        this.scrollview.active = true;
        this.btn_closed.node.active = true;

        this.node_share_btn.node.active = false  //this._bHaveNewGoldCard 废弃，不在展示分享按钮

        let gongxi = cc.find("spr_gongxi", this.node);
        if (gongxi) {
            gongxi.active = true;
        }

        //合并同类项
        let map: Map<number, ICardInfo> = new Map<number, ICardInfo>()
        for (let i = 0; i < this.rewardsFinal.length; i++) {
            let getinfo = map.get(this.rewardsFinal[i].id)
            if (getinfo == undefined) {
                let info = new ICardInfo()
                info.count = this.rewardsFinal[i].count
                info.id = this.rewardsFinal[i].id
                info.isNew = this.rewardsFinal[i].isNew

                map.set(this.rewardsFinal[i].id, info)
                continue
            }

            getinfo.count += this.rewardsFinal[i].count
            map.set(this.rewardsFinal[i].id, getinfo)
        }

        // 四个一组展示
        this.scrollview.removeAllChildren()
        let paramCards: ICardInfo[] = []
        let i = 0
        map.forEach((value, key) => {

            paramCards.push(value);
            if (paramCards.length == GROUP_CON_CRAD || (i == map.size - 1)) {
                let groupCard = cc.instantiate(this.pre_groupCard);
                for (let cardInfo of paramCards) {
                    let card = cc.instantiate(this.pre_card).getComponent(SimpleItem);
                    card.node.active = true;
                    card.setView_ex(cardInfo,true);
                    groupCard.addChild(card.node);
                }
                groupCard.active = true;
                paramCards = [];
                this.scrollview.addChild(groupCard);
            }

            i++
        })

    }

    // 点击确定按钮
    public onClickDisableBt() {
        this.setVisible(false);
    }

    // 点击跳过按钮
    public onClickSkipButton() {
        this.spine_node.active = false;

        if (this.bSelectBoxType) {
            //如果是宝箱选择类型，那么只跳过动画
            if (this.texiao_skel) {
                this.texiao_skel.setCompleteListener(() => {
                    this.texiao_skel.setCompleteListener(null);
                });
                this.open_node.removeChild(this.texiao_skel.node);
            }
            this.selectBox()
        }
        else {
            this.showResult();
        }

    }
}
