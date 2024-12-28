// 輪播圖功能
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// 更新輪播圖顯示
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// 點擊前一張
prevButton.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

// 點擊下一張
nextButton.addEventListener('click', () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
});

// 自動輪播功能（每 3 秒切換一次）
setInterval(() => {
    nextButton.click();
}, 3000);

// 點擊圖片跳轉至指定頁面
images.forEach(image => {
    image.addEventListener('click', () => {
        window.location.href = './artist.html';
    });
});