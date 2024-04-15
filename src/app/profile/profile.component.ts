import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileJson: string = '';
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }
}
