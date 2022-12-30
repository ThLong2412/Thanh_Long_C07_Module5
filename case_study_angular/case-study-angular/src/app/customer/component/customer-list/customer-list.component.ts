import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {CustomerServiceService} from '../../service/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  temp: Customer = {};
  customers: Customer[] = [];

  constructor(private customerServiceService: CustomerServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
   getAll() {
    this.customerServiceService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }
}
