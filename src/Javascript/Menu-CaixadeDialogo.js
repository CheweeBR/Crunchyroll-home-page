// Evitar a reinicialização da página ao realizar o submit da função busca
document.getElementById('telaBuscar').addEventListener('submit', function(evt){
  evt.preventDefault();
})

document.getElementById('telaBuscar').addEventListener('focusout', function(){
  var buscar = document.getElementById("bt-buscar");
  if(buscar == 0) {
    Buscar();
  }
  TelaBuscar();
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
    var limpar = document.getElementById("telaBuscarInput").value;
    limpar.innerHTML = "";
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
  let mostrarCab = document.querySelector(".cabeçalho-right");
  let sumirPropaganda = document.querySelector(".Propaganda");
  if (mostrar.style.display == "none") {
    mostrar.style.display = "flex";
    sumirPropaganda.style.display = "flex";
    mostrarcad.style.display = "none";
    mostrarIcones.style.visibility = "hidden";
    mostrarCab.style.visibility = "hidden";
    let campoInput = document.getElementById("telaBuscarInput");
    campoInput.focus();
  } else {
    mostrar.style.display = "none";
    mostrarIcones.style.visibility = "visible";
    mostrarCab.style.visibility = "visible";
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
        Mostrar_bt_alterarDeletar();
      });
    } else {
      alert("Nenhum resultado encontrado para o id " + anime.id + ".");
    }
  } else {
    console.log("Nenhum anime cadastrado.");
  }
  TelaLista();
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
  Ocultar_bt_alterarDeletar();
}

//Exibe os botões de alterar e deletar
function Mostrar_bt_alterarDeletar() {
  let mostrar = document.querySelector(".bt_alterarDeletar");
  mostrar.style.display = "flex";
}

function Ocultar_bt_alterarDeletar() {  
let mostrar = document.querySelector(".bt_alterarDeletar");
mostrar.style.display = "none";
}
