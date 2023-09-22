// Evitar a reinicialização da página ao realizar o submit da função busca


function TelaCadastrar() {
  let mostrar = document.getElementById("telaCadastro");
  let sumirPropaganda = document.querySelector(".Propaganda");
  let sumirBuscar = document.getElementById("telaBuscar");
  if (mostrar.style.display == "none") {
    limparCadastro();
    Exibir_Desfoque_Fundo();
    mostrar.style.display = "flex";
    sumirPropaganda.style.display = "none";
    sumirBuscar.style.display = "none";
  } else {
    Ocultar_Desfoque_Fundo();
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
    Exibir_Desfoque_Fundo();
    CopiarDadosAlterar();
  } else {
    Ocultar_Desfoque_Fundo();
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

// Pop Up de busca
function Ocultar_TelaBuscar() {
  Ocultar_Desfoque_Fundo();
  let mostrar = document.getElementById("telaBuscar");
  let mostrarIcones = document.querySelector(".Icones-right");
  let mostrarCab = document.querySelector(".cabeçalho-right");
  mostrar.style.display = "none";
  mostrarIcones.style.visibility = "visible";
  mostrarCab.style.visibility = "visible";
}

function Exibir_TelaBuscar() {
  Exibir_Desfoque_Fundo();
  let mostrar = document.getElementById("telaBuscar");
  let mostrarcad = document.getElementById("telaCadastro");
  let mostrarIcones = document.querySelector(".Icones-right");
  let mostrarCab = document.querySelector(".cabeçalho-right");
  let sumirPropaganda = document.querySelector(".Propaganda");
  mostrar.style.display = "flex";
  sumirPropaganda.style.display = "flex";
  mostrarcad.style.display = "none";
  mostrarIcones.style.visibility = "hidden";
  mostrarCab.style.visibility = "hidden";
  let campoInput = document.getElementById("telaBuscarInput");
  campoInput.focus();
}

//Exibe lista com os resultados
function Exibir_TelaLista() {
  Exibir_Desfoque_Fundo();
  const bd = new BancoDeDados();
  bd.Buscar("");
  let mostrar = document.getElementById("telaLista");
  mostrar.style.display = "flex";
}

function Ocultar_TelaLista() {
  Ocultar_Desfoque_Fundo();
  let mostrar = document.getElementById("telaLista");
  mostrar.style.display = "none";
  var result = document.querySelector(".result");
  result.innerHTML = "";
  var div = document.createElement("div");
  result.appendChild(div);
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
  Ocultar_TelaLista();
}

//Restaura a tela ao padrão
function TelaInicial() {
  document.querySelector(".Propaganda").setAttribute("src", "/src/images/Crunchyroll.jpg");
  document.querySelector("#tituloAnime").innerHTML = "Crunchyroll";
  document.querySelector("#descriçãoAnime").innerHTML = "";
  document.querySelector("#dataAnime").innerHTML = "Esse sistema tem a funcionalidade de cadastrar e consultar animes.";
  document.querySelector("#IdAnime").innerHTML = "";
  Ocultar_bt_alterarDeletar();
  Ocultar_TelaLista();
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


// Efeito Blur em toda a pagina

function Exibir_Desfoque_Fundo(){
  var cabecalho = document.querySelector(".cabeçalho-base");
  var centro = document.querySelector(".centro-img");
  var descricao = document.querySelector("#Campo_descriçãoAnimes");
  cabecalho.style.filter = "blur(2px)";
  centro.style.filter = "blur(2px)";
  descricao.style.filter = "blur(2px)";
}

function Ocultar_Desfoque_Fundo(){
  var cabecalho = document.querySelector(".cabeçalho-base");
  var centro = document.querySelector(".centro-img");
  var descricao = document.querySelector("#Campo_descriçãoAnimes");
  cabecalho.style.filter = "none";
  centro.style.filter = "none";
  descricao.style.filter = "none";
}

// Evento de enviar o form de busca
document.getElementById('telaBuscar').addEventListener('submit', function(evt){
  evt.preventDefault();
})



document.getElementById('telaBuscar').addEventListener('focusout', function(){
  /*tela = document.getElementById("telaBuscar");
  tela.setAttribute("data-active", true);*/
  /*if(a){
    Buscar();
  }*/
  
  Ocultar_TelaBuscar();
})
