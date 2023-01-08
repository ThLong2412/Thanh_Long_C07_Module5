import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  URL_PRODUCT = 'http://localhost:3000/customer-type';
  constructor(private  httpClient: HttpClient) { }

  getAll(): Observable<CustomerType[]> {
      return this.httpClient.get<CustomerType[]>(this.URL_PRODUCT);
  }
}
