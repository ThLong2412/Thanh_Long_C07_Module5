import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerListComponent} from '../component/customer-list/customer-list.component';
import {CustomerCreateComponent} from '../component/customer-create/customer-create.component';
import {CustomerEditComponent} from '../component/customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from '../component/customer-delete/customer-delete.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class CustomerModule { }
