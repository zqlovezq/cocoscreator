import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { HeroInfo } from '../hero/HeroInfo';
import { HeroItem } from '../item/HeroItem';
import { FriendControl } from '../friends/FriendControl';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { CommonTipsPop, CommonTipsPopCloseType } from '../common/CommonTipsPop';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { ViewName } from '../../define/ViewDefine';
import { RoleData } from '../role/RoleData';
import { GameUtil } from '../../utils/GameUtil';
import { BattleMainDataControl } from '../home/battle/BattleMainDataControl';
const { ccclass, property } = _decorator;

/**
 * 
 * CheckRoleInfoPop
 * zhudingchao
 * Tue Jun 11 2024 17:24:38 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/checkroleInfo/CheckRoleInfoPop.ts
 *
 */

@ccclass('CheckRoleInfoPop')
export class CheckRoleInfoPop extends ViewPop {
    @property(Label)
    playNameLab: Label = null;
    @property(PlayerHeadItem)
    palyerHerdItem:PlayerHeadItem=null;
    @property(Label)
    titleLab:Label=null;
    @property(Label)
    forceLab:Label=null;
    @property(Label)
    chapterLab:Label=null;
    @property(Label)
    gangLab:Label=null;
    @property(Node)
    friendNode:Node=null;
    @property(Node)
    strangerBtn:Node=null;
    @property(Node)
    blackNode:Node=null;
    @property(Node)
    itemLayout:Node=null;

    private info:SimpleRoleInfo;
    private rankData:SimpleRoleInfo = null;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetSimpleRoleRsp, this.on_s2c_GetSimpleRoleRsp, this);
    }
    onShow(): void {
        if(this.openData["info"]){
            this.info=this.openData["info"];
            this.initView();
        }else if(this.openData["roleId"]){
            this.requestGetSimpleRole(this.openData["roleId"]);
        }else if(this.openData["rankData"]){
            this.info = this.openData.rankData;
            this.rankData = this.openData.rankData;
            this.initView();
            this.strangerBtn.active=this.info.id!==RoleData.ins.id;
            this.friendNode.active=false;
            this.blackNode.active = false;
        }
      
    }
    requestGetSimpleRole(roleId:string) {
        let msg = new proto.Msg_GetSimpleRoleReq();
        msg.roleId=roleId;
        Net.Send(proto.Ptl.GetSimpleRoleReq, msg)
    }
    on_s2c_GetSimpleRoleRsp(msg: proto.Msg_GetSimpleRoleRsp) {
       
        if(msg.role){
            this.info=new SimpleRoleInfo();
            this.info.merge(msg.role);
            this.initView();
        }else{

            this.onClose();
            //ShowTips("请求用户信息错误")
            ShowTips(LangMgr.getLab("Tips_friend_14"))
        }
    }
    initView(){
        this.itemLayout.destroyAllChildren();
        let table=tab.getData().QuestLogTableByLevel.getValue(this.info.reputation);
        if(table){
            this.titleLab.string=LangMgr.getLab(table.Name);
        }
        this.playNameLab.string=this.info.name;
    
        let pveTable=tab.getData().PveStageTableByStageId.getValue(this.info.mainStage);
        if(this.info.mainStage===0){
            pveTable = BattleMainDataControl.ins.getMaxPveMainStage();
        }
        if(pveTable){
            //this.chapterLab.string="主線關卡："+pveTable.StageName;
            this.chapterLab.string = LangMgr.getLab("ui_friend_15") + LangMgr.getLab(pveTable.StageName);
        }else{
            //this.chapterLab.string="主線關卡：无";
            this.chapterLab.string = LangMgr.getLab("ui_friend_15") + LangMgr.getLab("ui_commondesc_88");
        }
      
        const isSelf = this.info.id===RoleData.ins.id
        this.strangerBtn.active=!this.info.isMyFriend&&!this.info.isBlackList&&!isSelf;
        this.friendNode.active=this.info.isMyFriend&&!isSelf;
        this.blackNode.active=!this.info.isBlackList&&!isSelf;
        this.palyerHerdItem.initHeadInfo({roleInfo:this.info});
        //this.forceLab.string="戰鬥力："+this.info.powerScore+"";
        this.forceLab.string = LangMgr.getLab("ui_commondesc_43") + GameUtil.convertNumber(this.info.powerScore)+"";
        if(this.info.guildName){
            //this.gangLab.string="幫會名稱："+this.info.guildName;
            this.gangLab.string= LangMgr.getLab("ui_friend_16") + this.info.guildName;
        }else{
            //this.gangLab.string="幫會名稱：无";
            this.gangLab.string = LangMgr.getLab("ui_friend_16") + LangMgr.getLab("ui_commondesc_88");
        }
        let heros=this.info.heroes;
        for(let key in heros){
            let heroInfo = new HeroInfo();
            heroInfo.itemId = heros[key].itemId;
            heroInfo.id = 0;
            heroInfo.star =heros[key].star;
            heroInfo.level=heros[key].level;
            let item=ItemPoolMgr.ins.createHeroItem(heroInfo,this.itemLayout);
            if(this.rankData){
                item.getComponent(HeroItem).setTouchCallBack(()=>{
                    UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoHeroPop,data:{
                        heroData:heros[key]
                    }})
                })
            }else{
                item.getComponent(HeroItem).setTouchCallBack(this.onTouchHero);
            }
        }

    }

    onClickBlack(){
        CommonTipsPop.create(LangMgr.getLab("Tips_friend_15"), (closeType: CommonTipsPopCloseType) => {
            if (closeType == CommonTipsPopCloseType.confirm) {
                // console.log("ok")
                FriendControl.ins.requestAddBlacklist(this.info.id);
                this.onClose();
            } else {
                console.log("cancel")
            }
        })
       
    }
    onClickAdd(){
        if(this.info.isApplyList){
            FriendControl.ins.requestConfirmFriend([this.info.id]);
            this.onClose();
        }else{
            FriendControl.ins.requestAddFriend(this.info.id);
        }
       
       
    }
    onClickChat(){
        ShowTips(LangMgr.getLab("Tips_friend_17"))
    }
    onClickDelect(){
        CommonTipsPop.create(LangMgr.getLab("Tips_friend_16"), (closeType: CommonTipsPopCloseType) => {
            if (closeType == CommonTipsPopCloseType.confirm) {
                // console.log("ok")
                FriendControl.ins.requestRemoveFriend(this.info.id);
                this.onClose();
            } else {
                console.log("cancel")
            }
        })
      
    }
    onTouchHero=(item:HeroItem)=>{

    }

}