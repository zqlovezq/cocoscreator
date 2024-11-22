/**
 *
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { NestableScrollView } from "../Common/NestableScrollView_Outer";
import Role from "../Common/Role";
import { getServerUtcTime } from "../Utils/GameUtils";
import ChallengeCell from "./ChallengeCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChallengeList extends cc.Component {

    @property(cc.Label)
    emptyRunningLabel: cc.Label = null

    @property(cc.Label)
    emptyPreviewLabel: cc.Label = null

    @property(cc.Node)
    previewScroll: cc.Node = null

    @property(cc.Prefab)
    challengeCell: cc.Prefab = null

    @property(cc.Node)
    runningNode: cc.Node = null

    @property(cc.Node)
    curcellnode: cc.Node = null

    @property(cc.Node)
    listnode: cc.Node = null

    onLoad () {
        /* 重置挑战次数 */
        Net.listenProtocol(proto.Ptl.ChallengeCountResetRsp, function (buffer, ptl){
            let msg = proto.Msg_ChallengeCountResetRsp.decode(buffer)
            cc.log("ChallengeCountResetRsp(重置挑战次数) : msg " + JSON.stringify(msg));
            if (msg != null){
                if(msg.result == proto.CommonErrorCode.Succeed){
                    Role.Instance.challengeData.challengeData.failCount = 0
                    let cell = this.runningNode.getComponentInChildren(ChallengeCell)
                    if(cell){
                        cell.refresh()
                    }
                }
            }
        }, this)
    }

    /*  */
    setView(){
        let chalInfo = Role.Instance.challengeData
        let curchal:proto.IChallengeInfo = null;
        //先设置下预开启的
        if(chalInfo && chalInfo.challengeInfos) { 
            let info:proto.IChallengeInfo = null
            let svrtime = getServerUtcTime()
            let j = 0;
            for(let i = 0; i < chalInfo.challengeInfos.length; i++){
                info = chalInfo.challengeInfos[i]
                if(info.startUTC > svrtime) { //未开启
                    let cell = this.listnode.children[j++] 
                    if(!cell){
                        cell = cc.instantiate(this.challengeCell)
                        this.listnode.addChild(cell)
                    }
                    
                    if(cell){
                        cell.active = true
                        cell.getComponent(ChallengeCell).setView(info)
                    }
                } else if(info.startUTC <= svrtime && info.endUTC > svrtime) { //正在开启
                    curchal = info;
                    chalInfo.challengeData.challengeId = info.challengeId
                }
            }

            for(let k = j; k < this.listnode.childrenCount; k++){
                this.listnode.children[k].active = false
            }
        }

        if(this.listnode.childrenCount == 0){
            this.emptyPreviewLabel.node.active = true
            this.listnode.active = false
        }
      
        if(curchal == null){
            chalInfo.challengeData.challengeId = 0
        }

        //正在开启的
        this.runningNode.active = true
        if(chalInfo.challengeData.challengeId == undefined || chalInfo.challengeData.challengeId == 0) {
            //当前没有挑战
            this.curcellnode.active = false
            this.emptyRunningLabel.node.active = true
        } else {
            this.curcellnode.active = true
            this.emptyRunningLabel.node.active = false
            let cell = this.runningNode.getComponentInChildren(ChallengeCell)
            if(cell){
                cell.setView(curchal)
            }
        }
    }

}
