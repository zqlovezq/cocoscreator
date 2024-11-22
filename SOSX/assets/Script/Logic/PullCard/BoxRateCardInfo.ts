/*
 * @Descripttion: 背包卡牌概率信息
 */

import { kThreeNumber } from "../Common/CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxRateCardInfo extends cc.Component {

    @property(cc.Label)
    lbl_card_name: cc.Label = null;

    @property(cc.Label)
    lbl_card_rate: cc.Label = null;

    public initData(name: string, rate: number){
        this.lbl_card_name.string = name;
        this.lbl_card_rate.string = `${rate.toFixed(kThreeNumber)}%`;
    }
}
