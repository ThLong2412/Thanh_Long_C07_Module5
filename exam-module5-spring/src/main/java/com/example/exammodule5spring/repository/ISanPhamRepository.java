package com.example.exammodule5spring.repository;

import com.example.exammodule5spring.model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISanPhamRepository extends JpaRepository<SanPham, Long> {
}
