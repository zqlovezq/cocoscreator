import { _decorator, Component, EventTouch, Label, Node, RichText, sp } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { LangMgr } from '../../mgr/LangMgr';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
import { EventMgr } from '../../mgr/EventMgr';
const { ccclass, property } = _decorator;

@ccclass('RecruitGuaranteePop')
export class RecruitGuaranteePop extends ViewPop {
    @property(Label)
    lbl_cur_count: Label = null;
    @property(RichText)
    rich_txt_recruit: RichText = null;
    @property(sp.Skeleton)
    spine_draw: sp.Skeleton = null;
    private gachaData: tab.GachaTable = null;
    onShow(): void {
        const self = this;
        // 当前的gacha数据为
        this.gachaData = tab.getData().GachaTableById.getValue(100);
        // 需要消耗的数量
        const needCount = this.gachaData.ItemCount;
        // 当前道具数量
        const curCount = ItemData.ins.getCount(51);
        this.lbl_cur_count.string = curCount + "/" + needCount;
        // 解锁条件
        const openTab: tab.OpenFunctionTable = tab.getData().OpenFunctionTableByName.getValue(tab.OpenFunctionName.OpenFunctionName_GachaHeroSSR);
        this.rich_txt_recruit.string = LangMgr.getCombineString("ui_recruit_3", [needCount]);

        this.schedule(this.randomAction, 2)
    }
    on_s2c_GachaRsp(){
        const needCount = this.gachaData.ItemCount;
        // 当前道具数量
        const curCount = ItemData.ins.getCount(51);
        this.lbl_cur_count.string = curCount + "/" + needCount;
    }
    randomAction() {
        let spineAction = this.getRandomValue();
        this.spine_draw.setAnimation(0, spineAction, false);
    }
    getRandomValue(): string {
        const randomNumber = Math.random(); // 生成一个 [0, 1) 之间的随机数
        if (randomNumber < 0.5) {
            return "idle"; // 50%的概率返回1
        } else {
            return "xuanzhuan"; // 50%的概率返回2
        }
    }
    protected onDisable(): void {
        this.unschedule(this.randomAction);
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
    }
    unRegister(): void {
        super.unRegister()
    }
    /* 点击招募 */
    clickGacha() {
        // 是否解锁
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GachaHeroSSR);
        if (!isOpen) {
            OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_GachaHeroSSR);
            return;
        }
        // 先判断是否道具足够
        const needCount = this.gachaData.ItemCount;
        const curCount = ItemData.ins.getCount(51);
        if (curCount < needCount) {
            // 道具不足
            ShowItemNotEnoughTips(51);
            return
        }
        let msg = new proto.Msg_GachaReq();
        msg.id = this.gachaData.Id;
        Net.Send(proto.Ptl.GachaReq, msg);
    }
    /* 显示概率公示界面 */
    showGachaProbabilityView(event: EventTouch, type: string) {
        UIMgr.ins.show({
            viewName: ViewName.RecruitMustProbabilityPop, data: {
                type: RecruitType.SeniorGuarantee,
                recruit: 100
            }
        });
    }
}


