System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, RichText, InfiniteCell, formatTimestamp, LangMgr, tab, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, FincaFightLogItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatTimestamp(extras) {
    _reporterNs.report("formatTimestamp", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      formatTimestamp = _unresolved_3.formatTimestamp;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2c80cPAudHI4hUy9hrJvEY", "FincaFightLogItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightLogItem", FincaFightLogItem = (_dec = ccclass('FincaFightLogItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(RichText), _dec5 = property(Label), _dec(_class = (_class2 = class FincaFightLogItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_win", _descriptor, this);

          _initializerDefineProperty(this, "node_lose", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_log", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_time", _descriptor4, this);
        }

        UpdateContent(data) {
          this.lbl_time.string = (_crd && formatTimestamp === void 0 ? (_reportPossibleCrUseOfformatTimestamp({
            error: Error()
          }), formatTimestamp) : formatTimestamp)(data.time);
          this.node_lose.active = !data.isWin;
          this.node_win.active = data.isWin; // type 0: 挑战他人，1: 被他人挑战

          var roleName = data.opponentRoleName;

          if (data.opponentRoleId.indexOf("r_") > -1) {
            // 当前是机器人 SimpleRoleInfo
            var robotId = Number(data.opponentRoleId.replace("r_", ""));
            var tabInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RobotTableById.getValue(robotId);
            roleName = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(tabInfo.Name);
          }

          if (data.type === 0) {
            var str = data.isWin ? "ui_fincafight_14" : "ui_fincafight_15";
            this.lbl_log.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString(str, [roleName, data.changeScore]);
          } else {
            var _str = data.isWin ? "ui_fincafight_16" : "ui_fincafight_17";

            this.lbl_log.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString(_str, [roleName, data.changeScore]);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_win", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_lose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_log", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_time", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2bba22479b9faf88528323aebd5c5f702e9ce0db.js.map