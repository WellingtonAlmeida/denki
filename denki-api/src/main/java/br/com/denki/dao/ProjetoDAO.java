package br.com.denki.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import br.com.denki.model.Projeto;

@Stateless
public class ProjetoDAO {

    @PersistenceContext
    private EntityManager em;

    public void inserir(Projeto projeto) {
        em.persist(projeto);
    }

    public List<Projeto> buscar() {
        return em.createQuery("SELECT p FROM Projeto p", Projeto.class).getResultList();
    }

    public Projeto buscarPorId(Long id) {
        TypedQuery<Projeto> query = em.createQuery("SELECT p FROM Projeto p WHERE p.id = :id", Projeto.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    public void atualizar(Projeto projeto) {
        em.merge(projeto);
    }

}
