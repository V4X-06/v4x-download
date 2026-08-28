@echo off
title VAN VUONG - Restore Default
echo ==========================================
echo        VAN VUONG - RESTORE DEFAULT
echo ==========================================
echo.
echo Khoi phuc Balanced power plan...
powercfg /setactive SCHEME_BALANCED >nul 2>&1
echo.
echo Da chuyen ve Balanced.
pause