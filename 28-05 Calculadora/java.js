const tela = document.getElementById('tela');

function add(valor){
    tela.value += valor;
}

function calcular(){
    tela.value = eval(tela.value);
}

function limpar(){
    tela.value ="";
}
