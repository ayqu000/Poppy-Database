// lang.js - Quản lý đa ngôn ngữ EN/VI

const translations = {
    en: {
        // Index page
        welcome_title: "Welcome to Poppy Database",
        welcome_desc: "Your complete information hub for Poppy Playtime. Explore each chapter, meet the characters, and uncover the secrets of the toy factory.",
        ch1_desc: "Released: October 12, 2021. The beginning of the nightmare. Explore the abandoned factory and meet Huggy Wuggy.",
        ch2_desc: "Released: May 5, 2022. The mystery deepens in the Game Station. New toys, new threats.",
        ch3_desc: "Released: January 30, 2024. Enter the orphanage and face CatNap, DogDay, and more.",
        ch4_desc: "Released: January 30, 2025. Descend into the depths and encounter new allies and enemies.",
        view_chapter: "View Chapter",
        
        // Chapter pages (general)
        release_info: "Release Info",
        release_date: "Release Date",
        developer: "Developer",
        platforms_hardware: "Platforms (Hardware)",
        available_on: "Available on",
        story: "Story",
        gameplay_features: "Gameplay Features",
        characters: "Characters",
        official_trailer: "Official Trailer",
        back_to_home: "Back to Home",

        // Chapter 1 specific
        ch1_title: "Chapter 1: A Tight Squeeze",
        ch1_subtitle: "The nightmare begins.",
        ch1_story: "You return to the abandoned Playtime Co. factory ten years after all employees mysteriously disappeared. Using the GrabPack, you navigate through the facility, solve puzzles, and discover the truth behind the missing workers. The chapter introduces the iconic Huggy Wuggy, who chases you through the vents.",
        ch1_features: [
            "First-person puzzle-solving",
            "Introduction of the GrabPack tool",
            "Stealth sequences with Huggy Wuggy",
            "VHS tapes revealing lore"
        ],
        ch1_characters: {
            "Huggy Wuggy": "Antagonist",
            "Poppy": "Mystery Doll",
            "The Player": "Protagonist",
            "Elliot Ludwig": "Founder (mentioned)"
        },

        // Chapter 2
        ch2_title: "Chapter 2: Fly in a Web",
        ch2_subtitle: "The Game Station awaits.",
        ch2_story: "Following the events of Chapter 1, you venture deeper into the factory and discover the Game Station – an underground area filled with games and attractions. You meet Mommy Long Legs, who forces you to play her games. The chapter ends with a dramatic confrontation and a glimpse of the Prototype.",
        ch2_features: [
            "Expanded GrabPack abilities (blue and red hands)",
            "Three mini-games: Statues, Musical Memory, Wack-a-Wuggy",
            "Puzzle-solving and platforming",
            "Introduction of new enemies: Mommy Long Legs, Bunzo Bunny, PJ Pug-a-Pillar"
        ],
        ch2_characters: {
            "Mommy Long Legs": "Main Antagonist",
            "Kissy Missy": "Supporting Character",
            "Bunzo Bunny": "Mini-game Host",
            "PJ Pug-a-Pillar": "Mini-game Host",
            "The Prototype": "Mysterious Entity"
        },

        // Chapter 3
        ch3_title: "Chapter 3: Deep Sleep",
        ch3_subtitle: "Enter the Home Sweet Home.",
        ch3_story: "After the events of Chapter 2, you find yourself in Playcare, an orphanage built beneath the factory. You must navigate this eerie place while being hunted by CatNap, a new toy who induces sleep in his victims. You'll also encounter other orphans and the smiling critters.",
        ch3_features: [
            "New GrabPack abilities: gas mask and flare gun",
            "Stealth and evasion from CatNap",
            "Exploration of Playcare: school, home, and more",
            "Collectibles: memory cards and VHS tapes"
        ],
        ch3_characters: {
            "CatNap": "Main Antagonist",
            "DogDay": "Supporting Character",
            "Kissy Missy": "Ally",
            "The Smiling Critters": "Toy Group",
            "Poppy": "Guiding Doll",
            "Ollie": "Voice on Radio"
        },

        // Chapter 4
        ch4_title: "Chapter 4: Safe Haven",
        ch4_subtitle: "Descent into darkness.",
        ch4_story: "Continuing deeper into the factory, you discover a hidden underground facility called Safe Haven. Here, you encounter both friendly and hostile toys, uncover more about the Prototype, and learn the truth about the children who became the toys. The chapter introduces new gameplay mechanics and emotional moments.",
        ch4_features: [
            "New GrabPack abilities: shield and grappling hook",
            "Combat and stealth against new enemies",
            "Hub area with NPCs",
            "Multiple endings hinted"
        ],
        ch4_characters: {
            "Yarnaby": "Antagonist",
            "Pianosaurus": "Antagonist",
            "Doey the Doughman": "Ally",
            "The Doctor": "Antagonist",
            "Kissy Missy": "Ally",
            "The Prototype": "Main Villain",
            "Poppy": "Guiding Doll"
        }
    },

    vi: {
        // Index page
        welcome_title: "Chào mừng đến với Poppy Database",
        welcome_desc: "Trung tâm thông tin đầy đủ về Poppy Playtime. Khám phá từng chương, gặp gỡ các nhân vật và tìm hiểu bí mật của nhà máy đồ chơi.",
        ch1_desc: "Phát hành: 12/10/2021. Khởi đầu cơn ác mộng. Khám phá nhà máy bỏ hoang và gặp Huggy Wuggy.",
        ch2_desc: "Phát hành: 5/5/2022. Bí ẩn sâu hơn tại Game Station. Đồ chơi mới, mối đe dọa mới.",
        ch3_desc: "Phát hành: 30/1/2024. Bước vào trại trẻ mồ côi và đối mặt với CatNap, DogDay, v.v.",
        ch4_desc: "Phát hành: 30/1/2025. Xuống sâu hơn và gặp đồng minh cũng như kẻ thù mới.",
        view_chapter: "Xem Chương",

        // Chapter pages (general)
        release_info: "Thông tin phát hành",
        release_date: "Ngày phát hành",
        developer: "Nhà phát triển",
        platforms_hardware: "Nền tảng (Phần cứng)",
        available_on: "Có mặt trên",
        story: "Cốt truyện",
        gameplay_features: "Tính năng gameplay",
        characters: "Nhân vật",
        official_trailer: "Trailer chính thức",
        back_to_home: "Quay lại Trang chủ",

        // Chapter 1
        ch1_title: "Chương 1: A Tight Squeeze",
        ch1_subtitle: "Cơn ác mộng bắt đầu.",
        ch1_story: "Bạn trở lại nhà máy Playtime Co. bỏ hoang mười năm sau khi tất cả nhân viên biến mất bí ẩn. Sử dụng GrabPack, bạn đi qua cơ sở, giải câu đố và khám phá sự thật về những công nhân mất tích. Chương này giới thiệu Huggy Wuggy biểu tượng, kẻ đuổi theo bạn qua các ống thông gió.",
        ch1_features: [
            "Giải đố góc nhìn thứ nhất",
            "Giới thiệu công cụ GrabPack",
            "Các đoạn lén lút với Huggy Wuggy",
            "Băng VHS tiết lộ truyền thuyết"
        ],
        ch1_characters: {
            "Huggy Wuggy": "Phản diện",
            "Poppy": "Búp bê bí ẩn",
            "The Player": "Nhân vật chính",
            "Elliot Ludwig": "Nhà sáng lập (được nhắc đến)"
        },

        // Chapter 2
        ch2_title: "Chương 2: Fly in a Web",
        ch2_subtitle: "Game Station đang chờ.",
        ch2_story: "Sau sự kiện Chương 1, bạn đi sâu hơn vào nhà máy và khám phá Game Station – khu vực ngầm với các trò chơi và điểm tham quan. Bạn gặp Mommy Long Legs, người buộc bạn chơi trò chơi của cô ta. Chương kết thúc với cuộc đối đầu và hình ảnh thoáng qua của The Prototype.",
        ch2_features: [
            "Khả năng GrabPack mở rộng (tay xanh và đỏ)",
            "Ba trò chơi nhỏ: Statues, Musical Memory, Wack-a-Wuggy",
            "Giải đố và vượt chướng ngại vật",
            "Giới thiệu kẻ thù mới: Mommy Long Legs, Bunzo Bunny, PJ Pug-a-Pillar"
        ],
        ch2_characters: {
            "Mommy Long Legs": "Phản diện chính",
            "Kissy Missy": "Nhân vật hỗ trợ",
            "Bunzo Bunny": "Người dẫn trò chơi nhỏ",
            "PJ Pug-a-Pillar": "Người dẫn trò chơi nhỏ",
            "The Prototype": "Thực thể bí ẩn"
        },

        // Chapter 3
        ch3_title: "Chương 3: Deep Sleep",
        ch3_subtitle: "Bước vào Home Sweet Home.",
        ch3_story: "Sau Chương 2, bạn thấy mình ở Playcare, trại trẻ mồ côi dưới nhà máy. Bạn phải điều hướng nơi kỳ lạ này trong khi bị săn đuổi bởi CatNap, món đồ chơi mới gây buồn ngủ cho nạn nhân. Bạn cũng sẽ gặp những đứa trẻ mồ côi khác và Smiling Critters.",
        ch3_features: [
            "Khả năng GrabPack mới: mặt nạ khí và súng pháo sáng",
            "Lén lút và né tránh CatNap",
            "Khám phá Playcare: trường học, nhà ở, v.v.",
            "Vật phẩm sưu tầm: thẻ nhớ và băng VHS"
        ],
        ch3_characters: {
            "CatNap": "Phản diện chính",
            "DogDay": "Nhân vật hỗ trợ",
            "Kissy Missy": "Đồng minh",
            "The Smiling Critters": "Nhóm đồ chơi",
            "Poppy": "Búp bê dẫn đường",
            "Ollie": "Giọng nói trên radio"
        },

        // Chapter 4
        ch4_title: "Chương 4: Safe Haven",
        ch4_subtitle: "Xuống sâu trong bóng tối.",
        ch4_story: "Tiếp tục xuống sâu hơn, bạn phát hiện cơ sở ngầm có tên Safe Haven. Tại đây, bạn gặp cả đồ chơi thân thiện và thù địch, tìm hiểu thêm về The Prototype và sự thật về những đứa trẻ trở thành đồ chơi. Chương giới thiệu cơ chế gameplay mới và khoảnh khắc cảm xúc.",
        ch4_features: [
            "Khả năng GrabPack mới: khiên và móc kéo",
            "Chiến đấu và lén lút chống lại kẻ thù mới",
            "Khu vực trung tâm với NPC",
            "Gợi ý nhiều kết thúc"
        ],
        ch4_characters: {
            "Yarnaby": "Phản diện",
            "Pianosaurus": "Phản diện",
            "Doey the Doughman": "Đồng minh",
            "The Doctor": "Phản diện",
            "Kissy Missy": "Đồng minh",
            "The Prototype": "Phản diện chính",
            "Poppy": "Búp bê dẫn đường"
        }
    }
};

