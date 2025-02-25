function calculateFactorial() {
  let num = document.getElementById("numberInput").value;
  let resultElement = document.getElementById("result");

  if (num === "" || num < 0) {
    resultElement.innerHTML = "Please enter a valid number.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  resultElement.innerHTML = `${num}! = ${factorial}`;
}

function setDarkMode() {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
}

function setLightMode() {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
}
