const MENU_PIZZAS = Object.freeze({
    "1": {
        nome: "Calabresa",
        precos: {
            broto: 25.00,
            media: 38.00,
            grande: 45.90,
        }
    },
    "2": {
        nome: "4 Queijos",
        precos: {
            broto: 30.00,
            media: 40.00,
            grande: 59.90,
        }
    },
    "3": {
        nome: "Frango com Catupiry",
        precos: {
            broto: 32.00,
            media: 45.00,
            grande: 60.00,
        }
    },
    "4": {
        nome: "Brigadeiro",
        precos:{
            broto: 20.00,
            media: 35.00,
            grande: 70.00
        }
    },
}
) 

let numeroPedido = document.getElementById("pedido");
let tamanhoPizza = document.getElementById("tamanho");

const sabor = MENU_PIZZAS[numeroPedido.value];

function calcularPreco(sabor, tamanho){
    const preco = MENU_PIZZAS[sabor]?.precos?.[tamanho];
    return preco ?? null;
};

document.getElementById('enviar').addEventListener('click', () => {
    const sabor = numeroPedido.value;
    const tamanho = tamanhoPizza.value;

    document.getElementById('resultado').innerHTML = "Você pediu uma pizza " + tamanho + " de " + MENU_PIZZAS[sabor].nome + "! O valor dela é de: " + "R$" + calcularPreco(sabor,tamanho)
});