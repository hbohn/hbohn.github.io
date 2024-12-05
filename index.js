let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

// Function to move the carousel to the next image
function moveToNextImage() {
  
  currentIndex = (currentIndex + 1) % totalImages;

  
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to start the automatic image rotation
function startCarousel() {
  setInterval(moveToNextImage, 3000); // Change every 3 seconds
}


startCarousel();