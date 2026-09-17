import React, { useState, useEffect } from 'react';
import { SlideData, PresenterInfo } from '../types';
import { InteractivePoemViewer } from './InteractivePoemViewer';
import { DiscussionQuiz } from './DiscussionQuiz';
import { SlideMiniQuiz } from './SlideMiniQuiz';
import { VietnameseCornerWatermark } from './VietnameseCornerWatermark';
import { motion, AnimatePresence } from 'motion/react';
import {
  Feather,
  BookOpen,
  MapPin,
  Calendar,
  AlertTriangle,
  Award,
  Sparkles,
  Layers,
  Heart,
  ExternalLink,
  Edit3,
  Landmark,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
  presenterInfo: PresenterInfo;
  onOpenEditPresenter: () => void;
  onNextSlide?: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  presenterInfo,
  onOpenEditPresenter,
  onNextSlide,
}) => {
  // CSS Transition Fade-in state triggered on each slide change
  const [fadeState, setFadeState] = useState<'enter' | 'active'>('enter');

  useEffect(() => {
    // Initial enter state (opacity: 0, subtle translateY)
    setFadeState('enter');
    // Next tick activates the CSS transition for a smooth, subtle fade-in glide
    const timer = setTimeout(() => {
      setFadeState('active');
    }, 25);
    return () => clearTimeout(timer);
  }, [slide.slideNumber]);

  return (
    <div
      id="presentation-slide-canvas"
      className="w-full aspect-[16/9] bg-[#fbf9f4] rounded-2xl border-2 border-[#d9cebc] shadow-xl p-5 sm:p-7 md:p-9 flex flex-col justify-between relative overflow-hidden select-none"
      style={{
        backgroundImage: `radial-gradient(#e5dbc9 1px, transparent 1px), radial-gradient(#efe7d7 1px, #fbf9f4 1px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px',
      }}
    >
      {/* Authentic Classical Vietnamese Corner Watermark Ornaments */}
      <VietnameseCornerWatermark
        opacity={slide.slideNumber === 1 ? 0.28 : 0.20}
        showCenterSeal={slide.slideNumber !== 1}
      />
      {/* Subtle Classical Inner Inlay Border */}
      <div className="absolute inset-2 sm:inset-3 rounded-xl border border-[#9E2A2B]/15 pointer-events-none z-0" />

      {/* Main Slide Content with Subtle CSS Transition Fade-In */}
      <div
        id={`slide-content-stage-${slide.slideNumber}`}
        className={`flex-1 flex flex-col justify-between z-10 w-full min-h-0 overflow-hidden slide-content-fade ${
          fadeState === 'active' ? 'fade-active' : 'fade-enter'
        }`}
      >
        {/* Slide 1: Cover Page */}
        {slide.slideNumber === 1 && (
          <div className="flex-1 flex flex-col justify-between z-10">
            {/* Top Banner Tag */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-[#9E2A2B] text-white px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NGỮ VĂN TRUNG ĐẠI • DI SẢN HÁN NÔM THÁI NGUYÊN</span>
              </div>

              <div className="font-serif-title text-xs text-[#786c5e] flex items-center gap-1.5">
                <span>Niên hiệu Hồng Đức (Thời Lê sơ, 1478)</span>
                <span className="w-2 h-2 rounded-full bg-[#9E2A2B]" />
              </div>
            </div>

            {/* Center Titles */}
            <div className="text-center my-auto py-2">
              {/* Stamp seal effect */}
              <div className="inline-block border-2 border-[#9E2A2B] text-[#9E2A2B] px-3 py-0.5 rounded text-[11px] font-bold tracking-widest uppercase mb-2 bg-[#9E2A2B]/5">
                Toàn Việt Thi Lục (Lê Quý Đôn)
              </div>

              <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241e19] tracking-tight mb-2 drop-shadow-xs">
                TÌM HIỂU TÁC PHẨM “XUÂN YẾN” (春燕)
              </h1>

              <p className="font-serif-title text-lg sm:text-xl md:text-2xl font-bold text-[#9E2A2B] italic">
                Tác giả: ĐỖ CẬN (杜覲)
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#4d4439] mt-1">
                Danh nhân văn hóa – Nhà thơ – Vị Tiến sĩ khai khoa quê hương Thái Nguyên
              </p>

              <div className="w-24 h-1 bg-[#9E2A2B] mx-auto mt-4 rounded-full" />
            </div>

            {/* Bottom Info Card */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/80 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs backdrop-blur-xs">
              {/* Student info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#3d342a] flex-1">
                <div>
                  <span className="text-[#807261] block text-[10px] uppercase font-semibold">Môn học:</span>
                  <span className="font-bold text-[#9E2A2B]">{presenterInfo.subject}</span>
                </div>
                <div>
                  <span className="text-[#807261] block text-[10px] uppercase font-semibold">Người thuyết trình:</span>
                  <span className="font-bold text-[#241e19]">{presenterInfo.studentName || 'Học sinh trình bày'}</span>
                </div>
                <div>
                  <span className="text-[#807261] block text-[10px] uppercase font-semibold">Lớp:</span>
                  <span className="font-bold text-[#241e19]">{presenterInfo.className}</span>
                </div>
                <div>
                  <span className="text-[#807261] block text-[10px] uppercase font-semibold">Trường học:</span>
                  <span className="font-bold text-[#241e19] truncate block">{presenterInfo.schoolName}</span>
                </div>
              </div>

              {/* Quick edit button */}
              <button
                onClick={onOpenEditPresenter}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#f0e8db] hover:bg-[#e4dac8] text-[#5c5040] transition-colors flex items-center gap-1.5 shrink-0"
                title="Chỉnh sửa thông tin học sinh, lớp, trường"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#9E2A2B]" />
                <span>Sửa thông tin</span>
              </button>
            </div>
          </div>
        )}

      {/* Slide 2: Đỗ Cận là ai? (Timeline trực quan) */}
      {slide.slideNumber === 2 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
                I. TIỂU SỬ & LAI LỊCH DANH NHÂN
              </span>
              <span className="text-xs text-[#706456] italic">Triều Lê sơ (Thế kỷ XV)</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          {/* Timeline visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 my-3 flex-1 items-center">
            {/* Milestone 1 */}
            <div className="bg-white/85 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between h-full hover:border-[#9E2A2B] transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif-title font-extrabold text-base text-[#9E2A2B]">1434</span>
                <Calendar className="w-4 h-4 text-[#9E2A2B]" />
              </div>
              <div className="my-1.5">
                <strong className="text-xs text-[#241e19] block font-serif-title">Năm sinh</strong>
                <p className="text-xs text-[#52473b] mt-0.5">
                  Sinh dưới triều vua Lê Thái Tông thời Lê sơ. Tên khai sinh: <strong>Đỗ Viễn</strong>.
                </p>
              </div>
              <span className="text-[10px] text-[#786c5e] bg-[#f5ede0] px-2 py-0.5 rounded w-fit">
                Tự: Hữu Khác
              </span>
            </div>

            {/* Milestone 2 */}
            <div className="bg-white/85 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between h-full hover:border-[#9E2A2B] transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif-title font-extrabold text-base text-[#3D5A40]">Hiệu</span>
                <Landmark className="w-4 h-4 text-[#3D5A40]" />
              </div>
              <div className="my-1.5">
                <strong className="text-xs text-[#241e19] block font-serif-title">Hiệu: Phổ Sơn</strong>
                <p className="text-xs text-[#52473b] mt-0.5">
                  Quê hương: Thôn <strong>Thống Thượng</strong>, Phổ Yên, xứ Thái Nguyên (nay là TP. Phổ Yên).
                </p>
              </div>
              <span className="text-[10px] text-[#3D5A40] bg-[#eaf2eb] px-2 py-0.5 rounded w-fit font-semibold">
                Đất thép Phổ Yên
              </span>
            </div>

            {/* Milestone 3 */}
            <div className="bg-white/85 p-3 rounded-xl border-2 border-[#9E2A2B] shadow-xs flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <span className="font-serif-title font-extrabold text-base text-[#9E2A2B]">1478</span>
                <Award className="w-4 h-4 text-[#9E2A2B]" />
              </div>
              <div className="my-1.5">
                <strong className="text-xs text-[#9E2A2B] block font-serif-title">Đỗ Tiến Sĩ</strong>
                <p className="text-xs text-[#52473b] mt-0.5">
                  Khoa thi Mậu Tuất, niên hiệu Hồng Đức thứ 9, đời vua Lê Thánh Tông (năm 44 tuổi).
                </p>
              </div>
              <span className="text-[10px] text-white bg-[#9E2A2B] px-2 py-0.5 rounded w-fit font-bold">
                Bảng vàng Văn Miếu
              </span>
            </div>

            {/* Milestone 4 */}
            <div className="bg-white/85 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between h-full hover:border-[#9E2A2B] transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif-title font-extrabold text-base text-[#241e19]">Đổi Tên</span>
                <ShieldCheck className="w-4 h-4 text-[#241e19]" />
              </div>
              <div className="my-1.5">
                <strong className="text-xs text-[#241e19] block font-serif-title">Lê Thánh Tông ban tên</strong>
                <p className="text-xs text-[#52473b] mt-0.5">
                  Sau khi đỗ Tiến sĩ, vua Lê Thánh Tông ban đổi Đỗ Viễn thành <strong>ĐỖ CẬN</strong> (chữ Cận: chầu vua).
                </p>
              </div>
              <span className="text-[10px] text-[#786c5e] bg-[#f5ede0] px-2 py-0.5 rounded w-fit">
                Đỗ Cận (杜覲)
              </span>
            </div>
          </div>

          {/* Important Academic Warning Badge */}
          <div className="bg-rose-50 border-2 border-rose-600/70 rounded-xl p-2.5 flex items-center gap-3 text-rose-950 text-xs">
            <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
            <div>
              <strong className="font-serif-title text-rose-800 text-xs uppercase tracking-wide">
                LƯU Ý HỌC THUẬT QUAN TRỌNG NHẤT:
              </strong>{' '}
              Tuyệt đối <strong>KHÔNG</strong> ghi hoặc nhầm lẫn tác giả thành <strong>“Đỗ Lân”</strong>. Đây là lỗi tam sao thất bản ở một vài tài liệu cũ do tự dạng chữ Hán <strong>Cận (覲)</strong> và <strong>Lân (璘)</strong> nhìn qua có nét tương đồng. Theo Văn bia Tiến sĩ tại Văn Miếu – Quốc Tử Giám và chính sử triều Hậu Lê, danh xưng chuẩn xác là <strong>ĐỖ CẬN</strong>.
            </div>
          </div>

          <SlideMiniQuiz slideNumber={2} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 3: Quê hương Đỗ Cận */}
      {slide.slideNumber === 3 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              II. CỘI NGUỒN VĂN HÓA
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 flex-1 items-stretch">
            {/* Box 1: Địa lý Phổ Yên */}
            <div className="bg-white/85 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#9E2A2B] font-bold text-xs uppercase mb-1.5 font-serif-title">
                  <MapPin className="w-4 h-4" /> Vùng Đất Thống Thượng
                </div>
                <h4 className="font-serif-title font-bold text-sm text-[#241e19] mb-1">
                  Vị trí địa lý đắc địa
                </h4>
                <p className="text-xs text-[#52473b] leading-relaxed">
                  Thôn Thống Thượng, huyện Phổ Yên, phủ Phú Bình, trấn Thái Nguyên xưa (nay thuộc địa bàn TP. Phổ Yên). Là cửa ngõ kết nối châu thổ sông Hồng trù phú với căn cứ địa Việt Bắc hiểm trở.
                </p>
              </div>
              <div className="mt-2 bg-[#f9f6ef] p-2 rounded-lg text-[11px] text-[#706455] border border-[#ebe0cf]">
                • Khí chất: Đất giàu linh khí, con người kiên định, hào sảng, hiếu nghĩa.
              </div>
            </div>

            {/* Box 2: Sơ đồ dòng chảy văn hóa */}
            <div className="bg-white/85 p-3.5 rounded-xl border-2 border-[#9E2A2B] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#3D5A40] font-bold text-xs uppercase mb-1.5 font-serif-title">
                  <Compass className="w-4 h-4" /> Dòng Chảy Khoa Cử
                </div>
                <h4 className="font-serif-title font-bold text-sm text-[#241e19] mb-2">
                  Quê hương → Con người → Dấu ấn Đỗ Cận
                </h4>

                <div className="space-y-1.5 text-xs text-[#40362c]">
                  <div className="flex items-center gap-2 bg-[#faf6ee] p-1.5 rounded border border-[#e8ded0]">
                    <span className="w-5 h-5 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                    <span><strong>Quê hương:</strong> Địa linh nhân kiệt, trọng đạo học.</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#faf6ee] p-1.5 rounded border border-[#e8ded0]">
                    <span className="w-5 h-5 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                    <span><strong>Con người:</strong> Nuôi chí lớn, đèn sách khổ luyện.</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#faf6ee] p-1.5 rounded border border-[#e8ded0]">
                    <span className="w-5 h-5 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                    <span><strong>Khoa bảng:</strong> Ghi danh bảng vàng Quốc Tử Giám.</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 text-center text-xs font-bold text-[#9E2A2B] bg-[#9E2A2B]/10 py-1 rounded">
                Tiến sĩ khai khoa rực rỡ của đất Thái Nguyên
              </div>
            </div>

            {/* Box 3: Đền thờ Đỗ Cận */}
            <div className="bg-white/85 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#9E2A2B] font-bold text-xs uppercase mb-1.5 font-serif-title">
                  <Landmark className="w-4 h-4" /> Di Tích Lịch Sử
                </div>
                <h4 className="font-serif-title font-bold text-sm text-[#241e19] mb-1">
                  Đền thờ Tiến sĩ Đỗ Cận
                </h4>
                <p className="text-xs text-[#52473b] leading-relaxed">
                  Tọa lạc tại địa bàn TP. Phổ Yên, tỉnh Thái Nguyên. Di tích được Nhà nước xếp hạng di tích lịch sử – văn hóa, là nơi phụng thờ, tưởng niệm công đức của cụ và lưu giữ các tư liệu Hán Nôm quý giá.
                </p>
              </div>
              <div className="mt-2 bg-[#eaf2eb] text-[#3D5A40] p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Biểu tượng tự hào của các thế hệ học sinh Thái Nguyên</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-[#706456] italic bg-[#f0ebd9] px-3 py-1.5 rounded-lg border border-[#ded3bd]">
            * Nguồn: Cổng thông tin điện tử tỉnh Thái Nguyên (thainguyen.gov.vn) & Hồ sơ di tích Đền thờ Đỗ Cận.
          </div>

          <SlideMiniQuiz slideNumber={3} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 4: Con đường khoa cử */}
      {slide.slideNumber === 4 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              III. CON ĐƯỜNG KHOA BẢNG VẺ VANG
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          {/* Sơ đồ quá trình */}
          <div className="my-3 flex-1 flex flex-col justify-center space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-xs">
              {/* Step 1 */}
              <div className="bg-white p-3 rounded-xl border border-[#d9cebc] text-center shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#f2ebd9] text-[#9E2A2B] font-bold flex items-center justify-center mx-auto mb-1">
                  1
                </div>
                <strong className="block text-[#241e19]">Đỗ Viễn</strong>
                <p className="text-[11px] text-[#635749] mt-0.5">Xuất thân nho sinh nghèo đất Phổ Sơn</p>
              </div>

              <div className="hidden sm:flex justify-center text-[#9E2A2B]">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Step 2 */}
              <div className="bg-white p-3 rounded-xl border border-[#d9cebc] text-center shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#f2ebd9] text-[#9E2A2B] font-bold flex items-center justify-center mx-auto mb-1">
                  2
                </div>
                <strong className="block text-[#241e19]">Khổ luyện đèn sách</strong>
                <p className="text-[11px] text-[#635749] mt-0.5">Vượt qua các cấp thi Hương, thi Hội cam go</p>
              </div>

              <div className="hidden sm:flex justify-center text-[#9E2A2B]">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Step 3 */}
              <div className="bg-white p-3 rounded-xl border-2 border-[#9E2A2B] text-center shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#9E2A2B] text-white font-bold flex items-center justify-center mx-auto mb-1">
                  3
                </div>
                <strong className="block text-[#9E2A2B]">Khoa Mậu Tuất 1478</strong>
                <p className="text-[11px] text-[#241e19] font-semibold mt-0.5">Đỗ Tiến sĩ (Đệ tam giáp đồng Tiến sĩ)</p>
              </div>
            </div>

            {/* King Renaming Box */}
            <div className="bg-[#f2ece1] rounded-xl border border-[#ded3c3] p-3.5 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center text-xl font-serif-title font-bold shrink-0 shadow-sm">
                覲
              </div>
              <div className="text-xs sm:text-sm text-[#3b3329] leading-relaxed">
                <strong className="text-[#9E2A2B] font-serif-title text-sm block">
                  Ý nghĩa việc vua Lê Thánh Tông ban đổi tên thành ĐỖ CẬN:
                </strong>
                Chữ <strong>Cận (覲)</strong> trong tự điển chữ Hán có nghĩa là <em>“hạ kiến thượng dã”</em> – kẻ dưới đến yết kiến đấng thiên tử, chầu vua. Việc đổi tên vừa thể hiện sự trọng vọng của đấng minh quân đối với người có thực học, vừa khẳng định sứ mệnh phụng sự triều đình và trăm họ.
              </div>
            </div>

            {/* Meaning of Doctor in Feudalism */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] text-xs text-[#40362c]">
              <strong className="text-[#3D5A40] font-serif-title">Ý nghĩa việc đỗ Tiến sĩ trong xã hội phong kiến:</strong>{' '}
              Thời Lê sơ là thời kỳ hưng thịnh bậc nhất của Nho học Việt Nam với quan điểm bất hủ của Thân Nhân Trung: <em>“Hiền tài là nguyên khí của quốc gia”</em>. Đỗ Tiến sĩ năm 1478 không chỉ là vinh hiển cho dòng họ Đỗ mà còn đặt mốc son mở đầu cho truyền thống khoa bảng vinh quang của quê hương Thái Nguyên trên bia đá Văn Miếu Quốc Tử Giám.
            </div>
          </div>

          <SlideMiniQuiz slideNumber={4} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 5: Sự nghiệp của Đỗ Cận */}
      {slide.slideNumber === 5 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              IV. CUỘC ĐỜI & SỰ NGHIỆP CHÍNH TRỊ
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 flex-1 items-stretch">
            {/* Left: Đi sứ nhà Minh */}
            <div className="bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#9E2A2B] font-bold text-xs uppercase mb-2 font-serif-title">
                  <Award className="w-4 h-4" /> Dấu mốc đi sứ năm 1483 (Quý Mão)
                </div>
                <h4 className="font-serif-title font-bold text-base text-[#241e19] mb-1.5">
                  Phó sứ sang triều đình nhà Minh
                </h4>
                <p className="text-xs text-[#4a4034] leading-relaxed">
                  Năm 1483, vua Lê Thánh Tông tin cậy cử Đỗ Cận làm <strong>Phó sứ</strong> trong đoàn sứ bộ Đại Việt sang Yên Kinh (Bắc Kinh ngày nay). Đây là trọng trách ngoại giao sinh tử, đòi hỏi người đi sứ phải có tầm nhìn chính trị và bản lĩnh thơ văn phi phàm.
                </p>
                <div className="mt-2.5 bg-[#fbf9f4] p-2.5 rounded-lg border border-[#e5decb] text-xs text-[#52473b]">
                  • <strong>Khí phách sứ thần:</strong> Ứng đối đĩnh đạc, thơ từ sắc bén khiến triều thần phương Bắc kính trọng văn phong Đại Việt.
                </div>
              </div>
              <div className="text-[11px] text-[#706456] italic mt-2">
                * Ghi chép trong chính sử: Đại Việt Sử Ký Toàn Thư (Bản kỷ thực lục).
              </div>
            </div>

            {/* Right: Triều chính & Văn chương */}
            <div className="bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#3D5A40] font-bold text-xs uppercase mb-2 font-serif-title">
                  <Feather className="w-4 h-4" /> Quan chức triều đình & Tao Đàn
                </div>
                <h4 className="font-serif-title font-bold text-base text-[#241e19] mb-1.5">
                  Đóng góp cho triều đình & Nền thi ca Hồng Đức
                </h4>
                <div className="space-y-2 text-xs text-[#4a4034]">
                  <p>
                    • Sau chuyến đi sứ, sự nghiệp của ông tiếp tục thăng tiến, kinh qua nhiều chức vụ trọng yếu của bộ máy quan lại triều Lê sơ (Thượng thư, Thị độc Hàn lâm viện...).
                  </p>
                  <p>
                    • Ông tham gia sôi nổi vào phong trào văn chương cung đình và gắn bó với không khí sáng tác của hội <strong>Tao Đàn Nhị thập bát tú</strong> do chính vua Lê Thánh Tông sáng lập.
                  </p>
                  <p>
                    • Thơ văn của Đỗ Cận là sự kết hợp nhuần nhuyễn giữa trí tuệ uyên bác của học giả kinh điển với tình cảm mộc mạc, tha thiết với giang sơn xứ sở.
                  </p>
                </div>
              </div>

              <div className="mt-2 bg-[#f0ebd9] p-2 rounded-lg text-xs font-semibold text-[#801818] border border-[#e2d6c1]">
                Nguyên tắc: Trình bày khách quan theo sử liệu, không thêu dệt giai thoại chưa kiểm chứng.
              </div>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={5} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 6: Đỗ Cận và văn học */}
      {slide.slideNumber === 6 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              V. SỰ NGHIỆP TRUYỀN THỪA VĂN HỌC
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 flex-1 items-stretch">
            {/* Confirmed works */}
            <div className="bg-white/95 p-4 rounded-xl border-2 border-[#9E2A2B] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#9E2A2B] font-bold text-xs uppercase mb-2 font-serif-title">
                  <ShieldCheck className="w-4 h-4" /> Tác Phẩm Xác Nhận Chắc Chắn
                </div>
                <h4 className="font-serif-title font-bold text-sm text-[#241e19] mb-2">
                  Lưu trữ trong thư tịch Hán Nôm: “Toàn Việt thi lục”
                </h4>
                <div className="space-y-2 text-xs text-[#3d342a]">
                  <div className="bg-[#faf6ee] p-2.5 rounded-lg border border-[#e5decb]">
                    <strong className="text-[#9E2A2B] font-serif-title block">1. “Xuân Yến” (春燕)</strong>
                    <span className="text-[#594d3f]">
                      Bài thơ thất ngôn tứ tuyệt trữ tình miêu tả cảnh sắc chim én mùa xuân và sự thức dậy của tình yêu đời tha thiết.
                    </span>
                  </div>

                  <div className="bg-[#faf6ee] p-2.5 rounded-lg border border-[#e5decb]">
                    <strong className="text-[#3D5A40] font-serif-title block">2. “Thái Thạch vãn bạc” (采石晚泊)</strong>
                    <span className="text-[#594d3f]">
                      Thơ chữ Hán đề vịnh cảnh ghé thuyền đậu bến Thái Thạch lúc chiều tà trong chuyến đi sứ sang phương Bắc.
                    </span>
                  </div>

                  <div className="bg-[#faf6ee] p-2.5 rounded-lg border border-[#e5decb]">
                    <strong className="text-[#241e19] font-serif-title block">3. “Kim Lăng ký” (金陵記)</strong>
                    <span className="text-[#594d3f]">
                      Tập ký sự bằng văn xuôi chữ Hán ghi chép phong tục, non sông, con người trên đất Kim Lăng.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                ✓ Được Lê Quý Đôn phụng mệnh vua biên soạn tuyển trọn vào tổng tập thi ca quốc gia.
              </div>
            </div>

            {/* Disputed / Folk-attributed works */}
            <div className="bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase mb-2 font-serif-title">
                  <AlertTriangle className="w-4 h-4" /> Tác Phẩm Truyền Tụng / Cần Khảo Chứng
                </div>
                <h4 className="font-serif-title font-bold text-sm text-[#241e19] mb-2">
                  Phân biệt rõ ràng quan điểm học thuật
                </h4>

                <div className="space-y-2.5 text-xs text-[#4a4034] leading-relaxed">
                  <div className="bg-[#fffdf9] p-3 rounded-lg border border-[#ebdcca]">
                    <strong className="text-amber-800 block mb-1">Truyện Nôm “Phan Trần”:</strong>
                    Một số tài liệu truyền miệng hoặc khảo cứu dân gian thời trước từng gán Đỗ Cận là tác giả truyện thơ Nôm Phan Trần.
                  </div>

                  <div className="bg-[#f5efe4] p-3 rounded-lg border border-[#ded2bd] text-[#524638]">
                    <strong className="text-[#801818] block mb-1">Kết luận của giới nghiên cứu Hán Nôm hiện đại:</strong>
                    Tác giả truyện thơ Phan Trần hiện nay được xác định là <strong>khuyết danh</strong>. Chưa có văn bản hay khắc bản cổ nào đủ chứng cứ thư tịch học xác quyết Đỗ Cận viết tác phẩm này.
                  </div>
                </div>
              </div>

              <div className="mt-2 text-xs text-[#706456] italic bg-[#faf8f2] p-2 rounded-lg border border-[#ede4d4]">
                * Học sinh cần phân biệt rành mạch giữa <strong>văn bản thành văn trong thư tịch chính thống</strong> và <strong>giai thoại dân gian</strong> khi thuyết trình.
              </div>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={6} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 7: Giới thiệu tác phẩm “Xuân Yến” */}
      {slide.slideNumber === 7 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              VI. TÁC PHẨM TRỌNG TÂM
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 flex-1 items-stretch">
            {/* Card 1 */}
            <div className="bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-2xl font-serif-title font-bold text-[#9E2A2B] block mb-1">春燕</span>
                <h4 className="font-serif-title font-bold text-sm text-[#241e19]">Tên Tác Phẩm</h4>
                <p className="text-xs text-[#52473b] mt-1.5 leading-relaxed">
                  <strong>Xuân Yến</strong> (春燕).<br />
                  Nghĩa tên: <em>Chim én mùa xuân</em>. Chim én là sứ giả mang tin xuân về, gợi cảm hứng tươi vui, đầm ấm và sinh sôi.
                </p>
              </div>
              <div className="text-[11px] bg-[#f9f5ed] p-2 rounded text-[#706455] border border-[#e8dfcf]">
                Thể loại: Thơ chữ Hán trung đại
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-2xl font-serif-title font-bold text-[#3D5A40] block mb-1">全越詩錄</span>
                <h4 className="font-serif-title font-bold text-sm text-[#241e19]">Nguồn Thư Tịch</h4>
                <p className="text-xs text-[#52473b] mt-1.5 leading-relaxed">
                  Lưu giữ trong bộ <strong>“Toàn Việt thi lục”</strong> (Toàn tập thơ ca nước Việt) do Nhà bác học <strong>Lê Quý Đôn</strong> phụng sắc chỉ biên soạn vào thế kỷ XVIII.
                </p>
              </div>
              <div className="text-[11px] bg-[#eaf2eb] p-2 rounded text-[#3D5A40] font-semibold border border-emerald-200">
                Thư tịch chuẩn mực cấp quốc gia
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 p-4 rounded-xl border-2 border-[#9E2A2B] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-2xl font-serif-title font-bold text-[#801818] block mb-1">七言四絕</span>
                <h4 className="font-serif-title font-bold text-sm text-[#9E2A2B]">Thể Thơ & Quy Cách</h4>
                <p className="text-xs text-[#52473b] mt-1.5 leading-relaxed">
                  Thể thơ: <strong>Thất ngôn tứ tuyệt Đường luật</strong> (4 câu, mỗi câu 7 chữ, tổng cộng 28 chữ Hán mực thước, niêm luật chặt chẽ).
                </p>
              </div>
              <div className="text-[11px] bg-[#9E2A2B]/10 p-2 rounded text-[#9E2A2B] font-bold text-center">
                Mẫu mực của thi pháp cổ điển
              </div>
            </div>
          </div>

          <div className="bg-[#f0ebd9] p-2.5 rounded-xl border border-[#ded2bc] flex items-center justify-between text-xs text-[#3d3327]">
            <span>
              <strong>Phương pháp tiếp cận:</strong> Chữ Hán nguyên bản → Phiên âm Hán-Việt → Dịch nghĩa sát thực → Dịch thơ truyền cảm.
            </span>
            <span className="font-serif-title font-semibold text-[#9E2A2B]">
              Tác giả: Đỗ Cận (Thái Nguyên)
            </span>
          </div>

          <SlideMiniQuiz slideNumber={7} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 8: Văn bản tác phẩm (Interactive 4-layer Poem Viewer) */}
      {slide.slideNumber === 8 && (
        <div className="flex-1 flex flex-col justify-between z-10 overflow-hidden">
          <div className="mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              VII. TIẾP CẬN VĂN BẢN NGUYÊN GỐC
            </span>
            <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs text-[#5c5144] italic">{slide.subtitle}</p>
          </div>

          <div className="flex-1 overflow-hidden my-1">
            <InteractivePoemViewer />
          </div>

          <SlideMiniQuiz slideNumber={8} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 9: Nhan đề “Xuân Yến” */}
      {slide.slideNumber === 9 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              VIII. PHÂN TÍCH THẨM MỸ
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 flex-1 items-center">
            {/* Left: Chiết tự */}
            <div className="space-y-3">
              <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-serif-title font-bold text-[#9E2A2B]">春 (XUÂN)</span>
                  <div className="text-xs text-[#3b3329]">
                    <strong className="block text-sm font-serif-title text-[#241e19]">Mùa xuân – Thời gian vũ trụ</strong>
                    Thời điểm vạn vật bừng tỉnh sau giấc ngủ đông, thời gian của sự sống, mơn mởn chồi non và năng lượng thanh tân tràn trề.
                  </div>
                </div>
              </div>

              <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-serif-title font-bold text-[#3D5A40]">燕 (YẾN)</span>
                  <div className="text-xs text-[#3b3329]">
                    <strong className="block text-sm font-serif-title text-[#241e19]">Chim én – Sinh thể chuyển động</strong>
                    Loài chim báo hiệu mùa xuân về, biểu tượng cổ điển của tình yêu lứa đôi, tổ ấm sum vầy và sự gắn bó thủy chung.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Mối quan hệ tương giao */}
            <div className="bg-[#f4ede1] p-4 rounded-xl border-2 border-[#9E2A2B] shadow-xs text-xs sm:text-sm text-[#382f25] flex flex-col justify-between h-full">
              <div>
                <strong className="font-serif-title text-base text-[#9E2A2B] block mb-2">
                  MỐI QUAN HỆ HỮU CƠ: MÙA XUÂN + CHIM ÉN
                </strong>
                <div className="space-y-2 leading-relaxed">
                  <p>
                    • <strong>Thời gian + Sinh thể:</strong> Mùa xuân cung cấp không gian và bầu khí quyển ấm áp; chim én mang lại nhịp đập sống động và hơi thở của sự sống.
                  </p>
                  <p>
                    • <strong>Bức tranh thiên nhiên:</strong> Sự kết hợp tạo nên khung cảnh mùa xuân không tĩnh lặng khô cứng mà ngập tràn hơi ấm sinh hoạt.
                  </p>
                  <p>
                    • <strong>Khơi nguồn cảm xúc:</strong> Cánh én không bay lượn trên mây xa vời mà sà xuống mái hiên hoa, ngậm bùn thơm làm tổ – trực tiếp khơi dậy “xuân tâm” (lòng yêu đời, yêu cuộc sống) trong tâm hồn tác giả.
                  </p>
                </div>
              </div>

              <div className="mt-2 text-xs font-semibold text-[#801818] italic bg-white/70 p-2 rounded border border-[#ded3c3]">
                * Lưu ý: Chỉ kết luận những tầng nghĩa thực sự phù hợp với cấu trúc câu chữ trong văn bản.
              </div>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={9} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 10: Bức tranh thiên nhiên */}
      {slide.slideNumber === 10 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              IX. PHÂN TÍCH KHÔNG GIAN THI CA
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3 flex-1 items-stretch text-xs">
            {/* Không gian */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-xs text-[#9E2A2B] block font-serif-title uppercase mb-1">
                  1. Không Gian
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  • <em>Đình viện</em> (Sân trong).<br />
                  • <em>Hoạ thiềm</em> (Mái hiên vẽ).<br />
                  • <em>Lục song</em> (Khung cửa sổ biếc).<br />
                  Không gian thu hẹp dần từ ngoại cảnh bao la vào thư phòng tĩnh tại.
                </p>
              </div>
              <span className="text-[10px] text-[#706456] bg-[#f5efe4] px-2 py-0.5 rounded w-fit">
                Thanh tao, đài các
              </span>
            </div>

            {/* Thời gian */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-xs text-[#3D5A40] block font-serif-title uppercase mb-1">
                  2. Thời Gian
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  • <em>Trú tĩnh</em>: Ban ngày yên ắng, không bụi bặm ồn ào.<br />
                  • <em>Nhật vị tê</em>: Mặt trời còn chưa ngả bóng về tây.<br />
                  Thời điểm ngày xuân rực rỡ, ánh sáng tràn ngập.
                </p>
              </div>
              <span className="text-[10px] text-[#3D5A40] bg-[#eaf2eb] px-2 py-0.5 rounded w-fit">
                Ấm áp, thanh tĩnh
              </span>
            </div>

            {/* Màu sắc & Đường nét */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-xs text-[#801818] block font-serif-title uppercase mb-1">
                  3. Màu Sắc & Nét
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  • Xanh tươi của rặng trúc.<br />
                  • Sắc màu chạm trổ nơi hiên hoa.<br />
                  • Sắc xanh ngọc của ô cửa.<br />
                  • Bóng trúc rủ là là mềm mại (trúc ảnh đê).
                </p>
              </div>
              <span className="text-[10px] text-[#801818] bg-[#f9ecec] px-2 py-0.5 rounded w-fit">
                Hài hòa, tươi nhuần
              </span>
            </div>

            {/* Âm thanh & Chuyển động */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-xs text-[#241e19] block font-serif-title uppercase mb-1">
                  4. Động & Tĩnh
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  • Gió khẽ lay (phong vi).<br />
                  • Cánh én ngậm bùn lướt qua.<br />
                  Nghệ thuật <em>"Lấy động tả tĩnh"</em>: sự chuyển động nhẹ làm sâu sắc thêm tĩnh lặng tao nhã.
                </p>
              </div>
              <span className="text-[10px] text-[#241e19] bg-[#eae5db] px-2 py-0.5 rounded w-fit">
                Bút pháp cổ điển
              </span>
            </div>
          </div>

          <div className="bg-[#f0ebd9] p-2.5 rounded-xl border border-[#ded2bc] text-xs text-[#2b241d] font-serif-title">
            <strong>KẾT LUẬN:</strong> Thiên nhiên trong bài thơ không chỉ thuần túy miêu tả ngoại cảnh mà là phương tiện đắc lực để biểu đạt thế giới nội tâm thanh thản, nhạy cảm của bậc tao nhân mặc khách.
          </div>

          <SlideMiniQuiz slideNumber={10} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 11: Hình tượng chim én (Infographic) */}
      {slide.slideNumber === 11 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              X. TÂM ĐIỂM HÌNH TƯỢNG NGHỆ THUẬT
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          {/* Infographic Chain */}
          <div className="my-3 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-white p-3 rounded-xl border-2 border-[#9E2A2B] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#9E2A2B] text-white flex items-center justify-center mx-auto mb-2 font-serif-title font-bold text-lg">
                  燕
                </div>
                <strong className="block text-[#9E2A2B] font-serif-title text-sm">CHIM ÉN</strong>
                <p className="text-[11px] text-[#635749] mt-1">Cánh chim nhỏ bé, linh hoạt lượn về từ phương nam</p>
              </div>

              <div className="bg-white p-3 rounded-xl border-2 border-[#3D5A40] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#3D5A40] text-white flex items-center justify-center mx-auto mb-2 font-serif-title font-bold text-lg">
                  春
                </div>
                <strong className="block text-[#3D5A40] font-serif-title text-sm">MÙA XUÂN</strong>
                <p className="text-[11px] text-[#635749] mt-1">Mùa của ánh sáng ấm áp, gió thoảng nhẹ, bóng trúc ngả nghiêng</p>
              </div>

              <div className="bg-white p-3 rounded-xl border-2 border-amber-600 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center mx-auto mb-2 font-serif-title font-bold text-lg">
                  生
                </div>
                <strong className="block text-amber-800 font-serif-title text-sm">SỰ SỐNG (HƯƠNG NÊ)</strong>
                <p className="text-[11px] text-[#635749] mt-1">Ngậm "bùn thơm" về mái hiên hoa đắp tổ, gây dựng tổ ấm</p>
              </div>

              <div className="bg-white p-3 rounded-xl border-2 border-rose-600 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto mb-2 font-serif-title font-bold text-lg">
                  心
                </div>
                <strong className="block text-rose-800 font-serif-title text-sm">CẢM XÚC (XUÂN TÂM)</strong>
                <p className="text-[11px] text-[#635749] mt-1">Đánh thức tình yêu cuộc sống, niềm rạo rực trong lòng người</p>
              </div>
            </div>

            {/* Chi tiết đắt giá: Hương nê */}
            <div className="mt-2.5 bg-white/95 rounded-xl border border-[#ded3c3] p-2.5 text-xs text-[#3d3328] leading-relaxed">
              <strong className="text-[#9E2A2B] font-serif-title block text-sm mb-0.5">
                Phân tích nét vẽ thần tình: “Đới hương nê” (帶香泥 - Mang theo bùn thơm)
              </strong>
              Bùn đất vốn là thứ bình dị, nhưng trong mắt thi nhân Đỗ Cận, bùn đất mùa xuân đã ướp đượm hương hoa cỏ, ngậm chứa sinh khí của đất trời nên trở thành <em>“hương nê”</em>. Đem bùn thơm ấy về lót tổ ấm dưới mái hiên chạm vẽ, cánh én chính là biểu tượng của lao động cần mẫn, của khát vọng sum vầy và vun đắp hạnh phúc bình dị.
            </div>
          </div>

          <SlideMiniQuiz slideNumber={11} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 12: Mạch cảm xúc của tác giả (Sơ đồ quá trình) */}
      {slide.slideNumber === 12 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XI. MẠCH VẬN ĐỘNG NỘI TÂM
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          {/* Flowchart */}
          <div className="my-3 flex-1 flex flex-col justify-center space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-[#ded3c3] text-center w-full shadow-xs">
                <span className="text-[10px] font-bold text-[#9E2A2B] uppercase block">Bước 1: Quan sát</span>
                <span className="font-serif-title font-bold text-[#241e19]">Gió thoảng, bóng trúc</span>
                <p className="text-[11px] text-[#635749] mt-0.5">Sân viện tĩnh mịch</p>
              </div>

              <div className="hidden sm:block text-[#9E2A2B] font-bold">→</div>

              <div className="bg-white p-2.5 rounded-xl border border-[#ded3c3] text-center w-full shadow-xs">
                <span className="text-[10px] font-bold text-[#3D5A40] uppercase block">Bước 2: Cảm nhận</span>
                <span className="font-serif-title font-bold text-[#241e19]">Cánh én ngậm bùn thơm</span>
                <p className="text-[11px] text-[#635749] mt-0.5">Nhịp sống sinh sôi về tổ</p>
              </div>

              <div className="hidden sm:block text-[#9E2A2B] font-bold">→</div>

              <div className="bg-white p-2.5 rounded-xl border border-[#ded3c3] text-center w-full shadow-xs">
                <span className="text-[10px] font-bold text-amber-700 uppercase block">Bước 3: Lắng đọng</span>
                <span className="font-serif-title font-bold text-[#241e19]">Song biếc ngày yên</span>
                <p className="text-[11px] text-[#635749] mt-0.5">Không một bóng người đến</p>
              </div>

              <div className="hidden sm:block text-[#9E2A2B] font-bold">→</div>

              <div className="bg-white p-2.5 rounded-xl border-2 border-[#9E2A2B] text-center w-full shadow-xs">
                <span className="text-[10px] font-bold text-[#9E2A2B] uppercase block">Bước 4: Bừng sáng</span>
                <span className="font-serif-title font-bold text-[#9E2A2B]">Khiêu bát xuân tâm</span>
                <p className="text-[11px] text-[#241e19] font-semibold mt-0.5">Khêu gợi lòng xuân rực rỡ</p>
              </div>
            </div>

            <div className="bg-[#f2ece1] p-3.5 rounded-xl border border-[#ded3c3] text-xs text-[#3d3328] space-y-1.5 leading-relaxed">
              <strong className="text-[#801818] font-serif-title text-sm block">
                Ý nghĩa của chữ “Khiêu bát” (挑撥) và “Xuân tâm” (春心):
              </strong>
              <p>
                • <strong>Khiêu bát:</strong> Khêu gợi, nhen nhóm, đánh thức. Cánh én chăm chỉ xây tổ trước hiên đã tác động mạnh mẽ vào thị giác và tâm tưởng của thi nhân đang ngồi tĩnh lặng đọc sách bên cửa sổ biếc.
              </p>
              <p>
                • <strong>Xuân tâm:</strong> Lòng xuân – không phải là nỗi u sầu hay cô đơn phong kín, mà là tình yêu đời, sự gắn bó tha thiết với cuộc sống, niềm khát khao hòa nhập vào nhịp đập sinh sôi của đất trời khi ngày xuân còn chưa tắt nắng (nhật vị tê).
              </p>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={12} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 13: Chủ đề của “Xuân Yến” */}
      {slide.slideNumber === 13 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XII. TƯ TƯỞNG TÁC PHẨM
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 flex-1 items-stretch">
            {/* Left box */}
            <div className="bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#9E2A2B] font-serif-title text-sm block mb-2 uppercase tracking-wide">
                  Chủ Đề Trực Tiếp Từ Văn Bản
                </strong>
                <p className="text-xs text-[#403529] leading-relaxed mb-3">
                  Tác phẩm khắc họa bức tranh mùa xuân thanh tĩnh, tao nhã nơi sân viện làng cảnh chốn thôn dã; qua đó thể hiện tâm hồn nhạy cảm, tinh tế cùng niềm yêu đời, yêu sự sống tha thiết và phong thái an nhiên của một bậc trí thức nho gia thời Lê sơ.
                </p>
                <div className="space-y-1.5 text-xs text-[#524536]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#3D5A40]" />
                    <span>Cảnh vật: Mùa xuân thanh bình, ấm êm, trong trẻo.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#3D5A40]" />
                    <span>Con người: Tĩnh tại bên ngoài, rạo rực tình xuân bên trong.</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#706456] bg-[#f9f6ed] p-2 rounded border border-[#e8dfcf] mt-2">
                Không có yếu tố sầu muộn hay bi quan; bài thơ mang âm hưởng trong lành, thuần hậu.
              </div>
            </div>

            {/* Right box */}
            <div className="bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#3D5A40] font-serif-title text-sm block mb-2 uppercase tracking-wide">
                  Tâm Thế Của Thi Nhân Đỗ Cận
                </strong>
                <p className="text-xs text-[#403529] leading-relaxed mb-2">
                  Đỗ Cận nhìn cảnh vật bằng con mắt của một bậc nho sinh thanh nhã:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#524536] pl-1">
                  <li>Trân trọng từng khoảnh khắc tươi đẹp của cuộc sống khi <em>“mặt trời chưa xế tây”</em>.</li>
                  <li>Tìm thấy vẻ đẹp cao quý ngay trong chuyển động mộc mạc của cánh én tha bùn.</li>
                  <li>Phản ánh bầu khí quyển thịnh trị, thái bình và niềm lạc quan của thời đại Hồng Đức.</li>
                </ul>
              </div>

              <div className="bg-[#f0ebd9] p-2 rounded-lg text-xs text-[#801818] font-serif-title font-semibold mt-2">
                Sự hòa hợp tuyệt mỹ giữa cảnh sắc thiên nhiên và nhân cách con người.
              </div>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={13} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 14: Giá trị nội dung */}
      {slide.slideNumber === 14 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XIII. TỔNG HỢP GIÁ TRỊ NỘI DUNG
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 flex-1 items-stretch text-xs">
            {/* Value 1 */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#9E2A2B] font-serif-title text-sm block mb-1">
                  1. Tình Yêu Thiên Nhiên Trong Sáng
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  Thi nhân đón nhận thiên nhiên bằng mọi giác quan: xúc giác (gió thoảng vi vu), thị giác (bóng trúc là là, én lượn), khứu giác (hương thơm của bùn đất mùa xuân).
                </p>
              </div>
              <span className="text-[10px] text-[#706456] italic mt-1 block">
                Dẫn chứng: “Đình viện phong vi trúc ảnh đê” (Câu 1)
              </span>
            </div>

            {/* Value 2 */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#3D5A40] font-serif-title text-sm block mb-1">
                  2. Khát Vọng Xây Đắp Tổ Ấm & Sự Sống
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  Hình ảnh cánh én ngậm bùn thơm về mái hiên hoa là biểu tượng của tinh thần lao động cần cù, niềm ước mơ về sự ấm no, gia đình đoàn viên sum vầy.
                </p>
              </div>
              <span className="text-[10px] text-[#706456] italic mt-1 block">
                Dẫn chứng: “Hoạ thiềm thâm xứ đới hương nê” (Câu 2)
              </span>
            </div>

            {/* Value 3 */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#801818] font-serif-title text-sm block mb-1">
                  3. Tâm Hồn Thanh Nhã & Cảm Thức Thời Gian
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  Trân quý tuổi trẻ và thời gian sống. "Nhật vị tê" nhắc nhở con người hãy mở rộng lòng mình để sống hết mình khi ngày tươi đẹp còn rạng rỡ.
                </p>
              </div>
              <span className="text-[10px] text-[#706456] italic mt-1 block">
                Dẫn chứng: “Khiêu bát xuân tâm nhật vị tê” (Câu 4)
              </span>
            </div>

            {/* Value 4 */}
            <div className="bg-white/90 p-3 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#241e19] font-serif-title text-sm block mb-1">
                  4. Nhân Cách Nghệ Sĩ Đỗ Cận
                </strong>
                <p className="text-[#4a4034] text-[11px] leading-relaxed">
                  Lánh xa sự xô bồ của chốn danh lợi; giữ trọn tâm hồn trong sạch, thuần hậu, lắng nghe được từng rung cảm tinh vi của đất trời quê hương.
                </p>
              </div>
              <span className="text-[10px] text-[#706456] italic mt-1 block">
                Dẫn chứng: “Lục song trú tĩnh vô nhân đáo” (Câu 3)
              </span>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={14} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 15: Giá trị nghệ thuật */}
      {slide.slideNumber === 15 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XIV. NGHỆ THUẬT THI CỔ ĐIỂN
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 flex-1 items-stretch text-xs">
            <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#9E2A2B] font-serif-title text-sm block mb-1.5">
                  1. Thể Thơ Thất Ngôn Tứ Tuyệt Mực Thước
                </strong>
                <p className="text-[#4a4034] leading-relaxed">
                  Chỉ vọn vẹn 4 câu, 28 chữ Hán nhưng cô đúc hàm súc. Luật bằng trắc, niêm luật hài hòa chặt chẽ; gieo vần "ê" thanh thoát (đê – nê – tê).
                </p>
              </div>
              <div className="text-[11px] bg-[#faf6ee] p-1.5 rounded text-[#706456] mt-2">
                • Tính cô đọng: Ý tại ngôn ngoại (ý ở ngoài lời).
              </div>
            </div>

            <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#3D5A40] font-serif-title text-sm block mb-1.5">
                  2. Nghệ Thuật “Lấy Động Tả Tĩnh”
                </strong>
                <p className="text-[#4a4034] leading-relaxed">
                  Dùng cái động rất nhỏ (làn gió thoảng khẽ lay cành trúc, cánh én bay ngậm bùn) để tô đậm sự tĩnh lặng tuyệt đối nơi thư phòng mùa xuân.
                </p>
              </div>
              <div className="text-[11px] bg-[#eaf2eb] p-1.5 rounded text-[#3D5A40] font-semibold mt-2">
                • Đỉnh cao thi pháp ước lệ phương Đông.
              </div>
            </div>

            <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#801818] font-serif-title text-sm block mb-1.5">
                  3. Bút Pháp “Tả Cảnh Ngụ Tình”
                </strong>
                <p className="text-[#4a4034] leading-relaxed">
                  Từ cảnh sân viện bước sang cảnh hiên nhà, khung cửa sổ rồi kết đọng lại ở cõi lòng (“xuân tâm”). Cảnh sắc chính là chiếc gương soi tâm hồn.
                </p>
              </div>
              <div className="text-[11px] bg-[#f9ecec] p-1.5 rounded text-[#801818] mt-2">
                • Sự chuyển hóa liền mạch từ thị giác sang tâm cảm.
              </div>
            </div>

            <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#241e19] font-serif-title text-sm block mb-1.5">
                  4. Thi Trung Hữu Họa (Trong Thơ Có Họa)
                </strong>
                <p className="text-[#4a4034] leading-relaxed">
                  Bài thơ như một bức tranh thủy mặc đài các: có màu xanh của trúc, nét son mái hiên hoa, nét biếc của cửa sổ và ánh nắng chan hòa ấm áp.
                </p>
              </div>
              <div className="text-[11px] bg-[#ede5d8] p-1.5 rounded text-[#524637] mt-2">
                • Vẻ đẹp thẩm mỹ tạo hình tinh xảo.
              </div>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={15} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 16: Đặc sắc của “Xuân Yến” (Sơ đồ tổng kết) */}
      {slide.slideNumber === 16 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XV. TỔNG KẾT TOÀN DIỆN
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          {/* Sơ đồ 3 trụ cột */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 flex-1 items-stretch text-xs">
            {/* Cột 1: Nội dung */}
            <div className="bg-white/90 p-3.5 rounded-xl border-t-4 border-t-[#9E2A2B] border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-[#9E2A2B] tracking-wider block mb-1 font-serif-title">
                  TRỤ CỘT 1
                </span>
                <h4 className="font-serif-title font-bold text-base text-[#241e19] mb-2">
                  NỘI DUNG TƯ TƯỞNG
                </h4>
                <ul className="space-y-1.5 text-[#4a4034]">
                  <li>• Thiên nhiên mùa xuân thanh tân, ấm êm.</li>
                  <li>• Cánh én ngậm bùn thơm dựng xây tổ ấm.</li>
                  <li>• Sự bừng thức của "xuân tâm" – lòng yêu đời.</li>
                  <li>• Nhân cách thanh cao của bậc túc nho thời thịnh trị.</li>
                </ul>
              </div>
              <div className="text-[10px] text-[#9E2A2B] font-bold bg-[#faf6ee] p-1.5 rounded text-center mt-2">
                Thiên nhiên – Sự sống – Tình người
              </div>
            </div>

            {/* Cột 2: Nghệ thuật */}
            <div className="bg-white/90 p-3.5 rounded-xl border-t-4 border-t-[#3D5A40] border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-[#3D5A40] tracking-wider block mb-1 font-serif-title">
                  TRỤ CỘT 2
                </span>
                <h4 className="font-serif-title font-bold text-base text-[#241e19] mb-2">
                  NGHỆ THUẬT ĐƯỜNG LUẬT
                </h4>
                <ul className="space-y-1.5 text-[#4a4034]">
                  <li>• Thể thất ngôn tứ tuyệt hàm súc, mực thước.</li>
                  <li>• Bút pháp thi trung hữu họa sống động.</li>
                  <li>• Lấy động tả tĩnh, tả cảnh ngụ tình tinh tế.</li>
                  <li>• Thi liệu bác học chọn lọc, trang nhã.</li>
                </ul>
              </div>
              <div className="text-[10px] text-[#3D5A40] font-bold bg-[#eaf2eb] p-1.5 rounded text-center mt-2">
                Chuẩn mực – Hàm súc – Điêu luyện
              </div>
            </div>

            {/* Cột 3: Giá trị di sản */}
            <div className="bg-white/90 p-3.5 rounded-xl border-t-4 border-t-[#801818] border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-[#801818] tracking-wider block mb-1 font-serif-title">
                  TRỤ CỘT 3
                </span>
                <h4 className="font-serif-title font-bold text-base text-[#241e19] mb-2">
                  GIÁ TRỊ DI SẢN ĐỊA PHƯƠNG
                </h4>
                <ul className="space-y-1.5 text-[#4a4034]">
                  <li>• Lưu giữ trang trọng trong "Toàn Việt thi lục".</li>
                  <li>• Minh chứng cho truyền thống khoa cử Thái Nguyên.</li>
                  <li>• Tác phẩm mẫu mực phục vụ dạy học văn học địa phương.</li>
                  <li>• Niềm tự hào của vùng đất Phổ Yên – Thái Nguyên.</li>
                </ul>
              </div>
              <div className="text-[10px] text-[#801818] font-bold bg-[#f9ecec] p-1.5 rounded text-center mt-2">
                Lịch sử – Văn hóa – Giáo dục
              </div>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={16} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 17: Đỗ Cận và quê hương Thái Nguyên */}
      {slide.slideNumber === 17 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XVI. GẮN KẾT QUÊ HƯƠNG XỨ THÁI
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="my-3 flex-1 flex flex-col justify-center space-y-3">
            {/* Chain logic */}
            <div className="flex flex-wrap items-center justify-between gap-1.5 bg-white p-3 rounded-xl border border-[#ded3c3] shadow-xs text-xs font-serif-title text-center">
              <span className="bg-[#9E2A2B] text-white px-2.5 py-1 rounded font-bold">ĐỖ CẬN</span>
              <span className="text-[#9E2A2B] font-bold">→</span>
              <span className="bg-[#f0e8dc] text-[#332b22] px-2.5 py-1 rounded font-semibold">Thôn Thống Thượng</span>
              <span className="text-[#9E2A2B] font-bold">→</span>
              <span className="bg-[#f0e8dc] text-[#332b22] px-2.5 py-1 rounded font-semibold">TP. Phổ Yên</span>
              <span className="text-[#9E2A2B] font-bold">→</span>
              <span className="bg-[#f0e8dc] text-[#332b22] px-2.5 py-1 rounded font-semibold">Tỉnh Thái Nguyên</span>
              <span className="text-[#9E2A2B] font-bold">→</span>
              <span className="bg-[#3D5A40] text-white px-2.5 py-1 rounded font-bold">Truyền Thống Khoa Bảng</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] space-y-1.5">
                <strong className="text-[#9E2A2B] font-serif-title text-sm block">
                  Đền thờ Tiến sĩ Đỗ Cận tại quê hương:
                </strong>
                <p className="text-[#4a4034] leading-relaxed">
                  Ngôi đền thờ tại phường Hồng Tiến / xã Minh Đức (TP. Phổ Yên) được công nhận là Di tích Lịch sử – Văn hóa. Nơi đây là điểm đến linh thiêng, nơi nhân dân và các thế hệ học trò về dâng hương trước mỗi kỳ thi để noi gương tinh thần học tập của cụ.
                </p>
              </div>

              <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] space-y-1.5">
                <strong className="text-[#3D5A40] font-serif-title text-sm block">
                  Tôn vinh tên tuổi danh nhân hôm nay:
                </strong>
                <p className="text-[#4a4034] leading-relaxed">
                  Tên của Đỗ Cận đã được vinh dự đặt tên cho các tuyến đường trung tâm và trường học khang trang tại thành phố Phổ Yên và tỉnh Thái Nguyên, là tấm gương sáng ngời về đạo học cho thế hệ tương lai.
                </p>
              </div>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={17} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 18: Giá trị lịch sử và văn hóa */}
      {slide.slideNumber === 18 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XVII. BẢO TỒN DI SẢN HỌC THUẬT
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 flex-1 items-stretch text-xs">
            <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#9E2A2B] font-serif-title text-sm block mb-1">
                  1. Nhân Vật Lịch Sử Xứ Thái
                </strong>
                <p className="text-[#4a4034] leading-relaxed text-[11px]">
                  Đỗ Cận là danh nhân lịch sử cụ thể, có văn bia tại Văn Miếu, có ghi chép trong Đại Việt Sử Ký Toàn Thư. Ông chứng minh vị thế văn hiến rạng rỡ của Thái Nguyên thời phong kiến thịnh trị.
                </p>
              </div>
              <span className="text-[10px] text-[#706456] bg-[#f9f5ed] p-1.5 rounded block">
                Nguồn gốc rõ ràng, xác thực
              </span>
            </div>

            <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#3D5A40] font-serif-title text-sm block mb-1">
                  2. Di Tích Tưởng Niệm Sống Động
                </strong>
                <p className="text-[#4a4034] leading-relaxed text-[11px]">
                  Đền thờ Đỗ Cận không chỉ là công trình kiến trúc cổ kính mà là không gian văn hóa tưởng niệm, minh chứng cho đạo lý “Uống nước nhớ nguồn” và truyền thống tôn sư trọng đạo của nhân dân.
                </p>
              </div>
              <span className="text-[10px] text-[#3D5A40] bg-[#eaf2eb] p-1.5 rounded font-semibold block">
                Di tích lịch sử văn hóa
              </span>
            </div>

            <div className="bg-white/90 p-3.5 rounded-xl border border-[#ded3c3] shadow-xs flex flex-col justify-between">
              <div>
                <strong className="text-[#801818] font-serif-title text-sm block mb-1">
                  3. Ý Thức Bảo Tồn Di Sản Hán Nôm
                </strong>
                <p className="text-[#4a4034] leading-relaxed text-[11px]">
                  Các tác phẩm chữ Hán của Đỗ Cận nhắc nhở thế hệ học sinh hôm nay cần có ý thức tìm hiểu, dịch thuật, số hóa và lưu giữ kho tàng văn thơ cổ của cha ông trên mảnh đất quê nhà.
                </p>
              </div>
              <span className="text-[10px] text-[#801818] bg-[#f9ecec] p-1.5 rounded font-semibold block">
                Trách nhiệm của học sinh
              </span>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={18} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 19: Câu hỏi thảo luận (Discussion Quiz) */}
      {slide.slideNumber === 19 && (
        <div className="flex-1 flex flex-col justify-between z-10 overflow-hidden">
          <div className="mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XVIII. HOẠT ĐỘNG TƯƠNG TÁC LỚP HỌC
            </span>
            <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs text-[#5c5144] italic">{slide.subtitle}</p>
          </div>

          <div className="flex-1 overflow-hidden my-1">
            <DiscussionQuiz />
          </div>
        </div>
      )}

      {/* Slide 20: Kết luận */}
      {slide.slideNumber === 20 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XIX. ĐÚC KẾT BÀI HỌC
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="my-auto py-2 space-y-3">
            {/* 3 Summary Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-white p-3 rounded-xl border border-[#ded3c3] shadow-xs">
                <strong className="block text-[#9E2A2B] font-serif-title text-sm mb-1">
                  ĐỖ CẬN (1434 – ?)
                </strong>
                <p className="text-[#594d3f]">
                  Danh nhân văn hóa kiệt xuất, vị Tiến sĩ tiên phong làm rạng danh bảng vàng quê hương Thái Nguyên.
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#ded3c3] shadow-xs">
                <strong className="block text-[#3D5A40] font-serif-title text-sm mb-1">
                  TÁC PHẨM “XUÂN YẾN”
                </strong>
                <p className="text-[#594d3f]">
                  Viên ngọc quý trong "Toàn Việt thi lục", khúc ca ngợi ca mùa xuân, tình yêu đời và khát vọng hạnh phúc.
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#ded3c3] shadow-xs">
                <strong className="block text-[#801818] font-serif-title text-sm mb-1">
                  GIÁ TRỊ TRƯỜNG TỒN
                </strong>
                <p className="text-[#594d3f]">
                  Giao hòa giữa vẻ đẹp thiên nhiên, chuẩn mực thi pháp và niềm tự hào văn hiến xứ Thái lưu truyền muôn đời.
                </p>
              </div>
            </div>

            {/* Inspiring quote message */}
            <div className="bg-gradient-to-r from-[#9E2A2B]/10 via-[#9E2A2B]/5 to-transparent p-4 rounded-xl border-l-4 border-l-[#9E2A2B] border border-[#ded3c3] text-[#241e19]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E2A2B] block mb-1">
                THÔNG ĐIỆP BÀI HỌC DÀNH CHO THẾ HỆ TRẺ:
              </span>
              <p className="font-serif-title text-sm sm:text-base italic font-semibold leading-relaxed">
                “Tìm hiểu văn học địa phương không chỉ là tìm hiểu một tác phẩm, mà còn là hành trình khám phá lịch sử, văn hóa và những giá trị nhân văn cao đẹp được lưu giữ qua nhiều thế hệ.”
              </p>
            </div>
          </div>

          <SlideMiniQuiz slideNumber={20} onNextSlide={onNextSlide} />
        </div>
      )}

      {/* Slide 21: Tài liệu tham khảo */}
      {slide.slideNumber === 21 && (
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B]">
              XX. NGUỒN TƯ LIỆU HỌC THUẬT CHÍNH THỐNG
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#241e19]">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5144] italic mt-0.5">{slide.subtitle}</p>
          </div>

          <div className="my-3 flex-1 bg-white/90 p-4 rounded-xl border border-[#ded3c3] shadow-xs overflow-y-auto max-h-[310px] space-y-2 text-xs text-[#3b3329]">
            <div className="p-2 bg-[#fcf9f2] rounded-lg border border-[#e8ded0]">
              <strong className="text-[#9E2A2B] font-serif-title block">
                1. Bác học Lê Quý Đôn (1726 – 1784), "Toàn Việt thi lục" (全越詩錄)
              </strong>
              Bộ tổng tập thơ ca Hán văn lớn nhất của Việt Nam thời trung đại, bảo lưu văn bản chuẩn của bài thơ “Xuân Yến” và “Thái Thạch vãn bạc”. Bản lưu tại Viện Nghiên cứu Hán Nôm (Hà Nội).
            </div>

            <div className="p-2 bg-[#fcf9f2] rounded-lg border border-[#e8ded0]">
              <strong className="text-[#3D5A40] font-serif-title block">
                2. Quốc sử quán triều Hậu Lê, "Đại Việt sử ký toàn thư" (Bản kỷ thực lục)
              </strong>
              Ghi chép chính thức về khoa thi Mậu Tuất (1478) và sự kiện năm 1483 cử Phó sứ Đỗ Cận sang triều đình nhà Minh dưới thời vua Lê Thánh Tông.
            </div>

            <div className="p-2 bg-[#fcf9f2] rounded-lg border border-[#e8ded0]">
              <strong className="text-[#801818] font-serif-title block">
                3. Cổng thông tin điện tử tỉnh Thái Nguyên (thainguyen.gov.vn)
              </strong>
              Chuyên mục Danh nhân lịch sử văn hóa & Di tích đền thờ Tiến sĩ Đỗ Cận tại thành phố Phổ Yên.
            </div>

            <div className="p-2 bg-[#fcf9f2] rounded-lg border border-[#e8ded0]">
              <strong className="text-[#241e19] font-serif-title block">
                4. Báo Thái Nguyên (baothainguyen.vn)
              </strong>
              Các bài nghiên cứu, phóng sự về truyền thống khoa bảng xứ Thái và việc bảo tồn di sản đền thờ Đỗ Cận.
            </div>

            <div className="p-2 bg-[#fcf9f2] rounded-lg border border-[#e8ded0]">
              <strong className="text-[#665440] font-serif-title block">
                5. Tài liệu Giáo dục địa phương tỉnh Thái Nguyên (Môn Ngữ văn & Lịch sử)
              </strong>
              Tài liệu chính thức do Sở Giáo dục và Đào tạo tỉnh Thái Nguyên thẩm định và ban hành cho học sinh phổ thông.
            </div>
          </div>

          <div className="text-[11px] text-[#706456] italic bg-[#f0ebd9] px-3 py-1.5 rounded-lg border border-[#ded3bd] flex items-center justify-between">
            <span>* Bài thuyết trình cam kết sử dụng 100% tư liệu học thuật đã được kiểm chứng.</span>
            <span className="font-semibold text-[#9E2A2B]">Nhóm học sinh Ngữ văn – Thái Nguyên</span>
          </div>
        </div>
      )}
      </div>

      {/* Footer Bar (Visible on all slides except Slide 1) */}
      {slide.slideNumber !== 1 && (
        <div className="pt-2 border-t border-[#ded3c3] flex items-center justify-between text-xs text-[#706456] z-10 mt-auto">
          <div className="flex items-center gap-2">
            <span className="font-serif-title font-semibold text-[#9E2A2B]">
              Tác phẩm “Xuân Yến” – Đỗ Cận
            </span>
            <span>•</span>
            <span className="hidden sm:inline">Văn học địa phương Thái Nguyên</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] bg-[#ede5d8] px-2 py-0.5 rounded text-[#524637]">
              {slide.category}
            </span>
            <div className="font-serif-title font-bold text-sm text-[#9E2A2B] flex items-center overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={slide.slideNumber}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.18 }}
                  className="inline-block"
                >
                  {slide.slideNumber}
                </motion.span>
              </AnimatePresence>
              <span className="ml-1 text-[#706456]">/ 21</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
