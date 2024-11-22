import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { CaiHongData } from "../../sdk/rainbow/CaiHongData";
import { tab } from "../../Table/table_gen";
import UnpackRebateSelectCardLayer, { unpackType } from "../Activity/UnpackRebate/UnpackRebateSelectCardLayer";
import MainsceneBossBox from "../BossBox/MainsceneBossBox";
import BlackTips from "../Common/BlackTips";
import ManagerCardAttr from "../Common/CardAttrClass/ManagerCardAttr";
import { CardAttrType, CardDisplayType, CardNodeState, isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import GetOneItem from "../Common/GetOneItem";
import ItemTips from "../Common/ItemTips";
import Role from "../Common/Role";
import roleInfo from "../Common/roleInfo";
import UnlockAccelerateEffect from "../Common/UnlockAccelerateEffect";
import { ShakeByY } from "../Fight/CustomActions";
import CardDetail from "../Main/CardDetail";
import MainScene from "../Main/MainScene";
import PullCardResult1 from "../PullCard/PullCardResult1";
import shopboxTipslayer from "../shop/shopboxtipsLayer";
import { FontChangeAction } from "./NewAction";
import PopLayer from "./PopLayer";
import ResManager from "./ResManager";

export enum CustomZIndex {
    None = 0,
    PopLayer = 1,
}
let isLoadingScene: boolean = false;
var mapSpinePool: tab.Dictionary<number, cc.NodePool>;
var mapEnemyAnimPool: tab.Dictionary<string, cc.NodePool>;
var mapCreateEnemyPool: tab.Dictionary<number, cc.NodePool>;

const { ccclass, property } = cc._decorator;

/**
    获取随机整数
    @param min 随机的最小值
    @param max 随机的最大值(不包括该值)
    @returns 返回一个整数，范围是 [min, max)
*/
export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/*  */
export function LoadResAsync(url: string, type: typeof cc.Asset,
    progressCallback?: (completedCount: number, totalCount: number, item: any) => void): Promise<any> {
    return new Promise(resolve => {
        //cc.log("zhibo+@20230403: url: " + url)
        ResManager.load(url, type, progressCallback, (err: Error, resource: any) => {
            if (err) {
                console.error(err);
                CaiHongData.resource_load(url,1,3,err.message)
                resolve(null);
            } else {
                resolve(resource);
            }
        })
    })
}
export function getRes<T extends cc.Asset>(url: string, type: typeof cc.Asset): T {
    if (url.indexOf("?") > -1) {
        let res = ResManager.getBundleAsset(url, type);
        return res as T;
    } else {
        let res = cc.resources.get(url, type);
        if (res == null) {
            // console.warn("资源获取失败,请查找原因", url)
        }
        return res as T;
    }
}
/*  */
export async function CreateSpine(spineId: number, cacheMode = sp.Skeleton.AnimationCacheMode.SHARED_CACHE)
    : Promise<sp.Skeleton> {

    let spineTab = tab.Data.SpineTableByID.getValue(spineId);
    if (!spineTab) {
        throw `cannot find SpineTable by id ${spineId}`;
    }
    let data: sp.SkeletonData = null;
    if (cacheMode == sp.Skeleton.AnimationCacheMode.REALTIME){
        data = await LoadResAsync(spineTab.Url, sp.SkeletonData);
    }else{
        data = getRes(spineTab.Url, sp.SkeletonData);
        if (!data) {
            /* 有可能没有预加载 比如emoji表情等 */
            data = await LoadResAsync(spineTab.Url, sp.SkeletonData);
        }
    }
    
    let node = new cc.Node();
    let skel: sp.Skeleton = node.addComponent(sp.Skeleton);
    skel.setAnimationCacheMode(cacheMode)

    skel.skeletonData = data;
    if (spineTab.DisablePreAlpha) {
        skel.premultipliedAlpha = false;
    }

    node.setScale(spineTab.ScaleX, spineTab.ScaleY);
    node.setPosition(spineTab.OffsetX, spineTab.OffsetY);
    node.opacity = 255;
    return skel;
}

/*  */
export async function CreateSpineFromPool(spineId: number, cacheMode = sp.Skeleton.AnimationCacheMode.SHARED_CACHE)
    : Promise<sp.Skeleton> {
    if (mapSpinePool === undefined) {
        mapSpinePool = new tab.Dictionary<number, cc.NodePool>()
    }
    let pool = mapSpinePool.getValue(spineId)
    if (!pool) {
        pool = new cc.NodePool(sp.Skeleton)
        mapSpinePool.setValue(spineId, pool);
    }
    if (pool.size() > 0) {
        let skel = pool.get().getComponent(sp.Skeleton)
        skel.node.color = cc.Color.WHITE;
        let spineTab = tab.Data.SpineTableByID.getValue(spineId);
        if (spineTab) {
            skel.node.setScale(spineTab.ScaleX, spineTab.ScaleY);
            skel.node.setPosition(spineTab.OffsetX, spineTab.OffsetY);
            skel.node.opacity = 255;
        }
        return Promise.resolve(skel)
    }
    return CreateSpine(spineId, cacheMode)
}

/*  */
export function PutToSpinePool(spineId: number, skel: sp.Skeleton) {
    if (mapSpinePool === undefined) {
        mapSpinePool = new tab.Dictionary<number, cc.NodePool>()
    }
    let pool = mapSpinePool.getValue(spineId)
    if (!pool) {
        pool = new cc.NodePool(sp.Skeleton)
        mapSpinePool.setValue(spineId, pool);
    }
    pool.put(skel.node);
}

/*  */
export function ClearSpinePool() {
    if (mapSpinePool !== undefined) {
        for (let pool of mapSpinePool.values()) {
            pool.clear()
        }
        mapSpinePool.clear()
    }
}

/**
 * Description: 创建敌人序列帧动画
 */
export async function CreateEnemyAni(aniName: string)
    : Promise<cc.Animation> {

    if (aniName != "") {
        let data = await LoadResAsync(aniName, cc.Prefab);
        let animNode: cc.Node = cc.instantiate(data);
        if (animNode) {
            animNode.opacity = 255;
            return animNode.getComponent(cc.Animation);
        }
    }
    return null;
}

/**
 * Description: 从对象池中创建敌人序列帧动画
 */
export async function CreateEnemyAniFromPool(aniName: string)
    : Promise<cc.Animation> {
    if (mapEnemyAnimPool === undefined) {
        mapEnemyAnimPool = new tab.Dictionary<string, cc.NodePool>();
    }

    let pool = mapEnemyAnimPool.getValue(aniName)
    if (!pool) {
        pool = new cc.NodePool(cc.Animation);
        mapEnemyAnimPool.setValue(aniName, pool);
    }

    if (pool.size() > 0) {
        let anim = pool.get().getComponent(cc.Animation);
        anim.node.color = cc.Color.WHITE;
        anim.node.opacity = 255;
        return Promise.resolve(anim);
    }
    return CreateEnemyAni(aniName);
}

/**
 * Description: 将敌人序列帧动画放入池子中
 */
export function PutToEnemyAniPool(aniName: string, animNode: cc.Animation) {
    if (mapEnemyAnimPool === undefined) {
        mapEnemyAnimPool = new tab.Dictionary<string, cc.NodePool>();
    }

    let pool = mapEnemyAnimPool.getValue(aniName);
    if (!pool) {
        pool = new cc.NodePool(cc.Animation);
        mapEnemyAnimPool.setValue(aniName, pool);
    }
    pool.put(animNode.node);
}

/**
 * Description: 清空敌人序列帧动画池子
 */
export function ClearEnemyAniPool() {
    if (mapEnemyAnimPool !== undefined) {
        for (let pool of mapEnemyAnimPool.values()) {
            pool.clear();
        }
        mapEnemyAnimPool.clear();
    }
}

/**
 * 显示PopLayer
 * @param prefabUrl prefab文件路径
 * @param addToCurrentScene 可选，是否加到当前节点，默认true
 * @param adjustAnchorPoint 可选，是否调整锚点至(0.5,0.5)，默认true
 */
export async function showPopLayer(prefabUrl: string | cc.Prefab,
    addToCurrentScene: boolean = true,
    adjustAnchorPoint: boolean = true,
    isshowAction: boolean = true,
    isBlockInputEvents: boolean = true,
    isShowWaiting: boolean = false,
    isShowMask: boolean = true,
    zIndex?: number): Promise<cc.Node> {
    let url: string;
    let res: cc.Prefab;
    if (typeof prefabUrl == 'string') {
        url = prefabUrl;
        //cc.log("showPopLayer befor load paths = " + url);
        res = await LoadResAsync(prefabUrl, cc.Prefab)
    } else {
        if (prefabUrl.url && prefabUrl.url.length > 0) {
            url = prefabUrl.url;
        } else {
            url = prefabUrl.name;
        }
        res = prefabUrl;
    }

    if (res) {
        let popNode: cc.Node = cc.instantiate(res);
        let popName = url.replace(/\/+/g, '_')
        popNode.name = popName;
        if (adjustAnchorPoint) {
            popNode.setAnchorPoint(0.5, 0.5);
        }
        if (addToCurrentScene) {
            let currentScene = cc.director.getScene();
            if (currentScene) {
                let node = currentScene.getChildByName(popName);
                if (!node) {
                    console.log(popName,zIndex)
                    currentScene.addChild(popNode, zIndex);
                    popNode.setPosition(new cc.Vec2(popNode.width * popNode.anchorX, popNode.height * popNode.anchorY));
                    let com: PopLayer = popNode.getComponent(PopLayer);
                    if (!com) {
                        com = popNode.getComponentInChildren(PopLayer)
                    }
                    if (com) {
                        com.ShowAction = isshowAction;
                        //com.onLoadingReady();
                        com.show(url, isBlockInputEvents, isShowMask);
                    }
                } else {
                    popNode = node;
                }
            }
        }
        cc.log(`### show poplayer ${popName} ###`)
        Net.pushLoaclMessage(LOCAL_MESSAGE.PopLayer, popName)
        return popNode;
    } else {
        cc.log(`### show poplayer ${url} load error`);
    }
    return null;
}

/*  */
export async function showPopLayerV2<T extends cc.Component>(filename: string | cc.Prefab, type: { prototype: T }, bShowAction: boolean = true, zIndex?: number): Promise<T> {
    let node = await showPopLayer(filename, true, true, bShowAction, true, false, true, zIndex);
    if (node) {
        return node.getComponent(type);
    }
    return null;
}

/*  */
export async function showPopLayerV3<T extends cc.Component>(filename: string | cc.Prefab,
    type: { prototype: T },
    showMask: boolean = true,
    bShowAction: boolean = true,
    zIndex?: number): Promise<T> {
    let node = await showPopLayer(filename, true, true, bShowAction, true, false, showMask, zIndex); /* 不显示Mask */
    console.log(node,type)
    if (node) {
        return node.getComponent(type);
    }
    return null;
}


/*  */
export function GetPopLayer(prefabUrl: string | cc.Prefab): cc.Node {
    let url: string;
    if (typeof prefabUrl == 'string') {
        url = prefabUrl;
    } else {
        if (prefabUrl.url && prefabUrl.url.length > 0) {
            url = prefabUrl.url;
        } else {
            url = prefabUrl.name;
        }
    }
    let popName = url.replace('/', '_')
    return cc.director.getScene().getChildByName(popName);
}

/**
 * 切换场景
 * @param sceneName 场景名称
 * @param onLaunched 可选，场景加载完成时的回调
 */
export function LoadScene(sceneName: string, onLaunched?: (error: Error, scene: cc.Scene) => void) {
    if (isLoadingScene) {
        return;
    }
    isLoadingScene = true;

    cc.director.loadScene(sceneName, err => {
        isLoadingScene = false;
        let scene: cc.Scene = null;
        if (!err) {
            scene = cc.director.getScene()
            scene.name = sceneName;
            Net.pushLoaclMessage(LOCAL_MESSAGE.SceneLoaded, sceneName);
        }
        if (onLaunched) {
            onLaunched(err, scene);
        }
    })
}

/*  */
export function setAnchorPoint(node: cc.Node, anchorX: number, anchorY: number) {
    let dx = (anchorX - node.anchorX) * node.width;
    let dy = (anchorY - node.anchorY) * node.height;
    node.x += dx;
    node.y += dy;
    for (let child of node.children) {
        child.x -= dx;
        child.y -= dy;
    }
    node.setAnchorPoint(new cc.Vec2(anchorX, anchorY));
}

// 加载一个预制界面
export async function LoadPreNode<T extends cc.Component>(filename: string, type: { prototype: T }): Promise<T> {
    let preNode: cc.Prefab = await LoadResAsync(filename, cc.Prefab);
    if (preNode == null) {
        return null;
    }
    let node = cc.instantiate(preNode);
    let component = node.getComponent(type);
    return component;
}

/*  */
export async function ShowTips(key: string) {
    /* 20230328 王自权 修改了一下 */
    let tipsTbl = tab.Data.TipsTableByKey.getValue(key);
    if (!tipsTbl) {
        // cc.error(`cannot find tips key: ${key}`)
        // return;
    }

    let scene = cc.director.getScene();
    if (!scene) {
        return;
    }
    // console.warn(key, tipsTbl)
    let nodeTipsContainer = scene.getChildByName("BlackTips");
    if (!nodeTipsContainer) {
        let prefab = await LoadResAsync('prefab/BlackTips', cc.Prefab)
        nodeTipsContainer = cc.instantiate(prefab);
        nodeTipsContainer.name = "BlackTips";
        scene.addChild(nodeTipsContainer);
        nodeTipsContainer.zIndex = 1;
    }

    let tipsCom = nodeTipsContainer.getComponent(BlackTips);
    if (!tipsCom) {
        return;
    }
    if (tipsTbl) {
        tipsCom.AddTips(tipsTbl.Value);
    } else {
        tipsCom.AddTips(key);
    }
}

/**
 * 显示错误码提示
 * @param ptl 消息号
 * @param errorCode 错误码
 * @param keyType 
 */
export async function ShowErrorTips(ptl:number,errorCode:number,keyType:string="Net") {
    let key = cc.js.formatStr("%s_%s_%s",keyType,ptl,errorCode)
    let tipsTbl = tab.Data.ErrorTableByKey.getValue(key);
    if (tipsTbl){
        ShowTips(tipsTbl.TipsKey)
    }else{
        ShowTips("错误码：" + key)
    }
}

/**
 * Description: 显示自定义文本
 * @param tipsTxt 提示文本
 */
export async function ShowTipsOfCustomString(tipsTxt: string) {
    let scene = cc.director.getScene();
    if (!scene) {
        return;
    }

    let nodeTipsContainer = scene.getChildByName("BlackTips");
    if (!nodeTipsContainer) {
        let prefab = await LoadResAsync('prefab/BlackTips', cc.Prefab)
        nodeTipsContainer = cc.instantiate(prefab);
        nodeTipsContainer.name = "BlackTips";
        scene.addChild(nodeTipsContainer);
        nodeTipsContainer.zIndex = 1;
    }

    let tipsCom = nodeTipsContainer.getComponent(BlackTips);
    if (!tipsCom) {
        return;
    }

    tipsCom.AddTips(tipsTxt);
}

/*  */
export function setColorRecursively(node: cc.Node, color: cc.Color) {
    node.color = color
    for (let child of node.children) {
        setColorRecursively(child, color)
    }
}

/*  */
cc.Sprite.prototype.setTexture = async function (icon: string) {
    setTexture(this, icon);
}

/*  */
export async function setTexture(sprite: cc.Sprite, icon: string) {

    if (icon == null || !icon.localeCompare("") || !sprite) {
        return;
    }
    let SpriteFram: cc.SpriteFrame = cc.resources.get(icon, cc.SpriteFrame);
    if (!SpriteFram) {
        SpriteFram = await LoadResAsync(icon, cc.SpriteFrame);
    }

    if (SpriteFram != null) {
        sprite.spriteFrame = SpriteFram;
    }
    else {
        cc.error("setTexture error :" + icon);
    }
}

/*  */
export function getServerUtcTime(): number {
    return getClientUtcTime() + Role.Instance.getClientToServerTimeOffset();
}

/*  */
export function getClientUtcTime(): number {
    let date = new Date();
    let time = Math.round(date.getTime() / 1000);
    return Math.round(date.getTime() / 1000);
}

/*  */
export function setTimeTXT(_lable: cc.Label, timeleft: number) {
    if (timeleft < 0) {
        return;
    }

    let dayStr = tab.Data.GetKeyValue_ConfigTable().DayTip;
    let hourStr = tab.Data.GetKeyValue_ConfigTable().HourTip;

    let day = Math.floor(timeleft / 86400)
    let dayleft = timeleft % 86400
    let hour = Math.floor(dayleft / 3600)
    if (day > 0) { //天时
        if (hour > 0) {
            _lable.string = `${day}${dayStr}${hour}${hourStr}`
        } else {
            _lable.string = `${day}${dayStr}`
        }
        return
    }
    let minuteStr = tab.Data.GetKeyValue_ConfigTable().MinuteTip;
    let hourleft = dayleft % 3600
    let min = Math.floor(hourleft / 60)
    if (hour > 0) { //时分
        if (min > 0) {
            _lable.string = `${hour}${hourStr}${min}${minuteStr}`
        } else {
            _lable.string = `${hour}${hourStr}`
        }
        return
    }
    let sec = hourleft % 60

    let secondStr = tab.Data.GetKeyValue_ConfigTable().SecondText;
    //分秒
    if (min > 0) {
        _lable.string = `${min}${minuteStr}${sec}${secondStr}`
        return
    }

    _lable.string = `${sec}${secondStr}`
}

/*  */
export function setTextTime_2(pText: cc.Label, iLeftSecond: number) {
    if (pText == null) {
        return;
    }
    let iMin = Math.floor(iLeftSecond % (60 * 60) / 60);
    let iSecond = Math.floor(iLeftSecond % 60);
    pText.string = String(iMin >= 10 ? iMin : "0" + iMin) + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond)
}

