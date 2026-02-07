// 🔑 CHANGE THIS PASSWORD
const PASSWORD = "31july2020";

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
      error.textContent = "Wrong password 💔 Try harder ";
    }
  });

  // Playful NO button
  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  });

  document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("response").textContent =
      "Yayyy 💖 I knew it!!!";
  });
});

/* ✅ FIXED TYPING FUNCTION */
function startTyping(element) {
  element.textContent = "";

  const message = "No rush, take your time (5-10 seconds)";
  let index = 0;

  const interval = setInterval(() => {
    element.textContent = message.substring(0, index + 1);
    index++;

    if (index >= message.length) {
      clearInterval(interval);
    }
  }, 80);
}

/* Floating hearts */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);
}



