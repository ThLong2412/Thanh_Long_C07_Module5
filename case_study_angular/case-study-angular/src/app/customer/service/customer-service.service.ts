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

  getAll(value: string, customerType: any): Observable<Customer[]> {
    if (value == null && customerType != null) {
      return this.httpClient.get<Customer[]>(`${(this.URL_PRODUCT)}?customerTypeId.name_like=${customerType}`);
    }
    if (customerType == null && value != null) {
      return this.httpClient.get<Customer[]>(`${(this.URL_PRODUCT)}?name_like=${value}`);
    }
    if (value != null && customerType != null) {
      return this.httpClient.get<Customer[]>(`${(this.URL_PRODUCT)}?name_like=${value}&customerTypeId.name_like=${customerType}`);
    } else {
      return this.httpClient.get<Customer[]>(this.URL_PRODUCT);
    }
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.URL_PRODUCT, customer);
  }

  findById(id: number ): Observable<Customer> {
    return this.httpClient.get<Customer>(`${(this.URL_PRODUCT)}/${id}`);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(`${(this.URL_PRODUCT)}/${customer.id}`, customer);
  }

  deleteCustomer(id: number | undefined): Observable<Customer> {
    if (id == null){
      alert('không timg thấy id');
    }
    return this.httpClient.delete<Customer>(`${this.URL_PRODUCT}/${id}`);
  }
}
