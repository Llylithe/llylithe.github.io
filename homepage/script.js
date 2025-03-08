window.onload = function () {
  const canvas = document.getElementById('matrixCanvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // refer to https://github.com/jcubic/cmatrix

  matrix(canvas, {
    chars: ['0', '1'],       // You can customize this for different characters
    font_size: 20,            // Adjust the font size of the characters
    color: '#111111'          // Set the matrix characters' color (green in this case)
  });
};
