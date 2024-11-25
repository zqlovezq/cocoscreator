@echo off

cd %~dp0

cd ../
svn revert %~dp0../settings/v2/packages/information.json
svn up
cd ./pack

set isRelease=%1%
set appVersion=%2%
set uplpadDir=%3%

set projectPath=E:\chickenStar\client

C:\ProgramData\cocos\editors\Creator\3.8.2\CocosCreator.exe --project %projectPath% --build "configPath=%~dp0buildConfig_android.json;"
C:\ProgramData\cocos\editors\Creator\3.8.2\CocosCreator.exe --project %projectPath% --build "configPath=%~dp0buildConfig_android_ios.json;"

node change_version.js %isRelease% %appVersion% %uplpadDir%

python updata_cos_fkqs_client.py %~dp0%uplpadDir%
