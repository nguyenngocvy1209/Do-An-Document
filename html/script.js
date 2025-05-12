const products = [
    { id: 1, name: "Tài liệu Lập trình C", price: 50000, category: "Lập trình", image: "https://via.placeholder.com/150", discount: 10, description: "Hướng dẫn cơ bản về lập trình C cho người mới bắt đầu.", monthlyDeal: true, reviews: [{ name: "Nguyễn Văn A", rating: 5, comment: "Rất dễ hiểu!" }, { name: "Trần Thị B", rating: 4, comment: "Tốt, nhưng cần thêm ví dụ." }] },
    { id: 2, name: "Báo cáo Thực tập CNTT", price: 75000, category: "Báo cáo", image: "https://via.placeholder.com/150", discount: 0, description: "Mẫu báo cáo thực tập ngành công nghệ thông tin.", monthlyDeal: false, reviews: [] },
    { id: 3, name: "Đồ án Thiết kế Web", price: 100000, category: "Đồ án", image: "https://via.placeholder.com/150", discount: 15, description: "Đồ án thiết kế website bán hàng chuyên nghiệp.", monthlyDeal: true, reviews: [{ name: "Lê Văn C", rating: 5, comment: "Rất chi tiết và hữu ích!" }] },
    { id: 4, name: "Tài liệu Học máy", price: 120000, category: "Khoa học dữ liệu", image: "https://via.placeholder.com/150", discount: 0, description: "Giới thiệu về học máy và ứng dụng thực tiễn.", monthlyDeal: false, reviews: [] },
    { id: 5, name: "Ôn thi THPT Toán", price: 80000, category: "Ôn thi", image: "https://via.placeholder.com/150", discount: 10, description: "Tài liệu ôn thi THPT môn Toán với bài tập chi tiết.", monthlyDeal: true, reviews: [{ name: "Phạm Thị D", rating: 4, comment: "Bài tập đa dạng, nhưng cần thêm lời giải." }] },
    { id: 6, name: "Báo cáo Kinh tế vi mô", price: 60000, category: "Báo cáo", image: "https://via.placeholder.com/150", discount: 5, description: "Báo cáo phân tích kinh tế vi mô cơ bản.", monthlyDeal: false, reviews: [] },
    { id: 7, name: "Đồ án Cơ khí", price: 150000, category: "Đồ án", image: "https://via.placeholder.com/150", discount: 0, description: "Đồ án thiết kế hệ thống cơ khí hiện đại.", monthlyDeal: false, reviews: [] },
    { id: 8, name: "Tài liệu Python Cơ bản", price: 90000, category: "Lập trình", image: "https://via.placeholder.com/150", discount: 20, description: "Học Python từ cơ bản đến nâng cao.", monthlyDeal: true, reviews: [{ name: "Hoàng Văn E", rating: 5, comment: "Tuyệt vời cho người mới!" }] },
    { id: 9, name: "Tài liệu Java Nâng cao", price: 110000, category: "Lập trình", image: "https://via.placeholder.com/150", discount: 10, description: "Kiến thức chuyên sâu về lập trình Java.", monthlyDeal: false, reviews: [] },
    { id: 10, name: "Báo cáo Quản trị Kinh doanh", price: 70000, category: "Báo cáo", image: "https://via.placeholder.com/150", discount: 0, description: "Báo cáo phân tích quản trị kinh doanh chuyên sâu.", monthlyDeal: false, reviews: [] },
    { id: 11, name: "Đồ án Điện tử", price: 130000, category: "Đồ án", image: "https://via.placeholder.com/150", discount: 5, description: "Đồ án thiết kế mạch điện tử cơ bản.", monthlyDeal: false, reviews: [] },
    { id: 12, name: "Ôn thi THPT Văn", price: 85000, category: "Ôn thi", image: "https://via.placeholder.com/150", discount: 15, description: "Tài liệu ôn thi môn Văn với phân tích chi tiết.", monthlyDeal: true, reviews: [] },
    { id: 13, name: "Tài liệu Trí tuệ nhân tạo", price: 140000, category: "Khoa học dữ liệu", image: "https://via.placeholder.com/150", discount: 0, description: "Khám phá trí tuệ nhân tạo và ứng dụng.", monthlyDeal: false, reviews: [] },
    { id: 14, name: "Báo cáo Marketing", price: 65000, category: "Báo cáo", image: "https://via.placeholder.com/150", discount: 10, description: "Báo cáo chiến lược marketing hiệu quả.", monthlyDeal: false, reviews: [] },
    { id: 15, name: "Đồ án Xây dựng", price: 160000, category: "Đồ án", image: "https://via.placeholder.com/150", discount: 0, description: "Đồ án thiết kế công trình xây dựng chi tiết.", monthlyDeal: false, reviews: [] },
    { id: 16, name: "Tài liệu JavaScript", price: 95000, category: "Lập trình", image: "https://via.placeholder.com/150", discount: 15, description: "Học JavaScript để phát triển web động.", monthlyDeal: true, reviews: [] },
    { id: 17, name: "Ôn thi THPT Anh", price: 82000, category: "Ôn thi", image: "https://via.placeholder.com/150", discount: 5, description: "Tài liệu ôn thi môn Anh với bài tập thực hành.", monthlyDeal: false, reviews: [] },
    { id: 18, name: "Tài liệu SQL Cơ bản", price: 70000, category: "Lập trình", image: "https://via.placeholder.com/150", discount: 0, description: "Học SQL để quản lý cơ sở dữ liệu.", monthlyDeal: false, reviews: [] },
    { id: 19, name: "Báo cáo Tài chính", price: 80000, category: "Báo cáo", image: "https://via.placeholder.com/150", discount: 10, description: "Báo cáo phân tích tài chính doanh nghiệp.", monthlyDeal: false, reviews: [] },
    { id: 20, name: "Đồ án Mạng máy tính", price: 125000, category: "Đồ án", image: "https://via.placeholder.com/150", discount: 0, description: "Đồ án thiết kế hệ thống mạng máy tính.", monthlyDeal: false, reviews: [] },
    { id: 21, name: "Tài liệu Xử lý dữ liệu lớn", price: 150000, category: "Khoa học dữ liệu", image: "https://via.placeholder.com/150", discount: 10, description: "Giới thiệu về Big Data và phân tích dữ liệu.", monthlyDeal: false, reviews: [] },
    { id: 22, name: "Ôn thi THPT Lý", price: 78000, category: "Ôn thi", image: "https://via.placeholder.com/150", discount: 5, description: "Tài liệu ôn thi môn Lý với lý thuyết và bài tập.", monthlyDeal: false, reviews: [] },
    { id: 23, name: "Tài liệu PHP", price: 88000, category: "Lập trình", image: "https://via.placeholder.com/150", discount: 0, description: "Học PHP để phát triển web server-side.", monthlyDeal: false, reviews: [] },
    { id: 24, name: "Báo cáo Logistics", price: 72000, category: "Báo cáo", image: "https://via.placeholder.com/150", discount: 15, description: "Báo cáo phân tích chuỗi cung ứng logistics.", monthlyDeal: false, reviews: [] },
    { id: 25, name: "Đồ án Hóa học", price: 135000, category: "Đồ án", image: "https://via.placeholder.com/150", discount: 0, description: "Đồ án nghiên cứu phản ứng hóa học.", monthlyDeal: false, reviews: [] },
    { id: 26, name: "Tài liệu R cho Khoa học dữ liệu", price: 115000, category: "Khoa học dữ liệu", image: "https://via.placeholder.com/150", discount: 10, description: "Học ngôn ngữ R cho phân tích dữ liệu.", monthlyDeal: false, reviews: [] },
    { id: 27, name: "Ôn thi THPT Hóa", price: 79000, category: "Ôn thi", image: "https://via.placeholder.com/150", discount: 0, description: "Tài liệu ôn thi môn Hóa với bài tập thực hành.", monthlyDeal: false, reviews: [] },
    { id: 28, name: "Tài liệu C++ Nâng cao", price: 105000, category: "Lập trình", image: "https://via.placeholder.com/150", discount: 5, description: "Kiến thức nâng cao về lập trình C++.", monthlyDeal: false, reviews: [] },
    { id: 29, name: "Báo cáo Nhân sự", price: 68000, category: "Báo cáo", image: "https://via.placeholder.com/150", discount: 0, description: "Báo cáo quản lý nhân sự hiệu quả.", monthlyDeal: false, reviews: [] },
    { id: 30, name: "Đồ án Sinh học", price: 145000, category: "Đồ án", image: "https://via.placeholder.com/150", discount: 10, description: "Đồ án nghiên cứu sinh học phân tử.", monthlyDeal: false, reviews: [] },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 12;
let currentReviewProductId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayMonthlyDeals();
    displayProducts();
    updateCart();
    setupEventListeners();
    displayPagination();
});

