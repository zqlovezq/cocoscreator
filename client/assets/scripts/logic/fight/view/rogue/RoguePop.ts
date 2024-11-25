import { _decorator, CCFloat, Component, instantiate, Label, log, Node, Prefab, UITransform } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { DropControl } from '../../drop/DropControl';
import { RogueControl, RogueSelect, RogueType } from './RogueControl';
import { RogueInfo } from './RogueInfo';
import { RogueHeroItem } from './RogueHeroItem';
import { RogueBaseItem } from './RogueBaseItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { FightEvent } from '../../define/FightEvent';
import { FightRootControl } from '../../FightRootControl';
import { tab } from '../../../../Table/table_gen';
import { FightRoleTeam } from '../common/FightRoleTeam';
import { FightWeaponTeam } from '../common/FightWeaponTeam';
import { FightData } from '../../data/FightData';
import { PlayerControl } from '../../base/obj/role/role/PlayerControl';
import { ViewName } from '../../../define/ViewDefine';
import { LocalEvent } from '../../../define/LocalEvent';
import { GuideController } from '../../../guide/GuideController';
import { FightMsgControl } from '../../FightMsgControl';
import { HeroTeamControl } from '../../../model/hero/HeroTeamControl';
import { HeroData } from '../../../model/hero/HeroData';
import { AdMgr } from '../../../model/AdMgr';
import { SettingsManager } from '../../../model/role/SettingsManager';
import { LangMgr } from '../../../mgr/LangMgr';
import { sortByVocation } from '../../../utils/GameUtil';
import { PREVIEW } from 'cc/env';
const { ccclass, property } = _decorator;

/** 肉鸽界面 */
@ccclass('RoguePop')
export class RoguePop extends ViewPop {

    static async create() {
        if (FightData.ins.isDestory) {
            return
        }
        if (FightData.ins.pause) {
            return
        }
        if (DropControl.ins.rogueDrops.length == 0) {
            return
        }
        FightData.ins.pause = true
        await UIMgr.ins.show({ viewName: "RoguePop" })
    }

    static hide() {
        if (!GuideController.ins.isInFightGuiding() || !GuideController.ins.holeMask.node.active || FightMsgControl.ins.isTest) {
            FightData.ins.pause = false
        }
        if (GuideController.ins.isInFightGuiding()) {
            EventMgr.emitLocal(LocalEvent.hidePop);
        }
        UIMgr.ins.hideView("RoguePop")
    }

    @property([Node])
    titleNodes: Node[] = []

    @property(Node)
    select_layout: Node = null

    @property(Prefab)
    heroPfb: Prefab = null

    @property(Prefab)
    weaponPfb: Prefab = null

    @property(FightRoleTeam)
    fightTeam: FightRoleTeam = null
    @property(FightWeaponTeam)
    fightWeapon: FightWeaponTeam = null

    @property(Node)
    refreshBtn: Node = null;
    @property(Label)
    refreshTimeLab: Label = null;
    @property(Node)
    adrefreshBtn: Node = null;
    @property(Label)
    adRefreshTimeLab: Label = null;
    @property(Node)
    timeTouchNode: Node = null
    @property(CCFloat)
    canClickTime: number = 1

    @property(Node)
    testRefreshBtn: Node = null;



    rogueSelect: RogueSelect
    totalRefreshTime: number = 0;
    rogueIndex: number = 0;
    protected onLoad(): void {
        super.onLoad()
        this.scheduleOnce(() => {
            this.timeTouchNode.active = false
        }, this.canClickTime)
        this.testRefreshBtn.active = PREVIEW
    }
    register(): void {

    }

    onShow(): void {
        this.refresh()
        if (GuideController.ins.isInFightGuiding()) {
            EventMgr.emitLocal(LocalEvent.ShowPop);
        }
    }

