System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, EventMgr, proto, Net, RareBookData, RedMgr, RedDotType, tab, OpenFunctionMgr, _dec, _class, _class2, _crd, ccclass, property, RareBookControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      RareBookData = _unresolved_5.RareBookData;
    }, function (_unresolved_6) {
      RedMgr = _unresolved_6.RedMgr;
    }, function (_unresolved_7) {
      RedDotType = _unresolved_7.RedDotType;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      OpenFunctionMgr = _unresolved_9.OpenFunctionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a54bf6I84dD6rBsrgPzFiFi", "RareBookControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ForwardFlow', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * BareBookControl
       * zhudingchao
       * Wed May 22 2024 15:38:23 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/BareBookControl.ts
       *
       */

      _export("RareBookControl", RareBookControl = (_dec = ccclass('RareBookControl'), _dec(_class = (_class2 = class RareBookControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new RareBookControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.CombineBookFragmentRsp, this.on_s2c_CombineBookFragmentRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookLevelRsp, this.on_s2c_UpgradeBookLevelRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookStarRsp, this.on_s2c_UpgradeBookStarRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BookFragmentSwitchRsp, this.on_s2c_BookFragmentSwitchRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateBookSeriesData, this.on_s2c_Msg_UpdateBookSeriesData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.TakeBookRsp, this.on_s2c_Msg_TakeBookRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DropBookRsp, this.on_s2c_Msg_DropBookRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateBookPowerScore, this.on_s2c_Msg_UpdateBookPowerScore, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Archer, this.on_red_Tujian_Weapon_Job_Archer, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Assassin, this.on_red_Tujian_Weapon_Job_Assassin, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Priest, this.on_red_Tujian_Weapon_Job_Priest, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Caster, this.on_red_Tujian_Weapon_Job_Caster, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Warrior, this.on_red_Tujian_Weapon_Job_Warrior, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Book_Job, this.on_red_Book_Job, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).BooK_Equip, this.on_red_Book_Equip, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Book_collect, this.on_red_Book_collect, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_recovery, this.on_red_Weapon_recovery, this);
        }

        requestCombineBookFragment(fragmentItemId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_CombineBookFragmentReq();
          msg.itemId = fragmentItemId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.CombineBookFragmentReq, msg);
        }

        requestUpgradeBookLevel(bookId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UpgradeBookLevelReq();
          msg.bookId = bookId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookLevelReq, msg);
        }

        requestUpgradeBookStar(bookId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UpgradeBookStarReq();
          msg.bookId = bookId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookStarReq, msg);
        }

        requestBookFragmentSwitch() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_BookFragmentSwitchReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BookFragmentSwitchReq, msg);
        }

        requestTakeBook(id) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_TakeBookReq();
          msg.bookId = id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.TakeBookReq, msg);
        }

        requestDropBook(id) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_DropBookReq();
          msg.bookId = id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DropBookReq, msg);
        }

        on_s2c_CombineBookFragmentRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }

        on_s2c_UpgradeBookLevelRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.updateBook(msg.book);
            (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.updateBookCanUpLevelAndStar();
          }
        }

        on_s2c_UpgradeBookStarRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.updateBook(msg.book);
            (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.updateBookCanUpLevelAndStar();
          }
        }

        on_s2c_BookFragmentSwitchRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            // RareBookData.ins.updateBook(msg.book as proto.BookData)
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Weapon_recovery);
          }
        }

        on_s2c_Msg_UpdateBookSeriesData(msg) {
          (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.updateBookSeriesData(msg.seriesData);
        }

        on_s2c_Msg_TakeBookRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.updateSlotInfo(msg.bookId, msg.slot, true);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).BooK_Equip); // RareBookData.ins.updateBook(msg.book as proto.BookData)
          }
        }

        on_s2c_Msg_DropBookRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.updateSlotInfo(msg.bookId, msg.slot, false);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).BooK_Equip); // RareBookData.ins.updateBook(msg.book as proto.BookData)
          }
        }

        on_s2c_Msg_UpdateBookPowerScore(msg) {
          (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.powerScore = msg.powerScore; // RareBookData.ins.updateBook(msg.book as proto.BookData)
        }

        on_red_Tujian_Weapon_Job_Archer() {
          var table = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookDicTabByHeroClass((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Archer);

          if (table) {
            var list = table.PhaseThreeBook;

            for (var key in list) {
              var info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(list[key]);

              if (info && info.tujianRedPoint) {
                return true;
              }
            }
          }

          return false;
        }

        on_red_Tujian_Weapon_Job_Assassin() {
          var table = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookDicTabByHeroClass((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin);

          if (table) {
            var list = table.PhaseThreeBook;

            for (var key in list) {
              var info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(list[key]);

              if (info && info.tujianRedPoint) {
                return true;
              }
            }
          }

          return false;
        }

        on_red_Tujian_Weapon_Job_Priest() {
          var table = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookDicTabByHeroClass((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Priest);

          if (table) {
            var list = table.PhaseThreeBook;

            for (var key in list) {
              var info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(list[key]);

              if (info && info.tujianRedPoint) {
                return true;
              }
            }
          }

          return false;
        }

        on_red_Tujian_Weapon_Job_Caster() {
          var table = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookDicTabByHeroClass((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Caster);

          if (table) {
            var list = table.PhaseThreeBook;

            for (var key in list) {
              var info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(list[key]);

              if (info && info.tujianRedPoint) {
                return true;
              }
            }
          }

          return false;
        }

        on_red_Tujian_Weapon_Job_Warrior() {
          var table = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookDicTabByHeroClass((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior);

          if (table) {
            var list = table.PhaseThreeBook;

            for (var key in list) {
              var info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(list[key]);

              if (info && info.tujianRedPoint) {
                return true;
              }
            }
          }

          return false;
        }

        refreshfTujianRedPoint(heroClass) {
          if (heroClass == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Weapon_Job_Warrior);
          } else if (heroClass == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Caster) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Weapon_Job_Caster);
          } else if (heroClass == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Priest) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Weapon_Job_Priest);
          } else if (heroClass == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Archer) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Weapon_Job_Archer);
          } else if (heroClass == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Weapon_Job_Assassin);
          }
        }

        on_red_Book_Job() {
          var stateToChange = {};
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Archer] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Priest] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Caster] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior] = false;

          if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_RareBook)) {
            var infos = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfos(false);

            for (var key in infos) {
              if (infos[key].bookTable) {
                var heroClass = infos[key].bookTable.Class;

                if (!stateToChange[heroClass]) {
                  stateToChange[heroClass] = infos[key].isRedPoint;
                }
              }
            }
          }

          return stateToChange;
        } // on_red_Book_Job_Archer() {
        //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
        //     // if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
        //     let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Archer);
        //     for (let key in list) {
        //         if (list[key].isRedPoint) {
        //             return true;
        //         }
        //     }
        //     // }
        //     return false;
        // }
        // on_red_Book_Job_Assassin() {
        //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
        //     // if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
        //     let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Assassin);
        //     for (let key in list) {
        //         if (list[key].isRedPoint) {
        //             return true;
        //         }
        //     }
        //     // }
        //     return false;
        // }
        // on_red_Book_Job_Priest() {
        //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
        //     if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
        //         let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Priest);
        //         for (let key in list) {
        //             if (list[key].isRedPoint) {
        //                 return true;
        //             }
        //         }
        //     }
        //     return false;
        // }
        // on_red_Book_Job_Caster() {
        //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
        //     if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
        //         let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Caster);
        //         for (let key in list) {
        //             if (list[key].isRedPoint) {
        //                 return true;
        //             }
        //         }
        //     }
        //     return false;
        // }
        // on_red_Book_Job_Warrior() {
        //     //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------
        //     if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook)) {
        //         let list = RareBookData.ins.getBookInfosByHeroClass(tab.HeroClass.HeroClass_Warrior);
        //         for (let key in list) {
        //             if (list[key].isRedPoint) {
        //                 return true;
        //             }
        //         }
        //     }
        //     return false;
        // }
        // refreshfBookJobRedPoint(heroClass: tab.HeroClass = tab.HeroClass.HeroClass_Any) {
        //     if (heroClass == tab.HeroClass.HeroClass_Any) {
        //         RedMgr.refreshEvent(RedDotType.Book_Job);
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Caster);
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Priest);
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Archer);
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Assassin);
        //     } else if (heroClass == tab.HeroClass.HeroClass_Warrior) {
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Warrior);
        //     } else if (heroClass == tab.HeroClass.HeroClass_Caster) {
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Caster);
        //     } else if (heroClass == tab.HeroClass.HeroClass_Priest) {
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Priest);
        //     } else if (heroClass == tab.HeroClass.HeroClass_Archer) {
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Archer);
        //     } else if (heroClass == tab.HeroClass.HeroClass_Assassin) {
        //         RedMgr.refreshEvent(RedDotType.Book_Job_Assassin);
        //     }
        // }


        on_red_Book_Equip() {
          var stateToChange = {};
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Archer] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Priest] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Caster] = false;
          stateToChange[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior] = false; //---------因为初始化秘籍数据的时候功能开启数据没有 没有办法判断是否开启------------

          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_RareBook)) {
            return stateToChange;
          }

          var allSlots = Array.from((_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getContainerMap().values());

          for (var k in allSlots) {
            var slots = allSlots[k];

            for (var key in slots) {
              if (!stateToChange[slots[key].bookSlotTable.Class] && !slots[key].bookInfo && slots[key].isLock) {
                var isHave = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                  error: Error()
                }), RareBookData) : RareBookData).ins.getCanBookInfosByHeroClass(slots[key].bookSlotTable.Class).length > 0;
                stateToChange[slots[key].bookSlotTable.Class] = isHave;
              }
            }
          }

          return stateToChange;
        }

        on_red_Book_collect() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_RareBook)) {
            return false;
          }

          return (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.bookCollectRedPointId != "";
        }

        on_red_Weapon_recovery() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_RareBook)) {
            return false;
          }

          var canExchangItems = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getExchangBookFragments();

          for (var key in canExchangItems) {
            var item = canExchangItems[key];
            var bookfraTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookFragmentTableById.getValue(item.itemId);
            var t = Math.floor(item.num / bookfraTab.BaseAmount);

            if (t >= 1) {
              return true;
            }
          }

          return false;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac3fe25796ddd2e05a805c6a3e224ba23a8a2c55.js.map