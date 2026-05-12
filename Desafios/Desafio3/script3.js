function calcularDesconto() {
    let valorProduto = parseFloat(document.getElementById("valorProduto").value);

    if(valorProduto <= 0 || isNaN(valorProduto)) {
        alert("Por favor, insira um valor de produto válido.");
        return;
    }

    let desconto = document.getElementById("desconto").value;

    if(desconto <= 0 || desconto > 100 || isNaN(desconto)) {
        alert("Por favor, insira um valor de desconto válido (de 1 a 100).");
        return;
    }

    let valorDesconto = desconto/100 * valorProduto;
    
    let valorFinal = valorProduto - valorDesconto;

    console.log("Valor do Produto: " + valorProduto);
    console.log("Valor do Desconto: " + valorDesconto);
    console.log("Valor Final:" + valorFinal); 

    document.getElementById("resultado").innerHTML = "Valor do Produto: R$ " + valorProduto.toFixed(2) + "<br>Valor do Desconto: R$ " + valorDesconto.toFixed(2) + "<br>Valor Final: R$ " + valorFinal.toFixed(2);

    alert("Valor do Produto: R$ " + valorProduto.toFixed(2) + "\nValor do Desconto: R$ " + valorDesconto.toFixed(2) + "\nValor Final: R$ " + valorFinal.toFixed(2));

    
}