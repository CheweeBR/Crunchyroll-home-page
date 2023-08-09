document.getElementById('telaBuscar').addEventListener('submit', function(evt){
  evt.preventDefault();
})

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

function TelaAlterar() {
  let mostrar = document.getElementById("telaAlterar");
  let sumirBuscar = document.getElementById("telaBuscar");
  if (mostrar.style.display == "none") {
    mostrar.style.display = "flex";
    sumirBuscar.style.display = "none";
    CopiarDadosAlterar();
  } else {
    mostrar.style.display = "none";
  }
}

function CopiarDadosAlterar(){
  var nome = document.getElementById("tituloAnime").innerHTML;
  var descricao = document.getElementById("descriçãoAnime").innerHTML;
  var data = document.getElementById("dataAnime").getAttribute("type");
  var img = document.querySelector(".Propaganda").getAttribute("src");
  document.querySelector("#nomeAlt").value = nome;
  document.querySelector("#descricaoAlt").value = descricao;
  document.querySelector("#dataAlt").value = data;
  document.querySelector("#imagemAlt").value = img;
}

function TelaBuscar() {
  let mostrar = document.getElementById("telaBuscar");
  let mostrarcad = document.getElementById("telaCadastro");
  let mostrarIcones = document.querySelector(".Icones-right");
  let mostrarBtCad = document.getElementById("#Mais_opcoes");
  let mostrarBtPes = document.getElementById("#buscar");
  let mostrarBtConfig = document.getElementById("#Configuração-da-conta");
  let mostrarCab = document.querySelector(".cabeçalho-right");
  let sumirPropaganda = document.querySelector(".Propaganda");
  if (mostrar.style.display == "none") {
    FocusEvent
    mostrar.style.display = "flex";
    sumirPropaganda.style.display = "flex";
    mostrarcad.style.display = "none";
    mostrarIcones.style.visibility = "hidden";
    mostrarCab.style.visibility = "hidden";
    mostrarBtConfig.style.visibility = "hidden";
    mostrarBtPes.style.visibility = "hidden";
    mostrarcad.style.visibility = "hidden";
    mostrarBtCad.style.visibility = "hidden";
  } else {
    mostrar.style.display = "none";
    mostrarIcones.style.visibility = "visible";
    mostrarCab.style.visibility = "visible";
    mostrarBtConfig.style.visibility = "visible";
    mostrarBtPes.style.visibility = "visible";
    mostrarcad.style.visibility = "visible";
    mostrarBtCad.style.visibility = "visible";

  }
}
//Exibe lista com os resultados
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
//Exibe dados dos animes na tela principal
function TelaExibirAnime(id) {
  let lista = JSON.parse(localStorage.getItem("Lista"));
  if (localStorage.Lista) {
    const resultados = lista.filter((anime) => anime.id === id);
    if (resultados.length > 0) {
      resultados.forEach((anime) => {
        document.querySelector(".Propaganda").setAttribute("src", anime.imagem);
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

//Restaura a tela ao padrão
function TelaInicial() {
  document
    .querySelector(".Propaganda")
    .setAttribute("src", "/src/images/Crunchyroll.jpg");
  document.querySelector("#tituloAnime").innerHTML = "";
  document.querySelector("#descriçãoAnime").innerHTML = "";
  document.querySelector("#dataAnime").innerHTML = "";
  document.querySelector("#IdAnime").innerHTML = "";
  bt_alterarDeletar();
}

//Exibe os botões de alterar e deletar
function bt_alterarDeletar() {
  let mostrar = document.querySelector(".bt_alterarDeletar");
  if (mostrar.style.display != "none") {
    mostrar.style.display = "flex";
  } else {
    mostrar.style.display = "none";
  }
}
