const lampada = document.getElementById('lampada');
const botaoLigar = document.getElementById('botaoLigar');
const botaoDesligar = document.getElementById('botaoDesligar');

// Verificação de lâmpada quebrada
function estaQuebrada() {
    return lampada.src.includes('lampada-quebrada');
}

// Liga a lâmpada
function ligar() {
    if (!estaQuebrada()) {
        lampada.src = 'imagens/lampada-ligada.png';
    }
}

// Desliga a lâmpada
function desligar() {
    if (!estaQuebrada()) {
        lampada.src = 'imagens/lampada-desligada.png';
    }    
}

// Quebrar lâmpada
function quebrarLampada(){
    lampada.src = 'imagens/lampada-quebrada.png';
}

// Chamar eventos
botaoLigar.addEventListener('click', ligar);
botaoDesligar.addEventListener('click', desligar);
lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);
lampada.addEventListener('dblclick', quebrarLampada);