import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formEditCustomer: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  editCustomer() {
  }
}
