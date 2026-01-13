import { Component, signal } from '@angular/core';
import { PropertyListComponent } from './property-list/property-list';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from "./user/user-register/user-register/user-register.component";
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('first-dotnet-app');
}