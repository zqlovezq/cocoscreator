@echo off
call python .\move_wechat_engin.py
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_4_FAILED
    pause
)