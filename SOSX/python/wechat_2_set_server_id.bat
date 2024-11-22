@echo off
call python .\set_login_addr_id.py -n 1 -s "../build/wechatgame" -i 1000
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_2_FAILED
    pause
)