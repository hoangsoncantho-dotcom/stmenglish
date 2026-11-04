/**
 * =========================================================================
 * STM ENGLISH - SECTION-BASED EXAM BUILDER & STANDALONE HTML COMPILER
 * Module Quản trị Đề Thi Khối Trực Quan (Section-based Builder)
 * Biên dịch Đề Thi thành file HTML Độc Lập chuẩn mẫu de901_gk1_2627.html
 * =========================================================================
 */

// Dữ liệu mẫu 40 câu chuẩn Cần Thơ (Đề số 03)
const STANDARD_40_DATA = {
    info: {
        code: "anh9-giuaky1",
        title: "Đề Kiểm Tra Giữa Kỳ 1 (2026–2027) • Đề Số 03 – Tiếng Anh 9",
        desc: "Đề thi khảo sát năng lực 40 câu chuẩn Sở GD&ĐT Cần Thơ (Gồm Listening, Multiple Choice, Cloze test, Reading và Tự luận trắc nghiệm hóa 100%).",
        grade: "9",
        duration: 60,
        fullAudio: "03_De_03_Listening_Full_Audio.mp3"
    },
    sections: [
        {
            title: "PHẦN I: LISTENING (NGHE HIỂU)",
            badge: "Part 1. Short Conversation",
            type: "listening",
            audioTrack: "03_De_03_Track_1_Green_Neighborhood.mp3",
            instruction: "Bài nghe 1: CONVERSATION (Track 1) - Listen to the conversation. Choose the correct answer A, B, C, or D for each question. (Em được nghe 2 lần).",
            questions: [
                {
                    tag: "Listening Comprehension",
                    question: "What was the main activity of the \"Green Neighborhood\" project last weekend?",
                    optA: "Painting classroom walls",
                    optB: "Cleaning up trash and planting trees along the canal",
                    optC: "Selling handicrafts to tourists",
                    optD: "Repairing old street lamps",
                    correct: "B",
                    explanation: "Chọn B — Dẫn chứng Track 1: 'Volunteers cleaned up trash and planted over 50 trees along the local canal.'"
                },
                {
                    tag: "Listening Comprehension",
                    question: "How many volunteers participated in the community event?",
                    optA: "Around thirty volunteers",
                    optB: "Over fifty volunteers",
                    optC: "Exactly one hundred volunteers",
                    optD: "Nearly eighty volunteers",
                    correct: "B",
                    explanation: "Chọn B — Dẫn chứng Track 1: 'More than 50 active teenagers and residents joined enthusiastically.'"
                },
                {
                    tag: "Listening Comprehension",
                    question: "What items were donated to the primary pupils?",
                    optA: "Laptops and smart tablets",
                    optB: "Sports shoes and winter jackets",
                    optC: "Recycled notebooks and stationery sets",
                    optD: "Bicycles and helmets",
                    correct: "C",
                    explanation: "Chọn C — Dẫn chứng Track 1: 'They gave away 200 recycled notebooks and stationery sets.'"
                },
                {
                    tag: "Listening Comprehension",
                    question: "What will the club organize next month?",
                    optA: "A music concert for charity",
                    optB: "An electronic waste collection campaign",
                    optC: "A marathon around the city center",
                    optD: "A traditional food cooking contest",
                    correct: "B",
                    explanation: "Chọn B — Dẫn chứng Track 1: 'Next month, we are launching an electronic waste collection drive.'"
                }
            ]
        },
        {
            title: "PHẦN I: LISTENING (NGHE HIỂU)",
            badge: "Part 2. Talk / Presentation",
            type: "listening",
            audioTrack: "03_De_03_Track_2_Screen_Time_And_Sleep.mp3",
            instruction: "Bài nghe 2: TALK / PRESENTATION (Track 2) - Listen to a talk about screen time and teenagers' sleep. Choose the best answer A, B, C, or D. (Em được nghe 2 lần).",
            questions: [
                {
                    tag: "Listening Comprehension",
                    question: "What percentage of secondary school students admit to taking smartphones to bed?",
                    optA: "Over seventy percent",
                    optB: "Around twenty percent",
                    optC: "Nearly forty percent",
                    optD: "Exactly ninety-five percent",
                    correct: "A",
                    explanation: "Chọn A — Dẫn chứng Track 2: 'A recent survey revealed that over 70% of middle school pupils take smartphones to bed.'"
                },
                {
                    tag: "Listening Comprehension",
                    question: "How does blue light from electronic devices affect adolescents?",
                    optA: "It improves their memory retention.",
                    optB: "It delays the production of melatonin.",
                    optC: "It cures chronic eye fatigue.",
                    optD: "It stimulates deeper REM sleep.",
                    correct: "B",
                    explanation: "Chọn B — Dẫn chứng Track 2: 'Blue light delays melatonin production, tricking the brain into staying awake.'"
                },
                {
                    tag: "Listening Comprehension",
                    question: "What health consequence is directly linked to chronic sleep deprivation?",
                    optA: "Better academic performance",
                    optB: "Decreased anxiety and mood swings",
                    optC: "Weakened immune system and daytime fatigue",
                    optD: "Faster physical growth",
                    correct: "C",
                    explanation: "Chọn C — Dẫn chứng Track 2: 'Sleep debt leads to daytime fatigue and a significantly weakened immune system.'"
                },
                {
                    tag: "Listening Comprehension",
                    question: "What practical recommendation is suggested by pediatric doctors?",
                    optA: "Turn off all screens at least 45 minutes before bedtime",
                    optB: "Charge phones right next to the pillow",
                    optC: "Play video games to relax before sleeping",
                    optD: "Check email every hour during nighttime",
                    correct: "A",
                    explanation: "Chọn A — Dẫn chứng Track 2: 'Doctors recommend turning off all screens at least 45 minutes prior to sleep.'"
                }
            ]
        },
        {
            title: "PHẦN II: MULTIPLE CHOICE (TRẮC NGHIỆM)",
            badge: "Language Focus & Communication",
            type: "multiple_choice",
            instruction: "Choose the word or phrase (A, B, C, or D) that best fits each blank.",
            questions: [
                {
                    tag: "Vocabulary",
                    question: "Our city council has decided to ________ ancient monuments to attract more international tourists.",
                    optA: "preserve", optB: "demolish", optC: "pollute", optD: "discard",
                    correct: "A",
                    explanation: "Chọn A — 'preserve' (bảo tồn di tích cổ)."
                },
                {
                    tag: "Phrasal Verb",
                    question: "It is crucial for teenagers to ________ junk food and sugary drinks to prevent obesity.",
                    optA: "cut down on", optB: "keep up with", optC: "run out of", optD: "look forward to",
                    correct: "A",
                    explanation: "Chọn A — 'cut down on' (cắt giảm tiêu thụ đồ ăn vặt)."
                },
                {
                    tag: "Grammar: Question Word + To-Infinitive",
                    question: "Minh was not sure ________ to talk to when he experienced severe exam anxiety.",
                    optA: "what", optB: "who", optC: "why", optD: "which",
                    correct: "B",
                    explanation: "Chọn B — 'who to talk to' (nói chuyện với ai khi căng thẳng)."
                },
                {
                    tag: "Grammar: Double Comparative",
                    question: "The more regularly you exercise, ________ your immune system becomes.",
                    optA: "the stronger", optB: "stronger", optC: "the more strong", optD: "the strongest",
                    correct: "A",
                    explanation: "Chọn A — Cấu trúc so sánh kép: 'The + comparative + S + V, the + comparative + S + V'."
                },
                {
                    tag: "Grammar: Comparison of Adverbs",
                    question: "Thanks to modern electric trains, commuters can travel ________ than before.",
                    optA: "more fast", optB: "faster", optC: "more quickly", optD: "most quickly",
                    correct: "C",
                    explanation: "Chọn C — 'travel more quickly' (di chuyển nhanh hơn)."
                },
                {
                    tag: "Everyday Communication",
                    question: "Lan: \"Why don't we join the Green Neighborhood clean-up project this Sunday?\" - Hoa: \"________\"",
                    optA: "Count me in! That sounds really meaningful.",
                    optB: "You're welcome.",
                    optC: "No, I don't.",
                    optD: "Thanks, I am full.",
                    correct: "A",
                    explanation: "Chọn A — Giao tiếp: 'Count me in!' (Cho mình tham gia với!)."
                },
                {
                    tag: "Everyday Communication",
                    question: "Tom: \"I feel overwhelmed because of upcoming midterm examinations.\" - Doctor: \"________\"",
                    optA: "You should make a study timetable and take short breaks.",
                    optB: "Congratulations on your prize!",
                    optC: "Never mind, it's not my exam.",
                    optD: "I'm sorry you passed.",
                    correct: "A",
                    explanation: "Chọn A — Đưa ra lời khuyên thiết thực giúp giảm stress."
                },
                {
                    tag: "Signs & Notices",
                    qType: "notice",
                    noticeText: "COMMUNITY HEALTH WORKSHOP\nDate: Saturday, October 28\nRoom: 302 Main Campus\n* Note: Please register before Thursday to secure free educational materials.",
                    question: "What does this notice tell participants to do?",
                    optA: "Sign up early to receive learning materials.",
                    optB: "Pay admission fees at the entrance.",
                    optC: "Bring their own textbooks to the workshop.",
                    optD: "Attend the session only on Sunday.",
                    correct: "A",
                    explanation: "Chọn A — Thông báo yêu cầu đăng ký trước thứ Năm để giữ tài liệu miễn phí."
                },
                {
                    tag: "Signs & Notices",
                    qType: "sign",
                    signImg: "./signs/school_zone_slow_down.png",
                    question: "What does this traffic sign mean?",
                    optA: "Drivers must slow down because children may be crossing.",
                    optB: "Vehicles are permitted to park here all day.",
                    optC: "Bicycles are not allowed in this area.",
                    optD: "Pedestrians must not cross the street.",
                    correct: "A",
                    explanation: "Chọn A — Biển báo khu vực trường học: lái xe phải giảm tốc độ."
                },
                {
                    tag: "Closest Meaning",
                    question: "\"Where should I submit my English essay?\" Nam asked his teacher.",
                    optA: "Nam asked his teacher where to submit his English essay.",
                    optB: "Nam asked his teacher what to submit his English essay.",
                    optC: "Nam asked his teacher whether to submit his essay.",
                    optD: "Nam asked his teacher where he submits his English essay.",
                    correct: "A",
                    explanation: "Chọn A — Chuyển câu hỏi Wh- sang dạng rút gọn Wh-word + to V: 'where to submit'."
                },
                {
                    tag: "Sentence Combining",
                    question: "She practiced speaking English every single day. She scored 8.0 on her IELTS test.",
                    optA: "Because she practiced speaking English every single day, she scored 8.0 on her IELTS test.",
                    optB: "Although she practiced speaking English, she failed the test.",
                    optC: "She scored 8.0 on IELTS so that she practiced speaking English.",
                    optD: "She practiced speaking English every day, but she scored 8.0.",
                    correct: "A",
                    explanation: "Chọn A — Mối quan hệ nguyên nhân - kết quả (Because)."
                },
                {
                    tag: "Sentence Arrangement",
                    qType: "arrangement",
                    arrangement: "a. What time does the workshop begin?\nb. That sounds fantastic! I really want to learn how to manage study stress.\nc. Our school youth club is organizing a time management workshop this Saturday.\nd. It starts at 8:30 a.m. in the main hall.\ne. Great, I'll see you there on Saturday morning!",
                    question: "Arrange the following sentences to make a complete conversation:",
                    optA: "c - b - a - d - e",
                    optB: "c - a - b - d - e",
                    optC: "a - c - b - d - e",
                    optD: "c - b - d - a - e",
                    correct: "A",
                    explanation: "Chọn A — Trật tự: c (Giới thiệu workshop) -> b (Hào hứng hưởng ứng) -> a (Hỏi giờ bắt đầu) -> d (Trả lời 8:30) -> e (Chốt hẹn gặp)."
                },
                {
                    tag: "Sentence Arrangement",
                    qType: "arrangement",
                    arrangement: "a. Street sanitation workers play a vital role in every community.\nb. They wake up before dawn to sweep streets and clear trash bins.\nc. Thanks to their relentless efforts, our neighborhood stays fresh and clean.\nd. Therefore, residents should show gratitude by sorting domestic waste properly.",
                    question: "Arrange the following sentences to make a coherent paragraph:",
                    optA: "a - b - c - d",
                    optB: "b - a - c - d",
                    optC: "a - c - b - d",
                    optD: "c - b - a - d",
                    correct: "A",
                    explanation: "Chọn A — Trật tự: a (Nêu vai trò) -> b (Mô tả công việc sáng sớm) -> c (Kết quả sạch đẹp) -> d (Lời kêu gọi ý thức)."
                }
            ]
        },
        {
            title: "PHẦN II: MULTIPLE CHOICE (TRẮC NGHIỆM)",
            badge: "Cloze-test (Reading)",
            type: "reading",
            passage: "<b>ĐỌC ĐOẠN VĂN SAU VÀ CHỌN TỪ THÍCH HỢP ĐIỀN VÀO CHỖ TRỐNG (CÂU 22 - 26):</b><br><br>Living in a big city provides numerous modern conveniences, but it also presents notable challenges for adolescents. Urban teenagers have access to prestigious educational centers, cutting-edge sports facilities, and vibrant cultural entertainment. (22)______, high living costs and chronic traffic congestion frequently cause significant daily stress. During morning rush hours, thousands of commuters struggle to navigate overcrowded streets, releasing dense carbon fumes (23)______ the atmosphere. To combat urban pollution, municipal authorities are actively expanding electric bus routes and pedestrian walkways. Furthermore, community centers now offer after-school clubs to help teens (24)______ healthy relationships with peers. Psychologists suggest that balancing academic revision with outdoor physical exercises helps students maintain a (25)______ state of mental well-being. If city dwellers (26)______ public transportation more often, our urban environment will become significantly cleaner and more liveable for future generations.",
            questions: [
                {
                    tag: "Cloze-test",
                    question: "Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống <b>(22)</b>:",
                    optA: "However", optB: "Therefore", optC: "Moreover", optD: "Although",
                    correct: "A",
                    explanation: "Chọn A — 'However' thể hiện sự tương phản giữa tiện nghi và thách thức."
                },
                {
                    tag: "Cloze-test",
                    question: "Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống <b>(23)</b>:",
                    optA: "into", optB: "at", optC: "with", optD: "from",
                    correct: "A",
                    explanation: "Chọn A — 'releasing fumes into the atmosphere' (thải khí vào bầu khí quyển)."
                },
                {
                    tag: "Cloze-test",
                    question: "Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống <b>(24)</b>:",
                    optA: "build", optB: "ruin", optC: "ignore", optD: "postpone",
                    correct: "A",
                    explanation: "Chọn A — 'help teens build healthy relationships' (xây dựng mối quan hệ lành mạnh)."
                },
                {
                    tag: "Cloze-test",
                    question: "Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống <b>(25)</b>:",
                    optA: "balanced", optB: "depressed", optC: "hostile", optD: "chaotic",
                    correct: "A",
                    explanation: "Chọn A — 'a balanced state of mental well-being' (trạng thái tâm lý cân bằng)."
                },
                {
                    tag: "Cloze-test",
                    question: "Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống <b>(26)</b>:",
                    optA: "use", optB: "used", optC: "will use", optD: "had used",
                    correct: "A",
                    explanation: "Chọn A — Câu điều kiện loại 1: 'If + S + V(hiện tại đơn), S + will + V'."
                }
            ]
        },
        {
            title: "PHẦN II: MULTIPLE CHOICE (TRẮC NGHIỆM)",
            badge: "Reading Comprehension",
            type: "reading",
            passage: "<b>ĐỌC ĐOẠN VĂN SAU VÀ CHỌN CÂU TRẢ LỜI ĐÚNG NHẤT (CÂU 27 - 31):</b><br><br><b>PRESERVING ARTISANAL HERITAGE IN THE DIGITAL ERA</b><br><br>For over four centuries, the artisan village of Bat Trang, situated on the outskirts of Hanoi, has been celebrated across Southeast Asia for its exquisite handcrafted ceramics. Historically, mastery of glazing and kiln firing techniques was passed down strictly through family lineage, ensuring that every porcelain vase and bowl embodied unique artistic identity. However, the rapid emergence of industrialized mass production during the late twentieth century posed an existential threat to these traditional workshops, as cheaper machine-molded replicas flooded domestic and international markets.<br><br>Rather than surrendering to modern competition, a new generation of younger Vietnamese potters has spearheaded an inspiring cultural renaissance. By integrating digital marketing, 3D printing for prototype molding, and opening interactive pottery workshops for international visitors, they have transformed Bat Trang into a bustling cultural destination. Tourism revenue not only provides sustainable income for local craft families but also fosters profound national pride among youths. Preserving traditional craft villages is not simply about safeguarding antique techniques; it is about keeping the ancestral soul and cultural resilience of Vietnam thriving in an interconnected global community.",
            questions: [
                {
                    tag: "Reading Comprehension",
                    question: "What is the primary topic of the passage?",
                    optA: "The revival and preservation of Bat Trang traditional pottery in modern times",
                    optB: "The history of machine-molded ceramics in Hanoi",
                    optC: "Why manual pottery is inferior to modern mass factory production",
                    optD: "The daily routine of elderly craft artisans in Vietnam",
                    correct: "A",
                    explanation: "Chọn A — Toàn bộ bài đọc nói về sự phục hưng và gìn giữ làng gốm Bát Tràng trong thời đại số."
                },
                {
                    tag: "Reading Comprehension",
                    question: "According to paragraph 1, how were pottery techniques traditionally transmitted?",
                    optA: "Through vocational public universities",
                    optB: "Exclusively through strict family lineage",
                    optC: "Through international exchange programs",
                    optD: "Via commercial printed books",
                    correct: "B",
                    explanation: "Chọn B — Dẫn chứng Đoạn 1: 'mastery of glazing and kiln firing techniques was passed down strictly through family lineage'."
                },
                {
                    tag: "Reading Comprehension",
                    question: "The word \"threat\" in paragraph 1 is closest in meaning to:",
                    optA: "danger", optB: "benefit", optC: "advantage", optD: "opportunity",
                    correct: "A",
                    explanation: "Chọn A — 'threat' nghĩa là mối đe dọa, nguy cơ = 'danger'."
                },
                {
                    tag: "Reading Comprehension",
                    question: "What innovative measure did the younger generation introduce to promote Bat Trang?",
                    optA: "Shutting down the workshops to relocate abroad",
                    optB: "Combining digital marketing, 3D prototypes, and experiential workshops",
                    optC: "Replacing handcrafted clay completely with plastic replicas",
                    optD: "Banning international tourists from visiting the village",
                    correct: "B",
                    explanation: "Chọn B — Dẫn chứng Đoạn 2: 'integrating digital marketing, 3D printing for prototype molding, and opening interactive pottery workshops'."
                },
                {
                    tag: "Reading Comprehension",
                    question: "Which of the following statements is NOT supported by the passage?",
                    optA: "Industrial mass production completely destroyed Bat Trang village in the 20th century.",
                    optB: "Bat Trang ceramic products have been famous for centuries.",
                    optC: "Tourism revenue contributes to sustainable income for local households.",
                    optD: "Preserving traditional crafts helps sustain cultural identity.",
                    correct: "A",
                    explanation: "Chọn A — Đoạn văn nêu thế hệ trẻ đã vực dậy làng gốm thành công chứ không bị hủy diệt hoàn toàn."
                }
            ]
        },
        {
            title: "PHẦN III: WRITTEN TEST (TỰ LUẬN TRẮC NGHIỆM HÓA)",
            badge: "Word Formation & Transformation",
            type: "written",
            instruction: "Phần tự luận được trắc nghiệm hóa 100% theo chuẩn khảo thí tự động. Chọn phương án chính xác nhất.",
            questions: [
                {
                    tag: "Word Formation",
                    question: "Regular physical exercise is ________ beneficial for mental health. (ENORMOUS)",
                    optA: "enormously", optB: "enormous", optC: "enormity", optD: "enormousness",
                    correct: "A",
                    explanation: "Chọn A — Cần trạng từ (Adv) bổ nghĩa cho tính từ 'beneficial': enormously."
                },
                {
                    tag: "Word Formation",
                    question: "The city council plans to ________ the old residential boulevard. (MODERN)",
                    optA: "modernize", optB: "modern", optC: "modernization", optD: "modernly",
                    correct: "A",
                    explanation: "Chọn A — Cần động từ nguyên mẫu sau 'plans to': modernize (hiện đại hóa)."
                },
                {
                    tag: "Word Formation",
                    question: "Many teenagers experience acute ________ due to heavy school workloads. (ANXIOUS)",
                    optA: "anxiety", optB: "anxious", optC: "anxiously", optD: "anxiousness",
                    correct: "A",
                    explanation: "Chọn A — Cần danh từ sau tính từ 'acute': anxiety (sự lo âu)."
                },
                {
                    tag: "Sentence Transformation",
                    question: "Rewrite using Question Word + To-Infinitive: \"I have no idea where I should purchase reliable local handicrafts.\"",
                    optA: "I have no idea where to purchase reliable local handicrafts.",
                    optB: "I have no idea what to purchase reliable local handicrafts.",
                    optC: "I have no idea where purchasing reliable local handicrafts.",
                    optD: "I have no idea how purchasing reliable local handicrafts.",
                    correct: "A",
                    explanation: "Chọn A — 'where I should purchase' -> 'where to purchase'."
                },
                {
                    tag: "Sentence Transformation",
                    question: "Rewrite using Phrasal Verb: \"You should reduce the amount of salt in your daily meals.\" (DOWN)",
                    optA: "You should cut down on the amount of salt in your daily meals.",
                    optB: "You should look down on the amount of salt in your daily meals.",
                    optC: "You should turn down the amount of salt in your daily meals.",
                    optD: "You should put down on the amount of salt in your daily meals.",
                    correct: "A",
                    explanation: "Chọn A — 'reduce' = 'cut down on'."
                },
                {
                    tag: "Sentence Transformation",
                    question: "Rewrite using Double Comparative: \"As you practice more speaking, you will feel more confident.\"",
                    optA: "The more speaking you practice, the more confident you will feel.",
                    optB: "The more you practice speaking, the confident you will feel.",
                    optC: "More you practice speaking, more confident you will feel.",
                    optD: "The most you practice speaking, the most confident you will feel.",
                    correct: "A",
                    explanation: "Chọn A — Cấu trúc 'The more... the more...'."
                },
                {
                    tag: "Sentence Building",
                    question: "Build a complete sentence: If / municipal / council / invest / green / buses / air pollution / drop.",
                    optA: "If the municipal council invests in green buses, air pollution will drop significantly.",
                    optB: "If municipal council invest in green buses, air pollution drop significantly.",
                    optC: "If the municipal council will invest in green buses, air pollution drops.",
                    optD: "If the municipal council invested in green buses, air pollution will drop.",
                    correct: "A",
                    explanation: "Chọn A — Câu điều kiện loại 1 hoàn chỉnh với mạo từ và giới từ."
                },
                {
                    tag: "Sentence Building",
                    question: "Build a complete sentence: Although / living costs / be / high / city / attract / millions / youths.",
                    optA: "Although living costs are high, the city attracts millions of ambitious youths.",
                    optB: "Although living costs is high, city attract millions of youths.",
                    optC: "Because living costs are high, the city attracts millions of youths.",
                    optD: "Although living costs are high, but the city attracts youths.",
                    correct: "A",
                    explanation: "Chọn A — Mệnh đề nhượng bộ 'Although' (không dùng 'but')."
                },
                {
                    tag: "Sentence Building",
                    question: "Build a complete sentence: She / look forward to / participate / traditional pottery / workshop / next Sunday.",
                    optA: "She is looking forward to participating in the traditional pottery workshop next Sunday.",
                    optB: "She looks forward to participate in traditional pottery workshop next Sunday.",
                    optC: "She is looking forward to participate on the pottery workshop next Sunday.",
                    optD: "She look forward to participating in the traditional pottery workshop.",
                    correct: "A",
                    explanation: "Chọn A — Cấu trúc 'look forward to + V-ing' + giới từ 'in'."
                }
            ]
        }
    ]
};

