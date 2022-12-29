import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productUpdateForm: FormGroup | undefined;
  product: Product | undefined = {};

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
        const id = data.get('id');
        if (id != null) {
          // tslint:disable-next-line:radix
            this.product = this.getProduct(parseInt(id));
            this.productUpdateForm = new FormGroup({
              // @ts-ignore
            id: new FormControl(this.product.id),
              // @ts-ignore
            name: new FormControl(this.product.name),
              // @ts-ignore
            price: new FormControl(this.product.price),
              // @ts-ignore
            description: new FormControl(this.product.description),
          });
        }
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getProduct(id: number) {
    return this.productService.findById(id);
  }

  // tslint:disable-next-line:typedef
  updateProduct(id: number) {
    // @ts-ignore
    const product = this.productUpdateForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
  }
}
