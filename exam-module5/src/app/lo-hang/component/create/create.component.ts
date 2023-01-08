import { Component, OnInit } from '@angular/core';
import {SanPham} from '../../model/san-pham';
import {SanPhamService} from '../../service/san-pham.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoHangService} from '../../service/lo-hang.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  sanPhams: SanPham[] = [];
  formCreate = new FormGroup({
    id: new FormControl('', [Validators.required]),
    maLoHang: new FormControl('', [Validators.required, Validators.pattern('^[L][H][-][0-9]{4}$')]),
    sanPham: new FormGroup({
          id: new FormControl(),
          ten: new FormControl(),
          xuatXu: new FormControl(),
          giaTien: new FormControl(),
          donVi: new FormControl()
    }),
    soLuong: new FormControl('', [Validators.required, Validators.min(0)]),
    ngayNhapHang: new FormControl('', Validators.required),
    ngaySanXuat: new FormControl('', Validators.required),
    ngayHetHan: new FormControl('', Validators.required)
  });

  constructor(private sanPhamService: SanPhamService, private loHangService: LoHangService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSanPham();
  }

  create() {
    const loHang = this.formCreate.value;
    this.loHangService.save(loHang).subscribe(() => {
    this.router.navigateByUrl('');
    alert('Thêm mới thành công');
    });
  }

  getAllSanPham() {
    this.sanPhamService.getAll().subscribe(data => {
      this.sanPhams = data;
    }, error => {
      console.log(error);
    });
  }

}
