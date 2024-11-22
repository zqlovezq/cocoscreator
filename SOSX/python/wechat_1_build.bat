@echo off
call python .\build.py -f build -p wechatgame -d "build"
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_1_FAILED
    pause
)