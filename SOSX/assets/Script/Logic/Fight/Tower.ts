/**
 *  棋子
 */


import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import Effect from "../Common/Effect";
import { kNegativeOneNumber } from "../Common/CommonInterface";

import { AnimationDirection, AnimationType, getAnimationDirection } from "./Config";
import { getRes, LoadResAsync, calcAttrValue } from "../Utils/GameUtils";

import HpBar from "./HpBar";
import TransformTimer from "./TransformTimer";
import FightMsgManager from "./FightMsgManager";
import ChessFightScene from "./ChessFightScene";

const { ccclass } = cc._decorator;

const HpNumPosY = 55;
const HpBarPosY = 45;
const FADE_OUT_TIME = 0.3;

/*  */
export interface ITowerGroundColorBuffer {
    index: number;
    bVisible: boolean;
    bBottom: boolean;
};

/*  */
class TowerBuffer {
    id: number /*  */
    eff: Effect /*  */
    val: any // 附加效果
}

@ccclass
export default class Tower extends cc.Component {
    protected avatar: cc.Sprite = null; /* zhibo+@20230330 TODO: 需要改成一个图片 */
    protected up: cc.Sprite = null;
    protected m_fTimePastSinceLastAttack: number = 0;
    protected cardId: number = 0; //卡牌表id
    protected cardTable: tab.CardTable = null;
    public InstanceId: number = 0; //在战斗实例中的塔id
    public row: number = 0; // 在棋盘中的横坐标
    public column: number = 0; // 在棋盘中的纵坐标
    protected level: number = 1; //合成等级
    public maxHp: number = 0;
    public hp: number = 0;
    public cardLv: number = 0;
    public shield: number = 0;
    public isDie: boolean = true;
    public lblCompound: cc.Label = null; /*  */
    public lblCompoundMax: cc.Sprite = null; /*  */
    protected lblSameCount: cc.Label = null; /*  */
    protected sameCount: number = 0; /*  */
    public PlayerTag: number; /*  */
    protected fight: ChessFightScene; /*  */
    protected hpBar: HpBar = null; /*  */
    protected hpBarActive: boolean = false; /*  */

    protected bulletAttachNode: cc.Node = null; /*  */
    // protected bulletOffset: cc.Vec2 = cc.Vec2.ZERO; /*  */
    //protected bulletDuration: number = 0; /*  */
    public finnalAtkDuration: number = 0; //加上buff的攻击时间间隔

    protected testGraphics: cc.Graphics = null;

    protected directions: AnimationDirection[] = [AnimationDirection.LEFT, AnimationDirection.MAX]//朝向
    protected currentDirection: AnimationDirection = AnimationDirection.MAX; /*  */
    protected currentAnimType: AnimationType; /*  */

    //protected buffMap: Map<number, Effect>;
    protected buffList: TowerBuffer[]; /*  */

    protected transformTime: TransformTimer = null; /*  */
    protected transformCountdown: number = 0; /*  */
    protected transformTotal: number = 0; /*  */

    public isBottom: boolean = false; /*  */
    public isSniping: boolean = false; /*  */

    private _tower_ground_index: number = kNegativeOneNumber; /*  */

    private appearEffect: Effect /*  */
    private permanentEffect: Effect /*  */

    private _bTransformAnotherAvata: boolean = false; //是否变换成另一种形态

    public nextTower: Tower = null; // 当前位置的重叠棋子
    private effectCounter: number = 0; // 目标为自身的特效计数器
    private serverTowerDead: boolean = false; // 服务器端塔已经死亡

    private attackRangeExtra: number = 0; // 攻击范围修正
    private multipleBuff: Map<number, number> = new Map<number, number>();
    /*  */
    public static create(cardId: number, level: number, instanceId: number, maxHp: number, playerTag: number, fight: ChessFightScene, row: number, column: number, cardLv: number) {
        let node = new cc.Node;
        let instace = node.addComponent(Tower);
        instace.fight = fight;
        instace.init(cardId, level, instanceId, maxHp, playerTag, row, column, cardLv);
        instace.isDie = false;
        return instace;
    }

    // 获得正在播放的特效数量
    public GetEffectCount() {
        return this.effectCounter
    }

    // 获得攻击范围修正值
    public GetAttackRangeExtra() {
        return this.attackRangeExtra
    }

