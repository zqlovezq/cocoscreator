@echo off
call python .\compress.py -s ..\build\wechatgame\remote -d ..\build\wechatgame\remote -c ..\..\sosx_texture_cache\ -w wechat_whitelist.txt -t png
call python .\compress.py -s ..\build\wechatgame\assets\start-scene -d ..\build\wechatgame\assets\start-scene -c ..\..\sosx_texture_cache\ -t png
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_3_FAILED
    pause
)