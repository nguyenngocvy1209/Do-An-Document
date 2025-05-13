const products = [
    { id: 1, name: "Tài liệu Lập trình C", price: 50000, category: "Lập trình", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 10, description: "Hướng dẫn cơ bản về lập trình C.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Nguyễn Văn A", rating: 5, comment: "Rất dễ hiểu!" }] },
    { id: 2, name: "Báo cáo Thực tập CNTT", price: 75000, category: "Báo cáo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 0, description: "Mẫu báo cáo thực tập CNTT.", monthlyDeal: false, featured: false, seasonal: false, reviews: [] },
    { id: 3, name: "Đồ án Thiết kế Web", price: 100000, category: "Đồ án", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 15, description: "Đồ án thiết kế website bán hàng.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Lê Văn C", rating: 5, comment: "Rất chi tiết!" }] },
    { id: 4, name: "Tài liệu Học máy", price: 120000, category: "Khoa học dữ liệu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 0, description: "Giới thiệu về học máy.", monthlyDeal: false, featured: false, seasonal: false, reviews: [] },
    { id: 5, name: "Ôn thi THPT Toán", price: 80000, category: "Ôn thi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 10, description: "Tài liệu ôn thi Toán.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Phạm Thị D", rating: 4, comment: "Cần thêm lời giải." }] },
    { id: 6, name: "Báo cáo Kinh tế vi mô", price: 60000, category: "Báo cáo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 5, description: "Phân tích kinh tế vi mô.", monthlyDeal: false, featured: false, seasonal: false, reviews: [] },
    { id: 7, name: "Đồ án Cơ khí", price: 150000, category: "Đồ án", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 0, description: "Thiết kế hệ thống cơ khí.", monthlyDeal: false, featured: false, seasonal: false, reviews: [] },
    { id: 8, name: "Tài liệu Python Cơ bản", price: 90000, category: "Lập trình", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 20, description: "Học Python từ cơ bản.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Hoàng Văn E", rating: 5, comment: "Tuyệt vời!" }] },
    { id: 9, name: "Tài liệu Java Nâng cao", price: 110000, category: "Lập trình", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 10, description: "Kiến thức Java chuyên sâu.", monthlyDeal: false, featured: false, seasonal: false, reviews: [] },
    { id: 10, name: "Báo cáo Quản trị Kinh doanh", price: 70000, category: "Báo cáo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s", discount: 0, description: "Phân tích quản trị kinh doanh.", monthlyDeal: false, featured: false, seasonal: false, reviews: [] },
];

const categories = [
    { name: "Lập trình", description: "Tài liệu lập trình.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s" },
    { name: "Báo cáo", description: "Mẫu báo cáo chuyên nghiệp.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s" },
    { name: "Đồ án", description: "Hướng dẫn đồ án.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s" },
    { name: "Ôn thi", description: "Sách ôn thi.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s" },
    { name: "Khoa học dữ liệu", description: "Tài liệu AI, Big Data.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s" },
];

