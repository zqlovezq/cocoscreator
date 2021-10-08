window.__require = function e(t, o, i) {
function c(n, s) {
if (!o[n]) {
if (!t[n]) {
var r = n.split("/");
r = r[r.length - 1];
if (!t[r]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(r, !0);
if (a) return a(r, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = r;
}
var d = o[n] = {
exports: {}
};
t[n][0].call(d.exports, function(e) {
return c(t[n][1][e] || e);
}, d, d.exports, e, t, o, i);
}
return o[n].exports;
}
for (var a = "function" == typeof __require && __require, n = 0; n < i.length; n++) c(i[n]);
return c;
}({
Config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6b4a04rebRMUI4NhPKaXcvz", "Config");
o.__esModule = !0;
o.default = void 0;
o.default = {
Drill: {
score: 600,
speed: 10
},
DrillMouse: {
score: 700,
speed: 10
},
Tnt: {
score: 10,
speed: 7
},
Mouse: {
score: 50,
speed: 10
},
Red: {
score: 0,
speed: 10
},
Mystery: {
score: 0,
speed: 10
},
"Gold-0": {
score: 50,
speed: 10
},
"Gold-1": {
score: 100,
speed: 8
},
"Gold-2": {
score: 150,
speed: 7
},
"Gold-3": {
score: 200,
speed: 5
},
"Gold-4": {
score: 300,
speed: 4
},
"Gold-5": {
score: 400,
speed: 3
},
"Gold-6": {
score: 500,
speed: 2
},
"Stone-0": {
score: 10,
speed: 7
},
"Stone-1": {
score: 30,
speed: 7
},
"Stone-2": {
score: 60,
speed: 3
}
};
t.exports = o.default;
cc._RF.pop();
}, {} ],
Hook: [ function(e, t) {
"use strict";
cc._RF.push(t, "5d771RnIftD4KOCJTnyU0cq", "Hook");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.init();
},
init: function() {
this.Canvas = cc.find("Canvas");
this.Main = this.Canvas.getComponent("Main");
this.Prefab = this.Main.Prefab;
this.Item = cc.find("Canvas/Header/Miner/Hook/item");
this.onCollisionEnter = this.onCollisionEnterA;
},
onCollisionEnterA: function(e) {
if (2 != this.Main.HookState) {
this.other = e;
this.isWall = this.Wall(e);
this.isTnt = this.Tnt(e);
this.isMouse = this.Mouse(e);
if (this.isWall) this.Main.PullBackHook(); else {
if (this.isTnt) {
this.Main.destroyTnt(e.node);
e.node.getChildByName("icon").active = !1;
var t = e.node.boom;
t.active = !0;
t.getComponent(cc.Animation).play("boom");
cc.zm.showShake && cc.sys.isNative && jsb.Device.vibrate(.3);
}
this.isMouse && e.node.stopAllActions();
this.Main.SetSpeed(e);
cc.zm.showMusic && cc.audioEngine.play(this.Main.CollisionAudio);
this.other.node.y = -(this.Main.Hook.height + 2);
this.other.node.x = -this.Main.Hook.width / 2;
e.node.parent = this.Item;
e.node.anchorY = 1;
this.node.getComponent(cc.Sprite).spriteFrame = this.Main.HookFrames[1];
this.Main.PullBackHook();
}
}
},
MoveItemToHook: function() {
if (!this.isWall) {
this.other.node.y = -(this.Main.Hook.height + 2);
this.other.node.x = -this.Main.Hook.width / 2;
}
},
Wall: function(e) {
return "Wall" == e.node.group;
},
Tnt: function(e) {
return "Tnt" == e.node.group;
},
Mouse: function(e) {
return "Mouse" == e.node.group;
},
update: function() {
this.other && this.other.node && 2 == this.Main.HookState && this.MoveItemToHook();
}
});
cc._RF.pop();
}, {} ],
IndexMain: [ function(e, t) {
"use strict";
cc._RF.push(t, "ec6barLP8hJ4Lk8WUBUuH5V", "IndexMain");
var o = cc.Enum({
DAY_1: 0,
DAY_2: 1,
DAY_3: 2,
DAY_4: 3,
DAY_5: 4,
DAY_6: 5,
DAY_7: 6,
RED_5: 7,
RED_10: 8,
BOOM: 9,
LOCK: 10,
SHOUCE: 11,
POWER: 12
});
cc.Class({
extends: cc.Component,
properties: {
BGM: {
default: null,
type: cc.AudioClip
},
SevenFrames: {
type: cc.SpriteFrame,
default: []
},
AwardFrames: {
type: cc.SpriteFrame,
default: []
},
TextFrames: {
type: cc.SpriteFrame,
default: []
}
},
onLoad: function() {
cc.zm = {};
cc.zm.videoAd = {};
cc.zm.videoAd.clickSign = !0;
cc.zm.videoAd.clickTable = !0;
cc.Tools.screenAdapter();
cc.Tools.dot("enter_main", null);
var e = cc.find("Canvas/First");
e.active = !1;
if (!cc.sys.localStorage.getItem("first")) {
cc.sys.localStorage.setItem("first", !0);
this.scheduleOnce(function() {
e.scale = 0;
e.active = !0;
cc.tween(e).to(.5, {
scale: 1
}).start();
}, 1);
}
this.SetLayer = cc.find("Canvas/SetLayer");
this.SignLayer = cc.find("Canvas/SignLayer");
this.TurntableLayer = cc.find("Canvas/TurntableLayer");
this.GetMonetyLayer = cc.find("Canvas/GetMoneyLayer");
this.SevenWorkLayer = cc.find("Canvas/SevenWorkLayer");
this.RedPoolLayer = cc.find("Canvas/RedPoolLayer");
this.GetGoodLayer = cc.find("Canvas/GetGood");
this.SeeVideolayer = cc.find("Canvas/SeeVideolayer");
this.ResumeLayer = cc.find("Canvas/ResumeLayer");
cc.zm.showMusic = !0;
cc.zm.showShake = !0;
this.countDownTime = 0;
this.signNumber = 0;
this.BGM_ID = cc.audioEngine.play(this.BGM);
cc.director.preloadScene("Game");
var t = cc.find("Canvas/Guide");
t.active = !1;
t.getChildByName("guide_0").active = !1;
t.getChildByName("guide_4").active = !1;
if ("over" !== cc.sys.localStorage.getItem("guide")) {
if (!cc.sys.localStorage.getItem("guide")) {
this.guide = !0;
t.active = !0;
t.getChildByName("guide_0").active = !0;
}
if ("4" === cc.sys.localStorage.getItem("guide")) {
this.guide = !1;
t.active = !0;
t.getChildByName("guide_4").active = !0;
}
}
cc.Tools.showBanner();
this.getUserInfo();
this.sign_in_acti = 0;
this.turntable_acti = 0;
this.cash_out_acti = 0;
this.bank_acti = 0;
this.jackpot_acti = 0;
this.level_start = 0;
},
getUserInfo: function() {
var e = this;
cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
e.userInfo = t.data;
cc.zm.userInfo = e.userInfo;
console.log("cocos----user info " + JSON.stringify(e.userInfo));
cc.Tools.dot("sign_in", {
sigsign_in_time: new Date()
});
e.showIndexLayer();
e.PowerTime();
});
},
PowerTime: function() {
var e = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);
if (cc.zm.userInfo.power < 5) this.schedule(this.PowerTimeSchedule, 1); else {
e.string = "00:00";
this.unschedule(this.PowerTimeSchedule);
}
},
PowerTimeSchedule: function() {
if (cc.zm.userInfo.power_sec <= 0) {
this.unschedule(this.PowerTimeSchedule);
this.getUserInfo();
} else {
cc.find("Canvas/Index/Power/time").getComponent(cc.Label).string = this.changeSecond(cc.zm.userInfo.power_sec);
cc.zm.userInfo.power_sec--;
}
},
changeSecond: function(e) {
return "0" + Math.floor(e / 60) + ":" + (e % 60 >= 10 ? e % 60 : "0" + e % 60);
},
guideOver: function() {
cc.find("Canvas/Guide").active = !1;
cc.sys.localStorage.setItem("guide", "over");
},
StartGame: function() {
var e = this;
cc.audioEngine.stop(this.BGM_ID);
this.guide && cc.sys.localStorage.setItem("guide", 1);
cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(t) {
e.level_start++;
var o = {
sign_in_acti: e.sign_in_acti,
turntable_acti: e.turntable_acti,
cash_out_acti: e.cash_out_acti,
bank_acti: e.bank_acti,
jackpot_acti: e.jackpot_acti,
level_start: e.level_start
};
cc.Tools.dot("click", o);
cc.zm.LevelInfo = t.data;
console.log("cocos----关卡信息=", JSON.stringify(cc.zm.LevelInfo));
cc.zm.userInfo.power <= 0 ? e.showSeeVideolayer() : cc.director.loadScene("Game");
});
},
showSeeVideolayer: function() {
cc.Tools.showBanner();
this.SeeVideolayer.active = !0;
},
seeVideoAward: function() {
cc.zm.videoAd.enterGame = !1;
cc.Tools.showJiliAd();
this.SeeVideolayer.active = !1;
},
showSignLayer: function() {
var e = this;
cc.Tools.sendRequest("pit.v1.PitSvc/SignInList", "GET", {}).then(function(t) {
var o = t.data.items;
cc.Tools.showBanner();
e.sign_in_acti++;
var i = {
sign_in_acti: e.sign_in_acti,
turntable_acti: e.turntable_acti,
cash_out_acti: e.cash_out_acti,
bank_acti: e.bank_acti,
jackpot_acti: e.jackpot_acti,
level_start: e.level_start
};
cc.Tools.dot("click", i);
e.signDay = t.data.day;
e.SignLayer.active = !0;
for (var c = 1; c <= 7; c++) {
var a = e.SignLayer.getChildByName("day_" + c);
o[c - 1].status ? e.completeBtn(a) : c === e.signDay ? e.selectBtn(a) : e.unSelectBtn(a);
}
});
},
showSetLayer: function() {
this.SetLayer.active = !0;
cc.Tools.showBanner();
this.SetLayer.getChildByName("nikename").getComponent(cc.Label).string = this.userInfo.nick_name;
this.SetLayer.getChildByName("userid").getComponent(cc.Label).string = "用户ID：" + this.userInfo.user_id;
var e = this.SetLayer.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite), t = this.userInfo.avatar_url;
cc.assetManager.loadRemote(t, {
ext: ".png"
}, function(t, o) {
e.spriteFrame = new cc.SpriteFrame(o);
});
},
showIndexLayer: function() {
cc.Tools.hideBanner();
cc.find("Canvas/Index/GetMoney/lbl").getComponent(cc.Label).string = this.userInfo.red_pack;
cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power;
cc.find("Canvas/Index/YuanBao/lbl").getComponent(cc.Label).string = this.userInfo.gc;
cc.find("Canvas/Index/Gold/lbl").getComponent(cc.Label).string = this.userInfo.score;
var e = cc.find("Canvas/Index/BeginGame").getComponent(cc.Button);
if (cc.zm.userInfo.win) {
e.enableAutoGrayEffect = !0;
e.interactable = !1;
} else e.interactable = !0;
},
showTurntableLayer: function() {
var e = this;
this.point = this.TurntableLayer.getChildByName("Pointer");
this.point.angle = 360;
cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
cc.Tools.showBanner();
e.turntable_acti++;
var o = {
sign_in_acti: e.sign_in_acti,
turntable_acti: e.turntable_acti,
cash_out_acti: e.cash_out_acti,
bank_acti: e.bank_acti,
jackpot_acti: e.jackpot_acti,
level_start: e.level_start
};
cc.Tools.dot("click", o);
cc.zm.userInfo = t.data;
e.TurntableLayer.active = !0;
var i = e.TurntableLayer.getChildByName("beginBtn").getComponent(cc.Button);
if (cc.zm.userInfo.sec < 0) {
i.enableAutoGrayEffect = !0;
i.interactable = !1;
e.countDownTime = Math.abs(cc.zm.userInfo.sec);
e.schedule(e.TurnTableCountDown, 1);
} else i.interactable = !0;
});
},
TurnTableCountDown: function() {
if (this.countDownTime) if (this.countDownTime < 0) this.unschedule(this.TurnTableCountDown); else {
var e = this.TurntableLayer.getChildByName("countLbl").getComponent(cc.Label);
this.countDownTime--;
e.string = this.changeSecond(this.countDownTime);
}
},
showRedPoolLayer: function() {
var e = this;
cc.Tools.sendRequest("pit.v1.PitSvc/JackPot", "GET", {}).then(function(t) {
cc.Tools.showBanner();
e.jackpot_acti++;
var o = {
sign_in_acti: e.sign_in_acti,
turntable_acti: e.turntable_acti,
cash_out_acti: e.cash_out_acti,
bank_acti: e.bank_acti,
jackpot_acti: e.jackpot_acti,
level_start: e.level_start
};
cc.Tools.dot("click", o);
e.RedPoolLayer.active = !0;
for (var i = t.data, c = [ "kai", "xin", "kuang", "gong" ], a = 0; a < 4; a++) {
var n = i[c[a]];
e.RedPoolLayer.getChildByName(c[a]).getComponent(cc.Label).string = "x" + n;
}
e.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label).string = i.amount;
e.RedPoolLayer.getChildByName("count_1").getComponent(cc.Label).string = i.hour;
e.RedPoolLayer.getChildByName("count_2").getComponent(cc.Label).string = i.minute < 10 ? "0" + i.minute : i.minute;
});
},
showSevenWorkLayer: function() {
var e = this;
cc.Tools.sendRequest("pit.v1.PitSvc/Missions", "GET", {}).then(function(t) {
cc.Tools.showBanner();
var o = t.data.items, i = t.data.day;
if (e.signNumber !== i) {
for (var c = [], a = 0; a < o.length; a++) if (!o[a].status) {
e.signNumber = o[a].num;
break;
}
e.signNumber > i && (e.signNumber = i);
for (var n = 0; n < o.length; n++) e.signNumber === o[n].num && c.push(o[n]);
e.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite).spriteFrame = e.SevenFrames[c[0].num - 1];
var s = e.SevenWorkLayer.getChildByName("layout");
1 === c.length && (s.getChildByName("layout_2").active = !1);
for (var r = 0; r < c.length; r++) {
var l = c[r], d = s.getChildByName("layout_" + (r + 1));
d.active = !0;
var h = d.getChildByName("getMoneyBtn");
h._id = l.id;
h.value = l.value;
var u = h.getComponent(cc.Button);
if (1 === l.status) {
u.enableAutoGrayEffect = !0;
u.interactable = !1;
} else {
u.interactable = !0;
var m = !1;
l.curr_pass_stage >= l.need_pass_stage && l.curr_sign_in >= l.need_sign_in && l.curr_invite >= l.need_invite && (m = !0);
h.complete = !!m;
}
d.getChildByName("lbl1").getComponent(cc.Label).string = l.value;
d.getChildByName("lbl2").getComponent(cc.Label).string = "观看" + l.need_ad + "个视频";
d.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = l.curr_ad / l.need_ad;
d.getChildByName("barLbl").getComponent(cc.Label).string = l.curr_ad + "/" + l.need_ad;
var g = d.getChildByName("layout"), v = g.getChildByName("item_0"), f = g.getChildByName("item_1"), p = g.getChildByName("item_2");
if (l.need_pass_stage) {
v.active = !0;
v.getChildByName("lbl").getComponent(cc.Label).string = "通过第" + l.need_pass_stage + "关";
v.getChildByName("icon").getChildByName("arrow").active = l.curr_pass_stage >= l.need_pass_stage;
} else v.active = !1;
if (l.need_sign_in) {
f.active = !0;
f.getChildByName("lbl").getComponent(cc.Label).string = "领取签到奖励";
f.getChildByName("icon").getChildByName("arrow").active = l.curr_sign_in >= l.need_sign_in;
} else f.active = !1;
if (l.need_invite) {
p.active = !0;
p.getChildByName("lbl").getComponent(cc.Label).string = "邀请" + l.need_invite + "个好友";
p.getChildByName("icon").getChildByName("arrow").active = l.curr_invite >= l.need_invite;
} else p.active = !1;
}
e.SevenWorkLayer.active = !0;
}
});
},
showResumeLayer: function() {
this.ResumeLayer.active = !0;
},
resumeLevel: function() {
var e = this;
cc.Tools.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then(function() {
e.ResumeLayer.active = !1;
e.getUserInfo();
});
},
sevenWorkGetMoney: function(e) {
var t = this;
this.cash_out_acti++;
var o = {
sign_in_acti: this.sign_in_acti,
turntable_acti: this.turntable_acti,
cash_out_acti: this.cash_out_acti,
bank_acti: this.bank_acti,
jackpot_acti: this.jackpot_acti,
level_start: this.level_start
};
cc.Tools.dot("click", o);
var i = e.target;
i.complete ? cc.Tools.sendRequest("pit.v1.PitSvc/PullMission", "POST", {
id: i._id
}).then(function() {
var e = i.getComponent(cc.Button);
e.enableAutoGrayEffect = !0;
e.interactable = !1;
t.SevenWorkLayer.getChildByName("getLayer").active = !0;
t.showSevenWorkLayer();
var o = {
cash_type: "红包提现",
cash_num: i.value,
cash_times: "",
cash_result: "成功"
};
console.log("cocos----打点数据", JSON.stringify(o));
cc.Tools.dot("cash_out", o);
}) : cc.Tools.showTips(this.node, "条件未达成");
},
showGetMoneyLayer: function() {
var e = this;
cc.Tools.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function(t) {
cc.Tools.showBanner();
e.bank_acti++;
var o = {
sign_in_acti: e.sign_in_acti,
turntable_acti: e.turntable_acti,
cash_out_acti: e.cash_out_acti,
bank_acti: e.bank_acti,
jackpot_acti: e.jackpot_acti,
level_start: e.level_start
};
cc.Tools.dot("click", o);
var i = t.data, c = i.gc || 0;
e.getMoneyStage = 0;
for (var a = [ .3, .5, 1, 2, 5, 10, 20 ], n = 0; n < i.items.Length; n++) if (i.items[n].times) {
e.getMoneyStage = a[n];
break;
}
e.GetMonetyLayer.active = !0;
e.GetMonetyLayer.getChildByName("YuanBao_Number").getComponent(cc.Label).string = c;
e.extractMoney = c / 1e4;
e.GetMonetyLayer.getChildByName("Change_Number").getComponent(cc.Label).string = e.extractMoney + "元";
e.choiceBtn = null;
var s = e.GetMonetyLayer.getChildByName("getMoneyBtn").getComponent(cc.Button);
s.enableAutoGrayEffect = !0;
s.interactable = !1;
});
},
choiceGetMoneyBtn: function(e, t) {
var o = e.target;
if (null === this.choiceBtn) {
this.choiceBtn = o;
this.choiceBtn.money = Number(t);
this.selectBtn(o);
} else {
this.unSelectBtn(this.choiceBtn);
this.choiceBtn = o;
this.choiceBtn.money = Number(t);
this.selectBtn(o);
}
this.GetMonetyLayer.getChildByName("getMoneyBtn").getComponent(cc.Button).interactable = !0;
},
clickGetMoneyBtn1: function(e) {
var t = this;
this.cash_out_acti++;
var o = {
sign_in_acti: this.sign_in_acti,
turntable_acti: this.turntable_acti,
cash_out_acti: this.cash_out_acti,
bank_acti: this.bank_acti,
jackpot_acti: this.jackpot_acti,
level_start: this.level_start
};
cc.Tools.dot("click", o);
var i = e.target;
null !== this.choiceBtn && (this.extractMoney < this.choiceBtn.money ? cc.Tools.showTips(this.node, "元宝数量不足") : this.choiceBtn.money > this.getMoneyStage ? cc.Tools.showTips(this.node, "请先完成上一个档位提现") : cc.Tools.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function() {
var e = {
cash_type: "元宝提现",
cash_num: t.choiceBtn.money,
cash_times: "",
cash_result: "成功"
};
console.log("cocos----打点数据", JSON.stringify(e));
cc.Tools.dot("cash_out", e);
i.parent.getChildByName("getLayer").active = !0;
}));
},
stopBGM: function(e) {
if (cc.zm.showMusic) {
cc.zm.showMusic = !1;
this.unSelectBtn(e.target);
cc.audioEngine.pause(this.BGM_ID);
} else {
cc.zm.showMusic = !0;
this.selectBtn(e.target);
cc.audioEngine.resume(this.BGM_ID);
}
},
shakePhone: function(e) {
if (cc.zm.showShake) {
cc.zm.showShake = !1;
this.unSelectBtn(e.target);
} else {
cc.zm.showShake = !0;
this.selectBtn(e.target);
}
},
selectBtn: function(e) {
e.getChildByName("select").active = !0;
},
unSelectBtn: function(e) {
e.getChildByName("select").active = !1;
},
completeBtn: function(e) {
e.getChildByName("select").active = !1;
e.getChildByName("complete").active = !0;
},
ExitBackBtn: function(e) {
e.target.parent.active = !1;
if (this.choiceBtn) {
this.unSelectBtn(this.choiceBtn);
this.choiceBtn = null;
}
!0 === this.TurntableLayer.active && this.showTurntableLayer();
this.signNumber = 0;
this.getUserInfo();
},
clickSignBtn: function() {
cc.Tools.showJiliAd();
cc.sys.isNative || (cc.zm.videoAd.clickSign = !1);
},
clickTurnTableBtn: function() {
if (!(this.countDownTime > 0)) {
cc.Tools.showJiliAd();
cc.sys.isNative || (cc.zm.videoAd.clickTable = !1);
}
},
createRandm: function(e, t) {
var o = (t += 1) - e, i = Math.random() * o + e;
return parseInt(i);
},
update: function() {
var e = this;
if (this.beginTurn) {
this.point.angle -= this.speed;
if (this.point.angle <= 0) {
this.point.angle = 360;
this.circle++;
if (this.circle % 2 == 0) {
this.speed -= this.value;
4.5 === this.value ? this.value = 4.5 : this.value += 1.5;
}
}
if (this.speed <= 5 && this.point.angle <= this.endAngle) {
this.beginTurn = !1;
this.point.angle = this.endAngle;
}
}
if (!cc.zm.videoAd.clickSign) {
console.log("cocos----获取签到奖励");
cc.zm.videoAd.clickSign = !0;
cc.Tools.sendRequest("pit.v1.PitSvc/SignIn", "POST", sendData).then(function(t) {
var i = e.SignLayer.getChildByName("day_" + e.signDay);
e.completeBtn(i);
var c = t.data;
e.showPop([ "三元红包", "炸药x1", "药水x1", "500元宝", "8.88元红包", "时钟x1", "18.88元红包" ][e.signDay - 1], o["DAY_" + e.signDay], c.gc, c.card);
}).catch(function() {
cc.Tools.showTips(e.node, "今日奖励已领取");
});
}
if (!cc.zm.videoAd.clickTable) {
cc.zm.videoAd.clickTable = !0;
var t = {
ad: cc.zm.ad
}, i = {
1: 60,
10: 240,
11: 180,
12: 120,
31: 360,
32: 300
};
cc.Tools.sendRequest("pit.v1.PitSvc/Lottery", "POST", t).then(function(t) {
e.endAngle = i["" + t.data.award];
e.point = e.TurntableLayer.getChildByName("Pointer");
e.beginTurn = !0;
e.point.angle = 360;
e.speed = 18;
e.value = 1;
e.circle = 0;
e.scheduleOnce(function() {
var i = t.data, c = {
1: {
name: "体力x1",
index: o.POWER
},
10: {
name: "炸弹x1",
index: o.BOOM
},
11: {
name: "时钟x1",
index: o.LOCK
},
12: {
name: "石化手册x1",
index: o.SHOUCE
},
31: {
name: "五元红包",
index: o.RED_5
},
32: {
name: "十元红包",
index: o.RED_10
}
}[i.award];
e.showPop(c.name, c.index, i.gc, i.card);
}, 4.5);
});
}
},
showPop: function(e, t, o, i) {
this.GetGoodLayer.active = !0;
cc.Tools.showBanner();
var c = this.GetGoodLayer.getChildByName("layout"), a = this.GetGoodLayer.getChildByName("icon").getComponent(cc.Sprite);
this.GetGoodLayer.getChildByName("lbl").getComponent(cc.Label).string = "获得" + e;
a.spriteFrame = this.AwardFrames[t];
var n = c.getChildByName("layout_1"), s = c.getChildByName("layout_2");
if (o) {
n.active = !0;
n.getChildByName("lbl").getComponent(cc.Label).string = "获得元宝+" + o;
} else n.active = !1;
if (i) {
s.active = !0;
s.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.TextFrames[i - 1];
} else s.active = !1;
},
ExitWxLogin: function() {
cc.wxToken = null;
cc.wxLoginResultcode = null;
cc.sys.localStorage.removeItem("token");
cc.director.loadScene("Login");
},
showUserProtocol: function() {
this.SetLayer.getChildByName("user_protocol").active = !0;
},
hideUserProtocol: function() {
this.SetLayer.getChildByName("user_protocol").active = !1;
},
showUserPrivacy: function() {
this.SetLayer.getChildByName("user_privacy").active = !0;
},
hideUserPrivacy: function() {
this.SetLayer.getChildByName("user_privacy").active = !1;
}
});
cc._RF.pop();
}, {} ],
Level: [ function(e, t) {
"use strict";
cc._RF.push(t, "19283dAXTFAOrQfB3/KaAjP", "Level");
t.exports = {
level0: {
id: "零",
score: 500,
maxScore: 1500,
totalScore: 1500,
extra: "red,mystery",
redPack: 88.88
},
level1: {
id: "一",
score: 500,
maxScore: 1500,
totalScore: 1500,
good: "b|150,g|1350",
extra: "red",
redPack: 88.88
},
level2: {
id: "二",
score: 925,
maxScore: 1840,
totalScore: 3340,
good: "b|300,g|940,m|200,d|400",
extra: "red",
redPack: 66.66
},
level3: {
id: "三",
score: 1560,
maxScore: 1e3,
totalScore: 4340,
good: "b|200,g|800",
redPack: 20.96
},
level4: {
id: "四",
score: 2405,
maxScore: 1500,
totalScore: 5840,
good: "b|200,g|1225,m|75",
extra: "red",
redPack: 14.36
},
level5: {
id: "五",
score: 3460,
maxScore: 1300,
totalScore: 7140,
good: "b|130,g|370,d|800",
boom: 1,
redPack: 10.71
},
level6: {
id: "六",
score: 4725,
maxScore: 2e3,
totalScore: 9140,
good: "b|200,d|1200,g|600",
redPack: 8.42
},
level7: {
id: "七",
score: 6200,
maxScore: 1500,
totalScore: 10640,
good: "b|200,g|1000,d|400",
extra: "red,mystery",
boom: 2,
redPack: 6.88
},
level8: {
id: "八",
score: 7500,
maxScore: 2e3,
totalScore: 12640,
good: "b|200,g|1400,m|400",
redPack: 5.77
},
level9: {
id: "九",
score: 9395,
maxScore: 2e3,
totalScore: 14640,
good: "b|300,g|1300,d|400",
redPack: 4.94
},
level10: {
id: "十",
score: 10500,
maxScore: 2e3,
totalScore: 16640,
good: "b|200,g|1200,d|400,m|200",
extra: "red",
redPack: 4.3
},
level11: {
id: "十一",
score: 12e3,
maxScore: 1500,
totalScore: 18140,
good: "b|200,g|850,d|400",
mouse: "1",
extra: "red,mystery",
boom: 1,
redPack: 3.8
},
level12: {
id: "十二",
score: 13e3,
maxScore: 3e3,
totalScore: 21140,
good: "b|200,g|1400,d|1200,m|200",
extra: "red",
redPack: 3.39
},
level13: {
id: "十三",
score: 15700,
maxScore: 2500,
totalScore: 23640,
good: "b|200,g|1500,d|800",
extra: "red",
redPack: 3.05
},
level14: {
id: "十四",
score: 17500,
maxScore: 2e3,
totalScore: 25640,
good: "b|200,g|900,d|800",
mouse: "2",
boom: 2,
redPack: 2.76
},
level15: {
id: "十五",
score: 18500,
maxScore: 3e3,
totalScore: 28640,
good: "b|200,g|800,d|2000",
extra: "red,mystery",
redPack: 2.52
},
level16: {
id: "十六",
score: 21e3,
maxScore: 3e3,
totalScore: 31640,
good: "b|200,g|1300,d|800",
mouse: ",1",
redPack: 2.32
},
level17: {
id: "十七",
score: 22500,
maxScore: 3500,
totalScore: 35140,
good: "g|1125,b|175,m|100",
mouse: ",3",
redPack: 2.14
},
level18: {
id: "十八",
score: 24e3,
maxScore: 5e3,
totalScore: 40140,
good: "g|1000,d|800,m|200",
extra: "red,mystery",
mouse: "4,4",
redPack: 1.99
},
level19: {
id: "十九",
score: 3e4,
maxScore: 4700,
totalScore: 44840,
good: "b|200,g|1100,d|1200,m|100",
mouse: ",3",
redPack: 1.85
},
level20: {
id: "二十",
score: 33e3,
maxScore: 4e3,
totalScore: 48840,
good: "b|200,g|1300,m|200",
mouse: "4,3",
extra: "red",
boom: 1,
redPack: 1.73
},
level21: {
id: "二十一",
score: 36500,
maxScore: 4e3,
totalScore: 52840,
good: "g|500",
mouse: ",5",
boom: 1,
redPack: 1.62
},
level22: {
id: "二十二",
score: 39e3,
maxScore: 4e3,
totalScore: 56840,
good: "d|4000",
extra: "red",
boom: 2,
redPack: 1.53
},
level23: {
id: "二十三",
score: 41500,
maxScore: 4e3,
totalScore: 60840,
good: "b|200,g|1500,m|200",
mouse: ",3",
extra: ",mystery",
boom: 2,
redPack: 1.44
},
level24: {
id: "二十四",
score: 43500,
maxScore: 4e3,
totalScore: 64840,
good: "b|200,g|1400,d|800,m|200",
mouse: ",2",
extra: "red",
redPack: 1.36
},
level25: {
id: "二十五",
score: 46e3,
maxScore: 4200,
totalScore: 69040,
mouse: ",6",
boom: 3,
redPack: 1.29
},
level26: {
id: "二十六",
score: 49500,
maxScore: 5e3,
totalScore: 74040,
mouse: "16,6",
boom: 1,
redPack: 1.22
},
level27: {
id: "二十七",
score: 52500,
maxScore: 5e3,
totalScore: 79040,
good: "b|200,g|500,d|3600",
mouse: ",1",
boom: 1,
extra: "red",
redPack: 1.17
},
level28: {
id: "二十八",
score: 55500,
maxScore: 5e3,
totalScore: 84040,
good: "b|200,g|1100,m|150,d|1200",
mouse: "5,3",
boom: 1,
extra: "red",
redPack: 1.11
},
level29: {
id: "二十九",
score: 58e3,
maxScore: 5e3,
totalScore: 89040,
good: "b|200,g|1300,d|1200",
mouse: "4,3",
extra: "red",
boom: 1,
redPack: 1.06
},
level30: {
id: "三十",
score: 62e3,
maxScore: 5e3,
totalScore: 94040,
good: "b|200,g|1250,d|2000",
mouse: "3,2",
boom: 3,
extra: "red",
redPack: 1.01
}
};
cc._RF.pop();
}, {} ],
MD5: [ function(e, t) {
"use strict";
cc._RF.push(t, "d3587Rv7sxDF50sBHdGpncc", "MD5");
function o(e, t) {
return e << t | e >>> 32 - t;
}
function i(e, t) {
var o, i, c, a, n;
c = 2147483648 & e;
a = 2147483648 & t;
n = (1073741823 & e) + (1073741823 & t);
return (o = 1073741824 & e) & (i = 1073741824 & t) ? 2147483648 ^ n ^ c ^ a : o | i ? 1073741824 & n ? 3221225472 ^ n ^ c ^ a : 1073741824 ^ n ^ c ^ a : n ^ c ^ a;
}
function c(e, t, o) {
return e & t | ~e & o;
}
function a(e, t, o) {
return e & o | t & ~o;
}
function n(e, t, o) {
return e ^ t ^ o;
}
function s(e, t, o) {
return t ^ (e | ~o);
}
function r(e, t, a, n, s, r, l) {
e = i(e, i(i(c(t, a, n), s), l));
return i(o(e, r), t);
}
function l(e, t, c, n, s, r, l) {
e = i(e, i(i(a(t, c, n), s), l));
return i(o(e, r), t);
}
function d(e, t, c, a, s, r, l) {
e = i(e, i(i(n(t, c, a), s), l));
return i(o(e, r), t);
}
function h(e, t, c, a, n, r, l) {
e = i(e, i(i(s(t, c, a), n), l));
return i(o(e, r), t);
}
function u(e) {
for (var t, o = e.length, i = o + 8, c = 16 * ((i - i % 64) / 64 + 1), a = Array(c - 1), n = 0, s = 0; s < o; ) {
n = s % 4 * 8;
a[t = (s - s % 4) / 4] = a[t] | e.charCodeAt(s) << n;
s++;
}
n = s % 4 * 8;
a[t = (s - s % 4) / 4] = a[t] | 128 << n;
a[c - 2] = o << 3;
a[c - 1] = o >>> 29;
return a;
}
function m(e) {
var t, o = "", i = "";
for (t = 0; t <= 3; t++) o += (i = "0" + (e >>> 8 * t & 255).toString(16)).substr(i.length - 2, 2);
return o;
}
function g(e) {
for (var t = "", o = 0; o < e.length; o++) {
var i = e.charCodeAt(o);
if (i < 128) t += String.fromCharCode(i); else if (i > 127 && i < 2048) {
t += String.fromCharCode(i >> 6 | 192);
t += String.fromCharCode(63 & i | 128);
} else {
t += String.fromCharCode(i >> 12 | 224);
t += String.fromCharCode(i >> 6 & 63 | 128);
t += String.fromCharCode(63 & i | 128);
}
}
return t;
}
t.exports = function(e) {
var t, o, c, a, n, s, v, f, p, y = Array();
y = u(e = g(e));
s = 1732584193;
v = 4023233417;
f = 2562383102;
p = 271733878;
for (t = 0; t < y.length; t += 16) {
o = s;
c = v;
a = f;
n = p;
s = r(s, v, f, p, y[t + 0], 7, 3614090360);
p = r(p, s, v, f, y[t + 1], 12, 3905402710);
f = r(f, p, s, v, y[t + 2], 17, 606105819);
v = r(v, f, p, s, y[t + 3], 22, 3250441966);
s = r(s, v, f, p, y[t + 4], 7, 4118548399);
p = r(p, s, v, f, y[t + 5], 12, 1200080426);
f = r(f, p, s, v, y[t + 6], 17, 2821735955);
v = r(v, f, p, s, y[t + 7], 22, 4249261313);
s = r(s, v, f, p, y[t + 8], 7, 1770035416);
p = r(p, s, v, f, y[t + 9], 12, 2336552879);
f = r(f, p, s, v, y[t + 10], 17, 4294925233);
v = r(v, f, p, s, y[t + 11], 22, 2304563134);
s = r(s, v, f, p, y[t + 12], 7, 1804603682);
p = r(p, s, v, f, y[t + 13], 12, 4254626195);
f = r(f, p, s, v, y[t + 14], 17, 2792965006);
s = l(s, v = r(v, f, p, s, y[t + 15], 22, 1236535329), f, p, y[t + 1], 5, 4129170786);
p = l(p, s, v, f, y[t + 6], 9, 3225465664);
f = l(f, p, s, v, y[t + 11], 14, 643717713);
v = l(v, f, p, s, y[t + 0], 20, 3921069994);
s = l(s, v, f, p, y[t + 5], 5, 3593408605);
p = l(p, s, v, f, y[t + 10], 9, 38016083);
f = l(f, p, s, v, y[t + 15], 14, 3634488961);
v = l(v, f, p, s, y[t + 4], 20, 3889429448);
s = l(s, v, f, p, y[t + 9], 5, 568446438);
p = l(p, s, v, f, y[t + 14], 9, 3275163606);
f = l(f, p, s, v, y[t + 3], 14, 4107603335);
v = l(v, f, p, s, y[t + 8], 20, 1163531501);
s = l(s, v, f, p, y[t + 13], 5, 2850285829);
p = l(p, s, v, f, y[t + 2], 9, 4243563512);
f = l(f, p, s, v, y[t + 7], 14, 1735328473);
s = d(s, v = l(v, f, p, s, y[t + 12], 20, 2368359562), f, p, y[t + 5], 4, 4294588738);
p = d(p, s, v, f, y[t + 8], 11, 2272392833);
f = d(f, p, s, v, y[t + 11], 16, 1839030562);
v = d(v, f, p, s, y[t + 14], 23, 4259657740);
s = d(s, v, f, p, y[t + 1], 4, 2763975236);
p = d(p, s, v, f, y[t + 4], 11, 1272893353);
f = d(f, p, s, v, y[t + 7], 16, 4139469664);
v = d(v, f, p, s, y[t + 10], 23, 3200236656);
s = d(s, v, f, p, y[t + 13], 4, 681279174);
p = d(p, s, v, f, y[t + 0], 11, 3936430074);
f = d(f, p, s, v, y[t + 3], 16, 3572445317);
v = d(v, f, p, s, y[t + 6], 23, 76029189);
s = d(s, v, f, p, y[t + 9], 4, 3654602809);
p = d(p, s, v, f, y[t + 12], 11, 3873151461);
f = d(f, p, s, v, y[t + 15], 16, 530742520);
s = h(s, v = d(v, f, p, s, y[t + 2], 23, 3299628645), f, p, y[t + 0], 6, 4096336452);
p = h(p, s, v, f, y[t + 7], 10, 1126891415);
f = h(f, p, s, v, y[t + 14], 15, 2878612391);
v = h(v, f, p, s, y[t + 5], 21, 4237533241);
s = h(s, v, f, p, y[t + 12], 6, 1700485571);
p = h(p, s, v, f, y[t + 3], 10, 2399980690);
f = h(f, p, s, v, y[t + 10], 15, 4293915773);
v = h(v, f, p, s, y[t + 1], 21, 2240044497);
s = h(s, v, f, p, y[t + 8], 6, 1873313359);
p = h(p, s, v, f, y[t + 15], 10, 4264355552);
f = h(f, p, s, v, y[t + 6], 15, 2734768916);
v = h(v, f, p, s, y[t + 13], 21, 1309151649);
s = h(s, v, f, p, y[t + 4], 6, 4149444226);
p = h(p, s, v, f, y[t + 11], 10, 3174756917);
f = h(f, p, s, v, y[t + 2], 15, 718787259);
v = h(v, f, p, s, y[t + 9], 21, 3951481745);
s = i(s, o);
v = i(v, c);
f = i(f, a);
p = i(p, n);
}
return (m(s) + m(v) + m(f) + m(p)).toLowerCase();
};
cc._RF.pop();
}, {} ],
Main: [ function(e, t) {
"use strict";
cc._RF.push(t, "a0a35WjyStJPpmP4ZgIidJg", "Main");
var o = c(e("./Config")), i = c(e("./Level"));
function c(e) {
return e && e.__esModule ? e : {
default: e
};
}
cc.Class({
extends: cc.Component,
properties: {
speed: {
default: 3,
displayName: "钩子速度"
},
rotateSpeed: {
default: 1,
displayName: "钩子旋转速度"
},
HookRange: {
default: 70,
displayName: "钩子旋转角度范围"
},
Prefabs: {
default: [],
type: cc.Prefab
},
InitTime: {
default: 10
},
CollisionAudio: {
type: cc.AudioClip,
default: null
},
AddScroeAudio: {
type: cc.AudioClip,
default: null
},
PropSpriteFrames: {
type: cc.SpriteFrame,
default: []
},
Boom: {
type: cc.Prefab,
default: null
},
HookFrames: {
type: cc.SpriteFrame,
default: []
},
HeroFrames: {
type: cc.SpriteFrame,
default: []
},
LotteryFramse: {
type: cc.SpriteFrame,
default: []
}
},
onLoad: function() {
this.init();
cc.director.preloadScene("Index");
},
setGuide: function() {
var e = this.guideIndex;
if (e <= 3) cc.find("Canvas/Guide").getChildByName("guide_" + e).active = !0; else {
this.guide = !1;
cc.find("Canvas/Guide").active = !1;
}
},
nextGuide: function(e, t) {
var o = cc.find("Canvas/Guide"), i = o.getChildByName("guide_1"), c = o.getChildByName("guide_2"), a = o.getChildByName("guide_3");
i.active = !1;
c.active = !1;
a.active = !1;
if ("2" === t) {
cc.sys.localStorage.setItem("guide", 2);
o.getChildByName("guide_2").active = !0;
} else if ("3" === t) {
cc.sys.localStorage.setItem("guide", 3);
o.getChildByName("guide_3").active = !0;
} else if ("4" === t) {
this.guide = !1;
this.ResumeGameLayer();
cc.sys.localStorage.setItem("guide", 4);
cc.find("Canvas/Guide").active = !1;
}
},
hideNeedLayer: function() {
var e = this;
cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(t) {
cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", {
prop: 4
}).then(function() {
console.log("cocos---使用体力成功");
});
cc.zm.LevelInfo = t.data;
e.NeedLayer.active = !1;
cc.Tools.hideBanner();
e.handleDaoju();
e.adjusBoomLayout();
e.ResumeGameLayer();
cc.zm.LevelInfo.stage <= 5 && cc.Tools.dot("start_" + cc.zm.LevelInfo.stage, null);
});
},
hideLotteryLayer: function() {
this.LotteryLayer.active = !1;
},
showBackLayer: function() {
this.BackLayer.active = !0;
this.PauseGameLayer();
},
init: function() {
var e = this;
this.Miner = cc.find("Canvas/Header/Miner");
this.Hook = cc.find("Canvas/Header/Miner/Hook");
this.HookHeight = this.Hook.height;
this.HookState = 0;
this.curScore = 0;
this.pauseGame = !1;
this.MinerSp = this.Miner.getComponent("sp.Skeleton");
this.seeVideoLayer = cc.find("Canvas/SeeVideolayer");
this.Score = cc.find("Canvas/ScoreAndTarget/Score").getComponent(cc.Label);
this.TargetScore = cc.find("Canvas/ScoreAndTarget/Target").getComponent(cc.Label);
this.Time = cc.find("Canvas/CheckpointAndTime/Time").getComponent(cc.Label);
this.Checkpoint = cc.find("Canvas/CheckpointAndTime/Checkpoint").getComponent(cc.Label);
this.NeedLayer = cc.find("Canvas/NeedLayer");
this.BackLayer = cc.find("Canvas/BackLayer");
this.PropNode = cc.find("Canvas/Header/Prop");
this.LotteryLayer = this.NeedLayer.getChildByName("LotteryLayer");
this.itemArea = cc.find("Canvas/ItemArea");
this.manager = cc.director.getCollisionManager();
this.manager.enabled = !0;
this.Prefab = {};
this.Prefabs.forEach(function(t) {
e.Prefab[t._name] = t;
});
var t = cc.find("Canvas/emitHookBtn");
this.Mask = cc.find("Canvas/Mask");
this.Mask.on(cc.Node.EventType.TOUCH_END, this.CloseMask.bind(this));
t.on(cc.Node.EventType.TOUCH_END, this.emitHookBtn.bind(this));
this.boomNumber = -1;
this.liquidNumber = 0;
this.adjusBoomLayout();
cc.Tools.screenAdapter();
this.ResetInfo();
this.StartTime();
this.SetLevel();
this.CreateTargetScore();
this.CreateItem();
this.redPack = this.levelInfo.redPack;
this.extarRedPack = 0;
this.guideIndex = parseInt(cc.sys.localStorage.getItem("guide"));
if (this.guideIndex < 4 && this.guideIndex >= 1) {
this.guide = !0;
this.PauseGameLayer();
cc.find("Canvas/Guide").active = !0;
this.setGuide();
} else {
this.guide = !1;
this.PauseGameLayer();
cc.find("Canvas/Guide").active = !1;
this.NeedLayer.active = !0;
var o = this.NeedLayer.getChildByName("needScore").getComponent(cc.Label), i = this.NeedLayer.getChildByName("needLevel").getComponent(cc.Label);
o.string = "要求分数：" + this.levelInfo.score;
i.string = "第" + this.levelInfo.id + "关";
var c = [ 10, 11, 13 ][this.createRandm(0, 2)];
this.LotteryProp = c;
var a = this.LotteryLayer.getChildByName("icon").getComponent(cc.Sprite);
10 === c ? a.spriteFrame = this.LotteryFramse[2] : 11 === c ? a.spriteFrame = this.LotteryFramse[0] : 13 === c && (a.spriteFrame = this.LotteryFramse[1]);
}
},
LookVideoGetAward: function() {
var e = this;
cc.Tools.showJiliAd();
var t = {
ad: cc.zm.ad,
weapon: this.LotteryProp
};
cc.Tools.sendRequest("pit.v1.PitSvc/Lottery2", "POST", t).then(function(t) {
e.LotteryAward = t.data.award;
e.hideLotteryLayer();
});
},
handleDaoju: function() {
for (var e = this, t = cc.zm.LevelInfo.weapon, o = {
1: "体力",
10: "炸弹",
11: "时钟",
12: "石化手册",
13: "药水",
14: "三叶草"
}, i = function(i) {
if (10 === t[i].prop) e.boomNumber = t[i].num - 1; else if (t[i].num) {
var c = {
prop: t[i].prop
};
cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", c).then(function() {
console.log("cocos---使用成功-", o[t[i].prop]);
});
}
11 === t[i].prop && (e.clockNumber = t[i].num);
12 === t[i].prop && (e.handbookNumber = t[i].num);
13 === t[i].prop && (e.liquidNumber = t[i].num);
14 === t[i].prop && (e.cloverNumber = t[i].num);
}, c = 0; c < t.length; c++) i(c);
},
HookRoTate: function() {
if (!this.HookState) {
this.Hook.angle >= 70 ? this.rotateSpeed = -this.rotateSpeed : this.Hook.angle <= -70 && (this.rotateSpeed = Math.abs(this.rotateSpeed));
this.Hook.angle += this.rotateSpeed;
}
},
emitHookBtn: function() {
if (!this.HookState) {
this.MinerSp.setAnimation(0, "fang", !0);
this.HookState = 1;
}
},
emitHook: function() {
switch (this.HookState) {
case 1:
this.Hook.height += this.speed;
break;

case 2:
if (this.Hook.height <= this.HookHeight) {
if (this.Hook.children[0]) if (this.Hook.children[0].childrenCount) {
this.Handle(this.Hook.children[0].children);
this.MinerSp.setAnimation(0, "idle3", !1);
this.MinerSp.addAnimation(0, "idle", !0);
} else this.MinerSp.setAnimation(0, "idle", !0);
this.StopHookMove();
} else this.Hook.height -= this.speed;
}
},
PullBackHook: function() {
this.MinerSp.setAnimation(0, "la", !0);
this.HookState = 2;
},
SetSpeed: function(e) {
var t = 1;
o.default[e.node.name] = o.default[e.node.name] || {};
if (this.liquidNumber) {
console.log("cocos----药水效果速度增加10%");
t = 1.1;
}
this.speed = o.default[e.node.name].speed * t || 10;
},
ResetInfo: function() {
this.victory = this.Score.string = this.Time.string = this.Checkpoint.string = this.TargetScore.string = 0;
},
StartTime: function() {
if (this.clockNumber) {
console.log("cocos----使用时钟成功+10s");
this.clockNumber = 0;
this.InitTime += 10;
}
this.Time.string = this.InitTime;
this.timer = function() {
this.InitTime--;
this.Time.string = this.InitTime;
if (this.InitTime <= 0) {
this.unschedule(this.timer);
this.GameOver();
}
};
this.schedule(this.timer, 1);
},
SetLevel: function() {
this.levelInfo = i.default["level" + cc.zm.LevelInfo.stage];
this.Score.string = cc.zm.LevelInfo.current_score;
this.Checkpoint.string = "" + cc.zm.LevelInfo.stage;
},
CreateTargetScore: function() {
this.TargetScore.string = this.levelInfo.score;
},
CreateItem: function() {
var e = this;
this.newCreateCalc().forEach(function(t) {
var o = cc.instantiate(e.Prefab[t.name]), i = e.randomXY(o);
o.parent = e.itemArea;
t.score && (o.score = t.score);
t.prop && (o.extra = t.prop);
o.setPosition(i);
if ("Tnt" === t.name) {
var c = cc.instantiate(e.Boom);
e.node.addChild(c);
c.name = "tntBoom";
c.setPosition(cc.v2(i.x, i.y - 218));
o.boom = c;
}
});
if (this.levelInfo.mouse) {
var t = this.levelInfo.mouse.split(","), o = Number(t[0]);
if (o > 0) for (var i = 0; i < o; i++) {
var c = cc.instantiate(this.Prefab.Mouse), a = (this.itemArea.width - 30) / 2 * 2 * (Math.random() - .5), n = (this.itemArea.height - 30) / 2 * 2 * (Math.random() - .5), s = cc.v2(a, n);
c.parent = this.itemArea;
c.score = 50;
c.setPosition(s);
this.moveMouse(c);
}
var r = Number(t[1]);
if (r > 0) for (var l = 0; l < r; l++) {
var d = cc.instantiate(this.Prefab.DrillMouse), h = (this.itemArea.width - 30) / 2 * 2 * (Math.random() - .5), u = (this.itemArea.height - 30) / 2 * 2 * (Math.random() - .5), m = cc.v2(h, u);
d.parent = this.itemArea;
d.score = 700;
d.setPosition(m);
this.moveMouse(d);
}
}
},
moveMouse: function(e) {
var t = parseInt(300 - e.x) / 600 * 10;
cc.tween(e).to(t, {
x: 300
}).start();
this.scheduleOnce(function() {
if ("" !== e.name) {
e.scaleX = -1;
cc.tween(e).repeatForever(cc.tween().to(10, {
x: -300
}).delay(1).call(function() {
e.scaleX = 1;
}).to(10, {
x: 300
}).delay(1).call(function() {
e.scaleX = -1;
})).start();
}
}, t + 1);
},
newCreateCalc: function() {
var e = [];
if (this.levelInfo.extra) {
var t = this.levelInfo.extra.split(",");
if (t[0]) {
var o = [];
o.push({
name: "Red",
prop: .1,
width: 70
});
e = [].concat(e, o);
}
if (t[1]) {
var i = [], c = {
name: "Mystery",
prop: this.cloverNumber ? [ "炸弹", "3元红包", "5元红包", "药水", "药水" ][this.createRandm(0, 4)] : [ "炸弹", "3元红包", "5元红包", "药水" ][this.createRandm(0, 3)],
width: 71
};
i.push(c);
e = [].concat(e, i);
}
}
if (this.levelInfo.boom) for (var a = 0; a < this.levelInfo.boom; a++) {
var n = [];
n.push({
name: "Tnt",
width: 77
});
e = [].concat(e, n);
}
if (!this.levelInfo.good) return e;
for (var s = this.levelInfo.good.split(","), r = [], l = 0; l < s.length; l++) {
var d = s[l].split("|"), h = d[0], u = Number(d[1]), m = this.createByType(h, u);
r = [].concat(r, m);
}
for (var g = r.sort(function(e, t) {
return e.score > t.score ? -1 : e.score < t.score ? 1 : 0;
}), v = [], f = this.levelInfo.maxScore, p = 0, y = 0; y < g.length && (p += g[y].score) <= f; y++) v.push(g[y]);
return (e = [].concat(e, v)).sort(function(e, t) {
return e.width > t.width ? -1 : e.width < t.width ? 1 : 0;
});
},
createByType: function(e, t) {
var o = [], i = 0;
switch (e) {
case "b":
var c = 1;
if (this.handbookNumber) {
console.log("cocos----石化手册使用成功石头的价值提升20%");
c = 1.2;
}
for (var a = 0; a < 30; a++) {
var n = [ 20, 30, 40 ], s = this.createRandm(0, 2);
if ((i += n[s]) > t) break;
var r = {
name: "Stone-" + s,
score: n[s] * c,
width: [ 42, 89, 154 ][s]
};
o.push(r);
}
break;

case "g":
for (var l = 0; l < 30; l++) {
var d = [], h = t - i;
if (h >= 300) d = [ 50, 100, 150, 200, 300 ]; else for (var u = Math.floor(h / 50), m = u > 4 ? 4 : u, g = 0; g < m; g++) d.push(50 * (1 + g));
var v = this.createRandm(0, d.length - 1);
if ((i += d[v]) > t) break;
if (0 === d.length) break;
var f = {
name: "Gold-" + v,
score: d[v],
width: {
50: 36,
100: 62,
150: 83,
200: 108,
300: 146
}["" + d[v]]
};
o.push(f);
}
break;

case "d":
for (var p = 0; p < 30 && !((i += 400) > t); p++) {
o.push({
name: "Drill",
score: 400,
width: 29
});
}
break;

case "m":
for (var y = 0; y < 30; y++) {
var S;
if ((i += S = t - i > 200 ? this.createRandm(30, 200) : t - i > 30 ? this.createRandm(30, t - i) : 30) > t) break;
var _ = {
name: "Mystery",
prop: S,
width: 71
};
o.push(_);
}
}
return o;
},
randomXY: function(e) {
this.itemArea.y, this.itemArea.height;
var t = (this.itemArea.width - 30) / 2 * 2 * (Math.random() - .5), o = (this.itemArea.height - 30) / 2 * 2 * (Math.random() - .5), i = cc.v2(t, o), c = new cc.Rect(i.x - e.width / 2, i.y - e.height / 2, e.width, e.height);
if (this.itemArea.children.length >= 1) {
for (var a = !1, n = 0; n < this.itemArea.children.length; n++) if (this.itemArea.children[n].getBoundingBox().intersects(c)) {
a = !0;
break;
}
return a ? this.randomXY(e) : i;
}
return i;
},
destroyTnt: function(e) {
for (var t = this.itemArea.children.length - 1; t >= 0; t--) {
var o = this.itemArea.children[t];
if (o !== e) {
var i = e.getPosition(cc.v2()), c = new cc.Rect(i.x - 125, i.y - 125, 250, 250), a = o.getPosition(cc.v2());
if (c.contains(a)) {
o.removeFromParent();
o.destroy();
o = null;
}
}
}
},
createRandm: function(e, t) {
var o = (t += 1) - e, i = Math.random() * o + e;
return parseInt(i);
},
StopHookMove: function() {
this.HookState = 0;
this.Hook.height = this.HookHeight;
this.speed = 6;
this.Hook.getChildByName("hook_1").getComponent(cc.Sprite).spriteFrame = this.HookFrames[0];
},
Handle: function(e) {
this.AddProp(e);
this.AddScore(e);
this.RemoveItem(e);
0 === this.itemArea.children.length && this.GameOver();
if (this.node.getChildByName("boom")) {
var t = this.node.getChildByName("boom");
t.removeFromParent();
t.destroy();
t = null;
}
},
adjusBoomLayout: function() {
var e = this.PropNode.getChildByName("Layout");
e.active = !0;
this.boomNumber >= 2 && (this.boomNumber = 2);
for (var t = 0; t < 3; t++) {
var o = e.children[t];
t <= this.boomNumber ? o.active = !0 : o.active = !1;
}
},
AddProp: function(e) {
if (e[0]) if ("Mystery" === e[0].name) {
var t = e[0].extra;
if (isNaN(t)) switch (t) {
case "炸弹":
this.boomNumber++;
this.adjusBoomLayout();
this.showMestery(0);
break;

case "3元红包":
this.showMestery(1);
this.extarRedPack += 3;
break;

case "5元红包":
this.showMestery(2);
this.extarRedPack += 5;
break;

case "药水":
this.showMestery(3);
} else {
this.Score.string = parseInt(this.Score.string) + (t || 0);
this.curScore += t || 0;
this.addAnim("score", t);
}
cc.zm.showMusic && cc.audioEngine.play(this.AddScroeAudio);
} else if ("Red" === e[0].name) {
var o = Math.floor(this.createRandm(300, 800)) / 100;
this.extarRedPack += o;
this.addAnim("red", o);
cc.zm.showMusic && cc.audioEngine.play(this.AddScroeAudio);
}
},
showMestery: function(e) {
var t = this.PropNode.getChildByName("Mestery");
t.active = !0;
t.getComponent(cc.Sprite).spriteFrame = this.PropSpriteFrames[e];
t.stopAllActions();
cc.tween(t).to(2, {
y: t.y + 100,
opacity: 0
}).call(function() {
t.opacity = 255;
t.y -= 100;
t.active = !1;
}).start();
},
RemoveItem: function(e) {
e.forEach(function(e) {
if (e) {
e.destroy();
e = null;
}
});
},
AddScore: function(e) {
if (e[0] && e[0].score) {
this.Score.string = parseInt(this.Score.string) + (e[0].score || 0);
this.curScore += e[0].score || 0;
cc.zm.showMusic && cc.audioEngine.play(this.AddScroeAudio);
this.addAnim("score", e[0].score);
}
},
addAnim: function(e, t) {
var o = null;
"score" === e ? o = this.Score.node.parent.getChildByName("addScore") : "red" === e && (o = this.Score.node.parent.getChildByName("addRed"));
o.getComponent(cc.Label).string = "+" + t;
o.stopAllActions();
o.opacity = 0;
o.y = -132;
cc.tween(o).to(.1, {
opacity: 255
}).to(1, {
y: 42
}).to(.1, {
opacity: 0
}).start();
},
ShowMask: function() {
var e = this;
cc.Tools.showBanner();
this.Mask.active = !0;
var t = this.Mask.getChildByName("Fail"), o = this.Mask.getChildByName("Success");
t.active = !1;
o.active = !1;
cc.zm.LevelInfo.stage <= 5 && cc.Tools.dot("end_" + cc.zm.LevelInfo.stage, null);
if (1 === this.victory) {
o.active = !0;
cc.Tools.dot("through", {
level_num: cc.zm.LevelInfo.stage,
level_result: "成功"
});
var i = o.getChildByName("lbl").getComponent(cc.Label);
cc.Tools.sendRequest("pit.v1.PitSvc/Missions", "GET", n).then(function(e) {
for (var t = e.data.items, o = null, c = 0; c < t.length; c++) if (!t[c].status) {
o = t[c];
break;
}
i.string = "";
o.curr_pass_stage < o.need_pass_stage ? i.string = "通关" + o.need_pass_stage + "关后可提现" : o.curr_sign_in < o.need_sign_in ? i.string = "完成今日签到可提现" : o.curr_ad < o.need_ad && (i.string = "再看" + (o.need_ad - o.curr_ad) + "个视频可提现");
});
var c = o.getChildByName("award").getComponent(cc.Label);
c.string = "奖励红包+" + this.redPack;
cc.zm.LevelInfo.ever_pass && (c.node.active = !1);
var a = o.getChildByName("layout").getChildByName("extraAward").getComponent(cc.Label);
if (this.extarRedPack) {
a.node.parent.active = !0;
a.string = "+" + this.extarRedPack;
} else a.node.parent.active = !1;
var n = {
bomb: this.boomNumber + 1,
potion: this.liquidNumber,
score: this.curScore,
ts: new Date().getTime()
}, s = cc.Tools.createSignData(n);
cc.Tools.sendRequest("pit.v1.PitSvc/Pass", "POST", s).then(function(e) {
console.log("cocos----Pass通关成功返回信息", e);
});
} else if (2 === this.victory) {
t.active = !0;
cc.Tools.dot("through", {
level_num: cc.zm.LevelInfo.stage,
level_result: "失败"
});
}
cc.tween(this.Mask).to(.3, {
scale: 1
}).call(function() {
e.PauseGameLayer();
}).start();
},
CloseMask: function() {
this.victory || this.ResumeGameLayer();
},
Reload: function() {
this.timer && this.unschedule(this.timer);
cc.director.loadScene("Game");
},
Next: function() {
var e = this;
switch (this.victory) {
case 0:
this.CloseMask();
break;

case 1:
cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
cc.zm.userInfo = t.data;
cc.zm.userInfo.power > 0 ? cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(t) {
cc.zm.LevelInfo = t.data;
cc.zm.LevelInfo.stage < 30 ? e.Reload() : cc.director.loadScene("Index");
}) : e.seeVideoLayer.active = !0;
});
break;

