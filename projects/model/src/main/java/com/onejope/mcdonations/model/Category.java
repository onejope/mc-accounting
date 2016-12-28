package com.onejope.mcdonations.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  
  @Column(name="category_name",nullable=false,unique=true,length=50)
  private String name;
  
  @Column(name="is_tax_deductible",nullable=false)
  private Boolean taxDeductible;
  
  @ManyToOne(fetch=FetchType.LAZY)
  @JoinColumn(name="account_id")
  private Account account;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Boolean getTaxDeductible() {
    return taxDeductible;
  }

  public void setTaxDeductible(Boolean taxDeductible) {
    this.taxDeductible = taxDeductible;
  }

  public Account getAccount() {
    return account;
  }

  public void setAccount(Account account) {
    this.account = account;
  }
}
