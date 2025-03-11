document.addEventListener("DOMContentLoaded", function () {
  function randomString() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()[]{};":<>,.?áâäéêëíîïñśóõöúûüÿΑβϲδεφϑհιյΚλʍƞɸπθʀστυƔѡϰψȥ';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  function randomLetterReveal(element, text, speed = 40, cycles = 10) {
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

  document.querySelectorAll(".box").forEach(button => {
    randomLetterReveal(button, button.textContent.trim(), 60, 60);
  });

  // Button click events for redirection
  document.getElementById("aboutMeBtn").addEventListener("click", function () {
    window.location.href = "aboutme/aboutme.html";
  });

  document.getElementById("contactBtn").addEventListener("click", function () {
    window.location.href = "contact/contact.html";
  });

  document.getElementById("projectsBtn").addEventListener("click", function () {
    window.location.href = "project/project.html";
  });

  // Handle the effect on the "ENTER VALHALLA?" button
  document.getElementById("valhallaBtn").addEventListener("mouseenter", function () {
    randomLetterReveal(document.getElementById("valhallaBtn"), "ENTER VALHALLA?", 50, 60);
  });
});

window.onload = function () {
  const canvas = document.getElementById('matrixCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  matrix(canvas, {
    chars: ['0', '1'],
    font_size: 20,
    color: '#121212'
  });
};

function showPopup() {
  document.getElementById("keyPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("keyPopup").style.display = "none";
}

function checkKey() {
  const inputKey = document.getElementById("flagInput").value;
  const correctKey = "VALH4LLA{is_7h1s_p4rad1s3}";

  if (inputKey === correctKey) {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "home.html";  // Redirect after fade-out duration
    }, 3000); // Matches the fade-out duration
  } else {
    alert("Incorrect key. Please try again.");
  }
}



