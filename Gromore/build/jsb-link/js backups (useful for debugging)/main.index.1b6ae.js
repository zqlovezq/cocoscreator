window.__require = function e(t, i, o) {
function a(c, r) {
if (!i[c]) {
if (!t[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!t[s]) {
var d = "function" == typeof __require && __require;
if (!r && d) return d(s, !0);
if (n) return n(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var h = i[c] = {
exports: {}
};
t[c][0].call(h.exports, function(e) {
return a(t[c][1][e] || e);
}, h, h.exports, e, t, i, o);
}
return i[c].exports;
}
for (var n = "function" == typeof __require && __require, c = 0; c < o.length; c++) a(o[c]);
return a;
}({
Config: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "6b4a04rebRMUI4NhPKaXcvz", "Config");
i.__esModule = !0;
i.default = void 0;
i.default = {
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
t.exports = i.default;
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
Http: [ function(e, t) {
"use strict";
cc._RF.push(t, "cd96dt+tdBJybW9vwwJ42yn", "Http");
cc.Class({
extends: cc.Component,
properties: {},
statics: {
base_url: "https://pit.api.jiankangzhuan.com/",
sendRequest: function(e, t, i) {
return new Promise(function(o, a) {
var n = new XMLHttpRequest(), c = "https://pit.api.jiankangzhuan.com/" + e;
n.open(t, c, !0);
if (cc.sys.isNative) {
cc.log("isNative");
n.setRequestHeader("Accept-Encodeing", "gzip,deflate");
}
cc.wxToken && n.setRequestHeader("Authorization", cc.wxToken);
n.setRequestHeader("Content-Type", "application/json");
cc.log("requestURL=", c);
cc.log("data=", JSON.stringify(i));
n.onreadystatechange = function() {
if (4 === n.readyState && 200 == n.status) {
cc.log("http res:" + n.response);
var e = JSON.parse(n.response);
if (0 === e.code) o(e); else {
console.log(e.message);
a(e.message);
}
}
};
n.onerror = function() {
a(new Error(n.statusText));
};
n.send(JSON.stringify(i));
});
}
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
IndexMain: [ function(e, t) {
"use strict";
cc._RF.push(t, "ec6barLP8hJ4Lk8WUBUuH5V", "IndexMain");
var i = e("Http"), o = cc.Enum({
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
cc.zm.ad = {};
cc.zm.ad.callBack = function() {
if (cc.zm.ad.power) {
var e = {
ad: cc.zm.ad
};
i.sendRequest("pit.v1.PitSvc/GrowPower", "POST", e).then(function() {
cc.zm.ad.power = !1;
cc.director.loadScene("Game");
});
}
cc.zm.ad.redPack && i.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.ad.redPack).then(function(e) {
console.log("PassAd返回信息", e);
i.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(e) {
cc.zm.userInfo = e.data;
cc.zm.userInfo.power > 0 ? i.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(e) {
cc.zm.LevelInfo = e.data;
cc.zm.ad.redPack = null;
cc.zm.LevelInfo.stage < 30 ? cc.director.loadScene("Game") : cc.director.loadScene("Index");
}) : cc.director.loadScene("Index");
});
});
};
this.screenAdapter();
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
this.showBanner();
this.getUserInfo();
},
createSignData: function(t) {
var i = [];
for (var o in t) if (t.hasOwnProperty(o) && "sign" != o) {
var a = t[o], n = {};
n.key = o;
n.value = a;
i.push(o);
}
i.sort();
var c = "";
i.forEach(function(e) {
c += "&" + e + "=" + t[e];
}, this);
c = "token=" + cc.zm.userInfo.sc1 + c;
var r = e("MD5");
c = r(c);
t.sign = c;
return t;
},
getUserEcpm: function() {
var e = {
ecpm: 1,
ts: new Date().getTime()
}, t = this.createSignData(e);
i.sendRequest("pit.v1.PitSvc/Rc", "POST", t).then(function(e) {
console.log("刷新用户的Ecpm", e.data);
cc.zm.ad = e.data.ad;
});
},
getUserInfo: function() {
var e = this;
i.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
e.userInfo = t.data;
cc.zm.userInfo = e.userInfo;
e.dot("register", {
register_time: new Date(),
channel: "微信"
});
e.showIndexLayer();
e.getUserEcpm();
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
StartGame: function() {
var e = this;
cc.audioEngine.stop(this.BGM_ID);
this.guide && cc.sys.localStorage.setItem("guide", 1);
i.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(t) {
cc.zm.LevelInfo = t.data;
console.log("关卡信息=", cc.zm.LevelInfo);
cc.zm.userInfo.power <= 0 ? e.showSeeVideolayer() : cc.director.loadScene("Game");
});
},
showSeeVideolayer: function() {
this.SeeVideolayer.active = !0;
},
seeVideoAward: function() {
var e = this, t = {
ad: cc.zm.ad
};
i.sendRequest("pit.v1.PitSvc/GrowPower", "POST", t).then(function() {
e.SeeVideolayer.active = !1;
e.getUserInfo();
});
},
showSignLayer: function() {
var e = this;
i.sendRequest("pit.v1.PitSvc/SignInList", "GET", {}).then(function(t) {
var i = t.data.items;
e.signDay = t.data.day;
e.SignLayer.active = !0;
for (var o = 1; o <= 7; o++) {
var a = e.SignLayer.getChildByName("day_" + o);
i[o - 1].status ? e.completeBtn(a) : o === e.signDay ? e.selectBtn(a) : e.unSelectBtn(a);
}
});
},
showSetLayer: function() {
this.SetLayer.active = !0;
this.SetLayer.getChildByName("nikename").getComponent(cc.Label).string = this.userInfo.nick_name;
this.SetLayer.getChildByName("userid").getComponent(cc.Label).string = "用户ID：" + this.userInfo.user_id;
var e = this.SetLayer.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite), t = this.userInfo.avatar_url;
cc.assetManager.loadRemote(t, {
ext: ".png"
}, function(t, i) {
e.spriteFrame = new cc.SpriteFrame(i);
});
},
showIndexLayer: function() {
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
i.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
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
i.sendRequest("pit.v1.PitSvc/JackPot", "GET", {}).then(function(t) {
e.RedPoolLayer.active = !0;
for (var i = t.data, o = [ "kai", "xin", "kuang", "gong" ], a = 0; a < 4; a++) {
var n = i[o[a]];
e.RedPoolLayer.getChildByName(o[a]).getComponent(cc.Label).string = "x" + n;
}
e.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label).string = i.amount;
e.RedPoolLayer.getChildByName("count_1").getComponent(cc.Label).string = i.hour;
e.RedPoolLayer.getChildByName("count_2").getComponent(cc.Label).string = i.minute < 10 ? "0" + i.minute : i.minute;
});
},
showSevenWorkLayer: function() {
var e = this;
i.sendRequest("pit.v1.PitSvc/Missions", "GET", {}).then(function(t) {
var i = t.data.items, o = t.data.day;
if (e.signNumber !== o) {
for (var a = [], n = 0; n < i.length; n++) if (!i[n].status) {
e.signNumber = i[n].num;
break;
}
e.signNumber > o && (e.signNumber = o);
for (var c = 0; c < i.length; c++) e.signNumber === i[c].num && a.push(i[c]);
e.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite).spriteFrame = e.SevenFrames[a[0].num - 1];
var r = e.SevenWorkLayer.getChildByName("layout");
1 === a.length && (r.getChildByName("layout_2").active = !1);
for (var s = 0; s < a.length; s++) {
var d = a[s], h = r.getChildByName("layout_" + (s + 1));
h.active = !0;
var l = h.getChildByName("getMoneyBtn");
l._id = d.id;
var u = l.getComponent(cc.Button);
if (1 === d.status) {
u.enableAutoGrayEffect = !0;
u.interactable = !1;
} else {
u.interactable = !0;
var m = !1;
d.curr_pass_stage >= d.need_pass_stage && d.curr_sign_in >= d.need_sign_in && d.curr_invite >= d.need_invite && (m = !0);
l.complete = !!m;
}
h.getChildByName("lbl1").getComponent(cc.Label).string = d.value;
h.getChildByName("lbl2").getComponent(cc.Label).string = "观看" + d.need_ad + "个视频";
h.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = d.curr_ad / d.need_ad;
h.getChildByName("barLbl").getComponent(cc.Label).string = d.curr_ad + "/" + d.need_ad;
var g = h.getChildByName("layout"), v = g.getChildByName("item_0"), f = g.getChildByName("item_1"), p = g.getChildByName("item_2");
if (d.need_pass_stage) {
v.active = !0;
v.getChildByName("lbl").getComponent(cc.Label).string = "通过第" + d.need_pass_stage + "关";
v.getChildByName("icon").getChildByName("arrow").active = d.curr_pass_stage >= d.need_pass_stage;
} else v.active = !1;
if (d.need_sign_in) {
f.active = !0;
f.getChildByName("lbl").getComponent(cc.Label).string = "领取签到奖励";
f.getChildByName("icon").getChildByName("arrow").active = d.curr_sign_in >= d.need_sign_in;
} else f.active = !1;
if (d.need_invite) {
p.active = !0;
p.getChildByName("lbl").getComponent(cc.Label).string = "邀请" + d.need_invite + "个好友";
p.getChildByName("icon").getChildByName("arrow").active = d.curr_invite >= d.need_invite;
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
i.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then(function() {
e.ResumeLayer.active = !1;
e.getUserInfo();
});
},
sevenWorkGetMoney: function(e) {
var t = this, o = e.target;
o.complete ? i.sendRequest("pit.v1.PitSvc/PullMission", "POST", {
id: o._id
}).then(function() {
var e = o.getComponent(cc.Button);
e.enableAutoGrayEffect = !0;
e.interactable = !1;
t.SevenWorkLayer.getChildByName("getLayer").active = !0;
t.showSevenWorkLayer();
}) : this.showTips("条件未达成");
},
showGetMoneyLayer: function() {
var e = this;
i.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function(t) {
var i = t.data, o = i.gc || 0;
e.getMoneyStage = 0;
for (var a = [ .3, .5, 1, 2, 5, 10, 20 ], n = 0; n < i.items.Length; n++) if (i.items[n].times) {
e.getMoneyStage = a[n];
break;
}
e.GetMonetyLayer.active = !0;
e.GetMonetyLayer.getChildByName("YuanBao_Number").getComponent(cc.Label).string = o;
e.extractMoney = o / 1e4;
e.GetMonetyLayer.getChildByName("Change_Number").getComponent(cc.Label).string = e.extractMoney + "元";
e.choiceBtn = null;
var c = e.GetMonetyLayer.getChildByName("getMoneyBtn").getComponent(cc.Button);
c.enableAutoGrayEffect = !0;
c.interactable = !1;
});
},
choiceGetMoneyBtn: function(e, t) {
var i = e.target;
if (null === this.choiceBtn) {
this.choiceBtn = i;
this.choiceBtn.money = Number(t);
this.selectBtn(i);
} else {
this.unSelectBtn(this.choiceBtn);
this.choiceBtn = i;
this.choiceBtn.money = Number(t);
this.selectBtn(i);
}
this.GetMonetyLayer.getChildByName("getMoneyBtn").getComponent(cc.Button).interactable = !0;
},
clickGetMoneyBtn1: function(e) {
var t = e.target;
null !== this.choiceBtn && (this.extractMoney < this.choiceBtn.money ? this.showTips("元宝数量不足") : this.choiceBtn.money > this.getMoneyStage ? this.showTips("请先完成上一个档位提现") : i.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function() {
t.parent.getChildByName("getLayer").active = !0;
}));
},
showTips: function(e) {
var t = cc.find("Canvas/Tips");
t.stopAllActions();
t.y = 145;
t.getComponent(cc.Label).string = e;
cc.tween(t).to(.1, {
opacity: 255
}).to(1, {
y: 300
}).delay(.5).to(.1, {
opacity: 0
}).start();
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
showUserXieYi: function() {},
showUserYinSi: function() {},
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
var e = this, t = {
ad: cc.zm.ad
};
i.sendRequest("pit.v1.PitSvc/SignIn", "POST", t).then(function(t) {
var i = e.SignLayer.getChildByName("day_" + e.signDay);
e.completeBtn(i);
var a = t.data;
e.showPop([ "三元红包", "炸药x1", "药水x1", "500元宝", "8.88元红包", "时钟x1", "18.88元红包" ][e.signDay - 1], o["DAY_" + e.signDay], a.gc, a.card);
}).catch(function() {
e.showTips("今日奖励已领取");
});
},
clickGetMoneyBtn: function() {},
clickTurnTableBtn: function() {
var e = this;
if (!(this.countDownTime > 0)) {
var t = {
ad: cc.zm.ad
}, a = {
1: 60,
10: 240,
11: 180,
12: 120,
31: 360,
32: 300
};
i.sendRequest("pit.v1.PitSvc/Lottery", "POST", t).then(function(t) {
e.endAngle = a["" + t.data.award];
e.point = e.TurntableLayer.getChildByName("Pointer");
e.beginTurn = !0;
e.point.angle = 360;
e.speed = 18;
e.value = 1;
e.circle = 0;
e.scheduleOnce(function() {
var i = t.data, a = {
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
e.showPop(a.name, a.index, i.gc, i.card);
}, 4.5);
});
}
},
createRandm: function(e, t) {
var i = (t += 1) - e, o = Math.random() * i + e;
return parseInt(o);
},
update: function() {
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
},
showPop: function(e, t, i, o) {
this.GetGoodLayer.active = !0;
var a = this.GetGoodLayer.getChildByName("layout"), n = this.GetGoodLayer.getChildByName("icon").getComponent(cc.Sprite);
this.GetGoodLayer.getChildByName("lbl").getComponent(cc.Label).string = "获得" + e;
n.spriteFrame = this.AwardFrames[t];
var c = a.getChildByName("layout_1"), r = a.getChildByName("layout_2");
if (i) {
c.active = !0;
c.getChildByName("lbl").getComponent(cc.Label).string = "获得元宝+" + i;
} else c.active = !1;
if (o) {
r.active = !0;
r.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.TextFrames[o - 1];
} else r.active = !1;
},
ExitWxLogin: function() {
cc.wxToken = null;
cc.wxLoginResultcode = null;
cc.sys.localStorage.removeItem("token");
cc.director.loadScene("Login");
this.ta.logout();
},
showBanner: function() {
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
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
},
dot: function(e, t) {
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", e, t);
}
});
cc._RF.pop();
}, {
Http: "Http",
MD5: "MD5"
} ],
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
function i(e, t) {
return e << t | e >>> 32 - t;
}
function o(e, t) {
var i, o, a, n, c;
a = 2147483648 & e;
n = 2147483648 & t;
c = (1073741823 & e) + (1073741823 & t);
return (i = 1073741824 & e) & (o = 1073741824 & t) ? 2147483648 ^ c ^ a ^ n : i | o ? 1073741824 & c ? 3221225472 ^ c ^ a ^ n : 1073741824 ^ c ^ a ^ n : c ^ a ^ n;
}
function a(e, t, i) {
return e & t | ~e & i;
}
function n(e, t, i) {
return e & i | t & ~i;
}
function c(e, t, i) {
return e ^ t ^ i;
}
function r(e, t, i) {
return t ^ (e | ~i);
}
function s(e, t, n, c, r, s, d) {
e = o(e, o(o(a(t, n, c), r), d));
return o(i(e, s), t);
}
function d(e, t, a, c, r, s, d) {
e = o(e, o(o(n(t, a, c), r), d));
return o(i(e, s), t);
}
function h(e, t, a, n, r, s, d) {
e = o(e, o(o(c(t, a, n), r), d));
return o(i(e, s), t);
}
function l(e, t, a, n, c, s, d) {
e = o(e, o(o(r(t, a, n), c), d));
return o(i(e, s), t);
}
function u(e) {
for (var t, i = e.length, o = i + 8, a = 16 * ((o - o % 64) / 64 + 1), n = Array(a - 1), c = 0, r = 0; r < i; ) {
c = r % 4 * 8;
n[t = (r - r % 4) / 4] = n[t] | e.charCodeAt(r) << c;
r++;
}
c = r % 4 * 8;
n[t = (r - r % 4) / 4] = n[t] | 128 << c;
n[a - 2] = i << 3;
n[a - 1] = i >>> 29;
return n;
}
function m(e) {
var t, i = "", o = "";
for (t = 0; t <= 3; t++) i += (o = "0" + (e >>> 8 * t & 255).toString(16)).substr(o.length - 2, 2);
return i;
}
function g(e) {
for (var t = "", i = 0; i < e.length; i++) {
var o = e.charCodeAt(i);
if (o < 128) t += String.fromCharCode(o); else if (o > 127 && o < 2048) {
t += String.fromCharCode(o >> 6 | 192);
t += String.fromCharCode(63 & o | 128);
} else {
t += String.fromCharCode(o >> 12 | 224);
t += String.fromCharCode(o >> 6 & 63 | 128);
t += String.fromCharCode(63 & o | 128);
}
}
return t;
}
t.exports = function(e) {
var t, i, a, n, c, r, v, f, p, y = Array();
y = u(e = g(e));
r = 1732584193;
v = 4023233417;
f = 2562383102;
p = 271733878;
for (t = 0; t < y.length; t += 16) {
i = r;
a = v;
n = f;
c = p;
r = s(r, v, f, p, y[t + 0], 7, 3614090360);
p = s(p, r, v, f, y[t + 1], 12, 3905402710);
f = s(f, p, r, v, y[t + 2], 17, 606105819);
v = s(v, f, p, r, y[t + 3], 22, 3250441966);
r = s(r, v, f, p, y[t + 4], 7, 4118548399);
p = s(p, r, v, f, y[t + 5], 12, 1200080426);
f = s(f, p, r, v, y[t + 6], 17, 2821735955);
v = s(v, f, p, r, y[t + 7], 22, 4249261313);
r = s(r, v, f, p, y[t + 8], 7, 1770035416);
p = s(p, r, v, f, y[t + 9], 12, 2336552879);
f = s(f, p, r, v, y[t + 10], 17, 4294925233);
v = s(v, f, p, r, y[t + 11], 22, 2304563134);
r = s(r, v, f, p, y[t + 12], 7, 1804603682);
p = s(p, r, v, f, y[t + 13], 12, 4254626195);
f = s(f, p, r, v, y[t + 14], 17, 2792965006);
r = d(r, v = s(v, f, p, r, y[t + 15], 22, 1236535329), f, p, y[t + 1], 5, 4129170786);
p = d(p, r, v, f, y[t + 6], 9, 3225465664);
f = d(f, p, r, v, y[t + 11], 14, 643717713);
v = d(v, f, p, r, y[t + 0], 20, 3921069994);
r = d(r, v, f, p, y[t + 5], 5, 3593408605);
p = d(p, r, v, f, y[t + 10], 9, 38016083);
f = d(f, p, r, v, y[t + 15], 14, 3634488961);
v = d(v, f, p, r, y[t + 4], 20, 3889429448);
r = d(r, v, f, p, y[t + 9], 5, 568446438);
p = d(p, r, v, f, y[t + 14], 9, 3275163606);
f = d(f, p, r, v, y[t + 3], 14, 4107603335);
v = d(v, f, p, r, y[t + 8], 20, 1163531501);
r = d(r, v, f, p, y[t + 13], 5, 2850285829);
p = d(p, r, v, f, y[t + 2], 9, 4243563512);
f = d(f, p, r, v, y[t + 7], 14, 1735328473);
r = h(r, v = d(v, f, p, r, y[t + 12], 20, 2368359562), f, p, y[t + 5], 4, 4294588738);
p = h(p, r, v, f, y[t + 8], 11, 2272392833);
f = h(f, p, r, v, y[t + 11], 16, 1839030562);
v = h(v, f, p, r, y[t + 14], 23, 4259657740);
r = h(r, v, f, p, y[t + 1], 4, 2763975236);
p = h(p, r, v, f, y[t + 4], 11, 1272893353);
f = h(f, p, r, v, y[t + 7], 16, 4139469664);
v = h(v, f, p, r, y[t + 10], 23, 3200236656);
r = h(r, v, f, p, y[t + 13], 4, 681279174);
p = h(p, r, v, f, y[t + 0], 11, 3936430074);
f = h(f, p, r, v, y[t + 3], 16, 3572445317);
v = h(v, f, p, r, y[t + 6], 23, 76029189);
r = h(r, v, f, p, y[t + 9], 4, 3654602809);
p = h(p, r, v, f, y[t + 12], 11, 3873151461);
f = h(f, p, r, v, y[t + 15], 16, 530742520);
r = l(r, v = h(v, f, p, r, y[t + 2], 23, 3299628645), f, p, y[t + 0], 6, 4096336452);
p = l(p, r, v, f, y[t + 7], 10, 1126891415);
f = l(f, p, r, v, y[t + 14], 15, 2878612391);
v = l(v, f, p, r, y[t + 5], 21, 4237533241);
r = l(r, v, f, p, y[t + 12], 6, 1700485571);
p = l(p, r, v, f, y[t + 3], 10, 2399980690);
f = l(f, p, r, v, y[t + 10], 15, 4293915773);
v = l(v, f, p, r, y[t + 1], 21, 2240044497);
r = l(r, v, f, p, y[t + 8], 6, 1873313359);
p = l(p, r, v, f, y[t + 15], 10, 4264355552);
f = l(f, p, r, v, y[t + 6], 15, 2734768916);
v = l(v, f, p, r, y[t + 13], 21, 1309151649);
r = l(r, v, f, p, y[t + 4], 6, 4149444226);
p = l(p, r, v, f, y[t + 11], 10, 3174756917);
f = l(f, p, r, v, y[t + 2], 15, 718787259);
v = l(v, f, p, r, y[t + 9], 21, 3951481745);
r = o(r, i);
v = o(v, a);
f = o(f, n);
p = o(p, c);
}
return (m(r) + m(v) + m(f) + m(p)).toLowerCase();
};
cc._RF.pop();
}, {} ],
Main: [ function(e, t) {
"use strict";
cc._RF.push(t, "a0a35WjyStJPpmP4ZgIidJg", "Main");
var i = a(e("./Config")), o = a(e("./Level"));
function a(e) {
return e && e.__esModule ? e : {
default: e
};
}
var n = e("Http");
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
var i = cc.find("Canvas/Guide"), o = i.getChildByName("guide_1"), a = i.getChildByName("guide_2"), n = i.getChildByName("guide_3");
o.active = !1;
a.active = !1;
n.active = !1;
if ("2" === t) {
cc.sys.localStorage.setItem("guide", 2);
i.getChildByName("guide_2").active = !0;
} else if ("3" === t) {
cc.sys.localStorage.setItem("guide", 3);
i.getChildByName("guide_3").active = !0;
} else if ("4" === t) {
this.guide = !1;
this.ResumeGameLayer();
cc.sys.localStorage.setItem("guide", 4);
cc.find("Canvas/Guide").active = !1;
}
},
hideNeedLayer: function() {
var e = this;
n.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(t) {
n.sendRequest("pit.v1.PitSvc/Prop", "POST", {
prop: 4
}).then(function() {
console.log("使用体力成功");
});
cc.zm.LevelInfo = t.data;
e.NeedLayer.active = !1;
e.handleDaoju();
e.adjusBoomLayout();
e.ResumeGameLayer();
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
this.screenAdapter();
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
var i = this.NeedLayer.getChildByName("needScore").getComponent(cc.Label), o = this.NeedLayer.getChildByName("needLevel").getComponent(cc.Label);
i.string = "要求分数：" + this.levelInfo.score;
o.string = "第" + this.levelInfo.id + "关";
var a = [ 10, 11, 13 ][this.createRandm(0, 2)];
this.LotteryProp = a;
var n = this.LotteryLayer.getChildByName("icon").getComponent(cc.Sprite);
10 === a ? n.spriteFrame = this.LotteryFramse[2] : 11 === a ? n.spriteFrame = this.LotteryFramse[0] : 13 === a && (n.spriteFrame = this.LotteryFramse[1]);
}
},
LookVideoGetAward: function() {
var e = this;
this.showJiliAd();
var t = {
ad: cc.zm.ad,
weapon: this.LotteryProp
};
n.sendRequest("pit.v1.PitSvc/Lottery2", "POST", t).then(function(t) {
e.LotteryAward = t.data.award;
e.hideLotteryLayer();
});
},
handleDaoju: function() {
for (var e = this, t = cc.zm.LevelInfo.weapon, i = {
1: "体力",
10: "炸弹",
11: "时钟",
12: "石化手册",
13: "药水",
14: "三叶草"
}, o = function(o) {
if (10 === t[o].prop) e.boomNumber = t[o].num - 1; else if (t[o].num) {
var a = {
prop: t[o].prop
};
n.sendRequest("pit.v1.PitSvc/Prop", "POST", a).then(function() {
console.log("使用成功-", i[t[o].prop]);
});
}
11 === t[o].prop && (e.clockNumber = t[o].num);
12 === t[o].prop && (e.handbookNumber = t[o].num);
13 === t[o].prop && (e.liquidNumber = t[o].num);
14 === t[o].prop && (e.cloverNumber = t[o].num);
}, a = 0; a < t.length; a++) o(a);
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
i.default[e.node.name] = i.default[e.node.name] || {};
if (this.liquidNumber) {
console.log("药水效果速度增加10%");
t = 1.1;
}
this.speed = i.default[e.node.name].speed * t || 10;
},
ResetInfo: function() {
this.victory = this.Score.string = this.Time.string = this.Checkpoint.string = this.TargetScore.string = 0;
},
StartTime: function() {
if (this.clockNumber) {
console.log("使用时钟成功+10s");
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
this.levelInfo = o.default["level" + cc.zm.LevelInfo.stage];
this.Score.string = cc.zm.LevelInfo.current_score;
this.Checkpoint.string = "" + cc.zm.LevelInfo.stage;
},
CreateTargetScore: function() {
this.TargetScore.string = this.levelInfo.score;
},
CreateItem: function() {
var e = this, t = this.newCreateCalc();
console.log("itemArr=", t);
t.forEach(function(t) {
var i = cc.instantiate(e.Prefab[t.name]), o = e.randomXY(i);
i.parent = e.itemArea;
t.score && (i.score = t.score);
t.prop && (i.extra = t.prop);
i.setPosition(o);
if ("Tnt" === t.name) {
var a = cc.instantiate(e.Boom);
e.node.addChild(a);
a.name = "tntBoom";
a.setPosition(cc.v2(o.x, o.y - 218));
i.boom = a;
}
});
if (this.levelInfo.mouse) {
var i = this.levelInfo.mouse.split(","), o = Number(i[0]);
if (o > 0) for (var a = 0; a < o; a++) {
var n = cc.instantiate(this.Prefab.Mouse), c = (this.itemArea.width - 30) / 2 * 2 * (Math.random() - .5), r = (this.itemArea.height - 30) / 2 * 2 * (Math.random() - .5), s = cc.v2(c, r);
n.parent = this.itemArea;
n.score = 50;
n.setPosition(s);
this.moveMouse(n);
}
var d = Number(i[1]);
if (d > 0) for (var h = 0; h < d; h++) {
var l = cc.instantiate(this.Prefab.DrillMouse), u = (this.itemArea.width - 30) / 2 * 2 * (Math.random() - .5), m = (this.itemArea.height - 30) / 2 * 2 * (Math.random() - .5), g = cc.v2(u, m);
l.parent = this.itemArea;
l.score = 700;
l.setPosition(g);
this.moveMouse(l);
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
var i = [];
i.push({
name: "Red",
prop: .1,
width: 70
});
e = [].concat(e, i);
}
if (t[1]) {
var o = [], a = {
name: "Mystery",
prop: this.cloverNumber ? [ "炸弹", "3元红包", "5元红包", "药水", "药水" ][this.createRandm(0, 4)] : [ "炸弹", "3元红包", "5元红包", "药水" ][this.createRandm(0, 3)],
width: 71
};
o.push(a);
e = [].concat(e, o);
}
}
if (this.levelInfo.boom) for (var n = 0; n < this.levelInfo.boom; n++) {
var c = [];
c.push({
name: "Tnt",
width: 77
});
e = [].concat(e, c);
}
if (!this.levelInfo.good) return e;
for (var r = this.levelInfo.good.split(","), s = [], d = 0; d < r.length; d++) {
var h = r[d].split("|"), l = h[0], u = Number(h[1]), m = this.createByType(l, u);
s = [].concat(s, m);
}
for (var g = s.sort(function(e, t) {
return e.score > t.score ? -1 : e.score < t.score ? 1 : 0;
}), v = [], f = this.levelInfo.maxScore, p = 0, y = 0; y < g.length && (p += g[y].score) <= f; y++) v.push(g[y]);
e = [].concat(e, v);
console.log("createItemArr未按照宽度排序=", e);
e = e.sort(function(e, t) {
return e.width > t.width ? -1 : e.width < t.width ? 1 : 0;
});
console.log("createItemArr照宽度排序=", e);
return e;
},
createByType: function(e, t) {
var i = [], o = 0;
switch (e) {
case "b":
var a = 1;
if (this.handbookNumber) {
console.log("石化手册使用成功石头的价值提升20%");
a = 1.2;
}
for (var n = 0; n < 30; n++) {
var c = [ 20, 30, 40 ], r = this.createRandm(0, 2);
if ((o += c[r]) > t) break;
var s = {
name: "Stone-" + r,
score: c[r] * a,
width: [ 42, 89, 154 ][r]
};
i.push(s);
}
break;

case "g":
for (var d = 0; d < 30; d++) {
var h = [], l = t - o;
if (l >= 300) h = [ 50, 100, 150, 200, 300 ]; else for (var u = Math.floor(l / 50), m = u > 4 ? 4 : u, g = 0; g < m; g++) h.push(50 * (1 + g));
var v = this.createRandm(0, h.length - 1);
if ((o += h[v]) > t) break;
if (0 === h.length) break;
var f = {
name: "Gold-" + v,
score: h[v],
width: {
50: 36,
100: 62,
150: 83,
200: 108,
300: 146
}["" + h[v]]
};
i.push(f);
}
break;

case "d":
for (var p = 0; p < 30 && !((o += 400) > t); p++) {
i.push({
name: "Drill",
score: 400,
width: 29
});
}
break;

case "m":
for (var y = 0; y < 30; y++) {
var S;
if ((o += S = t - o > 200 ? this.createRandm(30, 200) : t - o > 30 ? this.createRandm(30, t - o) : 30) > t) break;
var C = {
name: "Mystery",
prop: S,
width: 71
};
i.push(C);
}
}
return i;
},
randomXY: function(e) {
this.itemArea.y, this.itemArea.height;
var t = (this.itemArea.width - 30) / 2 * 2 * (Math.random() - .5), i = (this.itemArea.height - 30) / 2 * 2 * (Math.random() - .5), o = cc.v2(t, i), a = new cc.Rect(o.x - e.width / 2, o.y - e.height / 2, e.width, e.height);
if (this.itemArea.children.length >= 1) {
for (var n = !1, c = 0; c < this.itemArea.children.length; c++) if (this.itemArea.children[c].getBoundingBox().intersects(a)) {
n = !0;
break;
}
return n ? this.randomXY(e) : o;
}
return o;
},
destroyTnt: function(e) {
for (var t = this.itemArea.children.length - 1; t >= 0; t--) {
var i = this.itemArea.children[t];
if (i !== e) {
var o = e.getPosition(cc.v2()), a = new cc.Rect(o.x - 125, o.y - 125, 250, 250), n = i.getPosition(cc.v2());
if (a.contains(n)) {
i.removeFromParent();
i.destroy();
i = null;
}
}
}
},
createRandm: function(e, t) {
var i = (t += 1) - e, o = Math.random() * i + e;
return parseInt(o);
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
var i = e.children[t];
t <= this.boomNumber ? i.active = !0 : i.active = !1;
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
var i = Math.floor(this.createRandm(300, 800)) / 100;
this.extarRedPack += i;
this.addAnim("red", i);
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
var i = null;
"score" === e ? i = this.Score.node.parent.getChildByName("addScore") : "red" === e && (i = this.Score.node.parent.getChildByName("addRed"));
i.getComponent(cc.Label).string = "+" + t;
i.stopAllActions();
i.opacity = 0;
i.y = -132;
cc.tween(i).to(.1, {
opacity: 255
}).to(1, {
y: 42
}).to(.1, {
opacity: 0
}).start();
},
ShowMask: function() {
var e = this;
this.Mask.active = !0;
var t = this.Mask.getChildByName("Fail"), i = this.Mask.getChildByName("Success");
t.active = !1;
i.active = !1;
if (1 === this.victory) {
i.active = !0;
var o = i.getChildByName("lbl").getComponent(cc.Label);
n.sendRequest("pit.v1.PitSvc/Missions", "GET", r).then(function(e) {
for (var t = e.data.items, i = null, a = 0; a < t.length; a++) if (!t[a].status) {
i = t[a];
break;
}
o.string = "";
i.curr_pass_stage < i.need_pass_stage ? o.string = "通关" + i.need_pass_stage + "关后可提现" : i.curr_sign_in < i.need_sign_in ? o.string = "完成今日签到可提现" : i.curr_ad < i.need_ad && (o.string = "再看" + (i.need_ad - i.curr_ad) + "个视频可提现");
});
var a = i.getChildByName("award").getComponent(cc.Label);
a.string = "奖励红包+" + this.redPack;
cc.zm.LevelInfo.ever_pass && (a.node.active = !1);
var c = i.getChildByName("layout").getChildByName("extraAward").getComponent(cc.Label);
if (this.extarRedPack) {
c.node.parent.active = !0;
c.string = "+" + this.extarRedPack;
} else c.node.parent.active = !1;
var r = {
bomb: this.boomNumber + 1,
potion: this.liquidNumber,
score: this.curScore,
ts: new Date().getTime()
}, s = this.createSignData(r);
n.sendRequest("pit.v1.PitSvc/Pass", "POST", s).then(function(e) {
console.log("Pass通关成功返回信息", e);
});
} else 2 === this.victory && (t.active = !0);
cc.tween(this.Mask).to(.3, {
scale: 1
}).call(function() {
e.PauseGameLayer();
}).start();
},
createSignData: function(t) {
var i = [];
for (var o in t) if (t.hasOwnProperty(o) && "sign" != o) {
var a = t[o], n = {};
n.key = o;
n.value = a;
i.push(o);
}
i.sort();
var c = "";
i.forEach(function(e) {
c += "&" + e + "=" + t[e];
}, this);
c = "token=" + cc.zm.userInfo.sc1 + c;
var r = e("MD5");
c = r(c);
t.sign = c;
return t;
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
n.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
cc.zm.userInfo = t.data;
cc.zm.userInfo.power > 0 ? n.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(t) {
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
cc.log("看视频得奖励");
this.showJiliAd();
var e = cc.zm.LevelInfo.ever_pass ? 0 : this.redPack, t = {
red_pack: parseInt(100 * (e + this.extarRedPack)),
ad: cc.zm.ad
};
cc.zm.ad.redPack = t;
this.timer && this.unschedule(this.timer);
},
seeVideoAward: function(e) {
this.showJiliAd();
var t = e.target;
cc.zm.ad.power = !0;
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
var i = this.Hook.children[0].children[0], o = i.convertToWorldSpaceAR(cc.v2(0, 0)), a = cc.instantiate(this.Boom);
a.name = "boom";
this.node.addChild(a);
var c = cc.view.getVisibleSize();
a.setPosition(cc.v2(o.x - c.width / 2, o.y - c.height / 2));
a.active = !0;
a.getComponent(cc.Animation).play("boom");
i.destroy();
i = null;
this.speed = 10;
n.sendRequest("pit.v1.PitSvc/Prop", "POST", {
prop: 10
});
}
}
},
showJiliAd: function() {
cc.log("点击显示激励视频");
cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "()V");
}
});
cc._RF.pop();
}, {
"./Config": "Config",
"./Level": "Level",
Http: "Http",
MD5: "MD5"
} ],
login: [ function(e, t) {
"use strict";
cc._RF.push(t, "6b7cdHix81Ol6r4h+cnHYQh", "login");
var i = e("Http");
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
cc.wxToken = cc.sys.localStorage.getItem("token");
cc.director.loadScene("Index");
}
},
onLoginWX: function() {
cc.sys.isNative && (this.protocol ? cc.wxLogin.wxLogin() : this.showTips());
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
showTips: function() {
var e = this.node.getChildByName("tips");
e.y = 0;
e.active = !0;
cc.tween(e).to(1, {
y: 100
}).delay(.5).call(function() {
e.active = !1;
}).start();
},
update: function(e) {
this.time += e;
if (this.needLogin && this.time >= 1) {
this.time = 0;
if (cc.wxLoginResultcode && this.protocol) {
this.protocol = !1;
var t = {
channel: "1",
imei: "1",
mac: "1",
distinct_id: "1",
oaid: "1",
android_id: "1",
code: cc.wxLoginResultcode
};
i.sendRequest("pit.v1/register", "POST", t).then(function(e) {
cc.wxToken = e.data.token;
cc.sys.localStorage.setItem("token", e.data.token);
cc.director.loadScene("Index");
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
}
});
cc._RF.pop();
}, {
Http: "Http"
} ],
use_reversed_rotateBy: [ function(e, t) {
"use strict";
cc._RF.push(t, "1a8c0/npapCw52O67NIaoqR", "use_reversed_rotateBy");
cc.RotateBy._reverse = !0;
cc._RF.pop();
}, {} ]
}, {}, [ "Config", "Hook", "Http", "IndexMain", "Level", "MD5", "Main", "login", "use_reversed_rotateBy" ]);