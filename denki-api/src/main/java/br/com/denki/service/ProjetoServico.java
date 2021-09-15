package br.com.denki.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.denki.dao.ProjetoDAO;
import br.com.denki.model.Projeto;

@Stateless
public class ProjetoServico {

    @Inject
    ProjetoDAO dao;

    public void inserir(Projeto projeto) {
        dao.inserir(projeto);
    }

    public List<Projeto> buscar() {
        return dao.buscar();
    }

    public Projeto buscarPorId(Long id) {
        return dao.buscarPorId(id);
    }

}
