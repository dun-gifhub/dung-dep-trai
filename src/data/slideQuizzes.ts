import { SlideQuiz, QuizQuestionItem } from '../types';

export const SLIDE_QUIZZES: Record<number, SlideQuiz> = {
  // Slide 2: Mục tiêu & Ý nghĩa bài học
  2: {
    slideNumber: 2,
    question: 'Mục tiêu trọng tâm nhất của bài học tìm hiểu tác phẩm “Xuân Yến” của Đỗ Cận là gì?',
    options: [
      { key: 'A', text: 'Chỉ học thuộc lòng các từ vựng chữ Hán cổ để chuẩn bị thi học kỳ' },
      { key: 'B', text: 'Nắm vững giá trị nội dung, nghệ thuật của thi phẩm và bồi dưỡng niềm tự hào về danh nhân văn hóa Thái Nguyên' },
      { key: 'C', text: 'Phân tích các chiến thuật quân sự của triều đại vua Lê Thánh Tông' },
      { key: 'D', text: 'Nghiên cứu quá trình làm gốm sứ truyền thống thời Lê sơ' },
    ],
    correctKey: 'B',
    explanation: 'Bài học hướng đến 3 mục tiêu cốt lõi: Tiếp cận vẻ đẹp thơ ca trung đại qua thể thất ngôn tứ tuyệt, thấu hiểu tư tưởng thi nhân và khơi dậy niềm tự hào đối với di sản văn học quê hương Thái Nguyên.',
    questions: [
      {
        id: '2_1',
        question: 'Mục tiêu trọng tâm nhất của bài học tìm hiểu tác phẩm “Xuân Yến” của Đỗ Cận là gì?',
        options: [
          { key: 'A', text: 'Chỉ học thuộc lòng các từ vựng chữ Hán cổ để chuẩn bị thi học kỳ' },
          { key: 'B', text: 'Nắm vững giá trị nội dung, nghệ thuật của thi phẩm và bồi dưỡng niềm tự hào về danh nhân văn hóa Thái Nguyên' },
          { key: 'C', text: 'Phân tích các chiến thuật quân sự của triều đại vua Lê Thánh Tông' },
          { key: 'D', text: 'Nghiên cứu quá trình làm gốm sứ truyền thống thời Lê sơ' },
        ],
        correctKey: 'B',
        explanation: 'Bài học hướng đến 3 mục tiêu cốt lõi: Tiếp cận vẻ đẹp thơ ca trung đại qua thể thất ngôn tứ tuyệt, thấu hiểu tư tưởng thi nhân và khơi dậy niềm tự hào đối với di sản văn học quê hương Thái Nguyên.',
      },
      {
        id: '2_2',
        question: 'Việc đưa bài thơ “Xuân Yến” vào chương trình giáo dục địa phương mang ý nghĩa giáo dục nào?',
        options: [
          { key: 'A', text: 'Giúp học sinh gắn kết kiến thức văn học với cội nguồn lịch sử, danh nhân văn hóa tỉnh Thái Nguyên' },
          { key: 'B', text: 'Yêu cầu tất cả học sinh phải tự sáng tác thơ thất ngôn Đường luật' },
          { key: 'C', text: 'Thay thế hoàn toàn chương trình Ngữ văn quốc gia hiện hành' },
          { key: 'D', text: 'Phục vụ mục đích khảo cổ địa chất tại vùng trung du Bắc Bộ' },
        ],
        correctKey: 'A',
        explanation: 'Chương trình giáo dục địa phương giúp học sinh thấu hiểu sâu sắc cội nguồn, danh nhân tiêu biểu như Đỗ Cận, qua đó nâng cao ý thức giữ gìn truyền thống hiếu học của xứ Thái.',
      },
    ],
  },

  // Slide 3: Cuộc đời & Quê hương Đỗ Cận
  3: {
    slideNumber: 3,
    question: 'Danh nhân Đỗ Cận sinh năm bao nhiêu và quê quán ở địa phương nào ngày nay?',
    options: [
      { key: 'A', text: 'Sinh năm 1434, tại thôn Thống Thượng, xã Minh Đức, nay thuộc TP. Phổ Yên, tỉnh Thái Nguyên' },
      { key: 'B', text: 'Sinh năm 1478, tại huyện Đại Từ, tỉnh Thái Nguyên' },
      { key: 'C', text: 'Sinh năm 1400, tại huyện Đông Triều, tỉnh Quảng Ninh' },
      { key: 'D', text: 'Sinh năm 1500, tại phường Phan Đình Phùng, TP. Thái Nguyên' },
    ],
    correctKey: 'A',
    explanation: 'Tiến sĩ Đỗ Cận (tên tự là Hạo Khiêm) sinh khoảng năm Giáp Dần (1434) tại thôn Thống Thượng, xã Minh Đức, nay thuộc phường Tiên Phong / xã Minh Đức, thành phố Phổ Yên, tỉnh Thái Nguyên.',
    questions: [
      {
        id: '3_1',
        question: 'Danh nhân Đỗ Cận sinh năm bao nhiêu và quê quán ở địa phương nào ngày nay?',
        options: [
          { key: 'A', text: 'Sinh năm 1434, tại thôn Thống Thượng, xã Minh Đức, nay thuộc TP. Phổ Yên, tỉnh Thái Nguyên' },
          { key: 'B', text: 'Sinh năm 1478, tại huyện Đại Từ, tỉnh Thái Nguyên' },
          { key: 'C', text: 'Sinh năm 1400, tại huyện Đông Triều, tỉnh Quảng Ninh' },
          { key: 'D', text: 'Sinh năm 1500, tại phường Phan Đình Phùng, TP. Thái Nguyên' },
        ],
        correctKey: 'A',
        explanation: 'Tiến sĩ Đỗ Cận (tên tự là Hạo Khiêm) sinh khoảng năm Giáp Dần (1434) tại thôn Thống Thượng, nay thuộc thành phố Phổ Yên, tỉnh Thái Nguyên.',
      },
      {
        id: '3_2',
        question: 'Đỗ Cận đỗ Đệ tam giáp đồng Tiến sĩ xuất thân vào năm nào dưới triều vua nào?',
        options: [
          { key: 'A', text: 'Năm 1428, dưới triều vua Lê Thái Tổ' },
          { key: 'B', text: 'Khoa thi Mậu Tuất (1478), niên hiệu Hồng Đức thứ 9 dưới triều vua Lê Thánh Tông' },
          { key: 'C', text: 'Năm 1515, dưới triều vua Lê Tương Dực' },
          { key: 'D', text: 'Năm 1483, dưới triều vua Lê Hiến Tông' },
        ],
        correctKey: 'B',
        explanation: 'Tại khoa thi Mậu Tuất (1478) - một trong những khoa thi khắt khe và rực rỡ nhất thời Hồng Đức, Đỗ Cận đã đỗ Tiến sĩ, trở thành vị Tiến sĩ khai khoa đầu tiên của đất Thái Nguyên được khắc tên trên bia đá Văn Miếu.',
      },
    ],
  },

  // Slide 4: Sự nghiệp chính trị & Ngoại giao
  4: {
    slideNumber: 4,
    question: 'Sự kiện ngoại giao quan trọng nào ghi dấu ấn tài năng ngoại giao xuất chúng của Đỗ Cận vào năm 1483?',
    options: [
      { key: 'A', text: 'Lãnh đạo đoàn sứ bộ Đại Việt sang Nhật Bản giao lưu văn hóa' },
      { key: 'B', text: 'Được vua Lê Thánh Tông cử làm Phó sứ trong sứ bộ sang triều Minh (Yên Kinh)' },
      { key: 'C', text: 'Được phong làm Trấn thủ biên ải phía Nam' },
      { key: 'D', text: 'Biên soạn bộ luật Hồng Đức tại kinh thành Thăng Long' },
    ],
    correctKey: 'B',
    explanation: 'Năm Quý Mão (1483), Đỗ Cận được giao trọng trách làm Phó sứ dẫn đầu đoàn đi sứ Yên Kinh (Bắc Kinh, nhà Minh). Bằng tài năng ứng đối uyên bác, ông đã giữ vững thể diện quốc gia và hoàn thành xuất sắc sứ mệnh.',
    questions: [
      {
        id: '4_1',
        question: 'Sự kiện ngoại giao quan trọng nào ghi dấu ấn tài năng ngoại giao xuất chúng của Đỗ Cận vào năm 1483?',
        options: [
          { key: 'A', text: 'Lãnh đạo đoàn sứ bộ Đại Việt sang Nhật Bản giao lưu văn hóa' },
          { key: 'B', text: 'Được vua Lê Thánh Tông cử làm Phó sứ trong sứ bộ sang triều Minh (Yên Kinh)' },
          { key: 'C', text: 'Được phong làm Trấn thủ biên ải phía Nam' },
          { key: 'D', text: 'Biên soạn bộ luật Hồng Đức tại kinh thành Thăng Long' },
        ],
        correctKey: 'B',
        explanation: 'Năm Quý Mão (1483), Đỗ Cận được giao trọng trách làm Phó sứ trong đoàn sứ bộ sang Yên Kinh, thể hiện bản lĩnh văn hóa và chính trị của bậc đại trí thức Đại Việt.',
      },
      {
        id: '4_2',
        question: 'Chức quan cao nhất mà Đỗ Cận từng đảm nhiệm trong triều đình thời Hậu Lê là gì?',
        options: [
          { key: 'A', text: 'Đô đốc chỉ huy quân sự Thăng Long' },
          { key: 'B', text: 'Thượng thư (Thượng thư Bộ Lại / Bộ Lễ) kiêm Đông các Đại học sĩ' },
          { key: 'C', text: 'Tri huyện Phổ Yên' },
          { key: 'D', text: 'Thái tử Thái phó' },
        ],
        correctKey: 'B',
        explanation: 'Sau nhiều năm cống hiến mẫu mực, Đỗ Cận làm quan đến chức Thượng thư, tham chính trong triều đình trung ương của vua Lê Thánh Tông.',
      },
    ],
  },

  // Slide 5: Tác phẩm & Di sản thi ca
  5: {
    slideNumber: 5,
    question: 'Tập ký sự thơ văn nổi tiếng nào do Đỗ Cận ghi chép lại trên chặng đường đi sứ phương Bắc?',
    options: [
      { key: 'A', text: 'Trúc Lâm tông chỉ nguyên thanh' },
      { key: 'B', text: 'Kim Lăng ký (hoặc Sứ hoa thi tập)' },
      { key: 'C', text: 'Bạch Đằng giang phú' },
      { key: 'D', text: 'Vân đài loại ngữ' },
    ],
    correctKey: 'B',
    explanation: 'Trên bước đường đi sứ năm 1483, Đỗ Cận đã viết tác phẩm “Kim Lăng ký” ghi lại danh lam thắng cảnh, phong tục tập quán và thể hiện khí phách tự hào của người trí thức nước Nam.',
    questions: [
      {
        id: '5_1',
        question: 'Tập ký sự thơ văn nổi tiếng nào do Đỗ Cận ghi chép lại trên chặng đường đi sứ phương Bắc?',
        options: [
          { key: 'A', text: 'Trúc Lâm tông chỉ nguyên thanh' },
          { key: 'B', text: 'Kim Lăng ký (hoặc Sứ hoa thi tập)' },
          { key: 'C', text: 'Bạch Đằng giang phú' },
          { key: 'D', text: 'Vân đài loại ngữ' },
        ],
        correctKey: 'B',
        explanation: 'Tập “Kim Lăng ký” của Đỗ Cận là trước tác thi ca - ký sự bang giao tiêu biểu, được các học giả đời sau đánh giá rất cao.',
      },
      {
        id: '5_2',
        question: 'Bộ sách đồ sộ nào thời trung đại đã tuyển chọn và lưu giữ thi phẩm “Xuân Yến” của Đỗ Cận?',
        options: [
          { key: 'A', text: 'Toàn Việt thi lục do nhà bác học Lê Quý Đôn biên soạn' },
          { key: 'B', text: 'Đại Nam nhất thống chí của Quốc sử quán triều Nguyễn' },
          { key: 'C', text: 'Truyền kỳ mạn lục của Nguyễn Dữ' },
          { key: 'D', text: 'Việt điện u linh tập của Lý Tế Xuyên' },
        ],
        correctKey: 'A',
        explanation: 'Bài thơ “Xuân Yến” được bảo tồn nguyên vẹn trong quyển 8 của bộ “Toàn Việt thi lục” do Lê Quý Đôn dày công sưu tầm và biên soạn vào thế kỷ 18.',
      },
    ],
  },

  // Slide 6: Bối cảnh văn hóa thời Hồng Đức
  6: {
    slideNumber: 6,
    question: 'Tổ chức văn học cung đình lừng danh do vua Lê Thánh Tông sáng lập mà các bậc đại khoa như Đỗ Cận thường xướng họa có tên là gì?',
    options: [
      { key: 'A', text: 'Bích Câu thi xã' },
      { key: 'B', text: 'Hội Tao Đàn (Tao Đàn nhị thập bát tú)' },
      { key: 'C', text: 'Mặc Vân thi xã' },
      { key: 'D', text: 'Chiêu Anh các' },
    ],
    correctKey: 'B',
    explanation: 'Hội Tao Đàn (gồm vua Lê Thánh Tông làm Tao Đàn đô nguyên súy cùng 28 vì sao văn tinh) là đỉnh cao của nền văn học thời Lê sơ, định hình phong cách thơ ca ca ngợi đất nước thái bình thịnh trị.',
    questions: [
      {
        id: '6_1',
        question: 'Tổ chức văn học cung đình lừng danh do vua Lê Thánh Tông sáng lập mà các bậc đại khoa như Đỗ Cận thường xướng họa có tên là gì?',
        options: [
          { key: 'A', text: 'Bích Câu thi xã' },
          { key: 'B', text: 'Hội Tao Đàn (Tao Đàn nhị thập bát tú)' },
          { key: 'C', text: 'Mặc Vân thi xã' },
          { key: 'D', text: 'Chiêu Anh các' },
        ],
        correctKey: 'B',
        explanation: 'Hội Tao Đàn do vua Lê Thánh Tông thành lập năm 1495, quy tụ những bậc đại khoa thi cử xuất chúng đương thời.',
      },
      {
        id: '6_2',
        question: 'Đặc điểm tư tưởng - thẩm mỹ chủ đạo của thi ca thời Hồng Đức (Lê sơ) là gì?',
        options: [
          { key: 'A', text: 'Nỗi bất an, bi kịch thân phận và tâm lý chạy trốn thực tại' },
          { key: 'B', text: 'Tinh thần lạc quan, tự hào dân tộc, ngợi ca cảnh sắc thái bình và sự hài hòa giữa đạo Nho với thiên nhiên' },
          { key: 'C', text: 'Châm biếm đả kích sâu cay chế độ phong kiến mục ruỗng' },
          { key: 'D', text: 'U sầu yếm thế trước sự hủy diệt của chiến tranh loạn lạc' },
        ],
        correctKey: 'B',
        explanation: 'Văn học thời Hồng Đức phản ánh một đất nước Đại Việt đang trên đỉnh cao độc lập, thái bình và cường thịnh; do đó cảm hứng luôn hào sảng, trong trẻo và ấm áp tình đời.',
      },
    ],
  },

  // Slide 7: Thể loại & Bố cục bài thơ
  7: {
    slideNumber: 7,
    question: 'Bài thơ “Xuân Yến” được viết theo thể thơ nào và có bố cục Đường thi chuẩn mực gồm mấy phần?',
    options: [
      { key: 'A', text: 'Thể Lục bát – Bố cục 2 phần: Cảnh và Tình' },
      { key: 'B', text: 'Thể Thất ngôn tứ tuyệt Đường luật – Bố cục 4 câu: Khởi – Thừa – Chuyển – Hợp' },
      { key: 'C', text: 'Thể Song thất lục bát – Bố cục 3 phần: Mở – Thân – Kết' },
      { key: 'D', text: 'Thể Thất ngôn bát cú Đường luật – Bố cục: Đề – Thực – Luận – Kết' },
    ],
    correctKey: 'B',
    explanation: 'Bài thơ gồm 4 câu, mỗi câu 7 chữ, tuân theo luật Đường nghiêm ngặt với cấu trúc kết cấu chuẩn mực: Câu 1 (Khởi), Câu 2 (Thừa), Câu 3 (Chuyển), Câu 4 (Hợp).',
    questions: [
      {
        id: '7_1',
        question: 'Bài thơ “Xuân Yến” được viết theo thể thơ nào và có bố cục Đường thi chuẩn mực gồm mấy phần?',
        options: [
          { key: 'A', text: 'Thể Lục bát – Bố cục 2 phần: Cảnh và Tình' },
          { key: 'B', text: 'Thể Thất ngôn tứ tuyệt Đường luật – Bố cục 4 câu: Khởi – Thừa – Chuyển – Hợp' },
          { key: 'C', text: 'Thể Song thất lục bát – Bố cục 3 phần: Mở – Thân – Kết' },
          { key: 'D', text: 'Thể Thất ngôn bát cú Đường luật – Bố cục: Đề – Thực – Luận – Kết' },
        ],
        correctKey: 'B',
        explanation: 'Thể thơ thất ngôn tứ tuyệt Đường luật với bố cục 4 phần kinh điển: Khởi (mở cảnh) → Thừa (tiếp nối, đào sâu) → Chuyển (chuyển đổi góc nhìn/tâm trạng) → Hợp (kết đọng tư tưởng).',
      },
      {
        id: '7_2',
        question: 'Trong kết cấu Khởi – Thừa – Chuyển – Hợp, câu thơ thứ 3 (“Lục song trú tĩnh vô nhân đáo”) đóng vai trò gì?',
        options: [
          { key: 'A', text: 'Câu Khởi – giới thiệu không gian sân vườn ban đầu' },
          { key: 'B', text: 'Câu Chuyển – chuyển từ ngoại cảnh rộn ràng sang không gian tĩnh tại nội tâm bên khung cửa sổ' },
          { key: 'C', text: 'Câu Thừa – tiếp tục miêu tả chi tiết đường bay của chim én' },
          { key: 'D', text: 'Câu Hợp – đúc kết bài học đạo đức xã hội' },
        ],
        correctKey: 'B',
        explanation: 'Câu 3 là câu “Chuyển” mang tính bản lề nghệ thuật: đưa điểm nhìn từ bầu trời sân hiên vào góc phòng đọc sách yên tĩnh, chuẩn bị cho sự bừng nở của “xuân tâm” ở câu 4.',
      },
    ],
  },

  // Slide 8: Văn bản tác phẩm (4 tầng đối chiếu)
  8: {
    slideNumber: 8,
    question: 'Khi đọc đối chiếu 4 tầng văn bản của bài thơ, phương thức tiếp cận chuẩn mực của văn học trung đại là gì?',
    options: [
      { key: 'A', text: 'Chỉ đọc bản dịch thơ và bỏ qua hoàn toàn chữ Hán' },
      { key: 'B', text: 'Đi tuần tự từ Nguyên văn Chữ Hán → Phiên âm Hán Việt → Dịch nghĩa chuẩn xác → Thưởng thức Dịch thơ' },
      { key: 'C', text: 'Tự suy đoán nghĩa của từ mà không cần chú giải' },
      { key: 'D', text: 'Dịch từng chữ một sang tiếng Anh rồi dịch ngược lại tiếng Việt' },
    ],
    correctKey: 'B',
    explanation: 'Đối với tác phẩm văn học chữ Hán, việc đi từ nguyên văn, phiên âm sang dịch nghĩa giúp người đọc nắm bắt chính xác từng tầng nghĩa gốc, tránh những sai lệch có thể gặp trong bản dịch thơ.',
    questions: [
      {
        id: '8_1',
        question: 'Khi đọc đối chiếu 4 tầng văn bản của bài thơ, phương thức tiếp cận chuẩn mực của văn học trung đại là gì?',
        options: [
          { key: 'A', text: 'Chỉ đọc bản dịch thơ và bỏ qua hoàn toàn chữ Hán' },
          { key: 'B', text: 'Đi tuần tự từ Nguyên văn Chữ Hán → Phiên âm Hán Việt → Dịch nghĩa chuẩn xác → Thưởng thức Dịch thơ' },
          { key: 'C', text: 'Tự suy đoán nghĩa của từ mà không cần chú giải' },
          { key: 'D', text: 'Dịch từng chữ một sang tiếng Anh rồi dịch ngược lại tiếng Việt' },
        ],
        correctKey: 'B',
        explanation: 'Đọc đủ 4 tầng văn bản là phương pháp sư phạm mẫu mực giúp hiểu sâu từ ngữ nguyên bản Hán Nôm.',
      },
      {
        id: '8_2',
        question: 'Từ ngữ nào trong nguyên tác chữ Hán bị rút gọn hoặc thay đổi nhiều nhất khi chuyển thể sang bản dịch thơ lục bát?',
        options: [
          { key: 'A', text: 'Từ “trúc ảnh” (bóng trúc) thành “tre sân”' },
          { key: 'B', text: 'Cụm từ “Họa thiềm thâm xứ đới hương nê” được chuyển thành “Bùn thơm lót tổ dưới hiên nhà” (lược bớt tính từ “họa” - hiên chạm vẽ)' },
          { key: 'C', text: 'Từ “nhật vị tê” thành “bóng tà” (khiến người đọc dễ hiểu lầm là trời đã tối muộn)' },
          { key: 'D', text: 'Cả B và C đều là những điểm cần đặc biệt lưu ý khi đối chiếu dịch nghĩa và dịch thơ' },
        ],
        correctKey: 'D',
        explanation: 'Bản dịch thơ rất vần nhưng khó chuyển tải hết: “nhật vị tê” nghĩa gốc là mặt trời CHƯA lặn (vẫn sáng tươi), nhưng dịch thành “trước bóng tà” dễ gây cảm giác u buồn hoàng hôn.',
      },
    ],
  },

  // Slide 9: Nhan đề Xuân Yến
  9: {
    slideNumber: 9,
    question: 'Trong nhan đề “Xuân Yến” (春燕), chữ “Yến” (燕) mang ý nghĩa biểu tượng chính là gì?',
    options: [
      { key: 'A', text: 'Bữa tiệc mừng mùa xuân trong cung đình thời Lê sơ' },
      { key: 'B', text: 'Cánh chim én – sứ giả báo xuân, biểu tượng của sinh sôi và tổ ấm sum vầy' },
      { key: 'C', text: 'Tiếng chim yến hót lảnh lót bên bờ suối làng quê' },
      { key: 'D', text: 'Sự yên vui, an nhàn lánh đời của ẩn sĩ chốn rừng sâu' },
    ],
    correctKey: 'B',
    explanation: 'Chữ “Yến” trong nguyên tác chữ Hán là 燕 (chim én), sứ giả báo mùa xuân về, ngậm bùn thơm xây tổ ấm hạnh phúc. Không được nhầm lẫn với chữ 宴 (tiệc yến ẩm).',
    questions: [
      {
        id: '9_1',
        question: 'Trong nhan đề “Xuân Yến” (春燕), chữ “Yến” (燕) mang ý nghĩa biểu tượng chính là gì?',
        options: [
          { key: 'A', text: 'Bữa tiệc mừng mùa xuân trong cung đình thời Lê sơ' },
          { key: 'B', text: 'Cánh chim én – sứ giả báo xuân, biểu tượng của sinh sôi và tổ ấm sum vầy' },
          { key: 'C', text: 'Tiếng chim yến hót lảnh lót bên bờ suối làng quê' },
          { key: 'D', text: 'Sự yên vui, an nhàn lánh đời của ẩn sĩ chốn rừng sâu' },
        ],
        correctKey: 'B',
        explanation: 'Chữ “Yến” trong nguyên tác chữ Hán là 燕 (chim én), sứ giả báo mùa xuân về, ngậm bùn thơm xây tổ ấm hạnh phúc. Không được nhầm lẫn với chữ 宴 (tiệc yến ẩm).',
      },
      {
        id: '9_2',
        question: 'Mối quan hệ biện chứng giữa chữ “Xuân” và chữ “Yến” trong bài thơ thể hiện điều gì?',
        options: [
          { key: 'A', text: 'Mùa xuân (thời gian) và Cánh én (sinh thể vận động) giao hòa, cánh én là chất xúc tác đánh thức sức sống đất trời và lòng người' },
          { key: 'B', text: 'Mùa xuân làm cánh én mệt mỏi, muốn bay về phương Nam tránh rét' },
          { key: 'C', text: 'Chỉ là hai từ ghép ngẫu nhiên không có sự liên kết nghệ thuật nào' },
          { key: 'D', text: 'Biểu hiện cho sự ngắn ngủi, trôi qua nhanh chóng của tuổi trẻ' },
        ],
        correctKey: 'A',
        explanation: 'Cánh én là linh hồn của mùa xuân; qua hành động ngậm bùn xây tổ, cánh én mang sinh khí của mùa xuân gieo vào lòng người, khơi dậy tình yêu đời tha thiết.',
      },
    ],
  },

  // Slide 10: Bức tranh thiên nhiên
  10: {
    slideNumber: 10,
    question: 'Bút pháp nghệ thuật nổi bật nhất được Đỗ Cận sử dụng trong câu thơ “Đình viện phong vi trúc ảnh đê” là gì?',
    options: [
      { key: 'A', text: 'Bút pháp ước lệ tương phản gay gắt giữa bóng tối và ánh sáng' },
      { key: 'B', text: 'Bút pháp “Lấy động tả tĩnh” – ngọn gió thoảng khẽ lay làm tôn lên vẻ tĩnh mịch tao nhã' },
      { key: 'C', text: 'Bút pháp phóng đại kỳ vĩ hóa khung cảnh thiên nhiên' },
      { key: 'D', text: 'Bút pháp trữ tình kết hợp trào phúng, châm biếm thời thế' },
    ],
    correctKey: 'B',
    explanation: 'Nghệ thuật “Lấy động tả tĩnh” cổ điển: làn gió thoảng nhẹ (phong vi) làm lay động bóng trúc là chuyển động rất khẽ, không phá vỡ mà càng tô đậm không gian tĩnh lặng, trong trẻo của sân viện.',
    questions: [
      {
        id: '10_1',
        question: 'Bút pháp nghệ thuật nổi bật nhất được Đỗ Cận sử dụng trong câu thơ “Đình viện phong vi trúc ảnh đê” là gì?',
        options: [
          { key: 'A', text: 'Bút pháp ước lệ tương phản gay gắt giữa bóng tối và ánh sáng' },
          { key: 'B', text: 'Bút pháp “Lấy động tả tĩnh” – ngọn gió thoảng khẽ lay làm tôn lên vẻ tĩnh mịch tao nhã' },
          { key: 'C', text: 'Bút pháp phóng đại kỳ vĩ hóa khung cảnh thiên nhiên' },
          { key: 'D', text: 'Bút pháp trữ tình kết hợp trào phúng, châm biếm thời thế' },
        ],
        correctKey: 'B',
        explanation: 'Nghệ thuật “Lấy động tả tĩnh” cổ điển: làn gió thoảng nhẹ (phong vi) làm lay động bóng trúc là chuyển động rất khẽ, không phá vỡ mà càng tô đậm không gian tĩnh lặng, trong trẻo của sân viện.',
      },
      {
        id: '10_2',
        question: 'Không gian thiên nhiên trong bài thơ được miêu tả vận động theo trình tự thị giác nào?',
        options: [
          { key: 'A', text: 'Từ đỉnh núi cao bao la nhìn xuống vực sâu hiểm trở' },
          { key: 'B', text: 'Từ không gian rộng mở (đình viện) → thu hẹp vào mái hiên (họa thiềm) → điểm nhìn tĩnh tại nơi khung cửa sổ xanh (lục song)' },
          { key: 'C', text: 'Từ trong góc tối của căn phòng kín nhìn ra ngoài đường phố tấp nập' },
          { key: 'D', text: 'Từ cõi trần thế hư ảo bay lên chín tầng mây thiên đình' },
        ],
        correctKey: 'B',
        explanation: 'Trật tự không gian chuyển dịch dần từ ngoại cảnh bao quát vào không gian thư phòng thanh bạch, tạo sự tập trung chú ý vào thế giới nội tâm của thi nhân.',
      },
    ],
  },

  // Slide 11: Hình tượng cánh én
  11: {
    slideNumber: 11,
    question: 'Chi tiết cánh én “đới hương nê” (帶香泥 - ngậm bùn thơm) mang ý nghĩa thẩm mỹ sâu sắc nào?',
    options: [
      { key: 'A', text: 'Miêu tả hiện thực bùn đất lấm lem của cánh chim sau cơn mưa rào' },
      { key: 'B', text: 'Bùn đất ướp đượm hương xuân, tượng trưng cho sự sống sinh sôi và cần mẫn vun đắp hạnh phúc' },
      { key: 'C', text: 'Sự vất vả, cơ cực và bế tắc của người nông dân trong xã hội phong kiến' },
      { key: 'D', text: 'Nỗi buồn chia ly khi đàn chim én phải tìm nơi trú ẩn mới' },
    ],
    correctKey: 'B',
    explanation: 'Dưới nhãn quan thẩm mỹ tinh tế của Đỗ Cận, bùn đất mùa xuân đượm hương hoa cỏ đã hóa thành “hương nê”. Cánh én tha bùn về mái hiên hoa đắp tổ là biểu tượng của tinh thần lao động cần cù và ước vọng sum vầy.',
    questions: [
      {
        id: '11_1',
        question: 'Chi tiết cánh én “đới hương nê” (帶香泥 - ngậm bùn thơm) mang ý nghĩa thẩm mỹ sâu sắc nào?',
        options: [
          { key: 'A', text: 'Miêu tả hiện thực bùn đất lấm lem của cánh chim sau cơn mưa rào' },
          { key: 'B', text: 'Bùn đất ướp đượm hương xuân, tượng trưng cho sự sống sinh sôi và cần mẫn vun đắp hạnh phúc' },
          { key: 'C', text: 'Sự vất vả, cơ cực và bế tắc của người nông dân trong xã hội phong kiến' },
          { key: 'D', text: 'Nỗi buồn chia ly khi đàn chim én phải tìm nơi trú ẩn mới' },
        ],
        correctKey: 'B',
        explanation: 'Dưới nhãn quan thẩm mỹ tinh tế của Đỗ Cận, bùn đất mùa xuân đượm hương hoa cỏ đã hóa thành “hương nê”. Cánh én tha bùn về mái hiên hoa đắp tổ là biểu tượng của tinh thần lao động cần cù và ước vọng sum vầy.',
      },
      {
        id: '11_2',
        question: 'Hình ảnh “họa thiềm thâm xứ” (mái hiên chạm khắc vẽ hoa văn sâu kín) gợi cho người đọc cảm nhận gì về không gian sống?',
        options: [
          { key: 'A', text: 'Một chốn hoang tàn, đổ nát vì chiến tranh' },
          { key: 'B', text: 'Một không gian kiến trúc tao nhã, đài các, ấm cúng và đầy bình yên của bậc nho sĩ thanh tao' },
          { key: 'C', text: 'Một ngôi nhà rách nát nghèo đói bên bờ sông' },
          { key: 'D', text: 'Chốn cung điện tráng lệ nhưng ngột ngạt tù túng' },
        ],
        correctKey: 'B',
        explanation: '“Họa thiềm” (mái hiên có vẽ hoa văn) là chi tiết gợi nét phong nhã, tôn quý của ngôi nhà truyền thống thời Lê, nơi con người sống hòa điệu với loài chim én thân thiện.',
      },
    ],
  },

  // Slide 12: Mạch cảm xúc & Xuân tâm
  12: {
    slideNumber: 12,
    question: 'Sự vận động mạch cảm xúc của thi nhân Đỗ Cận trong bài thơ diễn ra theo trình tự nào?',
    options: [
      { key: 'A', text: 'Từ vui tươi chuyển dần sang bi lụy, tuyệt vọng trước bóng chiều tà' },
      { key: 'B', text: 'Từ thờ ơ dửng dưng chuyển sang u uất, muốn từ quan quy ẩn' },
      { key: 'C', text: 'Từ ngoại cảnh thanh tĩnh dẫn sâu vào tâm tưởng, rồi bừng thức “xuân tâm” rạo rực yêu đời' },
      { key: 'D', text: 'Chỉ miêu tả cảnh vật khách quan, tác giả hoàn toàn giấu kín cảm xúc' },
    ],
    correctKey: 'C',
    explanation: 'Mạch cảm xúc đi từ Quan sát ngoại cảnh (bóng trúc, gió nhẹ) → Cảm nhận sự sống (chim én xây tổ) → Lắng đọng tĩnh tại (bên song biếc) → Bừng sáng tâm hồn (“khiêu bát xuân tâm” - khơi dậy tình yêu đời tha thiết).',
    questions: [
      {
        id: '12_1',
        question: 'Sự vận động mạch cảm xúc của thi nhân Đỗ Cận trong bài thơ diễn ra theo trình tự nào?',
        options: [
          { key: 'A', text: 'Từ vui tươi chuyển dần sang bi lụy, tuyệt vọng trước bóng chiều tà' },
          { key: 'B', text: 'Từ thờ ơ dửng dưng chuyển sang u uất, muốn từ quan quy ẩn' },
          { key: 'C', text: 'Từ ngoại cảnh thanh tĩnh dẫn sâu vào tâm tưởng, rồi bừng thức “xuân tâm” rạo rực yêu đời' },
          { key: 'D', text: 'Chỉ miêu tả cảnh vật khách quan, tác giả hoàn toàn giấu kín cảm xúc' },
        ],
        correctKey: 'C',
        explanation: 'Mạch cảm xúc đi từ Quan sát ngoại cảnh (bóng trúc, gió nhẹ) → Cảm nhận sự sống (chim én xây tổ) → Lắng đọng tĩnh tại (bên song biếc) → Bừng sáng tâm hồn (“khiêu bát xuân tâm” - khơi dậy tình yêu đời tha thiết).',
      },
      {
        id: '12_2',
        question: 'Động từ “khiêu bát” (挑撥) trong câu thơ cuối có nghĩa chính xác là gì?',
        options: [
          { key: 'A', text: 'Xua đuổi, xua tan nỗi buồn phiền' },
          { key: 'B', text: 'Khêu gợi, khêu gẩy, đánh thức và khơi dậy ngọn lửa cảm xúc trong lòng' },
          { key: 'C', text: 'Trêu chọc, giễu cợt người khác' },
          { key: 'D', text: 'Bỏ rơi, buông xuôi mọi việc' },
        ],
        correctKey: 'B',
        explanation: '“Khiêu bát” mang ý nghĩa khêu lên, gẩy lên như hành động khêu bấc đèn cho ngọn lửa bừng sáng. Ở đây, cánh én và mùa xuân đã khơi dậy ngọn lửa “xuân tâm” rực rỡ trong lòng thi nhân.',
      },
    ],
  },

  // Slide 13: Chủ đề tư tưởng
  13: {
    slideNumber: 13,
    question: 'Âm hưởng chủ đạo toát lên từ tư tưởng chủ đề của bài thơ “Xuân Yến” là gì?',
    options: [
      { key: 'A', text: 'Nỗi sầu muộn, hoài cổ và tâm trạng bế tắc trước thời cuộc' },
      { key: 'B', text: 'Niềm vui trong trẻo, phong thái an nhiên và tinh thần lạc quan yêu đời thời thịnh trị' },
      { key: 'C', text: 'Nỗi cô đơn giá lạnh của kẻ sĩ nghèo lánh đời' },
      { key: 'D', text: 'Khát vọng ganh đua danh lợi chốn quan trường triều đình' },
    ],
    correctKey: 'B',
    explanation: 'Tác phẩm không mang yếu tố sầu não hay bi quan; cảnh sắc ấm êm thanh khiết phản ánh tâm hồn thanh cao của bậc nho sĩ và khí thế thái bình thịnh trị của thời đại hoàng kim Hồng Đức.',
    questions: [
      {
        id: '13_1',
        question: 'Âm hưởng chủ đạo toát lên từ tư tưởng chủ đề của bài thơ “Xuân Yến” là gì?',
        options: [
          { key: 'A', text: 'Nỗi sầu muộn, hoài cổ và tâm trạng bế tắc trước thời cuộc' },
          { key: 'B', text: 'Niềm vui trong trẻo, phong thái an nhiên và tinh thần lạc quan yêu đời thời thịnh trị' },
          { key: 'C', text: 'Nỗi cô đơn giá lạnh của kẻ sĩ nghèo lánh đời' },
          { key: 'D', text: 'Khát vọng ganh đua danh lợi chốn quan trường triều đình' },
        ],
        correctKey: 'B',
        explanation: 'Tác phẩm không mang yếu tố sầu não hay bi quan; cảnh sắc ấm êm thanh khiết phản ánh tâm hồn thanh cao của bậc nho sĩ và khí thế thái bình thịnh trị của thời đại hoàng kim Hồng Đức.',
      },
      {
        id: '13_2',
        question: 'Hình tượng thi nhân ngồi một mình bên song biếc (“vô nhân đáo”) thể hiện trạng thái tinh thần nào?',
        options: [
          { key: 'A', text: 'Sự cô độc bi đát vì bị bạn bè và gia đình xa lánh' },
          { key: 'B', text: 'Sự nhàn tản, thanh tịnh trong tâm hồn để lắng nghe nhịp thở của tự nhiên và suy ngẫm việc đời' },
          { key: 'C', text: 'Nỗi sợ hãi khi phải tiếp xúc với thế giới bên ngoài' },
          { key: 'D', text: 'Sự giam cầm, tù túng về thể xác' },
        ],
        correctKey: 'B',
        explanation: '“Vô nhân đáo” trong quan niệm của nhà nho không phải là nỗi cô đơn tiêu cực, mà là khoảnh khắc tĩnh tại quý báu để tâm hồn hòa nhập trọn vẹn vào vũ trụ và cái đẹp thuần khiết.',
      },
    ],
  },

  // Slide 14: Giá trị nội dung & Thông điệp nhân sinh
  14: {
    slideNumber: 14,
    question: 'Hình ảnh thời gian “nhật vị tê” (mặt trời chưa xế bóng) mang lại thông điệp nhân sinh tích cực nào?',
    options: [
      { key: 'A', text: 'Thời gian ban ngày tươi đẹp vẫn chan hòa, hãy mở rộng lòng trân quý và sống trọn vẹn từng khoảnh khắc' },
      { key: 'B', text: 'Hối thúc thi nhân mau chóng hoàn tất công việc giấy tờ trước khi trời tối' },
      { key: 'C', text: 'Nỗi hoang mang, sợ hãi trước sự trôi chảy quá nhanh của thời gian' },
      { key: 'D', text: 'Nhắc nhở mọi người kết thúc một ngày làm việc để nghỉ ngơi' },
    ],
    correctKey: 'A',
    explanation: '“Nhật vị tê” là góc nhìn đầy lạc quan: ngày xuân rạng rỡ chưa tắt bóng, ánh sáng cuộc đời còn tràn ngập, nhắc nhở con người hãy nhen nhóm “xuân tâm” để sống chan chứa yêu thương và ý nghĩa.',
    questions: [
      {
        id: '14_1',
        question: 'Hình ảnh thời gian “nhật vị tê” (mặt trời chưa xế bóng) mang lại thông điệp nhân sinh tích cực nào?',
        options: [
          { key: 'A', text: 'Thời gian ban ngày tươi đẹp vẫn chan hòa, hãy mở rộng lòng trân quý và sống trọn vẹn từng khoảnh khắc' },
          { key: 'B', text: 'Hối thúc thi nhân mau chóng hoàn tất công việc giấy tờ trước khi trời tối' },
          { key: 'C', text: 'Nỗi hoang mang, sợ hãi trước sự trôi chảy quá nhanh của thời gian' },
          { key: 'D', text: 'Nhắc nhở mọi người kết thúc một ngày làm việc để nghỉ ngơi' },
        ],
        correctKey: 'A',
        explanation: '“Nhật vị tê” là góc nhìn đầy lạc quan: ngày xuân rạng rỡ chưa tắt bóng, ánh sáng cuộc đời còn tràn ngập, nhắc nhở con người hãy nhen nhóm “xuân tâm” để sống chan chứa yêu thương và ý nghĩa.',
      },
      {
        id: '14_2',
        question: 'Khái niệm “Xuân tâm” (春心) trong bài thơ có thể hiểu toàn diện là gì?',
        options: [
          { key: 'A', text: 'Chỉ là sự rung động nam nữ lứa đôi thuần túy' },
          { key: 'B', text: 'Tấm lòng yêu đời, niềm say mê cái đẹp, sự nhạy cảm trước tạo vật và khát vọng cống hiến cho đời' },
          { key: 'C', text: 'Ý định rời bỏ cuộc sống để đi du ngoạn bốn phương' },
          { key: 'D', text: 'Sự nuối tiếc tuổi thanh xuân đã qua' },
        ],
        correctKey: 'B',
        explanation: '“Xuân tâm” là trái tim biết rung động trước mùa xuân của vũ trụ, là năng lượng sống tích cực, yêu thương con người và cuộc đời.',
      },
    ],
  },

  // Slide 15: Giá trị nghệ thuật Đường thi
  15: {
    slideNumber: 15,
    question: 'Những từ nào đóng vai trò là vần chân (hiệp vần) tạo nhạc điệu êm dịu cho bài thơ “Xuân Yến”?',
    options: [
      { key: 'A', text: 'Vi (微) – Nê (泥) – Đáo (到)' },
      { key: 'B', text: 'Đê (低) – Nê (泥) – Tê (西) (hiệp vần bằng ở cuối các câu 1, 2 và 4)' },
      { key: 'C', text: 'Phong (風) – Song (窻) – Tâm (心)' },
      { key: 'D', text: 'Thâm (深) – Tĩnh (静) – Xuân (春)' },
    ],
    correctKey: 'B',
    explanation: 'Bài thơ thất ngôn tứ tuyệt gieo vần theo luật Đường thi ở cuối các câu 1, 2, 4: “đê” (低) – “nê” (泥) – “tê” (西), tạo nên âm hưởng trầm bổng, ngân vang thanh thoát và tao nhã.',
    questions: [
      {
        id: '15_1',
        question: 'Những từ nào đóng vai trò là vần chân (hiệp vần) tạo nhạc điệu êm dịu cho bài thơ “Xuân Yến”?',
        options: [
          { key: 'A', text: 'Vi (微) – Nê (泥) – Đáo (到)' },
          { key: 'B', text: 'Đê (低) – Nê (泥) – Tê (西) (hiệp vần bằng ở cuối các câu 1, 2 và 4)' },
          { key: 'C', text: 'Phong (風) – Song (窻) – Tâm (心)' },
          { key: 'D', text: 'Thâm (深) – Tĩnh (静) – Xuân (春)' },
        ],
        correctKey: 'B',
        explanation: 'Bài thơ thất ngôn tứ tuyệt gieo vần theo luật Đường thi ở cuối các câu 1, 2, 4: “đê” (低) – “nê” (泥) – “tê” (西), tạo nên âm hưởng trầm bổng, ngân vang thanh thoát và tao nhã.',
      },
      {
        id: '15_2',
        question: 'Nghệ thuật sử dụng màu sắc trong bài thơ được thể hiện qua những gam màu nào?',
        options: [
          { key: 'A', text: 'Màu xám xịt của mây mù và màu đen của đêm tối' },
          { key: 'B', text: 'Sắc xanh mát của rặng trúc, đỏ rực hoa văn mái hiên và màu xanh biếc trong trẻo của song cửa sổ (lục song)' },
          { key: 'C', text: 'Chỉ duy nhất một màu trắng của tuyết mùa đông' },
          { key: 'D', text: 'Màu vàng úa của lá rụng mùa thu' },
        ],
        correctKey: 'B',
        explanation: 'Màu sắc trong thơ Đỗ Cận vừa có nét cổ kính trang nhã vừa tràn ngập sức sống tươi tắn của mùa xuân phương Nam.',
      },
    ],
  },

  // Slide 16: Tổng kết & Sơ đồ hóa bài học
  16: {
    slideNumber: 16,
    question: 'Vì sao tác phẩm “Xuân Yến” có giá trị di sản đặc biệt đối với văn hóa tỉnh Thái Nguyên?',
    options: [
      { key: 'A', text: 'Vì đây là tác phẩm dài tập nhất từng được sáng tác tại Thái Nguyên' },
      { key: 'B', text: 'Vì là trước tác thi ca tiêu biểu của Đỗ Cận – vị Tiến sĩ khai khoa của Thái Nguyên, được tuyển chọn vào quốc thư “Toàn Việt thi lục”' },
      { key: 'C', text: 'Vì tác phẩm do vua Lê Thánh Tông đích thân chép trên vách đá núi Cốc' },
      { key: 'D', text: 'Vì là bài thơ duy nhất viết về làng quê trung du Bắc Bộ thời bấy giờ' },
    ],
    correctKey: 'B',
    explanation: 'Đỗ Cận là Tiến sĩ khai khoa của Thái Nguyên (khoa Mậu Tuất 1478). “Xuân Yến” là minh chứng đỉnh cao cho truyền thống hiếu học, khoa bảng của vùng đất Phổ Yên – Thái Nguyên và là di sản Hán Nôm vô giá.',
    questions: [
      {
        id: '16_1',
        question: 'Vì sao tác phẩm “Xuân Yến” có giá trị di sản đặc biệt đối với văn hóa tỉnh Thái Nguyên?',
        options: [
          { key: 'A', text: 'Vì đây là tác phẩm dài tập nhất từng được sáng tác tại Thái Nguyên' },
          { key: 'B', text: 'Vì là trước tác thi ca tiêu biểu của Đỗ Cận – vị Tiến sĩ khai khoa của Thái Nguyên, được tuyển chọn vào quốc thư “Toàn Việt thi lục”' },
          { key: 'C', text: 'Vì tác phẩm do vua Lê Thánh Tông đích thân chép trên vách đá núi Cốc' },
          { key: 'D', text: 'Vì là bài thơ duy nhất viết về làng quê trung du Bắc Bộ thời bấy giờ' },
        ],
        correctKey: 'B',
        explanation: 'Đỗ Cận là Tiến sĩ khai khoa của Thái Nguyên (khoa Mậu Tuất 1478). “Xuân Yến” là minh chứng đỉnh cao cho truyền thống hiếu học, khoa bảng của vùng đất Phổ Yên – Thái Nguyên và là di sản Hán Nôm vô giá.',
      },
      {
        id: '16_2',
        question: 'Sơ đồ tổng kết bài học gồm 3 trục tương tác chính nào?',
        options: [
          { key: 'A', text: 'Nội dung (Cảnh xuân – Tình xuân) ↔ Nghệ thuật (Đường luật – Ngôn từ hàm súc) ↔ Giá trị (Di sản danh nhân Thái Nguyên)' },
          { key: 'B', text: 'Quân sự ↔ Kinh tế ↔ Địa lý tự nhiên' },
          { key: 'C', text: 'Mở bài ↔ Thân bài ↔ Kết luận' },
          { key: 'D', text: 'Tác giả ↔ Thời gian ↔ Không gian' },
        ],
        correctKey: 'A',
        explanation: 'Mô hình 3 trục: Nội dung sâu sắc, Nghệ thuật điêu luyện và Giá trị di sản bất hủ làm sáng tỏ tầm vóc của tác phẩm.',
      },
    ],
  },

  // Slide 17: Đỗ Cận & Quê hương Thái Nguyên
  17: {
    slideNumber: 17,
    question: 'Đền thờ Tiến sĩ Đỗ Cận hiện nay tọa lạc tại địa phương nào của tỉnh Thái Nguyên?',
    options: [
      { key: 'A', text: 'Huyện Định Hóa, tỉnh Thái Nguyên' },
      { key: 'B', text: 'Phường Hồng Tiến và xã Minh Đức, thành phố Phổ Yên, tỉnh Thái Nguyên' },
      { key: 'C', text: 'Huyện Đồng Hỷ, tỉnh Thái Nguyên' },
      { key: 'D', text: 'Huyện Phú Lương, tỉnh Thái Nguyên' },
    ],
    correctKey: 'B',
    explanation: 'Đền thờ Đỗ Cận được xây dựng trang nghiêm tại quê hương ông thuộc phường Hồng Tiến / xã Minh Đức, TP. Phổ Yên, là Di tích Lịch sử – Văn hóa được xếp hạng bảo vệ.',
    questions: [
      {
        id: '17_1',
        question: 'Đền thờ Tiến sĩ Đỗ Cận hiện nay tọa lạc tại địa phương nào của tỉnh Thái Nguyên?',
        options: [
          { key: 'A', text: 'Huyện Định Hóa, tỉnh Thái Nguyên' },
          { key: 'B', text: 'Phường Hồng Tiến và xã Minh Đức, thành phố Phổ Yên, tỉnh Thái Nguyên' },
          { key: 'C', text: 'Huyện Đồng Hỷ, tỉnh Thái Nguyên' },
          { key: 'D', text: 'Huyện Phú Lương, tỉnh Thái Nguyên' },
        ],
        correctKey: 'B',
        explanation: 'Đền thờ Đỗ Cận được xây dựng trang nghiêm tại quê hương ông thuộc phường Hồng Tiến / xã Minh Đức, TP. Phổ Yên.',
      },
      {
        id: '17_2',
        question: 'Tên tuổi của Đỗ Cận được chính quyền và nhân dân tỉnh Thái Nguyên tôn vinh qua những hình thức nào?',
        options: [
          { key: 'A', text: 'Đặt tên cho trường THCS, trường tiểu học và các tuyến đường phố trung tâm tại TP. Phổ Yên' },
          { key: 'B', text: 'Tổ chức lễ hội truyền thống, trao học bổng khuyến học mang tên Đỗ Cận' },
          { key: 'C', text: 'Đưa cuộc đời và thơ văn của ông vào tài liệu Giáo dục địa phương tỉnh' },
          { key: 'D', text: 'Tất cả các hình thức ý nghĩa trên đều đúng' },
        ],
        correctKey: 'D',
        explanation: 'Danh nhân Đỗ Cận được vinh danh trang trọng qua trường học, đường phố, học bổng khuyến học và chương trình giáo dục địa phương.',
      },
    ],
  },

  // Slide 18: Giá trị lịch sử & Bảo tồn di sản
  18: {
    slideNumber: 18,
    question: 'Trách nhiệm thiết thực nhất của thế hệ học sinh hôm nay đối với di sản văn hóa tiền nhân như Đỗ Cận là gì?',
    options: [
      { key: 'A', text: 'Học tập chăm chỉ noi gương hiếu học, tìm hiểu và tuyên truyền giá trị di sản văn học Hán Nôm quê hương' },
      { key: 'B', text: 'Chỉ xem đó là chuyện của quá khứ không cần quan tâm' },
      { key: 'C', text: 'Phá bỏ các đền thờ cũ để xây dựng khu vui chơi hiện đại' },
      { key: 'D', text: 'Chỉ học các tác phẩm văn học nước ngoài' },
    ],
    correctKey: 'A',
    explanation: 'Thế hệ trẻ cần biến niềm tự hào thành hành động cụ thể: phấn đấu học tập, gìn giữ di tích và lan tỏa giá trị văn hóa truyền thống của quê hương.',
    questions: [
      {
        id: '18_1',
        question: 'Trách nhiệm thiết thực nhất của thế hệ học sinh hôm nay đối với di sản văn hóa tiền nhân như Đỗ Cận là gì?',
        options: [
          { key: 'A', text: 'Học tập chăm chỉ noi gương hiếu học, tìm hiểu và tuyên truyền giá trị di sản văn học Hán Nôm quê hương' },
          { key: 'B', text: 'Chỉ xem đó là chuyện của quá khứ không cần quan tâm' },
          { key: 'C', text: 'Phá bỏ các đền thờ cũ để xây dựng khu vui chơi hiện đại' },
          { key: 'D', text: 'Chỉ học các tác phẩm văn học nước ngoài' },
        ],
        correctKey: 'A',
        explanation: 'Thế hệ trẻ cần biến niềm tự hào thành hành động cụ thể: phấn đấu học giỏi, tu dưỡng đạo đức và lan tỏa nét đẹp văn hóa xứ Thái.',
      },
      {
        id: '18_2',
        question: 'Sự nghiệp khoa bảng của Đỗ Cận chứng minh điều gì về vùng đất Thái Nguyên thời trung đại?',
        options: [
          { key: 'A', text: 'Thái Nguyên chỉ là vùng biên viễn làm nhiệm vụ quân sự đơn thuần' },
          { key: 'B', text: 'Thái Nguyên không chỉ có vị trí quân sự chiến lược mà còn là vùng đất giàu truyền thống văn hiến, hiếu học, đóng góp nhân tài cho quốc gia' },
          { key: 'C', text: 'Thời xưa Thái Nguyên không có trường dạy học nào' },
          { key: 'D', text: 'Không ai ở Thái Nguyên có thể thi đỗ cử nhân hay tiến sĩ' },
        ],
        correctKey: 'B',
        explanation: 'Đỗ Cận là biểu tượng rạng rỡ chứng minh vùng đất Thái Nguyên thời xưa cũng là cái nôi nuôi dưỡng những bậc hiền tài kinh bang tế thế.',
      },
    ],
  },

  // Slide 20: Kết luận & Thông điệp bài học
  20: {
    slideNumber: 20,
    question: 'Thông điệp nhân văn sâu sắc nhất đúc kết lại sau toàn bộ bài học về tác phẩm “Xuân Yến” là gì?',
    options: [
      { key: 'A', text: '“Tìm hiểu văn học địa phương không chỉ là hiểu một bài thơ, mà là kết nối cội nguồn lịch sử, bồi đắp lòng yêu nước và khát vọng sống đẹp”' },
      { key: 'B', text: 'Thơ ca cổ chỉ thích hợp cho người già, thanh niên không nên đọc' },
      { key: 'C', text: 'Chỉ cần quan tâm đến điểm số thi cử trước mắt' },
      { key: 'D', text: 'Thiên nhiên chỉ tồn tại để phục vụ nhu cầu khai thác kinh tế của con người' },
    ],
    correctKey: 'A',
    explanation: 'Bài thơ “Xuân Yến” và tấm gương Đỗ Cận trao truyền thông điệp bất hủ về đạo lý uống nước nhớ nguồn, tình yêu cuộc sống và khát vọng vươn lên xây dựng quê hương giàu đẹp.',
    questions: [
      {
        id: '20_1',
        question: 'Thông điệp nhân văn sâu sắc nhất đúc kết lại sau toàn bộ bài học về tác phẩm “Xuân Yến” là gì?',
        options: [
          { key: 'A', text: '“Tìm hiểu văn học địa phương không chỉ là hiểu một bài thơ, mà là kết nối cội nguồn lịch sử, bồi đắp lòng yêu nước và khát vọng sống đẹp”' },
          { key: 'B', text: 'Thơ ca cổ chỉ thích hợp cho người già, thanh niên không nên đọc' },
          { key: 'C', text: 'Chỉ cần quan tâm đến điểm số thi cử trước mắt' },
          { key: 'D', text: 'Thiên nhiên chỉ tồn tại để phục vụ nhu cầu khai thác kinh tế của con người' },
        ],
        correctKey: 'A',
        explanation: 'Bài thơ “Xuân Yến” trao truyền thông điệp bất hủ về tình yêu thiên nhiên, trân trọng nguồn cội và khát vọng sống đẹp.',
      },
      {
        id: '20_2',
        question: 'Danh hiệu tôn xưng đầy tự hào của nhân dân Thái Nguyên dành cho Tiến sĩ Đỗ Cận là gì?',
        options: [
          { key: 'A', text: 'Vị Trạng nguyên trẻ tuổi nhất' },
          { key: 'B', text: 'Vị Tiến sĩ khai khoa đầu tiên của quê hương Thái Nguyên' },
          { key: 'C', text: 'Vị tướng soái bách chiến bách thắng' },
          { key: 'D', text: 'Ông tổ nghề dệt vải xứ Thái' },
        ],
        correctKey: 'B',
        explanation: 'Tiến sĩ khai khoa (vị Tiến sĩ đầu tiên mở đầu truyền thống khoa bảng của một địa phương) là danh hiệu cao quý và tự hào nhất dành cho Đỗ Cận.',
      },
    ],
  },
};

