import { DataViewWriter, DataViewReader } from "./DataViewRW";
import { LocalEvent, NetStateEvent } from "../define/LocalEvent";
import { sys, log, director, error, resources, assetManager } from "cc";
import { EventMgr } from "../mgr/EventMgr";
import { proto } from "client_protocol";
import { Global } from "../../Global";
import { ChannelMgr } from "../../channel/ChannelMgr";
import { Func } from "../utils/Func";
import { PREVIEW } from "cc/env";
const MSG_ID_LEN = 2;

declare let WebSocket: WebSocket & any;


export class Net {
    protected static m_Ws: WebSocket = null;
    protected static m_Url: string = null;

    protected static m_RecvCallback: (ptl: number) => void;
    static isReconnect: boolean = false
    static isQuit: boolean = false
    public static Connect(url: string): boolean {
        Net.m_Url = url;
        return Net.Reconnect();
    }

    public static Disconnect(_isReconnect?: boolean, _isQuit?: boolean) {
        if (Net.m_Ws !== null) {
            Net.isReconnect = _isReconnect
            Net.isQuit = _isQuit
            Net.m_Ws.close();
            Net.m_Ws = null;
        }
    }

    public static Reconnect(): boolean {
        if (Net.m_Url === null) {
            return false;
        }

        Net.Disconnect();
        if (sys.isNative && Net.m_Url.startsWith("wss")) {
            // We should pass the cacert to libwebsockets used in native platform, otherwise the wss connection would be closed.\
            Net.m_Ws = new WebSocket(Net.m_Url, [], Net.getWssCacert());
        } else {
            Net.m_Ws = new WebSocket(Net.m_Url);
        }

        Net.m_Ws.binaryType = 'arraybuffer';
        Net.m_Ws.onopen = Net.onOpen.bind(this);
        Net.m_Ws.onclose = Net.onClose.bind(this);
        Net.m_Ws.onerror = Net.onError.bind(this);
        Net.m_Ws.onmessage = Net.onMessage.bind(this);
        return true;
    }

    public static Send(ptl: number, message?: any) {
        if (!Net.m_Ws || Net.m_Ws.readyState !== WebSocket.OPEN) {
            return;
        }
        if (message == null) {
            message = new proto["Msg_" + (proto.Ptl[ptl])]()
        }

        console.log(`===>>> 发送协议=${proto.Ptl[ptl]},参数为=${JSON.stringify(message)}`)
        
        if (Global.isDebug && ChannelMgr.isDevChannel) {
            let str = Func.getItem("test_message")
            if (str == null || str == "") {
                str = []
            } else {
                str = JSON.parse(str)
            }
            str.push({ ptl: ptl, message: JSON.stringify(message) })
            Func.setItem("test_message", JSON.stringify(str))
        }

        //encode
        let buf = message.constructor.encode(message).finish();

        let writer = new DataViewWriter(new ArrayBuffer(buf.length + MSG_ID_LEN));
        writer.setUint16(ptl); //协议号

        //协议内容
        for (var i = 0; i < buf.length; ++i) {
            writer.setInt8(buf[i])
        }
        writer.markEnd();
        if (ptl == proto.Ptl.FinishStageReq && PREVIEW){
            console.error("---------FinishStageReq len",writer.getLen())
        }

        Net.m_Ws.send(writer.getArrayBuffer());
    }

    protected static onOpen(ev: Event) {
        log("onOpen~~~~~" + Net.m_Ws.readyState);
        if (Net.m_Ws.readyState == WebSocket.OPEN) {
            EventMgr.emitNetState(NetStateEvent.CONNCET, NetStateEvent.CONNCET)
        }
    }

    protected static onClose(ev: CloseEvent) {
        log("onClose~~~~~" + ev.reason);
        if (Net.isQuit) {
            Net.isQuit = false
            return
        }
        if (Net.isReconnect) {
            Net.isReconnect = false
            Net.Reconnect()
            return
        }
        // Net.stopSendPing();
        EventMgr.emitNetState(NetStateEvent.CLOSE)
    }

    protected static onError(ev: Event) {
        log("onError~~~~~", ev);
    }

    protected static onMessage(ev: MessageEvent) {
        let reader = new DataViewReader(ev.data)
        if (reader.getLen() < MSG_ID_LEN) {
            //包太小
            error("msg len Error!!!")
            Net.Disconnect();
            return
        }

        let ptl = reader.getUint16();
        if ((proto.Ptl[ptl]) == undefined) {
            console.log("ptl 无法解析", ptl)
            return
        }
        let packagaLen = reader.getLen() - MSG_ID_LEN
        let unit8 = new Uint8Array(reader.getBuffer(), reader.getOffset() + reader.getPos(), packagaLen)
        let pb = proto["Msg_" + (proto.Ptl[ptl])].decode(unit8)
        pb.error = pb.error || { code: 0}
        if (Global.isDebug) {
            // console.log(`<<<=== 收到协议=${proto.Ptl[ptl]} 参数为=`, JSON.stringify(pb))
            console.log(`<<<=== 收到协议=${proto.Ptl[ptl]} 参数为=`, pb)
        }

        Net.toNumber52(pb)

        EventMgr.emitMsg(ptl, pb)
        EventMgr.emitLocal(LocalEvent.LocalEvent_Common_Net_ErrorCode, pb, ptl)

        if (Net.m_RecvCallback) {
            Net.m_RecvCallback(ptl)
        }
    }

    static valueType
    static toNumber52(pbData: any) {
        for (const key in pbData) {
            Net.valueType = typeof pbData[key]
            if (Net.valueType == "object") {
                if (pbData[key]) {
                    if (pbData[key]["__isLong__"]) {
                        pbData[key] = pbData[key].toNumber()
                    } else {
                        Net.toNumber52(pbData[key])
                    }
                }
            }
        }
    }

    public static set RecvCallback(callback: (ptl: number) => void) {
        Net.m_RecvCallback = callback;
    }

    private static getWssCacert() {
        let uuid = resources.getInfoWithPath('cacert').uuid;
        return assetManager.utils.getUrlWithUuid(uuid, { isNative: true, nativeExt: '.pem' });
    }

    /**
     * 是否为链接状态
     * @returns 
     */
    public static isConnect() {
        if (!Net.m_Ws || Net.m_Ws.readyState !== WebSocket.OPEN) {
            return false
        }
        return true
    }
}