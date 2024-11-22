/*
 * @Descripttion: 实名认证弹框
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { ANDROID_PACKAGE_NAME } from "../Common/CommonInterface";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RealNameAuthentication extends PopLayer {

    @property(cc.EditBox)
    edit_name: cc.EditBox = null;

    @property(cc.EditBox)
    edit_id: cc.EditBox = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{
            this.setVisible(false);
        }, this);

        this.btn_confirm.node.on("click", this.onClickConfirm, this);
    }

    start () {}

    private onClickConfirm(){
        if(this.edit_name.string == ""){
            ShowTips("InputNameTip");
            return;
        }

        if(this.edit_id.string == ""){
            ShowTips("InputIDTip");
            return;
        }

        this.notifyInitSDK(this.edit_name.string, this.edit_id.string);
        this.edit_id.string = "";
        this.edit_name.string = "";
        this.setVisible(false);
    }

    /* 通知初始化SDK
     */
    private notifyInitSDK(name: string, id: string){
        if(!cc.sys.isNative){
            return;
        }
        
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRealNameRegister, id);
        if( cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                                                "JudgeUserIdentification", 
                                                "(Ljava/lang/String;Ljava/lang/String;)V", name, id);
        }else if(cc.sys.os == cc.sys.OS_IOS){
            
        }    
    }
}
