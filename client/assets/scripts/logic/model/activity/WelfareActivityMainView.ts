import { _decorator, Component, error, instantiate, Node, Prefab, Toggle, ToggleContainer } from 'cc';
import { ViewScreen } from '../../../framework/base/ViewScreen';
import { SignInView } from './signIn/SignInView';
import { LoadResAsync } from '../../mgr/ResMgr';
import { ClientView } from '../../mgr/ClientView';
import { ViewName } from '../../define/ViewDefine';
import { tab } from '../../../Table/table_gen';
import { ActivityData } from './ActivityData';
import { HeroRoadView } from './heroRoad/HeroRoadView';
import { WelfareActivityToggleItem } from './WelfareActivityToggleItem';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { MonthlyCardView } from './monthlyCard/MonthlyCardView';
import { VipPrivilegeView } from './vip/VipPrivilegeView';
import { Type } from 'protobufjs';
const { ccclass, property } = _decorator;

/**
 * 
 * WelfareActivityMainView
 * zhudingchao
 * Thu Jun 20 2024 17:14:30 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/WelfareActivityMainView.ts
 *
 */

@ccclass('WelfareActivityMainView')
export class WelfareActivityMainView extends ViewScreen {
    @property(Node)
    activityNode: Node = null;
    @property(ToggleContainer)
    toggleContainer: ToggleContainer = null;
    private signInView: SignInView;
    private newPlayerSignInView: SignInView;
    private heroRoadView: HeroRoadView;
    private currTag: tab.OpenFunctionName = 0;
    private currNode: Node = null;
    private toggleItemMap: Map<tab.OpenFunctionName, WelfareActivityToggleItem>;
    private monthlyCardView: MonthlyCardView = null;
    private vipView: VipPrivilegeView = null;
    register(): void {

    }
    onShow(): void {
        this.initToggle();
        this.initView();
    }
    initToggle() {
        this.toggleItemMap = new Map();
        let toggles = this.toggleContainer.toggleItems;
        for (let key in toggles) {
            let item = toggles[key].node.getComponent(WelfareActivityToggleItem);
            let isOpen = this.getActivityOpen(item.opName);
            if (isOpen) {
                toggles[key].node.active = true;
                item.updateRedPoint();
                this.toggleItemMap.set(item.opName, item);
            } else {
                toggles[key].node.active = false;
            }

        }
        let items= Array.from(this.toggleItemMap.values())
        if(this.openData&&this.openData["type"]){
            let type=this.openData["type"];
            for(let key in items){
                if(items[key].opName==type){
                    items[key].node.getComponent(Toggle).isChecked=true;
                    this.currTag=type;
                    break;
                }
            }
        }else{
          
            items[0].node.getComponent(Toggle).isChecked=true;
            this.currTag = items[0].node.getComponent(WelfareActivityToggleItem).opName;
        }
      
        // for (let key in toggles) {
        //     if (toggles[key].isChecked) {
        //         this.currTag = toggles[key].node.getComponent(WelfareActivityToggleItem).opName;
        //     }
        // }
    }
    getActivityOpen(name: tab.OpenFunctionName) {
        let isOpen = false;
        switch (name) {
            case tab.OpenFunctionName.OpenFunctionName_NewServerSignIn:
                isOpen = ActivityData.ins.isOpenDailyAcivity(tab.DailyRewardType.DailyRewardType_NewServer);
                break;
            case tab.OpenFunctionName.OpenFunctionName_DailySignIn:
                isOpen = ActivityData.ins.isOpenDailyAcivity(tab.DailyRewardType.DailyRewardType_Daily);
                break;
            case tab.OpenFunctionName.OpenFunctionName_HeroCollection:
                isOpen = ActivityData.ins.isOpenHeroCollectio();
                break;
            case tab.OpenFunctionName.OpenFunctionName_MonthlyPass:
                isOpen =OpenFunctionMgr.ins.checkFunctionIsOpen(name);
                break;
            case tab.OpenFunctionName.OpenFunctionName_Vip:
                isOpen =OpenFunctionMgr.ins.checkFunctionIsOpen(name);
                break;
        }
        return isOpen;
    }
    initView() {
        if (this.currNode) {
            this.currNode.active = false;
        }
        switch (this.currTag) {
            case tab.OpenFunctionName.OpenFunctionName_NewServerSignIn:
                this.initNewPlayerSignInView();
                break;
            case tab.OpenFunctionName.OpenFunctionName_DailySignIn:
                this.initSignInView();
                break;
            case tab.OpenFunctionName.OpenFunctionName_HeroCollection:
                this.initHeroRoadView();
                break;
            case tab.OpenFunctionName.OpenFunctionName_MonthlyPass:
                this.initMonthlyCardView();
                break;
            case tab.OpenFunctionName.OpenFunctionName_Vip:
                this.initVipView();
                break;
        }

    }

