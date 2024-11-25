import { _decorator, log } from 'cc';
import { tab } from '../../Table/table_gen';
import { RoleData } from './role/RoleData';
import { proto } from 'client_protocol';
import { Net } from '../net/Net';
import { ShowTips } from '../mgr/UIMgr';
import { ChannelMgr } from '../../channel/ChannelMgr';
import { Func } from '../utils/Func';
import { P8PostEventName } from '../../channel/ChannelDefine';
import { OpenFunctionMgr } from '../../Common/component/OpenFunctionMgr';
import { LangMgr } from '../mgr/LangMgr';
export class AdMgr {
    private static instance: AdMgr = null;
    private _map: Map<tab.AdType, number> = new Map();
    public static get ins() {
        if (this.instance == null) {
            this.instance = new AdMgr();
        }
        return this.instance;
    }

    /** 是否可展示广告 */
    isCanAd: boolean = false
    /** 是否已初始化sdk */
    isHasSdk: boolean = false
    /** 广告播放完成 */
    adCompleteCb: Function
    init() {
        const advData = RoleData.ins.adv.data;
        for (let i = 0; i < advData.length; i++) {
            this._map.set(advData[i].type, advData[i].count);
        }
    }

    /** 初始化广告sdk */
    initSdk() {
        if (this.isHasSdk) return
        this.isHasSdk = true
        ChannelMgr.initRewardedAd({}, (retData: any) => {
            if (retData) {
                retData.code = Func.checkInt(retData.code)
                if (retData.code == 0) { //用户应该被奖励
                    this.adCompleteCb && this.adCompleteCb({ code: 0 })
                } else if (retData.code == 1) { //广告初始化成功
                } else if (retData.code == 2) { //广告加载完毕
                    this.isCanAd = true
                }
            }
        })
    }


    private showAD(callBack: Function) {
        this.isCanAd = false
        this.adCompleteCb = callBack
        ChannelMgr.showRewardedAd()
    }

    refreshData(data: proto.IAdvWatchData) {
        this._map.set(data.type, data.count);
    }
    /**
     * 播放视频广告
     * @param type 广告类型
     * @param callBack 成功回调函数
     *  @param isSendMsg 是否发送观看广告成功消息
     */
    playVideoAd(type: tab.AdType, callBack: Function, isSendMsg: boolean = false,failCallback:Function = null) {
        //处理sdk播放逻辑 
        let maxCount = this.getAdCountMaxByType(type);
        if (maxCount > -1 && this.getAdCountByType(type) >= this.getAdCountMaxByType(type)) {
            //ShowTips("廣告次數不足");
            ShowTips(LangMgr.getLab("Tips_ad_1"));
            failCallback && failCallback()
            return;
        }
    
        //观看成功逻辑
        let success = () => {
            if (isSendMsg) {
                let msg = new proto.Msg_WatchAdReq();
                msg.type = type;
                Net.Send(proto.Ptl.WatchAdReq, msg);
            }
            if (callBack) {
                callBack();
            }
        }
        if(OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SkipAd)){
            success();
            log("----------月卡跳过广告---------");
            return;
        }


        if (this.isCanAd) {
           ChannelMgr.postEvent(P8PostEventName.ad_click)
            this.showAD((retData: any) => {
                console.log("广告播放完成、失败", retData.code)
                if (retData.code == 0) {
                    success(); //观看成功
                    ChannelMgr.postEvent(P8PostEventName.ad_Impression);
                } else {
                    ShowTips("ad error" + retData.code)
                    failCallback && failCallback()
                }
            })
        } else {
            console.log("sdk广告加载未成功")
            failCallback && failCallback()
        }

    }
    /* 根据广告类型返回 最大的广告次数和剩余的广告次数 */
    getAdCountByType(type: tab.AdType) {
        return this._map.get(type) ? this._map.get(type) : 0;
    }
    getAdCountMaxByType(type: tab.AdType) {
        const AdTab = tab.getData().AdvertPosTableByAdType.getValue(type);
        return AdTab.AdvertCount;
    }
}


