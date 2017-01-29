package com.onejope.mcdonations.model;

import java.util.Calendar;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "deposit")
@NamedQueries({@NamedQuery(name = Deposit.FIND_ALL_QUERY, query = "SELECT d FROM Deposit d"),
    @NamedQuery(name = Deposit.FIND_BY_DATE_QUERY,
        query = "SELECT d FROM Deposit d WHERE d.date = :" + Deposit.DATE_PARAMETER)})
public class Deposit {

  public static final String FIND_ALL_QUERY = "Deposit.findAll";
  public static final String FIND_BY_DATE_QUERY = "Deposit.findByDate";
  public static final String DATE_PARAMETER = "date";

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "deposit_number", nullable = false, length = 25)
  private String depositNumber;

  @Column(name = "deposit_date", nullable = false)
  private Calendar date;

  @OneToMany(fetch = FetchType.EAGER)
  @JoinColumn(name = "deposit_id")
  private List<Contribution> contributions;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getDepositNumber() {
    return depositNumber;
  }

  public void setDepositNumber(String depositNumber) {
    this.depositNumber = depositNumber;
  }

  public Calendar getDate() {
    return date;
  }

  public void setDate(Calendar date) {
    this.date = date;
  }

  public List<Contribution> getContributions() {
    return contributions;
  }

  public void setContributions(List<Contribution> contributions) {
    this.contributions = contributions;
  }
}
