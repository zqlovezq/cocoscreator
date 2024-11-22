/**
 *  自定义的动作类
 */

import { tab } from "../../Table/table_gen";
import { getRandomInt } from "../Utils/GameUtils";

export function moveToTarget() {

}

/*  */
export class MoveToNode extends cc.MoveBy {
    protected dstNode:cc.Node = null;

    constructor(duration: number, dstNode: cc.Node) {
        super(duration, 0, 0)
        this.dstNode = dstNode;
    }

    update(dt){
        if(cc.isValid(this.dstNode)) {
            this._positionDelta.x = this.dstNode.x - this._startPosition.x;
            this._positionDelta.y = this.dstNode.y - this._startPosition.y;
        }
        super.update(dt);
    }
};

/*  */
export class BezierToNode extends cc.BezierBy {
    protected dstNode:cc.Node = null;
    protected toNodeConfig:cc.Vec2[];
    protected startPos:cc.Vec2;

    constructor (duration: number, config:cc.Vec2[], dstNode: cc.Node) {
        super(duration, config)
        this.dstNode = dstNode;
        this.toNodeConfig = config;
    }

    startWithTarget(target:cc.Node) {
        super.startWithTarget(target);
        this.startPos = new cc.Vec2(this._startPosition.x, this._startPosition.y);
        var locToConfig = this.toNodeConfig;
        var locConfig = this._config;
        locConfig[0] = locToConfig[0].sub(this.startPos);
        locConfig[1] = locToConfig[1].sub(this.startPos);
        locConfig[2] = locToConfig[2].sub(this.startPos);
    }

    update(dt){
        if(cc.isValid(this.dstNode)) {
            this._config[2] = this.dstNode.getPosition().sub((this.startPos));
        }
        super.update(dt);
    }
}

// export class MoveToNodeAndRotate extends MoveToNode {
//     startWithTarget(target:cc.Node) {
//         let pt = this.destNode.position.sub(target.position);
//         let angle = Math.atan2(pt.y, pt.x) * 180 / 3.1415926;
//         target.rotation = angle;
//         super.startWithTarget(target)
//     }
// };

/*  */
export class ProgressFromTo extends cc.ActionInterval {
    protected readonly fromPercentage;
    protected readonly toPercentage;

    constructor(duration: number, fromPercentage: number, toPercentage: number){
        super(duration)
        this.fromPercentage = fromPercentage;
        this.toPercentage = toPercentage;
    }

    update(dt: number) {
        let bar = this.getTarget().getComponent(cc.ProgressBar);
        if(bar){
            bar.progress = (this.fromPercentage + (this.toPercentage - this.fromPercentage) * dt) / 100;
        }
    }
}

/*  */
export class FollowNode extends cc.ActionInterval {
    protected followedNode:cc.Node;
    constructor(followedNode:cc.Node, time = 60) {
        super(time)
        this.followedNode = followedNode;
    }

    isDone(): boolean {
        return !this.followedNode || !cc.isValid(this.followedNode);
    }

    update(dt: number) {
        let node = this.getTarget()
        if(node && this.followedNode && cc.isValid(this.followedNode)) { 
            node.setPosition(this.followedNode.getPosition());
        }
    }
}

/*  */
export class ShakeByY extends cc.ActionInterval {
    protected shakeCount:number
    protected shakeOffset:number
    protected startY:number;
    protected scale:number;

    constructor(duration: number, shakeCount:number, shakeOffset:number) {
        super(duration)
        this.shakeCount = shakeCount;
        this.shakeOffset = shakeOffset;
        this.scale = Math.PI * 2 / 3 * shakeCount;
        // cc.log(`ShakeByY scale=${this.scale}, shakeCount=${shakeCount}, duration${duration}`)
    }

    startWithTarget (target:cc.Node) {
        super.startWithTarget(target)
        this.startY = target.y;
    }

    //dt的范围是[0, 1]
    update(dt) {
        let percent = this._computeEaseTime(dt) * this.scale;
        let node = this.getTarget()
        if(node) {
            let y = Math.exp(-percent / 3) * Math.sin(percent * 3) * this.shakeOffset
            // cc.log(`shake y: ${y}, dt:${dt}`)
            node.setPosition(node.x, this.startY + y)
        }
    }

    /*  */
    stop(){
        let node = this.getTarget()
        if(node) {
            cc.log(`ShakeByY stop`)
            node.setPosition(node.x, this.startY)
        }
        super.stop()
    }
}

/*  */
export class FontChangeAction extends cc.ActionInterval{
    protected _oldNum:number;
    protected _newNum:number;
    protected _numShowTimes:number = 0.;
    protected _func:Function = null;
    protected _frontNum:number;
    protected _everyAddNumFront:number;
    protected _everyAddNumBehind:number;
    protected _everyShowFrontTime:number;
    protected _everyShowBehindTime:number;
    protected _lastShowNumTime:number = 0;
    protected _isLocalDone:boolean = false;

    constructor(oldNum:number, newNum:number, numShowTime:number,func:Function) {
        super(numShowTime);
        this._oldNum = oldNum;
        this._newNum = newNum;
        this._numShowTimes = numShowTime;
        this._func = func;

        let totalVal:number = cc.game.getFrameRate() * numShowTime;
        let addNum:number = newNum - oldNum;
        if (addNum <= totalVal) {
            this._frontNum = oldNum + Math.floor(addNum / 2);
            this._everyAddNumFront = this._everyAddNumBehind = 1;
            this._everyShowFrontTime = this._everyShowBehindTime = numShowTime / addNum / 2;
        } else {
            let slowVal:number = 0;//totalVal * .2f;
            let quickVal:number = totalVal - slowVal;
            this._frontNum = newNum - slowVal;
            this._everyAddNumFront = Math.floor(((this._frontNum - oldNum) + quickVal - 0.001) / quickVal);
            this._everyAddNumBehind = 1;
            this._everyShowFrontTime = this._everyShowBehindTime = 1/cc.game.getFrameRate();
        }
    }

    /*  */
    isDone():boolean{
        return this._isLocalDone;
    }

    /*  */
    update(time:number) {
        let everyShow:number = this._everyShowFrontTime;
        if (this._oldNum >= this._frontNum) {
            everyShow = this._everyShowBehindTime;
        }

        if (this['_elapsed'] - this._lastShowNumTime >= everyShow) {
            let everyAdd:number = this._everyAddNumFront;
            if (this._oldNum >= this._frontNum) {
                everyAdd = this._everyAddNumBehind;
            }
            if (this._oldNum < this._frontNum && this._oldNum + everyAdd > this._frontNum) {
                this._oldNum = this._frontNum;
            } else {
                this._oldNum += everyAdd;
            }
            if (this._oldNum >= this._newNum) {
                this._oldNum = this._newNum;
            }
            let pNode = this.getTarget();
            if(pNode && pNode.getComponent(cc.Label)){
                let pText = pNode.getComponent(cc.Label);
                pText.string = Math.floor(this._oldNum).toString();
            }

            this._lastShowNumTime += everyShow;
            if (this._oldNum >= this._newNum) {
                this._isLocalDone = true;
                if (this._func && typeof this._func == 'function') {
                    this._func();
                }
            }
        }
    }
}