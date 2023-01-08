package com.example.exammodule5spring.repository;

import com.example.exammodule5spring.model.LoHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILoHangRepository extends JpaRepository<LoHang, Long> {
}
