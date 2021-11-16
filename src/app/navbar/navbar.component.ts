import { Component, OnInit } from '@angular/core';
import {menu as menulist, menulistInterace} from './menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menus: menulistInterace[] = menulist;
  tipoMenu = 'nav-item';

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.menus)
  }

  changeTipoMenu(tipo:any){
    if(tipo == 1){
      console.log("nav-item")
    }else{
      console.log("nav-item dropdown")
    }
  }
}

