/*
 * @Descripttion: 表情仓库Layer
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { ShowTips } from "../Utils/GameUtils";
import EmotionFrame, { EmotionNodeState } from "./EmotionFrame";
import EmotionFrameGroup from "./EmotionFrameGroup";

const kEmotionGroup = 4;
const kFirstPageMaxCount = 8;
const {ccclass, property} = cc._decorator;

@ccclass
export default class EmotionStoreLayer extends cc.Component {

    @property(cc.Node)
    layout_own_area: cc.Node = null;

    @property(cc.Node)
    layout_unown_area: cc.Node = null;

    @property(cc.Label)
    lbl_own_num: cc.Label = null;

    @property(cc.Label)
    lbl_all_put_in: cc.Label = null;
    
    @property(cc.Node)
    node_own: cc.Node = null;

    @property(cc.Node)
    node_unown: cc.Node = null;

    @property(cc.Node)
    node_emotion_1: cc.Node = null;

    @property(cc.Node)
    node_emotion_2: cc.Node = null;

    @property(cc.Node)
    node_emotion_3: cc.Node = null;

    @property(cc.Node)
    node_emotion_4: cc.Node = null;

    @property(cc.Node)
    node_emotion_5: cc.Node = null;

    @property(cc.Node)
    node_emotion_6: cc.Node = null;

    @property(cc.Node)
    node_emotion_7: cc.Node = null;

    @property(cc.Node)
    node_emotion_8: cc.Node = null;

    @property(cc.ScrollView)
    scroll_view: cc.ScrollView = null;
    
    @property(cc.Prefab)
    pfb_emotion_group:cc.Prefab = null;

    @property(cc.Prefab)
    pfb_select_emotion:cc.Prefab = null;

    private _first_emotion_list: EmotionFrame[] = [];
    private _own_emotion_list: number[]         = [];
    private _unown_emotion_list: number[]       = [];
    private _emotion_idx: number                = kZeroNumber;
    private _own_emotion_node_map: tab.Dictionary<number, EmotionFrameGroup>;
    private _unown_emotion_node_map: tab.Dictionary<number, EmotionFrameGroup>;

    onLoad () {
        this.initFirstPageList();
        this.initVar();

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);

         //监听切换阵表情消息
         Net.listenProtocol(proto.Ptl.SwitchEmotionRsp, (buffer, ptl)=>{
            let msg = proto.Msg_SwitchEmotionRsp.decode(buffer);
            cc.log("SwitchEmotionRsp (换表情) msg: " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_SwitchEmotionRsp.ErrorCode.Succeed){
                let ownEmotionList    = Role.Instance.RoleData.emotions;
                let ownEmotionListLen = ownEmotionList.length;
                let originalId        = msg.originalIdx < ownEmotionListLen ? ownEmotionList[msg.originalIdx] : kNegativeOneNumber;
                let replaceId         = msg.replaceIdx  < ownEmotionListLen ? ownEmotionList[msg.replaceIdx]  : kNegativeOneNumber;

                if(originalId != kNegativeOneNumber){
                    ownEmotionList[msg.originalIdx] = replaceId;
                }

                if(replaceId != kNegativeOneNumber){
                    ownEmotionList[msg.replaceIdx] = originalId;
                }

                this.refreshEmotionLayout();
                return;
            }

            proto.Msg_SwitchEmotionRsp.ErrorCode.NonEmotion === msg.result     && ShowTips("NonEmotion");
            proto.Msg_SwitchEmotionRsp.ErrorCode.AlreadyReplace === msg.result && ShowTips("AlreadyReplaceEmotion");            
        }, this);

        //监听购买表情消息
        Net.listenProtocol(proto.Ptl.BuyEmotionRsp, function (buffer, ptl){
           let msg = proto.Msg_BuyEmotionRsp.decode(buffer)
           cc.log("EmotionStoreLayer.ts : BuyEmotionRsp(购买表情) msg: " + JSON.stringify(msg));
           if (msg && proto.Msg_BuyEmotionRsp.ErrorCode.Succeed === msg.result){
                this.initData();
           }
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshEmotionStore, (param: any)=>{
            //if(!this.node.active || !this.node.activeInHierarchy){return;}
            this.refreshEmotionLayout();
        }, this);
    }

    start () {

    }

    onDestroy(){
        this._first_emotion_list   = [];
        this._own_emotion_list     = [];
        this._unown_emotion_list   = [];
        this.clearEmotionGroups(this._own_emotion_node_map);
        this.clearEmotionGroups(this._unown_emotion_node_map);
    }

    /* 初始化首页表情列表
     */
    private initFirstPageList(){
        this._first_emotion_list.push(this.node_emotion_1.getComponent(EmotionFrame));
        this._first_emotion_list.push(this.node_emotion_2.getComponent(EmotionFrame));
        this._first_emotion_list.push(this.node_emotion_3.getComponent(EmotionFrame));
        this._first_emotion_list.push(this.node_emotion_4.getComponent(EmotionFrame));
        this._first_emotion_list.push(this.node_emotion_5.getComponent(EmotionFrame));
        this._first_emotion_list.push(this.node_emotion_6.getComponent(EmotionFrame));
        this._first_emotion_list.push(this.node_emotion_7.getComponent(EmotionFrame));
        this._first_emotion_list.push(this.node_emotion_8.getComponent(EmotionFrame));
    }

    private initVar(){
        this. _own_emotion_node_map = new tab.Dictionary<number, EmotionFrameGroup>();
        this._unown_emotion_node_map = new tab.Dictionary<number, EmotionFrameGroup>();
    }

    /* 清空表情组
     */
    private clearEmotionGroups(emotionMap: tab.Dictionary<number, EmotionFrameGroup>){
        if(emotionMap !== undefined){
            for(let elem of emotionMap.values()){
                if(elem && elem.node && elem.node.isValid){
                    elem.node.removeFromParent();
                    elem.node.destroy();
                }
            }

            emotionMap.clear();
        }
    }

    public initData(){
        this.loadFirstEmotion();
        this.analyticEmotionList();
    }

    /* 刷新表情布局
     */
    private refreshEmotionLayout(){
        this.initData();
    }

    /* 加载首页表情列表
     */
    private loadFirstEmotion(){
        let emotionList    = Role.Instance.RoleData.emotions;
        let emotionListLen = emotionList.length;
        let firstEmotionNodes   = this._first_emotion_list.length;
        this._emotion_idx       = kZeroNumber;
        for(let idx = kZeroNumber; idx < firstEmotionNodes; idx++){
            let emotionID = idx >= emotionListLen ? kNegativeOneNumber : emotionList[idx];
            this._first_emotion_list[idx].setData(emotionID, this._emotion_idx, EmotionNodeState.FirstPage, true);
            this._emotion_idx++;
        }
    }

    /* 解析表情列表
     */
    private analyticEmotionList(){
        this._own_emotion_list   = [];
        this._unown_emotion_list = [];
        //this.layout_own_area.removeAllChildren();
        //this.layout_unown_area.removeAllChildren();
        
        let ownEmotionList = Role.Instance.RoleData.emotions;
        let ownEmotionListLen = ownEmotionList.length;
        if(ownEmotionListLen > kFirstPageMaxCount){
            for(let idx = kFirstPageMaxCount; idx < ownEmotionListLen; idx++){
                this._own_emotion_list.push(ownEmotionList[idx]);
            }
        }
        
        for(let emotion of tab.Data.EmojiTableByID.values()){
            let bFind  = ownEmotionList.findIndex(tmpObj=> tmpObj == emotion.ID) != kNegativeOneNumber;
            !bFind && this._unown_emotion_list.push(emotion.ID);
        }

        //加载表情节点
        this.lbl_all_put_in.node.active = this._own_emotion_list.length <= kZeroNumber;
        this.lbl_own_num.string         = `${ownEmotionList.length + this._own_emotion_list.length}/${tab.Data.EmojiTable.length}`;
        this.loadEmotionNode(this._own_emotion_list,   this.layout_own_area,   true);
        this.loadEmotionNode(this._unown_emotion_list, this.layout_unown_area, false);
    }

    /* 加载表情节点
     */
    private async loadEmotionNode(emotionList: number[], nodeLayout: cc.Node, bOwnMode: boolean){
        if(emotionList.length == kZeroNumber){
            nodeLayout.childrenCount > kZeroNumber && nodeLayout.removeAllChildren();
            return;
        }
        await this.execute(this.generatorEmotionGroup(emotionList, nodeLayout, bOwnMode), kOneNumber);
        /*let tempEmotionIDArr = [];
        let idx = kZeroNumber;
        for(let data of emotionList){
            tempEmotionIDArr.push(data);
            if(kEmotionGroup == tempEmotionIDArr.length){
                this.createEmotionNode(tempEmotionIDArr, idx, nodeLayout, bOwnMode);
                tempEmotionIDArr = [];
                idx++;
            }
        }
        //检测剩余部分
        tempEmotionIDArr.length > kZeroNumber && this.createEmotionNode(tempEmotionIDArr, idx, nodeLayout, bOwnMode);*/
    }

    /* 表情组节点生成器
     */
     private* generatorEmotionGroup(emotionList: number[], nodeLayout: cc.Node, bOwnMode: boolean){
        let tempEmotionIDArr = [];
        let idx = kZeroNumber;
        for(let data of emotionList){
            tempEmotionIDArr.push(data);
            if(kEmotionGroup == tempEmotionIDArr.length){
                yield this.createEmotionNode(tempEmotionIDArr, idx, nodeLayout, bOwnMode);
                tempEmotionIDArr = [];
                idx++;
            }
        }

        //检测剩余部分
        tempEmotionIDArr.length > kZeroNumber && this.createEmotionNode(tempEmotionIDArr, idx, nodeLayout, bOwnMode);
    }

    /* 创建EmotionFrameGroup节点的执行函数
     */
     private execute(generator: Generator, duration: number){
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

    /* 创建表情节点
     */
    private createEmotionNode(emotionList: number[], idx: number, nodeLayout: cc.Node, bOwnMode: boolean){
        let nodeMap = bOwnMode ? this._own_emotion_node_map : this._unown_emotion_node_map;

        if(emotionList.length > kZeroNumber){
            let emotionGroup = nodeMap.getValue(idx);
            if(!emotionGroup){
                emotionGroup = cc.instantiate(this.pfb_emotion_group).getComponent(EmotionFrameGroup);
                nodeMap.setValue(idx, emotionGroup);
                nodeLayout.addChild(emotionGroup.node);
            }

            emotionGroup.initData(emotionList, this._emotion_idx, bOwnMode);
            this._emotion_idx += emotionList.length;
        }
    }

    /* 
     */
    private onTouchEnded(event: cc.Event.EventTouch){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetEmotionState);
    }
}
