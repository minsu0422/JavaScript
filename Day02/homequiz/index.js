const americanoPlusBtn = document.querySelector(".americano_plus");
const americanoMinusBtn = document.querySelector(".americano_minus");

americanoPlusBtn.addEventListener("click", () => {
  americanoTotal.innerText = Number(americanoTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 2500;
});
