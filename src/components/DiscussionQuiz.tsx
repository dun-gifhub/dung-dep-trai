import React, { useState, useEffect } from 'react';
import { DISCUSSION_QUESTIONS } from '../data/slidesData';
import { COMPREHENSIVE_QUIZ_QUESTIONS } from '../data/slideQuizzes';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  Award,
  RotateCcw,
  CheckSquare,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { soundEffects } from '../utils/soundEffects';

export const DiscussionQuiz: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discussion' | 'mcq'>('discussion');

  // Discussion state
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [completedList, setCompletedList] = useState<number[]>([]);

  // MCQ Comprehensive State
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [expandedMcqId, setExpandedMcqId] = useState<string | null>(null);

  // Load saved MCQ answers
  useEffect(() => {
    try {
      const saved = localStorage.getItem('comprehensive_quiz_answers');
      if (saved) {
        setAnswers(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const markCompleted = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!completedList.includes(id)) {
      const next = [...completedList, id];
      setCompletedList(next);
      if (next.length === DISCUSSION_QUESTIONS.length) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } else {
      setCompletedList(completedList.filter((item) => item !== id));
    }
  };

  const handleSelectMcq = (questionId: string | number, key: 'A' | 'B' | 'C' | 'D') => {
    const qStr = String(questionId);
    const updated = { ...answers, [qStr]: key };
    setAnswers(updated);
    try {
      localStorage.setItem('comprehensive_quiz_answers', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    const question = COMPREHENSIVE_QUIZ_QUESTIONS.find((q) => String(q.id) === qStr);
    if (question && key === question.correctKey) {
      soundEffects.playCelebrationChime();
      confetti({
        particleCount: 45,
        spread: 50,
        origin: { y: 0.7 },
      });
    }
  };

  const handleResetMcq = () => {
    setAnswers({});
    try {
      localStorage.removeItem('comprehensive_quiz_answers');
    } catch {
      // Ignore
    }
  };

  // MCQ Stats
  const totalMcq = COMPREHENSIVE_QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = COMPREHENSIVE_QUIZ_QUESTIONS.filter(
    (q) => answers[String(q.id)] === q.correctKey
  ).length;

  let academicRank = 'Đang thử thách';
  if (answeredCount >= 8) {
    if (correctCount === 10) academicRank = 'Trạng Nguyên Xứ Thái 🏆';
    else if (correctCount >= 8) academicRank = 'Bảng Nhãn Khoa Bảng 🥈';
    else if (correctCount >= 6) academicRank = 'Thám Hoa Xuất Thân 🥉';
    else academicRank = 'Cần Ôn Tập Thêm 📖';
  }

  return (
    <div className="w-full flex flex-col h-full justify-between">
      {/* Tab Switcher & Progress Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-[#f2ebd9] px-3 py-2 rounded-xl border border-[#ded2bd] mb-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('discussion')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'discussion'
                ? 'bg-[#9E2A2B] text-white shadow-xs'
                : 'bg-white/80 hover:bg-white text-[#4a3f33]'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>5 Câu hỏi thảo luận nhóm</span>
            <span className="bg-white/20 px-1.5 py-0.2 rounded text-[10px]">
              {completedList.length}/5
            </span>
          </button>

          <button
            onClick={() => setActiveTab('mcq')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'mcq'
                ? 'bg-[#9E2A2B] text-white shadow-xs'
                : 'bg-white/80 hover:bg-white text-[#4a3f33]'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>10 Câu trắc nghiệm toàn bài</span>
            <span
              className={`px-1.5 py-0.2 rounded text-[10px] ${
                correctCount === totalMcq ? 'bg-emerald-600 text-white' : 'bg-white/20'
              }`}
            >
              {correctCount}/{totalMcq} đúng
            </span>
          </button>
        </div>

        {activeTab === 'discussion' ? (
          <div className="flex items-center gap-1.5 text-xs text-[#615647]">
            <span>Tiến độ thảo luận:</span>
            <span className="font-bold text-[#9E2A2B] bg-white px-2 py-0.5 rounded border border-[#ded2bd]">
              {completedList.length} / {DISCUSSION_QUESTIONS.length}
            </span>
            {completedList.length === DISCUSSION_QUESTIONS.length && (
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 ml-1">
                <Sparkles className="w-3.5 h-3.5" /> Hoàn thành!
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs">
            <span className="font-medium text-[#4a3f33]">Xếp loại:</span>
            <span className="font-bold text-[#9E2A2B] bg-white px-2 py-0.5 rounded border border-[#ded2bd] flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              {academicRank}
            </span>
            {answeredCount > 0 && (
              <button
                onClick={handleResetMcq}
                className="p-1 rounded text-[#736555] hover:text-[#241e19] hover:bg-[#eae0d0] text-[11px] flex items-center gap-0.5"
                title="Làm lại bộ đề trắc nghiệm"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Làm lại</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Animated Tab Content */}
      <AnimatePresence mode="wait">
        {/* TAB 1: 5 DISCUSSION QUESTIONS */}
        {activeTab === 'discussion' && (
          <motion.div
            key="tab-discussion"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="space-y-2 overflow-y-auto max-h-[340px] pr-1 flex-1"
          >
            {DISCUSSION_QUESTIONS.map((q) => {
              const isExpanded = expandedId === q.id;
              const isDone = completedList.includes(q.id);

              return (
                <div
                  key={q.id}
                  className={`rounded-xl border transition-all ${
                    isExpanded
                      ? 'bg-white border-[#9E2A2B] shadow-xs'
                      : 'bg-white/80 hover:bg-white border-[#e0d6c5]'
                  }`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleQuestion(q.id)}
                    className="w-full text-left p-3 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 flex-1">
                      <span
                        className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                          isDone
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#9E2A2B] text-white'
                        }`}
                      >
                        {isDone ? '✓' : q.id}
                      </span>
                      <span className="font-medium text-xs sm:text-sm text-[#2d251d]">
                        {q.question}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => markCompleted(q.id, e)}
                        title={isDone ? 'Bỏ đánh dấu hoàn thành' : 'Đánh dấu lớp đã thảo luận xong'}
                        className={`p-1 rounded-md text-xs transition-colors flex items-center gap-1 ${
                          isDone
                            ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                            : 'text-[#7a6f5e] hover:bg-[#ede5d8]'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="hidden sm:inline text-[11px] font-medium">
                          {isDone ? 'Đã xong' : 'Chưa xong'}
                        </span>
                      </button>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#9E2A2B]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#7a6f5e]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-3 pt-1 border-t border-[#f0e6d6] space-y-2 text-xs sm:text-sm">
                          {/* Hint */}
                          <div className="flex items-start gap-2 bg-[#fcf9f2] p-2 rounded-lg border border-[#ebdcca] text-[#5e5344]">
                            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-amber-800 text-[11px] uppercase tracking-wide">
                                Gợi ý thảo luận:{' '}
                              </strong>
                              {q.hint}
                            </div>
                          </div>

                          {/* Suggested Answer */}
                          <div className="bg-[#f7f4ed] p-2.5 rounded-lg border border-[#dfd3c0] text-[#2c2621] leading-relaxed">
                            <strong className="text-[#9E2A2B] block mb-1 font-serif-title">
                              Định hướng câu trả lời chuẩn:
                            </strong>
                            {q.suggestedAnswer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 2: 10 COMPREHENSIVE MULTIPLE CHOICE QUESTIONS */}
        {activeTab === 'mcq' && (
          <motion.div
            key="tab-mcq"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="space-y-3 overflow-y-auto max-h-[340px] pr-1 flex-1"
          >
            {COMPREHENSIVE_QUIZ_QUESTIONS.map((q, index) => {
              const selected = answers[String(q.id)];
              const isAnswered = Boolean(selected);
              const isCorrect = selected === q.correctKey;
              const isExpanded = expandedMcqId === String(q.id);

              return (
                <div
                  key={q.id}
                  className={`rounded-xl border p-3 transition-all ${
                    isAnswered
                      ? isCorrect
                        ? 'bg-white/95 border-emerald-300 shadow-2xs'
                        : 'bg-white/95 border-rose-300 shadow-2xs'
                      : 'bg-white/90 border-[#ded3c3] hover:border-[#9E2A2B]'
                  }`}
                >
                  {/* Question Line */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-2 flex-1">
                      <span
                        className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isAnswered
                            ? isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : 'bg-[#ede5d8] text-[#594a3a]'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <h4 className="font-serif-title font-semibold text-xs sm:text-sm text-[#241e19] leading-snug">
                        {q.question}
                      </h4>
                    </div>

                    {isAnswered && (
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" /> Đúng
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3" /> Sai (Đ/án: {q.correctKey})
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 my-2">
                    {q.options.map((opt) => {
                      const isOptionSelected = selected === opt.key;
                      const isOptionCorrect = opt.key === q.correctKey;

                      let btnStyle =
                        'bg-[#fcfaf6] border-[#e8dfd2] text-[#40352a] hover:bg-white hover:border-[#9E2A2B]';
                      if (isAnswered) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-[#edf7ee] border-emerald-500 text-emerald-950 font-semibold';
                        } else if (isOptionSelected) {
                          btnStyle = 'bg-[#fcedec] border-rose-400 text-rose-950';
                        } else {
                          btnStyle = 'bg-white/50 border-[#e8dfd2] text-[#857768] opacity-60';
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectMcq(q.id, opt.key)}
                          className={`p-2 rounded-lg border text-left text-xs flex items-start gap-2 transition-all ${btnStyle}`}
                        >
                          <span
                            className={`w-4 h-4 rounded text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                              isAnswered && isOptionCorrect
                                ? 'bg-emerald-600 text-white'
                                : isAnswered && isOptionSelected
                                ? 'bg-rose-600 text-white'
                                : 'bg-[#ede5d8] text-[#453729]'
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="leading-tight text-[11px] sm:text-xs">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Toggle explanation */}
                  {isAnswered && (
                    <div className="mt-1 pt-1.5 border-t border-[#f0e6d6]">
                      <button
                        onClick={() =>
                          setExpandedMcqId(isExpanded ? null : String(q.id))
                        }
                        className="text-[11px] font-medium text-[#801818] hover:underline flex items-center gap-1"
                      >
                        <Lightbulb className="w-3 h-3 text-amber-600" />
                        <span>{isExpanded ? 'Ẩn giải thích chi tiết' : 'Xem giải thích chi tiết'}</span>
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[11px] text-[#403528] bg-[#f8f5ee] p-2 rounded-md border border-[#dfd3c0] mt-1 italic font-serif-title overflow-hidden"
                          >
                            {q.explanation}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
