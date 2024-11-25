import { Material, Prefab, builtinResMgr, log, sp, Node, Sprite, SpriteAtlas, Animation, AnimationClip, Vec2, Vec3, SpriteFrame, error, view } from "cc";
import { LangMgr } from "../mgr/LangMgr";
import { ItemInfo } from "../model/item/ItemInfo";
import { LoadResAsync } from "../mgr/ResMgr";
import { tab } from "../../Table/table_gen";
import { Func } from "./Func";
import { ItemData } from "../model/item/ItemData";
import { CommonTipsPop } from "../model/common/CommonTipsPop";
import { ShowItemNotEnoughTips, UIMgr } from "../mgr/UIMgr";
import { proto } from "client_protocol";
import { Net } from "../net/Net";
import { RecruitType } from "../../Common/script/EnumTypeMgr";
import { Long } from "protobufjs";
import { Avatar } from "../fight/animation/Avatar";
import { ViewName } from "../define/ViewDefine";
import { RoleData } from "../model/role/RoleData";
import { ChatData } from "../model/chat/ChatData";
import { ChatControl } from "../model/chat/ChatControl";

export class GameUtil {

    /**
     * 根据数组[itemid,num,itemid,num.......]格式转换成[{itemId,num}.....]格式
     * @param list 
     * @returns 
     */
    static convertRewardsByList(list: Array<number>) {
        let rewads = [];
        let len = list.length;
        for (let i: number = 0; i < len; i += 2) {
            if (i + 1 < len) {
                rewads.push({ "itemId": list[i], "num": list[i + 1] });
            }
        }
        return rewads;
    }
    /**
    * 根据数组[itemid,num,itemid,num.......]格式转换成[{itemId,num}.....]格式
    * @param list 
    * @returns 
    */
    static convertItemInfosByList(list: Array<number>) {
        let rewads: Array<ItemInfo> = [];
        let len = list.length;
        for (let i: number = 0; i < len; i += 2) {
            if (i + 1 < len) {
                let item = new ItemInfo();
                item.initItemData(list[i], list[i + 1])
                rewads.push(item);
            }
        }
        return rewads;
    }
    static itemsAddItems(items1: ItemInfo[], items2: ItemInfo[]) {
        for (let key in items1) {
            let item = items2.find(a => a.itemId == items1[key].itemId);
            if (item) {
                items1[key].num += item.num;
            }
        }
        for (let key in items2) {
            let item = items1.find(a => a.itemId == items2[key].itemId);
            if (!item) {
                items1.push(items2[key]);
            }
        }
        return items1;

    }/**
     * 根据掉落id 获取奖励
     * @param dropId 
     * @returns 
     */
    static getRewardsByDropId(dropId: number) {
        let rewads: Array<ItemInfo> = [];
        let callBack = (id: number) => {
            let table = tab.getData().DropTableById.getValue(id);
            if (table) {
                if (table.Type == tab.DropType.DropType_Odds || table.Type == tab.DropType.DropType_Weight) {
                    for (let key in table.ItemList) {
                        let item = new ItemInfo();
                        if (table.Type == tab.DropType.DropType_Weight) {
                            item.initItemData(table.ItemList[key], table.Count * table.ItemCount[key]);
                        } else {
                            item.initItemData(table.ItemList[key], table.ItemCount[key]);
                        }

                        rewads.push(item);
                    }
                } else {
                    if (table.Type == tab.DropType.DropType_GroupWeight) {
                        for (let i: number = 0; i < table.Count; i++) {
                            for (let key in table.ItemList) {
                                callBack(table.ItemList[key]);
                            }
                        }
                    } else {
                        for (let key in table.ItemList) {
                            callBack(table.ItemList[key]);
                        }
                    }


                }
            } else {
                error("掉落id错误==", id);
            }

        }
        callBack(dropId);
        return rewads;
    }
    /**
     * 
     * @param num 
     * @param isConsume 是否是消耗类型 
     * @returns 
     */
    static convertNumber(num: number, isConsume: boolean = false) {
        if (num < 10000) {
            return num + "";
        } else if (num <= 10000000) {
            if (isConsume) {
                return (Math.ceil(num / 1000 * 10) / 10) + "K"
            } else {
                if (num % 1000 != 0) {
                    return (Math.round(num / 1000 * 10) / 10).toFixed(1) + "K"
                } else {
                    return (Math.round(num / 1000 * 10) / 10) + "K"
                }
            }
        } else {

            if (isConsume) {
                return (Math.ceil(num / 1000000 * 10) / 10) + "M"
            } else {
                if ((num % 1000000 != 0)) {
                    return (Math.round(num / 1000000 * 10) / 10).toFixed(1) + "M"
                } else {
                    return (Math.round(num / 1000000 * 10) / 10) + "M"
                }

            }
        }
    }
}

