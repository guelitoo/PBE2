package com.senai.cadastroendereco.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.cadastroendereco.entities.Pessoa;
import com.senai.cadastroendereco.repositories.PessoaRepository;

@Service
public class PessoaService {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	//Criar uma nova pessoa
	public Pessoa salvar(Pessoa pessoa) {
		return pessoaRepository.save(pessoa);
	}

	//Buscar todas pessoa por ID
	public Pessoa buscarPorId(Long id) {
		return pessoaRepository.findById(id).orElse(null);
	}
	
	//Listar todas as pessoas
	public List<Pessoa> listarTodos(){
		return pessoaRepository.findAll();
	}
	
	//Deletar uma pessoa pelo ID
	public void deletarPorId(Long id) {
		pessoaRepository.deleteById(id);
	}
	
	//Verificar email e senha
	public Pessoa autenticarPessoa(String nome, String idade) {
		
		//Verificar existência do email
		Pessoa pessoa = pessoaRepository.findByIdade(idade);
		
		if (pessoa != null && pessoa.getIdade().equals(idade)) {
			return pessoa;
		} else {
			return null;
		}
	}

	public Pessoa findByIdade(String email) {
		return null;
	}
	
	
	
	
}