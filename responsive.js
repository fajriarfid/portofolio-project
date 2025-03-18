// Mobile menu toggle functionality
function setupMobileMenu() {
  // Create mobile toggle button if it doesn't exist
  if (!document.querySelector(".mobile-toggle")) {
    const header = document.querySelector("header");
    const mobileToggle = document.createElement("div");
    mobileToggle.className = "mobile-toggle";
    mobileToggle.innerHTML = "<span></span><span></span><span></span>";
    header.appendChild(mobileToggle);

    // Add event listener to toggle
    mobileToggle.addEventListener("click", function () {
      const nav = document.querySelector("nav");
      nav.classList.toggle("mobile-active");

      // Animate toggle button
      const spans = this.querySelectorAll("span");
      spans.forEach((span) => span.classList.toggle("active"));
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        document.querySelector("nav").classList.remove("mobile-active");
        const spans = document.querySelectorAll(".mobile-toggle span");
        spans.forEach((span) => span.classList.remove("active"));
      });
    });
  }
}

// Adjust carousel image height on mobile
function adjustCarouselHeight() {
  const carouselImage = document.getElementById("carouselImage");
  if (carouselImage) {
    if (window.innerWidth <= 768) {
      carouselImage.style.height = "auto";
    } else {
      carouselImage.style.height = "auto";
    }
  }
}

// Call these functions when the page loads
window.addEventListener("load", function () {
  setupMobileMenu();
  adjustCarouselHeight();
});

// Also call when the window is resized
window.addEventListener("resize", adjustCarouselHeight);
