/*
 * @Descripttion: 宝箱展示通用模块
 */

import { tab } from "../../Table/table_gen";
import Taskitemshow from "../Task/Taskitemshow";
import { LoadResAsync } from "../Utils/GameUtils";
import boxtips from "./boxtips";
import { isValidObj } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxShowNode extends cc.Component {

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property({ type:cc.Sprite})
    spr_box_icon: cc.Sprite = null;

    @property({displayName:"数量", type:cc.Label})
    lbl_count: cc.Label = null;

    staticId = 0;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchClick, this);
    }

    public initData(staticId: number){
        let boxTabData = tab.Data.BoxTableByBoxID.getValue(staticId);
        if (!isValidObj(boxTabData)){
            if(!cc.sys.isNative){throw new Error("BoxTableData is valid!");}
            return;
        }

        this.staticId = staticId;

        this.setBoxOfferCount(boxTabData.CardCount);
        this.setBoxIcon(boxTabData.ItemIcon);
        this.spr_box_icon.node.scale = 1
    }

    /* 设置宝箱 icon
     * @param iconURL icon路径
     */
    private async setBoxIcon(iconURL: string){
        let sf = await LoadResAsync(iconURL, cc.SpriteFrame)
        if(sf) {
            this.spr_box_icon.spriteFrame = sf;
        }
    }

    /* 设置宝箱提供的数量值
     * @param counts 宝箱数量数值
     */
    private setBoxOfferCount(counts: number[]){
        let sumVal = 0;
        for (let value of counts){
            sumVal += value;
        }

        this.lbl_count.string = `x${sumVal}`;
    }

    /*  */
    onTouchClick(){
        boxtips.showTips(0, this.node, this.staticId)
    }

}
