 @echo off
set CurrentPath=%~dp0
set clientPath=
 
 ::获取当前项目目录
:begin
for /f "tokens=1,* delims=\" %%i in ("%CurrentPath%") do (set content=%%i&&set CurrentPath=%%j)
if "%clientPath%%content%\" == "%~dp0" goto end
set clientPath=%clientPath%%content%\
goto begin
:end

echo clientPath=%clientPath%

CocosCreator --path %clientPath% --build "platform=wechatgame"
echo "del pem------ "
del %clientPath%\build\wechatgame\subpackages\resources\native\04\*.pem

rem echo "upload version:1-999"
rem set /p vCodeName=vCodeName:

 ::获取上一次版本号
for  /f %%a  in  (%clientPath%\python\0_build_wegame_version.txt)  do  (
set txt=%%~a
goto :Show
)
:Show

echo last verison %txt%

set /a version=%txt%+1

echo now verison %version%

echo %version% > %clientPath%\python\0_build_wegame_version.txt

cli upload --project %clientPath%/build/wechatgame -v  1.0.%version% -d "release"


pause