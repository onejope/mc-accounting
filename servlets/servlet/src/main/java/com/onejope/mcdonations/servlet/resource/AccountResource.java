package com.onejope.mcdonations.servlet.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/accounts")
public class AccountResource {
  @GET
  public Response getAccounts() {
    return Response.ok("It Worked!!!").build();
  }
}
