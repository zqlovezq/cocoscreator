import { _decorator, Component, Label, Node, sp, Sprite } from 'cc';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { Role } from '../../fight/base/obj/role/role/Role';
import { RoleData } from '../role/RoleData';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
const { ccclass, property } = _decorator;

@ccclass('PlayerHeadItem')
export class PlayerHeadItem extends Component {
    @property(Sprite)
    headFrameImg:Sprite=null;
    @property(Sprite)
    headImg:Sprite=null;
    @property(Label)
    levelLab:Label=null;
    @property(Node)
    redPoint:Node=null;
    @property(sp.Skeleton)
    spine:sp.Skeleton=null;
    private headInfo:HeadInfo=null;
    private fromUrl:string = ""
    private mTouchCallBack: Function = null;
    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_END,this.clickHead,this);
        EventMgr.onMsg(proto.Ptl.SetHeadIconRsp, this.on_s2c_SetHeadIconRsp, this)
        EventMgr.onMsg(proto.Ptl.SetHeadFrameRsp, this.on_s2c_SetHeadFrameRsp, this)
        this.updateHeadInfo(RoleData.ins.avatarInfo.headIcon,RoleData.ins.avatarInfo.headFrame)
    }
    on_s2c_SetHeadIconRsp(msg: proto.Msg_SetHeadIconRsp){
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateHeadInfo(msg.headIcon,-1)
        }
    }
    on_s2c_SetHeadFrameRsp(msg: proto.Msg_SetHeadFrameRsp){
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateHeadInfo(-1,msg.headFrame)
        }
    }
    initHeadInfo(info:HeadInfo,from?:string){
        this.headInfo=info;
        if(from){
            this.fromUrl = from;
        }
        if(info.roleInfo){
            if(!info.headFrame){
                info.headFrame=info.roleInfo.headFrame;
            }
            if(!info.headIcon){
                info.headIcon=info.roleInfo.headIcon;
            }
            if(!info.level){
                info.level=info.roleInfo.level;
            }
            // this.levelLab.string=info.level+"";
        }
        if(info.level){
            this.levelLab.string=info.level+"";
        }
        this.updateHeadInfo(info.headIcon,info.headFrame);

    }
    setCloseCallBack(closeFunc: Function) {
        this.mTouchCallBack = closeFunc;
    }
    clickHead(){
        if (this.mTouchCallBack && typeof this.mTouchCallBack == 'function') {
            this.mTouchCallBack();
            return;
        }
        let roleInfoView = null;
        let CheckRoleInfoView = null;
        if(this.headInfo){
            if(this.headInfo.roleInfo){
                if(RoleData.ins.id==this.headInfo.roleInfo.id&&!this.fromUrl){
                    roleInfoView = UIMgr.ins.getView("RoleInfoPop")
                    if(!roleInfoView){
                        UIMgr.ins.show({viewName: ViewName.RoleInfoPop})
                    }
                }else{
                    CheckRoleInfoView = UIMgr.ins.getView("CheckRoleInfoPop")
                    if(!CheckRoleInfoView){
                        UIMgr.ins.show({viewName: ViewName.CheckRoleInfoPop,data:{"info":this.headInfo.roleInfo}})
                    }
                }
            }else if(this.headInfo.roleId){
                if(RoleData.ins.id==this.headInfo.roleId&&!this.fromUrl){
                    roleInfoView = UIMgr.ins.getView("RoleInfoPop")
                    if(!roleInfoView){
                        UIMgr.ins.show({viewName: ViewName.RoleInfoPop})
                    }
                }else{
                    CheckRoleInfoView = UIMgr.ins.getView("CheckRoleInfoPop")
                    if(!CheckRoleInfoView){
                        UIMgr.ins.show({viewName: ViewName.CheckRoleInfoPop,data:{"roleId":this.headInfo.roleId}})
                    }
                }
            }
          
        }
        else{
            roleInfoView = UIMgr.ins.getView("RoleInfoPop")
            if(!roleInfoView){
                UIMgr.ins.show({viewName: ViewName.RoleInfoPop})
            }
        }
       
    }
     /**
     * 刷新头像信息
     */
     updateHeadInfo(headId:number,headFrameId:number){
        if(headId>=0){
            let itemHeadTab = tab.getData().ItemTableById.getValue(headId);
            if(!itemHeadTab){
                itemHeadTab = tab.getData().ItemTableById.getValue(31201);
            }
            this.headImg.setTexture(itemHeadTab.Icon);
        }
       
        if(headFrameId>=0){
            let itemheadFrameTab = tab.getData().ItemTableById.getValue(headFrameId);
            if(!itemheadFrameTab){
                //默认头像框
                itemheadFrameTab=tab.getData().ItemTableById.getValue(32000);
            }
        
            this.headFrameImg.setTexture(itemheadFrameTab.Icon);
        }
        
       
      
     }
  
}
export interface HeadInfo {
	  /** SimpleRole name */
      name?: (string|null);

      /** SimpleRole headIcon */
      headIcon?: (number|null);

      /** SimpleRole headFrame */
      headFrame?: (number|null);

      /** SimpleRole level */
      level?: (number|null);
      roleId?:string;
      roleInfo?:SimpleRoleInfo;
      isTouch?:boolean;

}



