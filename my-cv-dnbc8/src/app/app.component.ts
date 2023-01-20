import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description: string = "1 parent, 2 child components";
  name: string = "Greg Doud";
  address: string = "4900 Parkway Dr.";
  city: string = "Mason";
  state: string = "OH";
  zip: string = "45040";
  email: string = "greg@maxtrain.com";
  phone: string = "513-322-8888";

}
