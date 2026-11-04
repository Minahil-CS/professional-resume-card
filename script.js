
const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", () => {
  window.print();
});

// Smooth scrolling for internal navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Add a subtle entrance animation to resume sections
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });


}
