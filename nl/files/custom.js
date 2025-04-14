// custom.js

$(document).ready(function () {
  
    // Check if the Bootstrap Carousel plugin is available
    if (typeof $.fn.carousel === "function") {
      
      // Initialize the main slider carousel (customCarousel1)
      $("#customCarousel1").carousel({
        interval: 5000, // Slide every 5000 milliseconds (5 seconds)
        pause: "hover"  // Pause when hovered
      });
      
      // Initialize the testimonial carousel (customCarousel2)
      $("#customCarousel2").carousel({
        interval: 5000,
        pause: "hover"
      });
      
    } 
  });
  