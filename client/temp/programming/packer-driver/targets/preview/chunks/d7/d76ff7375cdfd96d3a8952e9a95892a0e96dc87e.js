System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, builtinResMgr, log, sp, Sprite, SpriteAtlas, Animation, AnimationClip, Vec2, Vec3, SpriteFrame, error, view, LangMgr, ItemInfo, LoadResAsync, tab, Func, ItemData, CommonTipsPop, ShowItemNotEnoughTips, UIMgr, proto, Net, RecruitType, Avatar, ViewName, RoleData, ChatData, ChatControl, GameUtil, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function getTimeGuildTXT(timeleft) {
    if (timeleft < 0) {
      return;
    }

    var dayStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_day");
    var hourStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_hour");
    var day = Math.floor(timeleft / 86400);
    var dayleft = timeleft % 86400;
    var hour = Math.floor(dayleft / 3600);

    if (day > 0) {
      //天时
      return "" + day + dayStr;
    }

    var minuteStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_minute");
    var hourleft = dayleft % 3600;
    var min = Math.floor(hourleft / 60);

    if (hour > 0) {
      //时分
      return hour + "\u5C0F" + hourStr;
    }

    var sec = hourleft % 60;
    var secondStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_second"); //分秒

    if (min > 0) {
      return "" + min + minuteStr;
    }

    return "" + sec + secondStr;
  }

  function getTimeTXT(timeleft) {
    if (timeleft < 0) {
      return;
    }

    var dayStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_day");
    var hourStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_hour");
    var day = Math.floor(timeleft / 86400);
    var dayleft = timeleft % 86400;
    var hour = Math.floor(dayleft / 3600);

    if (day > 0) {
      //天时
      if (hour > 0) {
        return "" + day + dayStr + hour + hourStr;
      } else {
        return "" + day + dayStr;
      }
    }

    var minuteStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_minute");
    var hourleft = dayleft % 3600;
    var min = Math.floor(hourleft / 60);

    if (hour > 0) {
      //时分
      if (min > 0) {
        return "" + hour + hourStr + min + minuteStr;
      } else {
        return "" + hour + hourStr;
      }

      return;
    }

    var sec = hourleft % 60;
    var secondStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab("Tips_common_second"); //分秒

    if (min > 0) {
      return "" + min + minuteStr + sec + secondStr;
    }

    return "" + sec + secondStr;
  }

  function setTextTime_2(iLeftSecond) {
    var iHour = Math.floor(iLeftSecond / (60 * 60));
    var iMin = Math.floor(iLeftSecond % (60 * 60) / 60);
    var iSecond = Math.floor(iLeftSecond % 60);
    return String(iHour >= 10 ? iHour : "0" + iHour) + ":" + String(iMin >= 10 ? iMin : "0" + iMin) + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond);
  }

  function setTextTime(iLeftSecond) {
    if (iLeftSecond < 86400) {
      // 小于1天
      return setTextTime_2(iLeftSecond);
    } else {
      return getTimeTXT(iLeftSecond);
    }
  }

  function setTextTime_3(iLeftSecond) {
    var iMin = Math.floor(iLeftSecond % (60 * 60) / 60);
    var iSecond = Math.floor(iLeftSecond % 60);
    return String(iMin >= 10 ? iMin : "0" + iMin) + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond);
  }

  function setTextTime_4(iLeftSecond) {
    var day = Math.floor(iLeftSecond / 86400);
    var dayleft = iLeftSecond % 86400;
    var iHour = Math.floor(dayleft / (60 * 60));
    var iMin = Math.floor(dayleft % (60 * 60) / 60);
    var iSecond = Math.floor(dayleft % 60);
    return String(day >= 10 ? day : "0" + day) + ":" + String(iHour >= 10 ? iHour : "0" + iHour) + ":" + String(iMin >= 10 ? iMin : "0" + iMin) + ":" + String(iSecond >= 10 ? iSecond : "0" + iSecond);
  }
  /* spine置灰 */


  function setGraySpine(sp, isGray) {
    var nowMaterial = sp.customMaterial;

    if (isGray) {
      if (nowMaterial && nowMaterial["effectAsset"] && nowMaterial["effectAsset"].name == "SpineGray") {
        return;
      }

      var mat = builtinResMgr.get("ui-sprite-gray-material");
      sp.customMaterial = mat;
    } else {
      if (nowMaterial && nowMaterial["effectAsset"] && nowMaterial["effectAsset"].name == "builtin-spine") {
        return;
      }

      var _mat = builtinResMgr.get("default-spine-material");

      sp.customMaterial = _mat;
    }
  } // 数组中的元素按照职业排序[2, 1, 4, 3, 5]


  function sortByVocation(arr) {
    return arr.sort((a, b) => {
      var heroTabA = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
        error: Error()
      }), tab) : tab).getData().HeroTableById.getValue(a);
      var heroTabB = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
        error: Error()
      }), tab) : tab).getData().HeroTableById.getValue(b);
      return heroTabA.Class - heroTabB.Class;
    });
  }
  /* 判断各种抽卡材料不足的情况处理 */


  function gachaReplace(gachaId, key, cb) {
    var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().GachaTableById.getValue(gachaId);
    var itemId = gachaTab.ItemId;
    var count = gachaTab.ItemCount;
    var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().ItemTableById.getValue(itemId);
    var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
      error: Error()
    }), ItemData) : ItemData).ins.getCount(itemId);
    /* 如果道具不足的情况下判断是否有替代消耗 */

    var addCount = count - itemCount; // 转化为代替物

    var addItemId = gachaTab.SubItemId;

    if (!addItemId) {
      (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
        error: Error()
      }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemId);
      return false;
    }

    var addItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().ItemTableById.getValue(addItemId);
    var addItemNeedCount = addCount * gachaTab.SubItemBaseCount;
    /* 如果拥有的代替物数量够显示弹窗 */

    var havaAddItemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
      error: Error()
    }), ItemData) : ItemData).ins.getCount(addItemId); // 是否需要弹窗

    if (!checkSameDay(key)) {
      var tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
        error: Error()
      }), LangMgr) : LangMgr).getCombineString("Tips_recruit_resource_1", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
        error: Error()
      }), LangMgr) : LangMgr).getLab(itemTab.Name), addItemNeedCount, (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
        error: Error()
      }), LangMgr) : LangMgr).getLab(addItemTab.Name)]);
      (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
        error: Error()
      }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
        if (val) {
          if (havaAddItemCount < addItemNeedCount) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(addItemId);
            return false;
          } else {
            cb();
          }
        }
      }, {
        gacha: key
      });
    } else {
      if (havaAddItemCount >= addItemNeedCount) {
        return true;
      } else {
        // ShowItemNotEnoughTips(itemId);
        // 跳转到钻石界面
        if (addItemId === 1) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).DiamondBuyPop
          });
        } else {
          (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
            error: Error()
          }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemId);
        }

        return false;
      }
    }
  } // 判断购买的弹窗


  function dailyBuyShop(itemId, CostCount, getItemId, key, cb, recuitType) {
    var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().ItemTableById.getValue(itemId);
    var itemTabName = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getLab(itemTab.Name);
    var itemGetTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().ItemTableById.getValue(getItemId); //let itemGetTabName = "物品"

    var itemGetTabName = "";

    if (itemGetTab) {
      itemGetTabName = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
        error: Error()
      }), LangMgr) : LangMgr).getLab(itemGetTab.Name);
    }

    var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
      error: Error()
    }), ItemData) : ItemData).ins.getCount(itemId);
    var type = recuitType ? recuitType : (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
      error: Error()
    }), RecruitType) : RecruitType).BuyDailyShop;

    if (!checkSameDay(type)) {
      var tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
        error: Error()
      }), LangMgr) : LangMgr).getCombineString(key, [itemTabName, CostCount, itemGetTabName]);
      (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
        error: Error()
      }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
        if (val) {
          if (itemCount < CostCount) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemId);
          } else {
            cb();
          }
        }
      }, {
        gacha: type
      });
    } else {
      if (itemCount < CostCount) {
        (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
          error: Error()
        }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemId);
      } else {
        cb();
      }
    }
  }
  /* 判断是否花费材料的购买处理 */


  function ConsumptionToPurchase(itemId, CostCount, key, cb) {
    // const itemTab = tab.getData().ItemTableById.getValue(itemId);
    var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
      error: Error()
    }), ItemData) : ItemData).ins.getCount(itemId);
    var tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
      error: Error()
    }), LangMgr) : LangMgr).getCombineString(key, [CostCount]);
    (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
      error: Error()
    }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
      if (val) {
        if (itemCount < CostCount) {
          (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
            error: Error()
          }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(itemId);
        } else {
          cb();
        }
      }
    });
  }
  /* 检查用户选择时间是否是同一天 */


  function checkSameDay(key) {
    var currentDate = new Date();
    var today = currentDate.toDateString();
    var dismissTime = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
      error: Error()
    }), Func) : Func).getItem("dismissTime" + key);

    if (!dismissTime || dismissTime !== today) {
      return false;
    }

    return true;
  }

  function getPlayInfoById(id) {
    var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
      error: Error()
    }), proto) : proto).Msg_GetSimpleRoleReq();
    msg.roleId = id;
    (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
      error: Error()
    }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
      error: Error()
    }), proto) : proto).Ptl.GetSimpleRoleReq, msg);
  } // 处理战斗力


  function handleNumerText(_score) {
    var score = Number(_score);

    if (score >= 100000000) {
      var value = String(score / 100000000); // log("valeu==",value);

      var index = value.indexOf(".");

      if (index == -1) {
        return value + "亿";
      } else {
        index += 3;
      } // log("score==",score,"===valeu==",value,"==",index);


      return value.slice(0, index) + "亿";
    } else if (score > 10000) {
      var _value = String(score / 10000);

      var _index = _value.indexOf(".");

      if (_index == -1) {
        return _value + "萬";
      } else {
        _index += 3;
      } // log("score==",score,"===valeu==",value,"==",index);


      return _value.slice(0, _index) + "萬";
    } else {
      return String(score);
    }
  } // 计算距离下周一的倒计时


  function getTimeUntilNextWeek() {
    var now = new Date();
    var dayOfWeek = now.getDay();
    var daysUntilNextMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    var nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilNextMonday);
    var millisecondsUntilNextMonday = nextMonday.getTime() - now.getTime();
    return Math.floor(millisecondsUntilNextMonday / 1000);
  } // 计算距离下个月的倒计时


  function getTimeUntilNextMonth() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var nextMonth = month === 11 ? 0 : month + 1;
    var nextMonthYear = month === 11 ? year + 1 : year;
    var firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);
    var millisecondsUntilNextMonth = firstDayOfNextMonth.getTime() - now.getTime();
    return Math.floor(millisecondsUntilNextMonth / 1000);
  } // 计算距离明天的倒计时


  function getTimeUntilNextDay() {
    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var millisecondsUntilTomorrow = tomorrow.getTime() - now.getTime();
    return Math.floor(millisecondsUntilTomorrow / 1000);
  }
  /* 创建hero spine */


  function createAnimation(_x, _x2, _x3, _x4) {
    return _createAnimation.apply(this, arguments);
  }
  /**
      获取随机整数
      @param min 随机的最小值
      @param max 随机的最大值(不包括该值)
      @returns 返回一个整数，范围是 [min, max)
  */


  function _createAnimation() {
    _createAnimation = _asyncToGenerator(function* (animNode, animId, addAnimId, cb) {
      var animaData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
        error: Error()
      }), tab) : tab).getData().AnimationTableById.getValue(animId);
      var path = animaData.Path;

      if (animaData.Scale.length > 0) {
        animNode.scale = new Vec3(animaData.Scale[0], animaData.Scale[1], 1);
      }

      if (path) {
        switch (animaData.Type) {
          // 如果当前是spine
          case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AnimationType.AnimationType_SkeletonData:
            var spine = animNode.getComponent(sp.Skeleton);

            if (!spine) {
              spine = animNode.addComponent(sp.Skeleton);
            }

            yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)(path, sp.SkeletonData).then(spData => {
              if (spine.isValid) {
                spine.skeletonData = spData;
                spine.premultipliedAlpha = false;
                spine.enableBatch = true;
                spine.setAnimation(0, animaData.AnimationName, animaData.Loop);

                if (addAnimId) {
                  var addAnimaData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().AnimationTableById.getValue(addAnimId);
                  spine.addAnimation(0, addAnimaData.AnimationName, addAnimaData.Loop);
                }

                addAnimId === 0 ? spine.timeScale = 0 : spine.timeScale = 1;
              }
            });
            break;

          case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AnimationType.AnimationType_Plist:
            // 如果是plist
            var spr = animNode.getComponent(Sprite);

            if (!spr) {
              spr = animNode.addComponent(Sprite);
            }

            var animCom = animNode.getComponent(Animation);

            if (!animCom) {
              animCom = animNode.addComponent(Animation);
            }

            yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)(path, SpriteAtlas).then(atlas => {
              if (spr.isValid && animCom.isValid) {
                spr.sizeMode = Sprite.SizeMode.RAW;
                spr.type = Sprite.Type.SIMPLE;
                spr.trim = false;
                var anim_clip = AnimationClip.createWithSpriteFrames((_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
                  error: Error()
                }), Avatar) : Avatar).setPlistArray(atlas, animaData), animaData.FPS);
                anim_clip.name = animaData.AnimationName ? animaData.AnimationName : "defaultAnim";
                anim_clip.wrapMode = animaData.Loop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
                animCom.defaultClip = anim_clip;
                animCom.play(anim_clip.name);

                if (!animaData.Loop) {
                  animCom.on(Animation.EventType.FINISHED, e => {
                    cb();
                  });
                }
              }
            });
            break;

          case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AnimationType.AnimationType_SpriteFrame:
            var _spr = animNode.getComponent(Sprite);

            if (!_spr) {
              _spr = animNode.addComponent(Sprite);
            }

            if (animNode.getComponent(Animation)) {
              animNode.getComponent(Animation).destroy();
            }

            _spr.spriteFrame = null;
            yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)(path, SpriteFrame).then(sf => {
              if (_spr.isValid) {
                _spr.sizeMode = Sprite.SizeMode.RAW;
                _spr.type = Sprite.Type.SIMPLE;
                _spr.trim = false;
                _spr.spriteFrame = sf;
              }
            });
            break;

          default:
            break;
        }
      } else {
        log("cocos animation \u8DEF\u5F84\u4E0D\u5B58\u5728");
      }
    });
    return _createAnimation.apply(this, arguments);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /** 根据开始时间的秒数获取已经过了几天(只要过零点就加1天)*/


  function getPassDaysByZero(startSeconds) {
    var days = 0;
    var nowSeconds = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
      error: Error()
    }), RoleData) : RoleData).ins.getServerUtcTime();

    if (nowSeconds > startSeconds) {
      var m_dateHelp = new Date();
      m_dateHelp.setTime(startSeconds * 1000);
      m_dateHelp.setHours(0);
      m_dateHelp.setMinutes(0);
      m_dateHelp.setSeconds(0);
      var t_startZeroSeconds = m_dateHelp.getTime();
      t_startZeroSeconds = t_startZeroSeconds / 1000;
      days = (nowSeconds - t_startZeroSeconds) / 86400;
    }

    return Math.floor(days);
  }

  function isChEngNumber(str) {
    if (/^[a-zA-Z0-9\u4E00-\u9FA5]+$/.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  function sendChatToGuild(type) {
    var channelId = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
      error: Error()
    }), ChatData) : ChatData).ins.getChanneIdByType((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
      error: Error()
    }), proto) : proto).ChatChannelType.Guild);
    var str = "";

    if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).ChatBreviaryType.ChatBreviaryType_GuildGiftLow) {
      str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
        error: Error()
      }), LangMgr) : LangMgr).getLab("chatbreviary_text_2");
    } else if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).ChatBreviaryType.ChatBreviaryType_GuildGiftBargain) {
      str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
        error: Error()
      }), LangMgr) : LangMgr).getCombineString("chatbreviary_text_1", [(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
        error: Error()
      }), RoleData) : RoleData).ins.name]);
    }

    var clientCustomNotice = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
      error: Error()
    }), proto) : proto).ChatMessage.ClientCustomNotice();
    clientCustomNotice.noticeType = type;
    clientCustomNotice.content = str;
    (_crd && ChatControl === void 0 ? (_reportPossibleCrUseOfChatControl({
      error: Error()
    }), ChatControl) : ChatControl).ins.requestSendChatMessage(channelId, str, clientCustomNotice);
  }

  function refreshFlagImg(flagId, sp) {
    flagId = flagId ? flagId : 1;
    var flagtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().GuildFlagTableById.getValue(flagId);
    sp.setTexture(flagtab.IconUrl);
  }

  function formatTimestamp(timestamp) {
    // 创建日期对象，时间戳需要是毫秒
    var date = new Date(timestamp * 1000); // 获取日期中的月、日、小时和分钟

    var month = date.getMonth() + 1; // 月份从0开始，所以要加1

    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes(); // 补0处理，如果是个位数

    var s_month = month < 10 ? '0' + month : month;
    var s_day = day < 10 ? '0' + day : day;
    var s_hours = hours < 10 ? '0' + hours : hours;
    var s_minutes = minutes < 10 ? '0' + minutes : minutes; // 返回格式化后的字符串

    return s_month + "-" + s_day + " " + s_hours + ":" + s_minutes;
  }

  function ButtonLock(lockTime, callBackFun) {
    if (lockTime === void 0) {
      lockTime = 0.3;
    }

    return function (target, propertyKey, descriptor) {
      var oldFun = descriptor.value;
      var isLock = false;

      descriptor.value = function () {
        if (isLock) {
          callBackFun == null || callBackFun();
          return;
        }

        isLock = true;
        setTimeout(() => {
          isLock = false;
        }, lockTime * 1000);

        for (var _len = arguments.length, args = new Array(_len), _key4 = 0; _key4 < _len; _key4++) {
          args[_key4] = arguments[_key4];
        }

        oldFun.apply(this, args);
      };

      return descriptor;
    };
  }
  /**
   * 修正触摸坐标
   * 主要处理屏幕坐标系与设计尺寸不一致导致转换的位置信息错误
   * @param pos 
   */


  function AmendmentEventLocation(pos) {
    var newpos = new Vec3(pos);
    newpos.y -= (view.getVisibleSize().height - view.getDesignResolutionSize().height) / 2;
    return newpos;
  }
  /* 根据手机分辨率处理节点 */


  function getLocationInResolution(pos) {
    var dSize = view.getDesignResolutionSize();
    var desVec = new Vec2(dSize.width, dSize.height);
    var winVec = new Vec2(view.getVisibleSize().width, view.getVisibleSize().height);
    return pos.subtract(winVec.subtract(desVec));
  }

  function moveZeroes(nums) {
    var index = 0; // 指针，用来遍历非零元素
    // 遍历整个数组

    for (var i = 0; i < nums.length; i++) {
      // 如果当前元素不是0
      if (nums[i] !== 0) {
        // 将非零元素放到当前指针的位置
        nums[index] = nums[i];
        index++;
      }
    } // 从指针位置开始，填充0


    for (var _i = index; _i < nums.length; _i++) {
      nums[_i] = 0;
    }

    return nums;
  } // 深拷贝


  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // 如果是基本类型，直接返回
    } // 处理数组


    if (Array.isArray(obj)) {
      var arrCopy = [];

      for (var i = 0; i < obj.length; i++) {
        arrCopy[i] = deepClone(obj[i]);
      }

      return arrCopy;
    } // 处理对象


    var objCopy = {};

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        objCopy[key] = deepClone(obj[key]);
      }
    }

    return objCopy;
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../model/item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "./Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../model/item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLong(extras) {
    _reporterNs.report("Long", "protobufjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "../fight/animation/Avatar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatData(extras) {
    _reporterNs.report("ChatData", "../model/chat/ChatData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatControl(extras) {
    _reporterNs.report("ChatControl", "../model/chat/ChatControl", _context.meta, extras);
  }

  _export({
    GameUtil: void 0,
    getTimeGuildTXT: getTimeGuildTXT,
    getTimeTXT: getTimeTXT,
    setTextTime_2: setTextTime_2,
    setTextTime: setTextTime,
    setTextTime_3: setTextTime_3,
    setTextTime_4: setTextTime_4,
    setGraySpine: setGraySpine,
    sortByVocation: sortByVocation,
    gachaReplace: gachaReplace,
    dailyBuyShop: dailyBuyShop,
    ConsumptionToPurchase: ConsumptionToPurchase,
    checkSameDay: checkSameDay,
    getPlayInfoById: getPlayInfoById,
    handleNumerText: handleNumerText,
    getTimeUntilNextWeek: getTimeUntilNextWeek,
    getTimeUntilNextMonth: getTimeUntilNextMonth,
    getTimeUntilNextDay: getTimeUntilNextDay,
    createAnimation: createAnimation,
    getRandomInt: getRandomInt,
    getPassDaysByZero: getPassDaysByZero,
    isChEngNumber: isChEngNumber,
    sendChatToGuild: sendChatToGuild,
    refreshFlagImg: refreshFlagImg,
    formatTimestamp: formatTimestamp,
    ButtonLock: ButtonLock,
    AmendmentEventLocation: AmendmentEventLocation,
    getLocationInResolution: getLocationInResolution,
    moveZeroes: moveZeroes,
    deepClone: deepClone
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      builtinResMgr = _cc.builtinResMgr;
      log = _cc.log;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      SpriteFrame = _cc.SpriteFrame;
      error = _cc.error;
      view = _cc.view;
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      LoadResAsync = _unresolved_4.LoadResAsync;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      Func = _unresolved_6.Func;
    }, function (_unresolved_7) {
      ItemData = _unresolved_7.ItemData;
    }, function (_unresolved_8) {
      CommonTipsPop = _unresolved_8.CommonTipsPop;
    }, function (_unresolved_9) {
      ShowItemNotEnoughTips = _unresolved_9.ShowItemNotEnoughTips;
      UIMgr = _unresolved_9.UIMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      Net = _unresolved_10.Net;
    }, function (_unresolved_11) {
      RecruitType = _unresolved_11.RecruitType;
    }, function (_unresolved_12) {
      Avatar = _unresolved_12.Avatar;
    }, function (_unresolved_13) {
      ViewName = _unresolved_13.ViewName;
    }, function (_unresolved_14) {
      RoleData = _unresolved_14.RoleData;
    }, function (_unresolved_15) {
      ChatData = _unresolved_15.ChatData;
    }, function (_unresolved_16) {
      ChatControl = _unresolved_16.ChatControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c64b7eiBuBGWYDsSRUbwy9a", "GameUtil", undefined);

      __checkObsolete__(['Material', 'Prefab', 'builtinResMgr', 'log', 'sp', 'Node', 'Sprite', 'SpriteAtlas', 'Animation', 'AnimationClip', 'Vec2', 'Vec3', 'SpriteFrame', 'error', 'view']);

      _export("GameUtil", GameUtil = class GameUtil {
        /**
         * 根据数组[itemid,num,itemid,num.......]格式转换成[{itemId,num}.....]格式
         * @param list 
         * @returns 
         */
        static convertRewardsByList(list) {
          var rewads = [];
          var len = list.length;

          for (var i = 0; i < len; i += 2) {
            if (i + 1 < len) {
              rewads.push({
                "itemId": list[i],
                "num": list[i + 1]
              });
            }
          }

          return rewads;
        }
        /**
        * 根据数组[itemid,num,itemid,num.......]格式转换成[{itemId,num}.....]格式
        * @param list 
        * @returns 
        */


        static convertItemInfosByList(list) {
          var rewads = [];
          var len = list.length;

          for (var i = 0; i < len; i += 2) {
            if (i + 1 < len) {
              var item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              item.initItemData(list[i], list[i + 1]);
              rewads.push(item);
            }
          }

          return rewads;
        }

        static itemsAddItems(items1, items2) {
          var _loop = function _loop(key) {
            var item = items2.find(a => a.itemId == items1[key].itemId);

            if (item) {
              items1[key].num += item.num;
            }
          };

          for (var key in items1) {
            _loop(key);
          }

          var _loop2 = function _loop2(_key) {
            var item = items1.find(a => a.itemId == items2[_key].itemId);

            if (!item) {
              items1.push(items2[_key]);
            }
          };

          for (var _key in items2) {
            _loop2(_key);
          }

          return items1;
        }
        /**
        * 根据掉落id 获取奖励
        * @param dropId 
        * @returns 
        */


        static getRewardsByDropId(dropId) {
          var rewads = [];

          var callBack = id => {
            var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().DropTableById.getValue(id);

            if (table) {
              if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).DropType.DropType_Odds || table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).DropType.DropType_Weight) {
                for (var key in table.ItemList) {
                  var item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                    error: Error()
                  }), ItemInfo) : ItemInfo)();

                  if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).DropType.DropType_Weight) {
                    item.initItemData(table.ItemList[key], table.Count * table.ItemCount[key]);
                  } else {
                    item.initItemData(table.ItemList[key], table.ItemCount[key]);
                  }

                  rewads.push(item);
                }
              } else {
                if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).DropType.DropType_GroupWeight) {
                  for (var i = 0; i < table.Count; i++) {
                    for (var _key2 in table.ItemList) {
                      callBack(table.ItemList[_key2]);
                    }
                  }
                } else {
                  for (var _key3 in table.ItemList) {
                    callBack(table.ItemList[_key3]);
                  }
                }
              }
            } else {
              error("掉落id错误==", id);
            }
          };

          callBack(dropId);
          return rewads;
        }
        /**
         * 
         * @param num 
         * @param isConsume 是否是消耗类型 
         * @returns 
         */


        static convertNumber(num, isConsume) {
          if (isConsume === void 0) {
            isConsume = false;
          }

          if (num < 10000) {
            return num + "";
          } else if (num <= 10000000) {
            if (isConsume) {
              return Math.ceil(num / 1000 * 10) / 10 + "K";
            } else {
              if (num % 1000 != 0) {
                return (Math.round(num / 1000 * 10) / 10).toFixed(1) + "K";
              } else {
                return Math.round(num / 1000 * 10) / 10 + "K";
              }
            }
          } else {
            if (isConsume) {
              return Math.ceil(num / 1000000 * 10) / 10 + "M";
            } else {
              if (num % 1000000 != 0) {
                return (Math.round(num / 1000000 * 10) / 10).toFixed(1) + "M";
              } else {
                return Math.round(num / 1000000 * 10) / 10 + "M";
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d76ff7375cdfd96d3a8952e9a95892a0e96dc87e.js.map