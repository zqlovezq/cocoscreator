const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    private content:cc.Node = null;
    private index:number = 0;
    private speed:number = 1500;
    // onLoad () {}
    
    start () {
        this.content = this.node.getChildByName("mask").getChildByName("content");
        cc.Tools.Event.on("score", this.addScore, this);
    }
    addScore(score:number){
        // 显示几个数字
        this.index = score.toString().length;
        if(score===0){
            for(let i = 1;i<=5;i++){
                let w = this.content.getChildByName('w'+i);
                w["y_index"] = 0;
                w.active = false;
            }
        }
        for(let i = 1;i<=5;i++){
            if(i<=this.index){
                let w = this.content.getChildByName('w'+i);
                w.active = true;
            }
        }
        // 开始转动
        // 每个位置上的值
        if(score!==0){
            let value = score.toString();
            for(let j=value.length-1;j>=0;j--){
                let k = parseInt(value[value.length-1-j]);
                let w = this.content.getChildByName('w'+(j+1));
                this.change(w,w["y_index"],k)
            }
        }else{
            // 初始化
            for(let i = 1;i<=5;i++){
                let w = this.content.getChildByName('w'+i);
                for(let j=0;j<2;j++){
                    let hNode = w.getChildByName("h"+j);
                    hNode.y = -500*j;
                }
            }
        }
    }
    // 新旧值的交替
    change(w:cc.Node,oldIndex:number,newIndex:number){
        if(oldIndex<=newIndex){
            // 移动距离为
            let h = (newIndex-oldIndex)*50;
            let time = h/this.speed;
            for(let i=0;i<2;i++){
                let hNode = w.getChildByName("h"+i);
                hNode.runAction(cc.sequence(cc.moveBy(time,0,h),cc.callFunc(()=>{
                    w["y_index"] = newIndex;
                    if(hNode.y>=480){
                        hNode.y-=500;
                    }
                })));
            }
        }else{
            let h = (newIndex+10-oldIndex)*50;
            let time = h/this.speed;
            for(let i=0;i<2;i++){
                let hNode = w.getChildByName("h"+i);
                hNode.runAction(cc.sequence(cc.moveBy(time,0,h),cc.callFunc(()=>{
                    w["y_index"] = newIndex;
                    if(hNode.y>=480){
                        hNode.y-=1000;
                    }
                })));
            }
        }
    }
    // update (dt) {}
}
