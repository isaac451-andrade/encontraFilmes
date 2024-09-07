function pesquisar(){
  console.log('OLA')

  let section = document.getElementById('caixa-informacoes');
  let campoPesquisa = document.getElementById('campoPesquisa').value

  let elementos = "";
  let titulo = "";
  let sinopse = "";
  for(let dado of dados){
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()

    if(titulo.includes(campoPesquisa.toLowerCase()) || sinopse.includes(campoPesquisa.toLowerCase())) {

      elementos += `<div class="resultado-item">
          <h2>${dado.titulo}</h2>
          <p class="sinopse">${dado.sinopse}</p>
          <a href= ${dado.informacoes} class="link-info" target="_blank">Mais informações</a>
      </div>
    `}
    }

  if (!elementos || campoPesquisa.replace(" ", "") == ""){
    section.innerHTML = "<h2>NADA FOI ENCONTRADO!</h2>";
    return;
  }
    
  section.innerHTML = elementos;
}