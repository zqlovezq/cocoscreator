import AssetsBundle from "./AssetsBundle";
import Cash from "../Component/Cash";
const { ccclass, property } = cc._decorator;
var self: any = null;
@ccclass
export default class Game extends cc.Component {
    public static Instance: Game = null;
    private wrap: cc.Node = null;
    private layer: cc.Node = null;
    private pop: cc.Node = null;
    private delete_num: number = 0;
    private click_pos: cc.Vec3 = null;
    private a = [];
    private b = [];
    private difficulty: number = 2;
    private _count: number = 0;
    private level_add_cash = 0;
    private is_over_game: boolean = false;
    private delete_pos_arr = [];
    protected onLoad(): void {
        if (Game.Instance === null) {
            Game.Instance = this;
        } else {
            this.destroy();
            return;
        }
        //初始化的用户数据
        self = this;
        cc.Tools.screenAdapter();
        //注册一些事件
        cc.Tools.Event.on("cash", this.showCashType, this);
        this.wrap = this.node.getChildByName("wrap");
        this.layer = this.node.getChildByName("layer");
        this.pop = this.node.getChildByName("pop");
        this.getReqInfo("UserInfo", "GET", {}, this.initUserInfo)
    }
    private InitGame(): void {
        let content: cc.Node = this.wrap.getChildByName("content");
        content.on(cc.Node.EventType.TOUCH_START, this.touchGround, this);
        this.level_add_cash = 0;
        this.setLevelAddCash();
        content.destroyAllChildren();
        for (let i = 0; i < 10; i++) {
            this.a[i] = []
            this.b[i] = []
            for (let j = 0; j < 10; j++) {
                this.a[i][j] = Math.ceil(Math.random() * this.difficulty)
                let node = null;
                switch (this.a[i][j]) {
                    case 1:
                        let red = AssetsBundle.Instance.getAsset("Game", "Prefab/red")
                        node = cc.instantiate(red)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 2:
                        let green = AssetsBundle.Instance.getAsset("Game", "Prefab/green")
                        node = cc.instantiate(green)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 3:
                        let yellow = AssetsBundle.Instance.getAsset("Game", "Prefab/yellow")
                        node = cc.instantiate(yellow)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 4:
                        let blue = AssetsBundle.Instance.getAsset("Game", "Prefab/blue")
                        node = cc.instantiate(blue)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 5:
                        let pink = AssetsBundle.Instance.getAsset("Game", "Prefab/pink")
                        node = cc.instantiate(pink)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))

                }
                this.b[i][j] = node;
            }
        }
    }
    //用户首次进来弹窗
    private firstEnterGame():void{
        // let first:string = cc.sys.localStorage.getItem("first");
        // if(!first){
            cc.sys.localStorage.setItem("first",true);
            let first:cc.Prefab = AssetsBundle.Instance.getAsset("Game", "Prefab/first_pop");
            first.addRef();
            let node = cc.instantiate(first);
            node.parent = this.node;
        // }
    }
    //写一个接口返回请求的数据
    private getReqInfo(api: string, reqType: string, sendData: any, callback: Function): void {
        cc.Tools.sendRequest(api, reqType, sendData).then(res => {
            callback(res.data);
        })
        // .catch(err => {
        //     console.log(`请求${api}失败，错误返回${err}`);
        // })
    }
    private initUserInfo(data: any): void {
        cc.Tools.userInfo = data;
        let levelLbl: cc.Label = self.wrap.getChildByName("level").getChildByName("lbl").getComponent(cc.Label);
        levelLbl.string = `第${cc.Tools.userInfo.level}关`
        self.registerEvent();
        self.InitGame();
        self.firstEnterGame();
    }
    private registerEvent():void{
        let bottom:cc.Node = this.wrap.getChildByName("bottom");
        let top:cc.Node = this.wrap.getChildByName("top");
        let eventFunc = ["showTurntable","showAward","showCash2"];
        for(let i=1;i<=3;i++){
            let btn = bottom.getChildByName("btn_"+i);
            btn.on(cc.Node.EventType.TOUCH_END,this[eventFunc[i-1]],this)
        }
        let avatar = top.getChildByName("avatar");
        avatar.on(cc.Node.EventType.TOUCH_END,this.showCash1,this)
    }
    private removeEvent() :void{
        let bottom:cc.Node = this.wrap.getChildByName("bottom");
        let top:cc.Node = this.wrap.getChildByName("top");
        let eventFunc = ["showTurntable","showAward","showCash2"];
        for(let i=1;i<=3;i++){
            let btn = bottom.getChildByName("btn_"+i);
            btn.off(cc.Node.EventType.TOUCH_END,this[eventFunc[i-1]],this)
        }
        let avatar = top.getChildByName("avatar");
        avatar.off(cc.Node.EventType.TOUCH_END,this.showCash1,this)
    }
    public showTurntable():void{
        let turntable = this.layer.getChildByName("turntable_layer");
        if(turntable){
            turntable.active = true;
        }else{
            let turntable = AssetsBundle.Instance.getAsset("Game", "Prefab/turntable_layer")
            let node = cc.instantiate(turntable);
            node.parent = self.layer;
        }
    }
    public showAward():void{
        // let cash = this.layer.getChildByName("cash_layer");
        // if(cash){
        //     cash.active = true;
        // }else{
        //     let cash = AssetsBundle.Instance.getAsset("Game", "Prefab/cash_layer")
        //     let node = cc.instantiate(cash);
        //     node.parent = self.layer;
        // }
    }
    private showCash2():void{
        cc.Tools.emitEvent("cash",2)
    }
    private showCash1():void{
        cc.Tools.emitEvent("cash",1);
    }
    public showCashType(type:number):void{
        this.showCash();
        Cash.Instance["showTypeLayer"+type]();
    }
    public showCash():void{
        let cash = this.layer.getChildByName("cash_layer");
        if(cash){
            cash.active = true;
        }else{
            let cash = AssetsBundle.Instance.getAsset("Game", "Prefab/cash_layer")
            let node = cc.instantiate(cash);
            node.parent = self.layer;
        }
        // // if()
        // Cash.Instance.showTypeLayer1()
    }
    private touchGround(e: cc.Event.EventTouch) {
        let content: cc.Node = this.wrap.getChildByName("content");
        let pos = content.convertToNodeSpaceAR(e.getLocation())
        let x = pos.x
        let y = pos.y
        this.delete_num = 0
        this.click_pos = cc.v3(x, y);
        // console.log(x, y);
        console.log(this.ToIJ(x, y));
        let i = this.ToIJ(x, y).x
        let j = this.ToIJ(x, y).y
        this.delete_num = 0;
        this.delete_pos_arr = [];
        let color = this.a[i][j];
        this.Touch_block(i, j, this.a[i][j]);
        // todo
        if (this.delete_num === 1) {
            this.a[i][j] = color;
            return
        } else {
            this.handleDeleteBlock(false);
        }
    }
    private ToIJ(i: number, j: number) {
        let content: cc.Node = this.wrap.getChildByName("content");
        let val = content.width / 2;
        i = Math.floor((i + val) / 100);
        j = 9 - Math.floor((j + val) / 100);
        return {
            x: j,
            y: i
        }
    }
    private ToXY(x: number, y: number) {
        return cc.v2(-450 + 100 * y, 450 - 100 * x);
    }
    private Touch_block(i: number, j: number, k: number): void {
        if (this.a[i][j] == k && k > 0) {
            this.a[i][j] = 0
            this.delete_num++
            let obj = {
                "i": i,
                "j": j,
                "k": k
            }
            //delete
            let arr = [];
            arr.push(obj);
            this.splitToArr(arr);
        }
    }
    private splitToArr(arr): void {
        let _arr = [];
        if (arr.length > 0) {
            this.delete_pos_arr.push(arr);
            for (let t = 0; t < arr.length; t++) {
                let data = arr[t];
                let i = data.i;
                let j = data.j;
                let k = data.k;
                if (i != 0) {
                    if (this.a[i - 1][j] == k && k > 0) {
                        this.a[i - 1][j] = 0;
                        this.delete_num++;
                        let obj = {
                            "i": i - 1,
                            "j": j,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
                if (i != 9) {
                    if (this.a[i + 1][j] == k && k > 0) {
                        this.a[i + 1][j] = 0;
                        this.delete_num++;
                        let obj = {
                            "i": i + 1,
                            "j": j,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
                if (j != 0) {
                    if (this.a[i][j - 1] == k && k > 0) {
                        this.a[i][j - 1] = 0;
                        this.delete_num++;
                        let obj = {
                            "i": i,
                            "j": j - 1,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
                if (j != 9) {
                    if (this.a[i][j + 1] == k && k > 0) {
                        this.a[i][j + 1] = 0;
                        this.delete_num++;
                        let obj = {
                            "i": i,
                            "j": j + 1,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
            }
            this.splitToArr(_arr);
        }
    }
    // 将要delete的数据进行处理
    private handleDeleteBlock(isOver: boolean): void {
        if (!this.delete_pos_arr.length) {
            return;
        }
        this._count = 0;
        this.is_over_game = isOver;
        this.schedule(this.deleteBlockCb, 0.032, this.delete_pos_arr.length - 1);
        if(!isOver){
            this.setLevelAddCash();
        }
    }
    private deleteBlockCb(): void {
        let arr = this.delete_pos_arr[this._count];
        for (let t = 0; t < arr.length; t++) {
            let data = arr[t];
            let i = data.i;
            let j = data.j;
            let k = data.k;
            //spine特效
            let content: cc.Node = this.wrap.getChildByName("content");
            let spine: cc.Prefab = AssetsBundle.Instance.getAsset("Game", "Prefab/effect")
            let node = cc.instantiate(spine)
            node.parent = content;
            node.setPosition(this.ToXY(i, j))
            let _spine: sp.Skeleton = node.getChildByName("spine").getComponent("sp.Skeleton");
            let rdm = Math.floor(Math.random() * 3 + 1);
            _spine.setAnimation(0, "STYLE_" + rdm, false);

            this.b[i][j].destroy()
            this.b[i][j] = null
        }
        if (this._count === this.delete_pos_arr.length - 1) {
            this.afterDeleteBlock()
        }
        this._count++;
    }
    private afterDeleteBlock(): void {
        this.deleteBlock();
        this.unschedule(this.deleteBlockCb);
    }
    private deleteBlock(): void {
        for (let j = 0; j < 10; j++) {
            let num = 0
            for (let i = 9; i >= 0; i--) {
                if (this.a[i][j] > 0 && num > 0) {
                    let action = cc.moveBy(0.3, 0, -num * 100)
                    this.b[i][j].runAction(action)
                    this.a[i + num][j] = this.a[i][j]
                    this.a[i][j] = 0
                    this.b[i + num][j] = this.b[i][j]
                    this.b[i][j] = null
                    continue
                }
                if (this.a[i][j] == 0) {
                    num = num + 1
                }
            }
        }
        let _count = 0
        for (let j = 0; j < 10; j++) {
            if (this.a[9][j] > 0 && _count > 0) {
                for (let i = 0; i < 10; i++) {
                    if (this.a[i][j] > 0) {
                        var action = cc.moveBy(0.3, -_count * 100, 0)
                        this.b[i][j].runAction(action)
                        this.a[i][j - _count] = this.a[i][j]
                        this.a[i][j] = 0
                        this.b[i][j - _count] = this.b[i][j]
                        this.b[i][j] = null
                    }

                }
                continue
            }
            if (this.a[9][j] == 0) {
                _count++
            }
        }
    }
    /**
     * 每消除一个方块的基础得分为0.01元钱，一次消除10个以上获得1.1倍率，一次消除20个以上获得1.2倍率，一次消除30个以上获得1.5倍率，最大为1.5倍率。最终得到金额向下取整
    */
    private setLevelAddCash(): void {
        //level_add_cash
        let cash: cc.Label = this.wrap.getChildByName("money").getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
        if (this.delete_num !== 0) {
            if(this.delete_num<10){
                //没有倍率
                this.level_add_cash+=this.delete_num
            }else if(this.delete_num>=10&&this.delete_num<20){
                //10个以上1.1
                this.level_add_cash+=Math.floor(this.delete_num*1.1);
            }else if(this.delete_num>=20&&this.delete_num<30){
                //20个以上1.2
                this.level_add_cash+=Math.floor(this.delete_num*1.2)
            }else{
                //大于30个1.5
                this.level_add_cash+=Math.floor(this.delete_num*1.5)
            }
        }
        cash.string = this.level_add_cash/100 + "";
    }
}