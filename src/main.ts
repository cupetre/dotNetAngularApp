import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app/app.routes';
import { PropertyListComponent } from './app/property-list/property-list';
import { AddPropertyComponent } from './app/property/add-property/add-property.component';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
];


bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ]
})
.catch((err) => console.error(err));