package com.example.exammodule5spring.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
public class LoHang {
    @Id
    private Long id;
    private String maLoHang;
    @ManyToOne
    @JsonManagedReference
    private SanPham sanPham;
    private int soLuong;
    private Date ngayNhapHang;
    private Date ngaySanXuat;
    private Date ngayHetHan;

    public LoHang() {
    }

    public LoHang(Long id, String maLoHang, SanPham sanPham, int soLuong, Date ngayNhapHang, Date ngaySanXuat, Date ngayHetHan) {
        this.id = id;
        this.maLoHang = maLoHang;
        this.sanPham = sanPham;
        this.soLuong = soLuong;
        this.ngayNhapHang = ngayNhapHang;
        this.ngaySanXuat = ngaySanXuat;
        this.ngayHetHan = ngayHetHan;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMaLoHang() {
        return maLoHang;
    }

    public void setMaLoHang(String maLoHang) {
        this.maLoHang = maLoHang;
    }

    public SanPham getSanPham() {
        return sanPham;
    }

    public void setSanPham(SanPham sanPham) {
        this.sanPham = sanPham;
    }

    public int getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(int soLuong) {
        this.soLuong = soLuong;
    }

    public Date getNgayNhapHang() {
        return ngayNhapHang;
    }

    public void setNgayNhapHang(Date ngayNhapHang) {
        this.ngayNhapHang = ngayNhapHang;
    }

    public Date getNgaySanXuat() {
        return ngaySanXuat;
    }

    public void setNgaySanXuat(Date ngaySanXuat) {
        this.ngaySanXuat = ngaySanXuat;
    }

    public Date getNgayHetHan() {
        return ngayHetHan;
    }

    public void setNgayHetHan(Date ngayHetHan) {
        this.ngayHetHan = ngayHetHan;
    }
}
