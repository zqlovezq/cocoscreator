/*
 * @Descripttion: 战场地图红点管理类
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import ManagerNewBattleMap from "../BattleMapStore/ManagerNewBattleMap";
import boxtips from "../Common/boxtips";
import { checkRechargeInterfaceIsOpen, checkRewardIsEmotionOrBattleMap, k255, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import UnlockAccelerateEffect from "../Common/UnlockAccelerateEffect";
import ManagerNewEmotionRedDot from "../EmotionStore/ManagerNewEmotionRedDot";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import ManagerDoubleEnergy from "../Main/ManagerDoubleEnergy";
import PassportFunc from "../passport/PassportFunc";
import { getServerUtcTime, popRewardLayer_Ex, setTimeTXT, showPopLayer, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import BossBoxBuyEvilPassNode from "./BossBoxBuyEvilPassNode";
import BossBoxGoldBag from "./BossBoxGoldBag";
import BossboxLvInfoCell from "./BossboxLvInfoCell";
import BossboxOpenNow from "./BossboxOpenNow";
import BossboxPreviewTips from "./BossboxPreviewTips";
import BossboxUnlockSuccess from "./BossboxUnlockSuccess";
import MainsceneBossBox from "./MainsceneBossBox";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossBoxLayer  extends PopLayer {

    @property(cc.Sprite)
    seasonBg: cc.Sprite = null

    @property(cc.Label)
    seasonTitle: cc.Label = null

    @property(cc.Label)
    seasonDesc: cc.Label = null

    @property(cc.Node)
    seasonTimenode: cc.Node = null

    @property(cc.Label)
    seasonEndTimeLeft: cc.Label = null

    @property(cc.Node)
    normalNode: cc.Node = null

    @property(cc.ProgressBar)
    normal_progressbar: cc.ProgressBar = null

    @property(cc.Label)
    normal_progresstxt: cc.Label = null

    @property(cc.Label)
    aleadygetallaward: cc.Label = null

    @property(cc.Node)
    unlockNode: cc.Node = null

    @property(cc.Label)
    unlock_timeleft: cc.Label = null

    @property(cc.Node)
    nextNode: cc.Node = null

    @property(cc.Sprite)
    nextLevelIcon_node: cc.Sprite = null

    @property(cc.Label)
    nextLevel: cc.Label = null

    @property(cc.Node)
    nextTipsNode: cc.Node = null

    @property(cc.Sprite)
    LockFlag_node: cc.Sprite = null

    @property(cc.Label)
    LockFlagLevel: cc.Label = null

    @property(cc.Node)
    GoldSpineNode: cc.Node = null

    @property(InfiniteList)
    m_sv_list: InfiniteList = null

    @property(cc.Prefab)
    m_cell_prefab: cc.Prefab = null

    @property(cc.Node)
    previewtip: cc.Node = null

    @property(cc.Prefab)
    m_cell_goldbag: cc.Prefab = null

    @property(cc.Prefab)
    m_cell_evilnode: cc.Prefab = null

    @property(cc.Node)
    shouldBuynode1: cc.Node = null

    @property(cc.Node)
    shouldBuynode2: cc.Node = null

    @property(cc.Node)
    notBuynode1: cc.Node = null

    @property(cc.Node)
    notBuynode2: cc.Node = null;

    @property(cc.Node)
    node_buy_evilpass: cc.Node = null;

    @property(cc.Node)
    node_buy_evilpass_firstBuy: cc.Node = null;

    @property(cc.Node)
    node_double_energy_effect: cc.Node = null;

    @property(cc.Sprite)
    spr_normal_energy: cc.Sprite = null;

    @property(cc.Sprite)
    spr_double_energy: cc.Sprite = null;

    m_cell_height:number = 0
    m_cell_height1:number = 0
    m_cell_height2:number = 0

    seasoncfgEndTime:number = 0;
    gift_dis24lefttime: number;

    private _bJumpPos: boolean = false;
    private _jump_pos: number;

    onClose(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateMainsceneBossBox,null)
        this.hide()
    }

    nextTips(){
        this.nextTipsNode.active = true
    }

    onTouchStart(event){
        let pos:cc.Vec2 = event.getLocation()
        let boxingbox = this.nextTipsNode.getBoundingBoxToWorld()
        if(boxingbox.contains(pos)){
            if(this.nextTipsNode.active == false){
                this.nextTipsNode.active = true
            }
        } else {
            if(this.nextTipsNode.active){
                this.nextTipsNode.active = false
            }
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }

    onDestroy(){
        this.unschedule(this.updateCheckDoubleEnergy);
    }

    onLoad () {
        this.node_double_energy_effect.active = false;
        this.spr_double_energy.node.opacity   = kZeroNumber;
        
        this.m_sv_list.Init({
            getCellNumber: this.GetCellNumber.bind(this),
            getCellSize: this.GetCellSize.bind(this),
            getCellIdentifer: this.GetCellIdentifer.bind(this),
            getCellView: this.GetCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });

        this.m_sv_list.node.on("scroll-ended", this.onScrollMove, this);
        this.m_sv_list.node.on("scrolling", this.onScrollMove, this);


        this.nextNode.on(cc.Node.EventType.TOUCH_START, this.nextTips, this)
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true)

        this.previewtip.removeFromParent(false)
        this.m_sv_list.node.addChild(this.previewtip, 9999)

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param)=> {
            let param3 = new proto.Msg_BossBoxInfoReq()
            Net.Send(proto.Ptl.BossBoxInfoReq, param3)
        }, this);

       

        //领取奖励
        Net.listenProtocol(proto.Ptl.BossBoxGetLvRewardRsp, function (buffer, ptl){
            let msg = proto.Msg_BossBoxGetLvRewardRsp.decode(buffer)
            cc.log("BossBoxGetLvRewardRsp(领取奖励) : msg " + JSON.stringify(msg));
            if (msg != null){
                if(msg.result == 0){
                    popRewardLayer_Ex(msg.reward, ()=>{
                        if(msg.reward.length == 1 && msg.reward[0].rewardId == proto.ConstItemID.CTI_Gold){
                            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_BossboxAwardFlyGold, {id:msg.bossBoxId, type:msg.boxType} );
                            return;
                        }
                        //奖励是战场地图或者表情
                        if(msg.reward.length == 1){
                            checkRewardIsEmotionOrBattleMap(msg.reward[0].rewardId, msg.reward[0].rewardType);
                            return;
                        }
                    })
                
                    let cfg = tab.Data.BossBoxTableByID.getValue(msg.bossBoxId)
                    if(cfg){
                        msg.boxType == proto.BossBoxType.BossBoxNormal &&  Role.Instance.bossBoxData.getNormalRewardLv.push(cfg.BossBoxLv)
                        msg.boxType == proto.BossBoxType.BossBoxPassCheck &&  Role.Instance.bossBoxData.getPassCheckRewardLv.push(cfg.BossBoxLv)
                    }
                        
                   this.m_sv_list.Reload(true);
                   this.autoScrollToRightPos(true)
                }
           }
        }, this)


        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_BossboxPreviewtips, (levl:number)=>{
            this.m_sv_list.ScrollToCell(levl)
        }, this);

        this.node_buy_evilpass.active = checkRechargeInterfaceIsOpen();
    }

    initTopInfo(){
        this.node_buy_evilpass_firstBuy.active = Role.Instance.IsFirstPayEvilPss == false

        this.seasonTimenode.active = false
        this.normalNode.active = false
        this.unlockNode.active = false

        this.LockFlag_node.node.active = false
        this.GoldSpineNode.active = false
        this.nextLevelIcon_node.node.active = false
        this.aleadygetallaward.node.active = false

        this.shouldBuynode1.active =  Role.Instance.isDemonPass == false   //未购买状态
        this.shouldBuynode2.active =  Role.Instance.isDemonPass == false
        this.notBuynode1.active =  Role.Instance.isDemonPass == true       //已购买状态
        this.notBuynode2.active =  Role.Instance.isDemonPass == true


        if(Role.Instance.RoleData.rankData){
            let seasoncfg:tab.RankFightTable = tab.Data.RankFightTableById.getValue(Role.Instance.seasonID)
            if(seasoncfg){
                this.seasonTitle.string = "赛季" + seasoncfg.Id
                this.seasonDesc.string = seasoncfg.Name
                let seasonleft = seasoncfg.EndTime - getServerUtcTime()
                if(seasonleft > 0 ){
                    this.seasonTimenode.active = true
                    this.seasoncfgEndTime = seasoncfg.EndTime
                    setTimeTXT(this.seasonEndTimeLeft, seasonleft)
                    this.unschedule(this.seasonTimeCountDown)
                    this.schedule(this.seasonTimeCountDown, 1)
                }
            }
        }
        
        let bossBox = Role.Instance.bossBoxData;
        // cc.log("时间——将要解锁的等级：" + bossBox.nextDayUnLockLv)
        // cc.log("灵魂——将要解锁的等级：" + bossBox.lv)
        // cc.log("当前灵魂等级下的 灵魂数：" + bossBox.exp)
        if(!bossBox){
            return
        }

        let maxcfg:tab.BossBoxTable = PassportFunc.bossBoxCfgData[PassportFunc.bossBoxCfgData.length - 1]
        if(!maxcfg) {
            return
        }
        
        let everylvsoulCnt = tab.Data.GetKeyValue_ConfigTable().BossBoxEveryLvNeedSoul
        this.unlockNode.active = false            
        this.normalNode.active = true

        if(bossBox.nextDayUnLockLv >= 0 && bossBox.nextDayUnLockLv <= bossBox.lv){
            let nextlv = Math.min(bossBox.nextDayUnLockLv, bossBox.lv+1, maxcfg.BossBoxLv)
            let bossboxcfg = tab.Data.BossBoxTableByID.getValue(nextlv)
            if(bossboxcfg){
                this.nextLevelIcon_node.setTexture(bossboxcfg.indexIcon)
            }
            this.nextLevelIcon_node.node.active = true

            this.nextLevel.string = String( nextlv )
            let exp = bossBox.exp + everylvsoulCnt * Math.max((bossBox.lv - bossBox.nextDayUnLockLv + 1), 0)
            this.normal_progressbar.progress = exp / everylvsoulCnt
            this.normal_progresstxt.string = `${exp}/${everylvsoulCnt}`
        } else {
            if(Role.Instance.bossBoxData.lv < maxcfg.BossBoxLv) { //首领宝箱未满级
                let bossboxcfg = tab.Data.BossBoxTableByID.getValue(bossBox.lv)
                if(bossboxcfg){
                    this.nextLevelIcon_node.setTexture(bossboxcfg.indexIcon)
                }
                this.nextLevelIcon_node.node.active = true
                this.nextLevel.string = String( Math.min(bossBox.lv+1, maxcfg.BossBoxLv) )
                let exp = bossBox.exp
                this.normal_progressbar.progress = exp / everylvsoulCnt
                this.normal_progresstxt.string = `${exp}/${everylvsoulCnt}`
            } else {   //首领宝箱已满级
                if(Role.Instance.isDemonPass == false){
                    this.nextLevelIcon_node.node.active = true
                    this.nextLevelIcon_node.setTexture(maxcfg.indexIcon)
                    this.nextLevel.string = String( maxcfg.BossBoxLv)
                    this.normal_progressbar.progress = 1
                    this.normal_progresstxt.string = `${everylvsoulCnt}/${everylvsoulCnt}`
                } else {
                    if(PassportFunc.getCurGoldbagNumber() < tab.Data.GetKeyValue_ConfigTable().BossBoxMaxGoldLimit){
                        this.GoldSpineNode.active = true
                        this.nextLevel.string = String( Math.min(bossBox.lv + 1, maxcfg.BossBoxLv) )
                        this.normal_progressbar.progress = (bossBox.exp%everylvsoulCnt)  / everylvsoulCnt
                        this.normal_progresstxt.string = `${bossBox.exp%everylvsoulCnt}/${everylvsoulCnt}`
                    } else {
                        this.aleadygetallaward.node.active = true;
                        this.normal_progresstxt.node.active = false
                        this.GoldSpineNode.active = true
                        this.nextLevel.string = String( maxcfg.BossBoxLv)
                        this.normal_progressbar.progress = 1
                        this.normal_progresstxt.string = `${everylvsoulCnt}/${everylvsoulCnt}`
                    }
                }
            }
        }
    }
    
    /*  */
    timeCountDown(dt){
        this.gift_dis24lefttime -- ;
        let lefttime:number = this.gift_dis24lefttime
        if(lefttime <= -1){
            this.unlockNode.active = false
            this.LockFlag_node.node.active = false
            //重新请求下首领宝箱的信息,用来刷新界面
            let param3 = new proto.Msg_BossBoxInfoReq()
            Net.Send(proto.Ptl.BossBoxInfoReq, param3)

            this.unschedule(this.timeCountDown)
            return
        }

        lefttime = lefttime < 0 ? 0 :lefttime
        setTimeTXT(this.unlock_timeleft, lefttime)
    }
    
    /*  */
    seasonTimeCountDown(dt){
        let lefttime:number = this.seasoncfgEndTime - getServerUtcTime()
        if(lefttime <= -1){
            this.seasonTimenode.active = false
            //重新请求下首领宝箱的信息,用来刷新界面
            let param3 = new proto.Msg_BossBoxInfoReq()
            Net.Send(proto.Ptl.BossBoxInfoReq, param3)

            this.unschedule(this.seasonTimeCountDown)
            return
        }

        lefttime = lefttime < 0 ? 0 :lefttime
        setTimeTXT(this.seasonEndTimeLeft, lefttime)
    }

    /* 首领宝箱 */
    start () {
        let param3 = new proto.Msg_BossBoxInfoReq()
        Net.Send(proto.Ptl.BossBoxInfoReq, param3);

        this.checkDoubleEnergyIsOpen();
    }

    /* 展示恶魔通行证界面 */
    onEvilBtn(){
        if(this.shouldBuynode1.active){
            showPopLayer("prefab/EvilPass")
        }
    }

    /*  */
    protected autoScrollToRightPos(bnotscroll:boolean= false){
        let bossBox = Role.Instance.bossBoxData
        if(!bossBox){
            this.checkJumpToPos();
            return
        }
        //找到一个可领取的cell
        let benormalhave:boolean = false
        let passhave:boolean = false
        let awardlv = -1
        for(let i=0; i <= bossBox.lv; i++){
            let bunlock = bossBox.nextDayUnLockLv < 0 || bossBox.nextDayUnLockLv > i
            benormalhave = benormalhave ||  bossBox.getNormalRewardLv.includes(i) == false && bunlock
            passhave = passhave ||  bossBox.getPassCheckRewardLv.includes(i) == false &&  bunlock
            let canaward:boolean =   benormalhave || (passhave && Role.Instance.isDemonPass != false)
            if(canaward){
                awardlv = i;
                break
            }
        }

        if(awardlv > 0){
            this.m_sv_list.ScrollToCell(awardlv);
            this.checkJumpToPos();
            return;
        } else if(awardlv == 0) {
            this.m_sv_list.ScrollToCell(0)
            this.onScrollMove()
            this.checkJumpToPos();
            return;
        }

        if(bnotscroll){
            this.checkJumpToPos();
            return
        }

        if(bossBox.lv > 0){
            let nextlv = Role.Instance.bossBoxData.nextDayUnLockLv
            if(nextlv > 0){
                this.m_sv_list.ScrollToCell(Math.min(Role.Instance.bossBoxData.lv, nextlv))
            } else {
                this.m_sv_list.ScrollToCell(Role.Instance.bossBoxData.lv)
            }
            this.checkJumpToPos();
        } else {
            this.m_sv_list.scrollToTop()
            this.onScrollMove()
            this.checkJumpToPos();
        }
    }

    public initView() {
        this.m_sv_list.Reload(true);
        this.scheduleOnce(()=>{
            this.autoScrollToRightPos()
        }, 0.2)
    }

    onScrollMove() {
        let range = this.m_sv_list._getActiveCellIndexRange()
        let bfind:boolean = false
        for(let i= range.y; i < PassportFunc.bossBoxCfgData.length; i++) {
            if(PassportFunc.bossBoxCfgData[i].PreviewFlag > 0){
                bfind = true
                this.previewtip.active = true
                this.previewtip.getComponent(BossboxPreviewTips).setView(PassportFunc.bossBoxCfgData[i].BossBoxLv)
                break
            }
        }

        if(bfind == false){
            this.previewtip.active = false
            this.previewtip.getComponent(BossboxPreviewTips).setCurLevel(-1)
        }
    }

    GetCellNumber(): number {
        let add:number = ((Role.Instance.isDemonPass == false) ? 2 : 1)
        return PassportFunc.bossBoxCfgData.length + add
    }

    GetCellSize(idx: number): number{
        if(idx < PassportFunc.bossBoxCfgData.length ){
            if (this.m_cell_height == 0){
                this.m_cell_height = cc.instantiate(this.m_cell_prefab).height;
            }
            return this.m_cell_height;
        } else if(idx == PassportFunc.bossBoxCfgData.length) {
            if (this.m_cell_height1 == 0) {
                this.m_cell_height1 = cc.instantiate(this.m_cell_goldbag).height;
            }
            return this.m_cell_height1;
        } else {
            if (this.m_cell_height2 == 0){
                this.m_cell_height2 = cc.instantiate(this.m_cell_evilnode).height;
            }
            return this.m_cell_height2;
        }
    }

    GetCellIdentifer(idx: number): string{
        if(idx < PassportFunc.bossBoxCfgData.length) {
            return "BossboxLvInfoCell";
        } else if(idx == PassportFunc.bossBoxCfgData.length) {
            return "BossBoxGoldBag"
        } else {
            return "BossBoxBuyEvilPassNode"
        }
    }

    GetCellView(idx: number, identifier:string): InfiniteCell {
        switch(identifier) {
        case "BossboxLvInfoCell":
            return cc.instantiate(this.m_cell_prefab).getComponent(BossboxLvInfoCell);
        case "BossBoxGoldBag":
            return cc.instantiate(this.m_cell_goldbag).getComponent(BossBoxGoldBag)
        case "BossBoxBuyEvilPassNode":
            return cc.instantiate(this.m_cell_evilnode).getComponent(BossBoxBuyEvilPassNode)
        }
        return null;
    }

    GetCellData(idx: number) {
        let t1 = PassportFunc.bossBoxCfgData;
        if (idx < PassportFunc.bossBoxCfgData.length) {
            return PassportFunc.bossBoxCfgData[idx];
        }
        return null;
    }

    /**
     * !!!此处用于 别的地方跳转到该界面指定位置
     * @param pos 
     */
    public jumpToPosition(pos: number){
        this._bJumpPos = true;
        this._jump_pos = pos;
    }

    private checkJumpToPos(){
        if(this._bJumpPos){
            this.scheduleOnce(()=>{
                this.m_sv_list.ScrollToCell(this._jump_pos);
                this._bJumpPos = false;
            }, 0.3);
        }
    }

    /* 设置能量双倍标志的可见性
     */
     private setDoubleEnergyVisible(bVisible: boolean){
        this.spr_double_energy.node.opacity = bVisible ? k255 : kZeroNumber;
        this.spr_normal_energy.node.opacity = !bVisible ? k255 : kZeroNumber;
        //this.node_double_energy_effect.active = bVisible;
    }

    private checkDoubleEnergyIsOpen(){
        let bOver  = ManagerDoubleEnergy.getInstance().getOverUTC() - getServerUtcTime() <= kZeroNumber;
        let bStart = ManagerDoubleEnergy.getInstance().getStartUTC() <= getServerUtcTime();
        this.setDoubleEnergyVisible(bStart && !bOver);
        this.updateCheckDoubleEnergy();
    }

    private updateCheckDoubleEnergy(){
        if(this.spr_double_energy.node.opacity == k255){
            let leftTimes = ManagerDoubleEnergy.getInstance().getOverUTC() - getServerUtcTime();
            if(leftTimes <= kZeroNumber){
                this.setDoubleEnergyVisible(false);
                this.unschedule(this.updateCheckDoubleEnergy);
                return;
            }

            let day = Math.floor(leftTimes / 86400);
            if(day > kZeroNumber){
                return;
            }

            this.schedule(this.updateCheckDoubleEnergy, kOneNumber);
        }
    }

    //下一级解锁显示(当前等级 + 1 = 将要解锁的等级)
            // this.unlockNode.active = bossBox.nextDayUnLockLv > 0 && bossBox.nextDayUnLockLv < bossBox.lv
            // if(this.unlockNode.active) {
            //     this.LockFlag_node.node.active = true
            //     this.LockFlagLevel.string = bossBox.nextDayUnLockLv.toString()
            //     let svrt = getServerUtcTime()
            //     let ptime =  new Date()
            //     ptime.setTime(svrt*1000)
            //     let hours = ptime.getHours()
            //     let mini = ptime.getMinutes()
            //     let sec = ptime.getSeconds()            
            //     this.gift_dis24lefttime = 86400 - hours*3600 - mini*60 - sec
            //     if(this.gift_dis24lefttime > 0) {
            //         setTimeTXT(this.unlock_timeleft, this.gift_dis24lefttime)
            //         this.unschedule(this.timeCountDown)
            //         this.schedule(this.timeCountDown, 1)
            //     }
            // }
            // else
        
}
