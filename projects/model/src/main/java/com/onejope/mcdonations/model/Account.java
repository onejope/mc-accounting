package com.onejope.mcdonations.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="account")
@Entity
@Table(name="account")
@NamedQuery(name=Account.FIND_ALL_QUERY, query="SELECT a FROM Account a")
public class Account {
  
  public static final String FIND_ALL_QUERY = "Account.findAll";
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  
  @Column(name="account_name",nullable=false,unique=true,length=50)
  private String name;
  
  @XmlElement(required=true)
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @XmlElement(required=true)
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
  
}
