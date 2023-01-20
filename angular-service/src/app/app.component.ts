import { Component } from '@angular/core';
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';

  constructor(
    private vndsvc: VendorService
  ) {}

  ngOnInit() {
    this.vndsvc.get(1).subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.error("ERROR!: ", err)
        }
      }
    );
  }
}
