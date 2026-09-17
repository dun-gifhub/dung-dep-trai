import { SlideData, DiscussionQuestion, VocabularyNote } from '../types';

export const POEM_DATA = {
  title: 'Xuân Yến (春燕)',
  author: 'Đỗ Cận (杜覲)',
  source: 'Bộ "Toàn Việt thi lục" do Bác học Lê Quý Đôn phụng chỉ biên soạn',
  genre: 'Thất ngôn tứ tuyệt Đường luật (Chữ Hán)',
  lines: [
    {
      lineNum: 1,
      han: '庭 院 風 微 竹 影 低',
      transcription: 'Đình viện phong vi trúc ảnh đê,',
      literal: 'Gió nhẹ thổi qua sân viện, bóng rặng trúc rủ thấp là là.',
      poetic: 'Gió phất tre sân, bóng thướt tha,',
      interpretation: 'Cảnh sắc sân vườn thanh tịnh trong gió nhẹ; bóng tre trúc lay động mềm mại gợi không gian trang nhã.'
    },
    {
      lineNum: 2,
      han: '畫 簷 深 處 帶 香 泥',
      transcription: 'Hoạ thiềm thâm xứ đới hương nê.',
      literal: 'Nơi góc sâu của mái hiên chạm vẽ, (chim én) mang theo bùn thơm về xây tổ.',
      poetic: 'Bùn thơm lót tổ dưới hiên nhà.',
      interpretation: 'Hình ảnh chim én xuân ngậm "hương nê" (bùn đượm hương hoa cỏ mùa xuân) đắp tổ ấm, biểu tượng của sinh sôi, gắn kết.'
    },
    {
      lineNum: 3,
      han: '綠 窻 晝 静 無 人 到',
      transcription: 'Lục song trú tĩnh vô nhân đáo,',
      literal: 'Bên khung cửa sổ biếc, ban ngày tĩnh lặng không một bóng người qua lại.',
      poetic: 'Bên song yên lặng không người tới,',
      interpretation: 'Không gian tĩnh mịch thanh tao ("lục song", "trú tĩnh"), nhấn mạnh sự lắng đọng nội tâm của bậc túc nho.'
    },
    {
      lineNum: 4,
      han: '挑 撥 春 心 日 未 西',
      transcription: 'Khiêu bát xuân tâm nhật vị tê.',
      literal: 'Khêu gợi mối rung động lòng xuân khi bóng dương còn chưa ngả về tây.',
      poetic: 'Gợi mối lòng xuân trước bóng tà.',
      interpretation: 'Sự thức dậy của "xuân tâm" – nguồn sống tươi mới, niềm khát khao yêu đời, rạo rực trước thiên nhiên xuân sắc còn đương rực rỡ.'
    }
  ]
};

export const VOCABULARY_LIST: VocabularyNote[] = [
  { word: 'Đình viện (庭院)', han: '庭院', meaning: 'Khoảng sân vườn bên trong khuôn viên nhà cửa, chốn thanh tịnh của nho gia.' },
  { word: 'Phong vi (風微)', han: '風微', meaning: 'Gió thoảng nhẹ nhàng, làn gió mát lành êm dịu đặc trưng của mùa xuân.' },
  { word: 'Trúc ảnh đê (竹影低)', han: '竹影低', meaning: 'Bóng cây tre/trúc rủ là là xuống mặt sân do gió thổi lay động.' },
  { word: 'Hoạ thiềm (畫簷)', han: '畫簷', meaning: 'Mái hiên nhà được chạm khắc hoa văn, sơn vẽ tinh xảo, thể hiện nét kiến trúc tao nhã.' },
  { word: 'Hương nê (香泥)', han: '香泥', meaning: 'Bùn thơm – bùn đất mùa xuân ngấm đượm hương hoa cỏ được chim én tha về đắp tổ ấm.' },
  { word: 'Lục song (綠窻)', han: '綠窻', meaning: 'Cửa sổ sơn màu biếc/xanh lục, nơi nho sinh, văn nhân ngồi đọc sách ngắm cảnh.' },
  { word: 'Trú tĩnh (晝静)', han: '晝静', meaning: 'Ban ngày tĩnh mịch, an nhàn, thanh vắng không có tiếng ồn ào bụi bặm.' },
  { word: 'Khiêu bát (挑撥)', han: '挑撥', meaning: 'Khêu gợi, nhen nhóm, đánh thức mối rung cảm tha thiết trong lòng.' },
  { word: 'Xuân tâm (春心)', han: '春心', meaning: 'Lòng xuân – tâm tình rạo rực, tình yêu đời, tình yêu cảnh sắc và sự sống mơn mởn.' },
  { word: 'Nhật vị tê (日未西)', han: '日未西', meaning: 'Mặt trời còn chưa lặn về hướng tây, tức thời điểm ngày xuân còn sáng rõ, tràn ngập ánh dương.' }
];

