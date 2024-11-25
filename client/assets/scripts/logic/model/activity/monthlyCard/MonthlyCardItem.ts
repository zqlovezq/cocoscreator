import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { MonthlyCardPrivilegeItem } from './MonthlyCardPrivilegeItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { PayControl } from '../../pay/PayControl';
import { ActivityControl } from '../ActivityControl';
import { TimeUtil } from '../../../utils/TimeUtil';
import { Role } from '../../../fight/base/obj/role/role/Role';
import { RoleData } from '../../role/RoleData';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
const { ccclass, property } = _decorator;

@ccclass('MonthlyCardItem')
export class MonthlyCardItem extends Component {
    @property(Node)
    cardNode1:Node=null;
    @property(Node)
    cardNode2:Node=null;
    @property(Node)
    nowRewardNode:Node=null;
    @property(Node)
    everydayNode:Node=null;
    @property(Node)
    privilegeNode:Node=null;
    @property(Node)
    priceBtnNode:Node=null;
    @property(Label)
    priceNumLabel:Label=null;
    @property(Node)
    claimBtnNode:Node=null;
    @property(Node)
    gotBtnNode:Node=null;
    @property(Prefab)
    privilegeItemPrefb:Prefab=null;
    @property(Label)
    lastDayLab:Label=null;
    @property(Node)
    timerNode:Node=null;
    private table:tab.MonthlyPassTable;
    private state:number;
    initView(table:tab.MonthlyPassTable) {
        this.table=table;
        this.cardNode1.active=table.Type==tab.PrivilegedType.PrivilegedType_MonthlyPass;
        this.cardNode2.active=table.Type==tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass;

        let itemInfo=new ItemInfo();
        itemInfo.initItemData(table.BuyRewardIds[0],table.BuyRewardNum[0]);
        let node:Node=ItemPoolMgr.ins.createRewadItem(itemInfo,this.nowRewardNode);
        node.setPosition(0,-30);
        for(let key in table.RewardIds){
            let info=new ItemInfo();
            info.initItemData(table.RewardIds[key],table.RewardNum[key]);
            ItemPoolMgr.ins.createRewadItem(info,this.everydayNode);
        }
        this.initPrivilegeView();
        this.updateView(0);
    }

    private initPrivilegeView(){
        for(let key in this.table.WordKey){
            let item=instantiate(this.privilegeItemPrefb);
            item.parent=this.privilegeNode;
            let com=item.getComponent(MonthlyCardPrivilegeItem);
            com.bgNode.active=this.table.Type==tab.PrivilegedType.PrivilegedType_MonthlyPass;
            com.vipNode.active=this.table.Type==tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass;
            if(this.table.Type==tab.PrivilegedType.PrivilegedType_MonthlyPass){
                com.richtext1.string=LangMgr.getLab(this.table.WordKey[key]);
            }else{
                com.richtext2.string=LangMgr.getLab(this.table.WordKey[key]);
            }
        }
    }
    /**
     * state: 0:未购买 1:已购买未领取 2:已领取
     */
    updateView(state:number,lastTimer:number=0){
        this.state=state;
        this.priceBtnNode.active=state==0;
        this.claimBtnNode.active=state==1;
        this.gotBtnNode.active=state==2;
        if(state==0){
            this.timerNode.active=false;
            let rechargeTable=tab.getData().RechargeTableById.getValue(this.table.RechargeId);
            this.priceNumLabel.string=ChannelMgr.getSdkRechargeShowPrice(rechargeTable);
        }else{
            this.timerNode.active=true;
            let dayStr = LangMgr.getLab("Tips_common_day")
            let data=TimeUtil.formaterWithOutSecond3(lastTimer-RoleData.ins.getServerUtcTime())
            this.lastDayLab.string=data["day"]+dayStr
        }
        

    }

    onClickBuy(){
        if(this.state==0){
            PayControl.ins.requestPay(this.table.RechargeId,null)
        }
    }
    onClickReceive(){
        if(this.state==1){
            ActivityControl.ins.requestReceiveMonthlyPassDailyRewards(this.table.Type);
        }
    }
}


