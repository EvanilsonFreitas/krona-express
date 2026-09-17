@echo off
echo ======================================================
echo   Encerrando processos nas portas 3000 e 8000...
echo ======================================================

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    taskkill /F /PID %%a 2>nul
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8000') do (
    taskkill /F /PID %%a 2>nul
)

echo Limpeza de processos concluida!