export function getTimeGuildTXT(timeleft: number): string {
    if (timeleft < 0) {
        return;
    }
    let dayStr = LangMgr.getLab("Tips_common_day")
    let hourStr = LangMgr.getLab("Tips_common_hour")

    let day = Math.floor(timeleft / 86400)
    let dayleft = timeleft % 86400
    let hour = Math.floor(dayleft / 3600)
    if (day > 0) { //天时
        return `${day}${dayStr}`
    }
    let minuteStr = LangMgr.getLab("Tips_common_minute")
    let hourleft = dayleft % 3600
    let min = Math.floor(hourleft / 60)
    if (hour > 0) { //时分
        return `${hour}小${hourStr}`
    }
    let sec = hourleft % 60

    let secondStr = LangMgr.getLab("Tips_common_second")
    //分秒
    if (min > 0) {
        return `${min}${minuteStr}`
    }

    return `${sec}${secondStr}`
}

export function getTimeTXT(timeleft: number): string {
    if (timeleft < 0) {
        return;
    }
    let dayStr = LangMgr.getLab("Tips_common_day")
    let hourStr = LangMgr.getLab("Tips_common_hour")

    let day = Math.floor(timeleft / 86400)
    let dayleft = timeleft % 86400
    let hour = Math.floor(dayleft / 3600)
    if (day > 0) { //天时
        if (hour > 0) {
            return `${day}${dayStr}${hour}${hourStr}`
        } else {
            return `${day}${dayStr}`
        }
    }
    let minuteStr = LangMgr.getLab("Tips_common_minute")
    let hourleft = dayleft % 3600
    let min = Math.floor(hourleft / 60)
    if (hour > 0) { //时分
        if (min > 0) {
            return `${hour}${hourStr}${min}${minuteStr}`
        } else {
            return `${hour}${hourStr}`
        }
        return
    }
    let sec = hourleft % 60

    let secondStr = LangMgr.getLab("Tips_common_second")
    //分秒
    if (min > 0) {
        return `${min}${minuteStr}${sec}${secondStr}`
    }

    return `${sec}${secondStr}`
}

