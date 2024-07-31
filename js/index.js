
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

document.getElementById('read-more-btn').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Read More';
    }
});

const skillElements = document.querySelectorAll(".skill");
skillElements.forEach((element) => observer.observe(element));

