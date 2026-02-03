/* --- SETUP BAN ĐẦU --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Chạy hiệu ứng hạt bay (Particles)
    initParticles();
    
    // 2. Chạy hiệu ứng gõ chữ (Typing)
    typeWriter();
    
    // 3. Khởi tạo AOS
    AOS.init();
    renderProfile();   // <--- Vẽ cái Profile nàng thơ ra
    renderTimeline();  // <--- Vẽ cái dòng thời gian ra
    if(audio) audio.volume = 0.5; // Mặc định âm lượng 50%
});

/* --- LOGIC GÕ CHỮ --- */
const textToType = "Ai là \"bé cưng\" của Văn?";
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < textToType.length) {
        document.getElementById("typing-text").innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 100); // Tốc độ gõ 100ms
    }
}

/* --- LOGIC KIỂM TRA MẬT KHẨU --- */
let wrongCount = 0; 
const CORRECT_PASS = "0605"; // PASS ĐÚNG

function checkPass() {
    const input = document.getElementById("passcode").value;
    const inputField = document.getElementById("passcode");

    if (input === CORRECT_PASS) {
        unlockSuccess();
    } else {
        wrongCount++;
        
        // Rung lắc ô input
        inputField.classList.add("animate__animated", "animate__shakeX");
        setTimeout(() => inputField.classList.remove("animate__animated", "animate__shakeX"), 500);
        
        inputField.value = ""; // Xóa ô nhập

        // Xử lý 3 lần sai (Trêu chọc)
        if (wrongCount === 1) {
            Swal.fire({
                icon: 'question',
                title: 'Ủa alo?',
                text: 'Nhập sai rồi kìa! Sư phụ quên ngày sinh mình hả? 😝',
                confirmButtonColor: '#ff9a9e'
            });
        } else if (wrongCount === 2) {
            Swal.fire({
                icon: 'warning',
                title: 'Tập trung nào!',
                text: 'Gợi ý cực mạnh: Ngày sinh nhật (ddmm) 🎂',
                confirmButtonColor: '#ff9a9e'
            });
        } else if (wrongCount >= 3) {
            Swal.fire({
                icon: 'error',
                title: 'Thôi thua!',
                text: 'Thôi để Đệ tử điền giúp cho. Chứ sai hoài quê lắm! 😤',
                confirmButtonColor: '#ff9a9e'
            }).then(() => {
                document.getElementById("passcode").value = CORRECT_PASS; // Tự điền pass
            });
        }
    }
}

// Cho phép ấn Enter
document.getElementById("passcode").addEventListener("keypress", function(event) {
    if (event.key === "Enter") checkPass();
});

/* --- KHI MỞ KHÓA THÀNH CÔNG --- */
function unlockSuccess() {
    // 1. Bắn pháo giấy bùm bùm
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 20000 };
    initMusicPlayer();
    function randomInRange(min, max) { return Math.random() * (max - min) + min; }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    // 2. Thông báo chào mừng
    Swal.fire({
        icon: 'success',
        title: 'Welcome Home Bae! ❤️',
        text: 'Mừng cậu về nhà.',
        timer: 2000,
        showConfirmButton: false
    });

    // 3. Chuyển cảnh
    setTimeout(() => {
        document.getElementById("lock-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("lock-screen").style.display = "none";
            document.getElementById("main-app").style.display = "block";
            
            // Kích hoạt các hiệu ứng bên trong (sẽ làm sau)
            // initMainApp(); 
        }, 1000);
    }, 1500);
}

/* --- CẤU HÌNH PARTICLES.JS --- */
function initParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60 },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" } }
        },
        "retina_detect": true
    });
}
/* =========================================
   SMART NAVIGATION (SCROLL SPY)
========================================= */

