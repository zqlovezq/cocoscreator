REM echo off
echo %~1
python .\QCloudApi.py -a push -f %~1
pause