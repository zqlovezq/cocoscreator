import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { checkStringIsValid } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { checkInt, getServerUtcTime } from "./GameUtils";


export default class Func {

    /**
     * 是否为卡牌
     * @param staticId 配置id
     * @returns 
     */
    static isCard(staticId: number) {
        let cardTab: tab.CardTable = tab.Data.CardTableByID.getValue(staticId);
        return cardTab
    }

    /**
     * 检测卡牌是否可升级
     * @param staticId 配置id
     * @param isCheckGold 是否检测金币
     * @returns 
     */
    static checkCardCanUp(staticId: number, isCheckGold?: boolean) {
        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(staticId);
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(staticId);


        if (!isValidObj(cardInfo)) {
            return false;
        }
        if (!isValidObj(cardTabData)) {
            return false;
        }

        let cardUpLevelTab: tab.CardUpLevelTable = tab.Data.CardUpLevelTableByQuality.getValue(cardTabData.Quality);

        if (!isValidObj(cardUpLevelTab)) {
            return false
        }
        // console.log(cardInfo,cardTabData,cardUpLevelTab)
        let needCount = cardUpLevelTab.Count[cardInfo.level]
        if (needCount) {
            let ownCount = cardInfo.count > kZeroNumber ? (cardInfo.count - kOneNumber) : cardInfo.count; //拥有数量必须减掉自身【先前的设计缺陷】
            if (ownCount >= needCount) {
                return true
            }
        }
        return false
    }


    static isDesignSize() {

        let frameScale = (cc.view.getFrameSize().width / cc.view.getFrameSize().height).toFixed(2)
        let designScale = (cc.view.getDesignResolutionSize().width / cc.view.getDesignResolutionSize().height).toFixed(2)
        console.log("isDesignSize", cc.view.getFrameSize(), cc.view.getDesignResolutionSize(), frameScale, designScale)
        if (checkInt(frameScale) == checkInt(designScale)) {
            return true
        }
        return false
    }

    static playSpine(spineNode: cc.Node, animName: string, loop: boolean, callback?: Function) {
        if (spineNode == null || spineNode && !spineNode.isValid) {
            console.log("spine节点为空")
            return
        }
        let spine = spineNode.getComponent(sp.Skeleton);
        spine.setCompleteListener(null)
        let track = spine.setAnimation(0, animName, loop);
        if (track) {
            spine.setCompleteListener((trackEntry) => {
                let name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === animName && callback) {
                    if (!loop) {
                        spine.setCompleteListener(null)
                    }
                    callback();
                }
            });
        }
    }


    /**
    *
    * @param fmt 格式 "yyyy-MM-dd hh:mm:ss"
    * @param date 时间戳（秒）
    * @returns
    */
    static dateFtt(fmt, date?) { //author: meizz   
        if (typeof (date) == "number") {
            date = new Date(date * 1000)
        } else {
            date = new Date()
        }
        if (!date) {
            return ""
        }
        var o = {
            "M+": date.getMonth() + 1,                 //月份
            "d+": date.getDate(),                    //日
            "h+": date.getHours(),                   //小时
            "m+": date.getMinutes(),                 //分
            "s+": date.getSeconds(),                 //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


    static forBy = function (list: any, key: string, cId: any): any {
        if (list) {
            var v
            for (let index = 0; index < list.length; index++) {
                v = list[index];
                if (v[key] == cId) {
                    return v
                }
            }
        }
        return null
    }

    static getValuesByKey(tables: any, key: string, value: any) {
        var list = []
        tables = tables || []
        if (tables) {
            var v
            for (let index = 0; index < tables.length; index++) {
                v = tables[index];
                if (v[key] == value) {
                    list.push(v)
                }
            }
        }
        return list
    }



    static OptionalCardTableByID(boxId: number) {
        return this.getValuesByKey(tab.Data.OptionalCardTable, "OptionalBoxID", boxId)
    }

    /**
     * 是否为自选宝箱
     */
    static isCheckOptionalBox(type: tab.RewardType, itemId: number) {
        if (type == tab.RewardType.RewardType_OptionalBox) {
            let itemConf = tab.Data.ItemTableByID.getValue(itemId)
            if (itemConf && itemConf.Type == tab.ItemType.ItemType_OptionalBox) {
                return true
            }
        }

        return false
    }

    static setStorage(key: string, value: any = 1) {
        key = Role.Instance.ID + "_" + key
        cc.sys.localStorage.setItem(key, value)
    }
    static getStorage(key: string): any {
        key = Role.Instance.ID + "_" + key
        return cc.sys.localStorage.getItem(key) || ""
    }

    static getDayBeginTime() {
        var date = new Date(getServerUtcTime())
        console.log(date)
    }

    /**
    * 根据时间戳转换为当天的0点时间戳
    * @param time 秒
    * @returns 当天0点的时间戳 （秒）
    */
    static timeToDayStart(addDay: number = 0) {
        var date = new Date(getServerUtcTime() * 1000)
        date.setHours(0, 0, 0, 0)
        let time = Math.floor(date.getTime() / 1000) + (addDay * 24 * 60 * 60)
        // console.log("当前时间:" + Func.dateFtt("yyyy-MM-dd hh:mm:ss", time))
        return time
    }

    /**
   * 根据时间戳转换为当天的0点时间戳
   * @param time 秒
   * @returns 当天0点的时间戳 （秒）
   */
    static timeToDayStart1(t:number,addDay: number = 0) {
        var date = new Date(t * 1000)
        date.setHours(0, 0, 0, 0)
        let time = Math.floor(date.getTime() / 1000) + (addDay * 24 * 60 * 60)
        // console.log("当前时间:" + Func.dateFtt("yyyy-MM-dd hh:mm:ss", time))
        return time
    }

}