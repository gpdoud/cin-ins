import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {

  vendor: Vendor = new Vendor();

  constructor(
    private vndsvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    console.debug("B4", this.vendor);
    this.vndsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.log("Create successfully!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
