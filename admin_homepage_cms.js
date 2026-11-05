/**
 * =========================================================================
 * STM ENGLISH - HOMEPAGE DYNAMIC CMS DASHBOARD (admin_homepage_cms.js)
 * Module Quản trị Nội dung Trang Chủ chuyên sâu cho Thầy Nguyễn Hoàng Sơn
 * =========================================================================
 */

let currentCmsData = null;

// Dữ liệu mặc định ban đầu chuẩn hóa
const DEFAULT_CMS_DATA = {
    updatedAt: new Date().toISOString(),
    hero: {
        badge: "Chương Trình GDPT 2018 & Chuẩn Cambridge",
        title: "Đồng hành cùng sự <span>phát triển ngôn ngữ</span> và tư duy của trẻ",
        desc: "Không gian giáo dục tiếng Anh chuyên sâu từ Lớp 1 đến Lớp 12 do Thầy Nguyễn Hoàng Sơn trực tiếp giảng dạy. Phát triển toàn diện 4 kỹ năng, làm chủ ngữ pháp bản chất và tự tin chinh phục các kỳ thi học sinh giỏi, IOE và chứng chỉ quốc tế.",
        bannerImg: "",
        ctaPrimaryText: "Vào Phòng Học Trực Tuyến",
        ctaPrimaryLink: "classroom.html",
        ctaSecondaryText: "Thi Thử Đề Chuẩn Cần Thơ",
        ctaSecondaryLink: "de-thi/lop-9/kiem-tra/giua-ky-1/de-03.html",
        stat1Value: "100%",
        stat1Label: "Giáo viên tận tâm & chuẩn quốc tế",
        stat2Value: "95%+",
        stat2Label: "Học sinh đạt điểm 9 - 10 tại trường",
        stat3Value: "5,000 GB",
        stat3Label: "Kho học liệu số, video & audio bản quyền"
    },
        showcase: {
        teacherName: "Thầy Nguyễn Hoàng Sơn",
        teacherTitle: "Chủ nhiệm Chuyên môn STM Center",
        status: "Đang tuyển sinh",
        features: [
            "Lộ trình cá nhân hóa theo từng cấp học",
            "Giáo án 5512 & Bài giảng tương tác trực quan",
            "Luyện thi Olympic tiếng Anh IOE các cấp",
            "Chấm bài chi tiết, phản hồi tiến độ hàng tuần"
        ],
        boxSubmitTitle: "HỆ THỐNG NỘP BÀI ONLINE",
        boxSubmitDesc: "Lưu trữ tự động Google Drive",
        floatTitle: "Vinh danh học sinh giỏi",
        floatDesc: "Top đầu kỳ thi học sinh giỏi & IOE Cần Thơ"
    },
    googleSheetApiUrl: "",
    courses: [
        {
            id: "primary",
            gradeBadge: "Dành cho học sinh Lớp 1 - 5",
            title: "Khối Tiểu Học",
            icon: "fa-shapes",
            colorClass: "primary-grade",
            desc: "Xây dựng tình yêu ngôn ngữ qua phương pháp phản xạ TPR, câu chuyện và bài hát. Chuẩn hóa phát âm IPA quốc tế ngay từ giai đoạn vàng.",
            features: [
                "Phát âm chuẩn IPA qua ngữ âm tự nhiên (Phonics)",
                "Tăng cường vốn từ vựng thực tế theo chủ điểm sinh động",
                "Luyện thi Cambridge Young Learners (Starters, Movers, Flyers)"
            ],
            link: "classroom.html"
        },
        {
            id: "secondary",
            gradeBadge: "Dành cho học sinh Lớp 6 - 9",
            title: "Khối THCS",
            icon: "fa-compass",
            colorClass: "secondary-grade",
            desc: "Làm chủ ngữ pháp bản chất, mở rộng cấu trúc câu phức và bồi dưỡng tư duy logic. Luyện đề thi học sinh giỏi, IOE và đề khảo sát chuẩn Sở GD&ĐT Cần Thơ.",
            features: [
                "Bám sát cấu trúc đề 40 câu đánh giá năng lực GDPT 2018",
                "Rèn luyện kỹ năng nghe hiểu audio bản ngữ chuyên sâu",
                "Bồi dưỡng đội tuyển HSG và chứng chỉ Cambridge KET / PET"
            ],
            link: "classroom.html"
        },
        {
            id: "highschool",
            gradeBadge: "Dành cho học sinh Lớp 10 - 12",
            title: "Khối THPT",
            icon: "fa-graduation-cap",
            colorClass: "highschool-grade",
            desc: "Hệ thống hóa ngữ pháp học thuật, kỹ năng xử lý bẫy trắc nghiệm tốc độ cao và chiến thuật đọc hiểu nâng cao. Chinh phục điểm 9-10 kỳ thi tốt nghiệp và nền tảng IELTS.",
            features: [
                "Chiến thuật giải nhanh đề thi Tốt nghiệp THPT & Đánh giá năng lực",
                "Làm chủ từ vựng học thuật C1-C2 và collocations chuyên sâu",
                "Luyện đề thi thử trực tuyến có chấm điểm và phân tích tự động"
            ],
            link: "classroom.html"
        }
    ],
    hallOfFame: [
        {
            id: "hof-1",
            studentName: "Bạn Huỳnh Ngọc Thịnh",
            gradeTag: "Khối Lớp 8 • Lớp E8",
            achievement: "Đạt điểm 10.0 tuyệt đối bài kiểm tra giữa kỳ 1, dẫn đầu lớp tăng cường STM Center.",
            scoreBadge: "10.0 / 10 • Xuất Sắc",
            avatar: "",
            trophyIcon: "fa-crown"
        },
        {
            id: "hof-2",
            studentName: "Bạn Phan Hoài Anh",
            gradeTag: "Khối Lớp 9 • Lớp E9",
            achievement: "Đạt 9.75 điểm bài khảo sát năng lực 40 câu chuẩn Sở Cần Thơ, đạt giải Nhất IOE cấp trường.",
            scoreBadge: "9.75 / 10 • Giải Nhất",
            avatar: "",
            trophyIcon: "fa-medal"
        },
        {
            id: "hof-3",
            studentName: "Bạn Nguyễn Phúc Thịnh",
            gradeTag: "Khối Lớp 6 • Lớp E6",
            achievement: "Đạt danh hiệu Thủ khoa kiểm tra định kỳ Unit 1-2, phát âm chuẩn Cambridge Flyers 15 khiên.",
            scoreBadge: "10.0 / 10 • Thủ Khoa",
            avatar: "",
            trophyIcon: "fa-award"
        },
        {
            id: "hof-4",
            studentName: "Bạn Lê Minh Thư",
            gradeTag: "Khối Lớp 7 • Lớp E7",
            achievement: "Đạt 9.5 điểm kiểm tra 1 tiết, tiến bộ vượt bậc kỹ năng Listening và Reading Cloze-test.",
            scoreBadge: "9.5 / 10 • Tiến Bộ",
            avatar: "",
            trophyIcon: "fa-star"
        }
    ],
    news: [
        {
            id: "news-1",
            title: "Công bố cấu trúc đề thi Tiếng Anh 40 câu chuẩn Sở GD&ĐT Cần Thơ (2026–2027)",
            date: "04/11/2026",
            category: "Khảo Thí & Đề Thi",
            summary: "Phân tích toàn diện ma trận đề thi 40 câu: 8 câu Listening có audio liền mạch, 23 câu Multiple Choice và 9 câu Tự luận trắc nghiệm hóa.",
            thumbnail: "",
            link: "classroom.html"
        },
        {
            id: "news-2",
            title: "Khai giảng khóa ôn luyện thi Olympic Tiếng Anh trên Internet (IOE) các cấp",
            date: "01/11/2026",
            category: "Bồi Dưỡng HSG",
            summary: "Chương trình huấn luyện phản xạ tốc độ cao, từ vựng mở rộng và các chủ điểm ngữ pháp then chốt cho học sinh từ Lớp 3 đến Lớp 9.",
            thumbnail: "",
            link: "classroom.html"
        },
        {
            id: "news-3",
            title: "Ra mắt Hệ thống khảo thí trực tuyến độc lập E CLASS trên nền tảng GitHub Pages",
            date: "28/10/2026",
            category: "Học Liệu Số",
            summary: "Học sinh có thể làm bài tập tự luyện và thi thử trực tuyến mọi lúc mọi nơi trên điện thoại và máy tính, nhận kết quả và lời giải chi tiết ngay lập tức.",
            thumbnail: "",
            link: "de-thi/lop-9/kiem-tra/giua-ky-1/de-03.html"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initHomepageCms();
});

// Nạp dữ liệu CMS từ localStorage hoặc file JSON
async function initHomepageCms() {
    try {
        const local = localStorage.getItem('stm_homepage_content');
        if (local) {
            currentCmsData = JSON.parse(local);
        }
    } catch(e) {}

    if (!currentCmsData) {
        try {
            const res = await fetch('./data/homepage_content.json?v=' + Date.now());
            if (res.ok) {
                currentCmsData = await res.json();
            }
        } catch(e) {}
    }

    if (!currentCmsData) {
        currentCmsData = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
    }

    renderCmsForms();
}

// Render dữ liệu vào các ô input form quản trị
function renderCmsForms() {
    if (!currentCmsData) return;

    // 1. Hero Section
    const h = currentCmsData.hero || {};
    setVal('cmsHeroBadge', h.badge || '');
    setVal('cmsHeroTitle', h.title || '');
    setVal('cmsHeroDesc', h.desc || '');
    setVal('cmsHeroBannerImg', h.bannerImg || '');
    setVal('cmsCtaPrimaryText', h.ctaPrimaryText || '');
    setVal('cmsCtaPrimaryLink', h.ctaPrimaryLink || '');
    setVal('cmsCtaSecondaryText', h.ctaSecondaryText || '');
    setVal('cmsCtaSecondaryLink', h.ctaSecondaryLink || '');
    setVal('cmsStat1Val', h.stat1Value || '');
    setVal('cmsStat1Lbl', h.stat1Label || '');
    setVal('cmsStat2Val', h.stat2Value || '');
    setVal('cmsStat2Lbl', h.stat2Label || '');
    setVal('cmsStat3Val', h.stat3Value || '');
    setVal('cmsStat3Lbl', h.stat3Label || '');

    setVal('cmsGoogleSheetApiUrl', currentCmsData.googleSheetApiUrl || '');

        // 1b. Showcase Card
    const sc = currentCmsData.showcase || {};
    setVal('cmsTeacherName', sc.teacherName || 'Thầy Nguyễn Hoàng Sơn');
    setVal('cmsTeacherTitle', sc.teacherTitle || 'Chủ nhiệm Chuyên môn STM Center');
    setVal('cmsTeacherStatus', sc.status || 'Đang tuyển sinh');
    setVal('cmsTeacherFeats', (sc.features || [
        'Lộ trình cá nhân hóa theo từng cấp học',
        'Giáo án 5512 & Bài giảng tương tác trực quan',
        'Luyện thi Olympic tiếng Anh IOE các cấp',
        'Chấm bài chi tiết, phản hồi tiến độ hàng tuần'
    ]).join('\n'));
    setVal('cmsBoxSubmitTitle', sc.boxSubmitTitle || 'HỆ THỐNG NỘP BÀI ONLINE');
    setVal('cmsBoxSubmitDesc', sc.boxSubmitDesc || 'Lưu trữ tự động Google Drive');
    setVal('cmsFloatHofTitle', sc.floatTitle || 'Vinh danh học sinh giỏi');
    setVal('cmsFloatHofDesc', sc.floatDesc || 'Top đầu kỳ thi học sinh giỏi & IOE Cần Thơ');

    // 2. Khối Khóa Học
    renderCmsCourses();

    // 3. Bảng Vàng Vinh Danh
    renderCmsHallOfFame();

    // 4. Bảng Tin & Thông Báo
    renderCmsNews();
}

function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
}

