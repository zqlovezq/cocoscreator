import { _decorator, Component, EventTouch, Label, log, Node, Sprite, Toggle } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { BattleMainDataControl } from './BattleMainDataControl';
const { ccclass, property } = _decorator;

@ccclass('BattleMainItem')
export class BattleMainItem extends InfiniteCell {
    @property(Label)
    lbl_name:Label = null;
    @property(Node)
    node_stage:Node = null;
    @property(Node)
    node_bar:Node = null;
    @property(Sprite)
    sp_lock_icon:Sprite = null;
    @property(Sprite)
    sp_icon:Sprite = null;
    @property(Node)
    node_active:Node = null;
    @property(Sprite)
    sp_select_unLock:Sprite = null;
    @property(Sprite)
    sp_select_lock:Sprite = null;
    @property(Node)
    node_info:Node = null;
    public ClickStage:number = 0;
    private _chapterData:tab.MainChapterTable = null;
    private touchCallBack: Function;
    private _selfData:any = null;
    private stageIds = [];
    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onButtonTouchCancel, this);
        this.node.on(Node.EventType.TOUCH_START, this.onButtonTouchStart, this);
    }
    onButtonTouchStart(event: EventTouch) {
        // 阻止 ScrollView 的触摸事件
        event.propagationStopped = true;
    }
    setTouchCallBack(callBack: Function) {
        this.touchCallBack = callBack;
    }
    onButtonTouchCancel(event: EventTouch) {
        // 阻止 ScrollView 的触摸事件
        event.propagationStopped = true;
    }
    private onTouchItem(e: EventTouch) {
        console.log("cocos TOUCH_END this.dataIndex=",this.dataIndex);
        EventMgr.emitLocal(LocalEvent.Level_Item_Select, [this.dataIndex]);
    }
    UpdateContent(info: any): void {
        this._selfData = info.ins;
        let data = info.index;
        this.node_stage.parent.active = false;
        this.sp_select_lock.node.active = false;
        this.sp_select_unLock.node.active = false;
        const curFightStageId = this._selfData.getCurFightStageId()
        this._chapterData = tab.getData().MainChapterTableById.getValue(data+1);
        
        this.stageIds = null;
        if(this._selfData.stageInfo){
            this.stageIds = this._chapterData.StageIds
        }else{
            this.stageIds = this._chapterData.EliteStageIds
        }

        this.sp_select_unLock.setTexture(this._chapterData.IconSelect);
        this.sp_select_lock.setTexture(this._chapterData.IconSelect);
        // 获取当前的章节
        this.ClickStage = this.stageIds[0];
        // 章节名称
        this.lbl_name.string = LangMgr.getLab(this._chapterData.Name);
        // 章节图片
        this.sp_lock_icon.setTexture(this._chapterData.Icon);
        this.sp_icon.setTexture(this._chapterData.Icon);
        let islock = this._selfData.getStageIsLock(this._chapterData.Id);
        this.node_active.active = !islock;
        if(!islock){
            const levelCount = this.stageIds.length;
            for(let i=0;i<5;i++){
                const stageNode = this.node_stage.getChildByName("Toggle"+(i+1));
                const stageId =  this.stageIds[i];
                stageNode.active = i<levelCount;
                stageNode.getComponent(Toggle).isChecked = curFightStageId==stageId;
                if(curFightStageId==stageId){
                    this.ClickStage = curFightStageId;
                }
                if(i>=1){
                    const bar = this.node_bar.getChildByName("bar_"+(i+1));
                    bar.active = i<levelCount;
    
                    let lockMark = stageNode.getChildByName("lockmark");
                    lockMark.active = curFightStageId<stageId;
                }
            }
        }
    }
    clickSwitchStage(event: EventTouch, stage: string){
        /* 判断当前是否解锁 如果未解锁返回 */
        const curFightStageId = this._selfData.getCurFightStageId()
        const levelStage = Number(stage);
        if(this.stageIds[levelStage]&&curFightStageId<this.stageIds[levelStage]){
            this.scheduleOnce(()=>{
                const idx = this.stageIds.indexOf(this.ClickStage);
                const stageNode =this.node_stage.getChildByName("Toggle"+(idx+1));
                stageNode.getComponent(Toggle).isChecked = true;
            })
            return;
        }
        this.ClickStage = this.stageIds[levelStage];
    }
    setSelect(isSelect:boolean){
        this.sp_select_lock.node.active = isSelect;
        this.sp_select_unLock.node.active = isSelect;
        let islock = this._selfData.getStageIsLock(this._chapterData.Id);
        if(!islock){
            this.node_stage.parent.active = isSelect;
            this.node_stage.active = isSelect;
            this.node_bar.active = isSelect;
        }
    }
}