let currentExamDraft = {
    info: {
        code: "anh9-giuaky1",
        title: "Đề Kiểm Tra Giữa Kỳ 1 (2026–2027) • Đề Số 03 – Tiếng Anh 9",
        desc: "Đề thi khảo sát năng lực 40 câu chuẩn Sở GD&ĐT Cần Thơ (Gồm Listening, Multiple Choice, Cloze test, Reading và Tự luận trắc nghiệm hóa 100%).",
        grade: "9",
        duration: 60,
        fullAudio: "03_De_03_Listening_Full_Audio.mp3"
    },
    sections: []
};

let sectionIdSeq = 0;

function initExamBuilder() {
    if (!currentExamDraft.sections || currentExamDraft.sections.length === 0) {
        loadSampleStandard40();
    } else {
        renderExamInfo();
        renderSectionBuilder();
    }
}

function renderExamInfo() {
    const info = currentExamDraft.info;
    const codeEl = document.getElementById('examCode');
    if (codeEl) codeEl.value = info.code || '';
    const titleEl = document.getElementById('examTitle');
    if (titleEl) titleEl.value = info.title || '';
    const descEl = document.getElementById('examDesc');
    if (descEl) descEl.value = info.desc || '';
    const gradeEl = document.getElementById('examGrade');
    if (gradeEl) gradeEl.value = info.grade || '9';
    const durEl = document.getElementById('examDuration');
    if (durEl) durEl.value = info.duration || 60;
    const fullAudioEl = document.getElementById('examFullAudio');
    if (fullAudioEl) fullAudioEl.value = info.fullAudio || '';
}

