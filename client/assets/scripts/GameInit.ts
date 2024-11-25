import { _decorator } from "cc";
import { UIMgr } from "./logic/mgr/UIMgr";
import { EngineCode } from "./framework/EngineCode";
import { LoginControl } from "./logic/model/login/LoginControl";
import { SceneMgr } from "./logic/mgr/SceneMgr";
import Sound, { PlaySound } from "./logic/utils/Sound";
import { RoleControl } from "./logic/model/role/RoleControl";
import { FightMsgControl } from "./logic/fight/FightMsgControl";
import { HeroControl } from "./logic/model/hero/HeroControl";
import { ItemControl } from "./logic/model/item/ItemControl";
import { EquipControl } from "./logic/model/equip/EquipControl";
import { RareBookControl } from "./logic/model/rareBook/RareBookControl";
import { MailControl } from "./logic/model/mail/MailControl";
import { TaskControl } from "./logic/model/task/TaskControl";
import { PrestigeControl } from "./logic/model/prestige/PrestigeControl";
import { FriendControl } from "./logic/model/friends/FriendControl";
import { ChatControl } from "./logic/model/chat/ChatControl";
import { SoundUrl } from "./Common/script/EnumTypeMgr";
import { ActivityControl } from "./logic/model/activity/ActivityControl";
import { PayControl } from "./logic/model/pay/PayControl";
import { GameplayControl } from "./logic/model/jianghu/GameplayControl";
import { FengyunRankControl } from "./logic/model/fengyunRanking/FengyunRankControl";
import { LangMgr } from "./logic/mgr/LangMgr";
import { BattleMainEliteControl } from "./logic/model/home/battle/BattleMainEliteControl";


const { ccclass, property } = _decorator;

@ccclass('GameInit')
export class GameInit {

    private static _instance: GameInit;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new GameInit();
        }
        return this._instance;
    }

    isInit: boolean = false
    startGame() {
        if (this.isInit) {
            return
        }
        window["GlobelPlaySound"] = (name: string) => {
            PlaySound(SoundUrl.ClickEffect);
        }
        LangMgr.ins.init()
        this.isInit = true
        EngineCode.init()
        SceneMgr.ins.init()
        UIMgr.ins.init()
        Sound.ins

        this.initControl()
    }

    initControl() {
        RoleControl.ins.init()
        LoginControl.ins.init()
        FightMsgControl.ins.init()
        HeroControl.ins.init()
        ItemControl.ins.init()
        EquipControl.ins.init();
        RareBookControl.ins.init();
        MailControl.ins.init();
        TaskControl.ins.init();
        PrestigeControl.ins.init();
        FriendControl.ins.init();
        ChatControl.ins.init();
        ActivityControl.ins.init();
        PayControl.ins.init();
        GameplayControl.ins.init();
        FengyunRankControl.ins.init();
        BattleMainEliteControl.ins.init();
    }

}