import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { AsyncPipe, NgIf } from "@angular/common";
import { take } from "rxjs";

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


    setInterval(() => {
      this.auth.getAccessTokenSilently({cacheMode: 'off'}).pipe(take(1)).subscribe(console.log)
    }, 10000)
  }
}