const news = [
    { id: 1, title: "Top 5 sách lập trình", summary: "Sách tốt cho người mới.", content: "5 cuốn sách lập trình không thể bỏ qua...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s" },
    { id: 2, title: "Ôn thi THPT hiệu quả", summary: "Mẹo ôn thi lớp 12.", content: "Cách đạt điểm cao trong kỳ thi THPT...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9GcR84SsgSLUsJhXJMbFIyJGff26RWPuAscqxRQ&s" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 6;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentTestimonialIndex = 0;
let walletBalance = parseFloat(localStorage.getItem('walletBalance')) || 0;
let selectedAmount = 0;
let currentReviewProductId = null;

// Thêm biến cho so sánh sản phẩm
let compareList = JSON.parse(localStorage.getItem('compareList')) || [];

// Thêm biến cho carousel
let carouselIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    updateUserSection();
    updateCartCount();
    updateWalletBalance();
    updateCompareCount(); // Thêm khởi tạo số lượng so sánh
    setupEventListeners();

    const page = window.location.pathname.split('/').pop() || 'index.html';
    switch (page) {
        case 'index.html':
            displayCategories();
            displayMonthlyDeals();
            displayFeaturedProducts();
            displaySeasonalOffers();
            displayProducts();
            displayTestimonials();
            displayNews();
            startCountdown();
            startTestimonialAutoPlay();
            break;
        case 'products.html':
            displayFeaturedCarousel(); // Thêm carousel sản phẩm nổi bật
            displayPersonalizedRecommendations(); // Thêm đề xuất cá nhân hóa
            displayProductStats(); // Thêm biểu đồ thống kê
            displayProducts();
            startCarouselAutoPlay(); // Bắt đầu tự động chạy carousel
            break;
        case 'cart.html':
            displayCart();
            break;
    }
    displayPagination();
}

function setupEventListeners() {
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
    document.getElementById('checkoutForm')?.addEventListener('submit', handleCheckout);
    document.getElementById('reviewForm')?.addEventListener('submit', handleReview);
    document.getElementById('searchInput')?.addEventListener('input', showSearchSuggestions); // Cập nhật để hiển thị gợi ý
    document.getElementById('categoryFilter')?.addEventListener('change', filterProducts);
    document.getElementById('sortFilter')?.addEventListener('change', sortProducts);
}

function updateUserSection() {
    const userSection = document.getElementById('userSection');
    if (!userSection) return;

    userSection.innerHTML = currentUser
        ? `<span onclick="showUserMenu()" aria-label="Thông tin người dùng">Xin chào, ${currentUser.name}</span>
           <a href="#" onclick="logout()" aria-label="Đăng xuất">Đăng xuất</a>`
        : `<a href="#" id="loginBtn" aria-label="Đăng nhập">Đăng nhập</a>
           <a href="#" id="registerBtn" aria-label="Đăng ký">Đăng ký</a>`;

    document.getElementById('loginBtn')?.addEventListener('click', () => openModal('loginModal'));
    document.getElementById('registerBtn')?.addEventListener('click', () => openModal('registerModal'));
}

function showUserMenu() {
    showNotification(`Xin chào, ${currentUser.name}! Số dư: ${walletBalance.toLocaleString()} VNĐ`);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserSection();
    showNotification('Đã đăng xuất!');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        closeModal('loginModal');
        updateUserSection();
        showNotification(`Xin chào, ${user.name}!`);
    } else {
        showNotification('Email hoặc mật khẩu không đúng!', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.email === email)) {
        showNotification('Email đã được đăng ký!', 'error');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    showNotification('Đăng ký thành công! Vui lòng đăng nhập.');
    closeModal('registerModal');
    openModal('loginModal');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.backgroundColor = type === 'error' ? '#e74c3c' : '#2ecc71';
    document.body.appendChild(notification);
    notification.style.display = 'block';
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

function displayCategories() {
    const container = document.getElementById('categoryItems');
    if (!container) return;

    container.innerHTML = categories.map(category => `
        <div class="category-item" onclick="selectCategory('${category.name}')" aria-label="Danh mục ${category.name}">
            <img src="${category.image}" alt="${category.name}">
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        </div>
    `).join('');
}

function selectCategory(category) {
    document.getElementById('categoryFilter').value = category;
    filterProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function displayMonthlyDeals() {
    const container = document.getElementById('monthlyDeals');
    if (!container) return;

    container.innerHTML = products
        .filter(p => p.monthlyDeal)
        .map(product => renderProduct(product))
        .join('');
}

function displayFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    container.innerHTML = products
        .filter(p => p.featured)
        .map(product => renderProduct(product, true))
        .join('');
}

// Thêm hàm hiển thị carousel sản phẩm nổi bật
function displayFeaturedCarousel() {
    const container = document.getElementById('featuredCarousel');
    if (!container) return;

    const featuredProducts = products.filter(p => p.featured);
    container.innerHTML = featuredProducts.map(product => renderProduct(product, true)).join('');

    updateCarousel();
}

// Thêm hàm cập nhật carousel
function updateCarousel() {
    const container = document.getElementById('featuredCarousel');
    if (container) {
        container.style.transform = `translateX(-${carouselIndex * 25}%)`;
    }
}

// Thêm hàm điều hướng carousel
function prevCarousel() {
    const featuredProducts = products.filter(p => p.featured);
    carouselIndex = (carouselIndex - 1 + featuredProducts.length) % featuredProducts.length;
    updateCarousel();
}

function nextCarousel() {
    const featuredProducts = products.filter(p => p.featured);
    carouselIndex = (carouselIndex + 1) % featuredProducts.length;
    updateCarousel();
}

// Thêm hàm tự động chạy carousel
function startCarouselAutoPlay() {
    if (products.filter(p => p.featured).length) {
        setInterval(nextCarousel, 5000);
    }
}

// Thêm hàm hiển thị đề xuất cá nhân hóa
function displayPersonalizedRecommendations() {
    const container = document.getElementById('personalizedRecommendationsContent');
    if (!container) return;

    // Lấy danh mục yêu thích từ localStorage hoặc mặc định
    const favoriteCategories = JSON.parse(localStorage.getItem('favoriteCategories')) || ['Lập trình'];
    const recommendedProducts = products
        .filter(p => favoriteCategories.includes(p.category))
        .slice(0, 4);

    container.innerHTML = recommendedProducts.length
        ? recommendedProducts.map(product => renderProduct(product, true)).join('')
        : '<p>Chưa có đề xuất. Hãy tìm kiếm hoặc thêm sản phẩm yêu thích!</p>';
}

// Thêm hàm hiển thị biểu đồ thống kê sản phẩm
function displayProductStats() {
    const ctx = document.getElementById('productStatsChart')?.getContext('2d');
    if (!ctx) return;

    const categories = [...new Set(products.map(p => p.category))];
    const productCounts = categories.map(cat => products.filter(p => p.category === cat).length);
    const reviewCounts = categories.map(cat => products.filter(p => p.category === cat).reduce((sum, p) => sum + p.reviews.length, 0));

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [
                {
                    label: 'Số sản phẩm',
                    data: productCounts,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Số đánh giá',
                    data: reviewCounts,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function displaySeasonalOffers() {
    const container = document.getElementById('seasonalOffers');
    if (!container) return;

    container.innerHTML = products
        .filter(p => p.seasonal)
        .map(product => renderProduct(product, true))
        .join('');
}

function displayProducts() {
    const container = document.getElementById('products');
    if (!container) return;

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    container.innerHTML = filteredProducts
        .slice(start, end)
        .map(product => renderProduct(product, true))
        .join('');
}

function renderProduct(product, showDetails = false) {
    const isFavorite = favorites.includes(product.id);
    const isInCompare = compareList.includes(product.id); // Kiểm tra sản phẩm có trong danh sách so sánh
    const avgRating = product.reviews.length ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length).toFixed(1) : 0;
    const discountedPrice = calculateDiscountedPrice(product);

    return `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="rating">Đánh giá: ${avgRating || 'Chưa có'}</div>
            <div class="price-container">
                ${product.discount > 0 ? `<span class="original-price">${product.price.toLocaleString()} VNĐ</span>` : ''}
                <span class="discounted-price">${discountedPrice.toLocaleString()} VNĐ</span>
            </div>
            ${product.discount > 0 ? `<span class="discount-badge">Giảm ${product.discount}%</span>` : ''}
            <button class="add-to-cart" onclick="addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ">Thêm vào giỏ</button>
            ${showDetails ? `
                <button class="view-details" onclick="viewDetails(${product.id})" aria-label="Chi tiết ${product.name}">Chi tiết</button>
                <button class="share-product" onclick="shareProduct(${product.id})" aria-label="Chia sẻ ${product.name}">Chia sẻ</button>
                <button class="add-review" onclick="openReviewModal(${product.id})" aria-label="Đánh giá ${product.name}">Đánh giá</button>
                ${product.reviews.length ? `<button class="view-all-reviews" onclick="viewAllReviews(${product.id})" aria-label="Xem đánh giá ${product.name}">Xem đánh giá</button>` : ''}
                <button class="compare-product ${isInCompare ? 'active' : ''}" onclick="addToCompare(${product.id})" aria-label="${isInCompare ? 'Xóa khỏi so sánh' : 'Thêm vào so sánh'} ${product.name}">${isInCompare ? 'Xóa so sánh' : 'So sánh'}</button>
                <div class="reviews">${product.reviews.slice(0, 2).map(r => `<div><strong>${r.name}</strong>: ${r.rating} ★ - ${r.comment}</div>`).join('')}</div>
            ` : ''}
            <button class="favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})" aria-label="${isFavorite ? 'Bỏ yêu thích' : 'Yêu thích'} ${product.name}">${isFavorite ? '♥' : '♡'}</button>
        </div>
    `;
}

function displayCart() {
    const container = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');
    if (!container || !totalElement) return;

    if (!cart.length) {
        container.innerHTML = '<p>Giỏ hàng trống!</p>';
        totalElement.textContent = '0';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <input type="number" value="${item.quantity}" min="1" onchange="updateCartItem(${item.id}, this.value)" aria-label="Số lượng ${item.name}">
            <span>${(calculateDiscountedPrice(item) * item.quantity).toLocaleString()} VNĐ</span>
            <button onclick="removeFromCart(${item.id})" aria-label="Xóa ${item.name}">Xóa</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + calculateDiscountedPrice(item) * item.quantity, 0);
    totalElement.textContent = total.toLocaleString();
}

function displayTestimonials() {
    const container = document.getElementById('testimonialItems');
    if (!container) return;

    const reviews = products.flatMap(p => p.reviews.map(r => ({ ...r, productName: p.name })));
    if (!reviews.length) {
        container.innerHTML = '<p>Chưa có đánh giá.</p>';
        return;
    }

    container.innerHTML = reviews.map((review, index) => `
        <div class="testimonial-item" style="transform: translateX(${index * 100}%);">
            <p>"${review.comment}"</p>
            <strong>${review.name}</strong> - ${review.rating} ★<br>
            <small>${review.productName}</small>
        </div>
    `).join('');
}

function prevTestimonial() {
    const reviews = products.flatMap(p => p.reviews);
    if (!reviews.length) return;
    currentTestimonialIndex = (currentTestimonialIndex - 1 + reviews.length) % reviews.length;
    updateTestimonial();
}

function nextTestimonial() {
    const reviews = products.flatMap(p => p.reviews);
    if (!reviews.length) return;
    currentTestimonialIndex = (currentTestimonialIndex + 1) % reviews.length;
    updateTestimonial();
}

function updateTestimonial() {
    document.querySelectorAll('.testimonial-item').forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentTestimonialIndex) * 100}%)`;
    });
}

function startTestimonialAutoPlay() {
    if (products.flatMap(p => p.reviews).length) {
        setInterval(nextTestimonial, 5000);
    }
}

function displayNews() {
    const container = document.getElementById('newsItems');
    if (!container) return;

    container.innerHTML = news.map(item => `
        <div class="news-item" onclick="showNewsDetails(${item.id})" aria-label="Tin tức ${item.title}">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
        </div>
    `).join('');
}

function showNewsDetails(newsId) {
    const item = news.find(n => n.id === newsId);
    if (!item) return;

    const modal = document.getElementById('newsModal');
    const content = document.getElementById('newsContent');
    if (modal && content) {
        content.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        modal.style.display = 'block';
    }
}

function startCountdown() {
    const countdown = document.getElementById('countdown');
    if (!countdown) return;

    const endDate = new Date('2025-09-30T23:59:59').getTime();
    const update = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            countdown.textContent = 'Khuyến mãi đã kết thúc!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdown.textContent = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
    };

    update();
    setInterval(update, 1000);
}

function displayPagination() {
    const container = document.getElementById('pagination');
    if (!container) return;

    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
    container.innerHTML = Array.from({ length: pageCount }, (_, i) => `
        <button class="${currentPage === i + 1 ? 'active' : ''}" onclick="changePage(${i + 1})" aria-label="Trang ${i + 1}">${i + 1}</button>
    `).join('');
}

function changePage(page) {
    currentPage = page;
    displayProducts();
    displayPagination();
}

function calculateDiscountedPrice(product) {
    return product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;
}

function addToCart(productId) {
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!', 'error');
        openModal('loginModal');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} đã được thêm vào giỏ hàng!`);

    if (window.location.pathname.split('/').pop() === 'cart.html') {
        displayCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.split('/').pop() === 'cart.html') {
        displayCart();
    }
}

