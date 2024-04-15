import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { isUserAuthenticatedGuardFn } from './is-user-authenticated.guard';
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard, authGuardFn } from "@auth0/auth0-angular";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuardFn]
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book/book.routes').then(mod => mod.bookRoutes),
    canMatch: [authGuardFn]
  }
];
