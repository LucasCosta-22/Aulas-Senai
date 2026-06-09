// LOGIN
function login() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "123") {
        window.location = "principal.html";
    } else {
        document.getElementById("invalidacaoLogin").textContent =
            "Usuário ou senha inválida";
    }
}

// ARRAY DE PRODUTOS
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// SALVAR NO LOCALSTORAGE
function salvar() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// ADICIONAR PRODUTO
function adicionarProdutos() {
    let nome = document.getElementById("nomeProduto").value;
    let quantidade = Number(document.getElementById("qntProduto").value);
    let minimo = Number(document.getElementById("estoqueMin").value);

    if (nome === "" || quantidade === "" || minimo === "") {
        alert("Preencha todos os campos!");
        return;
    }

    produtos.push({
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    });

    salvar();
    mostrarProdutos();

    document.getElementById("nomeProduto").value = "";
    document.getElementById("qntProduto").value = "";
    document.getElementById("estoqueMin").value = "";
}

// MOSTRAR PRODUTOS NA TABELA
function mostrarProdutos() {
    let tabela = document.getElementById("listaProdutos");

    if (!tabela) return;

    tabela.innerHTML = "";

    produtos.forEach((produto, indice) => {
        tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.minimo}</td>
                <td>
                    <button onclick="excluirProduto(${indice})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

// EXCLUIR PRODUTO
function excluirProduto(indice) {
    produtos.splice(indice, 1);
    salvar();
    mostrarProdutos();
}

// VERIFICAR ESTOQUE
function verificarEstoque() {
    let lista = document.getElementById("estoqueLista");

    if (!lista) return;

    lista.innerHTML = "";

    produtos.forEach(produto => {
        if (produto.quantidade < produto.minimo) {
            lista.innerHTML += `
                <li>
                    ⚠ O produto <strong>${produto.nome}</strong>
                    está abaixo do estoque mínimo.
                    (${produto.quantidade}/${produto.minimo})
                </li>
            `;
        }
    });

    if (lista.innerHTML === "") {
        lista.innerHTML = "<li>✅ Nenhum produto está abaixo do mínimo.</li>";
    }
}

// EXECUTA AUTOMATICAMENTE
mostrarProdutos();
verificarEstoque();