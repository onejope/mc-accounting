package com.onejope.mcdonations.model.utils;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityManagerFactoryUtil {

  private static final EntityManagerFactory emFactory;
  
  static {
    emFactory = Persistence.createEntityManagerFactory("model");
  }
  
  public static EntityManager getEntityManager() {
    return emFactory.createEntityManager();
  }
}
