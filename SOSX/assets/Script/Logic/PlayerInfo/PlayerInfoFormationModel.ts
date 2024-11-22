/*
 * @Descripttion: 玩家阵容模块
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { kZeroNumber } from "../Common/CommonInterface";
import CopyTeamSelect from "../Common/CopyTeamSelect";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import { ShowTips } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerInfoFormationModel extends cc.Component {

    @property(cc.Button)
    btn_copy_formation: cc.Button = null;

    @property(cc.Node)
    node_formation_card: cc.Node = null;

    @property(cc.Node)
    node_card_1: cc.Node = null;

    @property(cc.Node)
    node_card_2: cc.Node = null;

    @property(cc.Node)
    node_card_3: cc.Node = null;

    @property(cc.Node)
    node_card_4: cc.Node = null;

    @property(cc.Node)
    node_card_5: cc.Node = null;

    private _card_list: SmallPortrait[] = [];
    private _bSelf: boolean          = false;
    cardsInfo: proto.IFightCardData[];
    devilInfo: proto.IFightCardData;
    talentInfo: proto.ITalenItem[];

    onLoad () {
        this._card_list.push(this.node_card_1.getComponent(SmallPortrait));
        this._card_list.push(this.node_card_2.getComponent(SmallPortrait));
        this._card_list.push(this.node_card_3.getComponent(SmallPortrait));
        this._card_list.push(this.node_card_4.getComponent(SmallPortrait));
        this._card_list.push(this.node_card_5.getComponent(SmallPortrait));
        this.btn_copy_formation.node.on("click", this.onClickCopyFormation, this);

        /*
        Net.listenProtocol(proto.Ptl.CopyDeckRsp, function (buffer, ptl){
            let msg = proto.Msg_CopyDeckRsp.decode(buffer)
            if (msg != null){
                ShowTips("CopyTeamSuccess")
            }
        }, this)
        */
    }

    onDestroy(){
        this._card_list = [];
    }

    checkCopyCondition():boolean{
        let copydata = this.cardsInfo
        //检测卡牌和魔王
        // let lord = Role.Instance.RoleItemAtrr.getItemByStaticID(this.devilInfo.staticId)
        // if(!lord) {
        //     return false
        // }
        
        for(let i = 0; i<this.cardsInfo.length; i++){
            let card = Role.Instance.RoleItemAtrr.getItemByStaticID(this.cardsInfo[i].staticId)
            if(!card){
                return false
            }
        }
        return true
    }

    public initData(formationInfos: proto.IFightCardData[],  talentInfos: proto.ITalenItem[], bSelf: boolean){
        this._bSelf = bSelf;
        this.cardsInfo = formationInfos
        this.talentInfo = talentInfos
        this.btn_copy_formation.node.active = !bSelf
        this.setFormationCards(formationInfos);
    }

    /* 设置卡牌阵容信息
     * @param cardLists  卡牌列表
     */
    private setFormationCards(cardLists: proto.IFightCardData[]){
        let cardListLen = this._card_list.length;
        let dataLen = cardLists.length;
        for(let idx = kZeroNumber; idx < cardListLen; idx++){
            if(idx < dataLen){
                this._card_list[idx].initWithStaticId(cardLists[idx].staticId, false,undefined,cardLists[idx].level);
            }
        }
    }

    /*  */
    private onClickCopyFormation(){
        if(this.checkCopyCondition() === false){
            ShowTips("BattleLogCannotCopyTeam")
            return
        }
      
         //设置回调函数
         let copyfun = (deckindex:number)=>{
            let param = new proto.Msg_CopyDeckReq
            param.talent  =null
            param.DeckData = this.cardsInfo
            param.lordData = {"staticId":20001,"level":1}
            param.deckIndex = deckindex
            Net.Send(proto.Ptl.CopyDeckReq, param)
        }

        CopyTeamSelect.show(this.btn_copy_formation.node, copyfun) /* 弹出气泡界面 */
    }
}
