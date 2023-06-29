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

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getImagem() {
    return this.imagem;
  }

  setImagem(imagem) {
    this.imagem = imagem;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getDescricao() {
    return this.descricao;
  }

  setDescricao(descricao) {
    this.descricao = descricao;
  }
}
