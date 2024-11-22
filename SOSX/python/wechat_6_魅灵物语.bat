@echo off
call python .\modify_wechatgame_appid.py -i wx44ba47f7bde32021
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_6_FAILED
    pause
)