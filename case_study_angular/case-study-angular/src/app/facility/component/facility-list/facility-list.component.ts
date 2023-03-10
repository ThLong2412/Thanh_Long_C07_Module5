import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility = {};

  year: RentType = {
    id: 1,
    name: 'year'
  };
  month: RentType = {
    id: 2,
    name: 'month'
  };
  date: RentType = {
    id: 3,
    name: 'date'
  };
  hours: RentType = {
    id: 4,
    name: 'hours'
  };

  villa: FacilityType = {
    id: 1,
    name: 'villa'
  };
  house: FacilityType = {
    id: 2,
    name: 'house'
  };
  room: FacilityType = {
    id: 3,
    name: 'room'
  };

  facilityList: Facility[] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      area: 2500,
      cost: 1000000,
      maxPeople: 10,
      facilityType: this.villa,
      rentType: this.date,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: '',
      flagDelete: false
    },
    {
      id: 2,
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      facilityType: this.house,
      rentType: this.month,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      poolArea: 0,
      numberOfFloors: 3,
      facilityFree: '',
      flagDelete: false
    },
    {
      id: 3,
      name: 'Room Twin 2',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      facilityType: this.room,
      rentType: this.date,
      standardRoom: 'vip',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 3,
      facilityFree: '',
      flagDelete: false
    },
    {
      id: 4,
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      facilityType: this.house,
      rentType: this.year,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      poolArea: 0,
      numberOfFloors: 3,
      facilityFree: '',
      flagDelete: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
