// Navigation Bar
function openNav() {
    document.getElementById("hamburgerNav").style.width = "250px";
    document.getElementById("page").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("hamburgerNav").style.width = "0";
    document.getElementById("page").style.marginRight = "0";
}

// Carousel JS
var slideIndex = 1;
showSlides(slideIndex);

// Next and Previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Testimonial Carousel
