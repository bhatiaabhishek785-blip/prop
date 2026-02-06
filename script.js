const correctPassword = "love"; // change this

const lockscreen = document.getElementById("lockscreen");
const proposalScreen = document.getElementById("proposalScreen");
const error = document.getElementById("error");

document.getElementById("unlockBtn").addEventListener("click", () => {
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    lockscreen.classList.add("hidden");
    proposalScreen.classList.remove("hidden");
  } else {
    error.textContent = "Wrong password 💔 Try again";
  }
});

document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("response").textContent =
    "Yayyyy 💖 I knew it!!!";
});

document.getElementById("noBtn").addEventListener("mouseover", () => {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
});
