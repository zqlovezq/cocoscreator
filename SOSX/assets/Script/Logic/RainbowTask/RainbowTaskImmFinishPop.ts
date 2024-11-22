/*
 * @Descripttion: 立即完成任务弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import JumpShop from "../DeckLayer/JumpShop";
import { showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import ImmFinishRainbowTaskEffect from "./ImmFinishRainbowTaskEffect";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RainbowTaskImmFinishPop extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_cost_diamond: cc.Button = null;

    @property(cc.Button)
    btn_cost_gold: cc.Button = null;

    @property(cc.Label)
    lbl_cost_diamond: cc.Label = null;

    @property(cc.Label)
    lbl_cost_gold: cc.Label = null;

    private _task_uuid: string;
    private _star_level: number = kZeroNumber;

    onLoad () {
        this.btn_closed.node.on("click",       ()=>{this.setVisible(false);},     this);
        this.btn_cost_diamond.node.on("click", this.onClickCostDiamondFinishTask, this);
        this.btn_cost_gold.node.on("click",    this.onClickCostGoldFinishTask,    this);

        //立即完成已经开启的指定彩虹任务
        Net.listenProtocol(proto.Ptl.ImmFinishRainbowTaskRsp, (buffer, ptl)=>{
           let msg = proto.Msg_ImmFinishRainbowTaskRsp.decode(buffer);
           cc.log("ImmFinishRainbowTaskRsp (立即完成已经开启的指定彩虹任务) msg: " + JSON.stringify(msg))
           if (msg && proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.Succeed == msg.result){ 
                showPopLayerV2("prefab/ImmFinishRainbowTaskEffect", ImmFinishRainbowTaskEffect).then(layer =>{
                    layer.initData(this._star_level);
                });
                this.setVisible(false);   
           }
        }, this);

        //监听跳转商店消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, (param: any)=>{
            this.setVisible(false);
        }, this);
    }

    /*  */
    public initData(taskUUID: string, starLv: number){
        this._task_uuid  = taskUUID;
        this._star_level = starLv;
        this.setCostGoldCnt();
        this.setCostDiamondCount();
    }

    /* 设置消耗的金币数
     */
    private setCostGoldCnt(){
        let cnt = tab.Data.GetKeyValue_ConfigTable().ImmFinishRainbowTaskCostGold;
        this.lbl_cost_gold.string     = `${cnt}`;
        this.lbl_cost_gold.node.color = Role.Instance.RoleData.gold < cnt ? cc.Color.RED : cc.Color.WHITE;
    }

    /* 设置消耗的钻石数
     */
    private setCostDiamondCount(){
        let cnt = tab.Data.GetKeyValue_ConfigTable().ImmFinishRainbowTaskCostDiamond;
        this.lbl_cost_diamond.string     = `${cnt}`;
        this.lbl_cost_diamond.node.color = Role.Instance.RoleData.diamond < cnt ? cc.Color.RED : cc.Color.WHITE;
    }

    /*  */
    private onClickCostGoldFinishTask(){
        if(Role.Instance.RoleData.gold < tab.Data.GetKeyValue_ConfigTable().ImmFinishRainbowTaskCostGold){
            showPopLayerV2("prefab/JumpShop", JumpShop).then(layer =>{
            });
            return;
        }
        this.requestImmFinishTask(true);
    }

    /*  */
    private onClickCostDiamondFinishTask(){
        if(Role.Instance.RoleData.diamond < tab.Data.GetKeyValue_ConfigTable().ImmFinishRainbowTaskCostDiamond){
            showPopLayerV2("prefab/JumpShop", JumpShop).then(layer =>{
                layer.initData(true);
            });
            return;
        }
        this.requestImmFinishTask(false);
    }

    /* 请求立即完成任务
     */
    private requestImmFinishTask(bCostGold: boolean){
        let param       = new proto.Msg_ImmFinishRainbowTaskReq();
        param.bCostGold = bCostGold;
        param.taskUUID  = this._task_uuid;
        Net.Send(proto.Ptl.ImmFinishRainbowTaskReq, param);
    }
}
