//Operator[연산자]
//산술 연산자
//할당 연산자[=, =+, -=, *=, 88=, =, %=]
const a = 3;
let b = 4;
b += 5; // 9 [b = b + 5]
b -= 4; // 5 [b = b - 4]

//비교 연산자: boolean으로 귀결됨
//>, <, <=, >=, ==[같다], !=[다르다]
// ===[타입까지 같다], !==
const c = 5 > 3;
const c1 = 5 == 4; //false
const c2 = 5 != 4; // true
const c3 = 5 === "5"; // false

//논리 연산자
//&&[and] || [or] ![not]
// &&: 모두 true 일때 true
// ||: 하나라도 true 일때 true
const d = 5 > 0 && 3 > 0 && 0 == "0"; //true
const d1 = 5 > 0 && 3 > 0 && 0 === "0"; //false
const d2 = 5 > 0 || 3 > 0 || 0 == "0"; //true
const d3 = !true; //false
const d4 = !"happy"; // false
const d5 = !!"happy"; // true [암묵적 탑입 캐스팅]

//삼항 연산자
// 조건 ? A : B
const height = Number(prompt("님 키몇?"));
const isOver140 = height >= 140 ? "탑승 가능" : "불가능 ㅅㄱ";

//es6 이후 연산자
// 1.typeof 타입 반환
console.log(typeof true); //boolean
console.log(typeof e); //stringt

// 2. Nullish??  ??기준으로 앞에 값이 있으면 그 값으로 선택됨
// 하지만 null, undefined이 앞에 있다면 값이 없기에 뒤의 값이 선택됨
const h = prompt("아무거나 입력");
console.log(h ?? "입력하라구");
console.log("아메리카노" ?? "재고없음");
console.log("null" ?? "재고없음");
console.log("undefined" ?? "재고없음");

//단축 평가[Short-circuit]
true || "dog"; // true
false || "dog"; // "dog"
true && "dog"; // "dog"
false && "dog"; // false

//userName을 입력하면 출력 됨 but 입력안할시 Guest라고 뜸
const userName = prompt("이름 입력:") || "Guest";
console.log(`이름: ${userName}`);

const isLoggedIn = true; // 서버에서 로그인 값 가져옴
