/*
 *  春节签到主界面
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { checkRewardIsEmotionOrBattleMap, k255, kFourNumber, kOneNumber, kTwoNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../../Common/CommonInterface";
import { getCutDownTimesString } from "../../Common/SeasonRankCommonFunc";
import { getServerUtcTime, popRewardLayer_Vec_Recycle, setTextTime_3, setTimeTXT, ShowTips } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import { ManagerSpringFestivalData } from "./ManagerSpringFestivalData";
import SpringFestivalRewardGroup from "./SpringFestivalRewardGroup";

const {ccclass, property} = cc._decorator;

const kInfoGroup = 4;
const kBound8 = 8;
const kBound12 = 12;
const kBound13 = 13;
const kBound14 = 14;

enum  ArrowDir{
    UP = 0,
    DOWN = 1,
    BOTH = 2,
}

@ccclass
export default class SpringFestivalPage extends PopLayer {

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;
    
    @property(cc.ScrollView)
    scroll_view: cc.ScrollView = null;
    
    @property(cc.Node)
    node_content: cc.Node = null;

    @property(cc.Label)
    lbl_cutdown_time: cc.Label = null;

    @property(cc.Button)
    btn_signin: cc.Button = null;

    @property(cc.Button)
    btn_signin_single: cc.Button = null;

    @property(cc.Button)
    btn_double: cc.Button = null;

    @property(cc.Node)
    node_already_signin: cc.Node = null;

    @property(cc.Prefab)
    pfb_signIn_group:cc.Prefab = null;

    @property(cc.Sprite)
    spr_up_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_down_arrow: cc.Sprite = null;

    private _select_day: number;
    private _visible_len: number;
    private _create_day_number: number;
    private _group_node_height: number;
    private _current_offset_y: number;

    onLoad () {
        this._create_day_number = kZeroNumber;
        this._select_day        = ManagerSpringFestivalData.getInstance().getCurrLoginDay();
        this._initNodeVisible();
        this._initBindEvent();

        //监听领取奖励消息
        Net.listenProtocol(proto.Ptl.ReceiveSpringFestivalRewardRsp, (buffer, ptl) =>{
            let msg = proto.Msg_ReceiveSpringFestivalRewardRsp.decode(buffer);
            cc.log("ReceiveSpringFestivalRewardRsp(领取春节签到活动的某天奖励) : msg " + JSON.stringify(msg))
            if(msg != null && proto.Msg_ReceiveSpringFestivalRewardRsp.ErrorCode.Succeed === msg.result){
                ManagerSpringFestivalData.getInstance().modifyInfoData(msg.day);
                ManagerSpringFestivalData.getInstance().setCurrDayReceived(msg.day, false);
                this.setSelectDayBottomBtnState();
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckSpringFestivalSignInIsOver);
                this.updateArrowVisible();
                popRewardLayer_Vec_Recycle(msg.rewardList, null);    
                checkRewardIsEmotionOrBattleMap(msg.rewardList[kZeroNumber].awards[kZeroNumber].rewardId, msg.rewardList[kZeroNumber].awards[kZeroNumber].rewardType);
                return;
            }

            proto.Msg_ReceiveSpringFestivalRewardRsp.ErrorCode.ActivityOver === msg.result       && ShowTips("ActivityOver");
            proto.Msg_ReceiveSpringFestivalRewardRsp.ErrorCode.AlreadyReceived === msg.result    && ShowTips("MailRewardReceived");
            proto.Msg_ReceiveSpringFestivalRewardRsp.ErrorCode.UnReachReceiveCond === msg.result && ShowTips("UnReachReceivedCond");

        }, this);

        //监听跨天刷新消息
        /*
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshSpringFestivalPage, (param)=>{
            if(!this.node.active || !this.node.activeInHierarchy){
                return;
            }
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyDefaultSelectDay);
        }, this);
        */

        //监听刷新选中框
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshSelectFrame, (param: any)=>{
            this._select_day = (param as number);
            this.setSelectDayBottomBtnState();
        }, this);
    }

    start () {
        this.setCutDownTime();
        this.calcVisibleDataLen();
    }
    
    /* 初始化节点可见性
     */
    private _initNodeVisible(){
        this.btn_double.node.active        = false;
        this.btn_signin.node.active        = false;
        this.btn_signin_single.node.active = false;
        this.node_already_signin.active    = false;
        this.spr_up_arrow.node.opacity     = kZeroNumber;
        this.spr_down_arrow.node.opacity   = kZeroNumber;
    }

    /* 初始化绑定事件
     */
    private _initBindEvent(){
        this.btn_signin.node.on("click", this.onClickReceive,        this);
        this.btn_signin_single.node.on("click", this.onClickReceive, this);
        this.btn_double.node.on("click", this.onClickDoubleReceive,  this);

        this.spr_bg.node.on(cc.Node.EventType.TOUCH_END, ()=>{
            this.notifyClosedTips();
        }, this);

        this.scroll_view.node.on("scroll-began", ()=>{
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        }, this);

        this.scroll_view.node.on("scroll-ended", ()=>{
            let offset  = this.scroll_view.getScrollOffset();
            this._current_offset_y = Math.abs(offset.y);
            this.updateArrowVisible();
        }, this);
    }
    
    /* 设置活动倒计时
     */
    private setCutDownTime(){
        let leftTimes = ManagerSpringFestivalData.getInstance().getOverTime() - getServerUtcTime();
        if(leftTimes <= kZeroNumber){
            this.lbl_cutdown_time.string = tab.Data.TipsTableByKey.getValue("ActivityOver").Value;
            return;
        }

        let day = Math.floor(leftTimes / 86400);
        if(day > kZeroNumber){
            setTimeTXT(this.lbl_cutdown_time, leftTimes);
            //this.lbl_cutdown_time.string = getCutDownTimesString(leftTimes);
            return;
        }

        this.unschedule(this.refreshCutDownTime);
        this.schedule(this.refreshCutDownTime, kOneNumber);
    }

    /* 刷新活动倒计时
     */
    private refreshCutDownTime(){
        let leftTimes = ManagerSpringFestivalData.getInstance().getOverTime() - getServerUtcTime();
        if(leftTimes <= kZeroNumber){
            this.lbl_cutdown_time.string = tab.Data.TipsTableByKey.getValue("ActivityOver").Value;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckSpringFestivalSignInIsOver);
            this.unschedule(this.refreshCutDownTime);
            return;
        }

        setTextTime_3(this.lbl_cutdown_time, leftTimes);
        //this.lbl_cutdown_time.string = getCutDownTimesString(leftTimes);
    }

    /* 设置选中某天时的底部按钮状态
     */
    private setSelectDayBottomBtnState(){
        let infoData    = ManagerSpringFestivalData.getInstance().getSignInInfo();
        let infoDataLen = infoData.length;
        let idx         = this._select_day - kOneNumber;
        if(idx < infoDataLen){
            let bReceived  = infoData[idx].bReceived;
            let bCanDouble = infoData[idx].bDoubleReward;
            this.btn_signin.node.active        = !bReceived && bCanDouble;
            this.btn_double.node.active        = this.btn_signin.node.active;
            this.btn_signin_single.node.active = !bReceived && !bCanDouble;
            this.node_already_signin.active    = bReceived;
        }
    }

    /* 设置默认选中的哪天
     */
    private setDefaultSelectedDay(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyDefaultSelectDay);

        if(this._select_day <= kBound8){
            this.scroll_view.scrollToTop();
            return;
        }

        if(this._select_day > kBound8 && this._select_day <= kBound12){
            let offsetY = this._group_node_height * kTwoNumber;
            this.scroll_view.scrollToOffset(cc.v2(kZeroNumber, offsetY));
            this.setArrowVisible([kZeroNumber, kFourNumber], ArrowDir.UP);
            return;
        }

        this.scroll_view.scrollToBottomRight();
        this.setArrowVisible([kZeroNumber, kBound8], ArrowDir.UP);
    }

    /* 更新箭头的可见性
     */
    private updateArrowVisible(){
        if(this._current_offset_y < this._group_node_height){
            if(this._visible_len * kInfoGroup < kBound12){
                this.spr_down_arrow.node.opacity = kZeroNumber;
                this.spr_up_arrow.node.opacity   = kZeroNumber;
                return;
            }

            this.setArrowVisible([kBound8, kBound12], ArrowDir.DOWN);
            return;
        }

        if(this._current_offset_y > this._group_node_height && this._current_offset_y < this._group_node_height * kTwoNumber){
            if(this._visible_len * kInfoGroup < kBound13){
                this.setArrowVisible([kZeroNumber, kFourNumber], ArrowDir.UP);
                return;
            }

            this.setArrowVisible([kZeroNumber, kFourNumber, kBound13, kBound14], ArrowDir.BOTH);
            return;
        }

        if(this._current_offset_y >= this._group_node_height * kTwoNumber){
            this.setArrowVisible([kZeroNumber, kBound8], ArrowDir.UP);
        }
    }

    /* 设置箭头的可见性
     */
    private setArrowVisible(range: number[], dir: ArrowDir){
        let bHave    = false;
        let pos      = kZeroNumber;
        let rangeLen = range.length;
        
        if(rangeLen == kZeroNumber){
            return;
        }

        if((rangeLen % kTwoNumber) != kZeroNumber){
            cc.error("范围数组不是偶数，检测传参！！！");
            return;
        }
        
        while(pos < rangeLen){
            bHave ||= ManagerSpringFestivalData.getInstance().checkRangeHaveNonReceive(range[pos], range[pos + kOneNumber]);
            pos += kTwoNumber;
        }
        
        this.spr_up_arrow.node.opacity   = (ArrowDir.UP == dir   || ArrowDir.BOTH == dir) && bHave ? k255 : kZeroNumber;
        this.spr_down_arrow.node.opacity = (ArrowDir.DOWN == dir || ArrowDir.BOTH == dir) && bHave ? k255 : kZeroNumber;
    }
    
    /* 计算要显示的数据长度
     */
    private calcVisibleDataLen(){
        const k8 = 8;
        let curLoginDay   = ManagerSpringFestivalData.getInstance().getCurrLoginDay();
        this._visible_len = kTwoNumber;
        if(curLoginDay > k8){
            this._visible_len += ((curLoginDay ^ k8) <= kFourNumber) ? kOneNumber : kTwoNumber;
        }

        this.groupVisibleInfo();
    }

    /* 组织可见数据信息
     */
    private groupVisibleInfo(){
        let visibleInfos = [];
        let totalInfos = ManagerSpringFestivalData.getInstance().getSignInInfo();
        let totalLen = this._visible_len * kFourNumber;
        totalLen > totalInfos.length && (totalLen = totalInfos.length);
        /*for(let idx = kZeroNumber; idx < totalLen; idx++){
            visibleInfos.push(totalInfos[idx]);
        }
        this.loadVisibleInfo(visibleInfos);*/
        this.loadVisibleInfo(totalInfos);
    }

    /* 加载可见数据信息
     */
    private async loadVisibleInfo(infos: proto.ISpringFestivalInfoData[]){
        // if(infos.length == kZeroNumber){
        //     this.node_content.childrenCount > kZeroNumber && this.node_content.removeAllChildren();
        //     return;
        // }
        await this.execute(this.generatorInfoGroup(infos), kOneNumber);
        this.setDefaultSelectedDay();
    }
    
    private* generatorInfoGroup(emotionList: proto.ISpringFestivalInfoData[]){
        let tempInfoArr = [];
        let idx = kZeroNumber;
        for(let data of emotionList){
            tempInfoArr.push(data);
            if(kInfoGroup == tempInfoArr.length){
                yield this.createInfoNode(tempInfoArr, idx);
                tempInfoArr = [];
                idx++;
            }
        }
        //检测剩余部分
        tempInfoArr.length > kZeroNumber && this.createInfoNode(tempInfoArr, idx);
    }

    /* 创建可见数据信息节点 */
    private createInfoNode(infos: proto.ISpringFestivalInfoData[], idx: number){
        if(infos.length > kZeroNumber){
            let signInGroup = cc.instantiate(this.pfb_signIn_group).getComponent(SpringFestivalRewardGroup);
            this.node_content.addChild(signInGroup.node);
            signInGroup.initData(infos, idx);
            this._create_day_number += infos.length;
            this._group_node_height = signInGroup.node.getContentSize().height;
        }
    }
    
    /* 创建签到奖励组节点的执行函数 */
    private execute(generator: Generator, duration: number){
        return new Promise<void>(resolve => {
            let gen = generator;
            // 创建执行函数
            let func = () => {
                let startTime = new Date().getTime(); // 执行之前，先记录开始时间戳
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
    
    /* 通知关闭tips
     */
    private notifyClosedTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }
    
    /* 发送领取奖励消息
     */
    private sendReceiveReward(bDouble: boolean){
        let param           = new proto.Msg_ReceiveSpringFestivalRewardReq();
        param.bDoubleReward = bDouble;
        param.day           = this._select_day;
        Net.Send(proto.Ptl.ReceiveSpringFestivalRewardReq, param);
        this.notifyClosedTips();
    }

    private onClickReceive(){
        this.sendReceiveReward(false);
    }

    private onClickDoubleReceive(){
        let self = this;
        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_SpringFestivalSignIn, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_SpringFestivalSignIn, kOneNumber);
                self.sendReceiveReward(true);
            }
        },tab.AdvertPosType.AdvertPosType_SpringFestivalSignIn);
    }
}
