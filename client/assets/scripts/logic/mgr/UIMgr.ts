import { Camera, Director, DynamicAtlasManager, Node, Prefab, Scene, Size, _decorator, director, error, game, instantiate, view } from "cc";
import { AbsMgr } from "../../framework/base/IAbs";
import { LoadResAsync, ResMgr } from "./ResMgr";
import { ViewBase } from "../../framework/base/ViewBase";
import { Func } from "../utils/Func";
import { tab } from "../../Table/table_gen";
import { ViewData, ViewName } from "../define/ViewDefine";
import { ClientView } from "./ClientView";
import { BlackTips } from "../../Common/script/BlackTips";
import { ModuleUtil } from "../../Common/ModuleUtil";
import { LangMgr } from "./LangMgr";
import { OpenFunctionMgr } from "../../Common/component/OpenFunctionMgr";
import { LocalEvent } from "../define/LocalEvent";
import { EventMgr } from "./EventMgr";
import { AssociationData } from "../model/association/AssociationData";

const { ccclass, property } = _decorator;

export interface ViewListData {
    viewName: string
    view: Node
}

export class UIMgr extends AbsMgr {

    private static _instance: UIMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new UIMgr();
        }
        return this._instance;
    }

    init(): void {

    }


    camera2d: Camera = null
    rootNode: Node
    uiNode: Node
    setCamera(camera: Camera) {
        this.camera2d = camera
    }
    setRootNode(root: Node) {
        this.rootNode = root
        this.uiNode = root.getChildByName("uiNode")
    }

    private viewTypeMap: Map<tab.ViewType, ViewListData[]> = new Map()

    /** ViewName 记得查看ViewDefine */
    async show(uiData: ViewData): Promise<Node> {
        let viewTab = ClientView.ins.getViewTab(uiData.viewName)
        if (viewTab == null) {
            error("viewTab==null===viewName:" + uiData.viewName)
            return
        }
        if (viewTab["isLoading"]) {
            return
        }
        viewTab["isLoading"] = true
        console.warn("打开界面", uiData.viewName)
        let nowView = this.getView(viewTab.ViewName)
        if (nowView == null) {
            let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
            if (pfb) {
                nowView = instantiate(pfb)
                if (viewTab.ViewType == tab.ViewType.ViewType_Persist) {
                    pfb.addRef()
                    director.addPersistRootNode(nowView)
                } else {
                    if (uiData.parent) {
                        uiData.parent.addChild(nowView)
                    } else {
                        this.uiNode.addChild(nowView)
                    }
                }
                this.addView(viewTab.ViewName, nowView)
                Func.cocosNodeZIndex(nowView, uiData.zIndex || viewTab.ZIndex || 0)
                let viewBase = nowView.getComponent(ViewBase)
                if (viewBase) {
                    viewBase.loadShow()
                }
            }
        } else {
            if (viewTab.ViewType == tab.ViewType.ViewType_View || viewTab.ViewType == tab.ViewType.ViewType_Pop) {
                let zIndex = uiData.zIndex || viewTab.ZIndex || 0
                nowView.active = true
                Func.cocosNodeZIndex(nowView, zIndex + 1)
                Func.setzIndex(nowView, zIndex)
            }
        }
        if (nowView) {
            let viewBase = nowView.getComponent(ViewBase)
            if (viewBase) {
                viewBase.setOpenData(uiData.data)
                viewBase.onShow()
            }
        }
        viewTab["isLoading"] = false
        return nowView
    }

    hideView(viewName: string) {
        console.warn("销毁界面", viewName)
        let viewTab = ClientView.ins.getViewTab(viewName)
        let views = this.getViewListByViewType(viewTab.ViewType)
        for (let index = 0; index < views.length; index++) {
            const v = views[index];
            if (v.viewName == viewName) {
                if (v.view && v.view.isValid) {
                    if (viewTab.ViewType == tab.ViewType.ViewType_Persist) {
                        v.view.getComponent(ViewBase).onClose()
                        return true
                    }
                    v.view.destroy()
                }
                v.view = null
                views.splice(index, 1)
                this.checkView()
                return true
            }
        }
        return false
    }

    addView(viewName: string, viewNode: Node) {
        let viewTab = ClientView.ins.getViewTab(viewName)
        if (viewTab.ViewType == tab.ViewType.ViewType_Diy) {
            return
        }

        let views = this.getViewListByViewType(viewTab.ViewType)
        views.push({ viewName: viewName, view: viewNode })
        this.checkView()
    }

    getView(viewName: string): Node {
        let viewTab = ClientView.ins.getViewTab(viewName)
        let views = this.getViewListByViewType(viewTab.ViewType)

        let viewListData: ViewListData = Func.forBy(views, "viewName", viewName)
        if (viewListData) {
            return viewListData.view
        }
        return null
    }

    getViewScr(viewName: string) {
        let _view: Node = this.getView(viewName)
        if (_view) {
            return _view.getComponent(viewName)
        }
    }

    getViewListByViewType(viewType: tab.ViewType) {
        if (!this.viewTypeMap.has(viewType)) {
            this.viewTypeMap.set(viewType, [])
        }
        return this.viewTypeMap.get(viewType)
    }

    //只清理存储数据， 不做实际销毁，主要处理切换场景时把当前列表置空
    clearViewAndPop() {
        this.viewTypeMap.forEach((value, key) => {
            if (key != tab.ViewType.ViewType_Persist) {
                this.viewTypeMap.set(key, [])
            }
        })
    }

    checkView() {
        let views = this.getViewListByViewType(tab.ViewType.ViewType_View)
        let pops = this.getViewListByViewType(tab.ViewType.ViewType_Pop)
        let persists = this.getViewListByViewType(tab.ViewType.ViewType_Persist)
        if (views.length > 0) {
            for (let index = 0; index < views.length; index++) {
                const v = views[index];
                v.view.active = index + 1 == views.length
            }
        }
    }

    releaseView(viewName: string) {
        let viewTab = ClientView.ins.getViewTab(viewName)
        if (viewTab) {
            ResMgr.release(viewTab.Path, Prefab)
        }
    }

    jumpLayer(module: tab.Module, tabId?: number, closeFunc?: Function, opFuncName?: tab.OpenFunctionName, deepArgs?: Number[]) {
        let moduleTab = tab.getData().ModuleTableByModuleType.getValue(module)
        let isOpen = false;
        let openId = -1;

        let guildOpen = false;
        let guideOpenId = -1;
        // 功能名称
        if (moduleTab.OpenFunctionId.length > 1) {
            if (tabId) {
                openId = moduleTab.OpenFunctionId[tabId];
            } else {
                if (opFuncName) {
                    openId = opFuncName;
                } else {
                    openId = moduleTab.OpenFunctionId[1];
                }
            }
        } else if (moduleTab.OpenFunctionId.length === 1) {
            openId = moduleTab.OpenFunctionId[0]
        } else {
            isOpen = true;
        }
        if (openId >= 0) {
            isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(openId);
        }
        // 公会功能
        if (moduleTab.GuildOpenFunction) {
            guideOpenId = moduleTab.GuildOpenFunction
        } else {
            guildOpen = true;
        }
        if (guideOpenId >= 0) {
            guildOpen = AssociationData.ins.checkFunctionIsOpen(guideOpenId);
        }

        if (isOpen && guildOpen) {
            if (!tabId) {
                if (deepArgs && deepArgs.length > 0) {
                    this.show({ viewName: moduleTab.ViewName, data: deepArgs })
                } else {
                    this.show({ viewName: moduleTab.ViewName })
                }
            } else {
                this.show({ viewName: moduleTab.ViewName, data: tabId })
            }

            if (closeFunc) {
                closeFunc();
            }
            EventMgr.emitLocal(LocalEvent.JumpLayerSuceess, module)
        } else {
            if (guideOpenId > 0) {
                AssociationData.ins.showFunctionTips(guideOpenId);
            } else {
                OpenFunctionMgr.ins.showFunctionTips(openId);
            }
        }
    }


    visibleSize: Size
    getVisibleSize() {
        if (this.visibleSize == null) {
            this.visibleSize = new Size(view.getVisibleSize().width / 1.8, view.getVisibleSize().height / 1.8)
        }
        return this.visibleSize
    }


}
export async function ShowTips(key: string) {
    let scene = director.getScene();
    if (!scene) {
        return;
    }
    let nodeTipsContainer = scene.getChildByName("BlackTips");
    if (!nodeTipsContainer) {
        let prefab = await LoadResAsync('prefab/BlackTips', Prefab)
        nodeTipsContainer = instantiate(prefab);
        nodeTipsContainer.name = "BlackTips";
        scene.addChild(nodeTipsContainer);
        nodeTipsContainer.setSiblingIndex(1);
    }
    let tipsCom = nodeTipsContainer.getComponent(BlackTips);
    if (!tipsCom) {
        return;
    }
    tipsCom.AddTips(key);
}
/**
 * 提示物品不足
 * @param itemId 
 */
export async function ShowItemNotEnoughTips(itemId: number) {
    let item = tab.getData().ItemTableById.getValue(itemId);
    if (item) {
        if(item.AcquireWay.length>0){
            UIMgr.ins.show({ viewName: ViewName.ItemGetWayPop ,data:{itemId:itemId}})
        }else{
            let str = LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(item.Name)]);
            ShowTips(str);
        }
    }

}