import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import Role from "../Common/Role";
import LoadingBountyPrefab from "../Loading/LoadingBountyPrefab";

export default class FightMsgManager {

    protected listened: boolean = false;

    public startTimestamp: number = 0; //收到服务器ReadyRsp的时间戳，算作战斗开始时间戳
    protected fightInstaneId: number = 0;

    public PlayerTag: number = 0;
    public myFightData: proto.IFightData = null;
    public otherFightData: proto.IFightData = null;
    public allFightData: proto.IBountyFightData[] = null;

    public fightEnd: proto.IMsg_FightEnd = null;
    public BountyFightEnd:proto.Msg_BountyRewardPush = null;
    public construtionPhase: proto.IMsg_ConstructionPhase = null;
    public isReconnect: boolean = false; //是否为重连的战斗
    public ChessFightType: proto.FightType = proto.FightType.PvP

    public get FightInstanceID() {
        return this.fightInstaneId;
    }

    private static _Instance: FightMsgManager = null;

    public static get Instance() {
        if (FightMsgManager._Instance == null) {
            FightMsgManager._Instance = new FightMsgManager();
        }
        return FightMsgManager._Instance;
    }

    public static Clear() {
        if (FightMsgManager._Instance != null) {
            FightMsgManager._Instance.unlistenMsg();
        }
        FightMsgManager._Instance = null;
    }

    listenMsg() {
        if (this.listened) {
            return
        }
        this.listened = true
        Net.listenProtocol(proto.FightPtl.ConstructionPhase, this.onConstructionPhase, this);
    }

    unlistenMsg() {
        Net.unlistenTarget(this)
    }