function syncExamInfoFromInputs() {
    const codeEl = document.getElementById('examCode');
    if (codeEl) currentExamDraft.info.code = codeEl.value.trim() || 'exam_' + Date.now();
    const titleEl = document.getElementById('examTitle');
    if (titleEl) currentExamDraft.info.title = titleEl.value.trim() || 'Đề Kiểm Tra Tiếng Anh';
    const descEl = document.getElementById('examDesc');
    if (descEl) currentExamDraft.info.desc = descEl.value.trim();
    const gradeEl = document.getElementById('examGrade');
    if (gradeEl) currentExamDraft.info.grade = gradeEl.value;
    const durEl = document.getElementById('examDuration');
    if (durEl) currentExamDraft.info.duration = parseInt(durEl.value) || 60;
    const fullAudioEl = document.getElementById('examFullAudio');
    if (fullAudioEl) currentExamDraft.info.fullAudio = fullAudioEl.value.trim();
}

function loadSampleStandard40() {
    currentExamDraft = JSON.parse(JSON.stringify(STANDARD_40_DATA));
    currentExamDraft.sections.forEach((sec) => {
        sec.id = 'sec_' + (++sectionIdSeq);
    });
    renderExamInfo();
    renderSectionBuilder();
    if (typeof showStatusMessage === 'function') {
        showStatusMessage('Đã nạp toàn bộ cấu trúc 40 câu chuẩn Sở Cần Thơ (Đề số 03) thành công!', 'success');
    }
}

