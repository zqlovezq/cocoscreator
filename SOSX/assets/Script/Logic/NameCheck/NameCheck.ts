/* 
 * 实名认证功能
 * @edit wzq 2023/08/03
*/
import { showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import OffLineTip from "./OffLineTip";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NameCheck extends PopLayer {
    @property(cc.EditBox)
    private NameEditBox:cc.EditBox = null
    @property(cc.EditBox)
    private IdEditBox:cc.EditBox = null;
    @property(cc.Button)
    private btnClose:cc.Button = null;
    @property(cc.Button)
    private btnAuth:cc.Button = null;
    @property(cc.Label)
    private lbTips:cc.Label = null;
    
    public checkCallBack:Function = null;
    private userName:string = ""
    onLoad(): void {
        this.setClickHide();
        this.btnAuth.node.on("click", this.onBtnAuth, this);
        this.btnClose.node.on("click", this.onBtnCancel, this);
    }
    setUserName(str:string){
        this.userName = str;
    }
    onBtnAuth(){
        let authId: string = "";
        let authName: string = "";
        if (this.NameEditBox.string == "") {
            this.lbTips.string = "姓名为空";
            return;
        }
        if (!(this.IdEditBox.string.length === 18 || this.IdEditBox.string.length === 15)) {
            this.lbTips.string = "身份证长度不正确";
            return;
        }
        this.lbTips.string = "";
        authId = this.IdEditBox.string;
        authName = this.NameEditBox.string;
        let url: string = "https://eid.shumaidata.com/eid/check?idcard=" + authId + "&name=" + authName;
        let appCode: string = "ddd1eaff0ce349b6a53a8bcac6d787f6";
        this.sendHttpRequest(url, appCode).then((res: any) => {
            console.log("认证返回", res);
            let isAdult = this.checkUserIsAdult(res.result.birthday);
            if(!isAdult){
                /* 未成年弹出未成年离线界面 */
                this.setVisible(false);
                cc.sys.localStorage.setItem("RealName_"+this.userName,"child");
                showPopLayerV2("prefab/NameCheck/OffLineTip" , OffLineTip, false);
            }else{
                /* 成年 */
                cc.sys.localStorage.setItem("RealName_"+this.userName,"man");
                this.setVisible(false);
            }
        })
    }
    onBtnCancel(){
        this.setVisible(false);
    }
    sendHttpRequest(url:string,appCode?:string,param?:any) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            let requestURL = url;
            xhr.open("POST", requestURL, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
            xhr.setRequestHeader("Authorization", "APPCODE "+appCode);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    // 统一处理
                    let _response = JSON.parse(xhr.response);
                    if (_response.code === "0") {
                        resolve(_response)
                    } else {
                        reject(_response.message);
                    }
                }
            }
            xhr.onerror = function () {
                reject(new Error(xhr.statusText))
            }
            xhr.send();
        })
    }
    checkUserIsAdult(birthday: string) {
        let flag:boolean = false
        let birthYear = Number(birthday.substring(0, 4));
        let birthMonth = Number(birthday.substring(4, 6));
        let birthDay = Number(birthday.substring(6, 8));

        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth() + 1;
        let nowDay = now.getDate();
        let yearDiff = nowYear - birthYear;
        if (yearDiff < 18) {
            this.lbTips.string = "未满18岁";
        } else if (yearDiff == 18) {
            if (nowMonth - birthMonth < 0) {
                this.lbTips.string = "未满18岁";
            } else if (nowMonth - birthMonth === 0){
                if(nowDay - birthDay < 0){
                    this.lbTips.string = "未满18岁";
                }else{
                    this.lbTips.string = "已满18岁";
                    flag = true;
                }
            }
        }else{
            this.lbTips.string = "已满18岁";
            flag = true;
        }
        return flag;
    }
}
