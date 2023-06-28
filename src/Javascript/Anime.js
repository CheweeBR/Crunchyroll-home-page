class Anime {
  nome = "a";
  imagem = "a";
  data = "01/02/03";
  descricao = "aaaaaaaaaaaa";

  constructor(nome, imagem, data, descricao) {
    this.nome = nome;
    this.imagem = imagem;
    this.data = data;
    this.descricao = descricao;
  }

  get getNome() {
    return this.nome;
  }

  set setNome(nome) {
    this.nome = nome;
  }

  get getImagem() {
    return this.imagem;
  }

  set setImagem(imagem) {
    this.imagem = imagem;
  }

  get getData() {
    return this.data;
  }

  set setData(data) {
    this.data = data;
  }

  get getDescricao() {
    return this.descricao;
  }

  set setDescricao(descricao) {
    this.descricao = descricao;
  }
}
