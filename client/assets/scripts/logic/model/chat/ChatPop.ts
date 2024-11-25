import { _decorator, Component, EditBox, instantiate, Node, Prefab, ToggleComponent, ToggleContainer } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { ShowTips } from '../../mgr/UIMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ChatMessageInfo } from './ChatMessageInfo';
import { ChatData } from './ChatData';
import { RoleData } from '../role/RoleData';
import { Func } from '../../utils/Func';
import { ChatPlayerItem } from './ChatPlayerItem';
import { ChatControl } from './ChatControl';
import { ChatServerItem } from './ChatServerItem';
import SensitiveWordsManager from '../../utils/SensitiveWordsManager';
import { LangMgr } from '../../mgr/LangMgr';
import { AssociationData } from '../association/AssociationData';
import { tab } from '../../../Table/table_gen';
import { ChatAssociationItem } from './ChatAssociationItem';
const { ccclass, property } = _decorator;

/**
 * 
 * ChatView
 * zhudingchao
 * Thu Jun 13 2024 16:29:31 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/chat/ChatView.ts
 *
 */
export const ChatTextLabelWidth = 390
export const ChatTextSize = 20
@ccclass('ChatView')
export class ChatPop extends ViewPop {
    @property(InfiniteList)
    worldList: InfiniteList = null;
    @property(InfiniteList)
    systemList: InfiniteList = null;
    @property(InfiniteList)
    associationList: InfiniteList = null;
    @property(Node)
    worldNode: Node = null;
    @property(Node)
    systemNode: Node = null;
    @property(Node)
    associationNode: Node = null;
    @property(EditBox)
    worldEditbox: EditBox = null;

    @property(Prefab)
    selfPfb: Prefab = null

    @property(Prefab)
    otherPfb: Prefab = null

    @property(Prefab)
    serverPfb: Prefab = null

    @property(Prefab)
    guildPfb: Prefab = null
    @property(ToggleContainer)
    toggleContainer: ToggleContainer = null;

    @property(Node)
    node_guild_btn: Node = null;

    private channelType: proto.ChatChannelType = proto.ChatChannelType.World;
    private isInitWorldList = false;
    private isInitSystemList = false;
    private isInitAssociationList = false;
    private currMessageInfo: Array<ChatMessageInfo>;
    private scroll: InfiniteList;
    private channelId: number;
    private lastLen: number = 0;

