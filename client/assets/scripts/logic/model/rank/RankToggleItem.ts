/*
 * @Date: 2024-06-13 09:54:30
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-13 10:19:29
 */

import { _decorator, Component, EventTouch, Label, Node, Toggle } from 'cc';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('RankToggleItem')
export class RankToggleItem extends Component {
    @property(Node)
    node_toggle: Node = null;
    @property(Label)
    lbl_toggle_name: Label = null;
    @property(Node)
    node_arrow: Node = null;
    private _toggle_type: RANKING_TYPE = RANKING_TYPE.NONE
    private _clickChildType: number = 0;

    setData(type) {
        this.node.name = String(type);
        this._toggle_type = type;
        //const nameLblArr = ["闯关榜","等级榜","战力榜"];
        const nameLblArr = [LangMgr.getLab("ui_rank_4"), LangMgr.getLab("ui_rank_5"), LangMgr.getLab("ui_rank_6"), LangMgr.getLab("ui_rank_8")]
        if (this._toggle_type === RANKING_TYPE.HERO) {
            //this.lbl_toggle_name.string = "英雄榜"
            this.lbl_toggle_name.string = LangMgr.getLab("ui_rank_3");
        }else if(this._toggle_type === RANKING_TYPE.GUILD){
            this.lbl_toggle_name.string = LangMgr.getLab("ui_rank_9");
        }else if (this._toggle_type == RANKING_TYPE.Fight){
            this.lbl_toggle_name.string = LangMgr.getLab("ui_rank_10");
        } else {
            this.lbl_toggle_name.string = nameLblArr[type - 6];
        }
        this.node_arrow.active = false;
    }
    onClickCheck(e:EventTouch,type:string) {
        this.node_arrow.active = false;
        this.node.getComponent(Toggle).isChecked = true;
        if (type) {
            this._toggle_type = Number(type);
        }
        if (this._toggle_type === RANKING_TYPE.HERO) {
            this._clickChildType = 0;
            if (this.node_toggle.active) {
                this.node_toggle.active = false;
                this.node_arrow.active = true;
                this.node_arrow.children[0].active = false;
                this.node_arrow.children[1].active = true;
            } else {
                this.node_toggle.active = true;
                this.node_arrow.active = true;
                this.node_arrow.children[0].active = true;
                this.node_arrow.children[1].active = false;
                this.node_toggle.children[0].getComponent(Toggle).isChecked = true;
                this.onCheckChild(null, "1");
            }
        } else {
            const heroItem = this.node.parent.getChildByName(String(RANKING_TYPE.HERO)).getComponent(RankToggleItem)
            heroItem.node_toggle.active = false;
            heroItem.node_arrow.active = true;
            heroItem.node_arrow.children[0].active = false;
            heroItem.node_arrow.children[1].active = true;
            EventMgr.emitLocal(LocalEvent.Rank_Change, Number(this._toggle_type));
        }
    }
    onCheckChild(event: EventTouch, index: string) {
        if (this._clickChildType !== Number(index)) {
            this._clickChildType = Number(index)
        } else {
            return;
        }
        EventMgr.emitLocal(LocalEvent.Rank_Change, Number(index));
    }
}


