document.getElementById("surpriseBtn").addEventListener("click", function() {
    const surprise = document.getElementById("surpriseContent");
    surprise.classList.toggle("hidden");
  });

  const messages = [
  "🎈 Today is the day the world became brighter.",
  "💖 -because you were born.",
  "✨ You are not just favorite person,",
  "🎂 you're my heart's safest place.",
  "✨ l'm so lucky to love you.",
  "💖 Here's to many more birthdays by your side",


];

let current = 0;
const messageDiv = document.getElementById("messageSlide");

setInterval(() => {
  messageDiv.textContent = messages[current];
  current = (current + 1) % messages.length;
}, 3000);

