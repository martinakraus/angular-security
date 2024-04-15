import { Component } from '@angular/core';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [],
  template: '<button class="button_login" (click)="loginWithRedirect()">Log in</button>',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {
  loginWithRedirect() {
    // ToDo implement login
  }
}
