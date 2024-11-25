import { _decorator, Component, Label, Node, sp, Sprite } from 'cc';
import { HeadInfo } from '../../common/PlayerHeadItem';
import { RoleData } from '../../role/RoleData';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { tab } from '../../../../Table/table_gen';
const { ccclass, property } = _decorator;

/**
 * 
 * TopWarPlayRankHeadiItem
 * zhudingchao
 * Tue Jul 09 2024 14:19:23 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/topWar/TopWarPlayRankHeadiItem.ts
 *
 */

@ccclass('TopWarPlayRankHeadiItem')
export class TopWarPlayRankHeadiItem extends Component {
    @property(Sprite)
    headFrameImg: Sprite = null;
    @property(Sprite)
    headImg: Sprite = null;
    @property(Label)
    rankLab: Label = null;
    @property(sp.Skeleton)
    spine: sp.Skeleton = null;
    @property(Node)
    myNode: Node = null;
    @property(Node)
    rankNode: Node = null;
    private headInfo: HeadInfo;

    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_END, this.clickHead, this);
    }
    initView(info: HeadInfo) {
        this.headInfo = info;

        if (info.roleInfo) {
            if (!info.headFrame) {
                info.headFrame = info.roleInfo.headFrame;
            }
            if (!info.headIcon) {
                info.headIcon = info.roleInfo.headIcon;
            }


            // this.levelLab.string=info.level+"";
        }
        // this.headFrameImg.setTexture(info.headFrame)

        let itemHeadTab = tab.getData().ItemTableById.getValue(info.headIcon);
        if (!itemHeadTab) {
            itemHeadTab = tab.getData().ItemTableById.getValue(31201);
        }
        this.headImg.setTexture(itemHeadTab.Icon);


        let itemheadFrameTab = tab.getData().ItemTableById.getValue(info.headFrame);
        if (!itemheadFrameTab) {
            //默认头像框
            itemheadFrameTab = tab.getData().ItemTableById.getValue(32000);
        }

        this.headFrameImg.setTexture(itemheadFrameTab.Icon);



    }
    clickHead() {

        if (this.headInfo) {
            if (this.headInfo.roleInfo) {
                if (RoleData.ins.id == this.headInfo.roleInfo.id) {
                    UIMgr.ins.show({ viewName: ViewName.RoleInfoPop })
                } else {
                    UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { "info": this.headInfo.roleInfo } })
                }
            } else if (this.headInfo.roleId) {
                if (RoleData.ins.id == this.headInfo.roleId) {
                    UIMgr.ins.show({ viewName: ViewName.RoleInfoPop })
                } else {
                    UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { "roleId": this.headInfo.roleId } })
                }
            }
        }
        else {

            UIMgr.ins.show({ viewName: ViewName.RoleInfoPop })
        }

    }
    public setRankLab(rank: number) {

        if (rank > -1) {
            this.rankLab.string = "" + rank;

        } else {
            this.rankLab.string = ""
        }


    }

}