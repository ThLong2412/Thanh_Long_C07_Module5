import { Component, OnInit } from '@angular/core';
import {Calculator} from "../calculator";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculator : Calculator = {
    number1 : 0,
    number2 : 0,
    result : 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeNumber1(target: any) {
    this.calculator.number1 = target.value;
  }

  changNumber2(target: any) {
    this.calculator.number2 = target.value;
  }

  changeAdd() {
    // @ts-ignore
    this.calculator.result = parseInt(this.calculator.number1) + parseInt(this.calculator.number2);
  }

  changeSub() {
    // @ts-ignore
    this.calculator.result = this.calculator.number1 - this.calculator.number2;
  }

  changeMul() {
    // @ts-ignore
    this.calculator.result = this.calculator.number1 * this.calculator.number2;
  }

  changeDiv() {
    // @ts-ignore
    this.calculator.result = this.calculator.number1 / this.calculator.number2;
  }
}
