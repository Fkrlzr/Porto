// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector("i");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  // Theme toggle event listener
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);

    // Add transition effect
    themeToggle.style.transform = "rotate(360deg)";
    setTimeout(() => {
      themeToggle.style.transform = "rotate(0deg)";
    }, 300);
  });

  // Update theme icon based on current theme
  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeIcon.className = "fas fa-sun";
    } else {
      themeIcon.className = "fas fa-moon";
    }
  }

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Animate hamburger bars
    const bars = hamburger.querySelectorAll(".bar");
    if (hamburger.classList.contains("active")) {
      bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
    }
  });

  // Close mobile menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");

      // Reset hamburger bars
      const bars = hamburger.querySelectorAll(".bar");
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "rgba(15, 20, 25, 0.98)"
          : "rgba(255, 255, 255, 0.98)";
    } else {
      navbar.style.background =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "rgba(15, 20, 25, 0.95)"
          : "rgba(255, 255, 255, 0.95)";
    }
  });

  // Active navigation link highlighting
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = "#" + section.getAttribute("id");
      const correspondingNavLink = document.querySelector(
        `.nav-link[href="${sectionId}"]`
      );

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Remove active class from all nav links
        navLinks.forEach((link) => link.classList.remove("active"));
        // Add active class to current nav link
        if (correspondingNavLink) {
          correspondingNavLink.classList.add("active");
        }
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector("textarea").value;

      // Simple validation
      if (!name || !email || !message) {
        showNotification("Mohon isi semua field!", "error");
        return;
      }

      // Simulate form submission
      showNotification("Pesan berhasil dikirim! Terima kasih.", "success");
      this.reset();
    });
  }

  // Notification system
  function showNotification(message, type = "info") {
    // Remove existing notification
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        `;

    // Set background color based on type
    switch (type) {
      case "success":
        notification.style.background = "#10B981";
        break;
      case "error":
        notification.style.background = "#EF4444";
        break;
      default:
        notification.style.background = "#3B82F6";
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".project-card, .skill-item, .contact-method"
  );
  animateElements.forEach((el) => observer.observe(el));

  // Social media links - you can replace these URLs with your actual profiles
  const socialLinks = {
    instagram: "https://instagram.com/fkrlzr",
    github: "https://github.com/Fkrlzr",
    linkedin: "https://www.linkedin.com/in/mochamad-fikri-lazuar/",
    email: "mailto:fkrlzr@gmail.com",
  };

  // Update social media links
  document.querySelectorAll(".social-link").forEach((link) => {
    const icon = link.querySelector("i");
    if (icon.classList.contains("fa-instagram")) {
      link.href = socialLinks.instagram;
    } else if (icon.classList.contains("fa-github")) {
      link.href = socialLinks.github;
    } else if (icon.classList.contains("fa-linkedin")) {
      link.href = socialLinks.linkedin;
    } else if (icon.classList.contains("fa-envelope")) {
      link.href = socialLinks.email;
    }
  });

  // Typing animation for hero text
  const heroTitle = document.querySelector(".hero-content h1");
  if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = "";

    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        if (originalText.charAt(i) === "<") {
          // Handle HTML tags
          const tagEnd = originalText.indexOf(">", i);
          heroTitle.innerHTML += originalText.substring(i, tagEnd + 1);
          i = tagEnd + 1;
        } else {
          heroTitle.innerHTML += originalText.charAt(i);
          i++;
        }
        setTimeout(typeWriter, 50);
      }
    };

    // Start typing animation after a short delay
    setTimeout(typeWriter, 500);
  }

  // Add CSS for active nav link
  const style = document.createElement("style");
  style.textContent = `
        .nav-link.active {
            color: var(--primary-color) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
  document.head.appendChild(style);

  // Smooth reveal animations for sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  console.log("Portfolio website loaded successfully! 🚀");
});
