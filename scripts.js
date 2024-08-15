// Fake Product Data
const products = [
    {
        name: "Echo Bluetooth Speaker",
        description: "Portable and powerful with deep bass.",
        price: 49.99,
        imageUrl: "https://diamu.com.bd/wp-content/uploads/2021/03/Amazon-Echo-Dot-Mini-Smart-Speaker-4.jpg",
        category: "Electronics",
        rating: 4.5
    },
    {
        name: "Ultra HD 4K TV",
        description: "Cinematic experience in your living room.",
        price: 899.99,
        imageUrl: "https://media.e-valy.com/cms/products/images/bec6b891-5a90-490a-b11f-5f02fbf677e1",
        rating: 4.7
    },
    {
        name: "Wireless Headphones",
        description: "Noise-cancelling over-ear headphones.",
        price: 199.99,
        imageUrl: "https://www.borofone.com/wp-content/uploads/2022/04/borofone-bo12-power-bt-headset-headphones.jpg",
        category: "Electronics",
        rating: 4.3
    },
    {
        name: "Smartwatch Pro",
        description: "Track your fitness and stay connected.",
        price: 129.99,
        imageUrl: "https://www.startech.com.bd/image/cache/catalog/smart-watch/kieslect/ks-pro/ks-pro-black-01-500x500.webp",
        category: "Wearables",
        rating: 4.2
    },
    {
        name: "Fitness Tracker",
        description: "Monitor your health with advanced sensors.",
        price: 59.99,
        imageUrl: "https://fitvii.com/cdn/shop/products/FitVII-HM08-SpO2-Wearable-Fitness-Tracker-with-Screen-Protector-MorePro-1681713567.jpg?v=1720606630&width=1445",
        category: "Wearables",
        rating: 4.0
    },
    {
        name: "Leather Wallet",
        description: "Premium quality, minimalist design.",
        price: 39.99,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDK6AQcNrUDcWdnIi4ikNipq9Aa1RxcfM2Dw&s",
        category: "Accessories",
        rating: 4.8
    },
    {
        name: "Aviator Sunglasses",
        description: "Classic style with UV protection.",
        price: 24.99,
        imageUrl: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt62d898bc503ebe5e/64134bf70cf5f95dbcc061b9/5-2-sull.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840",
        category: "Accessories",
        rating: 4.6
    },
    {
        name: "Sports Running Shoes",
        description: "Lightweight and comfortable for daily runs.",
        price: 74.99,
        imageUrl: "https://m.media-amazon.com/images/I/61gbzXuXMLL._AC_UY1000_.jpg",
        category: "Footwear",
        rating: 4.4
    },
    {
        name: "Mountain Bike",
        description: "Durable and lightweight, perfect for trails.",
        price: 599.99,
        imageUrl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dwead92c71/category-landing/mountain/seo-mtb-light.jpg?sw=1280&sfrm=jpg&q=80",
        category: "Sports",
        rating: 4.7
    },
    {
        name: "Digital Camera",
        description: "Capture every moment with stunning clarity.",
        price: 349.99,
        imageUrl: "https://asia.canon/media/image/2018/11/19/b639ce271d2b450c974112ee3a7246ba_PowerShot-SX70-HS-Front-Slant.png",
        category: "Electronics",
        rating: 4.5
    }
];

// Fake Reviews Data
const reviews = [
    {
        author_img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        text: "This is the best online shopping experience I've ever had! The product quality is top-notch.",
        author: "Jane Smith"
    },
    {
        author_img: "https://buffer.com/library/content/images/2022/03/amina.png",
        text: "Fast delivery, excellent customer service. Highly recommend this store!",
        author: "Mark Johnson"
    },
    {
        author_img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        text: "Great deals and amazing products. I always find what I need here.",
        author: "Emily Davis"
    },
    {
        author_img: "https://buffer.com/library/content/images/2022/03/amina.png",
        text: "The website is so easy to navigate, and the prices are unbeatable.",
        author: "Michael Brown"
    },
    {
        author_img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        text: "Love the variety of products. I can always find something unique.",
        author: "Sarah Wilson"
    }
];


// Load Products into Grid
const productGrid = document.querySelector('.product-grid');

function loadProducts(products) {
    productGrid.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div>
               <h3>${product.name}</h3>
               <p>$${product.price.toFixed(2)}</p>
            </div>
            <p>${product.description}</p>
            <p class="rating">Rating: ${product.rating}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;

        // Add hover effect for quick add-to-cart
        productCard.addEventListener('mouseover', () => {
            productCard.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
            const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
            addToCartBtn.style.display = 'block';
        });

        productCard.addEventListener('mouseout', () => {
            productCard.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
            addToCartBtn.style.display = 'none';
        });

        productGrid.appendChild(productCard);
    });
}

// Initial Load
loadProducts(products);

// Filter Products
document.querySelectorAll('.filter-option').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        if (filter === "all") {
            loadProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === filter);
            loadProducts(filteredProducts);
        }
    });
});



// Load Reviews into Slider
const reviewSlider = document.querySelector('.review-slider');

function loadReviews(reviews) {
    reviewSlider.innerHTML = ''; // Clear existing reviews
    reviews.forEach(review => {
        const reviewSlide = document.createElement('div');
        reviewSlide.classList.add('review-slide');

        reviewSlide.innerHTML = `
            <img src="${review.author_img}" alt="${review.author}">
        <div>
        <p>- ${review.author}</p>
        <p>"${review.text}"</p>
            </div>
        `;

        reviewSlider.appendChild(reviewSlide);
    });
}

// Initial Load
loadReviews(reviews);

// Slider Functionality
let currentIndex = 0;

function showReview(index) {
    const reviewWidth = reviewSlider.children[0].offsetWidth;
    reviewSlider.style.transform = `translateX(-${index * reviewWidth}px)`;
}

document.getElementById('next-review').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
});

document.getElementById('prev-review').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
});

// Auto-slide reviews every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
}, 5000);


// Newsletter Signup Form
document.getElementById('newsletter-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        alert('Thank you for signing up!');
        // Clear the form
        document.getElementById('email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    return re.test(email);
}