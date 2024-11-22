import { tab } from "../../Table/table_gen"
import Role from "../Common/Role"
import Func from "../Utils/Func"
import { getServerUtcTime } from "../Utils/GameUtils"

/**
 * 赛季常用函数
 */
export default class SeasonFunc {

    /**获取当前赛季配置 */
    static getNowTab(seasonId?:number){
        let conf = tab.Data.RankFightTableById.getValue(seasonId || Role.Instance.seasonID)
        return conf
    }

    /**
     * 赛季经过时间（秒）
     */
    static getGoByTime(){
        let conf = this.getNowTab()
        return getServerUtcTime() - conf.StartTime
    }


    /**
     * 赛季剩余时间（秒）
     */
    static getSurplusTime(){
        let conf = this.getNowTab()
        return conf.EndTime - getServerUtcTime()
    }

    /**
     * 赛季是否已结束
     */
    static isOver(){
        let surpluisTime = this.getSurplusTime()
        return surpluisTime > 0
    }


    static ttime:any
    static testTimeout(){
        // if (SeasonFunc.ttime){
        //     clearInterval(SeasonFunc.ttime)
        //     SeasonFunc.ttime = null
        // }
        // SeasonFunc.ttime = setInterval(() => {
        //     if (Role.Instance.isSeason()){
        //         let conf = this.getNowTab()
        //         console.log("赛季id:"+Role.Instance.seasonID, this.getSurplusTime(),"当前时间:"+Func.dateFtt("yyyy-MM-dd hh:mm:ss",getServerUtcTime()),"赛季结束时间:"+Func.dateFtt("yyyy-MM-dd hh:mm:ss",conf.EndTime))
        //     }
        // }, 1000);
    }
}