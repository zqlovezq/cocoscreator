import { proto } from "../../Protocol/client_protocol"
import { tab } from "../../Table/table_gen"
import Role from "../Common/Role"
import SeasonFunc from "../Season/SeasonFunc"
import Func from "../Utils/Func"
import { setTimeTXT } from "../Utils/GameUtils"

/**
 * 通行证通用函数
 */
export default class PassportFunc {

    public static bossBoxCfgData: tab.BossBoxTable[] = [] //当前赛季的首领宝箱配置

    //整理首领宝箱的配置信息，获得当前赛季的首领宝箱数据
    public static sortOutData(isClear?: boolean) {
        if (isClear) {
            PassportFunc.bossBoxCfgData = []
        }
        if (PassportFunc.bossBoxCfgData.length > 0) {
            return
        }

        let curseason = Role.Instance.seasonID  //当前的赛季id
        let bossboxdata = tab.Data.BossBoxTable
        if (bossboxdata == null) { return } // 未配Boss宝箱奖励则直接退出
        for (let i = 0; i < bossboxdata.length; i++) {
            if (bossboxdata[i].BelongSeasonID == curseason) {
                PassportFunc.bossBoxCfgData.push(bossboxdata[i])
            }
        }
    }

    /**
     * 获取最大等级
     * @returns 
     */
    static getMaxLv(){
        if (PassportFunc.bossBoxCfgData.length){
            return PassportFunc.bossBoxCfgData[PassportFunc.bossBoxCfgData.length-1].BossBoxLv
        }
        return 0
    }

    public static getCurGoldbagNumber() {
        let bossBox = Role.Instance.bossBoxData;
        let maxcfg: tab.BossBoxTable = PassportFunc.bossBoxCfgData[PassportFunc.bossBoxCfgData.length - 1]
        let everylvsoulCnt = tab.Data.GetKeyValue_ConfigTable().BossBoxEveryLvNeedSoul || 1
        let everyGold = tab.Data.GetKeyValue_ConfigTable().BossBoxEveryLvGoldNum

        if (maxcfg && Role.Instance.isDemonPass != false && Role.Instance.bossBoxData.level >= maxcfg.BossBoxLv) {
            let curgold = Math.floor(bossBox.exp / everylvsoulCnt) * everyGold
            return Math.min(curgold, tab.Data.GetKeyValue_ConfigTable().BossBoxMaxGoldLimit)
        }

        return 0
    }


    /**
     * 是否开启钻石购买
     */
    static isDiamondUnlockTime() {
        let time = SeasonFunc.getSurplusTime()
        // setTimeTXT
        return (tab.Data.GetKeyValue_ConfigTable().BossBoxDiamondUnlockTime >= time)
    }

    /**
     * 获取通行证购买所有奖励
     * @returns 
     */
    static getUnlockAllReward(): proto.RewardSimpleInfo[] {
        let list = []

        for (let index = 0; index < PassportFunc.bossBoxCfgData.length; index++) {
            const v = PassportFunc.bossBoxCfgData[index];

            let data: proto.RewardSimpleInfo = Func.forBy(list, "rewardId", v.PassItemId)
            if (data == null) {
                data = new proto.RewardSimpleInfo()
                data.rewardId = v.PassItemId
                data.rewardType = v.PassItemType
                list.push(data)
            }
            data.rewardCount = data.rewardCount + v.PassItemCnt
        }

        list.sort((a, b) => {
            let aIndex = PassportFunc.getTabSortId(a)
            let bIndex = PassportFunc.getTabSortId(b)
            return bIndex - aIndex
        })

        return list
    }

    static getTabSortId(data: proto.RewardSimpleInfo): number {
        let conf
        if (data.rewardType == tab.RewardType.RewardType_BattleMap) {
            conf = tab.Data.BattleMapTableByID.getValue(data.rewardId)
        } else if (data.rewardType == tab.RewardType.RewardType_Emotion) {
            conf = tab.Data.EmojiTableByID.getValue(data.rewardId)
        } else if (data.rewardType == tab.RewardType.RewardType_BoxType) {
            conf = tab.Data.BoxTableByBoxID.getValue(data.rewardId)
        } else {
            conf = tab.Data.ItemTableByID.getValue(data.rewardId)
        }

        return conf && conf.SortId
    }

    static passportSelectBoxStorageKey() {
        return Role.Instance.seasonID + "_Passport_select_box_cardId"
    }

    static passportFirstOpenBuyKey() {
        return Role.Instance.seasonID + "_Passport_first_open_buy"
    }

    static getFirstCanGetRewardLv() {
        let lv = -1
        if (Role.Instance.isSeason()) {
            for (let index = 0; index < PassportFunc.bossBoxCfgData.length; index++) {
                const v = PassportFunc.bossBoxCfgData[index];
                if (Role.Instance.bossBoxData.level >= v.BossBoxLv) {
                    if (!Role.Instance.bossBoxData.gotBossBoxRewardLevels.includes(v.BossBoxLv)
                        || (Role.Instance.isDemonPass && !Role.Instance.bossBoxData.gotBossBoxVipRewardLevels.includes(v.BossBoxLv))) {
                        lv = v.BossBoxLv
                        break
                    }
                }
            }
        }
        return lv
    }

    /**
     * 检测红点
     * @returns 
     */
    static checkRed() {
        //计算红点（有可领取的奖励，代表有红点）
        let isRed = this.getFirstCanGetRewardLv() > -1
        return isRed
    }
}