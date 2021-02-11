// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

document.querySelector("body").style.background = colors[0];
const h1 = document.createElement("h1");
h1.innerText = "Hello!";
h1.style.color = "white";
document.querySelector("body").append(h1);

const handler = function (e) {
  const width = e.target.window.innerWidth;
  const targetBody = e.target.self.document.body;
  if (width <= 300) {
    targetBody.style.background = colors[1];
  } else if (width <= 500) {
    targetBody.style.background = colors[2];
  } else if (width <= 800) {
    targetBody.style.background = colors[3];
  } else {
    targetBody.style.background = colors[4];
  }
};

window.addEventListener("resize", handler);