    /*  */
    public setTowerGroundIndex(idx: number) {
        this._tower_ground_index = idx;
    }

    /*  */
    public getTowerGroundIndex() {
        return this._tower_ground_index;
    }
    public get CardLv() {
        return this.cardLv
    }
    /*  */
    public get CardId() {
        return this.cardId;
    }

    /*  */
    public get Level() {
        return this.level;
    }

    /*  */
    public get Avatar() {
        return this.avatar
    }

    /*  */
    public get Table(): tab.CardTable {
        return this.cardTable
    }

    /*  */
    public set TransformAnotherAvata(btran: boolean) {
        if (this.cardId == 14100) {
            console.log("设置改变的变量: " + btran)
        }
        this._bTransformAnotherAvata = btran
    }
    /*  */
    onDestroy() {
        if (this.avatar) {
            // PutToSpinePool(this.cardTable.SpineID, this.avatar)
            this.avatar = null;
        }
        if (this.appearEffect && cc.isValid(this.appearEffect.node)) {
            this.appearEffect.node.destroy()
            this.appearEffect = undefined
        }
        if (this.lblCompound && cc.isValid(this.lblCompound.node)) {
            this.lblCompound.node.destroy()
            this.lblCompound = undefined;
        }
        if (this.lblCompoundMax && cc.isValid(this.lblCompoundMax.node)) {
            this.lblCompoundMax.node.destroy()
            this.lblCompoundMax = undefined;
        }
    }
    /*  */
    public async init(cardId: number, level: number, instanceId: number, maxHp: number, playerTag: number, row: number, column: number, cardLv: number) {
        this.cardId = cardId;
        this.cardLv = cardLv;
        this.level = level
        this.InstanceId = instanceId;
        this.row = row;
        this.column = column;
        this.nextTower = null;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.PlayerTag = playerTag;
        //this.buffMap = new Map<number, Effect>();
        this.buffList = []
        let towerTab: tab.CardTable = tab.Data.CardTableByID.getValue(cardId);
        if (!towerTab) {
            throw `cannot find CardTable by id ${cardId}`;
        }

        this.cardTable = towerTab;
        // this.bulletOffset.x = towerTab.BulletX;
        // this.bulletOffset.y = towerTab.BulletY;
        //this.bulletDuration = towerTab.BulletDuration;
        let data = tab.Data.ItemTableByID.getValue(cardId);
        if (data) {
            let chessBg = ""
            //let data = FightMsgManager.Instance.myFightData
            if (playerTag == FightMsgManager.Instance.PlayerTag) {
                chessBg = data.ChessBgBlue;
            } else {
                chessBg = data.ChessBgRed;
            }
            let sf: cc.SpriteFrame = getRes(data.Icon, cc.SpriteFrame);
            let chessBgFrame: cc.SpriteFrame = getRes(chessBg, cc.SpriteFrame);
            let arrow: cc.SpriteFrame = getRes("Chess/UI/CardDetail/arrowUp", cc.SpriteFrame);
            if (sf) {
                this.avatar = new cc.Node().addComponent(cc.Sprite);
                this.avatar.node.anchorY = 0;
                this.avatar.spriteFrame = chessBgFrame;
                this.avatar.sizeMode = cc.Sprite.SizeMode.RAW
                this.avatar.trim = false;
                this.avatar.node.x = 0;
                this.avatar.node.y = -34;
                this.avatar.node.scale = 92 / 150;
                this.node.addChild(this.avatar.node);

                let icon = new cc.Node().addComponent(cc.Sprite);
                icon.node.anchorY = 0;
                icon.spriteFrame = sf;
                icon.sizeMode = cc.Sprite.SizeMode.RAW
                icon.trim = false;
                icon.node.y = 0;
                icon.node.name = "head"
                icon.node.scale = 0.8;
                this.avatar.node.addChild(icon.node);

                let up = new cc.Node().addComponent(cc.Sprite);
                up.spriteFrame = arrow;
                up.node.y = 100;
                up.node.x = 50;
                up.node.name = "arrow"
                up.node.active = false;
                this.avatar.node.addChild(up.node);
                if (cardId === 43001) {
                    // 猎魔人
                    let buffIcon = this.createBuffTierNode(cardId)
                    buffIcon.name = "hunter_node"
                } else if (cardId === 42004) {
                    // 强筋鱼人
                    let buffIcon = this.createBuffTierNode(cardId)
                    buffIcon.name = "fishman_node"
                }
            }
        }
        ///* zhibo-E@20230330 for <修改Spine为Sprite> */

        if (!this.lblCompound) {
            this.lblCompound = new cc.Node().addComponent(cc.Label);
            this.lblCompound.cacheMode = cc.Label.CacheMode.CHAR;
            this.node.addChild(this.lblCompound.node);

            this.lblCompound.node.zIndex = 999;
            this.lblCompound.node.x = 7;//32;
            this.lblCompound.node.y = -28;//25;
            this.lblCompound.fontSize = 26
            this.lblCompound.lineHeight = 26
            let outline = this.lblCompound.node.addComponent(cc.LabelOutline)
            outline.color = cc.Color.BLACK;
            outline.width = 2;
        }
        this.setCompoundLv(this.level)

        //常驻特效
        if (this.cardTable.PermanentEffect > 0) {
            this.permanentEffect = Effect.create(this.cardTable.PermanentEffect)
            this.node.addChild(this.permanentEffect.node)
        }

        //血条
        LoadResAsync('prefab/HpBar', cc.Prefab).then(asset => {
            if (cc.isValid(this.node)) {
                let barNode: cc.Node = cc.instantiate(asset);
                barNode.zIndex = 2;
                this.node.addChild(barNode);
                barNode.y = HpBarPosY;
                barNode.active = false;
                this.hpBar = barNode.getComponent(HpBar);
                //TODO: 设置血条颜色
                this.hpBar.setBarIndex((playerTag == FightMsgManager.Instance.PlayerTag) ? 0 : 1)
            }
        });
    }

