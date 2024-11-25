import { Func } from "../../../../utils/Func";
import { AbsObj } from "../AbsObj";
import { AbsState, AbsStateType, DefaultState } from "./AbsState";


/** 状态机 */
export class StateMachine {
    abs: AbsObj = null;
    states: AbsState[] = [];
    currentState: AbsState = null;

    constructor() {

    }

    isState(stateType) {
        return this.currentState && this.currentState.stateType === stateType
    }

    setAbs(abs: AbsObj) {
        this.abs = abs;
        this.clearState()
    }

    updateFrame(deltaTime: number) {
        if (this.abs.isDead) return;

        if (this.currentState) this.currentState.updateFrame(deltaTime);
    }

    avatarPlayComplete(animName: string) {
        if (this.currentState) this.currentState.avatarPlayComplete(animName);
    }

    clearState() {
        this.states.length = 0;
        this.addState(new DefaultState())
    }

    addStates(ss: AbsState[]) {
        for (const s of ss) {
            this.addState(s);
        }
    }

    addState(s: AbsState) {
        if (this.states[s.stateType]) {
            throw new Error("AbsState is same")
        }

        this.states[s.stateType] = s
    }

    run() {
        this.changeState(AbsStateType.default);
    }

    changeState(stateType: AbsStateType) {
        if (this.currentState) this.currentState.leave();

        this.currentState = this.states[stateType];
        this.currentState.setAbs(this.abs)
        this.currentState.enter();
        return true
    }

}
