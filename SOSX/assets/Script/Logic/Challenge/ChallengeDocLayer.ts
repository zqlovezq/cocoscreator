
import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChanllengeDocLayer extends PopLayer {

    @property(cc.Label)
    label: cc.Label = null;


    @property(cc.Label)
    title: cc.Label = null

    @property(cc.Sprite)
    background: cc.Sprite = null

    setview(chalInfo:proto.IChallengeInfo)
    {
        if(!chalInfo)
        {
            return
        }

        let chaCfg:tab.ChallengeTable = tab.Data.ChallengeTableByID.getValue(chalInfo.challengeId)
        if(chaCfg)
        {
            this.label.string = chaCfg.ChallengeInfoDesc
            this.title.string = chaCfg.ChalTitle
            this.background.setTexture(chaCfg.ChalBg)
        }

    }

    start () {

    }
}
