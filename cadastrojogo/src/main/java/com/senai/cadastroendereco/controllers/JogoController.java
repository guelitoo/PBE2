package com.senai.cadastroendereco.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.cadastroendereco.entities.Jogo;
import com.senai.cadastroendereco.service.JogoService;

@RestController
@RequestMapping("/api/jogos")
public class JogoController {
	
	@Autowired
	private JogoService jogoService;
	
	//Criar um jogo
	@PostMapping
	public Jogo salvar(@RequestBody Jogo jogo) {
		return jogoService.salvar(jogo);
	}
	
	//Buscar um jogo pelo ID
    @GetMapping
    public List<Jogo> getAllJogos() {
        return jogoService.findAll();
    }
	
	//Atualizar um jogo
	public Jogo atualizar(@PathVariable Long id, @RequestBody Jogo jogoAtualizado) {
		return jogoService.atualizar(id, jogoAtualizado);
	}
	
	//Deletar um jogo por ID 
	@DeleteMapping("/{id}")
	public boolean excluir(@PathVariable Long id) {
		return jogoService.excluir(id);
	}
	
}