/*  */
export function setTextTime_3(pText: cc.Label, iLeftSecond: number) {
    if (pText == null) {
        return;
    }

    let iHour = Math.floor(iLeftSecond / (60 * 60));
    let iMin = Math.floor(iLeftSecond % (60 * 60) / 60);
    let iSecond = Math.floor(iLeftSecond % 60);
    pText.string = String(iHour >= 10 ? iHour : "0" + iHour) + ":" + String(iMin >= 10 ? iMin : "0" + iMin)
        + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond)
}

/*  */
export function getFormatString(formatStr: string, ...replaceArr: any[]) {
    let index = 0;
    return formatStr.replace(/%\.?\d*[dfs%]/g, (findStr) => {
        let finalStr: string;
        if (findStr == "%%") {
            finalStr = "%";
        }
        else {
            let replaceStr: string = String(replaceArr[index]);
            let isFloat: boolean = findStr.indexOf("f") > -1;
            let replaceDigital: number;
            let replaceDigitalResult = findStr.match(/[1-9]+/);
            if (replaceDigitalResult && replaceDigitalResult.length > 0) {
                replaceDigital = parseInt(replaceDigitalResult[0]);
            }
            else {
                replaceDigital = 0;
            }

            if (isFloat) {
                let dotStrResult = replaceStr.match(/\.\d*/);
                if (dotStrResult && dotStrResult.length > 0) {
                    let dotDigital = dotStrResult[0].length - 1;
                    if (replaceDigital < dotDigital) {
                        let regStr = "\\d+\\.\\d{" + replaceDigital + "}";
                        let reg = new RegExp(regStr);
                        finalStr = replaceStr.match(reg)[0];
                    }
                    else {
                        finalStr = replaceStr;
                        for (let i = 0; i < replaceDigital - dotDigital; i++) {
                            finalStr += "0";
                        }
                    }
                }
                else {
                    finalStr = replaceStr;
                    if (dotStrResult) {
                        finalStr += ".";
                    }
                    for (let i = 0; i < replaceDigital; i++) {
                        finalStr += "0";
                    }
                }
            }
            else if (findStr.indexOf('d') > -1) {
                finalStr = replaceStr;
                if (replaceDigital > 0 && replaceStr.length < replaceDigital) {
                    for (let i = 0; i < replaceDigital - replaceStr.length; i++) {
                        finalStr = "0" + finalStr;
                    }
                }
            }
            else { // %s
                finalStr = replaceStr;
            }
            index++;
        }
        return finalStr;
    });
}

