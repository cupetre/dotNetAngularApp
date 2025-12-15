import { Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

export const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: PropertyListComponent}, 
  { path: 'detail-property/:id', component: PropertyDetailComponent}
];
