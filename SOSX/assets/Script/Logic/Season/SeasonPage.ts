
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import PopLayer from "../Utils/PopLayer";
import SeasonRankRewardInfo from "./SeasonRankRewardInfo";
import SeasonQulifierRewardInfo from "./SeasonQulifierRewardInfo";
import { isValidObj, kOneNumber, kTenNumber, kThousandNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import SeasonNoneReward from "./SeasonNoneReward";
import SeasonRankInfoPanel from "./SeasonRankInfoPanel";
import SeasonMaxQualifier from "./SeasonMaxQualifier";
import { Net } from "../../Protocol/Net";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import SeasonRewardInfoNoneCard from "./SeasonRewardInfoNoneCard";
import { SeasonRankCardClass } from "../Common/SeasonRankCommonFunc";
import { proto } from "../../Protocol/client_protocol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SeasonPage extends PopLayer {
    @property({ displayName: "赛季信息显示", type: cc.Node })
    node_season_rank_info: cc.Node = null;

    @property({ displayName: "排位赛最大等级预制件", type: cc.Prefab })
    pfb_max_qualifier_info: cc.Prefab = null;

    @property({ displayName: "竞技场预制件", type: cc.Prefab })
    pfb_rank_reward_info: cc.Prefab = null;

    @property({ displayName: "排位赛预制件", type: cc.Prefab })
    pfb_qualifier_reward: cc.Prefab = null;

    @property({ displayName: "无奖励竞技场预制件", type: cc.Prefab })
    pfb_none_reward_rank_info: cc.Prefab = null;

    @property({ displayName: "赛季信息【废弃】", type: cc.Prefab })
    pfb_season_info_panel: cc.Prefab = null;

    @property({ displayName: "scrollview_reward", type: InfiniteList })
    scrollview_reward: InfiniteList = null;

    @property({ displayName: "向上按钮", type: cc.Button })
    btn_up: cc.Button = null;

    @property({ displayName: "向下按钮", type: cc.Button })
    btn_down: cc.Button = null;

    @property({ displayName: "排位赛最大等级模块高度" })
    node_max_qualifier_height: number = kZeroNumber;

    @property({ displayName: "竞技场模块高度" })
    rank_model_height: number = kZeroNumber;

    @property({ displayName: "排位赛模块高度" })
    qualifier_model_height: number = kZeroNumber;

    @property({ displayName: "无奖励竞技场模块高度" })
    none_reward_model_height: number = kZeroNumber;

    @property({ displayName: "赛季信息面板高度" })
    season_info_height: number = kZeroNumber;

    @property({ displayName: "无解锁卡牌模块竞技场模块高度" })
    none_unlock_card_rank_height: number = kZeroNumber;

    @property({ displayName: "无奖励竞技场预制件", type: cc.Prefab })
    pfb_none_unlock_card_rank_info: cc.Prefab = null;

    @property(cc.Button)
    btn_close: cc.Button = null;

    @property(cc.Node)
    node_fixed_center: cc.Node = null;

    @property(cc.Node)
    node_guide: cc.Node = null;

    protected _current_cell_index: number        = kZeroNumber;  //当前单元格下标
    protected _qualifier_cell_index: number      = kZeroNumber; //排位赛单元格下标
    private _record_current_scroll_index: number = kZeroNumber; //记录下当前滚到的单元格下标
    private _current_cell: InfiniteCell          = null;        //当前所定位的单元格
    private _current_cell_offsetY: number        = kZeroNumber; //当前所定位的单元格y偏移量
    private _current_cell_score_node: cc.Node    = null;        //当前所定位的单元格积分节点
    private _record_score_node_pos_y: number     = kZeroNumber; //记录下当前所定位的单元格积分记得y位置
    private _bCanAdjust: boolean                 = true;        //是否能进行位置调整
    private _bTouchMoving: boolean               = false;       //是否可触摸移动

    onLoad(){
        this.btn_close.node.on("click", this.onClickClose,     this);
        this.btn_up.node.on("click",    this.onClickAdjustPos, this);
        this.btn_down.node.on("click",  this.onClickAdjustPos, this);
        this.node_guide.active = !Role.Instance.IsGuideFinished();
    }

    start(){
        this.initData();
    }

    private initData(){
        this.initSeasonPanelInfo();
        this.initCellIndex();
        //初始化scrollView接口
        this.scrollview_reward.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.getCellIdx.bind(this),
        });

        //重载scrollView数据
        this.scrollview_reward.Reload(true);

        //滚动到当前段位位置
        this.onClickScrolling();

        //绑定scrollView滚动事件
        this.scrollview_reward.node.on("scrolling", this.onScrollMove, this);
        this.scrollview_reward.node.on("scroll-ended", this.onScrollEnd, this);
        this.scrollview_reward.node.on("scroll-began", this.onScrollStart, this);
    }

    /* 初始化赛季信息面板 */
    private initSeasonPanelInfo(){
        this.node_season_rank_info.getComponent(SeasonRankInfoPanel).initData();
    }

    /* 初始化排位赛单元格下标和当前段位单元格下标 */
    private initCellIndex(){
        let curRankLv = Role.Instance.RoleGrade;
        let rankGradeTabListLen = tab.Data.RankGradeTable.length;
        for (let idx = kZeroNumber; idx < rankGradeTabListLen; ++idx){
            if (tab.RankFightType.RankFightType_Hight == tab.Data.RankGradeTable[idx].Type &&
                this._qualifier_cell_index == kZeroNumber){
                this._qualifier_cell_index = idx;
            }

            if (tab.Data.RankGradeTable[idx].Grade == curRankLv){
                this._current_cell_index = idx;
            }
        }
    }

    /* 获取正确的下标 */
    private getRightCellIndex(idx: number){
        return this.getCellCount() - kOneNumber - idx;
    }

    /*  */
    private checkIsHaveUnlockCardModel(rankLv: number){
        let dataList =  SeasonRankCardClass.getInstance().getUnlockCardListsFromRankLevel(rankLv);
        if(isValidObj(dataList) && dataList.length > kZeroNumber){
            return true;
        }
        return false;
    }

    /* 获取相应的标记符 */
    private getRightIdentifer(idx: number){
        if (kZeroNumber == idx){
            return "SeasonNoneReward";
        }

        if(this.getCellCount() - kOneNumber == idx){
            return "SeasonMaxQualifier";
        }

        if (idx < this._qualifier_cell_index){
            if(!this.checkIsHaveUnlockCardModel(idx)){
                return "SeasonRewardInfoNoneCard";
            }
            return "SeasonRankRewardInfo";
        }
        return "SeasonQulifierRewardInfo"
    }

    /* 获取单元格下标
     * @param idx  下标
     */
    private getCellIdx(idx: number){
        idx = this.getRightCellIndex(idx);
        this._record_current_scroll_index = idx;
        let tabData = tab.Data.RankGradeTableByGrade.getValue(idx);
        if(isValidObj(tabData)){
            return tabData.Grade;
        }

        if(!cc.sys.isNative){throw new Error("cell idx is valid!");}
        return kOneNumber;
    }

    /* 获取单元格实例化节点
     * @param idx  下标
     */
    private getCellView(idx: number, identifer: string): InfiniteCell{
        let cell = null;
        switch(identifer){
            case "SeasonNoneReward":
                cell = cc.instantiate(this.pfb_none_reward_rank_info).getComponent(SeasonNoneReward);
                break;

            case "SeasonMaxQualifier":
                cell = cc.instantiate(this.pfb_max_qualifier_info).getComponent(SeasonMaxQualifier);
                break;

            case "SeasonRewardInfoNoneCard":
                cell = cc.instantiate(this.pfb_none_unlock_card_rank_info).getComponent(SeasonRewardInfoNoneCard);
                break;

            case "SeasonRankRewardInfo":
                cell = cc.instantiate(this.pfb_rank_reward_info).getComponent(SeasonRankRewardInfo);
                break;

            case "SeasonQulifierRewardInfo":
                cell = cc.instantiate(this.pfb_qualifier_reward).getComponent(SeasonQulifierRewardInfo);
                break;
        }

        return cell;
    }

    /* 获取单元格标记
     * @param idx  下标
     */
    private getCellIdentifer(idx: number): string{
        //return "season cell index: " + idx.toString();
        idx = this.getRightCellIndex(idx);
        return this.getRightIdentifer(idx);
    }

    /* 获取单元格高度
     * @param idx  下标
     */
    private getCellHeight(idx: number){
        idx = this.getRightCellIndex(idx);
        if (kZeroNumber == idx){
            return this.none_reward_model_height;
        }

        if(this.getCellCount() - kOneNumber == idx){
            return this.node_max_qualifier_height;
        }

        if (idx < this._qualifier_cell_index){
            if(!this.checkIsHaveUnlockCardModel(idx)){
                return this.none_unlock_card_rank_height;
            }
            return this.rank_model_height;
        }

        return this.qualifier_model_height;
    }

    /* 获取单元格数量
     */
    private getCellCount(){
        return tab.Data.RankGradeTable.length;
    }

    /* 赛季信息面板的显示控制【废弃】
     */
    private seasonInfoPanelDisplay(){
        /*let idx = this.getRightCellIndex(this._qualifier_cell_index);
        let height = this.scrollview_reward.node.getContentSize().height;
        let cellOffSet = this.scrollview_reward.GetScrollPosOfCell(idx).y;
        let cellH = this.getCellHeight(idx);
        let indexOffset = cellOffSet - height + cellH;
        let scrollOffset = this.scrollview_reward.getScrollOffset().y;
        this.node_season_rank_info.active = indexOffset > scrollOffset;*/
    }

    private showUpDownByMove(){
        let idx = this.getRightCellIndex(this._current_cell_index);
        let height = this.scrollview_reward.node.getContentSize().height;
        let cellH = this.getCellHeight(idx);
        let cellOffSet = this.scrollview_reward.GetScrollPosOfCell(idx).y;
        let indexOffset = cellOffSet - height;
        let scrollOffset = this.scrollview_reward.getScrollOffset().y;
        //cc.log("----indexoffset:" + String(indexOffset) + "------scrollOffset:" + String(scrollOffset) + "--------");
        let ptH = indexOffset + cellH;
        let bOverTwoLevel = Math.abs(this._record_current_scroll_index - this._current_cell_index) > kTwoNumber;
        this.btn_down.node.active = scrollOffset < cellOffSet - kThousandNumber && bOverTwoLevel;
        this.btn_up.node.active = scrollOffset > ptH + kThousandNumber && bOverTwoLevel;
    }

