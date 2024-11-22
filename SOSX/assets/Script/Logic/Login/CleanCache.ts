/*
 * @Descripttion: 
 */

import SdkManager from "../Utils/SdkManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CleanCache extends cc.Component {

    start () {}

    public cleanCache(){
        SdkManager.Instance.CleanCache();
    }
}
