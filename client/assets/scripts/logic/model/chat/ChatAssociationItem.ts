import { _decorator, Component, Node, NodeEventType, RichText, UITransform } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { ChatMessageInfo } from './ChatMessageInfo';
import { Func } from '../../utils/Func';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
import { AssociationData } from '../association/AssociationData';
const { ccclass, property } = _decorator;

@ccclass('ChatAssociationItem')
export class ChatAssociationItem extends InfiniteCell {
    @property(UITransform)
    chatLayout: UITransform = null;
    @property(RichText)
    richText: RichText = null;
    private _data: ChatMessageInfo = null;
    UpdateContent(data: ChatMessageInfo): void {
        // this.node.on(NodeEventType.TOUCH_START, this.onClickBtn, this);
        this._data = data;
        if (!data["ZH_width"]) {
            data["ZH_width"] = Func.getStrZhWidth(data.normal) * 24 + 30;
        }
        if (data["ZH_width"] < 480) {
            this.chatLayout.width = data["ZH_width"];
        } else {
            this.chatLayout.width = 480;
        }
        this.richText.string = data.clientCustomNotice.content;

    }
    onClickBtn() {
        if (AssociationData.ins.getBargainGift() && this._data.clientCustomNotice) {
            const chatBreviaryTable = tab.getData().ChatBreviaryTableByType.getValue(this._data.clientCustomNotice.noticeType);
            const JumpUI = chatBreviaryTable.JumpUI;
            UIMgr.ins.jumpLayer(JumpUI);
        }
    }
}


