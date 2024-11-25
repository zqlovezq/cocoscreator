import { _decorator, Color, Component, EventTouch, Label, Node, ProgressBar, Sprite, tween, Vec3 } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { Func } from '../../utils/Func';
import { tab } from '../../../Table/table_gen';
import { TalentView } from './TalentView';
import { RoleData } from '../role/RoleData';
import { ItemData } from '../item/ItemData';
const { ccclass, property } = _decorator;

@ccclass('TalentItem')
export class TalentItem extends InfiniteCell {
    @property(Label)
    lbl_lv: Label = null;
    @property(Sprite)
    sp_mini_1: Sprite = null;
    @property(Sprite)
    sp_mini_2: Sprite = null;
    @property(Sprite)
    sp_mini_3: Sprite = null;
    @property(Sprite)
    sp_big: Sprite = null;
    @property(ProgressBar)
    bar_progress: ProgressBar = null;
    @property(ProgressBar)
    bar_big_progress: ProgressBar = null;
    @property(Sprite)
    sp_line: Sprite = null;
    private _itemData = null;
    private _view: TalentView = null;
    private _big_data: tab.GeneLevelTable = null;
    UpdateContent(data: any): void {
        // console.log(data);
        this._view = data.view;
        this._itemData = data.data;
        const smallLevel = RoleData.ins.gene.smallGeneLevel;
        const bigLevel = 10000 + RoleData.ins.gene.bigGeneLevel;
        const playerLv = RoleData.ins.level;
        Func.cocosNodeZIndex(this.node, this._itemData[0].small.Id);
        this.lbl_lv.string = String(this._itemData[0].small.UnlockArgs);
        this.sp_big.node.getChildByName("lvup_node").active = false;
        this.sp_big.node.active = false;
        this.sp_line.node.active = false;
        if (this._itemData[2].small.Id <= smallLevel) {
            this.bar_progress.progress = 1
        }
        if (this._itemData[0].small.Id > smallLevel) {
            this.bar_progress.progress = 0
        }
        if (RoleData.ins.gene.bigGeneLevel) {
            const bigTab = tab.getData().GeneLevelTableById.getValue(bigLevel);
            const bigNeedSmalllevel = bigTab.UnlockArgs;
            if (this._itemData[2].small.Id < bigNeedSmalllevel) {
                this.bar_big_progress.progress = 1;
            }
            if (this._itemData[0].small.Id > bigNeedSmalllevel) {
                this.bar_big_progress.progress = 0;
            }
            for (let k = 0; k < this._itemData.length; k++) {
                const geneData = this._itemData[k]
                const small: tab.GeneLevelTable = geneData.small;
                if (small.Id === bigNeedSmalllevel) {
                    const _smallBtn = this["sp_mini_" + (k + 1)];
                    const smallX = _smallBtn.node.getPosition().x;
                    this.bar_big_progress.progress = smallX / 268;
                }
            }
        } else {
            this.bar_big_progress.progress = 0;
        }
        for (let i = 0; i < this._itemData.length; i++) {
            const geneData = this._itemData[i]
            const small: tab.GeneLevelTable = geneData.small;
            const smallBtn = this["sp_mini_" + (i + 1)]
            const iconPath = small.Id <= smallLevel ? small.EnableIcon : small.DisableIcon;
            smallBtn.setTexture(iconPath);

            // 判断当前是否可以升级
            const needSmallGeneRes = small.MaterialCountList[0];
            const haveSmallCount = ItemData.ins.getCount(small.MaterialIdList[0]);
            if (i === 0) {
                if (small.UnlockArgs === (playerLv+1)) {
                    this.sp_line.node.active = true;
                    this.sp_line.color = new Color().fromHEX("#ffb300")
                    this.sp_line.node.setPosition(new Vec3(0, this.sp_line.node.getPosition().y, 0));
                }
            }
            if (small.Id == smallLevel + 1 && playerLv >= small.UnlockArgs) {
                const smallX = smallBtn.node.getPosition().x;
                this.sp_line.node.active = true;
                this.sp_line.color = new Color().fromHEX("#00FCFF")
                this.sp_line.node.setPosition(new Vec3(smallX, this.sp_line.node.getPosition().y, 0));
                this.bar_progress.progress = smallX / 268
                smallBtn.node.getChildByName("lvup").active = haveSmallCount >= needSmallGeneRes
            } else {
                smallBtn.node.getChildByName("lvup").active = false;
            }
            if (geneData.big) {
                this._big_data = geneData.big;
                // const equipSkillTab = tab.getData().EquipSkillTableById.getValue(this._big_data.AttrValue);
                this.sp_big.node.active = true;
                const posX = smallBtn.node.getPosition().x;
                const posY = this.sp_big.node.getPosition().y;
                this.sp_big.node.setPosition(new Vec3(posX, posY, 0));
                const iconPath = this._big_data.Id <= bigLevel ? this._big_data.EnableIcon : this._big_data.DisableIcon;
                this.sp_big.setTexture(iconPath);
                const needBigGeneRes = this._big_data.MaterialCountList[0];
                const haveBigCount = ItemData.ins.getCount(this._big_data.MaterialIdList[0]);
                if (haveBigCount >= needBigGeneRes && this._big_data.Id == bigLevel + 1 && smallLevel >= this._big_data.UnlockArgs) {
                    this.sp_big.node.getChildByName("lvup_node").active = true;
                }
            }
        }
    }
    clickSmallBtn(event: EventTouch, idx: string) {
        const data = this._itemData[idx].small;
        this._view.showSmallTips(event.target, data);
    }
    clickBigBtn(event: EventTouch, idx: string) {
        this._view.showBigTips(event.target, this._big_data);
    }
    /* 做一个动画 this.sp_line往前移动一个单位 this.bar_progress移动一个单位*/
    talentItemSmallAction(callback: Function) {
        const smallLevel = RoleData.ins.gene.smallGeneLevel;
        let idx = 0;
        for (let k = 0; k < this._itemData.length; k++) {
            const geneData = this._itemData[k]
            const small: tab.GeneLevelTable = geneData.small;
            if (small.Id === smallLevel + 1) {
                idx = k;
                break;
            }
        }
        let next = idx + 1;
        let smallX = 0;
        if (next > 2) {
            smallX = 268;
        } else {
            const smallBtn = this["sp_mini_" + (next + 1)];
            smallX = smallBtn.node.getPosition().x;
        }

        tween(this.bar_progress)
            .to(0.5, { progress: smallX / 268 })
            .call(()=>{
                callback();
            })
            .start()
        tween(this.sp_line.node.position)
            .to(0.5,new Vec3(smallX,this.sp_line.node.getPosition().y,0),{
                onUpdate : (target:Vec3, ratio:number)=>{
                    this.sp_line.node.position = target;
                }
            })
            .start()
    }
}


