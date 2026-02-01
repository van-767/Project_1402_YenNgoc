/* DATA.JS - NGUỒN DỮ LIỆU TỔNG HỢP TỪ FILE WORD "VỀ YẾN NGỌC" */

const appData = {
    // 1. THÔNG TIN CÁ NHÂN (PROFILE)
    profile: {
        name: "Lâm Yến Ngọc",
        dob: "2005-05-06", // Để tính cung hoàng đạo & số hạc giấy
        zodiac: "Kim Ngưu (Taurus)",
        major: "Logistics & QL Chuỗi cung ứng (GTVT HCM)",
        address: "Vinhomes Grand Park & Quận 7",
        height: "Hơi cao (Bạn nam nên độn giày :v)",
        personality: "Bề ngoài lạnh lùng, bên trong OCD & Mềm yếu. Làm trước nghĩ sau.",
        skills: [
            { name: "Piano/Organ/Cổ tranh", level: 100, desc: "Luyện 10 tiếng/ngày, diễn từ 12 tuổi" },
            { name: "Handmade", level: 95, desc: "Gấp hạc, đan len, làm hoa giấy" },
            { name: "Thể thao", level: 80, desc: "Bắn cung, Bơi lội" },
            { name: "Trí tuệ", level: 85, desc: "Cờ vây (chơi với ông nội)" }
        ]
    },

    // 2. SỞ THÍCH (Dùng cho Mini-Game "Hiểu Ý")
    favorites: {
        love: [
            { name: "Bún Bò Huế", icon: "🍜" },
            { name: "KitKat / Choco", icon: "🍫" },
            { name: "Bánh Croissant", icon: "🥐" },
            { name: "Đi dạo / Ăn vặt", icon: "🚶‍♀️" },
            { name: "Màu Pastel", icon: "🎨" },
            { name: "Thỏ 7 màu len", icon: "🐰" }
        ],
        hate: [
            { name: "Hành hẹ", icon: "🌿" },
            { name: "Thịt mỡ", icon: "🥩" },
            { name: "Đồ sống", icon: "🍣" },
            { name: "Sự hời hợt", icon: "💔" }
        ]
    },

    // 3. TIMELINE CHI TIẾT (Lấy nguyên văn từ file Word)
    timeline: [
        {
            date: "19/01/2026",
            title: "Khởi đầu",
            desc: "Lần đầu tớ làm quen cậu. Phải đi xin info từ bạn thân cậu mới mò ra được Facebook.",
            icon: "🌱"
        },
        {
            date: "20/01/2026",
            title: "Kết nối",
            desc: "Lần đầu tiên cậu rep tin nhắn tớ. Tớ chính thức biết tên Lâm Yến Ngọc.",
            icon: "📩"
        },
        {
            date: "21/01/2026",
            title: "Khoe chiến tích",
            desc: "Cậu khoe ảnh Thỏ 7 màu đan bằng len và cây xương rồng cậu chăm. Dễ thương xỉu.",
            icon: "🌵"
        },
        {
            date: "22/01/2026",
            title: "Phá băng",
            desc: "Tớ cảm giác đã đục được lớp băng bên trong cậu một chút xíu.",
            icon: "❄️"
        },
        {
            date: "24/01/2026",
            title: "Biến cố & Bước ngoặt",
            desc: "Cậu nhập viện (sốt cao + dạ dày). Nhưng đây là ngày cậu nhận lời đi chơi và mở lòng chia sẻ. (Kỷ niệm: Bị mẹ gank lúc chat đêm).",
            icon: "🏥"
        },
        {
            date: "25/01/2026",
            title: "Nhớ nhung",
            desc: "Lần đầu tiên cậu nhắn 'Nhớ tớ' :3. Dù bị mẹ tra khảo nhưng vẫn lén nhắn.",
            icon: "💭"
        },
        {
            date: "26/01/2026",
            title: "Giai điệu định mệnh",
            desc: "Cậu đàn tặng tớ (dù cắt còn 40s). Tớ biết ý nghĩa của 1000 con hạc giấy cậu dành cho người tương lai.",
            icon: "🎹"
        },
        {
            date: "27/01/2026",
            title: "Thử thách",
            desc: "Cậu sợ tớ thiệt thòi, cậu đẩy tớ ra xa. Nhưng tớ đã 'lì đòn' ở lại. Tớ biết cậu sắp đi du học.",
            icon: "🛡️"
        },
        {
            date: "30/01/2026",
            title: "Ở bên nhau",
            desc: "Ngày cậu buồn nhất. Cậu đòi 'ngưng 10 ngày', nhưng tớ chọn ở lại lau nước mắt cho cậu.",
            icon: "❤️"
        },
        {
            date: "01/02/2026",
            title: "Hiện tại",
            desc: "Hành trình của Sư Phụ và Đệ Tử (Bae) đang được viết tiếp...",
            icon: "🚀"
        }
    ],

    // 4. QUOTE (Câu nói đặc biệt trong file Word)
    specialQuote: "Tớ sẽ đem tất cả ngôi sao và hạc giấy tặng cho khoảng thời gian mà tớ và bạn đó chưa gặp nhau."
};