import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { RoleData } from '../RoleData';
import { RoleInfoDecorationsItem } from './RoleInfoDecorationsItem';
import { HEADTYPE } from '../../../../Common/script/EnumTypeMgr';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { tab } from '../../../../Table/table_gen';
import { HeroAttrItem } from '../../hero/herobag/HeroAttrItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { EventMgr } from '../../../mgr/EventMgr';
const { ccclass, property } = _decorator;

@ccclass('RoleInfoDecorationsPop')
export class RoleInfoDecorationsPop extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Prefab)
    pfb_attr: Prefab = null;
    @property(Node)
    node_content: Node = null;
    @property(Node)
    node_btn: Node = null;

    @property(Node)
    node_head: Node = null;
    @property(Sprite)
    sp_head: Sprite = null;
    @property(Node)
    node_frame: Node = null;
    @property(Sprite)
    sp_frame: Sprite = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_desc: Label = null;
    @property(Node)
    node_attr_layout: Node = null;

    public default_view: HEADTYPE = HEADTYPE.NONE;
    private cur_select_item: RoleInfoDecorationsItem = null;
    onShow(): void {
        this.default_view = HEADTYPE.HEADICON;
        this.initView()
    }
    initView() {
        //拥有的头像
        this.cur_select_item = null;
        this.showViewByType();
        this.changeIconState(RoleData.ins.avatarInfo.headIcon, RoleData.ins.avatarInfo.headFrame,true)
    }
    clickSwitchView(e: EventTouch, type: string) {
        if (this.default_view === Number(type)) {
            return;
        }
        this.default_view = Number(type);
        this.initView();
    }
    showViewByType() {
        switch (this.default_view) {
            case HEADTYPE.HEADICON:
                this.showHeadIconView();
                break;
            case HEADTYPE.HEADFRAME:
                this.showHeadFrameView();
                break;
            default:
                break;
        }
    }
    /* 显示头像界面 */
    showHeadIconView() {
        this.node_content.destroyAllChildren();
        const headTabs = tab.getData().HeadTable;
        const headList = RoleData.ins.avatarInfo.headIcon?[RoleData.ins.avatarInfo.headIcon]:[];

        const haveHead = [];
        const noHavaHead = [];

        for (let i = 0; i < headTabs.length; i++) {
            const id = headTabs[i].Id;
            if (id !== RoleData.ins.avatarInfo.headIcon) {
                if (this.checkHeadIsHave(id)) {
                    haveHead.push(id)
                } else {
                    noHavaHead.push(id);
                }
            }
        }
        haveHead.sort((a, b) => {
            let itemTab1 = tab.getData().ItemTableById.getValue(a);
            let itemTab2 = tab.getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
        })

        noHavaHead.sort((a, b) => {
            let itemTab1 = tab.getData().ItemTableById.getValue(a);
            let itemTab2 = tab.getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
        })
        let combinedArray = [...headList, ...haveHead, ...noHavaHead];
        for (let i = 0; i < combinedArray.length; i++) {
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            const itemTs = item.getComponent(RoleInfoDecorationsItem);
            itemTs.initHeadData(combinedArray[i], this);
        }
    }
    /* 显示头像框界面 */
    showHeadFrameView() {
        this.node_content.destroyAllChildren();
        const headFrameTabs = tab.getData().HeadFramTable;
        const headFrameList = RoleData.ins.avatarInfo.headFrame?[RoleData.ins.avatarInfo.headFrame]:[];

        const haveFrameHead = [];
        const noHavaFrameHead = [];

        for (let i = 0; i < headFrameTabs.length; i++) {
            const id = headFrameTabs[i].Id;
            if (id !== RoleData.ins.avatarInfo.headFrame) {
                if (this.checkHeadIsHave(id)) {
                    haveFrameHead.push(id)
                } else {
                    noHavaFrameHead.push(id);
                }
            }
        }
        haveFrameHead.sort((a, b) => {
            let itemTab1 = tab.getData().ItemTableById.getValue(a);
            let itemTab2 = tab.getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
        })

        noHavaFrameHead.sort((a, b) => {
            let itemTab1 = tab.getData().ItemTableById.getValue(a);
            let itemTab2 = tab.getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
        })
        let combinedArray = [...headFrameList, ...haveFrameHead, ...noHavaFrameHead];
        for (let i = 0; i < combinedArray.length; i++) {
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            const itemTs = item.getComponent(RoleInfoDecorationsItem);
            itemTs.initFrameData(combinedArray[i], this);
        }
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        // 更换头像
        EventMgr.onMsg(proto.Ptl.SetHeadIconRsp, this.on_s2c_SetHeadIconRsp, this)
        // 更换头像框
        EventMgr.onMsg(proto.Ptl.SetHeadFrameRsp, this.on_s2c_SetHeadFrameRsp, this)
    }
    unRegister(): void {
        super.unRegister();
    }
    on_s2c_SetHeadIconRsp(msg: proto.Msg_SetHeadIconRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            RoleData.ins.avatarInfo.headIcon = msg.headIcon;
            this.initView();
        }
    }
    on_s2c_SetHeadFrameRsp(msg: proto.Msg_SetHeadFrameRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            RoleData.ins.avatarInfo.headFrame = msg.headFrame;
            this.initView();
        }
    }
    selectHead(item: RoleInfoDecorationsItem) {
        if (this.cur_select_item) {
            this.cur_select_item.unSelectHead();
            this.cur_select_item = null;
        }
        if (item) {
            this.cur_select_item = item;
            if (this.default_view === HEADTYPE.HEADICON) {
                this.changeIconState(this.cur_select_item.itemId, 0)
            } else if (this.default_view === HEADTYPE.HEADFRAME) {
                this.changeIconState(0, this.cur_select_item.itemId)
            }
        }
    }
    // 像服务器发送切换头像、头像框的功能
    sendMsg() {
        if (!this.cur_select_item) {
            return
        }
        if (this.cur_select_item.itemId === RoleData.ins.avatarInfo.headFrame || this.cur_select_item.itemId === RoleData.ins.avatarInfo.headIcon) {
            return;
        }
        switch (this.default_view) {
            case HEADTYPE.HEADICON:
                if (RoleData.ins.avatarInfo.headIcon !== this.cur_select_item.itemId) {
                    let msg = new proto.Msg_SetHeadIconReq();
                    msg.headIcon = this.cur_select_item.itemId;
                    Net.Send(proto.Ptl.SetHeadIconReq, msg)
                }
                break;
            case HEADTYPE.HEADFRAME:
                if (RoleData.ins.avatarInfo.headFrame !== this.cur_select_item.itemId) {
                    let msg = new proto.Msg_SetHeadFrameReq();
                    msg.headFrame = this.cur_select_item.itemId;
                    Net.Send(proto.Ptl.SetHeadFrameReq, msg)
                }
                break;
            default:
                break;
        }
    }
    // 判断当前headicon是否拥有
    checkHeadIsHave(itemId: number) {
        for (let i = 0; i < RoleData.ins.avatarInfo.headIcons.length; i++) {
            const id = RoleData.ins.avatarInfo.headIcons[i].itemId;
            if (id === itemId) {
                return true;
            }
        }
        return false;
    }
    // 判断当前头像框是否拥有
    checkFrameIsHave(itemId: number) {
        for (let i = 0; i < RoleData.ins.avatarInfo.headFrames.length; i++) {
            const id = RoleData.ins.avatarInfo.headFrames[i].itemId;
            if (id === itemId) {
                return true;
            }
        }
        return false;
    }
    /* 根据点击的头像或者头像框 切换头像状态 */
    changeIconState(headItemId: number, headFrameId: number,isInit?:boolean) {
        // this.node_head.active = false;
        // this.node_frame.active = false;
        this.node_attr_layout.destroyAllChildren();
        if (headFrameId) {
            // this.node_frame.active = true;
            const frameItemTab = tab.getData().ItemTableById.getValue(headFrameId);
            this.sp_frame.setTexture(frameItemTab.Icon);
            this.lbl_name.string = LangMgr.getLab(frameItemTab.Name);
            // 查看是否有属性
            const frameTab = tab.getData().HeadFramTableById.getValue(headFrameId);
            this.lbl_desc.string = LangMgr.getLab(frameItemTab.Desc);
            if (frameTab) {
                for (let i = 0; i < frameTab.AttrTypes.length; i++) {
                    const attrItem = instantiate(this.pfb_attr);
                    attrItem.parent = this.node_attr_layout;
                    const attrItemTs = attrItem.getComponent(HeroAttrItem);
                    attrItemTs.initView(frameTab.AttrTypes[i], frameTab.AttrValue[i]);
                }
            }
        }
      if (headItemId) {
            // this.node_head.active = true;
            const headTab = tab.getData().HeadTableById.getValue(headItemId)
            const headItemTab = tab.getData().ItemTableById.getValue(headItemId);
            this.sp_head.setTexture(headItemTab.Icon);
            this.lbl_desc.string = LangMgr.getLab(headItemTab.Desc);
            this.lbl_name.string = LangMgr.getLab(headItemTab.Name);
            if (headTab&&!isInit) {
                for (let i = 0; i < headTab.AttrTypes.length; i++) {
                    const attrItem = instantiate(this.pfb_attr);
                    attrItem.parent = this.node_attr_layout;
                    const attrItemTs = attrItem.getComponent(HeroAttrItem);
                    attrItemTs.initView(headTab.AttrTypes[i], headTab.AttrValue[i]);
                }
            }
        }
        const wearBtn = this.node_btn.getChildByName("wear_btn");
        const wearingBtn = this.node_btn.getChildByName("wearing_node");
        const goBtn = this.node_btn.getChildByName("go_btn");
        wearBtn.active = false;
        wearingBtn.active = false;
        goBtn.active = false
        switch (this.default_view) {
            case HEADTYPE.HEADICON:
                if (headItemId === RoleData.ins.avatarInfo.headIcon) {
                    // 当前已穿带
                    wearingBtn.active = true;
                } else {
                    if (this.checkHeadIsHave(headItemId)) {
                        wearBtn.active = true;
                    } else {
                        goBtn.active = true;
                    }
                }
                break;
            case HEADTYPE.HEADFRAME:
                if (headFrameId === RoleData.ins.avatarInfo.headFrame) {
                    // 当前已穿带
                    wearingBtn.active = true;
                } else {
                    if (this.checkFrameIsHave(headFrameId)) {
                        wearBtn.active = true;
                    } else {
                        goBtn.active = true;
                    }
                }
                break;
            default:
                break;
        }
    }
}


