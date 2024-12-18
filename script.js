window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

showImage(currentIndex);
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 5000);