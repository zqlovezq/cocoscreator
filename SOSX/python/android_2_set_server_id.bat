@echo off
call python .\set_login_addr_id.py -i 101
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_2_FAILED
    pause
)