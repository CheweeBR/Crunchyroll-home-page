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
    console.log("Anime cadastrado");
    console.log(lista.length);
    for (let c = 0; c < lista.length; c++) {
      console.log(lista[c]);
    }
  }
}
function Cadastrar() {
  const bd = new BancoDeDados();
  bd.Cadastrar();
}