    updateRefreshBtn() {
        this.totalRefreshTime = RogueControl.ins.getRefreshRogueTotalTime();
        let lastTime = this.totalRefreshTime - RogueControl.ins.refreshRogueTime;
        if (lastTime == 0) {
            this.refreshBtn.active = false;
            this.adrefreshBtn.active = false;
        } else if (lastTime > 1) {
            this.refreshBtn.active = true;
            this.adrefreshBtn.active = false;
            this.refreshTimeLab.string = (this.totalRefreshTime - RogueControl.ins.refreshRogueTime) + "/" + this.totalRefreshTime;
        } else {
            this.refreshBtn.active = false;
            this.adrefreshBtn.active = true;

            this.adRefreshTimeLab.string = "1/1";
        }
    }
    /**
     * 
     * @param isSelfRefresh 是否用户手动点击刷新按钮
     */
    refresh(isSelfRefresh: boolean = false) {
       
        this.rogueSelect = RogueControl.ins.getList(isSelfRefresh)
        this.fightTeam.refresh(true)
        this.fightWeapon.refresh(true)
        // this.totalRefreshTime = RogueControl.ins.getRefreshRogueTotalTime();
        this.updateRefreshBtn();
        this.showType(this.rogueSelect.type)
        this.showList()
        if (this.rogueSelect.list.length == 0) {
            this.onCloseClick()
            return
        }
    }

    showType(idx: number) {
        for (let index = 0; index < this.titleNodes.length; index++) {
            const v = this.titleNodes[index];
            v.active = index == idx
        }
    }

    showList() {
        this.select_layout.destroyAllChildren()
        for (let index = 0; index < this.rogueSelect.list.length; index++) {
            const rogueInfo = this.rogueSelect.list[index];
            if (rogueInfo == null) {
                continue
            }
            let nn
            if (rogueInfo.rogueTab.Sort == tab.VirtualItemType.VirtualItemType_Eggs) {
                nn = instantiate(this.heroPfb)
            } else {
                nn = instantiate(this.weaponPfb)
            }
            this.select_layout.addChild(nn)
            nn.name = "RogueHeroItem" + index;
            let rogueBase: RogueBaseItem = nn.getComponent(RogueBaseItem)
            rogueBase.setOwner(this)
            rogueBase.setData(rogueInfo)
        }
        if (FightMsgControl.ins.isTest) {
            return
        }

        if (FightMsgControl.ins.isTest || this.rogueSelect.list.length <= 1) {
            this.rogueIndex = 0;
            this.scheduleOnce(this.showRogueChoose, 5)
            return
        }
        this.rogueIndex = this.caleRecommendRogue();
        this.unschedule(this.showRogueChoose);
        this.scheduleOnce(this.showRogueChoose, 5)
    }

    showRogueChoose() {
        const _rogueItem = this.select_layout.getChildByName("RogueHeroItem" + this.rogueIndex);
        if (_rogueItem && _rogueItem.isValid) {
            if (SettingsManager.ins.getSetting("isAutoSelectRogue")) {
                _rogueItem.getComponent(RogueBaseItem).showChoose();
                // _rogueItem.getComponent(RogueBaseItem).onClick();
                this.scheduleOnce(() => {
                    if (_rogueItem && _rogueItem.isValid) {
                        _rogueItem.getComponent(RogueBaseItem).onClick();
                    }
                }, 0.5)
            } else {
                _rogueItem.getComponent(RogueBaseItem).showChoose();
            }
        }
    }

    onItemClick(info: RogueInfo) {
        console.log(info)
        RogueControl.ins.addRogueId(info)
        this.checkNext()
    }

    checkNext() {
        if (DropControl.ins.rogueDrops.length > 0) {
            this.unscheduleAllCallbacks()
            this.refresh()
            return
        }
        RoguePop.hide()
    }

    onRefreshClick() {
        if (RogueControl.ins.refreshRogueTime >= this.totalRefreshTime) {
            //ShowTips("刷新次数已用完");
            ShowTips(LangMgr.getLab("Tips_refresh_1"));
        } else {
            RogueControl.ins.addRefreshRogueTime();
            this.refresh(true);
        }

    }

    onRefreshClicktEST(){
        this.refresh(true);
    }
    onAdRefreshClick() {
        if (RogueControl.ins.refreshRogueTime >= this.totalRefreshTime) {
            //ShowTips("刷新次数已用完");
            ShowTips(LangMgr.getLab("Tips_refresh_1"));
        } else {
            AdMgr.ins.playVideoAd(tab.AdType.AdType_RogueRefreshByAdvert, () => {
                RogueControl.ins.addRefreshRogueTime();
                this.refresh(true)
            })

        }



    }

