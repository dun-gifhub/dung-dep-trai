import React, { useState } from 'react';
import { PresenterInfo } from '../types';
import { User, School, BookOpen, GraduationCap, X, Check } from 'lucide-react';

interface EditPresenterModalProps {
  presenterInfo: PresenterInfo;
  onSave: (info: PresenterInfo) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const EditPresenterModal: React.FC<EditPresenterModalProps> = ({
  presenterInfo,
  onSave,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<PresenterInfo>({ ...presenterInfo });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fbf9f4] rounded-2xl border border-[#d6cbba] max-w-lg w-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#ded3c3] flex items-center justify-between bg-[#eee6d8]">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#9E2A2B]" />
            <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#2d251d]">
              Tùy chỉnh thông tin thuyết trình của bạn
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#dfd4c4] text-[#5e5345] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-xs sm:text-sm">
          <div>
            <label className="font-semibold text-[#40372d] mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#9E2A2B]" />
              Môn học:
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-white border border-[#ded3c3] rounded-lg px-3 py-2 text-[#2c2621] focus:outline-none focus:border-[#9E2A2B]"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-[#40372d] mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#9E2A2B]" />
              Tên học sinh / Nhóm thực hiện:
            </label>
            <input
              type="text"
              placeholder="VD: Nguyễn Văn A (Nhóm 1)"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              className="w-full bg-white border border-[#ded3c3] rounded-lg px-3 py-2 text-[#2c2621] focus:outline-none focus:border-[#9E2A2B]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#40372d] mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#9E2A2B]" />
                Lớp:
              </label>
              <input
                type="text"
                placeholder="VD: 10A1 hoặc 11A2"
                value={formData.className}
                onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                className="w-full bg-white border border-[#ded3c3] rounded-lg px-3 py-2 text-[#2c2621] focus:outline-none focus:border-[#9E2A2B]"
                required
              />
            </div>

            <div>
              <label className="font-semibold text-[#40372d] mb-1 block">
                Năm học:
              </label>
              <input
                type="text"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                className="w-full bg-white border border-[#ded3c3] rounded-lg px-3 py-2 text-[#2c2621] focus:outline-none focus:border-[#9E2A2B]"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-[#40372d] mb-1 flex items-center gap-1.5">
              <School className="w-3.5 h-3.5 text-[#9E2A2B]" />
              Trường học:
            </label>
            <input
              type="text"
              placeholder="VD: THPT Lê Hồng Phong, Thái Nguyên"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full bg-white border border-[#ded3c3] rounded-lg px-3 py-2 text-[#2c2621] focus:outline-none focus:border-[#9E2A2B]"
              required
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#ded3c3] text-[#5e5345] hover:bg-[#ede5d8] transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#9E2A2B] hover:bg-[#801818] text-white font-semibold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Check className="w-4 h-4" />
              Lưu & Cập nhật Slide
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
