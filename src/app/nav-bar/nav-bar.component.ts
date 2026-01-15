import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, 
    RouterLinkActive,
    CommonModule
  ]
})

export class NavBarComponent implements OnInit {

  loggedInUser: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser !== null; 
  }

  onLogout() {
    localStorage.removeItem('token');
  }

}
