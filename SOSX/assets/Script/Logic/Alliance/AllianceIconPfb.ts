/*
 * @Descripttion: 联盟图标预制件
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import { LoadResAsync } from "../Utils/GameUtils";
import { setAllianceBadge } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceIconPfb extends cc.Component {

    @property(cc.Button)
    btn_click: cc.Button = null;

    @property(cc.Sprite)
    spr_icon: cc.Sprite = null;

    private _alliance_icon_idx: number = kZeroNumber;

    onLoad () {
        this.btn_click.node.on("click", this.onClickSelected, this);
    }

    public initData(idx: number){
        this._alliance_icon_idx = idx;
        this.setAllianceIcon();
    }

    private setAllianceIcon(){
        setAllianceBadge(this.spr_icon, this._alliance_icon_idx);
    }
    
    private onClickSelected(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateSelectAllianceIconIdx, this._alliance_icon_idx);
    }
}
