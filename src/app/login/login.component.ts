import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);
  views = 0;
  form = this.formBuilder.nonNullable.group({
    name: [''],
    password: ['']
  });

  submit() {
    const credentials = this.form.getRawValue();
    this.http.post('/login', credentials, {withCredentials: true}).pipe(take(1)).subscribe();
  }

  getCurrentView() {
    this.http.post<{
      views: number
    }>('/view', {views: this.views}, {withCredentials: true}).pipe(take(1)).subscribe(
      response => this.views = response.views
    );
  }
}
