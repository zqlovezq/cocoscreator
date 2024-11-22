@echo off

start cmd /k "cli quit && exit"
 ::传递构建参数-----是否为release(0:1),服务器id,小游戏id,远程下载地址   
build_wegame.bat 1 5 wxc35bfc0f889158f1 https://fkqs-cdn.gameserver.iplay11g.com

pause