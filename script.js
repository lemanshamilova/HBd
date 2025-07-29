document.getElementById("surpriseBtn").addEventListener("click", function() {
    const surprise = document.getElementById("surpriseContent");
    surprise.classList.toggle("hidden");
  });

  const messages = [
  "🎈 Bu gün sənin günündür!",
  "💖 Yeni yaşın uğur gətirsin!",
  "✨ Xoşbəxtlik və sevgi dolu illər!",
  "🎂 Hər zaman gülümsə!"
];

let current = 0;
const messageDiv = document.getElementById("messageSlide");

setInterval(() => {
  messageDiv.textContent = messages[current];
  current = (current + 1) % messages.length;
}, 3000);