/*  */
export function setGray(sp: cc.Sprite, isGray: boolean) {

    if (!sp) {
        return
    }

    if (isGray) {
        let material = cc.MaterialVariant.create(cc.Material.getBuiltinMaterial('2d-gray-sprite'), sp);
        sp.setMaterial(0, material);
    } else {
        let material = cc.MaterialVariant.create(cc.Material.getBuiltinMaterial('2d-sprite'), sp);
        sp.setMaterial(0, material);
    }
}

/*  */
export function setGrayCustom(sp: cc.Sprite, isGray: boolean) {
    if (isGray) {
        cc.loader.loadRes("Shader/custome_2d_sprite_gray", cc.Material, function (err, res) {
            sp.setMaterial(0, res);
        });
    } else {
        let material = cc.MaterialVariant.create(cc.Material.getBuiltinMaterial('2d-sprite'), sp);
        sp.setMaterial(0, material);
    }
}

/*  */
export function flyResources(oriNode: cc.Node, awardID: number) {
    if (oriNode.isValid) {
        let worldpos = oriNode.convertToWorldSpaceAR(new cc.Vec2(0, 0))
        awardID == proto.ConstItemID.CTI_Gold && flyGold(worldpos)
        awardID == proto.ConstItemID.CTI_RoleExp && flyRoleExp(worldpos)
        awardID == proto.ConstItemID.CTI_Diamond && flyDemond(worldpos)
    }
}

