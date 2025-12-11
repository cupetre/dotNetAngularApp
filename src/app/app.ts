import { Component, signal } from '@angular/core';
import { PropertyListComponent } from './property-list/property-list';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,  // <--- root also standalone
  imports: [PropertyListComponent, NavBarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('first-dotnet-app');
}
