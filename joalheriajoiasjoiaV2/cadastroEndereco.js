document.addEventListener("DOMContentLoaded", () => {
	
	const form = document.getElementById("cadastroEndereco");
	
	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		
		const cep = document.getElementById("cep").value;
		const rua = document.getElementById("rua").value;
		const numero = document.getElementById("numero").value;
		const cidade = document.getElementById("cidade").value;
		const estado = document.getElementById("estado").value;
		const complemento = document.getElementById("complemento").value;
		const bairro = document.getElementById("bairro").value;
		
		try {
			const response = await fetch("http://localhost:8080/cadastroendereco", {
				method: "POST", 
				headers: {
					"Content-Type": "application/json"
				},
				body:JSON.stringify({
					cep,
					rua,
					numero,
					cidade,
					estado,
					complemento,
					bairro
				}),
			});
			if (response.ok){
				alert("Endereço cadastrado com sucesso!");
				
			} else {
				alert("Erro ao cadastrar o endereço")
			} 
		} catch (error){
				console.error("Erro ao cadastrar o endereço", error);
			}
			
	});
});