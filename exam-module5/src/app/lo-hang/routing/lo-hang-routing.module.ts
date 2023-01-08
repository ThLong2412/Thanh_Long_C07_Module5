import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from '../component/list/list.component';
import {CreateComponent} from '../component/create/create.component';
import {DeleteComponent} from '../component/delete/delete.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoHangRoutingModule {
}
