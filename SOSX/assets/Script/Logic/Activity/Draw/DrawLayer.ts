/**
 * 
 */

import { proto } from "../../../Protocol/client_protocol";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import RedDotManager, { RedDotType } from "../../Common/ReddotManager";
import Role from "../../Common/Role";
import Func from "../../Utils/Func";
import { ShowTips } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import DrawBox, { DrawBoxData, DrawViewType } from "./DrawBox";
import DrawShow from "./DrawShow";
import DrawTips from "./DrawTips";

const { ccclass, property } = cc._decorator;

enum BOXSTATE {
    CLOSE = 0,
    ACTIVE = 1,
    OPEN = 2,
}

@ccclass
export default class DrawLayer extends PopLayer {
    @property(cc.Node)
    uiNode:cc.Node = null

    @property(cc.Label)
    private gachaHitLabel: cc.Label = null

    @property(cc.Label)
    private GachaCostCountOnce: cc.Label = null

    @property(cc.Label)
    private GachaCostCountTen: cc.Label = null

    @property(cc.Node)
    private getbox1: cc.Node = null

    @property(cc.Node)
    private getbox2: cc.Node = null

    @property(cc.Node)
    private gotbox1: cc.Node = null

    @property(cc.Node)
    private gotbox2: cc.Node = null

    @property(cc.Label)
    private box_number1: cc.Label = null

    @property(cc.Label)
    private box_number2: cc.Label = null

    @property(cc.Button)
    private btn_ten: cc.Button = null

    @property(cc.Button)
    private btn_once: cc.Button = null

    @property(cc.Button)
    private close_btn: cc.Button = null

    @property(cc.Button)
    private show_tips_btn: cc.Button = null;

    @property(cc.ProgressBar)
    private gacha_bar: cc.ProgressBar = null

    @property(cc.Node)
    private btn_box1: cc.Node = null;

    @property(cc.Node)
    private btn_box2: cc.Node = null;

    @property(cc.Prefab)
    private draw_show: cc.Prefab = null;

    @property(cc.Prefab)
    private draw_box: cc.Prefab = null;

    @property(cc.Prefab)
    private draw_tips: cc.Prefab = null;

    @property(cc.Node)
    private draw_show_node: cc.Node = null;

    @property(cc.Node)
    private draw_box_node: cc.Node = null;

    @property(cc.Node)
    private draw_tips_node: cc.Node = null;

    @property(sp.Skeleton)
    choukaSpine: sp.Skeleton = null
    @property(sp.Skeleton)
    effect: sp.Skeleton = null;

