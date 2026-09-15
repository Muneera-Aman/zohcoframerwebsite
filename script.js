const navLinks = document.querySelectorAll("#navbar ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => {
            item.classList.remove("clicked");
        });

        this.classList.add("clicked");
    });
});

const cards = document.querySelectorAll(".sustainable-right1");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach((card) => {
    observer.observe(card);
});

const numbers = document.querySelectorAll(".number");
function animateNumber(element) {
    const target = Number(element.dataset.target);
    const suffix = element.dataset.suffix || "";
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const intervalTime = duration / steps;
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }

        element.textContent =
            Math.floor(current).toLocaleString() + suffix;
    }, intervalTime);
}

window.addEventListener("scroll", () => {
    numbers.forEach(number => {
        animateNumber(number);
    });
});

const testimonialWrapper =
    document.querySelector(".testimonial-wrapper");

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

let testimonialIndex = 0;


function updateTestimonials() {
    if (!testimonialCards.length) return;
    const card = testimonialCards[testimonialIndex];
    const moveAmount = card.offsetLeft;
    testimonialWrapper.style.transform =
        `translateX(-${moveAmount}px)`;
}

nextBtn.addEventListener("click", () => {

    testimonialIndex += 2;
    if (testimonialIndex >= testimonialCards.length) {
        testimonialIndex = 0;
    }
    updateTestimonials();
});

previousBtn.addEventListener("click", () => {

    testimonialIndex -= 2;
    if (testimonialIndex < 0) {
        testimonialIndex =
            testimonialCards.length - 0;
    }

    updateTestimonials();
});