import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { AssociationData } from './AssociationData';
import { CommonItem } from '../item/CommonItem';
import { tab } from '../../../Table/table_gen';
import { AssociationControl } from './AssociationControl';
import { ItemInfo } from '../item/ItemInfo';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { CommonTipsPop } from '../common/CommonTipsPop';
import { ShowItemNotEnoughTips } from '../../mgr/UIMgr';
import { RoleData } from '../role/RoleData';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationDonatePop')
export class AssociationDonatePop extends ViewPop {
    @property(CommonItem)
    common_item: CommonItem = null;
    @property(Node)
    node_free: Node = null;
    @property(Node)
    node_cost = null;
    @property(Label)
    lbl_remain_time: Label = null;
    @property(Label)
    lbl_cost_diamon: Label = null;
    @property(Label)
    lbl_num: Label = null;
    @property(Node)
    node_sign: Node = null;
    private _maxRemainSignCount: number = 0;
    private _itemCount: number = 0;
    private _curCostDiamond:number = 0;
    onShow(): void {
        this.refreshSignView();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        /* 监听公会签到 */
        EventMgr.onMsg(proto.Ptl.SignGuildRsp, this.on_s2c_SignGuildRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    /* 签到信息 */
    refreshSignView() {
        // 当前签到次数
        const guildInfo = AssociationData.ins.getAssocitionInfo();
        const signCount = guildInfo.signTimes;
        // 根据签到次数显示item
        const maxSignCount = tab.getData().GuildSignInTable.length
        const guildSignTab = tab.getData().GuildSignInTableById.getValue(signCount + 1 > maxSignCount ? maxSignCount : signCount + 1);
        this._maxRemainSignCount = maxSignCount - signCount;
        this.lbl_remain_time.string = this._maxRemainSignCount + "/" + maxSignCount;
        if (this._maxRemainSignCount > 0) {
            this._itemCount = 1;
        } else {
            this.node_sign.getComponent(Button).interactable = false;
            this.node_sign.getComponent(Sprite).grayscale = true;
        }
        const award = new ItemInfo();
        award.itemId = guildSignTab.RewardItemIds[0];
        award.num = guildSignTab.RewardCount[0];
        this.common_item.initData(award);
        this.updateLbl();
    }
    onClickSign() {
        let CostCount = this._curCostDiamond;
        if(CostCount===0){
            AssociationControl.ins.reqSignGuild(this._itemCount);
            return
        }
        const tipsStr = LangMgr.getCombineString("ui_association_3", [ CostCount,this._itemCount]);
        CommonTipsPop.create(tipsStr, ((val) => {
            if (val) {
                if (RoleData.ins.diamond < CostCount) {
                    ShowItemNotEnoughTips(1);
                } else {
                    AssociationControl.ins.reqSignGuild(this._itemCount);
                }
            }
        }))
    }
    private clickAdd() {
        this._itemCount++;
        if (this._itemCount > this._maxRemainSignCount) {
            this._itemCount = this._maxRemainSignCount;
        }
        this.updateLbl();
    }
    // sub碎片
    private clickSub() {
        this._itemCount--;
        if (this._maxRemainSignCount >= 1 && this._itemCount < 1) {
            this._itemCount = 1;
        }
        if (this._itemCount < 0) {
            this._itemCount = 0;
        }
        this.updateLbl();
    }
    // max碎片
    private clickMax() {
        this._itemCount = this._maxRemainSignCount;
        this.updateLbl();
    }
    updateLbl() {
        this.lbl_num.string = String(this._itemCount);
        this.node_free.active = false;
        this.node_cost.active = false;
        const guildInfo = AssociationData.ins.getAssocitionInfo();
        const signCount = guildInfo.signTimes;
        let totalCount = 0
        for (let i = signCount + 1; i <= signCount + this._itemCount; i++) {
            const guildSignTab = tab.getData().GuildSignInTableById.getValue(i);
            if(guildSignTab){
                totalCount += guildSignTab.SignInCostDiamond;
            }
        }
        if(totalCount===0){
            this.node_free.active = true;
        }else{
            this.node_cost.active = true;
            this.lbl_cost_diamon.string = String(totalCount);
        }
        this._curCostDiamond = totalCount;
    }
    on_s2c_SignGuildRsp(msg: proto.Msg_SignGuildRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.refreshSignView();
    }
}


