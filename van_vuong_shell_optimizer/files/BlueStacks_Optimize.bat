@echo off
title VAN VUONG - BlueStacks Optimize
echo ==========================================
echo       VAN VUONG - BLUESTACKS PREP
echo ==========================================
echo.
echo Chuyen power plan sang High Performance...
powercfg /setactive SCHEME_MIN >nul 2>&1
echo Flush DNS...
ipconfig /flushdns >nul
echo.
echo Tool nay khong sua bluestacks.conf va khong
ghi de cau hinh emulator de tranh gay loi.
echo.
echo Hoan tat. Hay mo BlueStacks sau khi chay tool.
pause