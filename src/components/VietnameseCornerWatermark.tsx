import React from 'react';

interface VietnameseCornerWatermarkProps {
  className?: string;
  opacity?: number;
  showCenterSeal?: boolean;
}

/**
 * Authentic Vietnamese Classical Watermark Ornaments
 * Inspired by Đại Việt Lê Sơ (15th century) decorative motifs:
 * - Hồi văn thước thợ cổ điển (Traditional classical geometric meander frame)
 * - Mây tản Đại Việt & Hoa cúc dây thời Lê sơ (Cloud scrolls & Chrysanthemum tendrils)
 * - Cánh chim én bay trong rặng mây mùa xuân (Spring Swallow motif for "Xuân Yến")
 */
export const VietnameseCornerWatermark: React.FC<VietnameseCornerWatermarkProps> = ({
  className = '',
  opacity = 0.18,
  showCenterSeal = true,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      style={{ opacity }}
    >
      {/* 1. TOP-LEFT CORNER WATERMARK */}
      <svg
        className="absolute top-1.5 left-1.5 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 text-[#9E2A2B]"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Frame: Classical Meander / Hồi văn thước thợ thời Lê */}
        <path
          d="M 6 6 L 130 6 L 130 18 L 18 18 L 18 130 L 6 130 Z"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path
          d="M 24 24 L 95 24 L 95 32 L 32 32 L 32 95 L 24 95 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        {/* Corner Accent Knot / Hoa văn mắt ngọc */}
        <rect x="9" y="9" width="6" height="6" fill="#7F1D1D" />
        <rect x="23" y="9" width="3" height="3" fill="#7F1D1D" />
        <rect x="9" y="23" width="3" height="3" fill="#7F1D1D" />

        {/* Mây tản Đại Việt thời Lê Sơ (Vietnamese Cloud Scroll & Swirls) */}
        <path
          d="M 36 36 C 55 34, 75 42, 70 60 C 66 74, 48 70, 50 56 C 52 45, 65 48, 62 55"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 36 36 C 34 55, 42 75, 60 70 C 74 66, 70 48, 56 50 C 45 52, 48 65, 55 62"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cloud tail tendrils (Đuôi mây cuộn sóng) */}
        <path
          d="M 70 60 C 85 62, 108 52, 118 42 C 124 36, 126 28, 120 26 C 112 24, 106 35, 96 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 60 70 C 62 85, 52 108, 42 118 C 36 124, 28 126, 26 120 C 24 112, 35 106, 36 96"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Hoa cúc dây thời Lê Sơ (Chrysanthemum petal motif) */}
        <path
          d="M 46 46 C 42 40, 50 34, 56 38 C 62 42, 54 50, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M 46 46 C 40 42, 34 50, 38 56 C 42 62, 50 54, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <circle cx="48" cy="48" r="3.5" fill="#7F1D1D" />

        {/* Chim én cổ lượn cánh mờ ảo (Stylized Spring Swallow silhouette) */}
        <path
          d="M 76 28 C 82 24, 94 22, 102 18 C 96 24, 92 30, 94 34 C 98 32, 106 28, 112 30 C 104 36, 94 38, 88 38 C 82 38, 78 34, 76 28 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        {/* Forked tail of the swallow (Đuôi én chữ V) */}
        <path
          d="M 88 38 L 80 44 L 84 39 L 77 39 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </svg>

      {/* 2. TOP-RIGHT CORNER WATERMARK (Flipped horizontally) */}
      <svg
        className="absolute top-1.5 right-1.5 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 text-[#9E2A2B] -scale-x-100"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Frame: Classical Meander */}
        <path
          d="M 6 6 L 130 6 L 130 18 L 18 18 L 18 130 L 6 130 Z"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path
          d="M 24 24 L 95 24 L 95 32 L 32 32 L 32 95 L 24 95 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <rect x="9" y="9" width="6" height="6" fill="#7F1D1D" />
        <rect x="23" y="9" width="3" height="3" fill="#7F1D1D" />
        <rect x="9" y="23" width="3" height="3" fill="#7F1D1D" />

        {/* Vietnamese Cloud Scroll */}
        <path
          d="M 36 36 C 55 34, 75 42, 70 60 C 66 74, 48 70, 50 56 C 52 45, 65 48, 62 55"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 36 36 C 34 55, 42 75, 60 70 C 74 66, 70 48, 56 50 C 45 52, 48 65, 55 62"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 70 60 C 85 62, 108 52, 118 42 C 124 36, 126 28, 120 26 C 112 24, 106 35, 96 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 60 70 C 62 85, 52 108, 42 118 C 36 124, 28 126, 26 120 C 24 112, 35 106, 36 96"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Chrysanthemum petal motif */}
        <path
          d="M 46 46 C 42 40, 50 34, 56 38 C 62 42, 54 50, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M 46 46 C 40 42, 34 50, 38 56 C 42 62, 50 54, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <circle cx="48" cy="48" r="3.5" fill="#7F1D1D" />

        {/* Stylized Spring Swallow */}
        <path
          d="M 76 28 C 82 24, 94 22, 102 18 C 96 24, 92 30, 94 34 C 98 32, 106 28, 112 30 C 104 36, 94 38, 88 38 C 82 38, 78 34, 76 28 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M 88 38 L 80 44 L 84 39 L 77 39 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </svg>

      {/* 3. BOTTOM-LEFT CORNER WATERMARK (Flipped vertically) */}
      <svg
        className="absolute bottom-1.5 left-1.5 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 text-[#9E2A2B] -scale-y-100"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 6 6 L 130 6 L 130 18 L 18 18 L 18 130 L 6 130 Z"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path
          d="M 24 24 L 95 24 L 95 32 L 32 32 L 32 95 L 24 95 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <rect x="9" y="9" width="6" height="6" fill="#7F1D1D" />
        <rect x="23" y="9" width="3" height="3" fill="#7F1D1D" />
        <rect x="9" y="23" width="3" height="3" fill="#7F1D1D" />

        <path
          d="M 36 36 C 55 34, 75 42, 70 60 C 66 74, 48 70, 50 56 C 52 45, 65 48, 62 55"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 36 36 C 34 55, 42 75, 60 70 C 74 66, 70 48, 56 50 C 45 52, 48 65, 55 62"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 70 60 C 85 62, 108 52, 118 42 C 124 36, 126 28, 120 26 C 112 24, 106 35, 96 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 60 70 C 62 85, 52 108, 42 118 C 36 124, 28 126, 26 120 C 24 112, 35 106, 36 96"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M 46 46 C 42 40, 50 34, 56 38 C 62 42, 54 50, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M 46 46 C 40 42, 34 50, 38 56 C 42 62, 50 54, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <circle cx="48" cy="48" r="3.5" fill="#7F1D1D" />

        <path
          d="M 76 28 C 82 24, 94 22, 102 18 C 96 24, 92 30, 94 34 C 98 32, 106 28, 112 30 C 104 36, 94 38, 88 38 C 82 38, 78 34, 76 28 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M 88 38 L 80 44 L 84 39 L 77 39 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </svg>

      {/* 4. BOTTOM-RIGHT CORNER WATERMARK (Rotated 180°) */}
      <svg
        className="absolute bottom-1.5 right-1.5 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 text-[#9E2A2B] rotate-180"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 6 6 L 130 6 L 130 18 L 18 18 L 18 130 L 6 130 Z"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path
          d="M 24 24 L 95 24 L 95 32 L 32 32 L 32 95 L 24 95 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <rect x="9" y="9" width="6" height="6" fill="#7F1D1D" />
        <rect x="23" y="9" width="3" height="3" fill="#7F1D1D" />
        <rect x="9" y="23" width="3" height="3" fill="#7F1D1D" />

        <path
          d="M 36 36 C 55 34, 75 42, 70 60 C 66 74, 48 70, 50 56 C 52 45, 65 48, 62 55"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 36 36 C 34 55, 42 75, 60 70 C 74 66, 70 48, 56 50 C 45 52, 48 65, 55 62"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 70 60 C 85 62, 108 52, 118 42 C 124 36, 126 28, 120 26 C 112 24, 106 35, 96 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 60 70 C 62 85, 52 108, 42 118 C 36 124, 28 126, 26 120 C 24 112, 35 106, 36 96"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M 46 46 C 42 40, 50 34, 56 38 C 62 42, 54 50, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M 46 46 C 40 42, 34 50, 38 56 C 42 62, 50 54, 46 46 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <circle cx="48" cy="48" r="3.5" fill="#7F1D1D" />

        <path
          d="M 76 28 C 82 24, 94 22, 102 18 C 96 24, 92 30, 94 34 C 98 32, 106 28, 112 30 C 104 36, 94 38, 88 38 C 82 38, 78 34, 76 28 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M 88 38 L 80 44 L 84 39 L 77 39 Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </svg>

      {/* 5. ULTRA-SUBTLE CENTER WATERMARK: Triện hoa văn mây tản & Thư pháp chữ "Xuân Yến" (春燕) */}
      {showCenterSeal && (
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-dashed border-[#9E2A2B] flex items-center justify-center p-8 text-[#9E2A2B]">
            <div className="w-full h-full rounded-full border-2 border-[#9E2A2B] flex flex-col items-center justify-center font-serif-title font-bold text-center">
              <span className="text-6xl sm:text-7xl tracking-widest block leading-none">春燕</span>
              <span className="text-xs tracking-widest uppercase mt-3 font-mono">ĐỖ CẬN • 1478</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
