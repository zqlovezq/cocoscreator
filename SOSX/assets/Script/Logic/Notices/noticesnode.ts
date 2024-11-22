
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class noticesnode extends PopLayer {

    @property([cc.Node])
    pagevec: cc.Node[] = []

    @property(cc.Button)
    rightbtn: cc.Button = null

    @property(cc.Button)
    leftbtn: cc.Button = null

    curindex:number = 0;
    
    onLeft(){
        this.showpage(this.curindex - 1)
    }

    onRight(){
        this.showpage(this.curindex + 1)
    }

    
    start () {
        this.curindex = 0 //先显示最后一页
        this.showpage(this.curindex)
    }

    showpage(index){
        if(index < 0 || index >= this.pagevec.length){
            return
        }

        this.curindex = index
        for(let i=0; i<this.pagevec.length; i++){
            this.pagevec[i].active = i == index
        }

        this.rightbtn.node.active = index <  this.pagevec.length - 1
        this.leftbtn.node.active = index > 0

    }
}
