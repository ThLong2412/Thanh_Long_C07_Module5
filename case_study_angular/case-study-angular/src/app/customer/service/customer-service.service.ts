import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  URL_PRODUCT = 'http://localhost:3000/customer';
  constructor(private  httpClient: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_PRODUCT );
  }

  saveProduct(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.URL_PRODUCT, customer);
  }

  findById(id: number ): Observable<Customer> {
    return this.httpClient.get<Customer>(`${(this.URL_PRODUCT)}/${id}`);
  }

  updateProduct(id: number , customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(`${(this.URL_PRODUCT)}/${id}`, customer);
  }

  deleteProduct(id: number ): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.URL_PRODUCT}/${id}`);
  }
}