    //创建buff层数阶段
    public createBuffTierNode(cardId:number) {
        let buffNode = new cc.Node()
        buffNode.y = 80;
        buffNode.x = -30;
        buffNode.active = false
        this.avatar.node.addChild(buffNode);

        let buffSpr = new cc.Node().addComponent(cc.Sprite)
        buffSpr.setTexture("Chess/Fight/buff_bg/buff_bg_" + cardId.toString())
        buffNode.addChild(buffSpr.node,0,"spr")
        buffSpr.node.scale = 1.5

        let label = new cc.Node().addComponent(cc.Label);
        label.node.y = -2
        label.fontSize = 32;
        label.lineHeight = 0;
        label.node.color = new cc.Color().fromHEX("#FFFFFF");
        label.enableBold = true;
        buffNode.addChild(label.node,1,"label");

        let outline = label.node.addComponent(cc.LabelOutline)
        outline.width = 3
        outline.color = new cc.Color().fromHEX("#000000")

        return buffNode
    }



    public showUp() {
        if (cc.isValid(this.avatar) && cc.isValid(this.avatar.node)) {
            this.avatar.node.getChildByName("arrow").active = true;
        }
    }
    public hideUp() {
        if (cc.isValid(this.avatar) && cc.isValid(this.avatar.node)) {
            this.avatar.node.getChildByName("arrow").active = false;
        }
    }
    /*  */
    isAlive() {
        if (!this.node.isValid) {
            return false;
        }
        if (this.isDie) {
            return false
        }
        return this.hp > 0;
    }

    /*  */
    reset() {
        this.hp = this.maxHp;
        this.node.opacity = 255;
        this.isDie = false;
        this.ClearBuff();
    }
    /* 复活Tower */
    reviveTower(data: proto.ICombatEventRevive) {
        this.node.stopAllActions();
        this.hp = data.hp;
        this.shield = data.shield;
        this.isDie = false;
        this.serverTowerDead = false;
        this.node.opacity = 255;
        this.changeShield(this.shield);
        //this.ClearBuff();
    }
    /*  */
    changeHp(hp: number, isCritical = false, isInstantKill = false, shieldReduce: number = 0) {
        // if (hp == 0) {
        //     return
        // }
        // if (!this.isAlive()) {
        //     return;
        // }

        this.hp += hp
        //if (this.hp <= 0) {
        // cc.log(`tower die: ${this.InstanceId}, ${this.hp}`);
        //this.hp = 0;
        //this.die();
        //} else if (this.hp > this.maxHp) {
        //    this.hp = this.maxHp;
        //}
        if (this.shield) {
            this.changeShield(this.shield - shieldReduce);
        } else {
            this.showHpBar();
        }
        if (hp <= 0) {
            this.showDamageNum(-hp + shieldReduce, isCritical, isInstantKill)
        } else {
            this.showCureNum(hp, isCritical)
        }
    }
    changeShield(shield: number) {
        this.shield = shield;
        this.showHpBar(shield);
    }

