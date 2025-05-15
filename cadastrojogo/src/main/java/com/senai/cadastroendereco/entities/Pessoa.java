package com.senai.cadastroendereco.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_pessoa")
public class Pessoa {
	
	//Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPessoa;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "idade")
	private String idade;
	
	//Construtores
	Pessoa() {	
	}
	
	public Pessoa (Long idPessoa, String nome, String idade) {
		this.idPessoa = idPessoa;
		this.nome = nome;
		this.idade = idade;
	}

	//Getters e Seterrs
	public Long getIdPessoa() {
		return idPessoa;
	}

	public void setIdPessoa(Long idPessoa) {
		this.idPessoa = idPessoa;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getIdade() {
		return idade;
	}
	
	public void setIdade(String idade) {
		this.idade = idade;
	}
	
}