/*  */
export function flySoul(startWorldPos: cc.Vec2, count: number) {

    let bossboxnode: MainsceneBossBox = MainScene.Instance.getBattleNode().getComponentInChildren(MainsceneBossBox)
    if (bossboxnode != undefined) {
        let endpos = cc.director.getScene().convertToNodeSpaceAR(bossboxnode.node.convertToWorldSpaceAR(new cc.Vec2(0, 0)))
        let nodepos = cc.director.getScene().convertToNodeSpaceAR(startWorldPos)

        for (let i = 0; i < count; i++) {

            let time = Math.random()
            setTimeout(() => {
                let x = Math.random() * 100
                let y = Math.random() * 100
                let spinenode = new cc.Node();
                spinenode.name = "flyGold"
                cc.director.getScene().addChild(spinenode)
                spinenode.setPosition(nodepos.add(new cc.Vec2(x, y)))


                CreateSpine(20026).then(skel => {
                    spinenode.addChild(skel.node)
                    skel.setAnimation(0, "idle", false)
                    skel.setCompleteListener(() => {
                        spinenode.destroy()
                        skel.setCompleteListener(null)
                    })

                    let action = cc.moveTo(0.33, endpos)
                    setTimeout(() => {
                        spinenode.runAction(action.easing(cc.easeInOut(1)))

                    }, 660);
                })
            }, time * 1000);

        }
    }
}

/*  */
export function flyGold(startWorldPos: cc.Vec2) {
    let roletop: roleInfo = MainScene.Instance.getRoleInfo().getComponent(roleInfo)
    if (roletop != undefined) {
        let endpos = cc.director.getScene().convertToNodeSpaceAR(roletop.getGoldWorldPos())
        let spinenode = new cc.Node();
        spinenode.name = "flyGold"
        cc.director.getScene().addChild(spinenode)
        let nodepos = cc.director.getScene().convertToNodeSpaceAR(startWorldPos)
        spinenode.setPosition(nodepos)

        CreateSpine(20026).then(skel => {
            spinenode.addChild(skel.node)
            skel.setAnimation(0, "idle", false)
            skel.setCompleteListener(() => {
                spinenode.destroy()
                skel.setCompleteListener(null)
            })

            let action = cc.moveTo(0.33, endpos)
            roletop.scheduleOnce(() => roletop.scaleGoldNode(), 1)
            setTimeout(() => {
                spinenode.runAction(action.easing(cc.easeInOut(1)))

            }, 660);
        })
    }
}

/*  */
export function flyDemond(startWorldPos: cc.Vec2) {
    let roletop: roleInfo = MainScene.Instance.getRoleInfo().getComponent(roleInfo)
    if (roletop != undefined) {
        let pos1: cc.Vec2 = roletop.getDemondWorldPos()
        let curscene: cc.Scene = cc.director.getScene()
        let endpos1 = curscene.convertToNodeSpaceAR(pos1)
        let spinenode = new cc.Node();
        spinenode.name = "flyDemond"
        cc.director.getScene().addChild(spinenode)
        let nodepos = cc.director.getScene().convertToNodeSpaceAR(startWorldPos)
        spinenode.setPosition(nodepos)

        CreateSpine(20027).then(skel => {
            spinenode.addChild(skel.node)
            skel.setAnimation(0, "idle", false)

            skel.setCompleteListener(() => {
                spinenode.destroy()
                skel.setCompleteListener(null)
            })

            let action = cc.moveTo(0.33, endpos1)
            roletop.scheduleOnce(() => roletop.scaleDemondNode(), 1)

            setTimeout(() => {
                spinenode.runAction(action.easing(cc.easeInOut(1)))

            }, 660);
        })
    }
}

/*  */
export function flyRoleExp(startWorldPos: cc.Vec2) {
    let roletop: roleInfo = MainScene.Instance.getRoleInfo().getComponent(roleInfo)
    if (roletop != undefined) {
        // let endpos = cc.director.getScene().convertToNodeSpaceAR(roletop.getRoleExpWorldPos())
        let spinenode = new cc.Node();
        spinenode.name = "flyexp"
        cc.director.getScene().addChild(spinenode)
        let nodepos = cc.director.getScene().convertToNodeSpaceAR(startWorldPos)
        spinenode.setPosition(nodepos)

        CreateSpine(20028).then(skel => {
            spinenode.addChild(skel.node)
            skel.setAnimation(0, "idle", false)
            skel.setCompleteListener(() => {
                spinenode.destroy()
                skel.setCompleteListener(null)
            })

            // let action = cc.moveTo(0.33, endpos)
            roletop.scheduleOnce(() => roletop.scaleGoldNode(), 1)
            setTimeout(() => {
                // spinenode.runAction(action.easing(cc.easeInOut(1)))

            }, 660);
        })
    }
}

/**
 * 购买表情后的动画
 * @param startWorldPos 
 */