    /*  */
    die(isDead: boolean = false) {
        if (isDead) { this.serverTowerDead = isDead; }
        if (!this.serverTowerDead) { return }
        if (this.effectCounter > 0) { return }
        if (!cc.isValid(this.node)) { return }

        /* tower死亡 */
        this.isDie = true;
        // 如果强筋鱼人死亡 刷新所有鱼人的buff层数
        if (this.CardId === 42004) {
            this.fight.showFishManBuff();
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.TowerDie);
        this.node.stopAllActions();
        if (this.node.active) {
            this.node.runAction(cc.fadeOut(FADE_OUT_TIME));
        }
    }

    incEffectCount(inc: number) {
        this.effectCounter += inc
        this.die()
    }

    /*  */
    showHpBar(shield = 0) {
        this.hpBarActive = true;
        if (!this.hpBar || !cc.isValid(this.hpBar.node)) {
            return;
        }

        if (!this.hpBar.node.active) {
            if (!this.fight.getIsConstructionPhase()) {
                this.hpBar.node.active = true;
            }
        }

        let current = this.hp;
        let max = this.maxHp;
        if (shield) {
            this.hpBar.showShieldBar(shield, current, max);
        } else {
            this.hpBar.shield_bar.node.opacity = 0;
            this.hpBar.progress = current / max;
        }
    }

    /*  */
    hideHpBar() {
        this.hpBarActive = false;
        if (!this.hpBar || !cc.isValid(this.hpBar.node)) {
            return;
        }
        this.hpBar.node.active = false;
    }

    /*  */
    showCureNum(cureHp: number, isCritical: boolean) {
        let damageNode = new cc.Node()
        let lbl = new cc.Node().addComponent(cc.Label);
        // lbl.font = FightInstance.defaultFont;
        lbl.fontSize = 26
        lbl.lineHeight = 26
        lbl.cacheMode = cc.Label.CacheMode.CHAR;
        lbl.string = cureHp.toString()
        lbl.node.y = HpNumPosY;
        lbl.node.scale = 1
        lbl.font = getRes("font/zhiliao", cc.Font);
        // let outline = lbl.node.addComponent(cc.LabelOutline)
        // outline.color = new cc.Color(129, 125, 125);
        // outline.width = 2;

        // lbl.node.color = new cc.Color(88, 243, 45)

        let stayDuration = 0.2
        if (isCritical) {
            //是暴击
            //lbl.node.color = new cc.Color(235, 169, 82)
            stayDuration = 0.6
            lbl.node.y += 5

            lbl.node.scale = 3
            lbl.node.runAction(cc.sequence(
                cc.spawn(cc.fadeIn(0.21), cc.scaleTo(0.21, 0.75)),
                cc.scaleTo(0.09, 1.75),
                cc.scaleTo(0.13, 1),
                cc.scaleTo(0.13, 1.5),
                cc.delayTime(0.22),
                cc.moveBy(0.13, 0, 21),
                cc.spawn(cc.fadeOut(0.08), cc.moveBy(0.08, 0, 18)),
                cc.callFunc(() => {
                    if (cc.isValid(damageNode)) {
                        damageNode.removeFromParent()
                        damageNode.destroy()
                    }
                })
            ))
        } else {
            lbl.node.y += 2
            lbl.node.runAction(cc.sequence(
                cc.scaleTo(0.07, 1.5),
                cc.delayTime(0.03),
                cc.scaleTo(0.07, 0.75),
                cc.delayTime(0.03),
                cc.scaleTo(0.07, 1),
                cc.delayTime(0.11),
                cc.moveBy(0.13, 0, 21),
                cc.spawn(cc.fadeOut(0.08), cc.moveBy(0.08, 0, 18)),
                cc.callFunc(() => {
                    if (cc.isValid(damageNode)) {
                        damageNode.removeFromParent()
                        damageNode.destroy()
                    }
                })
            ))
        }

        damageNode.addChild(lbl.node)
        // this.node.addChild(damageNode, 3)
        this.addDamageNode(damageNode)
    }

