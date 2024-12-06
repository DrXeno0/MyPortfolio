document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("japanese-text");


  const content = container.innerHTML;
  container.innerHTML += content;

  let offset = 0;

  function scrollText() {
    offset -= 1;

    if (Math.abs(offset) >= container.scrollHeight / 2) {
      offset = 0;
    }

    container.style.transform = `translateY(${offset}px)`;
    requestAnimationFrame(scrollText);
  }

  scrollText();
});
document.addEventListener("DOMContentLoaded", () => {
  const aboutTextElement = document.getElementById("about-text");
  const textToType =
      "This portfolio is a reflection of who I am: a storyteller, an artist, and a developer inspired by the beauty of Japan and the legacy of classic art. Welcome to my journey.";
  const typingSpeed = 50;
  let charIndex = 0;

  function typeText() {
    if (charIndex < textToType.length) {
      aboutTextElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }

  typeText();
});
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("background-music");

  // Try autoplay
  const playMusic = () => {
    music.play().catch((error) => {
      console.log("Autoplay blocked. Waiting for user interaction.");
    });
  };


  document.body.addEventListener("click", playMusic, { once: true });
  document.body.addEventListener("scroll", playMusic, { once: true });

  playMusic();
});