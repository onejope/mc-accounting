package com.onejope.mcdonations.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="contributor")
public class Contributor {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  
  @Column(name="first_name",nullable=false,length=25)
  private String firstName;
  
  @Column(name="last_name",nullable=false,length=25)
  private String lastName;
  
  @Column(name="street",nullable=false,length=50)
  private String street;
  
  @Column(name="city",nullable=false,length=50)
  private String city;
  
  @Column(name="state",nullable=false,length=25)
  private String state;
  
  @Column(name="postal_code",nullable=false,length=10)
  private String postalCode;
  
  @Column(name="phone",nullable=false,length=20)
  private String phone;
  
  @OneToMany(mappedBy="contributor")
  private List<Contribution> contributions;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public List<Contribution> getContributions() {
    return contributions;
  }

  public void setContributions(List<Contribution> contributions) {
    this.contributions = contributions;
  }
}
