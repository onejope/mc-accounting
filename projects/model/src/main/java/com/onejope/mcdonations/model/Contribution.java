package com.onejope.mcdonations.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name="contribution")
public class Contribution {
  @Embeddable
  public static class PrimaryKey implements Serializable {
    private static final long serialVersionUID = 574986110505250392L;

    @Column(name="deposit_id")
    private Long depositId;
        
    @Column(name="contributor_id")
    private Long contributorId;
    
    @Column(name="category_id")
    private Long categoryId;

    public Long getDepositId() {
      return depositId;
    }

    public void setDepositId(Long depositId) {
      this.depositId = depositId;
    }

    public Long getContributorId() {
      return contributorId;
    }

    public void setContributorId(Long contributorId) {
      this.contributorId = contributorId;
    }

    public Long getCategoryId() {
      return categoryId;
    }

    public void setCategoryId(Long categoryId) {
      this.categoryId = categoryId;
    }
  }
  
  @EmbeddedId
  private PrimaryKey key;
  
  @MapsId("depositId")
  @ManyToOne(fetch=FetchType.LAZY)
  @JoinColumn(name="deposit_id")
  private Deposit deposit;
  
  @MapsId("contributorId")
  @ManyToOne(fetch=FetchType.LAZY)
  @JoinColumn(name="contributor_id")
  private Contributor contributor;
  
  @MapsId("categoryId")
  @ManyToOne(fetch=FetchType.LAZY)
  @JoinColumn(name="category_id")
  private Category category;
  
  @Column(name="amount",nullable=false)
  private Double amount;

  public PrimaryKey getKey() {
    return key;
  }

  public void setKey(PrimaryKey key) {
    this.key = key;
  }

  public Deposit getDeposit() {
    return deposit;
  }

  public void setDeposit(Deposit deposit) {
    this.deposit = deposit;
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
