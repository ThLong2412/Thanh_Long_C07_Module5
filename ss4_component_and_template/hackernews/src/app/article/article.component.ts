import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = {};

  articles: Article[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://viblo.asia/p/callback-promise-async-await-hay-observable-cho-xu-ly-bat-dong-bo-Qpmle7PmKrd'
    },
    {
      title: 'Game of Life',
      url: 'https://playgameoflife.com/'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://topdev.vn/blog/api-la-gi-cac-nguyen-tac-xay-dung-rest-api/'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
        url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  // tslint:disable-next-line:typedef
  addNewArticle() {
    this.articles.push(this.article);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
