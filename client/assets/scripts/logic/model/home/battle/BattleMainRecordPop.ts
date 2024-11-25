import { _decorator, Component, instantiate, js, Label, Node, Prefab, ProgressBar, Toggle, ToggleContainer, tween, Vec3 } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { FightRoleTeam } from '../../../fight/view/common/FightRoleTeam';
import { FightWeaponTeam } from '../../../fight/view/common/FightWeaponTeam';
import { FightHeroInfo } from '../../../fight/data/FightHeroInfo';
import { HeroFightInfo } from '../../../fight/data/HeroFightInfo';
import { Func } from '../../../utils/Func';
import { HeroRoadItem } from '../../activity/heroRoad/HeroRoadItem';
import { PlayerHeadItem } from '../../common/PlayerHeadItem';
import { SimpleRoleInfo } from '../../friends/SimpleRoleInfo';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { GameUtil } from '../../../utils/GameUtil';

const { ccclass, property } = _decorator;
@ccclass('BattleMainRecordPop')
export class BattleMainRecordPop extends ViewPop {
    @property(ToggleContainer)
    toggleContainer: ToggleContainer = null

    @property(Node)
    info_node: Node = null

    @property(PlayerHeadItem)
    headItem: PlayerHeadItem = null

    @property(Label)
    name_txt: Label = null
    @property(Label)
    power_txt: Label = null

    @property(Label)
    gate_txt: Label = null



    @property(FightRoleTeam)
    fightTeam: FightRoleTeam = null
    @property(FightWeaponTeam)
    fightWeapon: FightWeaponTeam = null
    @property(Node)
    fightDamageBarNodes: Node = null


    @property(Node)
    no_node: Node = null


    msg: proto.Msg_GetMainStageCleardRecordsRsp



    register(): void {

    }
    onShow(): void {
        this.msg = this.openData
        this.msg.top3Records.sort((a, b) => {
            return (a.role && a.role.powerScore) - (b.role && b.role.powerScore)
        })

        this.gate_txt.string = LangMgr.getLab(tab.getData().PveStageTableByStageId.getValue(this.msg.stageId).StageName)
        this.onSelect(0)
    }

    onToggle(dd: Toggle) {
        for (let index = 0; index < this.toggleContainer.toggleItems.length; index++) {
            const v = this.toggleContainer.toggleItems[index];
            if (v == dd) {
                this.onSelect(index)
            }
        }
    }

    onSelect(index: number) {
        console.log(index)
        if (index == 0) {
            this.updateRole(this.msg.firstRecord)
        } else {
            this.updateRole(this.msg.top3Records[index - 1])
        }
    }

    updateRole(role: proto.IMainStageCleardRecord) {
        console.log(role)
        if (role == null || role.role == null) {
            this.info_node.active = false
            this.no_node.active = true
            return
        }
        this.info_node.active = true
        this.no_node.active = false

        const playerInfo = new SimpleRoleInfo();
        playerInfo.merge(role.role);

        this.headItem.initHeadInfo({ roleInfo: playerInfo });

        this.name_txt.string = role.role.name
        this.power_txt.string = GameUtil.convertNumber(role.role.powerScore) 

        let totalDamage = 0
        let heros = []
        for (let index = 0; index < role.heroes.length; index++) {
            const v = role.heroes[index];
            totalDamage += v.damage

            let hero = new HeroFightInfo()
            hero.intoIndex = index + 1
            hero.itemId = v.heroItemId
            hero.level = v.level

            hero.star = (Func.forBy(role.role.heroes, "itemId", hero.itemId) as proto.SimpleHero).star
            heros.push(hero)
        }

        for (let i = 0; i < this.fightDamageBarNodes.children.length; i++) {
            const v = this.fightDamageBarNodes.children[i];
            let damage = role.heroes[i].damage || 0
            v.getChildByName("damage_bar").getComponent(ProgressBar).progress = Math.floor(damage * 100 / totalDamage) / 100
            v.getChildByName("percent_txt").getComponent(Label).string = js.formatStr("%s%", Math.floor(damage * 100 / totalDamage).toString())
        }


        this.fightTeam.setHeros(heros, true)
        this.fightWeapon.setRogueIds(role.weaponIds)
    }

}


