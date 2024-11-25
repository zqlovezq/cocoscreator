import { Node, _decorator, director, isValid } from "cc";
import { LocalEvent, NetStateEvent } from "../define/LocalEvent";
import { FightEvent } from "../fight/define/FightEvent";

const { ccclass, property } = _decorator;

enum EventType {
    msg = "msg_",
    netState = "netState_",
    local = "local_",
    fight = "fight_",
}

export class EventMgr {

    static emitMsg(ptl: number, buffer: any) {
        director.emit(`${EventType.msg}${ptl}`, buffer, ptl);
    }

    public static emitLocal(message: LocalEvent, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        director.emit(EventType.local + String(message), arg1, arg2, arg3, arg4, arg5);
    }

    public static emitFight(message: FightEvent, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        director.emit(EventType.fight + String(message), arg1, arg2, arg3, arg4, arg5);
    }

    public static emitNetState(message: NetStateEvent, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        director.emit(EventType.netState + String(message), arg1, arg2, arg3, arg4, arg5);
    }

    public static onMsg(ptl: number, callback: (buffer: any, ptl: number) => void, target: any) {
        director.on(`${EventType.msg}${ptl}`, function (buffer: any, ptl: number) {
            if (!isValid(target)) {
                director.targetOff(target)
                return;
            }
            callback.call(target, buffer, ptl);
        }, target);
    }

    public static onNetState(extraMsg: NetStateEvent, callback: (extraMsg: NetStateEvent) => void, target: any) {
        director.on(`${EventType.netState}${extraMsg}`, function (extraMsg: NetStateEvent) {
            if (!isValid(target)) {
                director.targetOff(target)
                return;
            }
            callback.call(target, extraMsg);
        }, target);
    }
    public static onLocal(message: LocalEvent, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target: any, once = false) {
        if (once) {
            director.once(`${EventType.local}${message}`, callback, target)
        } else {
            director.on(`${EventType.local}${message}`, callback, target)
        }
    }

    public static onFight(message: FightEvent, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void, target: any, once = false) {
        if (once) {
            director.once(`${EventType.fight}${message}`, callback, target)
        } else {
            director.on(`${EventType.fight}${message}`, callback, target)
        }
    }

    public static unTarget(target: any) {
        director.targetOff(target)
    }

    public static unMsg(ptl: number, callback: any, target: any) {
        director.off(`${EventType.msg}${ptl}`,callback, target)
    }

    public static unLocal(ptl: number, callback?: any, target?: any) {
        director.off(`${EventType.local}${ptl}`, callback, target)
    }

    public static unFight(message: FightEvent, callback: any, target: any) {
        director.off(`${EventType.fight}${message}`,callback, target)
    }

}