import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {IWord} from '../../model/iword';
import {Router} from '@angular/router';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  words: IWord[] = [];

  constructor(private dictionaryService: DictionaryService, private router: Router) {
    this.words = this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  translate(id: number | undefined) {
    this.router.navigate(['/translate', id]);
  }
}