    onClickWeapon() {
        UIMgr.ins.show({ viewName: ViewName.WeaponPop })
    }
    onCloseClick() {
        RoguePop.hide()
    }
    heroScoreMap: Map<number, number> = new Map();
    // 写一个推荐肉鸽算法 返回积分最高的肉鸽index
    caleRecommendRogue(): number {
        const baseScores = tab.getData().GetKeyValue_ConfigTable().RogueHeroRankScore;
        const leaderScore = tab.getData().GetKeyValue_ConfigTable().RogueCaptainScore;
        const WarriorScore = tab.getData().GetKeyValue_ConfigTable().RogueWarriorScore;
        const teams = HeroTeamControl.ins.getTeam();
        this.heroScoreMap.clear();
        let _maxScore = 0;
        // let _leaderScore = 0;
        let levels = [];
        for (let i = 0; i < teams.length; i++) {
            const _lv = teams[i].level;
            levels.push(_lv);
        }
        levels = levels.sort((lv1, lv2) => {
            return lv2 - lv1;
        })
        for (let j = 0; j < teams.length; j++) {
            const _heroClass = teams[j].heroClass;
            const levelIndex = levels.indexOf(teams[j].level)
            const _baseScore = baseScores[levelIndex];
            levels[levelIndex] = 0;
            // 获取队长职业
            const _leader = PlayerControl.ins.getLeader();
            let _leaderClass = 0
            if (_leader) {
                _leaderClass = _leader.info.configTab.Class;
            }
            let _addScore = 0;
            if (_heroClass === _leaderClass) {
                if (_heroClass === tab.HeroClass.HeroClass_Warrior) {
                    _addScore = leaderScore + WarriorScore;
                } else {
                    _addScore = leaderScore
                }
                // _leaderScore = _baseScore+_addScore;
            } else {
                if (_heroClass === tab.HeroClass.HeroClass_Warrior) {
                    _addScore = WarriorScore;
                }
            }
            const _heroScore = _baseScore + _addScore;
            if (_maxScore < _heroScore) {
                _maxScore = _heroScore;
            }
            this.heroScoreMap.set(_heroClass, _heroScore);
        }
        // 设置基础分完毕
        log("cocos肉鸽 设置肉鸽的基础分完毕=", this.heroScoreMap);
        let maxScore = 0;
        let _index = 0;
        for (let index = 0; index < this.rogueSelect.list.length; index++) {
            const rogueInfo: RogueInfo = this.rogueSelect.list[index];
            if (rogueInfo == null) {
                continue
            }
            // 如果当前是武器 武器算法
            let score = 0;
            if (rogueInfo.heroItemId) {
                const heroClass = HeroData.ins.getByItemId(rogueInfo.heroItemId).heroTable.Class;
                score = this.heroScoreMap.get(heroClass)

                const _leader = PlayerControl.ins.getLeader();
                let _leaderClass = 0
                if (_leader) {
                    _leaderClass = _leader.info.configTab.Class;
                }
                const isLeader = heroClass === _leaderClass
                if (isLeader) {
                    score *= tab.getData().GetKeyValue_ConfigTable().RogueCaptainUpMul;
                    console.log(`cocos肉鸽 当前~~~~~~~~~~~~~~index=${index},当前为队长计算出的积分为=${score}`);
                }

            } else {
                const bookTab = tab.getData().BookTableById.getValue(rogueInfo.rogueTab.BookId)
                score = this.caleRecommendRogueWeapen(rogueInfo, this.heroScoreMap.get(bookTab.Class), _maxScore);
            }
            console.log(`cocos肉鸽 当前~~~~~~~~~~~~~~index=${index},当前计算出的积分为=${score}`);
            if(rogueInfo.rogueTab.Sort!==tab.VirtualItemType.VirtualItemType_Eggs){
                this.setExtraStar(index,score);
            }


            if (score > maxScore) {
                maxScore = score;
                _index = index;
            }
        }
        return _index;
    }
    setExtraStar(index: number, score: number) {
        let nn = null;
        for(let i=0;i<this.select_layout.children.length;i++){
            const child = this.select_layout.children[i];
            if(child.name==="RogueHeroItem" + index&&child.active){
                nn = child;
            }
        }
        // let nn = this.select_layout.getChildByName("RogueHeroItem" + index);
        let rogueBase: RogueBaseItem = nn.getComponent(RogueBaseItem)
        let star = 0;
        if (score >= tab.getData().GetKeyValue_ConfigTable().RogueSeparatedScore[0]) {
            star = 3;
        } else if (score < tab.getData().GetKeyValue_ConfigTable().RogueSeparatedScore[1]) {
            star = 1;
        } else {
            star = 2;
        }
        rogueBase.setStar(star)
    }
    caleRecommendRogueWeapen(rogueInfo: RogueInfo, baseScore: number, maxScore: number): number {
        const buildsScore = tab.getData().GetKeyValue_ConfigTable().RogueBookBuildsScore;
        const buildsCoreScore = tab.getData().GetKeyValue_ConfigTable().RogueBookCoreScore;
        const buildsSkillScore = tab.getData().GetKeyValue_ConfigTable().RogueBookSkillScore;
        const buildsDefaultScore = tab.getData().GetKeyValue_ConfigTable().RogueBookBaseScore;
        const buildsKeyScore = tab.getData().GetKeyValue_ConfigTable().RogueBookKeyScore;
        let totalScore = 0;
        let curScore = 0;
        let maxWeapenScore = 0;
        // 通过肉鸽id获取所有的前置条件的肉鸽ids
        // 获取生效值
        const validList = RogueControl.ins.validList;
        const rogueInfos = [rogueInfo];
        for (let i = 0; i < validList.length; i++) {
            const _rogueInfo = validList[i];
            if (_rogueInfo.Id === rogueInfo.Id) {
                continue;
            }
            if (_rogueInfo.rogueTab.Condition === rogueInfo.rogueTab.Id) {
                rogueInfos.push(_rogueInfo);
            }
        }
        const scoreArr = [];
        log("cocos肉鸽 rogueInfos=", rogueInfos)
        for (let k = 0; k < rogueInfos.length; k++) {
            const bookID = rogueInfos[k].rogueTab.BookId;
            const bookTab = tab.getData().BookTableById.getValue(bookID);
            let _score = 0;
            if (bookTab.Builds === tab.Builds.Builds_Core) {
                // 核心
                if (baseScore === maxScore) {
                    _score = baseScore * buildsCoreScore;
                }
                console.log(`cocos肉鸽 核心积分=${_score}`)
            } else if (bookTab.Builds === tab.Builds.Builds_Skill) {
                // 招式
                if (baseScore === maxScore) {
                    _score = baseScore * buildsSkillScore;
                }
                console.log(`cocos肉鸽 招式积分=${_score}`)
            } else if (bookTab.Builds === tab.Builds.Builds_None) {
                _score = buildsDefaultScore;
            } else {
                // 流派
                // 找出当前流派的英雄数量
                // const buildCount = this.getTeamCountSchool(bookTab.Builds)
                // const str = tab.Builds[bookTab.Builds];
                // if (str.indexOf("1") > -1) {
                //     // 流派1
                //     _score = baseScore * buildCount * buildsScore[0]
                //     console.log(`cocos肉鸽 流派1积分=${_score}`)
                // } else {
                //     // 流派2
                //     _score = baseScore * buildCount * buildsScore[1];
                //     console.log(`cocos肉鸽 流派2积分=${_score}`)
                // }
                _score = this.getTeamCountSchool(bookTab.Builds);
            }

            scoreArr.push(Math.floor(_score * 100) / 100)
        }
        curScore = scoreArr[0];
        maxWeapenScore = Math.max(...scoreArr);
        const sumScore = scoreArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        totalScore = Math.floor(sumScore * buildsKeyScore * 100) / 100;
        console.log(`cocos肉鸽 积分数组为=${scoreArr}`)
        return Math.max(...[totalScore, curScore, maxWeapenScore])
    }
    // 获取队伍中流派
    getTeamCountSchool(buildId: tab.Builds): number {
        const buildsScore = tab.getData().GetKeyValue_ConfigTable().RogueBookBuildsScore;
        let score = 0;
        const str = tab.Builds[buildId];
        let buldsScore = str.indexOf("1") > -1 ? buildsScore[0] : buildsScore[1]
        const teams = HeroTeamControl.ins.getTeam();
        for (let i = 0; i < teams.length; i++) {
            const heroInfo = HeroData.ins.getById(teams[i].heroId);
            const builds = heroInfo.heroTable.Builds;
            if (builds.indexOf(buildId) > -1) {
                if (this.heroScoreMap.get(heroInfo.heroClassTable.HeroClass) * buldsScore > score) {
                    score = this.heroScoreMap.get(heroInfo.heroClassTable.HeroClass) * buldsScore
                }
            }
        }
        return score
    }
}