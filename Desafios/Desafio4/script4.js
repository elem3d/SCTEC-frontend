function trocaCor(){
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");


    function randomizer() {

        const cor1 = "red";
        const cor2 = "blue";
        const cor3 = "yellow";
        const cor4 = "green";
        const cor5 = "purple";
        const cor6 = "orange";
        const cor7 = "pink";
        const cor8 = "brown";
        const cor9 = "gray";
        const cor10 = "black";
        const cor11 = "cyan";
        const cor12 = "magenta";
        const cor13 = "lime";
        const cor14 = "maroon";
        const cor15 = "navy";
        const cor16 = "olive";
        const cor17 = "teal";
        const cor18 = "violet";
        const cor19 = "indigo";
        const cor20 = "gold";

        let random = Math.floor(Math.random() * 20) + 1;
        console.log(random);

        for (let i = 1; i <= 20; i++) {
            if (random === i) {
                return eval("cor" + i);
            }
        }  
    } 

    div1.style.backgroundColor = randomizer();
    console.log(div1.style.backgroundColor);

    div2.style.backgroundColor = randomizer();
    console.log(div2.style.backgroundColor);

    div3.style.backgroundColor = randomizer();
    console.log(div3.style.backgroundColor); 

};

function resetColor() {
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "white";
    div2.style.backgroundColor = "white";
    div3.style.backgroundColor = "white";

};

function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    switch(operador){
       case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break; 
    
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0){
                resultado = "Divisão por zero é inválida";                
            } else {
                resultado = num1 / num2;  
            }
            break;
        default:
            resultado = "Operador inválido";
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
};

function limparCampos(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operador").value = "";
    document.getElementById("resultado").textContent = " ";
};

function saudar(){
    let nome = document.getElementById("nome").value;
    let idioma = document.getElementById("idioma").value;
    let saudacao;

    if (nome.trim() === "") {  
        document.getElementById("saudacao").textContent = "Por favor, insira seu nome.";
        return;
    }

    switch(idioma){
        case "portugues":
            saudacao = "Olá, " + nome + "! Seja bem-vindo(a)!";
            break;
        case "ingles":
            saudacao = "Hello, " + nome + "! Welcome!";
            break;
        case "espanhol":
            saudacao = "¡Hola, " + nome + "! ¡Bienvenido(a)!";
            break;
        case "frances":
            saudacao = "Bonjour, " + nome + "! Bienvenue!";
            break;
        case "alemao":
            saudacao = "Hallo, " + nome + "! Willkommen!";
            break;
        case "italiano":
            saudacao = "Ciao, " + nome + "! Benvenuto(a)!";
            break;
        case "japones":
            saudacao = "こんにちは, " + nome + "! ようこそ!";
            break;
        case "chines":
            saudacao = "你好, " + nome + "! 欢迎!";
            break;
        case "russo":
            saudacao = "Привет, " + nome + "! Добро пожаловать!";
            break;
        case "arabe":
            saudacao = "مرحبا, " + nome + "! أهلا بك!";
            break;
        case "hindi":
            saudacao = "नमस्ते, " + nome + "! स्वागत है!";
            break;
        case "coreano":
            saudacao = "안녕하세요, " + nome + "! 환영합니다!";
            break;
        case "tailandes":
            saudacao = "สวัสดี, " + nome + "! ยินดีต้อนรับ!";
            break;
        default:
            saudacao = "Idioma não selecionado ou inválido.";
    }
    alert(saudacao);
    document.getElementById("saudacao").textContent = saudacao;
};

function limparSaudacao(){
    document.getElementById("nome").value = "";
    document.getElementById("idioma").value = "default";
    document.getElementById("saudacao").textContent = " ";
};