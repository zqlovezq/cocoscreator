cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:
    //这个只是当前挂在了这个组件的节点初始完成执行，start 是所有节点初始完成执行
    // onLoad () {},

    start () {
        //初始化 放到update里执行，必须等待canvas的prefab加载完事后才执行初始化
        this.init();
    },
    /**
     * @description 初始化 所有东西需要在动态资源加载完成后进行初始化
     */
    init(){
        //获取Main 组件 需要先获取节点
        this.Canvas = cc.find('Canvas');
        this.Main = this.Canvas.getComponent('Main');
        this.Prefab = this.Main.Prefab;
        //获取钩子下item节点
        this.Item = cc.find('Canvas/Header/Miner/Hook/item');
        //监听碰撞
        this.onCollisionEnter = this.onCollisionEnterA;
    },

    /**
     * @description 监听碰撞
     * @param {Object} other 其他与本节点碰撞的节点
     * @param {Object} self 本节点
     */
    onCollisionEnterA(other, self){
        if(this.Main.HookState == 2)return;
        this.other = other;
        this.isWall = this.Wall(other);
        this.isTnt = this.Tnt(other);
        this.isMouse = this.Mouse(other);
        //处理钩子撞墙
        if(this.isWall){
            //拉回钩子
            this.Main.PullBackHook();
            return;
        };
        if(this.isTnt){
            this.Main.destroyTnt(other.node);
            other.node.getChildByName("icon").active = false;
            let boom = other.node.boom;
            boom.active = true;
            boom.getComponent(cc.Animation).play("boom");
            if(cc.zm.showShake){
                if(cc.sys.isNative){
                    jsb.Device.vibrate(0.3);
                }
            }
        }
        if(this.isMouse){
            other.node.stopAllActions();
        }
        //根据物品设置拉回钩子速度
        this.Main.SetSpeed(other);
        //播放碰撞音效
        if(cc.zm.showMusic){
            cc.audioEngine.play(this.Main.CollisionAudio);
        }
        //将物品放置钩子上
        this.other.node.y = -(this.Main.Hook.height + 2);
        this.other.node.x = -(this.Main.Hook.width / 2);
        other.node.parent = this.Item;
        other.node.anchorY = 1;
        this.node.getComponent(cc.Sprite).spriteFrame = this.Main.HookFrames[1]
        this.Main.PullBackHook();
    },
    /**
     * @description 删除被勾中的物品再创建被勾中的物品
     */
    MoveItemToHook(){
        if(this.isWall)return;
        // if(this.isTnt)return;
        this.other.node.y = -(this.Main.Hook.height + 2);
        this.other.node.x = -(this.Main.Hook.width / 2);
    },

    /**
     * @description 返回钩子是否撞墙
     */
    Wall(other){
        return other.node.group == 'Wall';
    },
    /**
     * @description 返回是否是炸药桶
     */
     Tnt(other){
        return other.node.group == 'Tnt';
    },
    Mouse(other){
        return other.node.group == 'Mouse';
    },
    update (dt) {
        if(this.other && this.other.node && this.Main.HookState == 2){
            this.MoveItemToHook();
        };
    },
});
