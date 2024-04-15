import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { isUserAuthenticatedGuardFn } from './is-user-authenticated.guard';
import { ProfileComponent } from "./profile/profile.component";

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
    component: ProfileComponent
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book/book.routes').then(mod => mod.bookRoutes),
    canMatch: [isUserAuthenticatedGuardFn]
  }
];
