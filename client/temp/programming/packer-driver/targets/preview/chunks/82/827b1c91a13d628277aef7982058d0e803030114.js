System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventMgr, _dec, _class, _crd, ccclass, property, RequestButton;

  function WaitRequestBack(ptl, target) {
    return new Promise(resolve => {
      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
        error: Error()
      }), EventMgr) : EventMgr).onMsg(ptl, (buffer, ptl) => {
        resolve(buffer);
        (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
          error: Error()
        }), EventMgr) : EventMgr).unTarget(target);
      }, target);
    });
  } // 封装按钮点击方法


  function createRequestButton(button, ptl) {
    var isClickable = true; // 控制按钮是否可以点击
    // 定义按钮点击事件

    button.node.on("click", function () {
      if (!isClickable) return; // 如果不可点击，直接返回
      // 禁用按钮，防止多次点击

      isClickable = false;
      button.enabled = false; // 创建超时Promise，2秒后自动触发

      var timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("请求超时")), 2000);
      }); // 使用 Promise.race 来处理超时情况

      Promise.race([WaitRequestBack(ptl, button.node), timeoutPromise]).then(response => {
        // 处理服务器返回的响应
        console.log("服务器响应:", response);
      }).catch(error => {
        // 处理请求失败或超时的情况
        console.error(error.message);
      }).then(() => {
        // 在收到响应或超时后，恢复按钮的点击状态
        isClickable = true;
        button.enabled = true;
      });
    });
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../logic/mgr/EventMgr", _context.meta, extras);
  }

  _export("WaitRequestBack", WaitRequestBack);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "581f8cfXPNCgKXeXDMt9zoK", "RequestButton", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RequestButton", RequestButton = (_dec = ccclass('RequestButton'), _dec(_class = class RequestButton {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=827b1c91a13d628277aef7982058d0e803030114.js.map