import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('product')
  product: Product = {};
  productDeleteForm = new FormGroup({}) ;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.product = this.getProduct(id);
        this.productDeleteForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
        });
      }
    });
  }
  // tslint:disable-next-line:typedef
  getProduct(id: number) {
    return this.productService.findById(id);
  }

  ngOnInit(): void {

  }
  // cái này em dùng ở trường hợp khác nên em đóng lại ạ
  // tslint:disable-next-line:typedef
  // deleteProduct(id: number) {
  //   this.productService.deleteProduct(id);
  //   // document.getElementById('exampleModal')?.click();
  //   // this.router.navigate(['']);
  // }

  // tslint:disable-next-line:typedef
  deleteProductById() {
    // @ts-ignore
    this.productService.deleteById(this.product.id);
    this.router.navigate(['']);
  }

}
