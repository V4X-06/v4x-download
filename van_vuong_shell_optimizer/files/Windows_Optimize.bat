@echo off
title VAN VUONG - Windows Optimize
echo ==========================================
echo       VAN VUONG - SAFE OPTIMIZATION
echo ==========================================
echo.
echo Bat che do High Performance neu co san...
powercfg /setactive SCHEME_MIN >nul 2>&1
echo Kiem tra va bat Game Mode...
reg add "HKCU\Software\Microsoft\GameBar" /v AutoGameModeEnabled /t REG_DWORD /d 1 /f >nul 2>&1
echo Xoa DNS cache...
ipconfig /flushdns >nul
echo.
echo Hoan tat. Khong tat Defender, Windows Update
echo hoac dich vu he thong quan trong.
pause