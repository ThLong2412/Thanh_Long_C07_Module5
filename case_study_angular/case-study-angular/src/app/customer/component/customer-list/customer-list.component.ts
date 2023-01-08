import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  page = 1;
  temp: Customer = {};
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  searchForm = new FormGroup({
    name: new FormControl(),
    customerTypeId: new FormControl()
  });

  constructor(private customerServiceService: CustomerServiceService, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCustomerType();
  }

  getAll() {
    this.customerServiceService.getAll(this.searchForm.value.name, this.searchForm.value.customerTypeId).subscribe(customers => {
      this.customers = customers;
    });
  }

  reload(): void {
    this.getAll();
  }

  onSearch() {
    this.customerServiceService.getAll(this.searchForm.value.name, this.searchForm.value.customerTypeId).subscribe(customers => {
      this.customers = customers;
      this.page = 1;
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerTypes = data;
    });
  }
}
