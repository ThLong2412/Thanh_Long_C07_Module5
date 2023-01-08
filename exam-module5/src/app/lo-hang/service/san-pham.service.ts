import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SanPham} from '../model/san-pham';

@Injectable({
  providedIn: 'root'
})
export class SanPhamService {
  URL_SAN_PHAM = 'http://localhost:8080/san-pham';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<SanPham[]> {
    return this.httpClient.get<SanPham[]>(this.URL_SAN_PHAM);
  }
}
