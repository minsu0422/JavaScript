//전제조건프롬프트에 아무것도 넣지 않으면, 아무것도 입력 안했어요!

//1. 영어점수 입력받고, 60점 이상 합격 입니다. 아래면 불합격 입니다. 출력

const english = prompt("영어점수를 입력하세요");
const a = english >= 60 ? "합격입니다." : "불합격입니다";
console.log(`${a}`);

// // //2. 정수를 입력 받고, 양수인지 음수인지 알려주기

const number = prompt("정수를 입력하세요");
const b = number >= 0 ? "양수입니다." : "음수입니다";
console.log(`${b}`);

// //3. 두 정수를 엽력 받고, 큰 수를 출력하
기;
const number2 = prompt("정수를 입력하세요");
const number3 = prompt("정수를 입력하세요");
const c = number2 > number3 ? number2 : number3;
console.log(`${c}`);

// //4. 정수를 입력 받고, 절대값으로 바꾸기
const number4 = prompt("정수를 입력하세요");

const d = number4 >= 0 ? number4 : number4 * -1;
console.log(`${d}`);

//5. 정수를 입력 받고, 홀수인지 짝수인지 알려주기
const number5 = prompt("정수를 입력하세요");

const e = number5 % 2 == 0 ? "짝수입니다" : "홀수입니다.";
console.log(`${e}`);
