// 🔑 CHANGE THIS PASSWORD
const PASSWORD = "hername123";

document.addEventListener("DOMContentLoaded", () => {
  const unlockBtn = document.getElementById("unlockBtn");
  const passwordInput = document.getElementById("passwordInput");
  const lockScreen = document.getElementById("lockScreen");
  const proposalScreen = document.getElementById("proposalScreen");
  const error = document.getElementById("error");
  const typingText = document.getElementById("typing");
  const music = document.getElementById("music");

  unlockBtn.addEventListener("click", () => {
    if (passwordInput.value === PASSWORD) {
      lockScreen.classList.add("hidden");
      proposalScreen.classList.remove("hidden");
      startTyping(typingText);
      music.play();
      startHearts();
    } else {
      error.innerText = "Wrong password 💔 Try again.";
    }
  });
});

/* Typing animation */
function startTyping(element) {
  const message = "From the moment you walked into my life...";
  let index = 0;

  const interval = setInterval(() => {
    element.innerText += message[index];
    index++;
    if (index === message.length) clearInterval(interval);
  }, 80);
}

/* Floating hearts */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);
}
