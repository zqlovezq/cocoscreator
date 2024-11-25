import { _decorator, Component, Label, Node, RichText } from 'cc';
import { RookieTaskPop } from './RookieTaskPop';
import { ShowTips } from '../../../mgr/UIMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { TRIALLAYER } from '../../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('TrialToggleBtn')
export class TrialToggleBtn extends Component {
    @property(Node)
    node_lock: Node = null;
    @property(Node)
    node_red: Node = null;
    private mainView: RookieTaskPop = null;
    private layer_view: TRIALLAYER = TRIALLAYER.NONE
    private select: boolean = false;
    private isLock: boolean = false;
    private node_toggle: Node = null;
    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_END, this.clickBtn, this);
    }
    initToggle(mainView: RookieTaskPop, isSelect: boolean, isLock: boolean, index: number) {
        this.mainView = mainView;
        this.layer_view = this.mainView.getLayerType();
        const rookieNode = this.node.getChildByName("rookie_node");
        const eliteNode = this.node.getChildByName("elite_node");
        rookieNode.active = false;
        eliteNode.active = false;
        this.node_toggle = this.layer_view === TRIALLAYER.ROOKIE ? rookieNode : eliteNode;
        this.setSelect(isSelect)
        this.isLock = isLock;
        this.node_lock.active = isLock;
        if (this.layer_view === TRIALLAYER.ROOKIE) {
            rookieNode.active = true;
            const text1 = rookieNode.getChildByName("richtext").getComponent(RichText);
            const text2 = rookieNode.getChildByName("Checkmark").getChildByName("select_richtext").getComponent(RichText);
            text1.string = LangMgr.getCombineString('ui_trial_1', [index])
            text2.string = LangMgr.getCombineString('ui_trial_3', [index])
        } else {
            eliteNode.active = true;
            const text1 = eliteNode.getChildByName("richtext").getComponent(RichText);
            const text2 = eliteNode.getChildByName("Checkmark").getChildByName("select_richtext").getComponent(RichText);
            text1.string = LangMgr.getCombineString('ui_trial_2', [index])
            text2.string = LangMgr.getCombineString('ui_trial_3', [index])
        }
    }
    setSelect(isSelect: boolean) {
        this.select = isSelect;
        this.node_toggle.getChildByName("Checkmark").active = isSelect;
    }
    clickBtn() {
        if (this.select) {
            return;
        } else {
            if (this.isLock) {
                ShowTips(LangMgr.getLab("ui_commondesc_85"));
                return;
            } else {
                // 切换天数
                this.mainView.clickSwitchDay(this, Number(this.node.name));
                this.setSelect(true);
            }
        }
    }
}


