import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @Output()
  eventEdit = new EventEmitter();

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

  formEditCustomer = new FormGroup({
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

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  editCustomer() {
    if (this.formEditCustomer.valid) {
      this.eventEdit.emit(this.formEditCustomer.value);
    }
    console.log(this.formEditCustomer.value);
  }
}
