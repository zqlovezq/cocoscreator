@echo off
call python .\build.py -f compile -p android
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_5_FAILED
    pause
)