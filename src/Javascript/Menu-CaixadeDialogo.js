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
    //Quando fechar a tela exibido anteriormente
    var result = document.querySelector(".result");
    result.innerHTML = "";
    var div = document.createElement("div");
    result.appendChild(div);
  }
}

function TelaExibirAnime(id) {
  let lista = JSON.parse(localStorage.getItem("Lista"));
  if (localStorage.Lista) {
    const resultados = lista.filter((anime) => anime.id === id);
    if (resultados.length > 0) {
      resultados.forEach((anime) => {
        document.querySelector(".Propaganda").setAttribute("src", anime.imagem);
        anime.imagem;
        document.querySelector("#tituloAnime").innerHTML = anime.nome;
        document.querySelector("#descriçãoAnime").innerHTML = anime.descricao;
        document.querySelector("#dataAnime").innerHTML = "Data: " + anime.data;
        document.querySelector("#IdAnime").innerHTML = anime.id;
      });
    } else {
      alert("Nenhum resultado encontrado para o id " + anime.id + ".");
    }
  } else {
    console.log("Nenhum anime cadastrado.");
  }
  TelaLista();
  bt_alterarDeletar();
}
//Exibe os botões de alterar e deletar
function bt_alterarDeletar() {
  let mostrar = document.getElementById("bt_alterarDeletar");
  if (mostrar.style.display !== "none") {
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
