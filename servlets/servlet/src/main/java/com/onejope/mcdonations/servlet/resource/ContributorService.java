package com.onejope.mcdonations.servlet.resource;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.onejope.mcdonations.model.Contributor;

@Path("/contributors")
@Stateless
public class ContributorService {
  @PersistenceContext(unitName = "model")
  EntityManager em;

  @GET
  @Produces("application/json")
  public List<Contributor> getContributors() {
    return em.createNamedQuery(Contributor.FIND_ALL_QUERY, Contributor.class).getResultList();
  }

  @POST
  @Consumes("application/json")
  public void addContributor(Contributor contributor) {
    em.persist(contributor);
  }
}
