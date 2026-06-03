function login(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "123"){
        window.location = "principal.html";
    }
    else{
        document.getElementById("invalidacaoLogin") = "Usuário ou senha inválida";
    }
}

let produto = JSON.parse(localStorage.getItem("produtos")) || [];

function salvar(){
    localStorage.setItem("produtos",JSON.stringify(produtos))
}

function adicionarProdutos(){
    
}