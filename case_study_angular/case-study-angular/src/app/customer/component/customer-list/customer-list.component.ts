import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  temp: Customer = {};

  constructor() { }
  diamond: CustomerType = {
    id: 1,
    name: 'Diamond'
  };
  platinium: CustomerType = {
    id: 2,
    name: 'Platinium'
  };
  gold: CustomerType = {
    id: 3,
    name: 'Gold'
  };
  silver: CustomerType = {
    id: 4,
    name: 'Silver'
  };
  member: CustomerType = {
    id: 5,
    name: 'Member'
  };

  customers: Customer[] = [
    {
      id: 1,
      customerTypeId: this.member,
      code: 'KH-0090',
      name: 'Nguyễn Thị Hào',
      dateOfBirth: '1970-11-07',
      idCard: '643431213',
      phoneNumber: '0945423362',
      gender: false,
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      flagDelete: false
    },
    {
      id: 2,
      customerTypeId: this.gold,
      code: 'KH-0091',
      name: 'Phạm Xuân Diệu',
      dateOfBirth: '1992-08-08',
      idCard: '865342123',
      phoneNumber: '0954333333',
      gender: true,
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      flagDelete: false
    },
    {
      id: 3,
      customerTypeId: this.diamond,
      code: 'KH-0092',
      name: 'Trương Định Nghệ',
      dateOfBirth: '1990-02-27',
      idCard: '488645199',
      phoneNumber: '0373213122',
      gender: true,
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      flagDelete: false
    },
  ];

  display = 'none';

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  save(event: any) {
    this.customers.push(event);
  }
  // tslint:disable-next-line:typedef
  delete() {
    this.display = 'block';
  }

  // tslint:disable-next-line:typedef
  close() {
    this.display = 'none';
  }
}
