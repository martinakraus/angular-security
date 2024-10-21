import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXsrfConfiguration({ headerName: 'x-csrf-token' })),
    provideRouter(routes, withComponentInputBinding())
  ]
};