function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
}

// Render danh sách khóa học
function renderCmsCourses() {
    const container = document.getElementById('cmsCoursesContainer');
    if (!container) return;

    let html = '';
    (currentCmsData.courses || []).forEach((c, idx) => {
        html += `
        <div class="cms-card-item" style="background:#f8fafc; border:1px solid var(--border); border-radius:10px; padding:1.25rem; margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <h5 style="font-family:'Lexend',sans-serif; font-size:1.05rem; color:var(--navy); font-weight:700;">
                    <i class="fa-solid ${c.icon || 'fa-graduation-cap'}" style="color:var(--teal);"></i> ${c.title}
                </h5>
                <span class="badge" style="background:#e0f2fe; color:#0369a1;">${c.gradeBadge}</span>
            </div>
            <div class="form-grid" style="grid-template-columns: 2fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Tiêu Đề Khối:</label>
                    <input type="text" id="cmsCourseTitle_${idx}" class="form-control font-bold" value="${escapeHtmlAttr(c.title)}">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Huy Hiệu (Badge):</label>
                    <input type="text" id="cmsCourseBadge_${idx}" class="form-control" value="${escapeHtmlAttr(c.gradeBadge)}">
                </div>
            </div>
            <div class="form-group" style="margin-bottom:0.75rem;">
                <label class="form-label" style="font-size:0.8rem; font-weight:700;">Mô Tả Chương Trình:</label>
                <textarea id="cmsCourseDesc_${idx}" class="form-control" rows="2">${escapeHtml(c.desc)}</textarea>
            </div>
            <div class="form-group" style="margin-bottom:0;">
                <label class="form-label" style="font-size:0.8rem; font-weight:700;">3 Điểm Nổi Bật (Mỗi dòng 1 ý):</label>
                <textarea id="cmsCourseFeat_${idx}" class="form-control" rows="3">${(c.features || []).join('\n')}</textarea>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

// Render danh sách Bảng Vàng
function renderCmsHallOfFame() {
    const container = document.getElementById('cmsHofContainer');
    if (!container) return;

    let html = '';
    (currentCmsData.hallOfFame || []).forEach((s, idx) => {
        html += `
        <div class="cms-card-item" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:10px; padding:1.25rem; margin-bottom:1rem; position:relative; box-shadow:var(--shadow-sm);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <span class="badge" style="background:#fef3c7; color:#b45309; font-weight:800;">
                    <i class="fa-solid ${s.trophyIcon || 'fa-crown'}"></i> HỌC VIÊN VINH DANH #${idx + 1}
                </span>
                <button type="button" class="btn btn-sm btn-outline" style="color:#dc2626; border-color:#dc2626;" onclick="deleteHofItem(${idx})">
                    <i class="fa-solid fa-trash-can"></i> Xóa
                </button>
            </div>
            <div class="form-grid" style="grid-template-columns: 2fr 1.5fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Họ Và Tên Học Sinh (*):</label>
                    <input type="text" id="cmsHofName_${idx}" class="form-control font-bold" value="${escapeHtmlAttr(s.studentName)}">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Lớp / Phân Khối:</label>
                    <input type="text" id="cmsHofGrade_${idx}" class="form-control" value="${escapeHtmlAttr(s.gradeTag)}">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Điểm Số / Huy Hiệu:</label>
                    <input type="text" id="cmsHofScore_${idx}" class="form-control font-bold text-teal" value="${escapeHtmlAttr(s.scoreBadge)}">
                </div>
            </div>
            <div class="form-grid" style="grid-template-columns: 2fr 1fr; gap:0.75rem; margin-bottom:0;">
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Thành Tích / Lời Nhận Xét:</label>
                    <input type="text" id="cmsHofAchieve_${idx}" class="form-control" value="${escapeHtmlAttr(s.achievement)}">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Đường Dẫn Ảnh Đại Diện (Tùy chọn):</label>
                    <input type="text" id="cmsHofAvatar_${idx}" class="form-control" value="${escapeHtmlAttr(s.avatar || '')}" placeholder="VD: ./images/thinh.jpg hoặc link https://...">
                </div>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

function addHofItem() {
    syncCmsInputsToData();
    if (!currentCmsData.hallOfFame) currentCmsData.hallOfFame = [];
    currentCmsData.hallOfFame.unshift({
        id: "hof-" + Date.now(),
        studentName: "Bạn Học Sinh Mới",
        gradeTag: "Khối Lớp 9 • Lớp E9",
        achievement: "Đạt thành tích xuất sắc bài kiểm tra định kỳ.",
        scoreBadge: "10.0 / 10 • Xuất Sắc",
        avatar: "",
        trophyIcon: "fa-award"
    });
    renderCmsHallOfFame();
}

function deleteHofItem(idx) {
    if (!confirm('Thầy có chắc chắn muốn xóa học sinh này khỏi Bảng Vàng không?')) return;
    syncCmsInputsToData();
    currentCmsData.hallOfFame.splice(idx, 1);
    renderCmsHallOfFame();
}

// Render danh sách Bảng Tin
function renderCmsNews() {
    const container = document.getElementById('cmsNewsContainer');
    if (!container) return;

    let html = '';
    (currentCmsData.news || []).forEach((n, idx) => {
        html += `
        <div class="cms-card-item" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:10px; padding:1.25rem; margin-bottom:1rem; box-shadow:var(--shadow-sm);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <span class="badge" style="background:#e0f2fe; color:#0369a1; font-weight:800;">
                    <i class="fa-solid fa-newspaper"></i> BẢN TIN #${idx + 1}
                </span>
                <button type="button" class="btn btn-sm btn-outline" style="color:#dc2626; border-color:#dc2626;" onclick="deleteNewsItem(${idx})">
                    <i class="fa-solid fa-trash-can"></i> Xóa
                </button>
            </div>
            <div class="form-grid" style="grid-template-columns: 3fr 1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Tiêu Đề Bài Viết (*):</label>
                    <input type="text" id="cmsNewsTitle_${idx}" class="form-control font-bold" value="${escapeHtmlAttr(n.title)}">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Ngày Đăng:</label>
                    <input type="text" id="cmsNewsDate_${idx}" class="form-control" value="${escapeHtmlAttr(n.date)}">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Chuyên Mục:</label>
                    <input type="text" id="cmsNewsCat_${idx}" class="form-control" value="${escapeHtmlAttr(n.category)}">
                </div>
            </div>
            <div class="form-grid" style="grid-template-columns: 2fr 1fr; gap:0.75rem; margin-bottom:0;">
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Tóm Tắt Ngắn:</label>
                    <textarea id="cmsNewsSummary_${idx}" class="form-control" rows="2">${escapeHtml(n.summary)}</textarea>
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <label class="form-label" style="font-size:0.8rem; font-weight:700;">Đường Dẫn Ảnh Bìa (Tùy chọn):</label>
                    <input type="text" id="cmsNewsThumb_${idx}" class="form-control" value="${escapeHtmlAttr(n.thumbnail || '')}" placeholder="VD: ./images/news1.jpg">
                </div>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

function addNewsItem() {
    syncCmsInputsToData();
    if (!currentCmsData.news) currentCmsData.news = [];
    currentCmsData.news.unshift({
        id: "news-" + Date.now(),
        title: "Thông báo lịch ôn thi và khảo sát chất lượng định kỳ mới",
        date: new Date().toLocaleDateString('vi-VN'),
        category: "Thông Báo",
        summary: "Kế hoạch tổ chức khảo sát năng lực trực tuyến dành cho học sinh các khối lớp tại STM Center.",
        thumbnail: "",
        link: "classroom.html"
    });
    renderCmsNews();
}

function deleteNewsItem(idx) {
    if (!confirm('Thầy có chắc chắn muốn xóa bản tin này không?')) return;
    syncCmsInputsToData();
    currentCmsData.news.splice(idx, 1);
    renderCmsNews();
}

// Thu thập toàn bộ dữ liệu từ form vào currentCmsData
function syncCmsInputsToData() {
    if (!currentCmsData) currentCmsData = {};

    currentCmsData.updatedAt = new Date().toISOString();
    currentCmsData.googleSheetApiUrl = getVal('cmsGoogleSheetApiUrl');

    // 1. Hero
    currentCmsData.hero = {
        badge: getVal('cmsHeroBadge'),
        title: getVal('cmsHeroTitle'),
        desc: getVal('cmsHeroDesc'),
        bannerImg: getVal('cmsHeroBannerImg'),
        ctaPrimaryText: getVal('cmsCtaPrimaryText'),
        ctaPrimaryLink: getVal('cmsCtaPrimaryLink'),
        ctaSecondaryText: getVal('cmsCtaSecondaryText'),
        ctaSecondaryLink: getVal('cmsCtaSecondaryLink'),
        stat1Value: getVal('cmsStat1Val'),
        stat1Label: getVal('cmsStat1Lbl'),
        stat2Value: getVal('cmsStat2Val'),
        stat2Label: getVal('cmsStat2Lbl'),
        stat3Value: getVal('cmsStat3Val'),
        stat3Label: getVal('cmsStat3Lbl')
    };

        // 1b. Showcase Card
    const feats = getVal('cmsTeacherFeats');
    currentCmsData.showcase = {
        teacherName: getVal('cmsTeacherName'),
        teacherTitle: getVal('cmsTeacherTitle'),
        status: getVal('cmsTeacherStatus'),
        features: feats ? feats.split('\n').map(s => s.trim()).filter(Boolean) : [],
        boxSubmitTitle: getVal('cmsBoxSubmitTitle'),
        boxSubmitDesc: getVal('cmsBoxSubmitDesc'),
        floatTitle: getVal('cmsFloatHofTitle'),
        floatDesc: getVal('cmsFloatHofDesc')
    };

    // 2. Courses
    (currentCmsData.courses || []).forEach((c, idx) => {
        c.title = getVal('cmsCourseTitle_' + idx) || c.title;
        c.gradeBadge = getVal('cmsCourseBadge_' + idx) || c.gradeBadge;
        c.desc = getVal('cmsCourseDesc_' + idx) || c.desc;
        const feats = getVal('cmsCourseFeat_' + idx);
        c.features = feats ? feats.split('\n').map(s => s.trim()).filter(Boolean) : c.features;
    });

    // 3. Hall of fame
    (currentCmsData.hallOfFame || []).forEach((s, idx) => {
        s.studentName = getVal('cmsHofName_' + idx) || s.studentName;
        s.gradeTag = getVal('cmsHofGrade_' + idx) || s.gradeTag;
        s.scoreBadge = getVal('cmsHofScore_' + idx) || s.scoreBadge;
        s.achievement = getVal('cmsHofAchieve_' + idx) || s.achievement;
        s.avatar = getVal('cmsHofAvatar_' + idx) || '';
    });

    // 4. News
    (currentCmsData.news || []).forEach((n, idx) => {
        n.title = getVal('cmsNewsTitle_' + idx) || n.title;
        n.date = getVal('cmsNewsDate_' + idx) || n.date;
        n.category = getVal('cmsNewsCat_' + idx) || n.category;
        n.summary = getVal('cmsNewsSummary_' + idx) || n.summary;
        n.thumbnail = getVal('cmsNewsThumb_' + idx) || '';
    });
}

// 1. NÚT "CẬP NHẬT LÊN TRANG CHỦ" (MỘT CHẠM ĐỒNG BỘ ĐA TẦNG)
async function saveCmsContentLive() {
    syncCmsInputsToData();
    const jsonStr = JSON.stringify(currentCmsData, null, 2);

    try {
        // Tầng 1: Lưu vào LocalStorage (Trang chủ cập nhật ngay lập tức 0s độ trễ)
        localStorage.setItem('stm_homepage_content', jsonStr);

        // Tầng 2: Nếu có Google Sheets API URL, gửi đồng bộ lên đám mây
        const apiUrl = currentCmsData.googleSheetApiUrl;
        if (apiUrl && apiUrl.startsWith('http')) {
            try {
                fetch(apiUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonStr
                });
            } catch(e) {}
        }

        // Tự động tải file JSON về máy để Thầy chỉ cần kéo thả lên GitHub
        downloadBlob(jsonStr, 'homepage_content.json', 'application/json');

        if (typeof showStatusMessage === 'function') {
            showStatusMessage('Đã cập nhật diện mạo mới lên Trang Chủ thành công! Thầy mở tab Trang Chủ và bấm Ctrl + F5 để xem thay đổi ngay.', 'success');
        } else {
            alert('Đã cập nhật dữ liệu lên Trang Chủ thành công!\n\nThầy mở tab index.html và bấm Ctrl + F5 (hoặc F5) để tải diện mạo mới ngay lập tức!');
        }
    } catch(e) {
        alert('Lỗi lưu dữ liệu: ' + e);
    }
}

// 2. NÚT TẢI FILE DATA/HOMEPAGE_CONTENT.JSON
function downloadCmsJsonFile() {
    syncCmsInputsToData();
    const jsonStr = JSON.stringify(currentCmsData, null, 2);
    downloadBlob(jsonStr, 'homepage_content.json', 'application/json');

    if (typeof showStatusMessage === 'function') {
        showStatusMessage('Đã tải xuống file homepage_content.json! Thầy chỉ cần kéo thả vào thư mục data/ trên GitHub.', 'success');
    }
}

// 3. NÚT XEM TRANG CHỦ (PREVIEW)
function previewHomepageLive() {
    syncCmsInputsToData();
    localStorage.setItem('stm_homepage_content', JSON.stringify(currentCmsData, null, 2));
    window.open('index.html', '_blank');
}

// 4. NÚT KHÔI PHỤC MẶC ĐỊNH
function resetCmsToDefault() {
    if (!confirm('Thầy có chắc chắn muốn khôi phục lại nội dung trang chủ về bản gốc ban đầu không?')) return;
    currentCmsData = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
    localStorage.removeItem('stm_homepage_content');
    renderCmsForms();
    if (typeof showStatusMessage === 'function') {
        showStatusMessage('Đã khôi phục nội dung trang chủ về mặc định thành công!', 'info');
    }
}

function switchCmsSubTab(subTabId) {
    ['cms-sub-hero', 'cms-sub-courses', 'cms-sub-hof', 'cms-sub-news'].forEach(id => {
        const el = document.getElementById(id);
        const btn = document.getElementById('btn_' + id);
        if (el) el.style.display = (id === subTabId) ? 'block' : 'none';
        if (btn) {
            if (id === subTabId) {
                btn.classList.add('active');
                btn.style.background = '#0d9488';
                btn.style.color = '#ffffff';
                btn.style.borderColor = '#0d9488';
            } else {
                btn.classList.remove('active');
                btn.style.background = '#ffffff';
                btn.style.color = '#334155';
                btn.style.borderColor = '#cbd5e1';
            }
        }
    });
}

function downloadBlob(content, fileName, mimeType) {
    try {
        const blob = new Blob([content], { type: mimeType || 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    } catch (e) {
        console.error('Lỗi khi tải tệp xuống:', e);
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeHtmlAttr(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
