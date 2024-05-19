// div: w 100 h100 bg알아서
// -, +로 통해서
//div가 유동적으로 넓/높이가 변하도록 하는 프로그램을 만들어라

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "red";

const button1 = document.createElement("button");
button1.innerText = `-`;

button1.addEventListener("click", () => {
  box.style.height = parseInt(box.style.height) - 20 + "px";
  box.style.width = parseInt(box.style.width) - 20 + "px";
});

const button2 = document.createElement("button");

button2.innerText = `+`;

button2.addEventListener("click", () => {
  box.style.height = parseInt(box.style.height) + 20 + "px";
  box.style.width = parseInt(box.style.width) + 20 + "px";
});

document.body.appendChild(box);
document.body.appendChild(button1);
document.body.appendChild(button2);
