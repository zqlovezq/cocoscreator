import { _decorator, Component, Label, Node } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { Func } from '../../../utils/Func';
const { ccclass, property } = _decorator;

@ccclass('ChapterGiftItem')
export class ChapterGiftItem extends Component {
    @property(Label)
    lbl_name:Label = null;
    @property(Node)
    node_red:Node = null;
    private _mallId:number = 0;
    initData(mallId:number,chapterId:number) { 
        this._mallId = mallId;
        const chapterData = tab.getData().MainChapterTableById.getValue(chapterId);
        this.lbl_name.string = LangMgr.getLab(chapterData.Name);
        this.node_red.active = !Boolean(Func.getItem("chapter_gift_"+this._mallId));
    }
    // 点击toggle
    clickItem(){
        this.node_red.active = false;
        EventMgr.emitLocal(LocalEvent.Chapter_Gift_Change, this._mallId);
    }
}


