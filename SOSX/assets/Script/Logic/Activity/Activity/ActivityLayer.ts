/**
 * 
 */

import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { checkFunctionIsOpen } from "../../Common/CommonInterface";
import { checkInt, getServerUtcTime, LoadResAsync } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import ActivityController, { ActivityID2OpenFunctionID } from "./ActivityController";
import ActivityToggle from "./ActivityToggle";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ActivityLayer extends PopLayer {

    @property(cc.Node)
    topBtnItem: cc.Node = null

    @property(cc.ScrollView)
    topScroll: cc.ScrollView = null

    @property(cc.Node)
    content: cc.Node = null

    onLoad() {

        Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_CloseLayer, (param)=>{
            this.hide()
        }, this)

        // //新活动开启
        // Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_NewActivityOpen, (param)=>{
        //     let id = param as number
        //     this.createToggle(id)
        // }, this)


        // this.topScroll.node.on("scroll-ended", ()=>{
        //     this.onScroll()
        // }, this);

        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true)
    }

    onTouchStart() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }

    back() {
        this.hide()
    }

    initData(firstId: tab.LimitActivityID) {
        this.setView(firstId)
    }

    setView(firstID: tab.LimitActivityID) {
        if (this.topScroll.content.childrenCount == 0) {
            let confs: tab.LimitActivityTable[] = tab.Data.LimitActivityTable

            for (let index = 0; index < confs.length; index++) {
                const v = confs[index];
                if (ActivityController.getInstance().checkShowByID(v.ID)) {
                    this.createToggle(v.ID)
                }
            }
        }

        //如果跳转进来的id已经结束， 默认显示第一个
        if ( this.topScroll.content.getChildByName(`toggle_${firstID}`) == null){
            firstID = checkInt(this.topScroll.content.children[0].name.split("_")[1])
        }

        this.select(firstID)
    }

    createToggle(ID: tab.LimitActivityID) {
        let actnode = cc.instantiate(this.topBtnItem)
        if (actnode) {
            actnode.active = true
            this.topScroll.content.addChild(actnode)
            actnode.getComponent(ActivityToggle).setView(ID)
            actnode.getComponent(ActivityToggle).setCallback(this.select.bind(this));
            actnode.name = `toggle_${ID}`;
        }
    }


    //点击活动页面的顶部活动的时候会调用改函数
    async select(ID: tab.LimitActivityID) {
        let cfg = tab.Data.LimitActivityTableByID.getValue(ID)
        if (cfg) {
            let nodeName = cfg.ActPrefab.replace(/\/+/g, '_')
            let exist: boolean = false
            for (let i = 0; i < this.content.childrenCount; i++) {
                let name = this.content.children[i].name
                if (name == nodeName) {
                    this.content.children[i].active = true
                    exist = true
                    this.searchTopNode(ID);
                } else {
                    this.content.children[i].active = false
                }
            }

            if (exist == false) {
                let prefab: cc.Node = await LoadResAsync(cfg.ActPrefab, cc.Prefab)
                if (prefab) {
                    let actNode: cc.Node = cc.instantiate(prefab);
                    if (actNode) {
                        actNode.name = nodeName
                        this.content.addChild(actNode);
                        this.searchTopNode(ID);
                    }
                }
            }
        }
    }

    /*  */
    private searchTopNode(id: number) {
        let name = `toggle_${id}`;
        let node = this.topScroll.content.getChildByName(name);
        if (node) {
            node.getComponent(ActivityToggle).setSelected();
        }
    }
}
