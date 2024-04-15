import { Component, inject } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  template: '<button (click)="logout()">Logout</button>',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent {
  private auth = inject(AuthService);
  private doc = inject(DOCUMENT);

  logout() {
    this.auth.logout({logoutParams: {returnTo: this.doc.location.origin}});
  }
}
