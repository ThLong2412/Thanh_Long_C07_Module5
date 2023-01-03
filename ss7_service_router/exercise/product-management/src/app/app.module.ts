import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import '@angular/compiler';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
