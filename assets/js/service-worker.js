const CACHE_NAME = 'my-profile-cache-v1';
const urlsToCache = [
    '/',  // Trang chủ
    '/index.html',  // Trang chính
    '/intro.html',  // Trang giới thiệu
    '/error.html',  // Trang lỗi
    '/project.html',  // Trang dự án
    '/css/style.css',  // Tệp CSS
    '/js/main.js',  // Tệp JS chính
    '/js/service-worker.js',  // Tệp Service Worker
    '/images/QR-VCB.jpg',  // Hình ảnh QR
    '/images/bg-home.jpg',  // Hình ảnh nền trang chủ
    '/images/me-Home.png',  // Hình ảnh nền
    '/images/avatar.jpg',  // Hình ảnh avatar
    '/images/error.jpg'  // Hình ảnh lỗi
];

// Cài đặt Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Lấy tài nguyên từ cache hoặc mạng
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;  // Trả về tài nguyên từ cache nếu có
            }
            return fetch(event.request);  // Nếu không có, tải từ mạng
        })
    );
});

// Xử lý cập nhật cache khi có bản cập nhật mới của Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];  // Chỉ giữ lại cache hiện tại
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);  // Xóa cache cũ
                    }
                })
            );
        })
    );
});
