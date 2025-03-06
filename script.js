let percentage = 0;
let period = 0;
const loadingText = document.getElementById("loading-text");
const titleText = document.getElementById("period");
const mainTitles = document.querySelectorAll('h1'); 
const description = document.getElementById("description");

const textToType = "An intense dissatisfaction with the state of the world, and a compulsion to do something about it.";
let textIndex = 0;

const typingSpeed = 30;  
const loadingSpeed = 50; 

function updateLoading() {
  if (percentage < 100) {
    percentage += 1;
    loadingText.innerText = percentage + "%";
    setTimeout(updateLoading, loadingSpeed);
  } else {
    setTimeout(() => {
      window.location.href = "home.html"; 
    }, 500);
  }
}

function updateTitle() {
  const dots = [".", "..", "..."];
  titleText.innerText = dots[period];
  period = (period + 1) % 3;
}

function typeText() {
  if (textIndex < textToType.length) {
    description.innerHTML += textToType[textIndex];
    textIndex++;
    setTimeout(typeText, typingSpeed);
  }
}

mainTitles.forEach(title => title.classList.add("visible"));
loadingText.classList.add("visible");

setTimeout(typeText, 500);  
setTimeout(updateLoading, 1500);  
setInterval(updateTitle, 350);
