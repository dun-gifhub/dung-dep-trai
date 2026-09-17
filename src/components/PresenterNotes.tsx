import React, { useState, useEffect } from 'react';
import { Mic, Play, Pause, RotateCcw, Copy, Check, ChevronUp, ChevronDown } from 'lucide-react';

interface PresenterNotesProps {
  slideNumber: number;
  notes: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const PresenterNotes: React.FC<PresenterNotesProps> = ({
  slideNumber,
  notes,
  isOpen,
  onToggle,
}) => {
  const [copied, setCopied] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(notes);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#27221c] text-[#f2ede4] border-t border-[#453b31] transition-all duration-300">
      {/* Bar Header */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#e8dfd3] hover:text-white transition-colors"
        >
          <div className="w-6 h-6 rounded-md bg-[#9E2A2B] flex items-center justify-center text-white">
            <Mic className="w-3.5 h-3.5" />
          </div>
          <span>Lời thuyết minh cho diễn giả (Học sinh thuyết trình Slide {slideNumber})</span>
          {isOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronUp className="w-4 h-4 ml-1" />}
        </button>

        {/* Stopwatch & Controls */}
        <div className="flex items-center gap-3 text-xs">
          {/* Timer */}
          <div className="flex items-center gap-1.5 bg-[#383129] px-2.5 py-1 rounded-md border border-[#4d4439]">
            <span className="text-[#a89d8f]">Thời gian nói:</span>
            <span className="font-mono font-bold text-amber-400">{formatTime(seconds)}</span>
            <button
              onClick={() => setTimerActive(!timerActive)}
              className="p-1 hover:text-amber-300 transition-colors ml-1"
              title={timerActive ? 'Tạm dừng bấm giờ' : 'Bắt đầu bấm giờ'}
            >
              {timerActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                setTimerActive(false);
                setSeconds(0);
              }}
              className="p-1 hover:text-rose-300 transition-colors"
              title="Đặt lại đồng hồ"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy script */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 bg-[#383129] hover:bg-[#4d4439] px-2.5 py-1 rounded-md transition-colors text-[#e8dfd3]"
            title="Sao chép lời thuyết minh của slide này"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Đã chép' : 'Chép lời thoại'}</span>
          </button>
        </div>
      </div>

      {/* Expanded Content Drawer */}
      {isOpen && (
        <div className="max-w-7xl mx-auto px-4 pb-3 pt-1 border-t border-[#3d342a]">
          <div className="flex items-center justify-between text-xs text-[#a89d8f] mb-1.5">
            <span className="italic">
              * Lời nói gợi ý mẫu giúp học sinh tự tin trình bày mạch lạc, tự nhiên trước thầy cô và lớp học:
            </span>
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="text-amber-300 hover:underline"
            >
              Cỡ chữ: {fontSize === 'normal' ? 'Vừa' : 'Lớn'}
            </button>
          </div>

          <div
            className={`bg-[#1c1814] p-3.5 rounded-lg border border-[#383128] text-[#f4efe8] leading-relaxed shadow-inner ${
              fontSize === 'large' ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'
            }`}
          >
            <p className="font-sans font-normal tracking-wide">
              {notes}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
