/*
 * @Descripttion: 管理公告类文件
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkStringIsValid } from "../Alliance/AllianceCommonInterface";
import { isInteger, isValidObj, kNegativeOneNumber, kNoneString, kOneNumber } from "../Common/CommonInterface";
import { HttpClient } from "../Common/HttpClient";
import LoginData from "../Login/LoginData";
import { getServerUtcTime } from "../Utils/GameUtils";
import NoticeData, { NoticeVer } from "./NoticeData";

export enum ToggleType {
    ToggleType_Left = 0,
    ToggleType_Middle = 1,
    ToggleType_Right = 2,
    ToggleType_Max = 3, //最大值
}

export enum NoticeRedType {
    NoneRecord = -1, //无记录
    CanVisible = 1, //可见
    NotVisible = 2, //不可见
}

/**
 * 公告管理类
 */
export default class ManagerNotice {
    private _local_notice_data: NoticeData = null;
    private _notice_red_type: NoticeRedType;
    private _bAutoPopNotice: boolean = true;
    private _local_version: string;
    private _bFirstLogin: boolean = true;

    private static _instance: ManagerNotice = null;
    public static getInstance(): ManagerNotice {
        if (!ManagerNotice._instance) {
            ManagerNotice._instance = new ManagerNotice();
        }
        return ManagerNotice._instance;
    }

    public init() {
        this._loadNoticeData2Local();
        this._loadLocalNoticeVer();
        this._loadRedDot2Local();
        this._loadAutoPop2Local();
    }

    /* 退出游戏时，清场工作
     */
    public destroy() {
        this._saveNotice2Local();
        //this.saveRedDot2Local(this._notice_red_type,   true);
        //this.saveAutoPopFlag(this._bAutoPopNotice,     true);
        this._saveNoticeVer2Local(this._local_version, true);
    }

    /* 根据类型获取红点的可见性
     */
    public getRedDotVisible() {
        return (NoticeRedType.NotVisible !== this._notice_red_type);
    }

    /* 保存公告红点可见性
    */
    public saveRedDot2Local(noticeRedType: NoticeRedType, bSave: boolean = false) {
        this._notice_red_type = noticeRedType;
        //if(!bSave){return;}
        let key = `${LoginData.Instance.uid}_notice_red_${this._local_version}`;
        cc.sys.localStorage.setItem(key, String(noticeRedType));
    }

    /* 获取公告版本号
     */
    public getNoticeData() { return this._local_notice_data; }

    /* 获取公告版本号
     */
    public getNoticeVer2URL() {
        let self = this;
        let url = ""
        let svrTbl = LoginData.Instance.loginServerTab;
        if (svrTbl) {
            url = svrTbl.NoticeVerAddr;
        }
        /*  */
        HttpClient.getInstance().Get(url, "", "", (err: any, ret: string) => {
            if (err) {
                cc.error("公告版本号获取发生错误: " + err);
                return;
            }

            let serVer = self._parseNoticeVer(ret);

            //检测本地有没有版本号保存，没有就要重新获取
            if (!isValidObj(self._local_version)) {
                //重新获取公告数据
                self._resetNoticeData(serVer);
                self._bAutoPopNotice = true;
                return;
            }

            let bUpdate = self._checkVersionUpdate(self._local_version, serVer);
            //检测本地版本号是否小于服务器上的版本号，小于就要重新获取公告数据，否则用本地公告数据
            //或者本地没有公告数据也要重新获取服务器上的公告数据
            if (bUpdate || !self._local_notice_data) {
                //删除本地旧版本号数据
                self._removeNoticeVer();
                //删除本地旧版本红点数据
                self._removeOldVersionRedDot();
                //重新获取公告数据
                self._resetNoticeData(serVer);
                //新版本号，需要再次自动弹公告
                self._bAutoPopNotice = true;
                return;
            }
            self._notifyOk();
        });
    }

    /* 从远程URL下载图片资源
    */
    public downloadImg(url: string, sprNotice: cc.Sprite, success?: Function, fail?: Function):boolean {
        let self = this;

        if (!checkStringIsValid(url)){
            return false
        }

        if (url.indexOf("http") == -1) {
            return false
        }
        cc.log("下载图片的url: " + url)
        cc.assetManager.loadRemote(url, { ext: '.png' }, (err: Error, texture: cc.Texture2D) => {
            if (err) {
                cc.log("下载图片失败: " + err);
                cc.log("下载图片的url: " + url)
                if (fail) {
                    fail();
                }
                return;
            }
            //let originalPath = cc.assetManager.cacheManager.getCache(texture.nativeUrl);
            //self._texture_cache.push(originalPath);
            if (sprNotice && sprNotice.isValid){
                sprNotice.spriteFrame = new cc.SpriteFrame(texture);
            }
            if (success) success();
        });
        return true
    }

    /* 根据URL获取公告json数据 */
    private _getNoticeData2URL() {
        let self = this;
        let url = ""
        let svrTbl = LoginData.Instance.loginServerTab
        if (svrTbl) {
            url = svrTbl.NoticeAddr;
        }
        HttpClient.getInstance().Get(url, "", "", (err: any, ret: string) => {
            if (err) {
                cc.log("获取公告数据错误: " + err);
                return;
            }
            //解析结果
            self._parseNoticeData(ret);
            isValidObj(this._local_notice_data) && self._notifyOk();
        });
    }

