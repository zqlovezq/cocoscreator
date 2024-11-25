import { _decorator, Component, instantiate, Label, Node, Prefab, ScrollView } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import Waiting, { WaitingTag } from '../../../Common/script/Waiting';
import Http from '../../net/Http';
import { LoginData } from '../login/LoginData';
import { ServerChooseItem } from './ServerChooseItem';
const { ccclass, property } = _decorator;

@ccclass('ServerChoosePop')
export class ServerChoosePop extends ViewPop {
    @property(Label)
    lastServerLab: Label = null;
    @property(ScrollView)
    scrollView: ScrollView = null;
    @property(Prefab)
    itemPrefab: Prefab = null;

    private recommendServers: Array<any>;
    private userServers: Array<any>;
    private currTag:number=1;
    register() {

    }
    onShow(): void {
        let addr = LoginData.ins.loginServerTab.SelectServerUrl;
        let reqParam = `uid=${LoginData.ins.uid}&token=${LoginData.ins.token}&group=${LoginData.ins.loginGroup}`;

        // Waiting.Show(WaitingTag.Login, 0)

        Http.request({
            host: addr,
            method: "GET",
            reqParam: reqParam,
            cb: (responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    if (responseJson.ret == 0) {
                        console.log("responseJson==", responseJson)
                        this.recommendServers = responseJson.recommend_areas;
                        this.userServers = responseJson.user_areas;
                        this.initView();
                       
                    }
                }
                // Waiting.Hide(WaitingTag.Login)
            }
        })
    }

    initView(){
        this.initServerItem();
        let myServerData=null;
        let myAreaId=LoginData.ins.default_area;
        for(let key in this.userServers){
            if(myAreaId==this.userServers[key]["id"]){
                myServerData=this.userServers[key];
                break;
            }
        }
        if(myServerData){
            this.lastServerLab.string=myServerData.name;
        }
       

    }
    initServerItem(){
        this.scrollView.content.removeAllChildren();
        let list=this.currTag==1?this.userServers:this.recommendServers;
        for(let key in list){
            let node=instantiate(this.itemPrefab);
            node.parent=this.scrollView.content;
            node.getComponent(ServerChooseItem).initData(list[key]);
        }
    }
    onToggle(event, type) {
        if(Number(type)!=this.currTag){
            this.currTag=Number(type);
            this.initServerItem();
        }
    }

}

