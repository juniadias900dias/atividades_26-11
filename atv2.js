const btnVermelho = document.querySelector("#vermelho");
const btnVerde = document.querySelector("#verde");

let vermelhoInvertido = false;
let verdeInvertido = false;

function inverterVermelho() {
  if (vermelhoInvertido === false) {
    btnVermelho.style.backgroundColor = "white";
    btnVermelho.style.color = "red";
    vermelhoInvertido = true;
  } else {
    btnVermelho.style.backgroundColor = "red";
    btnVermelho.style.color = "white";
    vermelhoInvertido = false;
  }
}

function inverterVerde() {
  if (verdeInvertido === false) {
    btnVerde.style.backgroundColor = "white";
    btnVerde.style.color = "green";
    verdeInvertido = true;
  } else {
    btnVerde.style.backgroundColor = "green";
    btnVerde.style.color = "white";
    verdeInvertido = false;
  }
}

btnVermelho.addEventListener("click", inverterVermelho);
btnVerde.addEventListener("click", inverterVerde);