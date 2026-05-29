//Coletando Elementos
const semaforo = [
    'imagens/verde.png',
    'imagens/amarelo.png',
    'imagens/vermelho.png'
];
const mensagem = [
    'Pare! - sinal Vermelho!',
    'Prossiga! - sinal Verde!',
    'Atenção! Reduza - sinal Amarelo!'
];

let indice = 0;


//A ideia foi minha com base em vetores, mas eu tive que pesquisar os comando porque sou noob no java 
function trocarImagem(){
    indice++;
    
    if(indice >=semaforo.length){
        indice = 0;
    }

    document.getElementById('semaforo').src = semaforo[indice];
}
setInterval(trocarImagem, 3000);

function trocarMensagem(){
    indice++

    if(indice >=mensagem.length){
        indice = 0;
    }

    document.getElementById('mensagem').textContent = mensagem[indice];
}
setInterval(trocarMensagem, 3000);