let jogos = [
    "Minecraft",
    "Fortnite",
    "Valorant"
];

function renderizarLista() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for(let i = 0; i < jogos.length; i++) {

        lista.innerHTML += `
            <li>
                ${jogos[i]}
                <button onclick="editarItem(${i})">
                    Editar
                </button>

                <button onclick="removerItem(${i})">
                    Remover
                </button>
            </li>
        `;
    }
}

function fazerLogin() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let erro = document.getElementById("erroLogin");

    if(usuario === "" || senha === "") {
        erro.textContent = "Preencha todos os campos.";
        return;
    }

    if(usuario === "aluno" && senha === "fiap2025") {

        document.getElementById("login").style.display = "none";
        document.getElementById("crud").style.display = "block";

        erro.textContent = "";

    } else {
        erro.textContent = "Usuário ou senha inválidos.";
    }
}

function adicionarFinal() {

    let campo = document.getElementById("novoItem");
    let erro = document.getElementById("erroItem");

    if(campo.value.trim() === "") {
        erro.textContent = "Digite um item válido.";
        return;
    }

    jogos.push(campo.value);

    campo.value = "";
    erro.textContent = "";

    renderizarLista();
}

function adicionarInicio() {

    let campo = document.getElementById("novoItem");
    let erro = document.getElementById("erroItem");

    if(campo.value.trim() === "") {
        erro.textContent = "Digite um item válido.";
        return;
    }

    jogos.unshift(campo.value);

    campo.value = "";
    erro.textContent = "";

    renderizarLista();
}

function editarItem(indice) {

    let novoValor = prompt(
        "Digite o novo valor:",
        jogos[indice]
    );

    if(novoValor === null) {
        return;
    }

    if(novoValor.trim() === "") {
        return;
    }

    jogos[indice] = novoValor;

    renderizarLista();
}

function removerItem(indice) {

    jogos.splice(indice, 1);

    renderizarLista();
}

renderizarLista();