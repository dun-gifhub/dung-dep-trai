#!/usr/bin/env bash
# Script hỗ trợ đẩy nhanh dự án lên GitHub
# Cách dùng: ./deploy-github.sh <ten-nguoi-dung-github> <ten-kho-luu-tru>

echo "======================================================="
echo "   CÔNG CỤ ĐẨY DỰ ÁN LÊN GITHUB (VITE + REACT + GH PAGES)   "
echo "======================================================="

if [ -z "$1" ] || [ -z "$2" ]; then
  read -p "Nhập tài khoản GitHub của bạn (ví dụ: nguyenvana): " GITHUB_USER
  read -p "Nhập tên repository GitHub (ví dụ: xuan-yen-do-can): " REPO_NAME
else
  GITHUB_USER=$1
  REPO_NAME=$2
fi

if [ -z "$GITHUB_USER" ] || [ -z "$REPO_NAME" ]; then
  echo "Lỗi: Bạn chưa cung cấp tên người dùng hoặc tên repository."
  exit 1
fi

REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "Đang khởi tạo git và chuẩn bị commit..."
if [ ! -d ".git" ]; then
  git init
fi

git add .
git commit -m "feat: Bai thuyet trinh Xuan Yen - Do Can (Full 21 Slides & Interactive Quizzes)" || true
git branch -M main

# Cập nhật remote origin
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo "Đang đẩy mã nguồn lên branch 'main' của $REPO_URL..."
git push -u origin main

echo ""
echo "======================================================="
echo "ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!"
echo "Truy cập repository: https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo "Để bật GitHub Pages:"
echo "1. Vào Settings -> Pages"
echo "2. Tại mục 'Source', chọn 'GitHub Actions'"
echo "3. Website sẽ xuất bản tại: https://${GITHUB_USER}.github.io/${REPO_NAME}/"
echo "======================================================="
