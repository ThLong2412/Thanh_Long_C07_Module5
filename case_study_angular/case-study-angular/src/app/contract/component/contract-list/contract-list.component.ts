import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../customer/model/customer';
import {Facility} from '../../../facility/model/facility';
import {Employee} from '../../../employee/model/employee';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  1: Customer = {
    id: 1,
    name: 'Nguyễn Thị Hào'
  };

  2: Customer = {
    id: 2,
    name: 'Phạm Xuân Diệu'
  };

  villaBeachFront: Facility = {
    id: 1,
    name: 'Villa Beach Front'
  };
  housePrincess01: Facility = {
    id: 2,
    name: 'House Princess 01'
  };
  roomTwin01: Facility = {
    id: 3,
    name: 'Room Twin 01'
  };

  nguyenVanAn: Employee = {
    id: 1,
    name: 'Nguyễn Văn An'
  };
  leVanBinh: Employee = {
    id: 2,
    name: 'Lê Văn Bình',
  };
  hoThiYen: Facility = {
    id: 3,
    name: 'Hồ Thị Yến'
  };

  contracts: Contract[] = [
    // {
    //   id: 1,
    //   startDate: '2020-12-08',
    //   endDate: '2020-12-08',
    //   deposit: 0,
    //   customer: this['1'],
    //   model: this.hoThiYen,
    //   facility: this.roomTwin01
    // },
    {
      id: 2,
      startDate: '2020-07-14',
      endDate: '2020-07-21',
      deposit: 200000,
      customer: this['2'],
      employee: this.nguyenVanAn,
      facility: this.villaBeachFront
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
