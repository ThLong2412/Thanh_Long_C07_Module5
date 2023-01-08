package com.example.exammodule5spring.controller;

import com.example.exammodule5spring.model.LoHang;
import com.example.exammodule5spring.service.ILoHangService;
import com.example.exammodule5spring.service.ISanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("lo-hang")
@CrossOrigin("*")
public class LoHangController {
    @Autowired
    private ILoHangService loHangService;

    @GetMapping("")
    public ResponseEntity<Page<LoHang>> getList(@PageableDefault(page = 0, size = 1) Pageable pageable) {
        Page<LoHang> blogList = loHangService.findAll(pageable);
        if (blogList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(blogList, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody LoHang loHang) {

        loHangService.save(loHang);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody LoHang loHang) {
        loHangService.save(loHang);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoHang> findById(@PathVariable("id") Long id) {
        Optional<LoHang> loHangOptional = loHangService.findByTd(id);
        if (loHangOptional.isPresent()) {
            return new ResponseEntity<>(loHangOptional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity reomve(@PathVariable("id") Long id) {
        Optional<LoHang> loHang = loHangService.findByTd(id);
        if (loHang.isPresent()) {
            loHangService.remove(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
