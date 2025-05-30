// Product data with corrected image URLs
const products = [
    { id: 1, name: "Tài liệu Lập trình C", price: 50000, category: "Lập trình", image: "https://via.placeholder.com/150/3498db", discount: 10, description: "Hướng dẫn cơ bản về lập trình C.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Nguyễn Văn A", rating: 5, comment: "Rất dễ hiểu!" }], uploader: null },
    { id: 2, name: "Báo cáo Thực tập CNTT", price: 75000, category: "Báo cáo", image: "https://via.placeholder.com/150/2ecc71", discount: 0, description: "Mẫu báo cáo thực tập CNTT.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
    { id: 3, name: "Đồ án Thiết kế Web", price: 100000, category: "Đồ án", image: "https://via.placeholder.com/150/e74c3c", discount: 15, description: "Đồ án thiết kế website bán hàng.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Lê Văn C", rating: 5, comment: "Rất chi tiết!" }], uploader: null },
    { id: 4, name: "Tài liệu Học máy", price: 120000, category: "Khoa học dữ liệu", image: "https://via.placeholder.com/150/9b59b6", discount: 0, description: "Giới thiệu về học máy.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
    { id: 5, name: "Ôn thi THPT Toán", price: 80000, category: "Ôn thi", image: "https://via.placeholder.com/150/1abc9c", discount: 10, description: "Tài liệu ôn thi Toán.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Phạm Thị D", rating: 4, comment: "Cần thêm lời giải." }], uploader: null },
    { id: 6, name: "Báo cáo Kinh tế vi mô", price: 60000, category: "Báo cáo", image: "https://via.placeholder.com/150/f1c40f", discount: 5, description: "Phân tích kinh tế vi mô.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
    { id: 7, name: "Đồ án Cơ khí", price: 150000, category: "Đồ án", image: "https://via.placeholder.com/150/e67e22", discount: 0, description: "Thiết kế hệ thống cơ khí.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
    { id: 8, name: "Tài liệu Python Cơ bản", price: 90000, category: "Lập trình", image: "https://via.placeholder.com/150/3498db", discount: 20, description: "Học Python từ cơ bản.", monthlyDeal: true, featured: true, seasonal: true, reviews: [{ name: "Hoàng Văn E", rating: 5, comment: "Tuyệt vời!" }], uploader: null },
    { id: 9, name: "Tài liệu Java Nâng cao", price: 110000, category: "Lập trình", image: "https://via.placeholder.com/150/3498db", discount: 10, description: "Kiến thức Java chuyên sâu.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
    { id: 10, name: "Báo cáo Quản trị Kinh doanh", price: 70000, category: "Báo cáo", image: "https://via.placeholder.com/150/2ecc71", discount: 0, description: "Phân tích quản trị kinh doanh.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
    { id: 11, name: "Sách Vật lý 12", price: 65000, category: "Khoa học tự nhiên", image: "https://via.placeholder.com/150/34495e", discount: 5, description: "Tài liệu ôn tập Vật lý lớp 12.", monthlyDeal: true, featured: true, seasonal: true, reviews: [], uploader: null },
    { id: 12, name: "Học Tiếng Anh Giao tiếp", price: 85000, category: "Ngoại ngữ", image: "https://via.placeholder.com/150/f39c12", discount: 10, description: "Sách học tiếng Anh giao tiếp cơ bản.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
    { id: 13, name: "Truyện Cổ Tích Việt Nam", price: 45000, category: "Sách thiếu nhi", image: "https://via.placeholder.com/150/e91e63", discount: 15, description: "Tuyển tập truyện cổ tích cho trẻ em.", monthlyDeal: true, featured: true, seasonal: true, reviews: [], uploader: null },
    { id: 14, name: "Kinh tế học cơ bản", price: 95000, category: "Sách kinh tế", image: "https://via.placeholder.com/150/2c3e50", discount: 0, description: "Kiến thức cơ bản về kinh tế học.", monthlyDeal: false, featured: false, seasonal: false, reviews: [], uploader: null },
];

// Corrected categories array
const categories = [
    { name: "Lập trình", description: "Tài liệu lập trình.", image: "https://via.placeholder.com/150/3498db" },
    { name: "Báo cáo", description: "Mẫu báo cáo chuyên nghiệp.", image: "https://via.placeholder.com/150/2ecc71" },
    { name: "Đồ án", description: "Hướng dẫn đồ án.", image: "https://via.placeholder.com/150/e74c3c" },
    { name: "Ôn thi", description: "Sách ôn thi.", image: "https://via.placeholder.com/150/1abc9c" },
    { name: "Khoa học dữ liệu", description: "Tài liệu AI, Big Data.", image: "https://via.placeholder.com/150/9b59b6" },
    { name: "Khoa học tự nhiên", description: "Tài liệu khoa học tự nhiên.", image: "https://via.placeholder.com/150/34495e" },
    { name: "Ngoại ngữ", description: "Sách học ngoại ngữ.", image: "https://via.placeholder.com/150/f39c12" },
    { name: "Sách thiếu nhi", description: "Sách dành cho trẻ em.", image: "https://via.placeholder.com/150/e91e63" },
    { name: "Sách kinh tế", description: "Tài liệu kinh tế học.", image: "https://via.placeholder.com/150/2c3e50" },
];

// Corrected news array
const news = [
    { id: 1, title: "Top 5 sách lập trình", summary: "Sách tốt cho người mới.", content: "5 cuốn sách lập trình không thể bỏ qua...", image: "https://via.placeholder.com/300/3498db" },
    { id: 2, title: "Ôn thi THPT hiệu quả", summary: "Mẹo ôn thi lớp 12.", content: "Cách đạt điểm cao trong kỳ thi THPT...", image: "https://via.placeholder.com/300/1abc9c" },
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
let carouselIndex = 0;

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    updateUserSection();
    updateCartCount();
    updateWalletBalance();
    setupEventListeners();

    const page = window.location.pathname.split('/').pop() || 'index.html';
    switch (page) {
        case 'index.html':
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
            displayMonthlyDeals();
            displayFeaturedProducts();
            displaySeasonalOffers();
            displayProducts();
            displayTestimonials();
            displayNews();
            startCountdown();
            startTestimonialAutoPlay();
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
    document.getElementById('uploadDocumentForm')?.addEventListener('submit', handleUploadDocument);
    document.getElementById('searchInput')?.addEventListener('input', showSearchSuggestions);
    document.getElementById('categoryFilter')?.addEventListener('change', filterProducts);
    document.getElementById('sortFilter')?.addEventListener('change', sortProducts);
    document.getElementById('documentImage')?.addEventListener('change', previewImage);
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
    if (!currentUser) return;
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileWalletBalance').textContent = walletBalance.toLocaleString();
    openModal('profileModal');
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
    notification.className = `notification ${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.textContent = message;
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

function openUploadDocumentModal() {
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để đăng tài liệu!', 'error');
        openModal('loginModal');
        return;
    }
    openModal('uploadDocumentModal');
}

function handleUploadDocument(e) {
    e.preventDefault();
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để đăng tài liệu!', 'error');
        return;
    }

    const name = document.getElementById('documentName').value;
    const category = document.getElementById('documentCategory').value;
    const price = parseFloat(document.getElementById('documentPrice').value);
    const description = document.getElementById('documentDescription').value;
    const imageFile = document.getElementById('documentImage').files[0];
    const documentFile = document.getElementById('documentFile').files[0];
    const discount = parseInt(document.getElementById('documentDiscount').value) || 0;

    if (!imageFile || !documentFile) {
        showNotification('Vui lòng chọn cả hình ảnh và file tài liệu!', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const imageDataUrl = event.target.result;

        const newProduct = {
            id: products.length + 1,
            name,
            price,
            category,
            image: imageDataUrl,
            document: documentFile,
            discount,
            description,
            monthlyDeal: false,
            featured: false,
            seasonal: false,
            reviews: [],
            uploader: currentUser.email
        };

        products.push(newProduct);
        filteredProducts = [...products];
        localStorage.setItem('products', JSON.stringify(products.map(p => ({
            ...p,
            document: null
        }))));

        closeModal('uploadDocumentModal');
        showNotification('Tài liệu đã được đăng thành công!');
        displayProducts();
        displayPagination();
        document.getElementById('uploadDocumentForm').reset();
        document.getElementById('imagePreview').innerHTML = '';
    };

    reader.readAsDataURL(imageFile);
}

function previewImage(event) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById('imagePreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = '';
    }
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
        .map(product => renderProduct(product))
        .join('');
}

function displayFeaturedCarousel() {
    const container = document.getElementById('featuredCarousel');
    if (!container) return;

    const featuredProducts = products.filter(p => p.featured);
    container.innerHTML = featuredProducts.map(product => renderProduct(product)).join('');

    updateCarousel();
}

function updateCarousel() {
    const container = document.getElementById('featuredCarousel');
    if (container) {
        container.style.transform = `translateX(-${carouselIndex * 25}%)`;
    }
}

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

function startCarouselAutoPlay() {
    if (products.filter(p => p.featured).length) {
        setInterval(nextCarousel, 5000);
    }
}

function displayPersonalizedRecommendations() {
    const container = document.getElementById('personalizedRecommendationsContent');
    if (!container) return;

    const favoriteCategories = JSON.parse(localStorage.getItem('favoriteCategories')) || ['Lập trình'];
    const recommendedProducts = products
        .filter(p => favoriteCategories.includes(p.category))
        .slice(0, 4);

    container.innerHTML = recommendedProducts.length
        ? recommendedProducts.map(product => renderProduct(product)).join('')
        : '<p>Chưa có đề xuất. Hãy tìm kiếm hoặc thêm sản phẩm yêu thích!</p>';
}

function displayProductStats() {
    const ctx = document.getElementById('productStatsChart')?.getContext('2d');
    if (!ctx) return;

    const categoryNames = categories.map(c => c.name);
    const productCounts = categoryNames.map(cat => products.filter(p => p.category === cat).length);
    const reviewCounts = categoryNames.map(cat => products.filter(p => p.category === cat).reduce((sum, p) => sum + p.reviews.length, 0));

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categoryNames,
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
        .map(product => renderProduct(product))
        .join('');
}

function displayProducts() {
    const container = document.getElementById('products');
    if (!container) {
        console.error('Không tìm thấy container #products');
        return;
    }

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = filteredProducts.slice(start, end);

    container.innerHTML = productsToShow.length
        ? productsToShow.map(product => renderProduct(product)).join('')
        : '<p>Không có sản phẩm nào trong danh mục này!</p>';
}

function renderProduct(product) {
    const isFavorite = favorites.includes(product.id);
    const avgRating = product.reviews.length ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length).toFixed(1) : 0;
    const discountedPrice = calculateDiscountedPrice(product);

    return `
        <div class="product" onclick="showProductDetails(${product.id})" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="rating">Đánh giá: ${avgRating || 'Chưa có'}</div>
            <div class="price-container">
                ${product.discount > 0 ? `<span class="original-price">${product.price.toLocaleString()} VNĐ</span>` : ''}
                <span class="discounted-price">${discountedPrice.toLocaleString()} VNĐ</span>
            </div>
            ${product.discount > 0 ? `<span class="discount-badge">Giảm ${product.discount}%</span>` : ''}
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ">Thêm vào giỏ</button>
            <button class="favorite ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})" aria-label="${isFavorite ? 'Bỏ yêu thích' : 'Yêu thích'} ${product.name}">${isFavorite ? '♥' : '♡'}</button>
        </div>
    `;
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productDetailsModal');
    const content = document.getElementById('productDetailsContent');
    if (modal && content) {
        const isFavorite = favorites.includes(product.id);
        const avgRating = product.reviews.length ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length).toFixed(1) : 0;
        const discountedPrice = calculateDiscountedPrice(product);

        content.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: auto; border-radius: 8px;">
            <h3>${product.name}</h3>
            <p><strong>Danh mục:</strong> ${product.category}</p>
            <p><strong>Mô tả:</strong> ${product.description}</p>
            <div class="price-container">
                ${product.discount > 0 ? `<span class="original-price">Giá gốc: ${product.price.toLocaleString()} VNĐ</span>` : ''}
                <span class="discounted-price">Giá bán: ${discountedPrice.toLocaleString()} VNĐ</span>
            </div>
            ${product.discount > 0 ? `<span class="discount-badge">Giảm giá: ${product.discount}%</span>` : ''}
            <p><strong>Đánh giá trung bình:</strong> ${avgRating || 'Chưa có'} ★</p>
            <p><strong>Người đăng:</strong> ${product.uploader || 'BookStore'}</p>
            <h4>Đánh giá từ khách hàng:</h4>
            ${product.reviews.length ? product.reviews.map(review => `
                <div class="review">
                    <p><strong>${review.name}</strong> (${review.rating} ★): ${review.comment}</p>
                </div>
            `).join('') : '<p>Chưa có đánh giá nào.</p>'}
            <button onclick="addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ">Thêm vào giỏ</button>
            <button class="favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})" aria-label="${isFavorite ? 'Bỏ yêu thích' : 'Yêu thích'} ${product.name}">${isFavorite ? '♥' : '♡'}</button>
        `;
        modal.style.display = 'block';
    }
}

function displayCart() {
    const container = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');
    const cartCountElement = document.getElementById('cartCount');
    if (!container || !totalElement || !cartCountElement) return;

    if (!cart.length) {
        container.innerHTML = '<p>Giỏ hàng trống!</p>';
        totalElement.textContent = '0';
        cartCountElement.textContent = '0';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)" aria-label="Số lượng ${item.name}">
            <span>${(calculateDiscountedPrice(item) * item.quantity).toLocaleString()} VNĐ</span>
            <button onclick="removeFromCart(${item.id})" aria-label="Xóa ${item.name}"><i class="fas fa-trash"></i> Xóa</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + calculateDiscountedPrice(item) * item.quantity, 0);
    totalElement.textContent = total.toLocaleString();
    cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
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
        const newItem = document.querySelector('.cart-item:last-child');
        if (newItem) {
            newItem.style.opacity = '0';
            newItem.style.transition = 'opacity 0.6s ease';
            setTimeout(() => {
                newItem.style.opacity = '1';
            }, 100);
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.split('/').pop() === 'cart.html') {
        displayCart();
    }
    showNotification('Sản phẩm đã được xóa khỏi giỏ hàng!');
}

function updateQuantity(productId, quantity) {
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
    const cartCountElements = document.querySelectorAll('#cartCount');
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalQuantity);
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
    filteredProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
    currentPage = 1;
    displayProducts();
    displayPagination();

    const sidebarItems = document.querySelectorAll('.sidebar .category-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.trim() === (category === 'all' ? 'Tất cả danh mục' : category)) {
            item.classList.add('active');
        }
    });
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

    const sidebarItems = document.querySelectorAll('.sidebar .category-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.trim() === 'Tất cả danh mục') {
            item.classList.add('active');
        }
    });
}