// 1. Hàm click thủ công
function setActive(element) {
    document.querySelectorAll('.nav-dot').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// 2. Tự động Active khi cuộn chuột
const sections = document.querySelectorAll('.full-screen-section');
const navDots = document.querySelectorAll('.nav-dot');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Nếu cuộn đến 1/3 của section thì kích hoạt
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navDots.forEach(dot => {
        dot.classList.remove('active');
        // So sánh href của thẻ a với id của section
        if (dot.getAttribute('href').includes(current)) {
            dot.classList.add('active');
        }
    });
});
/* =========================================
   MUSIC PLAYER LOGIC (Dán vào cuối script.js)
========================================= */
let songIndex = 0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const title = document.getElementById('song-title');
const disk = document.getElementById('disk');
const diskAvatar = document.getElementById('disk-avatar');
const progressBar = document.getElementById('progress-bar');
const playlistUl = document.getElementById('playlist-ul');

// 1. Khởi tạo Player
function initMusicPlayer() {
    if (!playlistUl) return; // Nếu chưa có HTML thì không chạy
    
    // Load Avatar đĩa than
    if(appData.profile.avatar) diskAvatar.src = appData.profile.avatar;
    
    // Load Playlist
    renderPlaylist();
    
    // Load bài đầu tiên
    loadSong(songIndex);
}

// 2. Render Playlist ra màn hình
function renderPlaylist() {
    playlistUl.innerHTML = "";
    appData.musicList.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-music"></i> ${song.title}`;
        li.onclick = () => playSpecificSong(index);
        
        if (index === songIndex) li.classList.add('active-song');
        
        playlistUl.appendChild(li);
    });
}

// 3. Load thông tin bài hát
function loadSong(index) {
    const song = appData.musicList[index];
    title.innerText = song.title;
    audio.src = song.file;
    renderPlaylist(); // Cập nhật màu active
}

// 4. Các nút bấm
function playSpecificSong(index) {
    songIndex = index;
    loadSong(songIndex);
    playSong();
}

function togglePlay() {
    const isPlaying = disk.classList.contains('playing');
    isPlaying ? pauseSong() : playSong();
}

function playSong() {
    disk.classList.add('playing');
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    audio.play();
}

function pauseSong() {
    disk.classList.remove('playing');
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    audio.pause();
}

function nextSong() {
    songIndex++;
    if (songIndex > appData.musicList.length - 1) songIndex = 0;
    loadSong(songIndex);
    playSong();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = appData.musicList.length - 1;
    loadSong(songIndex);
    playSong();
}

// 5. Thanh tiến trình
// --- 1. CẬP NHẬT THANH TIẾN TRÌNH & THỜI GIAN ---
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    
    if (duration) {
        // Tính phần trăm thanh chạy
        const progressPercent = (currentTime / duration) * 100;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;

        // Tính thời gian (Phút : Giây)
        // Thời gian hiện tại
        const currMin = Math.floor(currentTime / 60);
        let currSec = Math.floor(currentTime % 60);
        if (currSec < 10) currSec = `0${currSec}`;
        document.getElementById('curr-time').innerText = `${currMin}:${currSec}`;

        // Tổng thời gian bài hát
        const durMin = Math.floor(duration / 60);
        let durSec = Math.floor(duration % 60);
        if (durSec < 10) durSec = `0${durSec}`;
        document.getElementById('dur-time').innerText = `${durMin}:${durSec}`;
    }
}

// --- 2. TUA NHẠC (CLICK VÀO THANH) ---
function setProgress(e) {
    const width = this.clientWidth; // Chiều rộng tổng thanh
    const clickX = e.offsetX;       // Vị trí click
    const duration = audio.duration; // Tổng thời gian bài hát

    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
}
/* =========================================
   XỬ LÝ VOLUME & MÀU SẮC
========================================= */
const volSlider = document.getElementById('volume-slider');
const volIcon = document.getElementById('vol-icon');