    /* 显示伤害数字 TODO: zhibo+@20230403 for <以后这里需要对暴击做特殊处理,体现打击感> */
    showDamageNum(damage: number, isCritical: boolean, isInstantKill: boolean) {
        let damageNode = new cc.Node()
        let lbl = new cc.Node().addComponent(cc.Label);
        // lbl.font = FightInstance.defaultFont;
        lbl.fontSize = 26
        lbl.lineHeight = 26
        lbl.cacheMode = cc.Label.CacheMode.CHAR;
        lbl.string = isInstantKill ? " " : damage.toString()
        lbl.node.y = HpNumPosY;
        lbl.node.scale = 1
        // let outline = lbl.node.addComponent(cc.LabelOutline)
        // outline.color = new cc.Color(82, 78, 78);
        // outline.width = 3;

        let stayDuration = 0.2
        if (isCritical) { /* 暴击 */
            lbl.font = getRes("font/baoji", cc.Font);
            // lbl.node.color = new cc.Color(255, 225, 121)
            // outline.color = new cc.Color(168, 17, 71);
            // outline.width = 2;
            stayDuration = 0.6
            lbl.node.y += 12

            lbl.node.scale = 3
            lbl.node.runAction(cc.sequence(
                cc.scaleTo(0.15, 1.2),
                cc.delayTime(0.3),
                cc.spawn(cc.fadeOut(0.08), cc.moveBy(0.08, 0, 0)),
                cc.callFunc(() => {
                    if (cc.isValid(damageNode)) {
                        damageNode.removeFromParent()
                        damageNode.destroy()
                    }
                })
            ))

        } else if (isInstantKill) { /* 秒杀 */
            lbl.node.color = new cc.Color(238, 41, 41)
            // outline.color = new cc.Color(12, 54, 235);
            // outline.width = 1;
            stayDuration = 0.6
            lbl.node.y += 0

            lbl.node.scale = 0.5
            lbl.node.runAction(cc.sequence(
                cc.scaleTo(0.15, 1.2),
                cc.delayTime(0.3),
                cc.spawn(cc.fadeOut(0.1), cc.moveBy(0.08, 0, 0)),
                cc.callFunc(() => {
                    if (cc.isValid(damageNode)) {
                        damageNode.removeFromParent()
                        damageNode.destroy()
                    }
                })
            ))

        } else {
            lbl.font = getRes("font/pugong", cc.Font);
            // lbl.node.color = new cc.Color(240, 228, 221)
            lbl.node.y += 0.5
            lbl.node.runAction(cc.sequence(
                cc.delayTime(0.03),
                cc.delayTime(0.03),
                cc.moveBy(0.13, 0, 21),
                cc.spawn(cc.fadeOut(0.08), cc.moveBy(0.08, 0, 18)),
                cc.callFunc(() => {
                    if (cc.isValid(damageNode)) {
                        damageNode.removeFromParent()
                        damageNode.destroy()
                    }
                })
            ))
        }

        damageNode.addChild(lbl.node)
        // this.node.addChild(damageNode, 3)
        this.addDamageNode(damageNode)
    }

    addDamageNode(damageNode: cc.Node) {
        if (this.node && cc.isValid(this.node)) {
            damageNode.position = this.node.position
            this.fight.chessboard.damageNode.addChild(damageNode, 1)
        }
    }

