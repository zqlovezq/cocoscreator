import { _decorator, Component, Label, Node } from 'cc';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { ItemData } from '../item/ItemData';
import { Global } from '../../../Global';
import { Func } from '../../utils/Func';
import { RoleData } from '../role/RoleData';
import { BattleMainDataControl } from './battle/BattleMainDataControl';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { proto } from 'client_protocol';
import { JP37Channel } from '../../../channel/jp37/JP37Channel';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
// import { JP37Channel } from '../../../channel/jp37/JP37Channel';
const { ccclass, property } = _decorator;

//弹窗类型：1-GS弹窗；2-精彩事件；12-新手福利；13-周一福利;14-社媒弹窗；15-问卷星
enum Jp37PopBtnType {
    gsPop = 1,
    eventPop = 2,
    sojump = 15
}

const jp37RedKey = "jp37btn_red_"

/**
 * 主界面sdk公共按钮
 */
@ccclass('Community_list')
export class Community_list extends ComponentBase {
    @property(Node)
    community_layout: Node = null

    @property(Node)
    communityBtnNode: Node = null;
    @property(Node)
    inspireBtnNode: Node = null;
    @property(Node)
    twitter_btnNode: Node = null;
    @property(Node)
    discord_btnNode: Node = null;

    @property(Node)
    btn_15: Node = null //问卷星
    @property(Node)
    btn_2: Node = null //精彩事件
    @property(Node)
    btn_1: Node = null//大客户

    protected onLoad(): void {
        super.onLoad()
        this.community_layout.children.forEach((item: Node) => {
            item.active = false
        })
    }

    protected start(): void {
        if (!Global.isReview) {
            if (ChannelMgr.isP8) {
                this.communityBtnNode.active = true;
            }

            if (ChannelMgr.isJp37 || ChannelMgr.isDevChannel) {
                this.twitter_btnNode.active = true;
                this.refresh37Btn()
            }
            this.updateInspireBtn();
            
        }
    }

    register(): void {
        EventMgr.onLocal(LocalEvent.updateInspireBtn, this.updateInspireBtn, this)
        EventMgr.onMsg(proto.Ptl.Mobile37PopupsPush, this.s2c_Mobile37PopupsPush, this)
    }

    s2c_Mobile37PopupsPush(msg: proto.Msg_Mobile37PopupsPush) {
        //更新3个按钮
        this.refresh37Btn()
    }

    refresh37Btn(){
        this.unscheduleAllCallbacks()
        if (Global.isReview){
            return
        }
        this.btn_15.active = this.btn_2.active = this.btn_1.active = false
        let pops = (ChannelMgr.getChannel() as JP37Channel).popBtns
        if (pops) {
            for (const iterator of pops) {
                let v = iterator[1]
                let btn = this["btn_" + v.type]
                if (btn) {
                    btn.active = true
                    this.checkBtnRed(v)
                }
            }
        }

        this.schedule(() => { //5分钟刷新一次
            this.refresh37Btn()
        },60*5)
    }

    updateInspireBtn() {
        if (Global.isReview){
            this.inspireBtnNode.active = false;
            return
        }
        if (BattleMainDataControl.ins.getIsPasstStageByStageId(503)) {
            let isComment = Number(Func.getItem("isComment_" + RoleData.ins.id));
            if (!isComment) {
                this.inspireBtnNode.active = true;
            } else {
                this.inspireBtnNode.active = false;
            }
        } else {
            this.inspireBtnNode.active = false;
        }
    }

    onClickCommunity() {
        console.log("js调用打开网页")
        if (ChannelMgr.channelTab) {
            ChannelMgr.openURL(ChannelMgr.channelTab.FaceBookUrl);
        } else {
            ChannelMgr.openURL("https://www.facebook.com/cjxd.re.tw/")
        }
    }

    onTwitterClick() {
        // ChannelMgr.openURL("https://x.com/pipiyuusya/")
        UIMgr.ins.show({ viewName:ViewName.CommunityPop})
    }

    onClickSojump() {
        this.onOpenWebView(Jp37PopBtnType.sojump)
    }

    onClickEvent() {
        this.onOpenWebView(Jp37PopBtnType.eventPop)
    }

    onClickClient() {
        this.onOpenWebView(Jp37PopBtnType.gsPop)
    }

    onOpenWebView(type: number) {
        let pops = (ChannelMgr.getChannel() as JP37Channel).popBtns
        if (pops) {
            let v = pops.get(type)
            if (v) {
                ChannelMgr.openActionWebView(v.url)
                Func.setItem(jp37RedKey + v.type, 1)
                this.checkBtnRed(v)
            }
        }
    }

    checkBtnRed(dd: proto.IMobile37PopupInfo) {
        let btn = this["btn_" + dd.type]
        if (btn) {
            btn.getChildByName("redNode").active = dd.red && Func.checkInt(Func.getItem(jp37RedKey + dd.type)) == 0
        }
    }
}


