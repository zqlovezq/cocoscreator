System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Http, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "335b2Zw18hHab+g4itO4BFA", "Http", undefined);

      __checkObsolete__(['assetManager', 'js', 'loader']);

      _export("default", Http = class Http {
        static request(dd) {
          let http = new Http();
          http.errCount = 0;
          http.send(dd);
        }

        constructor() {
          this.errCount = void 0;
        }

        send(dd) {
          console.warn(`http----------------${dd.host}?${dd.reqParam}`, this.parmsFormat(dd.reqParam));

          if (dd.host == "") {
            return;
          }

          let request = new XMLHttpRequest();
          request.open("GET", `${dd.host}?${this.parmsFormat(dd.reqParam)}`, true);

          request.onload = () => {
            console.log(`http request onload readyState=${request.readyState}, status=${request.status}， txt=${request.responseText}`);
            let responseJson = JSON.parse(request.responseText);
            dd.cb && dd.cb(responseJson);
          };

          request.onerror = err => {
            console.log(`http request onerror`, request.status, request.statusText);
            this.onErr(dd);
          };

          request.ontimeout = err => {
            console.log(`http request ontimeout`);
            this.onErr(dd);
          };

          request.timeout = 10000;

          try {
            request.send();
          } catch (error) {
            this.onErr(dd);
          }
        }

        parmsFormat(reqParam) {
          let newParams = "";
          let list = reqParam.split("&");

          for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let firstEqualIndex = v.indexOf('=');

            if (firstEqualIndex >= 0) {
              if (newParams.length != 0) {
                newParams += "&";
              }

              newParams += `${v.substring(0, firstEqualIndex)}=${encodeURIComponent(v.substring(firstEqualIndex + 1, v.length))}`;
            }
          }

          return newParams;
        }

        onErr(dd) {
          this.errCount = this.errCount + 1;

          if (this.errCount >= 3) {
            dd.cb && dd.cb();
            return;
          }

          this.send(dd);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7659512ae3d00d634fe8f5060cf3e888dfa48a71.js.map