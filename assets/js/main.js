
//show donate
function toggleTipsBox() {
    const tipsBox = document.getElementById('tip');
    tipsBox.classList.toggle('show'); // Thêm hoặc bỏ class 'show'
}

// Ẩn tipsBox khi bấm ngoài vùng tips
document.addEventListener('click', function (event) {
    const tips = document.querySelector('.tips');
    const tipsBox = document.getElementById('tip');

    // Kiểm tra nếu bấm ngoài vùng .tips
    if (!tips.contains(event.target)) {
        tipsBox.classList.remove('show'); // Ẩn tipsBox
    }
});




/* Carousel */
// CAROUSEL SLIDE

//CAROUSEL QUẢNG CÁO
var images = [
    "assets/images/project/web-BanSach-DanhMuc.png",
    "assets/images/project/web-BanSach-ChiTiet.png",
    "assets/images/project/web-BanSach-News.png",
    "assets/images/project/web-BanSach-ThongBao.png",
    "assets/images/project/web-BanSach-Longin.png",
    "assets/images/project/web-BanSach-AdminHome.png",
    "assets/images/project/web-BanSach-AdminTool.png",
];

var num = 0;
function Next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }

    slider.src = images[num];
}

function Prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }

    slider.src = images[num];
}

setInterval("Next()", 2000);


/* cancel tailieu, phanmem */
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các nút có class btn-Tailieu và btn-Tailieu2
    const btnsTailieu = document.querySelectorAll('.btn-Tailieu, .btn-Tailieu2');

    // Duyệt qua từng nút và thêm sự kiện click vào dấu X
    btnsTailieu.forEach(function (btn) {
        const cancelBtn = btn.querySelector('#cancel-tailieu');

        // Khi click vào nút cancel, sẽ ẩn nút
        cancelBtn.addEventListener('click', function (event) {
            event.stopPropagation();  // Dừng sự kiện truyền ra ngoài
            btn.style.display = 'none';  // Ẩn nút
        });
    });
});

/*Open list */

document.querySelectorAll(".HocPhan").forEach((item) => {
    item.addEventListener("click", function () {
        this.classList.toggle("open"); // Thêm hoặc xóa class 'open'
    });
});



/* Save cache brower */
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('js/service-worker.js')
//             .then((registration) => {
//                 console.log('Service Worker đã được đăng ký: ', registration.scope);
//             }).catch((error) => {
//                 console.log('Đăng ký Service Worker thất bại: ', error);
//             });
//     });
// }

/* Toi uu load anh */
// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll('img[data-src]');

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const image = entry.target;
//                 image.src = image.getAttribute('data-src');
//                 observer.unobserve(image);
//             }
//         });
//     }, {
//         rootMargin: '0px 0px 100px 0px'
//     });


//     images.forEach(image => {
//         observer.observe(image);
//     });
// });
