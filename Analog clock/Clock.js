const min = document.getElementById("min");
const hrs = document.getElementById("hrs");
const sec = document.getElementById("sec");
const body = document.querySelector("body");
const clock = document.getElementById("clock");
setInterval(function () {
  const p = new Date();
  const s = p.getSeconds() * 6;
  const minites = p.getMinutes() * 6;
  const hours = p.getHours() * 30 + Math.round(minites / 12);
  sec.style.transform = "rotate(" + s + "deg)";
  hrs.style.transform = "rotate(" + hours + "deg)";
  min.style.transform = "rotate(" + minites + "deg)";
}, 1000);

const uni = document.getElementById("btn");

uni.addEventListener("click", () => {
  body.style.background = "black";
  clock.style.backgroundColor = "grey";
  clock.style.color = "white";
});

let isFunctionActive = false;

function toggleFunction() {
  const button = document.getElementById("toggleButton");

  if (isFunctionActive) {  
    uni.textContent = "Dark mode";
    body.style.background = "white";
    clock.style.backgroundColor = "whitw";
    clock.style.color = "black";
  } else {
    console.log("Function enabled");
    uni.textContent = "Light Mode";
  }

  isFunctionActive = !isFunctionActive;
}

uni.addEventListener("click", toggleFunction);
