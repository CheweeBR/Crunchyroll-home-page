const lista = new Array();
class BancoDeDados {
  Cadastrar() {
    let lista = JSON.parse(localStorage.getItem("Lista")) || [];
    var nome = document.getElementById("nomeCad").value;
    var descricao = document.getElementById("descricao").value;
    var data = document.getElementById("data").value;
    var imagem = document.getElementById("imagem").value;
    var id = lista.length;
    var anime = new Anime(id, nome, imagem, data, descricao);
    lista.push(anime);
    localStorage.setItem("Lista", JSON.stringify(lista));
    alert("Anime adicionado com sucesso!");
    TelaCadastrar();
  }

  Buscar(Nome) {
    if (localStorage.Lista) {
      let lista = JSON.parse(localStorage.getItem("Lista"));
      const resultados = lista.filter((anime) =>
        anime.nome.toLowerCase().includes(Nome.toLowerCase())
      );
      if (resultados.length > 0) {
        console.log(`Resultados da busca para "${Nome}":`);
        resultados.forEach((anime) => {
          let apresentar = document.getElementById("telaLista");
          apresentar.style.display = "flex";
          //criação de pequenas telas dentro da div "result" para apresentar os itens pesquisados.
          var result = document.querySelector(".result");
          var div = document.createElement("div");
          //Realizado criação de um botão para armazenar o objeto anime.
          var botao = document.createElement("button");
          botao.innerText = "Consultar";
          div.id = "Bloco_anime";
          div.innerHTML = "Nome:" + anime.nome;
          div.style.display = "flex";
          div.style.width = "25%";
          div.style.height = "25%";
          div.style.maxHeight = "100px";
          div.style.borderRadius = "5px";
          div.style.flexDirection = "column";
          div.style.border = "1px solid white";
          div.style.marginTop = "1%";
          div.style.marginLeft = "1%";
          div.appendChild(botao);
          result.appendChild(div);
          botao.addEventListener("click", function () {
            TelaExibirAnime(anime.id);
          });
        });
      } else {
        alert(`Nenhum resultado encontrado para "${Nome}".`);
      }
    } else {
      alert("Nenhum anime cadastrado.");
    }
  }

  Deletar(id) {
    if (localStorage.getItem("Lista")) {
      let c;
      let lista = JSON.parse(localStorage.getItem("Lista")) || [];
      const resultados = lista.filter((anime) => anime.id == id);
      if (resultados.length > 0) {
        lista.splice(id, 1);
        for (c = 0; c < lista.length; c++) {
          lista[c].id = c;
        }
        localStorage.setItem("Lista", JSON.stringify(lista));
        alert("Anime deletado com sucesso");
      }
      TelaInicial();
      bt_alterarDeletar();
      TelaBuscar();
    }
  }

  Alterar(id) {
    let lista = JSON.parse(localStorage.getItem("Lista"));
    const resultados = lista.filter((anime) => anime.id == id);
    if (resultados.length > 0) {
      lista[id].nome = document.getElementById("nomeAlt").value;
      lista[id].descricao = document.getElementById("descricaoAlt").value;
      lista[id].data = document.getElementById("dataAlt").value;
      lista[id].imagem = document.getElementById("imagemAlt").value;
      localStorage.setItem("Lista", JSON.stringify(lista));
      alert("Anime alterado com sucesso!");
      TelaInicial();
    } else {
      alert(`Nenhum anime encontrado com o ID "${id}".`);
    }
    TelaAlterar();
  }
}

function Cadastrar() {
  const bd = new BancoDeDados();
  if (checkTitulo() && checkDescrição() && checkLink()) {
    bd.Cadastrar();
  }
}

function Buscar() {
  let Nome = document.getElementById("telaBuscarInput").value;
  const bd = new BancoDeDados();
  bd.Buscar(Nome);
}

function Deletar() {
  let id = document.querySelector("#IdAnime").innerHTML;
  const bd = new BancoDeDados();
  bd.Deletar(id);
}

function Alterar() {
  let id = document.querySelector("#IdAnime").innerHTML;
  CopiarDadosAlterar();
  const bd = new BancoDeDados();
  bd.Alterar(id);
}
