const pedido = document.getElementById("pedido");

pedido.addEventListener("click", function() {
    alert("Pedido recebido!")

    setTimeout(() => {
        alert("Pedido finalizado!");
    }, 4000);

    alert("Aguardando processamento...")
})