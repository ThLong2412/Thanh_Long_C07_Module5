package com.example.exammodule5spring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class SanPham {
    @Id
    private Long id;
    private String ten;
    private String xuatXu;
    private Long giaTien;
    private String donVi;
    @OneToMany(mappedBy = "sanPham")
    @JsonBackReference
    public Set<LoHang> loHangSet;

    public Set<LoHang> getLoHangSet() {
        return loHangSet;
    }

    public void setLoHangSet(Set<LoHang> loHangSet) {
        this.loHangSet = loHangSet;
    }

    public SanPham() {
    }

    public SanPham(Long id, String ten, String xuatXu, Long giaTien, String donVi, Set<LoHang> loHangSet) {
        this.id = id;
        this.ten = ten;
        this.xuatXu = xuatXu;
        this.giaTien = giaTien;
        this.donVi = donVi;
        this.loHangSet = loHangSet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getXuatXu() {
        return xuatXu;
    }

    public void setXuatXu(String xuatXu) {
        this.xuatXu = xuatXu;
    }

    public Long getGiaTien() {
        return giaTien;
    }

    public void setGiaTien(Long giaTien) {
        this.giaTien = giaTien;
    }

    public String getDonVi() {
        return donVi;
    }

    public void setDonVi(String donVi) {
        this.donVi = donVi;
    }
}
