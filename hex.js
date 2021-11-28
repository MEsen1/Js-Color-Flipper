console.log(Math.floor(Math.random() * 12345678).toString(16));
const button = document.querySelector("#btn");
const setColor = function () {
  const randomColor = Math.floor(Math.random() * 12345678).toString(16);
  document.querySelector("main").style.backgroundColor = "#" + randomColor;
  document.querySelector(".color").innerHTML = "#" + randomColor;
};

button.addEventListener("click", setColor);
