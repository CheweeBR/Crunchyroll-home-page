class BancoDeDados {
  Cadastrar() {
    if (localStorage.lista) {
      lista = JSON.parse(localStorage.getItem("Lista"));
    }
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;
    var data = document.getElementById("data").value;
    var imagem = document.getElementById("imagem").value;
    var anime = new Anime(nome, imagem, data, descricao);

    if (!Array.isArray(lista)) {
      lista = [];
    }

    lista.push(anime);
    localStorage.Lista = JSON.stringify(lista);
    alert("Anime cadastrado com sucesso!");
    console.log(lista.length);
    for (let c = 0; c < lista.length; c++) {
      console.log(lista[c]);
    }
  }

  Buscar(Nome) {
    if (localStorage.lista) {
      const lista = JSON.parse(localStorage.getItem("Lista"));
      const resultados = lista.filter((anime) =>
        anime.nome.toLowerCase().includes(Nome.toLowerCase())
      );
      if (resultados.length > 0) {
        console.log(`Resultados da busca para "${Nome}":`);
        resultados.forEach((anime) => {
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
}

function Cadastrar() {
  const bd = new BancoDeDados();
  bd.Cadastrar();
}

function Buscar() {
  let Nome = document.getElementById("nome").value;
  const bd = new BancoDeDados();
  bd.Buscar(Nome);
}
