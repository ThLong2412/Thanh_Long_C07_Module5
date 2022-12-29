import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
// @ts-ignore
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    // @ts-ignore
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    // @ts-ignore
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    // @ts-ignore
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    // @ts-ignore
    description: 'Like new'
  }];
  product: Product | undefined = {};

  // tslint:disable-next-line:typedef
  getAll() {
    return this.products;
  }

  // tslint:disable-next-line:typedef
  saveProduct(product: Product) {
    this.products.push(product);
  }

  // tslint:disable-next-line:typedef
  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  // tslint:disable-next-line:typedef
  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }

  // tslint:disable-next-line:typedef
  deleteById(id: number | undefined) {
    // tslint:disable-next-line:triple-equals
    if (id != undefined) {
      this.product = this.findById(id);
      if (this.product != null) {
        const length = this.products.length;
        for (let i = 0; i < length; i++) {
          // tslint:disable-next-line:triple-equals
          if (this.product.id == this.products[i].id) {
            this.products.splice(i, 1);
            break;
          }
        }
      }
    }
  }
}
