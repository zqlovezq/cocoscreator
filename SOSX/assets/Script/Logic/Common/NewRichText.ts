
const {ccclass, property} = cc._decorator;

@ccclass
export default class RichTextOneByOne extends cc.RichText {

    lablevec:cc.Label[] = []
    lablestrvec:string[] = []

    _curlable:cc.Label = null
    _curstr:string = null
    _curlength:number = 0

    init(){
        for(let i = 0;  i<this.node.children.length; i++){
            let child = this.node.children[i].getComponent(cc.Label)
            if(child){
                this.lablevec.push(child)
                this.lablestrvec.push(child.string)
                child.node.active = false
            }
        }
    }
    
    //每次设置一个字符，每秒设置一次
    oneByone(){
        this._curlength = 0
        if(this.lablevec.length > 0){
           let curlable = this.lablevec.shift()
           curlable.node.active = true

           this._curlable = curlable
           this._curlable.string = ""
           this._curstr = this.lablestrvec.shift()
           this.countdown()   
        } else {
            this.unschedule(this.countdown)
        }
    }

    countdown(){
        if(this._curlength < this._curstr.length){
            this._curlable.string =this._curlable.string +  this._curstr.charAt(this._curlength)
            this._curlength++
        } else {
            this.oneByone()
        }
    }

    startPlay(str:string) {
        this.string = str;
        this.init()
        this.oneByone()       
        this.schedule(this.countdown, 0.02)
    }
}
