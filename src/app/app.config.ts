import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { authHttpInterceptorFn, provideAuth0 } from "@auth0/auth0-angular";

const apiUri = 'http://localhost:3001';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withXsrfConfiguration({})),
    provideRouter(routes, withComponentInputBinding()),
    provideAuth0({
      domain: '',
      clientId: '',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
