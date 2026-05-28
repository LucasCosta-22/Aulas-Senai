const lampada = document.getElementById('lampada');
const botaoInterruptor = document.getElementById('botaoInterruptor');
const mensagem = document.getElementById('mensagem');

// Verificação
function naoLigada(){
    return lampada.src.includes('lampada-desligada');
}

// Liga e desliga a lâmpada/verificação
function alterarLampada() {
    if(!naoLigada) {
        return;
    }
    
    if(lampada.src.includes('lampada-desligada.png')) {
        lampada.src = 'imagens/lampada-ligada.png';
        mensagem.textContent = 'A Lâmpada está ligada';
        botaoInterruptor.textContent = 'Desligar';
    }
    else{
        lampada.src = 'imagens/lampada-desligada.png';
        mensagem.textContent ='A Lâmpada está desligada';
        botaoInterruptor.textContent ='ligar';
    }
}

function quebrarLampada(){
    mensagem.textContent = 'A Lâmpada quebrou';
    botaoInterruptor.disabled = true;
    lampada.src = 'imagens/lampada-quebrada.png';
}

//chamar evento
botaoInterruptor.addEventListener('click',alterarLampada);
lampada.addEventListener('dblclick', quebrarLampada);
