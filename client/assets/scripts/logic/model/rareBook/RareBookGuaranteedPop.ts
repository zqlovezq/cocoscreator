import { _decorator, Component, EventTouch, Label, Node, RichText, sp, SpringJoint2D, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { ShowItemNotEnoughTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { LangMgr } from '../../mgr/LangMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

@ccclass('RareBookGuaranteedPop')
export class RareBookGuaranteedPop extends ViewPop {
    @property(Label)
    lbl_cur_count: Label = null;
    @property(RichText)
    rich_txt_recruit: RichText = null;
    @property(Sprite)
    sp_icon: Sprite = null;
    @property(sp.Skeleton)
    spine_draw: sp.Skeleton = null;
    private gachaData: tab.GachaTable = null;
    onShow(): void {
        // 当前的gacha数据为
        const self = this;
        this.gachaData = tab.getData().GachaTableById.getValue(1000);
        // 需要消耗的数量
        const needCount = this.gachaData.ItemCount;
        // 当前道具数量
        const curCount = ItemData.ins.getCount(82);
        this.lbl_cur_count.string = curCount + "/" + needCount;
        // 解锁条件
        const openTab: tab.OpenFunctionTable = tab.getData().OpenFunctionTableByName.getValue(tab.OpenFunctionName.OpenFunctionName_GachaBookSR);
        this.rich_txt_recruit.string = LangMgr.getCombineString("ui_rarebook_4", [needCount]);
        const itemTab = tab.getData().ItemTableById.getValue(82);
        this.sp_icon.setTexture(itemTab.Icon);

        this.schedule(this.randomAction, 2)
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
    on_s2c_GachaRsp(msg: proto.Msg_GachaRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        const curCount = ItemData.ins.getCount(82);
        const needCount = this.gachaData.ItemCount;
        this.lbl_cur_count.string = curCount + "/" + needCount;
    }
    protected onDisable(): void {
        this.unschedule(this.randomAction)
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
        // 先判断是否道具足够
        // 判断功能是否开启
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GachaBookSR);
        if(!isOpen){
            OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_GachaBookSR);
            return;
        }
        const needCount = this.gachaData.ItemCount;
        const curCount = ItemData.ins.getCount(82);
        if (curCount < needCount) {
            // 道具不足
            ShowItemNotEnoughTips(82);
            return
        }
        // 是否解锁

        let msg = new proto.Msg_GachaReq();
        msg.id = this.gachaData.Id;
        Net.Send(proto.Ptl.GachaReq, msg);
    }
    /* 显示概率公示界面 */
    showGachaProbabilityView(event: EventTouch, type: string) {
        UIMgr.ins.show({viewName:ViewName.RareBookSrProbabilityPop})
        // UIMgr.ins.show({
        //     viewName: ViewName.RecruitProbabilityPop, data: {
        //         type: RecruitType.BookGuarantee
        //     }
        // });
    }
}


