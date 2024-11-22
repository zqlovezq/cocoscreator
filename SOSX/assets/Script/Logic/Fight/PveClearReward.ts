/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { setColorRecursively } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

type ClickFunc = (wave:number, gold:number, status:proto.PveDailyStatus)=>void;

@ccclass
export default class PveClearReward extends cc.Component {

    @property(cc.Label)
    lblGold: cc.Label = null;

    @property(cc.Label)
    lblWave: cc.Label = null;

    @property(cc.Node)
    nodeRedDot: cc.Node = null;

    @property(cc.Node)
    nodeReceived: cc.Node = null;

    @property(cc.Node)
    grayNode:cc.Node = null;

    protected _clickCallback:ClickFunc = null;
    protected _wave:number = 0;
    protected _gold:number = 0;
    protected _status:proto.PveDailyStatus;

    setRewardData(gold:number, wave:number, status:proto.PveDailyStatus) {
        this._wave = wave;
        this._gold = gold;
        this.lblGold.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${gold}`
        this.lblWave.string = `${wave}`
        this.setStatus(status)
    }

    setStatus(status:proto.PveDailyStatus) {
        this._status = status;
        switch(status) {
        case proto.PveDailyStatus.Incomplete:
            this.nodeRedDot.active = false;
            this.nodeReceived.active = false;
            setColorRecursively(this.grayNode, cc.Color.WHITE)
            this.node.getComponent(cc.Button).interactable = true;
            break;
        case proto.PveDailyStatus.Complete:
            this.nodeRedDot.active = true;
            this.nodeReceived.active = false;
            setColorRecursively(this.grayNode, cc.Color.WHITE)
            this.node.getComponent(cc.Button).interactable = true;
            break;
        case proto.PveDailyStatus.Received:
            this.nodeRedDot.active = false;
            this.nodeReceived.active = true;
            setColorRecursively(this.grayNode, cc.Color.GRAY)
            this.node.getComponent(cc.Button).interactable = false;
            break;
        }
    }

    setClickCallback(func:ClickFunc) {
        this._clickCallback = func;
    }

    onClick() {
        if(this._clickCallback) {
            this._clickCallback(this._wave, this._gold, this._status);
        }
    }

    Wave() {
        return this._wave
    }
}
