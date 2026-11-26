const inputNome = document.querySelector("#nome");
const btnMostrar = document.querySelector("#mostrar");
const btnLimpar = document.querySelector("#limpar");
const resultado = document.querySelector("#resultado");

function mostrarNome() {
  resultado.textContent = "Aluno: " + inputNome.value;
}

function limparCampos() {
  inputNome.value = "";
  resultado.textContent = "";
}

btnMostrar.addEventListener("click", mostrarNome);
btnLimpar.addEventListener("click", limparCampos);