function addBlankSection(preset = null) {
    syncAllInputsToDraft();
    const newSec = preset ? JSON.parse(JSON.stringify(preset)) : {
        title: "PHẦN THI MỚI",
        badge: "Multiple Choice",
        type: "multiple_choice",
        instruction: "",
        passage: "",
        audioTrack: "",
        questions: []
    };
    newSec.id = 'sec_' + (++sectionIdSeq);
    if (!newSec.questions || newSec.questions.length === 0) {
        newSec.questions = [{
            tag: "Vocabulary",
            qType: "mcq",
            question: "Nội dung câu hỏi mới...",
            optA: "Lựa chọn A", optB: "Lựa chọn B", optC: "Lựa chọn C", optD: "Lựa chọn D",
            correct: "A",
            explanation: ""
        }];
    }
    currentExamDraft.sections.push(newSec);
    renderSectionBuilder();
}

function removeSection(secId) {
    if (!confirm('Thầy có chắc chắn muốn xóa phần này và tất cả các câu hỏi bên trong không?')) return;
    syncAllInputsToDraft();
    currentExamDraft.sections = currentExamDraft.sections.filter(s => s.id !== secId);
    renderSectionBuilder();
}

function addQuestionToSection(secId) {
    syncAllInputsToDraft();
    const sec = currentExamDraft.sections.find(s => s.id === secId);
    if (!sec) return;
    sec.questions.push({
        tag: sec.type === 'listening' ? 'Listening' : (sec.type === 'reading' ? 'Reading' : 'Language Focus'),
        qType: "mcq",
        question: "",
        optA: "", optB: "", optC: "", optD: "",
        correct: "A",
        explanation: ""
    });
    renderSectionBuilder();
}

function removeQuestion(secId, qIdx) {
    syncAllInputsToDraft();
    const sec = currentExamDraft.sections.find(s => s.id === secId);
    if (!sec) return;
    sec.questions.splice(qIdx, 1);
    renderSectionBuilder();
}

function syncAllInputsToDraft() {
    syncExamInfoFromInputs();
    currentExamDraft.sections.forEach(sec => {
        const titleEl = document.getElementById('sec_title_' + sec.id);
        if (titleEl) sec.title = titleEl.value.trim();

        const badgeEl = document.getElementById('sec_badge_' + sec.id);
        if (badgeEl) sec.badge = badgeEl.value.trim();

        const typeEl = document.getElementById('sec_type_' + sec.id);
        if (typeEl) sec.type = typeEl.value;

        const trackEl = document.getElementById('sec_track_' + sec.id);
        if (trackEl) sec.audioTrack = trackEl.value.trim();

        const instEl = document.getElementById('sec_inst_' + sec.id);
        if (instEl) sec.instruction = instEl.value.trim();

        const passEl = document.getElementById('sec_pass_' + sec.id);
        if (passEl) sec.passage = passEl.value;

        sec.questions.forEach((q, qIdx) => {
            const tagEl = document.getElementById(`q_${sec.id}_${qIdx}_tag`);
            if (tagEl) q.tag = tagEl.value.trim();

            const qTypeEl = document.getElementById(`q_${sec.id}_${qIdx}_qType`);
            if (qTypeEl) q.qType = qTypeEl.value;

            const questEl = document.getElementById(`q_${sec.id}_${qIdx}_quest`);
            if (questEl) q.question = questEl.value;

            const aEl = document.getElementById(`q_${sec.id}_${qIdx}_optA`);
            if (aEl) q.optA = aEl.value.trim();

            const bEl = document.getElementById(`q_${sec.id}_${qIdx}_optB`);
            if (bEl) q.optB = bEl.value.trim();

            const cEl = document.getElementById(`q_${sec.id}_${qIdx}_optC`);
            if (cEl) q.optC = cEl.value.trim();

            const dEl = document.getElementById(`q_${sec.id}_${qIdx}_optD`);
            if (dEl) q.optD = dEl.value.trim();

            const corrEl = document.getElementById(`q_${sec.id}_${qIdx}_corr`);
            if (corrEl) q.correct = corrEl.value;

            const expEl = document.getElementById(`q_${sec.id}_${qIdx}_exp`);
            if (expEl) q.explanation = expEl.value.trim();

            const noticeEl = document.getElementById(`q_${sec.id}_${qIdx}_notice`);
            if (noticeEl) q.noticeText = noticeEl.value;

            const signEl = document.getElementById(`q_${sec.id}_${qIdx}_sign`);
            if (signEl) q.signImg = signEl.value.trim();

            const arrEl = document.getElementById(`q_${sec.id}_${qIdx}_arr`);
            if (arrEl) q.arrangement = arrEl.value;
        });
    });
}

