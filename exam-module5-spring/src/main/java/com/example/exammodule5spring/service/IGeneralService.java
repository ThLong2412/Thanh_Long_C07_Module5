package com.example.exammodule5spring.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IGeneralService<T> {
    Page<T> findAll(Pageable pageable);
    Optional<T> findByTd(Long id);
    void save(T t);
    void remove(Long id);
}
