import React, { useState, useEffect } from 'react';
import { SLIDE_QUIZZES } from '../data/slideQuizzes';
import { QuizOption, QuizQuestionItem } from '../types';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Lightbulb,
  X,
  ArrowRight,
  ArrowLeft,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/soundEffects';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  slideNumber: number;
  onNextSlide?: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  slideNumber,
  onNextSlide,
}) => {
  const quiz = SLIDE_QUIZZES[slideNumber];
  const questions: QuizQuestionItem[] = quiz
    ? quiz.questions && quiz.questions.length > 0
      ? quiz.questions
      : [
          {
            id: 'default',
            question: quiz.question,
            options: quiz.options,
            correctKey: quiz.correctKey,
            explanation: quiz.explanation,
          },
        ]
    : [];

  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answeredMap, setAnsweredMap] = useState<Record<number, { selectedKey: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }>>({});

  // Sync state when slideNumber or currentQIndex changes or modal opens
  useEffect(() => {
    if (!isOpen || !quiz) return;

    // Load status for all questions in this slide
    const map: Record<number, { selectedKey: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }> = {};
    questions.forEach((_, idx) => {
      try {
        const saved = localStorage.getItem(`quiz_slide_${slideNumber}_q_${idx}`);
        if (saved) {
          map[idx] = JSON.parse(saved);
        }
      } catch {
        // Ignore
      }
    });
    setAnsweredMap(map);

    const currentSaved = map[currentQIndex];
    if (currentSaved) {
      setSelectedKey(currentSaved.selectedKey);
      setIsAnswered(true);
      setIsCorrect(currentSaved.isCorrect);
    } else {
      setSelectedKey(null);
      setIsAnswered(false);
      setIsCorrect(false);
    }
  }, [slideNumber, isOpen, currentQIndex, quiz]);

  // Reset current question index when slide changes
  useEffect(() => {
    setCurrentQIndex(0);
  }, [slideNumber]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !quiz || questions.length === 0) return null;

  const currentQuestion = questions[currentQIndex] || questions[0];

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered && isCorrect) return; // Prevent re-click when already correct

    const correct = key === currentQuestion.correctKey;
    setSelectedKey(key);
    setIsAnswered(true);
    setIsCorrect(correct);

    const updatedMap = {
      ...answeredMap,
      [currentQIndex]: { selectedKey: key, isCorrect: correct },
    };
    setAnsweredMap(updatedMap);

    try {
      localStorage.setItem(
        `quiz_slide_${slideNumber}_q_${currentQIndex}`,
        JSON.stringify({ selectedKey: key, isCorrect: correct })
      );
    } catch {
      // Ignore
    }

    if (correct) {
      soundEffects.playCelebrationChime();
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  const handleResetCurrent = () => {
    setSelectedKey(null);
    setIsAnswered(false);
    setIsCorrect(false);
    const updatedMap = { ...answeredMap };
    delete updatedMap[currentQIndex];
    setAnsweredMap(updatedMap);
    try {
      localStorage.removeItem(`quiz_slide_${slideNumber}_q_${currentQIndex}`);
    } catch {
      // Ignore
    }
  };

  const totalCorrect = (
    Object.values(answeredMap) as Array<{ selectedKey: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }>
  ).filter((item) => item.isCorrect).length;
  const isAllQuestionsCorrect = totalCorrect === questions.length;

  return (
    <div
      id="quiz-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="quiz-modal-dialog"
        className="bg-[#fbf9f4] border-2 border-[#9E2A2B] rounded-2xl w-full max-w-2xl shadow-2xl p-4 sm:p-6 my-auto text-[#2c2621] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#ded3c3] mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#9E2A2B] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
              ?
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-serif-title font-bold text-sm sm:text-base text-[#9E2A2B] uppercase tracking-wide">
                  Quiz trắc nghiệm củng cố – Slide {slideNumber}
                </span>
                {isAllQuestionsCorrect && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Đã đúng {totalCorrect}/{questions.length} câu
                  </span>
                )}
              </div>
              <p className="text-xs text-[#736555]">
                {questions.length > 1
                  ? `Slide có ${questions.length} câu hỏi trắc nghiệm tương tác giúp học sinh đào sâu kiến thức`
                  : 'Câu hỏi trắc nghiệm nhanh dành cho người thuyết trình tương tác với lớp'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {isAnswered && (
              <button
                onClick={handleResetCurrent}
                className="px-2.5 py-1.5 rounded-xl text-xs text-[#5e5142] hover:bg-[#ede5d8] border border-[#ded3c3] flex items-center gap-1 transition-colors"
                title="Làm lại câu hỏi này"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Làm lại</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#736555] hover:bg-[#ede5d8] hover:text-[#241e19] transition-colors"
              title="Đóng (Phím Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Multi-question Tabs (if more than 1 question) */}
        {questions.length > 1 && (
          <div className="flex items-center justify-between gap-2 mb-3 bg-[#f2ebd9] p-1.5 rounded-xl border border-[#ded3c3]">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-[#57493a] px-2">Danh sách câu:</span>
              {questions.map((q, idx) => {
                const qStatus = answeredMap[idx];
                const isActive = currentQIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#9E2A2B] text-white shadow-xs'
                        : qStatus?.isCorrect
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-white text-[#4a3f33] hover:bg-[#eae1d0]'
                    }`}
                  >
                    <span>Câu {idx + 1}</span>
                    {qStatus?.isCorrect && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-semibold text-[#801818] pr-2">
              Tiến độ: {totalCorrect}/{questions.length} đúng
            </div>
          </div>
        )}

        {/* Question Title */}
        <div className="mb-3.5">
          <div className="flex items-start gap-2">
            <span className="bg-[#ede4d4] text-[#801818] font-serif-title font-bold px-2 py-0.5 rounded text-xs shrink-0 mt-0.5">
              CÂU {currentQIndex + 1}:
            </span>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#241e19] leading-relaxed">
              {currentQuestion.question}
            </h3>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((opt: QuizOption) => {
            const isSelected = selectedKey === opt.key;
            const isThisCorrect = opt.key === currentQuestion.correctKey;

            let cardStyle =
              'bg-white border-[#ded3c3] text-[#3d3328] hover:border-[#9E2A2B] hover:bg-[#fffdfa]';

            if (isAnswered) {
              if (isThisCorrect) {
                cardStyle =
                  'bg-[#edf7ee] border-emerald-500 text-emerald-950 font-medium ring-2 ring-emerald-400/50';
              } else if (isSelected) {
                cardStyle =
                  'bg-[#fcedec] border-rose-400 text-rose-950 ring-2 ring-rose-300/50';
              } else {
                cardStyle = 'bg-white/60 border-[#e6ddd0] text-[#786b5e] opacity-60';
              }
            }

            return (
              <button
                key={opt.key}
                id={`quiz-modal-opt-${slideNumber}-q${currentQIndex}-${opt.key}`}
                onClick={() => handleSelectOption(opt.key)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-start gap-2.5 text-xs sm:text-sm transition-all shadow-2xs ${cardStyle}`}
              >
                <span
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all ${
                    isAnswered && isThisCorrect
                      ? 'bg-emerald-600 text-white'
                      : isAnswered && isSelected
                      ? 'bg-rose-600 text-white'
                      : 'bg-[#ede5d8] text-[#524434]'
                  }`}
                >
                  {isAnswered && isThisCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : isAnswered && isSelected ? (
                    <XCircle className="w-4 h-4 text-white" />
                  ) : (
                    opt.key
                  )}
                </span>
                <span className="leading-snug">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Immediate Feedback Box */}
        {isAnswered && (
          <div
            className={`p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed mb-3 animate-in fade-in duration-200 ${
              isCorrect
                ? 'bg-[#eaf5eb] border-emerald-300 text-[#1f4024]'
                : 'bg-[#fdf1f1] border-rose-300 text-[#541f22]'
            }`}
          >
            <div className="flex items-start gap-2.5">
              {isCorrect ? (
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <Lightbulb className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <div className="font-serif-title font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  {isCorrect ? (
                    <span className="text-emerald-800">
                      🎉 Tuyệt vời! Bạn đã chọn chính xác đáp án: {currentQuestion.correctKey}.
                    </span>
                  ) : (
                    <span className="text-rose-800">
                      Chưa chính xác! Bạn đã chọn {selectedKey}. Hãy xem lại kiến thức và thử lại.
                    </span>
                  )}
                </div>
                <p className="text-xs opacity-95 text-[#2b241d] font-serif-title">
                  <strong>Giải thích học thuật:</strong> {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-[#ded3c3] text-xs">
          <div className="flex items-center gap-2">
            {questions.length > 1 && (
              <>
                <button
                  disabled={currentQIndex === 0}
                  onClick={() => setCurrentQIndex((prev) => prev - 1)}
                  className="px-2.5 py-1.5 rounded-lg border border-[#ded3c3] bg-white hover:bg-[#ede5d8] disabled:opacity-40 disabled:cursor-not-allowed text-[#403427] font-medium flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Câu trước</span>
                </button>
                <button
                  disabled={currentQIndex >= questions.length - 1}
                  onClick={() => setCurrentQIndex((prev) => prev + 1)}
                  className="px-2.5 py-1.5 rounded-lg border border-[#ded3c3] bg-white hover:bg-[#ede5d8] disabled:opacity-40 disabled:cursor-not-allowed text-[#403427] font-medium flex items-center gap-1"
                >
                  <span>Câu kế</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#ded3c3] hover:bg-[#ede5d8] text-[#3d3328] font-semibold transition-colors"
            >
              Đóng
            </button>

            {isAllQuestionsCorrect && onNextSlide && slideNumber < 21 && (
              <button
                onClick={() => {
                  onClose();
                  onNextSlide();
                }}
                className="px-3.5 py-2 rounded-xl bg-[#9E2A2B] hover:bg-[#801818] text-white font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>Sang Slide {slideNumber + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
