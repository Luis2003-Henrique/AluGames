let contagem = 1;

function alterarStatus(id){
let jogoEscolhido = document.getElementById(`game-${id}`);
let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
let mudarBotao = jogoEscolhido.querySelector('.dashboard__item__button');

if (imagem.classList.contains('dashboard__item__img--rented')){
    let resposta = confirm('Deseja continuar com a devolução do jogo?');
    if (resposta == false){
        return;
    }
    imagem.classList.remove('dashboard__item__img--rented');
    mudarBotao.classList.remove('dashboard__item__button--return');
    mudarBotao.innerHTML = 'Alugar'
    contagem--;
    let escrita = contagem !== 1 ? 'jogos alugados' : 'jogo alugado';
    console.log(`${contagem} ${escrita}`);
} else {
   imagem.classList.add('dashboard__item__img--rented');
   mudarBotao.classList.add('dashboard__item__button--return');
   mudarBotao.innerHTML = 'Devolver';
   contagem++;
   let escrita = contagem !== 1 ? 'jogos alugados' : 'jogo alugado';
   console.log(`${contagem} ${escrita}`);
}

}




//if (mudarBotao.classList.contains('dashboard__item__button--return')){
  //  mudarBotao.classList.remove('dashboard__item__button--return');
  //  mudarBotao.innerHTML = 'Alugar';
//}else{
 //   mudarBotao.classList.add('dashboard__item__button--return');
//    mudarBotao.innerHTML = 'Devolver';
//}


//Para ser mais compacto, coloquei o mudarBotao no mesmo if/else do imagem, assim como mostrado no curso. Entretanto, inicialmente os fiz separados.