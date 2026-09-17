import React, { useState } from 'react';
import {
  Github,
  GitBranch,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Download,
  Code,
  Sparkles,
  Laptop,
  CheckCircle2,
  X,
  FileCode,
  FolderGit2,
  PlayCircle,
} from 'lucide-react';

interface GitHubToolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubToolModal: React.FC<GitHubToolModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'push' | 'pages' | 'local'>('push');
  const [githubUser, setGithubUser] = useState('dungdaumoi223');
  const [repoName, setRepoName] = useState('xuan-yen-do-can-presentation');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const repoUrl = `https://github.com/${githubUser || 'username'}/${repoName || 'repo-name'}.git`;
  const pagesUrl = `https://${githubUser || 'username'}.github.io/${repoName || 'repo-name'}/`;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const pushCommands = `# 1. Khởi tạo kho lưu trữ cục bộ
git init
git add .
git commit -m "feat: Bai thuyet trinh Xuan Yen - Do Can (Full 21 Slides & Interactive Quizzes)"
git branch -M main

# 2. Thêm liên kết đến kho GitHub của bạn
git remote add origin ${repoUrl}

# 3. Đẩy toàn bộ mã nguồn lên nhánh main
git push -u origin main`;

  const cloneCommands = `# 1. Sao chép dự án từ GitHub về máy
git clone ${repoUrl}

# 2. Di chuyển vào thư mục dự án
cd ${repoName || 'xuan-yen-do-can-presentation'}

# 3. Cài đặt các gói phụ thuộc
npm install

# 4. Khởi chạy máy chủ thuyết trình
npm run dev`;

  const downloadBashScript = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `#!/usr/bin/env bash\n` +
      `echo "Đang đẩy dự án lên GitHub: ${repoUrl}..."\n` +
      `git init\n` +
      `git add .\n` +
      `git commit -m "feat: Bai thuyet trinh Xuan Yen - Do Can (Full 21 Slides & Interactive Quizzes)" || true\n` +
      `git branch -M main\n` +
      `git remote remove origin 2>/dev/null || true\n` +
      `git remote add origin "${repoUrl}"\n` +
      `git push -u origin main\n` +
      `echo "Hoàn tất! Truy cập: https://github.com/${githubUser}/${repoName}"\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'deploy-github.sh';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadBatScript = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `@echo off\r\n` +
      `chcp 65001 >nul\r\n` +
      `echo Dang day du an len GitHub: ${repoUrl}...\r\n` +
      `if not exist ".git" (git init)\r\n` +
      `git add .\r\n` +
      `git commit -m "feat: Bai thuyet trinh Xuan Yen - Do Can (Full 21 Slides & Interactive Quizzes)"\r\n` +
      `git branch -M main\r\n` +
      `git remote remove origin 2>nul\r\n` +
      `git remote add origin ${repoUrl}\r\n` +
      `git push -u origin main\r\n` +
      `echo Hoan tat! Truy cap: https://github.com/${githubUser}/${repoName}\r\n` +
      `pause\r\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'deploy-github.bat';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      id="github-tool-backdrop"
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="github-tool-dialog"
        className="bg-[#fcfaf6] border-2 border-[#9E2A2B] rounded-2xl w-full max-w-3xl shadow-2xl p-4 sm:p-6 my-auto text-[#2c2621] relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#ded3c3]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#241e19] text-white flex items-center justify-center shadow-xs">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-title font-bold text-base sm:text-lg text-[#9E2A2B]">
                  Công cụ Chạy & Triển khai trên GitHub
                </h3>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Sẵn sàng CI/CD
                </span>
              </div>
              <p className="text-xs text-[#736555]">
                Đưa bài thuyết trình lên GitHub, tự động chạy trực tiếp trên GitHub Pages và chia sẻ đường link cho giáo viên & học sinh
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#736555] hover:bg-[#ede5d8] hover:text-[#241e19] transition-colors"
            title="Đóng (Phím Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input parameters (Username & Repo Name) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 my-3 bg-[#f2ebd9] rounded-xl border border-[#ded2bd]">
          <div>
            <label className="block text-[11px] font-bold text-[#5e5142] uppercase tracking-wider mb-1">
              Tài khoản GitHub của bạn:
            </label>
            <input
              type="text"
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value.trim())}
              placeholder="ví dụ: dungdaumoi223"
              className="w-full px-2.5 py-1.5 rounded-lg border border-[#cfbeaa] bg-white text-xs text-[#241e19] focus:outline-none focus:ring-1 focus:ring-[#9E2A2B]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#5e5142] uppercase tracking-wider mb-1">
              Tên Repository trên GitHub:
            </label>
            <input
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value.trim())}
              placeholder="ví dụ: xuan-yen-do-can-presentation"
              className="w-full px-2.5 py-1.5 rounded-lg border border-[#cfbeaa] bg-white text-xs text-[#241e19] focus:outline-none focus:ring-1 focus:ring-[#9E2A2B]"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 border-b border-[#ded3c3] pb-2 mb-3">
          <button
            onClick={() => setActiveTab('push')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'push'
                ? 'bg-[#9E2A2B] text-white shadow-xs'
                : 'bg-white text-[#4a3f33] hover:bg-[#ede5d8]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>1. Đẩy code lên GitHub (Git CLI)</span>
          </button>

          <button
            onClick={() => setActiveTab('pages')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'pages'
                ? 'bg-[#9E2A2B] text-white shadow-xs'
                : 'bg-white text-[#4a3f33] hover:bg-[#ede5d8]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>2. Chạy trên GitHub Pages (Web miễn phí)</span>
          </button>

          <button
            onClick={() => setActiveTab('local')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'local'
                ? 'bg-[#9E2A2B] text-white shadow-xs'
                : 'bg-white text-[#4a3f33] hover:bg-[#ede5d8]'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>3. Clone & Chạy Local (Máy tính)</span>
          </button>
        </div>

        {/* Tab 1: Push to GitHub */}
        {activeTab === 'push' && (
          <div className="space-y-3 overflow-y-auto flex-1 pr-1 text-xs">
            <div className="bg-white p-3 rounded-xl border border-[#ded3c3] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#9E2A2B] flex items-center gap-1.5 text-xs">
                  <Terminal className="w-4 h-4 text-[#9E2A2B]" />
                  Các lệnh Git đẩy toàn bộ dự án lên kho GitHub của bạn:
                </span>
                <button
                  onClick={() => handleCopy(pushCommands, 'push_all')}
                  className="px-2.5 py-1 rounded-md bg-[#241e19] text-white hover:bg-[#3d3329] text-xs font-semibold flex items-center gap-1 transition-all"
                >
                  {copiedKey === 'push_all' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép toàn bộ</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="bg-[#1e1b18] text-[#e8dfd5] p-3 rounded-lg overflow-x-auto text-[11px] font-mono leading-relaxed border border-[#383129]">
                {pushCommands}
              </pre>
            </div>

            {/* Quick scripts download */}
            <div className="bg-[#f7f2e6] p-3 rounded-xl border border-[#ded2bd] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <div>
                <span className="font-bold text-[#453728] block text-xs">
                  Tải script tự động chạy 1-click:
                </span>
                <span className="text-[11px] text-[#736555]">
                  Chỉ cần tải về thư mục dự án và nhấp đúp để tự động đẩy lên GitHub
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={downloadBashScript}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                  title="Dành cho macOS / Linux"
                >
                  <Download className="w-3.5 h-3.5 text-[#9E2A2B]" />
                  <span>File .sh (Mac/Linux)</span>
                </button>
                <button
                  onClick={downloadBatScript}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                  title="Dành cho Windows"
                >
                  <Download className="w-3.5 h-3.5 text-[#3D5A40]" />
                  <span>File .bat (Windows)</span>
                </button>
              </div>
            </div>

            {/* Verification checklist */}
            <div className="bg-white p-3 rounded-xl border border-[#ded3c3] space-y-1.5">
              <span className="font-bold text-[#3d3328] block text-xs">
                Cấu hình đã chuẩn bị sẵn trong mã nguồn:
              </span>
              <ul className="space-y-1 text-[#5e5142] text-[11px]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Đã cấu hình <code>base: './'</code> trong <code>vite.config.ts</code> để tương thích tuyệt đối mọi đường dẫn GitHub Pages.
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Đã tạo workflow tự động <code>.github/workflows/deploy.yml</code> cho GitHub Actions.
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Đã tạo tài liệu hướng dẫn đầy đủ tại <code>README.md</code>.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: GitHub Pages */}
        {activeTab === 'pages' && (
          <div className="space-y-3 overflow-y-auto flex-1 pr-1 text-xs">
            <div className="bg-[#edf7ee] border border-emerald-300 p-3 rounded-xl flex items-start gap-2.5">
              <Globe className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-950 block text-xs">
                  Đường dẫn dự kiến của Website thuyết trình trên GitHub Pages:
                </span>
                <a
                  href={pagesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-800 underline font-bold hover:text-emerald-950 flex items-center gap-1 mt-0.5 text-xs"
                >
                  <span>{pagesUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#ded3c3] space-y-3">
              <span className="font-bold text-[#9E2A2B] text-xs uppercase tracking-wider block">
                3 Bước kích hoạt chạy bài thuyết trình trên GitHub Pages:
              </span>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#faf8f3] border border-[#eee4d5]">
                  <span className="w-5 h-5 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-[#2b241c] block">Tạo Repository và đẩy mã nguồn lên:</strong>
                    <p className="text-[#695d4f] text-[11px]">
                      Truy cập <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-[#9E2A2B] underline font-semibold">github.com/new</a> để tạo kho lưu trữ mới với tên <code>{repoName}</code>, sau đó thực hiện lệnh ở Tab 1.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#faf8f3] border border-[#eee4d5]">
                  <span className="w-5 h-5 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-[#2b241c] block">Vào Cài đặt (Settings) -&gt; Pages:</strong>
                    <p className="text-[#695d4f] text-[11px]">
                      Trên thanh menu của repository GitHub, chọn <strong>Settings</strong>, sau đó chọn mục <strong>Pages</strong> ở cột bên trái.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#faf8f3] border border-[#eee4d5]">
                  <span className="w-5 h-5 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-[#2b241c] block">Chọn nguồn phát hành (Source):</strong>
                    <p className="text-[#695d4f] text-[11px]">
                      Tại mục <strong>Build and deployment</strong> &gt; <strong>Source</strong>, chọn <strong>GitHub Actions</strong>. GitHub sẽ tự động đọc file <code>.github/workflows/deploy.yml</code> để biên dịch và chạy website trực tuyến trong vòng 1-2 phút!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Local Clone & Run */}
        {activeTab === 'local' && (
          <div className="space-y-3 overflow-y-auto flex-1 pr-1 text-xs">
            <div className="bg-white p-3 rounded-xl border border-[#ded3c3] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#9E2A2B] flex items-center gap-1.5 text-xs">
                  <Laptop className="w-4 h-4 text-[#9E2A2B]" />
                  Lệnh chạy bài thuyết trình trên bất kỳ máy tính nào qua GitHub:
                </span>
                <button
                  onClick={() => handleCopy(cloneCommands, 'clone_all')}
                  className="px-2.5 py-1 rounded-md bg-[#241e19] text-white hover:bg-[#3d3329] text-xs font-semibold flex items-center gap-1 transition-all"
                >
                  {copiedKey === 'clone_all' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép lệnh</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="bg-[#1e1b18] text-[#e8dfd5] p-3 rounded-lg overflow-x-auto text-[11px] font-mono leading-relaxed border border-[#383129]">
                {cloneCommands}
              </pre>
            </div>

            <div className="p-3 bg-[#f5efe3] rounded-xl border border-[#ded2bd] space-y-1.5">
              <span className="font-bold text-[#453728] block text-xs">
                Mẹo thuyết trình trên lớp:
              </span>
              <p className="text-[11px] text-[#695d4f] leading-relaxed">
                Khi tải về máy tính qua lệnh <code>git clone</code>, bạn có thể chạy <code>npm run build</code> rồi mở thư mục <code>dist/</code> hoặc dùng lệnh <code>npm run preview</code> để chiếu bài mà <strong>không cần kết nối Internet</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#ded3c3] mt-3">
          <div className="text-[11px] text-[#786a5a] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Tương thích Git 2.x+, Node 18+ và GitHub Pages</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://github.com/${githubUser || 'dungdaumoi223'}/${repoName || 'xuan-yen-do-can-presentation'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] font-semibold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Mở GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#736555]" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-[#9E2A2B] hover:bg-[#801818] text-white font-semibold text-xs transition-colors shadow-2xs"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
