import {Component, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';

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