    matchFight(fightType: proto.FightType): Promise<proto.Msg_StartMatchFightRsp> {
        return new Promise<proto.Msg_StartMatchFightRsp>(resolove => {
            cc.log("发送匹配协议") //发送匹配协议
            let req = new proto.Msg_StartMatchFightReq()
            req.type = fightType;
            Net.Send(proto.Ptl.StartMatchFightReq, req); /* 匹配pvp战斗 */

            Net.unlistenProtocol(proto.Ptl.StartMatchFightRsp)

            /*  */
            Net.listenProtocol(proto.Ptl.StartMatchFightRsp, (buffer, ptl) => {
                let msg = proto.Msg_StartMatchFightRsp.decode(buffer)
                cc.log("StartMatchFightRsp(战斗匹配) : msg " + JSON.stringify(msg))
                if (msg.result == 0) {
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_HideCancelMachFightBtn, null)
                }
                //监听一下战斗结束的协议
                if(msg.type!==proto.FightType.Bounty){
                    this.myFightData = msg.myData;
                    this.otherFightData = msg.otherData;
                    Net.unlistenProtocol(proto.FightPtl.FightEnd)
                    Net.listenProtocol(proto.FightPtl.FightEnd, this.onFightEnd, this)
                }else{
                    this.allFightData = msg.allData;
                    Net.unlistenProtocol(proto.Ptl.BountyRewardPush)
                    Net.listenProtocol(proto.Ptl.BountyRewardPush, this.onBountyFightEnd, this)
                }
                this.ChessFightType = fightType;
                resolove(msg)
            }, this)

            if(fightType === proto.FightType.Bounty){
                Net.unlistenProtocol(proto.Ptl.BountyPlayerNumberChangedPush)

                /*  */
                Net.listenProtocol(proto.Ptl.BountyPlayerNumberChangedPush, (buffer, ptl)=>{
                    let msg = proto.Msg_BountyPlayerNumberChangedPush.decode(buffer)
                    console.log("BountyPlayerNumberChangedPush=",msg);
                    if(msg.PlayerNumber>LoadingBountyPrefab.MatchPeopleCount){
                        LoadingBountyPrefab.MatchPeopleCount = msg.PlayerNumber;
                    }
                }, this)
            }
        })
    }

    /* 等待匹配战斗【用于联盟中的战斗邀请】 */
    waitingMatchFight(fightType: proto.FightType): Promise<proto.Msg_StartMatchFightRsp> {
        return new Promise<proto.Msg_StartMatchFightRsp>(resolove => {
            Net.unlistenProtocol(proto.Ptl.StartMatchFightRsp)
            Net.listenProtocol(proto.Ptl.StartMatchFightRsp, (buffer, ptl) => {
                let msg = proto.Msg_StartMatchFightRsp.decode(buffer)
                cc.log("StartMatchFightRsp (匹配pvp战斗) msg: " + JSON.stringify(msg));
                if (msg.result == 0) {
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_HideCancelMachFightBtn, null)
                }
                this.myFightData = msg.myData
                this.otherFightData = msg.otherData;
                this.allFightData = msg.allData;
                this.ChessFightType = fightType;
                resolove(msg)

                //监听一下战斗结束的协议
                if(msg.type!==proto.FightType.Bounty){
                    Net.unlistenProtocol(proto.FightPtl.FightEnd)
                    Net.listenProtocol(proto.FightPtl.FightEnd, this.onFightEnd, this)
                }else{
                    Net.unlistenProtocol(proto.Ptl.BountyRewardPush)
                    Net.listenProtocol(proto.Ptl.BountyRewardPush, this.onBountyFightEnd, this)
                }
            }, this)
        });
    }

    reconnectFight(): Promise<proto.Msg_ReconnetFightRsp> {
        this.isReconnect = true;
        return new Promise<proto.Msg_ReconnetFightRsp>(resolove => {
            Net.Send(proto.Ptl.ReconnetFightReq, new proto.Msg_ReconnetFightReq())
            Net.unlistenProtocol(proto.Ptl.ReconnetFightRsp)
            Net.listenProtocol(proto.Ptl.ReconnetFightRsp, (buffer, ptl) => {
                let msg = proto.Msg_ReconnetFightRsp.decode(buffer)
                cc.log("ReconnetFightRsp (战斗重连) msg: " + JSON.stringify(msg));
                //监听一下战斗结束的协议
                if(msg.type!==proto.FightType.Bounty){
                    this.myFightData = msg.myData;
                    this.otherFightData = msg.otherData;
                    Net.unlistenProtocol(proto.FightPtl.FightEnd)
                    Net.listenProtocol(proto.FightPtl.FightEnd, this.onFightEnd, this)
                }else{
                    this.allFightData = msg.allData;
                    Net.unlistenProtocol(proto.Ptl.BountyRewardPush)
                    Net.listenProtocol(proto.Ptl.BountyRewardPush, this.onBountyFightEnd, this)
                }
                this.ChessFightType = msg.type;
                resolove(msg)
            }, this)
        })
    }

    readyFight(fightInstanceId: number) {
        this.listenMsg(); //开始监听协议

        return new Promise<proto.Msg_FightReadyRsp>(resolove => {
            this.fightInstaneId = fightInstanceId;

            //发送准备好了的协议
            let req = new proto.Msg_FightReadyReq();
            req.roleId = Role.Instance.ID
            req.fightInstanceId = fightInstanceId
            Net.Send(proto.FightPtl.FightReadyReq, req);

            Net.unlistenProtocol(proto.FightPtl.FightReadyRsp)
            Net.listenProtocol(proto.FightPtl.FightReadyRsp, (buffer, ptl) => {
                let msg = proto.Msg_FightReadyRsp.decode(buffer)
                cc.log("FightReadyRsp (开始战斗) msg: " + JSON.stringify(msg));
                //记录一下战斗开始的时钟
                if (msg.result == proto.CommonErrorCode.Succeed) {
                    this.startTimestamp = cc.director.getTotalTime() - msg.timestamp;
                    this.PlayerTag = msg.playerTag;
                }

                // this.testTTL(5);
                resolove(msg)
            }, this)
        })
    }

    onFightEnd(buffer: Uint8Array) {
        let msg = proto.Msg_FightEnd.decode(buffer)
        this.fightEnd = msg;
        cc.log("onFightEnd (onFightEnd) msg: " + JSON.stringify(msg));
        if (msg) {
            cc.log(`onFightEnd isWin=${msg.isWin}, isSurrender=${msg.isSurrender}`)
            Net.pushLoaclMessage(LOCAL_MESSAGE.RecvFightEnd, msg)
        }
    }
    onBountyFightEnd(buffer: Uint8Array){
        let msg = proto.Msg_BountyRewardPush.decode(buffer)
        this.BountyFightEnd = msg;
        cc.log("onBountyFightEnd (onBountyFightEnd) msg: " + JSON.stringify(msg));
        if (msg) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.RecvBountyFightEnd, msg)
        }
    }
    /*  */
    onConstructionPhase(buffer: Uint8Array) {
        this.construtionPhase = proto.Msg_ConstructionPhase.decode(buffer);
        Net.pushLoaclMessage(LOCAL_MESSAGE.ConstructionPhase, this.construtionPhase);
    }

    //获取战斗实例运行了多长时间，毫秒
    getElapsed(): number {
        return cc.director.getTotalTime() - this.startTimestamp;
    }

    // 请求战斗快照
    requestSnapshot() {
        let req = new proto.Msg_FightSnapshotReq();
        Net.Send(proto.FightPtl.FightSnapshotReq, req);
    }

    // 发送建造阶段结束消息
    sendClientConstructionEnd() {
        let req = new proto.Msg_ClientConstructionEnd();
        Net.Send(proto.FightPtl.ClientConstructionEnd, req);
    }

    // 发送战斗完成消息
    sendClientCombatEnd() {
        let req = new proto.Msg_ClientCombatEnd();
        Net.Send(proto.FightPtl.ClientCombatEnd, req);
    }
}