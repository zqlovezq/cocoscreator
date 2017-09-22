cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        choice:cc.Node,
        chessSprite:cc.Node,
        sp:[cc.SpriteFrame],
        _temp:null,
        _my:0
    },

    // use this for initialization
    onLoad: function () {

    },
    // @param type:{b,r} b是黑棋,r是红旗
    // @param type:{c,m,x,s,j,p,z}:车马相士将炮兵
    init:function(type,temp){
        if(type=='b'){
            this.node.on(cc.Node.EventType.TOUCH_START,this.clickChess,this);
            this.node.addComponent(cc.BlockInputEvents);
        }else{
            this.node.on(cc.Node.EventType.TOUCH_START,this.clickEnemyChess,this);
        }
        var s = temp.slice(0,1);
        var spriteFrameImg = this.node.getComponent(cc.Sprite);
        var url = type+"_"+s.toLocaleLowerCase();
        this.choice.getComponent('cc.Sprite').spriteFrame=type=="r"?this.sp[0]:this.sp[1];
        this._temp=temp;
        this._my=type=="r"?0:1;
        cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame){
            if(err){
                cc.error('SpriteFrame加载错误, 节点名: ' + spriteFrameImg.node.name + ', url: ' + url);
                return;
            }else{
                spriteFrameImg.spriteFrame = spriteFrame;
            }
        })
    },
    clickChess:function(event){
        var temp = this._temp.slice(0,1);
        if(this._my){
            this.choice.active=true;
            this.parentLayer.showLine(this,temp,this._my);
        }else{
            cc.log("AI不可点击");
        }
    },
    clickEnemyChess:function (event) {
        cc.log("点击敌人");
        this.parentLayer.enemyChess= this;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
