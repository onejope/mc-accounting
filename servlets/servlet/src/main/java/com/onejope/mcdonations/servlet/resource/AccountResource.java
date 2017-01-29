package com.onejope.mcdonations.servlet.resource;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.HeuristicMixedException;
import javax.transaction.HeuristicRollbackException;
import javax.transaction.NotSupportedException;
import javax.transaction.RollbackException;
import javax.transaction.SystemException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.onejope.mcdonations.model.Account;

@Path("/accounts")
@Stateless
public class AccountResource {
  @PersistenceContext(unitName = "model")
  EntityManager em;

  @GET
  @Produces("application/json")
  public List<Account> getAccounts() {
    return em.createNamedQuery(Account.FIND_ALL_QUERY, Account.class).getResultList();
  }

  @POST
  @Consumes("application/json")
  @Produces("application/json")
  public Account addAccount(Account account)
      throws NotSupportedException, SystemException, IllegalStateException, SecurityException,
      HeuristicMixedException, HeuristicRollbackException, RollbackException {
    em.persist(account);
    return account;
  }
}
