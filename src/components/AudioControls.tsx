import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  Volume1,
  VolumeX,
  Sliders,
  Sparkles,
  BookOpen,
  Volume,
  Music2,
  Check,
} from 'lucide-react';
import { soundEffects, SoundMode, SoundSettings } from '../utils/soundEffects';

interface AudioControlsProps {
  className?: string;
}

export const AudioControls: React.FC<AudioControlsProps> = ({ className = '' }) => {
  const [settings, setSettings] = useState<SoundSettings>(() => soundEffects.getSettings());
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = soundEffects.saveSettings({ isMuted: !settings.isMuted });
    setSettings(updated);
    if (!updated.isMuted) {
      soundEffects.playSlideTransition();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    const updated = soundEffects.saveSettings({
      volume: vol,
      isMuted: vol === 0 ? true : settings.isMuted,
    });
    setSettings(updated);
  };

  const handleSoundModeChange = (mode: SoundMode) => {
    const updated = soundEffects.saveSettings({
      soundMode: mode,
      isMuted: mode === 'muted' ? true : false,
    });
    setSettings(updated);
    if (mode === 'page-flip') {
      soundEffects.playPageFlip();
    } else if (mode === 'bird-chirp') {
      soundEffects.playBirdChirp();
    } else if (mode === 'both') {
      soundEffects.playSlideTransition();
    }
  };

  const getVolumeIcon = () => {
    if (settings.isMuted || settings.volume === 0 || settings.soundMode === 'muted') {
      return <VolumeX className="w-4 h-4 text-[#8a3333]" />;
    }
    if (settings.volume < 45) {
      return <Volume1 className="w-4 h-4 text-[#9E2A2B]" />;
    }
    return <Volume2 className="w-4 h-4 text-[#9E2A2B]" />;
  };

  return (
    <div className={`relative ${className}`} ref={popoverRef}>
      {/* Toolbar Button */}
      <div className="flex items-center bg-white border border-[#ded3c3] rounded-xl shadow-2xs overflow-hidden">
        {/* Quick Mute/Unmute Toggle */}
        <button
          id="audio-quick-mute-btn"
          type="button"
          onClick={handleToggleMute}
          className={`p-2 transition-colors flex items-center gap-1 hover:bg-[#ede5d8] ${
            settings.isMuted || settings.soundMode === 'muted'
              ? 'bg-[#faecec] text-[#8a3333]'
              : 'text-[#3d3328]'
          }`}
          title={
            settings.isMuted
              ? 'Đang tắt âm (Nhấn để bật âm thanh)'
              : `Âm lượng ${settings.volume}% (Nhấn để tắt tiếng)`
          }
        >
          {getVolumeIcon()}
          <span className="text-[11px] font-bold text-[#635547] min-w-[24px] text-left hidden sm:inline">
            {settings.isMuted || settings.soundMode === 'muted' ? 'Tắt' : `${settings.volume}%`}
          </span>
        </button>

        {/* Popover Settings Opener */}
        <button
          id="audio-settings-popover-btn"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`px-1.5 py-2 border-l border-[#e8dfd2] hover:bg-[#ede5d8] transition-colors ${
            isOpen ? 'bg-[#ede5d8]' : ''
          }`}
          title="Điều chỉnh âm lượng và hiệu ứng chim én / lật trang"
        >
          <Sliders className="w-3.5 h-3.5 text-[#736555]" />
        </button>
      </div>

      {/* Floating Sound Control Popover Panel */}
      {isOpen && (
        <div className="absolute bottom-full right-0 sm:right-auto sm:left-0 mb-2 w-72 bg-[#fbf9f4] rounded-2xl border border-[#ded3c3] p-3.5 shadow-2xl z-50 text-xs text-[#382f25] animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#ebdcca]">
            <div className="flex items-center gap-1.5 font-serif-title font-bold text-xs text-[#241e19]">
              <Music2 className="w-4 h-4 text-[#9E2A2B]" />
              <span>Hiệu ứng âm thanh thuyết trình</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[11px] text-[#8a7a6a] hover:text-[#241e19] px-1"
            >
              Đóng
            </button>
          </div>

          {/* Volume Slider */}
          <div className="space-y-1.5 mb-3 bg-white p-2.5 rounded-xl border border-[#ebdcca]">
            <div className="flex items-center justify-between font-medium text-[11px]">
              <span className="text-[#695d4e] flex items-center gap-1">
                <Volume className="w-3.5 h-3.5 text-[#9E2A2B]" />
                Âm lượng hiệu ứng:
              </span>
              <span className="font-bold text-[#9E2A2B] font-mono">
                {settings.isMuted ? '0% (Đã tắt tiếng)' : `${settings.volume}%`}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <VolumeX className="w-3.5 h-3.5 text-[#8a7b6c] shrink-0" />
              <input
                id="audio-volume-slider"
                type="range"
                min="0"
                max="100"
                value={settings.isMuted ? 0 : settings.volume}
                onChange={handleVolumeChange}
                className="w-full h-1.5 bg-[#ebdcca] rounded-lg appearance-none cursor-pointer accent-[#9E2A2B]"
              />
              <Volume2 className="w-3.5 h-3.5 text-[#9E2A2B] shrink-0" />
            </div>
          </div>

          {/* Sound Mode Selection */}
          <div className="space-y-1.5 mb-3">
            <label className="text-[11px] font-semibold text-[#665a4c] block">
              Kiểu âm thanh khi đổi Slide:
            </label>
            <div className="grid grid-cols-1 gap-1">
              {/* Option 1: Both */}
              <button
                type="button"
                onClick={() => handleSoundModeChange('both')}
                className={`p-2 rounded-lg border text-left flex items-center justify-between transition-all ${
                  settings.soundMode === 'both' && !settings.isMuted
                    ? 'bg-[#f4ebe1] border-[#9E2A2B] text-[#701616] font-semibold shadow-2xs'
                    : 'bg-white border-[#ded3c3] hover:bg-[#f8f5ee] text-[#42372c]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <div>
                    <span className="block leading-tight font-medium">Lật trang + Chim én hót</span>
                    <span className="text-[10px] text-[#786c5e] leading-tight block">
                      Âm hưởng mùa xuân thi vị (Khuyên dùng)
                    </span>
                  </div>
                </div>
                {settings.soundMode === 'both' && !settings.isMuted && (
                  <Check className="w-3.5 h-3.5 text-[#9E2A2B]" />
                )}
              </button>

              {/* Option 2: Page flip only */}
              <button
                type="button"
                onClick={() => handleSoundModeChange('page-flip')}
                className={`p-2 rounded-lg border text-left flex items-center justify-between transition-all ${
                  settings.soundMode === 'page-flip' && !settings.isMuted
                    ? 'bg-[#f4ebe1] border-[#9E2A2B] text-[#701616] font-semibold shadow-2xs'
                    : 'bg-white border-[#ded3c3] hover:bg-[#f8f5ee] text-[#42372c]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#3D5A40] shrink-0" />
                  <div>
                    <span className="block leading-tight font-medium">Chỉ tiếng lật trang sách</span>
                    <span className="text-[10px] text-[#786c5e] leading-tight block">
                      Tiếng sột soạt nhẹ nhàng của trang giấy
                    </span>
                  </div>
                </div>
                {settings.soundMode === 'page-flip' && !settings.isMuted && (
                  <Check className="w-3.5 h-3.5 text-[#9E2A2B]" />
                )}
              </button>

              {/* Option 3: Bird chirp only */}
              <button
                type="button"
                onClick={() => handleSoundModeChange('bird-chirp')}
                className={`p-2 rounded-lg border text-left flex items-center justify-between transition-all ${
                  settings.soundMode === 'bird-chirp' && !settings.isMuted
                    ? 'bg-[#f4ebe1] border-[#9E2A2B] text-[#701616] font-semibold shadow-2xs'
                    : 'bg-white border-[#ded3c3] hover:bg-[#f8f5ee] text-[#42372c]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Volume2 className="w-3.5 h-3.5 text-[#9E2A2B] shrink-0" />
                  <div>
                    <span className="block leading-tight font-medium">Chỉ tiếng chim én hót</span>
                    <span className="text-[10px] text-[#786c5e] leading-tight block">
                      Tiếng chim ríu rít lảnh lót đón xuân
                    </span>
                  </div>
                </div>
                {settings.soundMode === 'bird-chirp' && !settings.isMuted && (
                  <Check className="w-3.5 h-3.5 text-[#9E2A2B]" />
                )}
              </button>

              {/* Option 4: Muted */}
              <button
                type="button"
                onClick={() => handleSoundModeChange('muted')}
                className={`p-2 rounded-lg border text-left flex items-center justify-between transition-all ${
                  settings.soundMode === 'muted' || settings.isMuted
                    ? 'bg-[#faecec] border-[#9E2A2B] text-[#8a3333] font-semibold'
                    : 'bg-white border-[#ded3c3] hover:bg-[#f8f5ee] text-[#42372c]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <VolumeX className="w-3.5 h-3.5 text-[#8a3333] shrink-0" />
                  <span className="font-medium">Tắt toàn bộ âm thanh (Im lặng)</span>
                </div>
                {(settings.soundMode === 'muted' || settings.isMuted) && (
                  <Check className="w-3.5 h-3.5 text-[#8a3333]" />
                )}
              </button>
            </div>
          </div>

          {/* Sound Preview Test Buttons */}
          <div className="pt-2 border-t border-[#ebdcca] flex items-center justify-between gap-1.5">
            <span className="text-[10px] text-[#786c5e] font-semibold">Nghe thử:</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => soundEffects.playPageFlip()}
                className="px-2 py-1 bg-[#ede4d4] hover:bg-[#ded2be] text-[#4a3d2e] rounded-md text-[10px] font-semibold transition-colors flex items-center gap-1"
                title="Nghe thử tiếng lật trang giấy"
              >
                <BookOpen className="w-3 h-3 text-[#3D5A40]" />
                Lật trang
              </button>
              <button
                type="button"
                onClick={() => soundEffects.playBirdChirp()}
                className="px-2 py-1 bg-[#ede4d4] hover:bg-[#ded2be] text-[#4a3d2e] rounded-md text-[10px] font-semibold transition-colors flex items-center gap-1"
                title="Nghe thử tiếng chim én hót"
              >
                <Sparkles className="w-3 h-3 text-amber-700" />
                Chim hót
              </button>
              <button
                type="button"
                onClick={() => soundEffects.playSlideTransition()}
                className="px-2 py-1 bg-[#9E2A2B] hover:bg-[#801818] text-white rounded-md text-[10px] font-semibold transition-colors"
                title="Nghe thử âm thanh chuyển slide"
              >
                Chuyển slide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
