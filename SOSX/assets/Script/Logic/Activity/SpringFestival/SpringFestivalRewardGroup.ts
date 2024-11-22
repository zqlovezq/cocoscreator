/*
 *  春节签到奖励组模块
 */

import { proto } from "../../../Protocol/client_protocol";
import { kZeroNumber } from "../../Common/CommonInterface";
import SpringFestivalRewardInfo from "./SpringFestivalRewardInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpringFestivalRewardGroup extends cc.Component {

    @property(SpringFestivalRewardInfo)
    node_reward_1: SpringFestivalRewardInfo = null;

    @property(SpringFestivalRewardInfo)
    node_reward_2: SpringFestivalRewardInfo = null;

    @property(SpringFestivalRewardInfo)
    node_reward_3: SpringFestivalRewardInfo = null;

    @property(SpringFestivalRewardInfo)
    node_reward_4: SpringFestivalRewardInfo = null;

    private _reward_node_list: SpringFestivalRewardInfo[] = [];

    onLoad () {
        this.onFocusInEditor();
    }

    start () {

    }

    onDestroy(){
        this._reward_node_list = [];
    }

    public initData(infos: proto.ISpringFestivalInfoData[], startDay: number){
        this.initNodeVisible();

        const kInfoGroup = 4;
        startDay   *= kInfoGroup;
        let infoLen = infos.length;
        for(let idx = kZeroNumber; idx < infoLen; idx++){
            startDay++;
            this._reward_node_list[idx].node.active = true;
            this._reward_node_list[idx].initData(infos[idx], startDay);
        }
    }

    private initNodeVisible(){
        this.node_reward_1.node.active = false;
        this.node_reward_2.node.active = false;
        this.node_reward_3.node.active = false;
        this.node_reward_4.node.active = false;
    }

    protected onFocusInEditor(){
        this._reward_node_list = [];
        this._reward_node_list.push(this.node_reward_1);
        this._reward_node_list.push(this.node_reward_2);
        this._reward_node_list.push(this.node_reward_3);
        this._reward_node_list.push(this.node_reward_4);
    }
}
