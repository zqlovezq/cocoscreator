import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { LoginData } from '../login/LoginData';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

/**
 * 
 * CommunityPop
 * zhudingchao
 * Thu Aug 15 2024 14:11:25 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/home/CommunityPop.ts
 *
 */

@ccclass('CommunityPop')
export class CommunityPop extends ViewPop {
    @property(Node)
    shareNode: Node = null;
    @property(Node)
    taskNode:Node=null;
    private currType:number=1;
    register(): void {

    }
    onShow(): void {

    }
    onClickToggle(event,type:any){
        type=Number(type);
        if(this.currType!=type){
            this.currType=type;
            this.shareNode.active=this.currType==2;
            this.taskNode.active=this.currType==1;
        }
    }
    onClickFaceBook(){
        console.log("js调用打开网页")
        if(ChannelMgr.channelTab){
            ChannelMgr.openURL(ChannelMgr.channelTab.FaceBookUrl);
        }else{
            ChannelMgr.openURL("https://www.facebook.com/cjxd.re.tw/")
        }
       
    }
    onClickDiscord(){

    }
    onClickShare(){
        console.log("js调用分享")
        let t_obj:any = {}
        t_obj.roleID = RoleData.ins.id
        t_obj.serverID = LoginData.ins.default_area //sdk需要是逻辑服id
        t_obj.url = ""

        ChannelMgr.share(t_obj, (retData) => {
           console.log("################ share " + JSON.stringify(retData));
            if (retData.code == 0) {
                // this.testLoopTask();
            }
        });
    }
}