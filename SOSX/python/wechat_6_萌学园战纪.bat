@echo off
call python .\modify_wechatgame_appid.py -i wx8a9d09983a9a777a
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_6_FAILED
    pause
)