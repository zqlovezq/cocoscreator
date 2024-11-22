/*
 * @Descripttion: 联盟图标组预制件
 */

import { kZeroNumber } from "../Common/CommonInterface";
import AllianceIconPfb from "./AllianceIconPfb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceIconGroupPfb extends cc.Component {

    @property(cc.Node)
    node_icon_1: cc.Node = null;

    @property(cc.Node)
    node_icon_2: cc.Node = null;

    @property(cc.Node)
    node_icon_3: cc.Node = null;

    @property(cc.Node)
    node_icon_4: cc.Node = null;

    @property(cc.Node)
    node_icon_5: cc.Node = null;

    private _alliance_icon_list: AllianceIconPfb[] = [];

    onDestroy(){
        this._alliance_icon_list = [];
    }

    public initData(iconIdxList: number[]){
        this.onFocusInEditor();
        let iconNodeArrLen = this._alliance_icon_list.length;
        let iconIdxArrLen  = iconIdxList.length;
        for(let idx = kZeroNumber; idx < iconIdxArrLen; idx++){
            if(idx < iconNodeArrLen){
                this._alliance_icon_list[idx].node.active = true;
                this._alliance_icon_list[idx].initData(iconIdxList[idx]);
            }
        }
    }

    protected onFocusInEditor(){
        if(this._alliance_icon_list.length == kZeroNumber){
            this.node_icon_1.active = false;
            this.node_icon_2.active = false;
            this.node_icon_3.active = false;
            this.node_icon_4.active = false;
            this.node_icon_5.active = false;
            
            this._alliance_icon_list.push(this.node_icon_1.getComponent(AllianceIconPfb));
            this._alliance_icon_list.push(this.node_icon_2.getComponent(AllianceIconPfb));
            this._alliance_icon_list.push(this.node_icon_3.getComponent(AllianceIconPfb));
            this._alliance_icon_list.push(this.node_icon_4.getComponent(AllianceIconPfb));
            this._alliance_icon_list.push(this.node_icon_5.getComponent(AllianceIconPfb));
        }
    }
}
