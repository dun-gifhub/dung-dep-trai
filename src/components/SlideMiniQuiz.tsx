import React, { useState, useEffect } from 'react';
import { SLIDE_QUIZZES } from '../data/slideQuizzes';
import { QuizModal } from './QuizModal';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface SlideMiniQuizProps {
  slideNumber: number;
  onNextSlide?: () => void;
}

export const SlideMiniQuiz: React.FC<SlideMiniQuizProps> = ({ slideNumber, onNextSlide }) => {
  const quiz = SLIDE_QUIZZES[slideNumber];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const totalQuestions = quiz ? (quiz.questions && quiz.questions.length > 0 ? quiz.questions.length : 1) : 0;

  // Check saved answer status for all questions in this slide
  const checkStatus = () => {
    if (!quiz) return;
    let correct = 0;
    let answered = 0;

    for (let i = 0; i < totalQuestions; i++) {
      try {
        const saved = localStorage.getItem(`quiz_slide_${slideNumber}_q_${i}`);
        if (saved) {
          answered++;
          const parsed = JSON.parse(saved);
          if (parsed.isCorrect) correct++;
        }
      } catch {
        // Ignore
      }
    }
    setCorrectCount(correct);
    setAnsweredCount(answered);
  };

  useEffect(() => {
    checkStatus();
  }, [slideNumber, isModalOpen]);

  if (!quiz) return null;

  const isAllCorrect = correctCount === totalQuestions && totalQuestions > 0;

  return (
    <>
      <div className="w-full mt-2 relative z-20">
        <div
          id={`quiz-trigger-slide-${slideNumber}`}
          onClick={() => setIsModalOpen(true)}
          className={`w-full px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 select-none ${
            isAllCorrect
              ? 'bg-[#edf6ee] border-emerald-300 hover:bg-[#e4f1e5]'
              : 'bg-white/95 border-[#ded3c3] hover:bg-[#fbf7f0] hover:border-[#9E2A2B]'
          }`}
          title="Bấm để mở Quiz trắc nghiệm củng cố cho Slide này"
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                isAllCorrect
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#9E2A2B] text-white'
              }`}
            >
              {isAllCorrect ? '✓' : '?'}
            </div>

            <span className="font-serif-title font-bold text-xs sm:text-[13px] text-[#241e19]">
              Quiz trắc nghiệm: Củng cố kiến thức Slide {slideNumber}
            </span>

            {/* Status badge */}
            {answeredCount > 0 ? (
              isAllCorrect ? (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Đúng {correctCount}/{totalQuestions} câu
                </span>
              ) : (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-300">
                  Đã làm {answeredCount}/{totalQuestions} câu (đúng {correctCount})
                </span>
              )
            ) : (
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-[#736555] bg-[#f0ebd9] px-2 py-0.5 rounded-full border border-[#dfd3c0]">
                <Sparkles className="w-3 h-3 text-amber-600" />
                {totalQuestions} câu trắc nghiệm tương tác
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-[#9E2A2B]">
            <span>{isAllCorrect ? 'Xem lại câu hỏi' : 'Mở Quiz Modal'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Render the QuizModal component */}
      <QuizModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        slideNumber={slideNumber}
        onNextSlide={onNextSlide}
      />
    </>
  );
};
