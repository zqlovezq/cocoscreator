var config=require('./config');
cc.Class({
    extends: cc.Component,

    properties: {
        chessNode:cc.Prefab,
        point:cc.Prefab,
        board:cc.Node,
        _my:1,//玩家方
        _isPlay:true,//是否能走棋
        _cur:null,
        _old:null,
        _oldPoint:null,
        _curPoint:null,
        _chessCanRun:false
    },

    // use this for initialization
    onLoad: function () {
        this.chessBpool = new cc.NodePool();
        this.chessRpool = new cc.NodePool();
        this.pointPool = new cc.NodePool();
        var initCount = 16;
        for(var i=0;i<initCount;i++){
            var chess = cc.instantiate(this.chessNode);
            this.chessBpool.put(chess);
        }
        for(var i=0;i<initCount;i++){
            var chess = cc.instantiate(this.chessNode);
            this.chessRpool.put(chess);
        }
        for(var i=0;i<90;i++){
            var point = cc.instantiate(this.point);
            this.pointPool.put(point);
        }
        this.init();
        this.board.on(cc.Node.EventType.TOUCH_END,this.boardFunc,this);
    },
    init:function(){
        this._bylaw=config.bylaw; //规则
        this._map=config.arr2Clone(config.initMap);//初始化棋盘
        var pos = config.arr2Clone(config.initPos);
        for(var i=0;i<pos.length;i++){
            for(var j=0;j<pos[i].length;j++){
                this.createPoint(this.board,pos[i][j],j,i);
            }
        }
        for(var i=0;i<this._map.length;i++){
            for(var j=0;j<this._map[i].length;j++){
                var key = this._map[i][j];
                var p=pos[i][j];
                if(key){
                    var o = config.switchType(key);
                    this.createChess(this.board,o.type,o.temp,p,j,i);
                }
            }
        }
    },
    createChess:function(parentNode,type,temp,pos,x,y){
        var chess = null;
        if(type=="b"){
            if(this.chessBpool.size()>0){
                chess=this.chessBpool.get();
            }else{
                chess=cc.instantiate(this.chessNode);
            }
        }else{
            if(this.chessRpool.size()>0){
                chess=this.chessRpool.get();
            }else{
                chess=cc.instantiate(this.chessNode);
            }
        }
        chess.parent=parentNode;
        chess.x=pos.x;
        chess.y=pos.y;
        chess._mark=[x,y];
        var chessJs = chess.getComponent('chess_node');
        chessJs.init(type,temp);
        chessJs.parentLayer = this;
    },
    createPoint:function(parentNode,pos,x,y){
        var point = null;
        if(this.pointPool.size()>0){
            point=this.pointPool.get();
        }else{
            point=cc.instantiate(this.point);
        }
        point.parent=parentNode;
        point.x=pos.x;
        point.y=pos.y;
        point._mark=[x,y];
    },
    /**
     * @param my 0(红棋)1(黑棋) 黑棋是我
     * @param type cmxsjpz
     */
    showLine:function(that,temp,my){
        this._chessCanRun=true;
        if(this._cur){
            this._old=this._cur;
            this._cur=that;
        }else{
            this._cur=that;
        }
        if(this._old){
            if(this._old==this._cur){
                cc.log("当前点击的棋子未发生变化")
            }else{
                this._old.choice.active=false;   
            }
        };
        var points=[];
        if(config.bylaw[temp]){
            console.log(temp,my,that.node._mark);
            var arr = config.bylaw[temp](that.node._mark,this._map,my);
            var cds = this.board.children;
            for(var i=0;i<arr.length;i++){
                for(var j=0;j<cds.length;j++){
                    if(cds[j]._name=="point"&&cds[j]._mark&&arr[i][0]==cds[j]._mark[0]&&arr[i][1]==cds[j]._mark[1]){
                        points.push(cds[j]);
                    }
                }
            }
        }else{
            cc.log("无效的参数",temp);
        }
        if(points.length>0){
            if(this._curPoint){
                this._oldPoint=this._curPoint;
                this._curPoint=points;
            }else{
                this._curPoint=points;
            }
            if(this._oldPoint){
                for(var i=0;i<this._oldPoint.length;i++){
                    this._oldPoint[i].active=false;
                }
            }
            for(var i=0;i<this._curPoint.length;i++){
                this._curPoint[i].active=true;
            }
        }else{
            cc.log("无效的点的集合参数",points);
        }
    },
    boardFunc:function (event) {
        cc.log("点击棋盘");
        var pos = event.touch._point;
        var newVec2 = this.board.convertToNodeSpaceAR(pos);
        console.log(newVec2);
        cc.log(this._curPoint);
        if(this._chessCanRun){
            for(var i=0;i<this._curPoint.length;i++){
                if(Math.abs(newVec2.x-this._curPoint[i].x)<=10&&Math.abs(newVec2.y-this._curPoint[i].y)<=10){
                    // return this._curPoint[i];
                    this._cur.node.setPosition(this._curPoint[i].x,this._curPoint[i].y);
                    //先将地图中之前的点重置
                    var _x=this._cur.node._mark[0];
                    var _y=this._cur.node._mark[1];
                    this._map[_y][_x]=undefined;
                    //将棋子设置为新的节点
                    this._cur.node._mark=this._curPoint[i]._mark;
                    var x=this._curPoint[i]._mark[0];
                    var y=this._curPoint[i]._mark[1];
                    //改变棋子在对象表中的数据
                    config.mans[this._cur._temp].x=x;
                    config.mans[this._cur._temp].y=y;
                    cc.log(config.mans[this.enemyChess._temp].x,x);
                    cc.log(config.mans[this.enemyChess._temp].y,y);
                    //如果移动的位置正好是地方的位置 打掉敌方 删除敌方棋子
                    if(config.mans[this.enemyChess._temp].x==x&&config.mans[this.enemyChess._temp].y==y){
                        config.mans[this.enemyChess._temp]={};
                        this.chessRpool.put(this.enemyChess.node);
                    }
                    //改变棋子在地图中的数据
                    this._map[y][x]=this._cur._temp;
                    //隐藏选中状态
                    this._cur.choice.active=false;
                    //隐藏路线点
                    for(var i=0;i<this._curPoint.length;i++){
                        this._curPoint[i].active=false;
                    }
                    //将选中 缓存的对象置空
                    this._cur=null;
                    this._old=null;
                    this._curPoint=[];
                    this._oldPoint=[]
                }else{
                    continue;
                }
            }
        }
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
