import pptxgen from 'pptxgenjs';
import { SLIDES_DATA, POEM_DATA } from '../data/slidesData';
import { PresenterInfo } from '../types';

export async function exportToPowerPoint(presenterInfo: PresenterInfo) {
  const pptx = new pptxgen();

  // Layout 16:9 standard modern presentation
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Tìm hiểu tác phẩm Xuân Yến - Tác giả Đỗ Cận';
  pptx.author = presenterInfo.studentName || 'Học sinh Ngữ văn';
  pptx.company = presenterInfo.schoolName || 'Trường THPT / THCS';

  // Palette: Ivory background (#FBF9F4), Dark Navy/Charcoal text (#2B2621), Vermilion Red (#9E2A2B), Olive Sage (#3D5A40)
  const COLOR_BG = 'FBF9F4';
  const COLOR_CARD_BG = 'FFFFFF';
  const COLOR_TEXT = '2B2621';
  const COLOR_PRIMARY = '9E2A2B'; // Đỏ son Hán Nôm
  const COLOR_SECONDARY = '3D5A40'; // Xanh ngọc lục bảo
  const COLOR_MUTED = '6B6358';

  SLIDES_DATA.forEach((slide) => {
    const s = pptx.addSlide();
    s.background = { color: COLOR_BG };

    // Slide 1 - Cover Slide
    if (slide.slideNumber === 1) {
      // Header badge
      s.addText('BÀI THUYẾT TRÌNH NGỮ VĂN – DI SẢN VĂN HỌC ĐỊA PHƯƠNG', {
        x: 0.8,
        y: 0.8,
        w: 11.5,
        h: 0.4,
        fontSize: 13,
        bold: true,
        color: COLOR_PRIMARY,
        charSpacing: 2,
      });

      // Main Title
      s.addText('TÌM HIỂU TÁC PHẨM “XUÂN YẾN”', {
        x: 0.8,
        y: 1.5,
        w: 11.7,
        h: 1.2,
        fontSize: 34,
        bold: true,
        color: COLOR_TEXT,
      });

      // Subtitle
      s.addText('Tác giả ĐỖ CẬN (杜覲) – Danh nhân văn hóa quê hương Thái Nguyên', {
        x: 0.8,
        y: 2.8,
        w: 11.7,
        h: 0.6,
        fontSize: 18,
        italic: true,
        color: COLOR_PRIMARY,
      });

      // Decorative divider
      s.addShape(pptx.ShapeType.rect, {
        x: 0.8,
        y: 3.6,
        w: 4.5,
        h: 0.05,
        fill: { color: COLOR_PRIMARY },
      });

      // Info Card for Presenter
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 4.0,
        w: 6.2,
        h: 2.6,
        fill: { color: COLOR_CARD_BG },
        line: { color: 'E2D9CC', width: 1 },
      });

      s.addText([
        { text: 'THÔNG TIN THUYẾT TRÌNH:\n', options: { bold: true, color: COLOR_PRIMARY, fontSize: 13 } },
        { text: `• Môn học: `, options: { bold: true, color: COLOR_TEXT, fontSize: 13 } },
        { text: `${presenterInfo.subject}\n`, options: { color: COLOR_TEXT, fontSize: 13 } },
        { text: `• Người thực hiện: `, options: { bold: true, color: COLOR_TEXT, fontSize: 13 } },
        { text: `${presenterInfo.studentName || 'Học sinh trình bày'}\n`, options: { color: COLOR_TEXT, fontSize: 13 } },
        { text: `• Lớp: `, options: { bold: true, color: COLOR_TEXT, fontSize: 13 } },
        { text: `${presenterInfo.className || 'Chi đoàn Ngữ văn'}\n`, options: { color: COLOR_TEXT, fontSize: 13 } },
        { text: `• Trường: `, options: { bold: true, color: COLOR_TEXT, fontSize: 13 } },
        { text: `${presenterInfo.schoolName || 'Thái Nguyên'}\n`, options: { color: COLOR_TEXT, fontSize: 13 } },
        { text: `• Năm học: `, options: { bold: true, color: COLOR_TEXT, fontSize: 13 } },
        { text: `${presenterInfo.academicYear || '2025 – 2026'}`, options: { color: COLOR_TEXT, fontSize: 13 } },
      ], {
        x: 1.1,
        y: 4.2,
        w: 5.6,
        h: 2.2,
      });

      // Right decorative quote card
      s.addShape(pptx.ShapeType.roundRect, {
        x: 7.3,
        y: 4.0,
        w: 5.2,
        h: 2.6,
        fill: { color: 'F2ECE1' },
        line: { color: 'D9CEBE', width: 1 },
      });

      s.addText('“Xuân Yến” – Áng thơ tứ tuyệt mẫu mực trong "Toàn Việt thi lục", lưu dấu tài năng lỗi lạc của danh nhân Đỗ Cận thế kỷ XV, niềm tự hào khoa bảng vùng đất Thái Nguyên.', {
        x: 7.6,
        y: 4.4,
        w: 4.6,
        h: 1.8,
        fontSize: 13,
        italic: true,
        color: COLOR_SECONDARY,
        align: 'center',
      });

      // Speaker Notes
      s.addNotes(slide.speakerNotes);
      return;
    }

    // Standard Slide Header
    s.addText(`PHẦN: ${slide.category.toUpperCase()} | SLIDE ${slide.slideNumber}/20`, {
      x: 0.8,
      y: 0.4,
      w: 8.0,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: COLOR_PRIMARY,
      charSpacing: 1,
    });

    s.addText(slide.title, {
      x: 0.8,
      y: 0.7,
      w: 11.5,
      h: 0.7,
      fontSize: 22,
      bold: true,
      color: COLOR_TEXT,
    });

    if (slide.subtitle) {
      s.addText(slide.subtitle, {
        x: 0.8,
        y: 1.35,
        w: 11.5,
        h: 0.4,
        fontSize: 12,
        italic: true,
        color: COLOR_MUTED,
      });
    }

    // Decorative line
    s.addShape(pptx.ShapeType.rect, {
      x: 0.8,
      y: 1.8,
      w: 11.7,
      h: 0.03,
      fill: { color: 'E2D9CC' },
    });

    // Slide 8 Special Layout: Poem Content (4 Columns or 4 Rows)
    if (slide.slideNumber === 8) {
      POEM_DATA.lines.forEach((line, idx) => {
        const yPos = 2.0 + idx * 1.25;

        // Card background
        s.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: yPos,
          w: 11.7,
          h: 1.15,
          fill: { color: COLOR_CARD_BG },
          line: { color: 'E2D9CC', width: 1 },
        });

        // Hanzi text
        s.addText(`Câu ${line.lineNum}: ${line.han}`, {
          x: 1.0,
          y: yPos + 0.1,
          w: 3.5,
          h: 0.4,
          fontSize: 14,
          bold: true,
          color: COLOR_PRIMARY,
        });

        // Transcription
        s.addText(`Phiên âm: ${line.transcription}`, {
          x: 1.0,
          y: yPos + 0.55,
          w: 3.5,
          h: 0.4,
          fontSize: 12,
          italic: true,
          color: COLOR_TEXT,
        });

        // Literal translation
        s.addText(`Dịch nghĩa: ${line.literal}`, {
          x: 4.8,
          y: yPos + 0.1,
          w: 4.0,
          h: 0.9,
          fontSize: 11,
          color: COLOR_MUTED,
        });

        // Poetic translation
        s.addText(`Dịch thơ:\n“${line.poetic}”`, {
          x: 9.0,
          y: yPos + 0.1,
          w: 3.2,
          h: 0.9,
          fontSize: 12,
          bold: true,
          color: COLOR_SECONDARY,
        });
      });
    } else {
      // Standard Slide Content: Bullet cards
      const bullets = slide.bulletPoints || [];
      const colCount = bullets.length > 4 ? 2 : 1;

      if (colCount === 1) {
        bullets.forEach((point, pIdx) => {
          const yPos = 2.1 + pIdx * 1.15;
          s.addShape(pptx.ShapeType.roundRect, {
            x: 0.8,
            y: yPos,
            w: 11.7,
            h: 0.95,
            fill: { color: COLOR_CARD_BG },
            line: { color: 'E5DEC3', width: 1 },
          });

          s.addText(point, {
            x: 1.1,
            y: yPos + 0.15,
            w: 11.1,
            h: 0.65,
            fontSize: 13,
            color: COLOR_TEXT,
          });
        });
      } else {
        const mid = Math.ceil(bullets.length / 2);
        const leftPoints = bullets.slice(0, mid);
        const rightPoints = bullets.slice(mid);

        leftPoints.forEach((point, pIdx) => {
          const yPos = 2.1 + pIdx * 1.5;
          s.addShape(pptx.ShapeType.roundRect, {
            x: 0.8,
            y: yPos,
            w: 5.6,
            h: 1.3,
            fill: { color: COLOR_CARD_BG },
            line: { color: 'E5DEC3', width: 1 },
          });

          s.addText(point, {
            x: 1.0,
            y: yPos + 0.15,
            w: 5.2,
            h: 1.0,
            fontSize: 12,
            color: COLOR_TEXT,
          });
        });

        rightPoints.forEach((point, pIdx) => {
          const yPos = 2.1 + pIdx * 1.5;
          s.addShape(pptx.ShapeType.roundRect, {
            x: 6.8,
            y: yPos,
            w: 5.7,
            h: 1.3,
            fill: { color: COLOR_CARD_BG },
            line: { color: 'E5DEC3', width: 1 },
          });

          s.addText(point, {
            x: 7.0,
            y: yPos + 0.15,
            w: 5.3,
            h: 1.0,
            fontSize: 12,
            color: COLOR_TEXT,
          });
        });
      }
    }

    // Footer with presentation badge
    s.addText('Tác phẩm “Xuân Yến” – Đỗ Cận (Thái Nguyên) | Ngữ văn Trung đại', {
      x: 0.8,
      y: 7.0,
      w: 8.0,
      h: 0.3,
      fontSize: 9,
      italic: true,
      color: COLOR_MUTED,
    });

    s.addText(`${slide.slideNumber} / 21`, {
      x: 11.5,
      y: 7.0,
      w: 1.0,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: COLOR_PRIMARY,
      align: 'right',
    });

    // Add speaker notes
    s.addNotes(slide.speakerNotes);
  });

  const fileName = `Bai_Thuyet_Trinh_Xuan_Yen_Do_Can_${presenterInfo.studentName ? presenterInfo.studentName.replace(/\s+/g, '_') : 'Thai_Nguyen'}.pptx`;
  await pptx.writeFile({ fileName });
}
