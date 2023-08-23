const inputs = document.querySelectorAll("input");
const metragem_excedente = document.getElementById("metragem_excedente");
const valor_metro = document.getElementById("valor_metro");
const valor_mesalidade = document.getElementById("valor_mesalidade");
const dias_restantes = document.getElementById("dias_restantes");

const metragem_excedente_resultado = document.getElementById("metragem_excedente_resultado");
const valor_mensalidade_resultado = document.getElementById("valor_mensalidade_resultado");

inputs.forEach((element) => element.addEventListener("input", () => calc()));

function calc() {
    /* calc excedente */
    metragem_excedente_resultado.innerHTML = "R$ " + (metragem_excedente.value * valor_metro.value).toFixed(2);

    /* calc mensalidade proporcional */
    valor_mensalidade_resultado.innerHTML = "R$ " + ((valor_mesalidade.value / 30) * dias_restantes.value).toFixed(2);
}

calc();