function updateCartItem(productId, quantity) {
    const parsedQuantity = parseInt(quantity);
    if (parsedQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = parsedQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        if (window.location.pathname.split('/').pop() === 'cart.html') {
            displayCart();
        }
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function checkout() {
    if (!cart.length) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để thanh toán!', 'error');
        openModal('loginModal');
        return;
    }
    openModal('checkoutModal');
}

function handleCheckout(e) {
    e.preventDefault();
    const paymentMethod = document.getElementById('checkoutPayment').value;
    const total = cart.reduce((sum, item) => sum + calculateDiscountedPrice(item) * item.quantity, 0);

    if (paymentMethod === 'wallet') {
        if (walletBalance < total) {
            showNotification('Số dư tài khoản không đủ! Vui lòng nạp thêm tiền.', 'error');
            closeModal('checkoutModal');
            return;
        }
        walletBalance -= total;
        localStorage.setItem('walletBalance', walletBalance);
        updateWalletBalance();
    }

    showNotification('Đơn hàng đã được đặt thành công!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    closeModal('checkoutModal');
    if (window.location.pathname.split('/').pop() === 'cart.html') {
        displayCart();
    }
}

function updateWalletBalance() {
    const balanceElement = document.getElementById('walletBalance');
    if (balanceElement) {
        balanceElement.textContent = walletBalance.toLocaleString();
    }
}

function showQRCode() {
    const qrAmount = document.getElementById('qrAmount').value;
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    if (qrAmount) {
        selectedAmount = parseFloat(qrAmount);
        qrCodeContainer.style.display = 'block';
    } else {
        selectedAmount = 0;
        qrCodeContainer.style.display = 'none';
    }
}

function simulateQRPayment() {
    if (!selectedAmount) {
        showNotification('Vui lòng chọn số tiền trước khi nạp!', 'error');
        return;
    }

    walletBalance += selectedAmount;
    localStorage.setItem('walletBalance', walletBalance);
    updateWalletBalance();
    showNotification(`Nạp ${selectedAmount.toLocaleString()} VNĐ thành công qua mã QR BIDV!`);
    document.getElementById('qrAmount').value = '';
    showQRCode();
}

// Thêm hàm tìm kiếm với gợi ý
function showSearchSuggestions() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (!term) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const suggestions = products.filter(p =>
        p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
    ).slice(0, 5);

    suggestionsContainer.innerHTML = suggestions.map(p => `
        <div class="suggestion-item" onclick="selectSuggestion('${p.name}')">${p.name} (${p.category})</div>
    `).join('');
    suggestionsContainer.style.display = suggestions.length ? 'block' : 'none';
}

function selectSuggestion(name) {
    document.getElementById('searchInput').value = name;
    document.getElementById('searchSuggestions').style.display = 'none';
    searchProducts();
}

function searchProducts() {
    const term = document.getElementById('searchInput')?.value.toLowerCase() || '';
    filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
    currentPage = 1;
    displayProducts();
    displayPagination();
}

function filterProducts() {
    const category = document.getElementById('categoryFilter')?.value || 'all';
    filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    currentPage = 1;
    displayProducts();
    displayPagination();
}

function sortProducts() {
    const sortOption = document.getElementById('sortFilter')?.value || 'name-asc';
    filteredProducts.sort((a, b) => {
        if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
        if (sortOption === 'price-asc') return calculateDiscountedPrice(a) - calculateDiscountedPrice(b);
        if (sortOption === 'price-desc') return calculateDiscountedPrice(b) - calculateDiscountedPrice(a);
        return 0;
    });
    currentPage = 1;
    displayProducts();
    displayPagination();
}

function showDiscountedOnly() {
    filteredProducts = products.filter(p => p.discount > 0);
    currentPage = 1;
    displayProducts();
    displayPagination();
}

function resetFilters() {
    filteredProducts = [...products];
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('sortFilter').value = 'name-asc';
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    displayProducts();
    displayPagination();
}

function toggleFavorite(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
        // Lưu danh mục yêu thích
        const product = products.find(p => p.id === productId);
        if (product) {
            const favoriteCategories = JSON.parse(localStorage.getItem('favoriteCategories')) || [];
            if (!favoriteCategories.includes(product.category)) {
                favoriteCategories.push(product.category);
                localStorage.setItem('favoriteCategories', JSON.stringify(favoriteCategories));
            }
        }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayProducts();
    displayFeaturedProducts();
    displayMonthlyDeals();
    displaySeasonalOffers();
    displayFeaturedCarousel(); // Cập nhật carousel
    displayPersonalizedRecommendations(); // Cập nhật đề xuất
}

// Cập nhật hàm openReviewModal để hỗ trợ đánh giá sao tương tác
function openReviewModal(productId) {
    currentReviewProductId = productId;
    openModal('reviewModal');

    // Reset sao
    const stars = document.querySelectorAll('#starRating .star');
    stars.forEach(star => {
        star.classList.remove('selected');
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            document.getElementById('reviewRating').value = value;
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            for (let sibling = star.nextElementSibling; sibling; sibling = sibling.nextElementSibling) {
                sibling.classList.add('selected');
            }
        });
    });
}

