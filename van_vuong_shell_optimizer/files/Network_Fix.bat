@echo off
title VAN VUONG - Network Fix
echo ==========================================
echo           VAN VUONG - NETWORK FIX
echo ==========================================
echo.
echo Flush DNS...
ipconfig /flushdns
echo.
echo Reset Winsock...
netsh winsock reset
echo.
echo Reset TCP/IP...
netsh int ip reset
echo.
echo Hay restart Windows de ap dung day du.
pause