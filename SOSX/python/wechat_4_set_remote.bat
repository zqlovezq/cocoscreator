@echo off
call python .\modify_wechatgame_setting.py -r https://cdn-swzz.akbing.com/swzz
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_4_FAILED
    pause
)