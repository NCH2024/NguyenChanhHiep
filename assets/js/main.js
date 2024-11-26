
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


//Block click right mouse F12
window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};


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

/* cancel tai lieu*/

// Lấy phần tử "btn-Tailieu" và nút "cancel-tailieu"
const btnTailieu = document.querySelector('.btn-Tailieu');
const cancelTailieu = document.getElementById('cancel-tailieu');

// Thêm sự kiện "click" vào nút "cancel-tailieu"
cancelTailieu.addEventListener('click', function () {
    // Ẩn phần tử "btn-Tailieu" bằng cách đặt `display` thành `none`
    btnTailieu.style.display = 'none';
});
