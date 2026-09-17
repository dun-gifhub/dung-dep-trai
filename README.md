# Bài thuyết trình Ngữ văn: Tác phẩm "Xuân Yến" – Đỗ Cận (1434)

Bộ slide trình chiếu đa phương tiện 21 slide chuyên nghiệp phân tích tác phẩm thi ca kinh điển thời Lê sơ **"Xuân Yến" (春燕 - Chim én mùa xuân)** của Tiến sĩ **Đỗ Cận** (danh nhân khoa bảng Thái Nguyên, Tiến sĩ năm 1478 triều vua Lê Thánh Tông).

Ứng dụng được xây dựng trên nền tảng **React 19 + TypeScript + Vite + Tailwind CSS**, tích hợp trình đọc thơ tương tác, hệ thống Quiz trắc nghiệm củng cố từng slide, câu hỏi thảo luận, ghi chú người thuyết trình và chức năng xuất file PowerPoint (`.pptx`).

---

## 🚀 Cách chạy trên GitHub Pages (Trực tiếp Online miễn phí)

Dự án đã tích hợp sẵn GitHub Actions workflow tại `.github/workflows/deploy.yml`:

1. Đẩy dự án lên kho lưu trữ (Repository) của bạn trên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Slide Xuân Yến - Đỗ Cận"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
   git push -u origin main
   ```

2. Trên GitHub, vào **Settings** của repository -> mục **Pages**:
   - Ở mục **Build and deployment** -> **Source**: Chọn **GitHub Actions**.

3. Ngay sau khi chọn, GitHub Actions sẽ tự động biên dịch dự án Vite và xuất bản website tại địa chỉ:
   ```
   https://<tai-khoan-cua-ban>.github.io/<ten-repo>/
   ```

---

## 💻 Cách chạy Local trên máy tính cá nhân

### Yêu cầu tiên quyết:
- Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 18 trở lên khuyến nghị).
- Đã cài đặt [Git](https://git-scm.com/).

### Các bước thực hiện:

1. **Clone repository từ GitHub:**
   ```bash
   git clone https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
   cd <ten-repo>
   ```

2. **Cài đặt các thư viện phụ thuộc (Dependencies):**
   ```bash
   npm install
   ```

3. **Khởi chạy máy chủ phát triển (Development Server):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt truy cập: `http://localhost:3000` (hoặc cổng hiển thị trong Terminal).

4. **Biên dịch đóng gói dự án (Production Build):**
   ```bash
   npm run build
   ```
   Thư mục đầu ra `dist/` sẽ chứa mã nguồn HTML/JS/CSS tĩnh, sẵn sàng triển khai trên bất kỳ dịch vụ hosting nào.

---

## 🎯 Các tính năng nổi bật của ứng dụng

- **21 Slide thuyết trình chuẩn mực:** Bố cục Nho học Đông Á cao nhã, tông màu giấy điệp cổ truyền kết hợp đỏ son hoàng tộc.
- **Trình đọc thơ tương tác:** Xem phiên âm Hán Việt, nguyên bản chữ Hán (春燕), dịch nghĩa và dịch thơ kèm chú giải từ ngữ điển cố.
- **Quiz trắc nghiệm củng cố tương tác:** Mỗi slide đều có câu hỏi 4 đáp án (A, B, C, D) kèm giải thích học thuật và hiệu ứng pháo hoa.
- **Đề trắc nghiệm & Thảo luận:** 5 câu hỏi thảo luận nhóm và 10 câu trắc nghiệm tổng kết xếp hạng học vị khoa bảng (*Trạng Nguyên, Bảng Nhãn, Thám Hoa*).
- **Xuất file trình chiếu PowerPoint (.pptx):** Tải ngay file PowerPoint chuẩn định dạng về máy để chiếu offline trên lớp học.
- **Cá nhân hóa:** Tùy biến họ tên học sinh, tổ, lớp, trường học ngay trên giao diện.

---

## 📜 Bản quyền & Giấy phép
Dự án được xây dựng phục vụ mục đích học tập, nghiên cứu và giảng dạy văn học trung đại Việt Nam.
