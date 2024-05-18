// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입: 숫자, 문자
// 타입 변환

// -1.숫자 타입
// const a = 7(숫자);
// const b = 3.14(숫자);
// const c = 12903812903(숫자);

// -2.문자 타입
// const d = "아메리카노";
// const e = "바닐라라뗴";
// const f = `민트초콜렛`;

//출력값 다음에 변수 나오게 하고 싶으면 ${변수값}
// const g = `내 최애 음료는: ${e}`
// console.log(g);

//프롬프트를 이용해서,
//1. 당신의 mbti?
//2. 당신의 최애 음식
//3. alert으로 당신의 mbti는~~~ 표기

// const mbti = prompt("당신의 mbti?");
// const food = prompt("당신의 최애 음식은?");

// window.alert(`당신의 mbti는 ${mbti}고 최애 음식은 ${food}군요~ :)`);

// 오늘의 날짜는 무엇인가요?
// 오늘의 일정은 무엇인가요?
// 오늘의 날짜는 {}이고, {}을 하실 예정이시군요!

// const day = prompt("오늘의 날짜는 무엇인가요?");
// const work = prompt("오늘의 일정은 무엇인가요?");

// window.alert(`오늘의 날짜는 ${day}이고, ${work}을 하실 예정이시군요!:)`);

//첫번쨰 수 입력
//두번째 수 입력
// 두 수의 합은 ~~입니다.

// const num1 = prompt("첫번쨰 수 입력");
// const num2 = prompt("두번째 수 입력");

// const numnum1 = Number(num1);
// const numnum2 = Number(num2);
// window.alert(`두 수의 합은 ${numnum1 + numnum2}입니다.:)`);

//1. 몇살이신가요? -> 20
// html에 h1태그로된 2005년생이시군요

const a = prompt("몇살이신가요?");

const age = Number(a);

const h1 = document.createElement("h1");
h1.innerText = `당신은 ${2025 - a}년생이군요.:)`;

document.body.appendChild(h1);

// 2. 정사각형의 한변의 길이 -> 10
// html에 정사각형의 넓이는 100입니다.

const line = prompt("정사각형의 한변의 길이");

const b = Number(line);

const h2 = document.createElement("h1");
h2.innerText = `정사각형의 넓이는 ${b * b}입니다.:)`;

document.body.appendChild(h2);
