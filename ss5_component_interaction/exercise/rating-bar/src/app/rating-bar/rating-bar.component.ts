import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
// @ts-ignore
import EventEmitter = NodeJS.EventEmitter;
import {RatingUnit} from '../rating-unit';


@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: Array<RatingUnit> = [];

  constructor() { }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  // tslint:disable-next-line:typedef
  calculate(max: number, ratingValue: number) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  // tslint:disable-next-line:typedef
  select(index: number) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }
  // tslint:disable-next-line:typedef
  enter(index: number) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  // tslint:disable-next-line:typedef
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

}
