import { Component, inject } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [],
  template: '<button class="button_login" (click)="auth.loginWithRedirect()">Log in</button>',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {
  public auth: AuthService = inject(AuthService);
}
