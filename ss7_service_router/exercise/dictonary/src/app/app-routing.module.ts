import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordComponent} from './component/word/word.component';
import {MeanComponent} from './component/mean/mean.component';

const routes: Routes = [
  {
    path: '',
    component: WordComponent
  },
  {
    path: 'translate/:id',
    component: MeanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
