import { _decorator, Component, EventTouch, game, Label, Node, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { RoleData } from '../RoleData';
import Sound, { PlaySound } from '../../../utils/Sound';
import { Func } from '../../../utils/Func';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { SoundUrl } from '../../../../Common/script/EnumTypeMgr';
import { ResMgr } from '../../../mgr/ResMgr';
import { SettingsManager } from '../SettingsManager';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Global } from '../../../../Global';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
const { ccclass, property } = _decorator;

@ccclass('RoleInfoPop')
export class RoleInfoPop extends ViewPop {
    @property(Label)
    lbl_nickname: Label = null;
    @property(Label)
    lbl_id: Label = null;
    @property(Toggle)
    toggle_bgm: Toggle = null;
    @property(Toggle)
    toggle_effect: Toggle = null;
    @property(Toggle)
    toggle_shock: Toggle = null;
    @property(Toggle)
    toggle_damage: Toggle = null;
    @property(Label)
    lbl_lv: Label = null;

    @property(Node)
    mgrBtn: Node = null;
    @property(Node)
    service_btn: Node = null
    
    

    @property(Node)
    redeemcodeNode: Node = null
    protected onLoad(): void {
        super.onLoad()
        this.redeemcodeNode.active = !Global.isReview
        this.service_btn.active =  this.mgrBtn.active = ChannelMgr.isJp37
    }
    onShow(): void {
        this.setStaticView();
    }
    setStaticView() {
        // 名字
        this.lbl_nickname.string = RoleData.ins.name;
        // id
        this.lbl_id.string = RoleData.ins.id;

        // this.toggle_bgm.isChecked = Sound.ins.isEnableBGM();

        // this.toggle_effect.isChecked = Sound.ins.isEnableSE();
        this.toggle_bgm.isChecked = SettingsManager.ins.getSetting("bgm_flag");
        this.toggle_effect.isChecked = SettingsManager.ins.getSetting("se_flag");
        this.toggle_shock.isChecked = SettingsManager.ins.getSetting("isAutoCollect");
        this.toggle_damage.isChecked = SettingsManager.ins.getSetting("damage_flag");
        this.lbl_lv.string = String(RoleData.ins.level);
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    on_s2c_ChangeRoleName(msg: proto.Msg_ChangeRoleNameRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.hideView("RoleInfoChangeNamePop");
            this.lbl_nickname.string = msg.name;
        }
    }
    register(): void {
        /* 监听名字修改 */
        EventMgr.onMsg(proto.Ptl.ChangeRoleNameRsp, this.on_s2c_ChangeRoleName, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    onClickToggle(event: EventTouch, key: string) {
        const toggle = event.target.getComponent(Toggle);
        SettingsManager.ins.setSetting(key, toggle.isChecked);
        switch (key) {
            case "bgm_flag":
                this.onCheckBgm(toggle.isChecked);
                break;
            case "se_flag":
                this.onChecEffect(toggle.isChecked);
                break
            case "isAutoCollect":
                this.onCheckAutoCollect(toggle.isChecked);
                break
            case "damage_flag":
                this.onCheckDamage(toggle.isChecked);
                break
            default:
                break
        }
    }
    /* 点击复制id */
    /* 关闭开启背景音乐 */
    onCheckBgm(enabled: boolean) {
        Sound.ins.EnableBGM(enabled);
        if (enabled) {
            console.log('Music enabled');
            PlaySound(SoundUrl.MainBGM);
        } else {
            console.log('Music disabled');
        }
    }
    onChecEffect(enabled: boolean) {
        Sound.ins.EnableSE(enabled);
        if (enabled) {
            console.log('Sound effects enabled');
            // 启用音效
        } else {
            console.log('Sound effects disabled');
            // 禁用音效
        }
    }
    onCheckAutoCollect(enabled: boolean) {
        if (enabled) {
            console.log('shock effects enabled');
            // 启用震动
        } else {
            console.log('Sound effects disabled');
            // 禁用震动
        }
    }
    onCheckDamage(enabled: boolean) {
        if (enabled) {
            console.log('Damage enabled');
            // 启用伤害字体
        } else {
            console.log('Damage disabled');
            // 禁用伤害字体
        }
    }
    onClickCopy() {
        Func.copyText(RoleData.ins.id)
    }
    /* 点击更改姓名 */
    onClickChangeName() {
        ResMgr.printCache()
        UIMgr.ins.show({ viewName: ViewName.RoleInfoChangeNamePop })
    }
    onClickRedeemcode() {
        console.log("wwwww")
        UIMgr.ins.show({ viewName: ViewName.RoleInfoRedemptionCodePop })
    }
    onClickChangeAccount() {
        ChannelMgr.logout("", () => {
            console.log("重启游戏代码")
            game.restart()
        });
    }
    onClickUpgradeAccount() {
        ChannelMgr.accountUpgrade();
    }
    /* 点击更换头像 */
    onClickHeadChange() {
        UIMgr.ins.show({ viewName: ViewName.RoleInfoDecorationsPop })
    }

    onClickMgr() {
        ChannelMgr.accountCenter({})
    }
    onClickService() {
        ChannelMgr.openCustomService()
    }

}