    /* 重新获取公告数据 */
    private _resetNoticeData(ver: string) {
        //保存版本号在本地
        this._saveNoticeVer2Local(ver);
        //获取公告数据
        this._getNoticeData2URL();
    }

    /* 解析公告数据json字符串 */
    private _parseNoticeData(jsonStr: string) {
        try {
            this._local_notice_data = JSON.parse(jsonStr);
        } catch (error) {
            if (!cc.sys.isNative) { throw new Error("公告JSON数据有错误: " + jsonStr); }
        }
    }

    /* 解析公告版本号json字符串 */
    private _parseNoticeVer(jsonStr: string) {
        let data: NoticeVer = null;
        try {
            data = JSON.parse(jsonStr);
        } catch (error) {
            if (!cc.sys.isNative) { throw new Error("公告版本号JSON数据有误: " + jsonStr); }
        }
        return data.Version;
    }

    /* 保存公告json数据在本地 */
    private _saveNotice2Local() {
        let key = `${LoginData.Instance.uid}_notice_data`;
        let data = JSON.stringify(this._local_notice_data);
        cc.sys.localStorage.setItem(key, data);
    }

    /* 获取本地公告json数据 */
    private _loadNoticeData2Local() {
        let key = `${LoginData.Instance.uid}_notice_data`;
        let localData = cc.sys.localStorage.getItem(key, kNoneString);
        isValidObj(localData) && this._parseNoticeData(localData);
    }

    /* 保存公告版本号 */
    private _saveNoticeVer2Local(ver: string, bSave: boolean = false) {
        this._local_version = ver;

        if (!bSave) { return; }

        let key = `${LoginData.Instance.uid}_notice_ver`;
        cc.sys.localStorage.setItem(key, ver);
    }

    /* 获取本地公告版本号 */
    private _loadLocalNoticeVer() {
        let key = `${LoginData.Instance.uid}_notice_ver`;
        let localData = cc.sys.localStorage.getItem(key, kNoneString);
        localData === "null" && (localData = kNoneString);
        this._local_version = localData;
    }

    /* 删除本地版本号数据 */
    private _removeNoticeVer() {
        let key = `${LoginData.Instance.uid}_notice_ver`;
        cc.sys.localStorage.removeItem(key);
    }

    /* 检测版本号有无变更 */
    private _checkVersionUpdate(oldVer: string, newVer: string) {
        return parseInt(oldVer) < parseInt(newVer);
    }

    /* 通知公告数据准备好了 */
    private _notifyOk() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyBeReadyNotice);
    }

    /* 加载本地公告红点数据 */
    private _loadRedDot2Local() {
        let key = `${LoginData.Instance.uid}_notice_red_${this._local_version}`;
        let localData = cc.sys.localStorage.getItem(key, kNegativeOneNumber);
        let redType = parseInt(localData);
        this._notice_red_type = !isInteger(redType) ? NoticeRedType.NoneRecord : redType;
    }

    /* 删除就版本红点本地记录 */
    private _removeOldVersionRedDot() {
        let key = `${LoginData.Instance.uid}_notice_red_${this._local_version}`;
        cc.sys.localStorage.removeItem(key);
        this._notice_red_type = NoticeRedType.NoneRecord;
    }

    /* 获取当日日期 */
    private _getTodayDate() {
        let curUTC = getServerUtcTime();
        let date = new Date(curUTC * 1000);
        let timeKey = `${date.getFullYear()}-${date.getMonth() + kOneNumber}-${date.getDate()}`;
        return timeKey;
    }

    /* 保存自动弹框标志 */
    public saveAutoPopFlag(bAutoPop: boolean, bSave: boolean = false) {
        this._bAutoPopNotice = bAutoPop;
        //if(!bSave){return;}
        let timeKey = this._getTodayDate();
        console.log("$$$$$$$$ saveAutoPopFlag timeKey: " + timeKey + " -----> " + bAutoPop);
        let key = `${LoginData.Instance.uid}_notice_pop_${timeKey}`;
        cc.sys.localStorage.setItem(key, bAutoPop.toString());
    }

    /* 获取是否自动弹窗标志 */
    private _loadAutoPop2Local() {
        let timeKey = this._getTodayDate();
        let key = `${LoginData.Instance.uid}_notice_pop_${timeKey}`;
        let localData = cc.sys.localStorage.getItem(key, true);
        //console.log("$$$$$$$$ _loadAutoPop2Local timeKey: " + timeKey + " -----> " + localData);
        if (!isValidObj(localData)) {
            this._bAutoPopNotice = true;
            return;
        }
        this._bAutoPopNotice = (localData === "true") ? true : false;
    }

    /* 获取是否自动弹出公告标志 */
    public getAutoPopFlag() {
        return this._bAutoPopNotice;
    }

    /*  */
    public setNotFirstLogin() {
        this._bFirstLogin = false;
    }

    /*  */
    public getFirstLogin() {
        return this._bFirstLogin;
    }
}
