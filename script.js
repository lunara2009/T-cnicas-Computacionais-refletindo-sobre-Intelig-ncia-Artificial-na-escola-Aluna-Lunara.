function verificarResposta(opcao) {
    let resultado = document.getElementById("resultado");

    if (opcao === 2) {
        resultado.textContent = "Correto! A IA deve ser usada com responsabilidade.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Resposta incorreta. Tente novamente!";
        resultado.style.color = "red";
    }
}