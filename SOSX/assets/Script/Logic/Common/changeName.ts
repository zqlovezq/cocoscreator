
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import GuideController from "../Guide/GuideController";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SdkManager from "../Utils/SdkManager";
import SensitiveWordsManager from "../Utils/SensitiveWordsManager";
import { isChEngNumber, isValidObj, kOneNumber, kSevenNumber, kZeroNumber } from "./CommonInterface";
import Role from "./Role";

const { ccclass, property } = cc._decorator;

@ccclass
export default class changeName extends PopLayer {
    @property({ displayName: "输入名字", type: cc.EditBox })
    r_name: cc.EditBox = null;

    //@property(cc.Node)
    //nodeClose:cc.Node = null;

    @property(cc.Button)
    btn_cost: cc.Button = null;

    @property(cc.Label)
    lbl_cost_diamond: cc.Label = null;

    @property(cc.Button)
    btn_free: cc.Button = null;

    @property(cc.Button)
    btn_close: cc.Button = null;

    @property(cc.Label)
    lbl_change_name_tip: cc.Label = null;

     onLoad () {
        this.btn_cost.node.active = false;
        this.btn_free.node.active = true;
        this.btn_cost.node.on("click", ()=>{this.onClickOk()}, this);
        this.btn_free.node.on("click", ()=>{this.onClickOk()}, this);
        this.btn_close.node.on("click", ()=>{this.setVisible(false);}, this);

        /* 改名次数 */
        Net.listenProtocol(proto.Ptl.HowManyTimesChangeNameRsp, (buffer, ptl)=>{
            let msg = proto.Msg_HowManyTimesChangeNameRsp.decode(buffer);
            cc.log("HowManyTimesChangeNameRsp(改名次数) : msg " + JSON.stringify(msg));
            this.btn_cost.node.active = msg.count >= tab.Data.GetKeyValue_ConfigTable().FreeChangeNameTimes;
            this.btn_free.node.active = !this.btn_cost.node.active;
            this.lbl_change_name_tip.node.active = this.btn_free.node.active;
            this.lbl_cost_diamond.string = `${msg.costDiamond}`;
        }, this);
    }

    public onClickOk(){
        if(this.btn_cost.node.active && 
            Role.Instance.RoleData.diamond < tab.Data.GetKeyValue_ConfigTable().ChangeNameDiamondCost){
            ShowTips("DiamondNotEnough");
            return;
        }
        if(!isChEngNumber(this.r_name.string)) {
            ShowTips("OnlyChOrEngOrNum");
            return
        }
        if(!SensitiveWordsManager.Instance.check(this.r_name.string)) {
            ShowTips("ChangeNameError1")
            return
        }
  
        let msg  = new proto.Msg_ChangeNameReq();
        msg.name = this.r_name.string;
        Net.Send(proto.Ptl.ChangeNameReq, msg);
    }

    start(){
        /* 改名 */
        Net.listenProtocol(proto.Ptl.ChangeNameRsp, (buffer, ptl) =>{
            let msg = proto.Msg_ChangeNameRsp.decode(buffer);
            cc.log("ChangeNameRsp (改名) : msg " + JSON.stringify(msg));
            if (msg != null){
                if (msg.result == 0) {
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChangeNameSuccess, msg.name);
                    this.setVisible(false);
                } else if(msg.result == proto.Msg_ChangeNameRsp.ErrorCode.SensitiveWordError) {
                    ShowTips("ChangeNameError1")
                } else if(msg.result == proto.Msg_ChangeNameRsp.ErrorCode.LengthInvalid) {
                    ShowTips("ChangeNameError2")
                }else if(msg.result == proto.Msg_ChangeNameRsp.ErrorCode.NameRepeat) {
                    ShowTips("ChangeNameError3")
                }
            }
        }, this);
        this.disposeRandomName();
    }

    show(url: string, isBlockInputEvents: boolean = true) {
        if(!Role.Instance.IsGuideFinished()/* || GuideController.Instance.isGuiding()*/) {
            this.notCloseWhenClickEmpty = 1
        } else {
            this.notCloseWhenClickEmpty = 0
        }
        super.show(url, isBlockInputEvents)
    }

    public onClose(){
        this.setVisible(false);
    }

    hideCloseBtn() {
        this.btn_close.node.active = false;
    }

    //引导专用
    // public setOpacity(){
    //     this.node.opacity = 0;
    //     this.setSysName();
    //     this.onClickOk();
    //     this.setVisible(false);
    // }

    public requestHowManyTimesChangeName(){
        let msg = new proto.Msg_HowManyTimesChangeNameReq();
        Net.Send(proto.Ptl.HowManyTimesChangeNameReq, msg);
    }

    public endedEditBox(){
        this.cutoutNameLen();
    }

    private cutoutNameLen(){
        if(!Role.Instance.IsGuideFinished()){
            this.deleteSpecialStr();
            return;
        }

        let name = this.r_name.string;
        let bOverLimit = name.length > kSevenNumber;
        if(bOverLimit){
            name = name.substr(kZeroNumber, kSevenNumber);
            this.r_name.string = name;
        }
    }

    private deleteSpecialStr(){
        let name = this.r_name.string;
        let idx = name.indexOf("_", 0);
        if(idx != -1){
            name = name.substring(idx + kOneNumber);
        }
        this.r_name.string = name;
    }

    private disposeRandomName(){
        this.setSysName();
    }

    private setSysName(){
        this.r_name.string = Role.Instance.RoleData.name;
        this.cutoutNameLen();
    }
} 
