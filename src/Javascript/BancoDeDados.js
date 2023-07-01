const lista = new Array();
class BancoDeDados {
  Cadastrar() {
    let lista;
    if (localStorage.Lista !== null) {
      lista = JSON.parse(localStorage.getItem("Lista"));
    } else {
      localStorage.setItem("Lista", JSON.stringify(lista));
      lista = JSON.parse(localStorage.getItem("Lista"));
    }
    var nome = document.getElementById("nomeCad").value;
    var descricao = document.getElementById("descricao").value;
    var data = document.getElementById("data").value;
    var imagem = document.getElementById("imagem").value;
    var id = lista.length;
    var anime = new Anime(id, nome, imagem, data, descricao);
    lista.push(anime);
    localStorage.setItem("Lista", JSON.stringify(lista));
    alert("Anime adicionado com sucesso!");
    console.log(lista.length);
    for (let c = 0; c < lista.length; c++) {
      console.log(lista[c]);
    }
    TelaCadastrar();
  }

  Buscar(Nome) {
    let lista = JSON.parse(localStorage.getItem("Lista"));
    if (localStorage.Lista) {
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
          botao.innerText = "Clique Aqui";
          div.id = "Bloco_anime";
          div.innerHTML = "Nome:" + anime.nome;
          div.style.display = "flex";
          div.style.width = "20%";
          div.style.height = "20%";
          div.style.maxHeight = "100px";
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
        console.log(`Nenhum resultado encontrado para "${Nome}".`);
      }
    } else {
      console.log("Nenhum anime cadastrado.");
    }
  }

  Deletar(id) {
    if (localStorage.getItem("Lista")) {
      let lista = JSON.parse(localStorage.getItem("Lista"));
      const resultados = lista.filter((anime) => anime.id === id);
      if (resultados.length < 0) {
        localStorage.setItem("Lista", JSON.stringify(lista));
        alert("Anime deletado com sucesso");
      } else {
        alert(`Nenhum anime encontrado com o ID "${id}".`);
      }
    } else {
      alert("Nenhum anime cadastrado.");
    }
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
  console.log("valor pego do id: " + id);
  const bd = new BancoDeDados();
  bd.Deletar(id);
}
