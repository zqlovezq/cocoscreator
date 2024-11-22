
@echo off

set basePath=E:\work
set clientPath=%basePath%\client\SOSX


for  /f %%a  in  (%clientPath%\build\update\0_build_android_version.txt)  do  (
set txt=%%~a
goto :Show
)
:Show


echo last verison %txt%

set /a version=%txt%+1

echo now verison %version%

echo %version% > %clientPath%\build\update\0_build_android_version.txt

set newversion=1.0.%version%


node fileNode.js SOSX_native %newversion% "jsb-default"

pause

set ppkPath=%basePath%\update\ppk\43.138.156.95.ppk
set host=3b:ba:b4:aa:40:81:72:02:3a:92:98:71:b3:b4:14:24
set ip=43.138.156.95
set user=root
set localPath=%clientPath%\build\update\SOSX_native\versions\%newversion%
set remotePath=/usr/share/nginx/html/native

python UploadFiles.py %ppkPath% %host% %ip% %user% %localPath% %remotePath%



