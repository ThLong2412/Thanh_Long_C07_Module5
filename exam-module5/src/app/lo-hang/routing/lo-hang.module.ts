import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoHangRoutingModule} from './lo-hang-routing.module';
import {ListComponent} from '../component/list/list.component';
import {CreateComponent} from '../component/create/create.component';
import {DeleteComponent} from '../component/delete/delete.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DeleteComponent],
  imports: [
    CommonModule,
    LoHangRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoHangModule {
}