export async function flyEmotion(startWorldPos: cc.Vec2, emotionID: number) {
    let targetNode = MainScene.Instance.getBottomNodeOfDeck();
    if (targetNode) {
        let targetNodePos: cc.Vec2 = targetNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let curScene: cc.Scene = cc.director.getScene();
        let targetFinalPos = curScene.convertToNodeSpaceAR(targetNodePos);
        let spineNode = new cc.Node();
        let spinePos = cc.director.getScene().convertToNodeSpaceAR(startWorldPos);
        spineNode.name = "flyEmotion";
        cc.director.getScene().addChild(spineNode);
        targetFinalPos.y += 30;
        spineNode.setPosition(spinePos);

        //先创建表情节点
        let emotionSpine: sp.Skeleton = null;
        let emojiData = tab.Data.EmojiTableByID.getValue(emotionID);
        if (isValidObj(emojiData)) {
            emotionSpine = await CreateSpine(emojiData.SpineID);
            if (emotionSpine) {
                emotionSpine.node.scale = 0.25;
                spineNode.addChild(emotionSpine.node);
                emotionSpine.setAnimation(kZeroNumber, "idle", true);
            }
        }

        CreateSpine(20061).then(skel => {
            spineNode.addChild(skel.node);
            skel.node.opacity = 0;
            //setTimeout(()=>{
            skel.setAnimation(0, "idle", false);
            //}, 75);

            skel.setCompleteListener(() => {
                spineNode.destroy();
                skel.setCompleteListener(null);
            })

            let move1 = cc.moveBy(0.4, cc.v2(10, -10));
            let scaleAct = cc.scaleTo(0.33, 0.15);
            let action = cc.sequence(cc.moveTo(0.33, targetFinalPos), cc.callFunc(() => {
                skel.node.opacity = 255;
            }));
            setTimeout(() => {
                spineNode.runAction(cc.sequence(move1, cc.callFunc(() => {
                    if (emotionSpine) {
                        emotionSpine.node.runAction(scaleAct);
                    }
                }, emotionSpine.node), action));

            }, 660);
        })
    }
}

/*  */
export function hideFlyResources() {
    let child = cc.director.getScene().getChildByName("flyScore")
    if (child) {
        child.active = false
    }

    let child1 = cc.director.getScene().getChildByName("flyDemond")
    if (child1) {
        child1.active = false
    }

    let child2 = cc.director.getScene().getChildByName("flyGold")
    if (child2) {
        child2.active = false
    }

    child2 = cc.director.getScene().getChildByName("flyEmotion");
    if (child2) {
        child2.active = false;
    }
}

//根据竞技场等级获得宝箱id
export function getBoxIDAndCfg(boxgroupId: number): { boxId: number, boxCfg: tab.BoxTable } {
    let boxlv: tab.RankGradeTable = tab.Data.RankGradeTableByGrade.getValue(Role.Instance.RoleGrade)
    let rankbox: tab.RankBoxTable = tab.Data.RankBoxTableByBoxGroupID.getValue(boxgroupId)
    if (boxlv && rankbox) {
        let boxid: number = rankbox.BoxLevel[boxlv.BoxLevel]
        let boxcfg: tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(boxid)
        return { boxId: boxid, boxCfg: boxcfg }
    }

    return { boxId: 0, boxCfg: null }
}

/*  */
export function getRoleGradeLvStr(): string {
    let str = tab.Data.TipsTableByKey.getValue("Arenatxt").Value || ""
    return str + Role.Instance.RoleGrade
}

/**
 * Description: 通用奖励获取弹框
 * 奖励目前只分为单个奖励和多个奖励两种情况，分别对应两个界面，多个奖励走宝箱的逻辑
 */
export function popRewardLayer_Ex(rewardsList: proto.IRewardSimpleInfo[], callback?: (tag: number) => void, bskipEffect: boolean = false) {
    // if (rewardsList.length == kOneNumber) {
    //     //如果奖励是解锁宝箱加速的话，特殊处理
    //     if (rewardsList[kZeroNumber].rewardType === tab.RewardType.RewardType_BagSpeedUp) {
    //         Role.Instance.setOldBufferEndUTC(Role.Instance.RoleData.rankData.buffEndUTC);
    //         let bagSpdData = tab.Data.BagSpeedUpTableByID.getValue(rewardsList[kZeroNumber].rewardId);
    //         if (!isValidObj(bagSpdData)) {
    //             return;
    //         }
    //         if (Role.Instance.RoleData.rankData.buffEndUTC > getServerUtcTime()) {
    //             Role.Instance.RoleData.rankData.buffEndUTC += bagSpdData.BagSpeedUpTime;
    //         } else {
    //             Role.Instance.RoleData.rankData.buffEndUTC = getServerUtcTime() + bagSpdData.BagSpeedUpTime;
    //         }
    //         showPopLayerV2("prefab/UnlockAccelerateEffect", UnlockAccelerateEffect).then(tipLayer => {
    //             tipLayer.initData(2)
    //         });
    //         return;
    //     }
    //     else if (rewardsList[kZeroNumber].rewardType === tab.RewardType.RewardType_SelectCardBySelf) {
    //         selectCardBySelf()
    //         return
    //     }
    //     showOneAward(rewardsList, callback);
    // }
    // else {
    if (rewardsList && rewardsList.length == 0){
        return
    }
    PullCardResult1.showAward_EX2(rewardsList, () => {
        if (callback) {
            callback(1);
        }
    }, bskipEffect)
    // }
}

/*  */
export function showOneAward(rewardsList: proto.IRewardSimpleInfo[], callback: (tag: number) => void) {
    let layer = GetPopLayer("prefab/GetOneItem");
    if (layer) {
        let com = layer.getComponent(GetOneItem);
        if (com) {
            com.setNotHide(true);
            com.showAward_Ex(rewardsList[kZeroNumber]);
            com.setOneCloseBack(() => {
                com.setNotHide(false);
                if (callback) {
                    callback(0);
                }
            });
        }
    }

    else {
        showPopLayerV2("prefab/GetOneItem", GetOneItem, false).then((value: GetOneItem) => {
            value.showAward_Ex(rewardsList[kZeroNumber]);
            value.setOneCloseBack(() => {
                if (callback) {
                    callback(0);
                }
            });
        });
    }
}

//自选金卡
export function selectCardBySelf() {
    let cards = []
    let cfgData = tab.Data.UnpackRebateCardTable
    for (let i = 0; i < cfgData.length; i++) {
        cards.push(cfgData[i].CardID)
    }

    showPopLayerV2("prefab/UnpackRebateSelectCardLayer", UnpackRebateSelectCardLayer, false).then(layer => {
        layer.initData(cards, unpackType.BoxGoldCard);
    });
}

/**
 * 循环展示奖励组
 * @returns 
 */
