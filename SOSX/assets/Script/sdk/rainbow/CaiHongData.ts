import { WechatgameVer } from "../../../Update/wechat_ver";
import Role from "../../Logic/Common/Role";
import { getGuideStepDesc } from "../../Logic/Guide/tasks/task_step_desc";
import LoginData from "../../Logic/Login/LoginData";
import Func from "../../Logic/Utils/Func";
import { checkInt, getServerUtcTime, isWeixinMiniGame } from "../../Logic/Utils/GameUtils";
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { hex_sha1 } from "../tools/sha1";

// /**
// * 道具类型
// */
export enum RATaskState {
    rsp = 1,
    complete = 2,
    getReward = 3
}

/** 彩虹数据 (彩虹数据是我们现在使用的一个数据统计平台) */
export class CaiHongData {
    static _appkeyid: string = "4777A0859ADE853BA4AFECA2848F932C";
    /**来源场景值： 通过微信端赋值*/
    static _sceneId: string = "1091";  //来源场景值
    /** 渠道： 通过微信端赋值*/
    static _channelId: string = "1091";  //渠道
    /** 广告投放类型：通过微信端赋值*/
    static _ad_type: string = "0";  //广告投放类型, 0.不上传 1.头条广告  2. 穿山甲广告  3. adq  4. mp						

    /**登录开始时间，计算在线时长用*/
    static _loginBeginTime: number = 0;
    /** 游戏版本号：1.0.0*/
    static _gameVersion: string = "1.0.0"; /* TODO: zhibo+ for temp value */

    //RA SDK获取
    /**访客id	*/
    static distinct_id: string
    /**设备id		*/
    static device_id: string
    /**设备型号		*/
    static device_model: string
    /**SDK类型		*/
    static lib: string
    /**SDK版本		*/
    static lib_version: string
    /**操作系统		*/
    static os: string
    /**操作系统版本		*/
    static os_version: string

    /** 投放的账户id：通过微信端赋值*/
    static _advertiser_id: string = "0";     //投放的账户id

    /** 报给服务器的渠道：通过微信端赋值*/
    static _ServerchannelId: string = "1091";  //报给服务器的渠道
    /** 报给服务器的抖音clue_token id：通过微信端赋值*/
    static _clue_tokenId: string = "";      //报给服务器的抖音clue_token id
    /** 报给服务器的广点通guangDianTong_ClickId：通过微信端赋值*/
    static _guangDianTong_ClickId: string = ""; //报给服务器的广点通guangDianTong_ClickId

    static _bytedanceRelayMsgUrl: string = "https://clue.oceanengine.com/outer/wechat/applet/token/1758691663069278"; /* TODO: zhibo+ for temp value */

    static init() {
        let RA = window['RA']
        if (RA && RA['commonAttrs']) {
            this.distinct_id = RA['$distinct_id']
            let attrs = RA['commonAttrs']
            if (attrs) {
                this.device_id = attrs['$device_id']
                this.device_model = attrs['$device_model']
                this.lib = attrs['$lib']
                this.lib_version = attrs['$lib_version']
                this.os = attrs['$os']
                this.os_version = attrs['$os_version']
            }
        } else {
            this.distinct_id = "pc"
        }
        if (this.isWeixinMiniGame()) {
            let options = wx.getLaunchOptionsSync(); /* 获取微信小游戏的启动参数 */
            console.log("isWeixinMiniGame-- options", options)
            console.log("wx:options==> ", options);
            if (options && options.query) {
                /* 参数的query字段中可以获取到gdt_vid、weixinadinfo、channel等参数值 */
                let query = options.query;        /*  */
                let channel: string = query.channel;        /* 渠道 */
                let weixinadinfo = query.weixinadinfo;   /* 广告adinfo */
                let clue_token = query.clue_token;     /* 抖音 */
                let gdt_vid = query.gdt_vid;        /* 广告traceId,对应上报的click_id */
                let trackid = query.trackid;        /*  */
                let adid = "0";                  /* 微信广告id */
                CaiHongData._sceneId = "" + options.scene;
                console.log("wx:weixinadinfo==> ", weixinadinfo);
                if (weixinadinfo) {
                    let weixinadinfoArr = weixinadinfo.split('.')
                    let aidtmp: string = weixinadinfoArr[0];
                    if (aidtmp.length > 0) {
                        cc.log("上报广告来源：" + aidtmp);
                        adid = aidtmp;
                    }
                }

                if (channel) { /* 渠道 */
                    if (channel.search("_mp_") != -1) { /* 微信公众号平台 */
                        CaiHongData._channelId = "weixin_" + adid;
                        CaiHongData._ad_type = "4"; /* 4:微信 */
                    }
                    if (channel.search("_adq_") != -1) { /* 广点通 */
                        CaiHongData._channelId = "adq_" + adid;
                        CaiHongData._ad_type = "3"; /* 3:广点通 */
                        if (gdt_vid) {
                            CaiHongData._guangDianTong_ClickId = gdt_vid;
                        }
                    }
                }
                if (clue_token) { /* 抖音 */
                    let adid = options.query.ad_id;
                    let advertiser_id = options.query.advertiser_id;
                    CaiHongData._clue_tokenId = clue_token;
                    CaiHongData._channelId = "douyin_" + adid;
                    CaiHongData._ad_type = "1"; /* 1:抖音 */
                    CaiHongData._advertiser_id = advertiser_id;
                    //跟老丁沟通后，客户端先不直接回传，后续具体根据服务器消息来确定
                    // CaiHongData.byteDanceRelayMsg_Active(); /* zhibo+@20220907 如果是抖音来的，立即上报激活(active)数据 */
                }
            }
        }

        CaiHongData._gameVersion = WechatgameVer
        
        console.log("查看CaiHongData赋值情况：", {
            appkeyid: CaiHongData._appkeyid,
            sceneId: CaiHongData._sceneId,
            channelId: CaiHongData._channelId,
            ad_type: CaiHongData._ad_type,
            advertiser_id: CaiHongData._advertiser_id,

            distinct_id: CaiHongData.distinct_id,
            device_id: CaiHongData.device_id,
            lib: CaiHongData.lib,
            lib_version: CaiHongData.lib_version,
            os: CaiHongData.os,
            os_version: CaiHongData.os_version,
            gameVersion: CaiHongData._gameVersion,
        });

        this.device_start()
    }

