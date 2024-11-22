
const {ccclass, property} = cc._decorator;

@ccclass
export default class OnlyCupItem extends cc.Component {

    @property(cc.Label)
    cnt: cc.Label = null;

    setCount(count:number){
        this.cnt.string = "x"+count.toString()
    }

    start () {}
}
