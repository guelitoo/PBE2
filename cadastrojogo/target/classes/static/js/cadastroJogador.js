document.addEventListener("DOMContentLoaded", function() {
	
	const form = document.getElementById("formCadastroJogador");

	form.addEventListener("submit", async function(event) {
		event.preventDefault();

		const nome = document.getElementById("nome").value;
		const idade = document.getElementById("idade").value;

		fetch('http://localhost:8080/api/pessoas', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					nome,
					idade
				})
			})

			.then(response =>{
				if(!response.ok){
					throw new Error('Erro ao cadastrar pessoa');
				}
				return response.json(); 
			})
			.then(data => {
				localStorage.setItem('pessoaId', data.idPessoa); 
				window.location.href = "./pages/jogo.html";
			})
	})
		.catch(error => {
			console.error('Erro no cadastro:', error);
			alert('Falha ao cadastrar pessoa. Tente novamente.');
		});
});