// 10 câu trắc nghiệm tổng kết toàn diện bài học phục vụ phòng thi đấu trên Slide 19
export const COMPREHENSIVE_QUIZ_QUESTIONS: QuizQuestionItem[] = [
  {
    id: 'comp_1',
    question: 'Câu 1: Đỗ Cận đỗ Tiến sĩ vào năm nào, dưới triều vua nào của nhà Hậu Lê?',
    options: [
      { key: 'A', text: 'Năm 1428 – Triều vua Lê Thái Tổ' },
      { key: 'B', text: 'Khoa thi Mậu Tuất (1478) – Triều vua Lê Thánh Tông' },
      { key: 'C', text: 'Năm 1495 – Triều vua Lê Hiến Tông' },
      { key: 'D', text: 'Năm 1505 – Triều vua Lê Uy Mục' },
    ],
    correctKey: 'B',
    explanation: 'Đỗ Cận đỗ Đệ tam giáp đồng Tiến sĩ xuất thân khoa thi Mậu Tuất niên hiệu Hồng Đức thứ 9 (1478).',
  },
  {
    id: 'comp_2',
    question: 'Câu 2: Quê hương của danh nhân Đỗ Cận thuộc địa bàn nào của tỉnh Thái Nguyên ngày nay?',
    options: [
      { key: 'A', text: 'Xã Minh Đức và phường Tiên Phong / Hồng Tiến, thành phố Phổ Yên' },
      { key: 'B', text: 'Huyện Phú Lương' },
      { key: 'C', text: 'Thành phố Sông Công' },
      { key: 'D', text: 'Huyện Võ Nhai' },
    ],
    correctKey: 'A',
    explanation: 'Đỗ Cận sinh quán tại thôn Thống Thượng, xã Minh Đức, nay thuộc TP. Phổ Yên, tỉnh Thái Nguyên.',
  },
  {
    id: 'comp_3',
    question: 'Câu 3: Bộ thư tịch quốc gia nào đã lưu giữ thi phẩm “Xuân Yến” của Đỗ Cận?',
    options: [
      { key: 'A', text: 'Việt sử thông giám cương mục' },
      { key: 'B', text: 'Toàn Việt thi lục do Lê Quý Đôn biên tập' },
      { key: 'C', text: 'Kiến văn tiểu lục' },
      { key: 'D', text: 'Lĩnh Nam chích quái' },
    ],
    correctKey: 'B',
    explanation: 'Bài thơ được tuyển chọn trang trọng trong “Toàn Việt thi lục” (quyển 8) của Bác học Lê Quý Đôn.',
  },
  {
    id: 'comp_4',
    question: 'Câu 4: Tác phẩm “Xuân Yến” được viết bằng chữ gì và theo thể thơ nào?',
    options: [
      { key: 'A', text: 'Chữ Nôm – Thể thơ Song thất lục bát' },
      { key: 'B', text: 'Chữ Quốc ngữ – Thể Thơ mới tự do 7 chữ' },
      { key: 'C', text: 'Chữ Hán – Thể Thất ngôn tứ tuyệt Đường luật' },
      { key: 'D', text: 'Chữ Phạn – Thể Kệ tụng Phật giáo' },
    ],
    correctKey: 'C',
    explanation: 'Bài thơ được sáng tác bằng chữ Hán cổ, theo luật Thất ngôn tứ tuyệt niêm luật bằng trắc nghiêm cẩn.',
  },
  {
    id: 'comp_5',
    question: 'Câu 5: Trong câu thơ thứ 2, chi tiết “đới hương nê” (帶香泥) miêu tả hành động gì của cánh én?',
    options: [
      { key: 'A', text: 'Bay lượn tìm thức ăn giữa trời mưa phùn' },
      { key: 'B', text: 'Ngậm bùn đất mùa xuân thơm ngát về mái hiên hoa văn để đắp tổ ấm' },
      { key: 'C', text: 'Đáp xuống ruộng đồng bắt sâu bọ giúp nông dân' },
      { key: 'D', text: 'Bị lấm lem bùn đất và mất phương hướng bay' },
    ],
    correctKey: 'B',
    explanation: 'Cánh én ngậm mang bùn thơm (đới hương nê) về dưới mái hiên hoa đắp tổ, biểu tượng cho khát vọng xây đắp hạnh phúc.',
  },
  {
    id: 'comp_6',
    question: 'Câu 6: Bút pháp nghệ thuật nào được tác giả sử dụng trong câu thơ mở đầu “Đình viện phong vi trúc ảnh đê”?',
    options: [
      { key: 'A', text: 'Bút pháp ước lệ tương phản' },
      { key: 'B', text: 'Bút pháp phóng đại, khoa trương' },
      { key: 'C', text: 'Bút pháp “Lấy động tả tĩnh” cổ điển' },
      { key: 'D', text: 'Bút pháp trào phúng, tự trào' },
    ],
    correctKey: 'C',
    explanation: 'Gió thoảng khẽ lay bóng trúc là nét động rất khẽ, làm nổi bật không gian tĩnh lặng, tao nhã tuyệt đối của khu vườn.',
  },
  {
    id: 'comp_7',
    question: 'Câu 7: Cụm từ “Lục song trú tĩnh vô nhân đáo” khắc họa không gian thư phòng như thế nào?',
    options: [
      { key: 'A', text: 'Một không gian yên ắng thanh vắng bên khung cửa sổ xanh mát, nơi thi nhân tĩnh tâm cảm nhận đất trời' },
      { key: 'B', text: 'Một căn phòng u tối, ngột ngạt và bí bách' },
      { key: 'C', text: 'Chốn công đường ồn ào việc quan' },
      { key: 'D', text: 'Nơi hoang phế nhiều năm không có người ở' },
    ],
    correctKey: 'A',
    explanation: '“Lục song” (cửa sổ xanh biếc) là không gian thanh bạch của bậc nho gia ẩn chứa nét thẩm mỹ nho nhã.',
  },
  {
    id: 'comp_8',
    question: 'Câu 8: Cụm từ “Nhật vị tê” (日未西) trong câu thơ cuối có nghĩa chính xác là gì?',
    options: [
      { key: 'A', text: 'Mặt trời đã lặn hẳn về phía tây' },
      { key: 'B', text: 'Mặt trời chưa xế về tây – ánh sáng ban ngày tươi đẹp vẫn còn chan hòa' },
      { key: 'C', text: 'Đêm khuya trăng tàn bên ngọn đèn dầu' },
      { key: 'D', text: 'Bình minh vừa hé rạng ở phương đông' },
    ],
    correctKey: 'B',
    explanation: '“Nhật vị tê” (mặt trời chưa xế bóng) thể hiện cái nhìn tràn trề năng lượng và niềm lạc quan yêu đời của tác giả.',
  },
  {
    id: 'comp_9',
    question: 'Câu 9: Các vần chân hiệp vần theo luật Đường thi trong bài thơ là những từ nào?',
    options: [
      { key: 'A', text: 'Đê (低) – Nê (泥) – Tê (西) (vần bằng ở cuối câu 1, 2 và 4)' },
      { key: 'B', text: 'Vi – Song – Tâm' },
      { key: 'C', text: 'Đình – Hoạ – Lục' },
      { key: 'D', text: 'Thâm – Tĩnh – Xuân' },
    ],
    correctKey: 'A',
    explanation: 'Bài thơ gieo vần bằng ở các chữ cuối câu 1, 2 và 4: đê – nê – tê theo luật thơ Đường chuẩn mực.',
  },
  {
    id: 'comp_10',
    question: 'Câu 10: Di tích lịch sử Đền thờ Tiến sĩ Đỗ Cận tại Thái Nguyên mang ý nghĩa lớn lao nào?',
    options: [
      { key: 'A', text: 'Là địa chỉ giáo dục truyền thống hiếu học, tôn vinh vị Tiến sĩ khai khoa của quê hương Thái Nguyên' },
      { key: 'B', text: 'Chỉ là một ngôi miếu thờ thần hoàng làng bình thường' },
      { key: 'C', text: 'Nơi diễn ra các hoạt động mua bán cổ vật' },
      { key: 'D', text: 'Khu du lịch sinh thái nghỉ dưỡng hiện đại' },
    ],
    correctKey: 'A',
    explanation: 'Đền thờ Đỗ Cận là di tích lịch sử văn hóa cấp Quốc gia/Tỉnh, biểu tượng cho truyền thống hiếu học và khoa bảng xứ Thái.',
  },
];
