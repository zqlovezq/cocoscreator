import { _decorator, Component, Label, Node } from 'cc';
import { proto } from 'client_protocol';
import { LangMgr } from '../../mgr/LangMgr';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { formatTimestamp } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('AssociationLogItem')
export class AssociationLogItem extends InfiniteCell {
    @property(Label)
    lbl_log: Label = null;
    @property(Label)
    lbl_time: Label = null;
    UpdateContent(data:proto.IGuildLog) {
        this.lbl_log.string = LangMgr.getCombineString("Tips_associationinfo_"+data.event,[data.roleName]);
        this.lbl_time.string = formatTimestamp(data.time);
    }
}


