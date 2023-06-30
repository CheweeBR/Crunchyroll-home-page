class Anime {
  id = 0;
  nome = "a";
  imagem = "a";
  data = "01/02/03";
  descricao = "aaaaaaaaaaaa";

  constructor(id, nome, imagem, data, descricao) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.data = data;
    this.descricao = descricao;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
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
