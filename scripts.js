// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// First Intersection Observer for section animations
const sectionObserverOptions = {
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, sectionObserverOptions);

// Apply animation to all sections except images
document.querySelectorAll("section").forEach((section) => {
  if (!section.querySelector("img")) {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.5s ease-out";
    sectionObserver.observe(section);
  }
});

// Animate highlight cards on hover
document.querySelectorAll(".highlight-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Second Intersection Observer for fade-in animations
const fadeObserverOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }
  });
}, fadeObserverOptions);

// Observe all teacher cards
document.querySelectorAll(".teacher-card").forEach((card) => {
  fadeObserver.observe(card);
});

// Observe message container
const messageContainer = document.querySelector(".message-container");
if (messageContainer) {
  fadeObserver.observe(messageContainer);
}

// Improved Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById("navbar");
const scrollThreshold = 5; // Prevents oversensitive scrolling

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Only trigger if scroll difference is greater than threshold
  if (Math.abs(currentScroll - lastScroll) > scrollThreshold) {
    if (currentScroll > lastScroll && currentScroll > 50) {
      // Hide navbar only after scrolling down 50px
      navbar.style.transform = "translateY(-100%)";
      // or alternatively: navbar.style.top = "-100px";
    } else {
      navbar.style.transform = "translateY(0)";
      // or alternatively: navbar.style.top = "0";
    }
    lastScroll = currentScroll;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvpForm");
  const formGroups = document.querySelectorAll(".form-group");

  // Add animation to form groups on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  formGroups.forEach((group) => observer.observe(group));

  // Form validation and submission animation
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector(".submit-btn");
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    // Simulate form submission
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
      submitBtn.style.backgroundColor = "#28a745";

      // Reset form after success
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = "Submit RSVP";
        submitBtn.style.backgroundColor = "";
      }, 2000);
    }, 1500);
  });

  // Dynamic form field animations
  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("input-focused");
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("input-focused");
      }
    });
  });

  // Attendance field dependent animations
  const attendanceSelect = document.getElementById("attendance");
  const guestsField = document.getElementById("guests").parentElement;

  attendanceSelect.addEventListener("change", function () {
    if (this.value === "yes") {
      guestsField.style.display = "block";
      guestsField.classList.add("animate__animated", "animate__fadeIn");
    } else {
      guestsField.style.display = "none";
    }
  });

  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// Handle sticky navbar
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Handle the heart animation when clicking "Thank You"
function sendHearts(button) {
    // Prevent multiple clicks
    if (button.classList.contains('clicked')) {
        return;
    }

    button.classList.add('clicked');
    
    // Create and animate hearts
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'floating-heart');
        
        // Random position and animation
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 0.5}s`;
        
        button.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    // Change button text
    const originalText = button.innerHTML;
    button.innerHTML = 'Thank You! ❤️';
    
    // Optional: Reset button after some time
    setTimeout(() => {
        button.classList.remove('clicked');
        button.innerHTML = originalText;
    }, 3000);
}

function sendHeartsToAll() {
    // Number of hearts to create
    const heartCount = 12;
    const button = document.querySelector('.thank-all-btn');
    const buttonRect = button.getBoundingClientRect();

    // Create multiple hearts
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('i');
            heart.className = 'fas fa-heart heart';
            
            // Random position around the button
            const randomX = buttonRect.left + Math.random() * buttonRect.width;
            const randomOffset = (Math.random() - 0.5) * 100; // Spread hearts horizontally
            
            heart.style.left = `${randomX + randomOffset}px`;
            heart.style.top = `${buttonRect.top + buttonRect.height/2}px`;
            
            document.body.appendChild(heart);
            
            // Remove heart element after animation
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 100); // Stagger the heart creation
    }

    // Add button animation
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}
