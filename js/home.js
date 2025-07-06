// Typewriter effect
let i = 0;

function typeWriter() {
  const typeEl = document.getElementById("typewriter-text");
  if (!typeEl) return;
  if (i < text.length) {
    typeEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

window.onload = () => {
  typeWriter();

  // First visit popup
  if (!sessionStorage.getItem("hasVisited")) {
    alert("Hi there! Welcome to Neuravinc 👋");
    sessionStorage.setItem("hasVisited", "true");
  }

  // Scroll fade-in
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });
  faders.forEach(fader => observer.observe(fader));

  // Click sound for links and buttons
  const clickSound = document.getElementById("clickSound");

  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(err => console.warn("Audio error:", err));
      }
    });
  });

  // Bind Start Learning logic
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startBtn.textContent = "Let's Go!";
      startBtn.style.transform = "scale(1.1)";
      startBtn.style.backgroundColor = "#28a745";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 800);
    });
  }
};