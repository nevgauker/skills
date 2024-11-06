@echo off
echo 🚀 Starting build process...

:: Run the build command
npm run build

:: Check if the build was successful
IF %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful!
    
    :: Check if there are changes to commit
    git status --porcelain > temp.txt
    set /p CHANGES=<temp.txt
    del temp.txt
    
    IF NOT "%CHANGES%"=="" (
        echo 📦 Changes detected, preparing to push...
        
        :: Add all changes
        git add .
        
        :: Prompt for commit message
        set /p commit_message=Enter commit message: 
        
        :: Commit with the provided message
        git commit -m "%commit_message%"
        
        :: Get current branch and push
        for /f "tokens=* USEBACKQ" %%F in (`git branch --show-current`) do set current_branch=%%F
        git push origin %current_branch%
        
        echo ✨ Changes successfully pushed to GitHub!
    ) ELSE (
        echo No changes to commit.
    )
) ELSE (
    echo ❌ Build failed! Aborting push.
    exit /b 1
)