function renderSectionBuilder() {
    const container = document.getElementById('sectionsContainer');
    if (!container) return;

    let globalQNumber = 0;
    let totalQuestions = 0;
    currentExamDraft.sections.forEach(s => totalQuestions += (s.questions ? s.questions.length : 0));

    const countBadge = document.getElementById('totalQuestionsBadge');
    if (countBadge) countBadge.innerText = `${totalQuestions} Câu hỏi`;

    let html = '';

    currentExamDraft.sections.forEach((sec, secIdx) => {
        const isListening = sec.type === 'listening';
        const isReading = sec.type === 'reading';

        html += `
        <div class="section-card" id="card_${sec.id}">
            <div class="section-header">
                <div class="sec-meta">
                    <span class="sec-index">PHẦN ${secIdx + 1}</span>
                    <input type="text" id="sec_title_${sec.id}" class="form-control sec-title-input" value="${escapeHtmlAttr(sec.title)}" placeholder="Ví dụ: PHẦN I: LISTENING (NGHE HIỂU)">
                    <input type="text" id="sec_badge_${sec.id}" class="form-control sec-badge-input" value="${escapeHtmlAttr(sec.badge || '')}" placeholder="Phân môn/Dạng (VD: Part 1. Short Conversation)">
                </div>
                <div class="sec-actions">
                    <select id="sec_type_${sec.id}" class="form-control sec-type-select" onchange="onSectionTypeChange('${sec.id}', this.value)">
                        <option value="listening" ${sec.type === 'listening' ? 'selected' : ''}>🎧 Phần Nghe (Listening)</option>
                        <option value="multiple_choice" ${sec.type === 'multiple_choice' ? 'selected' : ''}>📝 Trắc nghiệm (Multiple Choice)</option>
                        <option value="reading" ${sec.type === 'reading' ? 'selected' : ''}>📖 Bài đọc / Điền từ (Reading Passage)</option>
                        <option value="written" ${sec.type === 'written' ? 'selected' : ''}>✍️ Tự luận trắc nghiệm hóa (Writing)</option>
                    </select>
                    <button class="btn-sec-del" onclick="removeSection('${sec.id}')" title="Xóa phần này">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>

            <div class="sec-context-box">
                <div class="form-group mb-2">
                    <label class="form-label" style="font-size:0.82rem; margin-bottom:4px;">
                        <i class="fas fa-info-circle text-teal"></i> Lời chỉ dẫn cho học sinh (Instruction):
                    </label>
                    <input type="text" id="sec_inst_${sec.id}" class="form-control" value="${escapeHtmlAttr(sec.instruction || '')}" placeholder="VD: Listen to the talk and choose the best answer A, B, C, or D. (Em được nghe 2 lần).">
                </div>

                ${isListening ? `
                <div class="form-group mb-2" style="background:#ecfdf5; padding:10px 14px; border-radius:8px; border:1px solid #a7f3d0;">
                    <label class="form-label text-emerald font-bold" style="font-size:0.85rem; margin-bottom:4px;">
                        <i class="fas fa-music"></i> File Audio MP3 của bài nghe này (Audio Track):
                    </label>
                    <input type="text" id="sec_track_${sec.id}" class="form-control" value="${escapeHtmlAttr(sec.audioTrack || '')}" placeholder="VD: 03_De_03_Track_1_Green_Neighborhood.mp3 hoặc https://...">
                    <small class="text-muted" style="font-size:0.75rem;">Hỗ trợ tên file mp3 cùng thư mục gốc GitHub repo, hoặc link audio trực tuyến.</small>
                </div>
                ` : ''}

                ${isReading ? `
                <div class="form-group mb-2" style="background:#eff6ff; padding:12px 14px; border-radius:8px; border:1px solid #bfdbfe;">
                    <label class="form-label text-blue font-bold" style="font-size:0.85rem; margin-bottom:6px;">
                        <i class="fas fa-book-open"></i> ĐOẠN VĂN BẢN ĐỌC HIỂU / ĐIỀN TỪ (Passage Content - Giữ trọn ngữ cảnh ở trên):
                    </label>
                    <textarea id="sec_pass_${sec.id}" class="form-control" rows="5" placeholder="Dán nội dung đoạn văn bài đọc hoặc đoạn văn Cloze-test tại đây. Hỗ trợ thẻ HTML: <b>, <br>, (22)______ ...">${escapeHtml(sec.passage || '')}</textarea>
                    <small class="text-muted" style="font-size:0.75rem;">Đoạn văn này sẽ được hiển thị cố định ở đầu phần thi. Các câu hỏi đọc hiểu bên dưới sẽ bám sát vào ngữ cảnh đoạn văn này mà không bị xé lẻ.</small>
                </div>
                ` : ''}
            </div>

            <div class="questions-builder-list" id="q_list_${sec.id}">
        `;

        sec.questions.forEach((q, qIdx) => {
            globalQNumber++;
            const isArrangement = q.qType === 'arrangement';
            const isNotice = q.qType === 'notice';
            const isSign = q.qType === 'sign';

            html += `
                <div class="question-builder-item" id="q_box_${sec.id}_${qIdx}">
                    <div class="q-item-header">
                        <div class="q-number-pill">
                            <span class="q-badge-num">CÂU ${globalQNumber}</span>
                            <span class="text-muted" style="font-size:0.8rem;">(Thuộc Phần ${secIdx + 1})</span>
                        </div>
                        <div class="q-type-selector">
                            <input type="text" id="q_${sec.id}_${qIdx}_tag" class="form-control q-tag-input" value="${escapeHtmlAttr(q.tag || '')}" placeholder="Chủ điểm ngữ pháp / dạng câu">
                            <select id="q_${sec.id}_${qIdx}_qType" class="form-control q-type-select" onchange="onQuestionTypeChange('${sec.id}', ${qIdx}, this.value)">
                                <option value="mcq" ${!isArrangement && !isNotice && !isSign ? 'selected' : ''}>Trắc nghiệm chuẩn (A, B, C, D)</option>
                                <option value="arrangement" ${isArrangement ? 'selected' : ''}>Sắp xếp đoạn văn (a, b, c, d, e)</option>
                                <option value="notice" ${isNotice ? 'selected' : ''}>Bảng thông báo (Notice Box)</option>
                                <option value="sign" ${isSign ? 'selected' : ''}>Biển báo giao thông (Traffic Sign)</option>
                            </select>
                            <button class="btn-q-del" onclick="removeQuestion('${sec.id}', ${qIdx})" title="Xóa câu hỏi này">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    ${isNotice ? `
                    <div class="form-group mb-2" style="background:#fffbeb; padding:8px 12px; border-radius:6px; border:1px solid #fde68a;">
                        <label class="form-label text-amber" style="font-size:0.8rem; font-weight:700;"><i class="fas fa-clipboard-list"></i> Nội dung Bảng thông báo (Notice Box):</label>
                        <textarea id="q_${sec.id}_${qIdx}_notice" class="form-control" rows="3" placeholder="Nhập tiêu đề, ngày, nội dung thông báo...">${escapeHtml(q.noticeText || '')}</textarea>
                    </div>
                    ` : ''}

                    ${isSign ? `
                    <div class="form-group mb-2" style="background:#fef2f2; padding:8px 12px; border-radius:6px; border:1px solid #fecaca;">
                        <label class="form-label text-red" style="font-size:0.8rem; font-weight:700;"><i class="fas fa-traffic-light"></i> Đường dẫn / Tên file ảnh Biển báo (Sign Image):</label>
                        <input type="text" id="q_${sec.id}_${qIdx}_sign" class="form-control" value="${escapeHtmlAttr(q.signImg || '')}" placeholder="VD: ./signs/school_zone_slow_down.png hoặc https://...">
                    </div>
                    ` : ''}

                    ${isArrangement ? `
                    <div class="form-group mb-2" style="background:#f5f3ff; padding:8px 12px; border-radius:6px; border:1px solid #ddd6fe;">
                        <label class="form-label text-indigo font-bold" style="font-size:0.8rem; font-weight:700;"><i class="fas fa-sort-numeric-down"></i> Các dòng câu rời rạc cần sắp xếp (Mỗi dòng bắt đầu a., b., c., d., e.):</label>
                        <textarea id="q_${sec.id}_${qIdx}_arr" class="form-control" rows="4" placeholder="a. First sentence...&#10;b. Second sentence...&#10;c. Third sentence...&#10;d. Fourth sentence...&#10;e. Fifth sentence...">${escapeHtml(q.arrangement || '')}</textarea>
                    </div>
                    ` : ''}

                    <div class="form-group mb-2">
                        <label class="form-label" style="font-size:0.82rem; margin-bottom:4px; font-weight:600;">Nội dung câu hỏi / Câu đề bài:</label>
                        <textarea id="q_${sec.id}_${qIdx}_quest" class="form-control" rows="2" placeholder="Nhập câu đề bài tiếng Anh...">${escapeHtml(q.question || '')}</textarea>
                    </div>

                    <div class="options-grid">
                        <div class="opt-col">
                            <label class="opt-label opt-a">A</label>
                            <input type="text" id="q_${sec.id}_${qIdx}_optA" class="form-control opt-input" value="${escapeHtmlAttr(q.optA || '')}" placeholder="Phương án A">
                        </div>
                        <div class="opt-col">
                            <label class="opt-label opt-b">B</label>
                            <input type="text" id="q_${sec.id}_${qIdx}_optB" class="form-control opt-input" value="${escapeHtmlAttr(q.optB || '')}" placeholder="Phương án B">
                        </div>
                        <div class="opt-col">
                            <label class="opt-label opt-c">C</label>
                            <input type="text" id="q_${sec.id}_${qIdx}_optC" class="form-control opt-input" value="${escapeHtmlAttr(q.optC || '')}" placeholder="Phương án C">
                        </div>
                        <div class="opt-col">
                            <label class="opt-label opt-d">D</label>
                            <input type="text" id="q_${sec.id}_${qIdx}_optD" class="form-control opt-input" value="${escapeHtmlAttr(q.optD || '')}" placeholder="Phương án D">
                        </div>
                    </div>

                    <div class="q-meta-footer">
                        <div class="correct-select-wrap">
                            <label class="font-bold text-teal" style="font-size:0.82rem;">Đáp án đúng:</label>
                            <select id="q_${sec.id}_${qIdx}_corr" class="form-control form-control-sm font-bold" style="width:75px; color:#059669; border-color:#059669;">
                                <option value="A" ${q.correct === 'A' ? 'selected' : ''}>A</option>
                                <option value="B" ${q.correct === 'B' ? 'selected' : ''}>B</option>
                                <option value="C" ${q.correct === 'C' ? 'selected' : ''}>C</option>
                                <option value="D" ${q.correct === 'D' ? 'selected' : ''}>D</option>
                            </select>
                        </div>
                        <div class="explanation-wrap" style="flex:1;">
                            <input type="text" id="q_${sec.id}_${qIdx}_exp" class="form-control form-control-sm" value="${escapeHtmlAttr(q.explanation || '')}" placeholder="Giải thích sư phạm & Dẫn chứng câu trong bài đọc/audio (hiển thị khi học sinh nộp bài)...">
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
            </div>
            <div class="sec-footer-actions">
                <button class="btn btn-sm btn-outline-teal" onclick="addQuestionToSection('${sec.id}')">
                    <i class="fas fa-plus-circle"></i> Thêm câu hỏi vào Phần ${secIdx + 1}
                </button>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

function onSectionTypeChange(secId, newType) {
    syncAllInputsToDraft();
    const sec = currentExamDraft.sections.find(s => s.id === secId);
    if (sec) {
        sec.type = newType;
        renderSectionBuilder();
    }
}

function onQuestionTypeChange(secId, qIdx, newQType) {
    syncAllInputsToDraft();
    const sec = currentExamDraft.sections.find(s => s.id === secId);
    if (sec && sec.questions[qIdx]) {
        sec.questions[qIdx].qType = newQType;
        renderSectionBuilder();
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function escapeHtmlAttr(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function compileExam(action = 'download_html') {
    syncAllInputsToDraft();

    let totalQ = 0;
    currentExamDraft.sections.forEach(s => totalQ += (s.questions ? s.questions.length : 0));

    if (totalQ === 0) {
        alert('Đề thi chưa có câu hỏi nào! Thầy vui lòng bấm nút "Nạp Khung Chuẩn 40 Câu Sở Cần Thơ" hoặc thêm câu hỏi.');
        return;
    }

    if (action === 'download_json') {
        const jsonStr = JSON.stringify(currentExamDraft, null, 2);
        downloadBlob(jsonStr, `${currentExamDraft.info.code || 'exam'}.json`, 'application/json');
        if (typeof showStatusMessage === 'function') {
            showStatusMessage('Đã tải xuống tệp dữ liệu đề thi .json thành công!', 'success');
        }
        return;
    }

    const standaloneHtml = generateStandaloneHTML(currentExamDraft);

    if (action === 'preview') {
        const previewWin = window.open('', '_blank');
        if (previewWin) {
            previewWin.document.open();
            previewWin.document.write(standaloneHtml);
            previewWin.document.close();
        } else {
            alert('Trình duyệt đã chặn cửa sổ bật lên (popup). Thầy vui lòng cấp quyền cho phép mở tab mới!');
        }
        return;
    }

    if (action === 'download_html') {
        downloadBlob(standaloneHtml, `${currentExamDraft.info.code || 'quiz'}.html`, 'text/html');
        if (typeof showStatusMessage === 'function') {
            showStatusMessage(`Đã biên dịch và xuất file ${currentExamDraft.info.code}.html thành công! Thầy có thể tải thẳng lên GitHub.`, 'success');
        }
    }
}

function downloadBlob(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType + ';charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 300);
}

function generateStandaloneHTML(exam) {
    const info = exam.info;
    const fullAudio = info.fullAudio || '';
    const serializedExam = JSON.stringify(exam).replace(/<\/script>/gi, '<\\/script>');

    return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(info.title)} • E CLASS STM English</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Lexend:wght@500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #0f172a;
            --teal: #0d9488;
            --teal-dark: #0f766e;
            --teal-light: #f0fdfa;
            --emerald: #059669;
            --crimson: #dc2626;
            --blue: #2563eb;
            --bg-body: #f8fafc;
            --card-bg: #ffffff;
            --border: #e2e8f0;
            --text-dark: #1e293b;
            --text-muted: #64748b;
            --radius-lg: 16px;
            --radius-md: 12px;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
            --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04);
            --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.03);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-body);
            color: var(--text-dark);
            line-height: 1.6;
            padding-bottom: 90px;
        }
        .header-bar {
            background: #ffffff;
            border-bottom: 2px solid var(--border);
            padding: 14px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: var(--shadow-sm);
        }
        .brand-badge {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .brand-icon {
            width: 42px;
            height: 42px;
            background: linear-gradient(135deg, var(--teal), var(--emerald));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 1.25rem;
            font-weight: 700;
        }
        .brand-title {
            font-family: 'Lexend', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--primary);
            line-height: 1.2;
        }
        .brand-sub {
            font-size: 0.82rem;
            color: var(--text-muted);
            font-weight: 500;
        }
        .timer-box {
            background: #fef2f2;
            border: 1.5px solid #fecaca;
            color: var(--crimson);
            padding: 8px 18px;
            border-radius: 30px;
            font-weight: 800;
            font-size: 1.15rem;
            display: flex;
            align-items: center;
            gap: 8px;
            letter-spacing: 0.5px;
        }
        .exam-container {
            max-width: 960px;
            margin: 28px auto;
            padding: 0 16px;
        }
        .hero-info-card {
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: #ffffff;
            border-radius: var(--radius-lg);
            padding: 28px 32px;
            margin-bottom: 24px;
            box-shadow: var(--shadow-lg);
            border-left: 6px solid var(--teal);
        }
        .hero-badge {
            background: rgba(13, 148, 136, 0.25);
            border: 1px solid rgba(13, 148, 136, 0.5);
            color: #5eead4;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 20px;
            display: inline-block;
            margin-bottom: 12px;
            text-transform: uppercase;
        }
        .hero-title {
            font-family: 'Lexend', sans-serif;
            font-size: 1.55rem;
            font-weight: 800;
            margin-bottom: 8px;
            line-height: 1.35;
        }
        .hero-desc {
            font-size: 0.95rem;
            color: #cbd5e1;
            margin-bottom: 20px;
            line-height: 1.5;
        }
        .student-inputs {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 16px;
            background: rgba(255, 255, 255, 0.08);
            padding: 16px 20px;
            border-radius: var(--radius-md);
            border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .student-inputs label {
            display: block;
            font-size: 0.8rem;
            font-weight: 600;
            color: #94a3b8;
            margin-bottom: 6px;
            text-transform: uppercase;
        }
        .student-inputs input, .student-inputs select {
            width: 100%;
            padding: 10px 14px;
            border-radius: 8px;
            border: 1.5px solid #475569;
            background: #ffffff;
            color: #0f172a;
            font-size: 0.95rem;
            font-weight: 600;
            outline: none;
        }
        .audio-player-card {
            background: #f0fdf4;
            border: 1.5px solid #86efac;
            border-radius: var(--radius-md);
            padding: 16px 20px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 18px;
        }
        .audio-player-card.sub-track {
            background: #f0fdfa;
            border-color: #99f6e4;
            margin-bottom: 18px;
        }
        .audio-icon-wrap {
            width: 48px;
            height: 48px;
            background: var(--emerald);
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            flex-shrink: 0;
        }
        .audio-icon-wrap.sub {
            background: var(--teal);
            width: 42px;
            height: 42px;
            font-size: 1.1rem;
        }
        .audio-details { flex: 1; }
        .audio-title {
            font-weight: 800;
            font-size: 0.98rem;
            color: #065f46;
            margin-bottom: 2px;
        }
        .audio-title.sub { color: #115e59; }
        .audio-sub {
            font-size: 0.82rem;
            color: #047857;
            margin-bottom: 8px;
        }
        .audio-sub.sub { color: #0f766e; }
        audio {
            width: 100%;
            height: 38px;
            outline: none;
        }
        .section-separator {
            margin: 36px 0 20px 0;
            border-left: 5px solid var(--teal);
            padding-left: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .sec-sep-title {
            font-family: 'Lexend', sans-serif;
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--primary);
        }
        .sec-sep-badge {
            background: #e2e8f0;
            color: #334155;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 12px;
        }
        .passage-card {
            background: #ffffff;
            border: 1.5px solid #cbd5e1;
            border-radius: var(--radius-md);
            padding: 22px 26px;
            margin-bottom: 22px;
            box-shadow: var(--shadow-sm);
            font-size: 0.96rem;
            line-height: 1.75;
            color: #1e293b;
        }
        .passage-tag {
            display: inline-block;
            background: #dbeafe;
            color: #1d4ed8;
            font-size: 0.75rem;
            font-weight: 800;
            padding: 3px 10px;
            border-radius: 6px;
            margin-bottom: 12px;
            letter-spacing: 0.5px;
        }
        .question-card {
            background: var(--card-bg);
            border: 1.5px solid var(--border);
            border-radius: var(--radius-md);
            padding: 22px 24px;
            margin-bottom: 20px;
            box-shadow: var(--shadow-sm);
            transition: all 0.2s ease;
        }
        .question-card:hover {
            border-color: #cbd5e1;
            box-shadow: var(--shadow-md);
        }
        .q-header {
            display: flex;
            align-items: baseline;
            gap: 10px;
            margin-bottom: 14px;
        }
        .q-pill {
            background: var(--primary);
            color: #ffffff;
            font-weight: 800;
            font-size: 0.82rem;
            padding: 4px 12px;
            border-radius: 6px;
            flex-shrink: 0;
            letter-spacing: 0.5px;
        }
        .q-tag-name {
            font-size: 0.78rem;
            font-weight: 700;
            color: var(--teal);
            background: var(--teal-light);
            border: 1px solid #ccfbf1;
            padding: 3px 10px;
            border-radius: 12px;
        }
        .q-content {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.55;
            margin-bottom: 16px;
        }
        .notice-container {
            background: #fffbeb;
            border: 2px dashed #f59e0b;
            border-radius: 10px;
            padding: 14px 18px;
            font-family: 'Lexend', sans-serif;
            font-size: 0.92rem;
            white-space: pre-line;
            color: #78350f;
            margin-bottom: 16px;
        }
        .sign-container {
            text-align: center;
            margin-bottom: 16px;
            padding: 10px;
            background: #f8fafc;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
        }
        .sign-container img {
            max-height: 150px;
            object-fit: contain;
        }
        .arrangement-container {
            background: #f1f5f9;
            border-left: 4px solid #64748b;
            padding: 12px 18px;
            border-radius: 6px;
            font-size: 0.92rem;
            white-space: pre-line;
            line-height: 1.6;
            color: #334155;
            margin-bottom: 16px;
            font-weight: 500;
        }
        .options-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .opt-choice {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 12px 16px;
            background: #f8fafc;
            border: 1.5px solid var(--border);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.15s ease;
            user-select: none;
        }
        .opt-choice:hover {
            background: #f1f5f9;
            border-color: #cbd5e1;
        }
        .opt-choice.selected {
            background: #f0fdfa;
            border-color: var(--teal);
            box-shadow: 0 0 0 1px var(--teal);
        }
        .choice-circle {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 2px solid #94a3b8;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.82rem;
            font-weight: 800;
            color: #475569;
            background: #ffffff;
            flex-shrink: 0;
            transition: all 0.15s ease;
        }
        .opt-choice.selected .choice-circle {
            border-color: var(--teal);
            background: var(--teal);
            color: #ffffff;
        }
        .choice-text {
            font-size: 0.96rem;
            font-weight: 500;
            color: #1e293b;
            flex: 1;
        }
        .opt-choice.selected .choice-text {
            color: #0f172a;
            font-weight: 600;
        }
        .explanation-box {
            display: none;
            margin-top: 16px;
            padding: 14px 18px;
            background: #f8fafc;
            border-left: 4px solid var(--blue);
            border-radius: 6px;
            font-size: 0.9rem;
            color: #1e293b;
        }
        .explanation-box.correct {
            border-color: var(--emerald);
            background: #f0fdf4;
        }
        .explanation-box.incorrect {
            border-color: var(--crimson);
            background: #fef2f2;
        }
        .footer-action-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #ffffff;
            border-top: 2px solid var(--border);
            padding: 14px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 100;
            box-shadow: 0 -4px 10px rgba(0,0,0,0.05);
        }
        .progress-text {
            font-size: 0.92rem;
            font-weight: 700;
            color: #475569;
        }
        .btn-submit-exam {
            background: linear-gradient(135deg, var(--teal), var(--emerald));
            color: #ffffff;
            border: none;
            padding: 12px 36px;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(13, 148, 136, 0.35);
            transition: all 0.2s ease;
        }
        .btn-submit-exam:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(13, 148, 136, 0.45);
        }
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(4px);
            z-index: 999;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .modal-dialog {
            background: #ffffff;
            border-radius: var(--radius-lg);
            max-width: 520px;
            width: 100%;
            padding: 32px;
            text-align: center;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
            animation: modalPop 0.3s ease;
        }
        @keyframes modalPop {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .modal-score {
            font-family: 'Lexend', sans-serif;
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--teal);
            line-height: 1;
            margin: 16px 0;
        }
        @media (max-width: 768px) {
            .student-inputs { grid-template-columns: 1fr; }
            .header-bar { padding: 10px 16px; }
            .brand-sub { display: none; }
            .hero-title { font-size: 1.25rem; }
        }
    </style>
</head>
<body>

    <header class="header-bar">
        <div class="brand-badge">
            <div class="brand-icon"><i class="fas fa-graduation-cap"></i></div>
            <div>
                <div class="brand-title">E CLASS • STM English</div>
                <div class="brand-sub">Hệ Thống Khảo Thí Trắc Nghiệm Độc Lập</div>
            </div>
        </div>
        <div class="timer-box" id="timerBox">
            <i class="fas fa-clock"></i> <span id="timerText">60:00</span>
        </div>
    </header>

    <main class="exam-container">
        <div class="hero-info-card">
            <span class="hero-badge">KHẢO THÍ CHUẨN SỞ GD&ĐT CẦN THƠ</span>
            <h1 class="hero-title">${escapeHtml(info.title)}</h1>
            <p class="hero-desc">${escapeHtml(info.desc || '')}</p>
            <div class="student-inputs">
                <div>
                    <label>Họ và Tên Học Sinh (*)</label>
                    <input type="text" id="studentNameInput" placeholder="Ví dụ: Huỳnh Ngọc Thịnh..." required>
                </div>
                <div>
                    <label>Khối Lớp (*)</label>
                    <select id="studentClassSelect">
                        <option value="Lớp ${info.grade}">Lớp ${info.grade}</option>
                        <option value="Lớp 9">Lớp 9</option>
                        <option value="Lớp 8">Lớp 8</option>
                        <option value="Lớp 7">Lớp 7</option>
                        <option value="Lớp 6">Lớp 6</option>
                    </select>
                </div>
            </div>
        </div>

        ${fullAudio ? `
        <div class="audio-player-card">
            <div class="audio-icon-wrap"><i class="fas fa-headphones"></i></div>
            <div class="audio-details">
                <div class="audio-title">BẢN GHI ÂM TOÀN BỘ PHẦN THI NGHE (FULL AUDIO)</div>
                <div class="audio-sub">File nghe liền mạch chuẩn Sở GD&ĐT Cần Thơ có hướng dẫn và khoảng nghỉ giữa các phần.</div>
                <audio controls preload="auto">
                    <source src="./${fullAudio}" type="audio/mpeg">
                    <source src="${fullAudio}" type="audio/mpeg">
                    <source src="./audio/${fullAudio}" type="audio/mpeg">
                    Trình duyệt của bạn không hỗ trợ phát audio.
                </audio>
            </div>
        </div>
        ` : ''}

        <div id="examBody"></div>
    </main>

    <footer class="footer-action-bar">
        <div class="progress-text" id="progressIndicator">Đã làm: 0 / 0 câu</div>
        <button class="btn-submit-exam" id="btnSubmitExam" onclick="confirmSubmitExam()">
            <i class="fas fa-paper-plane"></i> NỘP BÀI THI
        </button>
    </footer>

    <div class="modal-overlay" id="scoreModal">
        <div class="modal-dialog">
            <div style="font-size:3rem; color:var(--emerald); margin-bottom:12px;"><i class="fas fa-award"></i></div>
            <h2 style="font-family:'Lexend', sans-serif; font-size:1.6rem; color:var(--primary);">KẾT QUẢ BÀI THI</h2>
            <div class="modal-score" id="finalScoreText">10.0</div>
            <p id="scoreSummaryDetails" style="color:var(--text-muted); font-size:1rem; margin-bottom:24px;">Đúng 40/40 câu (100%) • Hoàn thành trong 45 phút</p>
            <button class="btn-submit-exam" style="width:100%; border-radius:12px;" onclick="closeModalAndReview()">
                <i class="fas fa-eye"></i> XEM LỜI GIẢI CHI TIẾT
            </button>
        </div>
    </div>

    <script>
        const EXAM_DATA = ${serializedExam};
        let studentAnswers = {};
        let examSubmitted = false;
        let secondsRemaining = (EXAM_DATA.info.duration || 60) * 60;
        let timerInterval = null;
        let totalQuestionCount = 0;

        document.addEventListener('DOMContentLoaded', () => {
            renderExamDOM();
            startTimer();
        });

        function renderExamDOM() {
            const body = document.getElementById('examBody');
            let qGlobalIndex = 0;
            let html = '';

            EXAM_DATA.sections.forEach((sec, sIdx) => {
                html += '<div class="section-separator"><div class="sec-sep-title">' + sec.title + '</div>' + 
                        (sec.badge ? '<span class="sec-sep-badge">' + sec.badge + '</span>' : '') + '</div>';

                if (sec.type === 'listening' && sec.audioTrack) {
                    html += '<div class="audio-player-card sub-track">' +
                            '<div class="audio-icon-wrap sub"><i class="fas fa-volume-up"></i></div>' +
                            '<div class="audio-details">' +
                            '<div class="audio-title sub">' + (sec.badge || 'BÀI NGHE AUDIO') + ': ' + sec.audioTrack + '</div>' +
                            '<div class="audio-sub sub">' + (sec.instruction || 'Nghe kỹ và chọn câu trả lời đúng cho mỗi câu hỏi bên dưới.') + '</div>' +
                            '<audio controls preload="auto">' +
                            '<source src="./' + sec.audioTrack + '" type="audio/mpeg">' +
                            '<source src="' + sec.audioTrack + '" type="audio/mpeg">' +
                            '<source src="./audio/' + sec.audioTrack + '" type="audio/mpeg">' +
                            'Trình duyệt không hỗ trợ phát audio.' +
                            '</audio></div></div>';
                }

                if (sec.type === 'reading' && sec.passage) {
                    html += '<div class="passage-card">' +
                            '<span class="passage-tag"><i class="fas fa-book-open"></i> ĐOẠN VĂN BẢN ĐỌC HIỂU</span>' +
                            '<div>' + sec.passage + '</div></div>';
                }

                if (sec.questions && sec.questions.length > 0) {
                    sec.questions.forEach((q) => {
                        qGlobalIndex++;
                        totalQuestionCount++;
                        const qKey = 'q_' + qGlobalIndex;

                        html += '<div class="question-card" id="card_' + qKey + '">' +
                                '<div class="q-header">' +
                                '<span class="q-pill">CÂU ' + qGlobalIndex + '</span>' +
                                (q.tag ? '<span class="q-tag-name">' + q.tag + '</span>' : '') +
                                '</div>';

                        if (q.noticeText) {
                            html += '<div class="notice-container">' + escapeHtml(q.noticeText) + '</div>';
                        }

                        if (q.signImg) {
                            html += '<div class="sign-container"><img src="' + q.signImg + '" alt="Traffic Sign"></div>';
                        }

                        if (q.arrangement) {
                            html += '<div class="arrangement-container">' + escapeHtml(q.arrangement) + '</div>';
                        }

                        html += '<div class="q-content">' + q.question + '</div>' +
                                '<div class="options-list">' +
                                '<div class="opt-choice" id="opt_' + qKey + '_A" onclick="selectAnswer(\\'' + qKey + '\\', \\'A\\')">' +
                                '<div class="choice-circle">A</div><div class="choice-text">' + q.optA + '</div></div>' +
                                '<div class="opt-choice" id="opt_' + qKey + '_B" onclick="selectAnswer(\\'' + qKey + '\\', \\'B\\')">' +
                                '<div class="choice-circle">B</div><div class="choice-text">' + q.optB + '</div></div>' +
                                '<div class="opt-choice" id="opt_' + qKey + '_C" onclick="selectAnswer(\\'' + qKey + '\\', \\'C\\')">' +
                                '<div class="choice-circle">C</div><div class="choice-text">' + q.optC + '</div></div>' +
                                '<div class="opt-choice" id="opt_' + qKey + '_D" onclick="selectAnswer(\\'' + qKey + '\\', \\'D\\')">' +
                                '<div class="choice-circle">D</div><div class="choice-text">' + q.optD + '</div></div>' +
                                '</div>' +
                                '<div class="explanation-box" id="exp_' + qKey + '"></div>' +
                                '</div>';
                    });
                }
            });

            body.innerHTML = html;
            updateProgress();
        }

        function selectAnswer(qKey, opt) {
            if (examSubmitted) return;
            studentAnswers[qKey] = opt;
            ['A', 'B', 'C', 'D'].forEach(letter => {
                const el = document.getElementById('opt_' + qKey + '_' + letter);
                if (el) {
                    if (letter === opt) el.classList.add('selected');
                    else el.classList.remove('selected');
                }
            });
            updateProgress();
        }

        function updateProgress() {
            const answered = Object.keys(studentAnswers).length;
            const textEl = document.getElementById('progressIndicator');
            if (textEl) {
                textEl.innerText = 'Đã làm: ' + answered + ' / ' + totalQuestionCount + ' câu';
            }
        }

        function startTimer() {
            const timerText = document.getElementById('timerText');
            timerInterval = setInterval(() => {
                if (secondsRemaining <= 0) {
                    clearInterval(timerInterval);
                    autoSubmitTimeOut();
                    return;
                }
                secondsRemaining--;
                const m = Math.floor(secondsRemaining / 60);
                const s = secondsRemaining % 60;
                timerText.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
            }, 1000);
        }

        function confirmSubmitExam() {
            if (examSubmitted) return;
            const sName = document.getElementById('studentNameInput').value.trim();
            if (!sName) {
                alert('Em vui lòng nhập đầy đủ Họ và Tên trước khi nộp bài nhé!');
                document.getElementById('studentNameInput').focus();
                return;
            }
            const answered = Object.keys(studentAnswers).length;
            if (answered < totalQuestionCount) {
                if (!confirm('Em mới làm được ' + answered + '/' + totalQuestionCount + ' câu. Em có chắc chắn muốn nộp bài ngay bây giờ không?')) {
                    return;
                }
            } else {
                if (!confirm('Em có chắc chắn muốn nộp bài thi để xem điểm và lời giải chi tiết không?')) {
                    return;
                }
            }
            submitExamProcess();
        }

        function autoSubmitTimeOut() {
            alert('Đã hết giờ làm bài! Hệ thống tự động thu bài của em.');
            submitExamProcess();
        }

        function submitExamProcess() {
            examSubmitted = true;
            clearInterval(timerInterval);

            let correctCount = 0;
            let qIdx = 0;

            EXAM_DATA.sections.forEach(sec => {
                if (sec.questions) {
                    sec.questions.forEach(q => {
                        qIdx++;
                        const qKey = 'q_' + qIdx;
                        const userAns = studentAnswers[qKey];
                        const isCorrect = userAns === q.correct;
                        if (isCorrect) correctCount++;

                        const expEl = document.getElementById('exp_' + qKey);
                        if (expEl) {
                            expEl.style.display = 'block';
                            expEl.className = 'explanation-box ' + (isCorrect ? 'correct' : 'incorrect');
                            expEl.innerHTML = '<div><b>Đáp án chuẩn: ' + q.correct + '</b> | Lựa chọn của em: <b>' + (userAns || 'Chưa chọn') + '</b> (' + (isCorrect ? 'ĐÚNG ✓' : 'CHƯA ĐÚNG ✗') + ')</div>' +
                                              '<div style="margin-top:6px; color:#475569;">' + (q.explanation || 'Không có giải thích thêm.') + '</div>';
                        }

                        ['A', 'B', 'C', 'D'].forEach(letter => {
                            const choiceEl = document.getElementById('opt_' + qKey + '_' + letter);
                            if (choiceEl) {
                                if (letter === q.correct) {
                                    choiceEl.style.borderColor = '#059669';
                                    choiceEl.style.background = '#f0fdf4';
                                } else if (userAns === letter && !isCorrect) {
                                    choiceEl.style.borderColor = '#dc2626';
                                    choiceEl.style.background = '#fef2f2';
                                }
                            }
                        });
                    });
                }
            });

            const score = totalQuestionCount > 0 ? ((correctCount / totalQuestionCount) * 10).toFixed(1) : '0.0';
            document.getElementById('finalScoreText').innerText = score;
            document.getElementById('scoreSummaryDetails').innerText = 'Đúng ' + correctCount + '/' + totalQuestionCount + ' câu (' + Math.round((correctCount/totalQuestionCount)*100) + '%)';
            document.getElementById('scoreModal').style.display = 'flex';
            document.getElementById('btnSubmitExam').style.display = 'none';
        }

        function closeModalAndReview() {
            document.getElementById('scoreModal').style.display = 'none';
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }

        function escapeHtml(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }
    <\\/script>
</body>
</html>`;
}

// Khởi chạy khi tài liệu sẵn sàng
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Tự động nạp dữ liệu mẫu ban đầu nếu container tồn tại
        const container = document.getElementById('sectionsContainer');
        if (container) {
            initExamBuilder();
        }
    });
}

