import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  template: '<button (click)="logout()">Log in</button>',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent {
  logout() {
    // ToDo implement logout
  }
}
