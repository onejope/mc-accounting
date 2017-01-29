package com.onejope.mcdonations.servlet.resource;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.onejope.mcdonations.model.Deposit;

@Path("/deposits")
@Stateless
public class DepositService {
  @PersistenceContext(unitName = "model")
  EntityManager em;

  @GET
  @Produces("application/json")
  public List<Deposit> getDepositsByDate(@QueryParam(value = "date") String dateString)
      throws ParseException {
    if (dateString == null || dateString.isEmpty()) {
      return em.createNamedQuery(Deposit.FIND_ALL_QUERY, Deposit.class).getResultList();
    } else {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      Calendar date = new GregorianCalendar();
      date.setTime(df.parse(dateString));
      return em.createNamedQuery(Deposit.FIND_BY_DATE_QUERY, Deposit.class)
          .setParameter(Deposit.DATE_PARAMETER, date).getResultList();
    }
  }

  @POST
  @Consumes("application/json")
  public void addDeposit(Deposit deposit) {
    em.persist(deposit);
  }
}
