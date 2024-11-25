import { _decorator, Component, instantiate, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { AssociationChangeFlagItem } from './AssociationChangeFlagItem';
import { UIMgr } from '../../mgr/UIMgr';
import { AssociationChangeInfoPop } from './AssociationChangeInfoPop';
import { refreshFlagImg } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('AssociationChangeFlagPop')
export class AssociationChangeFlagPop extends ViewPop {
    @property(Prefab)
    pfb_flag: Prefab = null;
    @property(Node)
    node_content: Node = null;
    @property(Sprite)
    sp_flag_img:Sprite = null;
    private view:AssociationChangeInfoPop = null;
    onShow(): void {
        // 当前旗帜id
        this.view = UIMgr.ins.getView("AssociationChangeInfoPop").getComponent(AssociationChangeInfoPop);
        refreshFlagImg(this.view.curSelectFlagId,this.sp_flag_img);
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
    showView() {
        var self = this;
        this.node_content.destroyAllChildren();
        for (let i = 0; i < tab.getData().GuildFlagTable.length; i++) {
            const flagtab = tab.getData().GuildFlagTable[i];
            const item = instantiate(this.pfb_flag);
            item.parent = this.node_content;
            item.name = String(flagtab.Id);
            const itemTs: AssociationChangeFlagItem = item.getComponent(AssociationChangeFlagItem);
            itemTs.initData(flagtab.Id)
            itemTs.setSelectCb(() => {
                if (flagtab.Id === this.view.curSelectFlagId) {
                    return;
                } else {
                    itemTs.onSelect();
                    const _selectItem = self.node_content.getChildByName(String(self.view.curSelectFlagId));
                    _selectItem.getComponent(AssociationChangeFlagItem).unSelect();
                    self.view.curSelectFlagId = flagtab.Id;
                    refreshFlagImg(flagtab.Id,this.sp_flag_img);
                }
            })
            if (flagtab.Id === this.view.curSelectFlagId) {
                itemTs.onSelect();
            }
        }
    }
    /* 确定更换旗帜 */
    onClickChangeFlag(){
        this.view.refreshFlagId();
        this.onClose();
    }
}


