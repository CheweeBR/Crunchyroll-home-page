function TelaCadastrar() {
  let mostrar = document.getElementById("telaCadastro");
  let sumirPropaganda = document.querySelector(".Propaganda");
  let sumirBuscar = document.getElementById("telaBuscar");
  if (mostrar.style.display == "none") {
    mostrar.style.display = "flex";
    sumirPropaganda.style.display = "none";
    sumirBuscar.style.display = "none";
  } else {
    mostrar.style.display = "none";
    sumirPropaganda.style.display = "flex";
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

/*function borrar() {
  let borrarCabecalho = document.querySelector(".cabeçalho-base");
  let borrarCentroImg = document.querySelector(".centro-img");
  let borrarCentroOptions = document.querySelector(".centro-options");
  let borrarBottom = document.querySelector(".Bottom");
  if (borrarCabecalho.style.filter === "none") {
    borrarCabecalho.style.filter = "blur(5px)";
    //borrarCentroImg.style.filter = "blur(5px)";
    borrarCentroOptions.style.filter = "blur(5px)";
    borrarBottom.style.filter = "blur(5px)";
  } else {
    borrarCabecalho.style.filter = "none";
    borrarCentroImg.style.filter = "none";
    borrarCentroOptions.style.filter = "none";
    borrarBottom.style.filter = "none";
  }
}*/