function handleReview(e) {
    e.preventDefault();
    if (!currentReviewProductId) return;

    const name = document.getElementById('reviewName').value;
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value;

    if (!rating) {
        showNotification('Vui lòng chọn số sao!', 'error');
        return;
    }

    const product = products.find(p => p.id === currentReviewProductId);
    if (product) {
        product.reviews.push({ name, rating, comment });
        closeModal('reviewModal');
        showNotification('Đánh giá đã được gửi!');
        displayProducts();
        displayFeaturedProducts();
        displaySeasonalOffers();
        displayTestimonials();
        displayFeaturedCarousel();
        displayPersonalizedRecommendations();
        displayProductStats();
    }
}

function viewAllReviews(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('allReviewsModal');
    const content = document.getElementById('allReviewsContent');
    if (modal && content) {
        content.innerHTML = product.reviews.length
            ? product.reviews.map(r => `<div><strong>${r.name}</strong>: ${r.rating} ★ - ${r.comment}</div>`).join('')
            : '<p>Chưa có đánh giá.</p>';
        modal.style.display = 'block';
    }
}

function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`Chi tiết sản phẩm: ${product.name} - ${product.description}`);
    }
}

function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`Chia sẻ: ${product.name} - Giá: ${calculateDiscountedPrice(product).toLocaleString()} VNĐ`);
    }
}

