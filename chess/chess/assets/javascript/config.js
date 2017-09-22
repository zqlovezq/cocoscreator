/**
 * 象棋基本配置
 * author:王自权 ||qq:249316623||微信：binglong12
 */
var config = zq.config||{};
// 棋盘上所有点的坐标
// 红色旗所有坐标
config.initMap = [
    ['C0','M0','X0','S0','J0','S1','X1','M1','C1'],
    [    ,    ,    ,    ,    ,    ,    ,    ,    ],
    [    ,'P0',    ,    ,    ,    ,    ,'P1',    ],
    ['Z0',    ,'Z1',    ,'Z2',    ,'Z3',    ,'Z4'],
    [    ,    ,    ,    ,    ,    ,    ,    ,    ],
    [    ,    ,    ,    ,    ,    ,    ,    ,    ],
    ['z0',    ,'z1',    ,'z2',    ,'z3',    ,'z4'],
    [    ,'p0',    ,    ,    ,    ,    ,'p1',    ],
    [    ,    ,    ,    ,    ,    ,    ,    ,    ],
    ['c0','m0','x0','s0','j0','s1','x1','m1','c1']
];
config.mans={};
for(var i=0;i<config.initMap.length;i++){
    for(var j=0;j<config.initMap[i].length;j++){
        var key=config.initMap[i][j];
        console.log(key);
        if(typeof key==="string"){
            var man={};
            man.pater=key.slice(0,1);
            man.x=j;
            man.y=i;
            man.key=key;
            if((man.pater).charCodeAt(0)>96){
                man.my=1;
            }else{
                man.my=-1;
            }
            config.mans[key]=man;
        }else{
            continue;
        }
    }
}
cc.log(config.mans);
config.initPos=[];
for(var i=0;i<10;i++){
    config.initPos[i]=[];
    for(var j=0;j<9;j++){
        var x=-140+35*j;;
        var y;
        if(i>=5){
            y=-20-35*(i-5);
        }else{
            y=165-35*i;
        }
        config.initPos[i].push(cc.v2(x,y))
    }
}
config.arr2Clone = function (arr){
    var newArr=[];
    for (var i=0; i<arr.length ; i++){
        newArr[i] = arr[i].slice();
    }
    return newArr;
};
config.switchType=function (str) {
    var s = str.slice(0,1);
    if(s){
        if(typeof s==="string"){
            if(s.charCodeAt(0)>96){//小写
                return {type:"b",temp:str}
            }
            if(s.charCodeAt(0)<91){//大写
                return {type:"r",temp:str}
            }
        }
    }
};
//棋子要走的点
config.bylaw={};
//车
config.bylaw.c=function(arr,map,my){
    var x=arr[0];
    var y=arr[1];
    var d=[];
    //左侧检测
    for(var i=x-1;i>=0;i--){
        if(map[y][i]){
            if(config.mans[map[y][i]].my!=my)
            d.push([i,y]);
            break;
        }else{
            d.push([i,y]);
        }
    }
//    右侧检测
    for(var i=x+1;i<=8;i++){
        if(map[y][i]){
            if (config.mans[map[y][i]].my!=my) d.push([i,y]);
            break;
        }else{
            d.push([i,y]);
        }
    }
//    上检测
    for(var i=y-1;i>=0;i--){
        if(map[i][x]){
            if (config.mans[map[i][x]].my!=my) d.push([x,i]);
            break;
        }else{
            d.push([x,i]);
        }
    }
//    下检测
    for(var i=y+1;i<=9;i++){
        if(map[i][x]){
            if (config.mans[map[i][x]].my!=my) d.push([x,i]);
            break;
        }else{
            d.push([x,i]);
        }
    }
    return d;
};
//马
config.bylaw.m=function(arr,map,my){
    var x=arr[0];
    var y=arr[1];
    var d=[];
//    马可以跳八个位置
//   1点
    if ( y-2>= 0 && x+1<= 8 && !map[y-1][x] &&(!config.mans[map[y-2][x+1]] || config.mans[map[y-2][x+1]].my!=my)) d.push([x+1,y-2]);
    //2点
    if ( y-1>= 0 && x+2<= 8 && !map[y][x+1] &&(!config.mans[map[y-1][x+2]] || config.mans[map[y-1][x+2]].my!=my)) d.push([x+2,y-1]);
    //4点
    if ( y+1<= 9 && x+2<= 8 && !map[y][x+1] &&(!config.mans[map[y+1][x+2]] || config.mans[map[y+1][x+2]].my!=my)) d.push([x+2,y+1]);
    //5点
    if ( y+2<= 9 && x+1<= 8 && !map[y+1][x] &&(!config.mans[map[y+2][x+1]] || config.mans[map[y+2][x+1]].my!=my)) d.push([x+1,y+2]);
    //7点
    if ( y+2<= 9 && x-1>= 0 && !map[y+1][x] &&(!config.mans[map[y+2][x-1]] || config.mans[map[y+2][x-1]].my!=my)) d.push([x-1,y+2]);
    //8点
    if ( y+1<= 9 && x-2>= 0 && !map[y][x-1] &&(!config.mans[map[y+1][x-2]] || config.mans[map[y+1][x-2]].my!=my)) d.push([x-2,y+1]);
    //10点
    if ( y-1>= 0 && x-2>= 0 && !map[y][x-1] &&(!config.mans[map[y-1][x-2]] || config.mans[map[y-1][x-2]].my!=my)) d.push([x-2,y-1]);
    //11点
    if ( y-2>= 0 && x-1>= 0 && !map[y-1][x] &&(!config.mans[map[y-2][x-1]] || config.mans[map[y-2][x-1]].my!=my)) d.push([x-1,y-2]);
    return d;
};
//相
config.bylaw.x=function(arr,map,my){
    var x=arr[0];
    var y=arr[1];
    var d=[];
    if (my===1){ //黑方
        //4点半
        if ( y+2<= 9 && x+2<= 8 && !map[y+1][x+1] && (!config.mans[map[y+2][x+2]] || config.mans[map[y+2][x+2]].my!=my)) d.push([x+2,y+2]);
        //7点半
        if ( y+2<= 9 && x-2>= 0 && !map[y+1][x-1] && (!config.mans[map[y+2][x-2]] || config.mans[map[y+2][x-2]].my!=my)) d.push([x-2,y+2]);
        //1点半
        if ( y-2>= 5 && x+2<= 8 && !map[y-1][x+1] && (!config.mans[map[y-2][x+2]] || config.mans[map[y-2][x+2]].my!=my)) d.push([x+2,y-2]);
        //10点半
        if ( y-2>= 5 && x-2>= 0 && !map[y-1][x-1] && (!config.mans[map[y-2][x-2]] || config.mans[map[y-2][x-2]].my!=my)) d.push([x-2,y-2]);
    }else{
        //4点半
        if ( y+2<= 4 && x+2<= 8 && !map[y+1][x+1] && (!config.mans[map[y+2][x+2]] || config.mans[map[y+2][x+2]].my!=my)) d.push([x+2,y+2]);
        //7点半
        if ( y+2<= 4 && x-2>= 0 && !map[y+1][x-1] && (!config.mans[map[y+2][x-2]] || config.mans[map[y+2][x-2]].my!=my)) d.push([x-2,y+2]);
        //1点半
        if ( y-2>= 0 && x+2<= 8 && !map[y-1][x+1] && (!config.mans[map[y-2][x+2]] || config.mans[map[y-2][x+2]].my!=my)) d.push([x+2,y-2]);
        //10点半
        if ( y-2>= 0 && x-2>= 0 && !map[y-1][x-1] && (!config.mans[map[y-2][x-2]] || config.mans[map[y-2][x-2]].my!=my)) d.push([x-2,y-2]);
    }
    return d;
};
//士
config.bylaw.s = function (arr,map,my){
    var x=arr[0];
    var y=arr[1];
    var d=[];
    if (my===1){ //黑方
        //4点半
        if ( y+1<= 9 && x+1<= 5 && (!config.mans[map[y+1][x+1]] || config.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
        //7点半
        if ( y+1<= 9 && x-1>= 3 && (!config.mans[map[y+1][x-1]] || config.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
        //1点半
        if ( y-1>= 7 && x+1<= 5 && (!config.mans[map[y-1][x+1]] || config.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
        //10点半
        if ( y-1>= 7 && x-1>= 3 && (!config.mans[map[y-1][x-1]] || config.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
    }else{
        //4点半
        if ( y+1<= 2 && x+1<= 5 && (!config.mans[map[y+1][x+1]] || config.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
        //7点半
        if ( y+1<= 2 && x-1>= 3 && (!config.mans[map[y+1][x-1]] || config.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
        //1点半
        if ( y-1>= 0 && x+1<= 5 && (!config.mans[map[y-1][x+1]] || config.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
        //10点半
        if ( y-1>= 0 && x-1>= 3 && (!config.mans[map[y-1][x-1]] || config.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
    }
    return d;

}
//将
config.bylaw.j = function (arr,map,my){
    var x=arr[0];
    var y=arr[1];
    var d=[];
    var isNull=(function (){
        var y1=config.mans["j0"].y;
        var x1=config.mans["J0"].x;
        var y2=config.mans["J0"].y;
        for (var i=y1-1; i>y2; i--){
            if (map[i][x1]) return false;
        }
        return true;
    })();
    if (my===1){ //黑方
        //下
        if ( y+1<= 9  && (!config.mans[map[y+1][x]] || config.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
        //上
        if ( y-1>= 7 && (!config.mans[map[y-1][x]] || config.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
        //老将对老将的情况
        if ( config.mans["j0"].x == config.mans["J0"].x &&isNull) d.push([config.mans["J0"].x,config.mans["J0"].y]);

    }else{
        //下
        if ( y+1<= 2  && (!config.mans[map[y+1][x]] || config.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
        //上
        if ( y-1>= 0 && (!config.mans[map[y-1][x]] || config.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
        //老将对老将的情况
        if ( config.mans["j0"].x == config.mans["J0"].x &&isNull) d.push([config.mans["j0"].x,config.mans["j0"].y]);
    }
    //右
    if ( x+1<= 5  && (!config.mans[map[y][x+1]] || config.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
    //左
    if ( x-1>= 3 && (!config.mans[map[y][x-1]] || config.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
    return d;
};
//炮
config.bylaw.p = function (arr,map,my){
    var x=arr[0];
    var y=arr[1];
    var d=[];
    //左侧检索
    var n=0;
    for (var i=x-1; i>= 0; i--){
        if (map[y][i]) {
            if (n==0){
                n++;
                continue;
            }else{
                if (config.mans[map[y][i]].my!=my) d.push([i,y]);
                break
            }
        }else{
            if(n==0) d.push([i,y])
        }
    }
    //右侧检索
    var n=0;
    for (var i=x+1; i <= 8; i++){
        if (map[y][i]) {
            if (n==0){
                n++;
                continue;
            }else{
                if (config.mans[map[y][i]].my!=my) d.push([i,y]);
                break
            }
        }else{
            if(n==0) d.push([i,y])
        }
    }
    //上检索
    var n=0;
    for (var i = y-1 ; i >= 0; i--){
        if (map[i][x]) {
            if (n==0){
                n++;
                continue;
            }else{
                if (config.mans[map[i][x]].my!=my) d.push([x,i]);
                break
            }
        }else{
            if(n==0) d.push([x,i])
        }
    }
    //下检索
    var n=0;
    for (var i = y+1 ; i<= 9; i++){
        if (map[i][x]) {
            if (n==0){
                n++;
                continue;
            }else{
                if (config.mans[map[i][x]].my!=my) d.push([x,i]);
                break
            }
        }else{
            if(n==0) d.push([x,i])
        }
    }
    return d;

};
//卒
config.bylaw.z = function (arr,map,my){
    var x = arr[0];
    var y = arr[1];
    var d=[];
    if (my===1){ //红方
        //上
        if ( y-1>= 0 && (!config.mans[map[y-1][x]] || config.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
        //右
        if ( x+1<= 8 && y<=4  && (!config.mans[map[y][x+1]] || config.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
        //左
        if ( x-1>= 0 && y<=4 && (!config.mans[map[y][x-1]] || config.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
    }else{
        //下
        if ( y+1<= 9  && (!config.mans[map[y+1][x]] || config.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
        //右
        if ( x+1<= 8 && y>=6  && (!config.mans[map[y][x+1]] || config.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
        //左
        if ( x-1>= 0 && y>=6 && (!config.mans[map[y][x-1]] || config.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
    }
    return d;
};
module.exports=config;