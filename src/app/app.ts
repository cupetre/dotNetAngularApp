import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from './property-list/property-list';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [PropertyCardComponent, PropertyListComponent, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('first-dotnet-app');
} 