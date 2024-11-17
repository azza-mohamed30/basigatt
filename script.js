// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder image loading
// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll("img").forEach(img => {
//         img.src = "assets/images/placeholder.png"; // Replace with your image path when ready
//     });
// });
