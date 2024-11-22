@echo off

setlocal enabledelayedexpansion


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


rem echo P1Path=%P1Path%
rem echo P2Path=%P2Path%
rem echo P3Path=%P3Path%
rem echo P4Path=%P4Path%
rem echo P5Path=%P5Path%

set basePath=%P3Path%
set clientPath=%P1Path%


echo basePath=%basePath%
echo clientPath=%clientPath%
echo executePath=%~dp0


echo '-----------------'

set release=%1%
set serverID=%2%
set appID=%3%
set remoteURL=%4%

echo release=%release%
echo serverID=%serverID%
echo appID=%appID%
echo remoteURL=%remoteURL%

 ::获取上一次版本号
for  /f %%a  in  (%clientPath%pack\%release%_build_wegame_version.txt)  do  (
set txt=%%~a
goto :Show
)
:Show

echo last verison %txt%

set /a textVersion=%txt%+1

echo now verison %textVersion%

echo %textVersion% > %clientPath%pack\%release%_build_wegame_version.txt

set uploadVersion=1.0.%textVersion%

set wechat_ver_version=0.0.0
IF %release% EQU 1 (
    set wechat_ver_version=!uploadVersion!
)

node modify_wegame_setting.js --release %release% --appID %appID% --remoteURL %remoteURL% --version %wechat_ver_version% --serverId %serverID%

::项目构建
CocosCreator --path %clientPath% --build "platform=wechatgame"


IF %release% EQU 1 (
    echo ' upload remote !basePath!'

    xcopy  /c /e /h /k /r /y /D !clientPath!build\wechatgame\remote\ !clientPath!build\wechatgame\temp\remote\

    set localPath=!clientPath!build\wechatgame\temp
    set remotePath=/usr/share/nginx/html/wegame/test/

    rem python UploadFilesNew.py test !basePath! !localPath! !remotePath!
    python UploadFilesNew.py cdn !basePath! !localPath! !remotePath!
     
    ::删除远程文件， 准备调用小游戏上传命令
    rd /s /Q !clientPath!build\wechatgame\temp
    echo "del /remote------ "
    rd /s /Q !clientPath!build\wechatgame\remote
) else (
    echo "del pem------ "
    del !clientPath!\build\wechatgame\subpackages\resources\native\04\*.pem
)

start cmd /k "cli upload --project %clientPath%/build/wechatgame -v  %uploadVersion% -d "release""

pause