REM echo off
echo %~1
python .\BaiShanApi.py -a push -f %~1 -c https://cdn-swzz.akbing.com/swzz_low/remote
pause