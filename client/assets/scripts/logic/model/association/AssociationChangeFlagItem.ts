import { _decorator, Component, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { AssociationData } from './AssociationData';
const { ccclass, property } = _decorator;

@ccclass('AssociationChangeFlagItem')
export class AssociationChangeFlagItem extends Component {
    @property(Sprite)
    sp_flag: Sprite = null;
    @property(Node)
    node_select: Node = null;
    private selectCb: Function = null;
    initData(flagId: number) {
        const flagData = tab.getData().GuildFlagTableById.getValue(flagId)
        this.sp_flag.setTexture(flagData.IconUrl)
    }
    setSelectCb(cb:Function){
        this.selectCb = cb;
    }
    onClickSelect() {
        if (this.selectCb) {
            this.selectCb();
        }
    }
    onSelect() {
        this.node_select.active = true;
    }
    unSelect() {
        this.node_select.active = false;
    }
}


