import { _decorator, Component, log, Node } from 'cc';
import { LangMgr } from '../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * TimerUtil
 * zhudingchao
 * Mon Jun 03 2024 14:56:15 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/utils/TimerUtil.ts
 *
 */

@ccclass('TimerUtil')
export class TimeUtil {
    /**
     * 
     * @param millisecond 秒 
     * @returns yyyy-MM-dd HH-mm-ss
     */
    static timestampToTime(second: number) {
        var date = new Date(second * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    }

    /**
     * 根据当前时间算出距目标时间剩余多少天
     * @param second 
     * @returns 
     */
    static getLeftDay(second: number): number {
        let d = new Date();

        let leftTime = second - d.getTime() / 1000;
        let t_days: number = Math.floor(leftTime / (3600 * 24));
        return t_days;
    }

    static formaterLeftWithOutSecond(second: number) {
        let d = new Date();

        let leftTime = second - d.getTime();
        return this.formaterWithOutSecond(leftTime);
    }

    /**格式化 几天几小时几分钟 */
    static formaterWithOutSecond(second: number): string {
        var ret: string = "";

        var t_days: number = second / (3600 * 24);
        var t_hours: number = second / 3600 % 24;				//这里不一样, 为不影响其他功能，这里加个方法
        var t_minutes: number = second / 60 % 60;
        var t_seconds: number = second % 60;

        if (t_days > 0) {
            ret += (t_days + LangMgr.getLab("Tips_common_day"));
            //ret += (t_days + "天");
            // ret += G.StringManager.formatStr(G.StringManager.getWorldString("timeUtils_days"), [t_days]);
        }

        if (t_days > 0 || t_hours > 0) {
            ret += (t_hours + LangMgr.getLab("Tips_common_hour"));
            //ret += (t_hours + "小时");
            // ret += G.StringManager.formatStr(G.StringManager.getWorldString("timeUtils_hours"), [t_hours]);
        }

        if (t_days > 0 || t_hours > 0 || t_minutes > 0) {
            ret += (t_minutes + LangMgr.getLab("Tips_common_minute"))
            //ret += (t_minutes + "分");
            // ret += G.StringManager.formatStr(G.StringManager.getWorldString("timeUtils_minutes"), [t_minutes]);
        }

        //			ret += (t_seconds + "秒");

        return ret;
    }
    /**格式化 几天几小时几分钟 */
    static formaterWithOutSecond2(second: number): string {
        var ret: string = "";

        var t_days: number = Math.floor(second / (3600 * 24));
        var t_hours: number = Math.floor(second / 3600 )% 24;				//这里不一样, 为不影响其他功能，这里加个方法
        var t_minutes: number = Math.floor(second / 60 )% 60;
        var t_seconds: number = second % 60;
        if (t_days > 0) {
            ret += (t_days + LangMgr.getLab("Tips_friend_day"));
            //ret += (t_days + "天前");
            return ret;
            // ret += G.StringManager.formatStr(G.StringManager.getWorldString("timeUtils_days"), [t_days]);
        }

        if ( t_hours > 0) {
            ret += (t_hours + LangMgr.getLab("Tips_friend_hour"));
            //ret += (t_hours + "小时前");
            return ret;
            // ret += G.StringManager.formatStr(G.StringManager.getWorldString("timeUtils_hours"), [t_hours]);
        }

        if ( t_minutes > 0) {
            ret += (t_minutes + LangMgr.getLab("Tips_friend_minute"))
            //ret += (t_minutes + "分钟前");
            return ret;
            // ret += G.StringManager.formatStr(G.StringManager.getWorldString("timeUtils_minutes"), [t_minutes]);
        }
        //ret = (t_seconds + "秒前");
        ret += (t_seconds + LangMgr.getLab("Tips_friend_second"))

        return ret;
    }
       /**格式化 几天几小时几分钟 */
       static formaterWithOutSecond3(second: number): any {
        var ret: any ={};

        var t_days: number = Math.floor(second / (3600 * 24));
        var t_hours: number = Math.floor(second / 3600 % 24);				//这里不一样, 为不影响其他功能，这里加个方法
        var t_minutes: number =Math.floor( second / 60 % 60);
        var t_seconds: number = second % 60;
        ret["day"]=t_days;
        ret["hours"]=t_hours;
        ret["minutes"]=t_minutes;
        ret["seconds"]=t_seconds;
        return ret;

    
    }
}