/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import {isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber, checkFunctionIsOpen} from "../Common/CommonInterface";
import ManagerShareType from "../Common/ManagerShareType";
import Role from "../Common/Role";
import RankScoreRewardClass from "../Common/SeasonRankCommonFunc";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import { getCurScoreStage, LoadResAsync, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const { ccclass, property } = cc._decorator;

const Level = ["一","二","三","四","五","六","七","八"];

@ccclass
export default class BountyFightWin extends PopLayer {

    @property(cc.ProgressBar)
    progress_season_reward: cc.ProgressBar = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null; /* "确定"按钮 */

    @property(cc.Layout)
    rewardLayout: cc.Layout = null;

    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;

    @property(cc.Button)
    node_share_btn: cc.Button = null;

    @property(cc.Animation)
    arrow: cc.Animation = null;

    @property(cc.Sprite)
    rank_img: cc.Sprite = null;

    @property(cc.Label)
    cur_cup: cc.Label = null;

    @property(cc.Label)
    up_cup: cc.Label = null;

    @property(cc.Node)
    share_btn_model: cc.Node = null;
    @property(cc.Label)
    rank_level:cc.Label = null;

    private msg_data: proto.Msg_BountyRewardPush;
    private confirmCallback: Function;
    private bScoreUp: boolean = false;
    private startCup: number = 0;
    private curFightNum: number = 0;

    /*  */
    onLoad() {
        this.btn_confirm.node.on("click", this.onClickConfirm, this);
        // this.node_share_btn.initData(tab.SharedType.SharedType_PVP);
        //监听看广告不掉分消息
        Net.listenProtocol(proto.Ptl.WatchAdResumeSeasonScoreRsp, function (buffer, ptl) {
            let msg = proto.Msg_WatchAdResumeSeasonScoreRsp.decode(buffer)
            cc.log("WatchAdResumeSeasonScoreRsp (看广告不掉分) msg: " + JSON.stringify(msg));
            if (msg != null && proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode.Succeed === msg.result) {
                this.btn_watch_ad_resume_score.interactable = false;
                this.setLeftWatchAdTime(this.msg_data.watchAdCount + kOneNumber);
                this.playResumeScoreEffect();
                return;
            }
            proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode.UseUpWatchAd === msg.result && ShowTips("AdvertUseUp");
        }, this);
    }

    /*  */
    protected start(): void {

    }

    /*  */
    onClickConfirm() {
        this.setVisible(false);
        // showPopLayerV2("", , false)
        if (this.confirmCallback) {
            if(proto.FightType.PvP == this.msg_data.fightType){ /* zhibo+@20230509 for<只有"快速匹配"的胜利才趟框，防止刷奖励> */
                this.confirmCallback(true)
            } else {
                this.confirmCallback(false)
            }
        }
    }

    /*  */
    public async setFightEndData(data: proto.Msg_BountyRewardPush, callback: Function) {
        this.node.stopAllActions();
        this.bScoreUp = false;
        this.startCup = 0;
        this.curFightNum = 0;

        this.msg_data = data;
        this.confirmCallback = callback;
        let fightNum = RankScoreRewardClass.getInstance().getRankLevelToScore(Role.Instance.RoleCup);
        this.setProgressSeason(fightNum, Role.Instance.RoleCup);
        this.initData();
    }

    /*  */
    private setProgressSeason(grade: number, score: number) {
        let curRankScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(grade);
        let nextRankScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(grade + kOneNumber);
        if (kNegativeOneNumber != nextRankScore && kNegativeOneNumber != curRankScore) {
            //当前积分进度条
            let denominator = nextRankScore - curRankScore; /* 分母：达到下级竞技场所需积分 - 当前竞技场等级所需积分 */
            let numerator = score - curRankScore; /* 当前积分 - 当前竞技场等级所需积分 */
            numerator = (numerator < kZeroNumber) ? kZeroNumber : numerator;
            this.progress_season_reward.progress = numerator / denominator;
        }
    }

    /*  */
    private initData() {
        let c1 = Role.Instance.IsGuideFinished() /* 过了新手引导了 */
        let c2 = this.msg_data.isWin /* 本局胜利 */
        let c3 = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_BattleWinShare); /* 开启条件 */  //ManagerShareType.getInstance().getIsShared(tab.SharedType.SharedType_PVP);
        //let c4 = ManagerShareType.getInstance().getSharedCount(tab.SharedType.SharedType_PVP); /* TODO: configTable中的 BattleWinShareNum 现在配置为3，现在需要记录这个三，前后端都要记录 */

        let roleShareCnt = ManagerShareType.getInstance().getSharedCount(tab.SharedType.SharedType_WinShare); /* 用户今天分享了多少次 */
        let cfgShareCnt  = tab.Data.GetKeyValue_ConfigTable().BattleWinShareNum; /*  */
        let c4 = (roleShareCnt < cfgShareCnt); /* 用户分享的次数 < 配置的分享次数 */
        //cc.log("c4: " + c4)
        
        let c5 = c1 && c2 && c3 && c4; /*  */

        this.node_share_btn.node.active = c5; //Role.Instance.IsGuideFinished() && this.msg_data.isWin && !ManagerShareType.getInstance().getIsShared(tab.SharedType.SharedType_PVP);
        if(c5){
            let sbm = this.share_btn_model.getComponent("ShareBtnModel")
            sbm?.initData(tab.SharedType.SharedType_WinShare); /* 这里必须初始化 */
        }
        if (this.msg_data.isWin) {
            this.rewardLayout.node.removeAllChildren()
            for (let reward of this.msg_data.rewards) {
                this.setReward(reward);
            }
        }
        Role.Instance.RoleCup = this.msg_data.roleCup;
        this.rank_level.string = Level[this.msg_data.rank-1];
        this.cur_cup.string = String(this.msg_data.roleCup - this.msg_data.changeCup);
        this.up_cup.string = "0";
        let myRankData = getCurScoreStage(this.msg_data.roleCup - this.msg_data.changeCup);
        this.setRewardIcon(this.rank_img, myRankData.RankIcon);
        if (this.msg_data.changeCup > 0) {
            this.curFightNum = RankScoreRewardClass.getInstance().getRankLevelToScore(this.msg_data.roleCup - this.msg_data.changeCup);
            this.startCup = this.msg_data.roleCup - this.msg_data.changeCup;
            this.bScoreUp = true;
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

    /*  */
    protected update(dt: number): void {
        if (this.bScoreUp) {
            this.startCup++;
            if (this.startCup > this.msg_data.roleCup) {
                this.bScoreUp = false;
            } else {
                let count: number = Number(this.up_cup.string);
                this.up_cup.string = String(++count);
                let fightNum = RankScoreRewardClass.getInstance().getRankLevelToScore(this.startCup);
                this.setProgressSeason(fightNum, this.startCup);
                if (fightNum !== this.curFightNum) {
                    this.changeRank();
                }
            }
        }
    }

    /* 如果段位发生改变 */
    private async changeRank() {
        let self = this;
        this.bScoreUp = false;
        let myRankData = getCurScoreStage(this.startCup);
        let ac0 = cc.delayTime(1);
        let ac1 = cc.fadeOut(1);
        let ac2 = cc.callFunc(() => {
            self.setRewardIcon(self.rank_img, myRankData.RankIcon);
            self.curFightNum += 1;
            //self.arrow.node.active = true;
            //self.arrow.play();
        })
        let ac3 = cc.delayTime(1);
        let ac4 = cc.fadeIn(1);
        let ac5 = cc.delayTime(1);
        self.arrow.node.active = true;
        self.arrow.play();
        let ac6 = cc.callFunc(() => {
            self.bScoreUp = true;
        })
        this.rank_img.node.runAction(cc.sequence(ac0, ac1, ac2, ac3, ac4, ac5, ac6))
    }

    /*  */
    private async setRewardIcon(sprite: cc.Sprite, icon: string) {
        if (!isValidObj(sprite)) { return; }

        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if (sf) {
            if (sprite) {
                sprite.spriteFrame = sf;
            }
        }
    }

    /*  */
    onDestroy() {
        
    }
}
