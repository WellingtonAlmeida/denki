package br.com.denki.controller;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PATCH;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.denki.model.Projeto;
import br.com.denki.service.ProjetoServico;

@Path("projeto")
public class ProjetoController {

    @Inject
    ProjetoServico projetoServico;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response inserirProjeto(Projeto projeto) {
        projetoServico.inserir(projeto);
        return Response.status(Response.Status.CREATED).build();
    }

    @PATCH
    @Consumes(MediaType.APPLICATION_JSON)
    public Response atualizaProjeto(Projeto projeto) {
        projetoServico.atualizar(projeto);
        return Response.ok().build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscar() {
        return Response.ok(projetoServico.buscar()).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response buscarPorId(@PathParam("id") Long id) {
        return Response.ok(projetoServico.buscarPorId(id)).build();
    }

}
