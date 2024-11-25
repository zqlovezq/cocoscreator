import { _decorator, Component, EditBox, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { AssociationControl } from './AssociationControl';
const { ccclass, property } = _decorator;

@ccclass('AssociationChangeNoticePop')
export class AssociationChangeNoticePop extends ViewPop {
    @property(EditBox)
    edit_box_change_notice:EditBox = null;//更改公会的公告
    onShow(): void {

    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
    /* 更改公告 */
    onClickChangeNotice() {
        if (this.edit_box_change_notice.string.length === 0) {
            console.log("更改公告不能为空")
            return;
        }
        this.onClose();
        AssociationControl.ins.reqSetGuildNotice(this.edit_box_change_notice.string);
    }
}


