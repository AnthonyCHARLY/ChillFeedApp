import { Component, OnInit } from '@angular/core';
import { LogInComponent } from 'app/log-in/log-in.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    loged: boolean;
}
export const ROUTES: RouteInfo[] = [
    //{ path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', loged: true },
    { path: '/sign-in', title: 'Sign-In',  icon:'person', class: '', loged: false },
    { path: '/log-in', title: 'Log-In', icon:'person', class:'', loged: false },
    { path: '/home', title: 'Log-Out', icon:'person', class:'', loged: false }
    //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '', loged: true },
    //{ path: '/typography', title: 'Typography',  icon:'library_books', class: '', loged: true },
    //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '', loged: true },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '', loged: true },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '', loged: true },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro', loged: true },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  loged: boolean = false;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  isLoged(val: boolean){
    if(val === this.loged){
      return true;
    }
    return false;
  }

  logIn(){
    this.loged = true;
  }

  logOut(){
    this.loged = false;
  }
}
