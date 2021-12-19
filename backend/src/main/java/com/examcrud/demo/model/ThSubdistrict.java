/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.examcrud.demo.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author fiw00
 */
@Entity
@Table(name = "TH_SUBDISTRICT", catalog = "TEST", schema = "PUBLIC")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ThSubdistrict.findAll", query = "SELECT t FROM ThSubdistrict t")
    , @NamedQuery(name = "ThSubdistrict.findById", query = "SELECT t FROM ThSubdistrict t WHERE t.id = :id")
    , @NamedQuery(name = "ThSubdistrict.findByDistrictId", query = "SELECT t FROM ThSubdistrict t WHERE t.districtId = :districtId")
    , @NamedQuery(name = "ThSubdistrict.findByNameTh", query = "SELECT t FROM ThSubdistrict t WHERE t.nameTh = :nameTh")
    , @NamedQuery(name = "ThSubdistrict.findByNameEn", query = "SELECT t FROM ThSubdistrict t WHERE t.nameEn = :nameEn")
    , @NamedQuery(name = "ThSubdistrict.findByLat", query = "SELECT t FROM ThSubdistrict t WHERE t.lat = :lat")
    , @NamedQuery(name = "ThSubdistrict.findByLong1", query = "SELECT t FROM ThSubdistrict t WHERE t.long1 = :long1")
    , @NamedQuery(name = "ThSubdistrict.findByZipcode", query = "SELECT t FROM ThSubdistrict t WHERE t.zipcode = :zipcode")})
public class ThSubdistrict implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID", nullable = false)
    private Integer id;
    @Column(name = "DISTRICT_ID")
    private Short districtId;
    @Column(name = "NAME_TH", length = 120)
    private String nameTh;
    @Column(name = "NAME_EN", length = 120)
    private String nameEn;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "LAT", precision = 5, scale = 3)
    private BigDecimal lat;
    @Column(name = "LONG", precision = 6, scale = 3)
    private BigDecimal long1;
    @Column(name = "ZIPCODE")
    private Integer zipcode;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "subDistrictId", fetch = FetchType.LAZY)
    private List<Address> addressList;

    public ThSubdistrict() {
    }

    public ThSubdistrict(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Short getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Short districtId) {
        this.districtId = districtId;
    }

    public String getNameTh() {
        return nameTh;
    }

    public void setNameTh(String nameTh) {
        this.nameTh = nameTh;
    }

    public String getNameEn() {
        return nameEn;
    }

    public void setNameEn(String nameEn) {
        this.nameEn = nameEn;
    }

    public BigDecimal getLat() {
        return lat;
    }

    public void setLat(BigDecimal lat) {
        this.lat = lat;
    }

    public BigDecimal getLong1() {
        return long1;
    }

    public void setLong1(BigDecimal long1) {
        this.long1 = long1;
    }

    public Integer getZipcode() {
        return zipcode;
    }

    public void setZipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }

    @XmlTransient
    public List<Address> getAddressList() {
        return addressList;
    }

    public void setAddressList(List<Address> addressList) {
        this.addressList = addressList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ThSubdistrict)) {
            return false;
        }
        ThSubdistrict other = (ThSubdistrict) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "newpackage.ThSubdistrict[ id=" + id + " ]";
    }
    
}
