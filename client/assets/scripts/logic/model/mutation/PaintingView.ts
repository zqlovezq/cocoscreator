/*
 * @Date: 2024-05-24 10:51:28
 * @Func:绘卷界面
 * @LastEditors: wzq
 * @LastEditTime: 2024-08-05 18:52:22
 * @Data Structure 只有SR跟SRR的会有绘卷功能
 */
import { _decorator, Component, EventTouch, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { PaintingHeroItem } from './PaintingHeroItem';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { HeroTeamControl } from '../hero/HeroTeamControl';
const { ccclass, property } = _decorator;

@ccclass('PaintingView')
export class PaintingView extends ViewPop {
    @property(Node)
    node_content: Node = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    private _heroClass: tab.HeroClass = null;
    register(): void {
        EventMgr.onMsg(proto.Ptl.UpgradeScrollPaintingStarRsp, this.on_s2c_UpgradeScrollPaintingStarRsp, this);
    }

    on_s2c_UpgradeScrollPaintingStarRsp(msg: proto.Msg_UpgradeScrollPaintingStarRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        HeroDataControl.ins.paintingActive.set(msg.heroItemId, msg.star);
        if(msg.star>5){
            const addAttr = HeroTeamControl.ins.getPaintingAttrGap(msg.heroItemId, msg.star);
            HeroTeamControl.ins.addPaintingAttr(msg.heroItemId, msg.star,addAttr);
        }else{
            HeroTeamControl.ins.addPaintingAttr(msg.heroItemId, msg.star);
        }
        RedMgr.refreshEvent(RedDotType.HeroPainting);
        let firstActive = msg.star === 5;
        if (firstActive) {
            UIMgr.ins.hideView(ViewName.PaintingLvupPop)
        }
        this.refreshListByVocation(this._heroClass, firstActive, msg.heroItemId)
    }
    onShow(): void {
        // 上来默认是猎手
        this._heroClass = tab.HeroClass.HeroClass_Assassin
        this.refreshListByVocation(this._heroClass)
    }
    refreshListByVocation(heroClass: tab.HeroClass, isActive?: boolean, heroId?: number) {
        let list = HeroDataControl.ins.getPaintingListByVocation(heroClass);
        for (let i = 0; i < list.length; i++) {
            const itemId = list[i];
            let item = this.node_content.children[i];
            if (!item) {
                item = instantiate(this.pfb_item);
                item.parent = this.node_content;
            }
            item.active = true;
            const itemTs: PaintingHeroItem = item.getComponent(PaintingHeroItem);
            if (isActive && heroId === itemId) {
                itemTs.initData(itemId, isActive);
            } else {
                itemTs.initData(itemId);
            }
        }
        if (this.node_content.children.length > list.length) {
            for (let j = list.length; j < this.node_content.children.length; j++) {
                let node = this.node_content.children[j];
                node.active = false;
            }
        }
    }
    // 点击切换页签
    clickChangeList(event: EventTouch, type: string) {
        this._heroClass = Number(type);
        this.refreshListByVocation(this._heroClass);
    }
    // 点击获取绘卷属性
    clickGetPaintingAttr() {
        UIMgr.ins.show({ viewName: ViewName.PaintingAttributePop })
    }
    onDestroy(): void {
        super.onDestroy();
    }
}


