import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../../model/iword';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements OnInit {
  mean: IWord | null = {};

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.mean = this.dictionaryService.translate(parseInt(id));
      }
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
  }

}
