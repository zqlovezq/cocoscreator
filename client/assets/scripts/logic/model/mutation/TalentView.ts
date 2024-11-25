import { _decorator, Component, instantiate, Node, NodeEventType, Prefab, ScrollView, UITransform, Vec2, Vec3 } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { tab } from '../../../Table/table_gen';
import { TalentItem } from './TalentItem';
import { TalentViewSpecialItem } from './TalentViewSpecialItem';
import { TalentMiniTipsPop } from './TalentMiniTipsPop';
import { TalentBigTipsPop } from './TalentBigTipsPop';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { RoleData } from '../role/RoleData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { GuideController } from '../../guide/GuideController';
import { LocalEvent } from '../../define/LocalEvent';
import { UIMgr } from '../../mgr/UIMgr';
import { MutationView } from './MutationView';
const { ccclass, property } = _decorator;
export interface TalentData {
    small: tab.GeneLevelTable,
    big: tab.GeneLevelTable
}
@ccclass('TalentView')
export class TalentView extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Prefab)
    pfb_start_item: Prefab = null;

    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Node)
    node_big_tips: Node = null;
    @property(Node)
    node_small_tips: Node = null;
    private _lineHeroCount = 3;
    private _list = [];
    private _canClose:boolean = true;
    onShow(): void {
        this._list = this.groupList();
        this.list_view.getContent().getComponent(UITransform).setAnchorPoint(0, 0.5);
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellWidth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
        const smallLevel = RoleData.ins.gene.smallGeneLevel;
        const idex = Math.floor(smallLevel / 3)
        const pos = this.list_view.GetScrollPosOfCell(idex);

        const maxWidth = this.list_view.getContent().getComponent(UITransform).width-1500;
        let max_x = pos.x>maxWidth?maxWidth:pos.x;
        this.list_view.setContentPos(-max_x, -max_x,0);

        this.list_view.node.on("scroll-began", () => {
            this.node_big_tips.active = false;
            this.node_small_tips.active = false;
        }, this);
        let _scrollView = this.list_view.getComponent(ScrollView);
        _scrollView.node.on(NodeEventType.TOUCH_START, this._onTouchStar, this, true);
    }
    _onTouchStar() {
        this.node_big_tips.active = false;
        this.node_small_tips.active = false;
    }
    getCellCount() {
        return this._list.length;
    }
    getCellWidth(idx: number) {
        if(idx===0){
            return 136.85
        }
        if(idx==this._list.length-1){
            return 268+80
        }
        return 268;
    }
    getCellIdentifer(idx: number) {
        if (idx === 0) {
            return "TalentViewSpecialItem"
        }
        return "TalentItem";
    }
    getCellView(idx: number, identifer: string) {
        let cell = null;
        switch (identifer) {
            case "TalentItem":
                cell = instantiate(this.pfb_item).getComponent(TalentItem);
                break;
            case "TalentViewSpecialItem":
                cell = instantiate(this.pfb_start_item).getComponent(TalentViewSpecialItem);
                break;
        }
        return cell;
    }
    GetCellData(idx: number) {
        return {
            view: this,
            data: this._list[idx]
        };
    }
    /* 将英雄数据分组 */
    groupList() {
        const result = [];
        const list = [];
        for (let i = 0; i < tab.getData().GeneLevelTable.length; i++) {
            const _geneTab = tab.getData().GeneLevelTable[i];
            let obj: TalentData = {
                small: null,
                big: null
            }
            if (_geneTab.Type == tab.GeneType.GeneType_SmallGene) {
                obj.small = _geneTab;
                list.push(obj)
            } else {
                let level = _geneTab.UnlockArgs;
                let _obj = list[level - 1];
                _obj.big = _geneTab;
            }
        }
        /* 3个一节 分组 */
        for (let i = 0; i < list.length; i += this._lineHeroCount) {
            result.push(list.slice(i, i + this._lineHeroCount));
        }
        return [null].concat(result);
    }
    register(): void {
        // 监听基因升级
        EventMgr.onMsg(proto.Ptl.UpgradeGeneLevelRsp, this.on_s2c_UpgradeGeneLevelRsp, this)
    }
    on_s2c_UpgradeGeneLevelRsp(msg: proto.Msg_UpgradeGeneLevelRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this._canClose = false;
        let self = this;
        if (msg.type === tab.GeneType.GeneType_SmallGene) {
            let content = this.list_view.getContent();
            let item = content.getChildByName(String(Math.floor(RoleData.ins.gene.smallGeneLevel/3)+1))
            let itemTs = item.getComponent(TalentItem);
            itemTs.talentItemSmallAction(()=>{
                RoleData.ins.gene.smallGeneLevel = msg.level;
                self.list_view.Refresh();
                RedMgr.refreshEvent(RedDotType.HeroGene);
                this._canClose = true;
            })
        } else {
            RoleData.ins.gene.bigGeneLevel = msg.level;
            this.list_view.Refresh();
            RedMgr.refreshEvent(RedDotType.HeroGene);
            this._canClose = true;
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    showBigTips(target: Node, data: tab.GeneLevelTable) {
        let ts = this.node_big_tips.getComponent(TalentBigTipsPop);
        ts.setData(data);
        const worldPos = target.parent.getComponent(UITransform).convertToWorldSpaceAR(target.position);
        const viewPos = this.list_view.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        this.node_big_tips.setPosition(new Vec3(viewPos.x - 640, viewPos.y + 200, 0))
    }
    showSmallTips(target: Node, data: tab.GeneLevelTable) {
        let ts = this.node_small_tips.getComponent(TalentMiniTipsPop);
        ts.setData(data);
        const scrollViewMidX = this.list_view.node.getComponent(UITransform).width / 2;
        const worldPos = target.parent.getComponent(UITransform).convertToWorldSpaceAR(target.position);
        const viewPos = this.list_view.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        const distanceToCenter = viewPos.x - scrollViewMidX;
        if (distanceToCenter > 0) {
            // 在屏幕右侧
            this.node_small_tips.setPosition(new Vec3(viewPos.x - 740, viewPos.y, 0))
        } else {
            // 在屏幕左侧
            this.node_small_tips.setPosition(new Vec3(viewPos.x - 540, viewPos.y, 0))
        }
    }
    clickMove(){
        let content = this.list_view.getContent();
        let item = content.getChildByName(String(Math.ceil(RoleData.ins.gene.smallGeneLevel/3)))
        let itemTs = item.getComponent(TalentItem);
        itemTs.talentItemSmallAction(()=>{
            
        })
    }
    onClose(): void {
        if(this._canClose){
            super.onClose();
        }
    }
}


