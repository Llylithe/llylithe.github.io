window.onload = function () {
  const canvas = document.getElementById('matrixCanvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // refer to https://github.com/jcubic/cmatrix

  matrix(canvas, {
    chars: ['0', '1'],       // You can customize this for different characters
    font_size: 20,            // Adjust the font size of the characters
    color: '#050505'          // Set the matrix colour
  });
};

function showPopup() {
  document.getElementById("keyPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("keyPopup").style.display = "none";
}

function checkKey() {
  const inputKey = document.getElementById("keyInput").value;
  const correctKey = "mySecretKey";

  if (inputKey === correctKey) {
    window.location.href = "home.html";
  } else {
    alert("Incorrect key. Please try again.");
  }
}