    /** 渠道回传字符串 */
    static getRelayStr(){
        var str =undefined
        // CaiHongData._ad_type = "1"
        // CaiHongData._clue_tokenId = "123456"
        if (CaiHongData._ad_type == "1"){//抖音
            str = JSON.stringify({type:proto.ChannelRelayType.ByteDance, param1:CaiHongData._clue_tokenId})
        }else if (CaiHongData._ad_type == "3"){//广点通
            str = JSON.stringify({type:proto.ChannelRelayType.TencentADQ, param1:CaiHongData._guangDianTong_ClickId})
        }else if (CaiHongData._ad_type == "4"){ //微信公众号平台
            str = JSON.stringify({type:proto.ChannelRelayType.WechatMP})
        }
        return str
    }


    /** 启动游戏 */
    static device_start() {
        console.log("彩虹数据: device_start()");
        let dataStr = {
            "$event_name": "device_start",
            "$distinct_id": this.distinct_id,  /* TODO: 访客ID 非必传 */
            "properties": {
                "$device_id": CaiHongData.device_id,    /* TODO: 设备ID 非必传 */
            }
        }
        this.sendData({ obj: dataStr })
    }

    /** 注册：玩家首次进入到游戏登陆界面时上报 */
    static register() {
        console.log("彩虹数据: register()");
        let dataStr = {
            "$event_name": "register",
            "properties": { "$account_id": 1111 }
        }
        this.sendData({ obj: dataStr })
    }

    /** 创建角色 */
    static role_create() {
        console.log("彩虹数据: role_create()");
        let dataStr = {
            "$event_name": "role_create",
        }
        this.sendData({ obj: dataStr })
    }

    /** 帐号登录：玩家登入到服务器时上报 */
    static login() {
        this._loginBeginTime = getServerUtcTime()
        console.log("彩虹数据: login()");
        if (this.getAccountId() == "") {
            return
        }

        let dataStr = {
            "$event_name": "login",
        }
        this.sendData({ obj: dataStr })
    }

    /** 角色登录：角色登录时上报 */
    static role_login() {
        console.log("彩虹数据: role_login()");
        let dataStr = {
            "$event_name": "role_login"
        }
        this.sendData({ obj: dataStr, checkConnect: true })
    }

    /** 角色登出：角色登出时上报+玩家切回后台时上报 */
    static role_logout() {
        console.log("彩虹数据: role_logout()");
        let dataStr = {
            "$event_name": "role_logout",
            "properties": { "online_duration": getServerUtcTime() - this._loginBeginTime }
        }
        this.sendData({ obj: dataStr, checkConnect: true })
    }

    /** 帐号登出：帐号登出时上报+玩家切回后台时上报 */
    static logout() {
        //CaiHongData._loginBeginTime = TimeOffSetManager.getServerUTCSecond();        
        console.log("彩虹数据: logout()");
        let dataStr = {
            "$event_name": "logout",
            "properties": { "online_duration": getServerUtcTime() - this._loginBeginTime, }
        }
        this.sendData({ obj: dataStr, checkConnect: true })
    }


