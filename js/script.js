let slideIndex = 1;
let slideInterval;

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startSlideshow();
});

// Start automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

// Reset the slideshow timer
function resetSlideshow() {
    clearInterval(slideInterval);
    startSlideshow();
}

// Change slide
function changeSlide(n) {
    showSlides(slideIndex += n);
    resetSlideshow();
}

// Show specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetSlideshow();
}

// Display slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Loop back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Loop to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 