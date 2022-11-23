const box = document.querySelectorAll(".pergunta-info");
console.log(box);

box.forEach((caixa) =>
  caixa.addEventListener("click", () => {
    const dd = caixa.children[1];

    dd.classList.toggle("final");

    caixa.classList.toggle("svg");
  })
);
