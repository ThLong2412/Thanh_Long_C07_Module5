package com.example.exammodule5spring.service.impl;

import com.example.exammodule5spring.model.SanPham;
import com.example.exammodule5spring.repository.ISanPhamRepository;
import com.example.exammodule5spring.service.ISanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class SanPhamService implements ISanPhamService {
    @Autowired
    private ISanPhamRepository sanPhamRepository;
    @Override
    public Page<SanPham> findAll(Pageable pageable) {
        return sanPhamRepository.findAll(pageable);
    }

    @Override
    public Optional<SanPham> findByTd(Long id) {
        return Optional.empty();
    }

    @Override
    public void save(SanPham sanPham) {

    }

    @Override
    public void remove(Long id) {

    }
}
