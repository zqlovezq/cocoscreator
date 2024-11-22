/*
 * @Descripttion: 分享按钮
 */

import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getServerUtcTime, ShowTipsOfCustomString } from "../Utils/GameUtils";
import SdkManager from "../Utils/SdkManager";
import { isValidObj, kNoneString, kThreeNumber, kZeroNumber, SharePointEventReported } from "./CommonInterface";
import MainMessage from "./MainMessage";
import ManagerShareType from "./ManagerShareType";
import Role from "./Role";
import { Native2JsInterface } from "./Native2JsInterface";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShareBtnModel extends cc.Component {

    @property(cc.Button)
    btn_share: cc.Button = null; /*  */

    @property(cc.Label)
    lbl_diamond_count: cc.Label = null; /*  */

    private _share_type: number;
    private _share_icon: string;
    private _share_title: string;
    private _background_time: number = 0;
    private _bClickShareBtn: boolean = false;
    private _room_id: number = 0;

    /*  */
    onLoad () {
        this.btn_share.node.on("click", this.onClickShare, this);
        cc.game.on(cc.game.EVENT_SHOW, function () {
            //没有点击过分享按钮，就pass 或者是腾讯优选原生端也pass【接入微信分享有回调】
            if(!this._bClickShareBtn || SdkManager.Instance.getChannelType() == tab.ChannelType.ChannelType_Tencent_youxuan){
                return;
            }

            let diff = getServerUtcTime() - this._background_time;
            if(!CC_PREVIEW){
                if(diff >= kThreeNumber){
                    this.sendShareRewardMsg();
                }else{
                    this.randomGeneratorTips();
                }
                this._bClickShareBtn = false;
            }
        }, this);

        cc.game.on(cc.game.EVENT_HIDE, function () {
            if(!CC_PREVIEW){
                this._background_time = getServerUtcTime();
            }
        }, this);

        //监听腾讯优选分享的结果消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyWxShareResult, (param: any)=>{
            let ret = (param as number);
            if(kZeroNumber == ret){
                this.sendShareRewardMsg();
            } else {
                /* zhibo-S @20230519 这里会导致分享后弹出两个Tips，"分享失败，请您换一个群尝试",和"注意！请分享到不同的群" */
                //this.randomGeneratorTips(); 
                /* zhibo-E @20230519 这里会导致分享后弹出两个Tips，"分享失败，请您换一个群尝试",和"注意！请分享到不同的群" */
            }
        }, this);
    }

    start () {

    }

    /*  */
    public initData(type: number, roomID:number=0){
        this._share_type = type;
        let tabData = tab.Data.ShareTypeTableByType.getValue(type);
        if(isValidObj(tabData)){
            //this.lbl_diamond_count.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${tabData.DiamondCount}`;
            let list = tab.Data.GetKeyValue_ConfigTable().BattleWinShareReward.split("|")
            this.lbl_diamond_count.string = `${list[2]}`; /* 策划把分享的奖励货币改成了从ConfigTable.xlsx读取BattleWinShareReward字段了 */
            this._share_icon  = tabData.IconPath;
            this._share_title = tabData.Title;
        }
        this._room_id = roomID;
    }

    /*  */
    private randomGeneratorTips(){
        /* zhibo-S @20230519 删除掉所有分享后的Tips */
        // let index =  Math.floor(Math.random() * tab.Data.ShareResultTipsTable.length)
        // let cfg = tab.Data.ShareResultTipsTableByID.getValue(index)
        // if(cfg){
        //     ShowTipsOfCustomString(cfg.Tips);
        // }
        /* zhibo-E @20230519 删除掉所有分享后的Tips */
    }

    /* 获取分享描述 */
    private getShareDesc(){
        switch(this._share_type){
            case tab.SharedType.SharedType_PVP: /* 对战分享 */
                return "pvp_share";
            
            case tab.SharedType.SharedType_WinShare: /* 对战胜利分享 */
                return "win_share";

            case tab.SharedType.SharedType_PVE: /* 合作模式分享 */
                return "pve_share";

            case tab.SharedType.SharedType_PullCard: /* 抽卡分享 */
                return "pull_card_share";

            case tab.SharedType.SharedType_FriendInvite: /* 好友邀请分享 */
                return "friend_invite"; /* TODO: 这个文字不知道具体应该是什么，暂时先没管，需要问运维人员 */
        }
    }

    /*  */
    private onClickShare(){
        if(CC_PREVIEW){
            if(tab.SharedType.SharedType_WinShare == this._share_type){
                this.sendShareRewardMsg();
                return;
            }
        }

        this._bClickShareBtn = true;
        //上报打点数据
        //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.ClickShareFirst);/* zhibo-@20230410 for <删除打点> */

        let shareDesc    = this.getShareDesc();
        let jumpURL      = kNoneString; /* 需要处理 */
        let shareTabData = tab.Data.ShareTypeTableByType.getValue(this._share_type);
        
        if(isValidObj(shareTabData)){
            jumpURL = shareTabData.JumpUrl;
        }
        SdkManager.Instance.ShareToFriend(()=>{
                SharePointEventReported(this._share_type, shareDesc);
            },
            Role.Instance.RoleData.id, 
            Role.Instance.RoleData.name, 
            Role.Instance.RoleData.level, 
            Role.Instance.RoleData.createRoleUTC, 
            this._share_icon,   /*  */
            this._share_title,  /*  */
            "",                 /*  */
            jumpURL,
            false,
            "&room_id="+this._room_id);/* zhibo+@20230516 分享一个字符串，把自己现在的房间号带上 */
    }

    /*  */
    private sendShareRewardMsg(){
        if(tab.SharedType.SharedType_WinShare == this._share_type){
            ManagerShareType.getInstance().saveShareState(this._share_type, true);
            let param       = new proto.Msg_AfterSharedRewardReq()
            param.shareType = this._share_type;
            Net.Send(proto.Ptl.AfterSharedRewardReq, param);
            this.node.active = false;
        }
    }
}