function setVolume(val) {
    // 1. Chỉnh âm lượng audio
    audio.volume = val / 100;
    
    // 2. Chỉnh màu thanh trượt (Hiệu ứng fill màu)
    // Tính % để tô màu hồng từ trái sang phải
    volSlider.style.backgroundSize = `${val}% 100%`;

    // 3. Đổi icon theo mức âm lượng
    if (val == 0) {
        volIcon.className = 'fas fa-volume-mute';
    } else if (val < 50) {
        volIcon.className = 'fas fa-volume-down';
    } else {
        volIcon.className = 'fas fa-volume-up';
    }
}

// Hàm tắt/bật tiếng nhanh khi bấm vào icon loa
function toggleMute() {
    if (audio.volume > 0) {
        audio.dataset.prevVol = audio.volume * 100; // Lưu lại mức cũ
        volSlider.value = 0;
        setVolume(0);
    } else {
        // Khôi phục lại mức cũ (hoặc 50%)
        let restore = audio.dataset.prevVol || 50;
        volSlider.value = restore;
        setVolume(restore);
    }
}
// --- 3. ĐẢM BẢO GẮN SỰ KIỆN (Thêm vào cuối file JS hoặc trong initMusicPlayer) ---
const progressContainer = document.getElementById('progress-container');
if (progressContainer) {
    progressContainer.addEventListener('click', setProgress);
}

