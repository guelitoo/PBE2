document.addEventListener("DOMContentLoaded", () => { // Corrigido para "DOMContentLoaded"
    
    const form = document.getElementById("cadastroClienteForm");
    
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        // Corrigindo os IDs de captura
        const nomeCliente = document.getElementById("nome").value; // Mudado "nome_cliente" para "nome"
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const data_nascimento = document.getElementById("data_nascimento").value; // Corrigido "documente" para "document"

        try {
            const response = await fetch("http://localhost:8080/cadastrocliente", {
                method: "POST", // Corrigido "mothod" para "method"
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nomeCliente,
                    cpf,
                    email,
                    telefone, 
                    data_nascimento
                }),
            });
                
            if (response.ok) {    
                alert("Cliente cadastrado com sucesso!");
				setTimeout(function() {
				   window.location.href = "endereco.html";
				}, 1000);
            } else {
                alert("Erro ao cadastrar o cliente");
            }
        } catch (error) {
            console.error("Erro ao cadastrar o cliente:", error); // Corrigido "cosole" para "console"
        }
    });
});