    async initSignInView() {
        if (!this.signInView) {
            let view = await this.createView(ViewName.SignInView);
            if (view) {
                this.signInView = view.getComponent(SignInView);
                this.currNode = view;
                this.signInView.initView(tab.DailyRewardType.DailyRewardType_Daily);
            }
            // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
        } else {
            this.signInView.node.active = true;
            this.currNode = this.signInView.node;
            this.signInView.updateView();
        }
    }
    async initNewPlayerSignInView() {
        if (!this.newPlayerSignInView) {
            let view = await this.createView(ViewName.NewPlayerSignInView);
            if (view) {
                this.newPlayerSignInView = view.getComponent(SignInView);
                this.currNode = view;
                this.newPlayerSignInView.initView(tab.DailyRewardType.DailyRewardType_NewServer);
            }
            // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
        } else {
            this.newPlayerSignInView.node.active = true;
            this.currNode = this.newPlayerSignInView.node;
            this.newPlayerSignInView.updateView();
        }
    }
    async initHeroRoadView() {
        if (!this.heroRoadView) {
            let view = await this.createView(ViewName.HeroRoadView);
            if (view) {
                this.heroRoadView = view.getComponent(HeroRoadView);
                this.currNode = view;
                this.heroRoadView.initView();
            }
            // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
        } else {
            this.heroRoadView.node.active = true;
            this.currNode = this.heroRoadView.node;
            this.heroRoadView.updateView();
        }
    }
    async initMonthlyCardView() {
        if (!this.monthlyCardView) {
            let view = await this.createView(ViewName.MonthlyCardView);
            if (view) {
                this.monthlyCardView = view.getComponent(MonthlyCardView);
                this.currNode = view;
                this.monthlyCardView.initView();
            }
            // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
        } else {
            this.monthlyCardView.node.active = true;
            this.currNode = this.monthlyCardView.node;
            this.monthlyCardView.updateView();
        }
    }
    async initVipView() {
        if (!this.vipView) {
            let view = await this.createView(ViewName.VipPrivilegeView);
            if (view) {
                this.vipView = view.getComponent(VipPrivilegeView);
                this.currNode = view;
                this.vipView.initView();
            }
            // let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
        } else {
            this.vipView.node.active = true;
            this.currNode = this.vipView.node;
            this.vipView.updateView();
        }
    }
    async createView(viewName: ViewName) {
        let viewTab = ClientView.ins.getViewTab(viewName);
        if (viewTab) {
            let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
            let view = instantiate(pfb);
            view.parent = this.activityNode;
            return view;
        } else {
            error("view路径没有配置", viewName)
        }
        return null;
    }
    updateToggleRedPoint(opName: tab.OpenFunctionName) {
        let item = this.toggleItemMap.get(opName);
        if (item) {
            item.updateRedPoint();
        }

    }

    onClickToggle(event) {
        let type = event.target.getComponent(WelfareActivityToggleItem).opName;
        if (this.currTag != type) {
            this.currTag = type;
            this.initView();
        }
    }
}