export function setTextTime_2(iLeftSecond: number) {
    let iHour = Math.floor(iLeftSecond / (60 * 60));
    let iMin = Math.floor(iLeftSecond % (60 * 60) / 60);
    let iSecond = Math.floor(iLeftSecond % 60);
    return String(iHour >= 10 ? iHour : "0" + iHour) + ":" + String(iMin >= 10 ? iMin : "0" + iMin)
        + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond)
}
export function setTextTime(iLeftSecond: number): string {
    if (iLeftSecond < 86400) {
        // 小于1天
        return setTextTime_2(iLeftSecond);
    } else {
        return getTimeTXT(iLeftSecond);
    }
}
export function setTextTime_3(iLeftSecond: number) {
    let iMin = Math.floor(iLeftSecond % (60 * 60) / 60);
    let iSecond = Math.floor(iLeftSecond % 60);
    return String(iMin >= 10 ? iMin : "0" + iMin) + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond)
}
export function setTextTime_4(iLeftSecond: number) {
    let day = Math.floor(iLeftSecond / 86400)
    let dayleft = iLeftSecond % 86400
    let iHour = Math.floor(dayleft / (60 * 60));
    let iMin = Math.floor(dayleft % (60 * 60) / 60);
    let iSecond = Math.floor(dayleft % 60);
    return String(day >= 10 ? day : "0" + day) + ":" + String(iHour >= 10 ? iHour : "0" + iHour) + ":" + String(iMin >= 10 ? iMin : "0" + iMin)
        + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond)
}
/* spine置灰 */
export function setGraySpine(sp: sp.Skeleton, isGray: boolean) {
    let nowMaterial = sp.customMaterial;
    if (isGray) {
        if (nowMaterial && nowMaterial["effectAsset"] && nowMaterial["effectAsset"].name == "SpineGray") {
            return
        }
        let mat: Material = builtinResMgr.get(`ui-sprite-gray-material`);
        sp.customMaterial = mat
    } else {
        if (nowMaterial && nowMaterial["effectAsset"] && nowMaterial["effectAsset"].name == "builtin-spine") {
            return
        }
        let mat: Material = builtinResMgr.get(`default-spine-material`);
        sp.customMaterial = mat;
    }
}
// 数组中的元素按照职业排序[2, 1, 4, 3, 5]
export function sortByVocation(arr: number[]) {
    return arr.sort((a, b) => {
        const heroTabA = tab.getData().HeroTableById.getValue(a);
        const heroTabB = tab.getData().HeroTableById.getValue(b);
        return heroTabA.Class - heroTabB.Class;
    })
}
/* 判断各种抽卡材料不足的情况处理 */
export function gachaReplace(gachaId: number, key: RecruitType, cb: Function): boolean {
    const gachaTab = tab.getData().GachaTableById.getValue(gachaId);
    const itemId = gachaTab.ItemId;
    const count = gachaTab.ItemCount;
    const itemTab = tab.getData().ItemTableById.getValue(itemId);
    const itemCount = ItemData.ins.getCount(itemId);
    /* 如果道具不足的情况下判断是否有替代消耗 */
    const addCount = count - itemCount;
    // 转化为代替物
    const addItemId = gachaTab.SubItemId;
    if (!addItemId) {
        ShowItemNotEnoughTips(itemId);
        return false
    }
    const addItemTab = tab.getData().ItemTableById.getValue(addItemId);
    const addItemNeedCount = addCount * gachaTab.SubItemBaseCount;
    /* 如果拥有的代替物数量够显示弹窗 */
    const havaAddItemCount = ItemData.ins.getCount(addItemId);
    // 是否需要弹窗
    if (!checkSameDay(key)) {
        const tipsStr = LangMgr.getCombineString("Tips_recruit_resource_1", [LangMgr.getLab(itemTab.Name), addItemNeedCount, LangMgr.getLab(addItemTab.Name)]);
        CommonTipsPop.create(tipsStr, ((val) => {
            if (val) {
                if (havaAddItemCount < addItemNeedCount) {
                    ShowItemNotEnoughTips(addItemId);
                    return false
                } else {
                    cb();
                }
            }
        }), {
            gacha: key
        })
    } else {
        if (havaAddItemCount >= addItemNeedCount) {
            return true
        } else {
            // ShowItemNotEnoughTips(itemId);
            // 跳转到钻石界面
            if (addItemId === 1) {
                UIMgr.ins.show({ viewName: ViewName.DiamondBuyPop })
            } else {
                ShowItemNotEnoughTips(itemId);
            }
            return false
        }
    }
}
// 判断购买的弹窗
export function dailyBuyShop(itemId: number, CostCount: number, getItemId: number, key: string, cb: Function, recuitType?: RecruitType) {
    const itemTab = tab.getData().ItemTableById.getValue(itemId);
    const itemTabName = LangMgr.getLab(itemTab.Name);

    const itemGetTab = tab.getData().ItemTableById.getValue(getItemId);
    //let itemGetTabName = "物品"
    let itemGetTabName = ""
    if (itemGetTab) {
        itemGetTabName = LangMgr.getLab(itemGetTab.Name);
    }

    const itemCount = ItemData.ins.getCount(itemId);
    const type = recuitType ? recuitType : RecruitType.BuyDailyShop
    if (!checkSameDay(type)) {
        const tipsStr = LangMgr.getCombineString(key, [itemTabName, CostCount, itemGetTabName]);
        CommonTipsPop.create(tipsStr, ((val) => {
            if (val) {
                if (itemCount < CostCount) {
                    ShowItemNotEnoughTips(itemId);
                } else {
                    cb();
                }
            }
        }), {
            gacha: type
        })
    } else {
        if (itemCount < CostCount) {
            ShowItemNotEnoughTips(itemId);
        } else {
            cb();
        }
    }
}
/* 判断是否花费材料的购买处理 */
export function ConsumptionToPurchase(itemId: number, CostCount: number, key: string, cb: Function) {
    // const itemTab = tab.getData().ItemTableById.getValue(itemId);
    const itemCount = ItemData.ins.getCount(itemId);
    const tipsStr = LangMgr.getCombineString(key, [CostCount]);
    CommonTipsPop.create(tipsStr, ((val) => {
        if (val) {
            if (itemCount < CostCount) {
                ShowItemNotEnoughTips(itemId);
            } else {
                cb();
            }
        }
    }))
}
/* 检查用户选择时间是否是同一天 */
export function checkSameDay(key: RecruitType): boolean {
    var currentDate = new Date();
    var today = currentDate.toDateString();
    var dismissTime = Func.getItem("dismissTime" + key);
    if (!dismissTime || dismissTime !== today) {
        return false
    }
    return true;
}
export function getPlayInfoById(id: string) {
    let msg = new proto.Msg_GetSimpleRoleReq();
    msg.roleId = id;
    Net.Send(proto.Ptl.GetSimpleRoleReq, msg)
}
// 处理战斗力
export function handleNumerText(_score: number | Long): string {
    const score = Number(_score);
    if (score >= 100000000) {
        let value = String(score / 100000000);
        // log("valeu==",value);
        let index = value.indexOf(".");
        if (index == -1) {
            return value + "亿";
        } else {
            index += 3;
        }
        // log("score==",score,"===valeu==",value,"==",index);
        return value.slice(0, index) + "亿"
    } else if (score > 10000) {
        let value = String(score / 10000);
        let index = value.indexOf(".");
        if (index == -1) {
            return value + "萬";
        } else {
            index += 3;
        }
        // log("score==",score,"===valeu==",value,"==",index);
        return value.slice(0, index) + "萬"
    }
    else {
        return String(score)
    }
}
// 计算距离下周一的倒计时
export function getTimeUntilNextWeek() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilNextMonday = (dayOfWeek === 0) ? 1 : 8 - dayOfWeek;
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilNextMonday);
    const millisecondsUntilNextMonday = nextMonday.getTime() - now.getTime();
    return Math.floor(millisecondsUntilNextMonday / 1000);
}
// 计算距离下个月的倒计时
export function getTimeUntilNextMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextMonth = (month === 11) ? 0 : month + 1;
    const nextMonthYear = (month === 11) ? year + 1 : year;
    const firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);
    const millisecondsUntilNextMonth = firstDayOfNextMonth.getTime() - now.getTime();
    return Math.floor(millisecondsUntilNextMonth / 1000)
}
// 计算距离明天的倒计时
export function getTimeUntilNextDay() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const millisecondsUntilTomorrow = tomorrow.getTime() - now.getTime();
    return Math.floor(millisecondsUntilTomorrow / 1000);
}
/* 创建hero spine */
export async function createAnimation(animNode: Node, animId: number, addAnimId?: number, cb?: Function) {
    const animaData: tab.AnimationTable = tab.getData().AnimationTableById.getValue(animId);
    const path = animaData.Path;
    if (animaData.Scale.length > 0) {
        animNode.scale = new Vec3(animaData.Scale[0], animaData.Scale[1], 1)
    }
    if (path) {
        switch (animaData.Type) {
            // 如果当前是spine
            case tab.AnimationType.AnimationType_SkeletonData:
                let spine = animNode.getComponent(sp.Skeleton);
                if (!spine) {
                    spine = animNode.addComponent(sp.Skeleton);
                }
                await LoadResAsync(path, sp.SkeletonData).then((spData: sp.SkeletonData) => {
                    if (spine.isValid) {
                        spine.skeletonData = spData
                        spine.premultipliedAlpha = false
                        spine.enableBatch = true
                        spine.setAnimation(0, animaData.AnimationName, animaData.Loop);
                        if (addAnimId) {
                            const addAnimaData = tab.getData().AnimationTableById.getValue(addAnimId);
                            spine.addAnimation(0, addAnimaData.AnimationName, addAnimaData.Loop);
                        }
                        addAnimId === 0 ? spine.timeScale = 0 : spine.timeScale = 1
                    }
                })
                break;
            case tab.AnimationType.AnimationType_Plist:
                // 如果是plist
                let spr = animNode.getComponent(Sprite);
                if (!spr) {
                    spr = animNode.addComponent(Sprite);
                }
                let animCom = animNode.getComponent(Animation);
                if (!animCom) {
                    animCom = animNode.addComponent(Animation);
                }
                await LoadResAsync(path, SpriteAtlas).then((atlas: SpriteAtlas) => {
                    if (spr.isValid && animCom.isValid) {
                        spr.sizeMode = Sprite.SizeMode.RAW;
                        spr.type = Sprite.Type.SIMPLE;
                        spr.trim = false;
                        const anim_clip = AnimationClip.createWithSpriteFrames(Avatar.setPlistArray(atlas, animaData), animaData.FPS);
                        anim_clip.name = animaData.AnimationName ? animaData.AnimationName : "defaultAnim";
                        anim_clip.wrapMode = animaData.Loop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
                        animCom.defaultClip = anim_clip;
                        animCom.play(anim_clip.name);
                        if (!animaData.Loop) {
                            animCom.on(Animation.EventType.FINISHED, e => {
                                cb();
                            })
                        }
                    }
                })
                break;
            case tab.AnimationType.AnimationType_SpriteFrame:
                let _spr = animNode.getComponent(Sprite);
                if (!_spr) {
                    _spr = animNode.addComponent(Sprite);
                }
                if (animNode.getComponent(Animation)) {
                    animNode.getComponent(Animation).destroy();
                }
                _spr.spriteFrame = null;
                await LoadResAsync(path, SpriteFrame).then((sf: SpriteFrame) => {
                    if (_spr.isValid) {
                        _spr.sizeMode = Sprite.SizeMode.RAW;
                        _spr.type = Sprite.Type.SIMPLE;
                        _spr.trim = false;
                        _spr.spriteFrame = sf;
                    }
                })
                break
            default:
                break;
        }
    } else {
        log(`cocos animation 路径不存在`)
    }
}

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

