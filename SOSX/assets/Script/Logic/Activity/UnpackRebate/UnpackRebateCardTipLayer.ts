/**
 *  开箱返利可以选择的卡牌提示界面
 */

import { tab } from "../../../Table/table_gen";
import { kOneNumber, kZeroNumber } from "../../Common/CommonInterface";
import PopLayer from "../../Utils/PopLayer";
import UnpackRebateCardGroup from "./UnpackRebateCardGroup";

const {ccclass, property} = cc._decorator;
const kCardGroup = 4;

@ccclass
export default class UnpackRebateCardTipLayer extends PopLayer {

    @property(cc.Node)
    node_include_content: cc.Node = null;

    @property(cc.Node)
    layout_include_content: cc.Node = null;

    @property(cc.Node)
    node_exclusive_content: cc.Node = null;

    @property(cc.Node)
    layout_exclusive_content: cc.Node = null;

    @property(cc.Prefab)
    pfb_card_group: cc.Prefab = null;

    onLoad () {
        
    }

    start () {

    }

    public initData(cardList: number[]){
        this.loadCardGroup(cardList, this.layout_include_content);
        this.groupCannotSelectCardList();
    }

    /* 组织不可选卡组列表
     */
    private groupCannotSelectCardList(){
        if(!tab.Data.UnpackRebateExclusiveCardTable){
            this.node_exclusive_content.active = false;
            return;
        }

        let cardList: number[] = [];
        for(let data of tab.Data.UnpackRebateExclusiveCardTable){
            cardList.push(data.CardID);
        }
        
        if(cardList.length == kZeroNumber){
            this.node_exclusive_content.active = false;
            return;
        }
        
        this.loadCardGroup(cardList, this.layout_exclusive_content);
    }

    /* 加载卡牌数据
     */
    private loadCardData(cardIDArr: number[], container: cc.Node){
        if(cardIDArr.length > kZeroNumber){
            let cardGroup = cc.instantiate(this.pfb_card_group).getComponent(UnpackRebateCardGroup);
            if(cardGroup){
                container.addChild(cardGroup.node);
                cardGroup.initData(cardIDArr, true);
            }
        }
    }

    /* 加载卡组
     */
     private async loadCardGroup(cardList: number[], nodeLayout: cc.Node){
        if(cardList.length == kZeroNumber){
            nodeLayout.childrenCount > kZeroNumber && nodeLayout.removeAllChildren();
            return;
        }
        await this.execute(this.generatorCardGroup(cardList, nodeLayout), kOneNumber);
    }

    /* 表情组节点生成器
     */
     private* generatorCardGroup(cardList: number[], nodeLayout: cc.Node){
        let tempCardIDArr = [];
        for(let data of cardList){
            tempCardIDArr.push(data);
            if(kCardGroup == tempCardIDArr.length){
                yield this.loadCardData(tempCardIDArr, nodeLayout);
                tempCardIDArr = [];
            }
        }

        //检测剩余部分
        tempCardIDArr.length > kZeroNumber && this.loadCardData(tempCardIDArr, nodeLayout);
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
    
            // 运行执行函数
            func();
        });
    }
}