export function popRewardLayer_Vec_Recycle(rewardsList: proto.IVecRewardSimpleInfo[], callback?: (tag: number) => void) {
    if (!rewardsList || rewardsList.length == 0) {
        return
    }
    let copy = rewardsList.slice(0, rewardsList.length)

    let showaward = () => {
        if (copy.length > 0) {
            let award: proto.IRewardSimpleInfo[] = copy.shift().awards
            popRewardLayer_Ex(award, () => { showaward() }, false)
        }
    }

    showaward()

}

/**
 * Description: 数字变动动画
 */
export function setTextWithAction(pNode: cc.Node, newNum: number, oldNum: number, totalShowTime: number = 0.5, func: Function = null) {
    if (pNode && pNode.getComponent(cc.Label)) {
        if (oldNum >= newNum) {
            if (func) {
                func();
            }
            return;
        }

        pNode.stopAllActions();
        pNode.runAction(new FontChangeAction(oldNum, newNum, totalShowTime, func));
    }
}

/** 
 * Description: 用于生成玩家的伪UUID【只做展现，不做实际交互】
 */
const kAlphabetList: string[] = ['A', 'B',
    'C', 'D',
    'E', 'F',
    'G', 'H',
    'I', 'J',
    'K', 'L',
    'M', 'N',
    'O', 'P',
    'Q', 'R',
    'S', 'T',
    'U', 'V',
    'W', 'X',
    'Y', 'Z'];

/*  */
export function exchangePlayerSimulatorUUID(num) {
    num = parseInt(num);
    let remainder = num % 26;
    let value = (num - remainder) / 26;
    if (value < 26) {
        return kAlphabetList[value - 1] + kAlphabetList[remainder];
    }

    return exchangePlayerSimulatorUUID(value) + kAlphabetList[remainder];
}

/*  */
class _ScrollNum {
    constructor(label: cc.Label) { this.label = label; }
    private label: cc.Label
    get Num(): number { return Number(this.label.string); }
    set Num(n: number) { this.label.string = `${Math.floor(n)}` }
}

/**
 * 滚动数字
 * @param label 
 * @param fromNum 
 * @param toNum 
 * @param dt 滚动时间
 * @returns 
 */
export function ScrollNum(label: cc.Label, dt: number, toNum: number, fromNum?: number): cc.Tween {
    let obj: any = new _ScrollNum(label)
    if (fromNum !== undefined) {
        label.string = `${fromNum}`
    }
    return cc.tween(obj)
        .to(dt, { Num: toNum })
        .start()
}

/**
 * Description: 获取icon路径
 */
export function getItemIconURL(item_static_id: number, item_type: tab.RewardType, defaultScale?: number) {
    if (tab.RewardType.RewardType_BattleMap == item_type) {
        let mapData = tab.Data.BattleMapTableByID.getValue(item_static_id);
        if (isValidObj(mapData)) {
            return { icon: mapData.SmallIcon, name: mapData.Name, scale: 1 };
        }
        return { icon: "", scale: 1, name: "", desc: "" };
    }

    if (tab.RewardType.RewardType_Emotion == item_type) {
        let mapData = tab.Data.EmojiTableByID.getValue(item_static_id);
        if (isValidObj(mapData)) {
            return { icon: mapData.StaticIcon, name: mapData.Name, scale: 1 };
        }
        return { icon: "", scale: 1, name: "", desc: "" };
    }

    if (tab.RewardType.RewardType_BoxType == item_type) { /* 奖励Item类型是宝箱 */
        let boxData = tab.Data.BoxTableByBoxID.getValue(item_static_id);
        if (isValidObj(boxData)) {
            return {
                icon: boxData.ItemIcon, name: boxData.BoxName,
                scale: defaultScale > 0 ? defaultScale : 1
            }
        }
        return { icon: "", scale: 1, name: boxData.BoxName, desc: "" };
    }

    if (tab.RewardType.RewardType_BoxGroupType == item_type) { /* 奖励Item类型是宝箱组 */
        let boxData = getBoxIDAndCfg(item_static_id as number);
        if (isValidObj(boxData) && isValidObj(boxData.boxCfg)) {
            return {
                icon: boxData.boxCfg.ItemIcon, scale: defaultScale > 0 ? defaultScale : 1,
                name: boxData.boxCfg.BoxName, desc: ""
            }
        }
        return { icon: "", scale: 1 };
    }

    //道具类型是buff
    if (tab.RewardType.RewardType_BagSpeedUp == item_type) {
        let upcfg = tab.Data.BagSpeedUpTableByID.getValue(item_static_id)
        if (isValidObj(upcfg)) {
            return { icon: upcfg.BagSpeedUpTimeIcon, scale: 1, name: upcfg.BagSpeedUpTimeName, desc: "" };
        }

        return { icon: "", scale: 1 };
    }

    /* 奖励Item类型是道具 */
    if (tab.RewardType.RewardType_ItemType == item_type || tab.RewardType.RewardType_OptionalBox == item_type) {
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(item_static_id);
        if (isValidObj(itemTab)) {
            return { icon: itemTab.Icon, scale: 1, name: itemTab.Name, desc: "",ItemBigIcon:itemTab.ItemBigIcon };
        }
    }

    /* 奖励Box类型是道具*/
    // let boxTab: tab.ItemTable = tab.Data.BoxTableByBoxID.getValue(item_static_id);
    // if (isValidObj(boxTab)) {
    //     return { icon: boxTab.ItemIcon, scale: 1, name: boxTab.BoxName, desc: "" };
    // }

    let cardTab: tab.CardTable = tab.Data.CardTableByID.getValue(item_static_id);
    if (isValidObj(cardTab)) {
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(item_static_id);
        return { icon: itemTab.Icon, scale: 1, name: itemTab.Name, desc: cardTab.Describe };
    }

    // return { icon: itemTab.Icon, scale: 1, name: itemTab.Name, desc: itemTab.Desc };
}

/*  */
export function getLocalData(key: string, value: string = ""): string {
    let tempValue: string = cc.sys.localStorage.getItem(key);
    if (tempValue) {
        return tempValue;
    }
    return value;
}

/*  */
export function checkPveBeReported(): boolean {
    if (Role.Instance.beReportedEndUTC >= getServerUtcTime()) {
        showPopLayer("prefab/ReportTips")   //被举报了
        return true
    }
    return false
}

