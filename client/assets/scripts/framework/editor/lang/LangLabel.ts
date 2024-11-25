import { _decorator, CCInteger, Component, Label, RichText } from 'cc';
// @ts-ignore
import { EDITOR } from 'cc/env';
import { UIMgr } from '../../../logic/mgr/UIMgr';
import { LangMgr } from '../../../logic/mgr/LangMgr';
const {
    ccclass,
    property,
    executeInEditMode,
    menu,
} = _decorator;

@ccclass('LangLabel')
@executeInEditMode(true)
export default class LangLabel extends Component {
    @property({ visible: false })
    _key = '';

    @property({ visible: true, tooltip: '语言key' })
    set key(value: string) {
        this._key = value;
        this.render();
    }

    get key(): string {
        return this._key;
    }

    @property({ tooltip: "备注", displayName: "备注" })
    desc: string = ""

    label: Label | RichText | null = null;
    onLoad() {
        this.label = this.node.getComponent(Label) || this.node.getComponent(RichText)
        if (!EDITOR) {
            this.key = this._key
        }
    }

    render() {
        if (typeof this.label === 'undefined') {
            return;
        }
        if (EDITOR) {
            this.label.string = this.key
        } else {
            this.label.string = LangMgr.getLab(this.key)
        }
    }
}
