import { _decorator, Component, EventTouch, instantiate, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { DEVELOPTYPE, FincaFightTeamState } from '../../../Common/script/EnumTypeMgr';
import { FincaFightStageViewHero } from './FincaFightStageViewHero';
import { FincaFightStageViewBook } from './FincaFightStageViewBook';
import { FincaFightData } from './FincaFightData';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { ViewName } from '../../define/ViewDefine';
import { FincaFightControl } from './FincaFightControl';
import { CommonTipsPop } from '../common/CommonTipsPop';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { deepClone } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('FincaFightStageView')
export class FincaFightStageView extends ViewPop {
    @property(FincaFightStageViewHero)
    node_hero: FincaFightStageViewHero = null;
    @property(FincaFightStageViewBook)
    node_book: FincaFightStageViewBook = null;

    private refreshMainView: Boolean = false;
    private view_type: DEVELOPTYPE = DEVELOPTYPE.NONE;
    private serverHeroIds: number[] = [];
    private serverBookIds: number[] = [];
    onShow(): void {
        this.view_type = DEVELOPTYPE.HERO;
        this.serverHeroIds = deepClone(FincaFightData.ins.heroIds);
        this.serverBookIds = deepClone(FincaFightData.ins.bookIds);
        this.refreshMainView = !FincaFightData.ins.heroIds[0];
        RedMgr.refreshEvent(RedDotType.PVP_Fight_Team);
        this.setView();
    }
    onClose(): void {
        var self = this;
        if (!FincaFightData.ins.heroIds[0]) {
            ShowTips(LangMgr.getLab("Tips_finca_1"));
        } else {
            this.checkBookChange();
            if (self.refreshMainView) {
                FincaFightControl.ins.reqSetFincaBattleHeroIds(FincaFightData.ins.heroIds);
                super.onClose();
                UIMgr.ins.show({ viewName: ViewName.FincaFightView })
            } else {
                // 判断阵容是否发生变动
                if (self.checkTeamChange()) {
                    // 添加一个弹窗
                    CommonTipsPop.create(self.checkTeamChange(), ((val) => {
                        if (val) {
                            if (FincaFightData.ins.heroIds[0]) {
                                FincaFightControl.ins.reqSetFincaBattleHeroIds(FincaFightData.ins.heroIds);
                                super.onClose();
                            } else {
                                // 至少上个战士
                                ShowTips(LangMgr.getLab("Tips_finca_1"))
                            }
                        } else {
                            FincaFightData.ins.heroIds = self.serverHeroIds;
                            super.onClose();
                        }
                    }))
                } else {
                    super.onClose();
                }
            }
        }
    }
    checkBookChange(){
        let change = false;
        for (let i = 0; i < this.serverBookIds.length; i++) {
            if (this.serverBookIds[i] !== FincaFightData.ins.bookIds[i]) {
                change = true;
            }
        }
        if(change){
            FincaFightData.ins.bookIds = deepClone(this.serverBookIds);
        }
    }
    checkTeamChange() {
        if (FincaFightData.ins.getHeroEmptyIndex()) {
            // 还有未上阵英雄
            return LangMgr.getLab("Tips_finca_6")
        } else {
            // 阵容发生变化
            let change = false;
            for (let i = 0; i < this.serverHeroIds.length; i++) {
                if (this.serverHeroIds[i] !== FincaFightData.ins.heroIds[i]) {
                    change = true;
                }
            }
            if (change) {
                return LangMgr.getLab("Tips_finca_5")
            } else {
                return ""
            }
        }
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.SetFincaBattleHeroIdsRsp, this.on_s2c_SetFincaBattleHeroIdsRsp, this);
        EventMgr.onMsg(proto.Ptl.SetFincaBattleBookIdsRsp, this.on_s2c_SetFincaBattleBookIdsRsp, this);
    }
    protected onDestroy(): void {
        super.onDestroy()
        HeroDataControl.ins.refreshBagData(0);
    }
    unRegister(): void {
        super.unRegister();
    }
    switchView(event: EventTouch, view_type: string) {
        if (this.view_type === Number(view_type)) {
            return;
        }
        this.view_type = Number(view_type);
        this.setView();
    }
    setView() {
        this.node_hero.node.active = this.view_type === DEVELOPTYPE.HERO;
        this.node_book.node.active = this.view_type === DEVELOPTYPE.BOOK;
        switch (this.view_type) {
            case DEVELOPTYPE.HERO:
                this.node_hero.initData();
                break;
            case DEVELOPTYPE.BOOK:
                this.node_book.initData();
                break;
            default:
                break;
        }
    }
    on_s2c_SetFincaBattleHeroIdsRsp(msg: proto.Msg_SetFincaBattleHeroIdsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        ShowTips(LangMgr.getLab("ui_fincafight_19"))
        this.serverHeroIds = deepClone(FincaFightData.ins.heroIds);
    }
    on_s2c_SetFincaBattleBookIdsRsp(msg: proto.Msg_SetFincaBattleBookIdsRsp){
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        ShowTips(LangMgr.getLab("ui_fincafight_19"))
        this.serverBookIds = deepClone(FincaFightData.ins.bookIds);
    }
}


