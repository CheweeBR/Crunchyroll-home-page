function checkTitulo() {
  let valorAnime = document.querySelector("#nomeCad");
  let labelAnime = document.querySelector("#Txt_Nome_telaCadastro");
  if (valorAnime.value.length < 1) {
    labelAnime.setAttribute("style", "color: red");
    labelAnime.innerHTML =
      "Nome: o Titulo do Anime deve conter mais que 1 caracter";
    return false;
  }
  return true;
}

function checkDescrição() {
  let valorAnime = document.querySelector("#descricao");
  let labelAnime = document.querySelector("#Txt_descricao_telaCadastro");
  if (valorAnime.value.length < 1) {
    labelAnime.setAttribute("style", "color: red");
    labelAnime.innerHTML = "*O campo descrição não pode estar vazio.";
    return false;
  }
  return true;
}

function checkLink() {
  let valorAnime = document.querySelector("#imagem");
  let labelAnime = document.querySelector("#Txt_link_telaCadastro");
  if (!valorAnime.value.startsWith("http")) {
    labelAnime.style.color = "red";
    labelAnime.innerHTML = "* O link deve obrigatoriamente começar com 'http...'.";
    return false;
  }
  return true;
}

function limparCadastro(){
  let labellink = document.querySelector("#Txt_link_telaCadastro");
  let labeldescricao = document.querySelector("#Txt_descricao_telaCadastro");
  let labelNome = document.querySelector("#Txt_Nome_telaCadastro");
  document.querySelector("#nomeCad").value = "";
  document.querySelector("#descricao").value = "";
  document.querySelector("#data").value = "";
  document.querySelector("#imagem").value = "";
  labelNome.innerHTML = "Nome: ";
  labelNome.style.color = "white";
  labeldescricao.innerHTML="";
  labeldescricao.style.color = "white";
  labellink.style.color = "white";
  labellink.innerHTML ="";
}
