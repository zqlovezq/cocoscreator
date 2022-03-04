
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Component/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b3c6TexiJECJVZVa43L+VS', 'Main');
// Script/Component/Main.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CocosBridge_1 = require("../Tools/CocosBridge");
// import Tools from "./Tools";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var self = null;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Node)
        _this.background = null;
        // @property(cc.Node)
        _this.blockBackground = null;
        _this.ground = null;
        _this.content = null;
        _this.cashInfo = null;
        _this.userInfo = null;
        _this.scoreInfo = null;
        _this.barrageLayer = null;
        _this.getCashLayer = null;
        _this.settingLayer = null;
        _this.saveCashLayer = null;
        // @property(cc.Node)
        _this.lotteryLayer = null;
        // @property(cc.Node)
        _this.stealLayer = null;
        _this.signLayer = null;
        _this.popSuccessLayer = null;
        _this.popDeleteLayer = null;
        _this.popNewLayer = null;
        _this.ticketLayer = null;
        _this.ticketTenLayer = null;
        _this.popSuperLayer = null;
        _this.popSecretLayer = null;
        _this.popStealMarkLayer = null;
        _this.packet = null;
        _this.blockNull = null;
        _this.red = null;
        _this.green = null;
        _this.yellow = null;
        _this.blue = null;
        _this.pink = null;
        _this.good = null;
        _this.great = null;
        _this.excellent = null;
        _this.amazing = null;
        _this.unbelievable = null;
        _this.desEffect = null;
        _this.effectAudio = [];
        _this.popDeleteType = [];
        _this.liziBlock = [];
        _this.tiger = [];
        _this.pop_red = null;
        _this.a = [];
        _this.b = [];
        _this.deletePosArr = [];
        _this.difficulty = 3;
        _this.Delete_num = 0;
        _this.vh = 110;
        _this.lock = false;
        _this.targetScore = 1000;
        _this.curScore = 0;
        _this.level = 0;
        _this.clickRedNumber = 0;
        _this.clickOnce = true;
        _this.clickNumber = 0;
        _this.countTime = 0;
        _this.canClickRed = true;
        _this.clickRedArr = [];
        _this.startClickTime = 0;
        _this.isOverGame = false;
        _this._count = 0;
        _this.showSecretTimes = 0;
        _this.clickPos = cc.v3(0, 0);
        _this.addTicket = 0;
        _this.barrageArr = [];
        _this.barrageSpeed = 2;
        _this.barrageMove = false;
        _this.barrageLock = false;
        _this.superTime = 0;
        _this.special = false;
        return _this;
    }
    Main.prototype.onLoad = function () {
        var _this = this;
        // 初始化参数
        self = this;
        cc.Tools.screenAdapter();
        cc.Tools.Event.on("init", this.refreshUserInfo, this);
        cc.Tools.Event.on("getTicket", this.showTicketLayer, this);
        cc.Tools.Event.on("cash", this.showGetCashLayer, this);
        cc.Tools.Event.on("clickRed", this.canClickRedFunc, this);
        cc.Tools.Event.on("showPacket", this.showPacket, this);
        cc.Tools.Event.on("refreshWallet", this.refreshWallet, this); //刷新金钱
        //当视频缓存好通知所有按钮可以点了 否则不可点击
        cc.Tools.Event.on("observerAllBtn", this.observerAllBtn, this); //刷新金钱
        cc.Tools.adTimes = 0;
        this.ground = cc.find("Canvas/background");
        this.content = cc.find("Canvas/content");
        this.background = this.ground.getChildByName("blockColour");
        this.blockBackground = this.ground.getChildByName("blockNull");
        var infoLayer = this.content.getChildByName("info_layer");
        this.cashInfo = infoLayer.getChildByName("cash_info");
        this.userInfo = infoLayer.getChildByName("user_info");
        this.scoreInfo = infoLayer.getChildByName("score_info");
        this.barrageLayer = this.node.getChildByName("barrage_layer");
        this.countTime = new Date().getTime();
        this.preloadPrefab();
        this.initUserInfo();
        this.shieldBtn();
        //获取当前手机是否有不正常应用
        this.getIllegalityApp();
        //刷新一下当前的金钱数量
        this.refreshWallet();
        var box = this.scoreInfo.getChildByName("box");
        cc.Tools.breatheAnim(box);
        box.on(cc.Node.EventType.TOUCH_END, function () {
            _this.showPopDeleteLayer(1, 10);
        }, this);
        this.scheduleOnce(function () {
            _this.loadPrefab('Prefab/barrage').then(function (prefab) {
                var barrage = cc.instantiate(prefab);
                self.barrageLayer.addChild(barrage);
                barrage.x = 1000;
                _this.barrage = barrage;
                _this.getBarrageInfo(true);
            });
        }, 1);
        //退出游戏的时候记录一下
        // 
        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("cocos--EVENT_HIDE--退出游戏");
            //当前记录一个时间
            var date = new Date().getTime();
            cc.sys.localStorage.setItem("lastExit", Math.floor(date / 1000));
        });
        cc.Button.prototype["_onTouchBegan"] = function (event) {
            if (!this.interactable || !this.enabledInHierarchy)
                return;
            this._pressed = true;
            this._updateState();
            event.stopPropagation();
            cc.audioEngine.play(self.effectAudio[3], false, 1);
            console.log("重写以前的button");
            cc.tween(this.node).to(1, { scale: 1.1 }).start;
        };
    };
    //监听所有的视频缓存--->如果没有缓存好--或者缓存失败--所有视频按钮置灰--缓存成功变亮
    Main.prototype.observerAllBtn = function (closeBtn) {
    };
    //获取非法App
    Main.prototype.getIllegalityApp = function () {
        if (cc.sys.isNative) {
            //获取非系统应用信息列表
            var unSysList = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getInstallAppList", "()Ljava/lang/String;");
            // console.log("cocos--unSysList---",unSysList.length+"----类型---"+typeof(unSysList));
            // let unSysList = ``+[{"appName":"荣耀俱乐部1","appPackageName":"com.honor.club"},{"appName":"疯狂乐逍遥","appPackageName":"com.game.fklxy"},{"appName":"tt_ad_mediation","appPackageName":"com.header.app.untext"},{"appName":"微信","appPackageName":"com.tencent.mm"},{"appName":"百度","appPackageName":"com.baidu.searchbox"},{"appName":"荣耀商城","appPackageName":"com.hihonor.vmall"},{"appName":"QQ浏览器","appPackageName":"com.tencent.mtt"},{"appName":"拼多多","appPackageName":"com.xunmeng.pinduoduo"},{"appName":"今日头条","appPackageName":"com.ss.android.article.news"},{"appName":"QQ","appPackageName":"com.tencent.mobileqq"},{"appName":"刷机精灵连接组件","appPackageName":"com.shuame.sprite"},{"appName":"百度地图","appPackageName":"com.baidu.BaiduMap"},{"appName":"去哪儿旅行","appPackageName":"com.Qunar"},{"appName":"消消变首富","appPackageName":"com.zhima.xxbsf"},{"appName":"芝麻消消乐","appPackageName":"com.zhima.zmxxl"}]
            //获取系统应用信息列表
            var SysList = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getSystemAppList", "()Ljava/lang/String;");
            // console.log("cocos--SysList---",SysList.length+"----类型---"+typeof(SysList));
            // let SysList = ``+[{"appName":"精品推荐1","appPackageName":"com.huawei.hifolder"},{"appName":"com.android.cts.priv.ctsshim","appPackageName":"com.android.cts.priv.ctsshim"},{"appName":"相机","appPackageName":"com.huawei.camera"},{"appName":"玩机技巧","appPackageName":"com.huawei.android.tips"},{"appName":"Android Services Library","appPackageName":"com.google.android.ext.services"},{"appName":"HwSynergy","appPackageName":"com.huawei.synergy"},{"appName":"华为桌面","appPackageName":"com.huawei.android.launcher"},{"appName":"华为音乐","appPackageName":"com.android.mediacenter"},{"appName":"通话/信息存储","appPackageName":"com.android.providers.telephony"},{"appName":"银联可信服务安全组件","appPackageName":"com.unionpay.tsmservice"},{"appName":"UEInfoCheck","appPackageName":"com.huawei.android.UEInfoCheck"},{"appName":"通话录音","appPackageName":"com.android.phone.recorder"},{"appName":"日历存储","appPackageName":"com.android.providers.calendar"}]
            var sendData = {
                unsys_list: unSysList,
                sys_list: SysList
            };
            // console.log("cocos---getIllegalityApp--", JSON.stringify(sendData))
            cc.Tools.sendRequest("UserDev", "POST", sendData).then(function (res) {
                console.log("cocos-----UserDev--", JSON.stringify(res));
            });
        }
    };
    //获取ad的信息
    Main.prototype.getAd = function () {
        var _this = this;
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var dateStr = year + "" + month + "" + day;
        // console.log("")
        var markDate = cc.sys.localStorage.getItem("markDate");
        if (markDate !== dateStr) {
            //如果第二天
            cc.Tools.getFreeze();
            cc.sys.localStorage.setItem("adTimes", 0);
            cc.Tools.ad.adTimes = 0;
            cc.sys.localStorage.setItem("markDate", dateStr);
        }
        else {
            cc.Tools.ad.adTimes = cc.sys.localStorage.getItem("adTimes");
        }
        console.log("cocos----今天累计观看视频次数=", cc.Tools.ad.adTimes);
        cc.Tools.sendRequest("Conf", "GET", {}).then(function (res) {
            //大小视频
            cc.Tools.ad.adSmall = res.data.ad_conf[0].ad_position_id;
            cc.Tools.ad.adBig = res.data.ad_conf[1].ad_position_id;
            cc.Tools.ad.adDiv = res.data.ad_conf[0].end_num;
            cc.Tools.ad.config = res.data.award_num_conf;
            cc.Tools.ad.config.sort(function (a, b) {
                if (a.num > b.num) {
                    return 1;
                }
                if (a.num < b.num) {
                    return -1;
                }
                return 0;
            });
            if (cc.Tools.ad.adTimes <= cc.Tools.ad.adDiv) {
                if (cc.Tools.ad.adSmall) {
                    cc.Tools.ad.adPosId = cc.Tools.ad.adSmall;
                }
            }
            else {
                if (cc.Tools.ad.adBig) {
                    cc.Tools.ad.adPosId = cc.Tools.ad.adBig;
                }
            }
            _this.initAward();
        }).catch(function (err) {
            console.log("cocos----广告err--" + err);
        });
    };
    //判断是否屏蔽
    Main.prototype.shieldBtn = function () {
        var _this = this;
        if (cc.sys.localStorage.getItem("showBtn")) {
            var val = cc.sys.localStorage.getItem("showBtn");
            var btnLayer = this.content.getChildByName("btn_layer");
            for (var i = 3; i <= 8; i++) {
                var btn = btnLayer.getChildByName("btn_" + i);
                btn.active = val == 1 ? false : true;
            }
            if (val == 100) {
                this.showStealMarkLayer();
            }
        }
        else {
            cc.Tools.sendRequest("RegionConf", "GET", {}).then(function (res) {
                if (res.data.status === 1) {
                    //不显示
                    cc.sys.localStorage.setItem("showBtn", 1);
                    var btnLayer = _this.content.getChildByName("btn_layer");
                    for (var i = 3; i <= 8; i++) {
                        var btn = btnLayer.getChildByName("btn_" + i);
                        btn.active = false;
                    }
                }
                else if (res.data.status === 100) {
                    //显示
                    cc.sys.localStorage.setItem("showBtn", 100);
                    //显示新手奖励界面
                    _this.showNewLayer();
                }
            }).catch(function (err) {
                console.log("cocos----屏蔽err--" + err);
            });
        }
    };
    Main.prototype.showStealMarkLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popStealMarkLayer) {
            this.loadPrefab('Prefab/stealMark').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.popStealMarkLayer = layer;
                self.node.addChild(layer);
                self.popStealMarkLayer.active = true;
            });
        }
        else {
            this.popStealMarkLayer.active = true;
        }
    };
    //获取弹幕信息
    Main.prototype.getBarrageInfo = function (isFirst) {
        var _this = this;
        cc.Tools.sendRequest("Trend", "GET", {}).then(function (res) {
            var items = res.data.items;
            self.barrageArr = __spreadArrays(self.barrageArr, items);
            // console.log("self.barrageArr", self.barrageArr);
            if (isFirst) {
                _this.barrageMove = true;
                var data = self.barrageArr.shift();
                _this.barrage.getComponent("Barrage").setBarrage(data);
            }
            _this.barrageLock = false;
        }).catch(function (err) {
            console.log("cocos----弹幕err--" + err);
        });
    };
    Main.prototype.update = function (dt) {
        if (this.barrageMove && this.barrage && cc.sys.localStorage.getItem("showBtn") == 100) {
            var box = this.scoreInfo.getChildByName("box");
            this.barrage.x -= this.barrageSpeed;
            if (this.barrage.x < -700) {
                var data = self.barrageArr.shift();
                this.barrage.getComponent("Barrage").setBarrage(data);
            }
            if (this.barrageArr.length <= 0 && !this.barrageLock) {
                this.barrageLock = true;
                this.getBarrageInfo(false);
            }
            if (box.x < 700) {
                box.x += 1;
            }
            else {
                box.x = -700;
            }
            if (this.superTime > 30) {
                this.superTime = 0;
                this.showSuperLayer();
            }
            else {
                this.superTime += dt;
            }
            // if(this.superTime>5){
            //     console.log("update");
            // }
        }
    };
    /**
     * 初始化数数
    */
    Main.prototype.initShuShu = function () {
        // 数数打点
        cc.Tools.shuShuDot();
        cc.Tools.setDistinctId();
        cc.Tools.setUserId();
    };
    /**
    * 处理小数精度问题
    * @returns
    */
    Main.prototype.handleNumber = function (numb) {
        // 先讲数字转换成字符串
        if (numb) {
            var str = "" + numb;
            var key = str.split(".");
            var newKey = key[0] + "." + key[1].slice(0, 2);
            return newKey;
        }
        else {
            return "0";
        }
    };
    /**
     * 初始化头像
     * @param url:头像url
     * @param vip:Vip等级
    */
    Main.prototype.addAvatar = function (url, vip) {
        // cc.Tools.userInfo.next_grade_rate = 0.5;
        var bar = self.userInfo.getChildByName("vip_bar").getComponent(cc.Sprite);
        bar.fillRange = cc.Tools.userInfo.next_grade_rate;
        var avatarJs = self.userInfo.getChildByName("avatar").getComponent("Avatar");
        avatarJs.loadUrl(url).then(function (res) {
            avatarJs.setAvatar(res, vip);
        });
    };
    // 初始化userInfo
    Main.prototype.initUserInfo = function () {
        var _this = this;
        var sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then(function (res) {
            cc.Tools.userInfo = res.data;
            _this.userInfo.getChildByName("user_name").getComponent(cc.Label).string = res.data.nick_name;
            _this.initShuShu();
            _this.init();
            _this.addAvatar(res.data.avatar_url, cc.Tools.userInfo.grade_id);
            //判断缓存的哪个激励视频
            _this.getAd();
            // 显示冻结红包的进度条
            var freezenBtn = _this.content.getChildByName("btn_layer").getChildByName("btn_3");
            var freezenRate = cc.Tools.userInfo.active_rate.split("|");
            var freezenBar = freezenBtn.getChildByName("bar").getComponent(cc.ProgressBar);
            freezenBar.progress = Number(freezenRate[0]) / Number(freezenRate[1]);
            freezenBtn.getChildByName("text").getComponent(cc.Label).string = freezenRate[0] + "/" + freezenRate[1];
            if (freezenRate[0] === freezenRate[1]) {
                freezenBtn.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(0.1, 30), cc.rotateTo(0.1, 0), cc.rotateTo(0.1, -30), cc.rotateTo(0.1, 0), cc.delayTime(2))));
            }
            // 增加一个定时器 一定时间没有看视频 主动弹出视频
            if (cc.sys.localStorage.getItem("showBtn") == 100) {
                _this.schedule(function () {
                    cc.Tools.sendRequest("AdIntervalShow", "GET", {}).then(function (res) {
                        if (res.data.is_show && _this.barrageMove) {
                            cc.Tools.showTips(_this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
                                CocosBridge_1.default.JSCallNative("showRewardVideoAd", "12");
                            });
                        }
                    });
                }, cc.Tools.userInfo.ad_show_interval_second);
            }
        }).catch(function (err) {
            console.log("err", err);
            cc.find("Canvas/lose").active = true;
            if (err === "token验证失败,请重新登陆" && cc.sys.isNative) {
                // 重新登陆
                cc.director.loadScene('Login');
                cc.sys.localStorage.setItem("token", "");
            }
        });
    };
    /**
     * @param isReload ----是否加载游戏
     */
    Main.prototype.refreshUserInfo = function (isReload) {
        var _this = this;
        var sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then(function (res) {
            _this.addCustomBarrage(res.data);
            cc.Tools.userInfo = res.data;
            //将视频暴击加入弹幕中
            _this.barrageMove = true;
            _this.superTime = 0;
            if (isReload) {
                _this.init();
            }
        }).catch(function (err) {
            console.log("err", err);
            cc.find("Canvas/lose").active = true;
            if (err === "token验证失败,请重新登陆" && cc.sys.isNative) {
                // 重新登陆
                cc.director.loadScene('Login');
                cc.sys.localStorage.setItem("token", "");
            }
        });
    };
    //像弹幕里面增加新的信息
    Main.prototype.addCustomBarrage = function (res) {
        if (cc.Tools.userInfo.num_award_got < res.num_award_got) {
            //看了新视频 想弹幕数组中添加信息
            var indexRed = 0, indexCrit = 0, config = cc.Tools.ad.config;
            console.log("ad config ", config);
            for (var i = 0; i < config.length; i++) {
                var _config = config[i];
                if (res.num_award_got <= _config.num) {
                    indexRed = _config.num;
                    indexCrit = _config.rate;
                    break;
                }
            }
            var info = {};
            info["data"] = "\u7B2C" + indexRed + "\u4E2A\u7EA2\u5305,\u66B4\u51FB" + indexCrit + "%\uFF08\u5DF2\u9886\u53D6" + res.num_award_got + "/" + indexRed + "\uFF09";
            info["action"] = "tip";
            info["user"] = {};
            info["refer_user"] = {};
            info["user"].avatar = cc.Tools.userInfo.avatar_url;
            info["user"].grade_id = cc.Tools.userInfo.grade_id;
            this.barrageArr.unshift(info);
            var awrad = this.content.getChildByName("award_bar");
            var progress_bar = awrad.getChildByName("progress_bar");
            var bar = progress_bar.getComponent(cc.ProgressBar);
            bar.progress = Number((res.num_award_got / indexRed).toFixed(2));
            var lbl = progress_bar.getChildByName("lbl").getComponent(cc.Label);
            lbl.string = res.num_award_got + "/" + indexRed + ")";
            var layout = awrad.getChildByName("layout");
            var layoutLbl = layout.getChildByName("lbl").getComponent(cc.RichText);
            layoutLbl.string = "<color=#FFCA00>\u7B2C</c><color=#FB5A38>" + indexRed + "</color><color=#FFCA00>\u7EA2\u5305\u7FFB</c><color=#FB5A38>" + indexCrit + "%</color><color=#FFCA00>\u500D\u66B4\u51FB\u5956\u52B1</c>";
            layout.scaleX = 0;
            layout.stopAllActions();
            cc.tween(layout).to(0.5, { scaleX: 1 }).delay(4).to(0.5, { scaleX: 0 }).start();
        }
    };
    //初始化award
    Main.prototype.initAward = function () {
        var indexRed = 0, indexCrit = 0, config = cc.Tools.ad.config;
        for (var i = 0; i < config.length; i++) {
            var _config = config[i];
            if (cc.Tools.userInfo.num_award_got <= _config.num) {
                indexRed = _config.num;
                indexCrit = _config.rate;
                break;
            }
        }
        var awrad = this.content.getChildByName("award_bar");
        var progress_bar = awrad.getChildByName("progress_bar");
        var bar = progress_bar.getComponent(cc.ProgressBar);
        bar.progress = Number((cc.Tools.userInfo.num_award_got / indexRed).toFixed(2));
        var lbl = progress_bar.getChildByName("lbl").getComponent(cc.Label);
        lbl.string = cc.Tools.userInfo.num_award_got + "/" + indexRed;
        var layout = awrad.getChildByName("layout");
        var layoutLbl = layout.getChildByName("lbl").getComponent(cc.RichText);
        layoutLbl.string = "<color=#FFCA00>\u7B2C</c><color=#FB5A38>" + indexRed + "</color><color=#FFCA00>\u7EA2\u5305\u7FFB</c><color=#FB5A38>" + indexCrit + "%</color><color=#FFCA00>\u500D\u66B4\u51FB\u5956\u52B1</c>";
        layout.scaleX = 0;
        layout.stopAllActions();
        cc.tween(layout).to(0.5, { scaleX: 1 }).delay(4).to(0.5, { scaleX: 0 }).start();
    };
    /**
     * 刷新钱的接口
    */
    Main.prototype.refreshWallet = function () {
        var sendData = {};
        cc.Tools.sendRequest("Wallet", "GET", sendData).then(function (res) {
            console.log("cocos----刷新现有金钱----", JSON.stringify(res));
            cc.Tools.wallet.amount = res.data.amount;
            cc.Tools.wallet.save_amount = res.data.save_amount;
            cc.Tools.wallet.save_freeze_amount = res.data.save_freeze_amount;
            self.cashInfo.getChildByName("text").getComponent(cc.Label).string = res.data.amount;
            if (self.lotteryLayer) {
                self.lotteryLayer.getChildByName("wrap").getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = res.data.amount;
            }
            if (self.stealLayer) {
                var wrap = self.stealLayer.getChildByName("wrap");
                self.stealLayer.getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = res.data.amount;
                var down = wrap.getChildByName("down");
                var todayCash = down.getChildByName("today_cash");
                var todayCashText = todayCash.getChildByName("text").getComponent(cc.Label);
                todayCashText.string = res.data.save_amount;
                var tomorrowCash = down.getChildByName("tomorrow_cash");
                var tomorrowCashText = tomorrowCash.getChildByName("text").getComponent(cc.Label);
                tomorrowCashText.string = res.data.save_freeze_amount;
            }
        });
    };
    /**
     * 预加载prefab
     */
    Main.prototype.preloadPrefab = function () {
        cc.resources.preload('Prefab/getCash', cc.Prefab);
        cc.resources.preload('Prefab/setting', cc.Prefab);
        cc.resources.preload('Prefab/lottery', cc.Prefab);
        cc.resources.preload('Prefab/popSuccess', cc.Prefab);
        cc.resources.preload('Prefab/popDelete', cc.Prefab);
        cc.resources.preload('Prefab/ticket', cc.Prefab);
        cc.resources.preload('Prefab/super', cc.Prefab);
        cc.resources.preload('Prefab/sign', cc.Prefab);
        cc.resources.preload('Prefab/stealMark', cc.Prefab);
        cc.resources.preload('Prefab/secretLayer', cc.Prefab);
        cc.resources.preload('Prefab/popNew', cc.Prefab);
    };
    Main.prototype.loadPrefab = function (url) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(url, cc.Prefab, function (err, prefab) {
                if (prefab) {
                    resolve(prefab);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    Main.prototype.start = function () {
        // 注册点击事件
        this.registerEvent();
    };
    Main.prototype.registerEvent = function () {
        var btnLayer = this.content.getChildByName("btn_layer");
        var btnType = ["showSetLayer", "showGetCashLayer", "showUnFreezeLayer", "showStealLayer", "showLotteryleLayer", "clickRed", "showSignLayer", "touchSnow"];
        for (var i = 1; i <= 8; i++) {
            var btn = btnLayer.getChildByName("btn_" + i);
            btn.on(cc.Node.EventType.TOUCH_END, this[btnType[i - 1]], this);
        }
        var secretBtn = cc.find("Canvas/secret");
        secretBtn.on(cc.Node.EventType.TOUCH_END, this.showSecretLayer, this);
        var freshBtn = cc.find("Canvas/lose/fresh_btn");
        freshBtn.on(cc.Node.EventType.TOUCH_END, this.refreshUserInfo, this);
        var getCashBtn = this.cashInfo.getChildByName("btn");
        getCashBtn.on(cc.Node.EventType.TOUCH_END, this.showGetCashLayer, this);
    };
    Main.prototype.removeEvent = function () {
        var btnLayer = this.content.getChildByName("btn_layer");
        var btnType = ["showSetLayer", "showGetCashLayer", "showUnFreezeLayer", "showStealLayer", "showLotteryleLayer", "clickRed", "showSignLayer", "touchSnow"];
        for (var i = 1; i <= 8; i++) {
            var btn = btnLayer.getChildByName("btn_" + i);
            btn.off(cc.Node.EventType.TOUCH_END, this[btnType[i - 1]], this);
        }
        var secretBtn = cc.find("Canvas/secret");
        secretBtn.off(cc.Node.EventType.TOUCH_END, this.showSecretLayer, this);
        var freshBtn = cc.find("Canvas/lose/fresh_btn");
        freshBtn.off(cc.Node.EventType.TOUCH_END, this.refreshUserInfo, this);
        var getCashBtn = this.cashInfo.getChildByName("btn");
        getCashBtn.off(cc.Node.EventType.TOUCH_END, this.showGetCashLayer, this);
    };
    Main.prototype.touchSnow = function () {
        // 点击加锁
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node, "<b><color=#ffffff>\u70B9\u51FB\u592A\u9891\u7E41</c></b>");
            return;
        }
        else {
            cc.Tools.lock = true;
            setTimeout(function () {
                cc.Tools.lock = false;
            }, 3000);
        }
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_snowman_1" });
        cc.Tools.showTips(this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
            CocosBridge_1.default.JSCallNative("showRewardVideoAd", "3");
        });
    };
    //方向 1是现金红包 2是存钱罐
    Main.prototype.showPacket = function (obj) {
        var end = obj.dir === 1 ? this.cashInfo : this.content.getChildByName("btn_layer").getChildByName("btn_4");
        this.showPacketAnim(10, 0.01, 200, cc.v3(360, 640), end, function () {
            cc.Tools.Event.emit("refreshWallet");
            if (obj.videoType === 4) {
                cc.Tools.emitEvent("init", true);
            }
            else if (obj.videoType === 9) {
                cc.Tools.emitEvent("init", false);
            }
        });
    };
    Main.prototype.showSecretLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.showSecretTimes++;
        if (this.showSecretTimes >= 3) {
            this.showSecretTimes = 0;
            this.barrageMove = false;
            if (!this.popSecretLayer) {
                this.loadPrefab('Prefab/secretLayer').then(function (prefab) {
                    var layer = cc.instantiate(prefab);
                    self.popSecretLayer = layer;
                    self.node.addChild(layer);
                    self.popSecretLayer.active = true;
                });
            }
            else {
                this.popSecretLayer.active = true;
            }
        }
    };
    Main.prototype.touchRed = function () {
        if (cc.Tools.userInfo.up_level_num_not_get) {
            // 点击加锁
            if (cc.Tools.lock) {
                cc.Tools.showTips(this.node, "<b><color=#ffffff>\u70B9\u51FB\u592A\u9891\u7E41</c></b>");
                return;
            }
            else {
                cc.Tools.lock = true;
                setTimeout(function () {
                    cc.Tools.lock = false;
                }, 3000);
            }
            CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_clickredbag_1" });
            if (cc.Tools.userInfo.new_free_level_times) {
                var sendData = {
                    type: 4,
                    ts: new Date().getTime()
                };
                cc.Tools.sendRequest("NewAward", "POST", sendData).then(function (res) {
                    cc.Tools.emitEvent("getTicket", { ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 4 });
                });
            }
            else {
                cc.Tools.showTips(this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
                    CocosBridge_1.default.JSCallNative("showRewardVideoAd", "4");
                });
            }
        }
    };
    /**
    * popSuccess界面
    */
    Main.prototype.showPopSuccessLayer = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.lock = false;
            _this.barrageMove = false;
            cc.audioEngine.play(_this.effectAudio[4], false, 1);
            if (!_this.popSuccessLayer) {
                _this.loadPrefab('Prefab/popSuccess').then(function (prefab) {
                    var layer = cc.instantiate(prefab);
                    self.popSuccessLayer = layer;
                    self.node.addChild(layer);
                    var js = self.popSuccessLayer.getComponent("PopSuccess");
                    var num;
                    if (_this.curScore > 6000) {
                        num = 3;
                    }
                    else if (_this.curScore < 6000 && _this.curScore > 3000) {
                        num = 2;
                    }
                    else {
                        num = 1;
                    }
                    self.popSuccessLayer.active = true;
                    js.setStar(num);
                });
            }
            else {
                // this.popSuccessLayer.active = true;
                var js = self.popSuccessLayer.getComponent("PopSuccess");
                var num = void 0;
                if (_this.curScore > 6000) {
                    num = 3;
                }
                else if (_this.curScore < 6000 && _this.curScore > 3000) {
                    num = 2;
                }
                else {
                    num = 1;
                }
                self.popSuccessLayer.active = true;
                js.setStar(num);
            }
        }, 0.5);
    };
    /**
   * popDelete界面
   * @param  type 1---气泡红包 2---消除红包
   * @param videoType ---视频类型
   */
    Main.prototype.showPopDeleteLayer = function (type, videoType) {
        var _this = this;
        this.scheduleOnce(function () {
            _this.lock = false;
            _this.barrageMove = false;
            // cc.audioEngine.play(this.effectAudio[3], false, 1);
            if (!_this.popDeleteLayer) {
                _this.loadPrefab('Prefab/popDelete').then(function (prefab) {
                    var layer = cc.instantiate(prefab);
                    self.popDeleteLayer = layer;
                    self.node.addChild(layer);
                    self.popDeleteLayer.active = true;
                    var title = self.popDeleteLayer.getChildByName("wrap").getChildByName("title").getComponent(cc.Sprite);
                    title.spriteFrame = _this.popDeleteType[type - 1];
                    cc.Tools.emitEvent("videoType", videoType);
                });
            }
            else {
                _this.popDeleteLayer.active = true;
                var title = self.popDeleteLayer.getChildByName("wrap").getChildByName("title").getComponent(cc.Sprite);
                title.spriteFrame = _this.popDeleteType[type - 1];
                cc.Tools.emitEvent("videoType", videoType);
            }
        }, 0.5);
    };
    /**
     * 签到奖励
     */
    Main.prototype.showSignLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_clicksign_1" });
        if (!this.signLayer) {
            this.loadPrefab('Prefab/sign').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.signLayer = layer;
                self.node.addChild(layer);
                self.signLayer.active = true;
            });
        }
        else {
            this.signLayer.active = true;
        }
    };
    /**
     * 新手奖励
     */
    Main.prototype.showNewLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popNewLayer) {
            this.loadPrefab('Prefab/popNew').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.popNewLayer = layer;
                self.node.addChild(layer);
                self.popNewLayer.active = true;
            });
        }
        else {
            this.popNewLayer.active = true;
        }
    };
    /**
     * 超级红包界面
     */
    Main.prototype.showSuperLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popSuperLayer) {
            this.loadPrefab('Prefab/super').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.popSuperLayer = layer;
                self.node.addChild(layer);
                self.popSuperLayer.active = true;
            });
        }
        else {
            this.popSuperLayer.active = true;
        }
    };
    /**
    * ticket界面
    * @param type 来自几级界面
    */
    Main.prototype.showTicketLayer = function (ticketInfo) {
        var _this = this;
        console.log("cocos--获得奖励的信息---", JSON.stringify(ticketInfo));
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        if (!this.ticketLayer) {
            this.loadPrefab('Prefab/ticket').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.ticketLayer = layer;
                self.ticketLayer.zIndex = 9999;
                self.node.addChild(layer);
                self.ticketLayer.active = true;
                var ticketJs = _this.ticketLayer.getComponent("Ticket");
                ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType);
            });
        }
        else {
            this.ticketLayer.active = true;
            var ticketJs = this.ticketLayer.getComponent("Ticket");
            ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType);
        }
        // this.refreshUserInfo(false);
    };
    /**
    * 解冻红包界面
    */
    Main.prototype.showUnFreezeLayer = function (e) {
        var target = e.target;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_icetable_1" });
        // 解冻红包新需求
        cc.Tools.sendRequest("ActiveInfo", "GET", {}).then(function (res) {
            var msg = cc.find("Canvas/msg");
            msg.active = true;
            msg.opacity = 0;
            var _msg = msg.getChildByName("lbl").getComponent(cc.Label);
            _msg.string = res.data.tip;
            msg.stopAllActions();
            msg.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(0.5), cc.callFunc(function () {
                msg.active = false;
            })));
            if (res.data.freeze_amount > 0) {
                // this.showPacket();
                cc.Tools.emitEvent("getTicket", { ticket: res.data.freeze_amount, add: 0, type: 1, videoType: 1 });
                target.stopAllActions();
                target.angle = 0;
            }
        });
    };
    /**
     * 存钱罐界面
     */
    Main.prototype.showSaveCashLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_Piggybank_1" });
        if (!this.saveCashLayer) {
            this.loadPrefab('Prefab/saveCash').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.saveCashLayer = layer;
                self.node.addChild(layer);
                var js = self.saveCashLayer.getComponent("SaveCash");
                js.isFirstShow = true;
                self.saveCashLayer.active = true;
            });
        }
        else {
            this.saveCashLayer.active = true;
        }
    };
    /**
    * 设置界面
    */
    Main.prototype.showSetLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_clicksetting_1" });
        if (!this.settingLayer) {
            this.loadPrefab('Prefab/setting').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.settingLayer = layer;
                self.node.addChild(layer);
                self.settingLayer.active = true;
            });
        }
        else {
            this.settingLayer.active = true;
        }
    };
    /**
     * 提现界面
     */
    Main.prototype.showGetCashLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_cash_1" });
        if (!this.getCashLayer) {
            this.loadPrefab('Prefab/getCash').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.getCashLayer = layer;
                self.node.addChild(layer);
                self.getCashLayer.active = true;
            });
        }
        else {
            this.getCashLayer.active = true;
        }
    };
    /**
     * 转盘界面
     */
    Main.prototype.showLotteryleLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_turntable_1" });
        var btnLayer = this.content.getChildByName("btn_layer");
        var boxBtn = btnLayer.getChildByName("btn_5");
        boxBtn.getChildByName("red").active = false;
        if (!this.lotteryLayer) {
            this.loadPrefab('Prefab/lottery').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.lotteryLayer = layer;
                self.node.addChild(layer);
                self.lotteryLayer.active = true;
            });
        }
        else {
            this.lotteryLayer.active = true;
        }
    };
    /**
     * 大乱斗界面
    */
    Main.prototype.showStealLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_steal_1" });
        if (!this.stealLayer) {
            this.loadPrefab('Prefab/steal').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.stealLayer = layer;
                self.node.addChild(layer);
                self.stealLayer.active = true;
            });
        }
        else {
            this.stealLayer.active = true;
        }
    };
    // todo
    Main.prototype.clickRed = function (e) {
        var _this = this;
        cc.audioEngine.play(this.effectAudio[0], false, 1);
        if (!this.canClickRed) {
            return;
        }
        this.clickRedNumber++;
        var bar = e.target.getChildByName("progress").getChildByName("bar");
        bar.width = this.clickRedNumber >= 6 ? 16 * 6 : this.clickRedNumber * 16;
        // 当天首次点击
        if (cc.Tools.userInfo.is_day_first_click_award) {
            var sendData = {};
            cc.Tools.sendRequest("FirstClickAward", "POST", sendData).then(function (res) {
                cc.Tools.userInfo.is_day_first_click_award = false;
                _this.showPopDeleteLayer(1, 1);
            });
            return;
        }
        // 
        if (!this.startClickTime) {
            this.startClickTime = new Date().getTime();
        }
        else {
            var newTime = new Date().getTime();
            var dt = newTime - this.startClickTime;
            this.clickRedArr.push(dt);
            this.startClickTime = newTime;
        }
        if (this.clickRedArr.length === 3) {
            // 当累计三次之后就行运算 当值小于800 说明此时连点了3次 并播放激励视频
            var total = this.clickRedArr.reduce(function (acc, cur) { return acc + cur; }, 0);
            if (total < 800) {
                // 播放激励视频
                this.clickRedArr = [];
                this.startClickTime = 0;
                if (this.clickRedNumber < 6) {
                    cc.Tools.showTips(this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
                        CocosBridge_1.default.JSCallNative("showRewardVideoAd", "7");
                    });
                    return;
                }
            }
            else {
                this.clickRedArr.shift();
            }
        }
        if (this.clickRedNumber >= 6) {
            var sendData = {};
            cc.Tools.sendRequest("ClickAwardStat", "GET", sendData).then(function (res) {
                _this.canClickRed = false;
                if (res.data.free_times) {
                    var sendData_1 = {
                        type: 1,
                        ts: new Date().getTime()
                    };
                    cc.Tools.sendRequest("NewAward", "POST", sendData_1).then(function (res) {
                        _this.showTicketLayer({ ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 1 });
                        _this.clickRedNumber = 0;
                        bar.width = _this.clickRedNumber >= 6 ? 16 * 6 : _this.clickRedNumber * 16;
                    });
                }
                else {
                    _this.showPopDeleteLayer(1, 1);
                    _this.clickRedNumber = 0;
                    bar.width = _this.clickRedNumber >= 6 ? 16 * 6 : _this.clickRedNumber * 16;
                }
            });
        }
    };
    Main.prototype.canClickRedFunc = function () {
        this.canClickRed = true;
    };
    Main.prototype.touchGround = function (event) {
        if (this.lock) {
            return;
        }
        cc.audioEngine.play(this.effectAudio[0], false, 1);
        this.countTime = new Date().getTime();
        var windowSize = cc.winSize;
        var x = event.getLocationX();
        var y = event.getLocationY();
        this.Delete_num = 0;
        this.clickPos = cc.v3(x, y);
        if (y > windowSize.height / 2 - 370 - this.vh && y < windowSize.height / 2 + 370 - this.vh) {
            var i = this.ToIJ(x, y).x;
            var j = this.ToIJ(x, y).y;
            this.Delete_num = 0;
            this.deletePosArr = [];
            var color = this.a[i][j];
            this.lock = true;
            this.Touch_block(i, j, this.a[i][j]);
            // todo
            if (this.Delete_num === 1) {
                this.a[i][j] = color;
                this.lock = false;
                return;
            }
            else {
                this.handleDeleteBlock(false);
            }
        }
    };
    //设置scoreinfo
    Main.prototype.setScoreInfo = function (score) {
        var scoreNode = this.scoreInfo.getChildByName("score");
        var scoreLbl = scoreNode.getChildByName("text").getComponent(cc.Label);
        scoreLbl.string = score + "分";
        //加进度条 进度条满分6000
        var progressBar = this.scoreInfo.getChildByName("progress").getComponent(cc.ProgressBar);
        //进度条大小取值0-1 为一位小数
        var val = (Math.floor(score * 100 / 6000)) / 100 > 1 ? 1 : (Math.floor(score * 100 / 6000)) / 100;
        // progressBar.progress = val
        // scoreNode.x = -150+390*val;
        cc.tween(progressBar).to(0.1, { progress: val }).start();
        cc.tween(scoreNode).to(0.1, { x: -150 + 390 * val }).start();
        //根据score判断星数
        for (var i = 1; i <= 3; i++) {
            var star = this.scoreInfo.getChildByName("star_" + i);
            var activeNode = star.getChildByName("active");
            var unActiveNode = star.getChildByName("unActive");
            unActiveNode.active = true;
            activeNode.active = false;
            if (score > 3000 * (i - 1)) {
                activeNode.active = true;
            }
        }
    };
    /**
     * 初始化关卡
     */
    Main.prototype.init = function () {
        this.ground.on(cc.Node.EventType.TOUCH_START, this.touchGround, this);
        this.curScore = 0;
        this.clickOnce = true;
        this.addTicket = 0;
        var levelLbl = this.scoreInfo.getChildByName("text").getComponent(cc.Label);
        levelLbl.string = "\u5173\u5361\uFF1A" + cc.Tools.userInfo.level;
        this.setScoreInfo(this.curScore);
        this.background.destroyAllChildren();
        this.blockBackground.destroyAllChildren();
        var blockNullColor = "#38537E";
        var _arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var _arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var _newArr = [];
        for (var i = 0; i < 2; i++) {
            var key = [];
            var len1 = _arr1.length;
            var val1 = Math.floor(Math.random() * len1);
            key.push(_arr1[val1]);
            cc.Tools.remove(_arr1, _arr1[val1]);
            var len2 = _arr2.length;
            var val2 = Math.floor(Math.random() * len2);
            key.push(_arr2[val2]);
            cc.Tools.remove(_arr2, _arr2[val2]);
            _newArr.push(key);
        }
        for (var i = 0; i < 10; i++) {
            this.a[i] = [];
            this.b[i] = [];
            for (var j = 0; j < 10; j++) {
                var special = false;
                for (var k = 0; k < _newArr.length; k++) {
                    var _x = _newArr[k][0];
                    var _y = _newArr[k][1];
                    if (i === _x && j === _y) {
                        special = true;
                        cc.Tools.remove(_newArr, _newArr[k]);
                    }
                }
                //    this.a[i][j] = newArr[Math.ceil(Math.random() * this.difficulty) - 1]
                this.a[i][j] = Math.ceil(Math.random() * this.difficulty);
                var blockNull = cc.instantiate(this.blockNull);
                blockNull.parent = this.blockBackground || this.node;
                blockNull.setPosition(this.ToXY(i, j));
                blockNull.color = new cc.Color().fromHEX(blockNullColor);
                if (blockNullColor === "#38537E") {
                    blockNullColor = "#344F7A";
                }
                else {
                    blockNullColor = "#38537E";
                }
                var node = null;
                switch (this.a[i][j]) {
                    case 1:
                        node = cc.instantiate(this.red);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 2:
                        node = cc.instantiate(this.green);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 3:
                        node = cc.instantiate(this.yellow);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 4:
                        node = cc.instantiate(this.blue);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 5:
                        node = cc.instantiate(this.pink);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                }
                this.b[i][j] = node;
                if (special) {
                    var pop = cc.instantiate(this.pop_red);
                    pop.getComponent(cc.Sprite).spriteFrame = this.tiger[this.a[i][j] - 1];
                    node.addChild(pop);
                    node.special = true;
                }
            }
            if (blockNullColor === "#344F7A") {
                blockNullColor = "#38537E";
            }
            else {
                blockNullColor = "#344F7A";
            }
        }
    };
    Main.prototype.ToXY = function (x, y) {
        return cc.v2(-(370 - (36 + y * 74)), 370 - (36 + x * 74));
    };
    Main.prototype.ToIJ = function (i, j) {
        var windowSize = cc.winSize;
        if (j < windowSize.height / 2 - 370 - this.vh || j > windowSize.height / 2 + 370 - this.vh) {
            return;
        }
        else {
            i = Math.floor((i - this.difficulty) / 74);
            j = Math.floor((windowSize.height / 2 + 375 - this.vh - j) / 74);
            return {
                x: j,
                y: i
            };
        }
    };
    Main.prototype.goodFunction = function (num) {
        if (num === 2) {
            cc.audioEngine.play(this.effectAudio[5], false, 1);
        }
        if (num === 3) {
            cc.audioEngine.play(this.effectAudio[6], false, 1);
        }
        if (num === 4) {
            cc.audioEngine.play(this.effectAudio[7], false, 1);
        }
        if (num === 5) {
            cc.audioEngine.play(this.effectAudio[8], false, 1);
        }
        if (num >= 5 && num < 7) {
            cc.audioEngine.play(this.effectAudio[9], false, 1);
            var good_1 = cc.instantiate(this.good);
            this.background.addChild(good_1);
            cc.tween(good_1).by(1, { y: 200 }).call(function () {
                good_1.destroy();
            }).start();
        }
        if (num >= 7 && num < 9) {
            cc.audioEngine.play(this.effectAudio[10], false, 1);
            var great_1 = cc.instantiate(this.great);
            this.background.addChild(great_1);
            cc.tween(great_1).by(0.5, { y: 200 }).call(function () {
                great_1.destroy();
            }).start();
        }
        if (num >= 9 && num < 12) {
            cc.audioEngine.play(this.effectAudio[11], false, 1);
            var excellent_1 = cc.instantiate(this.excellent);
            this.background.addChild(excellent_1);
            cc.tween(excellent_1).by(0.5, { y: 200 }).call(function () {
                excellent_1.destroy();
            }).start();
        }
        if (num >= 12 && num < 15) {
            cc.audioEngine.play(this.effectAudio[12], false, 1);
            var amazing_1 = cc.instantiate(this.amazing);
            this.background.addChild(amazing_1);
            cc.tween(amazing_1).by(0.5, { y: 200 }).call(function () {
                amazing_1.destroy();
            }).start();
        }
        if (num >= 15) {
            cc.audioEngine.play(this.effectAudio[13], false, 1);
            var unbelievable_1 = cc.instantiate(this.unbelievable);
            this.background.addChild(unbelievable_1);
            cc.tween(unbelievable_1).by(0.5, { y: 200 }).call(function () {
                unbelievable_1.destroy();
            }).start();
        }
    };
    Main.prototype.Delete_block = function () {
        for (var j = 0; j < 10; j++) {
            var num = 0;
            for (var i = 9; i >= 0; i--) {
                if (this.a[i][j] > 0 && num > 0) {
                    var action_1 = cc.moveBy(0.2, 0, -num * 74);
                    this.b[i][j].runAction(action_1);
                    // cc.tween(this.b[i][j]).by(0.3, { position: cc.v2(0, -num * 74) }).start();
                    this.a[i + num][j] = this.a[i][j];
                    this.a[i][j] = 0;
                    this.b[i + num][j] = this.b[i][j];
                    this.b[i][j] = null;
                    continue;
                }
                if (this.a[i][j] == 0) {
                    num = num + 1;
                }
            }
        }
        var _count = 0;
        for (var j = 0; j < 10; j++) {
            if (this.a[9][j] > 0 && _count > 0) {
                for (var i = 0; i < 10; i++) {
                    if (this.a[i][j] > 0) {
                        // cc.tween(this.b[i][j]).by(0.3, { position: cc.v2(-count * 74, 0) }).start();
                        var action = cc.moveBy(0.2, -_count * 74, 0);
                        this.b[i][j].runAction(action);
                        this.a[i][j - _count] = this.a[i][j];
                        this.a[i][j] = 0;
                        this.b[i][j - _count] = this.b[i][j];
                        this.b[i][j] = null;
                    }
                }
                continue;
            }
            if (this.a[9][j] == 0) {
                _count++;
            }
        }
    };
    // 老写法
    Main.prototype.Touch_block = function (i, j, k) {
        if (this.a[i][j] == k && k > 0) {
            this.a[i][j] = 0;
            this.Delete_num++;
            var obj = {
                "i": i,
                "j": j,
                "k": k
            };
            //delete
            var arr = [];
            arr.push(obj);
            this.splitToArr(arr);
        }
    };
    // 分成数组
    Main.prototype.splitToArr = function (arr) {
        var _arr = [];
        if (arr.length > 0) {
            this.deletePosArr.push(arr);
            for (var t = 0; t < arr.length; t++) {
                var data = arr[t];
                var i = data.i;
                var j = data.j;
                var k = data.k;
                if (i != 0) {
                    if (this.a[i - 1][j] == k && k > 0) {
                        this.a[i - 1][j] = 0;
                        this.Delete_num++;
                        var obj = {
                            "i": i - 1,
                            "j": j,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
                if (i != 9) {
                    if (this.a[i + 1][j] == k && k > 0) {
                        this.a[i + 1][j] = 0;
                        this.Delete_num++;
                        var obj = {
                            "i": i + 1,
                            "j": j,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
                if (j != 0) {
                    if (this.a[i][j - 1] == k && k > 0) {
                        this.a[i][j - 1] = 0;
                        this.Delete_num++;
                        var obj = {
                            "i": i,
                            "j": j - 1,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
                if (j != 9) {
                    if (this.a[i][j + 1] == k && k > 0) {
                        this.a[i][j + 1] = 0;
                        this.Delete_num++;
                        var obj = {
                            "i": i,
                            "j": j + 1,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
            }
            this.splitToArr(_arr);
        }
    };
    // 将要delete的数据进行处理
    Main.prototype.handleDeleteBlock = function (isOver) {
        var _this = this;
        //计数
        if (!this.deletePosArr.length) {
            this.lock = false;
            return;
        }
        this._count = 0;
        this.isOverGame = isOver;
        this.schedule(this.deleteBlockCb, 0.016, this.deletePosArr.length - 1);
        if (!isOver) {
            //向服务器发送激活
            var isActive = cc.sys.localStorage.getItem("active");
            if (!isActive) {
                cc.Tools.sendRequest("UserLive", "POST", {
                    "ts": new Date().getTime()
                }).then(function (res) {
                    cc.sys.localStorage.setItem("active", true);
                    console.log("cocos----激活成功");
                });
            }
            // 增加金钱特效
            var addInfo = this.cashInfo.getChildByName("add_info");
            this.addTicket += this.Delete_num;
            var num = addInfo.getChildByName("num").getComponent(cc.Label);
            num.string = "" + this.Delete_num;
            addInfo.stopAllActions();
            addInfo.opacity = 0;
            addInfo.y = -40;
            addInfo.runAction(cc.sequence(cc.fadeIn(0.1), cc.moveBy(0.5, 0, 40), cc.fadeOut(0.5)));
            this.showPacketAnim(3, 0.01, 100, this.clickPos, this.cashInfo, function () {
                _this.cashInfo.getChildByName("text").getComponent(cc.Label).string = cc.Tools.userInfo.amount + _this.addTicket;
            });
        }
    };
    Main.prototype.deleteBlockCb = function () {
        // let count = 0;
        var arr = this.deletePosArr[this._count];
        for (var t = 0; t < arr.length; t++) {
            var data = arr[t];
            var i = data.i;
            var j = data.j;
            var k = data.k;
            var node = cc.instantiate(this.desEffect);
            node.parent = this.background || this.node;
            node.setPosition(this.ToXY(i, j));
            var CustomParticle = node.getComponent(cc.ParticleSystem);
            CustomParticle.spriteFrame = this.liziBlock[k - 1];
            CustomParticle.resetSystem();
            if (this.b[i][j].special) {
                this.special = true;
            }
            this.b[i][j].destroy();
            this.b[i][j] = null;
        }
        if (this._count === this.deletePosArr.length - 1) {
            this.afterDeleteBlock();
        }
        this._count++;
    };
    Main.prototype.afterDeleteBlock = function () {
        var _this = this;
        this.Delete_block();
        this.unschedule(this.deleteBlockCb);
        // 获取分数 getScore
        if (this.isOverGame) {
            this.setScore(true);
            return;
        }
        else {
            this.setScore(false);
        }
        if (this.clickOnce) {
            this.clickOnce = false;
            this.floaterMove();
        }
        if (this.special) {
            this.showPopDeleteLayer(2, 9);
            this.special = false;
            return;
        }
        if (this.Delete_num >= 12) {
            this.showPopDeleteLayer(2, 9);
        }
        else {
            var rdm = Math.floor(Math.random() * 4 + 5);
            if (this.Delete_num >= rdm) {
                this.clickNumber++;
                if (this.clickNumber >= 5) {
                    this.clickNumber = 0;
                    this.showPopDeleteLayer(2, 9);
                }
                else {
                    this.scheduleOnce(function () {
                        _this.lock = false;
                    }, 0.5);
                }
            }
            else {
                this.scheduleOnce(function () {
                    _this.lock = false;
                }, 0.5);
            }
        }
    };
    // 通过k的值返回色值
    Main.prototype.getColorBlock = function (k) {
        var color = null;
        switch (k) {
            case 1:
                // red
                color = "#DC5672";
                break;
            case 2:
                // green
                color = "#6EC46C";
                break;
            case 3:
                // pink
                color = "#BC63F0";
                break;
            case 4:
                //blue
                color = "#4CA8EA";
                break;
            case 5:
                // yellow
                color = "#E7CB55";
                break;
        }
        return color;
    };
    Main.prototype.setScore = function (isClear) {
        var _this = this;
        if (isClear) {
            cc.tween(this.node).delay(0.5).call(function () {
                _this.updateLevel();
            }).start();
            this.scheduleOnce(function () {
                _this.showPopSuccessLayer();
            }, 2);
            return;
        }
        else {
            // 如果当前没有方块
            var iskong = true;
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    if (this.a[i][j]) {
                        iskong = false;
                    }
                }
            }
            if (iskong) {
                cc.tween(this.node).delay(0.5).call(function () {
                    _this.updateLevel();
                }).start();
                this.scheduleOnce(function () {
                    _this.showPopSuccessLayer();
                }, 2);
                return;
            }
        }
        if (this.isEnd()) {
            // 增加积分 积分算法是
            // 剩余的方块
            this.deletePosArr = [];
            var arr_1 = [];
            this.lock = true;
            this.ground.off(cc.Node.EventType.TOUCH_START, this.touchGround, this);
            this.scheduleOnce(function () {
                for (var i = 0; i < 10; i++) {
                    for (var j = 0; j < 10; j++) {
                        var k = _this.a[i][j];
                        if (k) {
                            _this.a[i][j] = 0;
                            var obj = {
                                "i": i,
                                "j": j,
                                "k": k
                            };
                            arr_1.push(obj);
                        }
                    }
                }
                _this.deletePosArr.push(arr_1);
                var len = _this.Delete_num - 1;
                var score = _this.targetScore - Math.pow(len, 2) * 10;
                _this.curScore += score;
                _this.setScoreInfo(_this.curScore);
                _this.handleDeleteBlock(true);
            }, 1);
        }
        else {
            // 增加积分 积分算法是 (消除数-1）的平方*10
            var len = this.Delete_num - 1;
            var score = Math.pow(len, 2) * 10;
            this.curScore += score;
            this.setScoreInfo(this.curScore);
            this.goodFunction(this.Delete_num);
        }
    };
    Main.prototype.updateLevel = function () {
        var _this = this;
        // 像服务器发请求过关
        var sendData = {
            "score": this.curScore,
            "ts": new Date().getTime(),
            "level": cc.Tools.userInfo.level,
            "award": this.addTicket,
        };
        var data = cc.Tools.createSignData(sendData);
        cc.Tools.sendRequest("UpdateLevel", "POST", data).then(function (res) {
            // 刷新一下cc.Tools.userInfo.new_free_level_times
            cc.Tools.userInfo.new_free_level_times = res.data.new_free_level_times;
            cc.Tools.showTips(_this.node);
        });
    };
    Main.prototype.isEnd = function () {
        var arr = this.a;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var val = this.a[i][j];
                var left = -1;
                var right = -1;
                var up = -1;
                var down = -1;
                if (val) {
                    // 左右
                    if (j - 1 >= 0) {
                        if (this.a[i][j - 1]) {
                            left = this.a[i][j - 1];
                        }
                    }
                    if (j + 1 <= 9) {
                        if (this.a[i][j + 1]) {
                            right = this.a[i][j + 1];
                        }
                    }
                    if (i - 1 >= 0) {
                        if (this.a[i - 1][j]) {
                            up = this.a[i - 1][j];
                        }
                    }
                    if (i + 1 <= 9) {
                        if (this.a[i + 1][j]) {
                            down = this.a[i + 1][j];
                        }
                    }
                    if (val === left || val === right || val === up || val === down) {
                        return false;
                    }
                }
                else {
                    continue;
                }
            }
        }
        return true;
    };
    // 让浮球显示并浮动 点击 看激励视频
    Main.prototype.floaterMove = function () {
        var floaterLayer = this.content.getChildByName("floater_layer");
        var val = cc.sys.localStorage.getItem("showBtn");
        if (val == 100) {
            if (floaterLayer.active === false) {
                floaterLayer.active = true;
            }
            for (var i = 1; i <= 3; i++) {
                var floater = floaterLayer.getChildByName("floater_" + i);
                floater.active = true;
                cc.Tools.popAnim(floater, 10);
                floater.on(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
            }
        }
    };
    // 专属浮球的事件 点击浮球观看视频 之后浮球消失并且清除事件
    Main.prototype.clickFloate = function (e) {
        // 点击加锁
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node, "<b><color=#ffffff>\u70B9\u51FB\u592A\u9891\u7E41</c></b>");
            return;
        }
        else {
            cc.Tools.lock = true;
            setTimeout(function () {
                cc.Tools.lock = false;
            }, 3000);
        }
        var target = e.target;
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_Floatredbag_1" });
        CocosBridge_1.default.JSCallNative("showRewardVideoAd", "2");
        // this.scheduleOnce(() => {
        target.active = false;
        // target.off(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
        // target.destroy();
        // target = null;
        // }, 1)
    };
    // update (dt) {}
    /**
    * 金币飞溅
    *
    * @param {cc.Vec2} c 实例数量
    * @param {number} nt 实例时间
    * @param {number} [randomScope=80] 等分点的随机波动范围
    * @param {number} startPos 开始位置
    * @param {number} endNode 结束节点
    */
    Main.prototype.showPacketAnim = function (c, nt, randomScope, startPos, endNode, call) {
        var _this = this;
        if (randomScope === void 0) { randomScope = 80; }
        if (startPos === void 0) { startPos = cc.v3(0, 0); }
        if (call === void 0) { call = null; }
        cc.audioEngine.play(this.effectAudio[14], false, 1);
        var newTime = nt;
        var tempPlayer = this.node.convertToNodeSpaceAR(startPos);
        var endP = endNode.getPosition();
        endP = this.node.convertToNodeSpaceAR(endNode.parent.convertToWorldSpaceAR(endP));
        var _count = 0;
        this.schedule(function () {
            var pre = cc.instantiate(_this.packet);
            pre.parent = _this.node;
            pre.setPosition(tempPlayer);
            var rannumx = cc.Tools.createRandom(-randomScope, randomScope); // (this.random2 - this.random1 + 1) + this.random1
            var rannumy = cc.Tools.createRandom(-randomScope, randomScope); //(this.random2 - this.random1 + 1) / 1.5 + this.random1 / 1.5)
            cc.tween(pre)
                .by(0.4, { position: cc.v3(rannumx, rannumy) }, { easing: 'quadOut' })
                .delay(0.3)
                .to(0.4, { position: cc.v3(endP) })
                .call(function () {
                pre.destroy();
                _count++;
                if (_count == c) {
                    // this.closeView()
                    // console.log("动画完毕")
                }
            })
                .start();
        }, newTime, c);
        this.scheduleOnce(function () {
            call && call();
        }, 2);
    };
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "packet", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "blockNull", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "red", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "green", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "yellow", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "blue", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "pink", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "good", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "great", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "excellent", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "amazing", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "unbelievable", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "desEffect", void 0);
    __decorate([
        property([cc.AudioClip])
    ], Main.prototype, "effectAudio", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Main.prototype, "popDeleteType", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Main.prototype, "liziBlock", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Main.prototype, "tiger", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "pop_red", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tcG9uZW50L01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUUvQywrQkFBK0I7QUFDekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO0FBWXJCO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBcW9EQztRQXBvREcscUJBQXFCO1FBQ3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHFCQUFxQjtRQUNyQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIscUJBQXFCO1FBQ3JCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLHFCQUFxQjtRQUNyQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFjLEdBQVksSUFBSSxDQUFD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QUFDLFdBQVcsQ0FBQyxDQUFDO3VDQUNoQjtJQUVYO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUE5RFQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXFvRHhCO0lBQUQsV0FBQztDQXJvREQsQUFxb0RDLENBcm9EaUMsRUFBRSxDQUFDLFNBQVMsR0Fxb0Q3QztrQkFyb0RvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvY29zQnJpZGdlIGZyb20gXCIuLi9Ub29scy9Db2Nvc0JyaWRnZVwiO1xuXG4vLyBpbXBvcnQgVG9vbHMgZnJvbSBcIi4vVG9vbHNcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgc2VsZjogYW55ID0gbnVsbDtcbmludGVyZmFjZSB0aWNrZXRJbmZvIHtcbiAgICAvLyDliLjnmoTmlbDph49cbiAgICB0aWNrZXQ6IG51bWJlcjtcbiAgICAvLyDpop3lpJbnmoTliLhcbiAgICBhZGQ6IG51bWJlcjtcbiAgICAvLyDop4bpopHnsbvlnotcbiAgICB2aWRlb1R5cGU6IG51bWJlcjtcbiAgICAvL+adpeiHquWHoOe6p+eVjOmdolxuICAgIHR5cGU6IG51bWJlclxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb2NrQmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBjYXNoSW5mbzogY2MuTm9kZSA9IG51bGw7XG4gICAgdXNlckluZm86IGNjLk5vZGUgPSBudWxsO1xuICAgIHNjb3JlSW5mbzogY2MuTm9kZSA9IG51bGw7XG4gICAgYmFycmFnZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBnZXRDYXNoTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHNldHRpbmdMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgc2F2ZUNhc2hMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG90dGVyeUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdGVhbExheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBzaWduTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcFN1Y2Nlc3NMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcG9wRGVsZXRlTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcE5ld0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICB0aWNrZXRMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgdGlja2V0VGVuTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcFN1cGVyTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcFNlY3JldExheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwb3BTdGVhbE1hcmtMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwYWNrZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBibG9ja051bGw6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICByZWQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBncmVlbjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHllbGxvdzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJsdWU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwaW5rOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ29vZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdyZWF0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZXhjZWxsZW50OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYW1hemluZzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHVuYmVsaWV2YWJsZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGRlc0VmZmVjdDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXG4gICAgZWZmZWN0QXVkaW8gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwb3BEZWxldGVUeXBlID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgbGl6aUJsb2NrID0gW11cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICB0aWdlciA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcG9wX3JlZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBwcml2YXRlIGEgPSBbXTtcbiAgICBwcml2YXRlIGIgPSBbXTtcbiAgICBwcml2YXRlIGRlbGV0ZVBvc0FyciA9IFtdO1xuICAgIHByaXZhdGUgZGlmZmljdWx0eSA9IDM7XG4gICAgcHJpdmF0ZSBEZWxldGVfbnVtID0gMDtcbiAgICBwcml2YXRlIHZoID0gMTEwO1xuICAgIHByaXZhdGUgbG9jayA9IGZhbHNlO1xuICAgIHByaXZhdGUgdGFyZ2V0U2NvcmUgPSAxMDAwO1xuICAgIHByaXZhdGUgY3VyU2NvcmUgPSAwO1xuICAgIHByaXZhdGUgbGV2ZWwgPSAwO1xuICAgIHByaXZhdGUgY2xpY2tSZWROdW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2xpY2tPbmNlID0gdHJ1ZTtcbiAgICBwcml2YXRlIGNsaWNrTnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvdW50VGltZSA9IDA7XG4gICAgcHJpdmF0ZSBjYW5DbGlja1JlZCA9IHRydWU7XG4gICAgcHJpdmF0ZSBjbGlja1JlZEFyciA9IFtdO1xuICAgIHByaXZhdGUgc3RhcnRDbGlja1RpbWUgPSAwO1xuICAgIHByaXZhdGUgaXNPdmVyR2FtZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2NvdW50ID0gMDtcbiAgICBwcml2YXRlIHNob3dTZWNyZXRUaW1lcyA9IDA7XG4gICAgcHJpdmF0ZSBjbGlja1BvcyA9IGNjLnYzKDAsIDApO1xuICAgIHByaXZhdGUgYWRkVGlja2V0ID0gMDtcbiAgICBwcml2YXRlIGJhcnJhZ2VBcnIgPSBbXTtcbiAgICBwcml2YXRlIGJhcnJhZ2U6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBiYXJyYWdlU3BlZWQgPSAyO1xuICAgIHByaXZhdGUgYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIGJhcnJhZ2VMb2NrID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdXBlclRpbWUgPSAwO1xuICAgIHByaXZhdGUgc3BlY2lhbCA9IGZhbHNlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW5Y+C5pWwXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiaW5pdFwiLCB0aGlzLnJlZnJlc2hVc2VySW5mbywgdGhpcyk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiZ2V0VGlja2V0XCIsIHRoaXMuc2hvd1RpY2tldExheWVyLCB0aGlzKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQub24oXCJjYXNoXCIsIHRoaXMuc2hvd0dldENhc2hMYXllciwgdGhpcyk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiY2xpY2tSZWRcIiwgdGhpcy5jYW5DbGlja1JlZEZ1bmMsIHRoaXMpO1xuICAgICAgICBjYy5Ub29scy5FdmVudC5vbihcInNob3dQYWNrZXRcIiwgdGhpcy5zaG93UGFja2V0LCB0aGlzKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQub24oXCJyZWZyZXNoV2FsbGV0XCIsIHRoaXMucmVmcmVzaFdhbGxldCwgdGhpcyk7Ly/liLfmlrDph5HpkrFcbiAgICAgICAgLy/lvZPop4bpopHnvJPlrZjlpb3pgJrnn6XmiYDmnInmjInpkq7lj6/ku6XngrnkuoYg5ZCm5YiZ5LiN5Y+v54K55Ye7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwib2JzZXJ2ZXJBbGxCdG5cIiwgdGhpcy5vYnNlcnZlckFsbEJ0biwgdGhpcyk7Ly/liLfmlrDph5HpkrFcbiAgICAgICAgY2MuVG9vbHMuYWRUaW1lcyA9IDA7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjYy5maW5kKFwiQ2FudmFzL2NvbnRlbnRcIik7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ3JvdW5kLmdldENoaWxkQnlOYW1lKFwiYmxvY2tDb2xvdXJcIik7XG4gICAgICAgIHRoaXMuYmxvY2tCYWNrZ3JvdW5kID0gdGhpcy5ncm91bmQuZ2V0Q2hpbGRCeU5hbWUoXCJibG9ja051bGxcIik7XG4gICAgICAgIGxldCBpbmZvTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbmZvX2xheWVyXCIpO1xuICAgICAgICB0aGlzLmNhc2hJbmZvID0gaW5mb0xheWVyLmdldENoaWxkQnlOYW1lKFwiY2FzaF9pbmZvXCIpO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gaW5mb0xheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9pbmZvXCIpO1xuICAgICAgICB0aGlzLnNjb3JlSW5mbyA9IGluZm9MYXllci5nZXRDaGlsZEJ5TmFtZShcInNjb3JlX2luZm9cIik7XG4gICAgICAgIHRoaXMuYmFycmFnZUxheWVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFycmFnZV9sYXllclwiKTtcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuaW5pdFVzZXJJbmZvKCk7XG4gICAgICAgIHRoaXMuc2hpZWxkQnRuKCk7XG4gICAgICAgIC8v6I635Y+W5b2T5YmN5omL5py65piv5ZCm5pyJ5LiN5q2j5bi45bqU55SoXG4gICAgICAgIHRoaXMuZ2V0SWxsZWdhbGl0eUFwcCgpO1xuICAgICAgICAvL+WIt+aWsOS4gOS4i+W9k+WJjeeahOmHkemSseaVsOmHj1xuICAgICAgICB0aGlzLnJlZnJlc2hXYWxsZXQoKTtcbiAgICAgICAgbGV0IGJveCA9IHRoaXMuc2NvcmVJbmZvLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xuICAgICAgICBjYy5Ub29scy5icmVhdGhlQW5pbShib3gpO1xuICAgICAgICBib3gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQb3BEZWxldGVMYXllcigxLCAxMCk7XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL2JhcnJhZ2UnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBiYXJyYWdlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmJhcnJhZ2VMYXllci5hZGRDaGlsZChiYXJyYWdlKTtcbiAgICAgICAgICAgICAgICBiYXJyYWdlLnggPSAxMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFycmFnZSA9IGJhcnJhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRCYXJyYWdlSW5mbyh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEpXG4gICAgICAgIC8v6YCA5Ye65ri45oiP55qE5pe25YCZ6K6w5b2V5LiA5LiLXG4gICAgICAgIC8vIFxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tRVZFTlRfSElERS0t6YCA5Ye65ri45oiPXCIpO1xuICAgICAgICAgICAgLy/lvZPliY3orrDlvZXkuIDkuKrml7bpl7RcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0RXhpdFwiLCBNYXRoLmZsb29yKGRhdGUgLyAxMDAwKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5CdXR0b24ucHJvdG90eXBlW1wiX29uVG91Y2hCZWdhblwiXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmludGVyYWN0YWJsZSB8fCAhdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShzZWxmLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHjeWGmeS7peWJjeeahGJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMSx7c2NhbGU6MS4xfSkuc3RhcnRcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+ebkeWQrOaJgOacieeahOinhumikee8k+WtmC0tLT7lpoLmnpzmsqHmnInnvJPlrZjlpb0tLeaIluiAhee8k+WtmOWksei0pS0t5omA5pyJ6KeG6aKR5oyJ6ZKu572u54GwLS3nvJPlrZjmiJDlip/lj5jkuq5cbiAgICBvYnNlcnZlckFsbEJ0bihjbG9zZUJ0bjpib29sZWFuKTp2b2lke1xuICAgICAgICBcbiAgICB9XG4gICAgLy/ojrflj5bpnZ7ms5VBcHBcbiAgICBnZXRJbGxlZ2FsaXR5QXBwKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAvL+iOt+WPlumdnuezu+e7n+W6lOeUqOS/oeaBr+WIl+ihqFxuICAgICAgICAgICAgbGV0IHVuU3lzTGlzdDogc3RyaW5nID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZ2V0SW5zdGFsbEFwcExpc3RcIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLXVuU3lzTGlzdC0tLVwiLHVuU3lzTGlzdC5sZW5ndGgrXCItLS0t57G75Z6LLS0tXCIrdHlwZW9mKHVuU3lzTGlzdCkpO1xuICAgICAgICAgICAgLy8gbGV0IHVuU3lzTGlzdCA9IGBgK1t7XCJhcHBOYW1lXCI6XCLojaPogIDkv7HkuZDpg6gxXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmhvbm9yLmNsdWJcIn0se1wiYXBwTmFtZVwiOlwi55av54uC5LmQ6YCN6YGlXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmdhbWUuZmtseHlcIn0se1wiYXBwTmFtZVwiOlwidHRfYWRfbWVkaWF0aW9uXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmhlYWRlci5hcHAudW50ZXh0XCJ9LHtcImFwcE5hbWVcIjpcIuW+ruS/oVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS50ZW5jZW50Lm1tXCJ9LHtcImFwcE5hbWVcIjpcIueZvuW6plwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5iYWlkdS5zZWFyY2hib3hcIn0se1wiYXBwTmFtZVwiOlwi6I2j6ICA5ZWG5Z+OXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmhpaG9ub3Iudm1hbGxcIn0se1wiYXBwTmFtZVwiOlwiUVHmtY/op4jlmahcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20udGVuY2VudC5tdHRcIn0se1wiYXBwTmFtZVwiOlwi5ou85aSa5aSaXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLnh1bm1lbmcucGluZHVvZHVvXCJ9LHtcImFwcE5hbWVcIjpcIuS7iuaXpeWktOadoVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5zcy5hbmRyb2lkLmFydGljbGUubmV3c1wifSx7XCJhcHBOYW1lXCI6XCJRUVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS50ZW5jZW50Lm1vYmlsZXFxXCJ9LHtcImFwcE5hbWVcIjpcIuWIt+acuueyvueBtei/nuaOpee7hOS7tlwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5zaHVhbWUuc3ByaXRlXCJ9LHtcImFwcE5hbWVcIjpcIueZvuW6puWcsOWbvlwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5iYWlkdS5CYWlkdU1hcFwifSx7XCJhcHBOYW1lXCI6XCLljrvlk6rlhL/ml4XooYxcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uUXVuYXJcIn0se1wiYXBwTmFtZVwiOlwi5raI5raI5Y+Y6aaW5a+MXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLnpoaW1hLnh4YnNmXCJ9LHtcImFwcE5hbWVcIjpcIuiKnem6u+a2iOa2iOS5kFwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS56aGltYS56bXh4bFwifV1cbiAgICAgICAgICAgIC8v6I635Y+W57O757uf5bqU55So5L+h5oGv5YiX6KGoXG4gICAgICAgICAgICBsZXQgU3lzTGlzdDogc3RyaW5nID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZ2V0U3lzdGVtQXBwTGlzdFwiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tU3lzTGlzdC0tLVwiLFN5c0xpc3QubGVuZ3RoK1wiLS0tLeexu+Weiy0tLVwiK3R5cGVvZihTeXNMaXN0KSk7XG4gICAgICAgICAgICAvLyBsZXQgU3lzTGlzdCA9IGBgK1t7XCJhcHBOYW1lXCI6XCLnsr7lk4HmjqjojZAxXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmh1YXdlaS5oaWZvbGRlclwifSx7XCJhcHBOYW1lXCI6XCJjb20uYW5kcm9pZC5jdHMucHJpdi5jdHNzaGltXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQuY3RzLnByaXYuY3Rzc2hpbVwifSx7XCJhcHBOYW1lXCI6XCLnm7jmnLpcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmNhbWVyYVwifSx7XCJhcHBOYW1lXCI6XCLnjqnmnLrmioDlt6dcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmFuZHJvaWQudGlwc1wifSx7XCJhcHBOYW1lXCI6XCJBbmRyb2lkIFNlcnZpY2VzIExpYnJhcnlcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uZ29vZ2xlLmFuZHJvaWQuZXh0LnNlcnZpY2VzXCJ9LHtcImFwcE5hbWVcIjpcIkh3U3luZXJneVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5odWF3ZWkuc3luZXJneVwifSx7XCJhcHBOYW1lXCI6XCLljY7kuLrmoYzpnaJcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmFuZHJvaWQubGF1bmNoZXJcIn0se1wiYXBwTmFtZVwiOlwi5Y2O5Li66Z+z5LmQXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQubWVkaWFjZW50ZXJcIn0se1wiYXBwTmFtZVwiOlwi6YCa6K+dL+S/oeaBr+WtmOWCqFwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5hbmRyb2lkLnByb3ZpZGVycy50ZWxlcGhvbnlcIn0se1wiYXBwTmFtZVwiOlwi6ZO26IGU5Y+v5L+h5pyN5Yqh5a6J5YWo57uE5Lu2XCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLnVuaW9ucGF5LnRzbXNlcnZpY2VcIn0se1wiYXBwTmFtZVwiOlwiVUVJbmZvQ2hlY2tcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmFuZHJvaWQuVUVJbmZvQ2hlY2tcIn0se1wiYXBwTmFtZVwiOlwi6YCa6K+d5b2V6Z+zXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQucGhvbmUucmVjb3JkZXJcIn0se1wiYXBwTmFtZVwiOlwi5pel5Y6G5a2Y5YKoXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQucHJvdmlkZXJzLmNhbGVuZGFyXCJ9XVxuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIHVuc3lzX2xpc3Q6IHVuU3lzTGlzdCxcbiAgICAgICAgICAgICAgICBzeXNfbGlzdDogU3lzTGlzdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLS1nZXRJbGxlZ2FsaXR5QXBwLS1cIiwgSlNPTi5zdHJpbmdpZnkoc2VuZERhdGEpKVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJVc2VyRGV2XCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tVXNlckRldi0tXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/ojrflj5ZhZOeahOS/oeaBr1xuICAgIGdldEFkKCkge1xuICAgICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyOiBudW1iZXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBtb250aDogbnVtYmVyID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5OiBudW1iZXIgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGRhdGVTdHI6IHN0cmluZyA9IHllYXIgKyBcIlwiICsgbW9udGggKyBcIlwiICsgZGF5O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlwiKVxuICAgICAgICBsZXQgbWFya0RhdGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXJrRGF0ZVwiKTtcbiAgICAgICAgaWYgKG1hcmtEYXRlICE9PSBkYXRlU3RyKSB7XG4gICAgICAgICAgICAvL+WmguaenOesrOS6jOWkqVxuICAgICAgICAgICAgY2MuVG9vbHMuZ2V0RnJlZXplKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZFRpbWVzXCIsIDApO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRUaW1lcyA9IDA7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYXJrRGF0ZVwiLCBkYXRlU3RyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkVGltZXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZFRpbWVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5LuK5aSp57Sv6K6h6KeC55yL6KeG6aKR5qyh5pWwPVwiLCBjYy5Ub29scy5hZC5hZFRpbWVzKTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJDb25mXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8v5aSn5bCP6KeG6aKRXG4gICAgICAgICAgICBjYy5Ub29scy5hZC5hZFNtYWxsID0gcmVzLmRhdGEuYWRfY29uZlswXS5hZF9wb3NpdGlvbl9pZDtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkQmlnID0gcmVzLmRhdGEuYWRfY29uZlsxXS5hZF9wb3NpdGlvbl9pZDtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkRGl2ID0gcmVzLmRhdGEuYWRfY29uZlswXS5lbmRfbnVtO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuY29uZmlnID0gcmVzLmRhdGEuYXdhcmRfbnVtX2NvbmY7XG4gICAgICAgICAgICBjYy5Ub29scy5hZC5jb25maWcuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIGlmIChhLm51bSA+IGIubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYS5udW0gPCBiLm51bSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChjYy5Ub29scy5hZC5hZFRpbWVzIDw9IGNjLlRvb2xzLmFkLmFkRGl2KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNjLlRvb2xzLmFkLmFkU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRQb3NJZCA9IGNjLlRvb2xzLmFkLmFkU21hbGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2MuVG9vbHMuYWQuYWRCaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRQb3NJZCA9IGNjLlRvb2xzLmFkLmFkQmlnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdEF3YXJkKCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5bm/5ZGKZXJyLS1cIiArIGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8v5Yik5pat5piv5ZCm5bGP6JS9XG4gICAgc2hpZWxkQnRuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvd0J0blwiKSkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3dCdG5cIik7XG4gICAgICAgICAgICBsZXQgYnRuTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbGF5ZXJcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gYnRuTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gdmFsID09IDEgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsID09IDEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0ZWFsTWFya0xheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIlJlZ2lvbkNvbmZcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/kuI3mmL7npLpcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hvd0J0blwiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bkxheWVyID0gdGhpcy5jb250ZW50LmdldENoaWxkQnlOYW1lKFwiYnRuX2xheWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG4gPSBidG5MYXllci5nZXRDaGlsZEJ5TmFtZShcImJ0bl9cIiArIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAvL+aYvuekulxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG93QnRuXCIsIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIC8v5pi+56S65paw5omL5aWW5Yqx55WM6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05ld0xheWVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5bGP6JS9ZXJyLS1cIiArIGVycik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dTdGVhbE1hcmtMYXllcigpIHtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLnBvcFN0ZWFsTWFya0xheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQcmVmYWIoJ1ByZWZhYi9zdGVhbE1hcmsnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5wb3BTdGVhbE1hcmtMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi5wb3BTdGVhbE1hcmtMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wU3RlYWxNYXJrTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+iOt+WPluW8ueW5leS/oeaBr1xuICAgIGdldEJhcnJhZ2VJbmZvKGlzRmlyc3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJUcmVuZFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIHNlbGYuYmFycmFnZUFyciA9IFsuLi5zZWxmLmJhcnJhZ2VBcnIsIC4uLml0ZW1zXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZi5iYXJyYWdlQXJyXCIsIHNlbGYuYmFycmFnZUFycik7XG4gICAgICAgICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gc2VsZi5iYXJyYWdlQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJyYWdlLmdldENvbXBvbmVudChcIkJhcnJhZ2VcIikuc2V0QmFycmFnZShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iYXJyYWdlTG9jayA9IGZhbHNlO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeW8ueW5lWVyci0tXCIgKyBlcnIpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFycmFnZU1vdmUgJiYgdGhpcy5iYXJyYWdlICYmIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3dCdG5cIikgPT0gMTAwKSB7XG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5zY29yZUluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XG4gICAgICAgICAgICB0aGlzLmJhcnJhZ2UueCAtPSB0aGlzLmJhcnJhZ2VTcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhcnJhZ2UueCA8IC03MDApIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHNlbGYuYmFycmFnZUFyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFycmFnZS5nZXRDb21wb25lbnQoXCJCYXJyYWdlXCIpLnNldEJhcnJhZ2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5iYXJyYWdlQXJyLmxlbmd0aCA8PSAwICYmICF0aGlzLmJhcnJhZ2VMb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJyYWdlTG9jayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRCYXJyYWdlSW5mbyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYm94LnggPCA3MDApIHtcbiAgICAgICAgICAgICAgICBib3gueCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3gueCA9IC03MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdXBlclRpbWUgPiAzMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUaW1lID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdXBlckxheWVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUaW1lICs9IGR0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYodGhpcy5zdXBlclRpbWU+NSl7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5pWw5pWwXG4gICAgKi9cbiAgICBpbml0U2h1U2h1KCkge1xuICAgICAgICAvLyDmlbDmlbDmiZPngrlcbiAgICAgICAgY2MuVG9vbHMuc2h1U2h1RG90KCk7XG4gICAgICAgIGNjLlRvb2xzLnNldERpc3RpbmN0SWQoKTtcbiAgICAgICAgY2MuVG9vbHMuc2V0VXNlcklkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICog5aSE55CG5bCP5pWw57K+5bqm6Zeu6aKYXG4gICAgKiBAcmV0dXJucyBcbiAgICAqL1xuICAgIGhhbmRsZU51bWJlcihudW1iKSB7XG4gICAgICAgIC8vIOWFiOiusuaVsOWtl+i9rOaNouaIkOWtl+espuS4slxuICAgICAgICBpZiAobnVtYikge1xuICAgICAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBudW1iO1xuICAgICAgICAgICAgbGV0IGtleSA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICBsZXQgbmV3S2V5ID0ga2V5WzBdICsgXCIuXCIgKyBrZXlbMV0uc2xpY2UoMCwgMik7XG4gICAgICAgICAgICByZXR1cm4gbmV3S2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWktOWDj1xuICAgICAqIEBwYXJhbSB1cmw65aS05YOPdXJsXG4gICAgICogQHBhcmFtIHZpcDpWaXDnrYnnuqdcbiAgICAqL1xuICAgIGFkZEF2YXRhcih1cmw6IHN0cmluZywgdmlwOiBudW1iZXIpIHtcbiAgICAgICAgLy8gY2MuVG9vbHMudXNlckluZm8ubmV4dF9ncmFkZV9yYXRlID0gMC41O1xuICAgICAgICBsZXQgYmFyOiBjYy5TcHJpdGUgPSBzZWxmLnVzZXJJbmZvLmdldENoaWxkQnlOYW1lKFwidmlwX2JhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgYmFyLmZpbGxSYW5nZSA9IGNjLlRvb2xzLnVzZXJJbmZvLm5leHRfZ3JhZGVfcmF0ZTtcbiAgICAgICAgbGV0IGF2YXRhckpzID0gc2VsZi51c2VySW5mby5nZXRDaGlsZEJ5TmFtZShcImF2YXRhclwiKS5nZXRDb21wb25lbnQoXCJBdmF0YXJcIik7XG4gICAgICAgIGF2YXRhckpzLmxvYWRVcmwodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGF2YXRhckpzLnNldEF2YXRhcihyZXMsIHZpcClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyWdXNlckluZm9cbiAgICBpbml0VXNlckluZm8oKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIlVzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmdldENoaWxkQnlOYW1lKFwidXNlcl9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcmVzLmRhdGEubmlja19uYW1lO1xuICAgICAgICAgICAgdGhpcy5pbml0U2h1U2h1KCk7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQXZhdGFyKHJlcy5kYXRhLmF2YXRhcl91cmwsIGNjLlRvb2xzLnVzZXJJbmZvLmdyYWRlX2lkKTtcbiAgICAgICAgICAgIC8v5Yik5pat57yT5a2Y55qE5ZOq5Liq5r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICB0aGlzLmdldEFkKCk7XG4gICAgICAgICAgICAvLyDmmL7npLrlhrvnu5PnuqLljIXnmoTov5vluqbmnaFcbiAgICAgICAgICAgIGxldCBmcmVlemVuQnRuID0gdGhpcy5jb250ZW50LmdldENoaWxkQnlOYW1lKFwiYnRuX2xheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuXzNcIik7XG4gICAgICAgICAgICBsZXQgZnJlZXplblJhdGUgPSBjYy5Ub29scy51c2VySW5mby5hY3RpdmVfcmF0ZS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICBsZXQgZnJlZXplbkJhciA9IGZyZWV6ZW5CdG4uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgIGZyZWV6ZW5CYXIucHJvZ3Jlc3MgPSBOdW1iZXIoZnJlZXplblJhdGVbMF0pIC8gTnVtYmVyKGZyZWV6ZW5SYXRlWzFdKTtcbiAgICAgICAgICAgIGZyZWV6ZW5CdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7ZnJlZXplblJhdGVbMF19LyR7ZnJlZXplblJhdGVbMV19YDtcbiAgICAgICAgICAgIGlmIChmcmVlemVuUmF0ZVswXSA9PT0gZnJlZXplblJhdGVbMV0pIHtcbiAgICAgICAgICAgICAgICBmcmVlemVuQnRuLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMSwgMzApLCBjYy5yb3RhdGVUbygwLjEsIDApLCBjYy5yb3RhdGVUbygwLjEsIC0zMCksIGNjLnJvdGF0ZVRvKDAuMSwgMCksIGNjLmRlbGF5VGltZSgyKSkpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aKe5Yqg5LiA5Liq5a6a5pe25ZmoIOS4gOWumuaXtumXtOayoeacieeci+inhumikSDkuLvliqjlvLnlh7rop4bpopFcbiAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG93QnRuXCIpID09IDEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIkFkSW50ZXJ2YWxTaG93XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5pc19zaG93ICYmIHRoaXMuYmFycmFnZU1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIGA8Yj48Y29sb3I9I2ZmZmZmZj7nnIvlrozop4bpopEg6aKG5Y+W5pu05aSa57qi5YyF5Yi4PC9jPjwvYj5gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29jb3NCcmlkZ2UuSlNDYWxsTmF0aXZlKFwic2hvd1Jld2FyZFZpZGVvQWRcIixcIjEyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgY2MuVG9vbHMudXNlckluZm8uYWRfc2hvd19pbnRlcnZhbF9zZWNvbmQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycik7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xvc2VcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChlcnIgPT09IFwidG9rZW7pqozor4HlpLHotKUs6K+36YeN5paw55m76ZmGXCIgJiYgY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8g6YeN5paw55m76ZmGXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2dpbicpO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXNSZWxvYWQgLS0tLeaYr+WQpuWKoOi9vea4uOaIjyBcbiAgICAgKi9cbiAgICByZWZyZXNoVXNlckluZm8oaXNSZWxvYWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21CYXJyYWdlKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvL+WwhuinhumikeaatOWHu+WKoOWFpeW8ueW5leS4rVxuICAgICAgICAgICAgdGhpcy5iYXJyYWdlTW92ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN1cGVyVGltZSA9IDA7XG4gICAgICAgICAgICBpZiAoaXNSZWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbG9zZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGVyciA9PT0gXCJ0b2tlbumqjOivgeWksei0pSzor7fph43mlrDnmbvpmYZcIiAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyDph43mlrDnmbvpmYZcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xvZ2luJyk7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8v5YOP5by55bmV6YeM6Z2i5aKe5Yqg5paw55qE5L+h5oGvXG4gICAgYWRkQ3VzdG9tQmFycmFnZShyZXM6IGFueSkge1xuICAgICAgICBpZiAoY2MuVG9vbHMudXNlckluZm8ubnVtX2F3YXJkX2dvdCA8IHJlcy5udW1fYXdhcmRfZ290KSB7XG4gICAgICAgICAgICAvL+eci+S6huaWsOinhumikSDmg7PlvLnluZXmlbDnu4TkuK3mt7vliqDkv6Hmga9cbiAgICAgICAgICAgIGxldCBpbmRleFJlZCA9IDAsXG4gICAgICAgICAgICAgICAgaW5kZXhDcml0ID0gMCxcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjYy5Ub29scy5hZC5jb25maWc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkIGNvbmZpZyBcIiwgY29uZmlnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9jb25maWcgPSBjb25maWdbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5udW1fYXdhcmRfZ290IDw9IF9jb25maWcubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4UmVkID0gX2NvbmZpZy5udW07XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Q3JpdCA9IF9jb25maWcucmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGluZm8gPSB7fVxuICAgICAgICAgICAgaW5mb1tcImRhdGFcIl0gPSBg56ysJHtpbmRleFJlZH3kuKrnuqLljIUs5pq05Ye7JHtpbmRleENyaXR9Je+8iOW3sumihuWPliR7cmVzLm51bV9hd2FyZF9nb3R9LyR7aW5kZXhSZWR977yJYDtcbiAgICAgICAgICAgIGluZm9bXCJhY3Rpb25cIl0gPSBcInRpcFwiO1xuICAgICAgICAgICAgaW5mb1tcInVzZXJcIl0gPSB7fTtcbiAgICAgICAgICAgIGluZm9bXCJyZWZlcl91c2VyXCJdID0ge307XG4gICAgICAgICAgICBpbmZvW1widXNlclwiXS5hdmF0YXIgPSBjYy5Ub29scy51c2VySW5mby5hdmF0YXJfdXJsO1xuICAgICAgICAgICAgaW5mb1tcInVzZXJcIl0uZ3JhZGVfaWQgPSBjYy5Ub29scy51c2VySW5mby5ncmFkZV9pZDtcbiAgICAgICAgICAgIHRoaXMuYmFycmFnZUFyci51bnNoaWZ0KGluZm8pO1xuXG4gICAgICAgICAgICBsZXQgYXdyYWQ6IGNjLk5vZGUgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9iYXJcIik7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NfYmFyOiBjYy5Ob2RlID0gYXdyYWQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc19iYXJcIik7XG4gICAgICAgICAgICBsZXQgYmFyOiBjYy5Qcm9ncmVzc0JhciA9IHByb2dyZXNzX2Jhci5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gTnVtYmVyKChyZXMubnVtX2F3YXJkX2dvdCAvIGluZGV4UmVkKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIGxldCBsYmw6IGNjLkxhYmVsID0gcHJvZ3Jlc3NfYmFyLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYCR7cmVzLm51bV9hd2FyZF9nb3R9LyR7aW5kZXhSZWR9KWA7XG4gICAgICAgICAgICBsZXQgbGF5b3V0OiBjYy5Ob2RlID0gYXdyYWQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgICAgICBsZXQgbGF5b3V0TGJsOiBjYy5SaWNoVGV4dCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICAgICAgbGF5b3V0TGJsLnN0cmluZyA9IGA8Y29sb3I9I0ZGQ0EwMD7nrKw8L2M+PGNvbG9yPSNGQjVBMzg+JHtpbmRleFJlZH08L2NvbG9yPjxjb2xvcj0jRkZDQTAwPue6ouWMhee/uzwvYz48Y29sb3I9I0ZCNUEzOD4ke2luZGV4Q3JpdH0lPC9jb2xvcj48Y29sb3I9I0ZGQ0EwMD7lgI3mmrTlh7vlpZblirE8L2M+YDtcbiAgICAgICAgICAgIGxheW91dC5zY2FsZVggPSAwO1xuICAgICAgICAgICAgbGF5b3V0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjYy50d2VlbihsYXlvdXQpLnRvKDAuNSwgeyBzY2FsZVg6IDEgfSkuZGVsYXkoNCkudG8oMC41LCB7IHNjYWxlWDogMCB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8v5Yid5aeL5YyWYXdhcmRcbiAgICBpbml0QXdhcmQoKSB7XG4gICAgICAgIGxldCBpbmRleFJlZCA9IDAsXG4gICAgICAgICAgICBpbmRleENyaXQgPSAwLFxuICAgICAgICAgICAgY29uZmlnID0gY2MuVG9vbHMuYWQuY29uZmlnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9jb25maWcgPSBjb25maWdbaV07XG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMudXNlckluZm8ubnVtX2F3YXJkX2dvdCA8PSBfY29uZmlnLm51bSkge1xuICAgICAgICAgICAgICAgIGluZGV4UmVkID0gX2NvbmZpZy5udW07XG4gICAgICAgICAgICAgICAgaW5kZXhDcml0ID0gX2NvbmZpZy5yYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBhd3JhZDogY2MuTm9kZSA9IHRoaXMuY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImF3YXJkX2JhclwiKTtcbiAgICAgICAgbGV0IHByb2dyZXNzX2JhcjogY2MuTm9kZSA9IGF3cmFkLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NfYmFyXCIpO1xuICAgICAgICBsZXQgYmFyOiBjYy5Qcm9ncmVzc0JhciA9IHByb2dyZXNzX2Jhci5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICBiYXIucHJvZ3Jlc3MgPSBOdW1iZXIoKGNjLlRvb2xzLnVzZXJJbmZvLm51bV9hd2FyZF9nb3QgLyBpbmRleFJlZCkudG9GaXhlZCgyKSk7XG4gICAgICAgIGxldCBsYmw6IGNjLkxhYmVsID0gcHJvZ3Jlc3NfYmFyLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxibC5zdHJpbmcgPSBgJHtjYy5Ub29scy51c2VySW5mby5udW1fYXdhcmRfZ290fS8ke2luZGV4UmVkfWA7XG5cbiAgICAgICAgbGV0IGxheW91dDogY2MuTm9kZSA9IGF3cmFkLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgbGF5b3V0TGJsOiBjYy5SaWNoVGV4dCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICBsYXlvdXRMYmwuc3RyaW5nID0gYDxjb2xvcj0jRkZDQTAwPuesrDwvYz48Y29sb3I9I0ZCNUEzOD4ke2luZGV4UmVkfTwvY29sb3I+PGNvbG9yPSNGRkNBMDA+57qi5YyF57+7PC9jPjxjb2xvcj0jRkI1QTM4PiR7aW5kZXhDcml0fSU8L2NvbG9yPjxjb2xvcj0jRkZDQTAwPuWAjeaatOWHu+WlluWKsTwvYz5gO1xuICAgICAgICBsYXlvdXQuc2NhbGVYID0gMDtcbiAgICAgICAgbGF5b3V0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKGxheW91dCkudG8oMC41LCB7IHNjYWxlWDogMSB9KS5kZWxheSg0KS50bygwLjUsIHsgc2NhbGVYOiAwIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIt+aWsOmSseeahOaOpeWPo1xuICAgICovXG4gICAgcmVmcmVzaFdhbGxldCgpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiV2FsbGV0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5Yi35paw546w5pyJ6YeR6ZKxLS0tLVwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLndhbGxldC5hbW91bnQgPSByZXMuZGF0YS5hbW91bnQ7XG4gICAgICAgICAgICBjYy5Ub29scy53YWxsZXQuc2F2ZV9hbW91bnQgPSByZXMuZGF0YS5zYXZlX2Ftb3VudDtcbiAgICAgICAgICAgIGNjLlRvb2xzLndhbGxldC5zYXZlX2ZyZWV6ZV9hbW91bnQgPSByZXMuZGF0YS5zYXZlX2ZyZWV6ZV9hbW91bnQ7XG4gICAgICAgICAgICBzZWxmLmNhc2hJbmZvLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHJlcy5kYXRhLmFtb3VudDtcbiAgICAgICAgICAgIGlmIChzZWxmLmxvdHRlcnlMYXllcikge1xuICAgICAgICAgICAgICAgIHNlbGYubG90dGVyeUxheWVyLmdldENoaWxkQnlOYW1lKFwid3JhcFwiKS5nZXRDaGlsZEJ5TmFtZShcInRvdGFsX2Nhc2hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByZXMuZGF0YS5hbW91bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5zdGVhbExheWVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdyYXA6IGNjLk5vZGUgPSBzZWxmLnN0ZWFsTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ3cmFwXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RlYWxMYXllci5nZXRDaGlsZEJ5TmFtZShcInRvdGFsX2Nhc2hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByZXMuZGF0YS5hbW91bnQ7XG4gICAgICAgICAgICAgICAgbGV0IGRvd246IGNjLk5vZGUgPSB3cmFwLmdldENoaWxkQnlOYW1lKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXlDYXNoOiBjYy5Ob2RlID0gZG93bi5nZXRDaGlsZEJ5TmFtZShcInRvZGF5X2Nhc2hcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5Q2FzaFRleHQ6IGNjLkxhYmVsID0gdG9kYXlDYXNoLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRvZGF5Q2FzaFRleHQuc3RyaW5nID0gcmVzLmRhdGEuc2F2ZV9hbW91bnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9tb3Jyb3dDYXNoOiBjYy5Ob2RlID0gZG93bi5nZXRDaGlsZEJ5TmFtZShcInRvbW9ycm93X2Nhc2hcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRvbW9ycm93Q2FzaFRleHQ6IGNjLkxhYmVsID0gdG9tb3Jyb3dDYXNoLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRvbW9ycm93Q2FzaFRleHQuc3RyaW5nID0gcmVzLmRhdGEuc2F2ZV9mcmVlemVfYW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmihOWKoOi9vXByZWZhYlxuICAgICAqL1xuICAgIHByZWxvYWRQcmVmYWIoKSB7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvZ2V0Q2FzaCcsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvc2V0dGluZycsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvbG90dGVyeScsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvcG9wU3VjY2VzcycsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvcG9wRGVsZXRlJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi90aWNrZXQnLCBjYy5QcmVmYWIpO1xuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCgnUHJlZmFiL3N1cGVyJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi9zaWduJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi9zdGVhbE1hcmsnLCBjYy5QcmVmYWIpO1xuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCgnUHJlZmFiL3NlY3JldExheWVyJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi9wb3BOZXcnLCBjYy5QcmVmYWIpO1xuICAgIH1cbiAgICBsb2FkUHJlZmFiKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyDms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyRXZlbnQoKSB7XG4gICAgICAgIGxldCBidG5MYXllciA9IHRoaXMuY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9sYXllclwiKTtcbiAgICAgICAgbGV0IGJ0blR5cGUgPSBbXCJzaG93U2V0TGF5ZXJcIiwgXCJzaG93R2V0Q2FzaExheWVyXCIsIFwic2hvd1VuRnJlZXplTGF5ZXJcIiwgXCJzaG93U3RlYWxMYXllclwiLCBcInNob3dMb3R0ZXJ5bGVMYXllclwiLCBcImNsaWNrUmVkXCIsIFwic2hvd1NpZ25MYXllclwiLCBcInRvdWNoU25vd1wiXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBidG4gPSBidG5MYXllci5nZXRDaGlsZEJ5TmFtZShcImJ0bl9cIiArIGkpO1xuICAgICAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpc1tidG5UeXBlW2kgLSAxXV0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWNyZXRCdG4gPSBjYy5maW5kKFwiQ2FudmFzL3NlY3JldFwiKTtcbiAgICAgICAgc2VjcmV0QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93U2VjcmV0TGF5ZXIsIHRoaXMpXG5cbiAgICAgICAgbGV0IGZyZXNoQnRuID0gY2MuZmluZChcIkNhbnZhcy9sb3NlL2ZyZXNoX2J0blwiKVxuICAgICAgICBmcmVzaEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmVmcmVzaFVzZXJJbmZvLCB0aGlzKTtcblxuICAgICAgICBsZXQgZ2V0Q2FzaEJ0biA9IHRoaXMuY2FzaEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIilcbiAgICAgICAgZ2V0Q2FzaEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc2hvd0dldENhc2hMYXllciwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBsZXQgYnRuTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbGF5ZXJcIik7XG4gICAgICAgIGxldCBidG5UeXBlID0gW1wic2hvd1NldExheWVyXCIsIFwic2hvd0dldENhc2hMYXllclwiLCBcInNob3dVbkZyZWV6ZUxheWVyXCIsIFwic2hvd1N0ZWFsTGF5ZXJcIiwgXCJzaG93TG90dGVyeWxlTGF5ZXJcIiwgXCJjbGlja1JlZFwiLCBcInNob3dTaWduTGF5ZXJcIiwgXCJ0b3VjaFNub3dcIl1cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuID0gYnRuTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fXCIgKyBpKTtcbiAgICAgICAgICAgIGJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzW2J0blR5cGVbaSAtIDFdXSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlY3JldEJ0biA9IGNjLmZpbmQoXCJDYW52YXMvc2VjcmV0XCIpO1xuICAgICAgICBzZWNyZXRCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93U2VjcmV0TGF5ZXIsIHRoaXMpO1xuICAgICAgICBsZXQgZnJlc2hCdG4gPSBjYy5maW5kKFwiQ2FudmFzL2xvc2UvZnJlc2hfYnRuXCIpXG4gICAgICAgIGZyZXNoQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmVmcmVzaFVzZXJJbmZvLCB0aGlzKTtcblxuICAgICAgICBsZXQgZ2V0Q2FzaEJ0biA9IHRoaXMuY2FzaEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIilcbiAgICAgICAgZ2V0Q2FzaEJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnNob3dHZXRDYXNoTGF5ZXIsIHRoaXMpO1xuICAgIH1cbiAgICB0b3VjaFNub3coKSB7XG4gICAgICAgIC8vIOeCueWHu+WKoOmUgVxuICAgICAgICBpZiAoY2MuVG9vbHMubG9jaykge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBgPGI+PGNvbG9yPSNmZmZmZmY+54K55Ye75aSq6aKR57mBPC9jPjwvYj5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMubG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgfVxuICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX3Nub3dtYW5fMVwifSlcbiAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBgPGI+PGNvbG9yPSNmZmZmZmY+55yL5a6M6KeG6aKRIOmihuWPluabtOWkmue6ouWMheWIuDwvYz48L2I+YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJzaG93UmV3YXJkVmlkZW9BZFwiLFwiM1wiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy/mlrnlkJEgMeaYr+eOsOmHkee6ouWMhSAy5piv5a2Y6ZKx572QXG4gICAgc2hvd1BhY2tldChvYmo6IGFueSkge1xuICAgICAgICBsZXQgZW5kID0gb2JqLmRpciA9PT0gMSA/IHRoaXMuY2FzaEluZm8gOiB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fNFwiKVxuICAgICAgICB0aGlzLnNob3dQYWNrZXRBbmltKDEwLCAwLjAxLCAyMDAsIGNjLnYzKDM2MCwgNjQwKSwgZW5kLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5Ub29scy5FdmVudC5lbWl0KFwicmVmcmVzaFdhbGxldFwiKTtcbiAgICAgICAgICAgIGlmIChvYmoudmlkZW9UeXBlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiaW5pdFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLnZpZGVvVHlwZSA9PT0gOSkge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmVtaXRFdmVudChcImluaXRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzaG93U2VjcmV0TGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLnNob3dTZWNyZXRUaW1lcysrO1xuICAgICAgICBpZiAodGhpcy5zaG93U2VjcmV0VGltZXMgPj0gMykge1xuICAgICAgICAgICAgdGhpcy5zaG93U2VjcmV0VGltZXMgPSAwO1xuICAgICAgICAgICAgdGhpcy5iYXJyYWdlTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcFNlY3JldExheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvc2VjcmV0TGF5ZXInKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBvcFNlY3JldExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucG9wU2VjcmV0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcFNlY3JldExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG91Y2hSZWQoKSB7XG4gICAgICAgIGlmIChjYy5Ub29scy51c2VySW5mby51cF9sZXZlbF9udW1fbm90X2dldCkge1xuICAgICAgICAgICAgLy8g54K55Ye75Yqg6ZSBXG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMubG9jaykge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgYDxiPjxjb2xvcj0jZmZmZmZmPueCueWHu+Wkqumikee5gTwvYz48L2I+YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMubG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX2NsaWNrcmVkYmFnXzFcIn0pXG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMudXNlckluZm8ubmV3X2ZyZWVfbGV2ZWxfdGltZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDQsXG4gICAgICAgICAgICAgICAgICAgIHRzOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJOZXdBd2FyZFwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5lbWl0RXZlbnQoXCJnZXRUaWNrZXRcIiwgeyB0aWNrZXQ6IHJlcy5kYXRhLmFtb3VudCwgYWRkOiByZXMuZGF0YS5hZGRfYW1vdW50LCB0eXBlOiAxLCB2aWRlb1R5cGU6IDQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgYDxiPjxjb2xvcj0jZmZmZmZmPueci+WujOinhumikSDpooblj5bmm7TlpJrnuqLljIXliLg8L2M+PC9iPmApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJzaG93UmV3YXJkVmlkZW9BZFwiLFwiNFwiKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogcG9wU3VjY2Vzc+eVjOmdolxuICAgICovXG4gICAgc2hvd1BvcFN1Y2Nlc3NMYXllcigpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bNF0sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3BTdWNjZXNzTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcmVmYWIoJ1ByZWZhYi9wb3BTdWNjZXNzJykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3BTdWNjZXNzTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzID0gc2VsZi5wb3BTdWNjZXNzTGF5ZXIuZ2V0Q29tcG9uZW50KFwiUG9wU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyU2NvcmUgPiA2MDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW0gPSAzXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJTY29yZSA8IDYwMDAgJiYgdGhpcy5jdXJTY29yZSA+IDMwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBvcFN1Y2Nlc3NMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBqcy5zZXRTdGFyKG51bSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvcFN1Y2Nlc3NMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBqcyA9IHNlbGYucG9wU3VjY2Vzc0xheWVyLmdldENvbXBvbmVudChcIlBvcFN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbGV0IG51bTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJTY29yZSA+IDYwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gM1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJTY29yZSA8IDYwMDAgJiYgdGhpcy5jdXJTY29yZSA+IDMwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gMlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5wb3BTdWNjZXNzTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBqcy5zZXRTdGFyKG51bSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCAwLjUpXG4gICAgfVxuICAgIC8qKlxuICAgKiBwb3BEZWxldGXnlYzpnaJcbiAgICogQHBhcmFtICB0eXBlIDEtLS3msJTms6HnuqLljIUgMi0tLea2iOmZpOe6ouWMhVxuICAgKiBAcGFyYW0gdmlkZW9UeXBlIC0tLeinhumikeexu+Wei1xuICAgKi9cbiAgICBzaG93UG9wRGVsZXRlTGF5ZXIodHlwZTogbnVtYmVyLCB2aWRlb1R5cGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcERlbGV0ZUxheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvcG9wRGVsZXRlJykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3BEZWxldGVMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBvcERlbGV0ZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IHNlbGYucG9wRGVsZXRlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ3cmFwXCIpLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5wb3BEZWxldGVUeXBlW3R5cGUgLSAxXVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5lbWl0RXZlbnQoXCJ2aWRlb1R5cGVcIiwgdmlkZW9UeXBlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcERlbGV0ZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gc2VsZi5wb3BEZWxldGVMYXllci5nZXRDaGlsZEJ5TmFtZShcIndyYXBcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICB0aXRsZS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wRGVsZXRlVHlwZVt0eXBlIC0gMV1cbiAgICAgICAgICAgICAgICBjYy5Ub29scy5lbWl0RXZlbnQoXCJ2aWRlb1R5cGVcIiwgdmlkZW9UeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCAwLjUpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOetvuWIsOWlluWKsVxuICAgICAqL1xuICAgIHNob3dTaWduTGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfY2xpY2tzaWduXzFcIn0pXG4gICAgICAgIGlmICghdGhpcy5zaWduTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3NpZ24nKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5zaWduTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2lnbkxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlrDmiYvlpZblirFcbiAgICAgKi9cbiAgICBzaG93TmV3TGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5wb3BOZXdMYXllcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvcG9wTmV3JykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHNlbGYucG9wTmV3TGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYucG9wTmV3TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcE5ld0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6LaF57qn57qi5YyF55WM6Z2iXG4gICAgICovXG4gICAgc2hvd1N1cGVyTGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5wb3BTdXBlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQcmVmYWIoJ1ByZWZhYi9zdXBlcicpLnRoZW4oKHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnBvcFN1cGVyTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYucG9wU3VwZXJMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wU3VwZXJMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogdGlja2V055WM6Z2iXG4gICAgKiBAcGFyYW0gdHlwZSDmnaXoh6rlh6DnuqfnlYzpnaJcbiAgICAqL1xuICAgIHNob3dUaWNrZXRMYXllcih0aWNrZXRJbmZvOiB0aWNrZXRJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLeiOt+W+l+WlluWKseeahOS/oeaBry0tLVwiLCBKU09OLnN0cmluZ2lmeSh0aWNrZXRJbmZvKSk7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICBpZiAoIXRoaXMudGlja2V0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3RpY2tldCcpLnRoZW4oKHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRpY2tldExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgc2VsZi50aWNrZXRMYXllci56SW5kZXggPSA5OTk5O1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi50aWNrZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCB0aWNrZXRKcyA9IHRoaXMudGlja2V0TGF5ZXIuZ2V0Q29tcG9uZW50KFwiVGlja2V0XCIpO1xuICAgICAgICAgICAgICAgIHRpY2tldEpzLnNldFRpY2tldCh0aWNrZXRJbmZvLnRpY2tldCwgdGlja2V0SW5mby5hZGQsIHRpY2tldEluZm8udHlwZSwgdGlja2V0SW5mby52aWRlb1R5cGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aWNrZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHRpY2tldEpzID0gdGhpcy50aWNrZXRMYXllci5nZXRDb21wb25lbnQoXCJUaWNrZXRcIik7XG4gICAgICAgICAgICB0aWNrZXRKcy5zZXRUaWNrZXQodGlja2V0SW5mby50aWNrZXQsIHRpY2tldEluZm8uYWRkLCB0aWNrZXRJbmZvLnR5cGUsIHRpY2tldEluZm8udmlkZW9UeXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnJlZnJlc2hVc2VySW5mbyhmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICog6Kej5Ya757qi5YyF55WM6Z2iXG4gICAgKi9cbiAgICBzaG93VW5GcmVlemVMYXllcihlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfaWNldGFibGVfMVwifSlcbiAgICAgICAgLy8g6Kej5Ya757qi5YyF5paw6ZyA5rGCXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiQWN0aXZlSW5mb1wiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgbXNnID0gY2MuZmluZChcIkNhbnZhcy9tc2dcIik7XG4gICAgICAgICAgICBtc2cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1zZy5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGxldCBfbXNnID0gbXNnLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBfbXNnLnN0cmluZyA9IHJlcy5kYXRhLnRpcDtcbiAgICAgICAgICAgIG1zZy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbXNnLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMC41KSwgY2MuZGVsYXlUaW1lKDEpLCBjYy5mYWRlT3V0KDAuNSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmZyZWV6ZV9hbW91bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93UGFja2V0KCk7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiZ2V0VGlja2V0XCIsIHsgdGlja2V0OiByZXMuZGF0YS5mcmVlemVfYW1vdW50LCBhZGQ6IDAsIHR5cGU6IDEsIHZpZGVvVHlwZTogMSB9KTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYW5nbGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5a2Y6ZKx572Q55WM6Z2iXG4gICAgICovXG4gICAgc2hvd1NhdmVDYXNoTGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX1BpZ2d5YmFua18xXCJ9KVxuICAgICAgICBpZiAoIXRoaXMuc2F2ZUNhc2hMYXllcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvc2F2ZUNhc2gnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5zYXZlQ2FzaExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGxheWVyKTtcbiAgICAgICAgICAgICAgICBsZXQganMgPSBzZWxmLnNhdmVDYXNoTGF5ZXIuZ2V0Q29tcG9uZW50KFwiU2F2ZUNhc2hcIik7XG4gICAgICAgICAgICAgICAganMuaXNGaXJzdFNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuc2F2ZUNhc2hMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUNhc2hMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICog6K6+572u55WM6Z2iXG4gICAgKi9cbiAgICBzaG93U2V0TGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfY2xpY2tzZXR0aW5nXzFcIn0pXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5nTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3NldHRpbmcnKS50aGVuKChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0dGluZ0xheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGxheWVyKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldHRpbmdMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5o+Q546w55WM6Z2iXG4gICAgICovXG4gICAgc2hvd0dldENhc2hMYXllcigpIHtcbiAgICAgICAgdGhpcy5iYXJyYWdlTW92ZSA9IGZhbHNlO1xuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bM10sIGZhbHNlLCAxKTtcbiAgICAgICAgQ29jb3NCcmlkZ2UuSlNDYWxsTmF0aXZlKFwicGxheURvdFwiLFwiXCIre1wiZG90XCI6XCJjbGlja19jYXNoXzFcIn0pXG4gICAgICAgIGlmICghdGhpcy5nZXRDYXNoTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL2dldENhc2gnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRDYXNoTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0Q2FzaExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRDYXNoTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDovaznm5jnlYzpnaJcbiAgICAgKi9cbiAgICBzaG93TG90dGVyeWxlTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfdHVybnRhYmxlXzFcIn0pXG4gICAgICAgIGxldCBidG5MYXllciA9IHRoaXMuY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9sYXllclwiKTtcbiAgICAgICAgbGV0IGJveEJ0biA9IGJ0bkxheWVyLmdldENoaWxkQnlOYW1lKFwiYnRuXzVcIik7XG4gICAgICAgIGJveEJ0bi5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmxvdHRlcnlMYXllcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvbG90dGVyeScpLnRoZW4oKHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxvdHRlcnlMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi5sb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvdHRlcnlMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWkp+S5seaWl+eVjOmdolxuICAgICovXG4gICAgc2hvd1N0ZWFsTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfc3RlYWxfMVwifSlcbiAgICAgICAgaWYgKCF0aGlzLnN0ZWFsTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3N0ZWFsJykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RlYWxMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGVhbExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGVhbExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdG9kb1xuICAgIGNsaWNrUmVkKGU6IGFueSkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMF0sIGZhbHNlLCAxKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrUmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGlja1JlZE51bWJlcisrO1xuICAgICAgICBsZXQgYmFyID0gZS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKTtcbiAgICAgICAgYmFyLndpZHRoID0gdGhpcy5jbGlja1JlZE51bWJlciA+PSA2ID8gMTYgKiA2IDogdGhpcy5jbGlja1JlZE51bWJlciAqIDE2O1xuICAgICAgICAvLyDlvZPlpKnpppbmrKHngrnlh7tcbiAgICAgICAgaWYgKGNjLlRvb2xzLnVzZXJJbmZvLmlzX2RheV9maXJzdF9jbGlja19hd2FyZCkge1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIkZpcnN0Q2xpY2tBd2FyZFwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvLmlzX2RheV9maXJzdF9jbGlja19hd2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcERlbGV0ZUxheWVyKDEsIDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0Q2xpY2tUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q2xpY2tUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgbGV0IGR0ID0gbmV3VGltZSAtIHRoaXMuc3RhcnRDbGlja1RpbWU7XG4gICAgICAgICAgICB0aGlzLmNsaWNrUmVkQXJyLnB1c2goZHQpO1xuICAgICAgICAgICAgdGhpcy5zdGFydENsaWNrVGltZSA9IG5ld1RpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tSZWRBcnIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAvLyDlvZPntK/orqHkuInmrKHkuYvlkI7lsLHooYzov5Dnrpcg5b2T5YC85bCP5LqOODAwIOivtOaYjuatpOaXtui/nueCueS6hjPmrKEg5bm25pKt5pS+5r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLmNsaWNrUmVkQXJyLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoYWNjLCBjdXIpID0+IGFjYyArIGN1cixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRvdGFsIDwgODAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+5r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1JlZEFyciA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDbGlja1RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrUmVkTnVtYmVyIDwgNikge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIGA8Yj48Y29sb3I9I2ZmZmZmZj7nnIvlrozop4bpopEg6aKG5Y+W5pu05aSa57qi5YyF5Yi4PC9jPjwvYj5gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInNob3dSZXdhcmRWaWRlb0FkXCIsXCI3XCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrUmVkQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tSZWROdW1iZXIgPj0gNikge1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIkNsaWNrQXdhcmRTdGF0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrUmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmZyZWVfdGltZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiTmV3QXdhcmRcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tldExheWVyKHsgdGlja2V0OiByZXMuZGF0YS5hbW91bnQsIGFkZDogcmVzLmRhdGEuYWRkX2Ftb3VudCwgdHlwZTogMSwgdmlkZW9UeXBlOiAxIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1JlZE51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSB0aGlzLmNsaWNrUmVkTnVtYmVyID49IDYgPyAxNiAqIDYgOiB0aGlzLmNsaWNrUmVkTnVtYmVyICogMTY7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG9wRGVsZXRlTGF5ZXIoMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tSZWROdW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSB0aGlzLmNsaWNrUmVkTnVtYmVyID49IDYgPyAxNiAqIDYgOiB0aGlzLmNsaWNrUmVkTnVtYmVyICogMTY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FuQ2xpY2tSZWRGdW5jKCkge1xuICAgICAgICB0aGlzLmNhbkNsaWNrUmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdG91Y2hHcm91bmQoZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5sb2NrKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMF0sIGZhbHNlLCAxKTtcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IHdpbmRvd1NpemUgPSBjYy53aW5TaXplO1xuICAgICAgICBsZXQgeCA9IGV2ZW50LmdldExvY2F0aW9uWCgpXG4gICAgICAgIGxldCB5ID0gZXZlbnQuZ2V0TG9jYXRpb25ZKClcbiAgICAgICAgdGhpcy5EZWxldGVfbnVtID0gMFxuICAgICAgICB0aGlzLmNsaWNrUG9zID0gY2MudjMoeCwgeSk7XG4gICAgICAgIGlmICh5ID4gd2luZG93U2l6ZS5oZWlnaHQgLyAyIC0gMzcwIC0gdGhpcy52aCAmJiB5IDwgd2luZG93U2l6ZS5oZWlnaHQgLyAyICsgMzcwIC0gdGhpcy52aCkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLlRvSUooeCwgeSkueFxuICAgICAgICAgICAgbGV0IGogPSB0aGlzLlRvSUooeCwgeSkueVxuICAgICAgICAgICAgdGhpcy5EZWxldGVfbnVtID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUG9zQXJyID0gW107XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmFbaV1bal07XG4gICAgICAgICAgICB0aGlzLmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5Ub3VjaF9ibG9jayhpLCBqLCB0aGlzLmFbaV1bal0pO1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgaWYgKHRoaXMuRGVsZXRlX251bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYVtpXVtqXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMubG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZUJsb2NrKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+iuvue9rnNjb3JlaW5mb1xuICAgIHNldFNjb3JlSW5mbyhzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzY29yZU5vZGUgPSB0aGlzLnNjb3JlSW5mby5nZXRDaGlsZEJ5TmFtZShcInNjb3JlXCIpO1xuICAgICAgICBsZXQgc2NvcmVMYmwgPSBzY29yZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHNjb3JlTGJsLnN0cmluZyA9IHNjb3JlICsgXCLliIZcIjtcbiAgICAgICAgLy/liqDov5vluqbmnaEg6L+b5bqm5p2h5ruh5YiGNjAwMFxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSB0aGlzLnNjb3JlSW5mby5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgIC8v6L+b5bqm5p2h5aSn5bCP5Y+W5YC8MC0xIOS4uuS4gOS9jeWwj+aVsFxuICAgICAgICBsZXQgdmFsID0gKE1hdGguZmxvb3Ioc2NvcmUgKiAxMDAgLyA2MDAwKSkgLyAxMDAgPiAxID8gMSA6IChNYXRoLmZsb29yKHNjb3JlICogMTAwIC8gNjAwMCkpIC8gMTAwO1xuICAgICAgICAvLyBwcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHZhbFxuICAgICAgICAvLyBzY29yZU5vZGUueCA9IC0xNTArMzkwKnZhbDtcbiAgICAgICAgY2MudHdlZW4ocHJvZ3Jlc3NCYXIpLnRvKDAuMSwgeyBwcm9ncmVzczogdmFsIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHNjb3JlTm9kZSkudG8oMC4xLCB7IHg6IC0xNTAgKyAzOTAgKiB2YWwgfSkuc3RhcnQoKTtcbiAgICAgICAgLy/moLnmja5zY29yZeWIpOaWreaYn+aVsFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGFyID0gdGhpcy5zY29yZUluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyX1wiICsgaSk7XG4gICAgICAgICAgICBsZXQgYWN0aXZlTm9kZSA9IHN0YXIuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBsZXQgdW5BY3RpdmVOb2RlID0gc3Rhci5nZXRDaGlsZEJ5TmFtZShcInVuQWN0aXZlXCIpO1xuICAgICAgICAgICAgdW5BY3RpdmVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBhY3RpdmVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gMzAwMCAqIChpIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5YWz5Y2hXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5ncm91bmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hHcm91bmQsIHRoaXMpO1xuICAgICAgICB0aGlzLmN1clNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jbGlja09uY2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZFRpY2tldCA9IDA7XG4gICAgICAgIGxldCBsZXZlbExibCA9IHRoaXMuc2NvcmVJbmZvLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsZXZlbExibC5zdHJpbmcgPSBg5YWz5Y2h77yaJHtjYy5Ub29scy51c2VySW5mby5sZXZlbH1gXG4gICAgICAgIHRoaXMuc2V0U2NvcmVJbmZvKHRoaXMuY3VyU2NvcmUpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuYmxvY2tCYWNrZ3JvdW5kLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICBsZXQgYmxvY2tOdWxsQ29sb3IgPSBcIiMzODUzN0VcIjtcbiAgICAgICAgbGV0IF9hcnIxID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICAgICAgICBsZXQgX2FycjIgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gICAgICAgIGxldCBfbmV3QXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gW107XG4gICAgICAgICAgICBsZXQgbGVuMSA9IF9hcnIxLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCB2YWwxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuMSk7XG4gICAgICAgICAgICBrZXkucHVzaChfYXJyMVt2YWwxXSk7XG4gICAgICAgICAgICBjYy5Ub29scy5yZW1vdmUoX2FycjEsIF9hcnIxW3ZhbDFdKTtcblxuICAgICAgICAgICAgbGV0IGxlbjIgPSBfYXJyMi5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgdmFsMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbjIpO1xuICAgICAgICAgICAga2V5LnB1c2goX2FycjJbdmFsMl0pO1xuICAgICAgICAgICAgY2MuVG9vbHMucmVtb3ZlKF9hcnIyLCBfYXJyMlt2YWwyXSk7XG4gICAgICAgICAgICBfbmV3QXJyLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYVtpXSA9IFtdXG4gICAgICAgICAgICB0aGlzLmJbaV0gPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwZWNpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IF9uZXdBcnIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF94ID0gX25ld0FycltrXVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF95ID0gX25ld0FycltrXVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IF94ICYmIGogPT09IF95KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLnJlbW92ZShfbmV3QXJyLCBfbmV3QXJyW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLmFbaV1bal0gPSBuZXdBcnJbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpZmZpY3VsdHkpIC0gMV1cbiAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlmZmljdWx0eSlcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tOdWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9ja051bGwpXG4gICAgICAgICAgICAgICAgYmxvY2tOdWxsLnBhcmVudCA9IHRoaXMuYmxvY2tCYWNrZ3JvdW5kIHx8IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgIGJsb2NrTnVsbC5zZXRQb3NpdGlvbih0aGlzLlRvWFkoaSwgaikpXG4gICAgICAgICAgICAgICAgYmxvY2tOdWxsLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChibG9ja051bGxDb2xvcik7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrTnVsbENvbG9yID09PSBcIiMzODUzN0VcIikge1xuICAgICAgICAgICAgICAgICAgICBibG9ja051bGxDb2xvciA9IFwiIzM0NEY3QVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tOdWxsQ29sb3IgPSBcIiMzODUzN0VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFbaV1bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmVlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5iYWNrZ3JvdW5kIHx8IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLlRvWFkoaSwgaikpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMueWVsbG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5waW5rKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJbaV1bal0gPSBub2RlO1xuICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3AgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvcF9yZWQpO1xuICAgICAgICAgICAgICAgICAgICBwb3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnRpZ2VyW3RoaXMuYVtpXVtqXSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFkZENoaWxkKHBvcCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3BlY2lhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJsb2NrTnVsbENvbG9yID09PSBcIiMzNDRGN0FcIikge1xuICAgICAgICAgICAgICAgIGJsb2NrTnVsbENvbG9yID0gXCIjMzg1MzdFXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmxvY2tOdWxsQ29sb3IgPSBcIiMzNDRGN0FcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRvWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNjLnYyKC0oMzcwIC0gKDM2ICsgeSAqIDc0KSksIDM3MCAtICgzNiArIHggKiA3NCkpXG4gICAgfVxuICAgIFRvSUooaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHdpbmRvd1NpemUgPSBjYy53aW5TaXplO1xuICAgICAgICBpZiAoaiA8IHdpbmRvd1NpemUuaGVpZ2h0IC8gMiAtIDM3MCAtIHRoaXMudmggfHwgaiA+IHdpbmRvd1NpemUuaGVpZ2h0IC8gMiArIDM3MCAtIHRoaXMudmgpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICBpID0gTWF0aC5mbG9vcigoaSAtIHRoaXMuZGlmZmljdWx0eSkgLyA3NClcbiAgICAgICAgICAgIGogPSBNYXRoLmZsb29yKCh3aW5kb3dTaXplLmhlaWdodCAvIDIgKyAzNzUgLSB0aGlzLnZoIC0gaikgLyA3NClcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogaixcbiAgICAgICAgICAgICAgICB5OiBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ29vZEZ1bmN0aW9uKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s1XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPT09IDMpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s2XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPT09IDQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s3XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPT09IDUpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s4XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPj0gNSAmJiBudW0gPCA3KSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bOV0sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIGxldCBnb29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5nb29kKVxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFkZENoaWxkKGdvb2QpO1xuICAgICAgICAgICAgY2MudHdlZW4oZ29vZCkuYnkoMSwgeyB5OiAyMDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ29vZC5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDcgJiYgbnVtIDwgOSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzEwXSwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgbGV0IGdyZWF0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmVhdClcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hZGRDaGlsZChncmVhdCk7XG4gICAgICAgICAgICBjYy50d2VlbihncmVhdCkuYnkoMC41LCB7IHk6IDIwMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBncmVhdC5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDkgJiYgbnVtIDwgMTIpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1sxMV0sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIGxldCBleGNlbGxlbnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV4Y2VsbGVudClcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hZGRDaGlsZChleGNlbGxlbnQpO1xuICAgICAgICAgICAgY2MudHdlZW4oZXhjZWxsZW50KS5ieSgwLjUsIHsgeTogMjAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4Y2VsbGVudC5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDEyICYmIG51bSA8IDE1KSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMTJdLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICBsZXQgYW1hemluZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYW1hemluZylcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hZGRDaGlsZChhbWF6aW5nKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGFtYXppbmcpLmJ5KDAuNSwgeyB5OiAyMDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW1hemluZy5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDE1KSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMTNdLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICBsZXQgdW5iZWxpZXZhYmxlID0gY2MuaW5zdGFudGlhdGUodGhpcy51bmJlbGlldmFibGUpXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQuYWRkQ2hpbGQodW5iZWxpZXZhYmxlKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHVuYmVsaWV2YWJsZSkuYnkoMC41LCB7IHk6IDIwMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB1bmJlbGlldmFibGUuZGVzdHJveSgpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgRGVsZXRlX2Jsb2NrKCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBudW0gPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID4gMCAmJiBudW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5tb3ZlQnkoMC4yLCAwLCAtbnVtICogNzQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXS5ydW5BY3Rpb24oYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmJbaV1bal0pLmJ5KDAuMywgeyBwb3NpdGlvbjogY2MudjIoMCwgLW51bSAqIDc0KSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaSArIG51bV1bal0gPSB0aGlzLmFbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2pdID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaSArIG51bV1bal0gPSB0aGlzLmJbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iW2ldW2pdID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gbnVtICsgMVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9jb3VudCA9IDBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFbOV1bal0gPiAwICYmIF9jb3VudCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5iW2ldW2pdKS5ieSgwLjMsIHsgcG9zaXRpb246IGNjLnYyKC1jb3VudCAqIDc0LCAwKSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVCeSgwLjIsIC1fY291bnQgKiA3NCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXS5ydW5BY3Rpb24oYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogLSBfY291bnRdID0gdGhpcy5hW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaV1baiAtIF9jb3VudF0gPSB0aGlzLmJbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hWzldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICBfY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOiAgeWGmeazlVxuICAgIFRvdWNoX2Jsb2NrKGk6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYVtpXVtqXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICB0aGlzLkRlbGV0ZV9udW0rK1xuICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICBcImlcIjogaSxcbiAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICB0aGlzLnNwbGl0VG9BcnIoYXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDliIbmiJDmlbDnu4RcblxuICAgIHNwbGl0VG9BcnIoYXJyKSB7XG4gICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQb3NBcnIucHVzaChhcnIpO1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCBhcnIubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGFyclt0XTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGRhdGEuaTtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGRhdGEuajtcbiAgICAgICAgICAgICAgICBsZXQgayA9IGRhdGEuaztcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaSAtIDFdW2pdID09IGsgJiYgayA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpIC0gMV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EZWxldGVfbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaVwiOiBpIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2kgKyAxXVtqXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaSArIDFdW2pdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRGVsZXRlX251bSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlcIjogaSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqXCI6IGosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrXCI6IGtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqIC0gMV0gPT0gayAmJiBrID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogLSAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRlbGV0ZV9udW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqXCI6IGogLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia1wiOiBrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaiAhPSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaV1baiArIDFdID09IGsgJiYgayA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpXVtqICsgMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EZWxldGVfbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaVwiOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialwiOiBqICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNwbGl0VG9BcnIoX2Fycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5bCG6KaBZGVsZXRl55qE5pWw5o2u6L+b6KGM5aSE55CGXG4gICAgaGFuZGxlRGVsZXRlQmxvY2soaXNPdmVyOiBib29sZWFuKSB7XG4gICAgICAgIC8v6K6h5pWwXG4gICAgICAgIGlmICghdGhpcy5kZWxldGVQb3NBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNPdmVyR2FtZSA9IGlzT3ZlcjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmRlbGV0ZUJsb2NrQ2IsIDAuMDE2LCB0aGlzLmRlbGV0ZVBvc0Fyci5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKCFpc092ZXIpIHtcbiAgICAgICAgICAgIC8v5ZCR5pyN5Yqh5Zmo5Y+R6YCB5r+A5rS7XG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJVc2VyTGl2ZVwiLCBcIlBPU1RcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3mv4DmtLvmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWinuWKoOmHkemSseeJueaViFxuICAgICAgICAgICAgbGV0IGFkZEluZm8gPSB0aGlzLmNhc2hJbmZvLmdldENoaWxkQnlOYW1lKFwiYWRkX2luZm9cIik7XG4gICAgICAgICAgICB0aGlzLmFkZFRpY2tldCArPSB0aGlzLkRlbGV0ZV9udW07XG4gICAgICAgICAgICBsZXQgbnVtID0gYWRkSW5mby5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbnVtLnN0cmluZyA9IFwiXCIgKyB0aGlzLkRlbGV0ZV9udW07XG4gICAgICAgICAgICBhZGRJbmZvLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBhZGRJbmZvLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgYWRkSW5mby55ID0gLTQwO1xuICAgICAgICAgICAgYWRkSW5mby5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuMSksIGNjLm1vdmVCeSgwLjUsIDAsIDQwKSwgY2MuZmFkZU91dCgwLjUpKSk7XG4gICAgICAgICAgICB0aGlzLnNob3dQYWNrZXRBbmltKDMsIDAuMDEsIDEwMCwgdGhpcy5jbGlja1BvcywgdGhpcy5jYXNoSW5mbywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzaEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2MuVG9vbHMudXNlckluZm8uYW1vdW50ICsgdGhpcy5hZGRUaWNrZXQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUJsb2NrQ2IoKSB7XG4gICAgICAgIC8vIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmRlbGV0ZVBvc0Fyclt0aGlzLl9jb3VudF07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgYXJyLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGFyclt0XTtcbiAgICAgICAgICAgIGxldCBpID0gZGF0YS5pO1xuICAgICAgICAgICAgbGV0IGogPSBkYXRhLmo7XG4gICAgICAgICAgICBsZXQgayA9IGRhdGEuaztcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZXNFZmZlY3QpXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuYmFja2dyb3VuZCB8fCB0aGlzLm5vZGVcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5Ub1hZKGksIGopKVxuICAgICAgICAgICAgbGV0IEN1c3RvbVBhcnRpY2xlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICAgICAgQ3VzdG9tUGFydGljbGUuc3ByaXRlRnJhbWUgPSB0aGlzLmxpemlCbG9ja1trIC0gMV07XG4gICAgICAgICAgICBDdXN0b21QYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYltpXVtqXS5zcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYltpXVtqXS5kZXN0cm95KClcbiAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY291bnQgPT09IHRoaXMuZGVsZXRlUG9zQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJEZWxldGVCbG9jaygpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY291bnQrKztcbiAgICB9XG4gICAgYWZ0ZXJEZWxldGVCbG9jaygpIHtcbiAgICAgICAgdGhpcy5EZWxldGVfYmxvY2soKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZGVsZXRlQmxvY2tDYik7XG4gICAgICAgIC8vIOiOt+WPluWIhuaVsCBnZXRTY29yZVxuICAgICAgICBpZiAodGhpcy5pc092ZXJHYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjb3JlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTY29yZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tPbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mbG9hdGVyTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwZWNpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BvcERlbGV0ZUxheWVyKDIsIDkpO1xuICAgICAgICAgICAgdGhpcy5zcGVjaWFsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuRGVsZXRlX251bSA+PSAxMikge1xuICAgICAgICAgICAgdGhpcy5zaG93UG9wRGVsZXRlTGF5ZXIoMiwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmRtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuRGVsZXRlX251bSA+PSByZG0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrTnVtYmVyKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tOdW1iZXIgPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrTnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG9wRGVsZXRlTGF5ZXIoMiwgOSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOmAmui/h2vnmoTlgLzov5Tlm57oibLlgLxcbiAgICBnZXRDb2xvckJsb2NrKGs6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBjb2xvcjogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChrKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gcmVkXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiNEQzU2NzJcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8vIGdyZWVuXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM2RUM0NkNcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIC8vIHBpbmtcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiI0JDNjNGMFwiXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgLy9ibHVlXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM0Q0E4RUFcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIC8vIHllbGxvd1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjRTdDQjU1XCJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3JcbiAgICB9XG4gICAgc2V0U2NvcmUoaXNDbGVhcjogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNDbGVhcikge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgwLjUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3BTdWNjZXNzTGF5ZXIoKTtcbiAgICAgICAgICAgIH0sIDIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3msqHmnInmlrnlnZdcbiAgICAgICAgICAgIGxldCBpc2tvbmcgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaV1bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlza29uZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlza29uZykge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC41KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcFN1Y2Nlc3NMYXllcigpO1xuICAgICAgICAgICAgICAgIH0sIDIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRW5kKCkpIHtcbiAgICAgICAgICAgIC8vIOWinuWKoOenr+WIhiDnp6/liIbnrpfms5XmmK9cbiAgICAgICAgICAgIC8vIOWJqeS9meeahOaWueWdl1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQb3NBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubG9jayA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdyb3VuZC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hHcm91bmQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrID0gdGhpcy5hW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialwiOiBqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQb3NBcnIucHVzaChhcnIpO1xuICAgICAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLkRlbGV0ZV9udW0gLSAxO1xuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHRoaXMudGFyZ2V0U2NvcmUgLSBNYXRoLnBvdyhsZW4sIDIpICogMTA7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSBzY29yZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjb3JlSW5mbyh0aGlzLmN1clNjb3JlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZUJsb2NrKHRydWUpO1xuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWinuWKoOenr+WIhiDnp6/liIbnrpfms5XmmK8gKOa2iOmZpOaVsC0x77yJ55qE5bmz5pa5KjEwXG4gICAgICAgICAgICBsZXQgbGVuID0gdGhpcy5EZWxldGVfbnVtIC0gMVxuICAgICAgICAgICAgbGV0IHNjb3JlID0gTWF0aC5wb3cobGVuLCAyKSAqIDEwO1xuICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSBzY29yZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NvcmVJbmZvKHRoaXMuY3VyU2NvcmUpO1xuICAgICAgICAgICAgdGhpcy5nb29kRnVuY3Rpb24odGhpcy5EZWxldGVfbnVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVMZXZlbCgpIHtcbiAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6K+35rGC6L+H5YWzXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwic2NvcmVcIjogdGhpcy5jdXJTY29yZSxcbiAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIFwibGV2ZWxcIjogY2MuVG9vbHMudXNlckluZm8ubGV2ZWwsXG4gICAgICAgICAgICBcImF3YXJkXCI6IHRoaXMuYWRkVGlja2V0LFxuICAgICAgICB9O1xuICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJVcGRhdGVMZXZlbFwiLCBcIlBPU1RcIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyDliLfmlrDkuIDkuItjYy5Ub29scy51c2VySW5mby5uZXdfZnJlZV9sZXZlbF90aW1lc1xuICAgICAgICAgICAgY2MuVG9vbHMudXNlckluZm8ubmV3X2ZyZWVfbGV2ZWxfdGltZXMgPSByZXMuZGF0YS5uZXdfZnJlZV9sZXZlbF90aW1lcztcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VuZCgpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuYTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5hW2ldW2pdO1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gLTE7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0ID0gLTE7XG4gICAgICAgICAgICAgICAgbGV0IHVwID0gLTE7XG4gICAgICAgICAgICAgICAgbGV0IGRvd24gPSAtMTtcbiAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW3puWPs1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqIC0gMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGhpcy5hW2ldW2ogLSAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChqICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2ogKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5hW2ldW2ogKyAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2kgLSAxXVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwID0gdGhpcy5hW2kgLSAxXVtqXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2kgKyAxXVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd24gPSB0aGlzLmFbaSArIDFdW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gbGVmdCB8fCB2YWwgPT09IHJpZ2h0IHx8IHZhbCA9PT0gdXAgfHwgdmFsID09PSBkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIOiuqea1rueQg+aYvuekuuW5tua1ruWKqCDngrnlh7sg55yL5r+A5Yqx6KeG6aKRXG4gICAgZmxvYXRlck1vdmUoKSB7XG4gICAgICAgIGxldCBmbG9hdGVyTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9hdGVyX2xheWVyXCIpO1xuICAgICAgICBsZXQgdmFsID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvd0J0blwiKTtcbiAgICAgICAgaWYgKHZhbCA9PSAxMDApIHtcbiAgICAgICAgICAgIGlmIChmbG9hdGVyTGF5ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGZsb2F0ZXJMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZsb2F0ZXIgPSBmbG9hdGVyTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9hdGVyX1wiICsgaSk7XG4gICAgICAgICAgICAgICAgZmxvYXRlci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnBvcEFuaW0oZmxvYXRlciwgMTApO1xuICAgICAgICAgICAgICAgIGZsb2F0ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsaWNrRmxvYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuJPlsZ7mta7nkIPnmoTkuovku7Yg54K55Ye75rWu55CD6KeC55yL6KeG6aKRIOS5i+WQjua1rueQg+a2iOWkseW5tuS4lOa4hemZpOS6i+S7tlxuICAgIGNsaWNrRmxvYXRlKGUpIHtcbiAgICAgICAgLy8g54K55Ye75Yqg6ZSBXG4gICAgICAgIGlmIChjYy5Ub29scy5sb2NrKSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIGA8Yj48Y29sb3I9I2ZmZmZmZj7ngrnlh7vlpKrpopHnuYE8L2M+PC9iPmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuVG9vbHMubG9jayA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX0Zsb2F0cmVkYmFnXzFcIn0pXG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInNob3dSZXdhcmRWaWRlb0FkXCIsXCIyXCIpXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0YXJnZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbGlja0Zsb2F0ZSwgdGhpcyk7XG4gICAgICAgIC8vIHRhcmdldC5kZXN0cm95KCk7XG4gICAgICAgIC8vIHRhcmdldCA9IG51bGw7XG4gICAgICAgIC8vIH0sIDEpXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgLyoqXG4gICAgKiDph5HluIHpo57muoVcbiAgICAqIFxuICAgICogQHBhcmFtIHtjYy5WZWMyfSBjIOWunuS+i+aVsOmHj1xuICAgICogQHBhcmFtIHtudW1iZXJ9IG50IOWunuS+i+aXtumXtFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtyYW5kb21TY29wZT04MF0g562J5YiG54K555qE6ZqP5py65rOi5Yqo6IyD5Zu0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRQb3Mg5byA5aeL5L2N572uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZW5kTm9kZSDnu5PmnZ/oioLngrlcbiAgICAqL1xuICAgIHNob3dQYWNrZXRBbmltKGM6IG51bWJlciwgbnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDgwLCBzdGFydFBvczogY2MuVmVjMyA9IGNjLnYzKDAsIDApLCBlbmROb2RlOiBjYy5Ob2RlLCBjYWxsOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzE0XSwgZmFsc2UsIDEpO1xuICAgICAgICBsZXQgbmV3VGltZSA9IG50O1xuICAgICAgICBsZXQgdGVtcFBsYXllciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFBvcylcblxuICAgICAgICBsZXQgZW5kUCA9IGVuZE5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICBlbmRQID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVuZE5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlbmRQKSlcbiAgICAgICAgbGV0IF9jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFja2V0KTtcbiAgICAgICAgICAgIHByZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBwcmUuc2V0UG9zaXRpb24odGVtcFBsYXllcilcbiAgICAgICAgICAgIGxldCByYW5udW14ID0gY2MuVG9vbHMuY3JlYXRlUmFuZG9tKC1yYW5kb21TY29wZSwgcmFuZG9tU2NvcGUpOy8vICh0aGlzLnJhbmRvbTIgLSB0aGlzLnJhbmRvbTEgKyAxKSArIHRoaXMucmFuZG9tMVxuICAgICAgICAgICAgbGV0IHJhbm51bXkgPSBjYy5Ub29scy5jcmVhdGVSYW5kb20oLXJhbmRvbVNjb3BlLCByYW5kb21TY29wZSk7Ly8odGhpcy5yYW5kb20yIC0gdGhpcy5yYW5kb20xICsgMSkgLyAxLjUgKyB0aGlzLnJhbmRvbTEgLyAxLjUpXG4gICAgICAgICAgICBjYy50d2VlbihwcmUpXG4gICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBwb3NpdGlvbjogY2MudjMocmFubnVteCwgcmFubnVteSkgfSwgeyBlYXNpbmc6ICdxdWFkT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXG4gICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoZW5kUCkgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByZS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgX2NvdW50KytcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jb3VudCA9PSBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNsb3NlVmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWKqOeUu+WujOavlVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICB9LCBuZXdUaW1lLCBjKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsICYmIGNhbGwoKVxuICAgICAgICB9LCAyKVxuICAgIH1cbn1cbiJdfQ==