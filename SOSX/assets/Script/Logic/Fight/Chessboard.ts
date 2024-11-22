/**
 *  棋盘类
 */

import { proto } from "../../Protocol/client_protocol";
import ChessFightScene from "./ChessFightScene";
import FightMsgManager from "./FightMsgManager";
import Tower from "./Tower";

const { ccclass, property } = cc._decorator;

export const TotalRows    = 8; /* 总行数 */
export const TotalColumns = 8; /* 总列数 */

/* 格子信息 */
interface GridInfo {
    row         : number;   /*  */
    column      : number;   /*  */
    pos         ?: cc.Vec2; /*  */
    worldPos    ?: cc.Vec2; /*  */
    playerTag   ?: number;  /*  */
}

@ccclass
export default class Chessboard extends cc.Component {
    @property([cc.Node])
    gridsNode: cc.Node[] = []; /*  */

    gridMatrix: GridInfo[][]; /*  */
    towerMatrix: Tower[][]; /*  */

    @property(cc.Node)
    ground: cc.Node = null; /*  */

    @property(cc.Node)
    bulletNode: cc.Node = null; /*  */

    @property(cc.Node)
    effectNode: cc.Node = null; /*  */

    @property(cc.Node)
    undergroundNode: cc.Node = null; /*  */

    @property(cc.Node)
    atkRange: cc.Node = null; /*  */

    @property(cc.Node)
    skillRange: cc.Node = null; /*  */

    @property(cc.Node)
    damageNode:cc.Node = null //飘字层级

    protected reverse   = false; /*  */
    protected gridWidth : number = 70; /*  */
    protected gridHeight: number = 70; /*  */
    protected fight     : ChessFightScene; /*  */

    /*  */
    onLoad() {
        
    }

