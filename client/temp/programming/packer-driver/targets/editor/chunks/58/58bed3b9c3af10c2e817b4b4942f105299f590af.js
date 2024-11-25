System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Component, RoleData, tab, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PowerDifficultyTag;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
      Node = _cc.Node;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      RoleData = _unresolved_2.RoleData;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8024aDYc4lG650U+cGU37Bc", "PowerDifficultyTag", undefined);

      __checkObsolete__(['_decorator', 'Tween', 'Vec3', 'Node', 'tween', 'v3', 'CCFloat', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PowerDifficultyTag", PowerDifficultyTag = (_dec = ccclass('PowerDifficultyTag'), _dec2 = property([Node]), _dec(_class = (_class2 = class PowerDifficultyTag extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodes", _descriptor, this);

          this.stageId = 0;
        }

        setPower(power, recommendPower) {
          let a = power / recommendPower; // console.log(power, recommendPower, a)

          let idx = 0;

          if (a >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().PveStageDifficultyTag[0]) {
            idx = 0;
          } else if ((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().PveStageDifficultyTag[1] < a && a < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().PveStageDifficultyTag[0]) {
            idx = 1;
          } else {
            idx = 2;
          }

          for (let index = 0; index < this.nodes.length; index++) {
            const element = this.nodes[index];
            element.active = idx == index;
          }
        }

        setStageId(stageId) {
          if (this.stageId == stageId) {
            return;
          }

          this.stageId = stageId;
          this.setPower((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.powerScore, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this.stageId).RecommendFight);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58bed3b9c3af10c2e817b4b4942f105299f590af.js.map