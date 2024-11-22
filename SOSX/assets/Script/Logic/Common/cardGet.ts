/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

export enum BOX_ANI_TYPE {
    BOX_ANI_TYPE_NORMAL = 0, // 普通宝箱
    BOX_ANI_TYPE_HIGHTCLASS, // 高级宝箱
};

@ccclass
export default class ShopHeroUnit extends PopLayer {
    @property(cc.Sprite)
    m_bg_effect_1: cc.Sprite = null;  

    @property(cc.Sprite)
    m_bg_effect_2: cc.Sprite = null;  

    @property(cc.Node)
    m_cardNode:cc.Node = null;

    @property(cc.Node)
    m_spinendoe_normal: cc.Node = null;

    @property(cc.Node)
    m_spinendoe_hightclass: cc.Node = null;

    @property(cc.Node)
    m_info_node: cc.Node = null;

    @property(cc.Label)
    m_t_name: cc.Label = null;

    @property(cc.Label)
    m_t_card_type: cc.Label = null;

    @property(cc.Node)
    m_info_node_qianbi: cc.Node = null;

    @property(cc.Node)
    m_info_node_jizuo: cc.Node = null;

    @property(cc.Node)
    m_info_node_card: cc.Node = null;

    @property(cc.Label)
    m_info_node_qianbi_num: cc.Label = null;

    @property(cc.ProgressBar)
    m_info_node_card_bar: cc.ProgressBar = null;

    @property(cc.Node)
    m_info_node_card_bar_full: cc.Node = null;

    @property(cc.Node)
    m_info_node_card_bar_ani: cc.Node = null;

    @property(cc.Label)
    m_info_node_card_bar_num_cur: cc.Label = null;

    @property(cc.Label)
    m_info_node_card_bar_num_total: cc.Label = null;

    @property(cc.Node)
    m_info_node_card_arrow: cc.Node = null;
    
    @property(cc.Node)
    m_info_node_card_jie: cc.Node = null;

    @property(cc.Label)
    m_info_node_card_jie_num: cc.Label = null;

    @property(cc.ProgressBar)
    m_info_node_jizuo_bar: cc.ProgressBar = null;

    @property(cc.Node)
    m_info_node_jizuo_bar_full: cc.Node = null;

    @property(cc.Node)
    m_info_node_jizuo_bar_ani: cc.Node = null;

    @property(cc.Label)
    m_info_node_jizuo_bar_num_cur: cc.Label = null;

    @property(cc.Label)
    m_info_node_jizuo_bar_num_total: cc.Label = null;

    @property(cc.Node)
    m_info_node_jizuo_arrow: cc.Node = null;

    @property(cc.Label)
    m_info_node_jizuo_lv: cc.Label = null;

