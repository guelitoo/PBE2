document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("cadastroClienteForm");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const nomeCliente = document.getElementById("nomeCliente").value;
		const cpf = document.getElementById("cpf").value;
		const email = document.getElementById("email").value;
		const telefone = document.getElementById("telefone").value;
		const dataNascimento = document.getElementById("dt_nascimento").value;

		try {
			const response = await fetch("http://localhost:8080/cadastrocliente", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					nomeCliente,
					cpf,
					email,
					telefone,
					dataNascimento
				}),
			});

			if (response.ok) { // Verifica se a resposta é bem-sucedida
				setTimeout(() => {
					window.location.href = "endereco.html";
				}, 1000);
			} else {
				alert("Erro ao cadastrar o cliente"); // Exibe alerta de erro se a resposta não for bem-sucedida
			}
		} catch (error) {
			console.error("Erro ao cadastrar o cliente", error);
			alert("Ocorreu um erro ao tentar cadastrar o cliente. Tente novamente.");
		}
	});
});