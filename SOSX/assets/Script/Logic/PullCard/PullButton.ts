
import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PullButton extends cc.Component {

    @property(cc.Node)
    cost: cc.Node = null;

    @property(cc.Node)
    free: cc.Node = null;

    updateButtonInfo(leftFreeCount: number, pullOption: proto.PullCardType){
        // 设置可点击
        this.setInterEnable(true);

        let pullCardTab = tab.Data.PullCardTableByPullType.getValue(<number>(pullOption));
        if(null == pullCardTab){
            throw `cannot find PullCardTable by id ${pullOption}`;
        }

        // 免费
        if(pullOption == proto.PullCardType.Free){
            this.free.active = true;
            this.cost.active = false;
            let maxFreeCount = tab.Data.GetKeyValue_ConfigTable().FreePullCardCount;
            let node_info = this.free.getChildByName("info");
            if (node_info){
                let node_count = node_info.getChildByName("lab_count");
                if(node_count){
                    let lab_count = node_count.getComponent(cc.Label);
                    if(lab_count){
                        let text_count = `${leftFreeCount}/${maxFreeCount}`;
                        lab_count.string = text_count;
                    }
                }
            }

            if(leftFreeCount <= 0){
                this.setInterEnable(false);
            }
        } else { // 自费
            this.free.active = false;
            this.cost.active = true;
            let node_info = this.cost.getChildByName("info");
            if (node_info){
                let node_count = node_info.getChildByName("lab_cost_count");
                if(node_count){
                    let lab_cost_count = node_count.getComponent(cc.Label);
                    lab_cost_count.string = pullCardTab.CostDiamond.toString();
                }
            }
        }
    }

    private setInterEnable(param: boolean) {
        let button = this.node.getComponent(cc.Button);
        if (button) {
            button.interactable = param;
        }
    }
}
