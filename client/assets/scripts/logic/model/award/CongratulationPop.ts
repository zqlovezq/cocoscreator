import { _decorator, instantiate, Node, Prefab, ScrollView, tween, Vec2, Vec3 } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { CongratulationItem } from './CongratulationItem';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { GuideController } from '../../guide/GuideController';
const { ccclass, property } = _decorator;

@ccclass('CongratulationPop')
export class CongratulationPop extends ViewPop {
    @property(Node)
    node_content: Node = null; /*  */
    @property(Prefab)
    pfb_item:Node = null;
    @property(ScrollView)
    scroll_view:ScrollView = null;
    private mClosedCallBack: Function = null;
    private _awardrMap: Map<number, number> = new Map()
    private _rewards: proto.Item[] = [];
    private _list = [];
    private _lineHeroCount: number = 6;
    private _itemCount:number = 0;
    register(): void {

    }
    onShow() {
        this._rewards = [];
        for(let i=0;i<this.openData.length;i++){
            if(this.openData[i].itemId&&this.openData[i].num){
                this._rewards.push(this.openData[i]);
            }
        }
        this._rewards.sort((item1,item2)=>{
            let itemTab1 = tab.getData().ItemTableById.getValue(item1.itemId);
            let itemTab2 = tab.getData().ItemTableById.getValue(item2.itemId);
            return itemTab2.Sort - itemTab1.Sort;
        });
        this._list = this.getRewardList();
        if(this._list.length>2){
            this.node_content.setPosition(new Vec3(0,this.node_content.getPosition().y+75,0))
        }
        this.initData();
    }
    async initData() {
        this._awardrMap.clear();
        this.node_content.destroyAllChildren();
        const num = this._list.length;
        this._itemCount = 0;
        this.createItem(this._itemCount)
        if(num>1){
            this.schedule(this.popAnim,1.5,num-2)
        }
    }
    popAnim(){
        this._itemCount++;
        const posY = this.node_content.getPosition().y;
        tween(this.node_content).to(0.5,{position:new Vec3(this.node_content.getPosition().x,posY+150,0)}).start();
        this.createItem(this._itemCount);
    }
    createItem(count:number){
        const item = instantiate(this.pfb_item);
        item.parent = this.node_content;
        const itemTs = item.getComponent(CongratulationItem);
        itemTs.setData(this._list[count]);
    }
    setCloseCallBack(closeFunc: Function) {
        this.mClosedCallBack = closeFunc;
    }
    protected onDisable(): void {
        this.unschedule(this.popAnim);
    }
    onDestroy() {
        super.onDestroy();
        if(GuideController.ins.isGuiding()){
            EventMgr.emitLocal(LocalEvent.hidePop);
        }
        if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
        }
    }
    /* 将数据6个分组 */
    getRewardList() {
        const result = [];
        for (let i = 0; i < this._rewards.length; i += this._lineHeroCount) {
            result.push(this._rewards.slice(i, i + this._lineHeroCount));
        }
        return result;
    }
}

