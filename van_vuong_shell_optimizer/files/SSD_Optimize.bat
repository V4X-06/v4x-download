@echo off
title VAN VUONG - SSD Optimize
echo ==========================================
echo          VAN VUONG - SSD TOOL
echo ==========================================
echo.
echo Kiem tra TRIM:
fsutil behavior query DisableDeleteNotify
echo.
echo Yeu cau Windows toi uu hoa volume C:
defrag C: /L
echo.
echo /L = ReTrim, phu hop cho SSD.
echo Hoan tat.
pause