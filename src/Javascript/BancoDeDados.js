class BancoDeDados {
  anime = new Anime();
  lista = [];

  Cadastrar() {
    let c = 0;
    let anime = new Anime();
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;
    var data = document.getElementById("data").value;
    var imagem = document.getElementById("imagem").value;
    /*if (this.Consultar(nome) == null) {*/
    anime.setNome(nome);
    anime.setDescricao(descricao);
    anime.setData(data);
    anime.setImagem(imagem);
    this.lista.push(anime);
    console.log(
      "Nome: ",
      anime.getNome(),
      "Descrição: ",
      anime.getDescricao(),
      "Data: ",
      anime.getData(),
      "Imagem: ",
      anime.getImagem()
    );
    /*} else {
      console.log("O anime ja existe no banco de dados.");
    }*/
    console.log(this.lista.length);
    console.log(this.lista[0]);
    console.log(this.lista[1]);
    console.log(this.lista[2]);
    console.log(this.lista[3]);
  }
  Consultar(nome) {
    let c = 0;
    for (c = 0; c < this.lista.length; c++) {
      if (this.lista[c].getNome == nome) {
        console.log(this.lista[c].getNome);
        return null;
      }
      return anime;
    }
  }
}
function Cadastrar() {
  let c = 0;
  const bd = new BancoDeDados();
  bd.Cadastrar();
}
