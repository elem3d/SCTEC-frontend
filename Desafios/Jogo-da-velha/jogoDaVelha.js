const celulas = document.querySelectorAll('.celula');

let vezDoX = true;

const combinacoesVencedoras = [
    [0, 1, 2], // Linha de cima
    [3, 4, 5], // Linha do meio
    [6, 7, 8], // Linha de baixo
    [0, 3, 6], // Coluna da esquerda
    [1, 4, 7], // Coluna do meio
    [2, 5, 8], // Coluna da direita
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundária
];

document.getElementById('reiniciar').addEventListener('click', iniciarJogo);

function iniciarJogo(){
    celulas.forEach(celula => {
        celula.textContent = "";
        celula.addEventListener('click', tratarClique, {once: true});
    });
}

function verificarVencedor(){
    for(let i = 0; i< combinacoesVencedoras.length; i++){
        const combinacao = combinacoesVencedoras[i];

        const pos1 = celulas[combinacao[0]].textContent;
        const pos2 = celulas[combinacao[1]].textContent;
        const pos3 = celulas[combinacao[2]].textContent;

        if(pos1 !== "" && pos1 === pos2 && pos1 === pos3){
            alert(`O jogador ${pos1} venceu!`);
            return true;
        }

        return false;
    }
}

function tratarClique(evento){
    verificarVencedor();
    if(verificarVencedor()){
        return;
    }
    else{
        evento.target.textContent= vezDoX ? "X" : "O";
        vezDoX = !vezDoX;
        verificarVencedor();
    }
    
}

iniciarJogo();