// Event Listeners
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong); // Tự động next bài
/* =========================================
   RENDER PROFILE - CHIA 2 CỘT TÁCH BIỆT (FIXED LEFT)
========================================= */
function renderProfile() {
    const p = appData.profile;
    const container = document.getElementById('profile-content');
    if (!container) return;

    let html = `
    <div class="glass-card profile-card">
        
        <div class="profile-static-left">
            <div class="avatar-container">
                <div class="avatar-ring"></div>
                <img src="${p.avatar}" alt="Avatar" class="main-avatar">
            </div>
            
            <h2 class="profile-name">${p.fullname} <i class="fas fa-check-circle verified-icon"></i></h2>
            <p class="profile-nickname">"${p.nickname}"</p>
            <p class="profile-dob">${p.dob}</p>

            <div class="basic-info-box">
                ${p.basic_info.map(i => `
                    <div class="info-row">
                        <span class="info-icon">${i.icon}</span>
                        <span class="info-text"><b>${i.label}:</b> ${i.val}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="profile-dynamic-right">
            
            <div class="profile-tabs">
                <button class="tab-btn active" onclick="switchTab('tab-skill')"><i class="fas fa-bolt"></i> Skill</button>
                <button class="tab-btn" onclick="switchTab('tab-char')"><i class="fas fa-brain"></i> Tính Cách</button>
                <button class="tab-btn" onclick="switchTab('tab-food')"><i class="fas fa-utensils"></i> Ăn Uống</button>
                <button class="tab-btn" onclick="switchTab('tab-love')"><i class="fas fa-heart"></i> Tình Yêu</button>
            </div>

            <div class="tab-content-area">
                
                <div id="tab-skill" class="tab-pane active animate__animated animate__fadeIn">
                    <h3 class="tab-heading">Sở Trường & Tài Lẻ</h3>
                    <div class="skill-list">
                        ${p.skills.map(s => `
                            <div class="skill-row" onclick="showStory('${s.name}', '${s.story}')">
                                <div class="skill-name">${s.icon} ${s.name} <small>(${s.level})</small></div>
                                <div class="skill-track"><div class="skill-fill" style="width:${s.percent}%; background:${s.color}"></div></div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div id="tab-char" class="tab-pane animate__animated animate__fadeIn">
                    <h3 class="tab-heading">Tính Cách & Quan Hệ</h3>
                    <p class="intro-text">"${p.personality.desc}"</p>
                    <div class="tags-cloud">
                        ${p.personality.tags.map(t => `<span class="tag-item">#${t}</span>`).join('')}
                    </div>
                    <div class="social-box-mini">
                        <h4>Người thân & Bạn bè:</h4>
                        <div class="social-grid-mini">
                            ${p.personality.social.map(s => `<span><i class="fas fa-user"></i> ${s}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <div id="tab-food" class="tab-pane animate__animated animate__fadeIn">
                    <h3 class="tab-heading">Sở Thích Ăn Uống</h3>
                    <div class="food-layout">
                        <div class="food-group likes">
                            <h4><i class="fas fa-check"></i> LIKE</h4>
                            <ul>${p.food_habits.likes.map(f => `<li>${f}</li>`).join('')}</ul>
                        </div>
                        <div class="food-group dislikes">
                            <h4><i class="fas fa-times"></i> DISLIKE</h4>
                            <ul>${p.food_habits.dislikes.map(f => `<li>${f}</li>`).join('')}</ul>
                        </div>
                    </div>
                    <p class="food-note">Note: ${p.food_habits.note}</p>
                </div>

                <div id="tab-love" class="tab-pane animate__animated animate__fadeIn">
                    <h3 class="tab-heading">Chuyện Tình Yêu 💌</h3>
                    
                    <div class="love-card">
                        <h4>💘 Gu Bạn Trai</h4>
                        <p>${p.love_story.ideal_type}</p>
                    </div>

                    <div class="love-card special" onclick="showOrigamiSecret()">
                        <h4>🎐 Bí Mật Hạc Giấy & Ngôi Sao (Bấm xem)</h4>
                        <div style="font-size:0.8rem; opacity:0.8; margin-top:5px">"Điều ước tớ dành dụm cho cậu..."</div>
                    </div>

                    <div class="emotion-buttons">
                        
                        <button class="btn-emotion happy" onclick="showGreenFlagEffect()">
                            <i class="fas fa-shield-alt"></i> Điều Gì Khiến Bé An Lòng?
                        </button>

                        <button class="btn-emotion sad" onclick="showRedFlagEffect()">
                            <i class="fas fa-biohazard"></i> Nỗi Sợ & Vùng Cấm Địa
                        </button>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>`;

    container.innerHTML = html;
}

// HÀM CHUYỂN TAB
function switchTab(tabId) {
    // Ẩn tất cả tab
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    // Hiện tab được chọn
    document.getElementById(tabId).classList.add('active');
    
    // Active nút bấm
    event.currentTarget.classList.add('active');
}
/* =========================================
   XỬ LÝ RIÊNG CHO "BÍ MẬT HẠC GIẤY" (MAGIC)
========================================= */
function showOrigamiSecret() {
    // 1. Lấy nội dung từ Data
    const secretText = appData.profile.love_story.origami_secret;

    // 2. Bắn pháo hoa ngôi sao (Hiệu ứng Confetti)
    // (Bắn 2 bên góc màn hình cho đẹp)
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };
    
    // Bắn bên trái
    confetti({ ...defaults, particleCount: 50, origin: { x: 0.1, y: 0.6 }, colors: ['#ffeaa7', '#fab1a0'] });
    // Bắn bên phải
    confetti({ ...defaults, particleCount: 50, origin: { x: 0.9, y: 0.6 }, colors: ['#81ecec', '#74b9ff'] });

    // 3. Hiện Popup phong cách Galaxy
    Swal.fire({
        title: '🎐 Hũ Hạc & Ngôi Sao Ước Nguyện',
        html: `
            <div class="origami-content">
                <div class="star-icon-anim"><i class="fas fa-star"></i></div>
                <p class="secret-text">
                    "${secretText}"
                </p>
                <div class="sign-name">- Bé Cưng ♉ -</div>
            </div>
        `,
        background: '#2d3436 url("https://www.transparenttextures.com/patterns/stardust.png")', // Nền tối có vân sao
        color: '#dfe6e9', // Chữ trắng sáng
        showConfirmButton: true,
        confirmButtonText: 'Trân trọng điều ước này ❤️',
        confirmButtonColor: '#a29bfe',
        backdrop: `
            rgba(0,0,20,0.8)
            url("assets/img/cuti/z7489997568543_be4f1eecc888849d14489db0b9048c3f.jpg")
            left center
            no-repeat
        `,
        customClass: {
            popup: 'galaxy-popup' // Class riêng để chỉnh CSS
        }
    });
}
/* =========================================
   HIỆU ỨNG ĐẶC BIỆT: RED FLAG & GREEN FLAG
========================================= */

// 1. HIỆU ỨNG HẠNH PHÚC (GREEN FLAGS)
function showGreenFlagEffect() {
    // Bắn tim hồng + vàng
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };
    confetti({ ...defaults, particleCount: 60, origin: { x: 0.3, y: 0.5 }, colors: ['#55efc4', '#ffeaa7'] });
    confetti({ ...defaults, particleCount: 60, origin: { x: 0.7, y: 0.5 }, colors: ['#fab1a0', '#fd79a8'] });

    // Lấy dữ liệu
    const happyList = appData.profile.love_story.happiness;
    
    // Hiện Popup ấm áp
    Swal.fire({
        title: '✨ Thế Giới Bình Yên Của Bé',
        html: `
            <div class="emotion-content">
                <div class="heart-beat"><i class="fas fa-heart"></i></div>
                <ul class="happy-list">
                    ${happyList.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p class="emotion-quote">"Chỉ cần tớ cảm nhận bản thân là quan trọng nhất..."</p>
            </div>
        `,
        background: '#fff0f3',
        color: '#2d3436',
        showConfirmButton: true,
        confirmButtonText: 'Hứa sẽ mang lại bình yên ❤️',
        confirmButtonColor: '#ff7675',
        customClass: { popup: 'happy-popup' }
    });
}

// 2. HIỆU ỨNG NỖI SỢ (RED FLAGS) - NỔ TUNG!
function showRedFlagEffect() {
    // Bắn màu đen + đỏ (Cảm giác nguy hiểm/bão tố)
    const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 10000 };
    confetti({ ...defaults, particleCount: 100, origin: { y: 0.6 }, colors: ['#2d3436', '#d63031', '#636e72'] });

    // Lấy dữ liệu
    const fears = appData.profile.love_story.fears;

    // Hiện Popup Tối (Dark Mode)
    Swal.fire({
        title: '⛈️ Vùng Tổn Thương & Nỗi Sợ',
        html: `
            <div class="emotion-content">
                <div class="storm-shake"><i class="fas fa-cloud-showers-heavy"></i></div>
                <ul class="fear-list">
                    ${fears.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p class="emotion-quote red">"Đừng bao giờ bảo tớ 'Ngủ đi mai tính'..."</p>
            </div>
        `,
        background: '#2d3436', // Nền đen
        color: '#dfe6e9',      // Chữ trắng
        showConfirmButton: true,
        confirmButtonText: 'Sẽ không bao giờ để em một mình 🛡️',
        confirmButtonColor: '#d63031',
        backdrop: `rgba(0,0,0,0.85)`, // Tối thui màn hình
        customClass: { popup: 'fear-popup' }
    });
}
/* =========================================
   RENDER TIMELINE: HARD-CODE LOGIC (FINAL)
========================================= */
function renderTimeline() {
    const fullData = [...appData.timeline]; 
    fullData.push({ isFuture: true, title: 'Tương Lai', date: '???', icon: '<i class="fas fa-question"></i>' });

    const container = document.getElementById('timeline-content');
    if (!container) return;

    // Tính số cột
    const w = window.innerWidth;
    let itemsPerRow = 3; 
    if (w <= 768) itemsPerRow = 1; 
    else if (w <= 1024) itemsPerRow = 2;

    const rows = [];
    for (let i = 0; i < fullData.length; i += itemsPerRow) {
        rows.push(fullData.slice(i, i + itemsPerRow));
    }

    let html = '';

    rows.forEach((rowItems, rowIndex) => {
        // Hàng lẻ (1, 3...) là hàng Ngược
        const isReverse = rowIndex % 2 !== 0; 
        const rowClass = isReverse ? 'snake-row reverse' : 'snake-row';

        html += `<div class="${rowClass}" data-aos="fade-up">`;

        rowItems.forEach((item, index) => {
            // Logic Mũi tên Ngang: Vẽ cho tất cả TRỪ thằng cuối cùng của hàng
            const showArrow = index < rowItems.length - 1;

            // Logic Mũi tên Dọc: Chỉ vẽ cho thằng cuối hàng (Trừ hàng cuối cùng của list)
            const showConnector = (index === rowItems.length - 1) && (rowIndex < rows.length - 1);

            html += `<div class="snake-item">`;

            // --- 1. PHẦN NỘI DUNG (CLICKABLE) ---
            // Bọc trong snake-click-zone để nhận click ưu tiên
            if (item.isFuture) {
                html += `
                <div class="snake-click-zone" onclick="checkFuture()">
                    <div class="snake-point" style="border-color:#ffeaa7; background:#2d3436;">${item.icon}</div>
                    <div class="snake-card" style="border:none; background:none; padding:0;">
                        <div class="future-box-wrapper">
                            <h3 style="color:#ffeaa7; margin:0">${item.title}</h3>
                            <span style="font-size:0.8rem; color:#ccc">${item.date}</span>
                        </div>
                    </div>
                </div>`;
            } else {
                html += `
                <div class="snake-click-zone" onclick="showMemory('${item.title}', '${item.story}', '${item.img}')">
                    <div class="snake-point">${item.icon}</div>
                    <div class="snake-card">
                        <span class="snake-date">${item.date}</span>
                        <h3 class="snake-title">${item.title}</h3>
                    </div>
                </div>`;
            }

            // --- 2. PHẦN MŨI TÊN NGANG (TRANG TRÍ) ---
            if (showArrow) {
                // TRICK: Ép cứng loại mũi tên dựa trên chiều của hàng
                if (isReverse) {
                    // Hàng ngược -> Mũi tên Trái -> Nằm bên Trái
                    html += `<div class="arrow-wrapper arrow-fixed-left"><i class="fas fa-long-arrow-alt-left"></i></div>`;
                } else {
                    // Hàng xuôi -> Mũi tên Phải -> Nằm bên Phải
                    html += `<div class="arrow-wrapper arrow-fixed-right"><i class="fas fa-long-arrow-alt-right"></i></div>`;
                }
            }

            // --- 3. PHẦN MŨI TÊN DỌC (NỐI HÀNG) ---
            if (showConnector) {
                // Nếu hàng đang ngược -> Mũi tên nối nằm bên Trái (để nối xuống dưới)
                // Nếu hàng đang xuôi -> Mũi tên nối nằm bên Phải
                const posClass = isReverse ? 'arrow-pos-left' : 'arrow-pos-right';
                html += `<div class="arrow-connector-down ${posClass}" style="display:block"><i class="fas fa-level-down-alt"></i></div>`;
            }

            html += `</div>`; // End .snake-item
        });

        html += `</div>`; // End .snake-row
    });

    container.innerHTML = html;
}
// Lắng nghe resize để vẽ lại (quan trọng để tính lại số cột)
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(renderTimeline, 200);
});
/* =========================================
   XỬ LÝ CLICK TIMELINE: HIỆN KÝ ỨC (COMMON)
========================================= */
function showMemory(title, story, img) {
    // 1. Hiệu ứng pháo giấy nhẹ (Confetti) tạo cảm xúc
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };
    confetti({ ...defaults, particleCount: 50, origin: { y: 0.7 }, colors: ['#ffeaa7', '#ff7675'] });

    // 2. Hiện Popup chi tiết (SweetAlert2 Custom)
    Swal.fire({
        // Tiêu đề
        title: `<div class="memory-title">${title}</div>`,
        
        // Nội dung HTML (Ảnh + Truyện)
        html: `
            <div class="memory-container">
                <div class="memory-img-box">
                    <img src="${img}" class="memory-img" alt="Ký ức">
                </div>
                <div class="memory-story">
                    ${story} </div>
            </div>
        `,
        
        // Cấu hình giao diện Popup
        background: '#fff0f3', // Màu nền hồng phấn nhạt
        color: '#2d3436',      // Màu chữ tối
        showConfirmButton: true,
        confirmButtonText: 'Lưu giữ kỷ niệm ❤️',
        confirmButtonColor: '#ff7675',
        width: 600,            // Độ rộng popup
        padding: '20px',
        
        // Hiệu ứng xuất hiện/biến mất
        showClass: { popup: 'animate__animated animate__zoomInDown' },
        hideClass: { popup: 'animate__animated animate__zoomOutUp' },
        
        // Nền mờ phía sau (Backdrop)
        backdrop: `rgba(0,0,0,0.8)`
    });
}
/* =========================================
   XỬ LÝ EASTER EGG: 3 CẤP ĐỘ (FINAL)
========================================= */
let futureClickCount = 0;

