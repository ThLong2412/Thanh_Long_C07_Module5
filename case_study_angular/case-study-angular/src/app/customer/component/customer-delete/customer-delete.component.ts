import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  formDelete: FormGroup = new FormGroup({});
  // tslint:disable-next-line:no-input-rename
  @Input('customer')
  customer: Customer = {};
  // id: number;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
  }
}
