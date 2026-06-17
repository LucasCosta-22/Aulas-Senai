let chamados = [];
let contador = 1;

// LOGIN
function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
        document.getElementById("painel").style.display = "block"; 
        document.getElementById("loginBox").style.display = "none";
    } else {
        document.getElementById("mensagem").innerText =
            "Usuário ou senha inválidos!";
    }
}

// SALVAR CHAMADO
function salvar() {
    const nome = document.getElementById("nome").value;
    const setor = document.getElementById("setor").value;
    const prioridade = document.getElementById("prioridade").value;
    const descricao = document.getElementById("descricao").value;

    if (!nome || !setor || !descricao) {
        alert("Preencha todos os campos.");
        return;
    }

    const chamado = {
        id: contador++,
        nome,
        setor,
        prioridade,
        descricao,
        status: "Aberto"
    };

    chamados.push(chamado);

    atualizarTabela();
    atualizarRelatorios();

    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("setor").value = "";
    document.getElementById("descricao").value = "";
}

// ATUALIZA TABELA
function atualizarTabela() {
    const tabela = document.getElementById("tabelaChamados");

    tabela.innerHTML = "";

    chamados.forEach(chamado => {
        tabela.innerHTML += `
            <tr>
                <td>${chamado.id}</td>
                <td>${chamado.nome}</td>
                <td>${chamado.prioridade}</td>
                <td>${chamado.status}</td>
                <td>
                    ${
                        chamado.status === "Aberto"
                            ? `<button onclick="fecharChamado(${chamado.id})">Fechar</button>`
                            : "-"
                    }
                </td>
            </tr>
        `;
    });
}

// FECHAR CHAMADO
function fecharChamado(id) {
    const chamado = chamados.find(c => c.id === id);

    if (chamado) {
        chamado.status = "Fechado";
    }

    atualizarTabela();
    atualizarRelatorios();
}

// RELATÓRIOS
function atualizarRelatorios() {
    const total = chamados.length;

    const abertos = chamados.filter(
        chamado => chamado.status === "Aberto"
    ).length;

    document.getElementById("total").innerText =
        `Total de solicitações: ${total}`;

    document.getElementById("abertos").innerText =
        `Solicitações abertas: ${abertos}`;
}