/* =========================================
   DATABASE: BÁCH KHOA TOÀN THƯ VỀ YẾN NGỌC
   (Nguồn: Tổng hợp chi tiết từ file Word của Sư Phụ)
========================================= */
const appData = {
    // 1. PROFILE CHI TIẾT
    profile: {
        fullname: "Lâm Yến Ngọc",
        nickname: "Bé Cưng ❤️",
        dob: "06/05/2005 (Kim Ngưu ♉)",
        avatar: "assets/img/cuti/z7489997566779_7c6a26be0ea7076eee4c5e3db5db6a7a.jpg",
        avatar_thumbnail: "assets/img/cuti/avt.webp",
        
        // --- 1. THÔNG TIN CƠ BẢN (TAB 1) ---
        basic_info: [
            { icon: "🎓", label: "Học vấn", val: "Logistics - ĐH GTVT TP.HCM" },
            { icon: "🏡", label: "Cư ngụ", val: "Vinhomes Grand Park (Q7)" },
            { icon: "⛪", label: "Quá khứ", val: "Ban Nhạc Nhà Thờ (Từ nhỏ)" },
            { icon: "🎹", label: "Đam mê", val: "Luyện đàn 10 tiếng/ngày (xưa)" }
        ],

        // --- 2. KỸ NĂNG & NGHỆ THUẬT (TAB 1) ---
        skills: [
            { name: "Piano & Cổ Tranh", level: "Master (10 năm)", percent: 99, color: "#a29bfe", icon: '<i class="fas fa-music"></i>', story: "Biết chơi từ nhỏ. Hồi xưa luyện 10 tiếng/ngày. Diễn nhà hát từ năm 12 tuổi. Hiện tại diễn ở quán 2 lần/tháng. Học Cổ Tranh vì Mẹ thích nghe." },
            { name: "Handmade & Vẽ", level: "Artist", percent: 95, color: "#ff7675", icon: '<i class="fas fa-paint-brush"></i>', story: "Cấp 1 làm hoa giấy. Cấp 2-3 móc len, vẽ chân dung tặng thầy cô. Thích tự tay làm quà để người nhận trân trọng nó." },
            { name: "Thể Thao & Cờ", level: "Active", percent: 85, color: "#00cec9", icon: '<i class="fas fa-running"></i>', story: "Bơi lội, Bắn cung (ngầu lòi). Đặc biệt: Chơi Cờ Vây với ông nội." }
        ],

        // --- 3. TÍNH CÁCH & CON NGƯỜI (TAB 2) ---
        personality: {
            tags: ["Hơi OCD (Chỉn chu)", "Thẳng tính", "Bốc đồng", "Nội tâm", "Ghét thụ động"],
            desc: "Bề ngoài nhẹ nhàng nhưng cá tính mạnh. Cái tôi hơi cao, ghét bị áp đảo nhưng dễ nhường nhịn. Thích mạo hiểm nhưng trong mối quan hệ cần sự an toàn tuyệt đối. Dễ rung động và dễ tha thứ (vì hay đặt cảm xúc người khác lên mình).",
            social: [
                "Ông Nội (Bạn chơi cờ)", "Chị gái & Em trai họ", 
                "Hà Anh (Bạn)", "Hội bạn thân quốc tế (Pháp, Đức, Hàn)"
            ]
        },

        // --- 4. GU ĂN UỐNG (TAB 3 - QUAN TRỌNG) ---
        food_habits: {
            likes: ["Bún Bò Huế", "Rau (Ăn tạp)", "Đồ ngọt (Choco, KitKat)", "Croissant", "Mê làm Nail"],
            dislikes: [ // DANH SÁCH CẤM KỴ (LƯU Ý KHI ĐI DATE)
                "❌ KHÔNG ĂN: Hành, Hẹ, Tỏi",
                "❌ KHÔNG ĂN: Cá, Mắm, Đồ tươi sống",
                "❌ KHÔNG ĂN: Mỡ, Đồ quá dầu, Đồ quá cay",
                "⚠️ Kén hải sản"
            ],
            note: "Có thể ăn hết 2 bịch KitKat lớn trong 1 ngày. Thích đi dạo và ăn vặt."
        },

// --- 5. CHUYỆN TÌNH YÊU (PHẦN QUAN TRỌNG NHẤT) ---
        love_story: {
            ideal_type: "Thích người học giỏi (hơn vẻ ngoài), tinh tế, kiên nhẫn, có ý chí phấn đấu. Không thích người quá béo. Chiều cao không quan trọng.",
            origami_secret: "Từ nhỏ tớ đã gấp hạc và sao. Tớ suy nghĩ: Đến lúc gặp được người ấy, tớ sẽ tặng tất cả hạc và sao đã gấp trong những năm tháng chưa gặp nhau. Đó là khoảng thời gian và những điều ước tớ dành dụm cho người ấy.",
            
            // HẠNH PHÚC (GREEN FLAGS)
            happiness: [
                "Sự quan tâm trên ngưỡng mong đợi.",
                "Cảm giác AN TOÀN tuyệt đối.",
                "Luôn được ưu tiên là QUAN TRỌNG NHẤT."
            ],

            // NỖI SỢ & TỔN THƯƠNG (RED FLAGS)
            fears: [
                "Sợ người né tránh vấn đề, dễ dàng từ bỏ tình yêu.",
                "Sợ bị bỏ rơi lúc khó khăn thay vì cùng chia sẻ.",
                "Ghét câu 'Ngủ đi mai tính' khi cãi vã (Muốn giải quyết luôn).",
                "Không cần lời động viên 'Cố lên' từ phía sau, tớ cần người đứng CẠNH BÊN cùng giải quyết.",
                "Ghét sự lảng tránh khi đối phương bị stress.",
                "Cực ghét lý do: 'Không hợp', 'Hết cảm xúc', 'Áp lực quá' (Chỉ là ngụy biện cho hết yêu)."
            ]
        }
    },

    // 2. TIMELINE (GIỮ NGUYÊN NHƯ CŨ VÌ ĐÃ KHÁ ĐỦ)
    timeline: [
        {
            date: "19/01/2026",
            title: "Làm Quen & Lụm Info 🕵️‍♂️",
            icon: "🔍",
            img: "assets/img/cuti/z7489997559494_34f6dc7d05d1082fd2e1b7f7be1b9a5a.jpg",
            desc: "Bước đầu tiên...",
            story: "Ngày 19/1/2026: Lần đầu tớ làm quen cậu nè :3. Lụm info từ bạn thân cậu ahhh. Hồi hộp ghê!"
        },
        {
            date: "20/01/2026",
            title: "Biết Tên Nhau 💬",
            icon: "✨",
            img: "assets/img/cuti/z7489997566779_7c6a26be0ea7076eee4c5e3db5db6a7a.jpg",
            desc: "Yến Ngọc - Cái tên rất đẹp...",
            story: "Ngày 20/1/2026: Lần đầu tiên cậu rep tớ còn khá dè dặt nè, cũng là ngày đầu tiên tớ biết tên cậu là Yến Ngọc (1 cái tên rất đẹp)."
        },
        {
            date: "21/01/2026",
            title: "Khoe Mèo 🐱",
            icon: "😺",
            img: "assets/img/cat/z7489997715011_d6728a1abab7f8c4362774c8d91b4024.jpg",
            desc: "Những chú mèo đáng yêu...",
            story: "Ngày 21/1/2026: Cậu lần đầu khoe mèo cho tớ xem nè. Cưng xỉu!"
        },
        {
            date: "21/01/2026",
            title: "Thỏ Len & Xương Rồng 🐰",
            icon: "🧶",
            img: "assets/img/cuti/z7489997568543_be4f1eecc888849d14489db0b9048c3f.jpg",
            desc: "Sự khéo tay của bé...",
            story: "Ngày 21/1/2026: Lần đầu cậu khoe ảnh thỏ 7 màu đan bằng len, khoe cây xương rồng cậu chăm sóc nữa."
        },
        {
            date: "22/01/2026",
            title: "Phá Băng ❄️",
            icon: "🔥",
            img: "assets/img/cuti/z7489997568441_255ce23f96785340bcec320eb390e730.jpg",
            desc: "Chạm nhẹ vào trái tim...",
            story: "Ngày 22/1/2026: Phá băng bên trong cậu 1 chút. Tớ cảm nhận được sự ấm áp đang dần hé lộ."
        },
        {
            date: "24/01/2026",
            title: "Biến Cố Sức Khỏe 🏥",
            icon: "💊",
            img: "assets/img/food/z7489997577586_0f879219c56b94658e4482365eb6ead5.jpg",
            desc: "Lo lắng cho cậu...",
            story: "Ngày 24/1/2026: Cậu nhập viện vì bị bệnh viêm loét dạ dày + sốt cao. Thương ghê gớm!"
        },
        {
            date: "24/01/2026",
            title: "Lời Mời Đi Chơi 🎫",
            icon: "🎡",
            img: "assets/img/food/z7489997635060_36d73097dd86aafa79e308d3b549ac57.jpg",
            desc: "Bước tiến lớn...",
            story: "Ngày 24/1/2026: Lần đầu cậu nhận lời mời đi chơi của tớ. Vui không tả nổi!"
        },
        {
            date: "24/01/2026",
            title: "Mở Lòng Chia Sẻ 🔓",
            icon: "🗝️",
            img: "assets/img/food/z7489997635173_c207f7c6bdb0cd07d9f9163fd43903b1.jpg",
            desc: "Tâm sự đêm khuya...",
            story: "Ngày 24/1/2026: Lần đầu cậu mở lòng chia sẻ những chuyện trong lòng cậu với tớ."
        },
        {
            date: "24/01/2026",
            title: "Bị Mẹ Gank 😂",
            icon: "👀",
            img: "assets/img/cuti/z7489997559494_34f6dc7d05d1082fd2e1b7f7be1b9a5a.jpg",
            desc: "Sự cố hài hước...",
            story: "Ngày 24/1/2026: Cậu bị mẹ cậu gank lúc nhắn tin tớ ban đêm =))). Kỷ niệm khó quên!"
        },
        {
            date: "25/01/2026",
            title: "Câu nói: \"Nhớ tớ\" 💌",
            icon: "💓",
            img: "assets/img/cat/z7489997710056_f80c153621c2183dadf0570026cc2a44.jpg",
            desc: "Tim rung rinh...",
            story: "Ngày 25/1/2026: Lần đầu tiên cậu nhắn nhớ tớ :33. Cũng bị mẹ tra khảo nữa, thương bé."
        },
        {
            date: "26/01/2026",
            title: "Tiếng Đàn Tặng Tớ 🎹",
            icon: "🎵",
            img: "assets/img/cat/z7489997697774_cc8b565ef0caf5b47c61c0696db47870.jpg",
            desc: "Giai điệu ngọt ngào...",
            story: "Ngày 26/1/2026: Lần đầu được cậu đàn tặng mặc dù cắt còn 40s nhưng tớ rất vui và trân trọng."
        },
        {
            date: "26/01/2026",
            title: "Quốc Bộ 10km 🏃",
            icon: "👟",
            img: "assets/img/cat/z7489997717234_ed711c909733d4487dc018617d4fb621.jpg",
            desc: "Kỷ niệm hài hước...",
            story: "Ngày 26/1/2026: Lần đầu kể mẩu chuyện tý thì quốc bộ 10km của tớ cho cậu nghe."
        },
        {
            date: "26/01/2026",
            title: "Hạc Giấy & Ngôi Sao 🎐",
            icon: "⭐",
            img: "assets/img/cat/z7489997725903_ff7bf6b0a5185e66ec6966bde804d780.jpg",
            desc: "Ý nghĩa sâu sắc...",
            story: "Ngày 26/1/2026: Lần đầu tớ biết đến ý nghĩa hạc giấy và ý nghĩa của những ngôi sao của cậu dành cho đối tượng tương lai."
        },
        {
            date: "27/01/2026",
            title: "Trải Lòng & Làm Bạn 🤝",
            icon: "🌱",
            img: "assets/img/food/z7489997630500_d32b37cee8feb2b1ac066dfd6626272b.jpg",
            desc: "Khoảng cách và thấu hiểu...",
            story: "Ngày 27/1/2026: Chia sẻ trải lòng vì lo sợ cậu đang dè dặt với tớ. Cũng là lần đầu cậu đẩy tớ bảo tớ làm bạn, nhưng tớ đã cùng cậu cảm nhận được để thoải mái với tớ hơn."
        },
        {
            date: "27/01/2026",
            title: "Sự Thật & Du Học 🌏",
            icon: "✈️",
            img: "assets/img/food/z7489997629577_22e3146f31a789f2c5b246eed569aee5.jpg",
            desc: "Những bí mật hé lộ...",
            story: "Ngày 27/1/2026: Lần đầu cậu chia sẻ cảm nhận về tớ :3 về con người tớ, tính cách tớ. Cũng là lần đầu tớ biết cậu sẽ đi du học."
        },
        {
            date: "27/01/2026",
            title: "Thay Đổi Quyết Định ❤️",
            icon: "🔄",
            img: "assets/img/food/z7489997570941_d7e3b27cc10971db5694883b5d22287c.jpg",
            desc: "Giữ lại hy vọng...",
            story: "Ngày 27/1/2026: Nhắn hết tâm tình cậu mới thay đổi quyết định không đuổi tớ nữa :3."
        },
        {
            date: "27/01/2026",
            title: "Sự Kiên Trì Của Tớ 💪",
            icon: "🔥",
            img: "assets/img/cuti/z7489997566779_7c6a26be0ea7076eee4c5e3db5db6a7a.jpg",
            desc: "Lì đòn...",
            story: "Ngày 27/1/2026: Tới đêm cậu lại đuổi tớ do sợ tớ đợi thiệt thòi nhưng tớ lì quá mà =))) quyết tâm cho bằng được :>"
        },
        {
            date: "28/01/2026",
            title: "Tìm Hiểu Sở Thích 🍜",
            icon: "🔍",
            img: "assets/img/food/z7489997630500_d32b37cee8feb2b1ac066dfd6626272b.jpg",
            desc: "Hiểu nhau hơn...",
            story: "Ngày 28/1/2026: Lần đầu tớ và cậu tìm hiểu món yêu thích của nhau :3 và tìm hiểu về nhau."
        },
        {
            date: "30/01/2026",
            title: "Vượt Qua Nỗi Buồn ☔",
            icon: "🌈",
            img: "assets/img/cat/z7489997646132_9b3754877bfaca2bec81a2618d6f9c65.jpg",
            desc: "Luôn bên cạnh cậu...",
            story: "Ngày 30/1/2026: Cậu có chuyện buồn cá nhân còn bảo tớ ngưng nhắn 10 ngày nữa, còn làm cậu khóc nữa. Nhưng may sao tớ đã cố gắng giúp đỡ cậu vượt qua 1 phần nào đó :<<"
        },
        {
            date: "01/02/2026",
            title: "Những Mẩu Chuyện 📖",
            icon: "🗣️",
            img: "assets/img/cat/z7489997732995_478588c95dfd3c72a1b81d1c8e802683.jpg",
            desc: "Ngày càng gắn kết...",
            story: "Ngày 1/2/2026: Tớ tìm hiểu cậu tới bây giờ và cậu kể cho tớ rất nhiều mẩu chuyện thú vị nữa :>"
        }
    ],

    // 3. DANH SÁCH NHẠC (Giữ nguyên)
    musicList: [
        { title: "Kỷ niệm Vũng Tàu Trip", file: "assets/music/playlist_yen_ngoc/06_2023_VungTauTrip.m4a" },
        { title: "Wedding Mrs.Huong", file: "assets/music/playlist_yen_ngoc/06_2023_Wedding_Mrs.Huong.m4a" },
        { title: "Hà Nội Mùa Thu", file: "assets/music/playlist_yen_ngoc/HaNoi_06_2023.m4a" },
        { title: "Giai điệu 20/01/2026", file: "assets/music/playlist_yen_ngoc/HCM_20_01_26.m4a" },
        { title: "Sunny Piano (Chill)", file: "assets/music/playlist_yen_ngoc/Sunnypiano Ca1_13.m4a" },
        { title: "Kỷ niệm 25/05/2022", file: "assets/music/playlist_yen_ngoc/HCM_25_05_2022.m4a" },
        { title: "Ngày 31/10/2022", file: "assets/music/playlist_yen_ngoc/HCM_31_10_2022.m4a" },
        { title: "Sài Gòn 12/2025", file: "assets/music/playlist_yen_ngoc/HCM_12_2025.m4a" },
        { title: "Ca 2 QSK 15.1", file: "assets/music/playlist_yen_ngoc/Ca 2 QSK_15_1.m4a" },
        { title: "HCM 03/03/2025", file: "assets/music/playlist_yen_ngoc/HCM_03_03_2025.m4a" },
        { title: "NHHCM 18/01/2026", file: "assets/music/playlist_yen_ngoc/NHHCM_18_01_2026.m4a" },
        { title: "HCMBHGAV 23/01/2026", file: "assets/music/playlist_yen_ngoc/HCMBHGAV_23_01_26.m4a" }
    ],
    // 4. THƯ VIỆN ẢNH (DÂY PHƠI)
    gallery: [
        // DÂY 1
        { img: "assets/img/cuti/z7489997566779_7c6a26be0ea7076eee4c5e3db5db6a7a.jpg", caption: "Nụ cười ấy...", rotate: -3, delay: 0 },
        { img: "assets/img/cat/z7489997715011_d6728a1abab7f8c4362774c8d91b4024.jpg", caption: "Meow Meow 😺", rotate: 2, delay: 0.5 },
        { img: "assets/img/cuti/z7489997568543_be4f1eecc888849d14489db0b9048c3f.jpg", caption: "Khéo tay ghê!", rotate: -5, delay: 1 },
        { img: "assets/img/food/z7489997635060_36d73097dd86aafa79e308d3b549ac57.jpg", caption: "Đi chơi nè 🎡", rotate: 4, delay: 1.5 },
        
        // DÂY 2 (Nếu muốn thêm nhiều ảnh thì thêm vào đây)
        { img: "assets/img/cat/z7489997725903_ff7bf6b0a5185e66ec6966bde804d780.jpg", caption: "Hạc giấy 🎐", rotate: -2, delay: 0.2 },
        { img: "assets/img/food/z7489997635173_c207f7c6bdb0cd07d9f9163fd43903b1.jpg", caption: "Yummy 🍜", rotate: 3, delay: 0.8 },
        { img: "assets/img/cuti/z7489997559494_34f6dc7d05d1082fd2e1b7f7be1b9a5a.jpg", caption: "Cute xỉu ❤️", rotate: -4, delay: 1.2 }




    ],
    // 5. RẠP CHIẾU PHIM (DANH SÁCH VIDEO)
    video_gallery: [
        {
            title: "Xung quanh nhà cậu 🎥",
            type: "local", // Video tải lên host
            link: "assets/video/About_life_jade/7489997559009.mp4", // Thay đường dẫn file của Sư Phụ vào
            desc: "Mấy cậu học sinh cấp 3 còn cao hơn tớ nữa kìa!"
        },
        {
            title: "Video về cậu Part 1 🎬",
            type: "local", 
            link: "assets/video/About_life_jade/1.mp4",
            desc: "Cậu dễ thương quá đi mất!"
        },
        {
            title: "Video về cậu Part 2 🎬",
            type: "local",
            link: "assets/video/About_life_jade/2.mp4",
            desc: "Cậu cười dễ thương quá!"
        },
        {
            title: "Video về cậu Part 3 🎬",
            type: "local",
            link: "assets/video/About_life_jade/3.mp4",
            desc: "Cậu thật sự rất dễ thương!"
        },
        {
            title: "Video về cậu Part 4 🎬",
            type: "local",
            link: "assets/video/About_life_jade/4.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        },
        {
            title: "Video về cậu Part 5 🎬",
            type: "local",
            link: "assets/video/About_life_jade/5.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        },
        {
            title: "Video về cậu Part 6 🎬",
            type: "local",
            link: "assets/video/About_life_jade/6.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        },
        {
            title: "Video về cậu Part 7 🎬",
            type: "local",
            link: "assets/video/About_life_jade/7.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        },
        {
            title: "Video về cậu Part 8 🎬",
            type: "local",
            link: "assets/video/About_life_jade/8.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        },
        {
            title: "Video về cậu Part 9 🎬",
            type: "local",
            link: "assets/video/About_life_jade/9.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        },
        {
            title: "Video về cậu Part 10 🎬",
            type: "local",
            link: "assets/video/About_life_jade/10.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        },
        {
            title: "Video về cậu Part 11 🎬",
            type: "local",
            link: "assets/video/About_life_jade/11.mp4",
            desc: "Cậu thật sự rất đáng yêu!"
        }
    ],
};