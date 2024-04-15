import { Component, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss'
})
export class ProtectedComponent {
  response!: any;
  private httpClient = inject(HttpClient);

  sendRequest() {
    this.httpClient.get('http://localhost:3001/api/external').pipe(take(1)).subscribe(
      res => this.response = res
    )
  }
}
