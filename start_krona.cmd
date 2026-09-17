@echo off
title Krona Express - Launcher
echo ======================================================
echo   Iniciando Ambiente Krona Express
echo ======================================================

:: Frontend (Next.js - Porta 3000)
echo [*] Subindo Frontend na porta 3000...
start "[Krona] Frontend (3000)" cmd /k "pnpm dev"

:: Backend Futuro (FastAPI / Python - Porta 8000)
if exist "backend\main.py" (
    echo [*] Subindo Backend na porta 8000...
    start "[Krona] Backend (8000)" cmd /k "call .venv\Scripts\activate && uvicorn main:app --reload --port 8000"
)

echo.
echo Servidores iniciados em janelas separadas.
echo Para encerrar, feche as janelas ou execute stop_krona.cmd
echo ======================================================
