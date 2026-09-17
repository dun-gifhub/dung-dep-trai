import React, { useState } from 'react';
import { POEM_DATA, VOCABULARY_LIST } from '../data/slidesData';
import { BookOpen, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const InteractivePoemViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fourLayers' | 'vocab' | 'rhythm'>('fourLayers');
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col h-full justify-between">
      {/* Sub Navigation Tabs */}
      <div className="flex items-center gap-2 mb-3 bg-[#e8e0d0]/60 p-1.5 rounded-lg border border-[#d6cbba] w-fit">
        <button
          onClick={() => setActiveTab('fourLayers')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center gap-1.5 ${
            activeTab === 'fourLayers'
              ? 'bg-[#9E2A2B] text-white shadow-sm'
              : 'text-[#4a3f35] hover:bg-[#dfd5c3]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          4 Tầng văn bản (Chữ Hán – Phiên âm – Dịch nghĩa – Dịch thơ)
        </button>

        <button
          onClick={() => setActiveTab('vocab')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center gap-1.5 ${
            activeTab === 'vocab'
              ? 'bg-[#9E2A2B] text-white shadow-sm'
              : 'text-[#4a3f35] hover:bg-[#dfd5c3]'
          }`}
        >
          <Search className="w-4 h-4" />
          Tra cứu từ ngữ & Chú giải ({VOCABULARY_LIST.length} từ)
        </button>

        <button
          onClick={() => setActiveTab('rhythm')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center gap-1.5 ${
            activeTab === 'rhythm'
              ? 'bg-[#9E2A2B] text-white shadow-sm'
              : 'text-[#4a3f35] hover:bg-[#dfd5c3]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Nhịp điệu & Thi pháp Đường luật
        </button>
      </div>

      {/* Animated Tab Content */}
      <AnimatePresence mode="wait">
        {/* Tab 1: 4 Layers */}
        {activeTab === 'fourLayers' && (
          <motion.div
            key="fourLayers"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-2.5 flex-1"
          >
            {POEM_DATA.lines.map((item, idx) => (
              <motion.div
                key={item.lineNum}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: idx * 0.05 }}
                className="bg-white/85 rounded-xl border border-[#ded3c3] p-3 shadow-sm hover:border-[#9E2A2B] hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
              >
                {/* Hanzi + Line Number */}
                <div className="min-w-[190px] lg:min-w-[210px] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#9E2A2B] text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                    {item.lineNum}
                  </span>
                  <div>
                    <div className="font-serif-title text-lg lg:text-xl font-bold text-[#801818] tracking-widest">
                      {item.han}
                    </div>
                    <div className="text-xs font-semibold text-[#3D5A40] italic">
                      {item.transcription}
                    </div>
                  </div>
                </div>

                {/* Literal meaning */}
                <div className="flex-1 text-xs lg:text-sm text-[#4a4237] border-l-0 md:border-l border-[#e5decb] md:pl-3">
                  <span className="font-semibold text-[#801818] block text-[11px] uppercase tracking-wide">Dịch nghĩa:</span>
                  {item.literal}
                </div>

                {/* Poetic rendering */}
                <div className="min-w-[210px] lg:min-w-[240px] bg-[#fbf8f2] rounded-lg p-2.5 border border-[#ede4d4] text-xs lg:text-sm">
                  <span className="font-semibold text-[#3D5A40] block text-[11px] uppercase tracking-wide">Bản dịch thơ:</span>
                  <span className="font-serif-title font-semibold text-[#2c2621] italic text-sm">
                    “{item.poetic}”
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Bottom note */}
            <div className="bg-[#f0ebe0] text-[#5c5245] text-xs px-3 py-1.5 rounded-lg border border-[#e2d8c7] flex items-center justify-between">
              <span>
                <strong>Thể thơ:</strong> Thất ngôn tứ tuyệt Đường luật (Chữ Hán) • <strong>Vần:</strong> đê - nê - tê (vần "ê", hiệp vần ở các chữ cuối câu 1, 2, 4).
              </span>
              <span className="font-serif-title text-[#9E2A2B] font-semibold">
                Trích: Toàn Việt thi lục (Lê Quý Đôn)
              </span>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Vocabulary Lookup */}
        {activeTab === 'vocab' && (
          <motion.div
            key="vocab"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="flex-1 flex flex-col md:flex-row gap-3 overflow-hidden"
          >
            {/* Word List */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 overflow-y-auto max-h-[300px] pr-1">
              {VOCABULARY_LIST.map((vocab) => (
                <button
                  key={vocab.word}
                  onClick={() => setSelectedWord(vocab.word)}
                  className={`p-2 rounded-lg text-left border transition-all text-xs ${
                    selectedWord === vocab.word
                      ? 'bg-[#9E2A2B] text-white border-[#9E2A2B] shadow-sm scale-[1.01]'
                      : 'bg-white/80 hover:bg-[#ede5d8] border-[#ded3c3] text-[#2c2621]'
                  }`}
                >
                  <div className="font-serif-title font-bold text-sm">{vocab.word}</div>
                  <div className={`text-[11px] line-clamp-1 ${selectedWord === vocab.word ? 'text-amber-100' : 'text-[#6b6155]'}`}>
                    {vocab.meaning}
                  </div>
                </button>
              ))}
            </div>

            {/* Word Meaning Card */}
            <div className="w-full md:w-1/2 bg-white rounded-xl border border-[#d6cbba] p-4 flex flex-col justify-center shadow-sm">
              <AnimatePresence mode="wait">
                {selectedWord ? (
                  (() => {
                    const current = VOCABULARY_LIST.find((v) => v.word === selectedWord)!;
                    return (
                      <motion.div
                        key={selectedWord}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between border-b border-[#ebdcca] pb-2">
                          <span className="font-serif-title text-xl font-bold text-[#9E2A2B]">
                            {current.word}
                          </span>
                          <span className="font-serif-title text-2xl font-bold text-[#3D5A40]">
                            {current.han}
                          </span>
                        </div>
                        <div className="text-sm text-[#3b342c] leading-relaxed">
                          <strong className="text-[#801818]">Ý nghĩa trong tác phẩm:</strong>
                          <p className="mt-1 bg-[#faf7f0] p-2.5 rounded-lg border border-[#e8ded0]">
                            {current.meaning}
                          </p>
                        </div>
                        <div className="text-xs text-[#6e6355] italic">
                          * Nhấp vào các từ khác ở danh sách bên trái để tiếp tục tra cứu từ ngữ cổ trong văn bản Hán văn.
                        </div>
                      </motion.div>
                    );
                  })()
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 text-[#73695c]"
                  >
                    <Search className="w-8 h-8 mx-auto text-[#9E2A2B] opacity-60 mb-2" />
                    <p className="text-sm font-semibold">Chọn một từ ngữ bên trái để xem giải nghĩa chi tiết</p>
                    <p className="text-xs mt-1 text-[#8f8576]">Giúp học sinh hiểu chính xác từng thi liệu Hán Nôm mà Đỗ Cận sử dụng.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Rhythm & Poetics */}
        {activeTab === 'rhythm' && (
          <motion.div
            key="rhythm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="flex-1 bg-white/90 rounded-xl border border-[#d6cbba] p-4 space-y-3 overflow-y-auto max-h-[310px]"
          >
            <h4 className="font-serif-title font-bold text-[#9E2A2B] text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Quy luật ngắt nhịp và Bố cục Thất ngôn tứ tuyệt trong “Xuân Yến”
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-[#fbf9f4] p-3 rounded-lg border border-[#e3d7c4] hover:shadow-xs transition-shadow">
                <strong className="text-[#3D5A40] block mb-1 font-serif-title">1. Quy luật ngắt nhịp 4/3 hoặc 2/2/3:</strong>
                <div className="space-y-1 font-mono text-xs text-[#2c2621]">
                  <div>• Đình viện phong vi / trúc ảnh đê (4 / 3)</div>
                  <div>• Hoạ thiềm thâm xứ / đới hương nê (4 / 3)</div>
                  <div>• Lục song trú tĩnh / vô nhân đáo (4 / 3)</div>
                  <div>• Khiêu bát xuân tâm / nhật vị tê (4 / 3)</div>
                </div>
                <p className="text-xs text-[#6e6355] mt-2 italic">
                  Nhịp 4/3 chuẩn mực tạo cảm giác khoan thai, nhàn nhã, phù hợp với tâm thế thư thái ngắm nhìn cảnh vật.
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-lg border border-[#e3d7c4] hover:shadow-xs transition-shadow">
                <strong className="text-[#9E2A2B] block mb-1 font-serif-title">2. Bố cục truyền thống Khai - Thừa - Chuyển - Hợp:</strong>
                <div className="space-y-1.5 text-xs text-[#2c2621]">
                  <div><span className="font-semibold text-[#9E2A2B]">Khai (Mở ý):</span> Câu 1 – Mở ra không gian sân viện tĩnh vắng với gió thoảng và bóng trúc.</div>
                  <div><span className="font-semibold text-[#9E2A2B]">Thừa (Tiếp nối):</span> Câu 2 – Nối tiếp cảnh vật bằng hình ảnh cánh én tha bùn thơm về mái hiên hoa.</div>
                  <div><span className="font-semibold text-[#9E2A2B]">Chuyển (Chuyển ý):</span> Câu 3 – Chuyển vào không gian thư phòng tĩnh lặng bên khung cửa sổ biếc.</div>
                  <div><span className="font-semibold text-[#9E2A2B]">Hợp (Đúc kết):</span> Câu 4 – Khép lại bằng sự bừng tỉnh của "lòng xuân" – tình yêu đời dạt dào.</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