    /* 设置合成等级 */
    async setCompoundLv(lv: number) {
        let maxLevel = 7;/* TODO: zhibo+@20230401 这里可能需要修改，后端应该已经处理掉了，这个7以后很有可能是根据走表来处理 */
        if (lv >= maxLevel) { /* 超过7级后，不再显示数字，而是显示星星 */
            lv = maxLevel;
            let sf = await LoadResAsync("Chess/UI/CardDetail/lv_star", cc.SpriteFrame);
            if (sf) {
                this.lblCompoundMax = new cc.Node().addComponent(cc.Sprite);
                this.lblCompoundMax.node.anchorY = 0;
                this.lblCompoundMax.spriteFrame = sf;
                //this.avatar.node.setPositionX()
                this.lblCompoundMax.node.zIndex = 999;
                this.lblCompoundMax.node.x = 0;
                this.lblCompoundMax.node.y = -34;
                this.lblCompoundMax.node.scale = 0.7;
                // this.lblCompoundMax.node.scale = 70 / 130;
                if (cc.isValid(this.node)) {
                    this.node.addChild(this.lblCompoundMax.node); /* TODO: Uncaught (in promise) TypeError: Cannot read properties of null (reading 'addChild') */
                    this.lblCompoundMax.node.active = true;  /* 星星 */
                    this.lblCompound.node.active = false; /* Label文字 */
                }
            }
        } else {
            this.level = lv;
            this.lblCompound.string = `${lv}`;
            this.lblCompound.node.active = true;
            // if(this.compoundLv) {
            //     this.compoundLv.setData(lv)
            // }
        }
    }

    /* 攻击敌人 */
    // AttackEnemy(skillID: number, damages: proto.IDamageData[]/*, buffs: proto.IBuffData[]*/) {
    //     // if (damages.length == 0) {
    //     //     return;
    //     // }
    //     let enemyNode = null
    //     if (damages.length != 0) {
    //         let enemyID = damages[0].enmeyId;
    //         let enemy = this.fight.getTowerByInstanceID(enemyID);
    //         if (!enemy) {
    //             cc.error(`onEvtAttack error: dstTower is null, enemyID=${enemyID}`);
    //             return;
    //         }
    //         enemyNode = enemy.node
    //         this.calculateDirection(enemy.node.getPosition());

    //         if(skillID){
    //             enemy.effectCounter +=1;
    //         }
    //     }
    //     let delay = this.bulletDuration / 1000
    //     this.fight.addBulletLater(delay, this, this.node.getPosition(), enemyNode, damages, skillID/*, buffs*/);
    // }

    // 恢复
    Cure(hp: number) {
        this.changeHp(hp, false)
    }
    // 护盾
    Shield(shield: number) {
        this.changeShield(shield);
    }
    /*  */
    calculateDirection(targetPos: cc.Vec2) {
        this.directions = getAnimationDirection(this.node.getPosition(), targetPos)
    }

    /*  */
    setAnimation(type: AnimationType, loop: boolean): number {
        if (!this.avatar) {
            return;
        }

        let result = this.getFixedAnimationName(type)
        if (result.name == "") {
            cc.error(`cannot find anim name by type ${type}`)
            return 0;
        }

        if (this.cardId == 14100) {
            console.log("设置最终的动画名称：" + result.name)
        }
        this.turnArround(result.reverse);
        this.currentDirection = result.direction;
        this.currentAnimType = type;
        return result.dt;
    }

    /*  */
    getAnimationName(type: AnimationType, direction: AnimationDirection): string {
        let baseName: string = ""
        switch (type) {
            case AnimationType.Attack:
                baseName = 'attack';
                break
            case AnimationType.Idle:
                baseName = 'idle';
                break
            case AnimationType.Transform:
                baseName = 'transform';
                break
            case AnimationType.Skill:
                baseName = 'skill';
                break
            default:
                console.log("can not finde animationtype" + type)
        }

        if (this._bTransformAnotherAvata && (type == AnimationType.Idle || type == AnimationType.Attack)) {  //如果变换成另外一种形象之后，攻击动作和idle动画都 会改变,这里统一的添加一个前缀
            baseName = "trans_" + baseName
        }

        if (direction != AnimationDirection.MAX) {
            // if(this.cardId == 14100) {
            //     console.log("动画名称：" + baseName + '_' + direction.toString())
            // }
            return baseName + '_' + direction.toString()
        }

        console.log("没找到动画名称：" + baseName)
        return baseName
    }

    /*  */
    getFixedAnimationName(type: AnimationType): { name: string, reverse: boolean, direction: AnimationDirection, dt: number } {
        if (!this.avatar) {
            return { name: "", reverse: false, direction: AnimationDirection.MAX, dt: 0 }
        }

        for (let direction of this.directions) {
            let needReverse = false
            if (direction == AnimationDirection.LEFT) {
                needReverse = true
                direction = AnimationDirection.RIGHT
            } else if (direction == AnimationDirection.LEFTTOP) {
                needReverse = true
                direction = AnimationDirection.RIGHTTOP;
            } else if (direction == AnimationDirection.LEFT_BOTTOM) {
                needReverse = true
                direction = AnimationDirection.RIGHTBOTTOM;
            }
        }
        return { name: "", reverse: false, direction: AnimationDirection.MAX, dt: 0 }
    }

