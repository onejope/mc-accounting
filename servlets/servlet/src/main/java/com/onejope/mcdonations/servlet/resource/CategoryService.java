package com.onejope.mcdonations.servlet.resource;

import java.util.List;

import javax.persistence.EntityManager;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.onejope.mcdonations.model.Category;
import com.onejope.mcdonations.model.utils.EntityManagerFactoryUtil;

@Path("/categories")
public class CategoryService {
  @GET
  @Produces("application/json")
  public List<Category> getCategories() {
    EntityManager entityManager = null;
    try {
      entityManager = EntityManagerFactoryUtil.getEntityManager();
      return entityManager.createNamedQuery(Category.FIND_ALL_QUERY,Category.class).getResultList();
    } finally {
      if(entityManager != null) {
        entityManager.close();
      }
    }
  }
  
  @POST
  @Consumes("application/json")
  public void addCategory(Category account) {
    
  }
}
