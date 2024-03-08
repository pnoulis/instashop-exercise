import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { routes } from './app.routes';
import { ParseService } from './parse.service';
import { AuthService } from './auth.service';
import { DisplayError } from './DisplayError';
import { GoogleMapsService } from './google-maps.service';

function initializeApp(
  router: Router,
  parseService: ParseService,
  authService: AuthService,
  googleMapsService: GoogleMapsService,
) {
  return () => {
    parseService.initialize();
    googleMapsService.initialize();
    if (!authService.isLoggedIn()) {
      router.navigate(['/login']);
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: ErrorHandler,
      useClass: DisplayError,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [Router, ParseService, AuthService, GoogleMapsService],
    },
  ],
};
