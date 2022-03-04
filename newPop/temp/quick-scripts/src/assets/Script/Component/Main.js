"use strict";
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