@echo off
setlocal EnableDelayedExpansion

:: Set colors for Windows console
set "CYAN=[96m"
set "GREEN=[92m"
set "YELLOW=[93m"
set "RED=[91m"
set "RESET=[0m"

echo %CYAN%🚀 Starting build process...%RESET%

:: Run the build command
npm run build

:: Check if the build was successful
IF %ERRORLEVEL% EQU 0 (
    echo %GREEN%✅ Build successful!%RESET%
    
    :: Check if git is initialized
    IF NOT EXIST ".git" (
        echo %RED%❌ Git is not initialized in this directory!%RESET%
        exit /b 1
    )

    :: Check if remote origin exists
    git remote get-url origin > nul 2>&1
    IF %ERRORLEVEL% NEQ 0 (
        echo %RED%❌ No remote 'origin' found! Please set up your remote repository first.%RESET%
        exit /b 1
    )

    :: Check if there are changes to commit
    git status --porcelain > temp.txt
    set /p CHANGES=<temp.txt
    del temp.txt
    
    IF NOT "!CHANGES!"=="" (
        echo %YELLOW%📦 Changes detected, preparing to push...%RESET%
        
        :: Add all changes
        echo %YELLOW%Adding changes...%RESET%
        git add .
        
        :: Prompt for commit message
        set /p "commit_message=Enter commit message: "
        
        :: Commit with the provided message
        echo %YELLOW%Committing changes...%RESET%
        git commit -m "!commit_message!"
        
        :: Get current branch
        for /f "tokens=* USEBACKQ" %%F in (`git branch --show-current`) do set current_branch=%%F
        echo %YELLOW%Current branch: !current_branch!%RESET%

        :: Push changes with force flag and set upstream
        echo %YELLOW%Pushing to GitHub...%RESET%
        git push -u origin !current_branch!
        
        IF !ERRORLEVEL! EQU 0 (
            echo %GREEN%✨ Changes successfully pushed to GitHub!%RESET%
        ) ELSE (
            echo %RED%❌ Failed to push changes. Error code: !ERRORLEVEL!%RESET%
            echo %YELLOW%Try pushing manually using: git push -u origin !current_branch!%RESET%
        )
    ) ELSE (
        echo %YELLOW%No changes to commit.%RESET%
    )
) ELSE (
    echo %RED%❌ Build failed! Aborting push.%RESET%
    exit /b 1
)

endlocal