    register(): void {
        EventMgr.onMsg(proto.Ptl.SendChatMessageRsp, this.on_s2c_SendChatMessageRsp, this);
        EventMgr.onMsg(proto.Ptl.ChatMessagePush, this.on_s2c_Msg_ChatMessagePush, this);
    }
    onShow(): void {
        if (this.openData) {
            this.channelType = this.openData["channelType"];
        }
        if (this.channelType != proto.ChatChannelType.World) {
            this.toggleContainer.toggleItems[this.channelType].isChecked = true;
        }
        this.node_guild_btn.active = AssociationData.ins.getInGuild();
        this.initView();


    }
    initView() {
        if (this.channelType == proto.ChatChannelType.World) {
            this.initWorldView();
        } else if (this.channelType == proto.ChatChannelType.System) {
            this.initSystemView();
        } else if (this.channelType == proto.ChatChannelType.Guild) {
            this.initAssociationView();
        }
    }
    initAssociationView() {
        this.associationNode.active = true;
        this.worldNode.active = false;
        this.systemNode.active = false;
        this.worldEditbox.node.active = true;
        this.channelId = ChatData.ins.getChanneIdByType(this.channelType);
        this.currMessageInfo = ChatData.ins.getMessageInfosByType(this.channelType);
        this.lastLen = this.currMessageInfo.length;

        if (!this.isInitAssociationList) {
            this.associationList.Init({
                getCellNumber: this.GetCellNumber.bind(this),
                getCellSize: this.GetCellSize.bind(this),
                getCellIdentifer: this.GetCellIdentifer.bind(this),
                getCellView: this.GetCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
            this.isInitAssociationList = true;
        }
        this.scroll = this.associationList;
        this.scroll.Reload(true);
        if (this.currMessageInfo.length != 0) {
            this.scheduleOnce(() => {
                this.reloadScrollToBottom();
            })
        }
    }
    initWorldView() {
        this.worldNode.active = true;
        this.systemNode.active = false;
        this.associationNode.active = false;
        this.worldEditbox.node.active = true;
        this.channelId = ChatData.ins.getChanneIdByType(this.channelType);
        this.currMessageInfo = ChatData.ins.getMessageInfosByType(this.channelType);
        this.lastLen = this.currMessageInfo.length;
        if (!this.isInitWorldList) {
            this.worldList.Init({
                getCellNumber: this.GetCellNumber.bind(this),
                getCellSize: this.GetCellSize.bind(this),
                getCellIdentifer: this.GetCellIdentifer.bind(this),
                getCellView: this.GetCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
            this.isInitWorldList = true;
        }
        this.scroll = this.worldList;
        this.scroll.Reload(true);
        if (this.currMessageInfo.length != 0) {
            this.scheduleOnce(() => {
                this.reloadScrollToBottom();
            })
        }

    }
    initSystemView() {
        this.worldNode.active = false;
        this.systemNode.active = true;
        this.associationNode.active = false;
        this.channelId = ChatData.ins.getChanneIdByType(this.channelType);
        this.currMessageInfo = ChatData.ins.getMessageInfosByType(this.channelType);
        this.lastLen = this.currMessageInfo.length;
        if (!this.isInitSystemList) {
            this.systemList.Init({
                getCellNumber: this.GetCellNumber.bind(this),
                getCellSize: this.GetCellSizeSys.bind(this),
                getCellIdentifer: this.GetCellIdentifer.bind(this),
                getCellView: this.GetCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
            this.isInitSystemList = true;
        }


        this.scroll = this.systemList;
        this.scroll.Reload(true);
        if (this.currMessageInfo.length != 0) {
            this.scheduleOnce(() => {
                this.reloadScrollToBottom();
            })
        }
    }

    reloadScrollToBottom() {
        let nowList = this.currMessageInfo;
        this.setAllRead()
        if (nowList.length >= 10) {//从0-n可能太多， 就只滑动最后3个
            this.scroll.stopAutoScroll()
            this.scroll.ScrollToCell(nowList.length - 4, 0)
            this.setScrollToCell(nowList.length - 1)
        } else {
            this.setScrollToCell(nowList.length - 1)
        }
    }

    setAllRead() {
        let nowList = this.currMessageInfo;
        for (let index = 0; index < nowList.length; index++) {
            const v = nowList[index];
            // v.isReaded = true
        }
        // this.checkRead()
    }

    setScrollToCell(idx: number) {
        if (this.scroll.isAutoScrolling()) {
            this.scroll.stopAutoScroll()
        }
        this.setAllRead()
        this.scroll.ScrollToCell(idx - 1)
    }




    GetCellNumber(): number {
        return this.currMessageInfo.length
    }

    GetCellSize(idx: number): number {
        let chat = this.currMessageInfo[idx]
        if (chat) {
            if (chat["zhLen"] == null) {
                chat["zhLen"] = Func.getStrZhLen(chat.normal)
            }

            return Math.floor(chat["zhLen"] * ChatTextSize / ChatTextLabelWidth) * 30 + 95
        } else {
            return 120;
        }
    }
    GetCellSizeSys(idx: number): number {
        let chat = this.currMessageInfo[idx]
        if (chat) {
            if (chat["zhLen"] == null) {
                chat["zhLen"] = Func.getStrZhLen(chat.normal)
            }

            return Math.floor(chat["zhLen"] * ChatTextSize / ChatTextLabelWidth) * 20 + 50
        } else {
            return 120;
        }
    }
    GetCellIdentifer(idx: number): string {
        if (this.channelType == proto.ChatChannelType.System) {
            return "ChatServerItem";
        } else {
            let chat = this.currMessageInfo[idx]
            if (chat.clientCustomNotice&&(chat.clientCustomNotice.noticeType === tab.ChatBreviaryType.ChatBreviaryType_GuildGiftBargain || chat.clientCustomNotice.noticeType === tab.ChatBreviaryType.ChatBreviaryType_GuildGiftLow)) {
                return "ChatAssociationItem";
            }
            if (chat && chat.sender.roleId == RoleData.ins.id) {
                return "ChatPlayerItem";
            }
            return "ChatOtherItem";
        }

    }

    GetCellView(idx: number, identifier: string): InfiniteCell {
        switch (identifier) {
            case "ChatPlayerItem":
                return instantiate(this.selfPfb).getComponent(ChatPlayerItem);
            case "ChatOtherItem":
                return instantiate(this.otherPfb).getComponent(ChatPlayerItem);
            case "ChatServerItem":
                return instantiate(this.serverPfb).getComponent(ChatServerItem);
            case "ChatAssociationItem":
                return instantiate(this.guildPfb).getComponent(ChatAssociationItem);
        }
        return null;
    }

    GetCellData(idx: number) {
        return this.currMessageInfo[idx];
    }

    onClickToggle(event, type) {
        type = Number(type);
        if (this.channelType != type) {
            this.channelType = type;
            if (this.channelType == proto.ChatChannelType.System) {
                this.initSystemView();
            } else if (this.channelType == proto.ChatChannelType.World) {
                this.initWorldView();
            } else if (this.channelType == proto.ChatChannelType.Guild) {
                this.initAssociationView();
            }
        }

    }
    onClickSend() {
        var str = this.worldEditbox.string.replace(/(^\s*)|(\s*$)/g, "")
        if (str == "") {
            //ShowTips("请输入聊天内容")
            ShowTips(LangMgr.getLab("Tips_chat_1"))
            return
        }
        if (!SensitiveWordsManager.ins.check(str)) {
            ShowTips(LangMgr.getLab("CommonErrorCode_4"));
            return
        }

        ChatControl.ins.requestSendChatMessage(this.channelId, str);
        // let chat = new proto.ChatMessage()
        // chat.type = ChatType.text
        // chat.normal = new proto.ChatMessageNormal({ content: str })

        // if (ChatCtrl.ins.sendChat(this.selectId, chat)) {
        //     this.editBox.string = ""
        //     this.checkCd()
        // }
    }
    on_s2c_SendChatMessageRsp(msg: proto.Msg_SendChatMessageRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.worldEditbox.string = "";
        }else if (msg.error.code == proto.CommonErrorCode.SensitiveWords){
            this.worldEditbox.string = "";
        }else if (msg.error.code == proto.CommonErrorCode.ChatMsgNotShow){
            this.worldEditbox.string = "";
            let pushMsg = new proto.Msg_ChatMessagePush()
            pushMsg.message = msg.message
            this.on_s2c_Msg_ChatMessagePush(pushMsg)
        }

    }
    on_s2c_Msg_ChatMessagePush(msg: proto.Msg_ChatMessagePush) {
        if (Number(msg.message.channelId) == Number(this.channelId)) {
            this.currMessageInfo = ChatData.ins.getMessageInfosByType(this.channelType);
            this.scroll.Reload(true);
            if (this.lastLen == 0) {
                this.lastLen = this.currMessageInfo.length;
            }
            let isBottom = false
            let posRange = this.scroll._getActiveCellIndexRange()
            if (this.lastLen - posRange.y <= 2) {
                isBottom = true;
            }
            this.lastLen = this.currMessageInfo.length;
            if (isBottom) {
                this.scheduleOnce(() => {
                    this.reloadScrollToBottom();
                })
            }

        }

    }
}