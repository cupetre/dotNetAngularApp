import { Component, signal } from '@angular/core';
import { PropertyListComponent } from './property-list/property-list';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient,  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PropertyListComponent, 
    NavBarComponent,
    ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('first-dotnet-app');
}
