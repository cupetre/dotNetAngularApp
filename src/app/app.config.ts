import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Add this import
import { routes } from './app.routes';
import { HousingService } from './services/housing.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Keep this
    provideHttpClient(), // Add this - THIS IS THE FIX
    provideRouter(routes), // Keep this,
    HousingService,
  ]
};