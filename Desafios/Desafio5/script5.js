let carro1 = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    cor: "Prata"
};

let carro2 = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2020,
    cor: "Preto"
};

let carro3 = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2015,
    cor: "Vermelho"
};

let carro4 = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2018,
    cor: "Branco"
};

let carro5 = {
    marca: "Renault",
    modelo: "Sandero",
    ano: 2019,
    cor: "Azul"
};

let carro6 = {
    marca: "Hyundai",
    modelo: "HB20",
    ano: 2021,
    cor: "Cinza"
};

let carro7 = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

let carro8 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    cor: "Preto"
};

let carro9 = {
    marca: "Nissan",
    modelo: "Versa",
    ano: 2017,
    cor: "Vermelho"
};

let carro10 = {
    marca: "Jeep",
    modelo: "Renegade",
    ano: 2019,
    cor: "Branco"
};

const listaCarros = [carro1, carro2, carro3, carro4, carro5, carro6, carro7, carro8, carro9, carro10];

function exibirCarro(carro) {
    const div = document.getElementById("verCarros");
    div.innerHTML += "<p>" + carro +"</p>"; // Limpa o conteúdo da div antes de exibir os carros
}


function mostrarProximo(){
    let proximo = true;
    return proximo;
    proximo = false;
}

console.log(mostrarProximo());

do {
        i = 0;
        exibirCarro(listaCarros[i]);
        i++;
        proximo = false
    } while (i<listaCarros.length);
