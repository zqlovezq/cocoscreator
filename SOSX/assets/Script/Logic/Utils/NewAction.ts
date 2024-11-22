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

    constructor(oldNum:number, newNum:number, numShowTimes:number, func:Function)
    {
        super(numShowTimes);
        this._oldNum = oldNum;
        this._newNum = newNum;
        this._numShowTimes = numShowTimes;
        this._func = func;

        let totalVal:number = cc.game.getFrameRate() * numShowTimes;
        let addNum:number = newNum - oldNum;
        if (addNum <= totalVal) {
            this._frontNum = oldNum + Math.floor(addNum / 2);
            this._everyAddNumFront = this._everyAddNumBehind = 1;
            this._everyShowFrontTime = this._everyShowBehindTime = numShowTimes / addNum / 2;
        }
        else {
            let slowVal:number = 0;//totalVal * .2f;
            let quickVal:number = totalVal - slowVal;
            this._frontNum = newNum - slowVal;
            this._everyAddNumFront = Math.floor(((this._frontNum - oldNum) + quickVal - 0.001) / quickVal);
            this._everyAddNumBehind = 1;
            this._everyShowFrontTime = this._everyShowBehindTime = 1/cc.game.getFrameRate();
        }
    }

    isDone():boolean{
        return this._isLocalDone;
    }

    update(time:number)
    {
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
            }
            else {
                this._oldNum += everyAdd;
            }
            if (this._oldNum >= this._newNum) {
                this._oldNum = this._newNum;
            }
            let pNode = this.getTarget();
            if(pNode && pNode.getComponent(cc.Label))
            {
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

/**
 * Description: 打字机
 */
export class TextPrinter extends cc.ActionInterval {
    protected _content:string = "";
    protected _contentLen:number = 0;
    protected _lableArray: cc.Label[];
    protected _maxHeight:number;
    // protected _posY: number;

    protected _strArray:string[] = []
    protected _stack:string[] = []

    constructor(duration: number, text:string) {
        super(duration);
        this._content = text;
    }

    startWithTarget(target:cc.Node) {
        super.startWithTarget(target);
        this._lableArray = []
        this._strArray = []
        let lbl = target.getComponent(cc.Label);
        if(lbl) {
            this._lableArray.push(lbl)
            this._strArray.push(this._content)
            this._contentLen = this._content.length
        } else {
            let lblRich = target.getComponent(cc.RichText);
            if(lblRich) {
                lblRich.string = this._content;
                for(let child of target.children) {
                    lbl = child.getComponent(cc.Label);
                    if(lbl) {
                        this._lableArray.push(lbl)
                        this._strArray.push(lbl.string)
                        child.active = false

                        this._contentLen += lbl.string.length
                    }
                }
            }
        }
        if(this._lableArray.length == 0) {
            throw new Error('cc.Label or cc.RichText not found')
        }
    }

    update(dt:number) {
        let iCount = Math.floor(this._contentLen * dt);
        for(let i = 0; i < this._strArray.length; ++i) {
            this._lableArray[i].node.active = true

            if(this._strArray[i].length < iCount) {
                iCount -= this._strArray[i].length
                if(this._lableArray[i].string.length != this._strArray[i].length) {
                    this._lableArray[i].string = this._strArray[i]
                }
            } else {
                this._lableArray[i].string = this._strArray[i].slice(0, iCount)
                break;
            }
        }
    }
}

