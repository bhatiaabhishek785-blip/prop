const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const music = document.getElementById("music");
const PASSWORD = "hername123"; // 🔑 CHANGE THIS

const lockScreen = document.getElementById("lockScreen");
const proposalScreen = document.getElementById("proposalScreen");
const error = document.getElementById("error");
const typingText = document.getElementById("typing");
const music = document.getElementById("music");

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    lockScreen.classList.add("hidden");
    proposalScreen.classList.remove("hidden");
    startTyping();
    music.play();
    startHearts();
  } else {
    error.innerText = "Wrong password 💔 Try again.";
  }
}

/* Typing animation */
const message = "From the moment you walked into my life...";
let index = 0;

function startTyping() {
  const interval = setInterval(() => {
    typingText.innerText += message[index];
    index++;
    if (index === message.length) clearInterval(interval);
  }, 80);
}

/* Buttons */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.onclick = () => {
  response.innerHTML = "You said YES 💖😭<br>I promise to make you smile every day.";
  confetti();
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
};

/* Hearts */
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

/* Confetti */
function confetti() {
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = "3s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

yesBtn.addEventListener("click", () => {
  response.innerHTML = "YAY!!! 💖💖💖 You just made me the happiest person alive!";
  music.play();
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
