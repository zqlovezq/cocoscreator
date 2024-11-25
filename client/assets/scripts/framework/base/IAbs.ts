import { EventMgr } from "../../logic/mgr/EventMgr";

export interface IEvent {
    register(): void;
}
export interface IClear {
    purge(): void;
}
export interface IReset {
    reset(): void;
}

/** 控制器、消息接受 */
export abstract class AbsControl implements IEvent, IClear {
    purge(): void {
        throw new Error("Method not implemented.");
    }
    init() {
        this.unRegister()
        this.register()
    }
    register(): void {
        throw new Error("Method not implemented.");
    }
    unRegister() {
        EventMgr.unTarget(this)
    }
}

export abstract class AbsMgr {
    abstract init(): void
}

export abstract class AbsData implements IClear {
    purge(): void {
        throw new Error("Method not implemented.");
    }
}


