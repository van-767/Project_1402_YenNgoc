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
            origami_secret: "Từ nhỏ tớ đã gấp hạc và sao. Tớ suy nghĩ: Đến lúc gặp được người ấy, tớ sẽ tặng tất cả hạc và sao đã gấp trong những năm tháng chưa gặp nhau. Đó là khoảng thời gian và những điều ước tớ dành dụm cho cậu.",
            
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
            date: "21/01/2026",
            title: "Chú Thỏ Len & Xương Rồng 🐰",
            icon: "🧶",
            img: "assets/img/cuti/z7489997568543_be4f1eecc888849d14489db0b9048c3f.jpg",
            desc: "Lần đầu cậu khoe sự khéo tay...",
            story: "Ngày 21/1/2026: Cậu khoe ảnh chú thỏ 7 màu đan bằng len và cây xương rồng cậu chăm sóc. <br>👉 Ấn tượng đầu: Cô gái này khéo tay và tỉ mỉ quá!"
        },
        {
            date: "22/01/2026",
            title: "Phá Băng Trái Tim ❄️",
            icon: "🔥",
            img: "assets/img/cuti/z7489997559494_34f6dc7d05d1082fd2e1b7f7be1b9a5a.jpg",
            desc: "Chạm nhẹ vào thế giới của cậu...",
            story: "Ngày 22/1/2026: Tớ cảm nhận được tảng băng mang tên Yến Ngọc bắt đầu tan chảy. Tớ đã bước được một chân vào thế giới nội tâm của cậu."
        },
        {
            date: "24/01/2026",
            title: "Biến Cố & Mẹ Gank 🏥",
            icon: "💊",
            img: "assets/img/cuti/z7489997568441_255ce23f96785340bcec320eb390e730.jpg",
            desc: "Nhập viện, đi chơi và drama đêm khuya...",
            story: "Ngày 24/1/2026 - Một ngày đáng nhớ:<br>1. Cậu nhập viện (sốt cao, đau dạ dày). Xót ghê!<br>2. Lần đầu nhận lời đi chơi với tớ.<br>3. Lần đầu tâm sự chuyện thầm kín.<br>4. Kỷ niệm hài: Đang nhắn tin đêm thì bị Mẹ gank! 😂"
        },
        {
            date: "25/01/2026",
            title: "Câu nói: 'Nhớ tớ' 💌",
            icon: "💓",
            img: "assets/img/cat/z7489997715011_d6728a1abab7f8c4362774c8d91b4024.jpg",
            desc: "Tim tớ lỡ một nhịp...",
            story: "Ngày 25/1/2026: Lần đầu tiên cậu nhắn: 'Nhớ tớ :33'.<br>Trời ơi tin được không? Tim tớ như ngừng đập. (Sau đó bé lại bị Mẹ tra khảo, thương bé)."
        },
        {
            date: "26/01/2026",
            title: "Quốc Bộ & Hạc Giấy 🎹",
            icon: "🎵",
            img: "assets/img/cat/z7489997697774_cc8b565ef0caf5b47c61c0696db47870.jpg",
            desc: "Những món quà tinh thần...",
            story: "Ngày 26/1/2026:<br>- Được nghe cậu đàn (dù video bị cắt còn 40s).<br>- Tớ kể chuyện suýt phải đi bộ 10km.<br>- Biết ý nghĩa Hạc Giấy & Ngôi Sao cậu gấp: Dành tặng cho người đặc biệt trong tương lai."
        },
        {
            date: "27/01/2026",
            title: "Sự Thật & Du Học ✈️",
            icon: "🌏",
            img: "assets/img/food/z7489997630500_d32b37cee8feb2b1ac066dfd6626272b.jpg",
            desc: "Lo sợ, đẩy đưa và tin chấn động...",
            story: "Ngày 27/1/2026:<br>- Cậu sợ, muốn đẩy tớ ra xa làm bạn. Tớ kiên quyết ở lại.<br>- Cậu nhận xét về con người tớ.<br>- Tin chấn động: Cậu sẽ đi du học. Tớ buồn, nhưng sẽ ủng hộ cậu."
        },
        {
    date: "28/01/2026",
    title: "[TIÊU ĐỀ NGÀY 28]", // Ví dụ: Đi dạo công viên
    icon: "🌸", // Chọn icon hợp ý (🌸, 🎬, 🍕...)
    img: "assets/img/cuti/z7489997568543_be4f1eecc888849d14489db0b9048c3f.jpg", // Thay ảnh khác nếu có
    desc: "[Mô tả ngắn gọn ngày 28]", 
    story: "[Copy nội dung chi tiết trong Word dán vào đây].<br>Xuống dòng thì dùng thẻ <br> nhé."
    },
    {
        date: "29/01/2026",
        title: "[TIÊU ĐỀ NGÀY 29]",
        icon: "🎬",
        img: "assets/img/cuti/z7489997566779_7c6a26be0ea7076eee4c5e3db5db6a7a.jpg",
        desc: "[Mô tả ngắn gọn ngày 29]",
        story: "[Nội dung chi tiết ngày 29...]"
    },
    {
        date: "30/01/2026",
        title: "[TIÊU ĐỀ NGÀY 30]",
        icon: "☕",
        img: "assets/img/food/z7489997629577_22e3146f31a789f2c5b246eed569aee5.jpg",
        desc: "[Mô tả ngắn gọn ngày 30]",
        story: "[Nội dung chi tiết ngày 30...]"
    },
    {
        date: "31/01/2026",
        title: "[TIÊU ĐỀ NGÀY 31]",
        icon: "✨",
        img: "assets/img/cat/z7489997710056_f80c153621c2183dadf0570026cc2a44.jpg",
        desc: "[Mô tả ngắn gọn ngày 31]",
        story: "[Nội dung chi tiết ngày 31...]"
    },
    {
        date: "01/02/2026",
        title: "[TIÊU ĐỀ NGÀY 1/2]",
        icon: "📅",
        img: "assets/img/cat/z7489997717234_ed711c909733d4487dc018617d4fb621.jpg",
        desc: "[Tháng mới, khởi đầu mới...]",
        story: "[Nội dung chi tiết ngày 1/2...]"
    },
    {
        date: "02/02/2026",
        title: "[TIÊU ĐỀ NGÀY 2/2]",
        icon: "❤️",
        img: "assets/img/cuti/z7489997568441_255ce23f96785340bcec320eb390e730.jpg",
        desc: "[Sự kiện đặc biệt ngày 2/2]",
        story: "[Nội dung chi tiết ngày 2/2...]"
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
    ]
};