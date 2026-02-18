import { Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';

export const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: PropertyListComponent}, 
  { path: 'detail-property/:id', component: PropertyDetailComponent},
  { path: "user/login", component: UserLoginComponent},
  { path: "user/register", component: UserRegisterComponent},
  { path: "**" , component: PropertyListComponent} //sekogas stavaj go posledno 
]