    /** 完成任务事件 */
    static task_flow(taskId: string, /*  */
        name: string,  /*  */
        status: string,  /*  */
        type: string = "1",    /*  */) {
        console.log("彩虹数据: task_flow()");
        let dataStr = {
            "$event_name": "task_flow",
            "properties": {
                "task_id": taskId.toString(),
                "task_type": type,
                "task_name": name,
                "task_status": status,
            }
        }
        this.sendData({ obj: dataStr })
    }


    /**
     * 新手引导步骤
     * @param stepId 引导步骤ID
     * @param stepName 引导步骤名称
     * @param stepSubId 引导步骤子ID
     */
    static guide_complete(stepId: string, stepName: string, stepSubId?: string) {
        console.log("彩虹数据: guide_complete()");
        let dataStr = {
            "$event_name": "guide_complete",
            "properties": {
                "guide_step_id": stepId,
                "guide_step_name": getGuideStepDesc(stepId,stepSubId),
                "guide_step_sub_id": stepSubId,
            }
        }
        console.warn("新手引导---",JSON.stringify(dataStr))
        this.sendData({ obj: dataStr, checkConnect: true })
    }


    /** 资源加载 */
    static resource_load(resource_name: string, resource_type: number, load_result: number, load_fail_reason?: string) {
        console.log("彩虹数据: resource_load()");
        let dataStr = {
            "$event_name": "resource_load",
            "properties": {
                "resource_name": resource_name, //资源名称
                "resource_type": resource_type, //资源类型 资源：1；场景：2
                "load_result": load_result,     //加载结果 开始加载：1；成功：2；失败：3；
                "load_fail_reason": load_fail_reason,   //加载失败原因 错误日志
            }
        }
        this.sendData({ obj: dataStr, checkConnect: true })
    }

    /** 广告播放成功 */
    static advertise_click_success(advertise_scenes: string, is_finish_play: number) {
        console.log("彩虹数据: advertise_click_success()");
        let dataStr = {
            "$event_name": "advertise_click_success",
            "properties": {
                "resource_name": advertise_scenes,
                "resource_load_scene": is_finish_play,
            }
        }
        this.sendData({ obj: dataStr })
    }

    /** 广告播放失败 */
    static advertise_click_fail(advertise_scenes: string, fail_reason: string) {
        console.log("彩虹数据: advertise_click_fail()");
        let dataStr = {
            "$event_name": "advertise_click_fail",
            "properties": {
                "advertise_scenes": advertise_scenes,
                "fail_reason": fail_reason,
            }
        }
        this.sendData({ obj: dataStr })
    }

    /** 错误日志 */
    static error_event(error_info: string) {
        console.log("彩虹数据: error_event()");
        let dataStr = {
            "$event_name": "error_event",
            "properties": {
                "error_info": error_info,
            }
        }
        this.sendData({ obj: dataStr })
    }

    /** 自定义上报 */
    static reportsome(event_name: string, param: string = "") {
        console.log("caihongshuju reportsome ", event_name, param);
        let dataStr: any = {
            "$event_name": event_name,
        }
        if (param != "") {
            dataStr.properties = { "paramsome": param }
        }
        this.sendData({ obj: dataStr })
    }

    /** 获取帐户ID，这个ID为登录的uid */
    static getAccountId(): string {
        return LoginData.Instance.uid == "" ? null : LoginData.Instance.uid
    }

    /** 获取角色ID */
    static getRoleId(): string {
        return (Net.isConnect() || Role.Instance.RoleData) ? Role.Instance.ID : ""
    }

    /** 把当前时间转换为"yyyy-MM-dd HH:mm:ss"格式 */
    static getCurFormatedUTCTimeStr(): string {
        return Func.dateFtt("yyyy-MM-dd hh:mm:ss", getServerUtcTime())
    }

    /** 判断是否是微信小程序环境 */
    static isWeixinMiniGame(): boolean {
        //return isWechat(); /* TODO: 这里不确定是否正确 */
        return isWeixinMiniGame();
    }

