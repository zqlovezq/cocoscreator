@echo off
call python version_generator.py
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_4_FAILED
    pause
)