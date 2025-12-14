import { Component, signal } from '@angular/core';
import { PropertyListComponent } from './property-list/property-list';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    HttpClientModule,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('first-dotnet-app');
}