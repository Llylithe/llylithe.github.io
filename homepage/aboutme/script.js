document.addEventListener("DOMContentLoaded", function () {
  function randomString() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()[]{};":<>,.?áâäéêëíîïñśóõöúûüÿΑβϲδεφϑհιյΚλʍƞɸπθʀστυƔѡϰψȥ';

    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  function randomLetterReveal(elementId, text, speed = 40, cycles = 10) {
    const element = document.getElementById(elementId);

    function startEffect() {
      let index = 0;
      let interval = setInterval(() => {
        let currentText = '';

        for (let i = 0; i < text.length; i++) {
          if (i < index) {
            currentText += text.charAt(i); // Correct letter
          } else if (text.charAt(i) === ' ') {
            currentText += ' '; // Keep spaces
          } else {
            let cycleCount = Math.max(1, cycles - Math.abs(i - index));
            let randomChars = '';
            for (let j = 0; j < cycleCount; j++) {
              randomChars += randomString();
            }
            currentText += randomChars.slice(-1); // Pick last random char
          }
        }

        element.textContent = currentText;

        if (index < text.length) {
          index++;
        } else {
          clearInterval(interval);
          element.textContent = text; // Ensure it ends correctly
        }
      }, speed);
    }

    startEffect(); // Run on page load
    element.addEventListener('mouseenter', startEffect); // Run on hover
  }

  randomLetterReveal('about-me', 'ABOUTME {', 50, 60);
});