    private box1_state: BOXSTATE = BOXSTATE.CLOSE;
    private box2_state: BOXSTATE = BOXSTATE.CLOSE;
    private draw_time: number = 0.08;//每次发射间隔
    onLoad() {
        this.resetTimes();
        this.choukaSpine.node.active = false
        /* 注册事件 */
        this.btn_ten.node.on("click", this.gachaTen, this);
        this.btn_once.node.on("click", this.gachaOnce, this);
        this.show_tips_btn.node.on("click", this.showTips, this);
        this.close_btn.node.on("click", () => { this.setVisible(false); }, this);
        this.btn_box1.on(cc.Node.EventType.TOUCH_START, this.clickBox1, this);
        this.btn_box2.on(cc.Node.EventType.TOUCH_START, this.clickBox2, this);
        Net.listenProtocol(proto.Ptl.GachaRsp, function (buffer, ptl) {
            let msg = proto.Msg_GachaRsp.decode(buffer);
            cc.log("GachaRsp(抽卡) : msg " + JSON.stringify(msg))
            if (msg != null) {
                switch (msg.Result) {
                    case proto.Msg_GachaRsp.ErrorCode.Succeed:
                        Role.Instance.RoleData.gachaHitCount = msg.HitCount;
                        Role.Instance.RoleData.gachaOpenCount = msg.OpenCount;
                        this.refreshDynamicLayer();
                        this.choukaSpine.node.active = true
                        this.uiNode.active = false
                        Func.playSpine(this.choukaSpine.node, "idle", false, () => {
                            Func.playSpine(this.choukaSpine.node, "idle2", true)
                            let callback = () => {
                                this.choukaSpine.node.active = false
                            }
                            let playCb = ()=>{
                                this.uiNode.active = true
                            }
                            RedDotManager.getInstance().CheckRedDot(RedDotType.TenConsecutiveBox);
                            this.draw2(msg.awards, () => {
                                if (this.draw_show_node.children && this.draw_show_node.children[0]) {
                                    let draw_show = this.draw_show_node.children[0];
                                    let ts = draw_show.getComponent(DrawShow);
                                    ts.initData(msg.awards, callback,playCb);
                                } else {
                                    let draw_show = cc.instantiate(this.draw_show);
                                    this.draw_show_node.addChild(draw_show);
                                    let ts = draw_show.getComponent(DrawShow);
                                    ts.initData(msg.awards, callback,playCb);
                                }
                            })
                        })
                        break
                    case proto.Msg_GachaRsp.ErrorCode.DeamondNotEnough:
                        ShowTips("DiamondNotEnough");
                        break
                    case proto.Msg_GachaRsp.ErrorCode.TypeError:
                        console.log("类型错误");
                        break
                    default:
                        break
                }
            }
        }, this)

        Net.listenProtocol(proto.Ptl.GachaBoxRsp, function (buffer, ptl) {
            let msg = proto.Msg_GachaBoxRsp.decode(buffer);
            cc.log("GachaBoxRsp(抽卡) : msg " + JSON.stringify(msg))
            if (msg != null) {
                switch (msg.Result) {
                    case proto.Msg_GachaBoxRsp.ErrorCode.Succeed:
                        Role.Instance.RoleData.gachaOpenStatus = msg.Status;
                        Role.Instance.RoleData.gachaOpenCount = msg.OpenCount;
                        this.refreshDynamicLayer();
                        RedDotManager.getInstance().CheckRedDot(RedDotType.TenConsecutiveBox);
                        break
                    case proto.Msg_GachaBoxRsp.ErrorCode.AlreadyOpened:
                        console.log("开启过了")
                        break
                    case proto.Msg_GachaBoxRsp.ErrorCode.CountLack:
                        console.log("开启次数不够");
                        break
                    case proto.Msg_GachaBoxRsp.ErrorCode.TypeError:
                        console.log("未找到该类型宝箱");
                        break
                    case proto.Msg_GachaBoxRsp.ErrorCode.NotFound:
                        console.log("未找到指定ID卡牌");
                        break
                    default:
                        break
                }
            }
        }, this)
    }

    start() {
        this.initData(); /* 初始化数据 */
    }

    onDestroy() {
        console.log("十连抽主界面销毁"); /* 销毁节点 */
    }

    private initData() {
        this.refreshDynamicLayer();
        /* 数值DrawLayer的静态数据 */
        this.GachaCostCountOnce.string = String(tab.Data.GetKeyValue_ConfigTable().GachaCostCountOnce);
        this.GachaCostCountTen.string = String(tab.Data.GetKeyValue_ConfigTable().GachaCostCountTen);
    }

