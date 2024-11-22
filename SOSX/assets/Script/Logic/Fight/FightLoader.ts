import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import LoadingBountyPrefab from "../Loading/LoadingBountyPrefab";
import LoadingPrefab from "../Loading/LoadingPrefab";
import LoadingScene from "../Loading/LoadingScene";
import MainScene from "../Main/MainScene";
import { checkPveBeReported, LoadResAsync, LoadScene } from "../Utils/GameUtils";
import ResManager from "../Utils/ResManager";
import { AddCompoundOneEid, AddCompoundTwoEid, BossChangeCardEid, BossChangeWoodEid, EnemyBornBlue, EnemyBornRed, FightBeginEffectID, FightBuildEffectID, FightDropGoldEid, FightDropMoneyEffectID, FightEnemyDisappearEid, FightEnemyFlyToBossEid, FightPlayerInfoEffectID, FightStrengthEid, LockOnEid } from "./Config";
import FightMsgManager from "./FightMsgManager";

enum ResType {
    SpriteFrame = 0,
    Spine = 1,
    Prefab = 2,
    Plist = 3,
    Font = 4,
}

export class FightLoader {
    private static _Instance: FightLoader = null;
    public static get Instance() {
        if (FightLoader._Instance == null) {
            FightLoader._Instance = new FightLoader();
        }
        return FightLoader._Instance;
    }
    /* 赏金赛 匹配 */
    MatchBountyPvP(){
        cc.log("赏金赛匹配");
        FightMsgManager.Clear();
        let matchPromise = FightMsgManager.Instance.matchFight(proto.FightType.Bounty);
        this.LoadFightScene('ChessFightScene', matchPromise, proto.FightType.Bounty)
    }
    /* PVP 匹配 */
    MatchPvP() {
        FightMsgManager.Clear();
        let matchPromise = FightMsgManager.Instance.matchFight(proto.FightType.PvP);
        this.LoadFightScene('ChessFightScene', matchPromise, proto.FightType.PvP)
    }

    MatchPvE() {
        FightMsgManager.Clear();
        if (checkPveBeReported()) {
            return
        }
        let matchPromise = FightMsgManager.Instance.matchFight(proto.FightType.PvE);
        this.LoadFightScene('FightPvEScene', matchPromise, proto.FightType.PvE)
    }

    MatchChallenge() {
        FightMsgManager.Clear();
        let matchPromise = FightMsgManager.Instance.matchFight(proto.FightType.Challenge);
        this.LoadFightScene('FightScene', matchPromise, proto.FightType.Challenge)
    }

    MatchTraining() {
        FightMsgManager.Clear()
        let matchPromise = FightMsgManager.Instance.matchFight(proto.FightType.Training)
        this.LoadFightScene('FightScene', matchPromise, proto.FightType.Training, false)
    }

    /* 匹配聊天中的战斗
     * @param type   战斗类型
     */
    MatchChatFight(type: proto.FightType) {
        FightMsgManager.Clear();
        if (checkPveBeReported()) {
            return
        }
        let matchPromise = FightMsgManager.Instance.waitingMatchFight(type);
        // let sceneName = (   proto.FightType.AlliancePvE == type || 
        //                     proto.FightType.FriendPve == type || 
        //                     proto.FightType.WorldChannelPvE == type) ? 'FightPvEScene' : 'FightScene';

        this.LoadFightScene("ChessFightScene", matchPromise, type);
    }

    /* 等待匹配聊天频道的战斗的邀请
     * @param type   战斗类型
     */
    WaitingMatchChatFight(type: proto.FightType, bVisibleCancelBtn: boolean = true) {
        FightMsgManager.Clear();
        if (checkPveBeReported()) {
            return
        }
        let matchPromise = FightMsgManager.Instance.waitingMatchFight(type);
        // let sceneName = (   proto.FightType.AlliancePvE == type || 
        //                     proto.FightType.FriendPve == type || 
        //                     proto.FightType.WorldChannelPvE == type) ? "FightPvEScene" : "FightScene";
        this.LoadFightScene("ChessFightScene", matchPromise, type, bVisibleCancelBtn);
    }

