import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginButtonComponent } from "../login/login-button/login-button.component";
import { AuthService } from "@auth0/auth0-angular";
import { AsyncPipe, NgIf } from "@angular/common";
import { LogoutButtonComponent } from "../login/logout-button/logout-button.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginButtonComponent, AsyncPipe, NgIf, LogoutButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public auth: AuthService = inject(AuthService);
}
