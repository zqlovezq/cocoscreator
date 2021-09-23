
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b7cdHix81Ol6r4h+cnHYQh', 'login');
// Script/login.js

"use strict";

var http = require("Http");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.protocol = false;
    this.needLogin = true;
    this.time = 0; //    获取用户信息
    //  cc.sys.localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4")

    if (cc.sys.localStorage.getItem("token")) {
      this.needLogin = false;
      cc.wxToken = cc.sys.localStorage.getItem("token");
      cc.director.loadScene('Index');
    }
  },
  onLoginWX: function onLoginWX() {
    if (cc.sys.isNative) {
      if (this.protocol) {
        cc.wxLogin.wxLogin();
      } else {
        this.showTips();
      }
    } // this.schedule(()=>{
    //     // cc.wxLoginInfo.wxLoginResultcode = {};
    // },1)

  },
  // 选择用户协议
  clickProtocol: function clickProtocol(e) {
    var target = e.target;
    var right = target.getChildByName("right");

    if (this.protocol) {
      right.active = false;
      this.protocol = false;
    } else {
      right.active = true;
      this.protocol = true;
    }
  },
  showTips: function showTips() {
    var tips = this.node.getChildByName("tips");
    tips.y = 0;
    tips.active = true;
    cc.tween(tips).to(1, {
      y: 100
    }).delay(0.5).call(function () {
      tips.active = false;
    }).start();
  },
  update: function update(dt) {
    this.time += dt;

    if (!this.needLogin) {
      return;
    }

    if (this.time >= 1) {
      this.time = 0;

      if (cc.wxLoginResultcode && this.protocol) {
        this.protocol = false;
        var data = {
          "channel": "1",
          "imei": "1",
          "mac": "1",
          "distinct_id": "1",
          "oaid": "1",
          "android_id": "1",
          "code": cc.wxLoginResultcode
        };
        http.sendRequest("pit.v1/register", "POST", data).then(function (res) {
          // this.token.string = JSON.stringify(res)
          cc.wxToken = res.data.token;
          cc.sys.localStorage.setItem("token", res.data.token);
          cc.director.loadScene('Index');
        });
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbG9naW4uanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwicHJvdG9jb2wiLCJuZWVkTG9naW4iLCJ0aW1lIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInd4VG9rZW4iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uTG9naW5XWCIsImlzTmF0aXZlIiwid3hMb2dpbiIsInNob3dUaXBzIiwiY2xpY2tQcm90b2NvbCIsImUiLCJ0YXJnZXQiLCJyaWdodCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwidGlwcyIsIm5vZGUiLCJ5IiwidHdlZW4iLCJ0byIsImRlbGF5IiwiY2FsbCIsInVwZGF0ZSIsImR0Iiwid3hMb2dpblJlc3VsdGNvZGUiLCJkYXRhIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwidG9rZW4iLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdJO0FBQ04sU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWixDQUhNLENBSVQ7QUFDSTs7QUFDQSxRQUFHUCxFQUFFLENBQUNRLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBSCxFQUF3QztBQUNwQyxXQUFLSixTQUFMLEdBQWlCLEtBQWpCO0FBQ0FOLE1BQUFBLEVBQUUsQ0FBQ1csT0FBSCxHQUFhWCxFQUFFLENBQUNRLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBYjtBQUNBVixNQUFBQSxFQUFFLENBQUNZLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixPQUF0QjtBQUNIO0FBQ0osR0F0Qkk7QUF1QkxDLEVBQUFBLFNBdkJLLHVCQXVCTTtBQUNQLFFBQUdkLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPTyxRQUFWLEVBQW1CO0FBQ2YsVUFBRyxLQUFLVixRQUFSLEVBQWlCO0FBQ2JMLFFBQUFBLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBV0EsT0FBWDtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtDLFFBQUw7QUFDSDtBQUNKLEtBUE0sQ0FRUDtBQUNBO0FBRUE7O0FBQ0gsR0FuQ0k7QUFvQ0w7QUFDQUMsRUFBQUEsYUFyQ0sseUJBcUNTQyxDQXJDVCxFQXFDVztBQUNaLFFBQUlDLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFmO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLGNBQVAsQ0FBc0IsT0FBdEIsQ0FBWjs7QUFDQSxRQUFHLEtBQUtqQixRQUFSLEVBQWlCO0FBQ2JnQixNQUFBQSxLQUFLLENBQUNFLE1BQU4sR0FBZSxLQUFmO0FBQ0EsV0FBS2xCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSCxLQUhELE1BR0s7QUFDRGdCLE1BQUFBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLElBQWY7QUFDQSxXQUFLbEIsUUFBTCxHQUFnQixJQUFoQjtBQUNIO0FBQ0osR0EvQ0k7QUFnRExZLEVBQUFBLFFBaERLLHNCQWdESztBQUNOLFFBQUlPLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVILGNBQVYsQ0FBeUIsTUFBekIsQ0FBWDtBQUNBRSxJQUFBQSxJQUFJLENBQUNFLENBQUwsR0FBUyxDQUFUO0FBQ0FGLElBQUFBLElBQUksQ0FBQ0QsTUFBTCxHQUFjLElBQWQ7QUFDQXZCLElBQUFBLEVBQUUsQ0FBQzJCLEtBQUgsQ0FBU0gsSUFBVCxFQUFlSSxFQUFmLENBQWtCLENBQWxCLEVBQW9CO0FBQUNGLE1BQUFBLENBQUMsRUFBQztBQUFILEtBQXBCLEVBQTZCRyxLQUE3QixDQUFtQyxHQUFuQyxFQUF3Q0MsSUFBeEMsQ0FBNkMsWUFBSTtBQUM3Q04sTUFBQUEsSUFBSSxDQUFDRCxNQUFMLEdBQWMsS0FBZDtBQUNILEtBRkQsRUFFR25CLEtBRkg7QUFHSCxHQXZESTtBQXdETDJCLEVBQUFBLE1BeERLLGtCQXdERUMsRUF4REYsRUF3REs7QUFDTixTQUFLekIsSUFBTCxJQUFXeUIsRUFBWDs7QUFDQSxRQUFHLENBQUMsS0FBSzFCLFNBQVQsRUFBbUI7QUFDZjtBQUNIOztBQUNELFFBQUcsS0FBS0MsSUFBTCxJQUFXLENBQWQsRUFBZ0I7QUFDWixXQUFLQSxJQUFMLEdBQVksQ0FBWjs7QUFDQSxVQUFHUCxFQUFFLENBQUNpQyxpQkFBSCxJQUFzQixLQUFLNUIsUUFBOUIsRUFBdUM7QUFDbkMsYUFBS0EsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFlBQUk2QixJQUFJLEdBQUc7QUFDUCxxQkFBVyxHQURKO0FBRVAsa0JBQVEsR0FGRDtBQUdQLGlCQUFPLEdBSEE7QUFJUCx5QkFBZSxHQUpSO0FBS1Asa0JBQVEsR0FMRDtBQU1QLHdCQUFjLEdBTlA7QUFPUCxrQkFBUWxDLEVBQUUsQ0FBQ2lDO0FBUEosU0FBWDtBQVNDbkMsUUFBQUEsSUFBSSxDQUFDcUMsV0FBTCxDQUFpQixpQkFBakIsRUFBb0MsTUFBcEMsRUFBNENELElBQTVDLEVBQWtERSxJQUFsRCxDQUF1RCxVQUFDQyxHQUFELEVBQVM7QUFDN0Q7QUFDQXJDLFVBQUFBLEVBQUUsQ0FBQ1csT0FBSCxHQUFhMEIsR0FBRyxDQUFDSCxJQUFKLENBQVNJLEtBQXRCO0FBQ0F0QyxVQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQjhCLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDRixHQUFHLENBQUNILElBQUosQ0FBU0ksS0FBOUM7QUFDQXRDLFVBQUFBLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZQyxTQUFaLENBQXNCLE9BQXRCO0FBQ0gsU0FMQTtBQU1KO0FBQ0o7QUFDSjtBQWxGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBodHRwID0gcmVxdWlyZShcIkh0dHBcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgdGhpcy5wcm90b2NvbCA9IGZhbHNlO1xuICAgICAgIHRoaXMubmVlZExvZ2luID0gdHJ1ZTtcbiAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgIC8vICAgIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAvLyAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIixcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVgybGtJam94TURBeE1UY3hMQ0p2Y0dWdVgybGtJam9pYjFGWE5GSTFPVlZTUmxGMVlUTlNXamx2WDNsZmRHSjZVRWRMTkNJc0ltNXBZMnRmYm1GdFpTSTZJdWExdC1lYmwtaUl1ZW1WdnpJdU1DSXNJbWRsYm1SbGNpSTZNU3dpWVhaaGRHRnlJam9pYUhSMGNITTZMeTkwYUdseVpIZDRMbkZzYjJkdkxtTnVMMjF0YjNCbGJpOTJhVjh6TWk5bVIweGtSMXBuZUc1d1ZtdEpRbGRqYVdFemVXbGphV0o2YVdKRlEwSjBWekZoUWtoRWJVZGhXbVY2Y1RBeWNXZFFVVU4zU1RONU9HbGpWRTVuV0V0Q2NEQk9jRXhCTlVKRmREWjZVRWRzU0cxVlRXWTViSGQ0UWsxbkx6RXpNaUlzSW1OeVpXRjBaVjkwYVcxbElqb3dMQ0pqYUdGdWJtVnNJam9pTVNJc0ltUnBjM1JwYm1OMFgybGtJam9pTVNKOS5LNUM5WFNrRUVqQkJmUEZuMW01Qm9YR3UxMXViUGM5bFN2RFJBSGt2X1Y0XCIpXG4gICAgICAgIGlmKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKXtcbiAgICAgICAgICAgIHRoaXMubmVlZExvZ2luID0gZmFsc2U7XG4gICAgICAgICAgICBjYy53eFRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9naW5XWCgpe1xuICAgICAgICBpZihjYy5zeXMuaXNOYXRpdmUpe1xuICAgICAgICAgICAgaWYodGhpcy5wcm90b2NvbCl7XG4gICAgICAgICAgICAgICAgY2Mud3hMb2dpbi53eExvZ2luKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXBzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKCgpPT57XG4gICAgICAgIC8vICAgICAvLyBjYy53eExvZ2luSW5mby53eExvZ2luUmVzdWx0Y29kZSA9IHt9O1xuICAgICAgICAgICBcbiAgICAgICAgLy8gfSwxKVxuICAgIH0sXG4gICAgLy8g6YCJ5oup55So5oi35Y2P6K6uXG4gICAgY2xpY2tQcm90b2NvbChlKXtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgcmlnaHQgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKTtcbiAgICAgICAgaWYodGhpcy5wcm90b2NvbCl7XG4gICAgICAgICAgICByaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2wgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dUaXBzKCl7XG4gICAgICAgIGxldCB0aXBzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGlwc1wiKTtcbiAgICAgICAgdGlwcy55ID0gMDtcbiAgICAgICAgdGlwcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aXBzKS50bygxLHt5OjEwMH0pLmRlbGF5KDAuNSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGlwcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgdGhpcy50aW1lKz1kdDtcbiAgICAgICAgaWYoIXRoaXMubmVlZExvZ2luKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnRpbWU+PTEpe1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgICAgIGlmKGNjLnd4TG9naW5SZXN1bHRjb2RlJiZ0aGlzLnByb3RvY29sKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3RvY29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2hhbm5lbFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbWVpXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hY1wiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXN0aW5jdF9pZFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvYWlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWRfaWRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiBjYy53eExvZ2luUmVzdWx0Y29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS9yZWdpc3RlclwiLCBcIlBPU1RcIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudG9rZW4uc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocmVzKVxuICAgICAgICAgICAgICAgICAgICBjYy53eFRva2VuID0gcmVzLmRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4iXX0=