@echo off

rem set dateCode=%1%

set CurrentPath=%~dp0
set P1Path=
set P2Path=
set P3Path=
set P4Path=
set P5Path=
 
 ::获取当前项目目录

:begin
for /f "tokens=1,* delims=\" %%i in ("%CurrentPath%") do (set content=%%i&&set CurrentPath=%%j)
if "%P1Path%%content%\" == "%~dp0" goto end
 
set P5Path=%P4Path%
set P4Path=%P3Path%
set P3Path=%P2Path%
set P2Path=%P1Path%
set P1Path=%P1Path%%content%\
 
goto begin
 
 
:end
echo BatPath=%~dp0

echo P1Path=%P1Path%
echo P2Path=%P2Path%
echo P3Path=%P3Path%
echo P4Path=%P4Path%
echo P5Path=%P5Path%

set clientPath=%P1Path%

echo clientPath=%clientPath%
echo '11111111111111111111'

cd /d %clientPath%

rem wxc35bfc0f889158f1
node pack/buildAndroid_test.js --release 1 --appID 11111 --remoteURL aaaa.com 

rem start cmd /k "cd /d %clientPath% && 


rem CocosCreator --path E:/work/client/SOSX --build "platform=android"

rem update.bat



pause