//=======================点击/滚动事件区域=================================================
    public onScrollMove(){
        this.seasonInfoPanelDisplay();
        this.showUpDownByMove();
    }

    private onScrollStart(){
        this._bTouchMoving = true;
        this._bCanAdjust = true;
    }
    
    private onScrollEnd(){
        if(this._current_cell_index < kOneNumber){
            return;
        }
        this.adjustScoreNodePos();
    }
    
    private checkMinRankLevel(){
        let idx = this.getRightCellIndex(this._current_cell_index);
        if(this._current_cell_index < kOneNumber){
            this.scrollview_reward.ScrollToCell(idx, 0.5);
            return true;
        }

        return false;
    }

    private onClickAdjustPos(){
        if(this.checkMinRankLevel()){
            return;
        }
        this.scrollview_reward.scrollToOffset(cc.v2(this.scrollview_reward.GetScrollOffset().x, this._record_score_node_pos_y), kOneNumber);
    }

    private onClickScrolling(){
        if(this.checkMinRankLevel()){
            return;
        }

        let idx = this.getRightCellIndex(this._current_cell_index);
        let pos = this.scrollview_reward.GetScrollPosOfCell(idx);
        this._current_cell_offsetY = pos.y; //cc.log("单元格所在的offsetY: " +this._current_cell_offsetY);
        this.scheduleOnce(()=>{this.scrollview_reward.scrollToOffset(pos, 0.3);}, 0.3);
        
    }

    private adjustScoreNodePos(){
        if(!this._bCanAdjust || this._bTouchMoving){return;}

        let idx                       = this.getRightCellIndex(this._current_cell_index);
        this._current_cell            = this.scrollview_reward.findCellOfIdx(idx)
        this._current_cell_score_node = this._current_cell ? this._current_cell.GetScoreNode() : null;
        if(null != this._current_cell_score_node){
            let nodeScoreWorldPos = this._current_cell_score_node.convertToWorldSpaceAR(cc.Vec3.ZERO);
            let nodeFixedWorldPos = this.node_fixed_center.convertToWorldSpaceAR(cc.Vec3.ZERO);
            //cc.log("积分泡泡在中心点坐标系的位置Y: " + this._current_cell_score_node.convertToWorldSpaceAR(cc.Vec3.ZERO).y);
            //cc.log("参考点世界坐标所在的位置Y: " + nodeFixedWorldPos.y);
            //cc.log("二者的差值： " + Math.abs(nodeScoreWorldPos.y - nodeFixedWorldPos.y));
            //let scrollMaxOffset = this.scrollview_reward.getMaxScrollOffset();
            //cc.log("scrollview最大偏移量：" + scrollMaxOffset);

            //let content = this.scrollview_reward.getContent();
            //let contentToCenterPos = content.convertToWorldSpaceAR(cc.Vec3.ZERO);
            //cc.log("content在世界坐标系的位置Y: " + contentToCenterPos.y);
            
            let cellNodeToWorldPos = this._current_cell.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
            //cc.log("当前单元格在世界坐标系中的位置Y： " + cellNodeToWorldPos.y);

            let diffY = cellNodeToWorldPos.y - nodeFixedWorldPos.y - nodeScoreWorldPos.y;
            this._record_score_node_pos_y = this._current_cell_offsetY + diffY;
            this.scrollview_reward.scrollToOffset(cc.v2(this.scrollview_reward.GetScrollOffset().x, this._record_score_node_pos_y), kOneNumber);
            this.scheduleOnce(()=>{this.scrollview_reward.Refresh()}, 0.3);
            this._bCanAdjust = false;
        }

        Net.pushLoaclMessage(LOCAL_MESSAGE.OpenSeasonPageLayer, this.node.name);
    }

    private onClickClose(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RereshMainPageSeasonRewardState, null);
        this.setVisible(false);
    }

    public onClickGuideReward(){
        let msg      = new proto.Msg_GetRankScoreRewardReq()
        msg.rewardId = 30;
        msg.itemIdx  = kZeroNumber;
        Net.Send(proto.Ptl.GetRankScoreRewardReq, msg);
    }
}
