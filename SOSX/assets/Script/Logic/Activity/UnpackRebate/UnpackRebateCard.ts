/** 
 *  开箱返利卡牌节点模块
 */

import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { CardNodeState, getCardVisibleLevel, isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber, SetItemNameColor } from "../../Common/CommonInterface";
import Role from "../../Common/Role";
import CardDetail from "../../Main/CardDetail";
import { LoadResAsync, showPopLayerV2 } from "../../Utils/GameUtils";
import { unpackType } from "./UnpackRebateSelectCardLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UnpackRebateCard extends cc.Component {
 
    @property(cc.Node)
    node_select_bg: cc.Node = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Sprite)
    spr_portrait:cc.Sprite = null;

    @property(cc.Label)
    lbl_name:cc.Label = null;

    @property(cc.Label)
    lbl_lv:cc.Label = null;

    @property(cc.Label)
    lbl_lv_fixed_tip:cc.Label = null;

    @property(cc.ProgressBar)
    prog_bar_exp:cc.ProgressBar = null;

    @property(cc.Label)
    lbl_exp:cc.Label = null;

    @property(cc.Sprite)
    spr_up_arrow:cc.Sprite = null;

    @property(cc.Sprite)
    spr_bar_full: cc.Sprite = null;

    @property(cc.Sprite)
    spr_not_up_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.Node)
    spr_new_card: cc.Node = null;

    @property(cc.Sprite)
    spr_quality_lighting: cc.Sprite = null;

    @property(cc.Sprite)
    spr_quality_bg: cc.Sprite = null;

    @property(cc.Node)
    btn_detail_node:cc.Node = null

    private _card_uuid: string    = kNoneString;  //卡牌UUID
    private _card_static_id: number;              //卡牌静态id
    private _card_level: number   = kOneNumber;  //卡牌等级
    private _card_count: number   = kZeroNumber; //拥有的卡牌数量
    private _bOpenDetail: boolean = false;
    ntype: unpackType;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.showCardDetail, this);
        this.spr_new_card.active   = false;
        this.node_select_bg.active = false;

        //监听通知选择卡牌消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUnpackRebateSelectCard, (param: any)=>{
            if(!this.node.active || !this.node.activeInHierarchy){
                return;
            }

            let selectCardID = (param as number);
            this._card_static_id !== selectCardID && this.cancelSelect();
        }, this);
    }

    start () {

    }

    public async initData(cardID: number, bOpenDetail: boolean, ntype:unpackType = unpackType.Rebate){
        let ownItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(cardID);
        if(!bOpenDetail && isValidObj(ownItemData)){
            this._card_uuid  = ownItemData.id;
            this._card_level = ownItemData.level;
            this._card_count = ownItemData.count;
        }
        this.ntype = ntype
        this._card_static_id = cardID;
        this._bOpenDetail    = bOpenDetail;

        this.node_select_bg.active = false;

        this.refreshPage();
    }

    /* 刷新界面 */
    private refreshPage(){

        this.btn_detail_node.active = true// this.ntype == unpackType.BoxGoldCard   //左上角的查看详情按钮

        !this._bOpenDetail && this.checkIsNewCard();
        this.prog_bar_exp.node.active = !this._bOpenDetail;

        let itemData:tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if (!isValidObj(itemData)){
            return;
        }

        this.setCardBgAndIcon();
        this.setCardLevel();
        this.setCardName(itemData.Name);

        if(this._bOpenDetail){
            return;
        }

        let cardUpLevelTab:tab.CardUpLevelTable = tab.Data.CardUpLevelTableByQuality.getValue(itemData.Quality);
        if(isValidObj(cardUpLevelTab)){
            let tempArr = cardUpLevelTab.Count;
            let idx     = kZeroNumber;
            while((idx  = tempArr.indexOf(kZeroNumber, kOneNumber)) > kNegativeOneNumber){
                if (idx > kNegativeOneNumber) {
                    tempArr.splice(idx, kOneNumber);
                }
            }
            if (isValidObj(this._card_uuid)){
                let bMaxLv       = this._card_level >= tempArr.length;
                let needUpLvCnt  = !bMaxLv ? tempArr[this._card_level] : tempArr[tempArr.length - kOneNumber];
                this.setUpLvProgressBar(this._card_count, needUpLvCnt, bMaxLv);
            } else {
                this.setUpLvProgressBar(kZeroNumber, tempArr[kOneNumber], false);
            }
        } else {
            this.setUpLvProgressBar(kZeroNumber, kOneNumber, false);
        }

        /*if(!this.prog_bar_exp.node.active){
            this.node_select_bg.y = kZeroNumber;
        }*/
    }

    /* 检测是否是新卡牌
     */
    private checkIsNewCard(){
        this.spr_new_card.active = !isValidObj(this._card_uuid);//ManagerNewCardRedDot.getInstance().checkIsNewCard(this._card_static_id);
    }

    /* 设置卡牌的等级
     */
    private setCardLevel(){
        let visibleCardLv = getCardVisibleLevel(this._card_level, this._card_static_id);
        this.lbl_lv.string = `${visibleCardLv}`;
    }

    /* 设置卡牌的名称
     */
    private setCardName(name: string){
        this.lbl_name.string = name;
        SetItemNameColor(this.lbl_name, this._card_static_id);
    }

    /* 设置卡牌升级进度条和提示升级箭头
     * @param ownCount   已经拥有的碎片数
     * @param needCount  升级需要的碎片数
     * @param bMaxLv     是否满级
     */
    private setUpLvProgressBar(ownCount: number, needCount: number, bMaxLv: boolean){
        ownCount = ownCount > kZeroNumber ? (ownCount - kOneNumber) : ownCount; //必须减掉自身【设计缺陷】
        let bCanUpLv = ownCount >= needCount && needCount > kZeroNumber;
        this.lbl_exp.node.active          = true;
        this.spr_up_arrow.node.active     = bCanUpLv && !bMaxLv;
        this.prog_bar_exp.node.active     = true;
        this.spr_bar_full.node.active     = bCanUpLv;
        this.spr_not_up_arrow.node.active = !bCanUpLv;
        
        this.lbl_exp.string = `${ownCount}/${needCount}`;
        this.prog_bar_exp.progress = (ownCount / needCount > kOneNumber) ? kOneNumber : ownCount / needCount;
    }

    /* 设置卡牌的icon和背景图
     */
    async setCardBgAndIcon(){
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if (!isValidObj(cardTabData)){
            return;
        }

        let sf = await LoadResAsync(cardTabData.Icon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_portrait){
                this.spr_portrait.spriteFrame = sf;
            }
        }

        let qualityTab = tab.Data.QualityTableByQuality.getValue(cardTabData.Quality);
        if(isValidObj(qualityTab)){
            let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame);
            if(sf) {
                if(this.spr_frame){
                    this.spr_frame.spriteFrame = sf;
                }
            }

            sf = await LoadResAsync(qualityTab.QualityBG, cc.SpriteFrame);
            if(sf){
                if(this.spr_bg){
                    this.spr_bg.spriteFrame = sf;
                }
            }

            if(this._bOpenDetail){
                return;
            }
            this.setCardQualityEffect(qualityTab.CardQualityEffectBg, qualityTab.CardQualityEffectLighting);
        }
    }

    /* 设置卡牌品质spine
     * @param effectBg        品质特效背景图
     * @param effectLighting  品质特效闪光图
     */
    private setCardQualityEffect(effectBg: string, effectLighting: number){
        this.setQualityEffect(effectBg, effectLighting);
    }

    /* 设置卡牌品质特效图
     * @param effectBg 
     * @param effectLighting 
     */
    private async setQualityEffect(effectBg: string, effectLighting: number){
        let effectData = tab.Data.EffectTableByID.getValue(effectLighting);
        let sf = await LoadResAsync(effectData.Url, cc.SpriteFrame);
        if(sf){
            if(this.spr_quality_lighting){
                this.spr_quality_lighting.spriteFrame = sf;
            }
        }

        sf = await LoadResAsync(effectBg, cc.SpriteFrame);
        if(sf){
            if(this.spr_quality_bg){
                this.spr_quality_bg.spriteFrame = sf;
            }
        }
        this.playQualityEffectAnim();
    }

    /* 播放品质特效动画 */
    private playQualityEffectAnim(){
        let anim = this.node_select_bg.getComponent(cc.Animation);
        if(anim){
            anim.play("rotation_light");
        }
    }

    /* 显示卡牌详情 */
    private showCardDetail(){
        if(!this._bOpenDetail){
            this.onSelectCard();
            return;
        }

       this.cardDetail()
    }

    private cardDetail(){
        showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail=>{
            nodeDetail.setCardData(this._card_static_id, CardNodeState.CARD_NODE_STATE_UNOWN);
        });
    }

    private onSelectCard(){
        if(this.node_select_bg.active){
            return;
        }
        
        this.node_select_bg.active = true;
        let anim:cc.Animation = this.node_select_bg.getComponent(cc.Animation)
        if(anim)
        {
            anim.play()
        }
        this.node.scale = 1.1;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUnpackRebateSelectCard, this._card_static_id);
    }

    private cancelSelect(){
        this.node_select_bg.active = false;
        this.node.scale = 1.0;
    }
}
