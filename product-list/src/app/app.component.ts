import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newName: string = '';
  newPrice: number = 10;
  newInventory: number = 0;

  products: any[] = [
    { name: 'Echo', price: 100, inventory: 10 },
    { name: 'EchoDot', price: 50, inventory: 10 },
    { name: 'EchoShow', price: 150, inventory: 10 },
    { name: 'FireStick', price: 80, inventory: 10 },
    { name: 'FireTv', price: 160, inventory: 0 }
  ];

  save(): void {
    if(this.newName === '') {
      console.error("Name must be provided");
      return;
    }
    let newProduct = {
      name: this.newName,
      price: this.newPrice,
      inventory: this.newInventory
    }
    console.log(newProduct);
    this.products.push(newProduct);
  }

}
