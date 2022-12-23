import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet: Pet = {
    name: 'puppie',
    image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
  };
  pet2: Pet = {
    name: "doggy",
    image: "https://megapet.vn/wp-content/uploads/2021/06/64314433_6123402977352_2783227030731227136_n-1.jpg"
}

  constructor() { }

  ngOnInit(): void {
  }

}