    /* 设置DrawLayer的动态数据 */
    private refreshDynamicLayer() {
        // 招募必定命中次数显示
        this.gachaHitLabel.string = String(Role.Instance.RoleData.gachaHitCount);
        this.reqGachaBoxInfo();
    }
    /* 写一个方法每天重置 */
    private resetTimes() {
        let date = new Date()
        let year = date.getFullYear();
        let mouth = date.getMonth();
        let day = date.getDate();
        let time = year + "-" + (mouth + 1) + "-" + day;
        if (!localStorage.getItem("gacha")) {
            localStorage.setItem("gacha", time + "|" + 0)
        } else {
            let local = localStorage.getItem("gacha");
            let _time = local.split("|")[0];
            if (_time != time) {
                localStorage.setItem("gacha", time + "|" + 0)
            }
        }
    }
    private userTimes(time: number) :boolean{
        let local = localStorage.getItem("gacha");
        let _time = local.split("|")[0];
        let _count = Number(local.split("|")[1]);
        let times = _count + time;
        localStorage.setItem("gacha", _time + "|" + times)
        if (times > 30) {
            return true;
        }
        return false;
    }
    private reqGachaBoxInfo() {
        this.getbox1.active = false;
        this.gotbox1.active = false;
        this.getbox2.active = false;
        this.gotbox2.active = false;
        if (Role.Instance.RoleData.gachaOpenCount >= tab.Data.GetKeyValue_ConfigTable().GachaBoxCount1) {
            // this.box1.string = (proto.GachaOpenType.Box1 & Role.Instance.RoleData.gachaOpenStatus) ? "已开启" : "激活";
            if (proto.GachaOpenType.Box1 & Role.Instance.RoleData.gachaOpenStatus) {
                this.gotbox1.active = true;
            } else {
                this.getbox1.active = true;
            }
            this.box1_state = (proto.GachaOpenType.Box1 & Role.Instance.RoleData.gachaOpenStatus) ? BOXSTATE.OPEN : BOXSTATE.ACTIVE
        } else {
            // this.box1.string = "未激活";
            this.box1_state = BOXSTATE.CLOSE
        }

        if (Role.Instance.RoleData.gachaOpenCount >= tab.Data.GetKeyValue_ConfigTable().GachaBoxCount2) {
            // this.box2.string = (proto.GachaOpenType.Box2 & Role.Instance.RoleData.gachaOpenStatus) ? "已开启" : "激活";
            if (proto.GachaOpenType.Box2 & Role.Instance.RoleData.gachaOpenStatus) {
                this.gotbox2.active = true;
            } else {
                this.getbox2.active = true;
            }
            this.box2_state = (proto.GachaOpenType.Box2 & Role.Instance.RoleData.gachaOpenStatus) ? BOXSTATE.OPEN : BOXSTATE.ACTIVE
        } else {
            // this.box2.string = "未激活";
            this.box2_state = BOXSTATE.CLOSE
        }
        this.box_number1.string = `${Role.Instance.RoleData.gachaOpenCount}/${tab.Data.GetKeyValue_ConfigTable().GachaBoxCount1}`;
        this.box_number2.string = `${Role.Instance.RoleData.gachaOpenCount}/${tab.Data.GetKeyValue_ConfigTable().GachaBoxCount2}`;
        this.gacha_bar.progress = (Role.Instance.RoleData.gachaOpenCount) / (tab.Data.GetKeyValue_ConfigTable().GachaBoxCount2);
    }

    /* 十连抽 */
    private gachaTen() {
        let gacha:boolean = this.userTimes(10)
        if(gacha){
            ShowTips("choujiangxianzhi");
            return;
        }
        this.sendGacha(proto.Msg_GachaReq.GachaType.Ten)
    }

    /* 单抽 */
    private gachaOnce() {
        let gacha:boolean = this.userTimes(1)
        if(gacha){
            ShowTips("choujiangxianzhi")
            return;
        }
        this.sendGacha(proto.Msg_GachaReq.GachaType.One)
    }

    sendGacha(type: proto.Msg_GachaReq.GachaType) {
        if (this.choukaSpine.node.active) {
            return
        }
        var taragetDiamond = tab.Data.GetKeyValue_ConfigTable().GachaCostCountOnce
        if (type == proto.Msg_GachaReq.GachaType.Ten) {
            taragetDiamond = tab.Data.GetKeyValue_ConfigTable().GachaCostCountTen
        }
        if (!Role.Instance.checkDiamond(taragetDiamond)) {
            ShowTips("DiamondNotEnough");
            return
        }

        let param = new proto.Msg_GachaReq();
        param.Type = type;
        Net.Send(proto.Ptl.GachaReq, param);
    }

