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
cc.log("data=", i);
n.onreadystatechange = function() {
if (4 === n.readyState && 200 == n.status) {
cc.log("http res:" + n.response);
var e = JSON.parse(n.response);
0 === e.code ? o(e) : console.log(e.message);
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
});
}
this.SetLayer = cc.find("Canvas/SetLayer");
this.SignLayer = cc.find("Canvas/SignLayer");
this.TurntableLayer = cc.find("Canvas/TurntableLayer");
this.GetMonetyLayer = cc.find("Canvas/GetMoneyLayer");
this.SevenWorkLayer = cc.find("Canvas/SevenWorkLayer");
this.RedPoolLayer = cc.find("Canvas/RedPoolLayer");
this.GetGoodLayer = cc.find("Canvas/GetGood");
cc.zm.showMusic = !0;
cc.zm.showShake = !0;
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
e.showIndexLayer();
e.getUserEcpm();
e.PowerTime();
});
},
PowerTime: function() {
cc.find("Canvas/Index/Power/time").getComponent(cc.Label).string;
cc.zm.userInfo.power < 5 ? this.schedule(this.PowerTimeSchedule, 1) : this.unschedule(this.PowerTimeSchedule);
},
PowerTimeSchedule: function() {
var e = this;
if (cc.zm.userInfo.power_sec <= 0) {
this.unschedule(this.PowerTimeSchedule);
i.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
cc.zm.userInfo = t.data;
e.PowerTime();
});
} else {
cc.find("Canvas/Index/Power/time").getComponent(cc.Label).string.string = this.changeSecond(cc.zm.userInfo.power_sec);
cc.zm.userInfo.power_sec--;
}
},
changeSecond: function(e) {
return "0" + e / 60 + ":" + (e % 60 > 10 ? e % 60 : "0" + e % 60);
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
cc.audioEngine.stop(this.BGM_ID);
this.guide && cc.sys.localStorage.setItem("guide", 1);
i.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(e) {
cc.zm.LevelInfo = e.data;
console.log("关卡信息=", cc.zm.LevelInfo);
cc.director.loadScene("Game");
});
},
showSignLayer: function() {
var e = this;
i.sendRequest("pit.v1.PitSvc/SignInList", "GET", {}).then(function(t) {
for (var i = 0, o = t.data.items, a = 0; a < o.length; a++) {
var n = o[a];
if (!n.status) {
i = n.day;
break;
}
}
e.signDay = i;
e.SignLayer.active = !0;
for (var c = 1; c <= 7; c++) {
var r = e.SignLayer.getChildByName("day_" + c);
c < i ? e.completeBtn(r) : c === i ? e.selectBtn(r) : e.unSelectBtn(r);
}
});
},
showSetLayer: function() {
this.SetLayer.active = !0;
this.SetLayer.getChildByName("nikename").getComponent(cc.Label).string = this.userInfo.nick_name;
this.SetLayer.getChildByName("userid").getComponent(cc.Label).string = "用户ID：" + this.userInfo.user_id;
},
showIndexLayer: function() {
cc.find("Canvas/Index/GetMoney/lbl").getComponent(cc.Label).string = this.userInfo.red_pack;
cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power;
cc.find("Canvas/Index/YuanBao/lbl").getComponent(cc.Label).string = this.userInfo.gc;
cc.find("Canvas/Index/Gold/lbl").getComponent(cc.Label).string = this.userInfo.score;
},
showTurntableLayer: function() {
var e = this;
i.sendRequest("pit.v1.PitSvc/UserInfo", "GET", {}).then(function(t) {
cc.zm.userInfo = t.data;
e.TurntableLayer.active = !0;
cc.zm.userInfo.sec && e.schedule(e.TurnTableCountDown, 1);
});
},
TurnTableCountDown: function() {
if (cc.zm.userInfo.sec <= 0) this.unschedule(this.TurnTableCountDown); else {
this.TurntableLayer.getChildByName("countLbl").getComponent(cc.Label).string.string = this.changeSecond(cc.zm.userInfo.sec);
cc.zm.userInfo.sec--;
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
});
},
showSevenWorkLayer: function() {
var e = this;
i.sendRequest("pit.v1.PitSvc/Missions", "GET", {}).then(function(t) {
for (var i = t.data.items, o = [], a = 0; a < i.length; a++) i[a].curr_sign_in + 1 !== i[a].num || o.push(i[a]);
e.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite).spriteFrame = e.SevenFrames[o[0].num - 1];
for (var n = e.SevenWorkLayer.getChildByName("layout"), c = 0; c < o.length; c++) {
var r = o[c], s = n.getChildByName("layout_" + (c + 1));
s.active = !0;
var d = s.getChildByName("getMoneyBtn"), h = d.getComponent(cc.Button);
if (1 === r.status) {
h.enableAutoGrayEffect = !0;
h.interactable = !1;
} else {
h.interactable = !0;
var l = !1;
r.curr_pass_stage >= r.need_pass_stage && r.curr_sign_in >= r.need_sign_in && r.curr_invite >= r.need_invite && (l = !0);
d.complete = !!l;
}
s.getChildByName("lbl1").getComponent(cc.Label).string = r.value;
s.getChildByName("lbl2").getComponent(cc.Label).string = "观看" + r.need_ad + "个视频";
s.getChildByName("progressBar").getComponent(cc.ProgressBar).progress = r.curr_ad / r.need_ad;
s.getChildByName("barLbl").getComponent(cc.Label).string = r.curr_ad + "/" + r.need_ad;
var u = s.getChildByName("layout");
if (r.need_pass_stage) {
var m = u.getChildByName("item_0");
m.active = !0;
m.getChildByName("lbl").getComponent(cc.Label).string = "通过第" + r.need_pass_stage + "关";
m.getChildByName("icon").getChildByName("arrow").active = r.curr_pass_stage >= r.need_pass_stage;
}
if (r.need_sign_in) {
var g = u.getChildByName("item_1");
g.active = !0;
g.getChildByName("lbl").getComponent(cc.Label).string = "领取签到奖励";
g.getChildByName("icon").getChildByName("arrow").active = r.curr_sign_in >= r.need_sign_in;
}
if (r.need_invite) {
var f = u.getChildByName("item_2");
f.active = !0;
f.getChildByName("lbl").getComponent(cc.Label).string = "邀请" + r.need_invite + "个好友";
f.getChildByName("icon").getChildByName("arrow").active = r.curr_invite >= r.need_invite;
}
}
e.SevenWorkLayer.active = !0;
});
},
sevenWorkGetMoney: function(e) {
var t = this;
e.target.complete ? i.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function() {
t.sevenWorkGetMoney.getChildByName("getLayer").active = !0;
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
}).to(.5, {
y: 250
}).to(.1, {
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
e.target.parent === this.TurntableLayer && this.unschedule(this.TurnTableCountDown);
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
});
},
clickGetMoneyBtn: function() {},
clickTurnTableBtn: function() {
var e = this, t = {
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
clearCache: function() {
cc.sys.localStorage.removeItem("level");
cc.sys.localStorage.removeItem("score");
cc.sys.localStorage.removeItem("guide");
},
adPlay: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadJiLiVideo", "()V");
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
maxScore: 1200,
totalScore: 2700,
good: "b|180,g|960,m|60",
extra: "red",
redPack: 66.66
},
level3: {
id: "三",
score: 1560,
maxScore: 1e3,
totalScore: 3700,
good: "b|200,g|800",
redPack: 20.96
},
level4: {
id: "四",
score: 2405,
maxScore: 1500,
totalScore: 5200,
good: "b|225,g|1200,m|75",
extra: "red",
redPack: 14.36
},
level5: {
id: "五",
score: 3460,
maxScore: 1300,
totalScore: 6500,
good: "b|370,g|370,d|800",
boom: 1,
redPack: 10.71
},
level6: {
id: "六",
score: 4725,
maxScore: 2e3,
totalScore: 8500,
good: "b|200,d|1200,g|600",
redPack: 8.42
},
level7: {
id: "七",
score: 6200,
maxScore: 1500,
totalScore: 1e4,
good: "b|200,g|1000,d|400",
extra: "red,mystery",
boom: 2,
redPack: 6.88
},
level8: {
id: "八",
score: 7885,
maxScore: 2e3,
totalScore: 12e3,
good: "b|200,g|1400,m|400",
redPack: 5.77
},
level9: {
id: "九",
score: 9780,
maxScore: 2e3,
totalScore: 14e3,
good: "b|300,g|1300,d|400",
redPack: 4.94
},
level10: {
id: "十",
score: 11885,
maxScore: 2e3,
totalScore: 16e3,
good: "b|400,g|1000,d|400,m|200",
extra: "red",
redPack: 4.3
},
level11: {
id: "十一",
score: 14200,
maxScore: 1500,
totalScore: 17500,
good: "b|300,s|50,g|750,d|400",
extra: "red,mystery",
boom: 1,
redPack: 3.8
},
level12: {
id: "十二",
score: 16725,
maxScore: 3e3,
totalScore: 20500,
good: "b|450,g|1150,d|1200,m|200",
extra: "red",
redPack: 3.39
},
level13: {
id: "十三",
score: 19460,
maxScore: 2500,
totalScore: 23e3,
good: "b|375,g|1725,d|400",
extra: "red",
redPack: 3.05
},
level14: {
id: "十四",
score: 22405,
maxScore: 2e3,
totalScore: 25e3,
good: "b|200,s|100,g|900,d|800",
boom: 2,
redPack: 2.76
},
level15: {
id: "十五",
score: 25560,
maxScore: 5e3,
totalScore: 3e4,
good: "b|500,s|205,g|2650,d|1600",
extra: "red,mystery",
redPack: 2.52
},
level16: {
id: "十六",
score: 28925,
maxScore: 3e3,
totalScore: 33e3,
good: "b|300,g|1900,d|800",
redPack: 2.32
},
level17: {
id: "十七",
score: 32500,
maxScore: 3500,
totalScore: 36500,
good: "g|1300,b|175,zs|2100,m|100",
redPack: 2.14
},
level18: {
id: "十八",
score: 36285,
maxScore: 1e4,
totalScore: 46500,
good: "g|1900,zs|2100,d|5600,m|100,s|300",
extra: "red,mystery",
redPack: 1.99
},
level19: {
id: "十九",
score: 40280,
maxScore: 4e3,
totalScore: 50500,
good: "b|100,g|2000,zs|1400,d|400,m|100",
redPack: 1.85
},
level20: {
id: "二十",
score: 44485,
maxScore: 4e3,
totalScore: 54500,
good: "b|400,s|400,g|3200",
extra: "red",
boom: 1,
redPack: 1.73
},
level21: {
id: "二十一",
score: 48900,
maxScore: 4e3,
totalScore: 58500,
good: "g|500,zs|3500",
boom: 1,
redPack: 1.62
},
level22: {
id: "二十二",
score: 53525,
maxScore: 4e3,
totalScore: 62500,
good: "d|4000",
extra: "red",
boom: 2,
redPack: 1.53
},
level23: {
id: "二十三",
score: 58360,
maxScore: 4e3,
totalScore: 66500,
good: "b|400,g|2200,zs|1400",
extra: ",mystery",
boom: 2,
redPack: 1.44
},
level24: {
id: "二十四",
score: 62405,
maxScore: 4e3,
totalScore: 70500,
good: "b|400,g|2200,zs|1400",
extra: "red",
redPack: 1.36
},
level25: {
id: "二十五",
score: 68660,
maxScore: 4200,
totalScore: 74500,
good: "zs|4200",
boom: 3,
redPack: 1.29
},
level26: {
id: "二十六",
score: 74125,
maxScore: 5e3,
totalScore: 79500,
good: "s|800,zs|4200",
boom: 1,
redPack: 1.22
},
level27: {
id: "二十七",
score: 79800,
maxScore: 5e3,
totalScore: 84500,
good: "b|400,zs|700,d|3600",
boom: 1,
extra: "red",
redPack: 1.17
},
level28: {
id: "二十八",
score: 85685,
maxScore: 5e3,
totalScore: 89500,
good: "b|500,g|2950,m|150,zs|1400",
boom: 1,
extra: "red",
redPack: 1.11
},
level29: {
id: "二十九",
score: 91780,
maxScore: 5e3,
totalScore: 94500,
good: "b|500,g|2950,m|150,zs|1400",
extra: "red",
boom: 1,
redPack: 1.06
},
level30: {
id: "三十",
score: 98085,
maxScore: 5e3,
totalScore: 99500,
good: "b|500,g|2950,s|150,zs|1400",
boom: 1,
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
var t, i, a, n, c, r, f, v, p, y = Array();
y = u(e = g(e));
r = 1732584193;
f = 4023233417;
v = 2562383102;
p = 271733878;
for (t = 0; t < y.length; t += 16) {
i = r;
a = f;
n = v;
c = p;
r = s(r, f, v, p, y[t + 0], 7, 3614090360);
p = s(p, r, f, v, y[t + 1], 12, 3905402710);
v = s(v, p, r, f, y[t + 2], 17, 606105819);
f = s(f, v, p, r, y[t + 3], 22, 3250441966);
r = s(r, f, v, p, y[t + 4], 7, 4118548399);
p = s(p, r, f, v, y[t + 5], 12, 1200080426);
v = s(v, p, r, f, y[t + 6], 17, 2821735955);
f = s(f, v, p, r, y[t + 7], 22, 4249261313);
r = s(r, f, v, p, y[t + 8], 7, 1770035416);
p = s(p, r, f, v, y[t + 9], 12, 2336552879);
v = s(v, p, r, f, y[t + 10], 17, 4294925233);
f = s(f, v, p, r, y[t + 11], 22, 2304563134);
r = s(r, f, v, p, y[t + 12], 7, 1804603682);
p = s(p, r, f, v, y[t + 13], 12, 4254626195);
v = s(v, p, r, f, y[t + 14], 17, 2792965006);
r = d(r, f = s(f, v, p, r, y[t + 15], 22, 1236535329), v, p, y[t + 1], 5, 4129170786);
p = d(p, r, f, v, y[t + 6], 9, 3225465664);
v = d(v, p, r, f, y[t + 11], 14, 643717713);
f = d(f, v, p, r, y[t + 0], 20, 3921069994);
r = d(r, f, v, p, y[t + 5], 5, 3593408605);
p = d(p, r, f, v, y[t + 10], 9, 38016083);
v = d(v, p, r, f, y[t + 15], 14, 3634488961);
f = d(f, v, p, r, y[t + 4], 20, 3889429448);
r = d(r, f, v, p, y[t + 9], 5, 568446438);
p = d(p, r, f, v, y[t + 14], 9, 3275163606);
v = d(v, p, r, f, y[t + 3], 14, 4107603335);
f = d(f, v, p, r, y[t + 8], 20, 1163531501);
r = d(r, f, v, p, y[t + 13], 5, 2850285829);
p = d(p, r, f, v, y[t + 2], 9, 4243563512);
v = d(v, p, r, f, y[t + 7], 14, 1735328473);
r = h(r, f = d(f, v, p, r, y[t + 12], 20, 2368359562), v, p, y[t + 5], 4, 4294588738);
p = h(p, r, f, v, y[t + 8], 11, 2272392833);
v = h(v, p, r, f, y[t + 11], 16, 1839030562);
f = h(f, v, p, r, y[t + 14], 23, 4259657740);
r = h(r, f, v, p, y[t + 1], 4, 2763975236);
p = h(p, r, f, v, y[t + 4], 11, 1272893353);
v = h(v, p, r, f, y[t + 7], 16, 4139469664);
f = h(f, v, p, r, y[t + 10], 23, 3200236656);
r = h(r, f, v, p, y[t + 13], 4, 681279174);
p = h(p, r, f, v, y[t + 0], 11, 3936430074);
v = h(v, p, r, f, y[t + 3], 16, 3572445317);
f = h(f, v, p, r, y[t + 6], 23, 76029189);
r = h(r, f, v, p, y[t + 9], 4, 3654602809);
p = h(p, r, f, v, y[t + 12], 11, 3873151461);
v = h(v, p, r, f, y[t + 15], 16, 530742520);
r = l(r, f = h(f, v, p, r, y[t + 2], 23, 3299628645), v, p, y[t + 0], 6, 4096336452);
p = l(p, r, f, v, y[t + 7], 10, 1126891415);
v = l(v, p, r, f, y[t + 14], 15, 2878612391);
f = l(f, v, p, r, y[t + 5], 21, 4237533241);
r = l(r, f, v, p, y[t + 12], 6, 1700485571);
p = l(p, r, f, v, y[t + 3], 10, 2399980690);
v = l(v, p, r, f, y[t + 10], 15, 4293915773);
f = l(f, v, p, r, y[t + 1], 21, 2240044497);
r = l(r, f, v, p, y[t + 8], 6, 1873313359);
p = l(p, r, f, v, y[t + 15], 10, 4264355552);
v = l(v, p, r, f, y[t + 6], 15, 2734768916);
f = l(f, v, p, r, y[t + 13], 21, 1309151649);
r = l(r, f, v, p, y[t + 4], 6, 4149444226);
p = l(p, r, f, v, y[t + 11], 10, 3174756917);
v = l(v, p, r, f, y[t + 2], 15, 718787259);
f = l(f, v, p, r, y[t + 9], 21, 3951481745);
r = o(r, i);
f = o(f, a);
v = o(v, n);
p = o(p, c);
}
return (m(r) + m(f) + m(v) + m(p)).toLowerCase();
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
e.ResumeGameLayer();
cc.zm.LevelInfo = t.data;
e.NeedLayer.active = !1;
e.handleDaoju();
e.adjusBoomLayout();
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
this.MinerAnimation = this.Miner.getComponent(cc.Animation);
this.Hook = cc.find("Canvas/Header/Miner/Hook");
this.HookHeight = this.Hook.height;
this.HookState = 0;
this.curScore = 0;
this.pauseGame = !1;
this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[0];
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
this.handleDaoju();
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
var e = this, t = {
ad: cc.zm.ad,
weapon: this.LotteryProp
};
n.sendRequest("pit.v1.PitSvc/Lottery2", "POST", t).then(function(t) {
e.LotteryAward = t.data.award;
e.hideLotteryLayer();
});
},
handleDaoju: function() {
for (var e = cc.zm.LevelInfo.weapon, t = 0; t < e.length; t++) {
if (10 === e[t].prop) this.boomNumber = e[t].num - 1; else if (e[t].num) {
var i = {
prop: e[t].prop
};
n.sendRequest("pit.v1.PitSvc/Prop", "POST", i).then(function() {});
}
11 === e[t].prop && (this.clockNumber = e[t].num);
12 === e[t].prop && (this.handbookNumber = e[t].num);
13 === e[t].prop && (this.liquidNumber = e[t].num);
14 === e[t].prop && (this.cloverNumber = e[t].num);
}
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
this.HookState || (this.HookState = 1);
},
emitHook: function() {
switch (this.HookState) {
case 1:
this.Hook.height += this.speed;
this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[1];
break;

case 2:
if (this.Hook.height <= this.HookHeight) {
this.Hook.children[0] && this.Hook.children[0].childrenCount && this.Handle(this.Hook.children[0].children);
this.StopHookMove();
} else this.Hook.height -= this.speed;
}
},
PullBackHook: function() {
this.MinerAnimation.play("hero");
this.HookState = 2;
},
SetSpeed: function(e) {
var t = 1;
i.default[e.node.name] = i.default[e.node.name] || {};
this.liquidNumber && (t = 1.1);
this.speed = i.default[e.node.name].speed * t || 10;
},
ResetInfo: function() {
this.victory = this.Score.string = this.Time.string = this.Checkpoint.string = this.TargetScore.string = 0;
},
StartTime: function() {
if (this.clockNumber) {
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
var e = this;
this.newCreateCalc().forEach(function(t) {
var i = cc.instantiate(e.Prefab[t.name]), o = e.randomXY(i);
i.parent = e.itemArea;
t.score && (i.score = t.score);
t.prop && (i.extra = t.prop);
i.setPosition(o);
if ("Tnt" === t.name) {
var a = cc.instantiate(e.Boom);
e.node.addChild(a);
a.setPosition(cc.v2(o.x, o.y - 218));
i.boom = a;
}
if ("Mouse" === t.name || "DrillMouse" === t.name) {
i.zIdex = 1;
e.moveMouse(i);
}
});
},
moveMouse: function(e) {
var t = parseInt(300 - e.x) / 600 * 10;
cc.tween(e).to(t, {
x: 300
}).start();
this.scheduleOnce(function() {
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
prop: .1
});
e = [].concat(e, i);
}
if (t[1]) {
var o = [], a = {
name: "Mystery",
prop: this.clockNumber ? [ "炸弹", "3元红包", "5元红包", "药水", "药水" ][this.createRandm(0, 4)] : [ "炸弹", "3元红包", "5元红包", "药水" ][this.createRandm(0, 3)]
};
o.push(a);
e = [].concat(e, o);
}
}
if (this.levelInfo.boom) for (var n = 0; n < this.levelInfo.boom; n++) {
var c = [];
c.push({
name: "Tnt"
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
}), f = [], v = this.levelInfo.maxScore, p = 0, y = 0; y < g.length && (p += g[y].score) <= v; y++) f.push(g[y]);
return [].concat(e, f);
},
createByType: function(e, t) {
var i = [], o = 0;
switch (e) {
case "b":
var a = 1;
this.handbookNumber && (a = 1.2);
for (var n = 0; n < 30; n++) {
var c = [ 20, 30, 40 ], r = this.createRandm(0, 2);
if ((o += c[r]) > t) break;
var s = {
name: "Stone-" + r,
score: c[r] * a
};
i.push(s);
}
break;

case "g":
for (var d = 0; d < 30; d++) {
var h = [], l = t - o;
if (l >= 300) h = [ 50, 100, 150, 200, 300 ]; else for (var u = Math.floor(l / 50), m = u > 4 ? 4 : u, g = 0; g < m; g++) h.push(50 * (1 + g));
var f = this.createRandm(0, h.length - 1);
if ((o += h[f]) > t) break;
if (0 === h.length) break;
var v = {
name: "Gold-" + f,
score: h[f]
};
i.push(v);
}
break;

case "d":
for (var p = 0; p < 30 && !((o += 400) > t); p++) {
i.push({
name: "Drill",
score: 400
});
}
break;

case "zs":
for (var y = 0; y < 30 && !((o += 700) > t); y++) {
i.push({
name: "DrillMouse",
score: 700
});
}
break;

case "s":
for (var S = 0; S < 30 && !((o += 50) > t); S++) {
i.push({
name: "Mouse",
score: 50
});
}
break;

case "m":
for (var C = 0; C < 30; C++) {
var b;
if ((o += b = t - o > 200 ? this.createRandm(30, 200) : t - o > 30 ? this.createRandm(30, t - o) : 30) > t) break;
var k = {
name: "Mystery",
prop: b
};
i.push(k);
}
}
return i;
},
randomXY: function(e) {
this.itemArea.y, this.itemArea.height;
var t = (this.itemArea.width - 30) / 2 * 2 * (Math.random() - .5), i = (this.itemArea.height - 30) / 2 * 2 * (Math.random() - .5), o = cc.v2(t, i), a = new cc.Rect(o.x - e.width / 2, o.y - e.height / 2, e.width, e.height);
if (this.itemArea.children.length > 1) {
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
var o = e.getBoundingBox(), a = i.getPosition(cc.v2());
if (o.contains(a)) {
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
this.MinerAnimation.stop("hero");
this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[0];
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
var i = this.createRandm(300, 800) / 100;
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
n.sendRequest("pit.v1.PitSvc/Missions", "GET", c).then(function(e) {
for (var t = e.data.items, i = null, a = 0; a < t.length; a++) if (!t[a].status) {
i = t[a];
break;
}
bl.string = "";
i.curr_pass_stage < i.need_pass_stage ? o.string = "通关" + i.need_pass_stage + "关后可提现" : i.curr_sign_in < i.need_sign_in ? o.string = "完成今日签到可提现" : i.curr_ad < i.need_ad && (o.string = "再看" + (i.need_ad - i.curr_ad) + "个视频可提现");
});
i.getChildByName("award").getComponent(cc.Label).string = "奖励红包+" + this.redPack;
var a = i.getChildByName("layout").getChildByName("extraAward").getComponent(cc.Label);
this.extarRedPack ? a.string = "+" + this.extarRedPack : a.string = "";
var c = {
red_pack: 100 * parseInt(this.redPack + this.extarRedPack),
bomb: this.boomNumber + 1,
potion: this.liquidNumber,
score: this.curScore,
ts: new Date().getTime()
}, r = this.createSignData(c);
n.sendRequest("pit.v1.PitSvc/Pass", "POST", r).then(function() {});
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
n.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(t) {
cc.zm.LevelInfo = t.data;
e.Reload();
});
break;

case 2:
this.ExitGame();
}
},
AwardVideo: function() {},
ExitGame: function() {
cc.director.loadScene("Index");
},
ResumeGameLayer: function() {
this.BackLayer.active = !1;
this.pauseGame = !1;
this.StartTime();
2 === this.HookState && this.MinerAnimation.play("hero");
},
PauseGameLayer: function() {
this.pauseGame = !0;
this.unschedule(this.timer);
2 === this.HookState && this.MinerAnimation.stop("hero");
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
var i = this;
switch (t) {
case "炸弹":
if (this.Hook.children[0].children[0] && this.boomNumber > -1) {
cc.zm.showShake && cc.sys.isNative && jsb.Device.vibrate(.3);
n.sendRequest("pit.v1.PitSvc/Prop", "POST", {
prop: 10
}).then(function() {
i.boomNumber--;
i.adjusBoomLayout();
var e = i.Hook.children[0].children[0], t = e.convertToWorldSpaceAR(cc.v2(0, 0)), o = cc.instantiate(i.Boom);
o.name = "boom";
i.node.addChild(o);
var a = cc.view.getVisibleSize();
o.setPosition(cc.v2(t.x - a.width / 2, t.y - a.height / 2));
o.active = !0;
o.getComponent(cc.Animation).play("boom");
e.destroy();
e = null;
i.speed = 10;
});
}
}
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
this.time = 0;
cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjowLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.hqFnoHXXqUuM4zBUsszLnETxywrtCRkCMNySc_cdu_0");
if (cc.sys.localStorage.getItem("token")) {
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
}).call(function() {
e.active = !0;
}).start();
},
update: function(e) {
this.time += e;
if (this.time >= 1) {
this.time = 0;
if (!cc.wxLoginInfo) return;
if (cc.wxLoginInfo.wxLoginResultcode && this.protocol && !cc.sys.localStorage.getItem("token")) {
this.protocol = !1;
var t = {
channel: "1",
imei: "1",
mac: "1",
distinct_id: "1",
oaid: "1",
android_id: "1",
code: cc.wxLoginInfo.wxLoginResultcode
};
i.sendRequest("pit.v1/register", "POST", t).then(function(e) {
cc.wxToken = e.data.token;
cc.sys.localStorage.setItem("token", e.data.token);
cc.director.loadScene("Index");
});
}
}
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