import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContractListComponent } from './contract/component/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/component/contract-create/contract-create.component';
import { CustomerListComponent } from './customer/component/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/component/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/component/customer-edit/customer-edit.component';
import { FacilityListComponent } from './facility/component/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility/component/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/component/facility-edit/facility-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerDeleteComponent } from './customer/component/customer-delete/customer-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContractListComponent,
    ContractCreateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
