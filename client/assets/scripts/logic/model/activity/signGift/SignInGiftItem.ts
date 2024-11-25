import { _decorator, Component, Label, Node } from 'cc';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { CommonItem } from '../../item/CommonItem';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { SignInGiftData } from './SignInGiftData';
import { AWARD_STATE } from '../../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('SignInGiftItem')
export class SignInGiftItem extends Component {
    @property(Label)
    lbl_day:Label = null;//时间
    @property(Node)
    node_got:Node = null;
    @property(Node)
    node_is_big:Node = null;
    @property(Node)
    node_get:Node = null;
    @property(Node)
    node_lock:Node = null;
    @property(Node)
    node_is_special:Node = null;
    @property(Node)
    node_reward:Node = null;
    private signData:tab.SignInGiftTable = null;
    initData(data:tab.SignInGiftTable){
        this.signData = data;
        const info = new ItemInfo();
        info.itemId = data.ItemId;
        info.num = data.ItemCount;
        const itemItem = ItemPoolMgr.ins.createItem(info, this.node_reward);
        const itemTs = itemItem.getComponent(CommonItem);
        const signState = SignInGiftData.ins.getSignState(data.Day);
        itemTs.setTouchCallBack(null);
        if(signState===AWARD_STATE.RECEIVE){
            itemTs.setTouchCallBack(()=>{
                this.sendMsg();
            })
        }
        this.lbl_day.string = LangMgr.getCombineString("ui_commondesc_72",[data.Day]);
        this.node_is_special.active = data.IsGrand;
        this.node_is_big.active = data.IsGrand;
        this.node_got.active = signState==AWARD_STATE.GOT;
        this.node_get.active = signState==AWARD_STATE.RECEIVE;
        this.node_lock.active = signState==AWARD_STATE.LOCK;
    }
    sendMsg(){
        let sign_msg = new proto.Msg_ReceiveSignInGiftReq();
        sign_msg.days = [this.signData.Day];
        Net.Send(proto.Ptl.ReceiveSignInGiftReq, sign_msg);
    }
}


