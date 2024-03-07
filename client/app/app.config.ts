import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ParseService } from './parse.service';
import { AuthService } from './auth.service';
import { DisplayError } from './DisplayError';

function initializeApp(parseService: ParseService, authService: AuthService) {
  return () => {
    parseService.initialize();
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
      deps: [ParseService],
    },
  ],
};
