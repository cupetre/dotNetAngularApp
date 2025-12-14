import { Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list';
import { AddPropertyComponent } from './property/add-property/add-property.component';

export const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
];
