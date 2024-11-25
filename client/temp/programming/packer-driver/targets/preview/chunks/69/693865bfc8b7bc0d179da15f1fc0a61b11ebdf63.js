System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, Vec3, view, Avatar, tab, FightMacro, _dec, _class, _class2, _crd, ccclass, property, tempPos, BuffUI;

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "../../animation/Avatar", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpRole(extras) {
    _reporterNs.report("PvpRole", "../../pvp/obj/PvpRole", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      Avatar = _unresolved_2.Avatar;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      FightMacro = _unresolved_4.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcc4b4LnVpFNJsD5KcIkqcm", "BuffUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node', 'Prefab', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);

      _export("BuffUI", BuffUI = (_dec = ccclass('BuffUI'), _dec(_class = (_class2 = class BuffUI extends Component {
        constructor() {
          super(...arguments);
          this.abs = void 0;
          this.buffId = void 0;
          this.avatar = void 0;

          /** buff数量 */
          this.totalCount = 0;
          this.offsetXY = new Vec3(0, 0, 0);
        }

        static get() {
          var buffUI = BuffUI.poolUIs.pop();

          if (buffUI == null) {
            var nn = new Node("BuffUI");
            nn.layer = Layers.Enum.DEFAULT;
            buffUI = nn.addComponent(BuffUI);
          }

          tempPos.set(Vec3.ONE);
          buffUI.node.scale = tempPos;

          if (tempPos.equals(Vec3.ZERO)) {
            tempPos.x = view.getVisibleSize().width;
            tempPos.y = view.getVisibleSize().height;
          }

          return buffUI;
        }

        static put(buffUI) {
          buffUI.node.removeFromParent();
          buffUI.reset();
          BuffUI.poolUIs.push(buffUI);
        }
        /** 销毁 */


        static destory() {
          for (var i = 0; i < BuffUI.poolUIs.length; i++) {
            BuffUI.poolUIs[i].node.destroy();
          }

          BuffUI.poolUIs.length = 0;
        }

        recycle() {
          BuffUI.put(this);
        }

        reset() {
          if (this.avatar) {
            this.avatar.recycle();
          }

          this.avatar = null;
          this.abs = null;
          this.node.active = false;
        }

        setBuff(buffId, abs) {
          this.abs = abs;
          this.setBuffId(buffId);

          if (abs.isMonster()) {
            tempPos.z = 1;
            tempPos.x = tempPos.y = (abs.info.configTab.BuffVFX || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT;
            this.node.scale = tempPos;
            this.offsetXY.x = abs.info.configTab.BuffLocation[0] || 0;
            this.offsetXY.y = abs.info.configTab.BuffLocation[1] || 0;
          } else {
            tempPos.set(abs.getHitPos()).subtract(abs.getPosition());
            this.offsetXY.x = tempPos.x;
            this.offsetXY.y = tempPos.y;
          }

          this.posFollow();
        }

        setPvpBuff(buffId, abs) {
          this.abs = abs;
          this.setBuffId(buffId);
          tempPos.set(abs.getHitPos()).subtract(abs.getPosition());
          this.offsetXY.x = tempPos.x;
          this.offsetXY.y = tempPos.y;
        }

        setBuffId(buffId) {
          this.offsetXY.set(0, 0, 0);
          this.buffId = buffId;
          this.node.active = true;
          this.avatar = (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
            error: Error()
          }), Avatar) : Avatar).create();
          this.node.addChild(this.avatar.node);
          this.avatar.setAnimationId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuffTableById.getValue(this.buffId).VFXID);
        }

        subCount() {
          this.totalCount -= 1;
        }

        addCount() {
          this.totalCount += 1;
        }

        update(dt) {
          this.posFollow();
        }

        posFollow() {
          if (this.abs && this.abs.isValid) {
            this.avatar.setOpaticy(this.abs.isDead || !this.abs.isActive ? 0 : 255);

            if (this.node.active) {
              tempPos.set(this.offsetXY);

              if (this.abs.node == this.node.parent) {
                this.node.position = tempPos;
                return;
              }

              if (this.abs.isActive) {
                tempPos.add(this.abs.getPosition());
              }

              this.node.position = tempPos;
            }
          }
        }

      }, _class2.poolUIs = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=693865bfc8b7bc0d179da15f1fc0a61b11ebdf63.js.map