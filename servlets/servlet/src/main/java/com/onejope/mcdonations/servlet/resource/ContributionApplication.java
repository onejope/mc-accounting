package com.onejope.mcdonations.servlet.resource;

import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/rest")
public class ContributionApplication extends Application {
  @Override
  public Set<Class<?>> getClasses() {
    return super.getClasses();
  }
}
