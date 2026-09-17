export interface PresenterInfo {
  subject: string;
  studentName: string;
  className: string;
  schoolName: string;
  academicYear: string;
}

export interface VocabularyNote {
  word: string;
  han: string;
  pinyin?: string;
  meaning: string;
}

export interface DiscussionQuestion {
  id: number;
  question: string;
  hint: string;
  suggestedAnswer: string;
}

export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuizQuestionItem {
  id: number | string;
  question: string;
  options: QuizOption[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface SlideQuiz {
  slideNumber: number;
  question: string;
  options: QuizOption[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  questions?: QuizQuestionItem[];
}

export interface SlideData {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  category: 'Trang bìa' | 'Tác giả' | 'Tác phẩm' | 'Phân tích' | 'Tổng kết & Di sản' | 'Thảo luận' | 'Nguồn';
  speakerNotes: string; // Lời thuyết minh chi tiết cho học sinh đọc/nói khi đứng trước lớp
  bulletPoints?: string[];
  tags?: string[];
}
