import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { HousingService } from './services/housing.service';
import { UserServiceService } from './services/user-service.service';
import { JwtInterceptor } from './services/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(),
    provideRouter(routes), 
    HousingService,
    UserServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
};