    /*  */
    turnArround(turn: boolean) {
        if (!this.avatar) {
            return;
        }
        let turnArroundNode = this.avatar.node.parent
        if (!turnArroundNode) {
            return
        }
        if (this.cardTable.NoFlipX) {
            return;
        }

        if (turn) {
            if (turnArroundNode.scaleX > 0) {
                turnArroundNode.scaleX = -1;
            }
        } else {
            if (turnArroundNode.scaleX < 0) {
                turnArroundNode.scaleX = 1;
            }
        }
    }

    /*  */
    public setColor(color: cc.Color) {
        this.node.color = color;
        if (this.avatar) {
            this.avatar.node.getChildByName("head").color = color
        }
    }

    /*  */
    public AddBuff(buffID: number, index: number, layer?: number) {
        if (index < 0) {
            return
        }
        if (buffID === 4300120 && layer >= 0) {
            this.showHunterLabel(layer + 1);
        }
        let buff = this.buffList[index]
        if (buff != null) {
            if (buff.id == buffID) {
                return
            }
            if (buff.eff != null) {
                buff.eff.node.destroy()
            }
            this.buffList[index] = null
        }

        let buffData = tab.Data.BuffTableByID.getValue(buffID)
        if (!this.multipleBuff.get(buffData.EffectID)) {
            this.multipleBuff.set(buffData.EffectID, 0);
        }
        if (buffData) {
            let eff = null;
            if (buffData.EffectID != 0 && !this.multipleBuff.get(buffData.EffectID)) {
                eff = Effect.create(buffData.EffectID)
                this.node.addChild(eff.node)
            }
            this.multipleBuff.set(buffData.EffectID, this.multipleBuff.get(buffData.EffectID) + 1);
            this.buffList[index] = { id: buffID, eff: eff, val: null }
            this.AddBuffEffect(buffData, this.buffList[index])
        }
    }

    /*  */
    public RemoveBuff(index: number) {
        if (index < 0) {
            return
        }
        let buff = this.buffList[index]
        if (buff != null) {
            let buffData = tab.Data.BuffTableByID.getValue(buff.id);
            if (this.multipleBuff.get(buffData.EffectID)) {
                this.multipleBuff.set(buffData.EffectID, this.multipleBuff.get(buffData.EffectID) - 1);

            }
            if(this.multipleBuff.get(buffData.EffectID)<=0){
                if (buff.eff != null) {
                    buff.eff.node.destroy()
                }
                this.RemoveBuffEffect(buff)
            }
        }
        this.buffList[index] = null
    }

    // 添加Buffer额外效果
    private AddBuffEffect(buffData: tab.BuffTable, buff: TowerBuffer) {
        if (buffData == null || buff == null) { return }
        switch (buffData.Type) {
            case tab.BuffType.BuffType_Range:
                this.attackRangeExtra += calcAttrValue(this.cardLv, this.level, buffData.ValueType != tab.BuffValueType.BuffValueType_Fixed, buffData.Value)
                break
        }
    }

    // 移除Buffer额外效果
    private RemoveBuffEffect(buff: TowerBuffer) {
        let buffData = tab.Data.BuffTableByID.getValue(buff.id)
        if (buffData == null) { return }
        switch (buffData.Type) {
            case tab.BuffType.BuffType_Range:
                this.attackRangeExtra -= buff.val
                break
        }
    }

    // 显示猎魔人的层数
    private showHunterLabel(layer: number) {
        if (cc.isValid(this.avatar) && cc.isValid(this.avatar.node)) {
            let hunter_node = this.avatar.node.getChildByName("hunter_node");
            hunter_node.active = layer>0
            let lbl = hunter_node.getChildByName("label").getComponent(cc.Label);
            lbl.string = String(layer);
        }
    }
    // 显示鱼人层数
    public showFishManLabel(layer: number) {
        if (cc.isValid(this.avatar) && cc.isValid(this.avatar.node)) {
            let fishman_node = this.avatar.node.getChildByName("fishman_node");
            fishman_node.active = layer>0
            let lbl = fishman_node.getChildByName("label").getComponent(cc.Label);
            lbl.string = String(layer);
        }
    }
    // 重新设置建筑血量
    public SetHp(hp: number, maxHp: number) {
        this.hp = hp
        this.maxHp = maxHp
    }