    /*  */
    init(reverse: boolean, fight: ChessFightScene) {
        this.fight = fight;
        this.reverse = reverse;
        this.towerMatrix = new Array(TotalRows).fill(null).map(() => new Array(TotalColumns).fill(null));
        this.gridMatrix  = new Array(TotalRows).fill(null).map(() => new Array(TotalColumns).fill(null));

        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tag: number;
                if ((Math.floor(i / 2) % 2) == (Math.floor(j / 2) % 2)) {
                    tag = 0;
                } else {
                    tag = 1;
                }

                let idx = i * TotalColumns + j;
                if(reverse) {
                    idx = (TotalRows - 1 - i) * TotalColumns + j;//翻转
                }
                let worldPos = this.gridsNode[idx].convertToWorldSpaceAR(cc.Vec2.ZERO);
                let pos = this.node.convertToNodeSpaceAR(worldPos);
                this.gridMatrix[i][j] = {
                    row: i, column: j, pos: pos, worldPos: worldPos, playerTag: tag
                }
            }
        }

        this.gridWidth = this.gridsNode[0].width;
        this.gridHeight = this.gridsNode[0].height;
    }

    /*  */
    getGridByWorldPos(pos: cc.Vec2): GridInfo {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let grid = this.gridMatrix[i][j];
                let rect = cc.rect(grid.worldPos.x - this.gridWidth / 2
                    , grid.worldPos.y - this.gridHeight / 2
                    , this.gridWidth
                    , this.gridHeight);
                if (rect.contains(pos)) {
                    return grid;
                }
            }
        }
        return null;
    }

    /* 建塔 */
    buildTower(cardId: number, level: number, instanceId: number, row: number, col: number
        , playerTag: number, maxHp: number,cardLv:number): Tower | undefined {
        if (this.gridMatrix[row][col].playerTag != playerTag) {
            return;
        }

        let oldTower = this.towerMatrix[row][col]
        if (oldTower) {
            if (oldTower.InstanceId == instanceId) {
                oldTower.hideHpBar();
                return oldTower;
            }
            //删除旧塔
            oldTower.node.destroy();
            this.towerMatrix[row][col] = null;
        }

        let tower = Tower.create(cardId, level, instanceId, maxHp, playerTag, this.fight, row, col,cardLv);
        this.ground.addChild(tower.node);

        let grid = this.gridMatrix[row][col];
        tower.node.setPosition(grid.pos);
        tower.node.zIndex = -grid.pos.y;

        this.towerMatrix[row][col] = tower;
        return tower;
    }

    /* 换塔 */
    rebuildTower(tower:Tower, data: proto.ICombatEventTransform) {
        let row = tower.row, col = tower.column
        let instanceID = tower.InstanceId
        let playerTag = tower.PlayerTag
        let level = tower.Level, cardLv = tower.cardLv
        // 先将塔删除
        this.deleteTower(row, col)
        // 使用新卡牌ID重新建塔
        let newTower = this.buildTower(data.cardID, level, instanceID, row, col, playerTag, data.maxHp, cardLv)
        // 将已有效果移动到新塔内
        newTower.inheritEffects(tower)
    }

    /*  */
    deleteTower(row: number, col: number) {
        let tower = this.towerMatrix[row][col];
        if (tower) {
            tower.node.destroy();
            this.towerMatrix[row][col] = null;
        }
    }

    /*  */
    deleteTowerV2(tower: Tower) {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                if (this.towerMatrix[i][j] == tower) {
                    // this.towerMatrix[i][j] = null;
                    this.towerMatrix[i][j].isDie = true;
                    break;
                }
            }
        }
        // tower.node.destroy();
    }

    /*  */
    resetTower(towersData: proto.IFightTowerData[]) {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                this.deleteTower(i, j)
            }
        }
        
        for (let data of towersData) {
            let tower = this.buildTower(data.cardID, data.towerLv, data.instanceID, data.row, data.column
                , data.playerTag, data.maxHp,data.cardLv);
            if (tower) {
                tower.reset();
            }
        }
    }

    //敌方塔设置颜色
    setEnemyTowerColor(color: cc.Color) {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.towerMatrix[i][j];
                if (tower && (tower.PlayerTag != FightMsgManager.Instance.PlayerTag)) {
                    tower.setColor(color);
                }
            }
        }
    }

    //显示所有塔的血条
    setAllHpBarActive(active: boolean) {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.towerMatrix[i][j];
                if (tower) {
                    if (active) {
                        tower.showHpBar();
                    } else {
                        tower.hideHpBar();
                    }
                }
            }
        }
    }

    /*  */
    clearAllTowers() {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                this.deleteTower(i, j);
            }
        }
    }

    /*  */
    showSkillRange(row:number, col:number, range:number) {
        // this.hideRange();
        
        let grid = this.gridMatrix[row][col];
        if(!grid) {
            return;
        }
        this.skillRange.active = true;
        this.skillRange.setPosition(grid.pos);
        // this.skillRange.setScale(range * 2 + 1.4)
        let cellSize = 82;
        let cellInterval = 15;
        this.skillRange.setContentSize(cc.size(cellSize*(range*2+1)+cellInterval*range,cellSize*(range*2+1)+cellInterval*range));
    }

    /*  */
    showAttackRange(row:number, col:number, range:number) {
        // this.hideRange();

        let grid = this.gridMatrix[row][col];
        if(!grid) {
            return;
        }
        this.atkRange.active = true;
        this.atkRange.setPosition(grid.pos);
        // this.atkRange.setScale(range * 2 + 1.4)
        let cellSize = 82;
        let cellInterval = 15;
        this.atkRange.setContentSize(cc.size(cellSize*(range*2+1)+cellInterval*range,cellSize*(range*2+1)+cellInterval*range));
    }

    /*  */
    hideRange() {
        this.skillRange.active = false;
        this.atkRange.active = false;
    }

    /* 检查棋盘上是否还有特效在播放 */
    IsPlayingnAttackEffect() : boolean {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.towerMatrix[i][j]
                if (tower && tower.GetEffectCount() > 0) {
                    return true
                }
            }
        }
        return false
    }

    // 移除棋盘上所有塔的Buffer
    removeAllBuffer() {
        for (let i = 0; i < TotalRows; i++) {
            for (let j = 0; j < TotalColumns; j++) {
                let tower = this.towerMatrix[i][j];
                if (tower) {
                    tower.ClearBuff()
                }
            }
        }
    }
}