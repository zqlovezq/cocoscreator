@echo off
call python .\make_diff_wechat.py
IF %ERRORLEVEL% NEQ 0 (
	echo STEP_5_FAILED
    pause
)
call python .\print_all.py -d "../build/remote-diff" -o "cdn_diff_files.txt"
REM call python .\print_all.py -d "../build/remote_old" -o "cdn_all_files.txt"