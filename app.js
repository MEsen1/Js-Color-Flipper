const button = document.querySelector("#btn");
let arr = ["#f15025", "red", "rgba(133,122,200)", "green"];
const setColor = function () {
  const randomColor = Math.floor(Math.random() * 4).toString();
  document.querySelector("main").style.backgroundColor = arr[randomColor];
  document.querySelector(".color").innerHTML = arr[randomColor];
};

button.addEventListener("click", setColor);
