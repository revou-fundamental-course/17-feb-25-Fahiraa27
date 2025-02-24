
// Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let interest = document.getElementById("interest").value;

    if (name === "" || email === "" || interest === "") {
        alert("Harap isi semua data!");
        event.preventDefault();
    }
});

// Scroll to top button
let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Image Slider
let slides = document.querySelectorAll(".slider img");
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik

// Smoth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default link
        const targetId = this.getAttribute('href'); // Ambil nilai href
        const targetElement = document.querySelector(targetId); // Temukan elemen tujuan

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Efek smooth scroll
            });
        }
    });
});