function selectCategory(category) {
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category === 'all' ? 'all' : category;
    }

    filteredProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
    currentPage = 1;
    displayProducts();
    displayPagination();

    const sidebarItems = document.querySelectorAll('.sidebar .category-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.trim() === (category === 'all' ? 'Tất cả danh mục' : category)) {
            item.classList.add('active');
        }
    });

    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('active');
    }
}

function toggleFavorite(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
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
    displayFeaturedCarousel();
    displayPersonalizedRecommendations();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function toggleChat() {
    const chatContent = document.getElementById('chatContent');
    const isHidden = chatContent.style.display === 'none' || !chatContent.style.display;
    chatContent.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
    }
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value.trim().toLowerCase();

    if (message) {
        chatMessages.innerHTML += `<div><strong>Bạn:</strong> ${chatInput.value}</div>`;
        let response = generateResponse(message);
        setTimeout(() => {
            chatMessages.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function generateResponse(message) {
    if (message.includes('chào') || message.includes('hi') || message.includes('hello')) {
        return 'Chào bạn! Rất vui được hỗ trợ. Bạn cần tư vấn về sản phẩm nào?';
    }

    if (message.includes('sản phẩm') || message.includes('tài liệu') || message.includes('sách')) {
        const productNames = products.map(p => p.name).join(', ');
        return `Chúng tôi có các tài liệu như: ${productNames}. Bạn muốn tìm hiểu về tài liệu nào cụ thể?`;
    }

    for (let product of products) {
        if (message.includes(product.name.toLowerCase()) || message.includes(product.category.toLowerCase())) {
            const discountedPrice = calculateDiscountedPrice(product).toLocaleString();
            return `Tài liệu "${product.name}" (${product.category}) có giá ${discountedPrice} VNĐ. ${product.description} Bạn có muốn thêm vào giỏ hàng không?`;
        }
    }

    if (message.includes('giảm giá') || message.includes('khuyến mãi') || message.includes('discount')) {
        const discountedProducts = products.filter(p => p.discount > 0);
        if (discountedProducts.length) {
            const discountList = discountedProducts.map(p => `${p.name} (Giảm ${p.discount}%)`).join(', ');
            return `Hiện tại, chúng tôi có các sản phẩm giảm giá: ${discountList}. Bạn muốn xem chi tiết sản phẩm nào?`;
        }
        return 'Hiện tại chưa có chương trình giảm giá nào. Bạn có muốn xem tất cả sản phẩm không?';
    }

    if (message.includes('danh mục') || message.includes('loại tài liệu') || message.includes('category')) {
        const categoryNames = categories.map(c => c.name).join(', ');
        return `Chúng tôi có các danh mục: ${categoryNames}. Bạn muốn xem tài liệu thuộc danh mục nào?`;
    }

    if (message.includes('giỏ hàng') || message.includes('cart')) {
        return 'Bạn muốn kiểm tra giỏ hàng hay thêm sản phẩm vào giỏ? Hãy cho tôi biết thêm chi tiết!';
    }

    if (message.includes('giúp') || message.includes('hỗ trợ') || message.includes('help')) {
        return 'Tôi ở đây để giúp bạn! Bạn cần tư vấn về sản phẩm, danh mục hoặc cách mua hàng?';
    }

    return 'Cảm ơn câu hỏi của bạn! Tôi chưa hiểu rõ lắm, bạn có thể nói chi tiết hơn không? Hoặc bạn có thể chờ nhân viên hỗ trợ thêm.';
}