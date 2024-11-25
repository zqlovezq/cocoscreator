import { LocalEvent } from "../define/LocalEvent";
import { FightData } from "../fight/data/FightData";
import { FightEvent } from "../fight/define/FightEvent";
import { RoguePop } from "../fight/view/rogue/RoguePop";
import { EventMgr } from "../mgr/EventMgr";
import { Command, DisableGuideController, EnableGuideController, EnableTouchMask, IsInFightScene, IsInMainScene, WaitBoss, WaitEnterScene, WaitFightResLoad, WaitFightWin, WaitHideHeroPop, WaitHidePop, WaitJadeDrop, WaitShowMonster, WaitShowPop, heroInTeam, waitOnlyMainView } from "./GuideCommand";
import { OpenFunctionMgr } from "../../Common/component/OpenFunctionMgr";
import { tab } from "../../Table/table_gen";
import { GuideController } from "./GuideController";
import { ChannelMgr } from "../../channel/ChannelMgr";
import { RoleData } from "../model/role/RoleData";
import { UIMgr } from "../mgr/UIMgr";
import { ViewName } from "../define/ViewDefine";

export const guideTask = {
    JadeDrops: {
        1: [10061, 10081, 132],
        2: [10001, 10041, 10061],
        3: [10063, 10064, 10062],
        4: [10021, 10081, 10061],
        5: [10064, 133, 10063],
    },
    task_100: {
        name: '第1场战斗',
        debug: false,
        mask: false,
        condition: IsInFightScene,
        steps: [
            {
                onStart(callback) {
                    WaitEnterScene("FightScene", () => {
                        EnableGuideController();
                        FightData.ins.pause = true;
                        callback()
                    })
                },
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.RunComic
                },
                onEnd(cb) {
                    EventMgr.emitFight(FightEvent.Fight_Start_Complete)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                delayTime: 1,
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_101"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    FightData.ins.pause = false;
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitShowMonster().then(() => {
                        FightData.ins.pause = true;
                        callback()
                        EnableTouchMask();
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_102" },
                        { cmd: Command.CircleClick, args: "FightRootView/rootNode/objects/Monster" },
                    ]
                },
                onEnd(cb) {
                    FightData.ins.pause = false;
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },
            // 首次掉毛
            // 擊敗怪物有概率掉落羽毛，撿起它，它可以強化你的攻擊效果
            {
                onStart(callback) {
                    WaitJadeDrop().then(() => {
                        FightData.ins.pause = true;
                        callback()
                        EnableTouchMask();
                    })
                },
                //
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_103" },
                        { cmd: Command.CircleClick, args: "FightRootView/rootNode/dropNode/dropNode" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    FightData.ins.pause = false;
                    RoguePop.create();
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitFightWin().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_104"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    UIMgr.ins.show({ viewName: ViewName.FightWinPop, data: GuideController.ins.gerRewards() })
                    cb();
                    DisableGuideController();
                }
            },
        ]
    },
    task_200: {
        name: "点击升级",
        debug: false,
        mask: true,
        condition: IsInMainScene,
        steps: [
            {
                onStart(callback) {
                    WaitEnterScene('MainScene', () => {
                        EnableGuideController()
                        callback();
                    })
                },
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_201"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_202"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_203"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_204"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/HomeMainView/right_node/bottom_node/function_layout/hero_btn/guideNode" },
                    ]
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroBagView/safearea_node/bag_node/herobag_scrollview/list_content/0/content/1401"
                },
                onEnd(cb) {
                    cb();
                }
            },
            // 点击详情
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroBagView/safearea_node/bag_node/details_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_205"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            // 点击升级
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/herodetail_node/levelup_node/levelup_btn" },
                    ]
                },
                onEnd(cb) {
                    cb();
                }
            },
            // 点击一键升级
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/herodetail_node/ascend_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
            // 点击返回
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/close_node/close_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
            // 点击返回
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroBagView/close_node/close_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_206"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },
        ]
    },
    task_300: {
        name: '第1场战斗',
        debug: false,
        mask: false,
        condition: IsInMainScene,
        steps: [
            {
                onStart(callback) {
                    EnableTouchMask()
                    callback()
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/HomeMainView/right_node/play_node/HomeChapterItem/guideNode" },
                    ]
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    EnableTouchMask()
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/BattleMainView/battle_btn"
                },
                onEnd(cb) {
                    WaitEnterScene("FightScene", () => {
                        cb();
                    })
                }
            },
            {
                onStart(callback) {
                    WaitFightResLoad().then(() => {
                        EventMgr.emitLocal(LocalEvent.HideDialogue)
                        FightData.ins.pause = true;
                        callback()
                    })
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                delayTime: 1,
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_301"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    FightData.ins.pause = false;
                    EventMgr.emitFight(FightEvent.Fight_Start_Complete);
                    cb();
                }
            },
            // 选择队长
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_302" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem1" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            // 出怪引导点击怪物
            {
                onStart(callback) {
                    WaitShowMonster().then(() => {
                        FightData.ins.pause = true;
                        callback()
                        EnableTouchMask();
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_303" },
                        { cmd: Command.CircleClick, args: "FightRootView/rootNode/objects/Monster" },
                    ]
                },
                onEnd(cb) {
                    FightData.ins.pause = false;
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },

            // 第一次掉毛
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_304" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            // 你現在可以一次性射出兩發子彈！你的輸出翻倍了
            {
                onStart(callback) {
                    WaitHidePop().then(() => {
                        FightData.ins.pause = true;
                        callback()
                    })
                },
                //
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_305"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    FightData.ins.pause = false;
                    cb();
                }
            },
            // 第二次掉毛
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_306" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },
            // 第三次掉毛
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_307" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            // 第四次掉毛
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2"
                },
                onEnd(cb) {
                    cb();
                }
            },
            // 第五次掉毛
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_308" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem2" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },
            // 第一次掉蛋
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_309" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/RoguePop/select_layout/RogueHeroItem0" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },
            // 第六次掉羽毛
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_310"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },
            // 等待boss
            {
                onStart(callback) {
                    WaitBoss().then(() => {
                        FightData.ins.pause = true;
                        callback()
                    })
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_311"
                },
                onEnd(cb) {
                    FightData.ins.pause = false;
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                    DisableGuideController();
                }
            },
        ]
    },
    task_400: {
        name: "引导抽卡",
        debug: false,
        mask: false,
        condition: IsInMainScene,
        steps: [
            {
                onStart(callback) {
                    WaitEnterScene("MainScene", () => {
                        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GachaHero);
                        if (isOpen) {
                            EnableGuideController();
                            callback()
                        } else {
                            DisableGuideController();
                        }
                    })
                },
            },
            {
                onStart(callback) {
                    waitOnlyMainView().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_401"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    cb();
                }
            },
            // 点击抽卡按钮
            {
                onStart(callback) {
                    EnableTouchMask();
                    callback();
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HomeMainView/right_node/play_node/draw_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    EnableTouchMask();
                    WaitShowPop().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_402" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/RecruitView/Recruit/RecruitBtn_node/recruit1_btn" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    GuideController.ins.canHideHeroPop = false;
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_403"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    GuideController.ins.canHideHeroPop = true;
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitHideHeroPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                delayTime: 1,
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/RecruitGetPop/common_node/btn_node/close_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitHideHeroPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/RecruitView/close_node/close_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
        ]
    },
    task_500: {
        name: "小鸡升级上阵",
        debug: false,
        mask: false,
        condition: IsInMainScene,
        steps: [
            // 点击英雄按钮
            {
                onStart(callback) {
                    waitOnlyMainView().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_501"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            // 点击英雄按钮
            {
                onStart(callback) {
                    EnableTouchMask();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HomeMainView/right_node/bottom_node/function_layout/hero_btn/guideNode"
                },
                onEnd(cb) {
                    cb();
                }
            },
            // 点击量子先驱
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        EnableTouchMask();
                        callback()
                    })
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroBagView/safearea_node/bag_node/herobag_scrollview/list_content/1/content/3401"
                },
                onEnd(cb) {
                    cb();
                }
            },
            // 上阵
            {
                onStart(callback) {
                    EnableTouchMask();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroBagView/hero_node/HeroPaintingItem/bag_node/deploy_node"
                },
                onEnd(cb) {
                    heroInTeam().then(() => {
                        cb();
                    })
                }
            },
            // 点击返回
            {
                onStart(callback) {
                    EnableTouchMask();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroBagView/close_node/close_btn"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    EnableTouchMask()
                    callback()
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/HomeMainView/right_node/play_node/HomeChapterItem/guideNode" },
                    ]
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    EnableTouchMask()
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/BattleMainView/battle_btn"
                },
                onEnd(cb) {
                    WaitEnterScene("FightScene", () => {
                        ChannelMgr.roleCompleteTutorial(RoleData.ins.sdkRole())
                        DisableGuideController()
                        cb();
                    })
                }
            },
        ]
    },
    task_301: {
        name: "第一关战斗失败",
        debug: false,
        condition: IsInFightScene,
        finish: true,
        mask: false,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    GuideController.ins.node_jump.active = false;
                    callback()
                },
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_351"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    DisableGuideController();
                    cb();
                }
            },
        ]
    },
    task_501: {
        name: "1-2软引导",
        debug: false,
        condition: IsInMainScene,
        mask: true,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    callback()
                },
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_502" },
                        { cmd: Command.Click, args: "Canvas/rootNode/uiNode/BattleMainView/battle_btn" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    DisableGuideController();
                    cb();
                }
            },
        ]
    },
    task_502: {
        name: "1-3软引导",
        debug: false,
        condition: IsInFightScene,
        finish: true,
        mask: false,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    FightData.ins.pause = true;
                    GuideController.ins.node_jump.active = false;
                    callback()
                },
            },
            // 释放子弹
            {
                onStart(callback) {
                    EnableTouchMask();
                    callback()
                },
                delayTime: 1,
                // 可恶，难道...一切...结束了么
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_601"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                //各位朋友，你们遇到麻烦了么？让我来帮你们吧
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_602"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                //太好了，有人来增援我们了！
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_603"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                //我的残存神力可以复活小鸡，加油冒险者大人，我们能赢。
                command: {
                    cmd: Command.Parallel, args: [
                        { cmd: Command.DialogueNonmodal, args: "guide_desc_604" },
                        { cmd: Command.ClickAnywhere, args: "CreateBullet" },
                    ]
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue)
                    FightData.ins.pause = false;
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitFightWin().then(() => {
                        callback()
                    })
                },
                // 多亏了辉夜姬小姐，总算是化险为夷了。
                command: {
                    cmd: Command.Dialogue, args: "guide_desc_605"
                },
                onEnd(cb) {
                    EventMgr.emitLocal(LocalEvent.HideDialogue);
                    DisableGuideController();
                    UIMgr.ins.show({ viewName: ViewName.FightWinPop, data: GuideController.ins.gerRewards() })
                    cb();
                }
            },
        ]
    },
    // 装备引导
    task_503: {
        name: "装备引导1",
        debug: false,
        condition: IsInMainScene,
        mask: true,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/function_toggle/Toggle3"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equip_btn"
                },
                onEnd(cb) {
                    DisableGuideController();
                    cb();
                }
            },
        ]
    },
    task_504: {
        name: "装备引导2",
        debug: false,
        condition: IsInMainScene,
        mask: true,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equip_btn"
                },
                onEnd(cb) {
                    DisableGuideController();
                    cb();
                }
            },
        ]
    },
    // 羽毛引导
    task_505: {
        name: "羽毛引导1",
        debug: false,
        condition: IsInMainScene,
        mask: true,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/function_toggle/Toggle3"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equipshow_node/specialequip_layout/HeroEquipSlotItem"
                },
                onEnd(cb) {
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        callback()
                    })
                },
                command: {
                     cmd: Command.Click, args: "Canvas/rootNode/uiNode/JadeSelectPop/ScrollView/view/content/item0/itemNode/equip_node"
                },
                onEnd(cb) {
                    DisableGuideController();
                    cb();
                }
            }

        ]
    },
    task_506: {
        name: "羽毛引导2",
        debug: false,
        condition: IsInMainScene,
        mask: true,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/HeroDetailView/safearea/equip_node/inteam_node/equipshow_node/specialequip_layout/HeroEquipSlotItem"
                },
                onEnd(cb) {
                    DisableGuideController();
                    cb();
                }
            },
            {
                onStart(callback) {
                    WaitShowPop().then(() => {
                        callback()
                    })
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/JadeSelectPop/ScrollView/view/content/item0/itemNode/equip_node"
                },
                onEnd(cb) {
                    DisableGuideController();
                    cb();
                }
            }
        ]
    },
    task_507: {
        name: "2-1领取通关奖励",
        debug: false,
        condition: IsInMainScene,
        mask: false,
        steps: [
            {
                onStart(callback) {
                    EnableGuideController();
                    callback()
                },
                command: {
                    cmd: Command.Click, args: "Canvas/rootNode/uiNode/BattleMainView/reward_node/reward_layout"
                },
                onEnd(cb) {
                    DisableGuideController();
                    cb();
                }
            }
        ]
    }
}
// 走分支路线
export function stepBranchGuide(taskId: number) {
    GuideController.ins.clearTask();
    const task = guideTask["task_" + taskId];
    const guideData = tab.getData().GuideTableById.getValue(taskId)
    GuideController.ins.runTask(task, guideData.Id, error => {
        if (!error) {
            if (task.finish === undefined || task.finish === true) {

            }
        }
        GuideController.ins.runningGuideData = null;
    })
}

