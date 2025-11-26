// Mobile navigation toggle
document.getElementById("navToggle").onclick = function () {
  document.getElementById("navMenu").classList.toggle("active");
};

// Smooth Reveal on Scroll (Upgraded)
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .reveal-stagger");

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 120;

    if (isVisible) {
      el.classList.add("active");
    }
  });
}

// Trigger on scroll and load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeToggle) themeToggle.textContent = "☀️";
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.animate([{ opacity: 0.6 }, { opacity: 1 }], { duration: 300 });
  });
}
// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  scrollBtn.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)" },
      { transform: "scale(1)" }
    ],
    { duration: 300 }
  );
});
// Page fade transitions
const transition = document.getElementById("pageTransition");

// Fade-in on load
window.addEventListener("load", () => {
  setTimeout(() => {
    transition.classList.remove("active");
  }, 100);
});

// Fade-out on link click
document.querySelectorAll("a").forEach(link => {
  // Skip anchor links (#)
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("active");

    setTimeout(() => {
      window.location.href = href;
    }, 350);
  });
});
/* =========================== */
/* PAGE PRELOADER              */
/* =========================== */

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loader-circle {
  width: 55px;
  height: 55px;
  border: 5px solid #ff7b00;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* HIDE LOADER */
.preloader.hide {
  opacity: 0;
  visibility: hidden;
}

/* DARK MODE LOADER */
body.dark .preloader {
  background: #0b0b0b;
}

body.dark .loader-circle {
  border-color: #ff7b00;
  border-top-color: transparent;
}
