import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor.class';
import { Observable } from 'rxjs';

const url: string = "http://doudsystems.net/prsc37db/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private httpsvc: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.httpsvc.get(`${url}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.httpsvc.get(`${url}/${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.httpsvc.post(`${url}`, vendor) as Observable<Vendor>;
  }
  change(vendor: Vendor): Observable<any> {
    return this.httpsvc.put(`${url}/${vendor.id}`, vendor) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.httpsvc.delete(`${url}/${id}`) as Observable<any>;
  }
}
