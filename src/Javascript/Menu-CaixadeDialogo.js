function TelaCadastrar() {
  let mostrar = document.getElementById("telaCadastro");
  let sumir = document.querySelector(".Propaganda");
  if (mostrar.style.display == "none") {
    mostrar.style.display = "flex";
    sumir.style.dysplay = "none";
  } else {
    mostrar.style.display = "none";
    sumir.style.dysplay = "flex";
  }
}
function TelaBuscar() {
  let mostrar = document.getElementById("telaBuscar");
  if (mostrar.style.display == "none") {
    mostrar.style.display = "flex";
  } else {
    mostrar.style.display = "none";
  }
}
function TelaLista() {
  let mostrar = document.getElementById("telaLista");
  if (mostrar.style.display == "none") {
    mostrar.style.display = "flex";
  } else {
    mostrar.style.display = "none";
  }
}
