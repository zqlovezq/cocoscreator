/*
 *  公告弹框界面
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { k255, kFourNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";
import SdkManager from "../Utils/SdkManager";
import ManagerNotice, { NoticeRedType, ToggleType } from "./ManagerNotice";
import NoticeContentPfb from "./NoticeContentPfb";
import { INoticeData } from "./NoticeData";
import NoticeImgPfb from "./NoticeImgPfb";

const { ccclass, property } = cc._decorator;
const HTTP = "http";

@ccclass
export default class NoticePopLayer extends PopLayer {

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Toggle)
    toggle_left: cc.Toggle = null;

    @property(cc.Label)
    lbl_left_notice_light: cc.Label = null;

    @property(cc.Label)
    lbl_left_notice_dark: cc.Label = null;

    @property(cc.Toggle)
    toggle_middle: cc.Toggle = null;

    @property(cc.Label)
    lbl_middle_notice_light: cc.Label = null;

    @property(cc.Label)
    lbl_middle_notice_dark: cc.Label = null;

    @property(cc.Toggle)
    toggle_right: cc.Toggle = null;

    @property(cc.Label)
    lbl_right_notice_light: cc.Label = null;

    @property(cc.Label)
    lbl_right_notice_dark: cc.Label = null;

    @property(cc.Node)
    node_left_red: cc.Node = null;

    @property(cc.Node)
    node_middle_red: cc.Node = null;

    @property(cc.Node)
    node_right_red: cc.Node = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_auto_pop: cc.Button = null;

    @property(cc.Sprite)
    spr_unselect: cc.Sprite = null;

    @property(cc.Sprite)
    spr_select: cc.Sprite = null;

    @property(cc.Node)
    left_notice_content_layout: cc.Node = null;

    @property(cc.Node)
    middle_notice_content_layout: cc.Node = null;

    @property(cc.Node)
    right_notice_content_layout: cc.Node = null;

    @property(cc.Prefab)
    pfb_notice_img: cc.Prefab = null;

    @property(cc.Prefab)
    pfb_notice_content: cc.Prefab = null;

    private _toggle_type: ToggleType;
    private _left_notice: INoticeData;
    private _middle_notice: INoticeData;
    private _right_notice: INoticeData;
    private _bAutoPop: boolean = true;

    onLoad() {
        this.initEvent();
        this.initDefaultData();

        //监听公告准备消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyBeReadyNotice, (param: any) => {
            this.loadNoticeData();
            this.refreshPage();
        }, this);
    }

    start() {
        //this.setAutoPopFlag();
        ManagerNotice.getInstance().setNotFirstLogin();
        ManagerNotice.getInstance().getNoticeVer2URL();
        ManagerNotice.getInstance().saveAutoPopFlag(false);
    }

    /* 初始化各类事件 */
    private initEvent() {
        this.btn_closed.node.on("click", () => { this.setVisible(false); }, this);
        this.btn_confirm.node.on("click", () => { this.setVisible(false); }, this);
        //this.btn_auto_pop.node.on("click", this.onClickNotAutoPop,        this);
        this.btn_auto_pop.node.active = false;
        this.toggle_left.node.on("toggle", this.onToggleLeft, this);
        this.toggle_middle.node.on("toggle", this.onToggleMiddle, this);
        this.toggle_right.node.on("toggle", this.onToggleRight, this);
    }

    /* 初始化各类默认数据 */
    private initDefaultData() {
        this.node_left_red.active = false;
        this.node_middle_red.active = false;
        this.node_right_red.active = false;

        this._toggle_type = ToggleType.ToggleType_Middle;
        //this._bAutoPop    = ManagerNotice.getInstance().getAutoPopFlag();
        this.switchToggleType()
    }

    /* 加载公告数据 */
    private loadNoticeData() {
        let notices = ManagerNotice.getInstance().getNoticeData();
        if (notices) {
            this._left_notice = notices.LeftNotice || { title: "", content: [], timestamp: 0 };
            this._middle_notice = notices.MiddleNotice;
            this._right_notice = notices.RightNotice || { title: "", content: [], timestamp: 0 };

            // if (SdkManager.Instance.IsReview()) {
            //     this._middle_notice = notices.MiddleNotice;
            //     this._middle_notice.content = [
            //         /* zhibo+@20230414 for <记得这里要改> */
            //         "<size=24><color=#f7efef><outline color=blank width=2>尊敬的指挥官：<br/></outline color=blank width=2></color=#f7efef></size=24>",
            //         "<size=24><color=#f7efef><outline color=blank width=2>欢迎进入游戏，让我们联手对抗邪恶生物吧！<br/></outline color=blank width=2></color=#f7efef></size=24>"
            //     ];
            //     this._left_notice.content = [];
            //     this._right_notice.content = [];
            // }
        }
    }

    /* 刷新界面 */
    private refreshPage() {
        this.setLeftRedDotVisible();
        this.createLeftNotice();
        this.createMiddleNotice();
        this.createRightNotice();
        this.switchToggleType();
    }

    /* 设置左公告的红点可见性 */
    private setLeftRedDotVisible() {
        if (SdkManager.Instance.IsReview()) {
            this.node_left_red.active = false;
            return;
        }
        this.node_left_red.active = ManagerNotice.getInstance().getRedDotVisible();
    }

    /* 创建左公告 */
    private createLeftNotice() {
        if (this._left_notice) {
            this.lbl_left_notice_light.string = this._left_notice.title;
            this.lbl_left_notice_dark.string = this._left_notice.title;
            this.createContentPfbPerFrame(this._left_notice.content, this.left_notice_content_layout);
        }
    }

    /* 创建中间公告 */
    private createMiddleNotice() {
        if (this._middle_notice) {
            this.lbl_middle_notice_light.string = this._middle_notice.title;
            this.lbl_middle_notice_dark.string = this._middle_notice.title;
            this.createContentPfbPerFrame(this._middle_notice.content, this.middle_notice_content_layout);
        }
    }

    /* 创建右公告 */
    private createRightNotice() {
        if (this._right_notice) {
            this.lbl_right_notice_light.string = this._right_notice.title;
            this.lbl_right_notice_dark.string = this._right_notice.title;
            this.createContentPfbPerFrame(this._right_notice.content, this.right_notice_content_layout);
        }
    }

    /* 分帧创建内容pfb
     * @param dataList            数据列表
     * @param parentNode          父节点
     * @param bVisibleBottomLine  是否显示底部分割线
     */
    private async createContentPfbPerFrame(dataList: string[],
        parentNode: cc.Node,
        bVisibleBottomLine: boolean = false) {
        await this.execute(this.noticeContentGenerator(dataList, parentNode, bVisibleBottomLine), kOneNumber);
    }

    /* 公告内容生成器
     * @param dataList            数据列表
     * @param parentNode          父节点
     * @param bVisibleBottomLine  是否显示底部分割线
     */
    private * noticeContentGenerator(dataList: string[],
        parentNode: cc.Node,
        bVisibleBottomLine: boolean = false) {
        for (let data of dataList) {
            if (this.checkContentIsLoadPath(data)) {
                yield this.createNoticeImgPfb(data, parentNode);
            } else {
                yield this.createNoticeContentPfb(data, parentNode, bVisibleBottomLine);
            }
        }
    }

    /* 分帧执行函数
     * @param generator  生成器
     * @param duration   持续时间
     */
    private execute(generator: Generator, duration: number) {
        return new Promise<void>(resolve => {
            let gen = generator;
            // 创建执行函数
            let func = () => {
                // 执行之前，先记录开始时间戳
                let startTime = new Date().getTime();
                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {
                    // 判断是否已经执行完所有 Generator 的小代码段
                    // 如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve();
                        return;
                    }

                    // 每执行完一段小代码段，都检查一下是否
                    // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
                    if (new Date().getTime() - startTime > duration) {
                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        this.scheduleOnce(() => {
                            func();
                        });
                        return;
                    }
                }
            };

            func(); // 运行执行函数
        });
    }

    /* 创建公告图片pfb
     * @param content    内容
     * @param parentNode 父节点
     */
    private createNoticeImgPfb(content: string, parentNode: cc.Node) {
        let cell = cc.instantiate(this.pfb_notice_img).getComponent(NoticeImgPfb);
        if (cell) {
            cell.initData(content);
            parentNode.addChild(cell.node);
        }
    }

    /* 创建公告文本pfb
     * @param content             内容
     * @param parentNode          父节点
     * @param bVisibleBottomLine  是否显示底部分割线
     */
    private createNoticeContentPfb(content: string, parentNode: cc.Node, bVisibleBottomLine: boolean = false) {
        let cell = cc.instantiate(this.pfb_notice_content).getComponent(NoticeContentPfb);
        if (cell) {
            cell.initData(content, bVisibleBottomLine);
            parentNode.addChild(cell.node);
        }
    }

    /* 检测内容是不是图片
     */
    private checkContentIsLoadPath(str: string) {
        let prefixStr = str.substr(kZeroNumber, kFourNumber);
        return prefixStr === HTTP;
    }

    /* 设置自动弹出标志
     */
    private setAutoPopFlag() {
        this.spr_select.node.opacity = this._bAutoPop ? kZeroNumber : k255;
        //this.spr_unselect.node.opacity = this._bAutoPop ? k255 : kZeroNumber;
    }

    /* 切换Toggle类型
     */
    private switchToggleType() {
        this.toggle_left.isChecked = (ToggleType.ToggleType_Left === this._toggle_type);
        this.toggle_middle.isChecked = (ToggleType.ToggleType_Middle === this._toggle_type);
        this.toggle_right.isChecked = (ToggleType.ToggleType_Right === this._toggle_type);
        this.left_notice_content_layout.active = (ToggleType.ToggleType_Left === this._toggle_type);
        this.middle_notice_content_layout.active = (ToggleType.ToggleType_Middle === this._toggle_type);
        this.right_notice_content_layout.active = (ToggleType.ToggleType_Right === this._toggle_type);
        this.setTopTitle();
    }

    /* 设置顶端标题
     */
    private setTopTitle() {
        this.toggle_left.isChecked && (this.lbl_title.string = this.lbl_left_notice_light.string);
        this.toggle_middle.isChecked && (this.lbl_title.string = this.lbl_middle_notice_light.string);
        this.toggle_right.isChecked && (this.lbl_title.string = this.lbl_right_notice_light.string);
    }

    /*  */
    private onToggleLeft(node: cc.Toggle) {
        if (ToggleType.ToggleType_Left === this._toggle_type) { return; }

        this._toggle_type = ToggleType.ToggleType_Left;

        if (this.node_left_red.active) {
            this.node_left_red.active = false;
            ManagerNotice.getInstance().saveRedDot2Local(NoticeRedType.NotVisible);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCheckNoticeRedTip);
        }

        this.switchToggleType();
    }

    /*  */
    private onToggleMiddle(node: cc.Toggle) {
        if (ToggleType.ToggleType_Middle === this._toggle_type) { return; }

        this._toggle_type = ToggleType.ToggleType_Middle;
        this.switchToggleType();
    }

    /*  */
    private onToggleRight(node: cc.Toggle) {
        if (ToggleType.ToggleType_Right === this._toggle_type) { return; }

        this._toggle_type = ToggleType.ToggleType_Right;
        this.switchToggleType();
    }

    /*
    private onClickNotAutoPop(){
        this._bAutoPop = !this._bAutoPop;
        this.setAutoPopFlag();
        ManagerNotice.getInstance().saveAutoPopFlag(this._bAutoPop);
    }
    */
}
