import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const cbaseurl: string = "http://doudsystems.net/prsc37db";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  // baseurl: string = "http://doudsystems.net/prsc37db";

  constructor(
    private httpsvc: HttpClient
  ) { }

  // get all vendors
  list(): Observable<Vendor[]> {
    return this.httpsvc.get(`${cbaseurl}/api/vendors`) as Observable<Vendor[]>;
  }
  // get vendor by PK
  get(id: number): Observable<Vendor> {
    return this.httpsvc.get(`${cbaseurl}/api/vendors/${id}`) as Observable<Vendor>;
  }
  // insert vendor
  create(vendor: Vendor): Observable<Vendor> {
    return this.httpsvc.post(`${cbaseurl}/api/vendors`, vendor) as Observable<Vendor>;
  }
  // update vendor
  change(vendor: Vendor): Observable<any> {
    return this.httpsvc.put(`${cbaseurl}/api/vendors/${vendor.id}`, vendor) as Observable<any>;
  }
  // delete vendor
  remove(id: number): Observable<any> {
    return this.httpsvc.delete(`${cbaseurl}/api/vendors/${id}`) as Observable<any>;
  }
}
