// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe volunteer cards
document.querySelectorAll(".volunteer-card").forEach((card) => {
  observer.observe(card);
});

// Observe join-volunteer section
const joinSection = document.querySelector(".join-volunteer");
observer.observe(joinSection);

// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Add hover effect to volunteer cards
  const cards = document.querySelectorAll(".volunteer-card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-10px) rotate(2deg)";
    });

    card.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0) rotate(0)";
    });
  });
});

// Thank volunteers function
function thankVolunteers() {
  const button = document.querySelector(".btn");
  button.innerHTML = "Thanks Sent! ❤️";
  button.style.backgroundColor = "#28a745";

  // Create and animate hearts
  for (let i = 0; i < 10; i++) {
    createHeart();
  }

  setTimeout(() => {
    button.innerHTML = "Send Thanks ❤️";
    button.style.backgroundColor = "#ff6b6b";
  }, 3000);
}

// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        bottom: -20px;
        font-size: 20px;
        animation: floatHeart 3s ease-in forwards;
        opacity: 0;
    `;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Add floating heart animation
const style = document.createElement("style");
style.textContent = `
    @keyframes floatHeart {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
