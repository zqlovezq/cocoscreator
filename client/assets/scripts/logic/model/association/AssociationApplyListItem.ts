import { _decorator, Component, Label, Node } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { proto } from 'client_protocol';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { GameUtil } from '../../utils/GameUtil';
import { AssociationControl } from './AssociationControl';
const { ccclass, property } = _decorator;

@ccclass('AssociationApplyListItem')
export class AssociationApplyListItem extends InfiniteCell {
    @property(PlayerHeadItem)
    palyerHerdItem:PlayerHeadItem=null;
    @property(Label)
    lbl_name:Label = null;
    @property(Label)
    lbl_power:Label = null;
    private data:proto.IJoinGuildRequest = null;
    UpdateContent(data: proto.IJoinGuildRequest): void {
        this.data = data;
        const playerInfo = new SimpleRoleInfo();
        playerInfo.merge(data);

        this.palyerHerdItem.initHeadInfo({ roleInfo: playerInfo });

        // this.palyerHerdItem.initHeadInfo({roleId:this.data.roleId});
        this.lbl_name.string = data.name;
        this.lbl_power.string =  GameUtil.convertNumber(data.powerScore);
    }
    /* 接收申请 */
    onClickAccept(){
        AssociationControl.ins.reqProcessGuildApply(this.data.id,true);
    }
    /* 拒绝申请 */
    onClickDenine(){
        AssociationControl.ins.reqProcessGuildApply(this.data.id,false);
    }
}


