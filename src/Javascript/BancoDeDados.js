function Cadastrar() {
  var anime = new Anime();
  var nome = document.getElementById("nome");
  var descricao = document.getElementById("descricao");
  var data = document.getElementById("data");
  var imagem = document.getElementById("imagem");
  anime.setNome = nome.value;
  anime.setDescricao = descricao.value;
  anime.setData = data.value;
  anime.setImagem = imagem.value;
  console.log(
    "Nome: ",
    anime.getNome,
    "Descrição: ",
    anime.getDescricao,
    "Data: ",
    anime.getData,
    "Imagem: ",
    anime.getImagem
  );
}
