window.onload = function () {
  const canvas = document.getElementById('matrixCanvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // refer to https://github.com/jcubic/cmatrix

  matrix(canvas, {
    chars: ['0', '1'],       // You can customize this for different characters
    font_size: 20,            // Adjust the font size of the characters
    color: '#070707'          // Set the matrix characters' color (green in this case)
  });

  let percentage = 0;
  let period = 0;
  const loadingText = document.getElementById("loading-text");
  const titleText = document.getElementById("period");
  const mainTitles = document.querySelectorAll('h1');
  const description = document.getElementById("description");

  const textToType = "An intense dissatisfaction with the state of the world, and a compulsion to do something about it.";
  let textIndex = 0;

  const typingSpeed = 30;
  const loadingSpeed = 40;  // Faster speed for loading (higher number means faster)

  function updateLoading() {
    if (percentage < 100) {
      percentage += 2; // Increase by 2% per step (this speeds it up)
      loadingText.innerText = percentage + "%";
      setTimeout(updateLoading, loadingSpeed);
    } else {
      setTimeout(() => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = "homepage/home.html";
        }, 500);
      }, 500);
    }
  }

  function updateTitle() {
    const dots = ["", ".", "..", "..."];
    titleText.innerText = dots[period];
    period = (period + 1) % 4;
  }

  function typeText() {
    if (textIndex < textToType.length) {
      description.innerHTML += textToType[textIndex];
      textIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }

  setTimeout(() => {
    mainTitles.forEach(title => title.classList.add("visible"));
    loadingText.classList.add("visible");
  }, 100);

  setTimeout(typeText, 350);
  setTimeout(updateLoading, 200); // Start loading after 200ms
  setInterval(updateTitle, 350);
};