/*  */
export function showItemTips(item: proto.IRewardSimpleInfo, target: cc.Node, bShowCardDesc: boolean = false) {
    cc.log("showItemTips()")
    if (!item || !target) {
        return
    }
    switch (item.rewardType) {
        case tab.RewardType.RewardType_ItemType:
        case tab.RewardType.RewardType_SelectCardBySelf:
            let card = tab.Data.CardTableByID.getValue(item.rewardId)
            if (card) {
                if (bShowCardDesc) {
                    ItemTips.show(target, card.ID, card.Describe);
                    return;
                }
                showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
                    nodeDetail.setCardData(item.rewardId, CardNodeState.CARD_NODE_STATE_UNOWN);
                });
            } else {
                let cfg = tab.Data.ItemTableByID.getValue(item.rewardId)
                // ItemTips.show(target, cfg.ID, cfg.Desc,()=>{
                //     Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskBoxGetAward, null)
                //     Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
                //     this.hide()
                // })
                showPopLayerV3("prefab/ItemTips", ItemTips, false).then(nodeDetail => {
                    //nodeDetail.setCardData(item.rewardId, CardNodeState.CARD_NODE_STATE_UNOWN, 1);
                    cc.log("Load ItemTips finished");
                    nodeDetail.setInfo(target, cfg.ID, cfg.Desc, () => {
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskBoxGetAward, null)
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips)
                    })
                });
            }
            break;
        case tab.RewardType.RewardType_BoxGroupType:
            showPopLayerV2("prefab/shopboxTipslayer", shopboxTipslayer, false).then(nodeDetail => {
                nodeDetail.setGrayVisible(false);
                nodeDetail.setViewbyGroupID(item.rewardId, null);
            });
            //boxtips.showTips (item.rewardId, target)
            break
        case tab.RewardType.RewardType_BoxType:
            showPopLayerV2("prefab/shopboxTipslayer", shopboxTipslayer, false).then(nodeDetail => {
                nodeDetail.setGrayVisible(false);
                nodeDetail.justPreviewBoxInfoById(item.rewardId)
                nodeDetail.setTarget(target)
            });
            //boxtips.showTips (0, target, item.rewardId)
            break;
        default:
            break;
    }
}


/**
 * @param copy 深拷贝
 * @param _object 如果不传返回为空对象 必须是js的{}对象
 * @param _obj 可选 返回传入的@param _object 必须是js的{}对象,
 */
type _typeObj = { [anyKey: string]: any }

/*  */
export const copy = (_object: _typeObj, _obj: _typeObj = {}): _typeObj => {
    if (!(Object.prototype === Object.getPrototypeOf(_object))) {
        return new Error('传入参数***_object***类型错误')
    }
    for (let key in _object) {
        if (Object.prototype === Object.getPrototypeOf(_object[key])) {
            _obj[key] = copy(_object[key])
        } else {
            _obj[key] = _object[key]
        }
    }
    return _obj
}

//当前段位
export function getCurScoreStage(totalScore: number): any {
    /* 当前分数 */
    // let totalScore = Role.Instance.RoleData.rankData.score;
    /* 先将RankScoreRewardTable的段位收集一下 */
    let stageArr = [];
    for (let data of tab.Data.RankScoreRewardTable) {
        if (data.RankIcon && data.RankName) {
            stageArr.push(data);
        }
    }
    for (let index = stageArr.length - 1; index >= 0; index--) {
        const data = stageArr[index];
        if (totalScore >= data.Score) {
            return data
        }
    }
    return stageArr[0]

    // let idx = 0;
    // for (let data of stageArr) {
    //     if (totalScore < data.Score) {
    //         return stageArr[idx - 1];
    //     } else {
    //         idx++;
    //     }
    // }
}

/*  */
export function getCfgValueById(id: number | null | undefined): any {
    if (null == id || undefined == id) {
        return undefined;
    }
    let ItemCfg = tab.Data.ItemTableByID.getValue(id)
    if (!ItemCfg) {
        let BoxCfg = tab.Data.BoxTableByBoxID.getValue(id)
        if (!BoxCfg) {
            return undefined
        }
        return BoxCfg;
    }
    return ItemCfg;
}

/*  */
export function getCfgValueByReward(reward: proto.RewardSimpleInfo) {
    if (reward.rewardType == tab.RewardType.RewardType_BoxGroupType) {
        // let info = getBoxIDAndCfg(reward.rewardId)
        // if(info){
        //     PullCardResult1.boxCfg = info.boxCfg
        // }
    } else if (reward.rewardType == tab.RewardType.RewardType_BoxType) {
        return tab.Data.BoxTableByBoxID.getValue(reward.rewardId)
    } else if (reward.rewardType == tab.RewardType.RewardType_ItemType) {
        return tab.Data.ItemTableByID.getValue(reward.rewardId)
    } else {
        //TODO: Error Log
        return null
    }
}
export function handleRichText(staticId: number, cardLv: number, CompoundLv: number, deslbl: cc.RichText) {
    let cardTab: tab.CardTable = tab.Data.CardTableByID.getValue(staticId);
    let describe = cardTab.Describe;

    /* 找出所有需要改变的字符 */
    /* 正则表达式 */
    let reg = /\[[^\]]*]/g;
    // 匹配数组
    let describeArr = describe.match(reg);
    deslbl.string = describe;
    if (describeArr && describeArr.length > 0) {
        for (let i = 0; i < describeArr.length; i++) {
            let newSub = describeArr[i].slice(1, describeArr[i].length - 1);
            let arr = newSub.split(",");
            let val = readTabBack(arr, staticId, cardLv, CompoundLv);
            if (arr[3]) {
                let cale = arr[3].split("|");
                if (cale[0] === "/") {
                    val.curAttrVal = Number((val.curAttrVal / Number(cale[1])).toFixed(2));
                    val.nextAttrVal = Number((val.nextAttrVal / Number(cale[1])).toFixed(2));
                }
                if (cale[2] && cale[3]) {
                    if (cale[2] === "*") {
                        val.curAttrVal = val.curAttrVal * Number(cale[3]);
                        val.nextAttrVal = val.nextAttrVal * Number(cale[3]);
                    }
                    if (cale[2] === "/") {
                        val.curAttrVal = val.curAttrVal / Number(cale[3]);
                        val.nextAttrVal = val.nextAttrVal / Number(cale[3]);
                    }
                }
            }
            if (CompoundLv > 1) {
                deslbl.string = deslbl.string.replace("[" + newSub + "]", val.nextAttrVal + "");
            } else {
                deslbl.string = deslbl.string.replace("[" + newSub + "]", val.curAttrVal + "");
            }
        }
    } else {
        deslbl.string = describe;
    }

}
/* 读表返回数值 */
export function readTabBack(data, staticId: number, cardLv: number, CompoundLv: number) {
    let tableName = data[0];
    if (tableName === "skill") {
        let _card_attr_obj = ManagerCardAttr.getInstance().getCardAttrObj(CardAttrType.SKILL, staticId);
        let type = CardDisplayType.CARD_DISPLAY_TYPE_ATTR;
        if (CompoundLv > 1) {
            type = CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS
        }
        let cardAttrObj = _card_attr_obj.getAttrValue(cardLv, CompoundLv, type, false, data);
        return cardAttrObj;
    } else if (tableName === "buff") {
        let _card_attr_obj = ManagerCardAttr.getInstance().getCardAttrObj(CardAttrType.BUFFER, staticId);
        let type = CardDisplayType.CARD_DISPLAY_TYPE_ATTR;
        if (CompoundLv > 1) {
            type = CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS
        }
        let cardAttrObj = _card_attr_obj.getAttrValue(cardLv, CompoundLv, type, false, data);
        return cardAttrObj;
    }
}
/**
 * 获取卡牌属性值
 * @param cardLv - 棋子等级
 * @param compoundLv - 棋子星级
 * @param caleType - 计算方式 true为千分比 false为固定值
 * @param ConditionParams - 发动条件参数 “200|0.0.5|0.1” retVal|upLvVal|compoundLv
 */
