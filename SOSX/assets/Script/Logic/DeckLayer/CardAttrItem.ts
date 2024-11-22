/*
 * @Descripttion: 属性显示条条
 */

import { CardDisplayType, CardAttrType, isValidObj, kZeroNumber, kNegativeOneNumber, kSingleLineString, kDoubleLineString, kTwoNumber, CardStrengthOrSynthesisObject, kOneNumber, kNoneString, CardNodeState, k255, CardAttrValueInterface } from "../Common/CommonInterface";
import { tab } from "../../Table/table_gen";
import { CreateSpine, LoadResAsync } from "../Utils/GameUtils";
import { Net } from "../../Protocol/Net";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import CardAttr from "../Common/CardAttrClass/CardAttr";
import ManagerCardAttr from "../Common/CardAttrClass/ManagerCardAttr";
import AttackRangeAttr from "../Common/CardAttrClass/AttackRangeAttr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardAttrItem extends cc.Component {
    @property(cc.Node)
    node_basic_attr: cc.Node    = null;

    @property(cc.Sprite)
    spr_attr_icon: cc.Sprite    = null;

    @property(cc.Label)
    lbl_attr_name: cc.Label     = null;

    @property(cc.Label)
    lbl_cur_attr_val: cc.Label  = null;

    @property(cc.Label)
    lbl_next_attr_val: cc.Label = null;


    @property(cc.Sprite)
    spr_arrow: cc.Sprite        = null;

    // @property(cc.Sprite)
    // spr_bg: cc.Sprite           = null;

    @property(cc.Label)
    lbl_suffix_mark: cc.Label   = null;
    
    private _card_attr_type: CardAttrType;                     //卡牌属性类型
    private _card_static_id: number;                          //卡牌静态id
    private _display_card_type: CardDisplayType;             //卡牌的显示类型
    private _card_level: number;                            //卡牌等级
    private _old_attr_value: number;                       //属性就数据值
    private _display_idx: number;                         //显示下标
    private _current_synthesis_lv: number = kOneNumber; //当前合成等级
    private _bCardAttrValuePromote: boolean;           //属性条数值是否提升
    private _card_state: CardNodeState;               //卡牌当前所处的状态【拥有、未拥有、阵容、使用中】
    private _card_attr_obj: CardAttr = null;
    private _sp_uplv_light: sp.Skeleton = null;
    private _temp_level:number = 0;
    private _is_click_up_level:false;

    onLoad () {
        //监听卡牌升级信息
        /*Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UplvCardSuccess, (param: any)=>{
            if("number" == typeof(param)){
                this._card_level = param;
                this.refreshAttrData();
            }
        }, this);*/

        //监听卡牌强化升星等级改变信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardStrengthLv, (param: any)=>{
            if(typeof(param as CardStrengthOrSynthesisObject) !== "undefined"){
                this._is_click_up_level = param.levelUp;
                this.refreshAttrData(false);
            }
        }, this);

        //监听卡牌合成等级改变信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardSynthesisLv, (param: any)=>{
            if(typeof(param as CardStrengthOrSynthesisObject) !== "undefined"){
                this._display_card_type    = param.displayState;
                this._current_synthesis_lv = param.curLv;
                this.refreshAttrData(false);
            }
        }, this);

        //监听重置属性合成、升星等级信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetCardState, (param: any)=>{
            this._current_synthesis_lv = kOneNumber;
        }, this);

        this.initUpLvSpine();
        
        this.setDefaultText();
    }

    start () {

    }

    /* 初始化升级动画
     */
    private initUpLvSpine(){
        // this._sp_uplv_light          = this.node_uplv_spine.getComponent(sp.Skeleton);
        // this.node_uplv_spine.opacity = kZeroNumber;
    }

    /** 
     * Description: 设置卡牌属性数据
     * @param attrType          属性类型
     * @param displayType       显示类型
     * @param cardState         卡牌当前所处的状态
     * @param cardStaticID      卡牌静态id
     * @param cardLv            卡牌当前等级
     * @param starUpLv          升星等级
     * @param synthesisLv       合成等级
     * @param idx               显示下标
     */
    public setCardAttrData( attrType: number, 
                            displayType: CardDisplayType,
                            cardState:   CardNodeState,
                            cardStaticID: number, 
                            cardLv: number,
                            synthesisLv: number,
                            idx: number){
        this._card_attr_type       = attrType;
        this._card_static_id       = cardStaticID;
        this._card_state           = cardState;
        this._card_level           = cardLv;
        this._current_synthesis_lv = synthesisLv;
        this._display_card_type    = displayType;
        this._display_idx          = idx;
        this._card_attr_obj        = ManagerCardAttr.getInstance().getCardAttrObj(this._card_attr_type, this._card_static_id);

        if(!isValidObj(this._card_attr_obj)){
            if(!cc.sys.isNative){throw new Error("卡牌属性: " + this._card_attr_type + "创建失败！");}
        }
        
        if(kNegativeOneNumber == attrType){
            this.node_basic_attr.active = false;
            this._old_attr_value        = kZeroNumber;
            this.setAttrBgVisible();
            return;
        }

        let cardAttrObj      = this._card_attr_obj.getAttrValue(cardLv, 
                                                                this._current_synthesis_lv, 
                                                                this._display_card_type,
                                                                this._is_click_up_level);
        this._old_attr_value = isValidObj(cardAttrObj) ? cardAttrObj.curAttrVal : kZeroNumber; 
        
        this.displayPage();
        this.setCardAttrNameAndIcon(cardAttrObj);
    }

    /* 统计属性值有提升的属性条
     * @param cardLv  当前卡牌等级
     */
    public statAttrValuePromoteBar(cardLv: number){
        if(!this.node.active){return false;}
        
        this._card_level = cardLv;

        let cardAttrObj = this._card_attr_obj.getAttrValue(cardLv, 
                                                            this._current_synthesis_lv, this._display_card_type,this._is_click_up_level);
        if(CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == this._display_card_type){
            let nowVal  = isValidObj(cardAttrObj) ? cardAttrObj.curAttrVal : kZeroNumber;
            if(nowVal != this._old_attr_value){
                this._old_attr_value        = nowVal;
                this._bCardAttrValuePromote = true;
                this.node.opacity           = kZeroNumber;
                return true;
            }
        }
        this._bCardAttrValuePromote = false;
        this.node.active            = false;
        return false;
    }
    
    /* 刷新属性条数据
     */
    public refreshAttrData(bUpLv: boolean = true){
        if(!this.node.active){return;}

        if(kOneNumber == this._current_synthesis_lv){
            if(CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP != this._display_card_type){
                this._display_card_type = CardDisplayType.CARD_DISPLAY_TYPE_ATTR;
            }
        }
        
        if(CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == this._display_card_type){
            this._bCardAttrValuePromote && this.playUpLvEffect();
        }

        bUpLv && this.displayPage();
        !bUpLv && this.setCardAttrValue();
    }
    
    /* 检测卡牌有木有达到最大等级
     */
    private checkCardIsMaxLv(): boolean{
        let itemTab:tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if(!isValidObj(itemTab)){
            return false;
        }

        let upLvTab               = tab.Data.CardUpLevelTableByQuality.getValue(itemTab.Quality);
        if(!isValidObj(upLvTab)){
            return false;
        }

        let bMaxLv                = this._card_level >= upLvTab.Count.length;
        if(this.lbl_next_attr_val.node.active){
            this.lbl_next_attr_val.node.active = !bMaxLv;
        }
        return bMaxLv;
    }
    
    /* 显示页面
     */
    async displayPage(){
        // this.setDefaultText();
        
        // let cardTab: tab.CardAttrTable = tab.Data.CardAttrTableByAttrType.getValue(this._card_attr_type);
        // if(!isValidObj(cardTab)){
        //     return;
        // }
        this.setCardAttrValue();
        
        // let sf = await LoadResAsync(cardTab.IconPath, cc.SpriteFrame)
        // if(sf) {
        //     this.spr_attr_icon.spriteFrame = sf;
        // }
    }

    /* 设置文本默认text
     */
    private setDefaultText(){
        this.lbl_attr_name.string       = kDoubleLineString;
        this.lbl_cur_attr_val.string    = kSingleLineString;
        this.lbl_next_attr_val.string   = kSingleLineString;
    }

    /* 设置具体属性值
     */
    private setCardAttrValue(){
        let curCardLevel     = this._card_level;
        curCardLevel         = CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == this._display_card_type ? 
                                                     ((curCardLevel > kOneNumber) ? (curCardLevel - kOneNumber) : curCardLevel) : 
                                                     curCardLevel;

        let cardAttrValueObj = this._card_attr_obj.getAttrValue(curCardLevel, 
                                                                this._current_synthesis_lv, 
                                                                this._display_card_type,
                                                                this._is_click_up_level
                                                                );
    
        this.lbl_next_attr_val.node.active = true;
        let tmpVal = this._card_attr_obj.getAttrDescription(this._display_card_type, cardAttrValueObj, false);
        if (this._card_attr_obj instanceof  AttackRangeAttr && Number(tmpVal) == 0){
            tmpVal = "不攻击"
        }

        this.lbl_cur_attr_val.string       = tmpVal     
        let suffixString                   = this._card_attr_obj.getSuffixMark();
        this.lbl_suffix_mark.string        = suffixString;
        this.lbl_suffix_mark.node.active   = suffixString !== kNoneString;

        (< any > this.lbl_cur_attr_val)._forceUpdateRenderData();
        (< any > this.lbl_suffix_mark)._forceUpdateRenderData();

        if(CardDisplayType.CARD_DISPLAY_TYPE_ATTR == this._display_card_type){
            if(this.checkCardIsMaxLv()){
                this.spr_arrow.node.active         = false;
                this.lbl_next_attr_val.node.active = false;
                return;
            }

            if(CardNodeState.CARD_NODE_STATE_UNOWN == this._card_state){
                this.spr_arrow.node.active         = false;
                this.lbl_next_attr_val.node.active = false;
                return;
            }
        }

        if(this._is_click_up_level||this._current_synthesis_lv>1){
            // bChange = (nextVal != curVal && nextVal != kZeroNumber) ? true : false;
            if(cardAttrValueObj.nextAttrVal!==kZeroNumber&&cardAttrValueObj.nextAttrVal!=cardAttrValueObj.curAttrVal){
                cardAttrValueObj.bChange = true;
            }
        }else{
            cardAttrValueObj.bChange = false;
        }

        this.lbl_next_attr_val.node.active = cardAttrValueObj.bChange;
        this.lbl_next_attr_val.string      = this._card_attr_obj.getAttrDescription(this._display_card_type, cardAttrValueObj, true);
        this.spr_arrow.node.active         = 
                                             (CardDisplayType.CARD_DISPLAY_TYPE_ATTR != this._display_card_type) && 
                                             cardAttrValueObj.bChange;
                                                
        (< any > this.lbl_next_attr_val)._forceUpdateRenderData();
    }

    /* 设置属性icon和属性名称
     * @param attrType   属性类型
     */
    async setCardAttrNameAndIcon(attr:CardAttrValueInterface){
        this.setAttrBgVisible();
        
        // let tabData = tab.Data.CardAttrTableByAttrType.getValue(attrType);
        if(isValidObj(attr)){
            // let sf = await LoadResAsync(attr.IconPath, cc.SpriteFrame)
            // if(sf) {
            //     this.spr_attr_icon.spriteFrame = sf;
            // }
            this.lbl_attr_name.string          = attr.attrName;
        }
    }

    /* 设置属性条背景图的可见性
     */
    private setAttrBgVisible(){
        // this.spr_bg.node.active = ((this._display_idx % kTwoNumber) == kZeroNumber && 
        //                             CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP != this._display_card_type);
    }
    
    /* 播放升级特效
     */
    private playUpLvEffect(){
        this.node.opacity = 255;
        if(!this._sp_uplv_light){
            return;
        }
    
        // this.node_uplv_spine.opacity = k255;
        this._sp_uplv_light.setAnimation(kZeroNumber, "idle", false);
        // this._sp_uplv_light.setStartListener(()=>{
        //     this.playAttrAnim();
        // });
        this.playAttrAnim();
        this._sp_uplv_light.setCompleteListener(()=>{
            // this.node_uplv_spine.opacity = kZeroNumber;
            this._sp_uplv_light.setCompleteListener(null);
        });
    }

    /* 播放属性条动画
     */
    private playAttrAnim(){
        let animNode = this.node_basic_attr.getComponent(cc.Animation);
        if(animNode){
            animNode.play("cardattr_item");
        }
    }

    /* 改变属性条显示类型
     * @param displayType    显示类型
     */
    public changeAttrDisplayType(displayType: CardDisplayType){
        this._display_card_type = displayType;
        this.setCardAttrValue();
    }

    /* 恢复属性条的可见性
     */
    public resumeNodeVisible(){
        this.node.active = true;
        this.setAttrBgVisible();
    }
}
