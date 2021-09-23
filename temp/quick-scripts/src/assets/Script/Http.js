"use strict";
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