/* --- LOGIC MÀN HÌNH KHÓA --- */
let wrongCount = 0; // Đếm số lần sai
const CORRECT_PASS = "0605"; // Mật khẩu đúng (Ngày sinh)

function checkPass() {
    const input = document.getElementById("passcode").value;
    const hintText = document.getElementById("hint-text");
    const lockScreen = document.getElementById("lock-screen");
    const mainApp = document.getElementById("main-app");

    if (input === CORRECT_PASS) {
        // === TRƯỜNG HỢP ĐÚNG ===
        unlockSuccess();
    } else {
        // === TRƯỜNG HỢP SAI ===
        wrongCount++;
        handleWrongAttempt(wrongCount);
    }
}

// Xử lý khi nhập sai
function handleWrongAttempt(count) {
    const inputField = document.getElementById("passcode");
    
    // Hiệu ứng rung lắc (Animation.css)
    inputField.classList.add("animate__animated", "animate__shakeX");
    setTimeout(() => inputField.classList.remove("animate__animated", "animate__shakeX"), 500);

    inputField.value = ""; // Xóa ô nhập

    if (count === 1) {
        // Sai lần 1: Trêu nhẹ
        Swal.fire({
            icon: 'question',
            title: 'Ủa?',
            text: 'Nhập sai rồi kìa ngốc ơi! 😝',
            confirmButtonColor: '#ff9a9e'
        });
    } else if (count === 2) {
        // Sai lần 2: Gợi ý
        Swal.fire({
            icon: 'warning',
            title: 'Tập trung nào!',
            text: 'Gợi ý: Ngày sinh nhật của Sư Phụ đó (ddmm) 🎂',
            confirmButtonColor: '#ff9a9e'
        });
    } else if (count >= 3) {
        // Sai lần 3: Cho luôn đáp án
        Swal.fire({
            icon: 'info',
            title: 'Thôi thua!',
            text: 'Quên thật hả? Đáp án là 0605 nha. Đệ tử điền giúp luôn rồi đó! 😤',
            confirmButtonColor: '#ff9a9e'
        }).then(() => {
            // Tự động điền đáp án
            document.getElementById("passcode").value = "0605";
        });
    }
}

// Xử lý khi mở khóa thành công
function unlockSuccess() {
    const lockScreen = document.getElementById("lock-screen");
    const mainApp = document.getElementById("main-app");

    // 1. Bắn pháo giấy (Confetti)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 2. Thông báo chào mừng
    Swal.fire({
        icon: 'success',
        title: 'Welcome Home, Bae! ❤️',
        text: 'Mừng cậu đã về nhà.',
        timer: 2000,
        showConfirmButton: false
    });

    // 3. Ẩn màn hình khóa, hiện web chính
    setTimeout(() => {
        lockScreen.classList.add("fade-out"); // Hiệu ứng mờ dần
        
        setTimeout(() => {
            lockScreen.style.display = "none"; // Tắt hẳn
            mainApp.style.display = "block";   // Hiện nội dung chính
            
            // Khởi động lại các hiệu ứng trong web chính
            AOS.init(); 
            
            // Tự động phát nhạc (nếu có)
            const music = document.getElementById("bg-music");
            if(music) music.play();
            
        }, 1000); // Chờ 1s cho hiệu ứng mờ chạy xong
    }, 1500);
}

// Cho phép ấn Enter để login
document.getElementById("passcode").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPass();
    }
});