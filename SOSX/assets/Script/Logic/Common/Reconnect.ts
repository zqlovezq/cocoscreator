
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { EXTRA_MSG, Net } from "../../Protocol/Net";
import { FightLoader } from "../Fight/FightLoader";
import FightMsgManager from "../Fight/FightMsgManager";
import GuideController from "../Guide/GuideController";
import LoginData from "../Login/LoginData";
import PreventIndulge from "../Login/PreventIndulgeNode";
import { LoadResAsync, LoadScene, showPopLayer, ShowTips } from "../Utils/GameUtils";
import SdkManager from "../Utils/SdkManager";
import Role from "./Role";

const {ccclass, property} = cc._decorator;
declare let window: Window & {
    kick_off:any;
}

@ccclass
export default class Reconnect extends cc.Component {
    protected static _ins:Reconnect = undefined
    public static async create():Promise<Reconnect> {
        if(Reconnect._ins === undefined) {
            Reconnect._ins = null
            let res:cc.Prefab = await LoadResAsync('prefab/Reconnet', cc.Prefab)
            if(res) {
                res.addRef()
                let reconnectNode = cc.instantiate(res)
                Reconnect._ins = reconnectNode.getComponent(Reconnect);
                reconnectNode.name = "Reconnect"
                reconnectNode.zIndex = cc.macro.MAX_ZINDEX;
                cc.game.addPersistRootNode(reconnectNode)
                reconnectNode.active = false
            }

            // //加一个调试用的断线重连
            // if(CC_PREVIEW) {
            //     let disconnect = new cc.Node().addComponent(cc.Label)
            //     disconnect.string = "disconnect"
            //     disconnect.node.on(cc.Node.EventType.TOUCH_END, ()=>{
            //         cc.log('test disconnect')
            //         Net.Disconnect()
            //     })
            //     disconnect.node.setPosition(540, 120)
            //     cc.game.addPersistRootNode(disconnect.node)
            // }
        }
        return Reconnect._ins
    }

    @property(cc.Node)
    nodeConfirm:cc.Node = null;

    @property(cc.Node)
    nodeReconnecting:cc.Node = null;

    onLoad () {
        Net.listenExtraMsg(EXTRA_MSG.EXTRA_MSG_CONNCET, ()=>{
            if(this.isEnable()) {
                cc.log('ws connected')
                //发送登录协议
                let msg = new proto.Msg_LoginReq()
                msg.uid = LoginData.Instance.uid
                msg.token = LoginData.Instance.token
                msg.group = LoginData.Instance.loginGroup;
                msg.PlatID = cc.sys.OS_IOS ? 0 : ((cc.sys.os == cc.sys.OS_ANDROID) ? 1 : 2);
                Net.Send(proto.Ptl.LoginReq, msg)
            }
        }, this)

        /*  */
        Net.listenExtraMsg(EXTRA_MSG.EXTRA_MSG_CLOSE, ()=>{
            if(this.isEnable()) {
                cc.log(`Reconnect detect: EXTRA_MSG_CLOSE`)
                if(PreventIndulge.bPreventIndulge) {
                    FightMsgManager.Clear();
                    LoadScene('LoginScene', (error:Error, scene:cc.Scene)=>{
                        showPopLayer("prefab/PreventIndulgeNode")
                 
                    })
                } else {
                    this.node.active = true;
                    this.reset()
                }
            }
        }, this)

        /* 登录 */
        Net.listenProtocol(proto.Ptl.LoginRsp, (buffer, ptl)=>{
            if(this.isEnable()) {
                let msg = proto.Msg_LoginRsp.decode(buffer)
                cc.log("LoginRsp (登录) msg: " + JSON.stringify(msg));
                if (msg.result == proto.Msg_LoginRsp.ErrorCode.Succeed) {
                    cc.log("Msg_LoginRsp Succeed")
                    this.node.active = false
                    if(msg.isFighting) {
                        if(cc.director.getScene().name == "ChessFightScene") {
                            console.log("$$$$$$$$$$$$$$$$$$$$$$$$--- LoginRsp ChessFightScene: ", cc.director.getScene().name);
                            //战斗重连
                            FightMsgManager.Clear();
                            FightMsgManager.Instance.reconnectFight().then(async recRsp=>{
                                if(recRsp.result == proto.CommonErrorCode.Succeed) {
                                    let readyRsp = await FightMsgManager.Instance.readyFight(recRsp.fightInstanceId)
                                    if (readyRsp.result == proto.CommonErrorCode.Succeed) {
                                        Net.pushLoaclMessage(LOCAL_MESSAGE.RequestSnapshot)
                                        return
                                    }
                                }
                                
                                //重连失败，返回主界面
                                LoadScene('MainScene')
                            })
                        } else {
                            FightLoader.Instance.ReconnectPvP()
                        }
                    } 
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect)
                } else {
                    cc.log("Msg_LoginRsp Failed")
                    this.reset()
                }
            }
        }, this)

        /*  */
        Net.listenProtocol(proto.Ptl.SyncRole, buffer=>{
            if(this.isEnable()) {
                cc.log('Recv SyncRole ~')
                SdkManager.Instance.CheckClientUpdate()
                let msg = proto.Msg_SyncRole.decode(buffer)
                cc.log("SyncRole (角色同步) msg: " + JSON.stringify(msg));
                Role.Purge();
                Role.Instance.init(msg.data);
                // /*  TODO: zhibo+@20230522 for <登录数据中如果有房间数据,那么就应该跳到等待别人加入的页面去> */
                // if(0 != msg?.data.RoomID && 0 != msg?.data.RoomCreateTime){
                //     let dbg  = 100;
                // }
            }
        }, this);
    }

    start () {
        this.reset()
    }

    protected reset() {
        this.nodeConfirm.active = true
        this.nodeReconnecting.active = false;
    }

    onClickReconnet() {
        if(window.kick_off === true) {
            ShowTips('BannedTemporarily')   
            return
        }
        if(LoginData.Instance.gatewayAddrs.length == 0) {
            cc.error("no gateway addr")
            return
        }
        Net.Connect(`${LoginData.Instance.gatewayAddrs[0]}`)

        this.nodeConfirm.active = false
        this.nodeReconnecting.active = true;
    }

    onClickCancel() {
        this.node.active = false
        LoadScene('LoginScene')
    }

    isEnable(): boolean {
        if(cc.director.getScene().name == "LoginScene") {
            return false;
        }
        return true;
    }

}