// Thêm hàm so sánh sản phẩm
function addToCompare(productId) {
    if (compareList.includes(productId)) {
        compareList = compareList.filter(id => id !== productId);
        showNotification('Đã xóa sản phẩm khỏi danh sách so sánh!');
    } else if (compareList.length < 4) {
        compareList.push(productId);
        showNotification('Đã thêm sản phẩm vào danh sách so sánh!');
    } else {
        showNotification('Chỉ có thể so sánh tối đa 4 sản phẩm!', 'error');
    }
    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompareCount();
    displayProducts();
    displayFeaturedCarousel();
    displayPersonalizedRecommendations();
}

function updateCompareCount() {
    const compareCount = document.getElementById('compareCount');
    if (compareCount) compareCount.textContent = compareList.length;
}

function showCompareModal() {
    const modal = document.getElementById('compareModal');
    const content = document.getElementById('compareContent');
    if (!modal || !content) return;

    const productsToCompare = products.filter(p => compareList.includes(p.id));
    content.innerHTML = productsToCompare.length
        ? `
            <table>
                <tr>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Danh mục</th>
                    <th>Đánh giá</th>
                    <th>Mô tả</th>
                </tr>
                ${productsToCompare.map(p => `
                    <tr>
                        <td>${p.name}</td>
                        <td>${calculateDiscountedPrice(p).toLocaleString()} VNĐ</td>
                        <td>${p.category}</td>
                        <td>${p.reviews.length ? (p.reviews.reduce((sum, r) => sum + r.rating, 0) / p.reviews.length).toFixed(1) : 'Chưa có'}</td>
                        <td>${p.description}</td>
                    </tr>
                `).join('')}
            </table>
        `
        : '<p>Chưa có sản phẩm nào để so sánh!</p>';
    modal.style.display = 'block';
}

// Thêm hàm cho widget chat
function toggleChat() {
    const chatContent = document.getElementById('chatContent');
    chatContent.style.display = chatContent.style.display === 'none' ? 'block' : 'none';
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value.trim();

    if (message) {
        chatMessages.innerHTML += `<div><strong>Bạn:</strong> ${message}</div>`;
        setTimeout(() => {
            chatMessages.innerHTML += `<div><strong>Bot:</strong> Cảm ơn câu hỏi của bạn! Chúng tôi sẽ trả lời sớm.</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}