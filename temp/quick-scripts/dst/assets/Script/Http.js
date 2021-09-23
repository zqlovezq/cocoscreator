
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd96dt+tdBJybW9vwwJ42yn', 'Http');
// Script/Http.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  statics: {
    base_url: "https://pit.api.jiankangzhuan.com/",
    //测试服
    // sendRequest: function (url, data, success, fail) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.timeout = 2000;
    //     var requestURL = this.base_url + url;
    //     xhr.open(data.type, requestURL, true);
    //     // xhr.responseType = "arraybuffer" 
    //     if(cc.sys.isNative){
    //         cc.log("isNative");
    //         xhr.setRequestHeader("Accept-Encodeing","gzip,deflate");
    //     }
    //     if(url==="pit.v1.PitSvc/UserInfo"){
    //         // 如果当前是获取用户信息 测试用的token
    //         let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMDcwLCJvcGVuX2lkIjoiIiwibmlja19uYW1lIjoi6K6_5a6iOTUyNyIsImdlbmRlciI6MCwiYXZhdGFyIjoiIiwiY3JlYXRlX3RpbWUiOjE2MzA5OTM0MzksImNoYW5uZWwiOiIiLCJkaXN0aW5jdF9pZCI6IiJ9.ptOVOXd2IDFE9C9fi6o7KAgY2I53xQmnsjv3AmEEcFc"
    //         xhr.setRequestHeader("Authorization",token);
    //     }
    //     cc.log("requestURL=",requestURL)
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4 && xhr.status == 200) {
    //             cc.log("http res:" + xhr.response);
    //             if (success !== null) {
    //                 success(xhr.response);
    //             }
    //         }
    //     };
    //     xhr.send(JSON.stringify(data));
    //     return xhr;
    // }
    // 用新的promise来写这个接口
    sendRequest: function sendRequest(url, type, data) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var requestURL = "https://pit.api.jiankangzhuan.com/" + url; // let requestURL = "https://qa.api.jiankangzhuan.com/v2.QASvc/UserQaRankingList";

        xhr.open(type, requestURL, true);

        if (cc.sys.isNative) {
          cc.log("isNative");
          xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
        }

        if (cc.wxToken) {
          xhr.setRequestHeader("Authorization", cc.wxToken);
        }

        xhr.setRequestHeader("Content-Type", "application/json");
        cc.log("requestURL=", requestURL);
        cc.log("data=", JSON.stringify(data));

        xhr.onreadystatechange = function () {
          // cc.log(xhr.readyState,"+",xhr.status)
          if (xhr.readyState === 4 && xhr.status == 200) {
            cc.log("http res:" + xhr.response); // 统一处理

            var _response = JSON.parse(xhr.response);

            if (_response.code === 0) {
              resolve(_response);
            } else {
              console.log(_response.message);
              reject(_response.message);
            }
          }
        };

        xhr.onerror = function () {
          reject(new Error(xhr.statusText));
        }; // console.log("data",JSON.stringify(data));
        // xhr.send();


        xhr.send(JSON.stringify(data));
      });
    }
  },
  // use this for initialization
  onLoad: function onLoad() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSHR0cC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXRpY3MiLCJiYXNlX3VybCIsInNlbmRSZXF1ZXN0IiwidXJsIiwidHlwZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwicmVxdWVzdFVSTCIsIm9wZW4iLCJzeXMiLCJpc05hdGl2ZSIsImxvZyIsInNldFJlcXVlc3RIZWFkZXIiLCJ3eFRva2VuIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIl9yZXNwb25zZSIsInBhcnNlIiwiY29kZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwib25lcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsInNlbmQiLCJvbkxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUUsb0NBREw7QUFDMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsV0FBVyxFQUFFLHFCQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ25DLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzFDLFlBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQSxZQUFJQyxVQUFVLEdBQUcsdUNBQXVDUixHQUF4RCxDQUYwQyxDQUcxQzs7QUFDQU0sUUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVNSLElBQVQsRUFBZU8sVUFBZixFQUEyQixJQUEzQjs7QUFDQSxZQUFJZixFQUFFLENBQUNpQixHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakJsQixVQUFBQSxFQUFFLENBQUNtQixHQUFILENBQU8sVUFBUDtBQUNBTixVQUFBQSxHQUFHLENBQUNPLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxjQUF6QztBQUNIOztBQUNELFlBQUdwQixFQUFFLENBQUNxQixPQUFOLEVBQWM7QUFDVlIsVUFBQUEsR0FBRyxDQUFDTyxnQkFBSixDQUFxQixlQUFyQixFQUFzQ3BCLEVBQUUsQ0FBQ3FCLE9BQXpDO0FBQ0g7O0FBQ0RSLFFBQUFBLEdBQUcsQ0FBQ08sZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0FwQixRQUFBQSxFQUFFLENBQUNtQixHQUFILENBQU8sYUFBUCxFQUFzQkosVUFBdEI7QUFDQWYsUUFBQUEsRUFBRSxDQUFDbUIsR0FBSCxDQUFPLE9BQVAsRUFBZ0JHLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmLENBQWhCOztBQUNBSSxRQUFBQSxHQUFHLENBQUNXLGtCQUFKLEdBQXlCLFlBQVk7QUFDakM7QUFDQSxjQUFJWCxHQUFHLENBQUNZLFVBQUosS0FBbUIsQ0FBbkIsSUFBd0JaLEdBQUcsQ0FBQ2EsTUFBSixJQUFjLEdBQTFDLEVBQStDO0FBQzNDMUIsWUFBQUEsRUFBRSxDQUFDbUIsR0FBSCxDQUFPLGNBQWNOLEdBQUcsQ0FBQ2MsUUFBekIsRUFEMkMsQ0FFM0M7O0FBQ0EsZ0JBQUlDLFNBQVMsR0FBR04sSUFBSSxDQUFDTyxLQUFMLENBQVdoQixHQUFHLENBQUNjLFFBQWYsQ0FBaEI7O0FBQ0EsZ0JBQUdDLFNBQVMsQ0FBQ0UsSUFBVixLQUFpQixDQUFwQixFQUFzQjtBQUNsQm5CLGNBQUFBLE9BQU8sQ0FBQ2lCLFNBQUQsQ0FBUDtBQUNILGFBRkQsTUFFSztBQUNERyxjQUFBQSxPQUFPLENBQUNaLEdBQVIsQ0FBWVMsU0FBUyxDQUFDSSxPQUF0QjtBQUNBcEIsY0FBQUEsTUFBTSxDQUFDZ0IsU0FBUyxDQUFDSSxPQUFYLENBQU47QUFDSDtBQUNKO0FBQ0osU0FiRDs7QUFjQW5CLFFBQUFBLEdBQUcsQ0FBQ29CLE9BQUosR0FBYyxZQUFZO0FBQ3RCckIsVUFBQUEsTUFBTSxDQUFDLElBQUlzQixLQUFKLENBQVVyQixHQUFHLENBQUNzQixVQUFkLENBQUQsQ0FBTjtBQUNILFNBRkQsQ0E3QjBDLENBZ0MxQztBQUNBOzs7QUFDQXRCLFFBQUFBLEdBQUcsQ0FBQ3VCLElBQUosQ0FBU2QsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWYsQ0FBVDtBQUNILE9BbkNNLENBQVA7QUFvQ0g7QUFuRUksR0FQSjtBQTZFTDtBQUNBNEIsRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBRW5CO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBiYXNlX3VybDogXCJodHRwczovL3BpdC5hcGkuamlhbmthbmd6aHVhbi5jb20vXCIsLy/mtYvor5XmnI1cbiAgICAgICAgLy8gc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uICh1cmwsIGRhdGEsIHN1Y2Nlc3MsIGZhaWwpIHtcbiAgICAgICAgLy8gICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgLy8gICAgIHhoci50aW1lb3V0ID0gMjAwMDtcbiAgICAgICAgLy8gICAgIHZhciByZXF1ZXN0VVJMID0gdGhpcy5iYXNlX3VybCArIHVybDtcbiAgICAgICAgLy8gICAgIHhoci5vcGVuKGRhdGEudHlwZSwgcmVxdWVzdFVSTCwgdHJ1ZSk7XG4gICAgICAgIC8vICAgICAvLyB4aHIucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiIFxuICAgICAgICAvLyAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgLy8gICAgICAgICBjYy5sb2coXCJpc05hdGl2ZVwiKTtcbiAgICAgICAgLy8gICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGVpbmdcIixcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmKHVybD09PVwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiKXtcbiAgICAgICAgLy8gICAgICAgICAvLyDlpoLmnpzlvZPliY3mmK/ojrflj5bnlKjmiLfkv6Hmga8g5rWL6K+V55So55qEdG9rZW5cbiAgICAgICAgLy8gICAgICAgICBsZXQgdG9rZW4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVgybGtJam94TURBeE1EY3dMQ0p2Y0dWdVgybGtJam9pSWl3aWJtbGphMTl1WVcxbElqb2k2SzZfNWE2aU9UVXlOeUlzSW1kbGJtUmxjaUk2TUN3aVlYWmhkR0Z5SWpvaUlpd2lZM0psWVhSbFgzUnBiV1VpT2pFMk16QTVPVE0wTXprc0ltTm9ZVzV1Wld3aU9pSWlMQ0prYVhOMGFXNWpkRjlwWkNJNklpSjkucHRPVk9YZDJJREZFOUM5Zmk2bzdLQWdZMkk1M3hRbW5zanYzQW1FRWNGY1wiXG4gICAgICAgIC8vICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsdG9rZW4pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgY2MubG9nKFwicmVxdWVzdFVSTD1cIixyZXF1ZXN0VVJMKVxuICAgICAgICAvLyAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY2MubG9nKFwiaHR0cCByZXM6XCIgKyB4aHIucmVzcG9uc2UpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3VjY2Vzcyh4aHIucmVzcG9uc2UpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy8gICAgIHJldHVybiB4aHI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8g55So5paw55qEcHJvbWlzZeadpeWGmei/meS4quaOpeWPo1xuICAgICAgICBzZW5kUmVxdWVzdDogZnVuY3Rpb24gKHVybCwgdHlwZSxkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdFVSTCA9IFwiaHR0cHM6Ly9waXQuYXBpLmppYW5rYW5nemh1YW4uY29tL1wiICsgdXJsO1xuICAgICAgICAgICAgICAgIC8vIGxldCByZXF1ZXN0VVJMID0gXCJodHRwczovL3FhLmFwaS5qaWFua2FuZ3podWFuLmNvbS92Mi5RQVN2Yy9Vc2VyUWFSYW5raW5nTGlzdFwiO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHJlcXVlc3RVUkwsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiaXNOYXRpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kZWluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY2Mud3hUb2tlbil7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBjYy53eFRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcInJlcXVlc3RVUkw9XCIsIHJlcXVlc3RVUkwpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImRhdGE9XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coeGhyLnJlYWR5U3RhdGUsXCIrXCIseGhyLnN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJodHRwIHJlczpcIiArIHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnu5/kuIDlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfcmVzcG9uc2UuY29kZT09PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3Jlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coX3Jlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChfcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoeGhyLnN0YXR1c1RleHQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIixKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgLy8geGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbn0pO1xuIl19