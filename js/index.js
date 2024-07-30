
// JavaScript for Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const skillElements = document.querySelectorAll(".skill");
skillElements.forEach((element) => observer.observe(element));
