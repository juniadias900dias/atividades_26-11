const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

function alterarTitulo() {
  titulo.textContent = "Estou aprendendo DOM!";
}

botao.addEventListener("click", alterarTitulo);