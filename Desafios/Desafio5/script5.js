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
    let textoCarro = carro.marca + " " + carro.modelo + " (" + carro.ano + ") - Cor: " + carro.cor;
    div.innerHTML += "<p>" + textoCarro +"</p>"
};



function iniciarLoop() {
    let i = 0;
    do {
       let carro = listaCarros[i]
       const div = document.getElementById("verCarros");
        let textoCarro = carro.marca + " " + carro. modelo + " (" + carro.ano + ") - Cor: " + carro.cor;
        
        if(confirm("Carro nº " + i + " " + textoCarro + "\n\nDeseja ver o próximo carro?") === false) {
            i++
            break
        }
        else{
            
            div.innerHTML += "<p>" + textoCarro +"</p>";
        }

        i++
    }
    while (i < listaCarros.length);
}