function checkFuture() {
    futureClickCount++;

    // LEVEL 1: CẢNH BÁO NHẸ
    if (futureClickCount === 1) {
        Swal.fire({
            icon: 'info',
            title: 'Khoan đã! ✋',
            text: 'Tương lai là điều bí mật. Cậu chắc chắn muốn xem trộm chứ?',
            confirmButtonText: 'Tò mò xíu thui...',
            confirmButtonColor: '#74b9ff',
            backdrop: `rgba(0,0,0,0.4)`
        });
    } 
    // LEVEL 2: DOẠ NẠT
    else if (futureClickCount === 2) {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ CẢNH BÁO LẦN CUỐI!',
            html: 'Nếu cậu xem bức ảnh này, cậu sẽ phải <b>CHỊU TRÁCH NHIỆM</b> với người trong ảnh suốt đời đấy!<br>Vẫn dám xem hả?',
            showCancelButton: true,
            confirmButtonText: 'Sợ gì! Xem luôn!',
            cancelButtonText: 'Thôi rén rồi...',
            confirmButtonColor: '#d63031',
            cancelButtonColor: '#00b894',
            background: '#fff0f3',
            focusCancel: true
        });
    } 
    // LEVEL 3: CHỐT ĐƠN (SHOW ẢNH)
    else {
        // Hiệu ứng pháo hoa
        const duration = 3000;
        const end = Date.now() + duration;
        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());

        // HIỆN ẢNH SƯ PHỤ
        Swal.fire({
            title: '✨ Chồng Tương Lai Nè! ✨',
            // 👇 THAY ẢNH SƯ PHỤ Ở ĐÂY
            imageUrl: 'assets/img/cuti/z7489997566779_7c6a26be0ea7076eee4c5e3db5db6a7a.jpg', 
            imageWidth: 400,
            imageAlt: 'Future Husband',
            html: `
                <div style="margin-top:15px">
                    <p style="font-size: 1.2rem; color: #d63031; font-weight: bold;">"Chạy đâu cho thoát!" 😎</p>
                    <p>Đã lỡ nhìn thấy rồi là phải cưới đó nha!</p>
                </div>
            `,
            background: '#fff url("https://www.transparenttextures.com/patterns/stardust.png")',
            showConfirmButton: true,
            confirmButtonText: 'Duyệt luôn! ❤️',
            confirmButtonColor: '#ff7675',
            backdrop: `rgba(0,0,0,0.8)`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Ngoan lắm! Yêu bé 3000! 🥰');
                futureClickCount = 0; // Reset game
            }
        });
    }
}