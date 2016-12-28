package com.onejope.mcdonations.model;

import java.util.Calendar;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="deposit")
public class Deposit {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  
  @Column(name="deposit_number",nullable=false,length=25)
  private String depositNumber;
  
  @Column(name="deposit_date",nullable=false)
  private Calendar date;
  
  @OneToMany(mappedBy="deposit")
  private List<Contribution> contributions;
}
