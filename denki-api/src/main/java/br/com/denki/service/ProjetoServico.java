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

    public Projeto inserir(Projeto projeto) {
        dao.inserir(projeto);
        return projeto;
    }

    public List<Projeto> buscar() {
        return dao.buscar();
    }

    public Projeto buscarPorId(Long id) {
        return dao.buscarPorId(id);
    }

    public void atualizar(Projeto projeto) {
        dao.atualizar(projeto);
    }

    public void excluir(Long id) {
        dao.excluir(id);
    }

}
