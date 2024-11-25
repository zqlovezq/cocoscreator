import { Asset, JsonAsset, Material, Node, Prefab, SpriteAtlas, SpriteFrame, _decorator, error, js, log, resources, setRandGenerator, sp, sys, url } from "cc";
import { proto } from "client_protocol";
import { AbsControl } from "../../framework/base/IAbs";
import { LocalEvent } from "../define/LocalEvent";
import { EventMgr } from "../mgr/EventMgr";
import { Net } from "../net/Net";
import { SceneMgr } from "../mgr/SceneMgr";
import { FightRootControl } from "./FightRootControl";
import { tab } from "../../Table/table_gen";
import { FightData } from "./data/FightData";
import { Random } from "./util/Random";
import { TestAttr } from "../../TestAttr";
import { FrameControl } from "./base/frame/FrameControl";
import { AbsObjType } from "./base/obj/AbsObj";
import { ViewName } from "../define/ViewDefine";
import { UIMgr } from "../mgr/UIMgr";
import { WorldBossControll } from "./stage/WorldBossControll";
import { RoleData } from "../model/role/RoleData";
import { CommonTipsPop } from "../model/common/CommonTipsPop";
import { LangMgr } from "../mgr/LangMgr";
import { loadByResMap } from "../mgr/ResMgr";
import { Loading } from "../model/Loading";
import { ShaderUtil } from "../utils/ShaderUtil";
import { TalentBigTipsPop } from "../model/mutation/TalentBigTipsPop";
import { Func } from "../utils/Func";
import { GuideController } from "../guide/GuideController";
import { PvpControl } from "./pvp/PvpControl";
import { DataViewReader } from "../net/DataViewRW";
import { PREVIEW } from "cc/env";


const { ccclass, property } = _decorator;


export class FightMsgControl extends AbsControl {

