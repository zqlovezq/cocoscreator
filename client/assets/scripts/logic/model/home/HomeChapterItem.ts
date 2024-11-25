import { _decorator, Component, Label, Node } from 'cc';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { ItemData } from '../item/ItemData';
const { ccclass, property } = _decorator;

/**
 * 主界面章节信息item
 */
@ccclass('HomeChapterItem')
export class HomeChapterItem extends Component {
    @property(Label)
    chapterLab:Label=null;
    @property(Label)
    chapterNameLab:Label=null;
    @property(Label)
    maxLiveTimerLab:Label=null;
    @property(Label)
    reviveNum:Label=null;
    protected onLoad(): void {
        EventMgr.onLocal(LocalEvent.Item_Update,this.updateReviveNum,this)
    }
    start() {
        this.initView();
    }
    initView(){

    }
    /**
     * 刷新复活币数量
     */
    updateReviveNum(itemIds){
        let id=0;
        if(itemIds.indexOf(id)>-1){
            let num=ItemData.ins.getByItemId(id);
            this.reviveNum.string=num+"";
        }
    }
    protected onDestroy(): void {
        EventMgr.unTarget(this);
    }

  
}


