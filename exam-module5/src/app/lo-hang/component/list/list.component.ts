import { Component, OnInit } from '@angular/core';
import {LoHangService} from '../../service/lo-hang.service';
import {SanPhamService} from '../../service/san-pham.service';
import {LoHang} from '../../model/lo-hang';
import {SanPham} from '../../model/san-pham';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  loHangs: LoHang[] = [];
  sanPhams: SanPham[] = [];
  temp: LoHang = {};
  page = 0;
  formSearch = new FormGroup({
      tenSanPham: new FormControl(),
      ngayHetHan: new FormControl()
  });

  constructor(private loHangService: LoHangService, private sanPhamService: SanPhamService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllSanPham();
  }

  getAll() {
    this.loHangService.getAll(this.formSearch.value.tenSanPham, this.formSearch.value.ngayHetHan, this.page).subscribe(data => {
      this.loHangs = data;
    }, error => {
      console.log(error);
    });
  }

  getAllSanPham() {
    this.sanPhamService.getAll().subscribe(data => {
      this.sanPhams = data;
    }, error => {
      console.log(error);
    });
  }

  reload(): void {
    this.getAll();
  }

  onSearch() {
    this.page = 0;
    this.loHangService.getAll(this.formSearch.value.tenSanPham, this.formSearch.value.ngayHetHan, this.page).subscribe(data => {
      this.loHangs = data;
    }, error => {
      console.log(error);
    });
  }

  previous() {
    this.page++;
    this.getAll();
  }

  next() {
    this.page = this.page - 1;
    this.getAll();
  }
}