    /* 点击第一个箱子 */
    private clickBox1() {
        if (this.box1_state === BOXSTATE.ACTIVE || this.box1_state === BOXSTATE.CLOSE) {
            /* 可以开启 */
            let box_show = cc.instantiate(this.draw_box);
            this.draw_box_node.addChild(box_show);
            let ts = box_show.getComponent(DrawBox);
            let dd = new DrawBoxData()
            dd.viewType = DrawViewType.draw
            dd.boxId = 11
            dd.boxType = proto.GachaOpenType.Box1
            dd.boxState = this.box1_state
            ts.initData(dd);
        }
    }

    /* 点击第二个箱子 */
    private clickBox2() {
        if (this.box2_state === BOXSTATE.ACTIVE || this.box2_state === BOXSTATE.CLOSE) {
            /* 可以开启 */
            let box_show = cc.instantiate(this.draw_box);
            this.draw_box_node.addChild(box_show);
            let ts = box_show.getComponent(DrawBox);

            let dd = new DrawBoxData()
            dd.viewType = DrawViewType.draw
            dd.boxId = 12
            dd.boxType = proto.GachaOpenType.Box2
            dd.boxState = this.box2_state

            ts.initData(dd);
        }
    }

    private showTips() {
        let draw_tips = cc.instantiate(this.draw_tips);
        this.draw_tips_node.addChild(draw_tips);
        let ts = draw_tips.getComponent(DrawTips);
        ts.initData();
    }


    playChoukaSpine() {
        Func.playSpine(this.choukaSpine.node, "idle", false, () => {

        })
    }
    draw2(award: proto.IRewardSimpleInfo[], cb: Function,playCb:Function) {
        let radmonArr = [];
        let len = award.length;
        if (len > 1) {
            radmonArr = [{ x: -200, y: -145 }, { x: -100, y: -185 }, { x: 0, y: -225 }, { x: 100, y: -185 }, { x: 200, y: -145 }];
        } else {
            radmonArr = [{ x: 0, y: -225 }];
        }
        let animNameArr = ["bai", "lan", "zi", "jin"];
        let effect = this.effect.node;
        let index = 0;
        this.schedule(() => {
            let rdm = Math.floor(Math.random() * radmonArr.length);
            let ect: cc.Node = cc.instantiate(effect);
            let effectAnim = ect.getComponent(sp.Skeleton);
            ect.setPosition(radmonArr[rdm].x, radmonArr[rdm].y);
            this.node.addChild(ect);
            ect.active = true;
            let info = award[index];
            let itemData: tab.ItemTable = tab.Data.ItemTableByID.getValue(info.rewardId);
            let animName = "fei" + animNameArr[itemData.Quality];
            effectAnim.setAnimation(0, animName, false);
            index++;
            radmonArr.splice(rdm, 1);
            if (radmonArr.length === 0) {
                radmonArr = [{ x: -200, y: -145 }, { x: -100, y: -185 }, { x: 0, y: -225 }, { x: 100, y: -185 }, { x: 200, y: -145 }];
            }
            // 监听最后一个动画飞天结束
            if (index === len) {
                effectAnim.setCompleteListener((listener) => {
                    if (effectAnim && effectAnim.node && cc.isValid(effectAnim) && cc.isValid(effectAnim.node)) {
                        effectAnim.node.destroy();
                    }
                    if (cb) cb();
                })
            } else {
                effectAnim.setCompleteListener((listener) => {
                    if (effectAnim && effectAnim.node && cc.isValid(effectAnim) && cc.isValid(effectAnim.node)) {
                        effectAnim.node.destroy();
                    }
                })
            }
        }, this.draw_time, len - 1);
    }
}