    static getCommon() {
        let dataStr = {
            "appKey": CaiHongData._appkeyid,
            "data": [
                {
                    "$type": "track",
                    "$account_id": CaiHongData.getAccountId(),
                    "$event_time": CaiHongData.getCurFormatedUTCTimeStr(),
                    "$event_name": "common",
                    "properties": {
                        /* 以下是公共字段必填项 */
                        /* 属性名  属性显示名 类型 是否必传 赋值说明 */
                        "$device_id": this.device_id,  //设备id	否 
                        "$device_model": this.device_model, //设备型号	否 
                        "$os": this.os, //操作系统  否 
                        "$os_version": this.os_version, //操作系统版本  否
                        "$lib": this.lib, //SDK类型	  是 					
                        "$lib_version": this.lib_version, //SDK版本	  是 
                        "$app_version": this._gameVersion, //app版本号	  否 
                        "$advertiser_id": CaiHongData._advertiser_id,  //投放的账户id 

                        "$channel": this._channelId, //渠道	  是 
                        "$scene": this._sceneId, //场景值	  是 
                        // "$ad_type": this._ad_type, //广告投放类型 	  是 

                        // "$role_id": "", //角色ID	  是
                        // "$role_name": "", //角色名称	  是 
                        // //"$role_level": "", //当前角色等级	  否 
                        // "$server_id": "", //区服ID	  是 
                    }
                }
            ]
        }
        if (checkInt(this._ad_type) > 0) {
            dataStr['data'][0]['properties']['$ad_type'] = this._ad_type.toString() //广告投放类型 
        }

        if (this.getRoleId() != "") {
            dataStr['data'][0]['properties']['$role_id'] = this.getRoleId()
            dataStr['data'][0]['properties']['$role_name'] = Role.Instance.Name
        }
        if (LoginData.Instance.loginServerTab) {
            dataStr['data'][0]['properties']['$server_id'] = LoginData.Instance.loginGroup.toString()
        }
        return dataStr
    }



    static sendData(args: { obj: any, checkConnect?: boolean }) {
        // if (CaiHongData.isWeixinMiniGame() == false) {
        //     return false;
        // }
        if (args.checkConnect) {
            if (!Net.isConnect()) {
                return
            }
        }
        var commonData = this.getCommon()
        for (const key in args.obj) {
            const v = args.obj[key];
            if (typeof (v) == "object") {
                for (const key1 in v) {
                    commonData.data[0][key][key1] = v[key1]
                }
            } else {
                commonData.data[0][key] = args.obj[key]
            }
        }

        this.sendhttps(commonData)
    }


    /*  */
    static sendhttps(dataStr: any, urlStr: string = '') {
        // let url = `https://jdlogs.datapool-ymjh.cn/v2/real_time/debug`; /* 测试环境 */
        let url = `https://jdlogs.datapool-ymjh.cn/v2/sync_json`; /* 正式环境 */
        if ('' === urlStr) {
            //url = `https://jdlogs.datapool-ymjh.cn/v2/real_time/debug`;  /* 测试环境 */
        } else {
            url = urlStr;
        }

        if (!url) {
            cc.error("CaiHongData : sendhttps() url is illegal, url: " + url);
            return;
        }

        let JSONDATA = JSON.stringify(dataStr); /* 对象转字符串 */
        // console.log("caihongshuju, url  dataStr: ", url, JSONDATA);
        let xhr = cc.loader.getXMLHttpRequest(); /*  */
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    let response = xhr.responseText;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        let httpStatus = xhr.statusText;
                        console.log(`http request caihongshuju success+`, response, httpStatus);
                    } else {
                        console.log(`http request caihongshuju onerror+`, response);
                    }
                }
            };
        };
        console.log(JSONDATA, Net.isConnect());
        /**Joh 编辑器内不发消息，会有跨域报错 */
        // if ("Windows" != cc.sys.os)
        xhr.send(JSONDATA); /* 本地测试阶段关闭,本地测试通过后再打开 */
    }




    /** 抖音回传 - 激活 */
    static byteDanceRelayMsg_Active() {
        cc.log("抖音数据回传: Active()");
        // if (!CaiHongData.isWeixinMiniGame()) {
        //     return false;
        // }

        let usrOpenID = this.getAccountId();
        if (!usrOpenID) { /* 正式用户的AccountName其实是OpenID，如果是内部用户它可能是0，所以加判断 */
            cc.error("error roleID : " + usrOpenID);
            return false;
        }

        let utcTime = getServerUtcTime();
        let token = "54CF96178FE294D6D77D0F93DA60BBF3";   /* 运营提供的token密钥 */
        let nonce = Math.floor(utcTime % 9999);           /* 随机数 */
        let timestamp = String(utcTime);                      /* 时间戳 */

        /* body */
        let dataStr = {
            "clue_token": CaiHongData._clue_tokenId,   /*  */
            "open_id": usrOpenID,                   /*  */
            "event_type": "0",                         /* 0表示激活 */
        }

        /* 签名函数 */
        let sign = (token, timestamp, nonce) => {
            let strList = [token, timestamp, nonce];
            strList.sort();
            let buffer = '';
            strList.forEach(str => {
                buffer += str;
            })
            let sha1str = hex_sha1(buffer);
            cc.log("sha1str: " + sha1str);
            return sha1str;
        }

        let signature = sign(token, nonce, timestamp);
        // https://clue.oceanengine.com/outer/wechat/applet/token/1758691663069278
        let url = this._bytedanceRelayMsgUrl + `?timestamp=${timestamp}&nonce=${nonce}&signature=${signature}`;
        cc.log("byteDanceRelayMsg_Active: " + url);

        CaiHongData.sendhttps(dataStr, url);
    }

}