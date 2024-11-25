import { Node, Prefab, _decorator } from "cc";
import { AbsControl, AbsMgr } from "../../framework/base/IAbs";
import { tab } from "../../Table/table_gen";
import { ViewName } from "../define/ViewDefine";

const { ccclass, property } = _decorator;

export class ClientView extends AbsControl {
    private static _instance: ClientView;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ClientView();
        }
        return this._instance;
    }
    viewMap: Map<string, tab.ModuleTable> = new Map()
    first:boolean = false
    init(): void {
        if (this.first){
            return
        }
        this.first = true
        super.init()

        for (let index = 0; index < tab.getData().ModuleTable.length; index++) {
            const v = tab.getData().ModuleTable[index];
            this.addTab(v)
        }

        this.addTab({ ModuleType: tab.Module.Module_LoginView, ViewName: ViewName.LoginView, Path: "prefab/login/LoginView", ViewType: tab.ViewType.ViewType_View, ZIndex: tab.ViewZIndex.ViewZIndex_View })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: ViewName.Loading, Path: "prefab/Loading", ViewType: tab.ViewType.ViewType_Persist, ZIndex: tab.ViewZIndex.ViewZIndex_Loading })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "FightTestView", Path: "prefab/fight/FightTestView", ViewType: tab.ViewType.ViewType_Diy, ZIndex: tab.ViewZIndex.ViewZIndex_View })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "RoguePop", Path: "prefab/fight/view/rogue/RoguePop", ViewType: tab.ViewType.ViewType_Pop, ZIndex: tab.ViewZIndex.ViewZIndex_Pop })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "FightTestAttr", Path: "prefab/fight/view/test/FightTestAttr", ViewType: tab.ViewType.ViewType_Pop, ZIndex: tab.ViewZIndex.ViewZIndex_Pop })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "NewHeroPop", Path: "prefab/common/NewHeroPop", ViewType: tab.ViewType.ViewType_Pop, ZIndex: tab.ViewZIndex.ViewZIndex_Pop })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "FightDamageRankPop", Path: "prefab/fight/view/damage/FightDamageRankPop", ViewType: tab.ViewType.ViewType_Pop, ZIndex: tab.ViewZIndex.ViewZIndex_Pop })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "FightPausePop", Path: "prefab/fight/view/FightPausePop", ViewType: tab.ViewType.ViewType_Pop, ZIndex: tab.ViewZIndex.ViewZIndex_Pop })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "FightWorldBossResultPop", Path: "prefab/fight/view/result/FightWorldBossResultPop", ViewType: tab.ViewType.ViewType_Pop, ZIndex: tab.ViewZIndex.ViewZIndex_Pop })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "SdkTestPop", Path: "prefab/SdkTestPop", ViewType: tab.ViewType.ViewType_Pop, ZIndex: tab.ViewZIndex.ViewZIndex_Pop })
        this.addTab({ ModuleType: tab.Module.Module_Unknown, ViewName: "FightPvpDefenseUIView", Path: "prefab/fight/FightPvpDefenseUIView", ViewType: tab.ViewType.ViewType_View, ZIndex: tab.ViewZIndex.ViewZIndex_View })
        

        console.log(this.viewMap)
    }

    addTab(viewTab: tab.ModuleTable) {
        this.viewMap.set(viewTab.ViewName as string, viewTab)
    }

    register(): void {

    }

    getViewTab(viewName: string) {
        return this.viewMap.get(viewName)
    }

}