export function calcAttrValue(cardLv: number, compoundLv: number, caleType: boolean, ConditionParams: number[]) {
    /* 先计算他的等级 */
    let retVal = ConditionParams[0];
    if (caleType) {
        retVal = Math.floor(retVal * Math.pow(kOneNumber + ConditionParams[1], (cardLv - kOneNumber)));
    } else {
        retVal = Math.floor(retVal * ConditionParams[1]) * (cardLv - kOneNumber) + retVal;
    }
    retVal = Math.floor((retVal * ConditionParams[2])) * (compoundLv - 1) + retVal;
    return retVal;
}

/* 增加品质的光束effect效果 */
export function setChessEffect(effectId: number, effect_spine: sp.Skeleton, frame: cc.Sprite) {
    let effectData = tab.Data.EffectTableByID.getValue(effectId);
    if (!effectData) {
        throw `cannot find effect: ${effectId}`
    }
    effect_spine?.node?.active = false;
    frame?.node?.active = false;
    switch (effectData.Type) {
        case tab.EffectType.EffectType_SkeletonData: /*  */
            //骨骼动画
            effect_spine.node.active = true;
            CreateSpineFromPool(effectData.SpineID).then(skel => {
                if (skel && cc.isValid(effect_spine.node)) {
                    effect_spine = skel;
                    if (effectData.AnimationName.length == 1) {
                        skel.setAnimation(0, effectData.AnimationName[0], effectData.Loop)
                    } else {
                        for (let i = 0; i < effectData.AnimationName.length; i++) {
                            if (i == 0) {
                                skel.setAnimation(0, effectData.AnimationName[i], false)
                            } else if (i < effectData.AnimationName.length - 1) {
                                skel.addAnimation(0, effectData.AnimationName[i], false)
                            } else {
                                skel.addAnimation(0, effectData.AnimationName[i], effectData.Loop)
                            }
                        }
                    }
                    skel.setCompleteListener(null)
                }
            })
            break
        case tab.EffectType.EffectType_SpriteFrame: /*  */
            frame?.node?.active = true;
            LoadResAsync(effectData.Url, cc.SpriteFrame).then(sf => {
                if (sf && cc.isValid(frame)) {
                    frame.spriteFrame = sf;
                }
            })
            break
    }
}


/* 增加品质的星星效果 */
export function setChessSpineStar(option: { spineId: number, parentNode: cc.Node, pos?: cc.Vec2, loadComplete?: any }) {
    if (!option || (!option.parentNode)) {
        return
    }


    let starNode = option.parentNode.getChildByName("CardQualityEffectStar")
    if (option.spineId == 0) {
        if (starNode) {
            starNode.removeFromParent()
            starNode.destroy()
            return
        }
    }
    if (option.spineId) {
        if (starNode) {
            option.loadComplete && option.loadComplete(starNode.getComponent(sp.Skeleton))
            return
        }
        if (option.spineId) {
            CreateSpine(option.spineId).then(skel => {
                if (option.parentNode && option.parentNode.isValid) {
                    option.parentNode.addChild(skel.node)
                    skel.node.y = -75
                    if (option.pos) {
                        skel.node.x = option.pos.x
                        skel.node.y = option.pos.y
                    }

                    skel.node.name = "CardQualityEffectStar"
                    skel.setAnimation(0, "idle", true);
                    option.loadComplete && option.loadComplete(skel)
                }
            });
        }
    }

}
/* 销毁品质的星星效果 */
export function destroyChessSpineStar(parentNode) {
    if (!parentNode) {
        return
    }
    let starNode = parentNode.getChildByName("CardQualityEffectStar")
    if (starNode) {
        starNode.removeFromParent()
        starNode.destroy()
    }
}


/* 根据手机分辨率处理节点 */
export function getLocationInResolution(pos) {
    let dSize = cc.view.getDesignResolutionSize();
    let desVec = cc.v2(dSize.width, dSize.height);
    let winVec = cc.v2(cc.winSize.width, cc.winSize.height);
    return pos.sub(winVec.sub(desVec).divide(2));
}

/**
 * 检测转换int
 * @param value 
 * @returns 
 */
export function checkInt(value: any): number {
    value = Number(value)
    return isNaN(value) ? 0 : value
}

/**
 * 修正触摸坐标
 * 主要处理屏幕坐标系与设计尺寸不一致导致转换的位置信息错误
 * @param pos 
 */
export function AmendmentEventLocation(pos: cc.Vec2) {
    let newpos = cc.v2(pos)
    newpos.y -= (cc.winSize.height - cc.view.getDesignResolutionSize().height) / 2
    return newpos
}

/* 判断是否是在"微信小游戏"的运行环境 */
export function isWeixinMiniGame() : boolean {
	if (typeof wx === 'undefined') {
		return false;
	}
	return true;
}

/* 获取"微信小游戏"的系统信息 */
export function getWXSystemInfo(): any {
	let data = null;
	if (!isWeixinMiniGame()) {
		return data;
	}

	data = wx.getSystemInfoSync();
	cc.log("getSystemInfoSync ", data);
	return data;
}

/* 判断是否是微信小游戏平台 */
export function isWechat() {
	let ret = false;
	if (cc.sys.WECHAT_GAME===cc.sys.platform){ /* 微信小游戏，这个true不要修改 */	
		ret = true; /*  */
	} else if(cc.sys.DESKTOP_BROWSER===cc.sys.platform){ /* 桌面浏览器 根据实际情况自己在浏览器环境中调整 */
		ret = isWeixinMiniGame(); /* TODO: zhibo+ @20230512 微信小游戏现在也可以在Windows上玩，所以要调查一下这个函数是否有效 */
		//ret = true; /* 注意: 在小程序的分支上为了模拟小程序的运行环境，这个地方强制返回了true */
	} else {
		ret = false;
	}
	return ret;
}

/* 判断微信SDK是否存在 */
export function isWechatSDKEnable(){
	let ret = false;
	if('undefined' !== typeof wx){
		ret = true;
	}
	return ret;
}