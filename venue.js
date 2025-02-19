document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll('.venue-info, .venue-description, .map-container').forEach(el => {
    observer.observe(el);
  });

  // Dynamic header parallax effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = `${scrolled * 0.5}px`;
  });

  // Add interactive map controls
  document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.querySelector('.map-container');
    
    // Add zoom controls
    const zoomControls = document.createElement('div');
    zoomControls.className = 'map-controls';
    zoomControls.innerHTML = `
      <button onclick="window.open('https://goo.gl/maps/XYZ123')" class="map-button">
        <i class="fas fa-external-link-alt"></i> Open in Google Maps
      </button>
    `;
    mapContainer.appendChild(zoomControls);
  });
});
