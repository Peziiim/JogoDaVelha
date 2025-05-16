const jogadorAtualElemento = document.querySelector(".jogadorAtual");

let selecionado;
let jogador = "X";

let combinacoes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function iniciar() {
    selecionado = [];

    jogadorAtualElemento.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

    document.querySelectorAll(".container button").forEach((botao) => {
    botao.innerHTML = "";
    botao.addEventListener("click", novaJogada);
  });
}

iniciar();

function novaJogada(e) {
    const indice = e.target.getAttribute("id");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", novaJogada);
    selecionado[indice] = jogador;

    setTimeout(() => {
        verificar();
    }, 100);

    jogador = jogador === "X" ? "O" : "X";
    jogadorAtualElemento.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function verificar() {
     let ultimoJogador = jogador === "X" ? "O" : "X";

     const itens = selecionado
                    .map((item, i) => [item, i])
                    .filter((item) => item[0] === ultimoJogador)
                    .map((item) => item[1]);

  for (let pos of combinacoes) {
    if (pos.every((item) => itens.includes(item))) {
      alert("O JOGADOR '" + ultimoJogador + "' GANHOU!");
      iniciar();
      return;
    }
  }

  if (selecionado.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    iniciar();
    return;
  }
}