function setupEventListeners() {
    document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
    document.getElementById('registerBtn').addEventListener('click', () => openModal('registerModal'));
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    document.getElementById('reviewForm').addEventListener('submit', handleReview);
    document.getElementById('searchInput').addEventListener('input', searchProducts);

    // Keyboard navigation for modals
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal(modal.id);
        });
    });
}

function displayMonthlyDeals() {
    const dealsContainer = document.getElementById('monthlyDeals');
    dealsContainer.innerHTML = '';
    const dealProducts = products.filter(p => p.monthlyDeal);

    dealProducts.forEach(product => {
        const dealElement = document.createElement('div');
        dealElement.className = 'product';
        dealElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="price-container">
                ${product.discount > 0 ? `<span class="original-price">${product.price.toLocaleString()} VNĐ</span>` : ''}
                <span class="discounted-price">${calculateDiscountedPrice(product).toLocaleString()} VNĐ</span>
            </div>
            ${product.discount > 0 ? `<span class="discount-badge">Giảm ${product.discount}%</span>` : ''}
            <button class="add-to-cart" onclick="addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ hàng">Thêm vào giỏ</button>
        `;
        dealsContainer.appendChild(dealElement);
    });
}

function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    paginatedProducts.forEach(product => {
        const avgRating = product.reviews.length > 0 ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length).toFixed(1) : 0;
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="rating">Đánh giá: ${avgRating > 0 ? `${avgRating} ★` : 'Chưa có đánh giá'}</div>
            <div class="price-container">
                ${product.discount > 0 ? `<span class="original-price">${product.price.toLocaleString()} VNĐ</span>` : ''}
                <span class="discounted-price">${calculateDiscountedPrice(product).toLocaleString()} VNĐ</span>
            </div>
            ${product.discount > 0 ? `<span class="discount-badge">Giảm ${product.discount}%</span>` : ''}
            <button class="add-to-cart" onclick="addToCart(${product.id})" aria-label="Thêm ${product.name} vào giỏ hàng">Thêm vào giỏ</button>
            <button class="view-details" onclick="viewDetails(${product.id})" aria-label="Xem chi tiết ${product.name}">Chi tiết</button>
            <button class="share-product" onclick="shareProduct(${product.id})" aria-label="Chia sẻ ${product.name}">Chia sẻ</button>
            <button class="add-review" onclick="openReviewModal(${product.id})" aria-label="Thêm đánh giá cho ${product.name}">Đánh giá</button>
            <div class="reviews">
                ${product.reviews.map(review => `<div><strong>${review.name}</strong>: ${review.rating} ★ - ${review.comment}</div>`).join('')}
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

function displayPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            displayProducts();
            displayPagination();
        });
        paginationContainer.appendChild(button);
    }
}

function calculateDiscountedPrice(product) {
    return product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    showNotification(`${product.name} đã được thêm vào giỏ hàng!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCartItemQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            cartItem.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const itemTotal = calculateDiscountedPrice(item) * item.quantity;
        total += itemTotal;
        count += item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <input type="number" value="${item.quantity}" min="0" onchange="updateCartItemQuantity(${item.id}, this.value)" aria-label="Số lượng ${item.name}">
            <span>${itemTotal.toLocaleString()} VNĐ</span>
            <button onclick="removeFromCart(${item.id})" aria-label="Xóa ${item.name} khỏi giỏ hàng">Xóa</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartCount.textContent = count;
    cartTotal.textContent = total.toLocaleString();
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    applyFilters();
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    filteredProducts = products.filter(product =>
        category === 'all' || product.category === category
    );
    currentPage = 1;
    applyFilters();
}

function sortProducts() {
    const sortOption = document.getElementById('sortFilter').value;
    filteredProducts.sort((a, b) => {
        if (sortOption === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'price-asc') {
            return calculateDiscountedPrice(a) - calculateDiscountedPrice(b);
        } else if (sortOption === 'price-desc') {
            return calculateDiscountedPrice(b) - calculateDiscountedPrice(a);
        }
        return 0;
    });
    currentPage = 1;
    applyFilters();
}

function showDiscountedOnly() {
    filteredProducts = products.filter(product => product.discount > 0);
    currentPage = 1;
    applyFilters();
}

function resetFilters() {
    filteredProducts = [...products];
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('sortFilter').value = 'name-asc';
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    applyFilters();
}

function applyFilters() {
    displayProducts();
    displayPagination();
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.querySelector('input, select').focus();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function handleLogin(e) {
    e.preventDefault();
    showNotification('Đăng nhập thành công!');
    closeModal('loginModal');
}

function handleRegister(e) {
    e.preventDefault();
    showNotification('Đăng ký thành công!');
    closeModal('registerModal');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }
    openModal('checkoutModal');
}

function handleCheckout(e) {
    e.preventDefault();
    showNotification('Đơn hàng đã được đặt thành công!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    closeModal('checkoutModal');
    toggleCart();
}

function openReviewModal(productId) {
    currentReviewProductId = productId;
    openModal('reviewModal');
}

function handleReview(e) {
    e.preventDefault();
    const name = document.getElementById('reviewName').value;
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value;

    const product = products.find(p => p.id === currentReviewProductId);
    if (product) {
        product.reviews.push({ name, rating, comment });
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        showNotification('Đánh giá đã được gửi!');
        closeModal('reviewModal');
        document.getElementById('reviewForm').reset();
    }
}

function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Chi tiết sản phẩm:\nTên: ${product.name}\nDanh mục: ${product.category}\nGiá: ${calculateDiscountedPrice(product).toLocaleString()} VNĐ\nMô tả: ${product.description}`);
}

function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: product.description,
            url: window.location.href
        }).catch(err => console.error('Lỗi chia sẻ:', err));
    } else {
        showNotification('Chức năng chia sẻ không được hỗ trợ trên trình duyệt này!', 'error');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    if (type === 'error') {
        notification.style.backgroundColor = '#e74c3c';
    }
    document.body.appendChild(notification);
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        notification.remove();
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
};