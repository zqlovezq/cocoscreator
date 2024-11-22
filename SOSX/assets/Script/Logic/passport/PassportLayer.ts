/*
 * @Descripttion: 战场地图红点管理类
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import DrawBox, { DrawBoxData, DrawViewType } from "../Activity/Draw/DrawBox";
import ManagerNewBattleMap from "../BattleMapStore/ManagerNewBattleMap";
import BossBoxBuyEvilPassNode from "../BossBox/BossBoxBuyEvilPassNode";
import BossBoxGoldBag from "../BossBox/BossBoxGoldBag";
import BossboxLvInfoCell from "../BossBox/BossboxLvInfoCell";
import BossboxOpenNow from "../BossBox/BossboxOpenNow";
import BossboxUnlockSuccess from "../BossBox/BossboxUnlockSuccess";
import MainsceneBossBox from "../BossBox/MainsceneBossBox";
import boxtips from "../Common/boxtips";
import CommonHelp from "../Common/CommonHelp";
import { checkRechargeInterfaceIsOpen, checkRewardIsEmotionOrBattleMap, k255, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import UnlockAccelerateEffect from "../Common/UnlockAccelerateEffect";
import ManagerNewEmotionRedDot from "../EmotionStore/ManagerNewEmotionRedDot";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import ManagerDoubleEnergy from "../Main/ManagerDoubleEnergy";
import SeasonFunc from "../Season/SeasonFunc";
import Func from "../Utils/Func";
import { checkInt, getServerUtcTime, popRewardLayer_Ex, setTimeTXT, showPopLayer, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import PassportBuy from "./PassportBuy";
import PassportFunc from "./PassportFunc";
import PassportList from "./PassportList";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PassportLayer extends PopLayer {
    @property(cc.Label)
    seasonEndTimeLeft: cc.Label = null

    @property(cc.Label)
    lv_txt: cc.Label = null

    @property(cc.ProgressBar)
    expBar: cc.ProgressBar = null

    @property(cc.Label)
    exp_txt: cc.Label = null

    @property(cc.Node)
    unlock_btn: cc.Node = null

    @property(cc.Node)
    nocard_node: cc.Node = null

    @property(cc.Node)
    selected_node: cc.Node = null

    @property(cc.Node)
    headicon_img: cc.Node = null

    @property(cc.Label)
    cardname_txt: cc.Label = null

    @property(InfiniteList)
    m_sv_list: InfiniteList = null

    @property(cc.Prefab)
    m_cell_prefab: cc.Prefab = null

    @property(PassportList)
    preNextItem: PassportList = null

    @property(cc.Prefab)
    draw_box: cc.Prefab = null;

    @property(cc.Node)
    draw_box_node: cc.Node = null

    m_cell_height: number = 0

    seasoncfgEndTime: number = 0;
    gift_dis24lefttime: number;

    private _bJumpPos: boolean = false;
    private _jump_pos: number;

    onClose() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateMainsceneBossBox, null)
        this.hide()
    }

    onLoad() {
        PassportFunc.sortOutData();

        this.m_sv_list.Init({
            getCellNumber: this.GetCellNumber.bind(this),
            getCellSize: this.GetCellSize.bind(this),
            getCellIdentifer: this.GetCellIdentifer.bind(this),
            getCellView: this.GetCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });

        this.m_sv_list.node.on("scroll-ended", this.onScrollMove, this);
        this.m_sv_list.node.on("scrolling", this.onScrollMove, this);
        this.preNextItem.setPreview(true)

        //赛季第一次打开通行证，自动打开购买界面
        if (checkInt( Func.getStorage(PassportFunc.passportFirstOpenBuyKey())) == 0){
            Func.setStorage(PassportFunc.passportFirstOpenBuyKey(),1)
            this.onClickBuy()
        }
        
        let cardId = Func.getStorage(PassportFunc.passportSelectBoxStorageKey())
        this.onSelectCard({ cardId: checkInt(cardId) })

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param) => {
            let param3 = new proto.Msg_BossBoxInfoReq()
            Net.Send(proto.Ptl.BossBoxInfoReq, param3)
        }, this);

        /* 首领宝箱信息 */
        Net.listenProtocol(proto.Ptl.BossBoxInfoRsp, function (buffer, ptl) {
            let msg = proto.Msg_BossBoxInfoRsp.decode(buffer)
            if (msg != null) {
                this.initTopInfo()
                this.initView()
            }
        }, this)

        //解锁等级
        Net.listenProtocol(proto.Ptl.BossBoxUnlockLvRsp, function (buffer, ptl) {
            let msg = proto.Msg_BossBoxUnlockLvRsp.decode(buffer)
            if (msg.result == 0) {
                this.initTopInfo()
                this.m_sv_list.Refresh();
                this.m_sv_list.ScrollToCell(Role.Instance.bossBoxData.level);
                // this.autoScrollToRightPos()
            }
        }, this)

        //领取奖励
        Net.listenProtocol(proto.Ptl.BossBoxGetLvRewardRsp, function (buffer, ptl) {
            let msg = proto.Msg_BossBoxGetLvRewardRsp.decode(buffer)
            if (msg != null) {
                if (msg.result == 0) {
                    this.m_sv_list.Reload(true);
                    this.autoScrollToRightPos()
                }
            }
        }, this)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowOpenDrawBox, (param) => {
            this.onShowSelectBox(param)
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_DrawBoxOKSelect, (param) => {
            this.onSelectCard(param)
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewSeasonJustBeginning, (param) => {
            //切换进入新赛季
            this.hide()
        }, this);

    }

    initTopInfo() {
        this.lv_txt.string = `${Math.min(Role.Instance.bossBoxData.level+1,PassportFunc.getMaxLv())}`
        this.expBar.progress = Role.Instance.bossBoxData.exp / tab.Data.GetKeyValue_ConfigTable().BossBoxEveryLvNeedSoul
        this.exp_txt.string = `${Role.Instance.bossBoxData.exp}/${tab.Data.GetKeyValue_ConfigTable().BossBoxEveryLvNeedSoul}`
        this.expBar.node.active = !(Role.Instance.bossBoxData.level == PassportFunc.getMaxLv())

        this.unlock_btn.active = !Role.Instance.isDemonPass //购买状态

        this.unschedule(this.seasonTimeCountDown)
        this.schedule(this.seasonTimeCountDown, 1)
        this.seasonTimeCountDown()
    }

    /*  */
    seasonTimeCountDown() {
        if (!Role.Instance.isSeason() || (Role.Instance.isSeason() && SeasonFunc.getSurplusTime() < -1)) {
            this.seasonEndTimeLeft.string = "赛季已结束"
            this.unschedule(this.seasonTimeCountDown)
            return
        }
        setTimeTXT(this.seasonEndTimeLeft, SeasonFunc.getSurplusTime())
    }

    /* 首领宝箱 */
    start() {
        let param3 = new proto.Msg_BossBoxInfoReq()
        Net.Send(proto.Ptl.BossBoxInfoReq, param3);
    }

    /*  */
    protected autoScrollToRightPos() {
        let canGetLv = PassportFunc.getFirstCanGetRewardLv()
        if (canGetLv > -1) {
            this.m_sv_list.ScrollToCell(canGetLv);
        } else {
            this.m_sv_list.ScrollToCell(Role.Instance.bossBoxData.level);
        }
        this.onScrollMove()
    }

    public initView() {
        this.preNextItem.conf = null
        this.m_sv_list.Reload(true);
        this.scheduleOnce(() => {
            this.autoScrollToRightPos()
        }, 0.2)
    }

    onScrollMove() {
        if (PassportFunc.bossBoxCfgData.length) {
            let range = this.m_sv_list._getActiveCellIndexRange()
            for (let i = range.y; i < PassportFunc.bossBoxCfgData.length; i++) {
                if (PassportFunc.bossBoxCfgData[i] && PassportFunc.bossBoxCfgData[i].PreviewFlag > 0) {
                    this.preNextItem.changeData(PassportFunc.bossBoxCfgData[i])
                    break
                }
            }
        }

    }

    GetCellNumber(): number {
        let add: number = 0//((Role.Instance.isDemonPass == false) ? 2 : 1)
        return PassportFunc.bossBoxCfgData.length + add
    }

    GetCellSize(idx: number): number {
        if (this.m_cell_height == 0) {
            this.m_cell_height = cc.instantiate(this.m_cell_prefab).height;
        }
        return this.m_cell_height;
    }

    GetCellIdentifer(idx: number): string {
        return "PassportList";
    }

    GetCellView(idx: number, identifier: string): InfiniteCell {
        switch (identifier) {
            case "PassportList":
                return cc.instantiate(this.m_cell_prefab).getComponent(PassportList);

        }
        return null;
    }

    GetCellData(idx: number) {
        return PassportFunc.bossBoxCfgData[idx];
    }

    onClickBuy() {
        showPopLayerV2("prefab/Passport/PassportBuy", PassportBuy, false).then(layer => {
            layer.initData()
        });
    }

    /* 点击选择宝箱 */
    onClickSelectBox() {
        for (let index = 0; index < PassportFunc.bossBoxCfgData.length; index++) {
            const v = PassportFunc.bossBoxCfgData[index];
            if (Func.isCheckOptionalBox(v.PassItemType,v.PassItemId) && !Role.Instance.bossBoxData.gotBossBoxVipRewardLevels.includes(v.BossBoxLv)) {
                this.onShowSelectBox({ boxId: v.PassItemId })
                break
            }
        }
    }

    onShowSelectBox(data: { boxId: number }) {
        /* 可以开启 */
        let box_show = cc.instantiate(this.draw_box);
        this.draw_box_node.addChild(box_show);
        let ts = box_show.getComponent(DrawBox);
        let dd = new DrawBoxData()
        dd.viewType = DrawViewType.passport
        dd.boxId = data.boxId
        ts.initData(dd);
    }

    onSelectCard(data: { cardId: number, count?: number }) {
        console.log("选择宝箱", data)
        this.nocard_node.active = data.cardId == 0
        this.selected_node.active = data.cardId != 0
        if (data.cardId != 0) {
            let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(data.cardId);
            this.headicon_img.getComponent(cc.Sprite).setTexture(itemTab.Icon)
            this.cardname_txt.string = itemTab.Name
        }
        Func.setStorage(PassportFunc.passportSelectBoxStorageKey(), data.cardId)
        this.m_sv_list.Refresh();
        if (this.preNextItem.conf){
            this.preNextItem.conf = null
            this.onScrollMove()
        }
       
    }

    onHelpClick() {
        CommonHelp.show("BossBoxHelp")
    }
}