    StartPvPGuide() {
        //新手引导战斗
        FightMsgManager.Clear();
        let matchPromise = FightMsgManager.Instance.matchFight(proto.FightType.RookiePvP);
        this.LoadFightScene('ChessFightScene', matchPromise, proto.FightType.RookiePvP, false)
    }

    ReconnectPvP(): Promise<boolean> {
        FightMsgManager.Clear();
        return new Promise<boolean>(resolve => {
            let rspPromiese = FightMsgManager.Instance.reconnectFight()
            rspPromiese.then(rsp => {
                if (rsp.result == proto.CommonErrorCode.Succeed) {
                    console.log("$$$$$$$$$$$$$$$$$$$$$$$$--- ReconnectPvP FightScene : ", rsp.type);
                    let sceneName = 'ChessFightScene'
                    if (rsp.type == proto.FightType.PvE ||
                        rsp.type == proto.FightType.AlliancePvE ||
                        rsp.type == proto.FightType.WorldChannelPvE) {
                        sceneName = 'FightPvEScene'
                    }

                    let cancel = true;
                    if (proto.FightType.RookiePvP == rsp.type || proto.FightType.Training == rsp.type) {
                        cancel = false;
                    }
                    FightLoader.Instance.LoadFightScene(sceneName, rspPromiese, rsp.type, cancel)
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    }

    LoadFightScene(sceneName: string, matchPromise: Promise<proto.Msg_StartMatchFightRsp> | Promise<proto.Msg_ReconnetFightRsp>
        , type: proto.FightType, canelable = true) {

        //改变一下滚动公告的位置不挡道游戏中的玩家英雄头像
        if (MainScene.scrollNotice) {
            let wid: cc.Widget = MainScene.scrollNotice.getComponent(cc.Widget)
            if (wid) {
                wid.top = 99
            }
        }

        // test 20230601 wzq
        // type = proto.FightType.Bounty;

        LoadScene('LoadingScene', (error, scene: cc.Scene) => {
            let loadingTs = scene.children[0].getComponent(LoadingScene);
            let loading = null;
            // 加载不同的loading界面
            if(type!==proto.FightType.Bounty){
                loadingTs.setLoading(false);
                loading = scene.getComponentInChildren(LoadingPrefab);
            }else{
                loadingTs.setLoading(true);
                loading = scene.getComponentInChildren(LoadingBountyPrefab)
            }
            loading.showCancleBtn(canelable);
            loading.setCurFightType(type); /* 设置具体战斗类型【用于联盟战斗邀请】 */
            loading.loadRes(sceneName, async () => {
                //加载数据
                await this.loadFightBaseData();
            }, async () => {
                //等待match协议返回才可进入战斗界面
                let result = await matchPromise;
                if (result && result.result == proto.CommonErrorCode.Succeed) {
                    //配上了对手

                    //加载卡组资源
                    let resMap = new tab.Dictionary<ResType, string[]>();
                    let totalRes = this.loadChessSceneRes(resMap,type,result);
                    await this.loadByResMap(resMap, totalRes);
                    //准备进入战斗界面
                    if (!cc.isValid(loading.node)) {
                        return;
                    }
                    loading.addPersistNode()//添加loadingPrefab为常驻节点
                    loading.showCancleBtn(false)
                    loading.enterScene(sceneName, async (err, scene) => {
                        //发送ready
                        let readRsp = await FightMsgManager.Instance.readyFight(result.fightInstanceId)
                        loading.removePersistNode()//移除常驻节点
                        if (readRsp.result == proto.CommonErrorCode.Succeed) {
                            loading.node.destroy() //删除scene上的加载界面
                            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_FightReady)
                        } else {
                            cc.warn("readyFight faild!!")
                            if (result.type == proto.FightType.RookiePvP) {
                                //新手引导不返回主界面，断开连接
                                Net.Disconnect();
                            } else {
                                //进入主界面
                                ResManager.releaseAllScene()//释放加载的资源
                                LoadScene('MainScene');
                            }
                        }
                    });
                } else {
                    //匹配失败，进入主界面
                    ResManager.releaseAllScene()//释放加载的资源
                    LoadScene('MainScene');
                }
            }, canelable);
        });
    }
    private loadChessSceneRes(resMap,type:proto.FightType,result):number{
        let totalRes = 0;
        // 如果是普通队长 加载自己和对手的卡牌资源
        if(type!==proto.FightType.Bounty){
            totalRes += this.addTowerResMap(result.myData.deckData, resMap);
            totalRes += this.addTowerResMap(result.otherData.deckData, resMap);
        }else{
            // 赏金赛加载8个对手的资源
            let allData = result.allData;
            for(let i=0;i<allData.length;i++){
                totalRes += this.addTowerResMap(allData[i].deckData,resMap);
            }
        }

        //加载底板
        let chessBgs = tab.Data.GetKeyValue_ConfigTable().ChessBgPerLoading;
        totalRes += this.addToResMap(resMap, chessBgs, ResType.SpriteFrame);
        // 增加一个秒杀特效
        totalRes += this.addEffectToResMap(40011,resMap);
        totalRes += this.addToResMap(resMap, "Chess/UI/CardDetail/arrowUp", ResType.SpriteFrame)
        // 增加伤害数字
        totalRes += this.addToResMap(resMap, "font/baoji", ResType.Font);
        totalRes += this.addToResMap(resMap, "font/pugong", ResType.Font);
        totalRes += this.addToResMap(resMap, "font/zhiliao", ResType.Font);
        if(type===proto.FightType.Bounty){
            totalRes += this.addToResMap(resMap, "prefab/ShangJinRankNode", ResType.Prefab);
            totalRes += this.addToResMap(resMap, "prefab/ShangJinItem", ResType.Prefab);
        }
        return  totalRes;
    }
    protected addEffectToResMap(effectId: number, resMap: tab.Dictionary<ResType, string[]>): number {
        let effectData = tab.Data.EffectTableByID.getValue(effectId)
        if (effectData) {
            switch (effectData.Type) {
                case tab.EffectType.EffectType_SpriteFrame:
                    return this.addToResMap(resMap, effectData.Url, ResType.SpriteFrame)
                case tab.EffectType.EffectType_AnimationClip:
                    return this.addToResMap(resMap, effectData.Url, ResType.Prefab)
                case tab.EffectType.EffectType_SkeletonData:
                    let spineData = tab.Data.SpineTableByID.getValue(effectData.SpineID)
                    if (spineData) {
                        return this.addToResMap(resMap, spineData.Url, ResType.Spine)
                    }
                case tab.EffectType.EffectType_Plist:
                    return this.addToResMap(resMap, effectData.Url, ResType.Plist)
            }
        }

        return 0
    }

    protected addToResMap(resMap: tab.Dictionary<ResType, string[]>, res: string | string[], type: ResType): number {
        let pushCount = 0;
        let resArray = resMap.getValue(type);
        if (!resArray) {
            resArray = new Array<string>()
            resMap.setValue(type, resArray)
        }

        if (typeof res == 'string') {
            if (resArray.indexOf(res) < 0) {
                resArray.push(res);
                ++pushCount;
            }
        }
        else {
            for (let tmpRes of res) {
                if (resArray.indexOf(tmpRes) < 0) {
                    resArray.push(tmpRes);
                    ++pushCount;
                }
            }
        }
        return pushCount;
    }

    public loadByResMap(resMap: tab.Dictionary<ResType, string[]>, totalRes: number,
        progressCallback?: (progress: number) => void): Promise<any[]> {

        let promiseArray = []
        let completedRes = 0;
        let resKeys = resMap.keys();
        for (let key of resKeys) {
            let loadResType = undefined
            switch (key) {
                case ResType.SpriteFrame:
                    loadResType = cc.SpriteFrame
                    break;
                case ResType.Spine:
                    loadResType = sp.SkeletonData
                    break;
                case ResType.Prefab:
                    loadResType = cc.Prefab
                    break;
                case ResType.Plist:
                    loadResType = cc.SpriteAtlas
                    break;
                case ResType.Font:
                    loadResType = cc.Font
                    break;
            }
            let resArray = resMap.getValue(key);
            for (let res of resArray) {
                let loadPromise = LoadResAsync(res, loadResType);
                promiseArray.push(loadPromise)
                loadPromise.then(() => {
                    ++completedRes;
                    progressCallback && progressCallback(completedRes / totalRes)
                })
            }
        }
        return Promise.all(promiseArray);
    }

    protected addTowerResMapByCardID(cardID: number, resMap: tab.Dictionary<ResType, string[]>, canLoadCard: boolean): number {
        let cardTD = tab.Data.CardTableByID.getValue(cardID);
        if (cardTD == null) { return 0 }
        let pushCount = 0;

        //塔spine 没有 目前塔是texture
        // let spineTD = tab.Data.SpineTableByID.getValue(cardTD.SpineID);
        // if (spineTD) {
        //     towerArray.push(spineTD.Url);
        // }

        // 加载永久变身卡牌
        if (cardTD.TransformID != 0 && canLoadCard) {
            pushCount += this.addTowerResMapByCardID(cardTD.TransformID, resMap, false)
            // 头像
            let itemTbl = tab.Data.ItemTableByID.getValue(cardTD.TransformID)
            if (itemTbl) {
                pushCount += this.addToResMap(resMap, [itemTbl.Icon], ResType.SpriteFrame);
            }
        }

        //出场特效
        if (cardTD.AppearEffect > 0) {
            pushCount += this.addEffectToResMap(cardTD.AppearEffect, resMap)
        }
        if (cardTD.PermanentEffect > 0) {
            pushCount += this.addEffectToResMap(cardTD.PermanentEffect, resMap)
        }
        /* 塔的技能特效 */
        let SkillList = cardTD.SkillList;
        for(let i=0;i<SkillList.length;i++){
            let skillID = SkillList[i];
            let skillData:tab.SkillTable = tab.Data.SkillTableByID.getValue(skillID)
            if(isValidObj(skillData)){
                /* 添加子弹特效 受击特效 */
                let BulletEffectID = skillData.BulletEffectID;
                let HitEffectID = skillData.HitEffectID;
                pushCount += this.addEffectToResMap(BulletEffectID, resMap);
                pushCount += this.addEffectToResMap(HitEffectID, resMap);
                if (skillData.Type == tab.SkillType.SkillType_Transform) {
                    if (canLoadCard) {
                        // 变身效果需要加载变身后的卡牌资源
                        for (let i = 0; i < skillData.BuffList.length; ++i) {
                            pushCount += this.addTowerResMapByCardID(skillData.BuffList[i], resMap, false)
                            // 头像
                            let itemTbl = tab.Data.ItemTableByID.getValue(skillData.BuffList[i])
                            if (itemTbl) {
                                pushCount += this.addToResMap(resMap, [itemTbl.Icon], ResType.SpriteFrame);
                            }
                        }
                    }
                } else if (skillData.BuffList.length > 0) {
                    /* 增加buff特效 */
                    for (let i = 0; i < skillData.BuffList.length; ++i) {
                        let buffId = skillData.BuffList[i]
                        let buffData = tab.Data.BuffTableByID.getValue(buffId);
                        /* buff特效 */
                        if(buffData.EffectID){
                            pushCount += this.addEffectToResMap(buffData.EffectID, resMap);
                        }
                        if(isValidObj(buffData)){
                            /* buff里面的技能特效 */
                            let _skillID = buffData.SkillID;
                            let _skillData:tab.SkillTable = tab.Data.SkillTableByID.getValue(_skillID)
                            if(isValidObj(_skillData)){
                                let _BulletEffectID = _skillData.BulletEffectID;
                                let _HitEffectID = _skillData.HitEffectID;
                                pushCount += this.addEffectToResMap(_BulletEffectID, resMap);
                                pushCount += this.addEffectToResMap(_HitEffectID, resMap);
                            }
                        }
                    }
                }
            }
        }
        return pushCount
    }

    protected addTowerResMap(deckDatas: proto.IFightCardData[], resMap: tab.Dictionary<ResType, string[]>): number {
        //塔相关
        let pushCount = 0;
        // let towerArray = new Array<string>();
        let portraitArray = []
        for (let deckData of deckDatas) {
            pushCount += this.addTowerResMapByCardID(deckData.staticId, resMap, true)
            //头像
            let itemTbl = tab.Data.ItemTableByID.getValue(deckData.staticId)
            if (itemTbl) {
                portraitArray.push(itemTbl.Icon);
            }
        }
        // pushCount += this.addToResMap(resMap, towerArray, ResType.Spine);
        pushCount += this.addToResMap(resMap, portraitArray, ResType.SpriteFrame);
        return pushCount;
    }
    protected addBattleMapToResMap(mapID: number, isBottom: boolean, resMap: tab.Dictionary<ResType, string[]>): number {
        if (mapID == tab.Data.GetKeyValue_ConfigTable().InitBattleMap) {
            return 0;
        }

        let pushCount = 0;
        let battleTbl = tab.Data.BattleMapTableByID.getValue(mapID)
        if (battleTbl) {
            pushCount += this.addToResMap(resMap,
                isBottom ? battleTbl.BottomMapPath : battleTbl.TopMapPath,
                ResType.SpriteFrame);
        }
        return pushCount;
    }

    protected addBuffToResMap(buffID: number, resMap: tab.Dictionary<ResType, string[]>): number {
        let pushCount = 0;
        let buffData = tab.Data.BuffTableByID.getValue(buffID)
        if (buffData) {
            if (buffData.EffectID > 0) {
                pushCount += this.addEffectToResMap(buffData.EffectID, resMap)
            }
        }
        return pushCount
    }

    /* 怪物表不用了 */
    public addFightBaseData(resMap: tab.Dictionary<ResType, string[]>): number {
        let totalRes = 0;
        //建造特效
        let buildRes = tab.Data.SpineTableByID.getValue(FightBuildEffectID)
        if (buildRes) {
            totalRes += this.addToResMap(resMap, buildRes.Url, ResType.Spine)
        }
        //其它特效
        totalRes += this.addEffectToResMap(FightDropMoneyEffectID, resMap)
        totalRes += this.addEffectToResMap(FightBeginEffectID, resMap)
        totalRes += this.addEffectToResMap(FightPlayerInfoEffectID, resMap)
        totalRes += this.addEffectToResMap(FightStrengthEid, resMap)
        totalRes += this.addEffectToResMap(FightEnemyDisappearEid, resMap)
        totalRes += this.addEffectToResMap(FightEnemyFlyToBossEid, resMap)
        totalRes += this.addEffectToResMap(BossChangeCardEid, resMap)
        totalRes += this.addEffectToResMap(BossChangeWoodEid, resMap)
        totalRes += this.addEffectToResMap(EnemyBornRed, resMap)
        totalRes += this.addEffectToResMap(EnemyBornBlue, resMap)
        totalRes += this.addEffectToResMap(AddCompoundOneEid, resMap)
        totalRes += this.addEffectToResMap(AddCompoundTwoEid, resMap)
        totalRes += this.addEffectToResMap(FightDropGoldEid, resMap)
        totalRes += this.addEffectToResMap(LockOnEid, resMap)
        return totalRes;
    }

    public addRookiePvpDeck(resMap: tab.Dictionary<ResType, string[]>): number {
        let totalRes = 0;
        let deckDatas: proto.IFightCardData[] = []
        for (let cardID of tab.Data.GetKeyValue_ConfigTable().InitialCards) {
            let data = { staticId: cardID, level: 1 };
            deckDatas.push(data)
        }
        totalRes += this.addTowerResMap(deckDatas, resMap)
        return totalRes;
    }

    protected loadFightBaseData(): Promise<any[]> {
        let resMap = this.getResMap();
        let totalRes = this.addFightBaseData(resMap)
        return this.loadByResMap(resMap, totalRes)
    }

    public getResMap() {
        return new tab.Dictionary<ResType, string[]>();
    }
}