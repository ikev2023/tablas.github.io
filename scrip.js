// JavaScript para crear el carrusel de imágenes
const carousel = document.querySelector(".carousel");
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
