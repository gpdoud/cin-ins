import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clsVals: string = "red bold";
  hide: boolean = true;

  title = 'angular-examples';
  displayTitle: boolean = false;

  names: any[] = [ 
    { firstname: 'Abe' }, 
    { firstname: 'Betty'}, 
    { firstname: 'Chris'}, 
    { firstname: 'David' }
  ];

  alert(nbr: number): void {
    console.warn(`An alert ${nbr} has been issued!`);
  }
}
