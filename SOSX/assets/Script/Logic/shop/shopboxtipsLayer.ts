/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import { getBoxIDAndCfg, setGray, ShowTips } from "../Utils/GameUtils";
import { kNoneString, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";

import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class shopboxTipslayer extends PopLayer {

    @property(cc.Node)
    boxspinenode: cc.Node = null

    @property(cc.Label)
    fromname: cc.Label = null

    @property(cc.Label)
    boxname: cc.Label = null

    @property(cc.Label)
    goldnumber: cc.Label = null

    @property(cc.Node)
    goldNode:cc.Node = null

    @property(cc.Node)
    cardNodeBg: cc.Node = null

    @property(cc.Layout)
    cardNodeLayout: cc.Layout = null
   
    @property([cc.Node])
    quecardnode:cc.Node[] = []

    @property([cc.Label])
    quecardnode_number: cc.Label[] = []   

    @property(cc.Label)
    opennowcost: cc.Label = null

    @property(cc.Node)
    notincludeonenode: cc.Node = null

    @property(cc.Node)
    notincludeonenodebg: cc.Node = null

    @property(cc.Node)
    costnode: cc.Node = null

    @property(cc.Sprite)
    costIcon: cc.Sprite = null

    @property(cc.Node)
    avdfreenode: cc.Node = null

    @property(cc.Node)
    ensurenode: cc.Node = null

    @property(cc.Node)
    freetxtnode: cc.Node = null

    @property(cc.Node)
    timesLimitNode: cc.Node = null

    @property(cc.Label)
    timesLimit: cc.Label = null

    pullOption:number = -1;
    pullTimes:number = 0
   
    callback:Function = null
    costinfo: proto.IItemSimpleInfo = null;

    /*  */
    setcallback(callback:Function){
        this.callback = callback
    }

    /*  */
    UnlockBox(){
        if(!this.costinfo){
            this.hide()
            return
        }

        if(this.costinfo.itemId == proto.ConstItemID.CTI_Diamond){
            if(Role.Instance.RoleData.diamond < this.costinfo.itemCount){
                ShowTips("DiamondNotEnough")
                return
            }
        }

        if(this.costinfo.itemId == proto.ConstItemID.CTI_Gold){
            if(Role.Instance.RoleData.gold < this.costinfo.itemCount){
                ShowTips("OnlyGoldNotEnough")
                return
            }
        } 

        if(this.callback){
            this.callback()
        }
        this.scheduleOnce(this.hide, 0.1)
    }

    /*  */
    setView(index:number, times?:number){
        this.pullOption = index;
        this.pullTimes = times || 0;
        let pullcardcfg:tab.PullCardTable = tab.Data.PullCardTableByPullType.getValue(index);
        this.setViewbyGroupID(pullcardcfg.BoxGroupID,{ itemId:proto.ConstItemID.CTI_Diamond, itemCount: pullcardcfg.CostDiamond});
    }

    /*  */
    justPreviewBoxInfoById(Id:number){
        let boxcfg = tab.Data.BoxTableByBoxID.getValue(Id)
        if(boxcfg){
            this.setViewByBoxInfo({boxId:Id, boxCfg:boxcfg})
        }

        this.costnode.active = false
        this.avdfreenode.active = false
        this.ensurenode.active = true
        if(boxcfg.GoldCount <= 0){
            this.onlyCardSize()
        }
    }

    /*  */
    setViewByBoxInfo(info:{boxId:number, boxCfg:tab.BoxTable}){
        let ranklv:number = Role.Instance.RoleGrade

        let spine:sp.Skeleton = this.boxspinenode.getComponent(sp.Skeleton)
        if(spine){
            spine.setAnimation(0, info.boxCfg.BoxSpineActionName, false)
        }

        let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
        this.fromname.string = str + ranklv
        this.boxname.string = info.boxCfg.BoxName
        
        if(info.boxCfg.GoldMaxCount > info.boxCfg.GoldCount){
            this.goldnumber.string = tab.Data.GetKeyValue_ConfigTable().MultiFlag +  info.boxCfg.GoldCount.toString() + "~" + info.boxCfg.GoldMaxCount
        } else {
            this.goldnumber.string = tab.Data.GetKeyValue_ConfigTable().MultiFlag + info.boxCfg.GoldCount.toString()
        }

        this.goldNode.active = info.boxCfg.GoldCount > 0

        let que2num:Map<number, string> = new Map<number,string>()  //<品质，数量>
        let que3num:Map<number, string> = new Map<number,string>()  //<品质，数量>

        for(let i = 0; i<info.boxCfg.CardCount.length; i++){
            //sum1 += info.boxCfg.CardCount[i]
            if(info.boxCfg.CardCount[i] > 0) {
                if(info.boxCfg.CardWeight[i] >= 1000) {
                    //sum += info.boxCfg.CardCount[i]
                    que2num.set(info.boxCfg.CardType[i], info.boxCfg.CardCount[i].toString())  //必包含的卡
                } else {
                    que3num.set(info.boxCfg.CardType[i], info.boxCfg.CardCount[i].toString())  //可包含的卡
                }
            }
        }

        let thistemp = this
        let showcnt:number = 0
        que2num.forEach((value, key)=>{
            if(key < thistemp.quecardnode.length){
                thistemp.quecardnode[key].active = true
                thistemp.quecardnode_number[key].string = value
                showcnt++
            }
        })

        que3num.forEach((value, key)=>{
            if(key < thistemp.quecardnode.length){
                thistemp.quecardnode[key].active = true
                thistemp.quecardnode_number[key].string = "" + value
                // 可包含的卡增加概率显示
                let weight = info.boxCfg.CardWeight[key];
                let pro = thistemp.quecardnode[key].getChildByName("pro");
                pro.active = true;
                pro.getComponent(cc.Label).string = weight/10+"%";
                showcnt++
            }
        })

        if(showcnt == 1){
           this.cardNodeLayout.node.setContentSize(this.quecardnode[0].getContentSize())
        }
    }

    /*  */
    onlyCardSize(){
        // this.cardNodeBg.setContentSize(new cc.Size(570,128))
        // this.cardNodeLayout.node.setContentSize(new cc.Size(430,112))
        // this.cardNodeLayout.spacingX = 80
        // this.cardNodeLayout.spacingY = 50
    }
    
    /*  */
    setViewbyGroupID(groupId, Cost:proto.IItemSimpleInfo, ntype:number = 0){
        if(this.pullOption > 0){ //宝箱非免费抽奖
           // this.timesLimitNode.active = true
            let total = tab.Data.GetKeyValue_ConfigTable().PullCardDailyMaxCount
            this.timesLimit.string = `${total-this.pullTimes}/${total}`
        }

        let info:{boxId:number, boxCfg:tab.BoxTable} = getBoxIDAndCfg(groupId)    
        
        if(null == info.boxCfg){
            return
        }
        
        this.setViewByBoxInfo(info)
        if(Cost == null) { //只显示确定按钮
            this.costnode.active = false
            this.avdfreenode.active = false
            this.ensurenode.active = true
            if(info.boxCfg.GoldCount <= 0){
                this.onlyCardSize()
            }
            return
        }

        let itemcfg:tab.ItemTable = tab.Data.ItemTableByID.getValue(Cost.itemId)
        if(itemcfg){
            this.costIcon.setTexture(itemcfg.Icon)
        }
        this.opennowcost.string = Cost.itemCount.toString()
        this.costnode.active = Cost.itemCount > 0
        this.avdfreenode.active = Cost.itemCount <= 0 && ntype == 0
        this.ensurenode.active = false
        if(this.avdfreenode.active){
            let totaltimes = tab.Data.GetKeyValue_ConfigTable().FreePullCardCount
            setGray(this.avdfreenode.parent.getComponent(cc.Sprite), this.pullTimes >= totaltimes)
        }

        this.freetxtnode.active = Cost.itemCount <= 0 && ntype == 1

        let red = new cc.Color(247, 18, 22)
        if(Cost.itemId == proto.ConstItemID.CTI_Diamond){
            Role.Instance.RoleData.diamond < Cost.itemCount ? this.opennowcost.node.color = red : this.opennowcost.node.color = cc.Color.WHITE
        } 

        if(Cost.itemId == proto.ConstItemID.CTI_Gold){
            Role.Instance.RoleData.gold < Cost.itemCount ? this.opennowcost.node.color = red : this.opennowcost.node.color = cc.Color.WHITE
        }
        this.costinfo = Cost
    }

    /*  */
    onLoad () {
        this.timesLimitNode.active = false
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips, (param: any)=>{
            this.node.active = false;
        }, this);
    }

    /* zhibo+S@20230410 for <> */
    setTarget(targetNode){
        let target = targetNode
        cc.log("target: " + target)
        // 获取targetNode的世界坐标
        let targetWorldPos = target.convertToWorldSpaceAR(new cc.Vec2(kZeroNumber, kZeroNumber));
        let targetContent  = target.getContentSize();
        let targetAnchor   = target.getAnchorPoint();
        let posX           = targetWorldPos.x;
        let posY           = targetWorldPos.y;
        // if(posX+210>720){
        //     // 修正一下
        //     posX = 510
        // }
        // if(posX-210<0){
        //     posX = 210
        // }
        // this.node.setPosition(new cc.Vec3(posX, posY, 0))
        this.node.setPosition(new cc.Vec3(360, 640, 0));
        //cc.log(this.node.getPosition())
    }
    /* zhibo+E@20230410 for <> */

    start () {
        cc.log("shopboxtipsLayer.ts : start()")
    }
}