    // public CheckBuff(validBuffIDs: number[]) {
    //     this.getInvalidBuff(validBuffIDs).forEach(buffID => {
    //         this.RemoveBuff(buffID)
    //     })
    // }

    // private getInvalidBuff(validBuffIDs: number[]) {
    //     let invalidBuffIDs = [];
    //     this.buffMap.forEach((effect, buffID) => {
    //         if (validBuffIDs.indexOf(buffID) < 0) {
    //             invalidBuffIDs.push(buffID);
    //         }
    //     })
    //     return invalidBuffIDs;
    // }

    /*  */
    public ClearBuff() {
        if (this.buffList && this.buffList.length > 0) {
            this.buffList.forEach((buff, _) => {
                if (buff && buff.eff && cc.isValid(buff.eff.node)) {
                    buff.eff.node.removeFromParent();
                    buff.eff.node.destroy();
                }
            })
            this.buffList = []
        }
    }

    /* 没人调用 */
    showDisappear(callback: Function) {
        // this.updateTowerGrideNodeColor(tab.FloorBufferColor.FloorBufferColor_White, "showDisappear()");
        if (this.avatar) {
            this.setAnimation(AnimationType.Idle, true);
            this.avatar.node.runAction(cc.sequence(
                cc.scaleBy(0.2, 1.5, 0.25),
                cc.scaleBy(0.1, 0.15, 4),
                cc.spawn(
                    cc.moveBy(0.1, 0, 150),
                    cc.sequence(cc.delayTime(0.05), cc.fadeOut(0.05))
                ),
                cc.callFunc(callback)
            ));
        }

        if (this.permanentEffect && cc.isValid(this.permanentEffect.node)) {
            this.permanentEffect.node.destroy()
            this.permanentEffect = undefined
        }
        // if(this.compoundLv && cc.isValid(this.compoundLv.node)) {
        //     this.compoundLv.node.destroy()
        //     this.compoundLv = undefined
        // }
        if (this.lblCompound && cc.isValid(this.lblCompound.node)) {
            this.lblCompound.node.destroy()
            this.lblCompound = undefined;
        }
    }

    /* 没人调用 */
    showAppear(dt: number) {
        if (this.avatar && dt > 0) {
            this.avatar.node.opacity = 0;
            this.avatar.node.runAction(cc.fadeIn(dt))
        }

        if (this.cardTable.AppearEffect > 0) {
            this.appearEffect = this.fight.addEffect(this.cardTable.AppearEffect, this.node.getPosition())
        }
    }

    /* 没人调用 */
    setCountdown(current: number, total: number) {
        //转换成秒
        this.transformCountdown = current / 1000;
        this.transformTotal = total / 1000;
        cc.log("%%%%%%%%%%%%%% setCountdown: " + current + " ---> " + total);
    }

    /* 没人调用 */
    public get AnimType() {
        return this.currentAnimType;
    }


    /* 攻击敌人 */
    onAttack(skillID: number, damages: proto.IDamageData[]) {
        if (skillID == 0) { return }

        //let delay = this.bulletDuration / 1000
        // if (delay > 0) {
        //     this.scheduleOnce(() => {
        //         this.fight.addBullet(this, this.node.getPosition(), damages, skillID)
        //     }, delay)
        // } else {
        this.fight.addBullet(this, this.node.getPosition(), damages, skillID)
        //}
    }

    /* 继承塔的所有效果 */
    inheritEffects(srcTower: Tower) {
        this.nextTower = srcTower.nextTower
        this.effectCounter = srcTower.effectCounter
        this.serverTowerDead = srcTower.serverTowerDead
        this.attackRangeExtra = srcTower.attackRangeExtra

        this.buffList = srcTower.buffList
        for (let i = 0; i < this.buffList.length; ++i) {
            let buf = this.buffList[i]
            if (buf != null && buf.eff != null) {
                buf.eff.node.parent = this.node
            }
        }
    }
}