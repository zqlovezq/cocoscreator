
import { tab } from "../../Table/table_gen";

const {ccclass, property} = cc._decorator;

@ccclass
export default class QualityItem extends cc.Component {

    @property(cc.Sprite)
    s_quality_frame: cc.Sprite = null;

    @property(cc.Sprite)
    s_quality: cc.Sprite = null;

    @property(cc.Label)
    lab_count: cc.Label = null;

    initData(qulity: tab.ItemQuality, count: number, weight: number){
        let qualityTab = tab.Data.QualityTableByQuality.getValue(qulity);
        if(null == qualityTab){
            cc.error("quality is error", qulity);
        }

        this.s_quality_frame.setTexture(qualityTab.QualityFrame);
        this.s_quality.setTexture(qualityTab.QualityFile);
        this.lab_count.string = "x" + count.toString();
        if(weight < 1000){
            this.lab_count.string = "0~" + count.toString();
        }
    }
}
