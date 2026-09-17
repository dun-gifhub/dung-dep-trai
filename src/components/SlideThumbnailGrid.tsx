import React, { useState } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { LayoutGrid, X } from 'lucide-react';

interface SlideThumbnailGridProps {
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const SlideThumbnailGrid: React.FC<SlideThumbnailGridProps> = ({
  currentSlide,
  onSelectSlide,
  isOpen,
  onClose,
}) => {
  const [filter, setFilter] = useState<string>('Tất cả');

  if (!isOpen) return null;

  const categories = ['Tất cả', 'Trang bìa', 'Tác giả', 'Tác phẩm', 'Phân tích', 'Tổng kết & Di sản', 'Thảo luận', 'Nguồn'];

  const filteredSlides = filter === 'Tất cả'
    ? SLIDES_DATA
    : SLIDES_DATA.filter((s) => s.category === filter);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#f7f4ed] rounded-2xl border border-[#d6cbba] max-w-5xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#ded3c3] flex items-center justify-between bg-[#eee6d8]">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-[#9E2A2B]" />
            <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#2d251d]">
              Mục lục & Danh sách các Slide (Toàn bộ 21 Slide)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#dfd4c4] text-[#5e5345] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter categories */}
        <div className="px-4 py-2.5 border-b border-[#ded3c3] bg-[#fbf9f4] flex flex-wrap gap-1.5 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-[#9E2A2B] text-white shadow-xs'
                  : 'bg-[#ede5d8] text-[#5e5345] hover:bg-[#ded3c3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of slides */}
        <div className="p-4 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 flex-1">
          {filteredSlides.map((slide) => {
            const isCurrent = slide.slideNumber === currentSlide;

            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.slideNumber);
                  onClose();
                }}
                className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between h-[150px] relative ${
                  isCurrent
                    ? 'bg-white border-[#9E2A2B] ring-2 ring-[#9E2A2B]/30 shadow-md'
                    : 'bg-white/80 hover:bg-white border-[#ded3c3] hover:border-[#bdae9c] shadow-xs'
                }`}
              >
                {/* Corner watermark accents for classical theme */}
                <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#9E2A2B]/30 pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#9E2A2B]/30 pointer-events-none" />

                {/* Badge top */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-serif-title font-bold text-xs bg-[#9E2A2B] text-white px-2 py-0.5 rounded">
                    #{slide.slideNumber}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#3D5A40] tracking-wider truncate max-w-[100px]">
                    {slide.category}
                  </span>
                </div>

                {/* Title */}
                <div className="my-auto py-1">
                  <div className="font-serif-title font-bold text-xs text-[#2c2621] line-clamp-2 leading-tight">
                    {slide.title}
                  </div>
                  {slide.subtitle && (
                    <div className="text-[10px] text-[#706456] line-clamp-2 mt-0.5 italic">
                      {slide.subtitle}
                    </div>
                  )}
                </div>

                {/* Footer status */}
                <div className="w-full text-right text-[10px] text-[#8a7f71]">
                  {isCurrent ? (
                    <span className="text-[#9E2A2B] font-bold">Đang hiển thị</span>
                  ) : (
                    <span>Nhấp để mở</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
