import { _decorator, Component, log, Node, Sprite } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { RoleData } from '../RoleData';
import { RoleInfoDecorationsPop } from './RoleInfoDecorationsPop';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { HEADTYPE } from '../../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('RoleInfoDecorationsItem')
export class RoleInfoDecorationsItem extends Component {
    @property(Sprite)
    headImg: Sprite = null;
    @property(Sprite)
    headFrameImg: Sprite = null;
    @property(Node)
    node_use: Node = null;
    @property(Node)
    node_select: Node = null;
    @property(Node)
    node_lock: Node = null;
    @property(Node)
    node_red: Node = null;
    public itemId: number = 0;
    private roleInfoView: RoleInfoDecorationsPop = null;
    protected onLoad(): void {
        this.node_select.active = false;
    }
    initHeadData(itemId: number, view: RoleInfoDecorationsPop) {
        this.itemId = itemId;
        this.roleInfoView = view;
        // this.headImg.node.parent.active = false;
        // this.headFrameImg.node.parent.active = false;
        const itemHeadTab = tab.getData().ItemTableById.getValue(itemId);
        if (itemHeadTab) {
            // this.headImg.node.parent.active = true;
            this.headImg.setTexture(itemHeadTab.Icon);
        }
        if (RoleData.ins.avatarInfo.headFrame) {
            this.headFrameImg.setTexture(tab.getData().ItemTableById.getValue(RoleData.ins.avatarInfo.headFrame).Icon);
        }
        this.node_use.active = itemId === RoleData.ins.avatarInfo.headIcon;
        this.node_lock.active = !view.checkHeadIsHave(itemId);

        const headIconRed = RedMgr.ins.isRed(RedDotType.Head_Icon_Red, "0");
        if (!headIconRed) {
            this.node_red.active = false;
        } else {
            const headIconItemRed = RedMgr.ins.isRed(RedDotType.Head_Icon_Red, "0", "" + itemId);
            this.node_red.active = headIconItemRed;
        }
    }
    initFrameData(itemId: number, view: RoleInfoDecorationsPop) {
        this.itemId = itemId;
        this.roleInfoView = view;
        // this.headImg.node.parent.active = false;
        // this.headFrameImg.node.parent.active = false;
        const itemFrameTab = tab.getData().ItemTableById.getValue(itemId);
        if (itemFrameTab) {
            // this.headFrameImg.node.parent.active = true;
            this.headFrameImg.setTexture(itemFrameTab.Icon);
        }
        if (RoleData.ins.avatarInfo.headIcon) {
            this.headImg.setTexture(tab.getData().ItemTableById.getValue(RoleData.ins.avatarInfo.headIcon).Icon);
        }
        this.node_use.active = itemId === RoleData.ins.avatarInfo.headFrame;
        this.node_lock.active = !view.checkFrameIsHave(itemId);

        const headFrameRed = RedMgr.ins.isRed(RedDotType.Head_Icon_Red, "1");
        if (!headFrameRed) {
            this.node_red.active = false;
        } else {
            const headFrameItemRed = RedMgr.ins.isRed(RedDotType.Head_Icon_Red, "1", "" + itemId);
            this.node_red.active = headFrameItemRed;
        }
    }
    initData(headId: number, headFrameId: number) {
        // this.headImg.node.parent.active = false;
        // this.headFrameImg.node.parent.active = false;
        const itemHeadTab = tab.getData().ItemTableById.getValue(headId);
        if (itemHeadTab) {
            // this.headImg.node.parent.active = true;
            this.headImg.setTexture(itemHeadTab.Icon);
        }
        const itemFrameTab = tab.getData().ItemTableById.getValue(headFrameId);
        if (itemFrameTab) {
            // this.headFrameImg.node.parent.active = true;
            this.headFrameImg.setTexture(itemFrameTab.Icon);
        }
    }
    clickSelectHead() {
        if (!this.node_select.active) {
            if (this.roleInfoView) {
                this.roleInfoView.selectHead(this);
            }
            this.node_select.active = true;
            if (this.node_red.active) {
                this.node_red.active = false;
                if (this.roleInfoView.default_view === HEADTYPE.HEADICON) {
                    RoleData.ins.clientData.newHeadIcon = RoleData.ins.clientData.newHeadIcon.replace("," + this.itemId, "");
                    RoleData.ins.setClientData("newHeadIcon", RoleData.ins.clientData.newHeadIcon)
                }
                if (this.roleInfoView.default_view === HEADTYPE.HEADFRAME) {
                    RoleData.ins.clientData.newHeadFrame = RoleData.ins.clientData.newHeadFrame.replace("," + this.itemId, "");
                    RoleData.ins.setClientData("newHeadFrame", RoleData.ins.clientData.newHeadFrame)
                }
                RedMgr.refreshEvent(RedDotType.Head_Icon_Red);
            }
        }
    }
    unSelectHead() {
        this.node_select.active = false;
    }
}


