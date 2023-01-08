import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoHang} from '../model/lo-hang';

@Injectable({
  providedIn: 'root'
})
export class LoHangService {
  URL_LO_HANG = 'http://localhost:8080/lo-hang';
  URL_SAVE = 'http://localhost:8080/lo-hang/save';
  URL_UPDATE = 'http://localhost:8080/lo-hang/update';
  URL_DELETE = 'http://localhost:8080/lo-hang/delete';

  constructor(private httpClient: HttpClient) { }
  getAll(tenSanPham: string, ngayHetHan: string, page: number): Observable<LoHang[]> {
    if (tenSanPham == null && ngayHetHan != null) {
      return this.httpClient.get<LoHang[]>(`${(this.URL_LO_HANG)}?ngayHetHan_like=${ngayHetHan}&?page=${page}`);
    }
    if (ngayHetHan == null && tenSanPham != null) {
      return this.httpClient.get<LoHang[]>(`${(this.URL_LO_HANG)}?sanPham.ten_like=${tenSanPham}&?page=${page}`);
    }
    if (tenSanPham != null && ngayHetHan != null) {
      return this.httpClient.get<LoHang[]>(`${(this.URL_LO_HANG)}?sanPham.ten_like=${tenSanPham}&ngayHetHan_like=${ngayHetHan}&?page=${page}`);
    } else {
      return this.httpClient.get<LoHang[]>(`${(this.URL_LO_HANG)}?page=${page}`);
    }
  }

  save(loHang: LoHang): Observable<LoHang> {
    return this.httpClient.post<LoHang>(this.URL_SAVE, loHang);
  }

  findById(id: number): Observable<LoHang> {
    return this.httpClient.get<LoHang>(`${(this.URL_LO_HANG)}/${id}`);
  }

  update(loHang: LoHang): Observable<LoHang> {
    return this.httpClient.patch(`${(this.URL_UPDATE)}/${loHang.id}`, loHang);
  }
  delete(id: number): Observable<LoHang> {
    return this.httpClient.delete<LoHang>(`${(this.URL_DELETE)}/${id}`);
  }
}
