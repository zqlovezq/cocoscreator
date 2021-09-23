
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Hook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d771RnIftD4KOCJTnyU0cq', 'Hook');
// Script/Hook.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  //这个只是当前挂在了这个组件的节点初始完成执行，start 是所有节点初始完成执行
  // onLoad () {},
  start: function start() {
    //初始化 放到update里执行，必须等待canvas的prefab加载完事后才执行初始化
    this.init();
  },

  /**
   * @description 初始化 所有东西需要在动态资源加载完成后进行初始化
   */
  init: function init() {
    //获取Main 组件 需要先获取节点
    this.Canvas = cc.find('Canvas');
    this.Main = this.Canvas.getComponent('Main');
    this.Prefab = this.Main.Prefab; //获取钩子下item节点

    this.Item = cc.find('Canvas/Header/Miner/Hook/item'); //监听碰撞

    this.onCollisionEnter = this.onCollisionEnterA;
  },

  /**
   * @description 监听碰撞
   * @param {Object} other 其他与本节点碰撞的节点
   * @param {Object} self 本节点
   */
  onCollisionEnterA: function onCollisionEnterA(other, self) {
    if (this.Main.HookState == 2) return;
    this.other = other;
    this.isWall = this.Wall(other);
    this.isTnt = this.Tnt(other);
    this.isMouse = this.Mouse(other); //处理钩子撞墙

    if (this.isWall) {
      //拉回钩子
      this.Main.PullBackHook();
      return;
    }

    ;

    if (this.isTnt) {
      this.Main.destroyTnt(other.node);
      other.node.getChildByName("icon").active = false;
      var boom = other.node.boom;
      boom.active = true;
      boom.getComponent(cc.Animation).play("boom");

      if (cc.zm.showShake) {
        if (cc.sys.isNative) {
          jsb.Device.vibrate(0.3);
        }
      }
    }

    if (this.isMouse) {
      other.node.stopAllActions();
    } //根据物品设置拉回钩子速度


    this.Main.SetSpeed(other); //播放碰撞音效

    if (cc.zm.showMusic) {
      cc.audioEngine.play(this.Main.CollisionAudio);
    } //将物品放置钩子上


    this.other.node.y = -(this.Main.Hook.height + 2);
    this.other.node.x = -(this.Main.Hook.width / 2);
    other.node.parent = this.Item;
    other.node.anchorY = 1;
    this.node.getComponent(cc.Sprite).spriteFrame = this.Main.HookFrames[1];
    this.Main.PullBackHook();
  },

  /**
   * @description 删除被勾中的物品再创建被勾中的物品
   */
  MoveItemToHook: function MoveItemToHook() {
    if (this.isWall) return; // if(this.isTnt)return;

    this.other.node.y = -(this.Main.Hook.height + 2);
    this.other.node.x = -(this.Main.Hook.width / 2);
  },

  /**
   * @description 返回钩子是否撞墙
   */
  Wall: function Wall(other) {
    return other.node.group == 'Wall';
  },

  /**
   * @description 返回是否是炸药桶
   */
  Tnt: function Tnt(other) {
    return other.node.group == 'Tnt';
  },
  Mouse: function Mouse(other) {
    return other.node.group == 'Mouse';
  },
  update: function update(dt) {
    if (this.other && this.other.node && this.Main.HookState == 2) {
      this.MoveItemToHook();
    }

    ;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSG9vay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5pdCIsIkNhbnZhcyIsImZpbmQiLCJNYWluIiwiZ2V0Q29tcG9uZW50IiwiUHJlZmFiIiwiSXRlbSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvbkNvbGxpc2lvbkVudGVyQSIsIm90aGVyIiwic2VsZiIsIkhvb2tTdGF0ZSIsImlzV2FsbCIsIldhbGwiLCJpc1RudCIsIlRudCIsImlzTW91c2UiLCJNb3VzZSIsIlB1bGxCYWNrSG9vayIsImRlc3Ryb3lUbnQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJib29tIiwiQW5pbWF0aW9uIiwicGxheSIsInptIiwic2hvd1NoYWtlIiwic3lzIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwic3RvcEFsbEFjdGlvbnMiLCJTZXRTcGVlZCIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwiQ29sbGlzaW9uQXVkaW8iLCJ5IiwiSG9vayIsImhlaWdodCIsIngiLCJ3aWR0aCIsInBhcmVudCIsImFuY2hvclkiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkhvb2tGcmFtZXMiLCJNb3ZlSXRlbVRvSG9vayIsImdyb3VwIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUw7QUFDQTtBQUNBO0FBRUFDLEVBQUFBLEtBVkssbUJBVUk7QUFDTDtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQWJJOztBQWNMO0FBQ0o7QUFDQTtBQUNJQSxFQUFBQSxJQWpCSyxrQkFpQkM7QUFDRjtBQUNBLFNBQUtDLE1BQUwsR0FBY04sRUFBRSxDQUFDTyxJQUFILENBQVEsUUFBUixDQUFk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LyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIC8v6L+Z5Liq5Y+q5piv5b2T5YmN5oyC5Zyo5LqG6L+Z5Liq57uE5Lu255qE6IqC54K55Yid5aeL5a6M5oiQ5omn6KGM77yMc3RhcnQg5piv5omA5pyJ6IqC54K55Yid5aeL5a6M5oiQ5omn6KGMXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvL+WIneWni+WMliDmlL7liLB1cGRhdGXph4zmiafooYzvvIzlv4XpobvnrYnlvoVjYW52YXPnmoRwcmVmYWLliqDovb3lrozkuovlkI7miY3miafooYzliJ3lp4vljJZcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOaJgOacieS4nOilv+mcgOimgeWcqOWKqOaAgei1hOa6kOWKoOi9veWujOaIkOWQjui/m+ihjOWIneWni+WMllxuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgICAgLy/ojrflj5ZNYWluIOe7hOS7tiDpnIDopoHlhYjojrflj5boioLngrlcbiAgICAgICAgdGhpcy5DYW52YXMgPSBjYy5maW5kKCdDYW52YXMnKTtcbiAgICAgICAgdGhpcy5NYWluID0gdGhpcy5DYW52YXMuZ2V0Q29tcG9uZW50KCdNYWluJyk7XG4gICAgICAgIHRoaXMuUHJlZmFiID0gdGhpcy5NYWluLlByZWZhYjtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDkuItpdGVt6IqC54K5XG4gICAgICAgIHRoaXMuSXRlbSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvTWluZXIvSG9vay9pdGVtJyk7XG4gICAgICAgIC8v55uR5ZCs56Kw5pKeXG4gICAgICAgIHRoaXMub25Db2xsaXNpb25FbnRlciA9IHRoaXMub25Db2xsaXNpb25FbnRlckE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDnm5HlkKznorDmkp5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3RoZXIg5YW25LuW5LiO5pys6IqC54K556Kw5pKe55qE6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGYg5pys6IqC54K5XG4gICAgICovXG4gICAgb25Db2xsaXNpb25FbnRlckEob3RoZXIsIHNlbGYpe1xuICAgICAgICBpZih0aGlzLk1haW4uSG9va1N0YXRlID09IDIpcmV0dXJuO1xuICAgICAgICB0aGlzLm90aGVyID0gb3RoZXI7XG4gICAgICAgIHRoaXMuaXNXYWxsID0gdGhpcy5XYWxsKG90aGVyKTtcbiAgICAgICAgdGhpcy5pc1RudCA9IHRoaXMuVG50KG90aGVyKTtcbiAgICAgICAgdGhpcy5pc01vdXNlID0gdGhpcy5Nb3VzZShvdGhlcik7XG4gICAgICAgIC8v5aSE55CG6ZKp5a2Q5pKe5aKZXG4gICAgICAgIGlmKHRoaXMuaXNXYWxsKXtcbiAgICAgICAgICAgIC8v5ouJ5Zue6ZKp5a2QXG4gICAgICAgICAgICB0aGlzLk1haW4uUHVsbEJhY2tIb29rKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuaXNUbnQpe1xuICAgICAgICAgICAgdGhpcy5NYWluLmRlc3Ryb3lUbnQob3RoZXIubm9kZSk7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBib29tID0gb3RoZXIubm9kZS5ib29tO1xuICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcbiAgICAgICAgICAgIGlmKGNjLnptLnNob3dTaGFrZSl7XG4gICAgICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNNb3VzZSl7XG4gICAgICAgICAgICBvdGhlci5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/moLnmja7nianlk4Horr7nva7mi4nlm57pkqnlrZDpgJ/luqZcbiAgICAgICAgdGhpcy5NYWluLlNldFNwZWVkKG90aGVyKTtcbiAgICAgICAgLy/mkq3mlL7norDmkp7pn7PmlYhcbiAgICAgICAgaWYoY2Muem0uc2hvd011c2ljKXtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5NYWluLkNvbGxpc2lvbkF1ZGlvKTtcbiAgICAgICAgfVxuICAgICAgICAvL+WwhueJqeWTgeaUvue9rumSqeWtkOS4ilxuICAgICAgICB0aGlzLm90aGVyLm5vZGUueSA9IC0odGhpcy5NYWluLkhvb2suaGVpZ2h0ICsgMik7XG4gICAgICAgIHRoaXMub3RoZXIubm9kZS54ID0gLSh0aGlzLk1haW4uSG9vay53aWR0aCAvIDIpO1xuICAgICAgICBvdGhlci5ub2RlLnBhcmVudCA9IHRoaXMuSXRlbTtcbiAgICAgICAgb3RoZXIubm9kZS5hbmNob3JZID0gMTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluLkhvb2tGcmFtZXNbMV1cbiAgICAgICAgdGhpcy5NYWluLlB1bGxCYWNrSG9vaygpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIoOmZpOiiq+WLvuS4reeahOeJqeWTgeWGjeWIm+W7uuiiq+WLvuS4reeahOeJqeWTgVxuICAgICAqL1xuICAgIE1vdmVJdGVtVG9Ib29rKCl7XG4gICAgICAgIGlmKHRoaXMuaXNXYWxsKXJldHVybjtcbiAgICAgICAgLy8gaWYodGhpcy5pc1RudClyZXR1cm47XG4gICAgICAgIHRoaXMub3RoZXIubm9kZS55ID0gLSh0aGlzLk1haW4uSG9vay5oZWlnaHQgKyAyKTtcbiAgICAgICAgdGhpcy5vdGhlci5ub2RlLnggPSAtKHRoaXMuTWFpbi5Ib29rLndpZHRoIC8gMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDov5Tlm57pkqnlrZDmmK/lkKbmkp7loplcbiAgICAgKi9cbiAgICBXYWxsKG90aGVyKXtcbiAgICAgICAgcmV0dXJuIG90aGVyLm5vZGUuZ3JvdXAgPT0gJ1dhbGwnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOi/lOWbnuaYr+WQpuaYr+eCuOiNr+ahtlxuICAgICAqL1xuICAgICBUbnQob3RoZXIpe1xuICAgICAgICByZXR1cm4gb3RoZXIubm9kZS5ncm91cCA9PSAnVG50JztcbiAgICB9LFxuICAgIE1vdXNlKG90aGVyKXtcbiAgICAgICAgcmV0dXJuIG90aGVyLm5vZGUuZ3JvdXAgPT0gJ01vdXNlJztcbiAgICB9LFxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5vdGhlciAmJiB0aGlzLm90aGVyLm5vZGUgJiYgdGhpcy5NYWluLkhvb2tTdGF0ZSA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMuTW92ZUl0ZW1Ub0hvb2soKTtcbiAgICAgICAgfTtcbiAgICB9LFxufSk7XG4iXX0=