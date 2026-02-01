/* --- SETUP BAN ĐẦU --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Chạy hiệu ứng hạt bay (Particles)
    initParticles();
    
    // 2. Chạy hiệu ứng gõ chữ (Typing)
    typeWriter();
    
    // 3. Khởi tạo AOS
    AOS.init();
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