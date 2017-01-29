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
@Table(name = "contribution")
public class Contribution {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "deposit_id", nullable = false)
  private Long depositId;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "contributor_id")
  private Contributor contributor;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "category_id")
  private Category category;

  @Column(name = "amount", nullable = false)
  private Double amount;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getDepositId() {
    return depositId;
  }

  public void setDepositId(Long depositId) {
    this.depositId = depositId;
  }

  public Contributor getContributor() {
    return contributor;
  }

  public void setContributor(Contributor contributor) {
    this.contributor = contributor;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public Double getAmount() {
    return amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

}
