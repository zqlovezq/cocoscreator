@echo off
call .\node_modules\.bin\javascript-obfuscator ..\build\wechatgame\subpackages\Script\game.js --output=.\tmp\game.js --self-defending=false --control-flow-flattening=false --dead-code-injection=false --debug-protection=false --identifier-names-generator=hexadecimal --string-array=false --target=browser-no-eval --unicode-escape-sequence=true
call .\node_modules\.bin\javascript-obfuscator ..\build\wechatgame\assets\start-scene\index.js --output=.\tmp\index.js --self-defending=false --control-flow-flattening=false --dead-code-injection=false --debug-protection=false --identifier-names-generator=hexadecimal --string-array=false --target=browser-no-eval --unicode-escape-sequence=true
call python .\recover_obfuscato_error.py
pause