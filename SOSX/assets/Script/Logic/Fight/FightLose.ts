import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import {
    checkFunctionIsOpen, checkCanWatchAdvert, isValidObj,
    kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert
} from "../Common/CommonInterface";
import ManagerShareType from "../Common/ManagerShareType";
import Role from "../Common/Role";
import RankScoreRewardClass from "../Common/SeasonRankCommonFunc";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import { showPopLayer, getCurScoreStage, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FightLose extends PopLayer {

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Label)
    curCup: cc.Label = null;

    @property(cc.Label)
    subCup: cc.Label = null;

    @property(cc.Node)
    revert_node: cc.Node = null;

    @property(cc.Button)
    btn_watch_ad: cc.Button = null;

    @property(cc.Label)
    lbl_watch_ad: cc.Label = null;

    @property(cc.Layout)
    rewardLayout: cc.Layout = null;

    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;

    private msg_data: proto.IMsg_FightEnd;
    private confirmCallback: Function;

    onLoad() {
        this.btn_confirm.node.on("click", this.onClickConfirm, this);
        //监听看广告不掉分消息
        Net.listenProtocol(proto.Ptl.WatchAdResumeSeasonScoreRsp, function (buffer, ptl) {
            let msg = proto.Msg_WatchAdResumeSeasonScoreRsp.decode(buffer)
            cc.log("WatchAdResumeSeasonScoreRsp (看广告不掉分) msg: " + JSON.stringify(msg));
            if (msg != null && proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode.Succeed === msg.result) {
                this.btn_watch_ad.interactable = false;
                this.setLeftWatchAdTime(this.msg_data.watchAdCount + kOneNumber);
                this.subCup.string = ""
                this.subCup.node.parent.getChildByName("txt").active = false
                // this.playResumeScoreEffect();
                return;
            }
            proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode.UseUpWatchAd === msg.result && ShowTips("AdvertUseUp");
        }, this);
    }

    onClickConfirm() {
        if (this.confirmCallback) {
            this.confirmCallback(false);
        }
    }

    public async setFightEndData(data: proto.IMsg_FightEnd, callback: Function) {
        this.msg_data = data;
        this.confirmCallback = callback;
        this.node.getComponent(cc.Animation).play();
        this.initData();
    }

    private initData() {
        Role.Instance.FightType = this.msg_data.fightType;
        Role.Instance.AddCup = this.msg_data.changeCup;
        Role.Instance.RoleCup = this.msg_data.roleCup;
        this.curCup.string = String(this.msg_data.roleCup + this.msg_data.changeCup);
        this.subCup.string = String(this.msg_data.changeCup);
        this.revert_node.active = Role.Instance.IsGuideFinished() &&
            !this.msg_data.isWin && this.msg_data.changeCup > kZeroNumber &&
            checkCanWatchAdvert(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore,
                this.msg_data.watchAdCount);

        this.setLeftWatchAdTime(this.msg_data.watchAdCount)

        this.rewardLayout.node.removeAllChildren()
        for (let reward of this.msg_data.rewards) {
            this.setReward(reward);
        }
    }

    /*  */
    private setReward(data: proto.IRewardSimpleInfo) {
        let simpleitem: SimpleItem = cc.instantiate(this.rewardItem).getComponent(SimpleItem)
        if (simpleitem) {
            this.rewardLayout.node.addChild(simpleitem.node);
            simpleitem.setView(data)
            simpleitem.setNameVisible(false)
            let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(data.rewardId);

            if (tab.Data.CardTableByID.getValue(data.rewardId)) {
                simpleitem.setNewFlagVisible(cardInfo == undefined || cardInfo.count <= 0)
            }
        }
    }

    /* 设置看广告次数 */
    private setLeftWatchAdTime(watchCount: number) {
        let advertTabData = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore);
        if (isValidObj(advertTabData)) {
            let totalCnt = advertTabData.EveryDayAdvertCount;
            this.lbl_watch_ad.string = `${totalCnt - watchCount}/${totalCnt}`;
        }

    }

    /* 点击看广告 */
    private onClickWatchAd() {
        let self = this;
        WatchAdvert((error: Error) => {
            if (error === undefined) {
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore, kZeroNumber);
            }
        },
            (bFinish: boolean) => {
                if (bFinish) {
                    //self._bWatchAdvertFinish = true;
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore, kOneNumber);
                    //let param = new proto.Msg_WatchAdResumeSeasonScoreReq();
                    //Net.Send(proto.Ptl.WatchAdResumeSeasonScoreReq, param);
                    self.sendResumeScoreReq();
                }
            }, tab.AdvertPosType.AdvertPosType_ResumeSeasonScore);
    }

    /* 发送恢复积分消息 */
    private sendResumeScoreReq() {
        let param = new proto.Msg_WatchAdResumeSeasonScoreReq();
        Net.Send(proto.Ptl.WatchAdResumeSeasonScoreReq, param);
    }
}
