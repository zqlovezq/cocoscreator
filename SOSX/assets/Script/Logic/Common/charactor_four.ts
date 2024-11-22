/*
 * @Descripttion: 
 */

import { CardNodeState, isValidObj, kZeroNumber } from "./CommonInterface";
import Role from "./Role";
import SmallPortrait from "./SmallPortrait";

const {ccclass, property} = cc._decorator;

@ccclass
export default class charactor_four extends cc.Component {

    @property(cc.Node)
    node_card_1:cc.Node = null;

    @property(cc.Node)
    node_card_2:cc.Node = null;

    @property(cc.Node)
    node_card_3:cc.Node = null;

    @property(cc.Node)
    node_card_4:cc.Node = null;

    // @property(cc.Node)
    // node_card_5:cc.Node = null;

    protected _card_list:SmallPortrait[] = [];

    /* 初始化卡组数据
     * @param ids        卡组id列表
     * @param cardState  卡牌状态
     */
    public initData(ids:string[] | number[], /*func:Function, */cardState: CardNodeState, limitLv?:number, bchallenge?:boolean) {
        this.onFocusInEditor();
        for(let i = kZeroNumber; i < this._card_list.length; i++){
            if(i >= ids.length){
                this._card_list[i].node.active = false;
            } else {
                if(typeof ids[i] == "string"){
                    if(null != this._card_list[i]){
                        this._card_list[i].node.active = true;
                        this._card_list[i].initData(ids[i] as string, true,/*func, */cardState, limitLv);
                        
                    }  
                } else {
                    if(null != this._card_list[i]){
                        this._card_list[i].node.active = true;
                        this._card_list[i].initWithStaticId(ids[i] as number,true, /*func,*/ cardState, limitLv);
                    }
                }
            }
        }
    }

    /* 初始化魔王数据
     * @param cardIdArr   卡组id列表
     */
    public initDevilData(cardIdArr: number[], cardState: CardNodeState = CardNodeState.CARD_NODE_STATE_OWN, blimitLv?:number, bchallenge?:boolean, lockvec?: number[]){
        this.onFocusInEditor();
        for(let i = kZeroNumber; i < this._card_list.length; i++){
            if(i < cardIdArr.length){
                let ownItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(cardIdArr[i]);
                if(isValidObj(ownItemData)){
                    if(null != this._card_list[i]){
                        this._card_list[i].node.active = true;
                        if(lockvec && lockvec.includes(ownItemData.staticId)) {
                            cardState = CardNodeState.CARD_NODE_STATE_LOCKED
                        }
                        this._card_list[i].initData(ownItemData.id,true, cardState, blimitLv);

                    }  
                } else {
                    if(null != this._card_list[i]){
                        this._card_list[i].node.active = true;
                        this._card_list[i].initWithStaticId(cardIdArr[i], true,CardNodeState.CARD_NODE_STATE_UNOWN);
                    }
                }
            } else {
                this._card_list[i].node.active = false;
            }
        }
    }

    /**
     * Descrption: 重置卡牌节点数据
     * @param ids 
     */
    public resetCardData(ids:string[] | number[]){
        for(let i = kZeroNumber; i < this._card_list.length; i++){
            if(i >= ids.length){
                //this._card_list[i] && this._card_list[i].node.active = false;
            }else{
                if(typeof ids[i] == "string"){
                    if(null != this._card_list[i]){
                        this._card_list[i].resetDataOfUUID(ids[i] as string);
                    }  
                }else{
                    if(null != this._card_list[i]){
                        this._card_list[i].resetDataOfStaticId(ids[i] as number);
                    }
                }
            }
        }
    }

    protected onFocusInEditor(){
        if(this._card_list.length == 0){
            this.node_card_1.active = false;
            this.node_card_2.active = false;
            this.node_card_3.active = false;
            this.node_card_4.active = false;
            // this.node_card_5.active = false;
            
            this._card_list.push(this.node_card_1.getComponent(SmallPortrait));
            this._card_list.push(this.node_card_2.getComponent(SmallPortrait));
            this._card_list.push(this.node_card_3.getComponent(SmallPortrait));
            this._card_list.push(this.node_card_4.getComponent(SmallPortrait));
            // this._card_list.push(this.node_card_5.getComponent(SmallPortrait));
        }
    }

    onDestroy(){
        this._card_list = [];
    }
}
