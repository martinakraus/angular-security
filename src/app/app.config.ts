import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from "@auth0/auth0-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXsrfConfiguration({})),
    provideRouter(routes, withComponentInputBinding()),
    provideAuth0({
      domain: 'dev-codekittey.eu.auth0.com',
      clientId: 'PqrUSlrGpMGqBFK9NbjHWZBej8yV8oNY',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
