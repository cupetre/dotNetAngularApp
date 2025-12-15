import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, RouterLinkActive]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
