package br.com.denki.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import br.com.denki.model.Projeto;

@Stateless
public class ProjetoDAO {

    @PersistenceContext
    private EntityManager em;

    public void atualizar(Projeto projeto) {
        em.merge(projeto);
    }

    public Projeto buscarPorId(Long id) {
        return em.find(Projeto.class, id);
    }

    public void inserir(Projeto projeto) {
        em.persist(projeto);
    }

    public List<Projeto> buscar() {
        TypedQuery<Projeto> query = em.createQuery("SELECT p FROM Projeto p WHERE p.ativo = TRUE", Projeto.class);
        return query.getResultList();
    }

    public void excluir(Long id) {
        Query query = em.createQuery("UPDATE Projeto SET ativo = FALSE WHERE id = :id");
        query.setParameter("id", id);
        query.executeUpdate();
    }

}
