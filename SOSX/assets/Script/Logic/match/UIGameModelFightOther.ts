import CommonHelp from "../Common/CommonHelp";
import Role from "../Common/Role";
import { FightLoader } from "../Fight/FightLoader";
import { showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import UIGameModelFriendTips from "./UIGameModelFriendTips";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGameModelFightOther extends PopLayer {

    @property(cc.Node)
    close_btn: cc.Node = null; /*  */

    @property(cc.Button)
    with_friend_btn: cc.Button = null; /*  */

    @property(cc.Button)
    quick_start_btn: cc.Button = null; /*  */

    onLoad() {
        this.close_btn.on("click", () => { this.setVisible(false); }, this);
        this.with_friend_btn.node.on("click", this.onWithFriend, this);
        this.quick_start_btn.node.on("click", this.onQuickStart, this);
    }
    onHelpClick() {
        CommonHelp.show("FightHelp")
    }
    /*  */
    onWithFriend(event: cc.Event.EventTouch) {
        this.setVisible(false)
        showPopLayerV2("prefab/UIGameModelFriendTips", UIGameModelFriendTips, false).then(nodeFightOther => {

        });
    }

    /*  */
    onQuickStart(event: cc.Event.EventTouch) {
        if (!Role.Instance.IsGuideFinished()) {
            FightLoader.Instance.StartPvPGuide();
            return;
        }
        FightLoader.Instance.MatchPvP();
        // test
        // FightLoader.Instance.MatchBountyPvP();
    }
}
