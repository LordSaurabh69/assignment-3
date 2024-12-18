// script.js

window.addEventListener("load", function() {
  // Select the loader and main content elements
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Fade out the loader
  loader.style.opacity = "0";
  
  // Wait for the fade-out to complete
  setTimeout(() => {
    loader.style.display = "none"; // Hide loader after fade-out

    // Show the main content with a fade-in effect
    mainContent.classList.remove("hidden");
    mainContent.classList.add("show");
    
    // Allow scrolling after loading
    this.document.body.style.overflow="auto";
  },1000);
});