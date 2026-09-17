import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { PresenterInfo } from './types';
import { SlideViewer } from './components/SlideViewer';
import { NavigationControls } from './components/NavigationControls';
import { PresenterNotes } from './components/PresenterNotes';
import { SlideThumbnailGrid } from './components/SlideThumbnailGrid';
import { EditPresenterModal } from './components/EditPresenterModal';
import { QuizModal } from './components/QuizModal';
import { GitHubToolModal } from './components/GitHubToolModal';
import { exportToPowerPoint } from './utils/pptxExport';
import { SLIDE_QUIZZES } from './data/slideQuizzes';
import { soundEffects } from './utils/soundEffects';
import {
  BookOpen,
  Keyboard,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Info,
  Github,
} from 'lucide-react';

const DEFAULT_PRESENTER: PresenterInfo = {
  subject: 'Ngữ văn (Văn học trung đại & Địa phương)',
  studentName: 'Nguyễn Văn A (Đại diện Nhóm Ngữ văn)',
  className: 'Lớp 10A1 / 11A1',
  schoolName: 'Trường THPT Phổ Yên, Tỉnh Thái Nguyên',
  academicYear: 'Năm học 2025 – 2026',
};

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isNotesOpen, setIsNotesOpen] = useState(true);
  const [isThumbnailsOpen, setIsThumbnailsOpen] = useState(false);
  const [isEditPresenterOpen, setIsEditPresenterOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExportingPPTX, setIsExportingPPTX] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstSlideChange = useRef(true);

  // Sound effect on slide change (gentle page flip + spring swallow chirping)
  useEffect(() => {
    if (isFirstSlideChange.current) {
      isFirstSlideChange.current = false;
      return;
    }
    soundEffects.playSlideTransition();
  }, [currentSlideIndex]);

  // Load saved presenter info from localStorage
  const [presenterInfo, setPresenterInfo] = useState<PresenterInfo>(() => {
    try {
      const saved = localStorage.getItem('do_can_xuan_yen_presenter');
      return saved ? JSON.parse(saved) : DEFAULT_PRESENTER;
    } catch {
      return DEFAULT_PRESENTER;
    }
  });

  const handleSavePresenter = (info: PresenterInfo) => {
    setPresenterInfo(info);
    try {
      localStorage.setItem('do_can_xuan_yen_presenter', JSON.stringify(info));
    } catch {
      // Ignore
    }
    showToast('Đã lưu thông tin người thuyết trình vào Slide 1 & File PPTX!');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const totalSlides = SLIDES_DATA.length;

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (slideNum: number) => {
    const idx = SLIDES_DATA.findIndex((s) => s.slideNumber === slideNum);
    if (idx !== -1) {
      setCurrentSlideIndex(idx);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not trigger if typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(totalSlides - 1);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'g') {
        e.preventDefault();
        setIsThumbnailsOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'q') {
        if (Boolean(SLIDE_QUIZZES[currentSlide.slideNumber])) {
          e.preventDefault();
          setIsQuizModalOpen((prev) => !prev);
        }
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        const cur = soundEffects.getSettings();
        const nextMuted = !cur.isMuted;
        soundEffects.saveSettings({ isMuted: nextMuted });
        showToast(
          nextMuted
            ? 'Đã tắt âm thanh hiệu ứng (Mute)'
            : 'Đã bật âm thanh hiệu ứng (Lật trang & Chim én hót)'
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, totalSlides, currentSlide.slideNumber]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handleExportPPTX = async () => {
    try {
      setIsExportingPPTX(true);
      showToast('Đang khởi tạo file PowerPoint (.pptx) chuẩn 16:9 với 21 slide...');
      await exportToPowerPoint(presenterInfo);
      showToast('Đã xuất thành công file PowerPoint (.pptx)! Bạn có thể mở ngay bằng PowerPoint hoặc Google Slides.');
    } catch (err) {
      console.error(err);
      showToast('Có lỗi khi tạo file PowerPoint. Vui lòng thử lại!');
    } finally {
      setIsExportingPPTX(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const progressPercent = Math.round(((currentSlideIndex + 1) / totalSlides) * 100);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen bg-[#f3ede1] text-[#2c2621] flex flex-col justify-between selection:bg-[#9E2A2B] selection:text-white ${
        isFullscreen ? 'p-2 sm:p-4 bg-[#1f1b16]' : ''
      }`}
    >
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-[#27221c] text-[#fbf9f4] border border-[#9E2A2B] px-4 py-2.5 rounded-xl shadow-xl text-xs sm:text-sm flex items-center gap-2 animate-bounce">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Shortcuts Help Modal */}
      {showShortcutsHelp && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fbf9f4] rounded-2xl border border-[#ded3c3] max-w-md w-full p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#ded3c3]">
              <h4 className="font-serif-title font-bold text-base text-[#241e19] flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-[#9E2A2B]" />
                Phím tắt điều khiển thuyết trình
              </h4>
              <button
                onClick={() => setShowShortcutsHelp(false)}
                className="text-xs text-[#736555] hover:text-[#241e19]"
              >
                Đóng
              </button>
            </div>

            <div className="py-3 space-y-2 text-xs text-[#403529]">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ded3c3]">
                <span>Slide kế tiếp:</span>
                <span className="font-mono bg-[#eee6d8] px-2 py-0.5 rounded font-bold">Mũi tên Phải / Phím Cách (Space)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ded3c3]">
                <span>Slide trước:</span>
                <span className="font-mono bg-[#eee6d8] px-2 py-0.5 rounded font-bold">Mũi tên Trái / PageUp</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ded3c3]">
                <span>Toàn màn hình (Fullscreen):</span>
                <span className="font-mono bg-[#eee6d8] px-2 py-0.5 rounded font-bold">Phím F</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ded3c3]">
                <span>Bật/Tắt Lời thuyết minh:</span>
                <span className="font-mono bg-[#eee6d8] px-2 py-0.5 rounded font-bold">Phím N</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ded3c3]">
                <span>Xem mục lục 21 slide:</span>
                <span className="font-mono bg-[#eee6d8] px-2 py-0.5 rounded font-bold">Phím G</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ded3c3]">
                <span>Mở Quiz củng cố (Slide 9 - 16):</span>
                <span className="font-mono bg-[#eee6d8] px-2 py-0.5 rounded font-bold">Phím Q</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ded3c3]">
                <span>Bật / Tắt âm thanh (Mute):</span>
                <span className="font-mono bg-[#eee6d8] px-2 py-0.5 rounded font-bold">Phím M</span>
              </div>
            </div>

            <button
              onClick={() => setShowShortcutsHelp(false)}
              className="w-full mt-2 py-2 bg-[#9E2A2B] text-white font-semibold rounded-lg text-xs"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* Top Header Bar (Hidden in Fullscreen) */}
      {!isFullscreen && (
        <header className="bg-[#241e19] text-[#fbf9f4] border-b border-[#3b322a] px-4 py-2.5 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Title & Brand */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#9E2A2B] flex items-center justify-center text-white font-serif-title font-bold text-sm shadow-xs">
                燕
              </div>
              <div>
                <h1 className="font-serif-title font-bold text-xs sm:text-sm text-white tracking-wide flex items-center gap-1.5">
                  <span>TÌM HIỂU TÁC PHẨM “XUÂN YẾN” – ĐỖ CẬN (1434)</span>
                  <span className="hidden md:inline text-[10px] bg-[#9E2A2B] px-1.5 py-0.5 rounded font-sans uppercase">
                    Thái Nguyên
                  </span>
                </h1>
                <p className="text-[11px] text-[#bdae9c]">
                  Bộ trình chiếu PowerPoint Ngữ văn chuyên nghiệp dành cho học sinh thuyết trình trước lớp
                </p>
              </div>
            </div>

            {/* Quick Status & Shortcuts */}
            <div className="flex items-center gap-3 text-xs">
              {/* Progress counter */}
              <div className="flex items-center gap-2 bg-[#332b24] px-3 py-1 rounded-full border border-[#473c32]">
                <span className="text-[#bdae9c] text-[11px]">Tiến độ bài học:</span>
                <div className="w-16 h-1.5 bg-[#473c32] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#9E2A2B] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="font-bold text-[#e6ded2] text-[11px]">{progressPercent}%</span>
              </div>

              {/* GitHub Tool button */}
              <button
                onClick={() => setIsGitHubModalOpen(true)}
                className="p-1.5 rounded-lg bg-[#241e19] border border-[#473c32] hover:bg-[#383028] text-white hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-semibold shadow-xs"
                title="Mở công cụ chạy bài thuyết trình trên GitHub & GitHub Pages"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span className="hidden sm:inline">Chạy GitHub</span>
              </button>

              {/* Help button */}
              <button
                onClick={() => setShowShortcutsHelp(true)}
                className="p-1.5 rounded-lg bg-[#332b24] hover:bg-[#473c32] text-[#bdae9c] hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                title="Xem phím tắt điều khiển"
              >
                <Keyboard className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Phím tắt</span>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 flex flex-col justify-center items-center p-2 sm:p-4 md:p-6 max-w-7xl mx-auto w-full">
        {/* Slide Canvas Wrapper */}
        <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden">
          <SlideViewer
            slide={currentSlide}
            presenterInfo={presenterInfo}
            onOpenEditPresenter={() => setIsEditPresenterOpen(true)}
            onNextSlide={goToNext}
          />
        </div>

        {/* Toolbar Controls */}
        <div className="w-full max-w-5xl mt-3">
          <NavigationControls
            currentSlide={currentSlide.slideNumber}
            totalSlides={totalSlides}
            onNext={goToNext}
            onPrev={goToPrev}
            onSelectSlide={goToSlide}
            onToggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
            onOpenThumbnails={() => setIsThumbnailsOpen(true)}
            onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
            isNotesOpen={isNotesOpen}
            onOpenEditPresenter={() => setIsEditPresenterOpen(true)}
            onExportPPTX={handleExportPPTX}
            isExportingPPTX={isExportingPPTX}
            onPrintSlides={handlePrint}
            onOpenQuiz={() => setIsQuizModalOpen(true)}
            hasQuiz={Boolean(SLIDE_QUIZZES[currentSlide.slideNumber])}
            onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
          />
        </div>
      </main>

      {/* Speaker Notes Drawer (At bottom) */}
      <PresenterNotes
        slideNumber={currentSlide.slideNumber}
        notes={currentSlide.speakerNotes}
        isOpen={isNotesOpen}
        onToggle={() => setIsNotesOpen((prev) => !prev)}
      />

      {/* Slide Thumbnails Grid Modal */}
      <SlideThumbnailGrid
        currentSlide={currentSlide.slideNumber}
        onSelectSlide={goToSlide}
        isOpen={isThumbnailsOpen}
        onClose={() => setIsThumbnailsOpen(false)}
      />

      {/* Edit Presenter Info Modal */}
      <EditPresenterModal
        presenterInfo={presenterInfo}
        onSave={handleSavePresenter}
        isOpen={isEditPresenterOpen}
        onClose={() => setIsEditPresenterOpen(false)}
      />

      {/* Quiz Modal for Analysis Slides (Slide 9 - 16) */}
      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        slideNumber={currentSlide.slideNumber}
        onNextSlide={goToNext}
      />

      {/* GitHub Runner & Deployment Toolkit Modal */}
      <GitHubToolModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
}
