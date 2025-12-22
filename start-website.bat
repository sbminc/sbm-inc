@echo off

REM === Check if dependencies are installed ===
if exist node_modules (
    echo Dependencies already installed.
) else (
    echo Installing dependencies for the first time...
    npm install
)

echo.
echo Starting the website for preview in a new window...

REM === Start the dev server in a new command window ===
start "" cmd /c "npm run dev"

REM === Wait a few seconds to let it boot up ===
echo Waiting for the website to start...
timeout /t 5 >nul

REM === Open the browser to the correct address ===
echo Opening your browser to http://localhost:3000 ...
start "" http://localhost:3000

echo.
echo All set! The dev server is running and your browser should be open.
echo Close this window if you are done.
pause
