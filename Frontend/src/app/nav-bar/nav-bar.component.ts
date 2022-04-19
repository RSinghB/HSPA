import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser ?: string;
  constructor() { }

  ngOnInit() {
  }

  loggedin(){
    this.loggedInUser = localStorage.getItem('token') as string;
    return this.loggedInUser;
  }

  onLogout(){
    return localStorage.removeItem('token');
  }

}