    private static _instance: FightMsgControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FightMsgControl();
        }
        return this._instance;
    }
    isTest: boolean = false
    private reviveCallBack: Function;

    register(): void {
        EventMgr.onMsg(proto.Ptl.FightInfoPush, this.on_s2c_Msg_FightInfoPush, this)
        EventMgr.onMsg(proto.Ptl.FinishStageRsp, this.on_s2c_Msg_FinishStageRsp, this)
        EventMgr.onMsg(proto.Ptl.ReviveOnStageRsp, this.on_s2c_ReviveOnStageRsp, this);
        EventMgr.onMsg(proto.Ptl.FincaBattleFightRsp, this.on_s2c_FincaBattleFightRsp, this);


        EventMgr.onLocal(LocalEvent.FightResLoadComplete, this.onFightResLoadComplete, this)
    }

    startState(stageId: number) {
        let msg = new proto.Msg_StartStageReq();
        msg.stageId = stageId;
        Net.Send(proto.Ptl.StartStageReq, msg)
        this.isTest = false
    }

    //----------------处理回调---------------------
    onFightResLoadComplete() {
        console.log("onFightResLoadComplete-----------")
        if (FightData.ins.isPvp) {
            PvpControl.ins.start()
            return
        }
        FightData.ins.loadLevelJson()
        FightData.ins.initSkill()
        FightRootControl.ins.start()
    }

    on_s2c_Msg_FightInfoPush(msg: proto.Msg_FightInfoPush) {
        if (PREVIEW) {
            console.warn("PVE人物数据\n", JSON.stringify(msg.info))
        }

        this.setFightInfo(msg)
        this.isTest = false
    }

    setFightInfo(msg: proto.Msg_FightInfoPush) {
        FightData.ins.init()
        FightData.ins.setFightInfo(msg.info as proto.FightInfo)

        SceneMgr.ins.enterFight()
    }
    on_s2c_Msg_FinishStageRsp(msg: proto.Msg_FinishStageRsp) {
        console.log(`获取最新关卡信息${FightRootControl.ins.fightResult}`)
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;

        if (msg.stageId == 0) {
            CommonTipsPop.create(LangMgr.getLab("Tips_exception_1"), () => {
                FightRootControl.ins.enterMain();
            })
            return
        }
        if (FightRootControl.ins.fightResult !== proto.Msg_FinishStageReq.Result.Quit) {
            RoleData.ins.curClearStageId = msg.stageId;
        }

        if (msg.stageId === 50101) {
            UIMgr.ins.show({
                viewName: ViewName.FightAssociationBossResultPop, data: {
                    cb: () => {
                        UIMgr.ins.show({ viewName: ViewName.FightWinPop, data: msg.rewards })
                    }
                }
            })
        } else {
            if (FightRootControl.ins.fightResult == proto.Msg_FinishStageReq.Result.Win) {
                if (GuideController.ins.isGuiding() && (msg.stageId === 1 || msg.stageId === 103)) {
                    EventMgr.emitLocal(LocalEvent.FightWin);
                    GuideController.ins.setRewards(msg.rewards)
                } else {
                    UIMgr.ins.show({ viewName: ViewName.FightWinPop, data: msg.rewards })
                }
                if (msg.stageId === 102 && !RoleData.ins.clientData.failTimes) {
                    RoleData.ins.setClientData("failTimes", "true")
                }
            } else if (FightRootControl.ins.fightResult == proto.Msg_FinishStageReq.Result.Lose) {
                // 显示失败
                UIMgr.ins.show({ viewName: ViewName.FightLosePop, data: msg.rewards })
            }
        }
        const pveTab = tab.getData().PveStageTableByStageId.getValue(msg.stageId);
        if (pveTab.StageType === tab.PveStageType.PveStageType_EliteChapter) {
            // 精英关卡信息
            let elite_msg = new proto.Msg_GetEliteStageInfoReq();
            Net.Send(proto.Ptl.GetEliteStageInfoReq, elite_msg);
        } else if (pveTab.StageType === tab.PveStageType.PveStageType_MainChapter) {
            // 普通关卡信息
            let req = new proto.Msg_GetMainStageInfoReq();
            Net.Send(proto.Ptl.GetMainStageInfoReq, req)
        }
    }

    sendFightResult(req: proto.Msg_FinishStageReq) {
        console.log("发送战斗结果   是否胜利？", req)

        Net.Send(proto.Ptl.FinishStageReq, req)
        // Msg_GetMainStageInfoReq
    }

    /**
    * 请求复活
    */
    requestReviveOnStage(reviveCallBack: Function) {
        this.reviveCallBack = reviveCallBack;
        let msg = new proto.Msg_ReviveOnStageReq();
        // msg.id = id;
        Net.Send(proto.Ptl.ReviveOnStageReq, msg)
    }
    // 复活返回
    on_s2c_ReviveOnStageRsp(msg: proto.Msg_ReviveOnStageRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if (this.reviveCallBack) {
                this.reviveCallBack();
            }
        }
        this.reviveCallBack = null;
    }

    /** pvp战斗 */
    on_s2c_FincaBattleFightRsp(msg: proto.Msg_FincaBattleFightRsp) {
        if (msg.error.code != proto.CommonErrorCode.Succeed) {
            return
        }
        if (msg.isSweep) {
            return
        }

        // let reader = new DataViewReader(msg.recording)
        // let unit8 = new Uint8Array(reader.getBuffer(), reader.getOffset() + reader.getPos(), reader.getLen())
        let pb = proto["FightPvP"].decode(msg.recording)
        Net.toNumber52(pb)
        FightData.ins.init()
        FightData.ins.fincaBattleFightRsp = msg
        FightData.ins.setPvpInfo(pb)
        SceneMgr.ins.enterFight()
    }

    getTestHeros(): proto.HeroFightData[] {
        // let tests = [
        //     { id: 1, level: 1, itemId: 1501, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
        //     { id: 2, level: 1, itemId: 4403, star: 5, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
        //     { id: 3, level: 1, itemId: 1301, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
        //     { id: 4, level: 1, itemId: 1201, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
        //     { id: 5, level: 1, itemId: 1101, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
        // ]
        let tests = [
            { id: 5, level: 1, itemId: 4301, star: 21, skillList: [], attrList: [] },
            { id: 4, level: 1, itemId: 4103, star: 21, skillList: [], attrList: [] },
            { id: 3, level: 1, itemId: 4204, star: 21, skillList: [], attrList: [] },
            { id: 2, level: 1, itemId: 4401, star: 21, skillList: [], attrList: [] },
            { id: 1, level: 1, itemId: 4503, star: 21, skillList: [], attrList: [] },
        ]

        let list = []
        for (let index = 0; index < tests.length; index++) {
            const v = tests[index];
            v.attrList = [].concat(TestAttr.attack)
            let hero = new proto.HeroFightData()
            hero.id = v.id
            hero.level = v.level
            hero.itemId = v.itemId
            hero.star = v.star
            hero.skillList = v.skillList
            hero.attrList = v.attrList
            list.push(hero)
        }

        return list
    }

    testFight(state?: number) {
        let msg = new proto.Msg_FightInfoPush()

        let info = new proto.FightInfo()
        info.stageId = state || 102 || 99999
        info.heroData = this.getTestHeros()
        info.skillList = []
        msg.info = info

        this.isTest = true
        this.setFightInfo(msg)
    }

    testFightPvp() {
        let msg = new proto.FightPvP()
        msg.fightInfo = []
        msg.fightFlow = []

        for (let index = 0; index < 2; index++) {
            let pvpInfo = new proto.Msg_PvPFightInfo()
            pvpInfo.roleId = index.toString()
            pvpInfo.books = [22501, 22404]
            msg.fightInfo.push(pvpInfo)

            let info = new proto.FightInfo()
            info.heroData = this.getTestHeros()
            for (let i = 0; i < info.heroData.length; i++) {
                const element = info.heroData[i];
                element.id = element.id + index * 5
            }
            info.stageId = 60001
            info.skillList = []
            info.bufferList = []
            info.bookList = []

            pvpInfo.fightInfo = info
        }
        this.isTest = true
        FightData.ins.init()
        FightData.ins.setPvpInfo(msg)
        SceneMgr.ins.enterFight()
    }

    testFightPvpMsg() {
        resources.load("pvp/1v1", Asset, (error, data) => {
            if (error) {
                console.log("文件读取错误")
                return
            }
            // Net.onMessage({data:data._buffer} as any)
            let reader = new DataViewReader(data["_buffer"])
            let unit8 = new Uint8Array(reader.getBuffer(), reader.getOffset() + reader.getPos(), reader.getLen())
            let pb = proto["FightPvP"].decode(unit8)
            Net.toNumber52(pb)
            this.isTest = true
            FightData.ins.init()
            pb.fightInfo[0].books = [22501, 22404]
            pb.fightInfo[1].books = [22501, 22404]
            FightData.ins.setPvpInfo(pb)
            SceneMgr.ins.enterFight()
        })
    }

    async loadRes(fb: Function) {
        if (FightData.ins.isPvp) {
            this.loadlPvpRes(fb)
            return
        }
        await this.loadJson(FightData.ins.stageJsonPath, JsonAsset)
        if (resources.get(FightData.ins.stageJsonPath, JsonAsset) == null) {
            if (resources.getInfoWithPath(FightData.ins.stageJsonPath) == null) {
                console.error("关卡配置不存在", FightData.ins.stageJsonPath)
                return
            }
            console.log("关卡配置读取失败", FightData.ins.stageJsonPath)
            return
        }
        FightData.ins.loadLevelJson()

        console.log(FightData.ins.levelJson)


        let list = []

        list.push({ url: ShaderUtil.flashWhiteSprite(), type: Material })
        list.push({ url: ShaderUtil.flashWhiteSpine(), type: Material })
        list.push({ url: FightData.ins.stageTab.Background, type: SpriteFrame })

        let animIds = []
        let skillIds = []
        for (let index = 0; index < FightData.ins.levelJson.phaseList.length; index++) {
            const v = FightData.ins.levelJson.phaseList[index];
            v.times.forEach(v => {
                if (v.isMonster()) {
                    let monster = tab.getData().MonsterTableById.getValue(v.monsterId)
                    if (monster) {
                        if (monster.MonsterType == tab.MonsterType.MonsterType_BossMonster || (index == 0 && v.time < 120)) {
                            animIds.push(monster.IdleAnimationId)
                            animIds.push(monster.WalkAnimationId)
                            animIds.push(monster.DeadAnimationId)
                            animIds.push(monster.BornAnimationId)
                            animIds.push(monster.IdleAnimationId)
                            skillIds.push(monster.SkillIds)
                        }
                    }
                }
            })
        }

        for (let index = 0; index < FightData.ins.fightInfo.heroData.length; index++) {
            const element = FightData.ins.fightInfo.heroData[index];
            let heroTab = tab.getData().HeroTableById.getValue(element.itemId)
            if (heroTab) {
                animIds.push(heroTab.Idle)
            }
        }

        for (let index = 0; index < animIds.length; index++) {
            const v = animIds[index];
            let animTab = tab.getData().AnimationTableById.getValue(v)
            if (animTab) {
                if (Func.forBy(list, "url", animTab.Path)) {
                    continue
                }
                let assetType
                switch (animTab.Type) {
                    case tab.AnimationType.AnimationType_SpriteFrame:
                        assetType = SpriteFrame
                        break
                    case tab.AnimationType.AnimationType_SkeletonData:
                        assetType = sp.SkeletonData
                        break
                    case tab.AnimationType.AnimationType_Plist:
                        assetType = SpriteAtlas
                        break
                }
                if (assetType == null) {
                    continue
                }
                list.push({ url: animTab.Path, type: assetType })
            }
        }
        console.log(list)

        await loadByResMap(list, list.length, (progress) => {
            Loading.setProgress(progress)
        })
        fb && fb()

    }

    async loadJson(url: string, type: typeof Asset,
    ): Promise<any> {
        return new Promise(resolve => {
            resources.load(FightData.ins.stageJsonPath, JsonAsset, null, (error: Error, resource: JsonAsset) => {
                if (error) {
                    console.log("加载失败", error)
                    resolve(null);
                    return
                }
                resolve(resource);

            })
        })
    }

    async loadlPvpRes(fb: Function) {
        let list = []

        list.push({ url: ShaderUtil.flashWhiteSprite(), type: Material })
        list.push({ url: ShaderUtil.flashWhiteSpine(), type: Material })


        let animIds = []

        for (let index = 0; index < FightData.ins.fightPvp.fightInfo.length; index++) {
            const info = FightData.ins.fightPvp.fightInfo[index];
            for (let j = 0; j < info.fightInfo.heroData.length; j++) {
                const element = info.fightInfo.heroData[j];
                let heroTab = tab.getData().HeroTableById.getValue(element.itemId)
                if (heroTab) {
                    animIds.push(heroTab.Idle)
                }
            }
        }

        for (let index = 0; index < animIds.length; index++) {
            const v = animIds[index];
            let animTab = tab.getData().AnimationTableById.getValue(v)
            if (animTab) {
                if (Func.forBy(list, "url", animTab.Path)) {
                    continue
                }
                let assetType
                switch (animTab.Type) {
                    case tab.AnimationType.AnimationType_SpriteFrame:
                        assetType = SpriteFrame
                        break
                    case tab.AnimationType.AnimationType_SkeletonData:
                        assetType = sp.SkeletonData
                        break
                    case tab.AnimationType.AnimationType_Plist:
                        assetType = SpriteAtlas
                        break
                }
                if (assetType == null) {
                    continue
                }
                list.push({ url: animTab.Path, type: assetType })
            }
        }

        await loadByResMap(list, list.length, (progress) => {
            Loading.setProgress(progress)
        })
        fb && fb()
    }
}