function changeLanguage(lang) {
    // Cập nhật class active cho nút
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`).classList.add('active');

    // Lấy tất cả phần tử có data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Cập nhật nội dung đặc biệt cho trang chapter
    // (Các phần tử có id hoặc class cụ thể - tùy theo cách bố trí)
    // Có thể dùng data-i18n cho các phần tử động hơn
    // Ví dụ cho chapter title:
    const pageTitle = document.querySelector('.chapter-header h1');
    if (pageTitle && pageTitle.hasAttribute('data-i18n')) {
        pageTitle.textContent = translations[lang][pageTitle.getAttribute('data-i18n')];
    }
    const pageSubtitle = document.querySelector('.chapter-header .subtitle');
    if (pageSubtitle && pageSubtitle.hasAttribute('data-i18n')) {
        pageSubtitle.textContent = translations[lang][pageSubtitle.getAttribute('data-i18n')];
    }

    // Cập nhật story
    const storyEl = document.querySelector('.info-section p[data-i18n]');
    if (storyEl) storyEl.textContent = translations[lang][storyEl.getAttribute('data-i18n')];

    // Cập nhật các features (list items)
    const featureItems = document.querySelectorAll('.info-section li[data-i18n]');
    featureItems.forEach((item, index) => {
        const key = item.getAttribute('data-i18n');
        if (translations[lang][key] && Array.isArray(translations[lang][key])) {
            // Nếu là mảng, lấy theo index
            item.textContent = translations[lang][key][index];
        } else {
            item.textContent = translations[lang][key];
        }
    });

    // Cập nhật vai trò nhân vật (nếu có data-i18n-role)
    const characterRoles = document.querySelectorAll('.character-profile .character-role[data-i18n-role]');
    characterRoles.forEach(role => {
        const charKey = role.getAttribute('data-i18n-role');
        if (translations[lang][charKey]) {
            role.textContent = translations[lang][charKey];
        }
    });

    // Lưu ngôn ngữ hiện tại vào localStorage để nhớ
    localStorage.setItem('preferredLang', lang);
}

// Khởi tạo ngôn ngữ khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLanguage(savedLang);
});
