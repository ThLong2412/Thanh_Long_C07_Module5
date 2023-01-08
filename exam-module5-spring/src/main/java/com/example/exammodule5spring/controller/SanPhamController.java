package com.example.exammodule5spring.controller;

import com.example.exammodule5spring.model.LoHang;
import com.example.exammodule5spring.model.SanPham;
import com.example.exammodule5spring.service.impl.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("san-pham")
@CrossOrigin("*")
public class SanPhamController {
    @Autowired
    private SanPhamService sanPhamService;
    @GetMapping
    public ResponseEntity<Page<SanPham>> getList(@PageableDefault(page = 0, size = 1) Pageable pageable) {
        Page<SanPham> blogList = sanPhamService.findAll(pageable);
        if (blogList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(blogList, HttpStatus.OK);
    }
}
