import { _decorator, Component, EditBox, EventTouch, Node, Sprite, Toggle } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { AssociationControl } from './AssociationControl';
import { ASSOCIATIONPOP } from '../../../Common/script/EnumTypeMgr';
import { SettingsManager } from '../role/SettingsManager';
import { ItemInfo } from '../item/ItemInfo';
import { ItemData } from '../item/ItemData';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { ViewName } from '../../define/ViewDefine';
import { AssociationData } from './AssociationData';
import { GameUtil } from '../../utils/GameUtil';
import { RoleData } from '../role/RoleData';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationInfoPop')
export class AssociationInfoPop extends ViewPop {
    @property(Node)
    node_create:Node = null;//创建鸡舍节点
    @property(Node)
    node_notice:Node = null;//修改公告鸡舍节点
    @property(Node)
    node_change_info:Node = null;//修改信息鸡舍节点
    @property(Node)
    node_donate:Node = null;//捐献鸡舍节点
    @property(Toggle)
    toggle_auto_enter:Toggle = null;//自动审批加入按钮
    @property(EditBox)
    edit_box_create_name:EditBox = null;//创建公会的名字
    @property(EditBox)
    edit_box_create_notice:EditBox = null;//创建公会的公告
    @property(EditBox)
    edit_box_change_notice:EditBox = null;//更改公会的公告
    @property(EditBox)
    edit_box_change_name:EditBox = null;//更改公会的公告
    @property(Sprite)
    sp_flag_img:Sprite = null;
    private view_type:ASSOCIATIONPOP = ASSOCIATIONPOP.NONE
    public curSelectFlagId: number = 0;
    private _clickToggle:boolean = false
    onShow(): void {
        this.view_type = this.openData.view;
        this.showView();
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    showView(){
        this.node_create.active = this.view_type===ASSOCIATIONPOP.CREATE;
        this.node_notice.active = this.view_type===ASSOCIATIONPOP.NOTICE;
        this.node_change_info.active = this.view_type===ASSOCIATIONPOP.CHANGE;
        this.node_donate.active = this.view_type===ASSOCIATIONPOP.DONATE;
        switch (this.view_type) {
            case ASSOCIATIONPOP.CREATE:
                this.toggle_auto_enter.isChecked = !SettingsManager.ins.getSetting("needCheckAssociation")
                break;
            case ASSOCIATIONPOP.CHANGE:
                this.curSelectFlagId = AssociationData.ins.getAssocitionSimpleInfo().flagId?AssociationData.ins.getAssocitionSimpleInfo().flagId:1;
                this.refreshFlagId();
                break;
            default:
                break;
        }
    }
    /* 创建公会 */
    reqCreateGuild(){
        // 钻石不足
        const DiamondCount = ItemData.ins.getByItemId(1).num;
        if(DiamondCount<tab.getData().GetKeyValue_ConfigTable().CreateGuildCostDiamond){
            ShowItemNotEnoughTips(1);
            return;
        }
        if(this.edit_box_create_name.string.length===0){
            console.log("公会名字不能为空")
            return;
        }
        // 当前时间不足
        const curTime = RoleData.ins.getServerUtcTime(); 
        if(AssociationData.ins.getAssocitionInfo()&&curTime<AssociationData.ins.getAssocitionInfo().notAllowJoinTime){
            console.log("创建公会cd未结束");
            const str = LangMgr.getCombineString("Tips_association_4",[tab.getData().GetKeyValue_ConfigTable().GuildJoinCd/60]);
            ShowTips(str);
            return
        }
        this.onClose();
        AssociationControl.ins.reqCreateGuild(this.edit_box_create_name.string,0,this.edit_box_create_notice.string,this.toggle_auto_enter.isChecked);
    }
    onClickEnter(){
        this._clickToggle = true;
    }
    onClickAutoEnterToggle(){
        if(this._clickToggle){
            this._clickToggle = false;
        }
    }
    /* 更改公告 */
    onClickChangeNotice(){
        if(this.edit_box_change_notice.string.length===0){
            console.log("更改公告不能为空")
            return;
        }
        AssociationControl.ins.reqSetGuildNotice(this.edit_box_change_notice.string);
    }
    /* 更换旗帜跟公会名字 */
    onClickChangeInfo(){
        const DiamondCount = ItemData.ins.getByItemId(1).num;
        if(DiamondCount<tab.getData().GetKeyValue_ConfigTable().GuildChangeNameCost){
            ShowItemNotEnoughTips(1);
            return;
        }
        if(this.edit_box_change_name.string.length===0){
            console.log("更改信息名字不能为空")
            return;
        }
        AssociationControl.ins.reqSetGuildNameAndFlag(this.edit_box_change_name.string,this.curSelectFlagId);
    }  
    /* 点击更换旗帜 */
    onClickChangeFlagId(){
        UIMgr.ins.show({ viewName: ViewName.AssociationChangeFlagPop})
    }
    refreshFlagId(){
        const flagtab = tab.getData().GuildFlagTableById.getValue(this.curSelectFlagId);
        this.sp_flag_img.setTexture(flagtab.IconUrl);
    }
}


