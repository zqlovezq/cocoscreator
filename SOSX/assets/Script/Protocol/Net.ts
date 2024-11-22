import * as $protobuf from "./protobufjs";
import { DataViewWriter, DataViewReader } from "./DataViewRW";
import { LOCAL_MESSAGE } from "./LocalMessage";
import { proto } from "./client_protocol";
import { checkCanCreateAlliance } from "../Logic/Alliance/AllianceCommonInterface";

const MSG_ID_LEN = 2;

declare let WebSocket: WebSocket & any;

export enum EXTRA_MSG
{
	EXTRA_MSG_NONE,				// 无额外信息
	EXTRA_MSG_CONNCET,	        // 连接成功
    EXTRA_MSG_CLOSE,			// 连接关闭
};

export class Net {
    protected static m_Ws: WebSocket = null;
    protected static m_Url: string = null;
    
    // protected static m_SendCallback:(ptl:number)=>void;
    protected static m_RecvCallback:(ptl:number)=>void;
    // protected static m_ListenedPtl:object = {}

    public static Connect(url: string): boolean {
        Net.m_Url = url;
        return Net.Reconnect();
    }
    
    public static Disconnect() {
        if( Net.m_Ws !== null)
        {
            Net.m_Ws.close();
            Net.m_Ws = null;
        }
    }

    public static Reconnect():boolean {
        if(Net.m_Url === null)
        {
            return false;
        }

        Net.Disconnect();
        if(cc.sys.isNative && Net.m_Url.startsWith("wss")) {
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

    public static ReconnectLater(delayMS:number = 3000):boolean {
        if(Net.m_Url === null)
        {
            return false;
        }

        setTimeout(()=>{
            if(Net.m_Ws.readyState != WebSocket.OPEN)
            {
                Net.Reconnect();
            }
        }, delayMS);
        return true;
    }

    public static Send(ptl:number, message: any) {
        console.log(`===>>> 发送协议=${proto.Ptl[ptl]||proto.FightPtl[ptl]},参数为=${JSON.stringify(message)}`)
        if(!Net.m_Ws || Net.m_Ws.readyState !== WebSocket.OPEN) {
            return;
        }

        //encode
        let buf = message.constructor.encode(message).finish();

        let writer = new DataViewWriter(new ArrayBuffer(buf.length + MSG_ID_LEN));
        writer.setUint16(ptl); //协议号

        //协议内容
        for (var i = 0; i < buf.length; ++i){
            writer.setInt8(buf[i])
        }
        writer.markEnd();

        Net.m_Ws.send(writer.getArrayBuffer());

        // if(Net.m_SendCallback) {
        //     Net.m_SendCallback(ptl)
        // }
    }

    public static listenProtocol(ptl: number, callback: (buffer: Uint8Array, ptl: number)=>void, target: any) {
        // Net.m_ListenedPtl[ptl] = true
        cc.director.on(`msg_${ptl}`, function(buffer: Uint8Array, ptl: number) {
            
            if(!cc.isValid(target)) {
                cc.director.targetOff(target)
                return;
            }
            console.log(`<<<=== 收到协议=${proto.Ptl[ptl]||proto.FightPtl[ptl]}`)
            callback.call(target, buffer, ptl);
        }, target);
    }

    public static listenProtocolUnique(ptl: number, callback: (buffer: Uint8Array, ptl: number)=>void, target: any) {
        Net.unlistenProtocol(ptl); /* 去掉老的，监听新的 */
        Net.listenProtocol(ptl,callback,target); /* 去掉老的，监听新的 */
    }


    public static listenExtraMsg(extraMsg: EXTRA_MSG, callback: (extraMsg: EXTRA_MSG)=>void, target: any) {
        cc.director.on(`extra_${extraMsg}`, function(extraMsg: EXTRA_MSG){
            if(!cc.isValid(target)) {
                cc.director.targetOff(target)
                return;
            }
            callback.call(target, extraMsg);
        }, target);
    }
    public static listenLoaclMessage(message:LOCAL_MESSAGE, callback:(arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any)=>void, target:any, once=false) {
        if(once) {
            cc.director.once(`loacl_${message}`, callback, target)
        } else {
            cc.director.on(`loacl_${message}`, callback, target)
        }
    }

    public static pushLoaclMessage(message: LOCAL_MESSAGE, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        cc.director.emit("loacl_" + String(message), arg1, arg2, arg3, arg4, arg5);
    }

    public static unlistenTarget(target: any) {
        cc.director.targetOff(target)
    }

    public static unlistenProtocol(ptl: number) {
        cc.director.off(`msg_${ptl}`)
    }

    public static unlistenLoaclMessage(ptl: number, callback?: Function, target?: any) {
        cc.director.off(`loacl_${ptl}`, callback, target)
    }

    protected static onOpen(ev :Event) {
        cc.log("onOpen~~~~~" + Net.m_Ws.readyState);
        if(Net.m_Ws.readyState == WebSocket.OPEN) {
            cc.director.emit("extra_" + String(EXTRA_MSG.EXTRA_MSG_CONNCET), EXTRA_MSG.EXTRA_MSG_CONNCET);
        }
    }

    protected static onClose(ev :CloseEvent) {
        cc.log("onClose~~~~~" + ev.reason);
        // Net.stopSendPing();
        cc.director.emit("extra_" + String(EXTRA_MSG.EXTRA_MSG_CLOSE));
    }

    protected static onError(ev :Event) {
        cc.log("onError~~~~~");
    }

    protected static onMessage(ev :MessageEvent) {
        let reader = new DataViewReader(ev.data)
        if(reader.getLen() < MSG_ID_LEN) {
            //包太小
            cc.error("msg len Error!!!")
            Net.Disconnect();
            return
        }

        let ptl = reader.getUint16();
        let packagaLen = reader.getLen() - MSG_ID_LEN
        cc.director.emit(`msg_${ptl}`, new Uint8Array(reader.getBuffer(), reader.getOffset() + reader.getPos(), packagaLen), ptl);

        if(Net.m_RecvCallback) {
            Net.m_RecvCallback(ptl)
        }
    }

//     public static set SendCallback(callback:(ptl:number)=>void) {
//         Net.m_SendCallback = callback;
//     }

    public static set RecvCallback(callback:(ptl:number)=>void) {
        Net.m_RecvCallback = callback;
    }

    private static getWssCacert() {
        let uuid = cc.resources.getInfoWithPath('cacert').uuid;
        return cc.assetManager.utils.getUrlWithUuid(uuid, { isNative: true, nativeExt: '.pem' });
    }

    /**
     * 是否为链接状态
     * @returns 
     */
     public static isConnect(){
        if(!Net.m_Ws || Net.m_Ws.readyState !== WebSocket.OPEN) {
            return false
        }
        return true
    }
}