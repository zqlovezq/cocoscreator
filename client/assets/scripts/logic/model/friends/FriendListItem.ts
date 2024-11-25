import { _decorator, Component, EditBox, Label, Node, Sprite, spriteAssembler } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { SimpleRoleInfo } from './SimpleRoleInfo';
import { proto } from 'client_protocol';
import { FriendControl } from './FriendControl';
import { ShowTips } from '../../mgr/UIMgr';
import { RoleData } from '../role/RoleData';
import { TimeUtil } from '../../utils/TimeUtil';
import { LangMgr } from '../../mgr/LangMgr';
import { GameUtil } from '../../utils/GameUtil';
import { FriendData } from './FriendData';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

/**
 * 
 * FriendListItem
 * zhudingchao
 * Fri Jun 07 2024 17:42:17 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/friends/FriendListItem.ts
 *
 */

@ccclass('FriendListItem')
export class FriendListItem extends InfiniteCell {
    @property(PlayerHeadItem)
    headItem: PlayerHeadItem = null;
    @property(Label)
    forceLab: Label = null;
    @property(Node)
    myFriendNode: Node = null;
    @property(Node)
    applicationNode: Node = null;
    @property(Node)
    addNode: Node = null;
    @property(Node)
    blacklistNode: Node = null;
    @property(Label)
    nameLab: Label = null;
    @property(Label)
    titleLab: Label = null;
    @property(Node)
    titleNode: Node = null;
    @property(Node)
    onLineNode: Node = null;
    @property(Node)
    offlineNode: Node = null;
    @property(Label)
    offlineTimeLab: Label = null;
    @property(Sprite)
    getValueSpr: Sprite = null;
    @property(Sprite)
    sendValueSpr: Sprite = null;
    @property(Sprite)
    addBtnSpr: Sprite = null;
    private type: number;
    private info: SimpleRoleInfo;



    register(): void {

    }
    UpdateContent(data: any): void {
        if (data) {
            this.type = data["type"];
            this.info = data["info"];
            this.initView();
        }
    }
    initView() {
        this.nameLab.string = this.info.name;
        this.headItem.initHeadInfo({ roleInfo: this.info });
        this.forceLab.string = GameUtil.convertNumber(this.info.powerScore) + "";
        this.myFriendNode.active = this.type == proto.FriendListType.FriendList;
        this.applicationNode.active = this.type == proto.FriendListType.ApplyList;
        this.addNode.active = this.type == 3;
        this.blacklistNode.active = this.type == proto.FriendListType.BlackList;
        if (this.type == 3) {
            this.addBtnSpr.grayscale = this.info.isSendAddFrined;
        } else if (this.type == proto.FriendListType.FriendList) {
            if (this.info.offlineTime > 0) {
                let lastTime = RoleData.ins.getServerUtcTime() - this.info.offlineTime;
                let str = TimeUtil.formaterWithOutSecond2(lastTime);
                this.offlineTimeLab.string = str;
                this.offlineNode.active = true;
                this.onLineNode.active = false;
            } else {
                this.offlineNode.active = false;
                this.onLineNode.active = true;
            }
            this.sendValueSpr.grayscale = this.info.isGiveGift;
            this.getValueSpr.grayscale = this.info.receiveGiftState != 1;
        }


    }
    onClickChat() {
        //ShowTips("点击聊天")
        ShowTips(LangMgr.getLab("Tips_friend_17"))
    }
    onClickGetValue() {
        if (this.info.receiveGiftState == 1) {
            FriendControl.ins.requestRecvGift([this.info.id])
        }
    }
    onClickSendValue() {
        if (!this.info.isGiveGift) {
            FriendControl.ins.requestGivingGift([this.info.id])
        }
    }
    onClickDenine() {
        FriendControl.ins.requestRemoveFriendApply([this.info.id]);
    }
    onClickAccept() {
        // 获取好友列表
        const friendInfo = FriendData.ins.getMyFreindInfos();
        let max = tab.getData().GetKeyValue_ConfigTable().FriendMaxCount;
        if(friendInfo.length>=max){
            ShowTips(LangMgr.getLab("Tips_friend_18"))
        }else{
            FriendControl.ins.requestConfirmFriend([this.info.id]);
        }
    }
    onClickAdd() {
        if (!this.info.isSendAddFrined) {
            FriendControl.ins.requestAddFriend(this.info.id);
            this.info.isSendAddFrined = true;
            this.addBtnSpr.grayscale = this.info.isSendAddFrined;
        }

    }
    onClickDelect() {
        FriendControl.ins.requestRemoveBlacklist(this.info.id);
    }
}