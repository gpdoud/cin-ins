import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Vendor", "/vendor/list"),
    new Menu("About", "/about")
  ];

}
