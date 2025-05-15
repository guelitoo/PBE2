package com.senai.cadastroendereco.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.cadastroendereco.entities.Jogo;
import com.senai.cadastroendereco.repositories.JogoRepository;

@Service
public class JogoService {
	
	@Autowired
	private JogoRepository jogoRepository;
	
	//Criar uma novo jogo
	public Jogo salvar(Jogo jogo) {
		return jogoRepository.save(jogo);
	}
	
	//Buscar um jogo pelo ID
	public Jogo buscarPorId(Long id) {
		Optional<Jogo> jogo = jogoRepository.findById(id);
		return jogo.orElse(null);
	}
	
	//Atualizar os dados de um jogo
	public Jogo atualizar(Long id, Jogo jogoAtualizado) {
		if (jogoRepository.existsById(id)) {
			jogoAtualizado.setId(id);
			return jogoRepository.save(jogoAtualizado);
		}
		return null; //Retorna null se o jogo não for encontrado
	}
	
	//Excluir um jogo
	public boolean excluir(Long id) {
		if (jogoRepository.existsById(id)) {
			return true;
		}
		return false; //Retorna false de o jogo não for encontrado
	}

	public List<Jogo> findAll() {
		return null;
	}
}
