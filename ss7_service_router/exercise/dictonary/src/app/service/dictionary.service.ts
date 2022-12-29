import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {id: 1, word: 'Avocado', mean: 'quả bơ'},
    {id: 2, word: 'Apple', mean: 'quả táo'},
    {id: 3, word: 'Orange', mean: 'quả cam'},
    {id: 4, word: 'Grape', mean: 'quả nho'},
    {id: 5, word: 'Banana', mean: 'quả chuối'},
    {id: 6, word: 'Mango', mean: 'quả xoài'}
  ];

  // tslint:disable-next-line:typedef
  // @ts-ignore
  translate(id: number): IWord | null {
    // tslint:disable-next-line:no-shadowed-variable
  let mean = this.words.filter(element => element.id === id);
    // tslint:disable-next-line:triple-equals
  if (mean.length == 0) {
      return null;
    }
  return mean[0];
  }

  constructor() { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.words;
  }
}
