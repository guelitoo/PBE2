document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formCadastroJogo");

    const idPessoa = localStorage.getItem('pessoaId');

    if (!idPessoa) {
        alert("Pessoa não encontrada. Cadastre primeiro");
        window.location.href = "cadastroPessoa.html";
        return; // Evitar execução do restante do código se não houver idPessoa
    }

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const ano = document.getElementById('ano').value;
        const pessoa = { idPessoa };

        try {
            const response = await fetch('http://localhost:8080/api/jogos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    ano,
                    pessoa
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar o jogo');
            }

            const data = await response.json();
            // Aqui você pode limpar o localStorage após o cadastro
            localStorage.removeItem('pessoaId'); // Limpa o item 'pessoaId'
            window.location.href = "../index.html";
        } catch (error) {
            console.error('Erro no cadastro:', error);
            alert('Falha ao cadastrar o jogo');
        }
    });
});
