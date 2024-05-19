// 1. 두 수를 각각 입력 받고, 합, 차, 곱을 html에
// h2태그로 3개 각각 나타내기, 폰트색은 하늘색

// const a = prompt("1번째 숫자를 입력하시오.");
// const b = prompt("2번째 숫자를 입력하시오");
// const num1 = Number(a);
// const num2 = Number(b);

// 위에 두개를 합쳐서 ex) const num1 = Number(prompt("1번째 숫자를 입력하시오."))
// 로 줄여서 표현이 가능함

// const h2tag1 = document.createElement("h2");
// const h2tag2 = document.createElement("h2");
// const h2tag3 = document.createElement("h2");
// h2tag1.style.color = "skyblue";
// h2tag2.style.color = "skyblue";
// h2tag3.style.color = "skyblue";
// h2tag1.innerText = `${num1} + ${num2} = ${num1 + num2}`;
// h2tag2.innerText = `${num1} - ${num2} = ${num1 - num2}`;
// h2tag3.innerText = `${num1} * ${num2} = ${num1 * num2}`;

// document.body.appendChild(h2tag1);
// document.body.appendChild(h2tag2);
// document.body.appendChild(h2tag3);

// 2. 밑변과 높이를 각각 입력 받고, 정삼각형의 넓이를
// html에 div태그로 나타내기, 폰트사이즈는 20px,
// 폰트색은 초록색

// const num3 = Number(prompt("밑변을 입력하시오."));
// const num4 = Number(prompt("높이를 입력하시오"));

// const div = document.createElement("div");
// div.style.color = "green";
// div.style.fontSize = "20px";

// div.innerText = `정삼각형의 넓이는 = ${(num3 * num4) / 2}입니다.`;
// document.body.appendChild(div);

// - 0 + 형태의 Counter 만들기

// const button1 = document.createElement("button");
// button1.innerText = "-";
// const button2 = document.createElement("button");
// button2.innerText = "0";
// const button3 = document.createElement("button");
// button3.innerText = "+";

// const h1tag = document.createElement("h1");
// const h1tag2 = document.createElement("h1");
// h1tag.innerText = Number(0);
// h1tag2.innerText = Number(0);

// button1.addEventListener("click", () => {
//   h1tag2.innerText = `${h1tag - Number(1)}`;
// });

// button2.addEventListener("click", () => {
//   h1tag2.innerText = Number(0);
// });

// button3.addEventListener("click", () => {
//   h1tag2.innerText = `${h1tag + Number(1)}`;
// });

// document.body.appendChild(button1);
// document.body.appendChild(button2);
// document.body.appendChild(button3);

// document.body.appendChild(h1tag2);

//정답

const button1 = document.createElement("button");
button1.innerText = `-`;
const num = document.createElement("span");
num.innerText = `0`;
const button3 = document.createElement("button");
button3.innerText = `+`;

button1.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
});

button3.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});

document.body.appendChild(button1);
document.body.appendChild(num);
document.body.appendChild(button3);