case 2:
this.ExitGame();
}
},
AwardVideo: function() {
console.log("cocos----看视频得奖励");
cc.Tools.showJiliAd();
var e = cc.zm.LevelInfo.ever_pass ? 0 : this.redPack, t = {
red_pack: parseInt(100 * (e + this.extarRedPack)),
ad: cc.zm.ad
};
cc.zm.videoAd.redPack = t;
this.timer && this.unschedule(this.timer);
},
seeVideoAward: function(e) {
cc.zm.videoAd.enterGame = !0;
cc.Tools.showJiliAd();
var t = e.target;
this.timer && this.unschedule(this.timer);
t.parent.active = !1;
},
closeLayer: function(e) {
e.target.parent.active = !1;
},
ExitGame: function() {
cc.director.loadScene("Index");
},
ResumeGameLayer: function() {
this.BackLayer.active = !1;
this.pauseGame = !1;
this.StartTime();
this.MinerSp.paused = !1;
},
PauseGameLayer: function() {
this.pauseGame = !0;
this.unschedule(this.timer);
this.MinerSp.paused = !0;
},
GameOver: function() {
var e;
e = parseInt(this.Score.string) >= parseInt(this.TargetScore.string) ? 1 : 2;
this.victory = e;
this.ShowMask();
},
update: function() {
if (!this.pauseGame && !this.NeedLayer.active) {
this.emitHook();
this.HookRoTate();
}
},
useProp: function(e, t) {
switch (t) {
case "炸弹":
if (this.Hook.children[0].children[0] && this.boomNumber > -1) {
cc.zm.showShake && cc.sys.isNative && jsb.Device.vibrate(.3);
this.boomNumber--;
this.adjusBoomLayout();
var o = this.Hook.children[0].children[0], i = o.convertToWorldSpaceAR(cc.v2(0, 0)), c = cc.instantiate(this.Boom);
c.name = "boom";
this.node.addChild(c);
var a = cc.view.getVisibleSize();
c.setPosition(cc.v2(i.x - a.width / 2, i.y - a.height / 2));
c.active = !0;
c.getComponent(cc.Animation).play("boom");
o.destroy();
o = null;
this.speed = 10;
cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", {
prop: 10
});
}
}
}
});
cc._RF.pop();
}, {
"./Config": "Config",
"./Level": "Level"
} ],
Tools: [ function(e, t) {
"use strict";
cc._RF.push(t, "5f815fcXZ9BIY+pPRsOeaGx", "Tools");
cc.Tools = {
dot: function(e, t) {
if (cc.sys.isNative) {
console.log("cocos----注册打点" + e);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", e, t);
}
},
adCallBack: function(e) {
console.log("cocos----观看视频回调");
this.getUserEcpm(e).then(function() {
console.log("cocos----获取ecpm之后才调用");
if (cc.zm.userInfo.power <= 0) {
var e = {
ad: cc.zm.ad
};
cc.Tools.sendRequest("pit.v1.PitSvc/GrowPower", "POST", e).then(function(e) {
console.log("cocos----获取体力奖励");
cc.zm.userInfo.power = e.data.value;
cc.zm.videoAd.enterGame && cc.director.loadScene("Game");
});
}
cc.zm.videoAd.redPack && cc.Tools.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.ad.redPack).then(function(e) {
console.log("cocos----获取红包奖励", e);
cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(e) {
cc.zm.userInfo = e.data;
cc.zm.userInfo.power > 0 ? cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(e) {
cc.zm.LevelInfo = e.data;
cc.zm.videoAd.redPack = null;
cc.zm.LevelInfo.stage < 30 ? cc.director.loadScene("Game") : cc.director.loadScene("Index");
}) : cc.director.loadScene("Index");
});
});
cc.zm.videoAd.clickSign && (cc.zm.videoAd.clickSign = !1);
cc.zm.videoAd.clickTable && (cc.zm.videoAd.clickTable = !1);
});
},
showJiliAd: function() {
console.log("cocos----点击显示激励视频");
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "()V");
},
showBanner: function() {
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
},
hideBanner: function() {
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
},
showTableScreen: function() {
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showTableScreen", "()V");
},
hideTableScreen: function() {
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideTableScreen", "()V");
},
wxLogin: function() {
console.log("cocos----wxLogin");
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
},
wxLoginResult: function(e) {
console.log("cocos----wxLoginResultcode=" + e);
cc.wxLoginResultcode = e;
},
getUserEcpm: function(e) {
if (cc.zm) {
console.log("cocos----调用ecpm=", e);
return new Promise(function(t, o) {
var i = {
ecpm: e,
ts: new Date().getTime()
}, c = cc.Tools.createSignData(i);
cc.Tools.sendRequest("pit.v1.PitSvc/Rc", "POST", c).then(function(e) {
console.log("cocos----Ecpm成功", e.data);
cc.zm.ad = e.data.ad;
t();
}).catch(function(e) {
console.log("cocos----Ecpm失败", e);
o(e);
});
});
}
},
createSignData: function(t) {
var o = [];
for (var i in t) if (t.hasOwnProperty(i) && "sign" != i) {
var c = t[i], a = {};
a.key = i;
a.value = c;
o.push(i);
}
o.sort();
var n = "";
o.forEach(function(e) {
n += "&" + e + "=" + t[e];
}, this);
n = "token=" + cc.zm.userInfo.sc1 + n;
var s = e("MD5");
n = s(n);
t.sign = n;
return t;
},
screenAdapter: function() {
var e = cc.find("Canvas").getComponent(cc.Canvas), t = cc.view.getVisibleSize();
if (t.height / t.width <= .5625) {
e.fitHeight = !0;
e.fitWidth = !1;
} else {
e.fitHeight = !1;
e.fitWidth = !0;
}
},
showTips: function(e, t) {
var o = e.getChildByName("Tips");
o.getComponent(cc.Label).string = t;
o.stopAllActions();
o.y = 145;
cc.tween(o).to(.1, {
opacity: 255
}).to(1, {
y: 300
}).delay(.5).to(.1, {
opacity: 0
}).start();
},
sendRequest: function(e, t, o) {
return new Promise(function(i, c) {
var a = new XMLHttpRequest(), n = "https://pit.api.jiankangzhuan.com/" + e;
a.open(t, n, !0);
cc.sys.isNative && a.setRequestHeader("Accept-Encodeing", "gzip,deflate");
cc.wxToken && a.setRequestHeader("Authorization", cc.wxToken);
a.setRequestHeader("Content-Type", "application/json");
console.log("cocos----requestURL=", n);
console.log("cocos----data=", JSON.stringify(o));
a.onreadystatechange = function() {
if (4 === a.readyState && 200 == a.status) {
console.log("cocos----http res:" + a.response);
var e = JSON.parse(a.response);
if (0 === e.code) i(e); else {
console.log("cocos----" + e.message);
c(e.message);
}
}
};
a.onerror = function() {
c(new Error(a.statusText));
};
a.send(JSON.stringify(o));
});
}
};
cc._RF.pop();
}, {
MD5: "MD5"
} ],
login: [ function(e, t) {
"use strict";
cc._RF.push(t, "6b7cdHix81Ol6r4h+cnHYQh", "login");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.protocol = !1;
this.needLogin = !0;
this.time = 0;
cc.sys.isNative || cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4");
if (cc.sys.localStorage.getItem("token")) {
this.needLogin = !1;
this.protocol = !0;
cc.wxToken = cc.sys.localStorage.getItem("token");
cc.sys.isNative ? cc.sys.localStorage.getItem("realName") ? cc.director.loadScene("Index") : this.showRealLayer() : cc.director.loadScene("Index");
}
},
onLoginWX: function() {
cc.sys.isNative && (this.protocol ? cc.Tools.wxLogin() : cc.Tools.showTips(this.node, "请先同意用户协议和隐私政策"));
},
clickProtocol: function(e) {
var t = e.target.getChildByName("right");
if (this.protocol) {
t.active = !1;
this.protocol = !1;
} else {
t.active = !0;
this.protocol = !0;
}
},
update: function(e) {
var t = this;
this.time += e;
if (this.needLogin && this.time >= 1) {
this.time = 0;
if (cc.wxLoginResultcode && this.protocol) {
this.protocol = !1;
var o = {
channel: "1",
imei: "1",
mac: "1",
distinct_id: "1",
oaid: "1",
android_id: "1",
code: cc.wxLoginResultcode
};
cc.Tools.sendRequest("pit.v1/register", "POST", o).then(function(e) {
cc.wxToken = e.data.token;
cc.sys.localStorage.setItem("token", e.data.token);
cc.Tools.dot("register", {
register_time: new Date(),
channel: "微信"
});
cc.sys.localStorage.getItem("realName") ? cc.director.loadScene("Index") : t.showRealLayer();
});
}
}
},
showUserProtocol: function() {
this.node.getChildByName("user_protocol").active = !0;
},
hideUserProtocol: function() {
this.node.getChildByName("user_protocol").active = !1;
},
showUserPrivacy: function() {
this.node.getChildByName("user_privacy").active = !0;
},
hideUserPrivacy: function() {
this.node.getChildByName("user_privacy").active = !1;
},
showRealLayer: function() {
this.realNameLayer = this.node.getChildByName("RealName");
this.realNameLayer.active = !0;
},
clickRealLayer: function(e) {
e.target;
var t = this.realNameLayer.getChildByName("edit1").getComponent(cc.EditBox).string, o = this.realNameLayer.getChildByName("edit2").getComponent(cc.EditBox).string;
console.log("cocos----真实姓名" + t + "------身份证号" + o);
if (this.regYourName(t) && this.regYourNumber(o)) {
console.log("cocos----认证成功");
cc.sys.localStorage.setItem("realName", !0);
cc.director.loadScene("Index");
}
},
regYourName: function(e) {
if (!/^[\u4e00-\u9fa5]{2,4}$/.test(e)) {
cc.Tools.showTips(this.node, "真实姓名填写有误");
return !1;
}
return !0;
},
regYourNumber: function(e) {
if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)) {
cc.Tools.showTips(this.node, "身份证号填写有误");
return !1;
}
return !0;
}
});
cc._RF.pop();
}, {} ],
use_reversed_rotateBy: [ function(e, t) {
"use strict";
cc._RF.push(t, "1a8c0/npapCw52O67NIaoqR", "use_reversed_rotateBy");
cc.RotateBy._reverse = !0;
cc._RF.pop();
}, {} ]
}, {}, [ "Config", "Hook", "IndexMain", "Level", "MD5", "Main", "Tools", "login", "use_reversed_rotateBy" ]);