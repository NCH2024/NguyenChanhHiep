
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