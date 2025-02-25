
// Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let interest = document.getElementById("interest").value;

    if (name === "" || email === "" || interest === "") {
        alert("Harap isi semua data!");
        event.preventDefault();
    } else {
        alert("Data berhasil diinput! Terima kasih telah menghubungi kami.");
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

// Ganti gambar otomatis setiap 3 detik
let slideInterval = setInterval(nextSlide, 3000);

// Fungsi untuk mengganti slide saat diklik
document.querySelector(".slider").addEventListener("click", function() {
    clearInterval(slideInterval); // Hentikan pergeseran otomatis saat diklik
    nextSlide();
    slideInterval = setInterval(nextSlide, 3000); // Restart interval setelah klik
});

// Call Us function button
document.querySelector(".cta-button").addEventListener("click", function() {
    const phoneNumber = "62881082503798"; // Ganti dengan nomor tujuan
    const message = encodeURIComponent("Halo, saya tertarik dengan layanan Anda!");
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  });
  

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