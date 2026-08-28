@echo off
title VAN VUONG - Windows Cleaner
echo ==========================================
echo       VAN VUONG - SAFE WINDOWS CLEANER
echo ==========================================
echo.
echo Dang don file tam cua nguoi dung...
del /q /f "%TEMP%\*" >nul 2>&1
for /d %%D in ("%TEMP%\*") do rd /s /q "%%D" >nul 2>&1
echo Dang don cache Windows Update tam thoi...
net stop wuauserv >nul 2>&1
del /q /f "%windir%\SoftwareDistribution\Download\*" >nul 2>&1
net start wuauserv >nul 2>&1
echo.
echo Hoan tat. Khong xoa file ca nhan trong Documents/Desktop.
pause