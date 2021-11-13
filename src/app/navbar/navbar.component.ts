import { Component, OnInit } from '@angular/core';
import {menu as menulist} from './menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menus: menulist[] = menulist;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.menus)
  }

}

interface menulist{
    idMenu: number;
    label: string;
}
