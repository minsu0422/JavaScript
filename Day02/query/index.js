// const a = document.querySelector(".box");
// // const b = document.getElementsByClassName("box");
// a.addEventListener("click", () => {
//     console.log("주말다감");
// })

// - 0 +
// 0이하로 안떨어지는 카운터 만들기

// const c = document.querySelector(".number");

// const a = document.querySelector(".minus");
// a.addEventListener("click", () => {
//   const c = document.querySelector(".number");
//   c.number = Number(c.innerText) - 1;
//   c.innerText = number = number === -1 ? 0 : number
// });

// const b = document.querySelector(".plus");
// b.addEventListener("click", () => {
//     const c = document.querySelector(".number");
//   c.innerText = Number(c.innerText) + 1;
// });

const baricon = document.querySelector(".bar");
const xicon = document.querySelector(".x");

xicon.style.display = "none";

xicon.addEventListener("click", () => {
  baricon.style.display = "block";
});

baricon.addEventListenerd("click", () => {
  xicon.style.display = "block";
  baricon.style.display = "none";
});