export const DISCUSSION_QUESTIONS: DiscussionQuestion[] = [
  {
    id: 1,
    question: 'Đỗ Cận là ai và ông có những đóng góp, dấu mốc nổi bật nào trong lịch sử văn hóa dân tộc?',
    hint: 'Gợi ý: Năm sinh, quê quán, khoa thi 1478, việc đổi tên, chuyến đi sứ 1483 và vai trò trên thi đàn thời Lê sơ.',
    suggestedAnswer: 'Đỗ Cận (1434 – ?), tên khai sinh Đỗ Viễn, tự Hữu Khác, hiệu Phổ Sơn, người Thống Thượng (Phổ Yên, Thái Nguyên). Đỗ Tiến sĩ khoa Mậu Tuất (1478) thời vua Lê Thánh Tông, được vua đổi tên thành Đỗ Cận. Năm 1483, ông làm Phó sứ sang nhà Minh, thể hiện khí phách ngoại giao và tài ứng đối thơ văn. Ông là danh nhân mở đầu cho truyền thống đại khoa của quê hương Thái Nguyên và là nhà thơ xuất sắc của thế kỷ XV.'
  },
  {
    id: 2,
    question: 'Vì sao hình tượng chim én (xuân yến) lại giữ vai trò trung tâm và có ý nghĩa quan trọng trong bài thơ?',
    hint: 'Gợi ý: Chim én gắn với sự chuyển giao mùa, động thái tha "hương nê" xây tổ và sự khơi gợi sức sống.',
    suggestedAnswer: 'Chim én là tín hiệu báo mùa xuân sang. Trong bài thơ, én không bay lượn vô định mà tha "hương nê" (bùn thơm) về góc mái hiên hoa ("hoạ thiềm") xây tổ ấm. Hình ảnh ấy đem lại hơi ấm, sự gắn kết, sự sinh sôi cho không gian thanh vắng, trực tiếp đánh thức dòng cảm xúc và khơi dậy "xuân tâm" trong tâm hồn thi nhân.'
  },
  {
    id: 3,
    question: 'Nhan đề “Xuân Yến” gợi cho bạn những liên tưởng và tầng nghĩa biểu cảm nào?',
    hint: 'Gợi ý: Tách nghĩa chữ "Xuân" và chữ "Yến", sự kết hợp giữa thời gian mùa xuân và sinh thể cánh én.',
    suggestedAnswer: '“Xuân” là mùa khởi đầu năm mới, biểu trưng cho sự đổi mới, sức sống mơn mởn. “Yến” là loài chim mang lại điềm lành, sự sum vầy và ấm áp. Nhan đề "Xuân Yến" gợi mở một bức họa thiên nhiên thanh tao, sự giao hòa giữa đất trời và vạn vật, đồng thời dự báo mạch cảm xúc ấm áp, lạc quan của tác giả.'
  },
  {
    id: 4,
    question: 'Thiên nhiên trong bài thơ có mối quan hệ như thế nào với tâm trạng và cảm xúc của chủ thể trữ tình?',
    hint: 'Gợi ý: Thủ pháp "tả cảnh ngụ tình" và sự vận động từ cảnh vật bên ngoài vào rung động bên trong.',
    suggestedAnswer: 'Thiên nhiên và tâm trạng có mối quan hệ mật thiết theo bút pháp tả cảnh ngụ tình: Ba câu đầu quan sát cảnh vật bên ngoài (gió nhẹ, bóng trúc, chim én ngậm bùn, cửa sổ xanh tĩnh lặng), câu cuối chuyển hóa thành rung cảm nội tâm sâu sắc ("khiêu bát xuân tâm"). Ngoại cảnh thanh tao đã nuôi dưỡng và khơi gợi tâm hồn tràn đầy tình yêu đời, tha thiết với cuộc sống.'
  },
  {
    id: 5,
    question: 'Việc tìm hiểu “Xuân Yến” và tác giả Đỗ Cận giúp học sinh hiểu thêm điều gì về văn hóa và văn học Thái Nguyên?',
    hint: 'Gợi ý: Thái Nguyên không chỉ có truyền thống cách mạng mà còn có bề dày văn hóa Hán Nôm và truyền thống hiếu học từ thời phong kiến.',
    suggestedAnswer: 'Khẳng định Thái Nguyên là vùng đất "địa linh nhân kiệt", có truyền thống khoa bảng vẻ vang từ thế kỷ XV dưới triều vua Lê Thánh Tông thịnh trị. Bài thơ là di sản Hán Nôm vô giá minh chứng cho tài năng văn chương của tiền nhân xứ Thái, bồi đắp lòng tự hào quê hương và trách nhiệm gìn giữ, phát huy di sản văn hóa địa phương.'
  }
];

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    slideNumber: 1,
    category: 'Trang bìa',
    title: 'TÌM HIỂU TÁC PHẨM “XUÂN YẾN”',
    subtitle: 'Tác giả ĐỖ CẬN – Danh nhân văn hóa quê hương Thái Nguyên',
    bulletPoints: [
      'Chủ đề: Thơ văn trung đại Việt Nam & Văn học địa phương Thái Nguyên',
      'Tác giả: Đỗ Cận (1434 – ?) | Đỗ Tiến sĩ khoa Mậu Tuất (1478)',
      'Nguồn tư liệu: "Toàn Việt thi lục" (Lê Quý Đôn biên soạn)',
      'Định hướng: Bồi dưỡng niềm tự hào di sản văn hóa, khoa bảng quê hương'
    ],
    speakerNotes: 'Kính chào thầy cô và các bạn. Hôm nay, nhóm chúng em xin được đại diện trình bày bài thuyết trình chuyên sâu môn Ngữ văn với chủ đề: Tìm hiểu tác phẩm “Xuân Yến” của tác giả Đỗ Cận – Danh nhân văn hóa, nhà thơ tiêu biểu gắn liền với mảnh đất Thái Nguyên giàu truyền thống hiếu học và khoa cử. Kính mời thầy cô và các bạn cùng theo dõi.'
  },
  {
    id: 2,
    slideNumber: 2,
    category: 'Tác giả',
    title: 'ĐỖ CẬN LÀ AI? (TIỂU SỬ & DẤU MỐC)',
    subtitle: 'Nhà khoa bảng mẫu mực thế kỷ XV – Đệ tam giáp đồng Tiến sĩ xuất thân',
    bulletPoints: [
      'Năm sinh: 1434 (dưới triều vua Lê Thái Tông, thời Lê sơ).',
      'Tên khai sinh: Đỗ Viễn (sau được vua ban đổi tên thành Đỗ Cận).',
      'Tên tự: Hữu Khác | Tên hiệu: Phổ Sơn (gắn với vùng đất Phổ Yên quê hương).',
      'Quê quán: Thôn Thống Thượng, huyện Phổ Yên, phủ Phú Bình, xứ Thái Nguyên (nay là TP. Phổ Yên, tỉnh Thái Nguyên).',
      'Khoa bảng: Đỗ Tiến sĩ năm 1478 (khoa Mậu Tuất, niên hiệu Hồng Đức thứ 9, đời vua Lê Thánh Tông).',
      'LƯU Ý HỌC THUẬT: Tuyệt đối KHÔNG nhầm lẫn tác giả với "Đỗ Lân" (lỗi sao chép tự dạng ở một số tài liệu cũ).'
    ],
    speakerNotes: 'Để hiểu tác phẩm, trước hết ta cần biết Đỗ Cận là ai. Ông sinh năm 1434, tên khai sinh là Đỗ Viễn, tự Hữu Khác, hiệu Phổ Sơn. Quê ông tại thôn Thống Thượng, Phổ Yên, Thái Nguyên. Năm 1478, dưới niên hiệu Hồng Đức thứ 9 đời vua Lê Thánh Tông, ông đỗ Tiến sĩ. Xin đặc biệt lưu ý: một số tài liệu sơ lược có nhầm lẫn tên ông thành Đỗ Lân do tự dạng chữ Hán Cận (覲) và Lân (璘) gần giống nhau, nhưng theo Văn bia Tiến sĩ Quốc Tử Giám và chính sử, danh xưng chính xác là ĐỖ CẬN.'
  },
  {
    id: 3,
    slideNumber: 3,
    category: 'Tác giả',
    title: 'QUÊ HƯƠNG ĐỖ CẬN: ĐẤT THÉP PHỔ YÊN',
    subtitle: 'Cội nguồn nuôi dưỡng tài năng và nhân cách người quân tử',
    bulletPoints: [
      'Địa bàn: Thống Thượng, huyện Phổ Yên, tỉnh Thái Nguyên – vùng đất cửa ngõ chuyển tiếp giữa đồng bằng châu thổ sông Hồng và núi rừng Việt Bắc.',
      'Mạch nguồn: Quê hương giàu truyền thống yêu nước, coi trọng hiền tài, hiếu học.',
      'Sơ đồ chuyển hóa: Vùng đất địa linh → Ý chí vượt khó dùi mài kinh sử → Truyền thống khoa bảng Thái Nguyên → Dấu ấn danh nhân Đỗ Cận.',
      'Di tích hiện hữu: Đền thờ Đỗ Cận (tại Phổ Yên) được nhân dân đời đời hương khói tưởng niệm, là địa chỉ đỏ giáo dục truyền thống hiếu học cho học sinh, thanh niên ngày nay.'
    ],
    speakerNotes: 'Quê hương của Đỗ Cận là vùng đất Thống Thượng, Phổ Yên, Thái Nguyên. Nơi đây là vùng đất giao thoa giữa châu thổ sông Hồng màu mỡ và núi non điệp trùng, hình thành nên khí chất kiên cường, hiếu học. Chính mạch nguồn văn hóa bền bỉ của quê hương đã nuôi dưỡng ý chí dùi mài kinh sử, để rồi cậu học trò Đỗ Viễn trở thành niềm tự hào đầu tiên rạng danh bảng vàng của vùng đất trung du xứ Thái.'
  },
  {
    id: 4,
    slideNumber: 4,
    category: 'Tác giả',
    title: 'CON ĐƯỜNG KHOA CỬ: TỪ ĐỖ VIỄN ĐẾN ĐỖ CẬN',
    subtitle: 'Khẳng định vị thế trí thức tiêu biểu trong thời kỳ cực thịnh của phong kiến Việt Nam',
    bulletPoints: [
      'Quá trình rèn luyện: Xuất thân thanh bần, kiên trì dùi mài kinh sử nơi đất Phổ Sơn, vượt qua nhiều cấp thi Hương, thi Hội.',
      'Khoa thi Mậu Tuất (1478): Đỗ Tiến sĩ đệ tam giáp vào năm 44 tuổi – độ tuổi chín muồi về tài năng và đức độ.',
      'Vua ban đổi tên: Vua Lê Thánh Tông trực tiếp đổi tên từ Đỗ Viễn thành ĐỖ CẬN (chữ "Cận" 覲 mang ý nghĩa yết kiến, gần gũi đấng minh quân để phụng sự non sông).',
      'Ý nghĩa khoa cử: Khẳng định chân lý "Hiền tài là nguyên khí của quốc gia" thời Hồng Đức, mở đường cho người tài vùng trung du tham chính cứu đời.'
    ],
    speakerNotes: 'Con đường khoa bảng của Đỗ Cận là một tấm gương mẫu mực về sự bền bỉ. Năm 1478, ở tuổi 44, ông đỗ Tiến sĩ khoa Mậu Tuất. Đích thân vua Lê Thánh Tông – một vị vua anh minh, sùng nho học – đã đổi tên ông từ Đỗ Viễn sang Đỗ Cận. Việc đổi tên mang ý nghĩa sâu xa: từ người học trò xa xôi nơi thôn dã, nay đã về triều yết kiến thiên tử (Cận) để cống hiến tài năng cho đất nước.'
  },
  {
    id: 5,
    slideNumber: 5,
    category: 'Tác giả',
    title: 'SỰ NGHIỆP CỦA ĐỖ CẬN: TRỌNG THẦN & SỨ THẦN',
    subtitle: 'Đóng góp to lớn trong chính trị, ngoại giao và văn hóa triều Lê sơ',
    bulletPoints: [
      'Chức vụ triều đình: Trải qua các chức vụ quan trọng như Thượng thư bộ Lại, bộ Ngoại, Hàn lâm viện Thị độc...',
      'Dấu mốc đi sứ (1483): Được tin cậy cử làm Phó sứ sang triều đình nhà Minh (Bắc Kinh) – gánh vác trọng trách ngoại giao quốc gia.',
      'Bản lĩnh ngoại giao: Giữ vững quốc thể, khéo léo ứng đối thi ca, khiến triều thần phương Bắc nể phục phong thái nho nhã Đại Việt.',
      'Gắn bó phong trào văn học: Hoạt động sôi nổi trong không khí thi ca thời Lê Thánh Tông – thời kỳ hoàng kim của Tao Đàn Nhị thập bát tú.',
      'Nguyên tắc sử liệu: Ghi nhận đúng theo chính sử Đại Việt Sử Ký Toàn Thư, không thêu dệt chi tiết chưa kiểm chứng.'
    ],
    speakerNotes: 'Sau khi đỗ đạt, sự nghiệp của Đỗ Cận phát triển rực rỡ. Dấu mốc đặc biệt nhất là năm 1483, ông được triều đình cử làm Phó sứ sang nhà Minh. Bằng học vấn uyên thâm và tài ứng đối thơ văn xuất sắc, ông đã hoàn thành xuất sắc sứ mệnh bang giao, giữ vững thể diện quốc gia. Khi trở về nước, ông tiếp tục phụng sự triều đình và tham gia vào phong trào văn chương rực rỡ thời Hồng Đức.'
  },
  {
    id: 6,
    slideNumber: 6,
    category: 'Tác giả',
    title: 'ĐỖ CẬN VÀ DI SẢN VĂN HỌC',
    subtitle: 'Những sáng tác lưu dấu trong dòng chảy văn học trung đại Việt Nam',
    bulletPoints: [
      'Tác phẩm xác thực trong thư tịch Hán Nôm: Được học giả Lê Quý Đôn tuyển chọn và ghi chép vào bộ "Toàn Việt thi lục":',
      '• “Xuân Yến” (春燕) – Đề tài mùa xuân và cánh én, giàu chất trữ tình thiên nhiên.',
      '• “Thái Thạch vãn bạc” (采石晚泊) – Thơ chữ Hán trên đường đi sứ (ghé bến Thái Thạch lúc chiều tà).',
      '• “Kim Lăng ký” (金陵記) – Ký sự ghi chép phong vật đất nước trong chuyến đi sứ.',
      'Tác phẩm truyền tụng dân gian: Một số nguồn gắn tên tuổi ông với bản Nôm truyện "Phan Trần" (cần phân biệt rõ: đây là tác phẩm truyền tụng, chưa có văn bản khảo chứng tuyệt đối).'
    ],
    speakerNotes: 'Về mặt sáng tác, Đỗ Cận để lại những tác phẩm có giá trị cao trong di sản văn học Hán Nôm. Bộ "Toàn Việt thi lục" do Bác học Lê Quý Đôn phụng chỉ biên soạn còn lưu giữ hai bài thơ trứ danh của ông là "Xuân Yến" và "Thái Thạch vãn bạc", cùng tập ký "Kim Lăng ký". Đây là những tác phẩm chính thống được khẳng định chắc chắn về mặt thư tịch học.'
  },
  {
    id: 7,
    slideNumber: 7,
    category: 'Tác phẩm',
    title: 'GIỚI THIỆU TÁC PHẨM “XUÂN YẾN”',
    subtitle: 'Nguồn gốc văn bản, thể loại và hoàn cảnh tiếp nhận',
    bulletPoints: [
      'Tên tác phẩm: Xuân Yến (chữ Hán: 春燕).',
      'Ý nghĩa nhan đề: "Chim én mùa xuân" – thi liệu cổ điển quen thuộc nhưng chứa chan tình cảm mới mẻ.',
      'Tác giả: Đỗ Cận (Đỗ Viễn / Phổ Sơn).',
      'Thể loại: Thất ngôn tứ tuyệt Đường luật (viết bằng chữ Hán).',
      'Nguồn gốc thư tịch: Lưu giữ trang trọng trong "Toàn Việt thi lục" (bộ tổng tập thơ ca lớn nhất của nước ta thời trung đại).',
      'Cấu trúc tiếp cận học tập: Nguyên văn Chữ Hán → Phiên âm Hán-Việt → Dịch nghĩa → Dịch thơ.'
    ],
    speakerNotes: 'Bây giờ chúng ta bước vào trọng tâm: tác phẩm “Xuân Yến”. Tên bài thơ gồm hai chữ: Xuân là mùa xuân, Yến là chim én. Tác phẩm thuộc thể thơ thất ngôn tứ tuyệt Đường luật viết bằng chữ Hán, được tuyển chọn vào Toàn Việt thi lục. Để cảm nhận trọn vẹn vẻ đẹp, chúng ta sẽ lần lượt tiếp cận 4 tầng văn bản: từ chữ Hán, phiên âm, dịch nghĩa cho tới bản dịch thơ.'
  },
  {
    id: 8,
    slideNumber: 8,
    category: 'Tác phẩm',
    title: 'VĂN BẢN TÁC PHẨM “XUÂN YẾN”',
    subtitle: 'So sánh đối chiếu 4 tầng văn bản: Chữ Hán – Phiên âm – Dịch nghĩa – Dịch thơ',
    bulletPoints: [
      'Chữ Hán: 庭院風微竹影低，畫簷深處帶香泥。綠窻晝静無人到，挑撥春心日未西。',
      'Phiên âm: Đình viện phong vi trúc ảnh đê / Hoạ thiềm thâm xứ đới hương nê / Lục song trú tĩnh vô nhân đáo / Khiêu bát xuân tâm nhật vị tê.',
      'Dịch nghĩa: Sân trong gió nhẹ bóng trúc thấp / Mái hiên chạm sâu chim mang bùn thơm / Bên song biếc ngày yên không ai tới / Khêu gợi lòng xuân trời chưa xế tây.',
      'Dịch thơ: Gió phất tre sân, bóng thướt tha / Bùn thơm lót tổ dưới hiên nhà / Bên song yên lặng không người tới / Gợi mối lòng xuân trước bóng tà.'
    ],
    speakerNotes: 'Xin mời thầy cô và các bạn quan sát 4 tầng văn bản của bài thơ trên màn hình. Mỗi câu thơ đều tuân thủ nghiêm ngặt luật bằng trắc của thể tứ tuyệt, tạo nên nhịp điệu êm đềm, thanh thoát. Từng hình ảnh thơ như "phong vi", "trúc ảnh đê", "hoạ thiềm", "hương nê" đều là những thi liệu giàu tính gợi hình, mở ra một không gian mùa xuân vừa đài các vừa tĩnh mịch.'
  },
  {
    id: 9,
    slideNumber: 9,
    category: 'Phân tích',
    title: 'Ý NGHĨA NHAN ĐỀ “XUÂN YẾN”',
    subtitle: 'Biểu tượng kinh điển của sự giao hòa đất trời và sức sống hồi sinh',
    bulletPoints: [
      'Chữ “Xuân” (春): Thời khắc mở đầu của bốn mùa, thời điểm sinh sôi, nảy lộc, bừng dậy sinh khí của vạn vật sau mùa đông buốt giá.',
      'Chữ “Yến” (燕): Loài chim di cư mang tín hiệu xuân về; gắn với tổ ấm gia đình, tình yêu lứa đôi và sự an lành.',
      'Mối quan hệ hữu cơ: “Mùa xuân” (thời gian) + “Chim én” (sinh vật chuyển động) → Bức tranh sống động của sự hồi sinh.',
      'Tầng nghĩa sâu sắc: Không chỉ là việc miêu tả con chim én bình thường, mà cánh én là tác nhân đánh thức "xuân tâm" – lòng yêu đời và cảm thức thẩm mỹ của thi nhân.'
    ],
    speakerNotes: 'Phân tích nhan đề "Xuân Yến", ta thấy: Xuân là mùa của sức sống đâm chồi, Yến là loài chim mang lại sự ấm êm. Hai chữ kết hợp lại vừa định hình không gian, thời gian, vừa là chiếc chìa khóa mở ra tâm trạng. Đỗ Cận không chỉ ngắm chim én, mà qua cánh én để cảm nhận mạch đập của sự sống đang trỗi dậy trong lòng mình.'
  },
  {
    id: 10,
    slideNumber: 10,
    category: 'Phân tích',
    title: 'BỨC TRANH THIÊN NHIÊN NGÀY XUÂN',
    subtitle: 'Không gian tĩnh lặng, tao nhã và tràn ngập sinh khí ngầm',
    bulletPoints: [
      'Không gian: Sân viện (đình viện) → Mái hiên chạm vẽ (hoạ thiềm) → Ô cửa sổ xanh biếc (lục song). Không gian thu hẹp dần, từ ngoại cảnh đi vào chốn thư phòng riêng tư.',
      'Thời gian: Ban ngày thanh vắng (trú tĩnh), mặt trời chưa ngả bóng về tây (nhật vị tê) – thời khắc tràn ngập ánh sáng ấm áp.',
      'Màu sắc & Đường nét: Xanh mát của rặng trúc, đỏ thắm hoa văn mái hiên, xanh biếc của song cửa; bóng trúc ngả nghiêng mềm mại.',
      'Âm thanh & Chuyển động: Làn gió thoảng nhẹ (phong vi), cánh én chao lượn tha bùn. Nghệ thuật "Lấy động tả tĩnh" tạo nên không khí thanh tao tuyệt đối.'
    ],
    speakerNotes: 'Bức tranh thiên nhiên trong bài thơ được tái hiện qua các tọa độ nghệ thuật rất tinh tế. Không gian mở ra từ sân vườn vào đến mái hiên và dừng lại ở khung cửa sổ màu lục. Cảnh vật không ồn ào mà vô cùng thanh tĩnh ("trú tĩnh"), gió chỉ thoảng nhẹ ("phong vi"), bóng trúc chỉ khẽ là mặt đất. Trong cái tĩnh ấy, từng chuyển động nhỏ của thiên nhiên trở nên vô cùng sống động và gợi cảm.'
  },
  {
    id: 11,
    slideNumber: 11,
    category: 'Phân tích',
    title: 'HÌNH TƯỢNG CÁNH ÉN (XUÂN YẾN)',
    subtitle: 'Chi tiết nghệ thuật độc đáo: Chim én ngậm bùn thơm xây tổ ấm',
    bulletPoints: [
      'Hành động cụ thể: "Đới hương nê" – ngậm mang bùn thơm mùa xuân về nơi góc mái hiên chạm vẽ để đắp tổ ấm.',
      'Chi tiết "Hương nê" (bùn thơm): Đất bùn ngậm chứa hương thơm của hoa cỏ, giọt mưa xuân và mầm sống mới – nét bút lãng mạn tinh tế.',
      'Mô hình liên tưởng: CHIM ÉN → TỔN ẤM GIA ĐÌNH → NHỊP SỐNG SINH SÔI → ĐÁNH THỨC CẢM XÚC CON NGƯỜI.',
      'Ý nghĩa biểu tượng: Én không chỉ tô điểm cho cảnh sắc mùa xuân, mà là biểu tượng của sự chăm chỉ, xây đắp hạnh phúc và nhịp cầu nối đất trời với cõi nhân sinh.'
    ],
    speakerNotes: 'Điểm nhấn nghệ thuật đắt giá nhất bài thơ chính là hình tượng cánh én ngậm "hương nê" (bùn thơm). Thay vì miêu tả chim én chao liệng giữa trời rộng như thơ ca ước lệ, Đỗ Cận quan sát chim én ở cự ly gần: én bay về mái hiên hoa, ngậm bùn thơm hoa cỏ mùa xuân đắp tổ. Đây là hình ảnh tượng trưng cho sự vun vén, xây dựng tổ ấm bình yên và sự sinh sôi nảy nở.'
  },
  {
    id: 12,
    slideNumber: 12,
    category: 'Phân tích',
    title: 'MẠCH CẢM XÚC CỦA TÁC GIẢ',
    subtitle: 'Hành trình từ thị giác, cảm giác đến sự rung động sâu thẳm của tâm hồn',
    bulletPoints: [
      'Bước 1: Quan sát ngoại cảnh tĩnh lặng (Gió nhẹ ngoài sân, bóng trúc ngả nghiêng, cửa sổ vắng vẻ).',
      'Bước 2: Phát hiện chuyển động sinh động (Chim én tha bùn thơm về mái hiên hoa đắp tổ).',
      'Bước 3: Nhận thức sự tĩnh lặng tuyệt đối của chốn thư phòng ("Lục song trú tĩnh vô nhân đáo").',
      'Bước 4: Bừng tỉnh cảm xúc nội tâm ("Khiêu bát xuân tâm nhật vị tê" – Khêu gợi rung động tình xuân khi ngày còn đương sáng).',
      'Sơ đồ chuyển hóa: Ngoại cảnh thanh tao → Thâm nhập tâm tưởng → Nhen nhóm lòng yêu đời tha thiết.'
    ],
    speakerNotes: 'Mạch cảm xúc của bài thơ vận động từ ngoài vào trong, từ tĩnh đến động rồi quay lại kết đọng ở chiều sâu tâm hồn. Ban đầu là cái nhìn khách quan ngắm cảnh sân nhà, nhưng khi thấy cánh én cần mẫn mang bùn thơm, trước khung cửa sổ vắng lặng, lòng tác giả bỗng rạo rực. Chữ "khiêu bát" nghĩa là khêu gợi, nhen nhóm lên – một ngọn lửa tình yêu đời, yêu cuộc sống đang bùng lên mạnh mẽ.'
  },
  {
    id: 13,
    slideNumber: 13,
    category: 'Phân tích',
    title: 'CHỦ ĐỀ TÁC PHẨM “XUÂN YẾN”',
    subtitle: 'Khúc ca ca ngợi vẻ đẹp mùa xuân và tâm hồn yêu đời, nhân văn của thi nhân',
    bulletPoints: [
      'Nội dung cốt lõi: Ca ngợi vẻ đẹp thanh khiết, ấm áp của mùa xuân nơi làng cảnh Đại Việt thế kỷ XV.',
      'Tâm thế thi nhân: Phong thái an nhiên, ung dung tự tại của bậc nho gia trí thức; tâm hồn nhạy cảm trước từng biến chuyển vi tế của vũ trụ.',
      'Ý nghĩa nhân văn: Khát vọng hòa nhập vào dòng chảy của sự sống, trân trọng từng khoảnh khắc thanh xuân rực rỡ khi "mặt trời chưa xế tây".',
      'Tính chuẩn xác sử liệu: Không áp đặt các tư tưởng hiện đại khiên cưỡng; bài thơ thể hiện trọn vẹn tinh thần lạc quan, thịnh trị của thời đại Lê Thánh Tông.'
    ],
    speakerNotes: 'Về chủ đề tác phẩm: "Xuân Yến" là bài thơ ngợi ca cảnh sắc mùa xuân thanh tao đồng thời giãi bày nỗi lòng say đắm trước cuộc đời. Qua đó, ta thấy được chân dung tinh thần của Đỗ Cận: một nhân cách nho nhã, một tâm hồn nghệ sĩ tinh tế biết trân quý thời gian tươi đẹp của đời người và của đất nước.'
  },
  {
    id: 14,
    slideNumber: 14,
    category: 'Phân tích',
    title: 'GIÁ TRỊ NỘI DUNG SÂU SẮC',
    subtitle: 'Bốn giá trị tiêu biểu được chứng minh qua thi liệu tác phẩm',
    bulletPoints: [
      '1. Tình yêu thiên nhiên trong sáng: Cảm nhận được cả làn gió thoảng nhẹ (phong vi) và hương thơm tiềm ẩn trong bùn đất xuân (hương nê).',
      '2. Niềm say mê sự sống và khát vọng hạnh phúc: Hình ảnh cánh én xây tổ biểu đạt niềm ước ao cuộc sống ấm no, sum vầy bình dị.',
      '3. Vẻ đẹp nhân cách của bậc trí thức nho gia: Lánh xa sự ồn ào danh lợi, tìm thấy niềm vui thanh khiết nơi chốn thanh trai sách đèn.',
      '4. Âm hưởng lạc quan của thời thịnh trị: Khí sắc mùa xuân rạng rỡ phản ánh niềm tin yêu vào tương lai thái bình dưới triều vua Lê Thánh Tông.'
    ],
    speakerNotes: 'Về giá trị nội dung, tác phẩm tỏa sáng ở 4 góc độ: tình yêu thiên nhiên gắn liền với cảm quan thẩm mỹ tinh tế; khát vọng xây đắp tổ ấm thanh bình; nhân cách thanh cao của bậc nho sĩ; và trên hết là âm hưởng lạc quan của một thời đại thịnh trị. Từng chữ từng câu đều toát lên một tinh thần lành mạnh, tràn đầy niềm vui sống.'
  },
  {
    id: 15,
    slideNumber: 15,
    category: 'Phân tích',
    title: 'GIÁ TRỊ NGHỆ THUẬT ĐẶC SẮC',
    subtitle: 'Đỉnh cao thi pháp thơ chữ Hán trung đại Việt Nam',
    bulletPoints: [
      'Thể thơ Đường luật mực thước: Thất ngôn tứ tuyệt niêm luật chặt chẽ, đối ngẫu ẩn tàng, thanh điệu hài hòa uyển chuyển.',
      'Ngôn ngữ Hán văn hàm súc: Chỉ vẻn vẹn 28 chữ nhưng cô đọng cả một không gian hội họa và tâm trạng dào dạt.',
      'Bút pháp "Lấy động tả tĩnh": Dùng làn gió nhẹ, cánh én ngậm bùn để làm nổi bật sự tĩnh mịch, an nhiên nơi khung cửa sổ xanh.',
      'Nghệ thuật "Tả cảnh ngụ tình": Cảnh xuân bên ngoài khêu gợi và cộng hưởng với "xuân tâm" nồng nàn bên trong tâm hồn người viết.'
    ],
    speakerNotes: 'Nói về nghệ thuật, "Xuân Yến" là viên ngọc quý của thể thơ tứ tuyệt chữ Hán. Với chỉ 28 chữ Hán mực thước, Đỗ Cận đã vận dụng tài tình các thủ pháp thi pháp cổ điển: thi trung hữu họa (trong thơ có họa), lấy động tả tĩnh, tả cảnh ngụ tình. Ngôn từ trang nhã mà không sáo rỗng, giàu sức gợi cảm vô cùng.'
  },
  {
    id: 16,
    slideNumber: 16,
    category: 'Tổng kết & Di sản',
    title: 'TỔNG KẾT ĐẶC SẮC TÁC PHẨM “XUÂN YẾN”',
    subtitle: 'Sơ đồ liên kết ba trục giá trị: Nội dung – Nghệ thuật – Di sản',
    bulletPoints: [
      'TRỤC NỘI DUNG: Thiên nhiên mùa xuân tươi tắn → Cánh én tha bùn thơm xây tổ ấm → Lòng xuân rạo rực yêu đời.',
      'TRỤC NGHỆ THUẬT: Thất ngôn tứ tuyệt Đường luật mực thước → Ngôn từ hàm súc tinh lọc → Bút pháp thi họa giao hòa.',
      'TRỤC GIÁ TRỊ LỊCH SỬ & ĐỊA PHƯƠNG: Văn bản tiêu biểu trong "Toàn Việt thi lục" → Tác phẩm Hán Nôm đỉnh cao của danh nhân quê Thái Nguyên.',
      'ĐÁNH GIÁ CHUNG: Tác phẩm vừa mang tầm vóc của thơ ca bác học cung đình thời Hồng Đức, vừa gần gũi với phong cảnh hồn hậu của làng quê Việt Nam.'
    ],
    speakerNotes: 'Slide 16 tổng hợp toàn bộ bài học qua mô hình 3 trục: Nội dung, Nghệ thuật và Giá trị. Nhìn vào sơ đồ, chúng ta dễ dàng nhận thấy sự cân đối hài hòa: cảnh xuân tươi sáng dẫn dắt cho tình xuân rạo rực; ngôn từ điêu luyện nâng đỡ cho chiều sâu tư tưởng. Đây thực sự là một kiệt tác thơ ngắn trong di sản văn học Hán Nôm của dân tộc.'
  },
  {
    id: 17,
    slideNumber: 17,
    category: 'Tổng kết & Di sản',
    title: 'ĐỖ CẬN VÀ QUÊ HƯƠNG THÁI NGUYÊN',
    subtitle: 'Biểu tượng tự hào của vùng đất Phổ Yên và truyền thống khoa cử xứ Thái',
    bulletPoints: [
      'Chuỗi kế thừa: ĐỖ CẬN (1434) → Thôn Thống Thượng → Phổ Yên → Thái Nguyên → Truyền thống khoa bảng phương Bắc.',
      'Đền thờ Đỗ Cận: Tọa lạc tại phường Hồng Tiến / xã Minh Đức, TP. Phổ Yên – di tích lịch sử văn hóa cấp Quốc gia/Tỉnh được xếp hạng, lưu giữ văn bia ghi nhớ công đức.',
      'Vinh danh đời đời: Tên của danh nhân Đỗ Cận được đặt cho trường học, đường phố trung tâm tại TP. Phổ Yên và tỉnh Thái Nguyên.',
      'Ý nghĩa giáo dục: Là ngọn cờ đầu thúc đẩy tinh thần hiếu học, khuyến học, khuyến tài của bao thế hệ thanh thiếu niên tỉnh nhà.'
    ],
    speakerNotes: 'Mối liên hệ giữa Đỗ Cận và quê hương Thái Nguyên là sợi chỉ đỏ xuyên suốt. Từ mảnh đất Thống Thượng nghèo khó, ông đã vươn lên đỉnh cao khoa bảng, trở thành Tiến sĩ đầu tiên ghi danh trên bia đá Văn Miếu của vùng đất này. Ngày nay, Đền thờ Đỗ Cận tại Phổ Yên và các ngôi trường mang tên ông chính là minh chứng sống động cho sự tri ân của hậu thế.'
  },
  {
    id: 18,
    slideNumber: 18,
    category: 'Tổng kết & Di sản',
    title: 'GIÁ TRỊ LỊCH SỬ VÀ BẢO TỒN DI SẢN HÁN NÔM',
    subtitle: 'Trách nhiệm của thế hệ trẻ đối với di sản văn hóa tiền nhân',
    bulletPoints: [
      'Khẳng định vị thế: Đỗ Cận chứng minh rằng Thái Nguyên thời trung đại không chỉ là phên dậu quân sự mà còn là trung tâm văn hóa, có trí thức đỗ đạt tham gia vào bộ máy lãnh đạo trung ương.',
      'Giá trị của di sản Hán Nôm: Tác phẩm "Xuân Yến" là nguồn sử liệu văn học chân thực, bổ sung cho bức tranh toàn cảnh văn học triều Lê sơ.',
      'Công tác bảo tồn: Cần tiếp tục sưu tầm, dịch thuật, số hóa các bản khắc văn bia, thần tích, thơ văn Hán Nôm tại địa phương.',
      'Hành động của học sinh: Tìm hiểu văn học địa phương không chỉ để thi cử, mà là để hiểu rõ cội rễ văn hóa, bồi đắp lòng tự hào và trách nhiệm công dân.'
    ],
    speakerNotes: 'Việc nghiên cứu Đỗ Cận và tác phẩm "Xuân Yến" giúp chúng ta nhận ra rằng: di sản Hán Nôm không hề xa vời, mà hiện diện ngay trên quê hương chúng ta qua từng tấm bia, từng bài thơ cổ. Bảo tồn di sản này chính là gìn giữ linh hồn văn hóa của quê hương Thái Nguyên.'
  },
  {
    id: 19,
    slideNumber: 19,
    category: 'Thảo luận',
    title: 'CÂU HỎI THẢO LUẬN TƯƠNG TÁC TRÊN LỚP',
    subtitle: 'Củng cố kiến thức và phát triển tư duy phản biện cho học sinh',
    bulletPoints: [
      'Câu 1: Đỗ Cận là ai và những đóng góp nổi bật của ông đối với đất nước và quê hương Thái Nguyên?',
      'Câu 2: Vì sao hình tượng cánh én ("xuân yến") ngậm bùn thơm lại giữ vai trò trung tâm trong bài thơ?',
      'Câu 3: Nhan đề “Xuân Yến” gợi cho bạn những liên tưởng và thông điệp thẩm mỹ nào?',
      'Câu 4: Thiên nhiên trong bài thơ có mối quan hệ như thế nào với cảm xúc của tác giả Đỗ Cận?',
      'Câu 5: Việc tìm hiểu tác phẩm này giúp chúng ta nhận thức được điều gì về văn hóa và văn học địa phương Thái Nguyên?'
    ],
    speakerNotes: 'Đến phần thảo luận, nhóm chúng em xin được đưa ra 5 câu hỏi trọng tâm để cả lớp cùng trao đổi. Các bạn có thể nhấp vào từng câu hỏi trên màn hình để cùng thảo luận và đối chiếu với gợi ý đáp án chuẩn mực.'
  },
  {
    id: 20,
    slideNumber: 20,
    category: 'Tổng kết & Di sản',
    title: 'KẾT LUẬN & THÔNG ĐIỆP Ý NGHĨA',
    subtitle: 'Đỗ Cận – Danh nhân văn hóa bất tử cùng mùa xuân quê hương',
    bulletPoints: [
      'KHÁI QUÁT: ĐỖ CẬN – Vị đại khoa ưu tú của quê hương Thái Nguyên, sứ thần tài ba thời Lê Thánh Tông.',
      'TÁC PHẨM: “XUÂN YẾN” – Bài thơ tứ tuyệt tuyệt tác trong "Toàn Việt thi lục", hội tụ vẻ đẹp thiên nhiên và tấm lòng nhân ái.',
      'GIÁ TRỊ TRƯỜNG TỒN: Kết tinh hài hòa giữa vẻ đẹp cảnh sắc, nghệ thuật Đường luật chuẩn mực và niềm tự hào văn hiến xứ Thái.',
      'THÔNG ĐIỆP BÀI HỌC: "Tìm hiểu văn học địa phương không chỉ là tìm hiểu một tác phẩm, mà còn là khám phá lịch sử, văn hóa và những giá trị nhân văn cao đẹp được lưu giữ qua nhiều thế hệ."'
    ],
    speakerNotes: 'Để kết lại bài thuyết trình, chúng em xin trích dẫn thông điệp tâm đắc: "Tìm hiểu văn học địa phương không chỉ là tìm hiểu một tác phẩm, mà còn là khám phá lịch sử, văn hóa và những giá trị nhân văn cao đẹp được các bậc tiền nhân trao truyền qua nhiều thế hệ." Xin chân thành cảm ơn thầy cô và các bạn đã chú ý lắng nghe!'
  },
  {
    id: 21,
    slideNumber: 21,
    category: 'Nguồn',
    title: 'TÀI LIỆU THAM KHẢO CHÍNH THỐNG',
    subtitle: 'Nguồn tư liệu thư tịch học thuật và cơ quan nghiên cứu uy tín',
    bulletPoints: [
      '1. Bác học Lê Quý Đôn (1726 – 1784), "Toàn Việt thi lục" (全越詩錄) – Bản lưu giữ tại Viện Nghiên cứu Hán Nôm, Hà Nội.',
      '2. Quốc sử quán triều Hậu Lê, "Đại Việt sử ký toàn thư" (bản kỷ thực lục, triều vua Lê Thánh Tông, năm 1478 & 1483).',
      '3. Cổng thông tin điện tử tỉnh Thái Nguyên (thainguyen.gov.vn) – Mục Di sản danh nhân văn hóa lịch sử Đỗ Cận.',
      '4. Báo Thái Nguyên – Loạt bài chuyên đề về "Tiến sĩ Đỗ Cận và di tích Đền thờ Đỗ Cận tại thị xã/thành phố Phổ Yên".',
      '5. Tài liệu Giáo dục địa phương tỉnh Thái Nguyên – Phần Văn học & Lịch sử văn hóa các dòng họ khoa bảng.',
      '6. Viện Nghiên cứu Hán Nôm – Các công trình khảo cứu văn bia Tiến sĩ Văn Miếu Quốc Tử Giám Hà Nội (Khoa thi Mậu Tuất 1478).'
    ],
    speakerNotes: 'Cuối cùng, đây là danh mục tài liệu tham khảo chính thống được nhóm đối chiếu nghiêm túc từ các nguồn uy tín: từ Toàn Việt thi lục của Bác học Lê Quý Đôn, Đại Việt sử ký toàn thư đến các tư liệu chính thống của Cổng TTĐT tỉnh Thái Nguyên và Viện Nghiên cứu Hán Nôm. Nhóm cam kết không sử dụng thông tin sai lệch hay chưa kiểm chứng.'
  }
];
