import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {

  vendors: Vendor[] = [];

  searchCriteria: string = '';
  sortColumn: string = 'name';
  sortAsc: boolean = true;
  sortColumnFn(column: string): void {
    if(column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  constructor(
    private vndsvc: VendorService
  ) {}

  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
