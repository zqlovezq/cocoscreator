System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, Bridge, _crd, JSBridgePath;

  _export("Bridge", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc29fvxMo1HCLfBQiQTuBLY", "Bridge", undefined);

      __checkObsolete__(['native', 'sys']);

      JSBridgePath = "com/cocos/game/JSBridge";
      /** 原生桥接
       * 传递参数和返回参数， 统一为String (传递可为空)
       * 
       * java 目前 Cocos Creator 中支持的 Java 类型签名有以下 4 种：
       * Java 类型	签名  I 整数，F 浮点，Z 布尔，Ljava/lang/String;字符串 (ILjava/lang/String;I)Ljava/lang/String;表示参数类型为一个 int，一个 String 和一个 int，一个，返回值类型为 String 的方法
       * 
       */

      _export("Bridge", Bridge = class Bridge {
        static init() {
          // window["bridgeCallback"] = this.bridgeCallback.bind(this)
          this.methodCache = {}; // if (sys.isNative) {
          //     this.isIos = (sys.os == sys.OS.IOS || sys.os == sys.OS.OSX)
          //     this.isAndroid = sys.platform == sys.Platform.ANDROID
          //     native.jsbBridgeWrapper.addNativeEventListener("bridgeCallback", (jsonStr: string) => {
          //         console.log("native回调", jsonStr)
          //         let data = JSON.parse(jsonStr)
          //         if (data) {
          //             this.bridgeCallback(data.method, data.param)
          //         }
          //     })
          // }
        }

        static bridgeCallback(method, param) {
          if (this.methodCache[method]) {
            this.methodCache[method](param);
          } else {
            console.log("未找到回调");
          }
        }
        /**
         * 
         * @param methodName 原生方法名
         * @param param 传递的参数（json字符串）签名为空时， 表示无参数并且无返回
         * @param methodSignature 方法签名 
         * @param call 回调函数
         * 
         * ios只有方法名和参数， 不需要签名，只支持不传递参数和传递一个字符串
         * @returns 原生返回值，(字符串)
         */


        static callWithBack(call, methodName, param, methodSignature) {
          if (call) {
            this.methodCache[methodName] = call;
          }

          return this.call(methodName, param, methodSignature);
        }
        /**
         * 
         * @param methodName 原生方法名
         * @param param 传递的参数（json字符串） 签名为空时， 表示无参数并且无返回
         * @param methodSignature 方法签名 
         * 
         * ios只有方法名和参数， 不需要签名，只支持不传递参数和传递一个字符串
         * @returns 原生返回值，(字符串)
         */


        static call(methodName, param, methodSignature) {
          if (this.isIos) {
            /** ios只有方法名和参数， 不需要签名 */
            if (param == null) {
              return native.reflection.callStaticMethod("JSBridge", methodName);
            } else {
              return native.reflection.callStaticMethod("JSBridge", methodName, param);
            }
          } else {
            console.log("bridge call", methodName, methodSignature, param);

            if (methodSignature == null) {
              return native.reflection.callStaticMethod(JSBridgePath, methodName, "()V");
            } else if (param == null) {
              return native.reflection.callStaticMethod(JSBridgePath, methodName, methodSignature);
            } else {
              return native.reflection.callStaticMethod(JSBridgePath, methodName, methodSignature, param);
            }
          }
        } //---------------测试----------


        static testCall() {
          var code;

          if (this.isIos) {
            code = this.call("getAppVersionCode");
          } else {
            code = this.call("getAppVersionCode", "()Ljava/lang/String;");
          }

          console.log("getAppVersionCode", code);
        }

        static testCallWithBack() {
          if (this.isIos) {
            this.callWithBack(param => {
              console.log("testCallWithBack回调", param);
            }, "testCallBack:", "jstojava");
          } else {
            this.callWithBack(param => {
              console.log("testCallWithBack回调", param);
            }, "testCallBack", "jstojava", "(Ljava/lang/String;)V");
          }
        }

      });

      Bridge.methodCache = {};
      Bridge.isIos = false;
      Bridge.isAndroid = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba94eda76505547d1637d9a92c82aa586d68508d.js.map