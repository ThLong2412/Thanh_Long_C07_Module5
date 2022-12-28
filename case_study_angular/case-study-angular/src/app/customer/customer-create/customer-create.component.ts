import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../model/customer/customer';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer/customer-type';
// @ts-ignore




@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output()
  eventCreate = new EventEmitter();

  formCreateCustomer = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern('KH-[0-9]{4}')]),
    name: new FormControl('', [Validators.required, Validators.pattern('([A-Z][a-z]+[ ])+([A-Z][a-z]+)')]),
    dateOfBirth: new FormControl(),
    idCard: new FormControl('', [Validators.required, Validators.pattern('([0-9]{9})|([0-9]{12})')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})')]),
    gender: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl(),
    flagDelete: new FormControl(),
    customerType: new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    })
  });

  // tslint:disable-next-line:typedef
  customerTypes: CustomerType[] = [
    {
      id: 1,
      name: 'diamond'
    },
    {
      id: 2,
      name: 'platinum'
    },
    {
      id: 3,
      name: 'good'
    }
  ];
  // tslint:disable-next-line:typedef
  createCustomer() {
    if (this.formCreateCustomer.valid) {
      this.eventCreate.emit(this.formCreateCustomer.value);
    }
    console.log(this.formCreateCustomer.value);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
