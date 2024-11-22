/*
 * @Descripttion: 微信好友排行榜模板
 */

import { tab } from "../../Table/table_gen";
import { kOneNumber, kTwoNumber, SharePointEventReported } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SdkManager from "../Utils/SdkManager";
import WxRankView from "./WxRankView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WeChatRankingTemplate extends cc.Component {
    
    @property(cc.Node)
    node_wxSubContextView: cc.Node = null;

    @property(cc.Button)
    btn_invitation: cc.Button = null;

    @property(cc.Sprite)
    spr_loading_bg: cc.Sprite = null;

    @property(cc.Node)
    node_permission: cc.Node = null;

    @property(cc.Label)
    lbl_permission: cc.Label = null;

    @property(cc.Node)
    node_switch_arrow: cc.Node = null;

    private _scheme_idx: number = kTwoNumber;

    onLoad () {
        this.node_wxSubContextView.active = true;
        this.btn_invitation.node.active   = false;
        this.node_permission.active       = false;
        this.btn_invitation.node.on("click", this.onClickInvitation, this);

        this._scheme_idx = tab.Data.GetKeyValue_ConfigTable().WeChatRankSchemeIdx;

        if(cc.sys.platform !== cc.sys.WECHAT_GAME){
            this.node_switch_arrow.active = false;
        } else {
            if(kTwoNumber == this._scheme_idx){

                this.node_switch_arrow.active     = true;
            } else {
                this.node_wxSubContextView.active = true;
                this.node_switch_arrow.active     = false;
            }
        }
    }

    public initData(eventKey: string){
        if(cc.sys.platform !== cc.sys.WECHAT_GAME){
            return;
        }
        
        this.spr_loading_bg.node.active = true;
        
        if(kOneNumber == this._scheme_idx){
            /************** 第一套方案 ******************/
            SdkManager.Instance.PostSubContextMsg(eventKey);
        } else {
            /************** 第二套方案 ******************/
            this.node_wxSubContextView.getComponent(WxRankView).initData(eventKey);
        }

        this.loading();
    }

    /* loading动画 */
    private loading(){
        this.scheduleOnce(()=>{
            //this.btn_invitation.node.active = true;
            this.spr_loading_bg.node.active = false;
        }, 2);
    }

    /* 创建微信授权按钮 【应该用不到】 */
    private createAuthorizeBtn()
    {
          let richTxtSize = this.lbl_permission.node.getContentSize();
          let btnSize = cc.size(richTxtSize.width + 10, richTxtSize.height + 10);
          let frameSize = cc.view.getFrameSize();
          let winSize = cc.director.getWinSize();
          let left = (winSize.width * 0.5 + this.lbl_permission.node.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
          let top = (winSize.height * 0.5 - this.lbl_permission.node.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
          let width = btnSize.width / winSize.width * frameSize.width;
          let height = btnSize.height / winSize.height * frameSize.height;
          SdkManager.Instance.CreateAuthorizeBtn(left, top, width, height);
    }

    /*  */
    private onClickInvitation(){
        SdkManager.Instance.ShareToFriend(  
                                            ()=>{
                                                SharePointEventReported(tab.SharedType.SharedType_RankingList, "rankinglist_share");
                                            },
                                            Role.Instance.RoleData.id, 
                                            Role.Instance.RoleData.name, 
                                            Role.Instance.RoleData.level, 
                                            Role.Instance.RoleData.createRoleUTC, 
                                            tab.Data.GetKeyValue_ConfigTable().ShareGamePngURL, 
                                            tab.Data.GetKeyValue_ConfigTable().ShareGameTxt);
    }
}