/** 根据开始时间的秒数获取已经过了几天(只要过零点就加1天)*/
export function getPassDaysByZero(startSeconds: number): number {
    let days: number = 0;
    let nowSeconds: number = RoleData.ins.getServerUtcTime();
    if (nowSeconds > startSeconds) {
        let m_dateHelp: Date = new Date();
        m_dateHelp.setTime(startSeconds * 1000);
        m_dateHelp.setHours(0);
        m_dateHelp.setMinutes(0);
        m_dateHelp.setSeconds(0);
        let t_startZeroSeconds: number = m_dateHelp.getTime();
        t_startZeroSeconds = (t_startZeroSeconds) / 1000;
        days = ((nowSeconds - t_startZeroSeconds) / 86400);
    }
    return Math.floor(days);
}
export function isChEngNumber(str: string) {
    if (/^[a-zA-Z0-9\u4E00-\u9FA5]+$/.test(str)) {
        return true;
    } else {
        return false;
    }
}
export function sendChatToGuild(type: tab.ChatBreviaryType) {
    const channelId = ChatData.ins.getChanneIdByType(proto.ChatChannelType.Guild);
    let str = ""
    if (type === tab.ChatBreviaryType.ChatBreviaryType_GuildGiftLow) {
        str = LangMgr.getLab("chatbreviary_text_2");
    } else if (type === tab.ChatBreviaryType.ChatBreviaryType_GuildGiftBargain) {
        str = LangMgr.getCombineString("chatbreviary_text_1", [RoleData.ins.name]);
    }
    const clientCustomNotice = new proto.ChatMessage.ClientCustomNotice()
    clientCustomNotice.noticeType = type
    clientCustomNotice.content = str;
    ChatControl.ins.requestSendChatMessage(channelId, str, clientCustomNotice);
}
export function refreshFlagImg(flagId: number, sp: Sprite) {
    flagId = flagId ? flagId : 1;
    const flagtab = tab.getData().GuildFlagTableById.getValue(flagId);
    sp.setTexture(flagtab.IconUrl);
}
export function formatTimestamp(timestamp: number) {
    // 创建日期对象，时间戳需要是毫秒
    let date = new Date(timestamp * 1000);

    // 获取日期中的月、日、小时和分钟
    let month = date.getMonth() + 1;  // 月份从0开始，所以要加1
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // 补0处理，如果是个位数
    let s_month = month < 10 ? '0' + month : month;
    let s_day = day < 10 ? '0' + day : day;
    let s_hours = hours < 10 ? '0' + hours : hours;
    let s_minutes = minutes < 10 ? '0' + minutes : minutes;

    // 返回格式化后的字符串
    return `${s_month}-${s_day} ${s_hours}:${s_minutes}`;
}
export function ButtonLock(lockTime: number = 0.3, callBackFun?: Function): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let oldFun: Function = descriptor.value;
        let isLock: boolean = false;
        descriptor.value = function (...args: any[]) {
            if (isLock) {
                callBackFun?.()
                return
            }
            isLock = true;

            setTimeout(() => {
                isLock = false
            }, lockTime * 1000);
            oldFun.apply(this, args);
        }
        return descriptor
    }
}
/**
 * 修正触摸坐标
 * 主要处理屏幕坐标系与设计尺寸不一致导致转换的位置信息错误
 * @param pos 
 */
export function AmendmentEventLocation(pos: Vec3) {
    let newpos = new Vec3(pos)
    newpos.y -= (view.getVisibleSize().height - view.getDesignResolutionSize().height) / 2
    return newpos
}
/* 根据手机分辨率处理节点 */
export function getLocationInResolution(pos) {
    let dSize = view.getDesignResolutionSize();
    let desVec = new Vec2(dSize.width, dSize.height);
    let winVec = new Vec2(view.getVisibleSize().width, view.getVisibleSize().height);
    return pos.subtract(winVec.subtract(desVec));
}
export function moveZeroes(nums) {
    let index = 0;  // 指针，用来遍历非零元素

    // 遍历整个数组
    for (let i = 0; i < nums.length; i++) {
        // 如果当前元素不是0
        if (nums[i] !== 0) {
            // 将非零元素放到当前指针的位置
            nums[index] = nums[i];
            index++;
        }
    }

    // 从指针位置开始，填充0
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}
// 深拷贝
export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // 如果是基本类型，直接返回
    }

    // 处理数组
    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    // 处理对象
    let objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}