
import { tab } from "../../Table/table_gen";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardQualityCount extends cc.Component {

    @property(cc.Label)
    lab_count: cc.Label = null;

    @property(cc.Sprite)
    count_frame: cc.Sprite = null;

    @property(cc.Sprite)
    quality_icon: cc.Sprite = null;

    initData(qulity: tab.ItemQuality, count: number, weight: number){
        let qualityTab = tab.Data.QualityTableByQuality.getValue(qulity);
        if(null == qualityTab){
            cc.error("quality is error", qulity);
        }

        this.quality_icon.setTexture(qualityTab.PullCardFile);
        this.lab_count.string = "x" + count.toString();
        if(weight < 1000){
            this.lab_count.string = "0~" + count.toString();
        }
    }
}
