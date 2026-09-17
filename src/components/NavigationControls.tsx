import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  FileDown,
  Printer,
  Mic,
  Edit3,
  Loader2,
  HelpCircle,
  Github,
} from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';
import { AudioControls } from './AudioControls';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (slideNumber: number) => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onOpenThumbnails: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onOpenEditPresenter: () => void;
  onExportPPTX: () => void;
  isExportingPPTX: boolean;
  onPrintSlides: () => void;
  onOpenQuiz?: () => void;
  hasQuiz?: boolean;
  onOpenGitHubModal?: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onSelectSlide,
  onToggleFullscreen,
  isFullscreen,
  onOpenThumbnails,
  onToggleNotes,
  isNotesOpen,
  onOpenEditPresenter,
  onExportPPTX,
  isExportingPPTX,
  onPrintSlides,
  onOpenQuiz,
  hasQuiz,
  onOpenGitHubModal,
}) => {
  return (
    <div className="w-full bg-[#fbf9f4] border border-[#d6cbba] rounded-2xl p-2.5 sm:p-3 shadow-md flex flex-wrap items-center justify-between gap-3">
      {/* Left: Previous / Next & Slide jump */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={currentSlide <= 1}
          className="p-2 rounded-xl bg-white border border-[#ded3c3] hover:bg-[#ede5d8] disabled:opacity-40 disabled:hover:bg-white text-[#2c2621] transition-all flex items-center gap-1 shadow-2xs font-semibold text-xs"
          title="Slide trước (Phím Mũi tên trái hoặc PageUp)"
        >
          <ChevronLeft className="w-4 h-4 text-[#9E2A2B]" />
          <span className="hidden sm:inline">Trước</span>
        </button>

        {/* Slide Selector dropdown */}
        <div className="flex items-center gap-1.5 bg-white border border-[#ded3c3] rounded-xl px-2.5 py-1.5 shadow-2xs">
          <span className="text-xs text-[#6e6355] font-medium hidden md:inline">Slide:</span>
          <select
            value={currentSlide}
            onChange={(e) => onSelectSlide(Number(e.target.value))}
            className="bg-transparent font-serif-title font-bold text-xs sm:text-sm text-[#9E2A2B] focus:outline-none cursor-pointer"
          >
            {SLIDES_DATA.map((s) => (
              <option key={s.id} value={s.slideNumber}>
                {s.slideNumber}. {s.title}
              </option>
            ))}
          </select>
          <span className="text-xs text-[#6e6355]">/ {totalSlides}</span>
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide >= totalSlides}
          className="p-2 rounded-xl bg-[#9E2A2B] hover:bg-[#801818] disabled:opacity-40 text-white transition-all flex items-center gap-1 shadow-2xs font-semibold text-xs"
          title="Slide kế tiếp (Phím Mũi tên phải, Space hoặc PageDown)"
        >
          <span className="hidden sm:inline">Tiếp</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Center: Quick tools */}
      <div className="flex items-center gap-1.5">
        {/* Thumbnails grid */}
        <button
          onClick={onOpenThumbnails}
          className="p-2 rounded-xl bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] transition-all flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
          title="Xem danh sách tất cả 21 Slide (Phím G)"
        >
          <LayoutGrid className="w-4 h-4 text-[#9E2A2B]" />
          <span className="hidden md:inline">Mục lục Slide</span>
        </button>

        {/* Presenter Notes Toggle */}
        <button
          onClick={onToggleNotes}
          className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold shadow-2xs ${
            isNotesOpen
              ? 'bg-[#9E2A2B] text-white border-[#9E2A2B]'
              : 'bg-white border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328]'
          }`}
          title="Bật/Tắt Lời thuyết minh cho học sinh thuyết trình (Phím N)"
        >
          <Mic className="w-4 h-4" />
          <span className="hidden md:inline">Lời thuyết minh</span>
        </button>

        {/* Edit Presenter Info */}
        <button
          onClick={onOpenEditPresenter}
          className="p-2 rounded-xl bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] transition-all flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
          title="Chỉnh sửa Tên học sinh, Lớp, Trường học"
        >
          <Edit3 className="w-4 h-4 text-[#3D5A40]" />
          <span className="hidden lg:inline">Sửa tên học sinh</span>
        </button>

        {/* Quick Quiz button for analysis slides 9-16 */}
        {hasQuiz && onOpenQuiz && (
          <button
            id="nav-quiz-trigger-btn"
            onClick={onOpenQuiz}
            className="p-2 rounded-xl bg-[#ede4d4] hover:bg-[#ded3c3] text-[#801818] border border-[#d6c7b2] transition-all flex items-center gap-1.5 text-xs font-bold shadow-2xs"
            title="Mở Quiz câu hỏi nhanh củng cố kiến thức Slide này (Phím Q)"
          >
            <HelpCircle className="w-4 h-4 text-[#9E2A2B]" />
            <span className="hidden md:inline">Quiz Slide {currentSlide}</span>
          </button>
        )}
      </div>

      {/* Right: Sound, Export & Presentation Mode */}
      <div className="flex items-center gap-2">
        {/* Sound & Volume Controls */}
        <AudioControls />

        {/* Export PPTX button */}
        <button
          onClick={onExportPPTX}
          disabled={isExportingPPTX}
          className="px-3 py-2 rounded-xl bg-[#3D5A40] hover:bg-[#2d4330] text-white transition-all flex items-center gap-1.5 text-xs font-bold shadow-2xs"
          title="Tải bài thuyết trình dạng file PowerPoint (.pptx) về máy"
        >
          {isExportingPPTX ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <FileDown className="w-4 h-4 text-emerald-300" />
          )}
          <span>Tải file .PPTX</span>
        </button>

        {/* Print / PDF button */}
        <button
          onClick={onPrintSlides}
          className="p-2 rounded-xl bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] transition-all flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
          title="In hoặc Lưu slide dưới dạng PDF"
        >
          <Printer className="w-4 h-4 text-[#736555]" />
          <span className="hidden sm:inline">In/PDF</span>
        </button>

        {/* GitHub Tool Modal button */}
        {onOpenGitHubModal && (
          <button
            onClick={onOpenGitHubModal}
            className="p-2 rounded-xl bg-[#241e19] hover:bg-[#383028] text-white transition-all flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
            title="Công cụ chạy bài thuyết trình trên GitHub & GitHub Pages miễn phí"
          >
            <Github className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Chạy GitHub</span>
          </button>
        )}

        {/* Fullscreen toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-xl bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] transition-all shadow-2xs"
          title={isFullscreen ? 'Thoát toàn màn hình (Phím F hoặc Esc)' : 'Trình chiếu Toàn màn hình (Phím F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-[#9E2A2B]" /> : <Maximize2 className="w-4 h-4 text-[#9E2A2B]" />}
        </button>
      </div>
    </div>
  );
};
