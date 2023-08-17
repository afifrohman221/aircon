const slider = document.querySelector(".slider1");
const slides = document.querySelectorAll(".slide1");
let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik

showSlide(currentIndex); // Menampilkan slide pertama saat halaman dimuat

const slider2 = document.querySelector(".slider2");
const slides2 = document.querySelectorAll(".slide2");
let currentIndex2 = 0;

function showSlide2(index) {
  slider2.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % slides2.length;
  showSlide2(currentIndex2);
}

setInterval(nextSlide2, 5000); // Ganti gambar setiap 3 detik

showSlide2(currentIndex2); // Menampilkan slide pertama saat halaman dimuat
