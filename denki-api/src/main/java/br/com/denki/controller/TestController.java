package br.com.denki.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("teste")
public class TestController {
    @GET
    @Produces(value = MediaType.TEXT_PLAIN)
    public String listar() {
        return "Denki API Works!";
    }
}