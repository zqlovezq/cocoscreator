@echo off
call python .\compress.py -c ..\..\sosx_texture_cache\ -t png -w android_whitelist.txt
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_3_FAILED
    pause
)