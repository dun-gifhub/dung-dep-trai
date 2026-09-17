@echo off
chcp 65001 >nul
echo =======================================================
echo    CONG CU DAY DU AN LEN GITHUB (WINDOWS BATCH)
echo =======================================================

set /p GITHUB_USER="Nhap tai khoan GitHub cua ban (vi du: nguyenvana): "
set /p REPO_NAME="Nhap ten repository GitHub (vi du: xuan-yen-do-can): "

if "%GITHUB_USER%"=="" (
    echo Loi: Ban chua nhap ten tai khoan GitHub.
    pause
    exit /b 1
)

if "%REPO_NAME%"=="" (
    echo Loi: Ban chua nhap ten repository.
    pause
    exit /b 1
)

set REPO_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git

echo Dang khoi tao git va commit ma nguon...
if not exist ".git" (
    git init
)

git add .
git commit -m "feat: Bai thuyet trinh Xuan Yen - Do Can (Full 21 Slides & Interactive Quizzes)"
git branch -M main

git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo Dang day ma nguon len GitHub branch main...
git push -u origin main

echo =======================================================
echo DA DAY LEN GITHUB THANH CONG!
echo Truy cap: https://github.com/%GITHUB_USER%/%REPO_NAME%
echo Cach bat GitHub Pages:
echo 1. Vao Settings cua repo -> Pages
echo 2. Muc 'Source' chon 'GitHub Actions'
echo 3. Web se chay tai: https://%GITHUB_USER%.github.io/%REPO_NAME%/
echo =======================================================
pause
