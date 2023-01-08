package com.example.exammodule5spring.service.impl;

import com.example.exammodule5spring.model.LoHang;
import com.example.exammodule5spring.repository.ILoHangRepository;
import com.example.exammodule5spring.service.ILoHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class LoHangService implements ILoHangService {
    @Autowired
    private ILoHangRepository loHangRepository;

    @Override
    public Page<LoHang> findAll(Pageable pageable) {
        return loHangRepository.findAll(pageable);
    }

    @Override
    public Optional<LoHang> findByTd(Long id) {
        return loHangRepository.findById(id);
    }

    @Override
    public void save(LoHang loHang) {
            loHangRepository.save(loHang);
    }

    @Override
    public void remove(Long id) {
        loHangRepository.deleteById(id);
    }
}
