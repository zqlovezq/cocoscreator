
import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import PassportFunc from "../passport/PassportFunc";
import { getServerUtcTime, setTimeTXT, showPopLayer } from "../Utils/GameUtils";
import BossBoxLayer from "./BossBoxLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainsceneBossBox  extends cc.Component {
   
    @property(cc.Label)
    bossBoxLv:cc.Label = null;

    @property(cc.Label) 
    bossPointL:cc.Label = null;

    @property(cc.ProgressBar)
    bossBoxPro:cc.ProgressBar = null;

    @property(cc.Sprite)
    bossBox_di:cc.Sprite = null;

    @property(cc.Sprite)
    goldicon: cc.Sprite = null

    @property(cc.Sprite)
    normalIcon: cc.Sprite = null

    @property(cc.Node)
    normal_node: cc.Node = null

    @property(cc.Node)
    reward_node: cc.Node = null

    @property(cc.Node)
    reward_saoguang: cc.Node = null

    @property(cc.Node)
    unlock_node: cc.Node = null

    @property(cc.Label)
    timeleft: cc.Label = null

    @property({displayName: "闪电收集特效", type: sp.Skeleton})
    sk_cup: sp.Skeleton = null;

    @property(cc.Node)
    passIconNode: cc.Node = null

    gift_dis24lefttime: number;

   

    /*  */
    onLoad () {
        PassportFunc.sortOutData()
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateMainsceneBossBox, (param)=>{
            this.initBossBoxInfo()
        }, this);
        
        this.node.on(cc.Node.EventType.TOUCH_END, ()=>{
          showPopLayer("prefab/BossBoxLayer")
            //上报打点数据
            //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickBossBox); /* zhibo-@20230410 for <删除打点> */           
        }, this);
    }

    /*  */
    initBossBoxInfo():boolean{
        this.bossBox_di.node.active = false
        this.reward_node.active = false
        this.unlock_node.active = false
        this.reward_saoguang.active = false

        this.passIconNode.active = Role.Instance.isDemonPass == false

        if(PassportFunc.bossBoxCfgData.length ==  0){
            PassportFunc.sortOutData();
        }

        let bossBox = Role.Instance.bossBoxData;
        let maxcfg:tab.BossBoxTable = PassportFunc.bossBoxCfgData[PassportFunc.bossBoxCfgData.length - 1]
        if(!maxcfg){
            return false
        }

        if(!bossBox){
            return false
        }
        
        bossBox.lv = Math.min(maxcfg.BossBoxLv, bossBox.lv)

        //先假设都不可领取
        let benormalhave:boolean = false
        let passhave:boolean = false
        for(let i=0; i <= bossBox.lv; i++){
            let bunlock =  (bossBox.nextDayUnLockLv > i || bossBox.nextDayUnLockLv < 0)  //时间上是否已经解锁
            benormalhave = benormalhave || bossBox.getNormalRewardLv.includes(i) == false && bunlock
            passhave = passhave ||  bossBox.getPassCheckRewardLv.includes(i) == false && bunlock   //已领过奖励的集合
        }

        this.reward_node.active = (benormalhave || (passhave && Role.Instance.isDemonPass != false))
        if(this.reward_node.active){
            let ani:cc.Animation =  this.reward_saoguang.getComponent(cc.Animation)
            if(ani){
                this.reward_saoguang.active = true
                ani.play("baoxiangsaoguang")
            }
            return true
        }
       
        //下一级解锁显示(当前等级 + 1 = 将要解锁的等级 && 当前的奖励已经都领完)
        this.unlock_node.active = false
        // this.unlock_node.active = bossBox.nextDayUnLockLv > 0 && bossBox.nextDayUnLockLv <= (bossBox.lv + 1 )
        // if(this.unlock_node.active) {
        //     let svrt = getServerUtcTime()
        //     let ptime =  new Date()
        //     ptime.setTime(svrt*1000)
        //     let hours = ptime.getHours()
        //     let mini = ptime.getMinutes()
        //     let sec = ptime.getSeconds()            
        //     this.gift_dis24lefttime = 86400 - hours*3600 - mini*60 - sec
        //     if( this.gift_dis24lefttime > 0) {
        //         setTimeTXT(this.timeleft,  this.gift_dis24lefttime)
        //         this.unschedule(this.timeCountDown)
        //         this.schedule(this.timeCountDown, 1)
        //     }
        //     return
        // }

        this.bossBox_di.node.active = true

        this.goldicon.node.active = Role.Instance.isDemonPass != false && bossBox.lv >= maxcfg.BossBoxLv  //如果购买了恶魔通行证,并且已满级了显示金币图标
        this.normalIcon.node.active = !(this.goldicon.node.active)

        let everylvsoulCnt = tab.Data.GetKeyValue_ConfigTable().BossBoxEveryLvNeedSoul

        if(bossBox.nextDayUnLockLv >= 0 && bossBox.nextDayUnLockLv <= bossBox.lv) {
            let nextlv = Math.min(bossBox.nextDayUnLockLv, bossBox.lv+1, maxcfg.BossBoxLv)
            let bossboxcfg = tab.Data.BossBoxTableByID.getValue(nextlv)
            if(bossboxcfg){
                this.normalIcon.setTexture(bossboxcfg.indexIcon)
            }
            this.bossBoxLv.string = String( nextlv )
            let exp = bossBox.exp + everylvsoulCnt * Math.max((bossBox.lv - bossBox.nextDayUnLockLv + 1), 0)
            this.bossBoxPro.progress = exp / everylvsoulCnt
            this.bossPointL.string = `${exp}/${everylvsoulCnt}`
        } else {
            let bossboxcfg = tab.Data.BossBoxTableByID.getValue(Math.min(maxcfg.BossBoxLv, bossBox.lv+1))
            if(bossboxcfg){
                this.normalIcon.setTexture(bossboxcfg.indexIcon)
            }
            if(bossBox.lv < maxcfg.BossBoxLv){
                this.bossBoxLv.string = String( Math.min(bossBox.lv+1, maxcfg.BossBoxLv) )
                let exp = bossBox.exp  //+ everylvsoulCnt * Math.max((bossBox.lv - bossBox.nextDayUnLockLv + 1), 0)
                this.bossBoxPro.progress = exp / everylvsoulCnt
                this.bossPointL.string = `${exp}/${everylvsoulCnt}`
            } else {
                this.bossBoxLv.string =  String( maxcfg.BossBoxLv)
                if(Role.Instance.isDemonPass == false){
                    this.bossBoxPro.progress = 1
                    this.bossPointL.string = `${everylvsoulCnt}/${everylvsoulCnt}`
                } else {
                    if(PassportFunc.getCurGoldbagNumber() < tab.Data.GetKeyValue_ConfigTable().BossBoxMaxGoldLimit){
                        this.bossBoxPro.progress = (bossBox.exp%everylvsoulCnt) / everylvsoulCnt
                        this.bossPointL.string = `${bossBox.exp%everylvsoulCnt}/${everylvsoulCnt}`
                    } else {
                        this.bossBoxPro.progress = 1
                        this.bossPointL.string = `${everylvsoulCnt}/${everylvsoulCnt}`
                    }
                }
            }
        }
        return true;

        // if(bossBox.nextDayUnLockLv < 0)
        // {//所有宝箱在时间上都已解锁
        //     this.bossBoxLv.string = String( Math.min(bossBox.lv + 1, maxcfg.BossBoxLv) )
        //     if(Role.Instance.isDemonPass == false)
        //     {
        //         if(bossBox.lv <= maxcfg.BossBoxLv)
        //         {
        //             this.bossBoxPro.progress = bossBox.exp / everylvsoulCnt
        //             this.bossPointL.string = `${bossBox.exp}/${everylvsoulCnt}`
        //         }
        //         else
        //         {
        //             this.bossBoxPro.progress = 1
        //             this.bossPointL.string = `${everylvsoulCnt}/${everylvsoulCnt}`
        //         }
        //     }
        //     else
        //     {
        //         if(MainsceneBossBox.getCurGoldbagNumber() < tab.Data.GetKeyValue_ConfigTable().BossBoxMaxGoldLimit)
        //         {
        //             this.bossBoxPro.progress = (bossBox.exp%everylvsoulCnt) / everylvsoulCnt
        //             this.bossPointL.string = `${bossBox.exp%everylvsoulCnt}/${everylvsoulCnt}`
        //         }
        //         else
        //         { 
        //             this.bossBoxPro.progress = 1
        //             this.bossPointL.string = `${everylvsoulCnt}/${everylvsoulCnt}`
        //         }
        //     }
        // }
        // else
        // {
        //     if(bossBox.nextDayUnLockLv <= bossBox.lv)
        //     {//时间解锁慢于灵魂值解锁
        //         this.bossBoxLv.string = String( Math.min(bossBox.nextDayUnLockLv, bossBox.lv+1, maxcfg.BossBoxLv) )
        //         let exp = bossBox.exp + everylvsoulCnt * Math.max((bossBox.lv - bossBox.nextDayUnLockLv + 1), 0)
        //         this.bossBoxPro.progress = exp / everylvsoulCnt
        //         this.bossPointL.string = `${exp}/${everylvsoulCnt}`
        //     }
        //     else
        //     {
        //         if(bossBox.lv <= maxcfg.BossBoxLv)
        //         {
        //             this.bossBoxPro.progress = bossBox.exp / everylvsoulCnt
        //             this.bossPointL.string = `${bossBox.exp}/${everylvsoulCnt}`
        //         }
        //         else
        //         {
        //             this.bossBoxPro.progress = 1
        //             this.bossPointL.string = `${everylvsoulCnt}/${everylvsoulCnt}`
        //         }
        //     }
        // }       
    }

    timeCountDown(dt){
        this.gift_dis24lefttime--
        let lefttime:number = this.gift_dis24lefttime
        if(lefttime <= -1){
            this.unlock_node.active = false
            //重新请求下首领宝箱的信息,用来刷新界面
            let param3 = new proto.Msg_BossBoxInfoReq()
            Net.Send(proto.Ptl.BossBoxInfoReq, param3)

            this.unschedule(this.timeCountDown)
            return
        }

        lefttime = lefttime < 0 ? 0 :lefttime
        setTimeTXT(this.timeleft, lefttime)
    }

    playScaleAct(){
        if(this.bossBox_di){
            this.node.runAction(cc.sequence(cc.scaleTo(0.15, 1.5, 1.5), cc.scaleTo(0.4, 1, 1), null));
        }

        this.initBossBoxInfo()  //z战斗获得灵魂之后更新进度条
    }

    playFlash() {
            if (this.sk_cup){
                this.sk_cup.setAnimation(0, "idle", false);
                this.sk_cup.setCompleteListener(()=>{
                    Role.Instance.AddShanDian = 0;
                });
            }
    }

    start () {

    }
}
