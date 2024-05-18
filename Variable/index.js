// 변수(variable): 데이터를 기억하는 공간, 닉네임
// cosnt 이름 = 데이터

// 변수 이름 문법
// 1. 예약어[키워드] 안됨 ex) const const
// 2. 특수문자 안됨 단 _예외
// 3. 띄어쓰기 안됨 const mint choco(x), const mintchoco(o)
// 4. 숫자로 시작안됨 ex) const 1a(x) a1(o)
// 5. 변수이름 중복 안됨

// 변수(variable) : 데이터를 기억하는 공간, 닉네임
// 2015 const 변수이름 = 데이터
// 2015 let 이름 = 데이터 [기억 여러번]
// var 이름 = 데이터 [절대절대 쓰지말기]

//const a = 100;
//a = 200; (x)

//let b = 1000;
//b = 200; (o)

// 인간: 연산[뇌] + 기억[뇌]
// 컴퓨터 : 연산[cpu] + 기억[ram]
// kakao.file[하드디스크]
// RAM[kakao/youtube/game/...] <=> cpu

// 변수 이름 국룰
// 1. 의미있는 단어로 사용
// ex) const a(x), const button(x), white_button(o)
// 2. 두단어 합칠때, 낙타표기법, 뱀표기법사용
//  - 낙타: milkCoffee
//    - 뱀: milk_coffee
// 3. 소문자로 시작하기

//const a = 1; // a는 1
//const b = "사이다"; // b는 사이다

//유저에게 내용과 색깔을 두개 각각 입력받고
//html에 h1~h3태그 각각 3개 만들기

// const color = prompt("색은?");
// const text = prompt("내용은?");

// const h1tag = window.document.createElement("h1");
// const h2tag = window.document.createElement("h2");
// const h3tag = window.document.createElement("h3");
// h1tag.style.color = color;
// h2tag.style.color = color;
// h3tag.style.color = color;

// h1tag.innerText = text;
// h2tag.innerText = text;
// h3tag.innerText = text;

// document.body.appendChild(h1tag);
// document.body.appendChild(h2tag);
// document.body.appendChild(h3tag);

//유저에게 만들고 싶은 태그 물어보고
//원하는 안의 내용도 물어보고
//원하는 폰트색깔 만들고,
//html에 만들기

const tag = prompt("원하는태그는?");
const text = prompt("내용은?");
const color = prompt("색은?");

const box = window.document.createElement(tag);
box.innerText = text;
box.style.color = color;

document.body.appendChild(box);
