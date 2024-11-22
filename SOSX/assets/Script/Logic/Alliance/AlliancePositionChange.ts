/*
 * @Descripttion: 
 */

import MainMessage from "../Common/MainMessage";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AlliancePositionChange extends PopLayer {

    start () {
        MainMessage.Instance.setPopAllianceLeaderReplace(false);
    }
}
