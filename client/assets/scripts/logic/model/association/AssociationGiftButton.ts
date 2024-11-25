import { _decorator, CCString, Component, Label, Node } from 'cc';
import { AssociationData } from './AssociationData';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { setTextTime } from '../../utils/GameUtil';
import { RoleData } from '../role/RoleData';
import { proto } from 'client_protocol';
const { ccclass, property } = _decorator;

@ccclass('AssociationGiftButton')
export class AssociationGiftButton extends Component {
    @property(CCString)
    type:string = ""
    @property(Label)
    timerGiftLab:Label = null;
    private endGiftTimer:number = 0;
    private _giftData:proto.GuildGift = null;
    protected onLoad(): void {
        this._giftData = AssociationData.ins.getBargainGift(this.type);
        this.node.active = Boolean(this._giftData);
        if(this._giftData){
            this.initGiftEndTimer();
        }
    }
    initGiftEndTimer() {
        this.unschedule(this.updateGiftTimer)
        const isOpen = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildGift);
        const guildInfo = AssociationData.ins.getAssocitionInfo();
        const buyGift = guildInfo.isBoughtCycleGift;
        if (isOpen) {
            if(buyGift){
                this.timerGiftLab.string = LangMgr.getLab("ui_association_65");
            }else{
                const serverTime = RoleData.ins.getServerUtcTime();
                this.endGiftTimer =  this._giftData.expireTime - serverTime;
                if(this.endGiftTimer>=0){
                    this.timerGiftLab.string = LangMgr.getLab("ui_commondesc_109")+setTextTime(this.endGiftTimer);
                    this.schedule(this.updateGiftTimer, 1)
                }else{
                    this.timerGiftLab.string = LangMgr.getLab("ui_association_65");
                }
            }
        }else{
            this.timerGiftLab.string = AssociationData.ins.getFunctionTips(tab.GuildOFName.GuildOFName_GuildGift);
        }
    }
    updateGiftTimer = () => {
        this.endGiftTimer--;
        if (this.endGiftTimer >= 0) {
            this.timerGiftLab.string = LangMgr.getLab("ui_commondesc_109")+setTextTime(this.endGiftTimer);
        } else {
            this.unschedule(this.updateGiftTimer)
        }
    }
}


