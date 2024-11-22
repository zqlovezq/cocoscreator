/*
 * @Descripttion: 选择联盟图标弹框
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";
import AllianceIconGroupPfb from "./AllianceIconGroupPfb";

const kMaxGroupCount = 5;
const {ccclass, property} = cc._decorator;

@ccclass
export default class SelectAllianceIconPopLayer extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Node)
    node_layout_icon_group: cc.Node = null;

    @property(cc.Prefab)
    pfb_alliance_icon_group: cc.Prefab = null;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateSelectAllianceIconIdx, (param: any)=>{
            this.setVisible(false);
        }, this);
    }

    public initData(){
        let allianceIconData = tab.Data.AllianceIconTable;
        if(isValidObj(allianceIconData)){
            this.clearOldIconGroupNode();
            
            let dataLen = allianceIconData.length;
            let tempIconArr: number[] = [];
            for(let idx = kZeroNumber; idx < dataLen; idx++){
                tempIconArr.push(allianceIconData[idx].ID);
                if(kMaxGroupCount == tempIconArr.length){ //每5个一组
                    this.loadAllianceIconData(tempIconArr);
                    tempIconArr = []; //清除上一组数据
                }
            }

            //检测剩余部分
            tempIconArr.length > kZeroNumber && this.loadAllianceIconData(tempIconArr);
        }
    }

    /* 清除旧的联盟图标组节点
     */
    private clearOldIconGroupNode(){
        for(let elem of this.node_layout_icon_group.getComponentsInChildren(AllianceIconGroupPfb)){
            elem.node.removeFromParent();
            elem.node.destroy();
        } 
    }

    /* 加载联盟图标
     * @param iconIdArr  图标id数组
     */
    private loadAllianceIconData(iconIdArr: number[]){
        if(iconIdArr.length > kZeroNumber){
            let iconGroup = cc.instantiate(this.pfb_alliance_icon_group).getComponent(AllianceIconGroupPfb);
            if(iconGroup){
                iconGroup.initData(iconIdArr);
                this.node_layout_icon_group.addChild(iconGroup.node);
            }
        }
    }
}
