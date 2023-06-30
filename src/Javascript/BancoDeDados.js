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
    var anime = new Anime(nome, imagem, data, descricao);
    lista.push(anime);
    localStorage.setItem("Lista", JSON.stringify(lista));
    alert("Anime cadastrado com sucesso!");
    console.log(lista.length);
    for (let c = 0; c < lista.length; c++) {
      console.log(lista[c]);
    }
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
          document
            .querySelector(".Propaganda")
            .setAttribute("src", anime.imagem);
          anime.imagem;
          console.log(`Título: ${anime.nome}`);
          console.log(`Descrição: ${anime.descricao}`);
          console.log(`Data: ${anime.data}`);
          console.log(`Imagem: ${anime.imagem}`);
          console.log("---");
        });
      } else {
        console.log(`Nenhum resultado encontrado para "${Nome}".`);
      }
    } else {
      console.log("Nenhum anime cadastrado.");
    }
  }

  Deletar(Nome) {
    if (localStorage.lista) {
      let lista = JSON.parse(localStorage.getItem("Lista"));
      let resultados = lista.filter((anime) =>
        anime.nome.toLowerCase().includes(Nome.toLowerCase())
      );

      if (resultados.length > 0) {
        lista = lista.filter(
          (anime) => !anime.nome.toLowerCase().includes(Nome.toLowerCase())
        );
        localStorage.setItem("Lista", JSON.stringify(lista));
        console.log(`O anime "${Nome}" foi deletado com sucesso.`);
      } else {
        console.log(`Nenhum anime encontrado com o nome "${Nome}".`);
      }
    } else {
      console.log("Nenhum anime cadastrado.");
    }
  }
}

function Cadastrar() {
  const bd = new BancoDeDados();
  bd.Cadastrar();
}

function Buscar() {
  let Nome = document.getElementById("telaBuscarInput").value;
  const bd = new BancoDeDados();
  bd.Buscar(Nome);
}

function Deletar() {
  let Nome = document.getElementById("telaBuscarInput").value;
  const bd = new BancoDeDados();
  bd.Deletar(Nome);
}
