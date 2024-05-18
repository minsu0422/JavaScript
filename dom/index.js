//js가 html을 만들기 위한 장소

// h1 태그 만들기
//const h1tag = window.document.createElement("h1");
//h1tag.innerText = "자바스크립트 수업중";
//document.body.appendChild(h1tag);

//버튼을 만들고, 안의 내용은 클릭! body에 나타내기
//const button = window.document.createElement("button");
//button.style.backgroundColor = "yellow";
//button.style.padding = "10px";
//button.style.fontSize = "20px";
//button.innerText = "클릭";
//document.body.appendChild(button);

//const a = prompt("점심 뭐먹을거?");
//a에 답변한게 저장됨
//console.log(a);

//prompt로 배경색깔을 물어보고 헥사코드,
// ex) red, #ffefed
// div -> width: 100px, heigth: 100px, background: red

//const color = prompt("배경색은?");

//const box = document.createElement('div')
//div.style.width = "100px";
//div.style.height = "100px";
//div.style.backgroundColor = color;

//document.body.appendChild(box);

// 폰트 색깔 물어보고
// 버튼 안에 들어갈 내용 물어보고
// 버튼을 html에 보여주기

//const a = prompt("폰트 색은?");
//const b = prompt("안에 내용은?");

//const button = document.createElement("button");
//button.style.color = a;
//button.innerText = b;

//document.body.appendChild(button);

// 높이 물어보기 주의)100px
// 넓이 물어보기
// 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div태그로 위의 내용을 고려해서 나타내기

const height = prompt("높이는?");
const width = prompt("넓이는?");
const color = prompt("배경색은?");
const text = prompt("안에 들어갈 내용은?");

const div = document.createElement("div");

div.style.height = height;
div.style.width = width;
div.style.backgroundColor = color;
div.innerText = text;
document.body.appendChild(div);
