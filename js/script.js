/* --- SETUP BAN ĐẦU --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Chạy hiệu ứng hạt bay (Particles)
    initParticles();
    
    // 2. Chạy hiệu ứng gõ chữ (Typing)
    typeWriter();
    
    // 3. Khởi tạo AOS
    AOS.init();
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