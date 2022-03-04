
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Component/Cash');
require('./assets/Script/Component/FirstPop');
require('./assets/Script/Component/Main');
require('./assets/Script/Component/Turntable');
require('./assets/Script/Game/AssetsBundle');
require('./assets/Script/Game/Game');
require('./assets/Script/Game/GameLanch');
require('./assets/Script/Game/GameResPkg');
require('./assets/Script/Game/Login');
require('./assets/Script/Tools/CocosBridge');
require('./assets/Script/Tools/MD5');
require('./assets/Script/Tools/Observer');
require('./assets/Script/Tools/Tools');
require('./assets/Script/Tools/encrypt');

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