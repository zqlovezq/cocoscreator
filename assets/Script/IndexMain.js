const http = require("Http");
const AWARD = cc.Enum({
    DAY_1: 0,
    DAY_2: 1,
    DAY_3: 2,
    DAY_4: 3,
    DAY_5: 4,
    DAY_6: 5,
    DAY_7: 6,
    RED_5: 7,
    RED_10:8,
    BOOM:9,
    LOCK:10,
    SHOUCE:11,
    POWER:12
})
cc.Class({
    extends: cc.Component,

    properties: {
        BGM: {
            default: null,
            type: cc.AudioClip
        },
        SevenFrames: {
            type: cc.SpriteFrame,
            default: [],
        },
        AwardFrames: {
            type: cc.SpriteFrame,
            default: [],
        },
        TextFrames: {
            type: cc.SpriteFrame,
            default: [],
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //关闭FPS面板
        // cc.director.setDisplayStats(false);
        cc.zm = {};
        // 增加屏幕视频
        this.screenAdapter();
        // 判断是否是第一次进入游戏 如果第一次进入那么弹出First弹窗
        let firstLayer = cc.find('Canvas/First');
        firstLayer.active = false;
        let _first = cc.sys.localStorage.getItem("first");
        if(!_first){
            cc.sys.localStorage.setItem("first",true);
            this.scheduleOnce(()=>{
                firstLayer.scale = 0;
                firstLayer.active = true;
                cc.tween(firstLayer).to(0.5,{scale:1}).start()
            },1)
        }
        //监听开始游戏
        // 设置界面
        this.SetLayer = cc.find('Canvas/SetLayer');
        // 签到界面
        this.SignLayer = cc.find('Canvas/SignLayer');
        // 大转盘界面
        this.TurntableLayer = cc.find('Canvas/TurntableLayer');
        // 存钱罐界面 提现也是这个界面
        this.GetMonetyLayer = cc.find('Canvas/GetMoneyLayer');
        // 七日任务
        this.SevenWorkLayer = cc.find("Canvas/SevenWorkLayer");
        // 奖池红包界面
        this.RedPoolLayer = cc.find("Canvas/RedPoolLayer")
        // 获取物品的弹窗
        this.GetGoodLayer = cc.find("Canvas/GetGood")
        // 看视频得奖励界面
        this.SeeVideolayer = cc.find("Canvas/SeeVideolayer")
        // 重置关卡界面
        this.ResumeLayer =  cc.find("Canvas/ResumeLayer")
        cc.zm.showMusic = true;
        cc.zm.showShake = true;
        this.countDownTime = 0;
        // startBtn.on(cc.Node.EventType.TOUCH_END,this.StartGame.bind(this));
        this.BGM_ID = cc.audioEngine.play(this.BGM);
        // console.log(http.sendRequest);
        //预加载场景2
        cc.director.preloadScene('Game');
        // 新手引导
        let guide = cc.find('Canvas/Guide')
        guide.active = false;
        guide.getChildByName("guide_0").active = false;
        guide.getChildByName("guide_4").active = false;
        if (cc.sys.localStorage.getItem("guide") !== "over") {
            if (!cc.sys.localStorage.getItem("guide")) {
                this.guide = true;
                guide.active = true;
                guide.getChildByName("guide_0").active = true;
            }
            if (cc.sys.localStorage.getItem("guide") === '4') {
                this.guide = false;
                guide.active = true;
                guide.getChildByName("guide_4").active = true;
            }
        }
        // 获取用户信息
        this.getUserInfo();
    },
    createSignData: function (data) {
        var sortList = [];
        for (var key in data) {
            if (data.hasOwnProperty(key) && key != "sign") {
                var value = data[key];
                var item = {};
                item.key = key;
                item.value = value;
                sortList.push(key);
            }
        }
        sortList.sort();
        var strToJiaMi = "";
        sortList.forEach(function (key) {
            strToJiaMi += "&" + key + "=" + data[key];
        }, this);
        strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi;
        // var noJiaMi = strToJiaMi;
        // console.log("未加密前=", strToJiaMi)
        var hex_md5 = require("MD5")
        strToJiaMi = hex_md5(strToJiaMi);
        data.sign = strToJiaMi;
        // console.log("加密后=", strToJiaMi)
        return data;

    },
    getUserEcpm() {
        let sendData = {
            "ecpm": 1,
            "ts": new Date().getTime()//时间戳
        };
        let data = this.createSignData(sendData);
        http.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then((res) => {
            console.log("刷新用户的Ecpm", res.data);
            cc.zm.ad = res.data.ad;
        })
    },
    getUserInfo() {
        let sendData = {};
        http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then((res) => {
            this.userInfo = res.data;
            cc.zm.userInfo = this.userInfo
            // console.log(this.userInfo);
            this.showIndexLayer();
            // 刷新一下用户的Ecpm
            this.getUserEcpm();
            // 体力是否倒计时
            this.PowerTime()
        })
    },
    PowerTime(){
        let time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label)
        if(cc.zm.userInfo.power<5){
            // 现在才会倒计时
            // 先获取
            this.schedule(this.PowerTimeSchedule, 1)
        }else{
            time.string = "00:00";
            this.unschedule(this.PowerTimeSchedule);
        }
    },
    PowerTimeSchedule(){
        if (cc.zm.userInfo.power_sec <= 0) {
            this.unschedule(this.PowerTimeSchedule);
            // 在获取用户信息 是否体力满 没有满接着倒计时
            this.getUserInfo();
        }else{
            // 每一秒更新倒计时
            let time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);
            time.string = this.changeSecond(cc.zm.userInfo.power_sec);
            cc.zm.userInfo.power_sec--
        }
    },
    // 写一个算法 将秒数传进来生成一个00:00形式的字符串
    changeSecond(s){
        let minute = "0"+Math.floor(s/60);
        let second = s%60>=10?s%60:"0"+s%60
        return minute+":"+second
    },
    guideOver() {
        cc.find('Canvas/Guide').active = false;
        cc.sys.localStorage.setItem("guide", "over");
    },
    // 设置屏幕适配
    screenAdapter() {
        let canvas = cc.find("Canvas").getComponent(cc.Canvas);
        let winSize = cc.view.getVisibleSize();

        if (winSize.height / winSize.width <= 720 / 1280) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        else {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    },
    StartGame() {
        //关闭BGM
        cc.audioEngine.stop(this.BGM_ID);
        //清空关卡数 不清空关卡
        // cc.sys.localStorage.removeItem('level');
        // cc.sys.localStorage.removeItem('score');
        if (this.guide) {
            cc.sys.localStorage.setItem("guide", 1);
        }
        //跳转场景
        // 开始游戏之前 先获取关卡信息 如果没有关卡信息不进入游戏
        http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then((res) => {
            cc.zm.LevelInfo = res.data;
            console.log("关卡信息=", cc.zm.LevelInfo);
            // 判断
            if(cc.zm.userInfo.power<=0){
                // 显示看视频获得体力界面
                this.showSeeVideolayer();
            }else{
                cc.director.loadScene("Game");
            }
        });
    },
    showSeeVideolayer(){
        this.SeeVideolayer.active = true;
    },
    // 看视频得奖励
    seeVideoAward(){
        let sendData = {
            ad:cc.zm.ad
        }
        http.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then((res) => {
            this.SeeVideolayer.active = false;
            this.getUserInfo();
        });
    },
    // 显示签到界面
    showSignLayer() {
        // 先获取签到列表
        let sendData = {}
        http.sendRequest("pit.v1.PitSvc/SignInList", "GET", sendData).then((res) => {
            // console.log("签到列表", res);
            let day = 0;
            let items = res.data.items;
            for (let i = 0; i < items.length; i++) {
                let _data = items[i];
                if (_data.status) {
                    day = _data.day;
                    break;
                }
            }
            this.signDay = day>0?day:1;
            // this.signDay=0;
            this.SignLayer.active = true;
            for (let i = 1; i <= 7; i++) {
                let dayNode = this.SignLayer.getChildByName("day_" + i);
                if (i <= day) {
                    this.completeBtn(dayNode);
                } else if (i === day+1) {
                    this.selectBtn(dayNode);
                } else {
                    this.unSelectBtn(dayNode);
                }
            }
        });
    },
    // 显示设置界面
    showSetLayer() {
        this.SetLayer.active = true;
        // 获取用户信息
        // http.sendRequest("pit.v1.PitSvc/Stage");
        let nickName = this.SetLayer.getChildByName("nikename").getComponent(cc.Label);
        nickName.string = this.userInfo.nick_name;
        let userId = this.SetLayer.getChildByName("userid").getComponent(cc.Label);
        userId.string = `用户ID：${this.userInfo.user_id}`
        // icon
        let icon = this.SetLayer.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite);
        var remoteUrl = this.userInfo.avatar_url;
        cc.assetManager.loadRemote(remoteUrl, {ext:'.png'},function (err, texture) {
            // Use texture to create sprite frame
            icon.spriteFrame = new cc.SpriteFrame(texture);
        });
    },
    // 显示主界面
    showIndexLayer() {
        // 红包的数量
        cc.find("Canvas/Index/GetMoney/lbl").getComponent(cc.Label).string = this.userInfo.red_pack;
        cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power;
        // 元宝的个数
        cc.find("Canvas/Index/YuanBao/lbl").getComponent(cc.Label).string = this.userInfo.gc;
        cc.find("Canvas/Index/Gold/lbl").getComponent(cc.Label).string = this.userInfo.score;
        // cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power
    },
    // 显示大转盘界面
    showTurntableLayer() {
        // 显示大转盘之前获取用户信息接口
        this.point = this.TurntableLayer.getChildByName("Pointer");
        this.point.angle = 360;
        let sendData = {};
            http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then((res) => {
                cc.zm.userInfo = res.data
                this.TurntableLayer.active = true;
                let btnCom = this.TurntableLayer.getChildByName("beginBtn").getComponent(cc.Button);
                if(cc.zm.userInfo.sec<0){
                    // 有倒计时 开始倒计时 todo
                    // 此时转盘点击按钮 置灰且不可点击
                    btnCom.enableAutoGrayEffect = true;
                    btnCom.interactable = false;
                    this.countDownTime = Math.abs(cc.zm.userInfo.sec);
                    this.schedule(this.TurnTableCountDown, 1)
                }else{
                    btnCom.interactable = true;
                }
            })
    },
    // 大转盘的倒计时
    TurnTableCountDown(){
        if(this.countDownTime){
            if (this.countDownTime < 0) {
                this.unschedule(this.TurnTableCountDown);
            }else{
                // 每一秒更新倒计时
                let time = this.TurntableLayer.getChildByName("countLbl").getComponent(cc.Label);
                this.countDownTime--;
                time.string = this.changeSecond(this.countDownTime);
            }
        }
    },
    // 显示红包池界面
    showRedPoolLayer() {
        // 获取奖池信息
        let sendData = {};
        http.sendRequest("pit.v1.PitSvc/JackPot", "GET", sendData).then((res) => {
            this.RedPoolLayer.active = true;
            let poolInfo = res.data;
            let arr = ["kai", "xin", "kuang", "gong"]
            for (let i = 0; i < 4; i++) {
                let value = poolInfo[arr[i]];
                let com = this.RedPoolLayer.getChildByName(arr[i]).getComponent(cc.Label);
                com.string = "x" + value;
            }
            // 奖池金额 
            let award_lbl = this.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label);
            award_lbl.string = poolInfo.amount
            // 增加倒计时
            let hour = this.RedPoolLayer.getChildByName("count_1").getComponent(cc.Label);
            hour.string = poolInfo.hour;
            let minute = this.RedPoolLayer.getChildByName("count_2").getComponent(cc.Label);
            minute.string = poolInfo.minute<10?"0"+poolInfo.minute:poolInfo.minute;
        })
    },
    // 显示7日任务界面
    showSevenWorkLayer() {
        // 现获取七日任务列表
        let sendData = {};
        http.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then((res) => {
            // console.log("七日任务列表=", res.data);
            // 通过数据初始化界面 状态 0.未领取 1.已领取
            let items = res.data.items;
            let signNumber = 0;
            let arr = [];
            for (let i = 0; i < items.length; i++) {
                // 先获取自己的数据 
                let _status = items[i].status;
                if(!_status){
                    signNumber = items[i].num;
                    break;
                }
            }
            for (let i = 0; i < items.length; i++) {
                if(signNumber===items[i].num){
                    arr.push(items[i]);
                }  
            }
            // 设置title
            let title = this.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite);
            title.spriteFrame = this.SevenFrames[arr[0].num - 1]
            // 一只当前数据item 通过数据
            let layout = this.SevenWorkLayer.getChildByName("layout");
            for (let j = 0; j < arr.length; j++) {
                let _data = arr[j];
                let _layoutH = layout.getChildByName("layout_" + (j + 1));
                _layoutH.active = true;
                let btn = _layoutH.getChildByName("getMoneyBtn");
                btn._id = _data.id;
                let btnCom = btn.getComponent(cc.Button);
                if (_data.status === 1) {
                    btnCom.enableAutoGrayEffect = true;
                    btnCom.interactable = false;
                } else {
                    btnCom.interactable = true;
                    // 判断所有条件是否均达成
                    let isComplete = false;
                    if (_data.curr_pass_stage >= _data.need_pass_stage && _data.curr_sign_in >= _data.need_sign_in && _data.curr_invite >= _data.need_invite) {
                        isComplete = true;
                    }
                    if (isComplete) {
                        // 条件达成
                        btn.complete = true;
                    } else {
                        // 没有达成
                        btn.complete = false;
                    }
                }
                // 先设置文本
                // 红包
                let red = _layoutH.getChildByName("lbl1").getComponent(cc.Label);
                red.string = _data.value;
                // 设置观看视频次数
                let videoText = _layoutH.getChildByName("lbl2").getComponent(cc.Label);
                videoText.string = `观看${_data.need_ad}个视频`
                // 进度条
                let bar = _layoutH.getChildByName("progressBar").getComponent(cc.ProgressBar);
                bar.progress = _data.curr_ad / _data.need_ad;
                let barLbl = _layoutH.getChildByName("barLbl").getComponent(cc.Label);
                barLbl.string = `${_data.curr_ad}/${_data.need_ad}`
                // 额外条件
                // 需要通关数
                let itemLayout = _layoutH.getChildByName("layout");
                if (_data.need_pass_stage) {
                    let item0 = itemLayout.getChildByName("item_0");
                    item0.active = true;
                    item0.getChildByName("lbl").getComponent(cc.Label).string = `通过第${_data.need_pass_stage}关`;
                    let arrow = item0.getChildByName("icon").getChildByName("arrow");
                    arrow.active = _data.curr_pass_stage >= _data.need_pass_stage
                }
                if (_data.need_sign_in) {
                    let item1 = itemLayout.getChildByName("item_1");
                    item1.active = true;
                    item1.getChildByName("lbl").getComponent(cc.Label).string = `领取签到奖励`;
                    let arrow = item1.getChildByName("icon").getChildByName("arrow");
                    arrow.active = _data.curr_sign_in >= _data.need_sign_in
                }
                if (_data.need_invite) {
                    let item1 = itemLayout.getChildByName("item_2");
                    item1.active = true;
                    item1.getChildByName("lbl").getComponent(cc.Label).string = `邀请${_data.need_invite}个好友`;
                    let arrow = item1.getChildByName("icon").getChildByName("arrow");
                    arrow.active = _data.curr_invite >= _data.need_invite
                }
            }
            this.SevenWorkLayer.active = true;
        })
    },
    // 显示重置关卡界面
    showResumeLayer(){
        this.ResumeLayer.active = true;
    },
    resumeLevel(){
        http.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then((res) => {
            this.ResumeLayer.active = false;
            this.getUserInfo();
        })
    },
    sevenWorkGetMoney(e) {
        let target = e.target;
        if (!target.complete) {
            this.showTips("条件未达成");
        } else {
            // 像服务器发送提现请求
            http.sendRequest("pit.v1.PitSvc/PullMission", "POST", {id:target._id}).then((res) => {
                // 像服务器发送提现请求
                // console.log("像服务器发送提现请求", res.data);
                this.SevenWorkLayer.getChildByName("getLayer").active = true;
            })
        }
    },
    // 显示存钱罐界面
    showGetMoneyLayer() {
        // 打开存钱罐 获取存钱罐的信息
        http.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then((res) => {
            let data = res.data;
            let gc = data.gc || 0
            // console.log("存钱罐信息=", data);
            // 先定义当前那个阶段是否可以提取
            this.getMoneyStage = 0;
            let arr = [0.3, 0.5, 1, 2, 5, 10, 20]
            for (let i = 0; i < data.items.Length; i++) {
                if (data.items[i].times) {
                    this.getMoneyStage = arr[i];
                    break;
                }
            }
            // 初始化存钱罐界面属性
            this.GetMonetyLayer.active = true;
            // 显示元宝余额
            this.GetMonetyLayer.getChildByName("YuanBao_Number").getComponent(cc.Label).string = gc;
            // // 元宝跟现金进行转换 转换比例为10000:1
            this.extractMoney = gc / 10000;
            this.GetMonetyLayer.getChildByName("Change_Number").getComponent(cc.Label).string = this.extractMoney + "元";
            this.choiceBtn = null;
            // 开始的时候getMoneyBtn置灰不可点击
            let btn = this.GetMonetyLayer.getChildByName("getMoneyBtn");
            let btnCom = btn.getComponent(cc.Button);
            btnCom.enableAutoGrayEffect = true;
            btnCom.interactable = false;
        })
    },
    // 点击选择提现金钱按钮
    choiceGetMoneyBtn(e, msg) {
        let target = e.target;
        if (this.choiceBtn === null) {
            this.choiceBtn = target;
            this.choiceBtn.money = Number(msg)
            this.selectBtn(target);
        } else {
            this.unSelectBtn(this.choiceBtn);
            this.choiceBtn = target;
            this.choiceBtn.money = Number(msg)
            this.selectBtn(target);
        }
        let btn = this.GetMonetyLayer.getChildByName("getMoneyBtn");
        let btnCom = btn.getComponent(cc.Button);
        btnCom.interactable = true;
    },
    // 点击提现按钮
    clickGetMoneyBtn1(e) {
        let target = e.target;
        if (this.choiceBtn === null) {
            return;
        } else {
            // 开始提现金钱
            // 判断条件 1  是否元宝数量是否满足提现档位，不满足时提示：元宝数量不足
            // 判断条件 2  档位是否为最小档位，如果不是提示：请先完成上一个档位提现
            // console.log("开始提现", this.choiceBtn.money);
            if (this.extractMoney < this.choiceBtn.money) {
                // 不符合条件1 弹出元宝数量不足的tips
                this.showTips("元宝数量不足");
                return;
            }
            if (this.choiceBtn.money > this.getMoneyStage) {
                // 不符合条件2 
                this.showTips("请先完成上一个档位提现");
                return;
            }
            // 都符合条件像服务器发送请求
            http.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then((res) => {
                // 成功提现

                let layer = target.parent.getChildByName("getLayer");
                layer.active = true;

            })
        }
    },
    showTips(msg) {
        let tips = cc.find("Canvas/Tips")
        tips.stopAllActions();
        tips.y = 145;
        let lbl = tips.getComponent(cc.Label);
        lbl.string = msg;
        cc.tween(tips).to(0.1, { opacity: 255 }).to(1, { y: 300 }).delay(0.5).to(0.1, { opacity: 0 }).start()
    },
    // 关闭音乐
    stopBGM(event) {
        if (cc.zm.showMusic) {
            cc.zm.showMusic = false;
            this.unSelectBtn(event.target);
            cc.audioEngine.pause(this.BGM_ID);
        } else {
            cc.zm.showMusic = true;
            this.selectBtn(event.target);
            cc.audioEngine.resume(this.BGM_ID);
        }
    },
    // 关闭震动
    shakePhone(event) {
        if (cc.zm.showShake) {
            cc.zm.showShake = false;
            this.unSelectBtn(event.target);
            // console.log(jsb.Device);
            // jsb.Device.vibrate(3);
        } else {
            cc.zm.showShake = true;
            this.selectBtn(event.target);
        }
    },
    selectBtn(btn) {
        btn.getChildByName("select").active = true;
    },
    unSelectBtn(btn) {
        btn.getChildByName("select").active = false;
    },
    completeBtn(btn) {
        btn.getChildByName("select").active = false;
        btn.getChildByName("complete").active = true;
    },
    // 用户协议
    showUserXieYi() {
        // console.log("用户协议");
    },
    // 隐私政策
    showUserYinSi() {
        // console.log("隐私政策");
    },
    // 退出登陆
    ExitBackBtn(e) {
        e.target.parent.active = false;
        if (this.choiceBtn) {
            this.unSelectBtn(this.choiceBtn);
            this.choiceBtn = null;
        }
        if(this.TurntableLayer.active===true){
            this.showTurntableLayer();
        }
        // 关闭当前也进入首页 刷新界面
        this.getUserInfo();
        // console.log("退出登陆");
    },
    // 点击签到按钮
    clickSignBtn(e) {
        // 签到
        let sendData = {
            ad: cc.zm.ad
        }
        http.sendRequest("pit.v1.PitSvc/SignIn", "POST", sendData).then((res) => {
            // let res = {data:{
            //     "day":1,
            //     "card":1,
            //     "gc":100,            }}
            // console.log("点击签到", res);
            let signDay = this.SignLayer.getChildByName("day_" + this.signDay);
            this.completeBtn(signDay);
            // data数据 gc奖励元宝 card 0未获得 1开,2心,3矿
            let arr = ["三元红包","炸药x1","药水x1","500元宝","8.88元红包","时钟x1","18.88元红包"]
            let data = res.data;
            this.showPop(arr[this.signDay-1],AWARD["DAY_"+this.signDay],data.gc,data.card)
        }).catch((res)=>{
            this.showTips("今日奖励已领取");
        });
    },
    // 点击体现按钮
    clickGetMoneyBtn(e) {
        // console.log("点击提现按钮");
        // this.showGetMoneyLayer();
    },
    // 点击转盘开始按钮
    clickTurnTableBtn(e) {
        // 每看一次视频可获得一次抽奖机会，每次抽奖冷却时间为5分钟 冷却时间让服务器做
        if(this.countDownTime>0){
            // 抽奖倒计时 >=0 代表可以抽奖，<0 取绝对值 倒数秒数
            // this.showTips("抽奖倒计时");
            return;
        }
        // 先像服务器发送请求获取物品id
        let sendData = {
            "ad": cc.zm.ad
        }
        // 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包
        let obj = {
            "1":60,
            "10":240,
            "11":180,
            "12":120,
            "31":360,
            "32":300
        }
        http.sendRequest("pit.v1.PitSvc/Lottery", "POST", sendData).then((res) => {
            // console.log("点击开始转盘", res);
            // todo test 当前转盘id是3
            this.endAngle = obj[""+res.data.award];
            // 开始旋转 初始速度为
            this.point = this.TurntableLayer.getChildByName("Pointer");
            this.beginTurn = true;
            this.point.angle = 360;
            this.speed = 18;
            this.value = 1;
            this.circle = 0;
            // this.turnData = res.data;
            this.scheduleOnce(()=>{
                let data = res.data;
                let award = {
                    "1":{name:"体力x1",index:AWARD.POWER},
                    "10":{name:"炸弹x1",index:AWARD.BOOM},
                    "11":{name:"时钟x1",index:AWARD.LOCK},
                    "12":{name:"石化手册x1",index:AWARD.SHOUCE},
                    "31":{name:"五元红包",index:AWARD.RED_5},
                    "32":{name:"十元红包",index:AWARD.RED_10}
                }
                let _award = award[data.award]
                this.showPop(_award.name,_award.index,data.gc,data.card)
            },4.5)
        });
    },
    createRandm(n, m) {
        m += 1;
        let a = m - n;
        let num = Math.random() * a + n;
        return parseInt(num);
    },
    update(dt) {
        if (this.beginTurn) {
            // 开始旋转
            this.point.angle -= this.speed;
            if (this.point.angle <= 0) {
                this.point.angle = 360;
                this.circle++;

                if (this.circle % 2 === 0) {
                    // 条件达成 表示转了两圈
                    this.speed -= this.value;
                    if (this.value === 4.5) {
                        this.value = 4.5;
                    } else {
                        this.value += 1.5;
                    }
                }
            }
            // console.log(this.speed);
            if (this.speed <= 5 && this.point.angle <= this.endAngle) {
                this.beginTurn = false;
                this.point.angle = this.endAngle;
            }
        }
    },
    // 增加显示弹出获得物品的弹窗
    // 奖品类型 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包
    showPop(goodName,goodNumber,gcNumber,textNumber){
        this.GetGoodLayer.active = true;
        let layout = this.GetGoodLayer.getChildByName("layout");
        let icon = this.GetGoodLayer.getChildByName("icon").getComponent(cc.Sprite);
        let text = this.GetGoodLayer.getChildByName("lbl").getComponent(cc.Label);
        text.string = `获得${goodName}`;
        icon.spriteFrame = this.AwardFrames[goodNumber];
        let layout1 = layout.getChildByName("layout_1");
        let layout2 = layout.getChildByName("layout_2");
        if(gcNumber){
            layout1.active = true;
            let lbl = layout1.getChildByName("lbl").getComponent(cc.Label);
            lbl.string = `获得元宝+${gcNumber}`
        }else{
            layout1.active = false;
        }
        if(textNumber){
            layout2.active = true;
            let icon = layout2.getChildByName("icon").getComponent(cc.Sprite);
            icon.spriteFrame = this.TextFrames[textNumber-1];
        }else{
            layout2.active = false;
        }
    },
    // 退出登陆
    ExitWxLogin(){
        // 清掉token
        cc.wxToken = null;
        cc.wxLoginResultcode = null;
        cc.sys.localStorage.removeItem("token");
        cc.director.loadScene("Login");
    },
    // 点击加载广告
    adPlay() {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadJiLiVideo", "()V");
    },
});
