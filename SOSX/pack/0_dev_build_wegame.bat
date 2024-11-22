@echo off

start cmd /k "cli quit && exit"
 ::传递构建参数-----是否为release(0:1),服务器id,小游戏id,远程下载地址
build_wegame.bat 0 3 wxc35bfc0f889158f1 https://newcytest1.gameserver.iplay11g.com/wegame/test/

pause