//Event

//click 경우

// const button = document.createElement("button");
// button.innerText = "버튼";

// button.addEventListener("click", () => {
//   alert("ㄹㅇㅋㅋ");
// });

// document.body.appendChild(button);

// mouseover경우

// const button = document.createElement("button");
// button.innerText = "버튼";

// button.addEventListener("mouseover", () => {
//   console.log("마우스 올라감");
// });

// document.body.appendChild(button);

// div태그 - width:100px, height:100px, background: red
//         - 클릭을 하면, background: blue

// const div = window.document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "red";

// div.addEventListener("click", () => {
//   div.style.backgroundColor = "blue";
// });

// document.body.appendChild(div);

// const div = window.document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "red";

// div.addEventListener("mouseover", () => {
//   div.style.backgroundColor = "pink";
// });

// document.body.appendChild(div);

// button 태그 만들고, 글은 '파란상자'
// event 클릭을 하면, html div w:100, h:100, bg:blue 생김

// const box = window.document.createElement("button");
// box.innerText = "파란상자";
// document.body.appendChild(box);

// box.addEventListener("click", () => {
//   const div = window.document.createElement("div");
//   div.style.backgroundColor = "blue";
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.marginTop = "10px";
//   document.body.appendChild(div);
// });

// 버튼을 3가지 만들고, 각각 이름은 사이트 색깔 이름 넣기
// div: 100px 100px bg: black
// 각각 클릭을 하면, 위의 div태그가 bg가 클릭한 이름의 색깔로 변경하기

// const box1 = window.document.createElement("button");
// box1.innerText = "CREAMY PEACH";
// const box2 = window.document.createElement("button");
// box2.innerText = "ROSY HIGHTLIGHT";
// const box3 = window.document.createElement("button");
// box3.innerText = "SOFT BLUE";

// const div = window.document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";

// box3.addEventListener("click", () => {
//   div.style.backgroundColor = "#778beb";
// });

// box1.addEventListener("click", () => {
//   div.style.backgroundColor = "#f3a683";
// });

// box2.addEventListener("click", () => {
//   div.style.backgroundColor = "#f7d794";
// });

// document.body.appendChild(box1);
// document.body.appendChild(box2);
// document.body.appendChild(box3);
// document.body.appendChild(div);

// div => w:100 h:100 border: 1px solid black bg: white
// button => 내용: 색깔 추가,
// button's event=> prompt로 물어봄 색깔 헥사코드 입력

// button[#123123]을 가진 색깔이 나타남 div의 bg가 변경됨

const addcolor = window.document.createElement("button");
addcolor.innerText = "색깔 추가";

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "white";
div.style.border = "1px solid black";

addcolor.addEventListener("click", () => {
  const colorcode = prompt("색 헥사코드 입력하시오");
  const colorbutton = window.document.createElement("button");
  colorbutton.innerText = colorcode;
  document.body.appendChild(colorbutton);
  colorbutton.addEventListener("click", () => {
    div.style.backgroundColor = colorcode;
  });
});

document.body.appendChild(addcolor);
document.body.appendChild(div);
