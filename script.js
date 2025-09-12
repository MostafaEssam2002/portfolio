// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            typeWriter(heroTitle, 'Mustafa Essam El Din', 150);
        }
    }, 1500);
});

// Add parallax effect to floating shapes
window.addEventListener('scroll', function() {
    const shapes = document.querySelectorAll('.floating-shape');
    const scrolled = window.pageYOffset;
    shapes.forEach((shape, index) => {
        const rate = scrolled * (0.5 + index * 0.1);
        shape.style.transform = `translateY(${rate}px)`;
    });
});
const images = [
    "url('images/image 2.jpg')",
    "url('images/image 3.jpg')",
    "url('images/image 4.jpg')",
];

let currentImage = 0;
const heroSection = document.getElementById("home");

function changeBackground() {
    heroSection.style.backgroundImage = images[currentImage];
}

function nextSlide() {
    currentImage = (currentImage + 1) % images.length;
    changeBackground();
}

function prevSlide() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    changeBackground();
}

changeBackground();
let sliderInterval = setInterval(nextSlide, 5000);
document.getElementById("nextBtn").addEventListener("click", function() {
    nextSlide();
    resetInterval();
});

document.getElementById("prevBtn").addEventListener("click", function() {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 10000);
}

// typing effect
const text = "Mustafa Essam El Din";
const typingElement = document.getElementById("typing");
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index <= text.length) {
    typingElement.textContent = text.substring(0, index);
    index++;
    setTimeout(typeEffect, 150);
    } 
    else if (isDeleting && index >= 0) {
    typingElement.textContent = text.substring(0, index);
    index--;
    setTimeout(typeEffect, 100);
    } 
    else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 800);
    }
}

typeEffect();