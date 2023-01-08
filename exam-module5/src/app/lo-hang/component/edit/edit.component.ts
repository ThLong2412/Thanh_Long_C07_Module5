import { Component, OnInit } from '@angular/core';
import {LoHangService} from '../../service/lo-hang.service';
import {SanPhamService} from '../../service/san-pham.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoHang} from '../../model/lo-hang';
import {SanPham} from '../../model/san-pham';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEdit: FormGroup = new FormGroup({});
  loHang: LoHang = {};
  sanPhams: SanPham[] = [];

  constructor(private loHangService: LoHangService, private sanPhamService: SanPhamService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formEdit = new FormGroup({
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
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getLoHang(+id);
      }
    });
  }

  ngOnInit(): void {
    this.getAllSanPham();
  }

  compareCate(item1: LoHang, item2: LoHang): boolean {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  getAllSanPham() {
    this.sanPhamService.getAll().subscribe(data => {
      this.sanPhams = data;
    });
  }

  private getLoHang(id: number) {
    this.loHangService.findById(id).subscribe(data => {
      this.formEdit.patchValue(data);
      this.loHang = data;
    });
  }

  update(): void {
    this.loHangService.update(this.formEdit.value).subscribe(data => {
      console.log(data);
      alert('sửa thành công');
      this.router.navigateByUrl('/lo-hang');
    });
  }

}