    protected m_itemVec: proto.IItemData[] = [];
    protected m_flag: boolean = false;
    protected m_box_type = 0;
    protected m_item_count_map: Map<number, number> = new Map<number, number>();
    protected m_cur_itemId: number = 0; // 用于卡牌和基座，要变化数字和进度条
    protected m_cur_item_count: number = 0;
    protected m_cur_item_total: number = 0;
    protected m_timeout_id: number = -1;
    protected m_is_play_can_uplv: boolean = false;
    protected m_is_play_bar_ani: boolean = false;

/*
    onLoad (){
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);

        // this.m_bg_effect_1.node.runAction(cc.repeatForever(cc.rotateBy(3, 360)));
        // this.m_bg_effect_2.node.runAction(cc.repeatForever(cc.rotateBy(3, -360)));
        this.m_info_node.active = false;
        
    }

    onClick (btn)
    {
        if (this.m_flag)
        {
            this.onFinish(null);
        }
    }


    async setView(itemId: number, cnt: number)
    {
        let cfg = ItemTableData.getById(itemId);
        if (cfg)
        {
            if (this.m_cardNode)
            {
                let show_node = this.m_cardNode.getComponentInChildren(showCard);
                if (!show_node)
                {
                    show_node = await LoadPreNode("CardBag/showCard", showCard);
                    if (show_node)
                    {
                        this.m_cardNode.addChild(show_node.node);
                    }
                }
                show_node.initView(itemId, cnt, true);
                show_node.setCostNodeVisible(false);
            }
        }
    }


    setOneByoneView (items: proto.IItemData[], box_ani_type: BOX_ANI_TYPE = BOX_ANI_TYPE.BOX_ANI_TYPE_NORMAL)
    {
        this.m_box_type = box_ani_type;
        this.m_itemVec = items;
        this.m_item_count_map = new Map<number, number>();
        for (let i = 0; i < this.m_itemVec.length; ++i)
        {
            let itemInfo = this.m_itemVec[i];
            this.m_item_count_map.set(itemInfo.itemID, this.m_item_count_map.has(itemInfo.itemID) ? this.m_item_count_map.get(itemInfo.itemID) + itemInfo.itemCount : itemInfo.itemCount);
        }
        let thistemp = this;
        let spine: sp.Skeleton = this.getBoxSpine();
        if (spine)
        {
            spine.setAnimation(0, "action", false);
            // 箱子发光时播放的音效
            this.scheduleOnce((dt)=>{
                PlaySoundToKey(121);
            }, 1.6);
            spine.setCompleteListener(()=>
            {
                spine.setCompleteListener(null)
            });

            this.scheduleOnce((dt)=>{
                thistemp.showOneByOne(false);
            }, 1.7);
        }
        
    }

    showOneByOne (bLoop: boolean = true)
    {
        if (this.m_itemVec.length == 0)
        {            
            this.hide();
            return;
        }

        this.m_flag = false;

        let firstItem: ItemSimpleInfo = this.m_itemVec.shift();
     
        this.setView(firstItem.itemID, firstItem.itemCount);
        let need_itemTD = this.getNeedItemTD(firstItem.itemID);
        this.m_cardNode.stopAllActions();
        this.m_info_node.active = false;
        this.stopUpdate();
        this.m_info_node_jizuo_bar.node.stopAllActions();
        this.m_info_node_jizuo_bar.node.setScale(cc.v2(1, 1));
        this.m_info_node_card_bar.node.stopAllActions();
        this.m_info_node_card_bar.node.setScale(cc.v2(1, 1));

        let spine: sp.Skeleton = this.getBoxSpine();
        if (spine)
        {
            if (bLoop)
            {
                spine.setAnimation(0, "loop", false);
                PlaySoundToKey(119);
            }
            if (this.m_cardNode)
            {
                let aniNode = this.m_cardNode.getComponent(cc.Animation);
                if (aniNode)          
                {
                    aniNode.on("finished", this.onFinish, this);
                    aniNode.play();
                    this.m_timeout_id = setTimeout(() => {
                        cc.log("==============time out=============")
                        let show_node = this.m_cardNode.getComponentInChildren(showCard);
                        if (show_node)
                        {
                            show_node.playCardAni();
                        }
                        this.m_info_node.active = true;
                        if (need_itemTD)
                        {
                            this.m_t_name.setText(need_itemTD.name);
                            this.m_t_card_type.setText(getItemCardTypeDes(firstItem.itemID));
                            if (need_itemTD.cardType == 0)
                            {
                                this.m_t_card_type.setColor(ItemQualityColorManager.getItemColorByQuality(need_itemTD.quality));
                            }
                            else if (need_itemTD.cardType == 1)
                            {
                                this.m_t_card_type.setColor(cc.Color.WHITE);
                            }
                            this.m_info_node_card.active = need_itemTD.type == ItemType.ItemType_Hero;
                            this.m_info_node_jizuo.active = need_itemTD.type == ItemType.ItemType_TowerBase;
                            this.m_info_node_qianbi.active = firstItem.itemID == 1;
                            if (firstItem.itemID == 1)
                            {
                                this.m_info_node_qianbi_num.setText(Role.self().getRoleValue(ROLE_ATTR_VALUES.ROLE_ATTR_GOLD) - this.m_item_count_map.get(firstItem.itemID));
                            }
                            else if (need_itemTD.type == ItemType.ItemType_Hero || need_itemTD.type == ItemType.ItemType_TowerBase)
                            {
                                this.m_cur_itemId = need_itemTD.id;
                                this.m_cur_item_count = Role.self().getItemsCountByStaticId(firstItem.itemID) - this.m_item_count_map.get(firstItem.itemID);
                                this.m_cur_item_count = Math.max(this.m_cur_item_count, 0);
                                this.m_cur_item_total = this.m_cur_item_count + firstItem.itemCount;
                                this.initCardOrJiZuoInfoNode();
                            }
                            this.m_item_count_map.set(firstItem.itemID, this.m_item_count_map.get(firstItem.itemID) - firstItem.itemCount);
                        }
                        let info_aniNode = this.m_info_node.getComponent(cc.Animation);
                        if (info_aniNode)
                        {
                            this.m_info_node.active = true;
                            info_aniNode.on("finished", () =>
                            {
                                if (need_itemTD)
                                {
                                    if (firstItem.itemID == 1)
                                    {
                                        let oldNum = Number(this.m_info_node_qianbi_num.string);
                                        let newNum = Role.self().getRoleValue(ROLE_ATTR_VALUES.ROLE_ATTR_GOLD) - this.m_item_count_map.get(firstItem.itemID);
                                        SetTxtWithAction(this.m_info_node_qianbi_num.node, newNum, oldNum, false);
                                    }
                                    else if (need_itemTD.type == ItemType.ItemType_Hero || need_itemTD.type == ItemType.ItemType_TowerBase)
                                    {
                                        this.schedule(this.updateCardOrJiZuo);
                                    }
                                }
                            }, this);
                            info_aniNode.play();
                        }
                    }, 1 * 1000);
                    // this.scheduleOnce((dt)=>
                    // {
                    // }, 1);
                }
            }
            else
            {
                this.showOneByOne();
            }

            this.m_flag = true;
        }
    }

    protected initCardOrJiZuoInfoNode(bFromUpdate: boolean = false)
    {
        let itemTD = ItemTableData.getById(this.m_cur_itemId);
        if (!itemTD)
        {
            return;
        }
        // 只判断碎片数量，不管钱币
        if (this.m_info_node_card.active)
        {
            let uuid: Long = Role.self().getRoleItems().getUUIdByStaticId(this.m_cur_itemId);
            let hero = Role.self().getHeroByUUID(uuid);
            if (hero)
            {
                this.m_info_node_card_jie.active = true;
                let curLevel = hero.getLevel();
                let nextLevel = curLevel + 1;
                let need_piece = 0; //当前升级需要的碎片数量
                let have_piece = this.m_cur_item_count;
                let pieceId = itemTD.pieceItem2;
                let canUpLv = false;
                let isMaxLv = false;
                let nextUpLvDT = getTowerUpLeveDT(hero.getStaticId(), nextLevel);
                if (nextUpLvDT)
                {
                    pieceId = nextUpLvDT.pieceId_uplv;
                    need_piece = nextUpLvDT.pieceNum_uplv;
                    canUpLv = have_piece >= need_piece;
                }
                else
                {
                    isMaxLv = true;
                }

                let curProgress = 0;
                if (need_piece > 0)
                {
                    curProgress = have_piece / need_piece;
                }
                if (isMaxLv)
                {
                    curProgress = 1;
                }
                this.m_info_node_card_bar_full.setVisible(curProgress >= 1); //进度条满的时候显示绿色的
                this.m_info_node_card_jie_num.setText(curLevel);
                this.m_info_node_card_bar.progress = curProgress;
                this.m_info_node_card_bar_num_cur.setText(this.m_cur_item_count.toFixed());
                this.m_info_node_card_bar_num_total.setText(need_piece);

                this.m_info_node_card_bar_ani.active = canUpLv;
                this.m_info_node_card_arrow.active = canUpLv;
                if (canUpLv)
                {
                    if (!this.m_is_play_can_uplv)
                    {
                        this.m_is_play_can_uplv = true;
                        let aniNode = this.m_info_node_card_bar_ani.getComponent(cc.Animation);
                        if (aniNode)
                        {
                            aniNode.play();
                        }
                        let aniNode_arrow = this.m_info_node_card_arrow.getComponent(cc.Animation);
                        if (aniNode_arrow)
                        {
                            aniNode_arrow.play();
                        }
                    }
                    if (bFromUpdate && !this.m_is_play_bar_ani)
                    {
                        this.m_is_play_bar_ani = true;
                        let scale_1 = cc.scaleTo(0.1, 1.1, 1);
                        let scale_2 = cc.scaleTo(0.1, 1, 1);
                        this.m_info_node_card_bar.node.runAction(cc.repeatForever(cc.sequence(scale_1, scale_2)));
                    }
                }
                else
                {
                    this.m_is_play_can_uplv = false;
                    this.m_is_play_bar_ani = false;
                    this.m_info_node_card_bar.node.stopAllActions();
                    this.m_info_node_card_bar.node.setScale(cc.v2(1, 1));
                }
            }
            else
            {
                this.m_info_node_card_jie.active = false;
                this.m_info_node_card_arrow.active = false;
                this.m_info_node_card_bar_ani.active = false;
                this.m_is_play_can_uplv = false;
                this.m_is_play_bar_ani = false;
                this.m_info_node_card_bar.node.stopAllActions();
                this.m_info_node_card_bar.node.setScale(cc.v2(1, 1));
                let pieceId = itemTD.pieceItem2;
                let pieceTD: ItemTableData = ItemTableData.getById(pieceId);
                let need_piece = pieceTD.pieceCount;
                let have_piece = this.m_cur_item_count;
                let curProgress = 0;
                if (need_piece > 0)
                {
                    curProgress = have_piece / need_piece;
                }
                this.m_info_node_card_bar.progress = curProgress;
                this.m_info_node_card_bar_full.setVisible(curProgress >= 1); //进度条满的时候显示绿色的
                this.m_info_node_card_bar_num_cur.setText(this.m_cur_item_count.toFixed());
                this.m_info_node_card_bar_num_total.setText(need_piece);
            }
        }
        else if (this.m_info_node_jizuo.active)
        {
            this.m_info_node_jizuo_lv.setText(Role.self().towerBaseLevel);
            let canUpLv = false;
            let nextTD = TowerBaseTableData.getById(Role.self().towerBaseLevel + 1);
            let have_piece = this.m_cur_item_count;
            let need_piece = 0;
            let isMax = false;
            if (nextTD)
            {
                need_piece = nextTD.piece_count;
                canUpLv = have_piece >= need_piece;
            }
            else
            {
                isMax = true;
            }
            this.m_info_node_jizuo_bar_ani.active = canUpLv;
            this.m_info_node_jizuo_arrow.active = canUpLv;
            let curProgress = 0;
            if (need_piece > 0)
            {
                curProgress = have_piece / need_piece;
            }
            if (isMax)
            {
                curProgress = 1;
            }
            this.m_info_node_jizuo_bar_full.setVisible(curProgress >= 1); //进度条满的时候显示绿色的
            this.m_info_node_jizuo_bar.progress = curProgress;
            this.m_info_node_jizuo_bar_num_cur.setText(this.m_cur_item_count.toFixed());
            this.m_info_node_jizuo_bar_num_total.setText(need_piece);
            if (canUpLv)
            {
                if (!this.m_is_play_can_uplv)
                {
                    this.m_is_play_can_uplv = true;
                    let aniNode = this.m_info_node_jizuo_bar_ani.getComponent(cc.Animation);
                    if (aniNode)
                    {
                        aniNode.play();
                    }
                    let aniNode_arrow = this.m_info_node_jizuo_arrow.getComponent(cc.Animation);
                    if (aniNode_arrow)
                    {
                        aniNode_arrow.play();
                    }
                }
                if (bFromUpdate && !this.m_is_play_bar_ani)
                {
                    this.m_is_play_bar_ani = true;
                    let scale_1 = cc.scaleTo(0.1, 1.1, 1);
                    let scale_2 = cc.scaleTo(0.1, 1, 1);
                    this.m_info_node_jizuo_bar.node.runAction(cc.repeatForever(cc.sequence(scale_1, scale_2)));
                }
            }
            else
            {
                this.m_is_play_can_uplv = false;
                this.m_is_play_bar_ani = false;
                this.m_info_node_jizuo_bar.node.stopAllActions();
                this.m_info_node_jizuo_bar.node.setScale(cc.v2(1, 1));
            }
        }
    }
    
    protected updateCardOrJiZuo(dt)
    {
        if (this.m_cur_item_count < this.m_cur_item_total)
        {
            this.m_cur_item_count += 0.3;
            this.initCardOrJiZuoInfoNode(true);
        }
        else
        {
            this.stopUpdate();
        }
    }

    protected stopUpdate()
    {
        this.unschedule(this.updateCardOrJiZuo);
        this.m_is_play_can_uplv = false;
        this.m_is_play_bar_ani = false;
    }

    protected getNeedItemTD(itemId: number): ItemTableData
    {
        let itemTD = ItemTableData.getById(itemId);
        let need_itemTD = itemTD;
        if (itemTD.type == ItemType.ItemType_SuiPian)
        {
            need_itemTD = ItemTableData.getById(itemTD.pieceItem);
        }
        return need_itemTD;
    }

    protected getBoxSpine(): sp.Skeleton
    {
        let spine: sp.Skeleton = null;
        this.m_spinendoe_normal.active = this.m_box_type == BOX_ANI_TYPE.BOX_ANI_TYPE_NORMAL;
        this.m_spinendoe_hightclass.active = this.m_box_type == BOX_ANI_TYPE.BOX_ANI_TYPE_HIGHTCLASS;
        if (this.m_box_type == BOX_ANI_TYPE.BOX_ANI_TYPE_NORMAL)
        {
            spine = this.m_spinendoe_normal.getComponent(sp.Skeleton);
        }
        else if (this.m_box_type == BOX_ANI_TYPE.BOX_ANI_TYPE_HIGHTCLASS)
        {
            spine = this.m_spinendoe_hightclass.getComponent(sp.Skeleton);
        }
        return spine;
    }

    onFinish (evt:cc.Event.EventCustom)
    {
        clearTimeout(this.m_timeout_id);
        this.stopUpdate();
        this.showOneByOne();
    }
    
    */
}
