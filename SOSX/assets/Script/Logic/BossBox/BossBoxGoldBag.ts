/*
 * @Descripttion: 战场地图红点管理类
 */

import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PassportFunc from "../passport/PassportFunc";
import MainsceneBossBox from "./MainsceneBossBox";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossBoxGoldBag extends InfiniteCell {

    @property(cc.Node)
    havePassEvil: cc.Node = null

    @property(cc.Node)
    notHavePassEvil: cc.Node = null

    @property(cc.Label)
    notHaveMaxnumber: cc.Label = null


    @property(cc.Label)
    curnumber: cc.Label = null;

    @property(cc.Label)
    maxnumber: cc.Label = null;

    UpdateContent() {
        this.curnumber.string = String(PassportFunc.getCurGoldbagNumber())
        this.maxnumber.string = String(tab.Data.GetKeyValue_ConfigTable().BossBoxMaxGoldLimit)

        this.notHaveMaxnumber.string = String(tab.Data.GetKeyValue_ConfigTable().BossBoxMaxGoldLimit)

        this.havePassEvil.active = Role.Instance.isDemonPass != false
        this.notHavePassEvil.active = Role.Instance.isDemonPass == false
    }

    GetScoreNode(){
        return null
    }

    setView(curCnt:number, maxCnt:number){
      
    }

    start () {

    }
}
