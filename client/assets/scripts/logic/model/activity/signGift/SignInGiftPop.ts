import { _decorator, Component, instantiate, Node, Prefab, ScrollView, Vec2 } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import { SignInGiftItem } from './SignInGiftItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { SignInGiftData } from './SignInGiftData';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { LocalEvent } from '../../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('SignInGiftPop')
export class SignInGiftPop extends ViewPop {
    @property(Prefab)
    pfb_item:Prefab = null;
    @property(Node)
    node_content:Node = null;
    @property(ScrollView)
    scroll_view:ScrollView = null;
    onShow(): void {
        for(let i=0;i<tab.getData().SignInGiftTable.length;i++){
            const signTab = tab.getData().SignInGiftTable[i];
            const item = instantiate(this.pfb_item);
            this.node_content.addChild(item);
            item.name = String(signTab.Day);
            const itemTs = item.getComponent(SignInGiftItem);
            itemTs.initData(signTab);
        }
        this.scrollToReward();
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.ReceiveSignInGiftRsp, this.on_s2c_ReceiveSignInGiftRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    on_s2c_ReceiveSignInGiftRsp(msg:proto.Msg_ReceiveSignInGiftRsp){
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        SignInGiftData.ins.receiveGift(msg.days);
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards});
        for(let i=0;i<msg.days.length;i++){
            const day = msg.days[i];
            const item = this.node_content.getChildByName(String(day));
            const itemTs = item.getComponent(SignInGiftItem);
            const signTab = tab.getData().SignInGiftTableByDay.getValue(day);
            itemTs.initData(signTab);
        }
        RedMgr.refreshEvent(RedDotType.SignGiftRed);
    }
    scrollToReward(){
        const signTab =  SignInGiftData.ins.getNotGetData();
        if(signTab){
            const maxLen = Math.ceil(tab.getData().SignInGiftTable.length/5);
            const curLen = Math.floor((signTab.Day-1)/5);
            if(curLen===maxLen-1){
                this.scroll_view.scrollTo(new Vec2(0,0),0.2)
            }else{
                this.scroll_view.scrollTo(new Vec2(0,1-curLen/maxLen),0.2)
            }
        }
    }
    onClose(): void {
        super.onClose();
        EventMgr.emitLocal(LocalEvent.LocalMsg_QueueUI_deleteUI);
    }
}


