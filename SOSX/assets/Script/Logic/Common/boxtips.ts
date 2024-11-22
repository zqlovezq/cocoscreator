/**
 * 
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import shopboxTipslayer from "../shop/shopboxtipsLayer";
import { getBoxIDAndCfg, LoadPreNode, showPopLayerV2 } from "../Utils/GameUtils";
import { kNoneString } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class boxtips extends cc.Component {

    @property(cc.Node)
    nodetop: cc.Node = null

    @property(cc.Node)
    nodebom: cc.Node = null

    @property(cc.Label)
    goldnumber: cc.Label = null

    @property(cc.Label)
    cardnumber: cc.Label = null

    @property([cc.Node])
    quecardnode:cc.Node[] = []

    @property([cc.Label])
    quecardnode_number: cc.Label[] = []

    @property(cc.Node)
    maybenode:cc.Node = null

    @property([cc.Node])
    maybequecardnode:cc.Node[] = []

    @property([cc.Label])
    maybequecardnode_number: cc.Label[] = []

    public  static clickTargetUUid:string = ""

    public static showTips(groupId:number, target:cc.Node, boxid = 0){
        if(groupId > 0) {
            showPopLayerV2("prefab/shopboxTipslayer", shopboxTipslayer,false).then(nodeDetail=>{
                nodeDetail.setGrayVisible(false);
                nodeDetail.setViewbyGroupID(groupId, null);
            });
        } else if(boxid > 0) {
            showPopLayerV2("prefab/shopboxTipslayer",shopboxTipslayer,false).then(nodeDetail=>{
                nodeDetail.setGrayVisible(false);
                nodeDetail.justPreviewBoxInfoById(boxid)
            });
        }
        
        // {
        //     boxtips.clickTargetUUid = target.uuid
        //     LoadPreNode("prefab/boxtipsroot", boxtips).then((value:boxtips)=>{
        //         if(value) {
        //             let currscene = cc.director.getScene()
        //             currscene.addChild(value.node, cc.macro.MAX_ZINDEX - 100)
        //             value.setTips(groupId, target, boxid)
        //                cc.log("创建并显示tips")
        //         }
        //     }, (error)=>{})
        // }
    }


    onLoad () {
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips, (param: any)=>{
            this.node.active = false;
            boxtips.clickTargetUUid = kNoneString;
            cc.log("隐藏tips")
        }, this);
    }

    setTipsview(groupId, boxid = 0)
    {
        let boxCfg = null;
        if(groupId > 0)
        {
            let info:{boxId:number, boxCfg:tab.BoxTable} = getBoxIDAndCfg(groupId)    
            boxCfg = info.boxCfg
        }

        if(boxid > 0)
        {
            boxCfg = tab.Data.BoxTableByBoxID.getValue(boxid)
        }

        if(boxCfg == null)
        {
            return;
        }


        if(boxCfg.GoldMaxCount && boxCfg.GoldMaxCount > boxCfg.GoldCount)
        {

            this.goldnumber.string ="x" +  boxCfg.GoldCount.toString() + "~" + boxCfg.GoldMaxCount
        }
        else
        {
            this.goldnumber.string ="x" +  boxCfg.GoldCount.toString()
        }

        let sum = 0
        let sum1 = 0
        let whiteCardCnt = 0
        let que2num:Map<number, string> = new Map<number,string>()
        let que3num:Map<number, string> = new Map<number,string>()

        for(let i = 0; i<boxCfg.CardCount.length; i++)
        {
            sum1 += boxCfg.CardCount[i]
            if(boxCfg.CardCount[i] > 0)
            {
                if(boxCfg.CardWeight[i] >= 1000)
                {
                    sum += boxCfg.CardCount[i]
                    if(boxCfg.CardType[i] > 0)
                        que2num.set(boxCfg.CardType[i], boxCfg.CardCount[i].toString())
                    else
                    {
                        whiteCardCnt += boxCfg.CardCount[i]
                    }
                }
                else
                {
                    if(boxCfg.CardType[i] > 0)
                    {
                        que3num.set(boxCfg.CardType[i], boxCfg.CardCount[i].toString())
                    }
                }
            }
        }

        //卡牌总数
        sum < sum1 ? (this.cardnumber.string =  `x${sum}~${sum1}`) : (this.cardnumber.string =  `x${sum1}`)  

        for(let j=0; j<this.quecardnode.length; j++)
        {
            this.quecardnode[j].active = false
        }

        for(let j=0; j<this.quecardnode.length; j++)
        {
            this.maybequecardnode[j].active = false
        }

        let thistemp = this
        que2num.forEach((value, key)=>{
            if(key-1 < thistemp.quecardnode.length){
                thistemp.quecardnode[key-1].active = true
                thistemp.quecardnode_number[key-1].string = "x" + value
            }
        })

        this.nodebom.active = que2num.size > 0
        this.nodetop.active = (boxCfg.GoldCount &&  boxCfg.GoldCount > 0) || (whiteCardCnt > 0)

        this.maybenode.active = que3num.size > 0

        if(this.maybenode.active)
        {
            que3num.forEach((value, key)=>{
                if(key-1 < thistemp.maybequecardnode.length){
                    thistemp.maybequecardnode[key-1].active = true
                    thistemp.maybequecardnode_number[key-1].string = "x" + value
                }
            })
        }

        let layout:cc.Layout = this.node.getComponent(cc.Layout)
        if(layout)
        {
            layout.updateLayout()
        }
    }

    setTips(boxgroupID:number, target:cc.Node, boxID:number = 0)
    {
        
        this.setTipsview(boxgroupID, boxID)
        //该预制体的锚点（0.5， 1）
        let targetworldpos = target.convertToWorldSpaceAR(new cc.Vec2(0,0))
        let targetcontent = target.getContentSize()
        let targetanchor = target.getAnchorPoint()
        let thiscontent:cc.Size = this.node.getContentSize();
        let visiblesize = cc.view.getVisibleSize()
        let posx = targetworldpos.x
        let posy = targetworldpos.y
        if(targetworldpos.x + thiscontent.width / 2 > visiblesize.width)
        {
            posx -= (thiscontent.width / 2  - targetcontent.width * targetanchor.x )
        }
        else if(targetworldpos.x - thiscontent.width / 2 < 0)
        {
            posx += (thiscontent.width / 2 - targetcontent.width * targetanchor.x)
        }

        if(posy < visiblesize.height / 2)
        {
            posy += (thiscontent.height + targetcontent.height * targetanchor.y)
        }
        else
        {
            posy -= (targetcontent.height * targetanchor.y)
        }

        this.node.setPosition(new cc.Vec2(posx, posy))
        //this.node.setPosition(new cc.Vec2(0,0))

    }

   onDestroy()
   {
       boxtips.clickTargetUUid = ""
       cc.log("摧毁tips")

   }

    start () {

    }
}
